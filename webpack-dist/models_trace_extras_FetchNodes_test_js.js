"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_trace_extras_FetchNodes_test_js"],{

/***/ "./models/trace/extras/FetchNodes.test.js":
/*!************************************************!*\
  !*** ./models/trace/extras/FetchNodes.test.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */ var _trace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





function nodeId(x) {
    return x;
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('FetchNodes', function () {
    beforeEach(async () => {
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.clearAllMockConnectionResponseHandlers)();
        _trace_js__WEBPACK_IMPORTED_MODULE_4__.Extras.FetchNodes.clearCacheForTesting();
    });
    describe('DOMNodeLookup', function () {
        it('returns the DOM Node for the given node ID', async function () {
            // Create a mock target, dom model, document and node.
            const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
            const domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMModel);
            assert.exists(domModel);
            const documentNode = { nodeId: nodeId(1) };
            const domNode = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode(domModel);
            domNode.id = nodeId(2);
            // Set related CDP methods responses to return our mock document and node.
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('DOM.pushNodesByBackendIdsToFrontend', () => ({ nodeIds: [domNode.id] }));
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('DOM.getDocument', () => ({ root: documentNode }));
            // Register the mock document and node in DOMModel, these use the mock responses set above.
            await domModel.requestDocument();
            domModel.registerNode(domNode);
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'cls-single-frame.json.gz');
            const result = await _trace_js__WEBPACK_IMPORTED_MODULE_4__.Extras.FetchNodes.domNodeForBackendNodeID(traceData, nodeId(2));
            assert.strictEqual(result, domNode);
            // Clear the mock and re-set it to return nothing to test the bad path.
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.clearMockConnectionResponseHandler)('DOM.pushNodesByBackendIdsToFrontend');
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('DOM.pushNodesByBackendIdsToFrontend', () => ({ nodeIds: [] }));
            const doesNotExistResult = await _trace_js__WEBPACK_IMPORTED_MODULE_4__.Extras.FetchNodes.domNodeForBackendNodeID(traceData, nodeId(99));
            assert.isNull(doesNotExistResult);
        });
        it('caches the call and does not look up a node more than once per model data', async () => {
            // Create a mock target, dom model, document and node.
            const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
            const domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMModel);
            assert.exists(domModel);
            const documentNode = { nodeId: nodeId(1) };
            const domNode = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode(domModel);
            domNode.id = nodeId(2);
            const pushNodesSpy = sinon.spy(domModel, 'pushNodesByBackendIdsToFrontend');
            // Set related CDP methods responses to return our mock document and node.
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('DOM.pushNodesByBackendIdsToFrontend', () => ({ nodeIds: [domNode.id] }));
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('DOM.getDocument', () => ({ root: documentNode }));
            await domModel.requestDocument();
            domModel.registerNode(domNode);
            // The model data is only used as a cache key, so we don't need it to be real to test this.
            const modelData1 = {};
            const modelData2 = {};
            const result = await _trace_js__WEBPACK_IMPORTED_MODULE_4__.Extras.FetchNodes.domNodeForBackendNodeID(modelData1, nodeId(2));
            assert.isNotNull(result);
            // Look it up again to test the cache.
            await _trace_js__WEBPACK_IMPORTED_MODULE_4__.Extras.FetchNodes.domNodeForBackendNodeID(modelData1, nodeId(2));
            await _trace_js__WEBPACK_IMPORTED_MODULE_4__.Extras.FetchNodes.domNodeForBackendNodeID(modelData2, nodeId(2));
            // The call with the new model data did not hit the cache.
            assert.strictEqual(pushNodesSpy.callCount, 2);
        });
        it('can look up multiple nodes at once', async () => {
            // Create a mock target, dom model, document and node.
            const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
            const domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMModel);
            assert.exists(domModel);
            const documentNode = { nodeId: nodeId(1) };
            const domNodeId2 = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode(domModel);
            domNodeId2.id = nodeId(2);
            const domNodeId3 = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode(domModel);
            domNodeId3.id = nodeId(3);
            // Set related CDP methods responses to return our mock document and node.
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('DOM.pushNodesByBackendIdsToFrontend', () => ({ nodeIds: [domNodeId2.id, domNodeId3.id] }));
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('DOM.getDocument', () => ({ root: documentNode }));
            await domModel.requestDocument();
            domModel.registerNode(domNodeId2);
            domModel.registerNode(domNodeId3);
            // The model data is only used as a cache key, so we don't need it to be real to test this.
            const modelData = {};
            const result = await _trace_js__WEBPACK_IMPORTED_MODULE_4__.Extras.FetchNodes.domNodesForMultipleBackendNodeIds(modelData, [nodeId(2), nodeId(3)]);
            assert.isNotNull(result);
            const entries = Array.from(result.entries());
            assert.deepEqual(entries, [
                [nodeId(2), domNodeId2],
                [nodeId(3), domNodeId3],
            ]);
        });
    });
    describe('nodeIdsForEvent', () => {
        it('identifies node ids for a Layout event', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev-with-commit.json.gz');
            const layoutEvent = traceData.Renderer.allTraceEntries.find(_trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.isTraceEventLayout);
            assert.isOk(layoutEvent);
            const nodeIds = _trace_js__WEBPACK_IMPORTED_MODULE_4__.Extras.FetchNodes.nodeIdsForEvent(traceData, layoutEvent);
            assert.deepEqual(Array.from(nodeIds), [2]);
        });
        it('identifies node ids for a LayoutShift event', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev-initial-url.json.gz');
            const layoutShiftEvent = traceData.LayoutShifts.clusters[0].events.at(0);
            assert.isOk(layoutShiftEvent);
            const nodeIds = _trace_js__WEBPACK_IMPORTED_MODULE_4__.Extras.FetchNodes.nodeIdsForEvent(traceData, layoutShiftEvent);
            assert.deepEqual(Array.from(nodeIds), [
                193,
                195,
                178,
                189,
                188,
            ]);
        });
        it('identifies node ids for a Paint event', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev-initial-url.json.gz');
            const paintEvent = traceData.Renderer.allTraceEntries.find(_trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.isTraceEventPaint);
            assert.isOk(paintEvent);
            const nodeIds = _trace_js__WEBPACK_IMPORTED_MODULE_4__.Extras.FetchNodes.nodeIdsForEvent(traceData, paintEvent);
            assert.deepEqual(Array.from(nodeIds), [75]);
        });
        it('identifies node ids for a PaintImage event', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev-initial-url.json.gz');
            const paintImageEvent = traceData.Renderer.allTraceEntries.find(_trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.isTraceEventPaintImage);
            assert.isOk(paintImageEvent);
            const nodeIds = _trace_js__WEBPACK_IMPORTED_MODULE_4__.Extras.FetchNodes.nodeIdsForEvent(traceData, paintImageEvent);
            assert.deepEqual(Array.from(nodeIds), [107]);
        });
        it('identifies node ids for a ScrollLayer event', async function () {
            // This trace chosen as it happens to have ScrollLayer events, unlike the
            // web-dev traces used in tests above.
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'extension-tracks-and-marks.json.gz');
            const scrollLayerEvent = traceData.Renderer.allTraceEntries.find(_trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.isTraceEventScrollLayer);
            assert.isOk(scrollLayerEvent);
            const nodeIds = _trace_js__WEBPACK_IMPORTED_MODULE_4__.Extras.FetchNodes.nodeIdsForEvent(traceData, scrollLayerEvent);
            assert.deepEqual(Array.from(nodeIds), [4]);
        });
        it('identifies node ids for a DecodeImage event', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
            const decodeImageEvent = traceData.Renderer.allTraceEntries.find(_trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.isTraceEventDecodeImage);
            assert.isOk(decodeImageEvent);
            const nodeIds = _trace_js__WEBPACK_IMPORTED_MODULE_4__.Extras.FetchNodes.nodeIdsForEvent(traceData, decodeImageEvent);
            assert.deepEqual(Array.from(nodeIds), [240]);
        });
        it('identifies node ids for a DrawLazyPixelRef event', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
            const drawLazyPixelRefEvent = traceData.Renderer.allTraceEntries.find(_trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.isTraceEventDrawLazyPixelRef);
            assert.isOk(drawLazyPixelRefEvent);
            const nodeIds = _trace_js__WEBPACK_IMPORTED_MODULE_4__.Extras.FetchNodes.nodeIdsForEvent(traceData, drawLazyPixelRefEvent);
            assert.deepEqual(Array.from(nodeIds), [212]);
        });
        it('identifies node ids for a MarkLCP event', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
            const lcpCandidateEvent = traceData.PageLoadMetrics.allMarkerEvents.find(_trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.isTraceEventLargestContentfulPaintCandidate);
            assert.isOk(lcpCandidateEvent);
            const nodeIds = _trace_js__WEBPACK_IMPORTED_MODULE_4__.Extras.FetchNodes.nodeIdsForEvent(traceData, lcpCandidateEvent);
            assert.deepEqual(Array.from(nodeIds), [209]);
        });
    });
    describe('LayoutShifts', () => {
        it('returns a list of sources for the given event', async () => {
            // Create a mock target, dom model, document and node.
            const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
            const domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMModel);
            assert.exists(domModel);
            const documentNode = { nodeId: 1 };
            const domNode = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode(domModel);
            domNode.id = 2;
            // Set related CDP methods responses to return our mock document and node.
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('DOM.pushNodesByBackendIdsToFrontend', () => ({ nodeIds: [domNode.id] }));
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('DOM.getDocument', () => ({ root: documentNode }));
            // Register the mock document and node in DOMModel, these use the mock responses set above.
            await domModel.requestDocument();
            domModel.registerNode(domNode);
            const modelData = {};
            const event = {
                args: {
                    data: {
                        impacted_nodes: [{
                                node_id: 1,
                                old_rect: [0, 0, 10, 10],
                                new_rect: [0, 0, 20, 20],
                            }],
                    },
                },
            };
            const sources = await _trace_js__WEBPACK_IMPORTED_MODULE_4__.Extras.FetchNodes.sourcesForLayoutShift(modelData, event);
            assert.lengthOf(sources, 1);
            assert.deepEqual(sources.at(0), {
                node: domNode,
                previousRect: new DOMRect(0, 0, 10, 10),
                currentRect: new DOMRect(0, 0, 20, 20),
            });
        });
        it('returns normalized nodes if we can calculate the window.devicePixelRatio', async () => {
            (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('Runtime.evaluate', () => ({ result: { value: 4, type: 'number' } }));
            const impactedNodes = [
                {
                    new_rect: [0, 0, 40, 80],
                    node_id: 1,
                    old_rect: [20, 20, 40, 80],
                },
                {
                    new_rect: [10, 10, 10, 10],
                    node_id: 1,
                    old_rect: [0, 0, 10, 10],
                },
            ];
            const mockShift = { args: { data: { impacted_nodes: impactedNodes } } };
            const modelData = {};
            const normalized = await _trace_js__WEBPACK_IMPORTED_MODULE_4__.Extras.FetchNodes.normalizedImpactedNodesForLayoutShift(modelData, mockShift);
            assert.deepEqual(normalized, [
                {
                    new_rect: [0, 0, 10, 20],
                    node_id: 1,
                    old_rect: [5, 5, 10, 20],
                },
                {
                    new_rect: [2.5, 2.5, 2.5, 2.5],
                    node_id: 1,
                    old_rect: [0, 0, 2.5, 2.5],
                },
            ]);
        });
    });
});
//# sourceMappingURL=FetchNodes.test.js.map

/***/ })

}]);