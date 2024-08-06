"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_request_link_icon_RequestLinkIcon_test_js"],{

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

/***/ "./ui/components/request_link_icon/RequestLinkIcon.test.js":
/*!*****************************************************************!*\
  !*** ./ui/components/request_link_icon/RequestLinkIcon.test.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractElements: () => (/* binding */ extractElements)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../panels/network/forward/forward.js */ "./panels/network/forward/forward.js");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _request_link_icon_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./request_link_icon.js */ "./ui/components/request_link_icon/request_link_icon.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








const coordinator = _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__.RenderCoordinator.RenderCoordinator.instance();
const renderRequestLinkIcon = async (data) => {
    const component = new _request_link_icon_js__WEBPACK_IMPORTED_MODULE_7__.RequestLinkIcon.RequestLinkIcon();
    component.data = data;
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
    assert.isNotNull(component.shadowRoot);
    await coordinator.done();
    return { component, shadowRoot: component.shadowRoot };
};
const extractElements = (shadowRoot) => {
    const icon = shadowRoot.querySelector('devtools-icon');
    assert.instanceOf(icon, _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon);
    const button = shadowRoot.querySelector('button');
    assert.instanceOf(button, HTMLButtonElement);
    const label = shadowRoot.querySelector('button > span');
    if (label !== null) {
        assert.instanceOf(label, HTMLSpanElement);
    }
    return { icon, button, label };
};
class MockRequestResolver {
    #promiseMap = new Map();
    waitFor(requestId) {
        if (!requestId) {
            if (this.#promiseMap.size !== 1) {
                throw new Error('more than one request being awaited, specify a request id');
            }
            requestId = this.#promiseMap.keys().next().value;
        }
        requestId = requestId || '';
        const entry = this.#promiseMap.get(requestId);
        if (entry) {
            return entry.promise;
        }
        let resolve = () => { };
        const promise = new Promise(r => {
            resolve = r;
        });
        this.#promiseMap.set(requestId, { resolve, promise });
        return promise;
    }
    resolve(result, requestId) {
        if (!requestId && this.#promiseMap.size === 1) {
            requestId = this.#promiseMap.keys().next().value;
        }
        requestId = requestId || result?.requestId() || '';
        const entry = this.#promiseMap.get(requestId);
        if (!entry) {
            throw new Error('resolve uninitialized');
        }
        entry.resolve(result);
        this.#promiseMap.delete(requestId);
    }
    clear() {
        for (const { resolve } of this.#promiseMap.values()) {
            resolve(null);
        }
    }
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithEnvironment)('RequestLinkIcon', () => {
    const requestId1 = 'r1';
    const requestId2 = 'r2';
    describe('with simple requests', () => {
        const mockRequest = {
            url() {
                return 'http://foo.bar/baz';
            },
        };
        const mockRequestWithTrailingSlash = {
            url() {
                return 'http://foo.bar/baz/';
            },
        };
        const failingRequestResolver = {
            async waitFor() {
                throw new Error('Couldn\'t resolve');
            },
        };
        it('renders correctly without a request', async () => {
            const { shadowRoot } = await renderRequestLinkIcon({
                affectedRequest: { requestId: requestId1 },
                requestResolver: failingRequestResolver,
            });
            const { button, icon, label } = extractElements(shadowRoot);
            assert.isFalse(button.classList.contains('link'));
            assert.strictEqual(icon.name, 'arrow-up-down-circle');
            assert.isNull(label, 'Didn\'t expect a label');
        });
        it('renders correctly with a request', async () => {
            const { shadowRoot } = await renderRequestLinkIcon({
                request: mockRequest,
            });
            const { button, icon, label } = extractElements(shadowRoot);
            assert.isTrue(button.classList.contains('link'));
            assert.strictEqual(icon.name, 'arrow-up-down-circle');
            assert.isNull(label, 'Didn\'t expect a label');
        });
        it('renders the request label correctly without a trailing slash', async () => {
            const { shadowRoot } = await renderRequestLinkIcon({
                request: mockRequest,
                displayURL: true,
            });
            const { label } = extractElements(shadowRoot);
            assert.strictEqual(label?.textContent, 'baz');
        });
        it('renders the request label correctly with a trailing slash', async () => {
            const { shadowRoot } = await renderRequestLinkIcon({
                request: mockRequestWithTrailingSlash,
                displayURL: true,
            });
            const { label } = extractElements(shadowRoot);
            assert.strictEqual(label?.textContent, 'baz/');
        });
        it('renders the request label correctly without a request', async () => {
            const { shadowRoot } = await renderRequestLinkIcon({
                affectedRequest: { requestId: requestId1, url: 'https://alpha.beta/gamma' },
                requestResolver: failingRequestResolver,
                displayURL: true,
            });
            const { label } = extractElements(shadowRoot);
            assert.strictEqual(label?.textContent, 'gamma');
        });
        it('renders alternative text for URL', async () => {
            const { shadowRoot } = await renderRequestLinkIcon({
                affectedRequest: { requestId: requestId1, url: 'https://alpha.beta/gamma' },
                requestResolver: failingRequestResolver,
                displayURL: true,
                urlToDisplay: 'https://alpha.beta/gamma',
            });
            const { label } = extractElements(shadowRoot);
            assert.strictEqual(label?.textContent, 'https://alpha.beta/gamma');
        });
    });
    describe('transitions upon request resolution', () => {
        const mockRequest = {
            url() {
                return 'http://foo.bar/baz';
            },
        };
        it('to change the style correctly', async () => {
            const resolver = new MockRequestResolver();
            const { shadowRoot } = await renderRequestLinkIcon({
                affectedRequest: { requestId: requestId1, url: 'https://alpha.beta/gamma' },
                requestResolver: resolver,
            });
            assert.isFalse(extractElements(shadowRoot).button.classList.contains('link'));
            resolver.resolve(mockRequest);
            await coordinator.done({ waitForWork: true });
            assert.isTrue(extractElements(shadowRoot).button.classList.contains('link'));
        });
        it('to set the label correctly', async () => {
            const resolver = new MockRequestResolver();
            const { shadowRoot } = await renderRequestLinkIcon({
                affectedRequest: { requestId: requestId1, url: 'https://alpha.beta/gamma' },
                requestResolver: resolver,
                displayURL: true,
            });
            assert.strictEqual(extractElements(shadowRoot).label?.textContent, 'gamma');
            resolver.resolve(mockRequest);
            await coordinator.done({ waitForWork: true });
            assert.strictEqual(extractElements(shadowRoot).label?.textContent, 'baz');
        });
        it('handles multiple data assignments', async () => {
            const resolver = new MockRequestResolver();
            const { shadowRoot, component } = await renderRequestLinkIcon({
                affectedRequest: { requestId: requestId2, url: 'https://alpha.beta/gamma' },
                requestResolver: resolver,
                displayURL: true,
            });
            assert.strictEqual(extractElements(shadowRoot).label?.textContent, 'gamma');
            const mockRequest2 = {
                url() {
                    return 'http://foo.bar/baz';
                },
                requestId() {
                    return requestId1;
                },
            };
            component.data = {
                affectedRequest: { requestId: requestId1, url: 'https://alpha.beta/gamma' },
                requestResolver: resolver,
                displayURL: true,
            };
            resolver.resolve(mockRequest2);
            await coordinator.done({ waitForWork: true });
            assert.strictEqual(extractElements(shadowRoot).label?.textContent, 'baz');
            resolver.clear();
        });
    });
    describe('handles clicks correctly', () => {
        const mockRequest = {
            url() {
                return 'http://foo.bar/baz';
            },
        };
        before(() => {
            _legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ViewManager.resetViewRegistration();
            _legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ViewManager.registerViewExtension({
                // @ts-ignore
                location: 'mock-location',
                id: 'network',
                title: () => 'Network',
                commandPrompt: () => 'Network',
                persistence: "closeable" /* UI.ViewManager.ViewPersistence.CLOSEABLE */,
                async loadView() {
                    return new _legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.Widget();
                },
            });
            _legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ViewManager.ViewManager.instance({ forceNew: true });
        });
        after(() => {
            _legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ViewManager.maybeRemoveViewExtension('network');
        });
        it('if the button is clicked', async () => {
            const revealOverride = sinon.fake(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal);
            const { shadowRoot } = await renderRequestLinkIcon({
                request: mockRequest,
                displayURL: true,
                revealOverride,
            });
            const { button } = extractElements(shadowRoot);
            button.click();
            assert.isTrue(revealOverride.called);
            assert.isTrue(revealOverride.calledOnceWith(sinon.match({ tab: "headers-component" /* NetworkForward.UIRequestLocation.UIRequestTabs.HeadersComponent */ })));
        });
    });
});
//# sourceMappingURL=RequestLinkIcon.test.js.map

/***/ })

}]);