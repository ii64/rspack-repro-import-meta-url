"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_legacy_components_inline_editor_ColorSwatch_test_ts"],{

/***/ "./src/testing/ContextMenuHelpers.ts":
/*!*******************************************!*\
  !*** ./src/testing/ContextMenuHelpers.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findMenuItemWithLabel: () => (/* binding */ findMenuItemWithLabel),
/* harmony export */   getContextMenuForElement: () => (/* binding */ getContextMenuForElement),
/* harmony export */   getMenuForShiftClick: () => (/* binding */ getMenuForShiftClick),
/* harmony export */   getMenuForToolbarButton: () => (/* binding */ getMenuForToolbarButton),
/* harmony export */   getMenuItemLabels: () => (/* binding */ getMenuItemLabels)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function getMenu(action) {
    const sandbox = sinon.createSandbox();
    const contextMenuShow = sandbox.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.ContextMenu.ContextMenu.prototype, 'show').resolves();
    action();
    sandbox.restore();
    return contextMenuShow.thisValues[0];
}
function getMenuForToolbarButton(button) {
    return getMenu(() => {
        button.clicked(new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));
    });
}
function findMenuItemWithLabel(section, label) {
    return section.items.find((item) => item.buildDescriptor().label === label);
}
function getMenuItemLabels(section) {
    return section.items.map((item) => item.buildDescriptor().label);
}
function getContextMenuForElement(element, target) {
    return getMenu(() => {
        const event = new MouseEvent('contextmenu', { bubbles: true });
        if (target) {
            sinon.stub(event, 'target').value(target);
        }
        element.dispatchEvent(event);
    });
}
function getMenuForShiftClick(element) {
    return getMenu(() => {
        element.dispatchEvent(new MouseEvent('click', { shiftKey: true }));
    });
}


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


/***/ }),

/***/ "./src/ui/legacy/components/inline_editor/ColorSwatch.test.ts":
/*!********************************************************************!*\
  !*** ./src/ui/legacy/components/inline_editor/ColorSwatch.test.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../testing/ContextMenuHelpers.js */ "./src/testing/ContextMenuHelpers.ts");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _inline_editor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inline_editor.js */ "./src/ui/legacy/components/inline_editor/inline_editor.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





