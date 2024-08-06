"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_components_ElementsBreadcrumbs_test_js"],{

/***/ "./panels/elements/components/ElementsBreadcrumbs.test.js":
/*!****************************************************************!*\
  !*** ./panels/elements/components/ElementsBreadcrumbs.test.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/MutationHelpers.js */ "./testing/MutationHelpers.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components.js */ "./panels/elements/components/components.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_3__.RenderCoordinator.RenderCoordinator.instance();
/*
 * This very clearly is not a real legacy SDK DOMNode, but for the purposes of
 * the test we just need something that presents as one, and doesn't need to
 * implement anything */
const FAKE_LEGACY_SDK_DOM_NODE = {};
const makeCrumb = (overrides = {}) => {
    const attributes = overrides.attributes || {};
    const newCrumb = {
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
        getAttribute: x => attributes[x] || '',
        ...overrides,
    };
    return newCrumb;
};
describe('ElementsBreadcrumbs', () => {
    before(async () => {
        await (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.initializeGlobalVars)();
    });
    after(async () => {
        await (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.deinitializeGlobalVars)();
    });
    describe('#determineElementTitle', () => {
        it('returns (text) for text nodes', () => {
            const node = makeCrumb({ nodeType: Node.TEXT_NODE });
            const title = _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbsUtils.determineElementTitle(node);
            assert.deepEqual(title, {
                main: '(text)',
                extras: {},
            });
        });
        it('returns <!--> for comments', () => {
            const node = makeCrumb({ nodeType: Node.COMMENT_NODE });
            const title = _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbsUtils.determineElementTitle(node);
            assert.deepEqual(title, { main: '<!-->', extras: {} });
        });
        it('returns <!doctype> for doctypes', () => {
            const node = makeCrumb({ nodeType: Node.DOCUMENT_TYPE_NODE });
            const title = _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbsUtils.determineElementTitle(node);
            assert.deepEqual(title, { main: '<!doctype>', extras: {} });
        });
        describe('for DOCUMENT_FRAGMENT_NODE types', () => {
            it('shows the shadowRoot if the document is a shadowRootType', () => {
                const node = makeCrumb({
                    nodeType: Node.DOCUMENT_FRAGMENT_NODE,
                    shadowRootType: 'shadowRoot',
                    nodeNameNicelyCased: 'test-elem',
                });
                const title = _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbsUtils.determineElementTitle(node);
                assert.deepEqual(title, { main: '#shadow-root', extras: {} });
            });
            it('shows the nice name if there is not a shadow root', () => {
                const node = makeCrumb({
                    nodeType: Node.DOCUMENT_FRAGMENT_NODE,
                    shadowRootType: undefined,
                    nodeNameNicelyCased: 'test-elem',
                });
                const title = _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbsUtils.determineElementTitle(node);
                assert.deepEqual(title, { main: 'test-elem', extras: {} });
            });
        });
        describe('for element nodes', () => {
            it('takes the nicely cased node name by default', () => {
                const node = makeCrumb({ nodeType: Node.ELEMENT_NODE, nodeNameNicelyCased: 'div' });
                const title = _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbsUtils.determineElementTitle(node);
                assert.deepEqual(title, { main: 'div', extras: {} });
            });
            it('uses the pseudoType if that is passed', () => {
                const node = makeCrumb({ nodeType: Node.ELEMENT_NODE, pseudoType: 'test' });
                const title = _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbsUtils.determineElementTitle(node);
                assert.deepEqual(title, { main: '::test', extras: {} });
            });
            it('adds the ID as an extra if present', () => {
                const node = makeCrumb({ nodeType: Node.ELEMENT_NODE, nodeNameNicelyCased: 'div', attributes: { id: 'test' } });
                const title = _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbsUtils.determineElementTitle(node);
                assert.deepEqual(title, {
                    main: 'div',
                    extras: {
                        id: 'test',
                    },
                });
            });
            it('adds classes as extras if present', () => {
                const node = makeCrumb({
                    nodeType: Node.ELEMENT_NODE,
                    nodeNameNicelyCased: 'div',
                    attributes: { class: 'class1 class2' },
                });
                const title = _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbsUtils.determineElementTitle(node);
                assert.deepEqual(title, {
                    main: 'div',
                    extras: {
                        classes: ['class1', 'class2'],
                    },
                });
            });
        });
        it('falls back to the nicely cased name if the node is any other type', () => {
            const node = makeCrumb({
                nodeType: Node.CDATA_SECTION_NODE,
                nodeNameNicelyCased: 'not-special-cased-node-type',
            });
            const title = _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbsUtils.determineElementTitle(node);
            assert.deepEqual(title, {
                main: 'not-special-cased-node-type',
                extras: {},
            });
        });
    });
    describe('crumbsToRender', () => {
        it('returns an empty array when there is no selected node', () => {
            const result = _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbsUtils.crumbsToRender([], null);
            assert.deepEqual(result, []);
        });
        it('excludes the document node', () => {
            const documentCrumb = makeCrumb({
                nodeType: Node.DOCUMENT_NODE,
                id: 1,
                nodeName: 'document',
                nodeNameNicelyCased: 'document',
            });
            const bodyCrumb = makeCrumb({
                nodeType: Node.ELEMENT_NODE,
                id: 2,
                nodeName: 'body',
                nodeNameNicelyCased: 'body',
            });
            const result = _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbsUtils.crumbsToRender([documentCrumb, bodyCrumb], bodyCrumb);
            assert.deepEqual(result, [
                {
                    title: {
                        main: 'body',
                        extras: {},
                    },
                    selected: true,
                    node: bodyCrumb,
                    originalNode: bodyCrumb.legacyDomNode,
                },
            ]);
        });
    });
    describe('rendering breadcrumbs', () => {
        async function renderBreadcrumbs(data) {
            const component = new _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbs.ElementsBreadcrumbs();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
            component.data = data;
            await coordinator.done();
            assert.isNotNull(component.shadowRoot);
            return {
                component,
                shadowRoot: component.shadowRoot,
            };
        }
        const bodyCrumb = makeCrumb({
            nodeType: Node.ELEMENT_NODE,
            id: 2,
            nodeName: 'body',
            nodeNameNicelyCased: 'body',
        });
        const divCrumb = makeCrumb({
            nodeType: Node.ELEMENT_NODE,
            id: 3,
            nodeName: 'div',
            nodeNameNicelyCased: 'div',
            attributes: {
                id: 'test-id',
            },
        });
        it('renders all the breadcrumbs provided', async () => {
            const { shadowRoot } = await renderBreadcrumbs({
                crumbs: [divCrumb, bodyCrumb],
                selectedNode: bodyCrumb,
            });
            const crumbs = Array.from(shadowRoot.querySelectorAll('[data-crumb]'));
            assert.lengthOf(crumbs, 2);
        });
        it('highlights the active breadcrumb', async () => {
            const { shadowRoot } = await renderBreadcrumbs({
                crumbs: [divCrumb, bodyCrumb],
                selectedNode: bodyCrumb,
            });
            const activeCrumbs = shadowRoot.querySelectorAll('.crumb.selected');
            assert.lengthOf(activeCrumbs, 1);
        });
        it('updates the text if a crumb\'s title changes', async () => {
            const { component, shadowRoot } = await renderBreadcrumbs({
                crumbs: [divCrumb, bodyCrumb],
                selectedNode: bodyCrumb,
            });
            await (0,_testing_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__.withNoMutations)(shadowRoot, async (shadowRoot) => {
                const newDiv = { ...divCrumb, nodeName: 'span', nodeNameNicelyCased: 'span' };
                component.data = {
                    crumbs: [newDiv, bodyCrumb],
                    selectedNode: bodyCrumb,
                };
                await coordinator.done();
                const renderedTextForUpdatedCrumb = shadowRoot.querySelector('.crumb:last-child devtools-node-text');
                assert.instanceOf(renderedTextForUpdatedCrumb, HTMLElement);
                assert.strictEqual(renderedTextForUpdatedCrumb.dataset.nodeTitle, 'span');
            });
        });
        describe('when the breadcrumbs overflow', () => {
            const bodyCrumb = makeCrumb({
                nodeType: Node.ELEMENT_NODE,
                id: 2,
                nodeName: 'body',
                nodeNameNicelyCased: 'body',
                attributes: {
                    class: 'test-class-1 test-class-2 test-class-3',
                },
            });
            const divCrumb = makeCrumb({
                nodeType: Node.ELEMENT_NODE,
                id: 3,
                nodeName: 'div',
                nodeNameNicelyCased: 'div',
                attributes: {
                    id: 'test-id-with-a-really-long-name',
                },
            });
            it('shows the scrolling icons if the crumbs do not fit in their container', async () => {
                const thinWrapper = document.createElement('div');
                thinWrapper.style.width = '400px';
                const component = new _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbs.ElementsBreadcrumbs();
                thinWrapper.appendChild(component);
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(thinWrapper);
                component.data = {
                    crumbs: [divCrumb, bodyCrumb],
                    selectedNode: bodyCrumb,
                };
                await coordinator.done();
                assert.isNotNull(component.shadowRoot);
                const scrollButtons = component.shadowRoot.querySelectorAll('button.overflow');
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.assertElements)(scrollButtons, HTMLButtonElement);
                assert.strictEqual(scrollButtons.length, 2, 'there are two scroll buttons');
                const leftButton = scrollButtons[0];
                const rightButton = scrollButtons[1];
                assert.isTrue(leftButton.disabled);
                assert.isFalse(rightButton.disabled);
            });
            it('disables the right button once the user has scrolled to the end', async () => {
                const thinWrapper = document.createElement('div');
                thinWrapper.style.width = '400px';
                const component = new _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbs.ElementsBreadcrumbs();
                thinWrapper.appendChild(component);
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(thinWrapper);
                component.data = {
                    crumbs: [divCrumb, bodyCrumb],
                    selectedNode: bodyCrumb,
                };
                await coordinator.done();
                assert.isNotNull(component.shadowRoot);
                const rightButton = component.shadowRoot.querySelector('button.overflow.right');
                assert.instanceOf(rightButton, HTMLButtonElement);
                assert.isFalse(rightButton.disabled);
                await (0,_testing_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__.withNoMutations)(component.shadowRoot, async (shadowRoot) => {
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(rightButton);
                    const scrollWrapper = shadowRoot.querySelector('.crumbs-window');
                    assert.instanceOf(scrollWrapper, HTMLDivElement);
                    await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.waitForScrollLeft)(scrollWrapper, 100);
                    await coordinator.done();
                    assert.isTrue(rightButton.disabled);
                });
            });
            it('hides the overflow buttons should the user resize the window to be large enough', async () => {
                const thinWrapper = document.createElement('div');
                thinWrapper.style.width = '400px';
                const component = new _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbs.ElementsBreadcrumbs();
                thinWrapper.appendChild(component);
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(thinWrapper);
                component.data = {
                    crumbs: [divCrumb, bodyCrumb],
                    selectedNode: bodyCrumb,
                };
                await coordinator.done();
                assert.isNotNull(component.shadowRoot);
                const leftButton = component.shadowRoot.querySelector('button.overflow.left');
                assert.instanceOf(leftButton, HTMLButtonElement);
                const rightButton = component.shadowRoot.querySelector('button.overflow.right');
                assert.instanceOf(rightButton, HTMLButtonElement);
                assert.isFalse(leftButton.classList.contains('hidden'));
                assert.isFalse(rightButton.classList.contains('hidden'));
                thinWrapper.style.width = '800px';
                // Changing the width should trigger the resize observer, so we need to wait for that to happen.
                await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.doubleRaf)();
                await coordinator.done();
                assert.isTrue(leftButton.classList.contains('hidden'));
                assert.isTrue(rightButton.classList.contains('hidden'));
            });
            it('hides the overflow should the list of nodes change so the crumbs no longer overflow', async () => {
                const thinWrapper = document.createElement('div');
                thinWrapper.style.width = '400px';
                const component = new _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbs.ElementsBreadcrumbs();
                thinWrapper.appendChild(component);
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(thinWrapper);
                component.data = {
                    crumbs: [divCrumb, bodyCrumb],
                    selectedNode: bodyCrumb,
                };
                await coordinator.done();
                assert.isNotNull(component.shadowRoot);
                const leftButton = component.shadowRoot.querySelector('button.overflow.left');
                assert.instanceOf(leftButton, HTMLButtonElement);
                const rightButton = component.shadowRoot.querySelector('button.overflow.right');
                assert.instanceOf(rightButton, HTMLButtonElement);
                // Ensure the buttons are visible now
                assert.isFalse(leftButton.classList.contains('hidden'));
                assert.isFalse(rightButton.classList.contains('hidden'));
                component.data = {
                    crumbs: [bodyCrumb],
                    selectedNode: bodyCrumb,
                };
                await coordinator.done();
                // The buttons are hidden now the list is no longer overflowing
                assert.isTrue(leftButton.classList.contains('hidden'));
                assert.isTrue(rightButton.classList.contains('hidden'));
            });
            it('shows the overflow buttons should the user resize the window down to be small', async () => {
                const thinWrapper = document.createElement('div');
                thinWrapper.style.width = '800px';
                const component = new _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbs.ElementsBreadcrumbs();
                thinWrapper.appendChild(component);
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(thinWrapper);
                component.data = {
                    crumbs: [divCrumb, bodyCrumb],
                    selectedNode: bodyCrumb,
                };
                await coordinator.done();
                assert.isNotNull(component.shadowRoot);
                const leftButton = component.shadowRoot.querySelector('button.overflow.left');
                assert.instanceOf(leftButton, HTMLButtonElement);
                const rightButton = component.shadowRoot.querySelector('button.overflow.right');
                assert.instanceOf(rightButton, HTMLButtonElement);
                assert.isTrue(leftButton.classList.contains('hidden'));
                assert.isTrue(rightButton.classList.contains('hidden'));
                thinWrapper.style.width = '400px';
                // Give the resize observer time to fire.
                await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.doubleRaf)();
                await coordinator.done();
                assert.isFalse(leftButton.classList.contains('hidden'));
                assert.isFalse(rightButton.classList.contains('hidden'));
            });
        });
    });
});
//# sourceMappingURL=ElementsBreadcrumbs.test.js.map

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

