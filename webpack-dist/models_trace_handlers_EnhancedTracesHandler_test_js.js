"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_trace_handlers_EnhancedTracesHandler_test_js"],{

/***/ "./models/trace/handlers/EnhancedTracesHandler.test.js":
/*!*************************************************************!*\
  !*** ./models/trace/handlers/EnhancedTracesHandler.test.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */ var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('EnhancedTracesHandler', () => {
    beforeEach(async function () {
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.EnhancedTraces.reset();
        const events = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'enhanced-traces.json.gz');
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.EnhancedTraces.initialize();
        for (const event of events) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.EnhancedTraces.handleEvent(event);
        }
        await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.EnhancedTraces.finalize();
    });
    afterEach(() => {
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.EnhancedTraces.reset();
    });
    it('captures targets from target rundown events', async function () {
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.EnhancedTraces.data();
        assert.deepEqual(data.targets, [
            {
                targetId: '21D58E83A5C17916277166140F6A464B',
                type: 'page',
                isolate: '12345',
                pid: 8050,
                url: 'http://localhost:8080/index.html',
            },
            {
                targetId: '3E1717BE677B75D0536E292E00D6A34A',
                type: 'page',
                isolate: '6789',
                pid: 8051,
                url: 'http://localhost:8080/index.html',
            },
        ]);
    });
    it('captures execution context info', async function () {
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.EnhancedTraces.data();
        assert.deepEqual(data.executionContexts, [
            {
                id: 1,
                origin: 'http://localhost:8080',
                v8Context: 'example context 1',
                auxData: {
                    frameId: '21D58E83A5C17916277166140F6A464B',
                    isDefault: true,
                    type: 'type',
                },
                isolate: '12345',
            },
            {
                id: 2,
                origin: 'http://localhost:8080',
                v8Context: 'example context 2',
                auxData: {
                    frameId: '21D58E83A5C17916277166140F6A464B',
                    isDefault: true,
                    type: 'type',
                },
                isolate: '12345',
            },
            {
                id: 1,
                origin: 'http://localhost:8080',
                v8Context: 'example context 3',
                auxData: {
                    frameId: '3E1717BE677B75D0536E292E00D6A34A',
                    isDefault: true,
                    type: 'type',
                },
                isolate: '6789',
            },
        ]);
    });
    it('captures script info and source text', async function () {
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.EnhancedTraces.data();
        assert.deepEqual(data.scripts, [
            {
                scriptId: 1,
                isolate: '12345',
                executionContextId: 1,
                startLine: 0,
                startColumn: 0,
                endLine: 1,
                endColumn: 10,
                hash: '',
                isModule: false,
                url: 'http://localhost:8080/index.html',
                hasSourceUrl: false,
                sourceMapUrl: 'http://localhost:8080/source',
                length: 13,
                sourceText: 'source text 1',
                auxData: {
                    frameId: '21D58E83A5C17916277166140F6A464B',
                    isDefault: true,
                    type: 'type',
                },
            },
            {
                scriptId: 2,
                isolate: '12345',
                executionContextId: 2,
                startLine: 0,
                startColumn: 0,
                endLine: 1,
                endColumn: 10,
                hash: '',
                isModule: false,
                url: 'http://localhost:8080/index.html',
                hasSourceUrl: false,
                sourceMapUrl: undefined,
                length: 13,
                sourceText: 'source text 2',
                auxData: {
                    frameId: '21D58E83A5C17916277166140F6A464B',
                    isDefault: true,
                    type: 'type',
                },
            },
            {
                scriptId: 1,
                isolate: '6789',
                executionContextId: 1,
                startLine: 0,
                startColumn: 0,
                endLine: 1,
                endColumn: 10,
                hash: '',
                isModule: false,
                url: 'http://localhost:8080/index.html',
                hasSourceUrl: false,
                sourceMapUrl: undefined,
                length: 13,
                sourceText: 'source text 3',
                auxData: {
                    frameId: '3E1717BE677B75D0536E292E00D6A34A',
                    isDefault: true,
                    type: 'type',
                },
            },
        ]);
    });
});
//# sourceMappingURL=EnhancedTracesHandler.test.js.map

/***/ })

}]);