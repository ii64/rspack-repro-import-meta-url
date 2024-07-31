"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_core_sdk_OverlayPersistentHighlighter_test_ts"],{

/***/ "./src/core/sdk/OverlayPersistentHighlighter.test.ts":
/*!***********************************************************!*\
  !*** ./src/core/sdk/OverlayPersistentHighlighter.test.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sdk.js */ "./src/core/sdk/sdk.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



function resetSavedSetting(forcedState = []) {
    const setting = _common_common_js__WEBPACK_IMPORTED_MODULE_1__.Settings.Settings.instance().createLocalSetting('persistent-highlight-setting', []);
    setting.set(forcedState);
}
function assertSavedSettingState(expected) {
    const setting = _common_common_js__WEBPACK_IMPORTED_MODULE_1__.Settings.Settings.instance().createLocalSetting('persistent-highlight-setting', []);
    assert.deepEqual(setting.get(), expected);
}
const NON_RELATED_DOCUMENT_URL_FOR_TEST = 'https://notexample.com/';
const DOCUMENT_URL_FOR_TEST = 'https://example.com/';
const NODE_PATH_FOR_TEST = 'body > div';
const EXISTING_NODE_ID = 1;
const PATH_TO_NODE_ID_FOR_TEST = {
    'body > div': EXISTING_NODE_ID,
    'body > div + a': 2,
};
const NODE_ID_TO_PATH_FOR_TEST = Object.fromEntries(Object.entries(PATH_TO_NODE_ID_FOR_TEST).map(([path, nodeId]) => [nodeId, path]));
function createStubDOMNode(nodeId) {
    if (!nodeId) {
        return null;
    }
    const path = NODE_ID_TO_PATH_FOR_TEST[nodeId];
    if (!path) {
        return null;
    }
    const domNode = sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMNode, {
        path,
    });
    domNode.id = nodeId;
    return domNode;
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('OverlayPersistentHighlighter', () => {
    let mockOverlayModel;
    let stubbedCallbacks;
    let highlighter;
    beforeEach(() => {
        stubbedCallbacks = {
            onFlexOverlayStateChanged: sinon.stub(),
            onGridOverlayStateChanged: sinon.stub(),
            onScrollSnapOverlayStateChanged: sinon.stub(),
            onContainerQueryOverlayStateChanged: sinon.stub(),
        };
        const stubDOMDocument = sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMDocument);
        // Somehow we're not able to stub this properly
        // sinon says cannot stub non-existent property.
        stubDOMDocument.documentURL = DOCUMENT_URL_FOR_TEST;
        mockOverlayModel = sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayModel.OverlayModel, {
            getDOMModel: sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMModel, {
                existingDocument: stubDOMDocument,
                requestDocument: sinon.stub().resolves(stubDOMDocument),
                nodeForId: sinon.stub().callsFake(createStubDOMNode),
                pushNodeByPathToFrontend: sinon.stub().callsFake(async (path) => {
                    return PATH_TO_NODE_ID_FOR_TEST[path] ?? null;
                }),
            }),
            target: sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Target, {
                overlayAgent: {
                    invoke_setShowGridOverlays: sinon.stub(),
                    invoke_setShowFlexOverlays: sinon.stub(),
                    invoke_setShowScrollSnapOverlays: sinon.stub(),
                    invoke_setShowContainerQueryOverlays: sinon.stub(),
                    invoke_setShowIsolatedElements: sinon.stub(),
                },
            }),
        });
        highlighter = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayPersistentHighlighter.OverlayPersistentHighlighter(mockOverlayModel, stubbedCallbacks);
        resetSavedSetting();
    });
    it('is able to highlight flexbox elements', () => {
        highlighter.highlightFlexInOverlay(EXISTING_NODE_ID);
        assert.deepEqual(stubbedCallbacks.onFlexOverlayStateChanged.firstCall.args, [{ nodeId: EXISTING_NODE_ID, enabled: true }]);
        assert(highlighter.isFlexHighlighted(EXISTING_NODE_ID));
        assertSavedSettingState([{
                path: NODE_PATH_FOR_TEST,
                url: DOCUMENT_URL_FOR_TEST,
                type: _sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayPersistentHighlighter.HighlightType.FLEX,
            }]);
        highlighter.hideFlexInOverlay(EXISTING_NODE_ID);
        assert.deepEqual(stubbedCallbacks.onFlexOverlayStateChanged.secondCall.args, [{ nodeId: EXISTING_NODE_ID, enabled: false }]);
        assert(!highlighter.isFlexHighlighted(EXISTING_NODE_ID));
        assertSavedSettingState([]);
    });
    it('is able to highlight grid elements', () => {
        highlighter.highlightGridInOverlay(EXISTING_NODE_ID);
        assert(highlighter.isGridHighlighted(EXISTING_NODE_ID));
        assert.deepEqual(stubbedCallbacks.onGridOverlayStateChanged.firstCall.args, [{ nodeId: EXISTING_NODE_ID, enabled: true }]);
        assertSavedSettingState([{
                path: NODE_PATH_FOR_TEST,
                url: DOCUMENT_URL_FOR_TEST,
                type: _sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayPersistentHighlighter.HighlightType.GRID,
            }]);
        highlighter.hideGridInOverlay(EXISTING_NODE_ID);
        assert.deepEqual(stubbedCallbacks.onGridOverlayStateChanged.secondCall.args, [{ nodeId: EXISTING_NODE_ID, enabled: false }]);
        assert(!highlighter.isGridHighlighted(EXISTING_NODE_ID));
        assertSavedSettingState([]);
    });
    it('is able to highlight scroll snap elements', () => {
        highlighter.highlightScrollSnapInOverlay(EXISTING_NODE_ID);
        assert(highlighter.isScrollSnapHighlighted(EXISTING_NODE_ID));
        assert.deepEqual(stubbedCallbacks.onScrollSnapOverlayStateChanged.firstCall.args, [{ nodeId: EXISTING_NODE_ID, enabled: true }]);
        assertSavedSettingState([{
                path: NODE_PATH_FOR_TEST,
                url: DOCUMENT_URL_FOR_TEST,
                type: _sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayPersistentHighlighter.HighlightType.SCROLL_SNAP,
            }]);
        highlighter.hideScrollSnapInOverlay(EXISTING_NODE_ID);
        assert(!highlighter.isScrollSnapHighlighted(EXISTING_NODE_ID));
        assert.deepEqual(stubbedCallbacks.onScrollSnapOverlayStateChanged.secondCall.args, [{ nodeId: EXISTING_NODE_ID, enabled: false }]);
        assertSavedSettingState([]);
    });
    it('is able to highlight container query elements', () => {
        highlighter.highlightContainerQueryInOverlay(EXISTING_NODE_ID);
        assert(highlighter.isContainerQueryHighlighted(EXISTING_NODE_ID));
        assert.deepEqual(stubbedCallbacks.onContainerQueryOverlayStateChanged.firstCall.args, [{ nodeId: EXISTING_NODE_ID, enabled: true }]);
        assertSavedSettingState([{
                path: NODE_PATH_FOR_TEST,
                url: DOCUMENT_URL_FOR_TEST,
                type: _sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayPersistentHighlighter.HighlightType.CONTAINER_QUERY,
            }]);
        highlighter.hideContainerQueryInOverlay(EXISTING_NODE_ID);
        assert(!highlighter.isContainerQueryHighlighted(EXISTING_NODE_ID));
        assert.deepEqual(stubbedCallbacks.onContainerQueryOverlayStateChanged.secondCall.args, [{ nodeId: EXISTING_NODE_ID, enabled: false }]);
        assertSavedSettingState([]);
    });
    it('is able to highlight isolated elements', () => {
        highlighter.highlightIsolatedElementInOverlay(EXISTING_NODE_ID);
        assert(highlighter.isIsolatedElementHighlighted(EXISTING_NODE_ID));
        assertSavedSettingState([{
                path: NODE_PATH_FOR_TEST,
                url: DOCUMENT_URL_FOR_TEST,
                type: _sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayPersistentHighlighter.HighlightType.ISOLATED_ELEMENT,
            }]);
        highlighter.hideIsolatedElementInOverlay(EXISTING_NODE_ID);
        assert(!highlighter.isIsolatedElementHighlighted(EXISTING_NODE_ID));
        assertSavedSettingState([]);
    });
    it('updating setting state keeps the highlights not related to the current document', () => {
        resetSavedSetting([{
                url: NON_RELATED_DOCUMENT_URL_FOR_TEST,
                path: NODE_PATH_FOR_TEST,
                type: _sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayPersistentHighlighter.HighlightType.FLEX,
            }]);
        highlighter.highlightFlexInOverlay(EXISTING_NODE_ID);
        highlighter.hideFlexInOverlay(EXISTING_NODE_ID);
        assertSavedSettingState([{
                url: NON_RELATED_DOCUMENT_URL_FOR_TEST,
                path: NODE_PATH_FOR_TEST,
                type: _sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayPersistentHighlighter.HighlightType.FLEX,
            }]);
    });
    it('restoring highlights for document highlights all the saved higlights in the setting for the current document', async () => {
        const paths = Object.keys(PATH_TO_NODE_ID_FOR_TEST);
        resetSavedSetting([
            {
                url: DOCUMENT_URL_FOR_TEST,
                path: paths[0],
                type: _sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayPersistentHighlighter.HighlightType.GRID,
            },
            {
                url: DOCUMENT_URL_FOR_TEST,
                path: paths[1],
                type: _sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayPersistentHighlighter.HighlightType.FLEX,
            },
        ]);
        await highlighter.restoreHighlightsForDocument();
        assert(stubbedCallbacks.onGridOverlayStateChanged.calledWith({ nodeId: PATH_TO_NODE_ID_FOR_TEST[paths[0]], enabled: true }));
        assert(highlighter.isGridHighlighted(PATH_TO_NODE_ID_FOR_TEST[paths[0]]));
        assert(stubbedCallbacks.onFlexOverlayStateChanged.calledWith({ nodeId: PATH_TO_NODE_ID_FOR_TEST[paths[1]], enabled: true }));
        assert(highlighter.isFlexHighlighted(PATH_TO_NODE_ID_FOR_TEST[paths[1]]));
    });
});


/***/ })

}]);