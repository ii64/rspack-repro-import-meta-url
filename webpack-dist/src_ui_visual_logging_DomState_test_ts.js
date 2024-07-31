"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_visual_logging_DomState_test_ts"],{

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

/***/ "./src/ui/visual_logging/DomState.test.ts":
/*!************************************************!*\
  !*** ./src/ui/visual_logging/DomState.test.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visual_logging-testing.js */ "./src/ui/visual_logging/visual_logging-testing.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('DomState', () => {
    let container;
    beforeEach(() => {
        container = document.createElement('div');
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(container);
    });
    const el = (id, d = document) => d.getElementById(id);
    it('gets loggable elements and their parents', () => {
        container.innerHTML = `
      <div id="1">
        <div jslog="TreeItem" id="11">
          <div id="111">
            <div jslog="TreeItem" id="1111">
              <div jslog="TreeItem" id="11111"></div>
            </div>
            <div jslog="TreeItem" id="1112"></div>
          </div>
          <div id="112"><span>hello</span></div>
          <div jslog="TreeItem" id="113"></div>
        </div>
        <div id="12">
          <div jslog="TreeItem" id="121">
            <div jslog="TreeItem" id="1211"></div>
          </div>
        </div>
      <div>
      <div jslog="TreeItem" id="2"></div>`;
        const { loggables } = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.getDomState([document]);
        assert.sameDeepMembers(loggables, [
            { element: el('2'), parent: undefined },
            { element: el('121'), parent: undefined },
            { element: el('1211'), parent: el('121') },
            { element: el('11'), parent: undefined },
            { element: el('113'), parent: el('11') },
            { element: el('1112'), parent: el('11') },
            { element: el('1111'), parent: el('11') },
            { element: el('11111'), parent: el('1111') },
        ]);
    });
    it('returns element in a BFS order', () => {
        container.innerHTML = `
      <li jslog="TreeItem" id="1">
      </li>
      <ol>
        <li jslog="TreeItem" id="11">
        </li>
        <li jslog="TreeItem" id="12">
      </ol>
      <li jslog="TreeItem" id="2">
      </li>
      <ol>
        <li jslog="TreeItem" id="21">
        </li>
        <li jslog="TreeItem" id="22">
        </li>
        </li>
      </ol>`;
        const { loggables } = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.getDomState([document]);
        assert.deepEqual(loggables, [
            { element: el('1'), parent: undefined },
            { element: el('2'), parent: undefined },
            { element: el('11'), parent: undefined },
            { element: el('12'), parent: undefined },
            { element: el('21'), parent: undefined },
            { element: el('22'), parent: undefined },
        ]);
    });
    it('gets loggable elements across documents', () => {
        container.innerHTML = `
      <div jslog="TreeItem" id="1"></div>
      <iframe id="iframe"></iframe>`;
        const iframe = el('iframe');
        const iframeDocument = iframe.contentDocument;
        assert.exists(iframeDocument);
        iframeDocument.body.innerHTML = `
      <div jslog="TreeItem" id="2"></div>`;
        const { loggables } = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.getDomState([document, iframeDocument]);
        assert.sameDeepMembers(loggables, [
            { element: el('1'), parent: undefined },
            { element: el('2', iframeDocument), parent: undefined },
        ]);
    });
    it('identifies parents across shadow DOM', () => {
        container.innerHTML = `
      <div jslog="TreeItem" id="1">
        <div jslog="TreeItem" id="12"></div>
        <div id="13"></div>
      </div>`;
        const shadow = el('13').attachShadow({ mode: 'open' });
        const shadowContent = document.createElement('div');
        shadowContent.innerHTML = `
      <div id="131">
        <div jslog="TreeItem" id="1311"></div>
      </div>`;
        shadow.appendChild(shadowContent);
        const { loggables } = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.getDomState([document]);
        assert.sameDeepMembers(loggables, [
            { element: el('1'), parent: undefined },
            { element: el('1311', shadow), parent: el('1') },
            { element: el('12'), parent: el('1') },
        ]);
    });
    it('walks slots in the assigned order', () => {
        class TestComponent extends HTMLElement {
            render() {
                const shadow = this.attachShadow({ mode: 'open' });
                shadow.innerHTML = `
          <div jslog="TreeItem" id="c1"><slot id="slot-1" name="slot-1"></slot></div>
          <div jslog="TreeItem" id="c2"><slot id="slot-2" name="slot-2"></slot></div>`;
            }
            connectedCallback() {
                this.render();
            }
        }
        customElements.define('ve-test-component', class extends TestComponent {
        });
        container.innerHTML = `
      <div id="0" jslog="TreeItem">
        <ve-test-component id="1" jslog="TreeItem">
          <div jslog="TreeItem" id="11" slot="slot-1">
            <div id="111" jslog="TreeItem"></div>
          </div>
          <div id="12" slot="slot-2" jslog="TreeItem">
        </ve-test-component>
      </div>`;
        const { loggables } = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.getDomState([document]);
        const shadow = el('1').shadowRoot;
        assert.sameDeepMembers(loggables, [
            { element: el('0'), parent: undefined },
            { element: el('1'), parent: el('0') },
            { element: el('c1', shadow), parent: el('1') },
            { element: el('11'), parent: el('c1', shadow) },
            { element: el('111'), parent: el('11') },
            { element: el('c2', shadow), parent: el('1') },
            { element: el('12'), parent: el('c2', shadow) },
        ]);
    });
    it('returns shadow roots', () => {
        container.innerHTML = `
      <div id="1">
        <div class="shadow" id="11"></div>
      </div>
      <div class="shadow" id="2"></div>`;
        const addedShadowRoots = [];
        const attachShadows = (el) => {
            for (const target of el.querySelectorAll('.shadow')) {
                const shadow = target.attachShadow({ mode: 'open' });
                const content = document.createElement('div');
                content.innerHTML = '<div></div><div class="shadow></div>';
                shadow.appendChild(content);
                addedShadowRoots.push(shadow);
            }
        };
        attachShadows(container);
        for (const shadow of addedShadowRoots) {
            attachShadows(shadow);
        }
        const { shadowRoots } = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.getDomState([document]);
        assert.sameDeepMembers(shadowRoots, addedShadowRoots);
    });
    it('identifies visible elements', () => {
        container.innerHTML = `
      <style>
        .box {
          position: absolute;
          height: 100px;
          width: 100px;
        }
      </style>
      <div id="1" class="box" style="left: 50px; top: 0;"></div>
      <div id="2" class="box" style="left: 0; top: 50px;"></div>`;
        assert.deepStrictEqual(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.visibleOverlap(el('1'), new DOMRect(0, 0, 200, 200)), new DOMRect(50, 0, 100, 100));
        assert.deepStrictEqual(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.visibleOverlap(el('2'), new DOMRect(0, 0, 200, 200)), new DOMRect(0, 50, 100, 100));
        assert.deepStrictEqual(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.visibleOverlap(el('1'), new DOMRect(0, 0, 100, 100)), new DOMRect(50, 0, 50, 100));
        assert.deepStrictEqual(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.visibleOverlap(el('2'), new DOMRect(0, 0, 100, 100)), new DOMRect(0, 50, 100, 50));
        assert.isNull(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.visibleOverlap(el('1'), new DOMRect(0, 0, 50, 50)));
        assert.isNull(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.visibleOverlap(el('2'), new DOMRect(0, 0, 50, 50)));
        assert.isNull(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.visibleOverlap(el('1'), new DOMRect(0, 0, 50, 100)));
        assert.deepStrictEqual(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.visibleOverlap(el('2'), new DOMRect(0, 0, 50, 100)), new DOMRect(0, 50, 50, 50));
        assert.isNull(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.visibleOverlap(el('1'), new DOMRect(25, 25, 25, 50)));
        assert.deepStrictEqual(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.visibleOverlap(el('2'), new DOMRect(25, 25, 25, 50)), new DOMRect(25, 50, 25, 25));
        assert.isNull(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.visibleOverlap(el('1'), new DOMRect(25, 25, 30, 30)));
        assert.isNull(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.visibleOverlap(el('2'), new DOMRect(25, 25, 30, 30)));
    });
    it('identifies small visible elements', () => {
        container.innerHTML = `
      <div id="1" class="box" style="width: 100px; height: 5px;"></div>
      <div id="2" class="box" style="width: 0; height: 5px;"></div>`;
        assert.isNotNull(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.visibleOverlap(el('1'), new DOMRect(0, 0, 200, 200)));
        assert.isNull(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.visibleOverlap(el('2'), new DOMRect(0, 0, 200, 200)));
    });
});


/***/ }),

/***/ "./src/ui/visual_logging/visual_logging-testing.ts":
/*!*********************************************************!*\
  !*** ./src/ui/visual_logging/visual_logging-testing.ts ***!
  \*********************************************************/
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
/* harmony import */ var _Debugging_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Debugging.js */ "./src/ui/visual_logging/Debugging.ts");
/* harmony import */ var _DomState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DomState.js */ "./src/ui/visual_logging/DomState.ts");
/* harmony import */ var _LoggingConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoggingConfig.js */ "./src/ui/visual_logging/LoggingConfig.ts");
/* harmony import */ var _LoggingDriver_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoggingDriver.js */ "./src/ui/visual_logging/LoggingDriver.ts");
/* harmony import */ var _LoggingEvents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoggingEvents.js */ "./src/ui/visual_logging/LoggingEvents.ts");
/* harmony import */ var _LoggingState_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoggingState.js */ "./src/ui/visual_logging/LoggingState.ts");
/* harmony import */ var _NonDomState_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NonDomState.js */ "./src/ui/visual_logging/NonDomState.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.










/***/ })

}]);