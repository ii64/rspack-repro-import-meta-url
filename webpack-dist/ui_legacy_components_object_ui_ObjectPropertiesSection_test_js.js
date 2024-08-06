"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_object_ui_ObjectPropertiesSection_test_js"],{

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

/***/ "./testing/RealConnection.js":
/*!***********************************!*\
  !*** ./testing/RealConnection.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   describeWithRealConnection: () => (/* binding */ describeWithRealConnection),
/* harmony export */   flushRealConnectionSuits: () => (/* binding */ flushRealConnectionSuits),
/* harmony export */   getExecutionContext: () => (/* binding */ getExecutionContext)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/protocol_client/protocol_client.js */ "./core/protocol_client/protocol_client.js");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/root/root.js */ "./core/root/root.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _entrypoints_main_main_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../entrypoints/main/main.js */ "./entrypoints/main/main.js");
/* harmony import */ var _EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







let initialized = false;
function describeBody(fn) {
    before('describeWithRealConnection', async function () {
        if (initialized) {
            return;
        }
        await (0,_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.deinitializeGlobalVars)();
        await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../entrypoints/shell/shell.js */ "./entrypoints/shell/shell.js"));
        await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../panels/elements/elements-meta.js */ "./panels/elements/elements-meta.js"));
        await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../panels/sensors/sensors-meta.js */ "./panels/sensors/sensors-meta.js"));
        await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../entrypoints/inspector_main/inspector_main-meta.js */ "./entrypoints/inspector_main/inspector_main-meta.js"));
        let response = await fetch('/json/list', { method: 'PUT' });
        const targetList = await response.json();
        // There can be more than one target here. When debugging tests, the "main" test suite run and the debug test suite
        // run happen in different contexts and don't share `initialized`, but the do share the same chrome instance and
        // thus target list.
        const mainTarget = targetList.find((t) => t.title === 'Karma');
        if (!mainTarget) {
            console.error('A target could not be found. This can happen if you are accidentally running multiple instances of Karma at once. Make sure you don\'t have any debug sessions active when trying to run the unittests.');
            throw new Error('Main test target not found');
        }
        const originalTargetId = mainTarget.id;
        response = await fetch('/json/new', { method: 'PUT' });
        const target = await response.json();
        await fetch('/json/activate/' + originalTargetId, { method: 'PUT' });
        /* This value comes from the `client.targetDir` setting in `karma.conf.js` */
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const { remoteDebuggingPort } = (globalThis.__karma__).config;
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.Runtime.setQueryParamForTesting('ws', `localhost:${remoteDebuggingPort}/devtools/page/${target.id}`);
        const main = new _entrypoints_main_main_js__WEBPACK_IMPORTED_MODULE_5__.MainImpl.MainImpl();
        await main.readyForTest();
        initialized = true;
    });
    beforeEach('describeWithRealConnection', () => {
        resetHostBindingStubState();
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().clearAll();
    });
    fn();
    afterEach('describeWithRealConnection', async () => {
        const runAfterPendingDispatches = _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_2__.InspectorBackend.test.deprecatedRunAfterPendingDispatches;
        if (!runAfterPendingDispatches) {
            throw new Error('Missing deprecatedRunAfterPendingDispatches');
        }
        await new Promise(resolve => runAfterPendingDispatches(resolve));
    });
}
const realConnectionSuites = [];
function describeWithRealConnection(title, fn) {
    realConnectionSuites.push({ title, fn, only: false });
}
// eslint-disable-next-line mocha/no-exclusive-tests
describeWithRealConnection.only = function (title, fn) {
    realConnectionSuites.push({ title, fn, only: true });
};
function flushRealConnectionSuits() {
    for (const { title, fn, only } of realConnectionSuites) {
        if (only) {
            // eslint-disable-next-line mocha/no-exclusive-tests
            describe.only(title, function () {
                describeBody(fn.bind(this));
            });
        }
        else {
            describe(title, function () {
                describeBody(fn.bind(this));
            });
        }
    }
}
async function getExecutionContext(runtimeModel) {
    let executionContexts = runtimeModel.executionContexts();
    if (!executionContexts.length) {
        await new Promise(resolve => {
            const listener = () => {
                runtimeModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.RuntimeModel.Events.ExecutionContextCreated, listener);
                executionContexts = runtimeModel.executionContexts();
                resolve();
            };
            runtimeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.RuntimeModel.Events.ExecutionContextCreated, listener);
        });
    }
    if (!executionContexts.length) {
        throw new Error('Cannot get executionContext');
    }
    return executionContexts[0];
}
function resetHostBindingStubState() {
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.recordedCountHistograms.splice(0);
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.recordedEnumeratedHistograms.splice(0);
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.recordedPerformanceHistograms.splice(0);
}
//# sourceMappingURL=RealConnection.js.map

