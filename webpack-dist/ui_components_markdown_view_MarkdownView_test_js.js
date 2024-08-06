"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_markdown_view_MarkdownView_test_js"],{

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

/***/ "./ui/components/markdown_view/MarkdownView.test.js":
/*!**********************************************************!*\
  !*** ./ui/components/markdown_view/MarkdownView.test.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _third_party_marked_marked_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../third_party/marked/marked.js */ "./third_party/marked/marked.js");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _markdown_view_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./markdown_view.js */ "./ui/components/markdown_view/markdown_view.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





function getFakeToken(token) {
    return token;
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('MarkdownView', () => {
    describe('tokenizer', () => {
        it('tokenizers links in single quotes', () => {
            assert.deepStrictEqual(_third_party_marked_marked_js__WEBPACK_IMPORTED_MODULE_2__.Marked.lexer('\'https://example.com\''), [
                {
                    'raw': '\'https://example.com\'',
                    'text': '\'https://example.com\'',
                    'tokens': [
                        {
                            'raw': '\'',
                            'text': '&#39;',
                            'type': 'text',
                        },
                        {
                            'href': 'https://example.com',
                            'raw': 'https://example.com',
                            'text': 'https://example.com',
                            'tokens': [
                                {
                                    'raw': 'https://example.com',
                                    'text': 'https://example.com',
                                    'type': 'text',
                                },
                            ],
                            'type': 'link',
                        },
                        {
                            'raw': '\'',
                            'text': '&#39;',
                            'type': 'text',
                        },
                    ],
                    'type': 'paragraph',
                },
            ]);
        });
    });
    describe('MarkdownLitRenderer renderToken', () => {
        const renderer = new _markdown_view_js__WEBPACK_IMPORTED_MODULE_4__.MarkdownView.MarkdownLitRenderer();
        it('wraps paragraph tokens in <p> tags', () => {
            const renderResult = renderer.renderToken(getFakeToken({ type: 'paragraph', tokens: [] }));
            assert.deepStrictEqual(renderResult.strings.raw, ['<p>', '']);
        });
        it('wraps an unordered list token in <ul> tags', () => {
            const renderResult = renderer.renderToken(getFakeToken({ type: 'list', items: [] }));
            assert.deepStrictEqual(renderResult.strings.raw, ['<ul>', '</ul>']);
        });
        it('wraps list items in <li> tags', () => {
            const renderResult = renderer.renderToken(getFakeToken({ type: 'list_item', tokens: [] }));
            assert.deepStrictEqual(renderResult.strings.raw, ['<li>', '']);
        });
        it('wraps a codespan token in <code> tags', () => {
            const renderResult = renderer.renderToken(getFakeToken({ type: 'codespan', text: 'const foo = 42;' }));
            assert.deepStrictEqual(renderResult.strings.raw, ['<code>', '</code>']);
            assert.deepStrictEqual(renderResult.values, ['const foo = 42;']);
        });
        it('renders childless text tokens as-is', () => {
            const renderResult = renderer.renderToken(getFakeToken({ type: 'text', text: 'Simple text token' }));
            assert.deepStrictEqual(renderResult.values, ['Simple text token']);
        });
        it('renders nested text tokens correctly', () => {
            const renderResult = renderer.renderToken(getFakeToken({
                type: 'text',
                text: 'This text should not be rendered. Only the subtokens!',
                tokens: [
                    getFakeToken({ type: 'text', text: 'Nested raw text' }),
                    getFakeToken({ type: 'codespan', text: 'and a nested codespan to boot' }),
                ],
            }));
            const renderedParts = renderResult.values[0];
            assert.strictEqual(renderedParts.length, 2);
            assert.deepStrictEqual(renderedParts[0].values, ['Nested raw text']);
            assert.deepStrictEqual(renderedParts[1].values, ['and a nested codespan to boot']);
        });
        it('throws an error for invalid or unsupported token types', () => {
            assert.throws(() => renderer.renderToken(getFakeToken({ type: 'no_way_this_is_a_valid_markdown_token' })));
        });
        it('renders link with valid key', () => {
            _markdown_view_js__WEBPACK_IMPORTED_MODULE_4__.MarkdownLinksMap.markdownLinks.set('exampleLink', 'https://web.dev/');
            const renderResult = renderer.renderToken(getFakeToken({ type: 'link', text: 'learn more', href: 'exampleLink' })).strings.join('');
            assert.isTrue(renderResult.includes('<devtools-markdown-link'));
        });
        it('throws an error if invalid link key is provided', () => {
            assert.throws(() => _markdown_view_js__WEBPACK_IMPORTED_MODULE_4__.MarkdownLinksMap.getMarkdownLink('testErrorLink'));
        });
        it('renders icon with valid key', () => {
            _markdown_view_js__WEBPACK_IMPORTED_MODULE_4__.MarkdownImagesMap.markdownImages.set('testExampleImage', {
                src: 'devices',
                isIcon: true,
            });
            const renderResult = renderer.renderToken(getFakeToken({ type: 'image', text: 'phone', href: 'testExampleImage' })).strings.join('');
            assert.isTrue(renderResult.includes('<devtools-markdown-image'));
        });
        it('renders image with valid key', () => {
            _markdown_view_js__WEBPACK_IMPORTED_MODULE_4__.MarkdownImagesMap.markdownImages.set('exampleImage', {
                src: 'Images/phone-logo.png',
                isIcon: false,
            });
            const renderResult = renderer.renderToken(getFakeToken({ type: 'image', text: 'phone', href: 'exampleImage' })).strings.join('');
            assert.isTrue(renderResult.includes('<devtools-markdown-image'));
        });
        it('throws an error if invalid image key is provided', () => {
            assert.throws(() => _markdown_view_js__WEBPACK_IMPORTED_MODULE_4__.MarkdownImagesMap.getMarkdownImage('testErrorImageLink'));
        });
        it('renders a heading correctly', () => {
            const renderResult = renderer.renderToken(getFakeToken({ type: 'heading', text: 'a heading text', depth: 3 })).strings.join('');
            assert.isTrue(renderResult.includes('<h3'));
        });
        it('renders strong correctly', () => {
            const renderResult = renderer.renderToken(getFakeToken({ type: 'strong', text: 'a strong text' })).strings.join('');
            assert.isTrue(renderResult.includes('<strong'));
        });
        it('renders em correctly', () => {
            const renderResult = renderer.renderToken(getFakeToken({ type: 'em', text: 'em text' })).strings.join('');
            assert.isTrue(renderResult.includes('<em'));
        });
    });
    describe('MarkdownInsightRenderer renderToken', () => {
        const renderer = new _markdown_view_js__WEBPACK_IMPORTED_MODULE_4__.MarkdownView.MarkdownInsightRenderer();
        it('renders link as an x-link', () => {
            const result = renderer.renderToken({ type: 'link', text: 'learn more', href: 'exampleLink' });
            assert(result.values[0].tagName === 'X-LINK');
        });
        it('renders images as an x-link', () => {
            const result = renderer.renderToken({ type: 'image', text: 'learn more', href: 'exampleLink' });
            assert(result.values[0].tagName === 'X-LINK');
        });
        it('renders headers as a strong element', () => {
            const result = renderer.renderToken({ type: 'heading', text: 'learn more' });
            assert(result.strings.join('').includes('<strong>'));
        });
        it('renders unsupported tokens', () => {
            const result = renderer.renderToken({ type: 'html', raw: '<!DOCTYPE html>' });
            assert(result.values.join('').includes('<!DOCTYPE html>'));
        });
    });
    const paragraphText = 'Single paragraph with a sentence of text and some list items to test that the component works end-to-end.';
    const listItemTexts = ['Simple unordered list item 1', 'Simple unordered list item 2'];
    const markdownString = `
${paragraphText}

* ${listItemTexts[0]}
* ${listItemTexts[1]}
`;
    const renderString = (string, selector, renderer) => {
        const component = new _markdown_view_js__WEBPACK_IMPORTED_MODULE_4__.MarkdownView.MarkdownView();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        component.data = { tokens: _third_party_marked_marked_js__WEBPACK_IMPORTED_MODULE_2__.Marked.lexer(string), renderer };
        assert.isNotNull(component.shadowRoot);
        const element = component.shadowRoot.querySelector(selector);
        return element ? element : document.createElement('span');
    };
    describe('component', () => {
        it('renders basic markdown correctly', () => {
            const component = new _markdown_view_js__WEBPACK_IMPORTED_MODULE_4__.MarkdownView.MarkdownView();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
            component.data = { tokens: _third_party_marked_marked_js__WEBPACK_IMPORTED_MODULE_2__.Marked.lexer(markdownString) };
            assert.isNotNull(component.shadowRoot);
            const paragraphs = Array.from(component.shadowRoot.querySelectorAll('p'));
            assert.strictEqual(paragraphs.length, 1);
            assert.strictEqual(paragraphs[0].innerText, paragraphText);
            const listItems = Array.from(component.shadowRoot.querySelectorAll('li'));
            assert.strictEqual(listItems.length, 2);
            assert.deepStrictEqual(listItems.map(item => item.textContent), listItemTexts);
        });
        it('renders a codeblock', () => {
            const codeBlock = renderString(`\`\`\`
console.log('test')
\`\`\``, 'devtools-code-block');
            assert.strictEqual(codeBlock.code, 'console.log(\'test\')');
        });
        it('renders using a custom renderer', () => {
            const codeBlock = renderString('`console.log()`', 'code', new class extends _markdown_view_js__WEBPACK_IMPORTED_MODULE_4__.MarkdownView.MarkdownLitRenderer {
                templateForToken(token) {
                    if (token.type === 'codespan') {
                        return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `<code>overriden</code>`;
                    }
                    return super.templateForToken(token);
                }
            }());
            assert.strictEqual(codeBlock.innerText, 'overriden');
        });
    });
    describe('escaping', () => {
        it('renders basic escaped non-html tag', () => {
            const paragraph = renderString('<123>', 'p');
            assert.strictEqual(paragraph.innerText, '<123>');
        });
        it('renders all unescaped chars', () => {
            const paragraph = renderString('<>&\'"', 'p');
            assert.strictEqual(paragraph.innerText, '<>&\'"');
        });
        it('renders all escaped chars', () => {
            const paragraph = renderString('&lt;&gt;&amp;&#39;&quot;', 'p');
            assert.strictEqual(paragraph.innerText, '<>&\'"');
        });
        it('renders basic escaped tag inside codespan', () => {
            const codeBlock = renderString('`<123>`', 'code');
            assert.strictEqual(codeBlock.innerText, '<123>');
        });
    });
});
//# sourceMappingURL=MarkdownView.test.js.map

/***/ }),

