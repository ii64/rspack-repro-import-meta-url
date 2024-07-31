"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_components_OriginTrialTreeView_test_ts"],{

/***/ "./src/panels/application/components/OriginTrialTreeView.test.ts":
/*!***********************************************************************!*\
  !*** ./src/panels/application/components/OriginTrialTreeView.test.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/tree_outline/tree_outline.js */ "./src/ui/components/tree_outline/tree_outline.ts");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components.js */ "./src/panels/application/components/components.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_3__.RenderCoordinator.RenderCoordinator.instance();
async function renderOriginTrialTreeView(data) {
    const component = new _components_js__WEBPACK_IMPORTED_MODULE_5__.OriginTrialTreeView.OriginTrialTreeView();
    component.data = data;
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
    assert.isNotNull(component.shadowRoot);
    await coordinator.done();
    return {
        component,
        shadowRoot: component.shadowRoot,
    };
}
/**
 * Extract `TreeOutline` component from `OriginTrialTreeView` for inspection.
 */
async function renderOriginTrialTreeViewTreeOutline(data) {
    const { component } = await renderOriginTrialTreeView(data);
    const treeOutline = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getElementWithinComponent)(component, 'devtools-tree-outline', _ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeOutline);
    assert.isNotNull(treeOutline.shadowRoot);
    return {
        component: treeOutline,
        shadowRoot: treeOutline.shadowRoot,
    };
}
const tokenPlaceHolder = 'Origin Trial Token Placeholder';
const trialWithMultipleTokens = {
    trialName: 'AppCache',
    status: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Page.OriginTrialStatus.Enabled,
    tokensWithStatus: [
        {
            status: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Page.OriginTrialTokenStatus.Success,
            rawTokenText: tokenPlaceHolder,
            parsedToken: {
                trialName: 'AppCache',
                origin: 'https://foo.com',
                expiryTime: 1000,
                usageRestriction: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Page.OriginTrialUsageRestriction.None,
                isThirdParty: false,
                matchSubDomains: false,
            },
        },
        {
            status: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Page.OriginTrialTokenStatus.Expired,
            rawTokenText: tokenPlaceHolder,
            parsedToken: {
                trialName: 'AppCache',
                origin: 'https://foo.com',
                expiryTime: 1000,
                usageRestriction: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Page.OriginTrialUsageRestriction.None,
                isThirdParty: false,
                matchSubDomains: false,
            },
        },
        {
            status: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Page.OriginTrialTokenStatus.WrongOrigin,
            rawTokenText: tokenPlaceHolder,
            parsedToken: {
                trialName: 'AppCache',
                origin: 'https://bar.com',
                expiryTime: 1000,
                usageRestriction: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Page.OriginTrialUsageRestriction.None,
                isThirdParty: false,
                matchSubDomains: false,
            },
        },
    ],
};
const trialWithSingleToken = {
    trialName: 'AutoPictureInPicture',
    status: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Page.OriginTrialStatus.ValidTokenNotProvided,
    tokensWithStatus: [
        {
            status: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Page.OriginTrialTokenStatus.NotSupported,
            rawTokenText: tokenPlaceHolder,
            parsedToken: {
                trialName: 'AutoPictureInPicture',
                origin: 'https://foo.com',
                expiryTime: 1000,
                usageRestriction: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Page.OriginTrialUsageRestriction.None,
                isThirdParty: false,
                matchSubDomains: false,
            },
        },
    ],
};
const trialWithUnparsableToken = {
    trialName: 'UNKNOWN',
    status: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Page.OriginTrialStatus.ValidTokenNotProvided,
    tokensWithStatus: [
        {
            status: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Page.OriginTrialTokenStatus.InvalidSignature,
            rawTokenText: tokenPlaceHolder,
        },
    ],
};
function extractBadgeTextFromTreeNode(node) {
    return [...node.querySelectorAll('devtools-resources-origin-trial-tree-view-badge')].map(badgeElement => {
        const adornerElement = badgeElement.shadowRoot.querySelector('devtools-adorner');
        assert.isNotNull(adornerElement);
        if (adornerElement === null) {
            return '';
        }
        const contentElement = adornerElement.querySelector('[slot="content"]');
        assert.isNotNull(contentElement);
        if (contentElement === null) {
            return '';
        }
        return contentElement.innerHTML;
    });
}
function nodeKeyInnerHTML(node) {
    const keyNode = node.querySelector('[data-node-key]');
    if (!keyNode) {
        throw new Error('Found tree node without a key within it.');
    }
    return (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.stripLitHtmlCommentNodes)(keyNode.innerHTML);
}
/**
 * Converts the nodes into a tree structure that we can assert against.
 */
