"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_perf_ui_PieChart_test_js"],{

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

/***/ "./ui/legacy/components/perf_ui/PieChart.test.js":
/*!*******************************************************!*\
  !*** ./ui/legacy/components/perf_ui/PieChart.test.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const testChartData = {
    chartName: 'Contents of a Pie',
    size: 110,
    formatter: (value) => String(value) + ' f',
    showLegend: true,
    total: 100,
    slices: [{ value: 75, color: 'crimson', title: 'Filling' }, { value: 25, color: 'burlywood', title: 'Crust' }],
};
const testChartNoLegendData = {
    chartName: 'Contents of a Pie',
    size: 110,
    formatter: (value) => String(value) + ' f',
    showLegend: false,
    total: 100,
    slices: [{ value: 75, color: 'crimson', title: 'Filling' }, { value: 25, color: 'burlywood', title: 'Crust' }],
};
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithLocale)('PieChart', () => {
    describe('with legend', () => {
        it('is labelled by the chart name', () => {
            const chart = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.PieChart.PieChart();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(chart);
            chart.data = testChartData;
            assert.isNotNull(chart.shadowRoot);
            const root = chart.shadowRoot.querySelector('[aria-label="Contents of a Pie"]');
            assert.isTrue(root.classList.contains('root'));
        });
        it('has path nodes for a 2-slice chart', () => {
            const chart = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.PieChart.PieChart();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(chart);
            chart.data = testChartData;
            assert.isNotNull(chart.shadowRoot);
            const slices = chart.shadowRoot.querySelectorAll('path');
            assert.strictEqual(slices.length, 2);
        });
        it('has a legend', () => {
            const chart = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.PieChart.PieChart();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(chart);
            chart.data = testChartData;
            assert.isNotNull(chart.shadowRoot);
            const legendRows = chart.shadowRoot.querySelectorAll('.pie-chart-legend-row');
            assert.strictEqual(legendRows.length, 3);
        });
        it('formats the slice in the legend', () => {
            const chart = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.PieChart.PieChart();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(chart);
            chart.data = testChartData;
            assert.isNotNull(chart.shadowRoot);
            const legendRows = chart.shadowRoot.querySelectorAll('.pie-chart-size');
            assert.strictEqual(legendRows[0].textContent?.trim(), '75 f');
            assert.strictEqual(legendRows[1].textContent?.trim(), '25 f');
        });
        it('has a total', () => {
            const chart = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.PieChart.PieChart();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(chart);
            chart.data = testChartData;
            assert.isNotNull(chart.shadowRoot);
            const total = chart.shadowRoot.querySelector('.pie-chart-total');
            assert.isNotNull(total);
        });
        it('formats the total', () => {
            const chart = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.PieChart.PieChart();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(chart);
            chart.data = testChartData;
            assert.isNotNull(chart.shadowRoot);
            const total = chart.shadowRoot.querySelector('.pie-chart-total');
            assert.strictEqual(total.textContent.trim(), '100 f');
        });
        it('selects total by default', () => {
            const chart = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.PieChart.PieChart();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(chart);
            chart.data = testChartData;
            assert.isNotNull(chart.shadowRoot);
            const legendRows = chart.shadowRoot.querySelectorAll('.pie-chart-legend-row');
            assert.strictEqual(legendRows.length, 3);
            // Legend has one selected item.
            const fillingLegendRow = legendRows[0];
            const crustLegendRow = legendRows[1];
            const totalLegendRow = legendRows[2];
            assert.isFalse(fillingLegendRow.classList.contains('selected'));
            assert.isFalse(crustLegendRow.classList.contains('selected'));
            assert.isTrue(totalLegendRow.classList.contains('selected'));
            // Chart total display in the center is selected.
            const total = chart.shadowRoot.querySelector('.pie-chart-total');
            assert.isTrue(total.classList.contains('selected'));
        });
        it('sets tabIndex=-1 on the slice', () => {
            const chart = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.PieChart.PieChart();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(chart);
            chart.data = testChartData;
            assert.isNotNull(chart.shadowRoot);
            const slice = chart.shadowRoot.querySelector('path');
            assert.strictEqual(slice.tabIndex, -1);
        });
        it('changes selected when clicking the legend', () => {
            const chart = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.PieChart.PieChart();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(chart);
            chart.data = testChartData;
            assert.isNotNull(chart.shadowRoot);
            const legendName = chart.shadowRoot.querySelector('.pie-chart-name');
            legendName.click();
            const legendRows = chart.shadowRoot.querySelectorAll('.pie-chart-legend-row');
            assert.strictEqual(legendRows.length, 3);
            const fillingLegendRow = legendRows[0];
            const crustLegendRow = legendRows[1];
            const totalLegendRow = legendRows[2];
            assert.isTrue(fillingLegendRow.classList.contains('selected'));
            assert.isFalse(crustLegendRow.classList.contains('selected'));
            assert.isFalse(totalLegendRow.classList.contains('selected'));
            // Chart total display in the center is not selected.
            const total = chart.shadowRoot.querySelector('.pie-chart-total');
            assert.isFalse(total.classList.contains('selected'));
        });
        it('changes selected when clicking the chart', () => {
            const chart = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.PieChart.PieChart();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(chart);
            chart.data = testChartData;
            assert.isNotNull(chart.shadowRoot);
            const slice = chart.shadowRoot.querySelector('[aria-label="Filling"');
            slice.dispatchEvent(new Event('click'));
            const legendRows = chart.shadowRoot.querySelectorAll('.pie-chart-legend-row');
            assert.strictEqual(legendRows.length, 3);
            const fillingLegendRow = legendRows[0];
            const crustLegendRow = legendRows[1];
            const totalLegendRow = legendRows[2];
            assert.isTrue(fillingLegendRow.classList.contains('selected'));
            assert.isFalse(crustLegendRow.classList.contains('selected'));
            assert.isFalse(totalLegendRow.classList.contains('selected'));
            // Chart total display in the center is not selected.
            const total = chart.shadowRoot.querySelector('.pie-chart-total');
            assert.isFalse(total.classList.contains('selected'));
        });
        it('does not show a focus ring for click selection', () => {
            const chart = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.PieChart.PieChart();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(chart);
            chart.data = testChartData;
            assert.isNotNull(chart.shadowRoot);
            const legendName = chart.shadowRoot.querySelector('.pie-chart-name');
            legendName.click();
            const legendRow = chart.shadowRoot.querySelector('.pie-chart-legend-row:focus-visible');
            assert.isNull(legendRow);
        });
        it('shows a focus ring for keyboard selection', () => {
            const chart = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.PieChart.PieChart();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(chart);
            chart.data = testChartData;
            assert.isNotNull(chart.shadowRoot);
            const root = chart.shadowRoot.querySelector('.root');
            root.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }));
            const legendRow = chart.shadowRoot.querySelector('.pie-chart-legend-row:focus-visible');
            assert.isNotNull(legendRow);
        });
    });
    describe('without legend', () => {
        it('has no legend', () => {
            const chart = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.PieChart.PieChart();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(chart);
            chart.data = testChartNoLegendData;
            assert.isNotNull(chart.shadowRoot);
            const legendRows = chart.shadowRoot.querySelectorAll('.pie-chart-legend-row');
            assert.strictEqual(legendRows.length, 0);
        });
        it('sets tabIndex=1 on total', () => {
            const chart = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.PieChart.PieChart();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(chart);
            chart.data = testChartNoLegendData;
            assert.isNotNull(chart.shadowRoot);
            // This is different in no-legend mode!
            const total = chart.shadowRoot.querySelector('.pie-chart-total');
            assert.strictEqual(total.tabIndex, 1);
        });
    });
});
//# sourceMappingURL=PieChart.test.js.map

/***/ })

}]);