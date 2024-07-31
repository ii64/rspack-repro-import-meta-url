"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_search_SearchView_test_ts"],{

/***/ "./src/panels/search/SearchScope.ts":
/*!******************************************!*\
  !*** ./src/panels/search/SearchScope.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



/***/ }),

/***/ "./src/panels/search/SearchView.test.ts":
/*!**********************************************!*\
  !*** ./src/panels/search/SearchView.test.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search.js */ "./src/panels/search/search.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
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
var _FakeSearchScope_resolvePerformSearchCalledPromise, _TestSearchView_scopeCreator, _TestSearchView_searchResultsPane, _TestSearchView_overrideResultsPane;






class FakeSearchScope {
    constructor() {
        Object.defineProperty(this, "performSearchCalledPromise", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _FakeSearchScope_resolvePerformSearchCalledPromise.set(this, void 0);
        const { promise, resolve } = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.PromiseUtilities.promiseWithResolvers();
        this.performSearchCalledPromise = promise;
        __classPrivateFieldSet(this, _FakeSearchScope_resolvePerformSearchCalledPromise, resolve, "f");
    }
    performSearch(searchConfig, progress, searchResultCallback, searchFinishedCallback) {
        __classPrivateFieldGet(this, _FakeSearchScope_resolvePerformSearchCalledPromise, "f").call(this, { searchConfig, progress, searchResultCallback, searchFinishedCallback });
    }
    performIndexing(progress) {
        setTimeout(() => progress.done(), 0); // Allow microtasks to run.
    }
    stopSearch() {
    }
}
_FakeSearchScope_resolvePerformSearchCalledPromise = new WeakMap();
class TestSearchView extends _search_js__WEBPACK_IMPORTED_MODULE_5__.SearchView.SearchView {
    constructor(scopeCreator, searchResultsPane) {
        const throttler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(/* timeoutMs */ 0);
        super('fake', throttler);
        /**
         * The throttler with which the base 'SearchView' throttles UI updates.
         * Exposed here so tests can wait for the updates to finish.
         */
        Object.defineProperty(this, "throttler", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _TestSearchView_scopeCreator.set(this, void 0);
        /**
         * `SearchView` resets and lazily re-creates the search results pane for each search.
         * To provide a fake instance we install a get/set accesssor for the original property
         * that behaves normally with no override, but returns the mock if one is provided.
         */
        _TestSearchView_searchResultsPane.set(this, null);
        _TestSearchView_overrideResultsPane.set(this, void 0);
        this.throttler = throttler;
        __classPrivateFieldSet(this, _TestSearchView_scopeCreator, scopeCreator, "f");
        __classPrivateFieldSet(this, _TestSearchView_searchResultsPane, searchResultsPane ?? null, "f");
        __classPrivateFieldSet(this, _TestSearchView_overrideResultsPane, Boolean(searchResultsPane), "f");
        // Use 'Object.definePrroperty' or TS won't be happy that we replace a prop with an accessor.
        Object.defineProperty(this, 'searchResultsPane', {
            get: () => __classPrivateFieldGet(this, _TestSearchView_searchResultsPane, "f"),
            set: (pane) => {
                if (!__classPrivateFieldGet(this, _TestSearchView_overrideResultsPane, "f")) {
                    __classPrivateFieldSet(this, _TestSearchView_searchResultsPane, pane, "f");
                }
            },
        });
    }
    createScope() {
        return __classPrivateFieldGet(this, _TestSearchView_scopeCreator, "f").call(this);
    }
    /** Fills in the UI elements of the SearchView and hits 'Enter'. */
    triggerSearch(query, matchCase, isRegex) {
        this.search.value = query;
        this.matchCaseButton.toggled = matchCase;
        this.regexButton.toggled = isRegex;
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchKeyDownEvent)(this.search, { keyCode: _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.KeyboardShortcut.Keys.Enter.code });
    }
    get currentSearchResultMessage() {
        return this.contentElement.querySelector('.search-message:nth-child(3)').textContent ?? '';
    }
}
_TestSearchView_scopeCreator = new WeakMap(), _TestSearchView_searchResultsPane = new WeakMap(), _TestSearchView_overrideResultsPane = new WeakMap();
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithEnvironment)('SearchView', () => {
    it('calls the search scope with the search config provided by the user via the UI', async () => {
        const fakeScope = new FakeSearchScope();
        const searchView = new TestSearchView(() => fakeScope);
        searchView.triggerSearch('a query', true, true);
        const { searchConfig } = await fakeScope.performSearchCalledPromise;
        assert.strictEqual(searchConfig.query(), 'a query');
        assert.isFalse(searchConfig.ignoreCase());
        assert.isTrue(searchConfig.isRegex());
    });
    it('notifies the user when no search results were found', async () => {
        const fakeScope = new FakeSearchScope();
        const searchView = new TestSearchView(() => fakeScope);
        searchView.triggerSearch('a query', true, true);
        const { searchFinishedCallback } = await fakeScope.performSearchCalledPromise;
        searchFinishedCallback(/* finished */ true);
        assert.strictEqual(searchView.currentSearchResultMessage, 'No matches found.');
    });
    it('updates the search result message with a count when search results are added', async () => {
        const fakeScope = new FakeSearchScope();
        const fakeResultsPane = sinon.createStubInstance(_search_js__WEBPACK_IMPORTED_MODULE_5__.SearchResultsPane.SearchResultsPane);
        const searchView = new TestSearchView(() => fakeScope, fakeResultsPane);
        searchView.triggerSearch('a query', true, true);
        const { searchResultCallback } = await fakeScope.performSearchCalledPromise;
        searchResultCallback({ matchesCount: () => 10 });
        await searchView.throttler.process?.();
        assert.strictEqual(searchView.currentSearchResultMessage, 'Found 10 matching lines in 1 file.');
        searchResultCallback({ matchesCount: () => 42 });
        await searchView.throttler.process?.();
        assert.strictEqual(searchView.currentSearchResultMessage, 'Found 52 matching lines in 2 files.');
    });
    it('forwards each SearchResult to the results pane', async () => {
        const fakeScope = new FakeSearchScope();
        const fakeResultsPane = sinon.createStubInstance(_search_js__WEBPACK_IMPORTED_MODULE_5__.SearchResultsPane.SearchResultsPane);
        const searchView = new TestSearchView(() => fakeScope, fakeResultsPane);
        searchView.triggerSearch('a query', true, true);
        const { searchResultCallback } = await fakeScope.performSearchCalledPromise;
        const searchResult1 = ({ matchesCount: () => 10 });
        const searchResult2 = ({ matchesCount: () => 42 });
        searchResultCallback(searchResult1);
        searchResultCallback(searchResult2);
        await searchView.throttler.process?.();
        assert.isTrue(fakeResultsPane.addSearchResult.calledTwice);
        assert.strictEqual(fakeResultsPane.addSearchResult.args[0][0], searchResult1);
        assert.strictEqual(fakeResultsPane.addSearchResult.args[1][0], searchResult2);
    });
});


/***/ }),

/***/ "./src/panels/search/search.ts":
/*!*************************************!*\
  !*** ./src/panels/search/search.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchResultsPane: () => (/* reexport module object */ _SearchResultsPane_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   SearchScope: () => (/* reexport module object */ _SearchScope_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   SearchView: () => (/* reexport module object */ _SearchView_js__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _SearchResultsPane_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchResultsPane.js */ "./src/panels/search/SearchResultsPane.ts");
/* harmony import */ var _SearchScope_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchScope.js */ "./src/panels/search/SearchScope.ts");
/* harmony import */ var _SearchView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchView.js */ "./src/panels/search/SearchView.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






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


/***/ })

}]);