/***/ "./ui/components/markdown_view/markdown_view.js":
/*!******************************************************!*\
  !*** ./ui/components/markdown_view/markdown_view.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodeBlock: () => (/* reexport module object */ _CodeBlock_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   MarkdownImage: () => (/* reexport module object */ _MarkdownImage_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   MarkdownImagesMap: () => (/* reexport module object */ _MarkdownImagesMap_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   MarkdownLink: () => (/* reexport module object */ _MarkdownLink_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   MarkdownLinksMap: () => (/* reexport module object */ _MarkdownLinksMap_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   MarkdownView: () => (/* reexport module object */ _MarkdownView_js__WEBPACK_IMPORTED_MODULE_5__)
/* harmony export */ });
/* harmony import */ var _CodeBlock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CodeBlock.js */ "./ui/components/markdown_view/CodeBlock.js");
/* harmony import */ var _MarkdownImage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarkdownImage.js */ "./ui/components/markdown_view/MarkdownImage.js");
/* harmony import */ var _MarkdownImagesMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MarkdownImagesMap.js */ "./ui/components/markdown_view/MarkdownImagesMap.js");
/* harmony import */ var _MarkdownLink_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MarkdownLink.js */ "./ui/components/markdown_view/MarkdownLink.js");
/* harmony import */ var _MarkdownLinksMap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MarkdownLinksMap.js */ "./ui/components/markdown_view/MarkdownLinksMap.js");
/* harmony import */ var _MarkdownView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MarkdownView.js */ "./ui/components/markdown_view/MarkdownView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







//# sourceMappingURL=markdown_view.js.map

/***/ })

}]);