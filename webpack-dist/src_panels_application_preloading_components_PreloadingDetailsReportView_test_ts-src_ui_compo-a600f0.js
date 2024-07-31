"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_preloading_components_PreloadingDetailsReportView_test_ts-src_ui_compo-a600f0"],{

/***/ "./src/panels/application/preloading/components/PreloadingDetailsReportView.test.ts":
/*!******************************************************************************************!*\
  !*** ./src/panels/application/preloading/components/PreloadingDetailsReportView.test.ts ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ui/components/render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ui/components/report_view/report_view.js */ "./src/ui/components/report_view/report_view.ts");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components.js */ "./src/panels/application/preloading/components/components.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_js__WEBPACK_IMPORTED_MODULE_6__]);
_components_js__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_4__.RenderCoordinator.RenderCoordinator.instance();
const zip2 = (xs, ys) => {
    assert.strictEqual(xs.length, ys.length);
    return Array.from(xs.map((_, i) => [xs[i], ys[i]]));
};
const renderPreloadingDetailsReportView = async (data) => {
    const component = new _components_js__WEBPACK_IMPORTED_MODULE_6__.PreloadingDetailsReportView.PreloadingDetailsReportView();
    component.data = data;
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
    assert.isNotNull(component.shadowRoot);
    await coordinator.done();
    return component;
};
// Note that testing Inspect/Activate buttons requires setup for targets.
// These are tested in test/unittests/front_end/panels/application/preloading/PreloadingView.test.ts.
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithEnvironment)('PreloadingDetailsReportView', () => {
    it('renders place holder if not selected', async () => {
        const data = null;
        const component = await renderPreloadingDetailsReportView(data);
        assert.isNotNull(component.shadowRoot);
        const placeholder = component.shadowRoot.querySelector('.preloading-noselected');
        assert.include(placeholder?.textContent, 'Select an element for more details');
    });
    it('renders prerendering details', async () => {
        const url = 'https://example.com/prerendered.html';
        const data = {
            preloadingAttempt: {
                action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prerender,
                key: {
                    loaderId: 'loaderId',
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prerender,
                    url,
                    targetHint: undefined,
                },
                status: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PreloadingModel.PreloadingStatus.Running,
                prerenderStatus: null,
                disallowedMojoInterface: null,
                mismatchedHeaders: null,
                ruleSetIds: ['ruleSetId'],
                nodeIds: [1],
            },
            ruleSets: [
                {
                    id: 'ruleSetId',
                    loaderId: 'loaderId',
                    sourceText: `
{
  "prefetch": [
    {
      "source": "list",
      "urls": ["/subresource.js"]
    }
  ]
}
`,
                },
            ],
            pageURL: 'https://example.com/',
        };
        const component = await renderPreloadingDetailsReportView(data);
        const report = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementWithinComponent)(component, 'devtools-report', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.Report);
        const keys = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getCleanTextContentFromElements)(report, 'devtools-report-key');
        const values = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getCleanTextContentFromElements)(report, 'devtools-report-value');
        assert.deepEqual(zip2(keys, values), [
            ['URL', url],
            ['Action', 'Prerender'],
            ['Status', 'Speculative load is running.'],
            ['Rule set', 'example.com/'],
        ]);
    });
    // TODO(https://crbug.com/1317959): Add cancelled reason once
    // finalStatus and disallowedApiMethod added to prerenderStatusUpdated.
    it('renders prerendering details with cancelled reason', async () => {
        const url = 'https://example.com/prerendered.html';
        const data = {
            preloadingAttempt: {
                action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prerender,
                key: {
                    loaderId: 'loaderId',
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prerender,
                    url,
                    targetHint: undefined,
                },
                status: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PreloadingModel.PreloadingStatus.Failure,
                prerenderStatus: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.PrerenderFinalStatus.MojoBinderPolicy,
                disallowedMojoInterface: 'device.mojom.GamepadMonitor',
                mismatchedHeaders: null,
                ruleSetIds: ['ruleSetId'],
                nodeIds: [1],
            },
            ruleSets: [
                {
                    id: 'ruleSetId',
                    loaderId: 'loaderId',
                    sourceText: `
{
  "prefetch": [
    {
      "source": "list",
      "urls": ["/subresource.js"]
    }
  ]
}
`,
                },
            ],
            pageURL: 'https://example.com/',
        };
        const component = await renderPreloadingDetailsReportView(data);
        const report = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementWithinComponent)(component, 'devtools-report', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.Report);
        const keys = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getCleanTextContentFromElements)(report, 'devtools-report-key');
        const values = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getCleanTextContentFromElements)(report, 'devtools-report-value');
        assert.deepEqual(zip2(keys, values), [
            ['URL', url],
            ['Action', 'Prerender'],
            ['Status', 'Speculative load failed.'],
            [
                'Failure reason',
                'The prerendered page used a forbidden JavaScript API that is currently not supported. (Internal Mojo interface: device.mojom.GamepadMonitor)',
            ],
            ['Rule set', 'example.com/'],
        ]);
    });
    it('renders prefetch details with cancelled reason', async () => {
        const fakeRequestResolver = {
            waitFor: (_requestId) => {
                return Promise.reject();
            },
        };
        const url = 'https://example.com/prefetch.html';
        const data = {
            preloadingAttempt: {
                action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prefetch,
                key: {
                    loaderId: 'loaderId',
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prefetch,
                    url,
                    targetHint: undefined,
                },
                status: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PreloadingModel.PreloadingStatus.Failure,
                prefetchStatus: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.PrefetchStatus.PrefetchFailedNon2XX,
                requestId: 'requestId:1',
                ruleSetIds: ['ruleSetId'],
                nodeIds: [1],
            },
            ruleSets: [
                {
                    id: 'ruleSetId',
                    loaderId: 'loaderId',
                    sourceText: `
{
  "prefetch": [
    {
      "source": "list",
      "urls": ["/subresource.js"]
    }
  ]
}
`,
                },
            ],
            pageURL: 'https://example.com/',
            requestResolver: fakeRequestResolver,
        };
        const component = await renderPreloadingDetailsReportView(data);
        const report = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementWithinComponent)(component, 'devtools-report', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.Report);
        const keys = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getCleanTextContentFromElements)(report, 'devtools-report-key');
        const values = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getCleanTextContentFromElements)(report, 'devtools-report-value');
        values[0] = report.querySelector('devtools-report-value:nth-of-type(1) devtools-request-link-icon')
            ?.shadowRoot?.textContent?.trim() ||
            values[0];
        assert.deepEqual(zip2(keys, values), [
            ['URL', url],
            ['Action', 'Prefetch'],
            ['Status', 'Speculative load failed.'],
            ['Failure reason', 'The prefetch failed because of a non-2xx HTTP response status code.'],
            ['Rule set', 'example.com/'],
        ]);
    });
    it('renders prefetch details with out-of-document Speculation Rules', async () => {
        const fakeRequestResolver = {
            waitFor: (_requestId) => {
                return Promise.reject();
            },
        };
        const url = 'https://example.com/prefetch.html';
        const data = {
            preloadingAttempt: {
                action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prefetch,
                key: {
                    loaderId: 'loaderId',
                    action: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Preload.SpeculationAction.Prefetch,
                    url,
                    targetHint: undefined,
                },
                status: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PreloadingModel.PreloadingStatus.Ready,
                prefetchStatus: null,
                requestId: 'requestId:1',
                ruleSetIds: ['ruleSetId'],
                nodeIds: [1],
            },
            ruleSets: [
                {
                    id: 'ruleSetId',
                    loaderId: 'loaderId',
                    sourceText: `
{
  "prefetch": [
    {
      "source": "list",
      "urls": ["/subresource.js"]
    }
  ]
}
`,
                    url: 'https://example.com/speculation-rules.json',
                },
            ],
            pageURL: 'https://example.com/',
            requestResolver: fakeRequestResolver,
        };
        const component = await renderPreloadingDetailsReportView(data);
        const report = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementWithinComponent)(component, 'devtools-report', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.Report);
        const keys = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getCleanTextContentFromElements)(report, 'devtools-report-key');
        const values = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getCleanTextContentFromElements)(report, 'devtools-report-value');
        values[0] = report.querySelector('devtools-report-value:nth-of-type(1) devtools-request-link-icon')
            ?.shadowRoot?.textContent?.trim() ||
            values[0];
        assert.deepEqual(zip2(keys, values), [
            ['URL', url],
            ['Action', 'Prefetch'],
            ['Status', 'Speculative load finished and the result is ready for the next navigation.'],
            ['Rule set', 'example.com/speculation-rules.json'],
        ]);
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ "./src/ui/components/chrome_link/ChromeLink.ts":
/*!*****************************************************!*\
  !*** ./src/ui/components/chrome_link/ChromeLink.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChromeLink: () => (/* binding */ ChromeLink)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './chromeLink.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _ChromeLink_instances, _ChromeLink_shadow, _ChromeLink_boundRender, _ChromeLink_href, _ChromeLink_handleClick, _ChromeLink_render;








