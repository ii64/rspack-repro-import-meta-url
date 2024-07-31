"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_explain_components_ConsoleInsight_test_ts"],{

/***/ "./src/panels/explain/ActionDelegate.ts":
/*!**********************************************!*\
  !*** ./src/panels/explain/ActionDelegate.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* binding */ ActionDelegate)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _console_console_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../console/console.js */ "./src/panels/console/console.ts");
/* harmony import */ var _components_ConsoleInsight_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ConsoleInsight.js */ "./src/panels/explain/components/ConsoleInsight.ts");
/* harmony import */ var _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PromptBuilder.js */ "./src/panels/explain/PromptBuilder.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




class ActionDelegate {
    handleAction(context, actionId) {
        switch (actionId) {
            case 'explain.console-message.context':
            case 'explain.console-message.context.error':
            case 'explain.console-message.context.warning':
            case 'explain.console-message.context.other':
            case 'explain.console-message.hover': {
                const consoleViewMessage = context.flavor(_console_console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleViewMessage.ConsoleViewMessage);
                if (consoleViewMessage) {
                    if (actionId.startsWith('explain.console-message.context')) {
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.Action.InsightRequestedViaContextMenu);
                    }
                    else if (actionId === 'explain.console-message.hover') {
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.Action.InsightRequestedViaHoverButton);
                    }
                    const promptBuilder = new _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_3__.PromptBuilder(consoleViewMessage);
                    const aidaClient = new _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.AidaClient.AidaClient();
                    void _components_ConsoleInsight_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleInsight.create(promptBuilder, aidaClient).then(insight => {
                        consoleViewMessage.setInsight(insight);
                    });
                    return true;
                }
                return false;
            }
        }
        return false;
    }
}


/***/ }),

