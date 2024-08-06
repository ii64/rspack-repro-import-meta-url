"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_issue_counter_IssueLinkIcon_test_js"],{

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

/***/ "./ui/components/issue_counter/IssueLinkIcon.test.js":
/*!***********************************************************!*\
  !*** ./ui/components/issue_counter/IssueLinkIcon.test.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractElements: () => (/* binding */ extractElements)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _issue_counter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./issue_counter.js */ "./ui/components/issue_counter/issue_counter.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







const coordinator = _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__.RenderCoordinator.RenderCoordinator.instance();
const renderIssueLinkIcon = async (data) => {
    const component = new _issue_counter_js__WEBPACK_IMPORTED_MODULE_6__.IssueLinkIcon.IssueLinkIcon();
    component.data = data;
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
    assert.isNotNull(component.shadowRoot);
    await coordinator.done();
    return { component, shadowRoot: component.shadowRoot };
};
const extractElements = (shadowRoot) => {
    const icon = shadowRoot.querySelector('devtools-icon');
    assert.instanceOf(icon, _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon);
    const button = shadowRoot.querySelector('button');
    assert.instanceOf(button, HTMLButtonElement);
    return { icon, button };
};
class MockIssueResolver {
    #promiseMap = new Map();
    waitFor(issueId) {
        if (!issueId) {
            if (this.#promiseMap.size !== 1) {
                throw new Error('more than one issue being awaited, specify a issue id');
            }
            issueId = this.#promiseMap.keys().next().value;
        }
        issueId = issueId || '';
        const entry = this.#promiseMap.get(issueId);
        if (entry) {
            return entry.promise;
        }
        let resolve = () => { };
        const promise = new Promise(r => {
            resolve = r;
        });
        this.#promiseMap.set(issueId, { resolve, promise });
        return promise;
    }
    resolve(result, issueId) {
        if (!issueId && this.#promiseMap.size === 1) {
            issueId = this.#promiseMap.keys().next().value;
        }
        issueId = issueId || result?.getIssueId() || '';
        const entry = this.#promiseMap.get(issueId);
        if (!entry) {
            throw new Error('resolve uninitialized');
        }
        entry.resolve(result);
        this.#promiseMap.delete(issueId);
    }
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithLocale)('IssueLinkIcon', () => {
    const issueId = 'issue1';
    const mockIssue = {
        getKind() {
            return "PageError" /* IssuesManager.Issue.IssueKind.PageError */;
        },
        getIssueId() {
            return issueId;
        },
        getDescription() {
            return null;
        },
    };
    describe('with simple issues', () => {
        const failingIssueResolver = {
            async waitFor() {
                throw new Error('Couldn\'t resolve');
            },
        };
        it('renders correctly without an issue', async () => {
            const { shadowRoot } = await renderIssueLinkIcon({
                issueId,
                issueResolver: failingIssueResolver,
            });
            const { icon } = extractElements(shadowRoot);
            assert.strictEqual(icon.name, 'issue-questionmark-filled');
        });
        it('renders correctly with a "page error" issue', async () => {
            const { shadowRoot } = await renderIssueLinkIcon({
                issue: mockIssue,
            });
            const { icon } = extractElements(shadowRoot);
            assert.strictEqual(icon.name, 'issue-cross-filled');
        });
        it('the style reacts to the presence of the issue', async () => {
            const { shadowRoot } = await renderIssueLinkIcon({
                issue: mockIssue,
            });
            const { button } = extractElements(shadowRoot);
            assert.isTrue(button.classList.contains('link'));
        });
        it('the style reacts to the absence of an issue', async () => {
            const { shadowRoot } = await renderIssueLinkIcon({
                issueId,
                issueResolver: failingIssueResolver,
            });
            const { button } = extractElements(shadowRoot);
            assert.isFalse(button.classList.contains('link'));
        });
    });
    describe('transitions upon issue resolution', () => {
        it('to change the style correctly', async () => {
            const resolver = new MockIssueResolver();
            const { shadowRoot } = await renderIssueLinkIcon({
                issueId,
                issueResolver: resolver,
            });
            resolver.resolve(mockIssue);
            await coordinator.done({ waitForWork: true });
            assert.isTrue(extractElements(shadowRoot).button.classList.contains('link'));
        });
        it('handles multiple data assignments', async () => {
            const { shadowRoot, component } = await renderIssueLinkIcon({
                issue: mockIssue,
            });
            const mockIssue2 = {
                getKind() {
                    return "BreakingChange" /* IssuesManager.Issue.IssueKind.BreakingChange */;
                },
            };
            component.data = {
                issue: mockIssue2,
            };
            await coordinator.done({ waitForWork: true });
            const { icon } = extractElements(shadowRoot);
            assert.strictEqual(icon.name, 'issue-exclamation-filled');
        });
    });
    describe('handles clicks correctly', () => {
        it('if the button is clicked', async () => {
            const revealOverride = sinon.fake(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal);
            const { shadowRoot } = await renderIssueLinkIcon({
                issue: mockIssue,
                revealOverride,
            });
            const { button } = extractElements(shadowRoot);
            button.click();
            assert.isTrue(revealOverride.called);
        });
    });
});
//# sourceMappingURL=IssueLinkIcon.test.js.map

/***/ })

}]);