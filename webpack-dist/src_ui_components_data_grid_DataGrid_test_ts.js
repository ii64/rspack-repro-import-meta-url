"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_data_grid_DataGrid_test_ts"],{

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

/***/ "./src/ui/components/data_grid/DataGrid.test.ts":
/*!******************************************************!*\
  !*** ./src/ui/components/data_grid/DataGrid.test.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/DataGridHelpers.js */ "./src/testing/DataGridHelpers.ts");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../testing/MutationHelpers.js */ "./src/testing/MutationHelpers.ts");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _data_grid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data_grid.js */ "./src/ui/components/data_grid/data_grid.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









const coordinator = _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_7__.RenderCoordinator.RenderCoordinator.instance();
const createColumns = () => {
    return [
        { id: 'city', title: 'City', sortable: true, widthWeighting: 2, visible: true, hideable: false },
        { id: 'country', title: 'Country', sortable: false, widthWeighting: 2, visible: true, hideable: false },
        { id: 'population', title: 'Population', sortable: false, widthWeighting: 1, visible: true, hideable: false },
    ];
};
const createRows = () => {
    return [
        {
            cells: [
                { columnId: 'city', value: 'London' },
                { columnId: 'country', value: 'UK' },
                { columnId: 'population', value: '8.98m' },
            ],
        },
        {
            cells: [
                { columnId: 'city', value: 'Munich' },
                { columnId: 'country', value: 'Germany' },
                { columnId: 'population', value: '1.47m' },
            ],
        },
        {
            cells: [
                { columnId: 'city', value: 'Barcelona' },
                { columnId: 'country', value: 'Spain' },
                { columnId: 'population', value: '1.62m' },
            ],
        },
    ];
};
const columns = createColumns();
const rows = createRows();
const columnsWithNoneSortable = createColumns().map(col => {
    col.sortable = false;
    return col;
});
const label = 'Test Data Grid Label';
Object.freeze(columns);
Object.freeze(columnsWithNoneSortable);
Object.freeze(rows);
const renderDataGrid = (data) => {
    const component = new _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGrid.DataGrid();
    component.data = {
        rows: data.rows || [],
        columns: data.columns || [],
        activeSort: data.activeSort || null,
        label: data.label,
    };
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
    return component;
};
describe('DataGrid', () => {
    describe('rendering and hiding rows/columns', () => {
        it('renders the right headers and values', async () => {
            const component = renderDataGrid({ rows, columns });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const headerCells = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getHeaderCells)(component.shadowRoot);
            const values = Array.from(headerCells, cell => cell.textContent || '');
            assert.deepEqual(values, ['City', 'Country', 'Population']);
            const rowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getValuesOfAllBodyRows)(component.shadowRoot);
            assert.deepEqual(rowValues, [
                ['London', 'UK', '8.98m'],
                ['Munich', 'Germany', '1.47m'],
                ['Barcelona', 'Spain', '1.62m'],
            ]);
        });
        it('does not render DOM within a cell whose column is hidden', async () => {
            const columnsWithFirstHidden = createColumns();
            columnsWithFirstHidden[0].hideable = true;
            columnsWithFirstHidden[0].visible = false;
            const component = renderDataGrid({ rows, columns: columnsWithFirstHidden });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const renderedRows = Array.from(component.shadowRoot.querySelectorAll('tbody tr:not(.padding-row)'));
            const cellsHaveChildren = renderedRows.map(row => {
                const cells = Array.from(row.querySelectorAll('td'), cell => {
                    // Figure out if the cell has any children.
                    return (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.stripLitHtmlCommentNodes)(cell.innerHTML).length > 0;
                });
                return cells;
            });
            assert.deepEqual(cellsHaveChildren, [
                // False for column 1 as it is hidden, true for the rest which are
                // visible.
                [false, true, true],
                [false, true, true],
                [false, true, true],
            ]);
        });
        it('uses the cell\'s value as its title attribute by default', async () => {
            const component = renderDataGrid({ rows, columns });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const renderedBodyRows = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getAllRows)(component.shadowRoot);
            const renderedBodyCells = renderedBodyRows.map(row => Array.from(row.querySelectorAll('td')));
            const titleAttributesForCellsByRow = renderedBodyCells.map(row => row.map(cell => cell.getAttribute('title')));
            assert.deepEqual(titleAttributesForCellsByRow, [
                ['London', 'UK', '8.98m'],
                ['Munich', 'Germany', '1.47m'],
                ['Barcelona', 'Spain', '1.62m'],
            ]);
        });
        it('takes a title override and uses that if provided', async () => {
            const rowsWithTitleSpecified = createRows();
            rowsWithTitleSpecified[0].cells[0].title = 'EXPLICITLY_PROVIDED_TITLE';
            const component = renderDataGrid({ rows: rowsWithTitleSpecified, columns });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const renderedBodyRows = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getAllRows)(component.shadowRoot);
            const renderedBodyCells = renderedBodyRows.map(row => Array.from(row.querySelectorAll('td')));
            const titleAttributesForCellsByRow = renderedBodyCells.map(row => row.map(cell => cell.getAttribute('title')));
            assert.deepEqual(titleAttributesForCellsByRow, [
                ['EXPLICITLY_PROVIDED_TITLE', 'UK', '8.98m'],
                ['Munich', 'Germany', '1.47m'],
                ['Barcelona', 'Spain', '1.62m'],
            ]);
        });
        it('hides columns marked as hidden', async () => {
            const columnsWithCityHidden = createColumns();
            columnsWithCityHidden[0].visible = false;
            const component = renderDataGrid({ rows, columns: columnsWithCityHidden });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const headerCells = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getHeaderCells)(component.shadowRoot, { onlyVisible: true });
            const values = Array.from(headerCells, cell => cell.textContent || '');
            assert.deepEqual(values, ['Country', 'Population']);
            const rowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getValuesOfAllBodyRows)(component.shadowRoot, { onlyVisible: true });
            assert.deepEqual(rowValues, [
                ['UK', '8.98m'],
                ['Germany', '1.47m'],
                ['Spain', '1.62m'],
            ]);
        });
        it('hides rows marked as hidden', async () => {
            const rowsWithLondonHidden = createRows();
            rowsWithLondonHidden[0].hidden = true;
            const component = renderDataGrid({ rows: rowsWithLondonHidden, columns });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const rowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getValuesOfAllBodyRows)(component.shadowRoot, { onlyVisible: true });
            assert.deepEqual(rowValues, [
                ['Munich', 'Germany', '1.47m'],
                ['Barcelona', 'Spain', '1.62m'],
            ]);
        });
    });
    describe('data-grid renderers', () => {
        it('uses the string renderer by default', async () => {
            const columns = [{ id: 'key', title: 'Key', widthWeighting: 1, visible: true, hideable: false }];
            const rows = [{ cells: [{ columnId: 'key', value: 'Hello World' }] }];
            const component = renderDataGrid({ columns, rows });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const cell = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getCellByIndexes)(component.shadowRoot, { column: 0, row: 1 });
            assert.deepEqual((0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.stripLitHtmlCommentNodes)(cell.innerHTML), 'Hello World');
        });
        it('can use the code block renderer to render text in a <code> tag', async () => {
            const columns = [{ id: 'key', title: 'Key', widthWeighting: 1, visible: true, hideable: false }];
            const rows = [{
                    cells: [
                        {
                            columnId: 'key',
                            value: 'Hello World',
                            title: 'Hello World',
                            renderer: _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridRenderers.codeBlockRenderer,
                        },
                    ],
                }];
            const component = renderDataGrid({ columns, rows });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const cell = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getCellByIndexes)(component.shadowRoot, { column: 0, row: 1 });
            assert.deepEqual((0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.stripLitHtmlCommentNodes)(cell.innerHTML), '<code>Hello World</code>');
        });
        it('can use the icon renderer for rendering icons', async () => {
            const icon = new _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon();
            icon.data = { iconName: 'arrow-down', color: 'var(--icon-request)', width: '16px', height: '16px' };
            const columns = [{ id: 'type', title: 'Type', widthWeighting: 1, visible: true, hideable: false }];
            const rows = [{
                    cells: [
                        {
                            columnId: 'type',
                            value: icon,
                            title: 'received',
                            renderer: _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridRenderers.iconRenderer,
                        },
                    ],
                }];
            const component = renderDataGrid({ columns, rows });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const cell = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getCellByIndexes)(component.shadowRoot, { column: 0, row: 1 });
            assert.deepEqual((0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.stripLitHtmlCommentNodes)(cell.innerHTML), '<div style="display: flex; justify-content: center;"><devtools-icon role="presentation" name="arrow-down" style="color: var(--icon-request); width: 16px; height: 16px;"></devtools-icon></div>');
        });
        it('accepts any custom renderer', async () => {
            const columns = [{ id: 'key', title: 'Key', widthWeighting: 1, visible: true, hideable: false }];
            const rows = [{
                    cells: [{
                            columnId: 'key',
                            value: 'Hello World',
                            title: 'Hello World',
                            renderer: value => _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `<p>foo: ${value}</p>`,
                        }],
                }];
            const component = renderDataGrid({ columns, rows });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const cell = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getCellByIndexes)(component.shadowRoot, { column: 0, row: 1 });
            assert.deepEqual((0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.stripLitHtmlCommentNodes)(cell.innerHTML), '<p>foo: Hello World</p>');
        });
    });
    describe('aria-labels', () => {
        it('it adds aria-label to the table if one is specified', async () => {
            const component = renderDataGrid({ columns, rows, label });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const table = component.shadowRoot.querySelector('table');
            assert.instanceOf(table, HTMLTableElement);
            assert.strictEqual(table.getAttribute('aria-label'), label);
        });
        it('it does not add an aria-label to the table if one is not specified', async () => {
            const component = renderDataGrid({ columns, rows });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const table = component.shadowRoot.querySelector('table');
            assert.instanceOf(table, HTMLTableElement);
            assert.strictEqual(table.getAttribute('aria-label'), null);
        });
        it('adds rowcount and colcount to the table', async () => {
            const component = renderDataGrid({ columns, rows });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const table = component.shadowRoot.querySelector('table');
            assert.instanceOf(table, HTMLTableElement);
            assert.strictEqual(table.getAttribute('aria-rowcount'), '3');
            assert.strictEqual(table.getAttribute('aria-colcount'), '3');
        });
        it('shows the total row and colcount regardless of any hidden rows', async () => {
            const rowsWithLondonHidden = createRows();
            rowsWithLondonHidden[0].hidden = true;
            const component = renderDataGrid({ columns, rows: rowsWithLondonHidden });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const table = component.shadowRoot.querySelector('table');
            assert.instanceOf(table, HTMLTableElement);
            assert.strictEqual(table.getAttribute('aria-rowcount'), '3');
            assert.strictEqual(table.getAttribute('aria-colcount'), '3');
        });
        it('labels a column when it is sortable and does not add a label when it is not', async () => {
            const component = renderDataGrid({ columns, rows });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const cityHeader = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getHeaderCellForColumnId)(component.shadowRoot, 'city');
            const countryHeader = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getHeaderCellForColumnId)(component.shadowRoot, 'country');
            assert.strictEqual(cityHeader.getAttribute('aria-sort'), 'none');
            assert.strictEqual(countryHeader.getAttribute('aria-sort'), null);
        });
        it('labels a column when it is sorted in ASC order', async () => {
            const component = renderDataGrid({
                columns,
                rows,
                activeSort: {
                    columnId: 'city',
                    direction: _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.SortDirection.ASC,
                },
            });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const cityHeader = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getHeaderCellForColumnId)(component.shadowRoot, 'city');
            assert.strictEqual(cityHeader.getAttribute('aria-sort'), 'ascending');
        });
        it('labels a column when it is sorted in DESC order', async () => {
            const component = renderDataGrid({
                columns,
                rows,
                activeSort: {
                    columnId: 'city',
                    direction: _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.SortDirection.DESC,
                },
            });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const cityHeader = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getHeaderCellForColumnId)(component.shadowRoot, 'city');
            assert.strictEqual(cityHeader.getAttribute('aria-sort'), 'descending');
        });
    });
    (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithLocale)('navigating with the keyboard', () => {
        it('makes the first body cell focusable by default when no columns are sortable', async () => {
            const component = renderDataGrid({ rows, columns: columnsWithNoneSortable });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, { column: 0, row: 1 });
        });
        it('does not let the user navigate into the columns when no colums are sortable', async () => {
            const component = renderDataGrid({ rows, columns: columnsWithNoneSortable });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, { column: 0, row: 1 });
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserKeyboardNavigation)(component.shadowRoot, 'ArrowUp');
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, { column: 0, row: 1 });
        });
        it('focuses the column header by default when it is sortable', async () => {
            const component = renderDataGrid({ rows, columns });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, { column: 0, row: 0 });
        });
        it('lets the user press the right arrow key to navigate right', async () => {
            const component = renderDataGrid({ rows, columns: columnsWithNoneSortable });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.focusCurrentlyFocusableCell)(component.shadowRoot);
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserKeyboardNavigation)(component.shadowRoot, 'ArrowRight');
            await coordinator.done();
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, { column: 1, row: 1 });
        });
        it('lets the user press the left arrow key to navigate left', async () => {
            const component = renderDataGrid({ rows, columns: columnsWithNoneSortable });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            // Find a cell in the 2nd column to click to focus
            await (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserFocusingCellAt)(component.shadowRoot, { column: 1, row: 1 });
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserKeyboardNavigation)(component.shadowRoot, 'ArrowLeft');
            await coordinator.done();
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, { column: 0, row: 1 });
        });
        it('does not let the user move left if they are at the first visible column', async () => {
            const component = renderDataGrid({ rows, columns: columnsWithNoneSortable });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.focusCurrentlyFocusableCell)(component.shadowRoot);
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, { column: 0, row: 1 });
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserKeyboardNavigation)(component.shadowRoot, 'ArrowLeft');
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, { column: 0, row: 1 });
        });
        it('lets the user press the down arrow key to navigate down', async () => {
            const component = renderDataGrid({ rows, columns: columnsWithNoneSortable });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.focusCurrentlyFocusableCell)(component.shadowRoot);
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserKeyboardNavigation)(component.shadowRoot, 'ArrowDown');
            await coordinator.done();
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, { column: 0, row: 2 });
        });
        it('keeps the user where they are if they are on the last row', async () => {
            const component = renderDataGrid({ rows, columns: columnsWithNoneSortable });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.focusCurrentlyFocusableCell)(component.shadowRoot);
            // Go down to row 2
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserKeyboardNavigation)(component.shadowRoot, 'ArrowDown');
            await coordinator.done();
            // Go down to row 3 (the last row)
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserKeyboardNavigation)(component.shadowRoot, 'ArrowDown');
            await coordinator.done();
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, { column: 0, row: 3 });
            // Try going down again
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserKeyboardNavigation)(component.shadowRoot, 'ArrowDown');
            await coordinator.done();
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, { column: 0, row: 3 });
        });
        it('lets the user press the up arrow key to navigate up', async () => {
            const component = renderDataGrid({ rows, columns: columnsWithNoneSortable });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            await (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserFocusingCellAt)(component.shadowRoot, { column: 1, row: 2 });
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserKeyboardNavigation)(component.shadowRoot, 'ArrowUp');
            await coordinator.done();
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, { column: 1, row: 1 });
        });
        it('does not let the user move up into the column row when none are sortable', async () => {
            const component = renderDataGrid({ rows, columns: columnsWithNoneSortable });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.focusCurrentlyFocusableCell)(component.shadowRoot);
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserKeyboardNavigation)(component.shadowRoot, 'ArrowUp');
            await coordinator.done();
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, { column: 0, row: 1 });
        });
        it('does let the user move up into the column row when they are sortable', async () => {
            const component = renderDataGrid({ rows, columns });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const table = component.shadowRoot.querySelector('table');
            assert.instanceOf(table, HTMLTableElement);
            await (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserFocusingCellAt)(component.shadowRoot, { column: 0, row: 1 });
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserKeyboardNavigation)(component.shadowRoot, 'ArrowUp');
            await coordinator.done();
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, { column: 0, row: 0 });
        });
        it('correctly skips hidden columns', async () => {
            const columnsWithCountryHidden = createColumns();
            columnsWithCountryHidden[1].visible = false;
            const component = renderDataGrid({ rows, columns: columnsWithCountryHidden });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.focusCurrentlyFocusableCell)(component.shadowRoot);
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserKeyboardNavigation)(component.shadowRoot, 'ArrowRight');
            await coordinator.done();
            // It's column 2 here because column 1 is hidden
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, { column: 2, row: 0 });
        });
        it('correctly skips hidden rows when navigating from the column header', async () => {
            const rowsWithLondonHidden = createRows();
            rowsWithLondonHidden[0].hidden = true;
            const component = renderDataGrid({ rows: rowsWithLondonHidden, columns });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.focusCurrentlyFocusableCell)(component.shadowRoot);
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, { column: 0, row: 0 });
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserKeyboardNavigation)(component.shadowRoot, 'ArrowDown');
            await coordinator.done();
            // It's row 2 here because row 1 is hidden
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, { column: 0, row: 2 });
        });
        it('correctly skips hidden rows when navigating from a body row to another', async () => {
            const rowsWithMunichHidden = createRows();
            rowsWithMunichHidden[1].hidden = true;
            const component = renderDataGrid({ rows: rowsWithMunichHidden, columns: columnsWithNoneSortable });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.focusCurrentlyFocusableCell)(component.shadowRoot);
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserKeyboardNavigation)(component.shadowRoot, 'ArrowDown');
            await coordinator.done();
            // It's 3 here because row 2 is hidden
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, { column: 0, row: 3 });
        });
        it('correctly marks the first visible row cell as focusable when the first row is hidden', async () => {
            const rowsWithLondonHidden = createRows();
            rowsWithLondonHidden[0].hidden = true;
            const component = renderDataGrid({ rows: rowsWithLondonHidden, columns: columnsWithNoneSortable });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.focusCurrentlyFocusableCell)(component.shadowRoot);
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, { column: 0, row: 2 });
        });
        it('re-adjusts the focused cell if a re-render puts that cell out of bounds', async () => {
            const component = renderDataGrid({ rows: createRows(), columns: columnsWithNoneSortable });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.focusCurrentlyFocusableCell)(component.shadowRoot);
            await coordinator.done();
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserKeyboardNavigation)(component.shadowRoot, 'ArrowDown');
            await coordinator.done();
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserKeyboardNavigation)(component.shadowRoot, 'ArrowDown');
            await coordinator.done();
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, { column: 0, row: 3 });
            const rowsWithLastRemoved = createRows();
            rowsWithLastRemoved.splice(2);
            component.data = {
                columns: columnsWithNoneSortable,
                rows: rowsWithLastRemoved,
                activeSort: null,
            };
            await coordinator.done();
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertCurrentFocusedCellIs)(component.shadowRoot, { column: 0, row: 2 });
        });
    });
    (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithLocale)('emits an event', () => {
        it('when the user clicks a column header', async () => {
            const component = renderDataGrid({ rows, columns });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const columnHeaderClickEvent = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getEventPromise)(component, 'columnheaderclick');
            const cityColumn = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getHeaderCellForColumnId)(component.shadowRoot, 'city');
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(cityColumn);
            const clickEvent = await columnHeaderClickEvent;
            assert.deepEqual(clickEvent.data, { column: columns[0], columnIndex: 0 });
        });
        it('when the user "clicks" a column header with the enter key', async () => {
            const component = renderDataGrid({ rows, columns });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const columnHeaderClickEvent = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getEventPromise)(component, 'columnheaderclick');
            const focusableCell = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getFocusableCell)(component.shadowRoot);
            // Check that the focusable cell is the header cell as it's a table with
            // sortable columns.
            assert.strictEqual(focusableCell.getAttribute('data-row-index'), '0');
            assert.strictEqual(focusableCell.getAttribute('data-col-index'), '0');
            focusableCell.focus();
            await coordinator.done();
            const table = component.shadowRoot.querySelector('table');
            assert.instanceOf(table, HTMLTableElement);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchKeyDownEvent)(table, { key: 'Enter' });
            const clickEvent = await columnHeaderClickEvent;
            assert.deepEqual(clickEvent.data, { column: columns[0], columnIndex: 0 });
        });
        it('when the user focuses a cell', async () => {
            const component = renderDataGrid({ rows, columns: columnsWithNoneSortable });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const bodyCellFocusedEvent = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getEventPromise)(component, 'cellfocused');
            const focusableCell = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getFocusableCell)(component.shadowRoot);
            focusableCell.focus();
            const cellFocusedEvent = await bodyCellFocusedEvent;
            assert.deepEqual(cellFocusedEvent.data, { cell: rows[0].cells[0], row: rows[0] });
        });
        it('when the user hovers over a row', async () => {
            const component = renderDataGrid({ rows, columns });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            const rowHoveredEvent = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getEventPromise)(component, 'rowmouseenter');
            const rowLeaveEvent = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getEventPromise)(component, 'rowmouseleave');
            const row = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getBodyRowByAriaIndex)(component.shadowRoot, 1);
            row.dispatchEvent(new MouseEvent('mouseenter'));
            const hoverEvent = await rowHoveredEvent;
            assert.deepEqual(hoverEvent.data, { row: rows[0] });
            row.dispatchEvent(new MouseEvent('mouseleave'));
            const leaveEvent = await rowLeaveEvent;
            assert.deepEqual(leaveEvent.data, { row: rows[0] });
        });
    });
    describe('adding new rows', () => {
        it('only has one DOM mutation to add the new row', async () => {
            const component = renderDataGrid({ rows, columns });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            await (0,_testing_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_4__.withMutations)([
                // We expect one <tr> to be added
                { target: 'tr', max: 1 },
            ], component.shadowRoot, async (shadowRoot) => {
                const newRow = {
                    cells: [
                        { columnId: 'city', value: 'Berlin' },
                        { columnId: 'country', value: 'Germany' },
                        { columnId: 'population', value: '3.66m' },
                    ],
                };
                component.data = {
                    columns,
                    rows: [...rows, newRow],
                    activeSort: null,
                };
                await coordinator.done();
                const newRowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getValuesOfBodyRowByAriaIndex)(shadowRoot, 4);
                assert.deepEqual(newRowValues, ['Berlin', 'Germany', '3.66m']);
            });
        });
    });
    describe('marking a row as selected', () => {
        it('marks the row as selected when the user clicks on a cell', async () => {
            const component = renderDataGrid({ rows, columns: columnsWithNoneSortable });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            // Ensure no row is selected before the user clicks
            let selectedRow = component.shadowRoot.querySelector('tr.selected');
            assert.isNull(selectedRow);
            // // Focus the very first cell
            await (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.emulateUserFocusingCellAt)(component.shadowRoot, { column: 0, row: 1 });
            await coordinator.done();
            // // Ensure the row is updated to be marked as selected
            selectedRow = component.shadowRoot.querySelector('tbody tr.selected');
            assert.instanceOf(selectedRow, HTMLTableRowElement);
        });
        it('persists over re-renders when not focused', async () => {
            const rows = createRows();
            const component = renderDataGrid({ rows, columns: columnsWithNoneSortable });
            assert.isNotNull(component.shadowRoot);
            await coordinator.done();
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.focusCurrentlyFocusableCell)(component.shadowRoot);
            await coordinator.done();
            const wrapper = component.shadowRoot.querySelector('.wrapping-container');
            if (wrapper) {
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchFocusOutEvent)(wrapper);
            }
            await coordinator.done();
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertSelectedRowIs)(component.shadowRoot, 1);
            rows.push({
                cells: [
                    { columnId: 'city', value: 'Vienna' },
                    { columnId: 'country', value: 'Austria' },
                    { columnId: 'population', value: '1.92m' },
                ],
            });
            component.data = {
                columns: columnsWithNoneSortable,
                rows,
                activeSort: null,
            };
            await coordinator.done();
            (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertSelectedRowIs)(component.shadowRoot, 1);
        });
    });
    describe('DataGrid.DataGridUtils.calculateColumnWidthPercentageFromWeighting', () => {
        const makeColumnsWithWeightings = (...weights) => {
            return weights.map((weight, index) => {
                return {
                    id: `column-${index}`,
                    title: `Column ${index}`,
                    sortable: false,
                    visible: true,
                    hideable: false,
                    widthWeighting: weight,
                };
            });
        };
        it('correctly divides columns based on the weighting', async () => {
            const columns = makeColumnsWithWeightings(1, 1);
            const calculatedWidths = columns.map(col => _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.calculateColumnWidthPercentageFromWeighting(columns, col.id));
            assert.deepEqual(calculatedWidths, [50, 50]);
        });
        it('correctly divides and rounds when the % are not whole numbers', async () => {
            const columns = makeColumnsWithWeightings(1, 1, 1);
            const calculatedWidths = columns.map(col => _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.calculateColumnWidthPercentageFromWeighting(columns, col.id));
            assert.deepEqual(calculatedWidths, [33, 33, 33]);
        });
        it('does not include hidden columns when calculating weighting', async () => {
            const columns = makeColumnsWithWeightings(1, 1, 1);
            columns[0].visible = false;
            const calculatedWidths = columns.map(col => _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.calculateColumnWidthPercentageFromWeighting(columns, col.id));
            assert.deepEqual(calculatedWidths, [0, 50, 50]);
        });
        it('errors if a column has a weighting of less than 1', async () => {
            const columns = makeColumnsWithWeightings(0.5);
            assert.throws(() => _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.calculateColumnWidthPercentageFromWeighting(columns, columns[0].id), 'Error with column column-0: width weightings must be >= 1.');
        });
    });
    describe('#DataGrid.DataGridUtils.handleArrowKeyNavigation util', () => {
        const makeColumns = () => {
            return [
                { id: 'a', title: 'A', sortable: false, visible: true, hideable: false, widthWeighting: 1 },
                { id: 'b', title: 'B', sortable: false, visible: true, hideable: false, widthWeighting: 1 },
                { id: 'c', title: 'C', sortable: false, visible: true, hideable: false, widthWeighting: 1 },
            ];
        };
        const makeRows = () => {
            return [
                {
                    cells: [
                        { columnId: 'a', value: 'a: row 1' },
                        { columnId: 'b', value: 'b: row 1' },
                        { columnId: 'c', value: 'c: row 1' },
                    ],
                    hidden: false,
                },
                {
                    cells: [
                        { columnId: 'a', value: 'a: row 2' },
                        { columnId: 'b', value: 'b: row 2' },
                        { columnId: 'c', value: 'c: row 2' },
                    ],
                    hidden: false,
                },
                {
                    cells: [
                        { columnId: 'a', value: 'a: row 3' },
                        { columnId: 'b', value: 'b: row 3' },
                        { columnId: 'c', value: 'c: row 3' },
                    ],
                    hidden: false,
                },
            ];
        };
        describe('navigating left', () => {
            it('does not let the user move further left than the first column', async () => {
                const newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                    key: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.ArrowKey.LEFT,
                    currentFocusedCell: [0, 1],
                    columns: makeColumns(),
                    rows: makeRows(),
                });
                assert.deepEqual(newFocusedCell, [0, 1]);
            });
            it('does not let the user move left if there are no visible columns to the left', async () => {
                const columnsWithFirstHidden = makeColumns();
                columnsWithFirstHidden[0].visible = false;
                const newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                    key: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.ArrowKey.LEFT,
                    currentFocusedCell: [1, 1],
                    columns: columnsWithFirstHidden,
                    rows: makeRows(),
                });
                assert.deepEqual(newFocusedCell, [1, 1]);
            });
            it('lets the user move left if the column to the left is visible', async () => {
                const newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                    key: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.ArrowKey.LEFT,
                    currentFocusedCell: [1, 1],
                    columns: makeColumns(),
                    rows: makeRows(),
                });
                assert.deepEqual(newFocusedCell, [0, 1]);
            });
            it('correctly skips a hidden column to get to the next left visible column', async () => {
                const withSecondColumnHidden = makeColumns();
                withSecondColumnHidden[1].visible = false;
                const newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                    key: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.ArrowKey.LEFT,
                    currentFocusedCell: [2, 1],
                    columns: withSecondColumnHidden,
                    rows,
                });
                assert.deepEqual(newFocusedCell, [0, 1]);
            });
        });
        describe('navigating right', () => {
            it('does not let the user move further right than the last column', async () => {
                const newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                    key: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.ArrowKey.RIGHT,
                    currentFocusedCell: [2, 1],
                    columns: makeColumns(),
                    rows: makeRows(),
                });
                assert.deepEqual(newFocusedCell, [2, 1]);
            });
            it('does not let the user move right if there are no visible columns to the right', async () => {
                const columnsWithLastHidden = makeColumns();
                columnsWithLastHidden[2].visible = false;
                const newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                    key: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.ArrowKey.RIGHT,
                    currentFocusedCell: [1, 1],
                    columns: columnsWithLastHidden,
                    rows: makeRows(),
                });
                assert.deepEqual(newFocusedCell, [1, 1]);
            });
            it('lets the user move right if the column to the right is visible', async () => {
                const newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                    key: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.ArrowKey.RIGHT,
                    currentFocusedCell: [1, 1],
                    columns: makeColumns(),
                    rows: makeRows(),
                });
                assert.deepEqual(newFocusedCell, [2, 1]);
            });
            it('correctly skips a hidden column to get to the next right visible column', async () => {
                const withSecondColumnHidden = makeColumns();
                withSecondColumnHidden[1].visible = false;
                const newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                    key: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.ArrowKey.RIGHT,
                    currentFocusedCell: [0, 1],
                    columns: withSecondColumnHidden,
                    rows,
                });
                assert.deepEqual(newFocusedCell, [2, 1]);
            });
        });
        describe('navigating up', () => {
            it('does not let the user go into the columns row when none are sortable', async () => {
                const newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                    key: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.ArrowKey.UP,
                    currentFocusedCell: [0, 1],
                    columns: makeColumns(),
                    rows: makeRows(),
                });
                assert.deepEqual(newFocusedCell, [0, 1]);
            });
            describe('when at least one column is sortable', () => {
                const sortableColumns = makeColumns();
                sortableColumns.forEach(col => {
                    col.sortable = true;
                });
                it('does let the user go into the columns row', async () => {
                    const newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                        key: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.ArrowKey.UP,
                        currentFocusedCell: [0, 1],
                        columns: sortableColumns,
                        rows: makeRows(),
                    });
                    assert.deepEqual(newFocusedCell, [0, 0]);
                });
                it('does not let the user go up if they are in the column header', async () => {
                    const newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                        key: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.ArrowKey.UP,
                        currentFocusedCell: [0, 0],
                        columns: sortableColumns,
                        rows: makeRows(),
                    });
                    assert.deepEqual(newFocusedCell, [0, 0]);
                });
                it('correctly skips a hidden row to navigate into the columns row', async () => {
                    const rowsWithFirstHidden = makeRows();
                    rowsWithFirstHidden[0].hidden = true;
                    const newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                        key: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.ArrowKey.UP,
                        currentFocusedCell: [0, 2],
                        columns: sortableColumns,
                        rows: rowsWithFirstHidden,
                    });
                    assert.deepEqual(newFocusedCell, [0, 0]);
                });
            });
            it('correctly skips a hidden row while navigating through the body rows', async () => {
                const rowsWithSecondHidden = makeRows();
                rowsWithSecondHidden[1].hidden = true;
                const newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                    key: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.ArrowKey.UP,
                    currentFocusedCell: [0, 3],
                    columns: makeColumns(),
                    rows: rowsWithSecondHidden,
                });
                assert.deepEqual(newFocusedCell, [0, 1]);
            });
            it('does not let the user move up if no columns are sortable and all rows above are hidden', async () => {
                const rowsWithFirstAndSecondHidden = makeRows();
                rowsWithFirstAndSecondHidden[0].hidden = true;
                rowsWithFirstAndSecondHidden[1].hidden = true;
                const newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                    key: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.ArrowKey.UP,
                    currentFocusedCell: [0, 3],
                    columns: makeColumns(),
                    rows: rowsWithFirstAndSecondHidden,
                });
                assert.deepEqual(newFocusedCell, [0, 3]);
            });
        });
        describe('navigating down', () => {
            describe('when at least one column is sortable', () => {
                const sortableColumns = makeColumns();
                sortableColumns.forEach(col => {
                    col.sortable = true;
                });
                it('lets the user navigate from the columns into the body', async () => {
                    const newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                        key: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.ArrowKey.DOWN,
                        currentFocusedCell: [0, 0],
                        columns: sortableColumns,
                        rows: makeRows(),
                    });
                    assert.deepEqual(newFocusedCell, [0, 1]);
                });
                it('correctly skips any hidden body rows to find the first visible one', async () => {
                    const rowsWithFirstHidden = makeRows();
                    rowsWithFirstHidden[0].hidden = true;
                    const newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                        key: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.ArrowKey.DOWN,
                        currentFocusedCell: [0, 0],
                        columns: sortableColumns,
                        rows: rowsWithFirstHidden,
                    });
                    assert.deepEqual(newFocusedCell, [0, 2]);
                });
            });
            it('correctly skips a hidden row while navigating through the body rows', async () => {
                const rowsWithSecondHidden = makeRows();
                rowsWithSecondHidden[1].hidden = true;
                const newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                    key: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.ArrowKey.DOWN,
                    currentFocusedCell: [0, 1],
                    columns: makeColumns(),
                    rows: rowsWithSecondHidden,
                });
                assert.deepEqual(newFocusedCell, [0, 3]);
            });
            it('does not let the user move down if all rows below are hidden', async () => {
                const rowsWithFirstAndSecondHidden = makeRows();
                rowsWithFirstAndSecondHidden[1].hidden = true;
                rowsWithFirstAndSecondHidden[2].hidden = true;
                const newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                    key: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.ArrowKey.DOWN,
                    currentFocusedCell: [0, 1],
                    columns: makeColumns(),
                    rows: rowsWithFirstAndSecondHidden,
                });
                assert.deepEqual(newFocusedCell, [0, 1]);
            });
            it('leaves the user where they are if no body rows are visible', async () => {
                const rowsAllHidden = makeRows().map(row => {
                    row.hidden = true;
                    return row;
                });
                const sortableColumns = makeColumns().map(col => {
                    col.sortable = true;
                    return col;
                });
                const newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                    key: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.ArrowKey.DOWN,
                    currentFocusedCell: [0, 0],
                    columns: sortableColumns,
                    rows: rowsAllHidden,
                });
                assert.deepEqual(newFocusedCell, [0, 0]);
            });
            it('does not let the user move down if they are on the last row', async () => {
                const newFocusedCell = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.handleArrowKeyNavigation({
                    key: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.ArrowKey.DOWN,
                    currentFocusedCell: [0, 3],
                    columns: makeColumns(),
                    rows: makeRows(),
                });
                assert.deepEqual(newFocusedCell, [0, 3]);
            });
        });
    });
    describe('DataGrid.DataGridUtils.getCellTitleFromCellContent', () => {
        it('returns full cell content as title when content is short', async () => {
            const title = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.getCellTitleFromCellContent('some shortish cell value');
            assert.deepEqual(title, 'some shortish cell value');
        });
        it('returns truncated cell content as title when content is long', async () => {
            const title = _data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.getCellTitleFromCellContent('This cell contains text which is a bit longer');
            assert.deepEqual(title, 'This cell contains t…');
        });
    });
});


/***/ })

}]);