// Use this component to render links to 'chrome://...'-URLs
// (for which regular <x-link>s do not work).
class ChromeLink extends HTMLElement {
    constructor() {
        super(...arguments);
        _ChromeLink_instances.add(this);
        _ChromeLink_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _ChromeLink_boundRender.set(this, __classPrivateFieldGet(this, _ChromeLink_instances, "m", _ChromeLink_render).bind(this));
        _ChromeLink_href.set(this, '');
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ChromeLink_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './chromeLink.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        void _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _ChromeLink_boundRender, "f"));
    }
    set href(href) {
        if (!_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.schemeIs(href, 'chrome:')) {
            throw new Error('ChromeLink href needs to start with \'chrome://\'');
        }
        __classPrivateFieldSet(this, _ChromeLink_href, href, "f");
        void _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _ChromeLink_boundRender, "f"));
    }
}
_ChromeLink_shadow = new WeakMap(), _ChromeLink_boundRender = new WeakMap(), _ChromeLink_href = new WeakMap(), _ChromeLink_instances = new WeakSet(), _ChromeLink_handleClick = function _ChromeLink_handleClick(event) {
    const rootTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().rootTarget();
    if (rootTarget === null) {
        return;
    }
    const url = __classPrivateFieldGet(this, _ChromeLink_href, "f");
    void rootTarget.targetAgent().invoke_createTarget({ url }).then(result => {
        if (result.getError()) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(url);
        }
    });
    event.consume(true);
}, _ChromeLink_render = function _ChromeLink_render() {
    const urlForContext = new URL(__classPrivateFieldGet(this, _ChromeLink_href, "f"));
    urlForContext.search = '';
    const jslogContext = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.toKebabCase(urlForContext.toString());
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.render(
    /* x-link doesn't work with custom click/keydown handlers */
    /* eslint-disable rulesdir/ban_a_tags_in_lit_html */
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
        <a href=${__classPrivateFieldGet(this, _ChromeLink_href, "f")} class="link" target="_blank"
          jslog=${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.link().track({ click: true }).context(jslogContext)}
          @click=${__classPrivateFieldGet(this, _ChromeLink_instances, "m", _ChromeLink_handleClick)}><slot></slot></a>
      `, __classPrivateFieldGet(this, _ChromeLink_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ChromeLink, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal `devtools-chrome-link`
});
customElements.define('devtools-chrome-link', ChromeLink);


/***/ }),

/***/ "./src/ui/components/chrome_link/chrome_link.ts":
/*!******************************************************!*\
  !*** ./src/ui/components/chrome_link/chrome_link.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChromeLink: () => (/* reexport module object */ _ChromeLink_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _ChromeLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChromeLink.js */ "./src/ui/components/chrome_link/ChromeLink.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/***/ }),

/***/ "./src/ui/components/report_view/ReportView.ts":
/*!*****************************************************!*\
  !*** ./src/ui/components/report_view/ReportView.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Report: () => (/* binding */ Report),
/* harmony export */   ReportKey: () => (/* binding */ ReportKey),
/* harmony export */   ReportSection: () => (/* binding */ ReportSection),
/* harmony export */   ReportSectionDivider: () => (/* binding */ ReportSectionDivider),
/* harmony export */   ReportSectionHeader: () => (/* binding */ ReportSectionHeader),
/* harmony export */   ReportValue: () => (/* binding */ ReportValue)
/* harmony export */ });
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './report.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportKey.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSection.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSectionDivider.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSectionHeader.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportValue.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
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
var _Report_instances, _Report_shadow, _Report_reportTitle, _Report_render, _ReportSection_instances, _ReportSection_shadow, _ReportSection_render, _ReportSectionHeader_instances, _ReportSectionHeader_shadow, _ReportSectionHeader_render, _ReportSectionDivider_instances, _ReportSectionDivider_shadow, _ReportSectionDivider_render, _ReportKey_instances, _ReportKey_shadow, _ReportKey_render, _ReportValue_instances, _ReportValue_shadow, _ReportValue_render;







class Report extends HTMLElement {
    constructor() {
        super(...arguments);
        _Report_instances.add(this);
        _Report_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _Report_reportTitle.set(this, '');
    }
    set data({ reportTitle }) {
        __classPrivateFieldSet(this, _Report_reportTitle, reportTitle, "f");
        __classPrivateFieldGet(this, _Report_instances, "m", _Report_render).call(this);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _Report_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './report.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _Report_instances, "m", _Report_render).call(this);
    }
}
_Report_shadow = new WeakMap(), _Report_reportTitle = new WeakMap(), _Report_instances = new WeakSet(), _Report_render = function _Report_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="content">
        ${__classPrivateFieldGet(this, _Report_reportTitle, "f") ? _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `<div class="report-title">${__classPrivateFieldGet(this, _Report_reportTitle, "f")}</div>` : _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing}
        <slot></slot>
      </div>
    `, __classPrivateFieldGet(this, _Report_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(Report, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report`
});
class ReportSection extends HTMLElement {
    constructor() {
        super(...arguments);
        _ReportSection_instances.add(this);
        _ReportSection_shadow.set(this, this.attachShadow({ mode: 'open' }));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ReportSection_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSection.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _ReportSection_instances, "m", _ReportSection_render).call(this);
    }
}
_ReportSection_shadow = new WeakMap(), _ReportSection_instances = new WeakSet(), _ReportSection_render = function _ReportSection_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="section">
        <slot></slot>
      </div>
    `, __classPrivateFieldGet(this, _ReportSection_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ReportSection, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-section`
});
class ReportSectionHeader extends HTMLElement {
    constructor() {
        super(...arguments);
        _ReportSectionHeader_instances.add(this);
        _ReportSectionHeader_shadow.set(this, this.attachShadow({ mode: 'open' }));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ReportSectionHeader_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSectionHeader.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _ReportSectionHeader_instances, "m", _ReportSectionHeader_render).call(this);
    }
}
_ReportSectionHeader_shadow = new WeakMap(), _ReportSectionHeader_instances = new WeakSet(), _ReportSectionHeader_render = function _ReportSectionHeader_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="section-header">
        <slot></slot>
      </div>
    `, __classPrivateFieldGet(this, _ReportSectionHeader_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ReportSectionHeader, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-section-header`
});
class ReportSectionDivider extends HTMLElement {
    constructor() {
        super(...arguments);
        _ReportSectionDivider_instances.add(this);
        _ReportSectionDivider_shadow.set(this, this.attachShadow({ mode: 'open' }));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ReportSectionDivider_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSectionDivider.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _ReportSectionDivider_instances, "m", _ReportSectionDivider_render).call(this);
    }
}
_ReportSectionDivider_shadow = new WeakMap(), _ReportSectionDivider_instances = new WeakSet(), _ReportSectionDivider_render = function _ReportSectionDivider_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="section-divider">
      </div>
    `, __classPrivateFieldGet(this, _ReportSectionDivider_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ReportSectionDivider, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-divider`
});
class ReportKey extends HTMLElement {
    constructor() {
        super(...arguments);
        _ReportKey_instances.add(this);
        _ReportKey_shadow.set(this, this.attachShadow({ mode: 'open' }));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ReportKey_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportKey.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _ReportKey_instances, "m", _ReportKey_render).call(this);
    }
}
_ReportKey_shadow = new WeakMap(), _ReportKey_instances = new WeakSet(), _ReportKey_render = function _ReportKey_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="key"><slot></slot></div>
    `, __classPrivateFieldGet(this, _ReportKey_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ReportKey, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-key`
});
class ReportValue extends HTMLElement {
    constructor() {
        super(...arguments);
        _ReportValue_instances.add(this);
        _ReportValue_shadow.set(this, this.attachShadow({ mode: 'open' }));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ReportValue_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportValue.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _ReportValue_instances, "m", _ReportValue_render).call(this);
    }
}
_ReportValue_shadow = new WeakMap(), _ReportValue_instances = new WeakSet(), _ReportValue_render = function _ReportValue_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="value"><slot></slot></div>
    `, __classPrivateFieldGet(this, _ReportValue_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ReportValue, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-value`
});
customElements.define('devtools-report', Report);
customElements.define('devtools-report-section', ReportSection);
customElements.define('devtools-report-section-header', ReportSectionHeader);
customElements.define('devtools-report-key', ReportKey);
customElements.define('devtools-report-value', ReportValue);
customElements.define('devtools-report-divider', ReportSectionDivider);


/***/ }),

/***/ "./src/ui/components/report_view/report_view.ts":
/*!******************************************************!*\
  !*** ./src/ui/components/report_view/report_view.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportView: () => (/* reexport module object */ _ReportView_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _ReportView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportView.js */ "./src/ui/components/report_view/ReportView.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/***/ })

}]);