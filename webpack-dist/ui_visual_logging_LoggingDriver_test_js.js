"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_visual_logging_LoggingDriver_test_js"],{

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

/***/ "./testing/ExpectStubCall.js":
/*!***********************************!*\
  !*** ./testing/ExpectStubCall.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   expectCall: () => (/* binding */ expectCall),
/* harmony export */   expectCalled: () => (/* binding */ expectCalled)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expectCall(stub, options = {}) {
    return new Promise(resolve => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        stub.callsFake(function (...args) {
            if (stub.callCount < (options.callCount ?? 1)) {
                return undefined;
            }
            resolve(args);
            return (options.fakeFn ? options.fakeFn.apply(this, args) : undefined);
        });
    });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expectCalled(stub, options = {}) {
    const remainingCalls = (options.callCount ?? 1) - stub.callCount;
    if (remainingCalls <= 0) {
        return Promise.resolve(stub.lastCall.args);
    }
    return expectCall(stub, { ...options, callCount: remainingCalls });
}
//# sourceMappingURL=ExpectStubCall.js.map

/***/ }),

/***/ "./testing/VisualLoggingHelpers.js":
/*!*****************************************!*\
  !*** ./testing/VisualLoggingHelpers.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getVeId: () => (/* binding */ getVeId)
/* harmony export */ });
/* harmony import */ var _ui_visual_logging_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/visual_logging/visual_logging-testing.js */ "./ui/visual_logging/visual_logging-testing.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function getVeId(loggable) {
    if (typeof loggable === 'string') {
        loggable = document.querySelector(loggable);
    }
    return _ui_visual_logging_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.LoggingState.getLoggingState(loggable).veid;
}
//# sourceMappingURL=VisualLoggingHelpers.js.map

/***/ }),

/***/ "./ui/visual_logging/LoggingDriver.test.js":
/*!*************************************************!*\
  !*** ./ui/visual_logging/LoggingDriver.test.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */ var _testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/ExpectStubCall.js */ "./testing/ExpectStubCall.js");
/* harmony import */ var _testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/VisualLoggingHelpers.js */ "./testing/VisualLoggingHelpers.js");
/* harmony import */ var _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visual_logging-testing.js */ "./ui/visual_logging/visual_logging-testing.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






