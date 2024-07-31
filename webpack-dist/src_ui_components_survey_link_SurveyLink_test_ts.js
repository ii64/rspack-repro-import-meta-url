"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_survey_link_SurveyLink_test_ts"],{

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

/***/ "./src/ui/components/survey_link/SurveyLink.test.ts":
/*!**********************************************************!*\
  !*** ./src/ui/components/survey_link/SurveyLink.test.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _survey_link_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./survey_link.js */ "./src/ui/components/survey_link/survey_link.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




function canShowSuccessfulCallback(trigger, callback) {
    callback({ canShowSurvey: true });
}
function showSuccessfulCallback(trigger, callback) {
    callback({ surveyShown: true });
}
function canShowFailureCallback(trigger, callback) {
    callback({ canShowSurvey: false });
}
function showFailureCallback(trigger, callback) {
    callback({ surveyShown: false });
}
const empty = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.UIString.LocalizedEmptyString;
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithLocale)('SurveyLink', () => {
    it('shows no link when canShowSurvey is still pending', () => {
        const link = new _survey_link_js__WEBPACK_IMPORTED_MODULE_3__.SurveyLink.SurveyLink();
        link.data = { trigger: 'test trigger', promptText: empty, canShowSurvey: () => { }, showSurvey: () => { } };
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(link);
        assert.isNotNull(link.shadowRoot);
        assert.strictEqual(link.shadowRoot.childElementCount, 0);
    });
    it('shows no link when canShowSurvey is false', () => {
        const link = new _survey_link_js__WEBPACK_IMPORTED_MODULE_3__.SurveyLink.SurveyLink();
        link.data =
            { trigger: 'test trigger', promptText: empty, canShowSurvey: canShowFailureCallback, showSurvey: () => { } };
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(link);
        assert.isNotNull(link.shadowRoot);
        assert.strictEqual(link.shadowRoot.childElementCount, 0);
    });
    it('shows a link when canShowSurvey is true', () => {
        const link = new _survey_link_js__WEBPACK_IMPORTED_MODULE_3__.SurveyLink.SurveyLink();
        link.data =
            { trigger: 'test trigger', promptText: empty, canShowSurvey: canShowSuccessfulCallback, showSurvey: () => { } };
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(link);
        assert.isNotNull(link.shadowRoot);
        const linkNode = link.shadowRoot.querySelector('button');
        assert.isNotNull(linkNode);
    });
    it('shows a pending state when trying to show the survey', () => {
        const link = new _survey_link_js__WEBPACK_IMPORTED_MODULE_3__.SurveyLink.SurveyLink();
        link.data =
            { trigger: 'test trigger', promptText: empty, canShowSurvey: canShowSuccessfulCallback, showSurvey: () => { } };
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(link);
        assert.isNotNull(link.shadowRoot);
        const linkNode = link.shadowRoot.querySelector('button');
        assert.exists(linkNode);
        assert.notInclude(linkNode.textContent?.trim(), '…');
        linkNode.click();
        // The only output signal we have is the link text which we don't want to assert exactly, so we
        // assume that the pending state has an elipsis.
        const pendingLink = link.shadowRoot.querySelector('button');
        assert.exists(pendingLink);
        assert.include(pendingLink.textContent?.trim(), '…');
    });
    it('shows a successful state after showing the survey', () => {
        const link = new _survey_link_js__WEBPACK_IMPORTED_MODULE_3__.SurveyLink.SurveyLink();
        link.data = {
            trigger: 'test trigger',
            promptText: empty,
            canShowSurvey: canShowSuccessfulCallback,
            showSurvey: showSuccessfulCallback,
        };
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(link);
        assert.isNotNull(link.shadowRoot);
        const linkNode = link.shadowRoot.querySelector('button');
        assert.exists(linkNode);
        linkNode.click();
        const successLink = link.shadowRoot.querySelector('button');
        assert.exists(successLink);
        assert.include(successLink.textContent?.trim(), 'Thank you');
    });
    it('shows a failure state when failing to show the survey', () => {
        const link = new _survey_link_js__WEBPACK_IMPORTED_MODULE_3__.SurveyLink.SurveyLink();
        link.data = {
            trigger: 'test trigger',
            promptText: empty,
            canShowSurvey: canShowSuccessfulCallback,
            showSurvey: showFailureCallback,
        };
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(link);
        assert.isNotNull(link.shadowRoot);
        const linkNode = link.shadowRoot.querySelector('button');
        assert.exists(linkNode);
        linkNode.click();
        const successLink = link.shadowRoot.querySelector('button');
        assert.exists(successLink);
        assert.include(successLink.textContent?.trim(), 'error');
    });
});


