"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_data_grid_DataGridController_test_ts"],{

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

/***/ "./src/testing/DataGridHelpers.ts":
/*!****************************************!*\
  !*** ./src/testing/DataGridHelpers.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assertCurrentFocusedCellIs: () => (/* binding */ assertCurrentFocusedCellIs),
/* harmony export */   assertGridContents: () => (/* binding */ assertGridContents),
/* harmony export */   assertSelectedRowIs: () => (/* binding */ assertSelectedRowIs),
/* harmony export */   emulateUserFocusingCellAt: () => (/* binding */ emulateUserFocusingCellAt),
/* harmony export */   emulateUserKeyboardNavigation: () => (/* binding */ emulateUserKeyboardNavigation),
/* harmony export */   focusCurrentlyFocusableCell: () => (/* binding */ focusCurrentlyFocusableCell),
/* harmony export */   getAllRows: () => (/* binding */ getAllRows),
/* harmony export */   getBodyRowByAriaIndex: () => (/* binding */ getBodyRowByAriaIndex),
/* harmony export */   getCellByIndexes: () => (/* binding */ getCellByIndexes),
/* harmony export */   getDataGrid: () => (/* binding */ getDataGrid),
/* harmony export */   getFocusableCell: () => (/* binding */ getFocusableCell),
/* harmony export */   getHeaderCellForColumnId: () => (/* binding */ getHeaderCellForColumnId),
/* harmony export */   getHeaderCells: () => (/* binding */ getHeaderCells),
/* harmony export */   getValuesForColumn: () => (/* binding */ getValuesForColumn),
/* harmony export */   getValuesOfAllBodyRows: () => (/* binding */ getValuesOfAllBodyRows),
/* harmony export */   getValuesOfBodyRowByAriaIndex: () => (/* binding */ getValuesOfBodyRowByAriaIndex)
/* harmony export */ });
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/components/data_grid/data_grid.js */ "./src/ui/components/data_grid/data_grid.ts");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/components/render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__.RenderCoordinator.RenderCoordinator.instance();
const getFocusableCell = (shadowRoot) => {
    // We only expect one here, but we qSA so we can assert on only one.
    // Can't use td as it may be a th if the user has focused a column header.
    const tabIndexCells = shadowRoot.querySelectorAll('table [tabindex="0"]');
    assert.lengthOf(tabIndexCells, 1);
    assert.instanceOf(tabIndexCells[0], HTMLTableCellElement);
    return tabIndexCells[0];
};
const getCellByIndexes = (shadowRoot, indexes) => {
    const cell = shadowRoot.querySelector(`[data-row-index="${indexes.row}"][data-col-index="${indexes.column}"]`);
    assert.instanceOf(cell, HTMLTableCellElement);
    return cell;
};
const getHeaderCells = (shadowRoot, options = {
    onlyVisible: false,
}) => {
    const cells = shadowRoot.querySelectorAll('[data-grid-header-cell]');
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.assertElements)(cells, HTMLTableCellElement);
    return Array.from(cells).filter(cell => {
        if (!options.onlyVisible) {
            return true;
        }
        return cell.classList.contains('hidden') === false;
    });
};
const getValuesOfBodyRowByAriaIndex = (shadowRoot, ariaIndex, options = {
    onlyVisible: false,
}) => {
    const row = getBodyRowByAriaIndex(shadowRoot, ariaIndex);
    const cells = row.querySelectorAll('[data-grid-value-cell-for-column]');
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.assertElements)(cells, HTMLTableCellElement);
    return Array.from(cells)
        .filter(cell => {
        return !options.onlyVisible || cell.classList.contains('hidden') === false;
    })
        .map(cell => {
        return cell.innerText;
    });
};
const getAllRows = (shadowRoot) => {
    const rows = shadowRoot.querySelectorAll('[aria-rowindex]');
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.assertElements)(rows, HTMLTableRowElement);
    return Array.from(rows);
};
const assertCurrentFocusedCellIs = (shadowRoot, { column, row }) => {
    const cell = getFocusableCell(shadowRoot);
    // Convert to strings as attributes are always strings.
    assert.strictEqual(cell.getAttribute('data-row-index'), String(row), 'The row index was not as expected.');
    assert.strictEqual(cell.getAttribute('data-col-index'), String(column), 'The column index was not as expected.');
};
const assertSelectedRowIs = (shadowRoot, row) => {
    const selectedRow = shadowRoot.querySelector('tr.selected');
    assert.instanceOf(selectedRow, HTMLTableRowElement);
    assert.strictEqual(selectedRow.getAttribute('aria-rowindex'), String(row), 'The row index was not as expected.');
};
const getDataGrid = (gridComponent) => {
    const controller = (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementWithinComponent)(gridComponent, 'devtools-data-grid-controller', _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_0__.DataGridController.DataGridController);
    return (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementWithinComponent)(controller, 'devtools-data-grid', _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_0__.DataGrid.DataGrid);
};
const assertGridContents = (gridComponent, headerExpected, rowsExpected) => {
    const grid = getDataGrid(gridComponent);
    assert.isNotNull(grid.shadowRoot);
    const headerActual = getHeaderCells(grid.shadowRoot).map(({ textContent }) => textContent.trim());
    assert.deepEqual(headerActual, headerExpected);
    const rowsActual = getValuesOfAllBodyRows(grid.shadowRoot).map(row => row.map(cell => cell.trim()));
    assert.deepEqual(rowsActual, rowsExpected);
    return grid;
};
const focusCurrentlyFocusableCell = (shadowRoot) => {
    const cell = getFocusableCell(shadowRoot);
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchFocusEvent)(cell);
};
const emulateUserKeyboardNavigation = (shadowRoot, key) => {
    const table = shadowRoot.querySelector('table');
    assert.instanceOf(table, HTMLTableElement);
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchKeyDownEvent)(table, { key });
};
const emulateUserFocusingCellAt = async (shadowRoot, position) => {
    const cellToFocus = getCellByIndexes(shadowRoot, position);
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchFocusEvent)(cellToFocus);
    await coordinator.done();
    assertCurrentFocusedCellIs(shadowRoot, position);
};
const getValuesOfAllBodyRows = (shadowRoot, options = {
    onlyVisible: false,
}) => {
    const rows = getAllRows(shadowRoot);
    return rows
        .map(row => {
        // now decide if the row should be included or not
        const rowIsHidden = row.classList.contains('hidden');
        const rowIndex = window.parseInt(row.getAttribute('aria-rowindex') || '-1', 10);
        return {
            rowValues: getValuesOfBodyRowByAriaIndex(shadowRoot, rowIndex, options),
            hidden: options.onlyVisible && rowIsHidden,
        };
    })
        .filter(row => row.hidden === false)
        .map(r => r.rowValues);
};
const getBodyRowByAriaIndex = (shadowRoot, rowIndex) => {
    const row = shadowRoot.querySelector(`[aria-rowindex="${rowIndex}"]`);
    assert.instanceOf(row, HTMLTableRowElement);
    return row;
};
const getHeaderCellForColumnId = (shadowRoot, columnId) => {
    const cell = shadowRoot.querySelector(`[data-grid-header-cell="${columnId}`);
    assert.instanceOf(cell, HTMLTableCellElement);
    return cell;
};
const getValuesForColumn = (shadowRoot, columnId) => {
    const cells = shadowRoot.querySelectorAll(`[data-grid-value-cell-for-column=${columnId}]`);
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.assertElements)(cells, HTMLTableCellElement);
    return Array.from(cells, cell => cell.innerText);
};


