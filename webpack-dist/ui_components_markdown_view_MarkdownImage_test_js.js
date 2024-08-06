"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_markdown_view_MarkdownImage_test_js"],{

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

/***/ "./ui/components/markdown_view/MarkdownImage.test.js":
/*!***********************************************************!*\
  !*** ./ui/components/markdown_view/MarkdownImage.test.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */ var _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _markdown_view_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./markdown_view.js */ "./ui/components/markdown_view/markdown_view.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




const coordinator = _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_2__.RenderCoordinator.RenderCoordinator.instance();
describe('MarkdownImage', () => {
    const imageSource = 'Images/lighthouse_logo.svg';
    before(async () => {
        _markdown_view_js__WEBPACK_IMPORTED_MODULE_3__.MarkdownImagesMap.markdownImages.set('test-icon', {
            src: new URL(/* asset import */ __webpack_require__(/*! ../../../Images/review.svg */ "./Images/review.svg?267d"), __webpack_require__.b).toString(),
            width: '20px',
            height: '20px',
            isIcon: true,
        });
        _markdown_view_js__WEBPACK_IMPORTED_MODULE_3__.MarkdownImagesMap.markdownImages.set('test-image', {
            src: new URL(`../../../${imageSource}`, "file:///mnt/p0/Personal/rspack-repro-import-meta-url/src/ui/components/markdown_view/MarkdownImage.test.js").toString(),
            width: '100px',
            height: '100px',
            isIcon: false,
        });
    });
    it('renders icon correctly', async () => {
        const component = new _markdown_view_js__WEBPACK_IMPORTED_MODULE_3__.MarkdownImage.MarkdownImage();
        component.data = { key: 'test-icon', title: 'Test icon' };
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        await coordinator.done();
        assert.isNotNull(component.shadowRoot);
        const iconComponent = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, 'devtools-icon', _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon);
        assert.isNotNull(iconComponent);
        const boundingClient = iconComponent.getBoundingClientRect();
        assert.strictEqual(boundingClient.width, 20);
        assert.strictEqual(boundingClient.height, 20);
    });
    it('renders image correctly', () => {
        const component = new _markdown_view_js__WEBPACK_IMPORTED_MODULE_3__.MarkdownImage.MarkdownImage();
        const markdownImageTitle = 'Test image';
        const markdownImageKey = 'test-image';
        component.data = { key: markdownImageKey, title: markdownImageTitle };
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        assert.isNotNull(component.shadowRoot);
        const imageComponent = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, 'img', HTMLImageElement);
        assert.isNotNull(imageComponent);
        assert.include(imageComponent.src, imageSource);
        assert.strictEqual(imageComponent.alt, markdownImageTitle);
        assert.strictEqual(imageComponent.width, 100);
        assert.strictEqual(imageComponent.height, 100);
    });
});
//# sourceMappingURL=MarkdownImage.test.js.map

/***/ }),

/***/ "./ui/components/markdown_view/markdown_view.js":
/*!******************************************************!*\
  !*** ./ui/components/markdown_view/markdown_view.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodeBlock: () => (/* reexport module object */ _CodeBlock_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   MarkdownImage: () => (/* reexport module object */ _MarkdownImage_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   MarkdownImagesMap: () => (/* reexport module object */ _MarkdownImagesMap_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   MarkdownLink: () => (/* reexport module object */ _MarkdownLink_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   MarkdownLinksMap: () => (/* reexport module object */ _MarkdownLinksMap_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   MarkdownView: () => (/* reexport module object */ _MarkdownView_js__WEBPACK_IMPORTED_MODULE_5__)
/* harmony export */ });
/* harmony import */ var _CodeBlock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CodeBlock.js */ "./ui/components/markdown_view/CodeBlock.js");
/* harmony import */ var _MarkdownImage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarkdownImage.js */ "./ui/components/markdown_view/MarkdownImage.js");
/* harmony import */ var _MarkdownImagesMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MarkdownImagesMap.js */ "./ui/components/markdown_view/MarkdownImagesMap.js");
/* harmony import */ var _MarkdownLink_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MarkdownLink.js */ "./ui/components/markdown_view/MarkdownLink.js");
/* harmony import */ var _MarkdownLinksMap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MarkdownLinksMap.js */ "./ui/components/markdown_view/MarkdownLinksMap.js");
/* harmony import */ var _MarkdownView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MarkdownView.js */ "./ui/components/markdown_view/MarkdownView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







//# sourceMappingURL=markdown_view.js.map

/***/ })

}]);