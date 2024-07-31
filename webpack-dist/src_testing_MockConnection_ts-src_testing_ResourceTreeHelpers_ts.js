"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_testing_MockConnection_ts-src_testing_ResourceTreeHelpers_ts"],{

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

/***/ "./src/testing/MockConnection.ts":
/*!***************************************!*\
  !*** ./src/testing/MockConnection.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearAllMockConnectionResponseHandlers: () => (/* binding */ clearAllMockConnectionResponseHandlers),
/* harmony export */   clearMockConnectionResponseHandler: () => (/* binding */ clearMockConnectionResponseHandler),
/* harmony export */   describeWithMockConnection: () => (/* binding */ describeWithMockConnection),
/* harmony export */   dispatchEvent: () => (/* binding */ dispatchEvent),
/* harmony export */   getMockConnectionResponseHandler: () => (/* binding */ getMockConnectionResponseHandler),
/* harmony export */   registerListenerOnOutgoingMessage: () => (/* binding */ registerListenerOnOutgoingMessage),
/* harmony export */   setMockConnectionResponseHandler: () => (/* binding */ setMockConnectionResponseHandler)
/* harmony export */ });
/* harmony import */ var _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/protocol_client/protocol_client.js */ "./src/core/protocol_client/protocol_client.ts");
/* harmony import */ var _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ResourceTreeHelpers.js */ "./src/testing/ResourceTreeHelpers.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




// Note that we can't set the Function to the correct handler on the basis
// that we don't know which ProtocolCommand will be stored.
const responseMap = new Map();
const outgoingMessageListenerEntryMap = new Map();
function setMockConnectionResponseHandler(command, handler) {
    if (responseMap.get(command)) {
        throw new Error(`Response handler already set for ${command}`);
    }
    responseMap.set(command, handler);
}
function getMockConnectionResponseHandler(method) {
    return responseMap.get(method);
}
function clearMockConnectionResponseHandler(method) {
    responseMap.delete(method);
}
function clearAllMockConnectionResponseHandlers() {
    responseMap.clear();
}
function registerListenerOnOutgoingMessage(method) {
    let outgoingMessageListenerEntry = outgoingMessageListenerEntryMap.get(method);
    if (!outgoingMessageListenerEntry) {
        let resolve = () => { };
        const promise = new Promise(r => {
            resolve = r;
        });
        outgoingMessageListenerEntry = { promise, resolve };
        outgoingMessageListenerEntryMap.set(method, outgoingMessageListenerEntry);
    }
    return outgoingMessageListenerEntry.promise;
}
function dispatchEvent(target, eventName, ...payload) {
    const event = eventName;
    const [domain] = _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_0__.InspectorBackend.splitQualifiedName(event);
    const registeredEvents = _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_0__.InspectorBackend.inspectorBackend.getOrCreateEventParameterNamesForDomainForTesting(domain);
    const eventParameterNames = registeredEvents.get(event);
    if (!eventParameterNames) {
        // The event is not registered, fake-register with empty parameters.
        registeredEvents.set(event, []);
    }
    target.dispatch({ method: event, params: payload[0] });
}
async function enable({ reset = true } = {}) {
    if (reset) {
        responseMap.clear();
    }
    // The DevTools frontend code expects certain things to be in place
    // before it can run. This function will ensure those things are
    // minimally there.
    await (0,_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.initializeGlobalVars)({ reset });
    (0,_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.setMockResourceTree)(true);
    _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_0__.InspectorBackend.Connection.setFactory(() => new MockConnection());
}
class MockConnection extends _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_0__.InspectorBackend.Connection {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "messageCallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    setOnMessage(callback) {
        this.messageCallback = callback;
    }
    sendRawMessage(message) {
        void (async () => {
            const outgoingMessage = JSON.parse(message);
            const entry = outgoingMessageListenerEntryMap.get(outgoingMessage.method);
            if (entry) {
                outgoingMessageListenerEntryMap.delete(outgoingMessage.method);
                entry.resolve();
            }
            const handler = responseMap.get(outgoingMessage.method);
            if (!handler) {
                return;
            }
            let result = handler.call(undefined, outgoingMessage.params) || {};
            if ('then' in result) {
                result = await result;
            }
            const errorMessage = ('getError' in result) ? result.getError() : undefined;
            const error = errorMessage ? { message: errorMessage, code: -32000 } : undefined;
            this.messageCallback?.call(undefined, {
                id: outgoingMessage.id,
                method: outgoingMessage.method,
                result,
                error,
                sessionId: outgoingMessage.sessionId,
            });
        })();
    }
}
async function disable() {
    if (outgoingMessageListenerEntryMap.size > 0) {
        throw new Error('MockConnection still has pending listeners. All promises should be awaited.');
    }
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.resetTestDOM)();
    await (0,_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.deinitializeGlobalVars)();
    // @ts-ignore Setting back to undefined as a hard reset.
    _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_0__.InspectorBackend.Connection.setFactory(undefined);
}
function describeWithMockConnection(title, fn, opts = {
    reset: true,
}) {
    return describe(title, function () {
        beforeEach(async () => await enable(opts));
        fn.call(this);
        afterEach(disable);
    });
}
describeWithMockConnection.only = function (title, fn, opts = {
    reset: true,
}) {
    // eslint-disable-next-line mocha/no-exclusive-tests
    return describe.only(title, function () {
        beforeEach(async () => await enable(opts));
        fn.call(this);
        afterEach(disable);
    });
};


