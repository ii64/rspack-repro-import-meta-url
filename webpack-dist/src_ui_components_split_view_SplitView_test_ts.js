"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_split_view_SplitView_test_ts"],{

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

/***/ "./src/ui/components/split_view/SplitView.test.ts":
/*!********************************************************!*\
  !*** ./src/ui/components/split_view/SplitView.test.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _split_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./split_view.js */ "./src/ui/components/split_view/split_view.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const coordinator = _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__.RenderCoordinator.RenderCoordinator.instance();
describe('SplitView', () => {
    it('should resize split view', async () => {
        const view = new _split_view_js__WEBPACK_IMPORTED_MODULE_2__.SplitView.SplitView();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(view);
        view.style.width = '800px';
        view.style.height = '600px';
        const resizer = view.shadowRoot?.querySelector('#resizer');
        assert.ok(resizer);
        assert.strictEqual(view.style.getPropertyValue('--current-main-area-size'), '60%');
        let rect = resizer.getBoundingClientRect();
        resizer.dispatchEvent(new MouseEvent('mousedown', {
            clientX: rect.x + rect.width / 2,
            clientY: rect.y + rect.height / 2,
        }));
        rect = view.getBoundingClientRect();
        window.dispatchEvent(new MouseEvent('mousemove', {
            clientX: rect.x + rect.width / 4,
            clientY: rect.y + rect.height / 4,
        }));
        window.dispatchEvent(new MouseEvent('mouseup'));
        // Exact value might be different based on the environment.
        assert.notStrictEqual(view.style.getPropertyValue('--current-main-area-size'), '60%');
    });
    it('should change layout to horizontal split on resize to narrow view', async () => {
        const view = new _split_view_js__WEBPACK_IMPORTED_MODULE_2__.SplitView.SplitView();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(view);
        view.style.width = '800px';
        view.style.height = '600px';
        const resizer = view.shadowRoot?.querySelector('#resizer');
        assert.ok(resizer);
        view.style.width = '600px';
        view.style.height = '800px';
        await coordinator.done({ waitForWork: true });
        const rect = resizer.getBoundingClientRect();
        assert.strictEqual(rect.width, 600);
        assert.strictEqual(rect.height, 3);
    });
    it('always uses horizontal split if explicitly set', async () => {
        const view = new _split_view_js__WEBPACK_IMPORTED_MODULE_2__.SplitView.SplitView();
        view.horizontal = true;
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(view);
        view.style.width = '800px';
        view.style.height = '600px';
        const resizer = view.shadowRoot?.querySelector('#resizer');
        assert.ok(resizer);
        await coordinator.done({ waitForWork: true });
        const rect = resizer.getBoundingClientRect();
        assert.strictEqual(rect.width, 800);
        assert.strictEqual(rect.height, 3);
    });
    it('should keep vertical split on short viewports', () => {
        const view = new _split_view_js__WEBPACK_IMPORTED_MODULE_2__.SplitView.SplitView();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(view);
        view.style.width = '800px';
        view.style.height = '600px';
        const resizer = view.shadowRoot?.querySelector('#resizer');
        assert.ok(resizer);
        view.style.width = '600px';
        view.style.height = '550px';
        const rect = resizer.getBoundingClientRect();
        assert.strictEqual(rect.width, 3);
        assert.strictEqual(rect.height, 550);
    });
});


/***/ }),

/***/ "./src/ui/components/split_view/SplitView.ts":
/*!***************************************************!*\
  !*** ./src/ui/components/split_view/SplitView.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SplitView: () => (/* binding */ SplitView)
/* harmony export */ });
/* harmony import */ var _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/components/helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _SplitView_shadow, _SplitView_mousePos, _SplitView_mainAxisIdx, _SplitView_mainDimensions, _SplitView_observer, _SplitView_horizontal, _SplitView_onResize, _SplitView_onMouseDown, _SplitView_onMouseUp, _SplitView_onMouseMove, _SplitView_render;


