"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_linear_memory_inspector_components_ValueInterpreterSettings_test_js"],{

/***/ "./panels/linear_memory_inspector/components/LinearMemoryViewerUtils.js":
/*!******************************************************************************!*\
  !*** ./panels/linear_memory_inspector/components/LinearMemoryViewerUtils.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//# sourceMappingURL=LinearMemoryViewerUtils.js.map

/***/ }),

/***/ "./panels/linear_memory_inspector/components/ValueInterpreterSettings.test.js":
/*!************************************************************************************!*\
  !*** ./panels/linear_memory_inspector/components/ValueInterpreterSettings.test.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components.js */ "./panels/linear_memory_inspector/components/components.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const SETTINGS_INPUT_SELECTOR = '[data-input]';
const SETTINGS_TITLE_SELECTOR = '[data-title]';
const SETTINGS_LABEL_SELECTOR = '.type-label';
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithLocale)('ValueInterpreterSettings', () => {
    function setUpComponent() {
        const component = new _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterSettings.ValueInterpreterSettings();
        const data = {
            valueTypes: new Set([
                "Integer 8-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int8 */,
                "Float 64-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Float64 */,
                "Pointer 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Pointer32 */,
            ]),
        };
        component.data = data;
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        return { component, data };
    }
    it('renders all checkboxes', () => {
        const { component } = setUpComponent();
        const checkboxes = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, SETTINGS_LABEL_SELECTOR, HTMLLabelElement);
        const checkboxLabels = Array.from(checkboxes, checkbox => checkbox.getAttribute('title'));
        assert.deepEqual(checkboxLabels, [
            "Integer 8-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int8 */,
            "Integer 16-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int16 */,
            "Integer 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int32 */,
            "Integer 64-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int64 */,
            "Float 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Float32 */,
            "Float 64-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Float64 */,
            "Pointer 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Pointer32 */,
            "Pointer 64-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Pointer64 */,
        ]);
    });
    it('triggers an event on checkbox click', async () => {
        const { component } = setUpComponent();
        const labels = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, SETTINGS_LABEL_SELECTOR, HTMLLabelElement);
        for (const label of labels) {
            const checkbox = label.querySelector(SETTINGS_INPUT_SELECTOR);
            assert.instanceOf(checkbox, HTMLInputElement);
            const title = label.querySelector(SETTINGS_TITLE_SELECTOR);
            assert.instanceOf(title, HTMLSpanElement);
            const checked = checkbox.checked;
            const eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'typetoggle');
            checkbox.click();
            const event = await eventPromise;
            assert.strictEqual(`${event.data.type}`, title.innerText);
            assert.strictEqual(checkbox.checked, !checked);
        }
    });
    it('correctly shows checkboxes as checked/unchecked', () => {
        const { component, data } = setUpComponent();
        const labels = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, SETTINGS_LABEL_SELECTOR, HTMLLabelElement);
        const elements = Array.from(labels).map(label => {
            const checkbox = label.querySelector(SETTINGS_INPUT_SELECTOR);
            const title = label.querySelector(SETTINGS_TITLE_SELECTOR);
            assert.instanceOf(checkbox, HTMLInputElement);
            assert.instanceOf(title, HTMLSpanElement);
            return { title, checked: checkbox.checked };
        });
        assert.isAtLeast(data.valueTypes.size, 1);
        const checkedTitles = new Set(elements.filter(n => n.checked).map(n => n.title.innerText));
        const expectedTitles = new Set([...data.valueTypes].map(type => `${type}`));
        assert.deepEqual(checkedTitles, expectedTitles);
        const uncheckedTitles = new Set(elements.filter(n => !n.checked).map(n => n.title.innerText));
        const allTypesTitle = [
            "Integer 8-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int8 */,
            "Integer 16-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int16 */,
            "Integer 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int32 */,
            "Integer 64-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int64 */,
            "Float 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Float32 */,
            "Float 64-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Float64 */,
            "Pointer 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Pointer32 */,
            "Pointer 64-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Pointer64 */,
        ];
        const expectedUncheckedTitles = new Set(allTypesTitle.filter(title => !expectedTitles.has(title)));
        assert.deepEqual(uncheckedTitles, expectedUncheckedTitles);
    });
});
//# sourceMappingURL=ValueInterpreterSettings.test.js.map

/***/ }),

/***/ "./panels/linear_memory_inspector/components/components.js":
/*!*****************************************************************!*\
  !*** ./panels/linear_memory_inspector/components/components.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinearMemoryHighlightChipList: () => (/* reexport module object */ _LinearMemoryHighlightChipList_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   LinearMemoryInspector: () => (/* reexport module object */ _LinearMemoryInspector_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   LinearMemoryInspectorUtils: () => (/* reexport module object */ _LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   LinearMemoryNavigator: () => (/* reexport module object */ _LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   LinearMemoryValueInterpreter: () => (/* reexport module object */ _LinearMemoryValueInterpreter_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   LinearMemoryViewer: () => (/* reexport module object */ _LinearMemoryViewer_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   LinearMemoryViewerUtils: () => (/* reexport module object */ _LinearMemoryViewerUtils_js__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   ValueInterpreterDisplay: () => (/* reexport module object */ _ValueInterpreterDisplay_js__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   ValueInterpreterDisplayUtils: () => (/* reexport module object */ _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   ValueInterpreterSettings: () => (/* reexport module object */ _ValueInterpreterSettings_js__WEBPACK_IMPORTED_MODULE_9__)
/* harmony export */ });
/* harmony import */ var _LinearMemoryHighlightChipList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinearMemoryHighlightChipList.js */ "./panels/linear_memory_inspector/components/LinearMemoryHighlightChipList.js");
/* harmony import */ var _LinearMemoryInspector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinearMemoryInspector.js */ "./panels/linear_memory_inspector/components/LinearMemoryInspector.js");
/* harmony import */ var _LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinearMemoryInspectorUtils.js */ "./panels/linear_memory_inspector/components/LinearMemoryInspectorUtils.js");
/* harmony import */ var _LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LinearMemoryNavigator.js */ "./panels/linear_memory_inspector/components/LinearMemoryNavigator.js");
/* harmony import */ var _LinearMemoryValueInterpreter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LinearMemoryValueInterpreter.js */ "./panels/linear_memory_inspector/components/LinearMemoryValueInterpreter.js");
/* harmony import */ var _LinearMemoryViewer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LinearMemoryViewer.js */ "./panels/linear_memory_inspector/components/LinearMemoryViewer.js");
/* harmony import */ var _LinearMemoryViewerUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LinearMemoryViewerUtils.js */ "./panels/linear_memory_inspector/components/LinearMemoryViewerUtils.js");
/* harmony import */ var _ValueInterpreterDisplay_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ValueInterpreterDisplay.js */ "./panels/linear_memory_inspector/components/ValueInterpreterDisplay.js");
/* harmony import */ var _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ValueInterpreterDisplayUtils.js */ "./panels/linear_memory_inspector/components/ValueInterpreterDisplayUtils.js");
/* harmony import */ var _ValueInterpreterSettings_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ValueInterpreterSettings.js */ "./panels/linear_memory_inspector/components/ValueInterpreterSettings.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.











//# sourceMappingURL=components.js.map

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