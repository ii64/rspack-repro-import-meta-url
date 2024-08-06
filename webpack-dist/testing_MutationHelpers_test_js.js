"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["testing_MutationHelpers_test_js"],{

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

/***/ "./testing/MutationHelpers.js":
/*!************************************!*\
  !*** ./testing/MutationHelpers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TEXT_NODE: () => (/* binding */ TEXT_NODE),
/* harmony export */   someMutations: () => (/* binding */ someMutations),
/* harmony export */   withMutations: () => (/* binding */ withMutations),
/* harmony export */   withNoMutations: () => (/* binding */ withNoMutations)
/* harmony export */ });
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
        if (mutation.type === "ADD" /* MutationType.ADD */) {
            const mutationsForTagName = getMutationsForTagName(trackedMutations, tagName);
            mutationsForTagName.ADD++;
            trackedMutations.set(tagName, mutationsForTagName);
        }
        else if (mutation.type === "REMOVE" /* MutationType.REMOVE */) {
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
                type: "TEXT_UPDATE" /* MutationType.TEXT_UPDATE */,
            });
        }
        for (const added of entry.addedNodes) {
            if (!nodeShouldBeIgnored(added)) {
                storageArray.push({
                    target: added.nodeName.toLowerCase(),
                    type: "ADD" /* MutationType.ADD */,
                });
            }
        }
        for (const removed of entry.removedNodes) {
            if (!nodeShouldBeIgnored(removed)) {
                storageArray.push({
                    target: removed.nodeName.toLowerCase(),
                    type: "REMOVE" /* MutationType.REMOVE */,
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
//# sourceMappingURL=MutationHelpers.js.map

/***/ }),

/***/ "./testing/MutationHelpers.test.js":
/*!*****************************************!*\
  !*** ./testing/MutationHelpers.test.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */ var _MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MutationHelpers.js */ "./testing/MutationHelpers.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



/**
 * Needed because assert.throws from chai does not work async.
 */
async function assertThrowsAsync(fn, errorMessage) {
    let caught = false;
    try {
        await fn();
    }
    catch (e) {
        caught = true;
        assert.strictEqual(e.message, errorMessage);
    }
    if (!caught) {
        assert.fail('Expected error but got none.');
    }
}
async function assertNotThrowsAsync(fn) {
    let errorMessage = '';
    try {
        await fn();
    }
    catch (e) {
        errorMessage = e.message;
    }
    if (errorMessage) {
        assert.fail(`Expected no error but got:\n${errorMessage}`);
    }
}
describe('MutationHelpers', () => {
    describe('withMutations', () => {
        it('fails if there are no mutations', async () => {
            const div = document.createElement('div');
            await assertThrowsAsync(async () => {
                await (0,_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__.withMutations)([{
                        target: 'div',
                    }], div, () => { });
            }, 'Expected at least one mutation for ADD/REMOVE div, but got 0');
        });
        it('allows up to 10 mutations unless specified', async () => {
            const div = document.createElement('div');
            (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(div);
            await assertNotThrowsAsync(async () => {
                await (0,_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__.withMutations)([{
                        target: 'div',
                    }], div, () => {
                    for (let i = 0; i < 10; i++) {
                        div.appendChild(document.createElement('div'));
                    }
                });
            });
        });
        it('errors if there are >10 mutations', async () => {
            const div = document.createElement('div');
            (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(div);
            await assertThrowsAsync(async () => {
                await (0,_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__.withMutations)([{
                        target: 'div',
                    }], div, () => {
                    for (let i = 0; i < 11; i++) {
                        div.appendChild(document.createElement('div'));
                    }
                });
            }, 'Expected no more than 10 mutations for ADD/REMOVE div, but got 11');
        });
        it('lets the user provide the max', async () => {
            const div = document.createElement('div');
            (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(div);
            await assertThrowsAsync(async () => {
                await (0,_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__.withMutations)([{
                        target: 'div',
                        max: 5,
                    }], div, () => {
                    for (let i = 0; i < 6; i++) {
                        div.appendChild(document.createElement('div'));
                    }
                });
            }, 'Expected no more than 5 mutations for ADD/REMOVE div, but got 6');
        });
        it('supports a max of 0', async () => {
            const div = document.createElement('div');
            (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(div);
            await assertThrowsAsync(async () => {
                await (0,_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__.withMutations)([{
                        target: 'div',
                        max: 0,
                    }], div, () => {
                    div.appendChild(document.createElement('div'));
                });
            }, 'Expected no more than 0 mutations for ADD/REMOVE div, but got 1');
        });
        it('supports checking multiple expected mutations', async () => {
            const div = document.createElement('div');
            (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(div);
            await assertThrowsAsync(async () => {
                await (0,_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__.withMutations)([
                    {
                        target: 'div',
                        max: 1,
                    },
                    { target: 'span', max: 0 },
                ], div, () => {
                    div.appendChild(document.createElement('div'));
                    div.appendChild(document.createElement('span'));
                });
            }, 'Expected no more than 0 mutations for ADD/REMOVE span, but got 1');
        });
        it('errors if other unexpected mutations occur', async () => {
            const div = document.createElement('div');
            (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(div);
            await assertThrowsAsync(async () => {
                await (0,_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__.withMutations)([{
                        target: 'div',
                        max: 1,
                    }], div, () => {
                    // this is OK as we are expecting one div mutation
                    div.appendChild(document.createElement('div'));
                    // not OK - we have not declared any span mutations
                    div.appendChild(document.createElement('span'));
                });
            }, 'Additional unexpected mutations were detected:\nspan: 1 addition');
        });
        it('lets you declare any expected text updates', async () => {
            const div = document.createElement('div');
            const renderList = (list) => {
                const html = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `${list.map(l => _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `<span>${l}</span>`)}`;
                _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(html, div, { host: undefined });
            };
            (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(div);
            renderList(['a', 'b']);
            await assertNotThrowsAsync(async () => {
                await (0,_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__.withMutations)([
                    {
                        target: 'div',
                    },
                    { target: _MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__.TEXT_NODE },
                ], div, div => {
                    renderList(['b', 'a']);
                    div.appendChild(document.createElement('div'));
                });
            });
        });
        it('fails if there are undeclared text updates', async () => {
            const div = document.createElement('div');
            const renderList = (list) => {
                const html = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `${list.map(l => _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `<span>${l}</span>`)}`;
                _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(html, div, { host: undefined });
            };
            (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(div);
            renderList(['a', 'b']);
            await assertThrowsAsync(async () => {
                await (0,_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__.withMutations)([{
                        target: 'div',
                    }], div, div => {
                    renderList(['b', 'a']);
                    div.appendChild(document.createElement('div'));
                });
            }, 'Additional unexpected mutations were detected:\nTEXT_NODE: 2 updates');
        });
    });
    describe('withNoMutations', () => {
        it('fails if there are DOM additions', async () => {
            const div = document.createElement('div');
            (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(div);
            await assertThrowsAsync(async () => {
                await (0,_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__.withNoMutations)(div, element => {
                    const child = document.createElement('span');
                    element.appendChild(child);
                });
            }, 'Expected no mutations, but got 1: \nspan: 1 addition');
        });
        it('fails if there are DOM removals', async () => {
            const div = document.createElement('div');
            const child = document.createElement('span');
            div.appendChild(child);
            (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(div);
            await assertThrowsAsync(async () => {
                await (0,_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__.withNoMutations)(div, element => {
                    element.removeChild(child);
                });
            }, 'Expected no mutations, but got 1: \nspan: 1 removal');
        });
        it('correctly displays multiple unexpected mutations', async () => {
            const div = document.createElement('div');
            (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(div);
            await assertThrowsAsync(async () => {
                await (0,_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__.withNoMutations)(div, element => {
                    const child = document.createElement('span');
                    element.appendChild(child);
                    element.removeChild(child);
                    element.appendChild(document.createElement('p'));
                    element.appendChild(document.createElement('p'));
                    element.appendChild(document.createElement('p'));
                });
            }, 'Expected no mutations, but got 5: \nspan: 1 addition, 1 removal\np: 3 additions');
        });
        it('fails if there are text re-orderings', async () => {
            const div = document.createElement('div');
            const renderList = (list) => {
                const html = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `${list.map(l => _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `<span>${l}</span>`)}`;
                _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(html, div, { host: undefined });
            };
            (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(div);
            renderList(['a', 'b']);
            await assertThrowsAsync(async () => {
                await (0,_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__.withNoMutations)(div, () => {
                    renderList(['b', 'a']);
                });
            }, 'Expected no mutations, but got 2: \nTEXT_NODE: 2 updates');
        });
        it('fails if there are text re-orderings and DOM additions', async () => {
            const div = document.createElement('div');
            const renderList = (list) => {
                const html = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `${list.map(l => _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `<span>${l}</span>`)}`;
                _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(html, div, { host: undefined });
            };
            (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(div);
            renderList(['a', 'b']);
            await assertThrowsAsync(async () => {
                await (0,_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__.withNoMutations)(div, div => {
                    renderList(['b', 'a']);
                    div.appendChild(document.createElement('ul'));
                });
            }, 'Expected no mutations, but got 3: \nTEXT_NODE: 2 updates\nul: 1 addition');
        });
    });
});
//# sourceMappingURL=MutationHelpers.test.js.map

/***/ })

}]);