/***/ }),

/***/ "./ui/legacy/components/object_ui/ObjectPropertiesSection.test.js":
/*!************************************************************************!*\
  !*** ./ui/legacy/components/object_ui/ObjectPropertiesSection.test.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../testing/MutationHelpers.js */ "./testing/MutationHelpers.js");
/* harmony import */ var _testing_RealConnection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../testing/RealConnection.js */ "./testing/RealConnection.js");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _object_ui_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./object_ui.js */ "./ui/legacy/components/object_ui/object_ui.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








describe('ObjectPropertiesSection', () => {
    (0,_testing_RealConnection_js__WEBPACK_IMPORTED_MODULE_5__.describeWithRealConnection)('ObjectPropertiesSection', () => {
        async function evaluateAndGetProperties(code, accessorPropertiesOnly = false, generatePreview = false) {
            const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance();
            const target = targetManager.rootTarget();
            assert.exists(target);
            const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
            assert.exists(runtimeModel);
            const executionContext = await (0,_testing_RealConnection_js__WEBPACK_IMPORTED_MODULE_5__.getExecutionContext)(runtimeModel);
            _legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.ExecutionContext, executionContext);
            const { result } = await _object_ui_js__WEBPACK_IMPORTED_MODULE_7__.JavaScriptREPL.JavaScriptREPL.evaluateAndBuildPreview(code, false /* throwOnSideEffect */, true /* replMode */, 500 /* timeout */);
            if (!(result && 'object' in result && result.object)) {
                throw new Error('Cannot evaluate test object');
            }
            const { object } = result;
            const { properties } = await object.getAllProperties(accessorPropertiesOnly, generatePreview);
            assert.exists(properties);
            return { object, properties };
        }
        async function setupTreeOutline(code, accessorPropertiesOnly, generatePreview) {
            const { object, properties } = await evaluateAndGetProperties(code, accessorPropertiesOnly, generatePreview);
            const treeOutline = new _object_ui_js__WEBPACK_IMPORTED_MODULE_7__.ObjectPropertiesSection.ObjectPropertiesSectionsTreeOutline({ readOnly: true });
            _object_ui_js__WEBPACK_IMPORTED_MODULE_7__.ObjectPropertiesSection.ObjectPropertyTreeElement.populateWithProperties(treeOutline.rootElement(), properties, null, true /* skipProto */, false /* skipGettersAndSetters */, object);
            return treeOutline;
        }
        it('can reveal private accessor values', async () => {
            const VALUE = '42';
            const treeOutline = await setupTreeOutline(`(() => {
           class A {
             get #bar() { return ${VALUE}; }
           };
           return new A();
         })()`, true, false);
            const propertiesSection = treeOutline.rootElement().firstChild();
            propertiesSection.update();
            const calculateValueButton = propertiesSection.valueElement.querySelector('.object-value-calculate-value-button');
            assert.exists(calculateValueButton);
            const mutations = (0,_testing_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_4__.someMutations)(propertiesSection.listItemElement);
            calculateValueButton.click();
            await mutations;
            assert.strictEqual(VALUE, propertiesSection.valueElement.innerHTML);
        });
        describe('assignWebIDLMetadata', () => {
            async function checkImportProperties(code, important, notImportant = []) {
                const { object, properties } = await evaluateAndGetProperties(code);
                _object_ui_js__WEBPACK_IMPORTED_MODULE_7__.ObjectPropertiesSection.ObjectPropertiesSection.assignWebIDLMetadata(object, properties);
                const expected = new Set(important);
                const notExpected = new Set(notImportant);
                for (const property of properties) {
                    if (property.webIdl?.applicable) {
                        expected.delete(property.name);
                        notExpected.delete(property.name);
                    }
                }
                assert.strictEqual(expected.size, 0, `Not all expected properties were found (${[...expected].join(', ')} is missing)`);
                assert.strictEqual(notExpected.size, notImportant.length, 'Unexpected properties were found');
            }
            it('marks important DOM properties for checkbox inputs', async () => {
                await checkImportProperties(`(() => {
             const input = document.createElement('input');
             input.type = 'checkbox';
             return input;
           })()`, [
                    'checked',
                    'required',
                    'type',
                    'value',
                ], [
                    'accept',
                    'files',
                    'multiple',
                ]);
            });
            it('marks important DOM properties for file inputs', async () => {
                await checkImportProperties(`(() => {
             const input = document.createElement('input');
             input.type = 'file';
             return input;
           })()`, [
                    'accept',
                    'files',
                    'multiple',
                    'required',
                    'type',
                ], [
                    'checked',
                ]);
            });
            it('marks important DOM properties for anchors', async () => {
                await checkImportProperties(`(() => {
             const a = document.createElement('a');
             a.href = 'https://www.google.com:1234/foo/bar/baz?hello=world#what';
             const code = document.createElement('code');
             code.innerHTML = 'hello world';
             a.append(code);
             return a;
           })()`, [
                    // https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element
                    'text',
                    // https://html.spec.whatwg.org/multipage/links.html#htmlhyperlinkelementutils
                    'href',
                    'origin',
                    'protocol',
                    'hostname',
                    'port',
                    'pathname',
                    'search',
                    'hash',
                ]);
            });
            it('marks important DOM properties for the window object', async () => {
                await checkImportProperties('window', [
                    'customElements',
                    'document',
                    'frames',
                    'history',
                    'location',
                    'navigator',
                ]);
            });
        });
    });
    (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithEnvironment)('ObjectPropertiesSection', () => {
        describe('appendMemoryIcon', () => {
            it('appends a memory icon for inspectable object types', () => {
                const object = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RemoteObject.RemoteObject);
                object.isLinearMemoryInspectable.returns(true);
                const div = document.createElement('div');
                assert.isFalse(div.hasChildNodes());
                _object_ui_js__WEBPACK_IMPORTED_MODULE_7__.ObjectPropertiesSection.ObjectPropertiesSection.appendMemoryIcon(div, object);
                assert.isTrue(div.hasChildNodes());
                const icon = div.querySelector('devtools-icon');
                assert.isNotNull(icon);
            });
            it('doesn\'t append a memory icon for non-inspectable object types', () => {
                const object = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RemoteObject.RemoteObject);
                object.isLinearMemoryInspectable.returns(false);
                const div = document.createElement('div');
                assert.isFalse(div.hasChildNodes());
                _object_ui_js__WEBPACK_IMPORTED_MODULE_7__.ObjectPropertiesSection.ObjectPropertiesSection.appendMemoryIcon(div, object);
                assert.isFalse(div.hasChildNodes());
            });
            it('triggers the correct revealer upon \'click\'', () => {
                const object = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RemoteObject.RemoteObject);
                object.isLinearMemoryInspectable.returns(true);
                const expression = 'foo';
                const div = document.createElement('div');
                _object_ui_js__WEBPACK_IMPORTED_MODULE_7__.ObjectPropertiesSection.ObjectPropertiesSection.appendMemoryIcon(div, object, expression);
                const icon = div.querySelector('devtools-icon');
                assert.exists(icon);
                const reveal = sinon.stub(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.RevealerRegistry.prototype, 'reveal');
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(icon);
                sinon.assert.calledOnceWithMatch(reveal, sinon.match({ object, expression }), false);
            });
        });
    });
});
//# sourceMappingURL=ObjectPropertiesSection.test.js.map

/***/ })

}]);