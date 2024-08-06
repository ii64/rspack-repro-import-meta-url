"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_icon_button_IconButton_test_js"],{

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

/***/ "./ui/components/icon_button/IconButton.test.js":
/*!******************************************************!*\
  !*** ./ui/components/icon_button/IconButton.test.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractIconGroups: () => (/* binding */ extractIconGroups)
/* harmony export */ });
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */ var _icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon_button.js */ "./ui/components/icon_button/icon_button.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


const renderIconButton = (data) => {
    const component = new _icon_button_js__WEBPACK_IMPORTED_MODULE_1__.IconButton.IconButton();
    component.data = data;
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
    assert.isNotNull(component.shadowRoot);
    return { component, shadowRoot: component.shadowRoot };
};
const defaultIcon = {
    iconName: 'cross-circle',
    iconColor: 'var(--icon-error)',
    text: '1',
};
const extractIconGroups = (shadowRoot) => {
    const icons = shadowRoot.querySelectorAll('.status-icon');
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.assertElements)(icons, _icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon);
    const labels = shadowRoot.querySelectorAll('.icon-button-title');
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.assertElements)(labels, HTMLSpanElement);
    assert(icons.length === labels.length, 'Expected icons and labels to appear in pairs');
    const iconGroups = [];
    for (let i = 0; i < icons.length; ++i) {
        const labelElement = labels[i];
        const label = window.getComputedStyle(labelElement).display === 'none' ? null : labelElement.textContent;
        iconGroups.push({ iconData: icons[i].data, label });
    }
    return iconGroups;
};
describe('IconButton', () => {
    it('renders correctly with one icon', () => {
        const { shadowRoot } = renderIconButton({ clickHandler: () => { }, groups: [defaultIcon] });
        const icons = extractIconGroups(shadowRoot);
        assert.strictEqual(icons.length, 1);
        assert.deepEqual(icons.map(c => c.label), ['1']);
        const iconNames = icons.map(c => 'iconName' in c.iconData ? c.iconData.iconName : undefined);
        assert.deepEqual(iconNames, ['cross-circle']);
    });
    it('renders correctly with two icons', () => {
        const { shadowRoot } = renderIconButton({
            clickHandler: () => { },
            groups: [
                defaultIcon,
                {
                    iconName: 'warning',
                    iconColor: 'var(--icon-warning)',
                    text: '12',
                },
            ],
        });
        const icons = extractIconGroups(shadowRoot);
        assert.strictEqual(icons.length, 2);
        assert.deepEqual(icons.map(c => c.label), ['1', '12']);
        const iconNames = icons.map(c => 'iconName' in c.iconData ? c.iconData.iconName : undefined);
        assert.deepEqual(iconNames, ['cross-circle', 'warning']);
    });
    describe('compact mode', () => {
        it('renders correctly with one icon', () => {
            const { shadowRoot } = renderIconButton({ clickHandler: () => { }, groups: [defaultIcon], compact: true });
            const icons = extractIconGroups(shadowRoot);
            assert.strictEqual(icons.length, 1);
            assert.deepEqual(icons.map(c => c.label), [null]);
            const iconNames = icons.map(c => 'iconName' in c.iconData ? c.iconData.iconName : undefined);
            assert.deepEqual(iconNames, ['cross-circle']);
        });
        it('renders correctly with two icons', () => {
            const { shadowRoot } = renderIconButton({
                clickHandler: () => { },
                groups: [
                    defaultIcon,
                    {
                        iconName: 'warning',
                        iconColor: 'var(--icon-warning)',
                        text: '12',
                    },
                ],
                compact: true,
            });
            const icons = extractIconGroups(shadowRoot);
            assert.strictEqual(icons.length, 1);
            assert.deepEqual(icons.map(c => c.label), [null]);
            const iconNames = icons.map(c => 'iconName' in c.iconData ? c.iconData.iconName : undefined);
            assert.deepEqual(iconNames, ['cross-circle']);
        });
    });
    it('renders correctly with two icons where one text is undefined', () => {
        const { shadowRoot } = renderIconButton({
            clickHandler: () => { },
            groups: [
                {
                    iconName: 'warning',
                    iconColor: 'var(--icon-warning)',
                    text: undefined,
                },
                defaultIcon,
            ],
        });
        const icons = extractIconGroups(shadowRoot);
        assert.strictEqual(icons.length, 1);
        assert.deepEqual(icons.map(c => c.label), ['1']);
        const iconNames = icons.map(c => 'iconName' in c.iconData ? c.iconData.iconName : undefined);
        assert.deepEqual(iconNames, ['cross-circle']);
    });
    it('renders correctly with a customly sized icon', () => {
        const { shadowRoot } = renderIconButton({
            clickHandler: () => { },
            groups: [
                {
                    iconName: 'warning',
                    iconColor: 'var(--icon-warning)',
                    text: 'Text',
                    iconHeight: '2ex',
                    iconWidth: '3ex',
                },
            ],
        });
        const icons = extractIconGroups(shadowRoot);
        assert.strictEqual(icons.length, 1);
        const icon = icons[0];
        assert.strictEqual(icon.iconData.height, '2ex');
        assert.strictEqual(icon.iconData.width, '3ex');
    });
    describe('data getter and setter', () => {
        it('renders correctly with two icons', () => {
            const { component, shadowRoot } = renderIconButton({
                clickHandler: () => { },
                groups: [
                    defaultIcon,
                    {
                        iconName: 'warning',
                        iconColor: 'var(--icon-warning)',
                        text: '31',
                    },
                ],
            });
            const iconsBefore = extractIconGroups(shadowRoot);
            assert.strictEqual(iconsBefore.length, 2);
            assert.deepEqual(iconsBefore.map(c => c.label), ['1', '31']);
            const iconNamesBefore = iconsBefore.map(c => 'iconName' in c.iconData ? c.iconData.iconName : undefined);
            assert.deepEqual(iconNamesBefore, ['cross-circle', 'warning']);
            const data = component.data;
            component.data = { ...data, groups: data.groups.map((group, index) => ({ ...group, text: `${index}` })) };
            const iconsAfter = extractIconGroups(shadowRoot);
            assert.strictEqual(iconsAfter.length, 2);
            assert.deepEqual(iconsAfter.map(c => c.label), ['0', '1']);
            const iconNamesAfter = iconsAfter.map(c => 'iconName' in c.iconData ? c.iconData.iconName : undefined);
            assert.deepEqual(iconNamesAfter, ['cross-circle', 'warning']);
        });
    });
    describe('click event', () => {
        it('is dispatched from button', async () => {
            let clickHandler = () => { };
            const clicked = new Promise(r => {
                clickHandler = r;
            });
            const { shadowRoot } = renderIconButton({ clickHandler, groups: [defaultIcon] });
            const icon = shadowRoot.querySelector('.status-icon');
            assert.instanceOf(icon, _icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon);
            icon.click();
            await clicked;
        });
        it('is dispatched from child of button', async () => {
            let clickHandler = () => { };
            const clicked = new Promise(r => {
                clickHandler = r;
            });
            const { shadowRoot } = renderIconButton({ clickHandler, groups: [defaultIcon] });
            const icon = shadowRoot.querySelector('.icon-button');
            assert.instanceOf(icon, HTMLButtonElement);
            icon.click();
            await clicked;
        });
    });
    describe('border', () => {
        it('is rendered when there is a click handler', async () => {
            const { shadowRoot } = renderIconButton({ clickHandler: () => { }, groups: [defaultIcon] });
            const button = shadowRoot.querySelector('.icon-button');
            assert.instanceOf(button, HTMLButtonElement);
            assert.isTrue(button.classList.contains('with-click-handler'));
        });
        it('is omitted when requested', async () => {
            const { shadowRoot } = renderIconButton({ groups: [defaultIcon] });
            const button = shadowRoot.querySelector('.icon-button');
            assert.instanceOf(button, HTMLButtonElement);
            assert.isFalse(button.classList.contains('with-click-handler'));
        });
    });
    describe('leading text', () => {
        it('is rendered if provided', async () => {
            const { shadowRoot } = renderIconButton({ clickHandler: () => { }, groups: [defaultIcon], leadingText: 'LEAD' });
            const texts = Array.from(shadowRoot.querySelectorAll('.icon-button-title'));
            assert.deepEqual(texts.map(x => x.textContent), ['LEAD', '1']);
        });
        it('is omitted in compact mode even if provided', async () => {
            const { shadowRoot } = renderIconButton({ clickHandler: () => { }, groups: [defaultIcon], leadingText: 'LEAD', compact: true });
            const texts = Array.from(shadowRoot.querySelectorAll('.icon-button-title'));
            assert.deepEqual(texts.map(x => x.textContent), ['1']);
        });
        it('is omitted if not provided', async () => {
            const { shadowRoot } = renderIconButton({ clickHandler: () => { }, groups: [defaultIcon] });
            const texts = Array.from(shadowRoot.querySelectorAll('.icon-button-title'));
            assert.deepEqual(texts.map(x => x.textContent), ['1']);
        });
    });
    describe('trailing text', () => {
        it('is rendered if provided', async () => {
            const { shadowRoot } = renderIconButton({ clickHandler: () => { }, groups: [defaultIcon], trailingText: 'TRAIL' });
            const texts = Array.from(shadowRoot.querySelectorAll('.icon-button-title'));
            assert.deepEqual(texts.map(x => x.textContent), ['1', 'TRAIL']);
        });
        it('is omitted in compact mode even if provided', async () => {
            const { shadowRoot } = renderIconButton({ clickHandler: () => { }, groups: [defaultIcon], trailingText: 'TRAIL', compact: true });
            const texts = Array.from(shadowRoot.querySelectorAll('.icon-button-title'));
            assert.deepEqual(texts.map(x => x.textContent), ['1']);
        });
        it('is omitted if not provided', async () => {
            const { shadowRoot } = renderIconButton({ clickHandler: () => { }, groups: [defaultIcon] });
            const texts = Array.from(shadowRoot.querySelectorAll('.icon-button-title'));
            assert.deepEqual(texts.map(x => x.textContent), ['1']);
        });
    });
    describe('accessible name', () => {
        it('is rendered if provided', () => {
            const expectedAccessibleName = 'AccessibleName';
            const { shadowRoot } = renderIconButton({ clickHandler: () => { }, groups: [defaultIcon], accessibleName: expectedAccessibleName });
            const accessibleName = shadowRoot.querySelector('button').getAttribute('aria-label');
            assert.deepEqual(accessibleName, expectedAccessibleName);
        });
        it('is omitted if not provided', () => {
            const { shadowRoot } = renderIconButton({ clickHandler: () => { }, groups: [defaultIcon] });
            const accessibleName = shadowRoot.querySelector('button').getAttribute('aria-label');
            assert.isNull(accessibleName);
        });
    });
});
//# sourceMappingURL=IconButton.test.js.map

/***/ })

}]);