// clean-css does not compile this file correctly. So as a workaround adding styles inline.
const styles = `
  :host {
    --current-main-area-size: 50%;
    --resizer-size: 3px;
    --min-main-area-size: 200px;
    --min-sidebar-size: 150px;
    --main-area-size: calc(max(var(--current-main-area-size), var(--min-main-area-size)));

    height: 100%;
    width: 100%;
    display: block;
    overflow: auto;
  }

  .wrapper {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    container: sidebar / size; /* stylelint-disable-line property-no-unknown */
  }

  .container {
    --resizer-position: calc(min(var(--main-area-size), calc(100% - var(--min-sidebar-size))));
    --min-container-size: calc(var(--min-sidebar-size) + var(--min-main-area-size) + var(--resizer-size));

    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    position: relative;
    gap: var(--resizer-size);

    min-width: var(--min-container-size);
  }

  #resizer {
    background-color: var(--sys-color-surface1);
    position: absolute;
    user-select: none;

    /* horizontal */
    width: var(--resizer-size);
    cursor: col-resize;
    left: var(--resizer-position);
    bottom: 0;
    top: 0;
  }

  slot {
    overflow: auto;
    display: block;
  }

  slot[name="main"] {

    /* horizontal */
    width: var(--resizer-position);
    min-width: var(--min-main-area-size);
  }

  slot[name="sidebar"] {
    flex: 1 0 0;

    min-width: var(--min-sidebar-size);
  }

  .horizontal .container {
    flex-direction: column;
    min-height: var(--min-container-size);
    min-width: auto;
  }

  .horizontal #resizer {
    width: auto;
    height: var(--resizer-size);
    cursor: row-resize;
    top: var(--resizer-position);
    left: 0;
    right: 0;
  }

  .horizontal slot[name="main"] {
    width: auto;
    min-width: auto;
    height: var(--resizer-position);
    min-height: var(--min-main-area-size);
  }

  .horizontal slot[name="sidebar"] {
    min-width: auto;
    min-height: var(--min-sidebar-size);
  }
`;
const splitViewStyles = new CSSStyleSheet();
splitViewStyles.replaceSync(styles);
class SplitView extends HTMLElement {
    constructor() {
        super(...arguments);
        _SplitView_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _SplitView_mousePos.set(this, [0, 0]);
        _SplitView_mainAxisIdx.set(this, 0);
        _SplitView_mainDimensions.set(this, [0, 0]);
        _SplitView_observer.set(this, void 0);
        _SplitView_horizontal.set(this, false);
        _SplitView_onResize.set(this, (rect) => {
            const prevMainAxisIdx = __classPrivateFieldGet(this, _SplitView_mainAxisIdx, "f");
            if (rect.width <= 600 && rect.height >= 600 || __classPrivateFieldGet(this, _SplitView_horizontal, "f")) {
                __classPrivateFieldSet(this, _SplitView_mainAxisIdx, 1, "f");
            }
            else {
                __classPrivateFieldSet(this, _SplitView_mainAxisIdx, 0, "f");
            }
            if (__classPrivateFieldGet(this, _SplitView_mainAxisIdx, "f") !== prevMainAxisIdx) {
                void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _SplitView_render, "f"));
            }
        });
        _SplitView_onMouseDown.set(this, (event) => {
            const main = __classPrivateFieldGet(this, _SplitView_shadow, "f").querySelector('slot[name=main]');
            if (!main) {
                throw new Error('Main slot not found');
            }
            const rect = main.getBoundingClientRect();
            __classPrivateFieldSet(this, _SplitView_mainDimensions, [rect.width, rect.height], "f");
            __classPrivateFieldSet(this, _SplitView_mousePos, [event.clientX, event.clientY], "f");
            window.addEventListener('mousemove', __classPrivateFieldGet(this, _SplitView_onMouseMove, "f"), true);
            window.addEventListener('mouseup', __classPrivateFieldGet(this, _SplitView_onMouseUp, "f"), true);
        });
        _SplitView_onMouseUp.set(this, () => {
            window.removeEventListener('mousemove', __classPrivateFieldGet(this, _SplitView_onMouseMove, "f"), true);
            window.removeEventListener('mouseup', __classPrivateFieldGet(this, _SplitView_onMouseUp, "f"), true);
        });
        _SplitView_onMouseMove.set(this, (event) => {
            const mousePos = [event.clientX, event.clientY];
            const delta = mousePos[__classPrivateFieldGet(this, _SplitView_mainAxisIdx, "f")] - __classPrivateFieldGet(this, _SplitView_mousePos, "f")[__classPrivateFieldGet(this, _SplitView_mainAxisIdx, "f")];
            const rect = this.getBoundingClientRect();
            const containerDimensions = [rect.width, rect.height];
            const length = ((__classPrivateFieldGet(this, _SplitView_mainDimensions, "f")[__classPrivateFieldGet(this, _SplitView_mainAxisIdx, "f")] + delta) * 100) / containerDimensions[__classPrivateFieldGet(this, _SplitView_mainAxisIdx, "f")];
            this.style.setProperty('--current-main-area-size', length + '%');
        });
        _SplitView_render.set(this, () => {
            // clang-format off
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `
        <div class="wrapper ${__classPrivateFieldGet(this, _SplitView_mainAxisIdx, "f") === 1 ? 'horizontal' : ''}">
          <div class="container">
            <slot name="main"></slot>
            <div id="resizer" @mousedown=${__classPrivateFieldGet(this, _SplitView_onMouseDown, "f")}></div>
            <slot name="sidebar"></slot>
          </div>
        </div>
      `, __classPrivateFieldGet(this, _SplitView_shadow, "f"), { host: this });
            // clang-format on
        });
    }
    connectedCallback() {
        this.style.setProperty('--current-main-area-size', '60%');
        __classPrivateFieldGet(this, _SplitView_shadow, "f").adoptedStyleSheets = [splitViewStyles];
        __classPrivateFieldSet(this, _SplitView_observer, new ResizeObserver(entries => __classPrivateFieldGet(this, _SplitView_onResize, "f").call(this, entries[0].contentRect)), "f");
        __classPrivateFieldGet(this, _SplitView_observer, "f").observe(this);
        __classPrivateFieldGet(this, _SplitView_render, "f").call(this);
    }
    get horizontal() {
        return __classPrivateFieldGet(this, _SplitView_horizontal, "f");
    }
    set horizontal(horizontal) {
        __classPrivateFieldSet(this, _SplitView_horizontal, horizontal, "f");
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _SplitView_render, "f"));
    }
}
_SplitView_shadow = new WeakMap(), _SplitView_mousePos = new WeakMap(), _SplitView_mainAxisIdx = new WeakMap(), _SplitView_mainDimensions = new WeakMap(), _SplitView_observer = new WeakMap(), _SplitView_horizontal = new WeakMap(), _SplitView_onResize = new WeakMap(), _SplitView_onMouseDown = new WeakMap(), _SplitView_onMouseUp = new WeakMap(), _SplitView_onMouseMove = new WeakMap(), _SplitView_render = new WeakMap();
Object.defineProperty(SplitView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-split-view`
});
customElements.define('devtools-split-view', SplitView);


/***/ }),

/***/ "./src/ui/components/split_view/split_view.ts":
/*!****************************************************!*\
  !*** ./src/ui/components/split_view/split_view.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SplitView: () => (/* reexport module object */ _SplitView_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _SplitView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SplitView.js */ "./src/ui/components/split_view/SplitView.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/***/ })

}]);