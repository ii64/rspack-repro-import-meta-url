"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_components_SharedStorageMetadataView_test_ts"],{

/***/ "./src/panels/application/components/SharedStorageMetadataView.test.ts":
/*!*****************************************************************************!*\
  !*** ./src/panels/application/components/SharedStorageMetadataView.test.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/report_view/report_view.js */ "./src/ui/components/report_view/report_view.ts");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components.js */ "./src/panels/application/components/components.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_2__.RenderCoordinator.RenderCoordinator.instance();
function makeView(origin, metadata, resetBudget) {
    return new _components_js__WEBPACK_IMPORTED_MODULE_4__.SharedStorageMetadataView.SharedStorageMetadataView({
        getMetadata: async () => metadata,
        resetBudget: resetBudget || (async () => { }),
    }, origin);
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithLocale)('SharedStorageMetadataView', () => {
    it('renders with a title', async () => {
        const component = makeView('https://a.test', {
            creationTime: 10,
            length: 4,
            remainingBudget: 8.3,
            bytesUsed: 200,
        });
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        assert.isNotNull(component.shadowRoot);
        await coordinator.done();
        const report = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, 'devtools-report', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_3__.ReportView.Report);
        const { textContent } = report.shadowRoot.querySelector('.report-title');
        assert.strictEqual(textContent, 'Shared storage');
    });
    it('renders report keys and values', async () => {
        const component = makeView('https://a.test', {
            creationTime: 10,
            length: 4,
            remainingBudget: 8.3,
            bytesUsed: 200,
        });
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        assert.isNotNull(component.shadowRoot);
        await coordinator.done({ waitForWork: true });
        const keys = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getCleanTextContentFromElements)(component.shadowRoot, 'devtools-report-key');
        assert.deepEqual(keys, [
            'Origin',
            'Creation Time',
            'Number of Entries',
            'Number of Bytes Used',
            'Entropy Budget for Fenced Frames',
        ]);
        const values = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getCleanTextContentFromElements)(component.shadowRoot, 'devtools-report-value');
        assert.deepEqual(values, [
            'https://a.test',
            (new Date(10 * 1e3)).toLocaleString(),
            '4',
            '200',
            '8.3',
        ]);
    });
    it('renders default view when data is empty', async () => {
        const component = makeView('', {});
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        assert.isNotNull(component.shadowRoot);
        await coordinator.done({ waitForWork: true });
        const keys = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getCleanTextContentFromElements)(component.shadowRoot, 'devtools-report-key');
        assert.deepEqual(keys, [
            'Origin',
            'Creation Time',
            'Number of Entries',
            'Number of Bytes Used',
            'Entropy Budget for Fenced Frames',
        ]);
        const values = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getCleanTextContentFromElements)(component.shadowRoot, 'devtools-report-value');
        assert.deepEqual(values, [
            '',
            'Not yet created',
            '0',
            '0',
            '0',
        ]);
    });
    it('renders reset budget button', async () => {
        const resetBudgetHandlerSpy = sinon.spy();
        const component = makeView('https://a.test', {
            creationTime: 10,
            length: 4,
            remainingBudget: 8.3,
            bytesUsed: 200,
        }, resetBudgetHandlerSpy);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        await coordinator.done({ waitForWork: true });
        const resetButtonComponent = component.shadowRoot.querySelector('devtools-button');
        assert.instanceOf(resetButtonComponent, HTMLElement);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(resetButtonComponent);
        assert.isTrue(resetBudgetHandlerSpy.calledOnce);
    });
});


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