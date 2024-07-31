"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_dialogs_Dialog_test_ts"],{

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

/***/ "./src/ui/components/dialogs/Dialog.test.ts":
/*!**************************************************!*\
  !*** ./src/ui/components/dialogs/Dialog.test.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _dialogs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialogs.js */ "./src/ui/components/dialogs/dialogs.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 // eslint-disable-line rulesdir/es_modules_import


const coordinator = _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_2__.RenderCoordinator.RenderCoordinator.instance();
class DialogExampleWindowBoundsServiceFactory {
    constructor(boundingElement) {
        Object.defineProperty(this, "boundingElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: boundingElement
        });
    }
    getDevToolsBoundingElement() {
        return this.boundingElement;
    }
}
describe('Dialog', () => {
    describe('positioning', () => {
        let dialog;
        let container;
        let host;
        beforeEach(() => {
            dialog = new _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.Dialog();
            container = document.createElement('div');
            container.style.width = '500px';
            container.style.height = '500px';
            container.style.display = 'flex';
            container.style.alignItems = 'center';
            container.style.justifyContent = 'center';
            host = document.createElement('div');
            host.textContent = 'Hover me';
            host.style.width = '100px';
            host.style.height = '100px';
            dialog.position = _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DialogVerticalPosition.TOP;
            dialog.showConnector = true;
            dialog.origin = host;
        });
        it('places the Dialog hit area correctly', async () => {
            host.addEventListener('click', () => dialog.setDialogVisible(true));
            dialog.addEventListener('clickoutsidedialog', () => dialog.setDialogVisible(false));
            container.appendChild(host);
            container.appendChild(dialog);
            _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM(container);
            await coordinator.done();
            _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent(host);
            await coordinator.done();
            const hostBounds = host.getBoundingClientRect();
            const hitAreaBounds = dialog.getHitArea();
            // Make sure the hit area contains the host fully.
            assert.isAtMost(hitAreaBounds.top, hostBounds.top);
            assert.isAtLeast(hitAreaBounds.bottom, hostBounds.top + hostBounds.height);
            assert.isAtMost(hitAreaBounds.left, hostBounds.left);
            assert.isAtLeast(hitAreaBounds.right, hostBounds.left + hostBounds.width);
        });
        it('sets the automatic horizontal alignment correctly', async () => {
            // Create the container for the dialog and its origin (host).
            // This container will be set as the dialog's "window".
            // With the host in the left border of the window, the Dialog
            // should deploy from left to right (left horizontal alignment).
            container.style.display = 'block';
            host.style.position = 'relative';
            host.style.left = '0';
            const content = document.createElement('div');
            content.classList.add('dialog-content');
            content.style.padding = '0 1em';
            content.innerHTML = 'Hi';
            dialog.horizontalAlignment = _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DialogHorizontalAlignment.AUTO;
            dialog.showConnector = true;
            dialog.origin = host;
            // Set the dialog's "window" to be the container element we just created.
            dialog.windowBoundsService = new DialogExampleWindowBoundsServiceFactory(container);
            host.addEventListener('click', () => dialog.setDialogVisible(true));
            dialog.addEventListener('clickoutsidedialog', () => dialog.setDialogVisible(false));
            dialog.appendChild(content);
            container.appendChild(host);
            container.appendChild(dialog);
            _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM(container);
            await coordinator.done();
            // Open the dialog and check its position.
            _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent(host);
            await coordinator.done();
            // Test the dialog is deployed left to right, since this way there is more space.
            assert.strictEqual(dialog.bestHorizontalAlignment, _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DialogHorizontalAlignment.LEFT);
            // Close the dialog
            _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchKeyDownEvent(dialog, { key: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.ESCAPE_KEY, bubbles: true, composed: true });
            await coordinator.done();
            // With the host in the right border of the window, the Dialog
            // should deploy from right to left (left horizontal alignment).
            host.style.position = 'relative';
            host.style.left = '450px';
            await coordinator.done();
            // Open the dialog and check its position.
            _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent(host);
            await coordinator.done();
            // Test the dialog is deployed right to left.
            assert.strictEqual(dialog.bestHorizontalAlignment, _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DialogHorizontalAlignment.RIGHT);
        });
        it('sets the automatic vertical position correctly when it fits on top', async () => {
            // Create the container for the dialog and its origin (host), aligning
            // items to the bottom of the container. This container will be set as the
            // dialog's "window".
            // By default the dialog is placed at the bottom of its origin, but doing
            // so means it wouldn't fit in its window. Because if shown on top would
            // fit in its window it should be automatically positioned there.
            container.style.width = '150px';
            container.style.height = '300px';
            container.style.display = 'flex';
            container.style.alignItems = 'end';
            container.style.justifyContent = 'center';
            // The dialogs content dimensions exceed the viewport's
            const content = document.createElement('div');
            content.classList.add('dialog-content');
            content.style.padding = '0 1em';
            content.innerHTML = 'Hello, World<br/> I am <br/> a Dialog!';
            dialog.position = _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DialogVerticalPosition.AUTO;
            dialog.showConnector = true;
            dialog.origin = host;
            // Set the dialog's "window" to be the container element we just created.
            dialog.windowBoundsService = new DialogExampleWindowBoundsServiceFactory(container);
            host.addEventListener('click', () => dialog.setDialogVisible(true));
            dialog.addEventListener('clickoutsidedialog', () => dialog.setDialogVisible(false));
            dialog.appendChild(content);
            container.appendChild(host);
            container.appendChild(dialog);
            _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM(container);
            await coordinator.done();
            // Open the dialog and check its position.
            _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent(host);
            await coordinator.done();
            // Test the capped dimensions
            assert.strictEqual(dialog.bestVerticalPosition, _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DialogVerticalPosition.TOP);
        });
        it('sets the automatic vertical position correctly when it does not fit on top', async () => {
            // Create the container for the dialog and its origin (host), aligning
            // items to the bottom of the container. This container will be set as the
            // dialog's "window".
            // Because the dialog's full height cannot be fully fit at the
            // bottom or at the top it is positioned at the bottom and the
            // overflow made visible by scrolling.
            container.style.width = '150px';
            container.style.height = '80px';
            container.style.display = 'flex';
            container.style.alignItems = 'end';
            container.style.justifyContent = 'center';
            // The dialogs content dimensions exceed the viewport's
            const content = document.createElement('div');
            content.classList.add('dialog-content');
            content.style.padding = '0 1em';
            content.innerHTML = 'Hello, World<br/> I am <br/> a Dialog!';
            dialog.position = _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DialogVerticalPosition.AUTO;
            dialog.showConnector = true;
            dialog.origin = host;
            // Set the dialog's "window" to be the container element we just created.
            dialog.windowBoundsService = new DialogExampleWindowBoundsServiceFactory(container);
            host.addEventListener('click', () => dialog.setDialogVisible(true));
            dialog.addEventListener('clickoutsidedialog', () => dialog.setDialogVisible(false));
            dialog.appendChild(content);
            container.appendChild(host);
            container.appendChild(dialog);
            _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM(container);
            await coordinator.done();
            // Open the dialog and check its position.
            _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent(host);
            await coordinator.done();
            // Test the capped dimensions
            assert.strictEqual(dialog.bestVerticalPosition, _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DialogVerticalPosition.BOTTOM);
        });
        // Fails on bots https://crbug.com/1441801.
        it.skip('[crbug.com/1441801]: sets the max width and height correctly when the dialog\'s content dimensions exceed the viewport and the dialog is displayed as a modal', async () => {
            const devtoolsDialog = new _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.Dialog();
            const WINDOW_WIDTH = 500;
            // This container will be set as the dialog's "window", or the representation
            // of DevTools bounding element.
            container.style.width = `${WINDOW_WIDTH}px`;
            container.style.height = `${WINDOW_WIDTH}px`;
            const host = document.createElement('div');
            host.textContent = 'Hover me';
            host.style.width = '100px';
            const content = document.createElement('div');
            content.classList.add('dialog-content');
            content.style.width = '600px';
            content.style.height = '600px';
            content.innerHTML = 'Hello, World<br/> I am <br/> a Dialog!';
            devtoolsDialog.origin = _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.MODAL;
            // Set the dialog's "window" to be the container element we just created.
            devtoolsDialog.windowBoundsService = new DialogExampleWindowBoundsServiceFactory(container);
            host.addEventListener('click', () => devtoolsDialog.setDialogVisible(true));
            devtoolsDialog.addEventListener('clickoutsidedialog', () => devtoolsDialog.setDialogVisible(false));
            container.appendChild(host);
            container.appendChild(devtoolsDialog);
            _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM(container);
            await coordinator.done();
            devtoolsDialog.appendChild(content);
            // Open the dialog and check its position.
            _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent(host);
            await coordinator.done();
            const dialog = devtoolsDialog.shadowRoot?.querySelector('dialog');
            if (!dialog) {
                assert.fail('Dialog not found');
                return;
            }
            assert.strictEqual(dialog.clientWidth, WINDOW_WIDTH - _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DIALOG_PADDING_FROM_WINDOW + 2 * _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DIALOG_SIDE_PADDING);
            assert.strictEqual(dialog.clientHeight, WINDOW_WIDTH - _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DIALOG_PADDING_FROM_WINDOW + 2 * _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DIALOG_VERTICAL_PADDING);
        });
        describe('with an anchor and possible overflow', () => {
            const CONTAINER_WIDTH = 500;
            const HOST_OFFSET = 100;
            const HOST_HEIGHT = 100;
            const devtoolsDialog = new _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.Dialog();
            let host;
            let container;
            beforeEach(async () => {
                // This container will be set as the dialog's "window", or the representation
                // of DevTools bounding element.
                container = document.createElement('div');
                container.style.width = `${CONTAINER_WIDTH}px`;
                container.style.height = `${CONTAINER_WIDTH}px`;
                container.style.position = 'fixed';
                container.style.top = '0';
                container.style.left = '0';
                host = document.createElement('div');
                host.textContent = 'Click me';
                host.style.width = `${HOST_HEIGHT}px`;
                host.style.height = `${HOST_HEIGHT}px`;
                host.style.position = 'absolute';
                host.style.top = `${HOST_OFFSET}px`;
                host.style.left = `${HOST_OFFSET}px`;
                // The dialogs content dimensions exceed the container's
                const content = document.createElement('div');
                content.classList.add('dialog-content');
                content.style.width = '600px';
                content.style.height = '600px';
                content.innerHTML = 'Hello, World<br/> I am <br/> a Dialog!';
                devtoolsDialog.origin = host;
                devtoolsDialog.horizontalAlignment = _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DialogHorizontalAlignment.CENTER;
                // Set the dialog's "window" to be the container element we just created.
                devtoolsDialog.windowBoundsService = new DialogExampleWindowBoundsServiceFactory(container);
                host.addEventListener('click', () => devtoolsDialog.setDialogVisible(true));
                devtoolsDialog.addEventListener('clickoutsidedialog', () => devtoolsDialog.setDialogVisible(false));
                container.appendChild(host);
                container.appendChild(devtoolsDialog);
                _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM(container);
                await coordinator.done();
                devtoolsDialog.appendChild(content);
            });
            it('sets the max width and height correctly when the dialog\'s content dimensions exceed the viewport and the dialog is anchored to the left', async () => {
                devtoolsDialog.horizontalAlignment = _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DialogHorizontalAlignment.LEFT;
                // Open the dialog and check its position.
                _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent(host);
                await coordinator.done();
                const dialog = devtoolsDialog.shadowRoot?.querySelector('dialog');
                if (!dialog) {
                    assert.fail('Dialog not found');
                    return;
                }
                // Test the capped dimensions
                const { left: dialogLeft, width: dialogWidth } = dialog.getBoundingClientRect();
                const dialogLeftBorderLimitPosition = dialogWidth + dialogLeft + _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DIALOG_PADDING_FROM_WINDOW -
                    2 * _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DIALOG_SIDE_PADDING;
                assert.strictEqual(dialogLeftBorderLimitPosition, CONTAINER_WIDTH);
                assert.strictEqual(dialog.clientHeight, CONTAINER_WIDTH - _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.CONNECTOR_HEIGHT - HOST_HEIGHT - HOST_OFFSET +
                    2 * _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DIALOG_VERTICAL_PADDING);
            });
            it('sets the max width and height correctly when the dialog\'s content dimensions exceed the viewport and the dialog is anchored to the right', async () => {
                devtoolsDialog.horizontalAlignment = _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DialogHorizontalAlignment.RIGHT;
                await coordinator.done();
                // Open the dialog and check its position.
                _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent(host);
                await coordinator.done();
                const dialog = devtoolsDialog.shadowRoot?.querySelector('dialog');
                if (!dialog) {
                    assert.fail('Dialog not found');
                    return;
                }
                // Test the capped dimensions
                const dialogRight = host.getBoundingClientRect().right;
                const containerLeft = container.getBoundingClientRect().left;
                assert.strictEqual(dialog.clientWidth, (dialogRight - containerLeft) - _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DIALOG_PADDING_FROM_WINDOW +
                    2 * _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DIALOG_SIDE_PADDING);
            });
            it('sets the dialog\'s horizontal position correctly to prevent overlap with DevTools when alinged to the left.', async () => {
                devtoolsDialog.horizontalAlignment = _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DialogHorizontalAlignment.LEFT;
                host.style.left = '-10px';
                await coordinator.done();
                // Open the dialog and check its position.
                _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent(host);
                await coordinator.done();
                const dialog = devtoolsDialog.shadowRoot?.querySelector('dialog');
                if (!dialog) {
                    assert.fail('Dialog not found');
                    return;
                }
                // Test the capped dimensions
                const dialogLeft = dialog.getBoundingClientRect().left;
                const containerLeft = container.getBoundingClientRect().left;
                assert.isAtLeast(dialogLeft, containerLeft);
            });
            it('sets the dialog\'s horizontal position correctly to prevent overlap with DevTools when alinged to the right.', async () => {
                devtoolsDialog.horizontalAlignment = _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DialogHorizontalAlignment.RIGHT;
                const containerWidth = container.clientWidth;
                host.style.left = `${containerWidth + 10}px`;
                await coordinator.done();
                // Open the dialog and check its position.
                _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent(host);
                await coordinator.done();
                const dialog = devtoolsDialog.shadowRoot?.querySelector('dialog');
                if (!dialog) {
                    assert.fail('Dialog not found');
                    return;
                }
                // Test the capped dimensions
                const dialogRight = dialog.getBoundingClientRect().right;
                const dialogRightEdgePosition = dialogRight - 2 * _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DIALOG_SIDE_PADDING - _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DIALOG_PADDING_FROM_WINDOW / 2;
                assert.isAtMost(dialogRightEdgePosition, containerWidth);
            });
            it('sets the dialog\'s horizontal position correctly to prevent overlapping with DevTools on the right when alinged to the center.', async () => {
                const containerWidth = container.clientWidth;
                host.style.left = `${containerWidth + 260}px`;
                await coordinator.done();
                // Open the dialog and check its position.
                _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent(host);
                await coordinator.done();
                const dialog = devtoolsDialog.shadowRoot?.querySelector('dialog');
                if (!dialog) {
                    assert.fail('Dialog not found');
                    return;
                }
                // Test the capped dimensions
                const dialogRight = dialog.getBoundingClientRect().right;
                const dialogRightEdgePosition = dialogRight - 2 * _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DIALOG_SIDE_PADDING - _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DIALOG_PADDING_FROM_WINDOW / 2;
                assert.isAtMost(dialogRightEdgePosition, containerWidth);
            });
            it('sets the dialog\'s horizontal position correctly to prevent overlapping with DevTools on the left when alinged to the center.', async () => {
                host.style.left = '-260px';
                await coordinator.done();
                // Open the dialog and check its position.
                _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent(host);
                await coordinator.done();
                const dialog = devtoolsDialog.shadowRoot?.querySelector('dialog');
                if (!dialog) {
                    assert.fail('Dialog not found');
                    return;
                }
                // Test the capped dimensions
                const containerLeft = container.getBoundingClientRect().left;
                const dialogLeft = dialog.getBoundingClientRect().left;
                assert.isAtLeast(dialogLeft, containerLeft);
            });
        });
        it('updates the dialog client rect automatically when its dimensions change', async function () {
            host.addEventListener('click', () => dialog.setDialogVisible(true));
            const dialogContent = document.createElement('div');
            dialogContent.style.display = 'block';
            dialogContent.style.minWidth = '10px';
            dialogContent.style.minHeight = '10px';
            dialogContent.style.fontSize = '10px';
            dialogContent.innerText = 'Hello';
            dialog.append(dialogContent);
            container.appendChild(host);
            container.appendChild(dialog);
            _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM(container);
            await coordinator.done();
            _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent(host);
            await coordinator.done();
            const initialWidth = dialog.getDialogBounds().width;
            const initialHeight = dialog.getDialogBounds().height;
            // Increase the font size to increase the dialog's dimensions
            dialogContent.style.fontSize = '200px';
            // Wait for the resize handling to take effect.
            await new Promise(res => setTimeout(res, 200));
            const finalWidth = dialog.getDialogBounds().width;
            const finalHeight = dialog.getDialogBounds().height;
            assert.isAbove(finalWidth, initialWidth);
            assert.isAbove(finalHeight, initialHeight);
        });
    });
    describe('closing the dialog with the ESC key', () => {
        let devtoolsDialog;
        beforeEach(async () => {
            devtoolsDialog = new _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.Dialog();
            const container = document.createElement('div');
            const host = document.createElement('div');
            const content = document.createElement('div');
            content.innerHTML = 'Hello, World<br/> I am <br/> a Dialog!';
            devtoolsDialog.origin = host;
            host.addEventListener('click', () => devtoolsDialog.setDialogVisible(true));
            devtoolsDialog.addEventListener('clickoutsidedialog', () => devtoolsDialog.setDialogVisible(false));
            container.appendChild(host);
            container.appendChild(devtoolsDialog);
            _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM(container);
            await coordinator.done();
            devtoolsDialog.appendChild(content);
            // Open the dialog.
            _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent(host);
            await coordinator.done();
        });
        it('closes the dialog by default when the ESC key is pressed', async () => {
            let dialog = devtoolsDialog.shadowRoot?.querySelector('dialog[open]');
            if (!dialog) {
                assert.fail('Dialog not found');
                return;
            }
            _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchKeyDownEvent(dialog, { key: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.ESCAPE_KEY, bubbles: true, composed: true });
            await coordinator.done();
            dialog = devtoolsDialog.shadowRoot?.querySelector('dialog[open]');
            if (dialog) {
                assert.fail('Dialog did not close');
                return;
            }
        });
        it('closes the dialog by default when the ESC key is pressed from document.body', async () => {
            let dialog = devtoolsDialog.shadowRoot?.querySelector('dialog[open]');
            if (!dialog) {
                assert.fail('Dialog not found');
                return;
            }
            _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchKeyDownEvent(document.body, { key: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.ESCAPE_KEY, bubbles: true, composed: true });
            await coordinator.done();
            dialog = devtoolsDialog.shadowRoot?.querySelector('dialog[open]');
            if (dialog) {
                assert.fail('Dialog did not close');
                return;
            }
        });
        it('closes the dialog by default when the ESC key is pressed anywhere within the devtools bounding element', async () => {
            let dialog = devtoolsDialog.shadowRoot?.querySelector('dialog[open]');
            if (!dialog) {
                assert.fail('Dialog not found');
                return;
            }
            const boundingElement = devtoolsDialog.windowBoundsService.getDevToolsBoundingElement();
            _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchKeyDownEvent(boundingElement, { key: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.ESCAPE_KEY, bubbles: true, composed: true });
            await coordinator.done();
            dialog = devtoolsDialog.shadowRoot?.querySelector('dialog[open]');
            if (dialog) {
                assert.fail('Dialog did not close');
                return;
            }
        });
        it('does not close the dialog when the ESC key is pressed if the closeOnESC prop is set to false', async () => {
            let dialog = devtoolsDialog.shadowRoot?.querySelector('dialog[open]');
            devtoolsDialog.closeOnESC = false;
            if (!dialog) {
                assert.fail('Dialog not found');
                return;
            }
            _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchKeyDownEvent(dialog, { key: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.ESCAPE_KEY });
            await coordinator.done();
            dialog = devtoolsDialog.shadowRoot?.querySelector('dialog[open]');
            if (!dialog) {
                assert.fail('Dialog was closed');
                return;
            }
        });
    });
});


/***/ })

}]);