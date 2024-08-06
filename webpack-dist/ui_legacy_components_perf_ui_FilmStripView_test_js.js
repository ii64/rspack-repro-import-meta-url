"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_perf_ui_FilmStripView_test_js"],{

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

/***/ "./ui/legacy/components/perf_ui/FilmStripView.test.js":
/*!************************************************************!*\
  !*** ./ui/legacy/components/perf_ui/FilmStripView.test.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */ var _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithEnvironment)('FilmStripView', function () {
    async function renderView(filmStripData) {
        const filmStripView = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FilmStripView.FilmStripView();
        filmStripView.setModel(filmStripData);
        const container = document.createElement('div');
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(container);
        filmStripView.markAsRoot();
        filmStripView.show(container);
        // Give the film strip time to render.
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.raf)();
        return filmStripView;
    }
    it('generates frames and timestamps', async function () {
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
        const filmStrip = await renderView(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Extras.FilmStrip.fromTraceData(traceData));
        const renderedFrames = Array.from(filmStrip.contentElement.querySelectorAll('button.frame'));
        assert.lengthOf(renderedFrames, 5);
        const expectedTimeLabelsForFrames = [
            '0ms',
            '139ms',
            '222ms',
            '239ms',
            '289ms',
        ];
        // Ensure for each frame that we rendered the right snapshot from the trace
        // data. And that the time label is as expected.
        renderedFrames.forEach((frame, index) => {
            const img = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.querySelectorErrorOnMissing)(frame, 'img');
            assert.isTrue(img.src.includes(traceData.Screenshots[index].args.dataUri));
            const timeElement = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.querySelectorErrorOnMissing)(frame, '.time');
            // Remove whitespace to avoid having to compare with &nbsp; in the
            // expected text.
            assert.strictEqual(timeElement.innerText.replace(/\s/, ''), expectedTimeLabelsForFrames[index]);
        });
        assert.deepStrictEqual(1, 1);
        filmStrip.detach();
    });
    describe('FilmStripView Dialog', function () {
        async function renderDialogWithTraceEngine(filmStrip, selectedFrameIndex) {
            const dialogWidget = _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FilmStripView.Dialog.fromFilmStrip(filmStrip, selectedFrameIndex);
            // Give the dialog time to render
            await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.raf)();
            // Creating the dialog widget is enough to cause it to render, so now we can find the Dialog HTML.
            const container = document.body.querySelector('[data-devtools-glass-pane]');
            const containerShadowRoot = container?.shadowRoot;
            if (!containerShadowRoot) {
                throw new Error('Could not find the Dialog shadowRoot');
            }
            return { dialog: dialogWidget, shadowRoot: containerShadowRoot };
        }
        it('renders and shows the provided frame by default', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
            const filmStrip = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Extras.FilmStrip.fromTraceData(traceData);
            const { dialog, shadowRoot } = await renderDialogWithTraceEngine(filmStrip, 0);
            const renderedImage = shadowRoot.querySelector('[data-film-strip-dialog-img]');
            assert.isTrue(renderedImage?.currentSrc.includes(traceData.Screenshots[0].args.dataUri));
            dialog.hide();
        });
        it('does not let the user navigate back if they are at the first frame already', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
            const filmStrip = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Extras.FilmStrip.fromTraceData(traceData);
            const { dialog, shadowRoot } = await renderDialogWithTraceEngine(filmStrip, 0);
            const previousBtn = shadowRoot.querySelector('devtools-button');
            assert.isTrue(previousBtn?.textContent === '◀' || previousBtn?.textContent === '&#9664;');
            if (!previousBtn) {
                throw new Error('Could not find previous button');
            }
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(previousBtn);
            await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.raf)();
            const renderedImage = shadowRoot.querySelector('[data-film-strip-dialog-img]');
            assert.isTrue(renderedImage?.currentSrc.includes(traceData.Screenshots[0].args.dataUri));
            dialog.hide();
        });
        it('lets the user navigate back to the previous frame with the mouse', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
            const filmStrip = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Extras.FilmStrip.fromTraceData(traceData);
            const { dialog, shadowRoot } = await renderDialogWithTraceEngine(filmStrip, 1);
            const previousBtn = shadowRoot.querySelector('devtools-button');
            assert.isTrue(previousBtn?.textContent === '◀' || previousBtn?.textContent === '&#9664;');
            if (!previousBtn) {
                throw new Error('Could not find previous button');
            }
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(previousBtn);
            await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.raf)();
            const renderedImage = shadowRoot.querySelector('[data-film-strip-dialog-img]');
            assert.isTrue(renderedImage?.currentSrc.includes(traceData.Screenshots[0].args.dataUri));
            dialog.hide();
        });
        it('lets the user navigate back to the previous frame with the keyboard', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
            const filmStrip = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Extras.FilmStrip.fromTraceData(traceData);
            const { dialog, shadowRoot } = await renderDialogWithTraceEngine(filmStrip, 1);
            const renderedImage = shadowRoot.querySelector('[data-film-strip-dialog-img]');
            if (!renderedImage) {
                throw new Error('Could not find film-strip-dialog img');
            }
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchKeyDownEvent)(renderedImage, {
                key: 'ArrowLeft',
                bubbles: true,
            });
            await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.raf)();
            assert.isTrue(renderedImage?.currentSrc.includes(traceData.Screenshots[0].args.dataUri));
            dialog.hide();
        });
        it('lets the user navigate forwards to the next frame with the mouse', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
            const filmStrip = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Extras.FilmStrip.fromTraceData(traceData);
            const { dialog, shadowRoot } = await renderDialogWithTraceEngine(filmStrip, 0);
            const nextBtn = shadowRoot.querySelectorAll('devtools-button')[1];
            assert.isTrue(nextBtn.textContent === '▶' || nextBtn.textContent === '&#9654;');
            if (!nextBtn) {
                throw new Error('Could not find next button');
            }
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(nextBtn);
            await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.raf)();
            const renderedImage = shadowRoot.querySelector('[data-film-strip-dialog-img]');
            assert.isTrue(renderedImage?.currentSrc.includes(traceData.Screenshots[1].args.dataUri));
            dialog.hide();
        });
        it('does not let the user go beyond the last image', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
            const filmStrip = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Extras.FilmStrip.fromTraceData(traceData);
            const numberOfFrames = filmStrip.frames.length;
            const { dialog, shadowRoot } = await renderDialogWithTraceEngine(filmStrip, numberOfFrames - 1);
            let renderedImage = shadowRoot.querySelector('[data-film-strip-dialog-img]');
            assert.isTrue(renderedImage?.currentSrc.includes(traceData.Screenshots[numberOfFrames - 1].args.dataUri));
            const nextBtn = shadowRoot.querySelectorAll('devtools-button')[1];
            assert.isTrue(nextBtn.textContent === '▶' || nextBtn.textContent === '&#9654;');
            if (!nextBtn) {
                throw new Error('Could not find next button');
            }
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(nextBtn);
            await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.raf)();
            renderedImage = shadowRoot.querySelector('[data-film-strip-dialog-img]');
            assert.isTrue(renderedImage?.currentSrc.includes(traceData.Screenshots[numberOfFrames - 1].args.dataUri));
            dialog.hide();
        });
        it('lets the user navigate forwards to the next frame with the keyboard', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
            const filmStrip = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Extras.FilmStrip.fromTraceData(traceData);
            const { dialog, shadowRoot } = await renderDialogWithTraceEngine(filmStrip, 0);
            const renderedImage = shadowRoot.querySelector('[data-film-strip-dialog-img]');
            if (!renderedImage) {
                throw new Error('Could not find film-strip-dialog img');
            }
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchKeyDownEvent)(renderedImage, {
                key: 'ArrowRight',
                bubbles: true,
            });
            await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.raf)();
            assert.isTrue(renderedImage?.currentSrc.includes(traceData.Screenshots[1].args.dataUri));
            dialog.hide();
        });
    });
});
//# sourceMappingURL=FilmStripView.test.js.map

/***/ })

}]);