/***/ }),

/***/ "./src/ui/components/survey_link/SurveyLink.ts":
/*!*****************************************************!*\
  !*** ./src/ui/components/survey_link/SurveyLink.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyLink: () => (/* binding */ SurveyLink)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './surveyLink.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
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
var _SurveyLink_instances, _SurveyLink_shadow, _SurveyLink_trigger, _SurveyLink_promptText, _SurveyLink_canShowSurvey, _SurveyLink_showSurvey, _SurveyLink_state, _SurveyLink_checkSurvey, _SurveyLink_sendSurvey, _SurveyLink_render;





const UIStrings = {
    /**
     *@description Text shown when the link to open a survey is clicked but the survey has not yet appeared
     */
    openingSurvey: 'Opening survey …',
    /**
     *@description Text displayed instead of the survey link after the survey link is clicked, if the survey was shown successfully
     */
    thankYouForYourFeedback: 'Thank you for your feedback',
    /**
     *@description Text displayed instead of the survey link after the survey link is clicked, if the survey was not shown successfully
     */
    anErrorOccurredWithTheSurvey: 'An error occurred with the survey',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('ui/components/survey_link/SurveyLink.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var State;
(function (State) {
    State["Checking"] = "Checking";
    State["ShowLink"] = "ShowLink";
    State["Sending"] = "Sending";
    State["SurveyShown"] = "SurveyShown";
    State["Failed"] = "Failed";
    State["DontShowLink"] = "DontShowLink";
})(State || (State = {}));
// A link to a survey. The link is rendered aysnchronously because we need to first check if
// canShowSurvey succeeds.
class SurveyLink extends HTMLElement {
    constructor() {
        super(...arguments);
        _SurveyLink_instances.add(this);
        _SurveyLink_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _SurveyLink_trigger.set(this, '');
        _SurveyLink_promptText.set(this, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.UIString.LocalizedEmptyString);
        _SurveyLink_canShowSurvey.set(this, () => { });
        _SurveyLink_showSurvey.set(this, () => { });
        _SurveyLink_state.set(this, State.Checking);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _SurveyLink_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './surveyLink.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    // Re-setting data will cause the state to go back to 'Checking' which hides the link.
    set data(data) {
        __classPrivateFieldSet(this, _SurveyLink_trigger, data.trigger, "f");
        __classPrivateFieldSet(this, _SurveyLink_promptText, data.promptText, "f");
        __classPrivateFieldSet(this, _SurveyLink_canShowSurvey, data.canShowSurvey, "f");
        __classPrivateFieldSet(this, _SurveyLink_showSurvey, data.showSurvey, "f");
        __classPrivateFieldGet(this, _SurveyLink_instances, "m", _SurveyLink_checkSurvey).call(this);
    }
}
_SurveyLink_shadow = new WeakMap(), _SurveyLink_trigger = new WeakMap(), _SurveyLink_promptText = new WeakMap(), _SurveyLink_canShowSurvey = new WeakMap(), _SurveyLink_showSurvey = new WeakMap(), _SurveyLink_state = new WeakMap(), _SurveyLink_instances = new WeakSet(), _SurveyLink_checkSurvey = function _SurveyLink_checkSurvey() {
    __classPrivateFieldSet(this, _SurveyLink_state, State.Checking, "f");
    __classPrivateFieldGet(this, _SurveyLink_canShowSurvey, "f").call(this, __classPrivateFieldGet(this, _SurveyLink_trigger, "f"), ({ canShowSurvey }) => {
        if (!canShowSurvey) {
            __classPrivateFieldSet(this, _SurveyLink_state, State.DontShowLink, "f");
        }
        else {
            __classPrivateFieldSet(this, _SurveyLink_state, State.ShowLink, "f");
        }
        __classPrivateFieldGet(this, _SurveyLink_instances, "m", _SurveyLink_render).call(this);
    });
}, _SurveyLink_sendSurvey = function _SurveyLink_sendSurvey() {
    __classPrivateFieldSet(this, _SurveyLink_state, State.Sending, "f");
    __classPrivateFieldGet(this, _SurveyLink_instances, "m", _SurveyLink_render).call(this);
    __classPrivateFieldGet(this, _SurveyLink_showSurvey, "f").call(this, __classPrivateFieldGet(this, _SurveyLink_trigger, "f"), ({ surveyShown }) => {
        if (!surveyShown) {
            __classPrivateFieldSet(this, _SurveyLink_state, State.Failed, "f");
        }
        else {
            __classPrivateFieldSet(this, _SurveyLink_state, State.SurveyShown, "f");
        }
        __classPrivateFieldGet(this, _SurveyLink_instances, "m", _SurveyLink_render).call(this);
    });
}, _SurveyLink_render = function _SurveyLink_render() {
    if (__classPrivateFieldGet(this, _SurveyLink_state, "f") === State.Checking || __classPrivateFieldGet(this, _SurveyLink_state, "f") === State.DontShowLink) {
        return;
    }
    let linkText = __classPrivateFieldGet(this, _SurveyLink_promptText, "f");
    if (__classPrivateFieldGet(this, _SurveyLink_state, "f") === State.Sending) {
        linkText = i18nString(UIStrings.openingSurvey);
    }
    else if (__classPrivateFieldGet(this, _SurveyLink_state, "f") === State.SurveyShown) {
        linkText = i18nString(UIStrings.thankYouForYourFeedback);
    }
    else if (__classPrivateFieldGet(this, _SurveyLink_state, "f") === State.Failed) {
        linkText = i18nString(UIStrings.anErrorOccurredWithTheSurvey);
    }
    let linkState = '';
    if (__classPrivateFieldGet(this, _SurveyLink_state, "f") === State.Sending) {
        linkState = 'pending-link';
    }
    else if (__classPrivateFieldGet(this, _SurveyLink_state, "f") === State.Failed || __classPrivateFieldGet(this, _SurveyLink_state, "f") === State.SurveyShown) {
        linkState = 'disabled-link';
    }
    const ariaDisabled = __classPrivateFieldGet(this, _SurveyLink_state, "f") !== State.ShowLink;
    // clang-format off
    // eslint-disable-next-line rulesdir/ban_style_tags_in_lit_html
    const output = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html `
      <button class="link ${linkState}" tabindex=${ariaDisabled ? '-1' : '0'} .disabled=${ariaDisabled} aria-disabled=${ariaDisabled} @click=${__classPrivateFieldGet(this, _SurveyLink_instances, "m", _SurveyLink_sendSurvey)}>
        <${_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName} class="link-icon" .data=${{ iconName: 'review', color: 'var(--sys-color-primary)', width: 'var(--issue-link-icon-size, 16px)', height: 'var(--issue-link-icon-size, 16px)' }}></${_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName}><!--
      -->${linkText}
      </button>
    `;
    // clang-format on
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.render(output, __classPrivateFieldGet(this, _SurveyLink_shadow, "f"), { host: this });
};
Object.defineProperty(SurveyLink, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal `devtools-survey-link`
});
customElements.define('devtools-survey-link', SurveyLink);


/***/ }),

/***/ "./src/ui/components/survey_link/survey_link.ts":
/*!******************************************************!*\
  !*** ./src/ui/components/survey_link/survey_link.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyLink: () => (/* reexport module object */ _SurveyLink_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _SurveyLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SurveyLink.js */ "./src/ui/components/survey_link/SurveyLink.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/***/ })

}]);