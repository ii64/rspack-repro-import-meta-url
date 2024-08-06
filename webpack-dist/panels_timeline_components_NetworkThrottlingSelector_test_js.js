"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_timeline_components_NetworkThrottlingSelector_test_js"],{

/***/ "./panels/timeline/components/NetworkThrottlingSelector.test.js":
/*!**********************************************************************!*\
  !*** ./panels/timeline/components/NetworkThrottlingSelector.test.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _mobile_throttling_mobile_throttling_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mobile_throttling/mobile_throttling.js */ "./panels/mobile_throttling/mobile_throttling.js");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components.js */ "./panels/timeline/components/components.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithEnvironment)('NetworkThrottlingSelector', () => {
    const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_4__.RenderCoordinator.RenderCoordinator.instance();
    let networkManager;
    let customNetworkSetting;
    let mockReveal;
    beforeEach(() => {
        networkManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkManager.MultitargetNetworkManager.instance({ forceNew: true });
        customNetworkSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('custom-network-conditions');
        mockReveal = sinon.stub(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.RevealerRegistry.instance(), 'reveal');
    });
    afterEach(() => {
        customNetworkSetting.set([]);
        mockReveal.restore();
    });
    it('should render all default presets', async () => {
        const view = new _components_js__WEBPACK_IMPORTED_MODULE_6__.NetworkThrottlingSelector.NetworkThrottlingSelector();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(view);
        await coordinator.done();
        const groups = view.shadowRoot.querySelectorAll('devtools-menu-group');
        assert.lengthOf(groups, 3);
        assert.strictEqual(groups[0].name, 'Disabled');
        const group1Items = groups[0].querySelectorAll('devtools-menu-item');
        assert.lengthOf(group1Items, 1);
        assert.match(group1Items[0].innerText, /No throttling/);
        assert.isTrue(group1Items[0].selected);
        assert.strictEqual(groups[1].name, 'Presets');
        const group2Items = groups[1].querySelectorAll('devtools-menu-item');
        assert.lengthOf(group2Items, 4);
        assert.match(group2Items[0].innerText, /Fast 4G/);
        assert.isFalse(group2Items[0].selected);
        assert.match(group2Items[1].innerText, /Slow 4G/);
        assert.isFalse(group2Items[1].selected);
        assert.match(group2Items[2].innerText, /3G/);
        assert.isFalse(group2Items[2].selected);
        assert.match(group2Items[3].innerText, /Offline/);
        assert.isFalse(group2Items[3].selected);
        assert.strictEqual(groups[2].name, 'Custom');
        const group3Items = groups[2].querySelectorAll('devtools-menu-item');
        assert.lengthOf(group3Items, 1);
        assert.match(group3Items[0].innerText, /Add…/);
        assert.isFalse(group3Items[0].selected);
    });
    it('updates network manager on change', async () => {
        const view = new _components_js__WEBPACK_IMPORTED_MODULE_6__.NetworkThrottlingSelector.NetworkThrottlingSelector();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(view);
        await coordinator.done();
        const items = view.shadowRoot.querySelectorAll('devtools-menu-item');
        assert.isTrue(items[0].selected);
        assert.strictEqual(networkManager.networkConditions().i18nTitleKey, 'No throttling');
        items[1].click();
        await coordinator.done();
        assert.isTrue(items[1].selected);
        assert.isFalse(items[0].selected);
        assert.strictEqual(networkManager.networkConditions().i18nTitleKey, 'Fast 4G');
    });
    it('reacts to network manager changes', async () => {
        const view = new _components_js__WEBPACK_IMPORTED_MODULE_6__.NetworkThrottlingSelector.NetworkThrottlingSelector();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(view);
        await coordinator.done();
        const items = view.shadowRoot.querySelectorAll('devtools-menu-item');
        assert.isTrue(items[0].selected);
        networkManager.setNetworkConditions(_mobile_throttling_mobile_throttling_js__WEBPACK_IMPORTED_MODULE_5__.ThrottlingPresets.ThrottlingPresets.networkPresets[1]);
        await coordinator.done();
        assert.isTrue(items[2].selected);
        assert.isFalse(items[0].selected);
    });
    it('reacts to custom setting changes', async () => {
        const view = new _components_js__WEBPACK_IMPORTED_MODULE_6__.NetworkThrottlingSelector.NetworkThrottlingSelector();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(view);
        await coordinator.done();
        let items = view.shadowRoot.querySelectorAll('devtools-menu-item');
        assert.lengthOf(items, 6);
        customNetworkSetting.set([{
                title: 'Custom item',
                i18nTitleKey: 'Custom item',
                download: 0,
                upload: 0,
                latency: 0,
            }]);
        await coordinator.done();
        items = view.shadowRoot.querySelectorAll('devtools-menu-item');
        assert.lengthOf(items, 7);
        assert.match(items[5].innerText, /Custom item/);
    });
    it('reveals custom throttling settings when "Add..." clicked', async () => {
        const view = new _components_js__WEBPACK_IMPORTED_MODULE_6__.NetworkThrottlingSelector.NetworkThrottlingSelector();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(view);
        await coordinator.done();
        const items = view.shadowRoot.querySelectorAll('devtools-menu-item');
        const addItem = items[items.length - 1];
        addItem.click();
        assert.isFalse(addItem.selected);
        await coordinator.done();
        assert(mockReveal.calledOnce);
        assert.isFalse(addItem.selected);
    });
});
//# sourceMappingURL=NetworkThrottlingSelector.test.js.map

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

/***/ })

}]);