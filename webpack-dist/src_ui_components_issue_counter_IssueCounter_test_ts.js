"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_issue_counter_IssueCounter_test_ts"],{

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

/***/ "./src/testing/MockIssuesManager.ts":
/*!******************************************!*\
  !*** ./src/testing/MockIssuesManager.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MockIssuesManager: () => (/* binding */ MockIssuesManager)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/issues_manager/issues_manager.js */ "./src/models/issues_manager/issues_manager.ts");
/* harmony import */ var _MockIssuesModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MockIssuesModel.js */ "./src/testing/MockIssuesModel.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



class MockIssuesManager extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    constructor(issues) {
        super();
        Object.defineProperty(this, "mockIssues", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "issueCounts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map([
                [_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.Issue.IssueKind.Improvement, 0],
                [_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.Issue.IssueKind.BreakingChange, 1],
                [_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.Issue.IssueKind.PageError, 2],
            ])
        });
        // An empty model to pass along for the IssuesManager.Events.IssueAdded event.
        Object.defineProperty(this, "mockModel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new _MockIssuesModel_js__WEBPACK_IMPORTED_MODULE_2__.MockIssuesModel([])
        });
        this.mockIssues = Array.from(issues);
    }
    issues() {
        return this.mockIssues;
    }
    getIssueById(id) {
        for (const issue of this.mockIssues) {
            if (issue.getIssueId() === id) {
                return issue;
            }
        }
        return null;
    }
    numberOfIssues(kind) {
        if (kind) {
            return this.issueCounts.get(kind) ?? 0;
        }
        return Array.from(this.issueCounts.values()).reduce((sum, v) => sum + v, 0);
    }
    setNumberOfIssues(counts) {
        this.issueCounts = counts;
    }
    incrementIssueCountsOfAllKinds() {
        for (const [key, value] of this.issueCounts) {
            this.issueCounts.set(key, value + 1);
        }
        this.dispatchEventToListeners(_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.IssuesManager.Events.IssuesCountUpdated);
    }
    addIssue(mockIssue) {
        this.mockIssues.push(mockIssue);
        this.dispatchEventToListeners(_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.IssuesManager.Events.IssueAdded, { issue: mockIssue, issuesModel: this.mockModel });
    }
}


/***/ }),

/***/ "./src/testing/MockIssuesModel.ts":
/*!****************************************!*\
  !*** ./src/testing/MockIssuesModel.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MockIssuesModel: () => (/* binding */ MockIssuesModel)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./src/core/common/common.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class MockIssuesModel extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    constructor(issues) {
        super();
        Object.defineProperty(this, "mockIssues", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.mockIssues = issues;
    }
    issues() {
        return this.mockIssues;
    }
    target() {
        return { id: () => 'fake-id' };
    }
}


/***/ }),

/***/ "./src/ui/components/issue_counter/IssueCounter.test.ts":
/*!**************************************************************!*\
  !*** ./src/ui/components/issue_counter/IssueCounter.test.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractButton: () => (/* binding */ extractButton),
