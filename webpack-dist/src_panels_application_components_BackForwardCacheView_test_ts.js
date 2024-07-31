"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_components_BackForwardCacheView_test_ts"],{

/***/ "./src/panels/application/components/BackForwardCacheView.test.ts":
/*!************************************************************************!*\
  !*** ./src/panels/application/components/BackForwardCacheView.test.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../testing/ResourceTreeHelpers.js */ "./src/testing/ResourceTreeHelpers.ts");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/components/tree_outline/tree_outline.js */ "./src/ui/components/tree_outline/tree_outline.ts");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components.js */ "./src/panels/application/components/components.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__.RenderCoordinator.RenderCoordinator.instance();
async function renderBackForwardCacheView() {
    const component = new _components_js__WEBPACK_IMPORTED_MODULE_8__.BackForwardCacheView.BackForwardCacheView();
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
    await component.render();
    assert.isNotNull(component.shadowRoot);
    await coordinator.done();
    return component;
}
async function unpromisify(node) {
    const result = { treeNodeData: node.treeNodeData };
    if (node.children) {
        const children = await node.children();
        result.children = await Promise.all(children.map(child => unpromisify(child)));
    }
    return result;
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('BackForwardCacheView', () => {
    let target;
    let resourceTreeModel;
    beforeEach(async () => {
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Tab });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({ parentTarget: tabTarget, subtype: 'prerender' });
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({ parentTarget: tabTarget });
        resourceTreeModel =
            target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.ResourceTreeModel);
    });
    it('updates BFCacheView on main frame navigation', async () => {
        await renderBackForwardCacheView();
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.getMainFrame)(target), {}, _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Page.NavigationType.BackForwardCacheRestore);
        await coordinator.done({ waitForWork: true });
    });
    it('updates BFCacheView on BFCache detail update', async () => {
        await renderBackForwardCacheView();
        resourceTreeModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.Events.BackForwardCacheDetailsUpdated, (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.getMainFrame)(target));
        await coordinator.done({ waitForWork: true });
    });
    it('renders status if restored from BFCache', async () => {
        resourceTreeModel.mainFrame = {
            url: 'https://www.example.com/',
            backForwardCacheDetails: {
                restoredFromCache: true,
                explanations: [],
            },
        };
        const component = await renderBackForwardCacheView();
        const renderedStatus = component.shadowRoot.querySelector('devtools-report-section');
        assert.strictEqual(renderedStatus?.textContent?.trim(), 'Successfully served from back/forward cache.');
    });
    it('renders explanations if not restorable from BFCache', async () => {
        resourceTreeModel.mainFrame = {
            url: 'https://www.example.com/',
            backForwardCacheDetails: {
                restoredFromCache: false,
                explanations: [
                    {
                        type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Page.BackForwardCacheNotRestoredReasonType.SupportPending,
                        reason: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Page.BackForwardCacheNotRestoredReason.WebLocks,
                    },
                    {
                        type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Page.BackForwardCacheNotRestoredReasonType.PageSupportNeeded,
                        reason: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Page.BackForwardCacheNotRestoredReason.ServiceWorkerUnregistration,
                    },
                    {
                        type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Page.BackForwardCacheNotRestoredReasonType.Circumstantial,
                        reason: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Page.BackForwardCacheNotRestoredReason.MainResourceHasCacheControlNoStore,
                    },
                ],
            },
        };
        const component = await renderBackForwardCacheView();
        const sectionHeaders = component.shadowRoot.querySelectorAll('devtools-report-section-header');
        const sectionHeadersText = Array.from(sectionHeaders).map(sectionHeader => sectionHeader.textContent?.trim());
        assert.deepStrictEqual(sectionHeadersText, ['Actionable', 'Pending Support', 'Not Actionable']);
        const sections = component.shadowRoot.querySelectorAll('devtools-report-section');
        const sectionsText = Array.from(sections).map(section => section.textContent?.trim());
        const expected = [
            'Not served from back/forward cache: to trigger back/forward cache, use Chrome\'s back/forward buttons, or use the test button below to automatically navigate away and back.',
            'Test back/forward cache',
            'ServiceWorker was unregistered while a page was in back/forward cache.',
            'Pages that use WebLocks are not currently eligible for back/forward cache.',
            'Pages whose main resource has cache-control:no-store cannot enter back/forward cache.',
            'Learn more: back/forward cache eligibility',
        ];
        assert.deepStrictEqual(sectionsText, expected);
    });
    it('renders explanation tree', async () => {
        resourceTreeModel.mainFrame = {
            url: 'https://www.example.com/',
            backForwardCacheDetails: {
                restoredFromCache: false,
                explanationsTree: {
                    url: 'https://www.example.com',
                    explanations: [{
                            type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Page.BackForwardCacheNotRestoredReasonType.SupportPending,
                            reason: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Page.BackForwardCacheNotRestoredReason.WebLocks,
                        }],
                    children: [{
                            url: 'https://www.example.com/frame.html',
                            explanations: [{
                                    type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Page.BackForwardCacheNotRestoredReasonType.Circumstantial,
                                    reason: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Page.BackForwardCacheNotRestoredReason.MainResourceHasCacheControlNoStore,
                                }],
                            children: [],
                        }],
                },
                explanations: [
                    {
                        type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Page.BackForwardCacheNotRestoredReasonType.SupportPending,
                        reason: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Page.BackForwardCacheNotRestoredReason.WebLocks,
                    },
                    {
                        type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Page.BackForwardCacheNotRestoredReasonType.Circumstantial,
                        reason: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Page.BackForwardCacheNotRestoredReason.MainResourceHasCacheControlNoStore,
                    },
                ],
            },
        };
        const component = await renderBackForwardCacheView();
        const treeOutline = component.shadowRoot.querySelector('devtools-tree-outline');
        assert.instanceOf(treeOutline, _ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_7__.TreeOutline.TreeOutline);
        assert.isNotNull(treeOutline.shadowRoot);
        const treeData = await Promise.all(treeOutline.data.tree.map(node => unpromisify(node)));
        const expected = [
            {
                treeNodeData: {
                    text: '2 issues found in 2 frames.',
                },
                children: [
                    {
                        treeNodeData: {
                            text: '(2) https://www.example.com',
                            iconName: 'frame',
                        },
                        children: [
                            {
                                treeNodeData: {
                                    text: 'WebLocks',
                                },
                            },
                            {
                                treeNodeData: {
                                    text: '(1) https://www.example.com/frame.html',
                                    iconName: 'iframe',
                                },
                                children: [
                                    {
                                        treeNodeData: {
                                            text: 'MainResourceHasCacheControlNoStore',
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ];
        assert.deepStrictEqual(treeData, expected);
    });
    it('renders blocking details if available', async () => {
        resourceTreeModel.mainFrame = {
            resourceForURL: () => null,
            url: 'https://www.example.com/',
            backForwardCacheDetails: {
                restoredFromCache: false,
                explanations: [
                    {
                        type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Page.BackForwardCacheNotRestoredReasonType.SupportPending,
                        reason: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Page.BackForwardCacheNotRestoredReason.WebLocks,
                        details: [
                            { url: 'https://www.example.com/index.html', lineNumber: 10, columnNumber: 5 },
                            { url: 'https://www.example.com/script.js', lineNumber: 15, columnNumber: 20 },
                        ],
                    },
                ],
            },
        };
        const component = await renderBackForwardCacheView();
        const sectionHeaders = component.shadowRoot.querySelectorAll('devtools-report-section-header');
        const sectionHeadersText = Array.from(sectionHeaders).map(sectionHeader => sectionHeader.textContent?.trim());
        assert.deepStrictEqual(sectionHeadersText, ['Pending Support']);
        const sections = component.shadowRoot.querySelectorAll('devtools-report-section');
        const sectionsText = Array.from(sections).map(section => section.textContent?.trim());
        const expected = [
            'Not served from back/forward cache: to trigger back/forward cache, use Chrome\'s back/forward buttons, or use the test button below to automatically navigate away and back.',
            'Test back/forward cache',
            'Pages that use WebLocks are not currently eligible for back/forward cache.',
            'Learn more: back/forward cache eligibility',
        ];
        assert.deepStrictEqual(sectionsText, expected);
        const details = component.shadowRoot.querySelector('.details-list devtools-expandable-list');
        details.shadowRoot.querySelector('button').click();
        const items = details.shadowRoot.querySelectorAll('.expandable-list-items .devtools-link');
        const detailsText = Array.from(items).map(detail => detail.textContent?.trim());
        assert.deepStrictEqual(detailsText, ['www.example.com/index.html:11:6', 'www.example.com/script.js:16:21']);
    });
    it('can handle delayed navigation history when testing for BFcache availability', async () => {
        const entries = [
            {
                id: 5,
                url: 'about:blank',
                userTypedURL: 'about:blank',
                title: '',
                transitionType: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Page.TransitionType.Typed,
            },
            {
                id: 8,
                url: 'chrome://terms/',
                userTypedURL: '',
                title: '',
                transitionType: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Page.TransitionType.Typed,
            },
        ];
        const stub = sinon.stub();
        stub.onCall(0).returns({ entries, currentIndex: 0 });
        stub.onCall(1).returns({ entries, currentIndex: 0 });
        stub.onCall(2).returns({ entries, currentIndex: 0 });
        stub.onCall(3).returns({ entries, currentIndex: 0 });
        stub.onCall(4).returns({ entries, currentIndex: 1 });
        resourceTreeModel.navigationHistory = stub;
        resourceTreeModel.navigate = (url) => {
            resourceTreeModel.frameNavigated({ url }, undefined);
            return Promise.resolve({ frameId: '', getError() { } });
        };
        resourceTreeModel.navigateToHistoryEntry = (entry) => {
            resourceTreeModel.frameNavigated({ url: entry.url }, undefined);
        };
        const navigateToHistoryEntrySpy = sinon.spy(resourceTreeModel, 'navigateToHistoryEntry');
        resourceTreeModel.storageKeyForFrame = () => Promise.resolve(null);
        resourceTreeModel.mainFrame = {
            url: 'about:blank',
            backForwardCacheDetails: {
                restoredFromCache: true,
                explanations: [],
            },
        };
        const component = await renderBackForwardCacheView();
        const button = component.shadowRoot.querySelector('[aria-label="Test back/forward cache"]');
        assert.instanceOf(button, HTMLElement);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(button);
        await new Promise(resolve => {
            let eventCounter = 0;
            resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.Events.FrameNavigated, () => {
                if (++eventCounter === 2) {
                    resolve();
                }
            });
        });
        assert.isTrue(navigateToHistoryEntrySpy.calledOnceWithExactly(entries[0]));
    });
});


/***/ })

}]);