describe('LoggingDriver', () => {
    let recordImpression;
    let throttler;
    let throttle;
    let onerror;
    before(() => {
        onerror = window.onerror;
        window.onerror = (message, url, lineNumber, column, error) => {
            if (message !== 'ResizeObserver loop completed with undelivered notifications.' && onerror) {
                onerror.apply(window, [message, url, lineNumber, column, error]);
            }
        };
    });
    after(() => {
        window.onerror = onerror;
    });
    beforeEach(() => {
        throttler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(1000000000);
        throttle = sinon.stub(throttler, 'schedule');
        recordImpression = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordImpression');
    });
    afterEach(async () => {
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.stopLogging();
    });
    function addLoggableElements() {
        const parent = document.createElement('div');
        parent.id = 'parent';
        parent.setAttribute('jslog', 'TreeItem; track: hover');
        parent.style.width = '300px';
        parent.style.height = '300px';
        const element = document.createElement('div');
        element.id = 'element';
        element.setAttribute('jslog', 'TreeItem; context:42; track: click, keydown, hover, drag, resize, change');
        element.style.width = '300px';
        element.style.height = '300px';
        parent.appendChild(element);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(parent);
    }
    it('logs impressions on startLogging', async () => {
        addLoggableElements();
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging();
        assert.isTrue(recordImpression.calledOnce);
        assert.sameDeepMembers(recordImpression.firstCall.firstArg.impressions, [
            { id: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)('#element'), type: 1, context: 42, parent: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)('#parent'), width: 300, height: 300 },
            { id: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)('#parent'), type: 1, width: 300, height: 300 },
        ]);
    });
    async function assertImpressionRecordedDeferred() {
        const [work] = await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(throttle);
        assert.isFalse(recordImpression.called);
        await work();
        assert.isTrue(recordImpression.called);
    }
    it('does not log impressions when document hidden', async () => {
        addLoggableElements();
        sinon.stub(document, 'hidden').value(true);
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({ processingThrottler: throttler });
        assert.isFalse(recordImpression.called);
    });
    it('does not log impressions when parent hidden', async () => {
        addLoggableElements();
        const parent = document.getElementById('parent');
        parent.style.height = '0';
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({ processingThrottler: throttler });
        assert.isFalse(recordImpression.called);
    });
    it('logs impressions when visibility changes', async () => {
        let hidden = true;
        addLoggableElements();
        sinon.stub(document, 'hidden').get(() => hidden);
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({ processingThrottler: throttler });
        hidden = false;
        const event = document.createEvent('Event');
        event.initEvent('visibilitychange', true, true);
        document.dispatchEvent(event);
        await assertImpressionRecordedDeferred();
    });
    it('logs impressions on scroll', async () => {
        addLoggableElements();
        const parent = document.getElementById('parent');
        parent.style.marginTop = '2000px';
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({ processingThrottler: throttler });
        const scrollend = sinon.stub();
        window.addEventListener('scrollend', scrollend);
        window.scrollTo({
            top: 2000,
            left: 0,
            behavior: 'instant',
        });
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(scrollend);
        await assertImpressionRecordedDeferred();
        scrollend.resetHistory();
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant',
        });
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(scrollend);
    });
    it('logs impressions on mutation', async () => {
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({ processingThrottler: throttler });
        addLoggableElements();
        await assertImpressionRecordedDeferred();
    });
    it('logs impressions on mutation in shadow DOM', async () => {
        const parent = document.createElement('div');
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(parent);
        const shadow = parent.attachShadow({ mode: 'open' });
        const shadowContent = document.createElement('div');
        shadow.appendChild(shadowContent);
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({ processingThrottler: throttler });
        shadowContent.innerHTML = '<div jslog="TreeItem" style="width:300px;height:300px"></div>';
        await assertImpressionRecordedDeferred();
    });
    it('logs impressions on mutation in additional document', async () => {
        const iframe = document.createElement('iframe');
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(iframe);
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({ processingThrottler: throttler });
        const iframeDocument = iframe.contentDocument;
        assert.exists(iframeDocument);
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.addDocument(iframeDocument);
        iframeDocument.body.innerHTML = '<div jslog="TreeItem" style="width:300px;height:300px"></div>';
        await assertImpressionRecordedDeferred();
    });
    it('correctly determines visibility in additional document', async () => {
        const iframe = document.createElement('iframe');
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(iframe);
        iframe.style.width = '100px';
        iframe.style.height = '100px';
        iframe.width = '100';
        iframe.height = '100';
        const iframeDocument = iframe.contentDocument;
        assert.exists(iframeDocument);
        iframeDocument.body.innerHTML = // Second div should not be out of viewport and not logged
            `<div style="width:150px;height:150px"></div>
         <div jslog="TreeItem" style="width:150px;height:150px"></div>`;
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({ processingThrottler: throttler });
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.addDocument(iframeDocument);
        assert.isFalse(recordImpression.called);
    });
    it('hashes a string context', async () => {
        const element = document.createElement('div');
        element.setAttribute('jslog', 'TreeItem; track: hover; context: foobar');
        element.style.width = '300px';
        element.style.height = '300px';
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(element);
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging();
        assert.isTrue(recordImpression.calledOnce);
        assert.strictEqual(recordImpression.firstCall.firstArg.impressions[0]?.context, -103332984);
    });
    it('logs clicks', async () => {
        addLoggableElements();
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging();
        const recordClick = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordClick');
        const element = document.getElementById('element');
        element.click();
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordClick);
    });
    it('logs right clicks', async () => {
        addLoggableElements();
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging();
        const recordClick = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordClick');
        const element = document.getElementById('element');
        element.dispatchEvent(new MouseEvent('contextmenu'));
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordClick);
    });
    it('logs middle clicks', async () => {
        addLoggableElements();
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging();
        const recordClick = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordClick');
        const element = document.getElementById('element');
        element.dispatchEvent(new MouseEvent('auxclick'));
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordClick);
    });
    it('does not log clicks if not configured', async () => {
        addLoggableElements();
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging();
        const recordClick = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordClick');
        const parent = document.getElementById('parent');
        parent.click();
        await new Promise(resolve => setTimeout(resolve, 0));
        assert.isFalse(recordClick.called);
    });
    it('does not log click on double click', async () => {
        addLoggableElements();
        const element = document.getElementById('element');
        element.setAttribute('jslog', 'TreeItem; context:42; track: click, dblclick');
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({ clickLogThrottler: throttler });
        const recordClick = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordClick');
        element.dispatchEvent(new MouseEvent('click'));
        element.dispatchEvent(new MouseEvent('dblclick'));
        const [logging] = await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(throttle);
        assert.isTrue(throttle.calledTwice);
        assert.isFalse(recordClick.called);
        await logging();
        assert.isTrue(recordClick.calledOnce);
        assert.isTrue(recordClick.firstCall.firstArg.doubleClick);
    });
    it('does not log click on parent when clicked on child', async () => {
        addLoggableElements();
        const parent = document.getElementById('parent');
        parent.setAttribute('jslog', 'TreeItem; track: click');
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({ clickLogThrottler: throttler });
        const recordClick = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordClick');
        const element = document.getElementById('element');
        element.click();
        const [logging] = await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(throttle);
        assert.isFalse(recordClick.called);
        await logging();
        assert.isTrue(recordClick.calledOnce);
        assert.strictEqual(recordClick.firstCall.firstArg.veid, (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(element));
    });
    const logsSelectOptions = (event) => async () => {
        const parent = document.createElement('div');
        parent.innerHTML = `
      <select jslog="TreeItem; context: 0" id="select" style="width: 30px; height: 20px">
        <option jslog="TreeItem; context: 1">1</option>
        <option jslog="TreeItem; context: 2">2</option>
      </select>`;
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(parent);
        const select = document.getElementById('select');
        const recordClick = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordClick');
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({ processingThrottler: throttler, clickLogThrottler: throttler });
        assert.isTrue(recordImpression.calledOnce);
        const impressions = recordImpression.firstCall.firstArg.impressions;
        assert.sameDeepMembers(impressions, [
            { id: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(select), type: 1, width: 30, height: 20, context: 0 },
        ]);
        recordImpression.resetHistory();
        throttle.callsArg(0);
        select.dispatchEvent(event);
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordClick);
        assert.isTrue(recordClick.calledOnce);
        assert.strictEqual(recordClick.firstCall.firstArg.veid, (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(select));
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordImpression);
        assert.isTrue(recordImpression.calledOnce);
        assert.sameDeepMembers(recordImpression.firstCall.firstArg.impressions, [
            { id: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)('option:first-child'), type: 1, parent: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(select), context: 1, width: 0, height: 0 },
            { id: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)('option:last-child'), type: 1, parent: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(select), context: 2, width: 0, height: 0 },
        ]);
    };
    it('logs impressions on select options on click', logsSelectOptions(new MouseEvent('click')));
    it('logs impressions on select options on space press', logsSelectOptions(new KeyboardEvent('keypress', { key: ' ' })));
    it('logs impressions on select options on F4', logsSelectOptions(new KeyboardEvent('keydown', { code: 'F4' })));
    it('logs option click on select change', async () => {
        const parent = document.createElement('div');
        parent.innerHTML = `
      <select jslog="TreeItem; context: 0" id="select">
        <option jslog="TreeItem; context: 1; track: click">1</option>
        <option jslog="TreeItem; context: 2; track: click">2</option>
      </select>`;
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(parent);
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({ clickLogThrottler: throttler });
        const recordClick = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordClick');
        const select = document.getElementById('select');
        assert.exists(select);
        select.selectedIndex = 1;
        select.dispatchEvent(new Event('change'));
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(throttle).then(([logging]) => logging());
        assert.isTrue(recordClick.calledOnce);
        assert.deepStrictEqual(recordClick.firstCall.firstArg, { veid: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(select.selectedOptions[0]), doubleClick: false });
    });
    it('logs keydown', async () => {
        addLoggableElements();
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({ keyboardLogThrottler: throttler });
        const recordKeyDown = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordKeyDown');
        const element = document.getElementById('element');
        element.dispatchEvent(new KeyboardEvent('keydown', { key: 'a' }));
        element.dispatchEvent(new KeyboardEvent('keydown', { key: 'b' }));
        const [logging] = await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(throttle);
        assert.isTrue(throttle.calledTwice);
        assert.isFalse(recordKeyDown.called);
        await logging();
        assert.isTrue(recordKeyDown.calledOnce);
    });
    it('logs keydown for specific codes', async () => {
        addLoggableElements();
        const element = document.getElementById('element');
        element.setAttribute('jslog', 'TreeItem; context:42; track: keydown: KeyA|KeyB');
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({ keyboardLogThrottler: throttler });
        const recordKeyDown = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordKeyDown');
        element.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyC' }));
        await new Promise(resolve => setTimeout(resolve, 0));
        assert.isFalse(throttle.called);
        element.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyA' }));
        let [logging] = await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(throttle);
        assert.isFalse(recordKeyDown.called);
        await logging();
        assert.isTrue(recordKeyDown.calledOnce);
        recordKeyDown.resetHistory();
        element.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyB' }));
        [logging] = await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(throttle);
        assert.isFalse(recordKeyDown.called);
        await logging();
        assert.isTrue(recordKeyDown.calledOnce);
    });
    it('logs change', async () => {
        addLoggableElements();
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging();
        const recordChange = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordChange');
        const element = document.getElementById('element');
        element.dispatchEvent(new Event('change'));
        assert.isTrue(recordChange.calledOnce);
    });
    it('logs change for each input type', async () => {
        addLoggableElements();
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging();
        const recordChange = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordChange');
        const element = document.getElementById('element');
        element.dispatchEvent(new InputEvent('input', { inputType: 'insertText' }));
        await new Promise(resolve => setTimeout(resolve, 0));
        assert.isFalse(recordChange.called);
        element.dispatchEvent(new InputEvent('input', { inputType: 'insertText' }));
        await new Promise(resolve => setTimeout(resolve, 0));
        assert.isFalse(recordChange.called);
        let logging = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordChange);
        element.dispatchEvent(new InputEvent('input', { inputType: 'inserFromPaste' }));
        await logging;
        logging = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordChange);
        element.dispatchEvent(new InputEvent('input', { inputType: 'inserFromDrop' }));
        await logging;
        logging = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordChange);
        element.dispatchEvent(new Event('change'));
        await logging;
    });
    it('logs change on focus out after input', async () => {
        addLoggableElements();
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging();
        const recordChange = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordChange');
        const element = document.getElementById('element');
        element.dispatchEvent(new InputEvent('input', { inputType: 'insertText' }));
        element.dispatchEvent(new Event('focusout'));
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordChange);
    });
    it('logs change on new impressions', async () => {
        addLoggableElements();
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({ processingThrottler: throttler });
        const recordChange = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordChange');
        const element = document.getElementById('element');
        const parent = document.getElementById('parent');
        element.dispatchEvent(new InputEvent('input', { inputType: 'insertText' }));
        throttle.callsArg(0);
        parent.appendChild(element.cloneNode());
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordChange);
    });
    it('logs change on resize', async () => {
        addLoggableElements();
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({ resizeLogThrottler: throttler });
        const recordChange = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordChange');
        const element = document.getElementById('element');
        element.dispatchEvent(new InputEvent('input', { inputType: 'insertText' }));
        throttle.callsArg(0);
        element.style.width = '400px';
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordChange);
    });
    it('does not log change on focus out without input', async () => {
        addLoggableElements();
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging();
        const recordChange = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordChange');
        const element = document.getElementById('element');
        element.dispatchEvent(new Event('focusout'));
        await new Promise(resolve => setTimeout(resolve, 0));
        assert.isFalse(recordChange.calledOnce);
    });
    it('logs hover', async () => {
        addLoggableElements();
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({ hoverLogThrottler: throttler });
        const recordHover = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordHover');
        const element = document.getElementById('element');
        element.dispatchEvent(new MouseEvent('mouseover'));
        const [logging] = await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(throttle);
        assert.isFalse(recordHover.called);
        await logging();
        assert.isTrue(recordHover.calledOnce);
    });
    it('does not log hover if too short', async () => {
        addLoggableElements();
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({ hoverLogThrottler: throttler });
        const recordHover = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordHover');
        const element = document.getElementById('element');
        element.dispatchEvent(new MouseEvent('mouseover'));
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(throttle);
        assert.isFalse(recordHover.called);
        element.dispatchEvent(new MouseEvent('mouseout'));
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(throttle).then(([work]) => work());
        assert.isFalse(recordHover.called);
    });
    it('does not log hover if in descendent', async () => {
        addLoggableElements();
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({ hoverLogThrottler: throttler });
        const recordHover = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordHover');
        const parent = document.getElementById('parent');
        const element = document.getElementById('element');
        parent.dispatchEvent(new MouseEvent('mouseover'));
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(throttle);
        element.dispatchEvent(new MouseEvent('mouseover'));
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(throttle).then(([work]) => work());
        assert.isTrue(recordHover.called);
        assert.deepStrictEqual(recordHover.firstCall.firstArg, { veid: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(parent) });
    });
    it('logs drag', async () => {
        const dragLogThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(1000000000);
        addLoggableElements();
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({ dragLogThrottler });
        const recordDrag = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordDrag');
        const element = document.getElementById('element');
        element.dispatchEvent(new MouseEvent('pointerdown'));
        assert.exists(dragLogThrottler.process);
        assert.isFalse(recordDrag.called);
        await dragLogThrottler.schedule(async () => { }, "AsSoonAsPossible" /* Common.Throttler.Scheduling.AsSoonAsPossible */);
        await dragLogThrottler.process?.();
        assert.isTrue(recordDrag.called);
        assert.isTrue(recordDrag.calledOnce);
    });
    it('does not log drag if too short in time', async () => {
        const dragLogThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(1000000000);
        addLoggableElements();
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({ dragLogThrottler });
        const recordDrag = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordDrag');
        const element = document.getElementById('element');
        element.dispatchEvent(new MouseEvent('pointerdown'));
        assert.exists(dragLogThrottler.process);
        assert.isFalse(recordDrag.called);
        element.dispatchEvent(new MouseEvent('pointerup'));
        await dragLogThrottler.process?.();
        assert.isFalse(recordDrag.called);
    });
    it('logs drag if short in time but long in distance', async () => {
        const dragLogThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(1000000000);
        addLoggableElements();
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({ dragLogThrottler });
        const recordDrag = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordDrag');
        const element = document.getElementById('element');
        element.dispatchEvent(new MouseEvent('pointerdown', { screenX: 0, screenY: 0 }));
        assert.exists(dragLogThrottler.process);
        assert.isFalse(recordDrag.called);
        element.dispatchEvent(new MouseEvent('pointerup', { screenX: 100, screenY: 100 }));
        await dragLogThrottler.process?.();
        assert.isFalse(recordDrag.called);
    });
    it('logs resize', async () => {
        addLoggableElements();
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({ resizeLogThrottler: throttler });
        const recordResize = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordResize');
        const element = document.getElementById('element');
        element.style.height = '400px';
        const [logging] = await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(throttle, { callCount: 2 });
        assert.isFalse(recordResize.called);
        await logging();
        assert.isTrue(recordResize.calledOnce);
    });
    it('does not log resize if too small', async () => {
        addLoggableElements();
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({ resizeLogThrottler: throttler });
        const recordResize = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordResize');
        const element = document.getElementById('element');
        element.style.height = '301px';
        assert.isFalse(recordResize.called);
    });
    it('logs resize on visibility change', async () => {
        addLoggableElements();
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({ resizeLogThrottler: throttler });
        const recordResize = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordResize');
        const element = document.getElementById('element');
        element.style.display = 'none';
        const [logging] = await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(throttle, { callCount: 2 });
        assert.isFalse(recordResize.called);
        logging();
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordResize);
        assert.isTrue(recordResize.calledOnce);
        assert.deepStrictEqual(recordResize.firstCall.firstArg, { veid: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(element), width: 0, height: 0 });
        recordResize.resetHistory();
        element.style.display = 'block';
        assert.isFalse(recordResize.called);
        throttle.callsArg(0);
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(recordResize);
        assert.isTrue(recordResize.calledOnce);
        assert.deepStrictEqual(recordResize.firstCall.firstArg, { veid: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(element), width: 300, height: 300 });
    });
    // Flaky, to be rewritten
    it.skip('[crbug.com/347520196] throttles resize per element', async () => {
        addLoggableElements();
        const element1 = document.getElementById('element');
        const element2 = element1.cloneNode();
        document.getElementById('parent')?.appendChild(element2);
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({ resizeLogThrottler: throttler });
        const recordResize = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordResize');
        element1.style.height = '200px';
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(throttle, { callCount: 2 });
        element2.style.height = '200px';
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(throttle, { callCount: 2 });
        element1.style.height = '100px';
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(throttle, { callCount: 2 });
        element2.style.height = '100px';
        const [work] = await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(throttle, { callCount: 2 });
        assert.isFalse(recordResize.called);
        await work();
        assert.isTrue(recordResize.calledTwice);
        assert.strictEqual(recordResize.firstCall.firstArg.height, 100);
        assert.strictEqual(recordResize.lastCall.firstArg.height, 100);
        assert.notStrictEqual(recordResize.firstCall.firstArg.veid, recordResize.lastCall.firstArg.veid);
    });
    it('only logs resize of the outer element', async () => {
        addLoggableElements();
        const element = document.getElementById('element');
        const child = document.createElement('div');
        child.setAttribute('jslog', 'TreeItem; track: resize');
        child.style.width = '100%';
        child.style.height = '100%';
        element.appendChild(child);
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({ resizeLogThrottler: throttler });
        const recordResize = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordResize');
        element.style.width = '400px';
        const [work] = await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(throttle, { callCount: 2 });
        assert.isFalse(recordResize.called);
        await work();
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordResize);
        assert.isTrue(recordResize.calledOnce);
        assert.deepStrictEqual(recordResize.firstCall.firstArg, { veid: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(element), width: 400, height: 300 });
    });
    it('does not log resize intial impressions due to visibility change', async () => {
        addLoggableElements();
        const element = document.getElementById('element');
        element.style.display = 'none';
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({ processingThrottler: throttler, resizeLogThrottler: throttler });
        const recordResize = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordResize');
        recordImpression.resetHistory();
        element.style.display = 'block';
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(throttle).then(([work]) => work());
        assert.isTrue(throttle.calledOnce);
        assert.isTrue(recordImpression.calledOnce);
        assert.isFalse(recordResize.called);
        await new Promise(resolve => setTimeout(resolve, 0));
        assert.isFalse(recordResize.called);
    });
    it('properly handles the switch between visible elements', async () => {
        addLoggableElements();
        const element1 = document.getElementById('element');
        const child = document.createElement('div');
        child.id = 'child';
        child.setAttribute('jslog', 'TreeItem; track: resize');
        child.style.width = '100%';
        child.style.height = '100%';
        element1.appendChild(child);
        const element2 = element1.cloneNode(/* deep=*/ true);
        element2.id = 'element2';
        document.getElementById('parent')?.appendChild(element2);
        // First ensure both top level elements have impressions logged
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({ resizeLogThrottler: throttler });
        const recordResize = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordResize');
        // Now hide one and wait for logging to finish
        throttle.callsArg(0);
        element2.style.display = 'none';
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordResize, { callCount: 1 });
        throttle.reset();
        recordResize.reset();
        // Now the actual test: hiding one element and show the other one
        element1.style.display = 'none';
        element2.style.display = 'block';
        // Throttler is called by both resize and intersection observer for each element
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(throttle, { callCount: 4 }).then(([work]) => work());
        assert.isTrue(recordResize.calledTwice);
        assert.sameDeepMembers(recordResize.getCalls().map(c => c.firstArg), [
            { veid: _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingState.getLoggingState(element1)?.veid, width: 0, height: 0 },
            { veid: _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingState.getLoggingState(element2)?.veid, width: 300, height: 300 },
        ]);
    });
    it('logs resize when removed from DOM', async () => {
        addLoggableElements();
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({ resizeLogThrottler: throttler });
        const recordResize = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordResize');
        const element = document.getElementById('element');
        const parent = document.getElementById('parent');
        parent.removeChild(element);
        const [logging] = await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(throttle, { callCount: 2 });
        assert.isFalse(recordResize.called);
        await logging();
        assert.isTrue(recordResize.calledOnce);
        assert.deepStrictEqual(recordResize.firstCall.firstArg, { veid: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(element), width: 0, height: 0 });
    });
    it('logs click, then resize, then impressions', async () => {
        addLoggableElements();
        const processingThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(10);
        const clickLogThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(100);
        const keyboardLogThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(100);
        const resizeLogThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(100);
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({
            processingThrottler,
            clickLogThrottler,
            keyboardLogThrottler,
            resizeLogThrottler,
        });
        const recordResize = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordResize');
        const recordClick = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordClick');
        recordImpression.resetHistory();
        const element = document.getElementById('element');
        const parent = document.getElementById('parent');
        parent.removeChild(element);
        parent.appendChild(element.cloneNode());
        element.click();
        await Promise.all([
            (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordImpression),
            (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordResize),
            (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordClick),
        ]);
        assert.isTrue(recordClick.calledBefore(recordResize));
        assert.isTrue(recordResize.calledBefore(recordImpression));
    });
    it('logs keydown, then resize, then impressions', async () => {
        addLoggableElements();
        const element = document.getElementById('element');
        element.setAttribute('jslog', 'TreeItem; context:42; track: keydown: KeyA, resize');
        const keyboardLogThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(100);
        const resizeLogThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(100);
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({
            processingThrottler: throttler,
            keyboardLogThrottler,
            resizeLogThrottler,
        });
        const recordResize = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordResize');
        const recordKeyDown = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordKeyDown');
        recordImpression.resetHistory();
        throttle.callsArg(0);
        const parent = document.getElementById('parent');
        parent.removeChild(element);
        parent.appendChild(element.cloneNode());
        element.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyA', key: 'a' }));
        await Promise.all([
            (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordImpression),
            (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordResize),
            (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordKeyDown),
        ]);
        assert.isTrue(recordKeyDown.calledBefore(recordResize));
        assert.isTrue(recordResize.calledBefore(recordImpression));
    });
    it('logs non-DOM impressions', async () => {
        addLoggableElements();
        const loggable = {};
        const parent = document.getElementById('parent');
        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.NonDomState.registerLoggable(loggable, { ve: 1, context: '123' }, parent);
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging();
        assert.isTrue(recordImpression.calledOnce);
        assert.sameDeepMembers(recordImpression.firstCall.firstArg.impressions, [
            { id: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(loggable), type: 1, context: 123, parent: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(parent), width: 0, height: 0 },
            { id: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)('#element'), type: 1, context: 42, parent: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(parent), width: 300, height: 300 },
            { id: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(parent), type: 1, width: 300, height: 300 },
        ]);
    });
    it('logs non-DOM impressions after parent was logged', async () => {
        addLoggableElements();
        const loggable1 = {};
        const parent = document.getElementById('parent');
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging();
        assert.isTrue(recordImpression.calledOnce);
        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.NonDomState.registerLoggable(loggable1, { ve: 1, context: '123' }, parent);
        recordImpression.resetHistory();
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.scheduleProcessing();
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordImpression);
        assert.sameDeepMembers(recordImpression.lastCall.firstArg.impressions, [
            { id: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(loggable1), type: 1, context: 123, parent: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(parent), width: 0, height: 0 },
        ]);
        recordImpression.resetHistory();
        const loggable2 = {};
        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.NonDomState.registerLoggable(loggable2, { ve: 1, context: '345' }, parent);
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.scheduleProcessing();
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordImpression);
        assert.sameDeepMembers(recordImpression.lastCall.firstArg.impressions, [
            { id: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(loggable2), type: 1, context: 345, parent: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(parent), width: 0, height: 0 },
        ]);
    });
    it('logs root non-DOM impressions', async () => {
        addLoggableElements();
        const loggable = {};
        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.NonDomState.registerLoggable(loggable, { ve: 1, context: '123' }, undefined);
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging();
        assert.isTrue(recordImpression.calledOnce);
        assert.sameDeepMembers(recordImpression.firstCall.firstArg.impressions, [
            { id: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(loggable), type: 1, context: 123, width: 0, height: 0 },
            { id: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)('#element'), type: 1, context: 42, parent: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)('#parent'), width: 300, height: 300 },
            { id: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)('#parent'), type: 1, width: 300, height: 300 },
        ]);
        assert.isEmpty(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.NonDomState.getNonDomLoggables());
    });
    it('postpones logging non-DOM impressions with detached parent', async () => {
        addLoggableElements();
        const loggable = {};
        const parent = document.createElement('div');
        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.NonDomState.registerLoggable(loggable, { ve: 1, context: '123' }, parent);
        await _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging();
        assert.isTrue(recordImpression.calledOnce);
        assert.sameDeepMembers(recordImpression.firstCall.firstArg.impressions, [
            { id: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)('#element'), type: 1, context: 42, parent: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)('#parent'), width: 300, height: 300 },
            { id: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)('#parent'), type: 1, width: 300, height: 300 },
        ]);
        assert.deepInclude(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.NonDomState.getNonDomLoggables(parent), { loggable, config: { ve: 1, context: '123' }, parent });
    });
});
//# sourceMappingURL=LoggingDriver.test.js.map

