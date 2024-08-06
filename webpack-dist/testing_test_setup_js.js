"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["testing_test_setup_js"],{

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

/***/ "./testing/TrackAsyncOperations.js":
/*!*****************************************!*\
  !*** ./testing/TrackAsyncOperations.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkForPendingActivity: () => (/* binding */ checkForPendingActivity),
/* harmony export */   startTrackingAsyncActivity: () => (/* binding */ startTrackingAsyncActivity),
/* harmony export */   stopTrackingAsyncActivity: () => (/* binding */ stopTrackingAsyncActivity)
/* harmony export */ });
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const asyncActivity = [];
function startTrackingAsyncActivity() {
    // We are tracking all asynchronous activity but let it run normally during
    // the test.
    stub('requestAnimationFrame', trackingRequestAnimationFrame);
    stub('setTimeout', trackingSetTimeout);
    stub('setInterval', trackingSetInterval);
    stub('requestIdleCallback', trackingRequestIdleCallback);
    stub('cancelAnimationFrame', id => cancelTrackingActivity('a' + id));
    stub('clearTimeout', id => cancelTrackingActivity('t' + id));
    stub('clearInterval', id => cancelTrackingActivity('i' + id));
    stub('cancelIdleCallback', id => cancelTrackingActivity('d' + id));
    stub('Promise', TrackingPromise);
}
async function checkForPendingActivity() {
    let stillPending = [];
    const wait = 5;
    let retries = 20;
    // We will perform multiple iteration of waiting and forced completions to see
    // if all promises are eventually resolved.
    while (retries > 0) {
        const pendingCount = asyncActivity.filter(a => a.pending).length;
        const totalCount = asyncActivity.length;
        try {
            // First we wait for the pending async activity to finish normally
            await original(Promise).all(asyncActivity.filter(a => a.pending).map(a => original(Promise).race([
                a.promise,
                new (original(Promise))((_, reject) => original(setTimeout)(() => {
                    if (!a.pending) {
                        return;
                    }
                    // If something is still pending after some time, we try to
                    // force the completion by running timeout and animation frame
                    // handlers
                    if (a.cancelDelayed && a.runImmediate) {
                        a.cancelDelayed();
                        a.runImmediate();
                    }
                    else {
                        reject();
                    }
                }, wait)),
            ])));
            // If the above didn't throw, all the original pending activity has
            // completed, but it could have triggered more
            stillPending = asyncActivity.filter(a => a.pending);
            if (!stillPending.length) {
                break;
            }
            --retries;
        }
        catch (e) {
            stillPending = asyncActivity.filter(a => a.pending);
            const newTotalCount = asyncActivity.length;
            // Something is still pending. It might get resolved by force completion
            // of new activity added during the iteration, so let's retry a couple of
            // times.
            if (newTotalCount === totalCount && stillPending.length === pendingCount) {
                --retries;
            }
        }
    }
    if (stillPending.length) {
        throw new Error('The test has completed, but there are still pending promises, created at: \n' +
            stillPending.map(a => a.stack).join('\n\n'));
    }
}
function stopTrackingAsyncActivity() {
    asyncActivity.length = 0;
    restoreAll();
}
function trackingRequestAnimationFrame(fn) {
    const activity = { pending: true };
    let id = 0;
    activity.promise = new (original((Promise)))(resolve => {
        activity.runImmediate = () => {
            fn(performance.now());
            activity.pending = false;
            resolve();
        };
        id = original(requestAnimationFrame)(activity.runImmediate);
        activity.id = 'a' + id;
        activity.cancelDelayed = () => {
            original(cancelAnimationFrame)(id);
            activity.pending = false;
            resolve();
        };
    });
    asyncActivity.push(activity);
    return id;
}
function trackingRequestIdleCallback(fn, opts) {
    const activity = { pending: true };
    let id = 0;
    activity.promise = new (original((Promise)))(resolve => {
        activity.runImmediate = (idleDeadline) => {
            fn(idleDeadline ?? { didTimeout: true, timeRemaining: () => 0 });
            activity.pending = false;
            resolve();
        };
        id = original(requestIdleCallback)(activity.runImmediate, opts);
        activity.id = 'd' + id;
        activity.cancelDelayed = () => {
            original(cancelIdleCallback)(id);
            activity.pending = false;
            resolve();
        };
    });
    asyncActivity.push(activity);
    return id;
}
function trackingSetTimeout(arg, time, ...params) {
    const activity = {
        pending: true,
    };
    let id = 0;
    activity.promise = new (original((Promise)))(resolve => {
        activity.runImmediate = () => {
            if (typeof (arg) === 'function') {
                arg(...params);
            }
            else {
                eval(arg);
            }
            activity.pending = false;
            resolve();
        };
        id = original(setTimeout)(activity.runImmediate, time);
        activity.id = 't' + id;
        activity.cancelDelayed = () => {
            original(clearTimeout)(id);
            activity.pending = false;
            resolve();
        };
    });
    asyncActivity.push(activity);
    return id;
}
function trackingSetInterval(arg, time, ...params) {
    const activity = {
        pending: true,
    };
    let id = 0;
    activity.promise = new (original((Promise)))(resolve => {
        id = original(setInterval)(arg, time, ...params);
        activity.id = 'i' + id;
        activity.cancelDelayed = () => {
            original(clearInterval)(id);
            activity.pending = false;
            resolve();
        };
    });
    asyncActivity.push(activity);
    return id;
}
function cancelTrackingActivity(id) {
    const activity = asyncActivity.find(a => a.id === id);
    if (activity?.cancelDelayed) {
        activity.cancelDelayed();
    }
}
// We can't subclass native Promise here as this will cause all derived promises
// (e.g. those returned by `then`) to also be subclass instances. This results
// in a new asyncActivity entry on each iteration of checkForPendingActivity
// which never settles.
const TrackingPromise = Object.assign(function (arg) {
    const originalPromiseType = original(Promise);
    const promise = new (originalPromiseType)(arg);
    const activity = {
        promise,
        stack: getStack(new Error()),
        pending: false,
    };
    promise.then = function (onFullfilled, onRejected) {
        activity.pending = true;
        return originalPromiseType.prototype.then.apply(this, [
            result => {
                if (!onFullfilled) {
                    return this;
                }
                activity.pending = false;
                return onFullfilled(result);
            },
            result => {
                if (!onRejected) {
                    return this;
                }
                activity.pending = false;
                return onRejected(result);
            },
        ]);
    };
    asyncActivity.push(activity);
    return promise;
}, {
    all: Promise.all,
    allSettled: Promise.allSettled,
    any: Promise.any,
    race: Promise.race,
    reject: Promise.reject,
    resolve: Promise.resolve,
});
function getStack(error) {
    return (error.stack ?? 'No stack').split('\n').slice(2).join('\n');
}
const stubs = [];
function stub(name, stubWith) {
    const original = window[name];
    window[name] = stubWith;
    stubs.push({ name, original, stubWith });
}
function original(stubWith) {
    return stubs.find(s => s.stubWith === stubWith)?.original;
}
function restoreAll() {
    for (const { name, original } of stubs) {
        window[name] = original;
    }
    stubs.length = 0;
}
//# sourceMappingURL=TrackAsyncOperations.js.map

