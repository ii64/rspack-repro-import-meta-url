"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_two_states_counter_TwoStatesCounter_test_js"],{

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

/***/ "./ui/components/two_states_counter/TwoStatesCounter.js":
/*!**************************************************************!*\
  !*** ./ui/components/two_states_counter/TwoStatesCounter.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TwoStatesCounter: () => (/* binding */ TwoStatesCounter)
/* harmony export */ });
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */ var _twoStatesCounter_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./twoStatesCounter.css.js */ "./ui/components/two_states_counter/twoStatesCounter.css.js");
// Copyright (c) 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const isString = (value) => value !== undefined;
class TwoStatesCounter extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-two-states-counter`;
    #boundRender = this.#render.bind(this);
    #shadow = this.attachShadow({ mode: 'open' });
    #numActive = 0;
    #numInactive = 0;
    #width = '14px';
    #height = '14px';
    #activeTitle;
    #inactiveTitle;
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_twoStatesCounter_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]];
        void _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.ScheduledRender.scheduleRender(this, this.#boundRender);
    }
    set data(data) {
        if (data.active < 0 || data.inactive < 0) {
            throw new Error('Values need to be greater or equal to zero.');
        }
        this.#numActive = data.active;
        this.#numInactive = data.inactive;
        this.#width = isString(data.width) ? data.width : this.#width;
        this.#height = isString(data.height) ? data.height : this.#height;
        this.#activeTitle = data.activeTitle;
        this.#inactiveTitle = data.inactiveTitle;
        void _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.ScheduledRender.scheduleRender(this, this.#boundRender);
    }
    #render() {
        if (this.#numActive === 0 && this.#numInactive === 0) {
            return;
        }
        const showBothNumbers = this.#numActive > 0 && this.#numInactive > 0;
        const commonClasses = {
            part: true,
            split: showBothNumbers,
        };
        const activeClassMap = {
            ...commonClasses,
            active: true,
        };
        const inactiveClassMap = {
            ...commonClasses,
            inactive: true,
        };
        // clang-format off
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
    <div class='counter'>
      ${this.#renderPart(this.#numActive, activeClassMap, this.#activeTitle)}
      ${this.#renderPart(this.#numInactive, inactiveClassMap, this.#inactiveTitle)}
    </div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
    #renderPart(count, classInfo, title) {
        const styles = {
            width: this.#width,
            height: this.#height,
        };
        // clang-format off
        return count > 0 ? _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
       <span class=${_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Directives.classMap(classInfo)} style=${_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Directives.styleMap(styles)} title=${title}>
          ${count}
       </span>
      ` : _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing;
        // clang-format on
    }
}
customElements.define('devtools-two-states-counter', TwoStatesCounter);
//# sourceMappingURL=TwoStatesCounter.js.map

/***/ }),

/***/ "./ui/components/two_states_counter/TwoStatesCounter.test.js":
/*!*******************************************************************!*\
  !*** ./ui/components/two_states_counter/TwoStatesCounter.test.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */ var _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _two_states_counter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./two_states_counter.js */ "./ui/components/two_states_counter/two_states_counter.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const coordinator = _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__.RenderCoordinator.RenderCoordinator.instance();
const ACTIVE_SELECTOR = '.active';
const INACTIVE_SELECTOR = '.inactive';
async function renderCounter(data) {
    const counter = new _two_states_counter_js__WEBPACK_IMPORTED_MODULE_2__.TwoStatesCounter.TwoStatesCounter();
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(counter);
    counter.data = data;
    await coordinator.done();
    return counter;
}
function assertContentAndTitleForPart(counter, selector, content, title) {
    assert.isNotNull(counter.shadowRoot);
    const activeCount = counter.shadowRoot.querySelector(selector);
    assert.instanceOf(activeCount, HTMLSpanElement);
    assert.strictEqual(activeCount.textContent?.trim(), `${content}`);
    assert.strictEqual(activeCount.title, title ? `${title}` : '');
}
describe('TwoStatesCounter', () => {
    it('renders a counter with active count only', async () => {
        const data = { active: 3, inactive: 0, activeTitle: 'Num active' };
        const counter = await renderCounter(data);
        assert.isNotNull(counter.shadowRoot);
        assertContentAndTitleForPart(counter, ACTIVE_SELECTOR, `${data.active}`, data.activeTitle);
        assert.isNull(counter.shadowRoot.querySelector(INACTIVE_SELECTOR));
    });
    it('renders a counter with inactive count only', async () => {
        const data = { active: 0, inactive: 10, inactiveTitle: 'Num inactive' };
        const counter = await renderCounter(data);
        assert.isNotNull(counter.shadowRoot);
        assertContentAndTitleForPart(counter, INACTIVE_SELECTOR, `${data.inactive}`, data.inactiveTitle);
        assert.isNull(counter.shadowRoot.querySelector(ACTIVE_SELECTOR));
    });
    it('renders a counter with active and inactive counts', async () => {
        const data = { active: 2, inactive: 3, activeTitle: 'Num active', inactiveTitle: 'Num inactive' };
        const counter = await renderCounter(data);
        assert.isNotNull(counter.shadowRoot);
        assertContentAndTitleForPart(counter, ACTIVE_SELECTOR, `${data.active}`, data.activeTitle);
        assertContentAndTitleForPart(counter, INACTIVE_SELECTOR, `${data.inactive}`, data.inactiveTitle);
    });
    it('renders nothing if both counts are zero', async () => {
        const data = { active: 0, inactive: 0, inactiveTitle: 'Num inactive' };
        const counter = await renderCounter(data);
        assert.isNotNull(counter.shadowRoot);
        assert.isNull(counter.shadowRoot.querySelector(INACTIVE_SELECTOR));
        assert.isNull(counter.shadowRoot.querySelector(ACTIVE_SELECTOR));
    });
});
//# sourceMappingURL=TwoStatesCounter.test.js.map

/***/ }),

/***/ "./ui/components/two_states_counter/twoStatesCounter.css.js":
/*!******************************************************************!*\
  !*** ./ui/components/two_states_counter/twoStatesCounter.css.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.active.split {
  border-radius: 50% 0% 0% 50%;
}

.inactive.split {
  border-radius: 0% 50% 50% 0%;
}

.counter {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.part {
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.active {
  color: var(--sys-color-on-primary);
  background-color: var(--sys-color-primary);
}

.inactive {
  color: var(--sys-color-state-disabled);
  background-color: var(--sys-color-state-disabled-container);
}

/*# sourceURL=twoStatesCounter.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/two_states_counter/two_states_counter.js":
/*!****************************************************************!*\
  !*** ./ui/components/two_states_counter/two_states_counter.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TwoStatesCounter: () => (/* reexport module object */ _TwoStatesCounter_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _TwoStatesCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TwoStatesCounter.js */ "./ui/components/two_states_counter/TwoStatesCounter.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


//# sourceMappingURL=two_states_counter.js.map

/***/ })

}]);