/***/ }),

/***/ "./src/testing/MutationHelpers.ts":
/*!****************************************!*\
  !*** ./src/testing/MutationHelpers.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MutationType: () => (/* binding */ MutationType),
/* harmony export */   TEXT_NODE: () => (/* binding */ TEXT_NODE),
/* harmony export */   someMutations: () => (/* binding */ someMutations),
/* harmony export */   withMutations: () => (/* binding */ withMutations),
/* harmony export */   withNoMutations: () => (/* binding */ withNoMutations)
/* harmony export */ });
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var MutationType;
(function (MutationType) {
    MutationType["ADD"] = "ADD";
    MutationType["REMOVE"] = "REMOVE";
    MutationType["TEXT_UPDATE"] = "TEXT_UPDATE";
})(MutationType || (MutationType = {}));
const TEXT_NODE = 'TEXT_NODE';
const nodeShouldBeIgnored = (node) => {
    const isCommentNode = node.nodeType === Node.COMMENT_NODE;
    const isTextNode = node.nodeType === Node.TEXT_NODE;
    if (isCommentNode) {
        return true;
    }
    if (isTextNode) {
        // We ignore textNode changes where the trimmed text is empty - these are
        // most likely whitespace changes from LitHtml and not important.
        return (node.textContent || '').trim() === '';
    }
    return false;
};
const observedMutationsThatMatchExpected = (expectedMutation, observedMutations) => {
    const matching = [];
    for (const mutation of observedMutations) {
        if (expectedMutation.target === TEXT_NODE) {
            if (mutation.target === TEXT_NODE) {
                matching.push(mutation);
            }
        }
        else if (expectedMutation.target === mutation.target) {
            if (!expectedMutation.type) {
                matching.push(mutation);
            }
            else if (expectedMutation.type === mutation.type) {
                matching.push(mutation);
            }
        }
    }
    return matching;
};
const getMutationsForTagName = (trackedMutations, tagName) => {
    return trackedMutations.get(tagName) || { ADD: 0, REMOVE: 0, TEXT_UPDATE: 0 };
};
const getAllMutationCounts = (observedMutations) => {
    const trackedMutations = new Map();
    for (const mutation of observedMutations) {
        if (mutation.target === TEXT_NODE) {
            const mutationsForTagName = getMutationsForTagName(trackedMutations, TEXT_NODE);
            mutationsForTagName.TEXT_UPDATE++;
            trackedMutations.set(TEXT_NODE, mutationsForTagName);
        }
        const tagName = mutation.target;
        if (mutation.type === MutationType.ADD) {
            const mutationsForTagName = getMutationsForTagName(trackedMutations, tagName);
            mutationsForTagName.ADD++;
            trackedMutations.set(tagName, mutationsForTagName);
        }
        else if (mutation.type === MutationType.REMOVE) {
            const mutationsForTagName = getMutationsForTagName(trackedMutations, tagName);
            mutationsForTagName.REMOVE++;
            trackedMutations.set(tagName, mutationsForTagName);
        }
    }
    return trackedMutations;
};
const storeRelevantMutationEntries = (entries, storageArray) => {
    for (const entry of entries) {
        if (entry.type === 'characterData') {
            storageArray.push({
                target: TEXT_NODE,
                type: MutationType.TEXT_UPDATE,
            });
        }
        for (const added of entry.addedNodes) {
            if (!nodeShouldBeIgnored(added)) {
                storageArray.push({
                    target: added.nodeName.toLowerCase(),
                    type: MutationType.ADD,
                });
            }
        }
        for (const removed of entry.removedNodes) {
            if (!nodeShouldBeIgnored(removed)) {
                storageArray.push({
                    target: removed.nodeName.toLowerCase(),
                    type: MutationType.REMOVE,
                });
            }
        }
    }
};
const generateOutputForMutationList = (observedMutations) => {
    const debugOutput = [];
    const mutationCounts = getAllMutationCounts(observedMutations);
    const allMutations = Array.from(mutationCounts.entries());
    for (const [elem, mutations] of allMutations) {
        const output = `${elem}: `;
        const mutationOutput = [];
        const addMutations = mutations.ADD;
        if (addMutations) {
            mutationOutput.push(`${addMutations} ${pluralize(addMutations, 'addition', 'additions')}`);
        }
        const removeMutations = mutations.REMOVE;
        if (removeMutations) {
            mutationOutput.push(`${removeMutations} ${pluralize(removeMutations, 'removal', 'removals')}`);
        }
        const updateMutations = mutations.TEXT_UPDATE;
        if (updateMutations) {
            mutationOutput.push(`${updateMutations} ${pluralize(updateMutations, 'update', 'updates')}`);
        }
        debugOutput.push(output + mutationOutput.join(', '));
    }
    return debugOutput.join('\n');
};
const errorMessageWhenExpectingNoMutations = (observedMutations) => {
    const debugOutput = generateOutputForMutationList(observedMutations);
    assert.fail(`Expected no mutations, but got ${observedMutations.length}: \n${debugOutput}`);
};
function pluralize(count, singular, plural) {
    return count === 1 ? singular : plural;
}
const DEFAULT_MAX_MUTATIONS_LIMIT = 10;
/**
 * Check that a given component causes the expected amount of mutations. Useful
 * when testing a component to ensure it's updating the DOM performantly and not
 * unnecessarily.
 */