/***/ "./testing/MutationHelpers.js":
/*!************************************!*\
  !*** ./testing/MutationHelpers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TEXT_NODE: () => (/* binding */ TEXT_NODE),
/* harmony export */   someMutations: () => (/* binding */ someMutations),
/* harmony export */   withMutations: () => (/* binding */ withMutations),
/* harmony export */   withNoMutations: () => (/* binding */ withNoMutations)
/* harmony export */ });
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const TEXT_NODE = 'TEXT_NODE';
const nodeShouldBeIgnored = (node) => {
    const isCommentNode = node.nodeType === Node.COMMENT_NODE;
    const isTextNode = node.nodeType === Node.TEXT_NODE;
    if (isCommentNode) {
        return true;
    }
    if (isTextNode) {
        // We ignore textNode changes where the trimmed text is empty - these are
        // most likely whitespace changes from LitHtml and not important.
        return (node.textContent || '').trim() === '';
    }
    return false;
};
const observedMutationsThatMatchExpected = (expectedMutation, observedMutations) => {
    const matching = [];
    for (const mutation of observedMutations) {
        if (expectedMutation.target === TEXT_NODE) {
            if (mutation.target === TEXT_NODE) {
                matching.push(mutation);
            }
        }
        else if (expectedMutation.target === mutation.target) {
            if (!expectedMutation.type) {
                matching.push(mutation);
            }
            else if (expectedMutation.type === mutation.type) {
                matching.push(mutation);
            }
        }
    }
    return matching;
};
const getMutationsForTagName = (trackedMutations, tagName) => {
    return trackedMutations.get(tagName) || { ADD: 0, REMOVE: 0, TEXT_UPDATE: 0 };
};
const getAllMutationCounts = (observedMutations) => {
    const trackedMutations = new Map();
    for (const mutation of observedMutations) {
        if (mutation.target === TEXT_NODE) {
            const mutationsForTagName = getMutationsForTagName(trackedMutations, TEXT_NODE);
            mutationsForTagName.TEXT_UPDATE++;
            trackedMutations.set(TEXT_NODE, mutationsForTagName);
        }
        const tagName = mutation.target;
        if (mutation.type === "ADD" /* MutationType.ADD */) {
            const mutationsForTagName = getMutationsForTagName(trackedMutations, tagName);
            mutationsForTagName.ADD++;
            trackedMutations.set(tagName, mutationsForTagName);
        }
        else if (mutation.type === "REMOVE" /* MutationType.REMOVE */) {
            const mutationsForTagName = getMutationsForTagName(trackedMutations, tagName);
            mutationsForTagName.REMOVE++;
            trackedMutations.set(tagName, mutationsForTagName);
        }
    }
    return trackedMutations;
};
const storeRelevantMutationEntries = (entries, storageArray) => {
    for (const entry of entries) {
        if (entry.type === 'characterData') {
            storageArray.push({
                target: TEXT_NODE,
                type: "TEXT_UPDATE" /* MutationType.TEXT_UPDATE */,
            });
        }
        for (const added of entry.addedNodes) {
            if (!nodeShouldBeIgnored(added)) {
                storageArray.push({
                    target: added.nodeName.toLowerCase(),
                    type: "ADD" /* MutationType.ADD */,
                });
            }
        }
        for (const removed of entry.removedNodes) {
            if (!nodeShouldBeIgnored(removed)) {
                storageArray.push({
                    target: removed.nodeName.toLowerCase(),
                    type: "REMOVE" /* MutationType.REMOVE */,
                });
            }
        }
    }
};
const generateOutputForMutationList = (observedMutations) => {
    const debugOutput = [];
    const mutationCounts = getAllMutationCounts(observedMutations);
    const allMutations = Array.from(mutationCounts.entries());
    for (const [elem, mutations] of allMutations) {
        const output = `${elem}: `;
        const mutationOutput = [];
        const addMutations = mutations.ADD;
        if (addMutations) {
            mutationOutput.push(`${addMutations} ${pluralize(addMutations, 'addition', 'additions')}`);
        }
        const removeMutations = mutations.REMOVE;
        if (removeMutations) {
            mutationOutput.push(`${removeMutations} ${pluralize(removeMutations, 'removal', 'removals')}`);
        }
        const updateMutations = mutations.TEXT_UPDATE;
        if (updateMutations) {
            mutationOutput.push(`${updateMutations} ${pluralize(updateMutations, 'update', 'updates')}`);
        }
        debugOutput.push(output + mutationOutput.join(', '));
    }
    return debugOutput.join('\n');
};
const errorMessageWhenExpectingNoMutations = (observedMutations) => {
    const debugOutput = generateOutputForMutationList(observedMutations);
    assert.fail(`Expected no mutations, but got ${observedMutations.length}: \n${debugOutput}`);
};
function pluralize(count, singular, plural) {
    return count === 1 ? singular : plural;
}
const DEFAULT_MAX_MUTATIONS_LIMIT = 10;
/**
 * Check that a given component causes the expected amount of mutations. Useful
 * when testing a component to ensure it's updating the DOM performantly and not
 * unnecessarily.
 */
