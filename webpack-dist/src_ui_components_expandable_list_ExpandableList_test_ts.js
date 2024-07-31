"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_expandable_list_ExpandableList_test_ts"],{

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

/***/ "./src/ui/components/expandable_list/ExpandableList.test.ts":
/*!******************************************************************!*\
  !*** ./src/ui/components/expandable_list/ExpandableList.test.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _testing_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/MutationHelpers.js */ "./src/testing/MutationHelpers.ts");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _expandable_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expandable_list.js */ "./src/ui/components/expandable_list/expandable_list.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




describe('ExpandableList', () => {
    it('can be expanded', async () => {
        const list = new _expandable_list_js__WEBPACK_IMPORTED_MODULE_3__.ExpandableList.ExpandableList();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(list);
        list.data = {
            rows: [
                _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html `<div class="row">row 1</div>`,
                _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html `<div class="row">row 2</div>`,
            ],
        };
        assert.isNotNull(list.shadowRoot);
        // checks that list is not expanded initially
        let rows = list.shadowRoot.querySelectorAll('.row');
        assert.strictEqual(rows.length, 1);
        const iconSpan = list.shadowRoot.querySelector('span.arrow-icon');
        assert.isNotNull(iconSpan);
        assert.isFalse(iconSpan?.classList.contains('expanded'));
        // checks that clicking button expands list by adding a div
        const button = list.shadowRoot.querySelector('button.arrow-icon-button');
        await (0,_testing_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_1__.withMutations)([{ target: 'div', type: _testing_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_1__.MutationType.ADD, max: 1 }], list.shadowRoot, () => {
            button?.click();
        });
        // checks that list is expanded
        assert.isTrue(iconSpan?.classList.contains('expanded'));
        rows = list.shadowRoot.querySelectorAll('.row');
        assert.strictEqual(rows.length, 2);
    });
    it('does not render when given 0 rows', async () => {
        const list = new _expandable_list_js__WEBPACK_IMPORTED_MODULE_3__.ExpandableList.ExpandableList();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(list);
        list.data = {
            rows: [],
        };
        assert.isNotNull(list.shadowRoot);
        // checks that list is not rendered
        const rows = list.shadowRoot.querySelectorAll('.row');
        assert.strictEqual(rows.length, 0);
        const iconSpan = list.shadowRoot.querySelector('span.arrow-icon');
        assert.isNull(iconSpan);
    });
    it('cannot be expanded when given 1 row', async () => {
        const list = new _expandable_list_js__WEBPACK_IMPORTED_MODULE_3__.ExpandableList.ExpandableList();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(list);
        list.data = {
            rows: [
                _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html `<div class="row">row 1</div>`,
            ],
        };
        assert.isNotNull(list.shadowRoot);
        // checks that list contains 1 row
        const rows = list.shadowRoot.querySelectorAll('.row');
        assert.strictEqual(rows.length, 1);
        // checks that list does not render button for expanding
        const iconSpan = list.shadowRoot.querySelector('span.arrow-icon');
        assert.isNull(iconSpan);
        const button = list.shadowRoot.querySelector('button.arrow-icon-button');
        assert.isNull(button);
    });
});


/***/ }),

/***/ "./src/ui/components/expandable_list/ExpandableList.ts":
/*!*************************************************************!*\
  !*** ./src/ui/components/expandable_list/ExpandableList.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpandableList: () => (/* binding */ ExpandableList)
/* harmony export */ });
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './expandableList.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ExpandableList_instances, _ExpandableList_shadow, _ExpandableList_expanded, _ExpandableList_rows, _ExpandableList_title, _ExpandableList_onArrowClick, _ExpandableList_render;



class ExpandableList extends HTMLElement {
    constructor() {
        super(...arguments);
        _ExpandableList_instances.add(this);
        _ExpandableList_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _ExpandableList_expanded.set(this, false);
        _ExpandableList_rows.set(this, []);
        _ExpandableList_title.set(this, void 0);
    }
    set data(data) {
        __classPrivateFieldSet(this, _ExpandableList_rows, data.rows, "f");
        __classPrivateFieldSet(this, _ExpandableList_title, data.title, "f");
        __classPrivateFieldGet(this, _ExpandableList_instances, "m", _ExpandableList_render).call(this);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ExpandableList_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './expandableList.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
}
_ExpandableList_shadow = new WeakMap(), _ExpandableList_expanded = new WeakMap(), _ExpandableList_rows = new WeakMap(), _ExpandableList_title = new WeakMap(), _ExpandableList_instances = new WeakSet(), _ExpandableList_onArrowClick = function _ExpandableList_onArrowClick() {
    __classPrivateFieldSet(this, _ExpandableList_expanded, !__classPrivateFieldGet(this, _ExpandableList_expanded, "f"), "f");
    __classPrivateFieldGet(this, _ExpandableList_instances, "m", _ExpandableList_render).call(this);
}, _ExpandableList_render = function _ExpandableList_render() {
    if (__classPrivateFieldGet(this, _ExpandableList_rows, "f").length < 1) {
        return;
    }
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="expandable-list-container">
        <div>
          ${__classPrivateFieldGet(this, _ExpandableList_rows, "f").length > 1 ?
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
              <button title='${__classPrivateFieldGet(this, _ExpandableList_title, "f")}' aria-label='${__classPrivateFieldGet(this, _ExpandableList_title, "f")}' aria-expanded=${__classPrivateFieldGet(this, _ExpandableList_expanded, "f") ? 'true' : 'false'} @click=${() => __classPrivateFieldGet(this, _ExpandableList_instances, "m", _ExpandableList_onArrowClick).call(this)} class="arrow-icon-button">
                <span class="arrow-icon ${__classPrivateFieldGet(this, _ExpandableList_expanded, "f") ? 'expanded' : ''}"
                jslog=${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.expand().track({ click: true })}></span>
              </button>
            `
        : _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing}
        </div>
        <div class="expandable-list-items">
          ${__classPrivateFieldGet(this, _ExpandableList_rows, "f").filter((_, index) => (__classPrivateFieldGet(this, _ExpandableList_expanded, "f") || index === 0)).map(row => _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
            ${row}
          `)}
        </div>
      </div>
    `, __classPrivateFieldGet(this, _ExpandableList_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ExpandableList, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-expandable-list`
});
customElements.define('devtools-expandable-list', ExpandableList);


/***/ }),

/***/ "./src/ui/components/expandable_list/expandable_list.ts":
/*!**************************************************************!*\
  !*** ./src/ui/components/expandable_list/expandable_list.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpandableList: () => (/* reexport module object */ _ExpandableList_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _ExpandableList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExpandableList.js */ "./src/ui/components/expandable_list/ExpandableList.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/***/ })

}]);