const withMutations = async (expectedMutations, shadowRoot, functionToObserve) => {
    const observedMutations = [];
    const mutationObserver = new MutationObserver(entries => {
        storeRelevantMutationEntries(entries, observedMutations);
    });
    mutationObserver.observe(shadowRoot, {
        subtree: true,
        attributes: true,
        childList: true,
        characterData: true,
        characterDataOldValue: true,
    });
    await functionToObserve(shadowRoot);
    /* We takeRecords() here to flush any observed mutations that have been seen
    but not yet fed back into the callback we passed when we instantiated the
    observer. This ensures we've got every mutation before we disconnect the
    observer. */
    const records = mutationObserver.takeRecords();
    storeRelevantMutationEntries(records, observedMutations);
    mutationObserver.disconnect();
    if (expectedMutations.length === 0) {
        if (observedMutations.length !== 0) {
            errorMessageWhenExpectingNoMutations(observedMutations);
            return;
        }
    }
    const mutationsMatchedToExpected = new Set();
    for (const expectedMutation of expectedMutations) {
        // Gather all observed mutations that match the given expectation. e.g. if
        // the expected mutation is { target: 'div' } this will gather all observed
        // mutations with a target of `div`.
        const matchingMutations = observedMutationsThatMatchExpected(expectedMutation, observedMutations);
        for (const matched of matchingMutations) {
            mutationsMatchedToExpected.add(matched);
        }
        const amountOfMatchingMutations = matchingMutations.length;
        // Make sure we check for undefined, not truthyness, as the user could
        // supply a max of 0.
        const maxMutationsAllowed = expectedMutation.max === undefined ? DEFAULT_MAX_MUTATIONS_LIMIT : expectedMutation.max;
        if (amountOfMatchingMutations > maxMutationsAllowed) {
            assert.fail(`Expected no more than ${maxMutationsAllowed} mutations for ${expectedMutation.type || 'ADD/REMOVE'} ${expectedMutation.target}, but got ${amountOfMatchingMutations}`);
        }
        else if (amountOfMatchingMutations === 0 && maxMutationsAllowed > 0) {
            assert.fail(`Expected at least one mutation for ${expectedMutation.type || 'ADD/REMOVE'} ${expectedMutation.target}, but got ${amountOfMatchingMutations}`);
        }
    }
    // These are mutations that happened but the user did not explicitly list as
    // expected, so we want to fail the test on them.
    const unmatchedMutations = observedMutations.filter(mutation => !mutationsMatchedToExpected.has(mutation));
    if (unmatchedMutations.length > 0) {
        const unexpectedOutput = generateOutputForMutationList(unmatchedMutations);
        assert.fail(`Additional unexpected mutations were detected:\n${unexpectedOutput}`);
    }
};
/**
 * Ensure that a code block runs whilst making no mutations to the DOM. Given an
 * element and a callback, it will execute th e callback function and ensure
 * afterwards that a MutatonObserver saw no changes.
 */