function visibleNodesToTree(shadowRoot) {
    const tree = [];
    function buildTreeNode(node) {
        const item = {
            nodeElement: node,
        };
        if (node.getAttribute('aria-expanded') && node.getAttribute('aria-expanded') === 'true') {
            item.children = [];
            const childNodes = node.querySelectorAll(':scope > ul[role="group"]>li');
            for (const child of childNodes) {
                item.children.push(buildTreeNode(child));
            }
        }
        return item;
    }
    const rootNodes = shadowRoot.querySelectorAll('ul[role="tree"]>li');
    for (const root of rootNodes) {
        tree.push(buildTreeNode(root));
    }
    return tree;
}
/**
 * Wait until a certain number of children are rendered. We need this as the
 * component uses LitHtml's until directive, which is async and not within the
 * render coordinator's control.
 */
async function waitForRenderedTreeNodeCount(shadowRoot, expectedNodeCount) {
    const actualNodeCount = shadowRoot.querySelectorAll('li[role="treeitem"]').length;
    if (actualNodeCount === expectedNodeCount) {
        return;
    }
    await new Promise(resolve => {
        requestAnimationFrame(async () => {
            await waitForRenderedTreeNodeCount(shadowRoot, expectedNodeCount);
            resolve();
        });
    });
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithLocale)('OriginTrialTreeView', () => {
    it('renders trial names as root tree nodes', async () => {
        const { shadowRoot } = await renderOriginTrialTreeViewTreeOutline({
            trials: [
                trialWithMultipleTokens,
                trialWithSingleToken,
                trialWithUnparsableToken,
            ],
        });
        const visibleItems = shadowRoot.querySelectorAll('li[role="treeitem"]');
        assert.lengthOf(visibleItems, 3);
        assert.include(nodeKeyInnerHTML(visibleItems[0]), trialWithMultipleTokens.trialName);
        assert.include(nodeKeyInnerHTML(visibleItems[1]), trialWithSingleToken.trialName);
        assert.include(nodeKeyInnerHTML(visibleItems[2]), trialWithUnparsableToken.trialName);
    });
    it('renders token with status when there are more than 1 tokens', async () => {
        const { component, shadowRoot } = await renderOriginTrialTreeViewTreeOutline({
            trials: [
                trialWithMultipleTokens, // Node counts by level: 1/3/6/3
            ],
        });
        await component.expandRecursively(/* maxDepth= */ 0);
        await waitForRenderedTreeNodeCount(shadowRoot, 4);
        const visibleTree = visibleNodesToTree(shadowRoot);
        // When there are more than 1 tokens in a trial, second level nodes
        // should show token status.
        const tokenWithStatusNodes = visibleTree[0].children;
        assert.exists(tokenWithStatusNodes);
        if (tokenWithStatusNodes === undefined) {
            return;
        }
        assert.lengthOf(tokenWithStatusNodes, 3);
        for (let i = 0; i < tokenWithStatusNodes.length; i++) {
            assert.include(extractBadgeTextFromTreeNode(tokenWithStatusNodes[i].nodeElement), trialWithMultipleTokens.tokensWithStatus[i].status);
        }
    });
    it('skips token with status when there is only 1 token', async () => {
        const { component, shadowRoot } = await renderOriginTrialTreeViewTreeOutline({
            trials: [
                trialWithSingleToken, // Node counts by level: 1/2/1
            ],
        });
        await component.expandRecursively(/* maxDepth= */ 1);
        await waitForRenderedTreeNodeCount(shadowRoot, 3);
        const visibleTree = visibleNodesToTree(shadowRoot);
        // When there is only 1 token, token with status level should be skipped.
        const tokenDetailNodes = visibleTree[0].children;
        assert.exists(tokenDetailNodes);
        if (tokenDetailNodes === undefined) {
            return;
        }
        assert.lengthOf(tokenDetailNodes, 2);
    });
    it('renders token fields', async () => {
        const { component, shadowRoot } = await renderOriginTrialTreeViewTreeOutline({
            trials: [
                trialWithSingleToken, // Node counts by level: 1/2/1
            ],
        });
        await component.expandRecursively(/* maxDepth= */ 1);
        await waitForRenderedTreeNodeCount(shadowRoot, 3);
        const visibleTree = visibleNodesToTree(shadowRoot);
        const tokenDetailNodes = visibleTree[0].children;
        assert.exists(tokenDetailNodes);
        if (tokenDetailNodes === undefined) {
            return;
        }
        assert.lengthOf(tokenDetailNodes, 2);
        const tokenFieldsNode = tokenDetailNodes[0];
        const rowsComponent = tokenFieldsNode.nodeElement.querySelector('devtools-resources-origin-trial-token-rows');
        const { innerHTML } = rowsComponent.shadowRoot;
        const parsedToken = trialWithSingleToken.tokensWithStatus[0].parsedToken;
        assert.exists(parsedToken);
        if (parsedToken === undefined) {
            return;
        }
        // Note: only origin and usageRestriction field are tested, as other fields
        // are not directly rendered:
        // - expiryTime: rendered as time format
        // - isThirdParty, MatchesSubDomain: boolean flags
        assert.include(innerHTML, parsedToken.origin);
        assert.include(innerHTML, parsedToken.usageRestriction);
    });
    it('renders raw token text', async () => {
        const { component, shadowRoot } = await renderOriginTrialTreeViewTreeOutline({
            trials: [
                trialWithSingleToken, // Node counts by level: 1/2/1
            ],
        });
        await component.expandRecursively(/* maxDepth= */ 2);
        await waitForRenderedTreeNodeCount(shadowRoot, 4);
        const visibleTree = visibleNodesToTree(shadowRoot);
        const tokenDetailNodes = visibleTree[0].children;
        assert.exists(tokenDetailNodes);
        if (tokenDetailNodes === undefined) {
            return;
        }
        assert.lengthOf(tokenDetailNodes, 2);
        const rawTokenNode = tokenDetailNodes[1];
        assert.exists(rawTokenNode.children);
        if (rawTokenNode.children === undefined) {
            return;
        }
        assert.lengthOf(rawTokenNode.children, 1);
        const innerHTML = nodeKeyInnerHTML(rawTokenNode.children[0].nodeElement);
        assert.include(innerHTML, trialWithSingleToken.tokensWithStatus[0].rawTokenText);
    });
    it('shows token count when there are more than 1 tokens in a trial', async () => {
        const { shadowRoot } = await renderOriginTrialTreeViewTreeOutline({
            trials: [
                trialWithMultipleTokens,
            ],
        });
        await waitForRenderedTreeNodeCount(shadowRoot, 1);
        const visibleTree = visibleNodesToTree(shadowRoot);
        const trialNameNode = visibleTree[0];
        const badges = extractBadgeTextFromTreeNode(trialNameNode.nodeElement);
        assert.lengthOf(badges, 2);
        assert.include(badges, `${trialWithMultipleTokens.tokensWithStatus.length} tokens`);
    });
    it('shows trial status', async () => {
        const { shadowRoot } = await renderOriginTrialTreeViewTreeOutline({
            trials: [
                trialWithMultipleTokens,
            ],
        });
        await waitForRenderedTreeNodeCount(shadowRoot, 1);
        const visibleTree = visibleNodesToTree(shadowRoot);
        const trialNameNode = visibleTree[0];
        const badges = extractBadgeTextFromTreeNode(trialNameNode.nodeElement);
        assert.lengthOf(badges, 2);
        assert.include(badges, trialWithMultipleTokens.status);
    });
    it('shows token status, when token with status node not expanded', async () => {
        const { component, shadowRoot } = await renderOriginTrialTreeViewTreeOutline({
            trials: [
                trialWithMultipleTokens, // Node counts by level: 1/3/6/3
            ],
        });
        await component.expandRecursively(/* maxDepth= */ 0);
        await waitForRenderedTreeNodeCount(shadowRoot, 4);
        const visibleTree = visibleNodesToTree(shadowRoot);
        const trialNameNode = visibleTree[0];
        assert.exists(trialNameNode.children);
        if (trialNameNode.children === undefined) {
            return;
        }
        assert.lengthOf(trialNameNode.children, 3);
        for (let i = 0; i < trialNameNode.children.length; i++) {
            const tokenWithStatusNode = trialNameNode.children[i];
            assert.isUndefined(tokenWithStatusNode.children);
            const badges = extractBadgeTextFromTreeNode(tokenWithStatusNode.nodeElement);
            assert.lengthOf(badges, 1);
            assert.strictEqual(badges[0], trialWithMultipleTokens.tokensWithStatus[i].status);
        }
    });
    it('hide token status, when token with status node is expanded', async () => {
        const { component, shadowRoot } = await renderOriginTrialTreeViewTreeOutline({
            trials: [
                trialWithMultipleTokens, // Node counts by level: 1/3/6/3
            ],
        });
        await component.expandRecursively(/* maxDepth= */ 1);
        await waitForRenderedTreeNodeCount(shadowRoot, 4);
        const visibleTree = visibleNodesToTree(shadowRoot);
        const trialNameNode = visibleTree[0];
        assert.exists(trialNameNode.children);
        for (const tokenWithStatusNode of trialNameNode.children) {
            assert.exists(tokenWithStatusNode.children);
            const badges = extractBadgeTextFromTreeNode(tokenWithStatusNode.nodeElement);
            assert.lengthOf(badges, 0);
        }
    });
    it('shows trial name for token with status UnknownTrial', async () => {
        const unknownTrialName = 'UnkownTrialName';
        const { component, shadowRoot } = await renderOriginTrialTreeViewTreeOutline({
            trials: [
                {
                    trialName: 'UNKNOWN',
                    status: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Page.OriginTrialStatus.ValidTokenNotProvided,
                    tokensWithStatus: [
                        {
                            status: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Page.OriginTrialTokenStatus.UnknownTrial,
                            parsedToken: {
                                trialName: unknownTrialName,
                                origin: 'https://foo.com',
                                expiryTime: 1000,
                                usageRestriction: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Page.OriginTrialUsageRestriction.None,
                                isThirdParty: false,
                                matchSubDomains: false,
                            },
                            rawTokenText: tokenPlaceHolder,
                        },
                    ],
                },
            ],
        }); // Node counts by level: 1/2/1
        await component.expandRecursively(/* maxDepth= */ 1);
        await waitForRenderedTreeNodeCount(shadowRoot, 3);
        const visibleTree = visibleNodesToTree(shadowRoot);
        const tokenDetailNodes = visibleTree[0].children;
        assert.exists(tokenDetailNodes);
        if (tokenDetailNodes === undefined) {
            return;
        }
        assert.lengthOf(tokenDetailNodes, 2);
        const tokenFieldsNode = tokenDetailNodes[0];
        const rowsComponent = tokenFieldsNode.nodeElement.querySelector('devtools-resources-origin-trial-token-rows');
        const { innerHTML } = rowsComponent.shadowRoot;
        assert.include(innerHTML, unknownTrialName);
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


/***/ })

}]);