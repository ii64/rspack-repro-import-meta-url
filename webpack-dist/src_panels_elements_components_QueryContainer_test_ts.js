"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_components_QueryContainer_test_ts"],{

/***/ "./src/panels/elements/components/QueryContainer.test.ts":
/*!***************************************************************!*\
  !*** ./src/panels/elements/components/QueryContainer.test.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _ui_components_node_text_node_text_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/node_text/node_text.js */ "./src/ui/components/node_text/node_text.ts");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components.js */ "./src/panels/elements/components/components.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




const nodeAttributes = new Map([
    ['id', 'container'],
    ['class', 'class-1 class-2'],
]);
const FAKE_LEGACY_SDK_DOM_NODE = {};
const containerTemplate = {
    parentNode: null,
    nodeType: Node.ELEMENT_NODE,
    id: 1,
    pseudoType: '',
    shadowRootType: '',
    nodeName: 'body',
    nodeNameNicelyCased: 'body',
    legacyDomNode: FAKE_LEGACY_SDK_DOM_NODE,
    highlightNode: () => { },
    clearHighlight: () => { },
    getAttribute: x => nodeAttributes.get(x) || '',
};
const assertContainerContent = (container, expectedContent) => {
    const nodeText = container.shadowRoot.querySelector(`${_ui_components_node_text_node_text_js__WEBPACK_IMPORTED_MODULE_2__.NodeText.NodeText.litTagName.value}`);
    if (!nodeText || !nodeText.shadowRoot) {
        assert.fail('node text element and its shadowRoot should exist');
        return;
    }
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertNodeTextContent)(nodeText, expectedContent);
};
describe('QueryContainer', () => {
    it('renders an unnamed query container correctly', () => {
        const component = new _components_js__WEBPACK_IMPORTED_MODULE_3__.QueryContainer.QueryContainer();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
        const clickListener = sinon.spy();
        component.data = {
            container: containerTemplate,
            onContainerLinkClick: clickListener,
        };
        assertContainerContent(component, 'body#container.class-1.class-2');
        component.shadowRoot?.querySelector('a')?.click();
        assert.strictEqual(clickListener.callCount, 1, 'container link click listener should be triggered by clicking');
    });
    it('renders a named query container correctly', () => {
        const component = new _components_js__WEBPACK_IMPORTED_MODULE_3__.QueryContainer.QueryContainer();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
        const clickListener = sinon.spy();
        const onHighlightNode = sinon.spy();
        const onClearHighlight = sinon.spy();
        component.data = {
            container: {
                ...containerTemplate,
                highlightNode: onHighlightNode,
                clearHighlight: onClearHighlight,
            },
            queryName: 'named-container',
            onContainerLinkClick: clickListener,
        };
        assertContainerContent(component, 'named-container');
        const containerLink = component.shadowRoot?.querySelector('a');
        if (!containerLink) {
            assert.fail('container link element should exist');
            return;
        }
        containerLink.click();
        assert.strictEqual(clickListener.callCount, 1, 'container link click listener should be triggered by clicking');
        containerLink.dispatchEvent(new Event('mouseenter'));
        assert.strictEqual(onHighlightNode.callCount, 1, 'onHighlightNode callback should be triggered by mouseenter');
        containerLink.dispatchEvent(new Event('mouseleave'));
        assert.strictEqual(onHighlightNode.callCount, 1, 'onClearHighlight callback should be triggered by mouseleave');
    });
    it('dispatches QueriedSizeRequestedEvent when hovered correctly', () => {
        const component = new _components_js__WEBPACK_IMPORTED_MODULE_3__.QueryContainer.QueryContainer();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
        const queriedSizeRequestedListener = sinon.spy();
        component.data = {
            container: containerTemplate,
            onContainerLinkClick: () => { },
        };
        component.addEventListener('queriedsizerequested', queriedSizeRequestedListener);
        component.shadowRoot.querySelector('a')?.dispatchEvent(new Event('mouseenter'));
        assert.strictEqual(queriedSizeRequestedListener.callCount, 1, 'queried size requested listener should be triggered by hovering');
    });
    it('renders queried size details correctly', () => {
        const component = new _components_js__WEBPACK_IMPORTED_MODULE_3__.QueryContainer.QueryContainer();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
        component.data = {
            container: containerTemplate,
            onContainerLinkClick: () => { },
        };
        component.shadowRoot.querySelector('a')?.dispatchEvent(new Event('mouseenter'));
        component.updateContainerQueriedSizeDetails({
            physicalAxis: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSContainerQuery.PhysicalAxis.None,
            queryAxis: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSContainerQuery.QueryAxis.None,
            width: '500px',
            height: '300px',
        });
        const nonExistentDetailsElement = component.shadowRoot.querySelector('.queried-size-details');
        assert.strictEqual(nonExistentDetailsElement, null, 'query details without any axis should not be rendered');
        component.updateContainerQueriedSizeDetails({
            physicalAxis: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSContainerQuery.PhysicalAxis.Horizontal,
            queryAxis: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSContainerQuery.QueryAxis.Inline,
            width: '500px',
        });
        const detailsElement = component.shadowRoot.querySelector('.queried-size-details');
        assert.strictEqual(detailsElement?.innerText, '(inline-size) 500px', 'queried size details are not correct');
        component.updateContainerQueriedSizeDetails({
            physicalAxis: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSContainerQuery.PhysicalAxis.Horizontal,
            queryAxis: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSContainerQuery.QueryAxis.Block,
            width: '200px',
        });
        assert.strictEqual(detailsElement?.innerText, '(block-size) 200px', 'queried size details are not correct');
        component.updateContainerQueriedSizeDetails({
            physicalAxis: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSContainerQuery.PhysicalAxis.Both,
            queryAxis: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSContainerQuery.QueryAxis.Both,
            width: '500px',
            height: '300px',
        });
        assert.strictEqual(detailsElement?.innerText, '(size) width: 500px height: 300px', 'queried size details are not correct');
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