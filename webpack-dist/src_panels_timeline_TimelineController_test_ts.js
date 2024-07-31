"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_timeline_TimelineController_test_ts"],{

/***/ "./src/panels/timeline/TimelineController.test.ts":
/*!********************************************************!*\
  !*** ./src/panels/timeline/TimelineController.test.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _testing_RealConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/RealConnection.js */ "./src/testing/RealConnection.ts");
/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeline.js */ "./src/panels/timeline/timeline.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




(0,_testing_RealConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithRealConnection)('TimelineController', () => {
    it('calls the callback methods on the client in the expected order', async function () {
        // The test needs at least 0.5s to have progress events be sent. Set a higher timeout to avoid flakiness.
        if (this.timeout() !== 0) {
            this.timeout(5000);
        }
        const stubs = {
            recordingProgress: sinon.stub(),
            loadingStarted: sinon.stub(),
            processingStarted: sinon.stub(),
            loadingProgress: sinon.stub(),
            loadingComplete: sinon.stub().callsFake(function (_collectedEvents) { }),
        };
        const client = {
            recordingProgress(usage) {
                stubs.recordingProgress(usage);
            },
            loadingStarted() {
                stubs.loadingStarted();
            },
            processingStarted() {
                stubs.processingStarted();
            },
            loadingProgress() {
                stubs.loadingProgress();
            },
            async loadingComplete(collectedEvents) {
                stubs.loadingComplete(collectedEvents);
            },
            loadingCompleteForTest() { },
        };
        const primaryPage = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().primaryPageTarget();
        if (!primaryPage) {
            throw new Error('Could not find primary page');
        }
        const root = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().rootTarget();
        if (!root) {
            throw new Error('Could not find root target');
        }
        const controller = new _timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineController.TimelineController(root, primaryPage, client);
        class TestTracingComponent extends HTMLElement {
            connectedCallback() {
                const newDiv = document.createElement('div');
                newDiv.innerHTML = 'testing';
                this.appendChild(newDiv);
            }
        }
        customElements.define('test-tracing-component', TestTracingComponent);
        const component = new TestTracingComponent();
        // Start a recording and inject the test component to trigger some trace events.
        await controller.startRecording({});
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
        // Run the test for at least 0.5s to have progress events be sent.
        await new Promise(resolve => setTimeout(resolve, 1500));
        await controller.stopRecording();
        assert.strictEqual(stubs.processingStarted.callCount, 1);
        // Depending on the speed of the machine you might get more than 1 progress
        // call, hence we assert that there is at least one.
        assert.isAtLeast(stubs.recordingProgress.callCount, 1);
        assert.strictEqual(stubs.loadingStarted.callCount, 1);
        assert.isAtLeast(stubs.loadingProgress.callCount, 1);
        assert.strictEqual(stubs.loadingComplete.callCount, 1);
        const [collectedEvents] = stubs.loadingComplete.getCall(0).args;
        // Ensure we collected events during tracing.
        assert.isTrue(collectedEvents.length > 0);
    });
});


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


/***/ }),

/***/ "./src/testing/RealConnection.ts":
/*!***************************************!*\
  !*** ./src/testing/RealConnection.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   describeWithRealConnection: () => (/* binding */ describeWithRealConnection),
/* harmony export */   flushRealConnectionSuits: () => (/* binding */ flushRealConnectionSuits),
/* harmony export */   getExecutionContext: () => (/* binding */ getExecutionContext)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/protocol_client/protocol_client.js */ "./src/core/protocol_client/protocol_client.ts");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _entrypoints_main_main_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../entrypoints/main/main.js */ "./src/entrypoints/main/main.ts");
/* harmony import */ var _EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
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
        await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../entrypoints/shell/shell.js */ "./src/entrypoints/shell/shell.ts"));
        await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../panels/elements/elements-meta.js */ "./src/panels/elements/elements-meta.ts"));
        await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../panels/sensors/sensors-meta.js */ "./src/panels/sensors/sensors-meta.ts"));
        await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../entrypoints/inspector_main/inspector_main-meta.js */ "./src/entrypoints/inspector_main/inspector_main-meta.ts"));
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


/***/ })

}]);