const withMutations = async (expectedMutations, shadowRoot, functionToObserve) => {
    const observedMutations = [];
    const mutationObserver = new MutationObserver(entries => {
        storeRelevantMutationEntries(entries, observedMutations);
    });
    mutationObserver.observe(shadowRoot, {
        subtree: true,
        attributes: true,
        childList: true,
        characterData: true,
        characterDataOldValue: true,
    });
    await functionToObserve(shadowRoot);
    /* We takeRecords() here to flush any observed mutations that have been seen
    but not yet fed back into the callback we passed when we instantiated the
    observer. This ensures we've got every mutation before we disconnect the
    observer. */
    const records = mutationObserver.takeRecords();
    storeRelevantMutationEntries(records, observedMutations);
    mutationObserver.disconnect();
    if (expectedMutations.length === 0) {
        if (observedMutations.length !== 0) {
            errorMessageWhenExpectingNoMutations(observedMutations);
            return;
        }
    }
    const mutationsMatchedToExpected = new Set();
    for (const expectedMutation of expectedMutations) {
        // Gather all observed mutations that match the given expectation. e.g. if
        // the expected mutation is { target: 'div' } this will gather all observed
        // mutations with a target of `div`.
        const matchingMutations = observedMutationsThatMatchExpected(expectedMutation, observedMutations);
        for (const matched of matchingMutations) {
            mutationsMatchedToExpected.add(matched);
        }
        const amountOfMatchingMutations = matchingMutations.length;
        // Make sure we check for undefined, not truthyness, as the user could
        // supply a max of 0.
        const maxMutationsAllowed = expectedMutation.max === undefined ? DEFAULT_MAX_MUTATIONS_LIMIT : expectedMutation.max;
        if (amountOfMatchingMutations > maxMutationsAllowed) {
            assert.fail(`Expected no more than ${maxMutationsAllowed} mutations for ${expectedMutation.type || 'ADD/REMOVE'} ${expectedMutation.target}, but got ${amountOfMatchingMutations}`);
        }
        else if (amountOfMatchingMutations === 0 && maxMutationsAllowed > 0) {
            assert.fail(`Expected at least one mutation for ${expectedMutation.type || 'ADD/REMOVE'} ${expectedMutation.target}, but got ${amountOfMatchingMutations}`);
        }
    }
    // These are mutations that happened but the user did not explicitly list as
    // expected, so we want to fail the test on them.
    const unmatchedMutations = observedMutations.filter(mutation => !mutationsMatchedToExpected.has(mutation));
    if (unmatchedMutations.length > 0) {
        const unexpectedOutput = generateOutputForMutationList(unmatchedMutations);
        assert.fail(`Additional unexpected mutations were detected:\n${unexpectedOutput}`);
    }
};
/**
 * Ensure that a code block runs whilst making no mutations to the DOM. Given an
 * element and a callback, it will execute th e callback function and ensure
 * afterwards that a MutatonObserver saw no changes.
 */
const withNoMutations = async (element, fn) => {
    return await withMutations([], element, fn);
};
const someMutations = async (element) => {
    return new Promise(resolve => {
        const observer = new MutationObserver(() => {
            resolve();
            observer.disconnect();
        });
        observer.observe(element, { attributes: true, childList: true, subtree: true });
    });
};
//# sourceMappingURL=MutationHelpers.js.map

/***/ })

}]);