const withNoMutations = async (element, fn) => {
    return await withMutations([], element, fn);
};
const someMutations = async (element) => {
    return new Promise(resolve => {
        const observer = new MutationObserver(() => {
            resolve();
            observer.disconnect();
        });
        observer.observe(element, { attributes: true, childList: true, subtree: true });
    });
};


/***/ }),

/***/ "./src/ui/components/data_grid/DataGridController.test.ts":
/*!****************************************************************!*\
  !*** ./src/ui/components/data_grid/DataGridController.test.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DataGridHelpers.js */ "./src/testing/DataGridHelpers.ts");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/MutationHelpers.js */ "./src/testing/MutationHelpers.ts");
/* harmony import */ var _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _data_grid_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data_grid.js */ "./src/ui/components/data_grid/data_grid.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const coordinator = _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_4__.RenderCoordinator.RenderCoordinator.instance();
const getInternalDataGridShadowRoot = (component) => {
    const { shadowRoot } = component.shadowRoot.querySelector('devtools-data-grid');
    assert.isNotNull(shadowRoot);
    return shadowRoot;
};
describe('DataGridController', () => {
    (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithLocale)('sorting the columns', () => {
        const columns = [
            { id: 'key', title: 'Key', sortable: true, widthWeighting: 1, visible: true, hideable: false },
        ];
        const rows = [
            { cells: [{ columnId: 'key', value: 'Bravo' }] },
            { cells: [{ columnId: 'key', value: 'Alpha' }] },
            { cells: [{ columnId: 'key', value: 'Charlie' }] },
        ];
        const numericRows = [
            { cells: [{ columnId: 'key', value: 2 }] },
            { cells: [{ columnId: 'key', value: 1 }] },
            { cells: [{ columnId: 'key', value: 3 }] },
        ];
        it('lets the user click to sort the column in ASC order', async () => {
            const component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController();
            component.data = { rows, columns };
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const internalDataGridShadow = getInternalDataGridShadowRoot(component);
            await (0,_testing_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_3__.withMutations)([{
                    // Two text mutations as LitHtml updates the text nodes but does not
                    // touch the actual DOM nodes.
                    target: _testing_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_3__.TEXT_NODE,
                    max: 2,
                }], internalDataGridShadow, async (shadowRoot) => {
                const keyHeader = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getHeaderCellForColumnId)(shadowRoot, 'key');
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(keyHeader);
                await coordinator.done();
                const cellValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesForColumn)(shadowRoot, 'key');
                assert.deepEqual(cellValues, ['Alpha', 'Bravo', 'Charlie']);
            });
        });
        it('supports sorting numeric columns', async () => {
            const component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController();
            component.data = { rows: numericRows, columns };
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const internalDataGridShadow = getInternalDataGridShadowRoot(component);
            const keyHeader = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getHeaderCellForColumnId)(internalDataGridShadow, 'key');
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(keyHeader); // ASC order
            await coordinator.done();
            let cellValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesForColumn)(internalDataGridShadow, 'key');
            assert.deepEqual(cellValues, ['1', '2', '3']);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(keyHeader); // DESC order
            await coordinator.done();
            cellValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesForColumn)(internalDataGridShadow, 'key');
            assert.deepEqual(cellValues, ['3', '2', '1']);
        });
        it('can be provided an initial sort which is immediately applied', async () => {
            const component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController();
            component.data = {
                rows,
                columns,
                initialSort: {
                    columnId: 'key',
                    direction: _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridUtils.SortDirection.ASC,
                },
            };
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const internalDataGridShadow = getInternalDataGridShadowRoot(component);
            const cellValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesForColumn)(internalDataGridShadow, 'key');
            assert.deepEqual(cellValues, ['Alpha', 'Bravo', 'Charlie']);
        });
        it('lets the user click to change the sort when it is initially provided', async () => {
            const component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController();
            component.data = {
                rows,
                columns,
                initialSort: {
                    columnId: 'key',
                    direction: _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridUtils.SortDirection.ASC,
                },
            };
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const internalDataGridShadow = getInternalDataGridShadowRoot(component);
            const keyHeader = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getHeaderCellForColumnId)(internalDataGridShadow, 'key');
            let cellValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesForColumn)(internalDataGridShadow, 'key');
            assert.deepEqual(cellValues, ['Alpha', 'Bravo', 'Charlie']);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(keyHeader); // DESC order
            await coordinator.done();
            cellValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesForColumn)(internalDataGridShadow, 'key');
            assert.deepEqual(cellValues, ['Charlie', 'Bravo', 'Alpha']);
        });
        it('lets the user click twice to sort the column in DESC order', async () => {
            const component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController();
            component.data = { rows, columns };
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const internalDataGridShadow = getInternalDataGridShadowRoot(component);
            const keyHeader = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getHeaderCellForColumnId)(internalDataGridShadow, 'key');
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(keyHeader); // ASC order
            await coordinator.done();
            let cellValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesForColumn)(internalDataGridShadow, 'key');
            assert.deepEqual(cellValues, ['Alpha', 'Bravo', 'Charlie']);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(keyHeader); // DESC order
            await coordinator.done();
            cellValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesForColumn)(internalDataGridShadow, 'key');
            assert.deepEqual(cellValues, ['Charlie', 'Bravo', 'Alpha']);
        });
        it('resets the sort if the user clicks after setting the sort to DESC', async () => {
            const component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController();
            component.data = { rows, columns };
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const internalDataGridShadow = getInternalDataGridShadowRoot(component);
            const keyHeader = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getHeaderCellForColumnId)(internalDataGridShadow, 'key');
            const originalCellValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesForColumn)(internalDataGridShadow, 'key');
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(keyHeader); // ASC order
            await coordinator.done();
            let cellValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesForColumn)(internalDataGridShadow, 'key');
            assert.deepEqual(cellValues, ['Alpha', 'Bravo', 'Charlie']);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(keyHeader); // DESC order
            await coordinator.done();
            cellValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesForColumn)(internalDataGridShadow, 'key');
            assert.deepEqual(cellValues, ['Charlie', 'Bravo', 'Alpha']);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(keyHeader); // Now reset!
            await coordinator.done();
            const finalCellValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesForColumn)(internalDataGridShadow, 'key');
            assert.deepEqual(finalCellValues, originalCellValues);
        });
        it('persists the sort as new data is added and inserts new data into the right place', async () => {
            const component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController();
            component.data = { rows, columns };
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const internalDataGridShadow = getInternalDataGridShadowRoot(component);
            const keyHeader = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getHeaderCellForColumnId)(internalDataGridShadow, 'key');
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(keyHeader); // ASC order
            await coordinator.done();
            let cellValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesForColumn)(internalDataGridShadow, 'key');
            // Ensure we are in ASC order
            assert.deepEqual(cellValues, ['Alpha', 'Bravo', 'Charlie']);
            const newRow = { cells: [{ columnId: 'key', value: 'Baz' }] };
            const newRows = [...rows, newRow];
            component.data = {
                ...component.data,
                rows: newRows,
            };
            await coordinator.done();
            cellValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesForColumn)(internalDataGridShadow, 'key');
            assert.deepEqual(cellValues, ['Alpha', 'Baz', 'Bravo', 'Charlie']);
        });
    });
    (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithLocale)('filtering rows', () => {
        const columns = [
            { id: 'key', title: 'Letter', sortable: true, widthWeighting: 1, visible: true, hideable: false },
            { id: 'value', title: 'Phonetic', sortable: true, widthWeighting: 1, visible: true, hideable: false },
        ];
        const rows = [
            {
                cells: [
                    { columnId: 'key', value: 'Letter A' },
                    { columnId: 'value', value: 'Alpha' },
                ],
            },
            {
                cells: [
                    { columnId: 'key', value: 'Letter B' },
                    { columnId: 'value', value: 'Bravo' },
                ],
            },
            {
                cells: [
                    { columnId: 'key', value: 'Letter C' },
                    { columnId: 'value', value: 'Charlie' },
                ],
            },
        ];
        const createPlainTextFilter = (text) => ({
            text,
            key: undefined,
            regex: undefined,
            negative: false,
        });
        const createRegexFilter = (text) => ({
            text: undefined,
            key: undefined,
            regex: new RegExp(text, 'i'), // i because the FilterParser adds that flag
            negative: false,
        });
        const createColumnFilter = (key, text) => ({
            text,
            key,
            regex: undefined,
            negative: false,
        });
        it('only shows rows with values that match the filter', async () => {
            const component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController();
            component.data = { rows, columns, filters: [createPlainTextFilter('bravo')] };
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const internalDataGridShadow = getInternalDataGridShadowRoot(component);
            const renderedRowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesOfAllBodyRows)(internalDataGridShadow, { onlyVisible: true });
            assert.deepEqual(renderedRowValues, [
                ['Letter B', 'Bravo'],
            ]);
        });
        it('only compares visible columns when matching filter', async () => {
            const component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController();
            component.data = { rows, columns, filters: [createPlainTextFilter('e')] };
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const internalDataGridShadow = getInternalDataGridShadowRoot(component);
            let renderedRowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesOfAllBodyRows)(internalDataGridShadow, { onlyVisible: true });
            assert.deepEqual(renderedRowValues, [
                ['Letter A', 'Alpha'],
                ['Letter B', 'Bravo'],
                ['Letter C', 'Charlie'],
            ]);
            const columnsWithInvisible = structuredClone(columns);
            columnsWithInvisible[0].visible = false;
            component.data = {
                ...component.data,
                columns: columnsWithInvisible,
            };
            await coordinator.done();
            renderedRowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesOfAllBodyRows)(internalDataGridShadow, { onlyVisible: true });
            assert.deepEqual(renderedRowValues, [['Charlie']]);
        });
        it('renders only visible rows, but maintains proper aria-rowindexes for the rows that are rendered', async () => {
            const component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController();
            component.data = { rows, columns, filters: [createPlainTextFilter('bravo')] };
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const internalDataGridShadow = getInternalDataGridShadowRoot(component);
            const renderedRows = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getAllRows)(internalDataGridShadow);
            assert.deepEqual(renderedRows.map(row => row.getAttribute('aria-rowindex')), ['2']);
        });
        it('shows all rows if the filter is then cleared', async () => {
            const component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController();
            component.data = { rows, columns, filters: [createPlainTextFilter('bravo')] };
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const internalDataGridShadow = getInternalDataGridShadowRoot(component);
            let renderedRowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesOfAllBodyRows)(internalDataGridShadow, { onlyVisible: true });
            assert.lengthOf(renderedRowValues, 1);
            component.data = {
                ...component.data,
                filters: [],
            };
            await coordinator.done();
            renderedRowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesOfAllBodyRows)(internalDataGridShadow);
            assert.lengthOf(renderedRowValues, 3);
        });
        it('supports a regex filter', async () => {
            const component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController();
            component.data = { rows, columns, filters: [createRegexFilter('bravo')] };
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const internalDataGridShadow = getInternalDataGridShadowRoot(component);
            const renderedRowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesOfAllBodyRows)(internalDataGridShadow, { onlyVisible: true });
            assert.deepEqual(renderedRowValues, [
                ['Letter B', 'Bravo'],
            ]);
        });
        it('inverts the filter if given a negative filter', async () => {
            const component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController();
            const filter = createPlainTextFilter('bravo');
            filter.negative = true;
            component.data = { rows, columns, filters: [filter] };
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const internalDataGridShadow = getInternalDataGridShadowRoot(component);
            const renderedRowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesOfAllBodyRows)(internalDataGridShadow, { onlyVisible: true });
            assert.deepEqual(renderedRowValues, [
                ['Letter A', 'Alpha'],
                ['Letter C', 'Charlie'],
            ]);
        });
        it('only shows rows that match all filters when given multiple filters', async () => {
            const component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController();
            // This matches no rows, as no row can match both of these filters
            component.data = { rows, columns, filters: [createPlainTextFilter('alpha'), createPlainTextFilter('charlie')] };
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const internalDataGridShadow = getInternalDataGridShadowRoot(component);
            const renderedRowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesOfAllBodyRows)(internalDataGridShadow, { onlyVisible: true });
            assert.deepEqual(renderedRowValues, []);
        });
        it('supports filtering by column key', async () => {
            const component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController();
            // By filtering for values with `e` we expect to only get the "Letter C: Charlie" row as it's the only value field with an `e` in.
            component.data = { rows, columns, filters: [createColumnFilter('value', 'e')] };
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const internalDataGridShadow = getInternalDataGridShadowRoot(component);
            const renderedRowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesOfAllBodyRows)(internalDataGridShadow, { onlyVisible: true });
            assert.deepEqual(renderedRowValues, [
                ['Letter C', 'Charlie'],
            ]);
        });
        it('supports negative filtering by column key', async () => {
            const component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController();
            const filter = createColumnFilter('value', 'e');
            filter.negative = true;
            component.data = { rows, columns, filters: [filter] };
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const internalDataGridShadow = getInternalDataGridShadowRoot(component);
            const renderedRowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesOfAllBodyRows)(internalDataGridShadow, { onlyVisible: true });
            assert.deepEqual(renderedRowValues, [
                ['Letter A', 'Alpha'],
                ['Letter B', 'Bravo'],
            ]);
        });
        it('renders only matching rows even after sorting columns', async () => {
            const component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController();
            component.data = { rows, columns, filters: [createPlainTextFilter('h')] };
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const internalDataGridShadow = getInternalDataGridShadowRoot(component);
            let renderedRowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesOfAllBodyRows)(internalDataGridShadow, { onlyVisible: true });
            assert.deepEqual(renderedRowValues, [
                ['Letter A', 'Alpha'],
                ['Letter C', 'Charlie'],
            ]);
            const keyHeader = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getHeaderCellForColumnId)(internalDataGridShadow, 'key');
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(keyHeader); // ASC order
            await coordinator.done();
            renderedRowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesOfAllBodyRows)(internalDataGridShadow, { onlyVisible: true });
            assert.deepEqual(renderedRowValues, [
                ['Letter A', 'Alpha'],
                ['Letter C', 'Charlie'],
            ]);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(keyHeader); // DESC order
            await coordinator.done();
            renderedRowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesOfAllBodyRows)(internalDataGridShadow, { onlyVisible: true });
            assert.deepEqual(renderedRowValues, [
                ['Letter C', 'Charlie'],
                ['Letter A', 'Alpha'],
            ]);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(keyHeader); // reset order
            await coordinator.done();
            renderedRowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesOfAllBodyRows)(internalDataGridShadow, { onlyVisible: true });
            assert.deepEqual(renderedRowValues, [
                ['Letter A', 'Alpha'],
                ['Letter C', 'Charlie'],
            ]);
        });
    });
});


/***/ })

}]);