/***/ }),

/***/ "./src/testing/ResourceTreeHelpers.ts":
/*!********************************************!*\
  !*** ./src/testing/ResourceTreeHelpers.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOMAIN: () => (/* binding */ DOMAIN),
/* harmony export */   FRAME_URL: () => (/* binding */ FRAME_URL),
/* harmony export */   LOADER_ID: () => (/* binding */ LOADER_ID),
/* harmony export */   MAIN_FRAME_ID: () => (/* binding */ MAIN_FRAME_ID),
/* harmony export */   SECURITY_ORIGIN: () => (/* binding */ SECURITY_ORIGIN),
/* harmony export */   activate: () => (/* binding */ activate),
/* harmony export */   addChildFrame: () => (/* binding */ addChildFrame),
/* harmony export */   createResource: () => (/* binding */ createResource),
/* harmony export */   getInitializedResourceTreeModel: () => (/* binding */ getInitializedResourceTreeModel),
/* harmony export */   getMainFrame: () => (/* binding */ getMainFrame),
/* harmony export */   navigate: () => (/* binding */ navigate),
/* harmony export */   setMockResourceTree: () => (/* binding */ setMockResourceTree)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MockConnection.js */ "./src/testing/MockConnection.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




const LOADER_ID = 'LOADER_ID';
const MAIN_FRAME_ID = 'main';
const DOMAIN = 'example.com';
const SECURITY_ORIGIN = `https://${DOMAIN}`;
const FRAME_URL = `${SECURITY_ORIGIN}/`;
let childFrameId = 0;
const FRAME = {
    url: FRAME_URL,
    loaderId: LOADER_ID,
    domainAndRegistry: DOMAIN,
    securityOrigin: SECURITY_ORIGIN,
    mimeType: 'text/html',
    secureContextType: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Page.SecureContextType.Secure,
    crossOriginIsolatedContextType: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Page.CrossOriginIsolatedContextType.Isolated,
    gatedAPIFeatures: [],
};
const MAIN_FRAME = {
    ...FRAME,
    id: MAIN_FRAME_ID,
};
function setMockResourceTree(shouldMock) {
    if (shouldMock) {
        (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Page.getResourceTree', () => ({
            frameTree: {
                frame: MAIN_FRAME,
                resources: [],
            },
        }));
    }
    else {
        (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.clearMockConnectionResponseHandler)('Page.getResourceTree');
    }
}
async function getInitializedResourceTreeModel(target) {
    const resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
    return resourceTreeModel.cachedResourcesLoaded() ?
        resourceTreeModel :
        resourceTreeModel.once(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.CachedResourcesLoaded);
}
function getEffectivePayload(id, base, framePayload) {
    const effectivePayload = { ...base, id };
    if (framePayload) {
        if (framePayload.url) {
            const url = new URL(framePayload.url);
            framePayload.domainAndRegistry ?? (framePayload.domainAndRegistry = url.hostname);
            framePayload.securityOrigin ?? (framePayload.securityOrigin = url.origin);
        }
        Object.assign(effectivePayload, framePayload);
    }
    return effectivePayload;
}
function getMainFrame(target, framePayload) {
    const resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
    if (resourceTreeModel.mainFrame) {
        return resourceTreeModel.mainFrame;
    }
    resourceTreeModel.frameAttached(MAIN_FRAME_ID, null);
    const mainFrame = resourceTreeModel.mainFrame;
    mainFrame.navigate(getEffectivePayload(MAIN_FRAME_ID, FRAME, framePayload));
    return mainFrame;
}
async function addChildFrame(target, framePayload) {
    const resourceTreeModel = await getInitializedResourceTreeModel(target);
    getMainFrame(target);
    const childFrame = resourceTreeModel.frameAttached(`CHILD_FRAME_${++childFrameId}`, MAIN_FRAME_ID);
    assert.exists(childFrame);
    if (framePayload) {
        navigate(childFrame, { ...FRAME, ...framePayload });
    }
    return childFrame;
}
function createResource(frame, networkScriptUrl, mimeType, content) {
    const resource = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Resource.Resource(frame.resourceTreeModel(), null, networkScriptUrl, networkScriptUrl, MAIN_FRAME_ID, null, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeType(mimeType), mimeType, null, content.length);
    frame.addResource(resource);
    return resource;
}
function navigate(frame, framePayload, type = _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Page.NavigationType.Navigation) {
    const effectivePayload = getEffectivePayload(frame.id, FRAME, framePayload);
    frame.resourceTreeModel().frameNavigated(effectivePayload, type);
}
function activate(target) {
    const resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
    const frame = getMainFrame(target);
    sinon.stub(frame, 'isPrimaryFrame').returns(true);
    resourceTreeModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.PrimaryPageChanged, { frame, type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.PrimaryPageChangeType.Activation });
}


/***/ })

}]);