/***/ }),

/***/ "./ui/visual_logging/visual_logging-testing.js":
/*!*****************************************************!*\
  !*** ./ui/visual_logging/visual_logging-testing.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Debugging: () => (/* reexport module object */ _Debugging_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   DomState: () => (/* reexport module object */ _DomState_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   LoggingConfig: () => (/* reexport module object */ _LoggingConfig_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   LoggingDriver: () => (/* reexport module object */ _LoggingDriver_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   LoggingEvents: () => (/* reexport module object */ _LoggingEvents_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   LoggingState: () => (/* reexport module object */ _LoggingState_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   NonDomState: () => (/* reexport module object */ _NonDomState_js__WEBPACK_IMPORTED_MODULE_6__)
/* harmony export */ });
/* harmony import */ var _Debugging_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Debugging.js */ "./ui/visual_logging/Debugging.js");
/* harmony import */ var _DomState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DomState.js */ "./ui/visual_logging/DomState.js");
/* harmony import */ var _LoggingConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoggingConfig.js */ "./ui/visual_logging/LoggingConfig.js");
/* harmony import */ var _LoggingDriver_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoggingDriver.js */ "./ui/visual_logging/LoggingDriver.js");
/* harmony import */ var _LoggingEvents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoggingEvents.js */ "./ui/visual_logging/LoggingEvents.js");
/* harmony import */ var _LoggingState_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoggingState.js */ "./ui/visual_logging/LoggingState.js");
/* harmony import */ var _NonDomState_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NonDomState.js */ "./ui/visual_logging/NonDomState.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








//# sourceMappingURL=visual_logging-testing.js.map

/***/ })

}]);