/***/ "./src/panels/explain/components/ConsoleInsight.test.ts":
/*!**************************************************************!*\
  !*** ./src/panels/explain/components/ConsoleInsight.test.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _explain_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../explain.js */ "./src/panels/explain/explain.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithEnvironment)('ConsoleInsight', () => {
    function getTestAidaClient() {
        return {
            async *fetch() {
                yield { explanation: 'test', metadata: { rpcGlobalId: 0 } };
            },
            registerClientEvent: sinon.spy(),
        };
    }
    function getTestPromptBuilder() {
        return {
            async buildPrompt() {
                return {
                    prompt: '',
                    sources: [
                        {
                            type: _explain_js__WEBPACK_IMPORTED_MODULE_4__.SourceType.MESSAGE,
                            value: 'error message',
                        },
                    ],
                    isPageReloadRecommended: true,
                };
            },
            getSearchQuery() {
                return '';
            },
        };
    }
    async function drainMicroTasks() {
        await new Promise(resolve => setTimeout(resolve, 0));
    }
    function skipConsentOnboarding() {
        beforeEach(() => {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.settingForTest('console-insights-onboarding-finished').set(true);
        });
        afterEach(() => {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.settingForTest('console-insights-onboarding-finished').set(false);
        });
    }
    describe('consent onboarding', () => {
        afterEach(() => {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.settingForTest('console-insights-onboarding-finished').set(false);
        });
        it('should show privacy notice first', async () => {
            const component = new _explain_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleInsight(getTestPromptBuilder(), getTestAidaClient(), _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
            await drainMicroTasks();
            assert.strictEqual(component.shadowRoot.querySelector('h2')?.innerText, 'Privacy notice');
        });
        it('should show legal notice second', async () => {
            const component = new _explain_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleInsight(getTestPromptBuilder(), getTestAidaClient(), _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
            await drainMicroTasks();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(component.shadowRoot.querySelector('.next-button'));
            await drainMicroTasks();
            assert.strictEqual(component.shadowRoot.querySelector('h2')?.innerText, 'Legal notice');
        });
        it('should not confirm legal notice without checkbox', async () => {
            const component = new _explain_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleInsight(getTestPromptBuilder(), getTestAidaClient(), _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
            await drainMicroTasks();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(component.shadowRoot.querySelector('.next-button'));
            await drainMicroTasks();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(component.shadowRoot.querySelector('.continue-button'));
            await drainMicroTasks();
            assert.strictEqual(component.shadowRoot.querySelector('h2')?.innerText, 'Legal notice');
        });
        it('should confirm legal notice if checkbox is pressed', async () => {
            const component = new _explain_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleInsight(getTestPromptBuilder(), getTestAidaClient(), _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
            await drainMicroTasks();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(component.shadowRoot.querySelector('.next-button'));
            await drainMicroTasks();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(component.shadowRoot.querySelector('input'));
            await drainMicroTasks();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(component.shadowRoot.querySelector('.continue-button'));
            await drainMicroTasks();
            assert.strictEqual(component.shadowRoot.querySelector('h2')?.innerText, 'Data used to understand this message');
            await drainMicroTasks();
            assert.strictEqual(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.settingForTest('console-insights-onboarding-finished').get(), true);
        });
        it('can cancel the onboarding flow', async () => {
            const component = new _explain_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleInsight(getTestPromptBuilder(), getTestAidaClient(), _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
            await drainMicroTasks();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(component.shadowRoot.querySelector('.cancel-button'));
            await drainMicroTasks();
            assert(component.getAttribute('class')?.includes('closing'));
        });
        it('can disable the feature', async () => {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.settingForTest('console-insights-enabled').set(true);
            const component = new _explain_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleInsight(getTestPromptBuilder(), getTestAidaClient(), _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
            await drainMicroTasks();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(component.shadowRoot.querySelector('.disable-button'));
            await drainMicroTasks();
            assert.strictEqual(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.settingForTest('console-insights-enabled').get(), false);
        });
    });
    describe('with consent onboarding finished', () => {
        skipConsentOnboarding();
        it('shows the consent reminder flow for signed-in users', async () => {
            const component = new _explain_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleInsight(getTestPromptBuilder(), getTestAidaClient(), _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
            await drainMicroTasks();
            assert.strictEqual(component.shadowRoot.querySelector('h2')?.innerText, 'Data used to understand this message');
            // Continue button is present.
            assert(component.shadowRoot.querySelector('.continue-button'));
        });
        it('consent reminder can be accepted', async () => {
            const component = new _explain_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleInsight(getTestPromptBuilder(), getTestAidaClient(), _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
            await drainMicroTasks();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(component.shadowRoot.querySelector('.continue-button'), {
                bubbles: true,
                composed: true,
            });
            // Expected to be rendered in the next task.
            await new Promise(resolve => setTimeout(resolve, 0));
            // Rating buttons are shown.
            assert(component.shadowRoot.querySelector('.rating'));
        });
        const renderInsight = async (aidaClient = getTestAidaClient()) => {
            const component = new _explain_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleInsight(getTestPromptBuilder(), aidaClient, _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
            await drainMicroTasks();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(component.shadowRoot.querySelector('.continue-button'), {
                bubbles: true,
                composed: true,
            });
            // Expected to be rendered in the next task.
            await new Promise(resolve => setTimeout(resolve, 0));
            return component;
        };
        const reportsRating = (positive) => async () => {
            const actionTaken = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics, 'actionTaken');
            const aidaClient = getTestAidaClient();
            const component = await renderInsight(aidaClient);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(component.shadowRoot.querySelector(`.rating [data-rating=${positive}]`), {
                bubbles: true,
                composed: true,
            });
            assert(aidaClient.registerClientEvent.calledOnce);
            sinon.assert.match(aidaClient.registerClientEvent.firstCall.firstArg, sinon.match({
                corresponding_aida_rpc_global_id: 0,
                do_conversation_client_event: {
                    user_feedback: { sentiment: positive ? 'POSITIVE' : 'NEGATIVE' },
                },
            }));
            assert(actionTaken.calledWith(positive ? _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightRatedPositive : _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightRatedNegative));
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(component.shadowRoot.querySelector(`.rating [data-rating=${positive}]`), {
                bubbles: true,
                composed: true,
            });
            // Can only rate once.
            assert(aidaClient.registerClientEvent.calledOnce);
        };
        it('reports positive rating', reportsRating(true));
        it('reports negative rating', reportsRating(false));
        it('has no thumbs up/down buttons if logging is disabled', async () => {
            const stub = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getGetHostConfigStub)({
                devToolsConsoleInsights: {
                    enabled: true,
                    disallowLogging: true,
                },
            });
            const component = await renderInsight();
            const thumbsUpButton = component.shadowRoot.querySelector('.rating [data-rating="true"]');
            assert.isNull(thumbsUpButton);
            const thumbsDownButton = component.shadowRoot.querySelector('.rating [data-rating="false"]');
            assert.isNull(thumbsDownButton);
            stub.restore();
        });
    });
    it('report if the user is not logged in', async () => {
        const component = new _explain_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleInsight(getTestPromptBuilder(), getTestAidaClient(), _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.NO_ACCOUNT_EMAIL);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
        await drainMicroTasks();
        const content = component.shadowRoot.querySelector('main').innerText.trim();
        assert.strictEqual(content, 'This feature is only available when you sign into Chrome with your Google account.');
    });
    it('report if the sync is not enabled', async () => {
        const component = new _explain_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleInsight(getTestPromptBuilder(), getTestAidaClient(), _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.NO_ACTIVE_SYNC);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
        await drainMicroTasks();
        const content = component.shadowRoot.querySelector('main').innerText.trim();
        assert.strictEqual(content, 'This feature requires you to turn on Chrome sync.');
    });
    it('report if the navigator is offline', async () => {
        const component = new _explain_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleInsight(getTestPromptBuilder(), getTestAidaClient(), _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.NO_INTERNET);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
        await drainMicroTasks();
        const content = component.shadowRoot.querySelector('main').innerText.trim();
        assert.strictEqual(content, 'Check your internet connection and try again.');
    });
});


/***/ }),

/***/ "./src/panels/explain/explain.ts":
/*!***************************************!*\
  !*** ./src/panels/explain/explain.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* reexport safe */ _ActionDelegate_js__WEBPACK_IMPORTED_MODULE_1__.ActionDelegate),
/* harmony export */   CloseEvent: () => (/* reexport safe */ _components_ConsoleInsight_js__WEBPACK_IMPORTED_MODULE_0__.CloseEvent),
/* harmony export */   ConsoleInsight: () => (/* reexport safe */ _components_ConsoleInsight_js__WEBPACK_IMPORTED_MODULE_0__.ConsoleInsight),
/* harmony export */   PromptBuilder: () => (/* reexport safe */ _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_2__.PromptBuilder),
/* harmony export */   SourceType: () => (/* reexport safe */ _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_2__.SourceType),
/* harmony export */   allowHeader: () => (/* reexport safe */ _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_2__.allowHeader),
/* harmony export */   formatConsoleMessage: () => (/* reexport safe */ _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_2__.formatConsoleMessage),
/* harmony export */   formatNetworkRequest: () => (/* reexport safe */ _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_2__.formatNetworkRequest),
/* harmony export */   formatRelatedCode: () => (/* reexport safe */ _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_2__.formatRelatedCode),
/* harmony export */   formatStackTrace: () => (/* reexport safe */ _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_2__.formatStackTrace),
/* harmony export */   lineWhitespace: () => (/* reexport safe */ _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_2__.lineWhitespace)
/* harmony export */ });
/* harmony import */ var _components_ConsoleInsight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ConsoleInsight.js */ "./src/panels/explain/components/ConsoleInsight.ts");
/* harmony import */ var _ActionDelegate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActionDelegate.js */ "./src/panels/explain/ActionDelegate.ts");
/* harmony import */ var _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PromptBuilder.js */ "./src/panels/explain/PromptBuilder.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
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