function assertSwatch(swatch, expected) {
    const swatchEl = swatch.shadowRoot.querySelector('.color-swatch');
    assert.instanceOf(swatchEl, HTMLElement);
    const swatchInnerEl = swatch.shadowRoot.querySelector('.color-swatch-inner');
    assert.instanceOf(swatchInnerEl, HTMLElement);
    const slotEl = swatch.shadowRoot.querySelector('slot');
    assert.instanceOf(slotEl, HTMLElement);
    if (expected.backgroundColor) {
        assert.strictEqual(swatchInnerEl.style.backgroundColor, expected.backgroundColor, 'The swatch has the correct color');
    }
    if (expected.colorTextInSlot) {
        assert.strictEqual(slotEl.textContent, expected.colorTextInSlot, 'The slot shows the correct default color');
    }
    if (expected.tooltip) {
        assert.strictEqual(swatchEl.getAttribute('title'), expected.tooltip, 'The tooltip is correct');
    }
}
function createSwatch(color, tooltip) {
    const parsedColor = typeof color === 'string' ? _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(color) : color;
    assert.isOk(parsedColor);
    const swatch = new _inline_editor_js__WEBPACK_IMPORTED_MODULE_4__.ColorSwatch.ColorSwatch(tooltip);
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(swatch);
    swatch.renderColor(parsedColor);
    return swatch;
}
function getClickTarget(swatch) {
    return swatch.shadowRoot.querySelector('.color-swatch-inner');
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithLocale)('ColorSwatch', () => {
    it('accepts colors as color objects', () => {
        const swatch = createSwatch(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('red'));
        assertSwatch(swatch, {
            backgroundColor: 'red',
            colorTextInSlot: 'red',
        });
        swatch.renderColor(new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Legacy([1, .5, .2, .5], _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.RGBA));
        assertSwatch(swatch, {
            backgroundColor: 'rgba(255, 128, 51, 0.5)',
            colorTextInSlot: 'rgb(255 128 51 / 50%)',
        });
    });
    it('displays a default tooltip', () => {
        const swatch = createSwatch('red');
        assertSwatch(swatch, { tooltip: 'Shift-click to change color format' });
    });
    it('can display a custom tooltip', () => {
        const swatch = createSwatch('red', 'This is a custom tooltip');
        assertSwatch(swatch, { tooltip: 'This is a custom tooltip' });
    });
    it('dispatches an event on clicks', () => {
        const swatch = createSwatch('red');
        const target = getClickTarget(swatch);
        const swatchClickEventsReceived = [];
        const onClick = (e) => {
            swatchClickEventsReceived.push(e);
        };
        swatch.addEventListener(_inline_editor_js__WEBPACK_IMPORTED_MODULE_4__.ColorSwatch.ClickEvent.eventName, onClick);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(target);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(target);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(target);
        assert.strictEqual(swatchClickEventsReceived.length, 3, 'The right click events were received');
        swatch.removeEventListener(_inline_editor_js__WEBPACK_IMPORTED_MODULE_4__.ColorSwatch.ClickEvent.eventName, onClick);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(target);
        assert.strictEqual(swatchClickEventsReceived.length, 3, 'No more click events received after removing listener');
    });
    it('does not dispatch an event on click when it is readonly', () => {
        const swatch = createSwatch('red');
        swatch.setReadonly(true);
        const target = getClickTarget(swatch);
        const swatchClickEventsReceived = [];
        const onClick = (e) => {
            swatchClickEventsReceived.push(e);
        };
        swatch.addEventListener(_inline_editor_js__WEBPACK_IMPORTED_MODULE_4__.ColorSwatch.ClickEvent.eventName, onClick);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(target);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(target);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(target);
        assert.strictEqual(swatchClickEventsReceived.length, 0, 'No click events received for readonly color swatch');
    });
    it('does not dispatch a swatch-click event on shift-click', () => {
        const swatch = createSwatch('red');
        const target = getClickTarget(swatch);
        const swatchClickEventsReceived = [];
        const onClick = (e) => {
            swatchClickEventsReceived.push(e);
        };
        swatch.addEventListener(_inline_editor_js__WEBPACK_IMPORTED_MODULE_4__.ColorSwatch.ClickEvent.eventName, onClick);
        const contextMenu = (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getMenuForShiftClick)(target);
        assert.strictEqual(swatchClickEventsReceived.length, 0, 'No swatch-click events are received on shift-click');
        swatch.removeEventListener(_inline_editor_js__WEBPACK_IMPORTED_MODULE_4__.ColorSwatch.ClickEvent.eventName, onClick);
        assert.exists(contextMenu);
    });
    it('does not dispatch a formatchanged event on click', () => {
        const swatch = createSwatch('red');
        const target = getClickTarget(swatch);
        const formatChangedEventsReceived = [];
        const onClick = (e) => {
            formatChangedEventsReceived.push(e);
        };
        swatch.addEventListener(_inline_editor_js__WEBPACK_IMPORTED_MODULE_4__.ColorSwatch.ColorChangedEvent.eventName, onClick);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(target);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(target);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(target);
        assert.strictEqual(formatChangedEventsReceived.length, 0, 'No formatchanged events are received on click');
        swatch.removeEventListener(_inline_editor_js__WEBPACK_IMPORTED_MODULE_4__.ColorSwatch.ColorChangedEvent.eventName, onClick);
    });
    it('produces a color conversion menu', () => {
        // Without alpha:
        const swatch = createSwatch('#ff0000');
        const target = getClickTarget(swatch);
        let menu = (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getMenuForShiftClick)(target);
        assert.deepEqual((0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getMenuItemLabels)(menu.section('legacy')), [
            'red',
            // HEX is skipped because it is the input format
            '#f00',
            'rgb(255 0 0)',
            'hsl(0deg 100% 50%)',
            'hwb(0deg 0% 0%)',
        ]);
        assert.deepEqual((0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getMenuItemLabels)(menu.section('wide')), [
            'lch(54 106.85 40.86)',
            'oklch(0.63 0.26 29.23)',
            'lab(54 80.82 69.9)',
            'oklab(0.63 0.22 0.13)',
        ]);
        let colorFunction = (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.findMenuItemWithLabel)(menu.section('color-function'), 'color()').defaultSection();
        assert.exists(colorFunction);
        assert.deepEqual((0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getMenuItemLabels)(colorFunction), [
            'color(srgb 1 0 0)',
            'color(srgb-linear 1 0 0)',
            'color(display-p3 0.92 0.2 0.14)',
            'color(a98-rgb 0.86 0 0)',
            'color(prophoto-rgb 0.7 0.28 0.1)',
            'color(rec2020 0.79 0.23 0.07)',
            'color(xyz 0.41 0.21 0.02)',
            'color(xyz-d50 0.44 0.22 0.01)',
            'color(xyz-d65 0.41 0.21 0.02)',
        ]);
        // With alpha:
        swatch.renderColor(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('#ff000080'));
        menu = (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getMenuForShiftClick)(target);
        assert.deepEqual((0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getMenuItemLabels)(menu.section('legacy')), [
            // HEXA is skipped because it's the input
            'rgb(255 0 0 / 50%)',
            'hsl(0deg 100% 50% / 50.2%)',
            'hwb(0deg 0% 0% / 50.2%)',
        ]);
        assert.deepEqual((0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getMenuItemLabels)(menu.section('wide')), [
            'lch(54 106.85 40.86 / 0.5)',
            'oklch(0.63 0.26 29.23 / 0.5)',
            'lab(54 80.82 69.9 / 0.5)',
            'oklab(0.63 0.22 0.13 / 0.5)',
        ]);
        colorFunction =
            (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.findMenuItemWithLabel)(menu.section('color-function'), 'color()').defaultSection();
        assert.exists(colorFunction);
        assert.deepEqual((0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getMenuItemLabels)(colorFunction), [
            'color(srgb 1 0 0 / 0.5)',
            'color(srgb-linear 1 0 0 / 0.5)',
            'color(display-p3 0.92 0.2 0.14 / 0.5)',
            'color(a98-rgb 0.86 0 0 / 0.5)',
            'color(prophoto-rgb 0.7 0.28 0.1 / 0.5)',
            'color(rec2020 0.79 0.23 0.07 / 0.5)',
            'color(xyz 0.41 0.21 0.02 / 0.5)',
            'color(xyz-d50 0.44 0.22 0.01 / 0.5)',
            'color(xyz-d65 0.41 0.21 0.02 / 0.5)',
        ]);
        // With alpha:
        swatch.renderColor(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('lab(54.29 80.82 69.9 / 0.5)'));
        menu = (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getMenuForShiftClick)(target);
        assert.deepEqual((0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getMenuItemLabels)(menu.section('legacy')), [
            '#ff000080',
            'rgb(255 0 0 / 50%)',
            'hsl(360deg 100% 50% / 50%)',
            'hwb(360deg 0% 0% / 50%)',
        ]);
        assert.deepEqual((0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getMenuItemLabels)(menu.section('wide')), [
            'lch(54 106.85 40.86 / 0.5)',
            'oklch(0.63 0.26 29.23 / 0.5)',
            //  'lab(54.29 80.82 69.9 / 0.5)',
            'oklab(0.63 0.22 0.13 / 0.5)',
        ]);
        colorFunction =
            (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.findMenuItemWithLabel)(menu.section('color-function'), 'color()').defaultSection();
        assert.exists(colorFunction);
        assert.deepEqual((0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getMenuItemLabels)(colorFunction), [
            'color(srgb 1 0 0 / 0.5)',
            'color(srgb-linear 1 0 0 / 0.5)',
            'color(display-p3 0.92 0.2 0.14 / 0.5)',
            'color(a98-rgb 0.86 0 0 / 0.5)',
            'color(prophoto-rgb 0.7 0.28 0.1 / 0.5)',
            'color(rec2020 0.79 0.23 0.07 / 0.5)',
            'color(xyz 0.41 0.21 0.02 / 0.5)',
            'color(xyz-d50 0.44 0.22 0.01 / 0.5)',
            'color(xyz-d65 0.41 0.21 0.02 / 0.5)',
        ]);
    });
    it('does not produce a color conversion menu when it is readonly', () => {
        const swatch = createSwatch('#ff0000');
        swatch.setReadonly(true);
        const target = getClickTarget(swatch);
        const menu = (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getMenuForShiftClick)(target);
        assert.notExists(menu);
    });
});


/***/ })

}]);