/***/ }),

/***/ "./testing/test_setup.js":
/*!*******************************!*\
  !*** ./testing/test_setup.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */ var _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../panels/timeline/timeline.js */ "./panels/timeline/timeline.js");
/* harmony import */ var _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/legacy/theme_support/theme_support.js */ "./ui/legacy/theme_support/theme_support.js");
/* harmony import */ var _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */ var _EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _TrackAsyncOperations_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TrackAsyncOperations.js */ "./testing/TrackAsyncOperations.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * This file is automatically loaded and run by Karma because it automatically
 * loads and injects all *.js files it finds.
 */








beforeEach(() => {
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.resetTestDOM)();
    // Ensure that no trace data leaks between tests when testing the trace engine.
    for (const handler of Object.values(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers)) {
        handler.reset();
    }
    _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_3__.SourceMapsResolver.SourceMapsResolver.clearResolvedNodeNames();
    // Don't retain host binding listeners across tests. Set this up before initializing ThemeSupport as
    // ThemeSupport adds a host binding listener.
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.events = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper();
    // Some unit tests exercise code that assumes a ThemeSupport instance is available.
    // Run this in a beforeEach in case an individual test overrides it.
    const setting = (0,_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createFakeSetting)('theme', 'default');
    _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__.ThemeSupport.instance({ forceNew: true, setting });
    (0,_TrackAsyncOperations_js__WEBPACK_IMPORTED_MODULE_7__.startTrackingAsyncActivity)();
});
afterEach(async () => {
    await (0,_TrackAsyncOperations_js__WEBPACK_IMPORTED_MODULE_7__.checkForPendingActivity)();
    sinon.restore();
    (0,_TrackAsyncOperations_js__WEBPACK_IMPORTED_MODULE_7__.stopTrackingAsyncActivity)();
    // Clear out any Sinon stubs or spies between individual tests.
});
//# sourceMappingURL=test_setup.js.map

/***/ })

}]);