/* harmony export */   extractIconGroups: () => (/* binding */ extractIconGroups)
/* harmony export */ });
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/issues_manager/issues_manager.js */ "./src/models/issues_manager/issues_manager.ts");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/MockIssuesManager.js */ "./src/testing/MockIssuesManager.ts");
/* harmony import */ var _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _issue_counter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./issue_counter.js */ "./src/ui/components/issue_counter/issue_counter.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const renderIssueCounter = (data) => {
    const component = new _issue_counter_js__WEBPACK_IMPORTED_MODULE_5__.IssueCounter.IssueCounter();
    component.data = data;
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
    assert.isNotNull(component.shadowRoot);
    return { component, shadowRoot: component.shadowRoot };
};
const extractIconGroups = (shadowRoot) => {
    const iconButton = shadowRoot.querySelector('icon-button');
    assert.instanceOf(iconButton, _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.IconButton.IconButton);
    const iconButtonShadowRoot = iconButton.shadowRoot;
    assert.exists(iconButtonShadowRoot);
    const icons = iconButtonShadowRoot.querySelectorAll('.status-icon');
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertElements)(icons, _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon);
    const labels = iconButtonShadowRoot.querySelectorAll('.icon-button-title');
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertElements)(labels, HTMLSpanElement);
    assert(icons.length === labels.length, 'Expected icons and labels to appear in pairs');
    const iconGroups = [];
    for (let i = 0; i < icons.length; ++i) {
        const labelElement = labels[i];
        const label = window.getComputedStyle(labelElement).display === 'none' ? null : labelElement.textContent;
        iconGroups.push({ iconData: icons[i].data, label });
    }
    return iconGroups;
};
const extractButton = (shadowRoot) => {
    const iconButton = shadowRoot.querySelector('icon-button');
    assert.instanceOf(iconButton, _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.IconButton.IconButton);
    const iconButtonShadowRoot = iconButton.shadowRoot;
    assert.exists(iconButtonShadowRoot);
    const button = iconButtonShadowRoot.querySelector('button');
    assert.instanceOf(button, HTMLButtonElement);
    return button;
};
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithLocale)('IssueCounter', () => {
    describe('with omitting zero-count issue kinds', () => {
        it('renders correctly', () => {
            const issuesManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_3__.MockIssuesManager([]);
            const { shadowRoot } = renderIssueCounter({
                issuesManager: issuesManager,
                throttlerTimeout: 0,
            });
            const icons = extractIconGroups(shadowRoot);
            assert.strictEqual(icons.length, 2);
            assert.deepEqual(icons.map(c => c.label), ['2', '1']);
            const iconNames = icons.map(c => 'iconName' in c.iconData ? c.iconData.iconName : undefined);
            assert.deepEqual(iconNames, ['issue-cross-filled', 'issue-exclamation-filled']);
        });
        it('updates correctly', () => {
            const issuesManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_3__.MockIssuesManager([]);
            const { shadowRoot } = renderIssueCounter({
                issuesManager: issuesManager,
                throttlerTimeout: 0,
            });
            {
                const icons = extractIconGroups(shadowRoot);
                assert.strictEqual(icons.length, 2);
                assert.deepEqual(icons.map(c => c.label), ['2', '1']);
                const iconNames = icons.map(c => 'iconName' in c.iconData ? c.iconData.iconName : undefined);
                assert.deepEqual(iconNames, ['issue-cross-filled', 'issue-exclamation-filled']);
            }
            issuesManager.incrementIssueCountsOfAllKinds();
            {
                const icons = extractIconGroups(shadowRoot);
                assert.strictEqual(icons.length, 3);
                assert.deepEqual(icons.map(c => c.label), ['3', '2', '1']);
                const iconNames = icons.map(c => 'iconName' in c.iconData ? c.iconData.iconName : undefined);
                assert.deepEqual(iconNames, ['issue-cross-filled', 'issue-exclamation-filled', 'issue-text-filled']);
            }
        });
        it('updates correctly through setter', () => {
            const issuesManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_3__.MockIssuesManager([]);
            const { component, shadowRoot } = renderIssueCounter({
                issuesManager: issuesManager,
                throttlerTimeout: 0,
            });
            {
                const icons = extractIconGroups(shadowRoot);
                assert.strictEqual(icons.length, 2);
                assert.deepEqual(icons.map(c => c.label), ['2', '1']);
                const iconNames = icons.map(c => 'iconName' in c.iconData ? c.iconData.iconName : undefined);
                assert.deepEqual(iconNames, ['issue-cross-filled', 'issue-exclamation-filled']);
            }
            component.data = { ...component.data, displayMode: _issue_counter_js__WEBPACK_IMPORTED_MODULE_5__.IssueCounter.DisplayMode.OnlyMostImportant };
            {
                const icons = extractIconGroups(shadowRoot);
                assert.strictEqual(icons.length, 1);
                assert.deepEqual(icons.map(c => c.label), ['2']);
                const iconNames = icons.map(c => 'iconName' in c.iconData ? c.iconData.iconName : undefined);
                assert.deepEqual(iconNames, ['issue-cross-filled']);
            }
        });
        it('Aria label is added correctly', () => {
            const expectedAccessibleName = 'Accessible Name';
            const issuesManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_3__.MockIssuesManager([]);
            const { shadowRoot } = renderIssueCounter({
                issuesManager: issuesManager,
                throttlerTimeout: 0,
                accessibleName: expectedAccessibleName,
            });
            const button = extractButton(shadowRoot);
            const accessibleName = button.getAttribute('aria-label');
            assert.strictEqual(accessibleName, expectedAccessibleName);
        });
    });
    describe('without omitting zero count issue kinds', () => {
        it('renders correctly', () => {
            const issuesManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_3__.MockIssuesManager([]);
            const { shadowRoot } = renderIssueCounter({
                issuesManager: issuesManager,
                displayMode: _issue_counter_js__WEBPACK_IMPORTED_MODULE_5__.IssueCounter.DisplayMode.ShowAlways,
                throttlerTimeout: 0,
            });
            const icons = extractIconGroups(shadowRoot);
            assert.strictEqual(icons.length, 3);
            assert.deepEqual(icons.map(c => c.label), ['2', '1', '0']);
            const iconNames = icons.map(c => 'iconName' in c.iconData ? c.iconData.iconName : undefined);
            assert.deepEqual(iconNames, ['issue-cross-filled', 'issue-exclamation-filled', 'issue-text-filled']);
        });
        it('updates correctly', () => {
            const issuesManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_3__.MockIssuesManager([]);
            const { shadowRoot } = renderIssueCounter({
                issuesManager: issuesManager,
                displayMode: _issue_counter_js__WEBPACK_IMPORTED_MODULE_5__.IssueCounter.DisplayMode.ShowAlways,
                throttlerTimeout: 0,
            });
            {
                const icons = extractIconGroups(shadowRoot);
                assert.strictEqual(icons.length, 3);
                assert.deepEqual(icons.map(c => c.label), ['2', '1', '0']);
                const iconNames = icons.map(c => 'iconName' in c.iconData ? c.iconData.iconName : undefined);
                assert.deepEqual(iconNames, ['issue-cross-filled', 'issue-exclamation-filled', 'issue-text-filled']);
            }
            issuesManager.incrementIssueCountsOfAllKinds();
            {
                const icons = extractIconGroups(shadowRoot);
                assert.strictEqual(icons.length, 3);
                assert.deepEqual(icons.map(c => c.label), ['3', '2', '1']);
                const iconNames = icons.map(c => 'iconName' in c.iconData ? c.iconData.iconName : undefined);
                assert.deepEqual(iconNames, ['issue-cross-filled', 'issue-exclamation-filled', 'issue-text-filled']);
            }
        });
    });
    describe('in compact mode', () => {
        it('renders correctly', () => {
            const issuesManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_3__.MockIssuesManager([]);
            const { shadowRoot } = renderIssueCounter({
                issuesManager: issuesManager,
                throttlerTimeout: 0,
                compact: true,
            });
            const icons = extractIconGroups(shadowRoot);
            assert.strictEqual(icons.length, 1);
            assert.deepEqual(icons.map(c => c.label), [null]);
            const iconNames = icons.map(c => 'iconName' in c.iconData ? c.iconData.iconName : undefined);
            assert.deepEqual(iconNames, ['issue-cross-filled']);
        });
        it('renders correctly with only improvement issues', () => {
            const issuesManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_3__.MockIssuesManager([]);
            issuesManager.setNumberOfIssues(new Map([
                [_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_0__.Issue.IssueKind.Improvement, 3],
                [_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_0__.Issue.IssueKind.BreakingChange, 0],
                [_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_0__.Issue.IssueKind.PageError, 0],
            ]));
            const { shadowRoot } = renderIssueCounter({
                issuesManager: issuesManager,
                throttlerTimeout: 0,
                compact: true,
            });
            const icons = extractIconGroups(shadowRoot);
            assert.strictEqual(icons.length, 1);
            assert.deepEqual(icons.map(c => c.label), [null]);
            const iconNames = icons.map(c => 'iconName' in c.iconData ? c.iconData.iconName : undefined);
            assert.deepEqual(iconNames, ['issue-text-filled']);
        });
    });
});
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithLocale)('getIssueCountsEnumeration', () => {
    it('formats issue counts correctly', () => {
        const issuesManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_3__.MockIssuesManager([]);
        const string = _issue_counter_js__WEBPACK_IMPORTED_MODULE_5__.IssueCounter.getIssueCountsEnumeration(issuesManager);
        assert.strictEqual(string, '2 page errors, 1 breaking change');
    });
    it('formats issue counts correctly when displaying zero entries', () => {
        const issuesManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_3__.MockIssuesManager([]);
        const string = _issue_counter_js__WEBPACK_IMPORTED_MODULE_5__.IssueCounter.getIssueCountsEnumeration(issuesManager, false);
        assert.strictEqual(string, '2 page errors, 1 breaking change, 0 possible improvements');
    });
});


/***/ })

}]);