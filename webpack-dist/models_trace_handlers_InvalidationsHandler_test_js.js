"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_trace_handlers_InvalidationsHandler_test_js"],{

/***/ "./models/trace/handlers/InvalidationsHandler.test.js":
/*!************************************************************!*\
  !*** ./models/trace/handlers/InvalidationsHandler.test.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */ var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function invalidationDataForTestAssertion(invalidation) {
    return {
        nodeId: invalidation.args.data.nodeId,
        nodeName: invalidation.args.data.nodeName,
        reason: invalidation.args.data.reason,
        stackTrace: invalidation.args.data.stackTrace,
    };
}
describe('InvalidationsHandler', () => {
    beforeEach(() => {
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Invalidations.reset();
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Invalidations.initialize();
    });
    it('finds the right invalidators for a layout where attributes have been changed', async function () {
        const events = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'style-invalidation-change-attribute.json.gz');
        for (const event of events) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Invalidations.handleEvent(event);
        }
        await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Invalidations.finalize();
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Invalidations.data();
        // Find the Layout event that we want to test - we are testing
        // the layout that happens after button click that happened in
        // the trace.
        const updateLayoutTreeEvent = events.find(event => {
            return _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventUpdateLayoutTree(event) &&
                event.args.beginData?.stackTrace?.[0].functionName === 'testFuncs.changeAttributeAndDisplay';
        });
        if (!updateLayoutTreeEvent) {
            throw new Error('Could not find UpdateLayoutTree event.');
        }
        const invalidations = data.invalidationsForEvent.get(updateLayoutTreeEvent)?.map(invalidationDataForTestAssertion) ?? [];
        assert.deepEqual(invalidations, [
            {
                nodeId: 107,
                nodeName: 'BUTTON id=\'changeAttributeAndDisplay\'',
                reason: 'PseudoClass',
                stackTrace: undefined,
            },
            {
                nodeId: 110,
                nodeName: 'DIV id=\'testElementFour\'',
                reason: undefined,
                stackTrace: [
                    {
                        columnNumber: 46,
                        functionName: 'testFuncs.changeAttributeAndDisplay',
                        lineNumber: 45,
                        scriptId: '86',
                        url: 'https://chromedevtools.github.io/performance-stories/style-invalidations/app.js',
                    },
                ],
            },
            {
                nodeId: 110,
                nodeName: 'DIV id=\'testElementFour\'',
                reason: 'StyleInvalidator',
                stackTrace: [
                    {
                        columnNumber: 46,
                        functionName: 'testFuncs.changeAttributeAndDisplay',
                        lineNumber: 45,
                        scriptId: '86',
                        url: 'https://chromedevtools.github.io/performance-stories/style-invalidations/app.js',
                    },
                ],
            },
            {
                nodeId: 110,
                nodeName: 'DIV id=\'testElementFour\'',
                reason: 'Attribute',
                stackTrace: [
                    {
                        columnNumber: 46,
                        functionName: 'testFuncs.changeAttributeAndDisplay',
                        lineNumber: 45,
                        scriptId: '86',
                        url: 'https://chromedevtools.github.io/performance-stories/style-invalidations/app.js',
                    },
                ],
            },
            {
                nodeId: 111,
                nodeName: 'DIV id=\'testElementFive\'',
                reason: undefined,
                stackTrace: [
                    {
                        columnNumber: 46,
                        functionName: 'testFuncs.changeAttributeAndDisplay',
                        lineNumber: 46,
                        scriptId: '86',
                        url: 'https://chromedevtools.github.io/performance-stories/style-invalidations/app.js',
                    },
                ],
            },
            {
                nodeId: 111,
                nodeName: 'DIV id=\'testElementFive\'',
                reason: 'StyleInvalidator',
                stackTrace: [
                    {
                        columnNumber: 46,
                        functionName: 'testFuncs.changeAttributeAndDisplay',
                        lineNumber: 46,
                        scriptId: '86',
                        url: 'https://chromedevtools.github.io/performance-stories/style-invalidations/app.js',
                    },
                ],
            },
            {
                nodeId: 111,
                nodeName: 'DIV id=\'testElementFive\'',
                reason: 'Attribute',
                stackTrace: [
                    {
                        columnNumber: 46,
                        functionName: 'testFuncs.changeAttributeAndDisplay',
                        lineNumber: 46,
                        scriptId: '86',
                        url: 'https://chromedevtools.github.io/performance-stories/style-invalidations/app.js',
                    },
                ],
            },
            {
                nodeId: 110,
                nodeName: 'DIV id=\'testElementFour\'',
                reason: 'Element has pending invalidation list',
                stackTrace: undefined,
            },
            {
                nodeId: 111,
                nodeName: 'DIV id=\'testElementFive\'',
                reason: 'Element has pending invalidation list',
                stackTrace: undefined,
            },
        ]);
    });
});
//# sourceMappingURL=InvalidationsHandler.test.js.map

/***/ })

}]);