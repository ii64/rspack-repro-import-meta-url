"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_legacy_components_inline_editor_CSSAngle_test_ts"],{

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

/***/ "./src/ui/legacy/components/inline_editor/CSSAngle.test.ts":
/*!*****************************************************************!*\
  !*** ./src/ui/legacy/components/inline_editor/CSSAngle.test.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inline_editor.js */ "./src/ui/legacy/components/inline_editor/inline_editor.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


const assertPopoverOpen = (root) => {
    const popover = root.querySelector('.popover');
    assert.exists(popover);
};
const assertPopoverClosed = (root) => {
    const popover = root.querySelector('.popover');
    assert.notExists(popover);
};
const assertAndGetSwatch = (root) => {
    const swatch = root.querySelector('devtools-css-angle-swatch');
    if (!swatch) {
        assert.fail('swatch was not rendered');
        return;
    }
    return swatch;
};
const togglePopover = (root) => {
    const swatch = assertAndGetSwatch(root);
    swatch?.click();
};
const assertNewAngleFromEvent = (angle, event, approximateNewValue) => {
    const newAngle = _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.getNewAngleFromEvent(angle, event);
    if (!newAngle) {
        assert.fail('should create a new angle');
        return;
    }
    assert.strictEqual(newAngle.unit, angle.unit);
    assert.approximately(newAngle.value, approximateNewValue, 0.1);
};
const initialData = {
    angleText: '45deg',
    containingPane: document.createElement('div'),
};
describe('CSSAngle', () => {
    it('can open and close a popover', () => {
        const component = new _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngle.CSSAngle();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        component.data = initialData;
        assert.isNotNull(component.shadowRoot);
        assertPopoverClosed(component.shadowRoot);
        togglePopover(component.shadowRoot);
        assertPopoverOpen(component.shadowRoot);
        togglePopover(component.shadowRoot);
        assertPopoverClosed(component.shadowRoot);
    });
    it('can fire events when toggling the popover', () => {
        const component = new _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngle.CSSAngle();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        let isPopoverOpen = false;
        component.data = initialData;
        component.addEventListener('popovertoggled', (event) => {
            const popoverToggledEvent = event;
            isPopoverOpen = popoverToggledEvent.data.open;
        });
        assert.isNotNull(component.shadowRoot);
        assertPopoverClosed(component.shadowRoot);
        togglePopover(component.shadowRoot);
        assertPopoverOpen(component.shadowRoot);
        assert.isTrue(isPopoverOpen, 'external isPopoverOpen flag not synced');
        togglePopover(component.shadowRoot);
        assertPopoverClosed(component.shadowRoot);
        assert.isFalse(isPopoverOpen, 'external isPopoverOpen flag not synced');
    });
    it('can change unit when the swatch is shift-clicked upon', () => {
        const component = new _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngle.CSSAngle();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        component.data = initialData;
        assert.isNotNull(component.shadowRoot);
        let cssAngleText = initialData.angleText;
        component.addEventListener('unitchanged', (event) => {
            const { data } = event;
            cssAngleText = data.value;
        });
        const swatch = assertAndGetSwatch(component.shadowRoot);
        if (!swatch) {
            return;
        }
        const shiftClick = new MouseEvent('click', { shiftKey: true });
        swatch.dispatchEvent(shiftClick);
        assert.strictEqual(cssAngleText, '50grad', 'angle unit should change to Grad from Deg');
    });
    it('can +/- angle values when pressing UP or DOWN keys', () => {
        const component = new _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngle.CSSAngle();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        component.data = initialData;
        assert.isNotNull(component.shadowRoot);
        let cssAngleText = initialData.angleText;
        component.addEventListener('valuechanged', (event) => {
            const { data } = event;
            cssAngleText = data.value;
        });
        togglePopover(component.shadowRoot);
        const angleContainer = component.shadowRoot.querySelector('.css-angle');
        if (!angleContainer) {
            assert.fail('angle container was not rendered');
            return;
        }
        const arrowUp = new KeyboardEvent('keydown', { key: 'ArrowUp' });
        angleContainer.dispatchEvent(arrowUp);
        assert.strictEqual(cssAngleText, '46deg', 'angle value should increase by 1 when ArrowUp is pressed');
        const arrowDownShift = new KeyboardEvent('keydown', { key: 'ArrowDown', shiftKey: true });
        angleContainer.dispatchEvent(arrowDownShift);
        assert.strictEqual(cssAngleText, '36deg', 'angle value should increase by 1 when ArrowUp is pressed');
    });
    describe('#CSSAngleUtils', () => {
        it('can fire InlineEditor.CSSAngle.PopoverToggledEvent when toggling the popover', () => {
            const component = new _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngle.CSSAngle();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
            let shouldPopoverEventBeOpen = false;
            component.data = initialData;
            component.addEventListener('popovertoggled', (event) => {
                const popoverEvent = event;
                assert.strictEqual(popoverEvent.data.open, shouldPopoverEventBeOpen);
            });
            assert.isNotNull(component.shadowRoot);
            assertPopoverClosed(component.shadowRoot);
            shouldPopoverEventBeOpen = true;
            togglePopover(component.shadowRoot);
            shouldPopoverEventBeOpen = false;
            togglePopover(component.shadowRoot);
        });
        it('parses CSS properties with angles correctly', () => {
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.parseText('rotate(45deg)'), { value: 45, unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Deg });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.parseText('rotate(calc(45deg))'), { value: 45, unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Deg });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.parseText('skew(20deg)'), { value: 20, unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Deg });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.parseText('rotateX(20deg)'), { value: 20, unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Deg });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.parseText('rotateY(20deg)'), { value: 20, unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Deg });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.parseText('rotateZ(20deg)'), { value: 20, unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Deg });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.parseText('rotate3d(1, 1, 1, 20deg)'), { value: 20, unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Deg });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.parseText('linear-gradient(10.5grad, black, white)'), { value: 10.5, unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Grad });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.parseText('conic-gradient(black 25%, white 10deg 50%, black 20deg 75%, white 30deg)'), { value: 10, unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Deg });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.parseText('rotate3d(2, -1, -1, -0.2rad);'), { value: -0.2, unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Rad });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.parseText('hue-rotate(1.5turn)'), { value: 1.5, unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Turn });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.parseText('oblique 25deg'), { value: 25, unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Deg });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.parseText('ray(20.8deg closest-side)'), { value: 20.8, unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Deg });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.parseText('rotate(12345)'), null);
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.parseText(''), null);
            // TODO(changhaohan): crbug.com/1138628 handle unitless 0 case
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.parseText('rotate(0)'), null);
        });
        it('converts angles in degree to other units correctly', () => {
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.getAngleFromRadians(Math.PI / 4, _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Grad), {
                value: 50,
                unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Grad,
            });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.getAngleFromRadians(Math.PI / 4, _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Rad), {
                value: Math.PI / 4,
                unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Rad,
            });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.getAngleFromRadians(Math.PI / 4, _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Turn), {
                value: 0.125,
                unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Turn,
            });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.getAngleFromRadians(Math.PI / 4, _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Deg), {
                value: 45,
                unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Deg,
            });
        });
        it('converts angles in other units to radians correctly', () => {
            assert.strictEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.getRadiansFromAngle({
                value: 50,
                unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Grad,
            }), 0.7853981633974483);
            assert.strictEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.getRadiansFromAngle({
                value: 45,
                unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Deg,
            }), 0.7853981633974483);
            assert.strictEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.getRadiansFromAngle({
                value: 0.125,
                unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Turn,
            }), 0.7853981633974483);
            assert.strictEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.getRadiansFromAngle({
                value: 1,
                unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Rad,
            }), 1);
        });
        it('gets 2D translations for angles correctly', () => {
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.get2DTranslationsForAngle({
                value: 45,
                unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Deg,
            }, 1), {
                translateX: 0.7071067811865475,
                translateY: -0.7071067811865476,
            });
        });
        it('rounds angles by units correctly', () => {
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.roundAngleByUnit({
                value: 45.723,
                unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Deg,
            }), {
                value: 46,
                unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Deg,
            });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.roundAngleByUnit({
                value: 45.723,
                unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Grad,
            }), {
                value: 46,
                unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Grad,
            });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.roundAngleByUnit({
                value: 45.723,
                unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Rad,
            }), {
                value: 45.723,
                unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Rad,
            });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.roundAngleByUnit({
                value: 45.723275,
                unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Rad,
            }), {
                value: 45.7233,
                unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Rad,
            });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.roundAngleByUnit({
                value: 45.723275,
                unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Turn,
            }), {
                value: 45.72,
                unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Turn,
            });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.roundAngleByUnit({
                value: 45.8,
                unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Turn,
            }), {
                value: 45.8,
                unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Turn,
            });
        });
        it('cycles angle units correctly', () => {
            assert.strictEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.getNextUnit(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Deg), _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Grad);
            assert.strictEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.getNextUnit(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Grad), _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Rad);
            assert.strictEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.getNextUnit(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Rad), _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Turn);
            assert.strictEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.getNextUnit(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Turn), _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Deg);
        });
        it('converts angle units correctly', () => {
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.convertAngleUnit({
                value: 45,
                unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Deg,
            }, _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Grad), {
                value: 50,
                unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Grad,
            });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.convertAngleUnit({
                value: Math.PI / 180,
                unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Rad,
            }, _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Deg), {
                value: 1,
                unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Deg,
            });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.convertAngleUnit({
                value: 1,
                unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Turn,
            }, _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Deg), {
                value: 360,
                unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Deg,
            });
        });
        it('gets new angles from events correctly', () => {
            const originalAngle = {
                value: 45,
                unit: _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.AngleUnit.Deg,
            };
            const arrowDown = new KeyboardEvent('keydown', { key: 'ArrowDown' });
            const arrowUpShift = new KeyboardEvent('keydown', { key: 'ArrowUp', shiftKey: true });
            const wheelUp = new WheelEvent('wheel', { deltaY: 1 });
            const wheelDownShift = new WheelEvent('wheel', { deltaX: -1, shiftKey: true });
            assertNewAngleFromEvent(originalAngle, arrowDown, 44);
            assertNewAngleFromEvent(originalAngle, arrowUpShift, 55);
            assertNewAngleFromEvent(originalAngle, wheelUp, 44);
            assertNewAngleFromEvent(originalAngle, wheelDownShift, 55);
            const otherEvent = new MouseEvent('mousedown');
            assert.notExists(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.getNewAngleFromEvent(originalAngle, otherEvent));
        });
    });
});


/***/ })

}]);