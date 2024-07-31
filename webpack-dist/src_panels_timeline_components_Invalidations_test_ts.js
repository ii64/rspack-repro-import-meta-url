"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_timeline_components_Invalidations_test_ts"],{

/***/ "./src/panels/timeline/components/Invalidations.test.ts":
/*!**************************************************************!*\
  !*** ./src/panels/timeline/components/Invalidations.test.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/trace/trace.js */ "./src/models/trace/trace.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components.js */ "./src/panels/timeline/components/components.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('TimelineComponents Invalidations', () => {
    it('processes and groups invalidations correctly', async function () {
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'style-invalidation-change-attribute.json.gz');
        const updateLayoutTreeEvent = traceData.Renderer.allTraceEntries.find(event => {
            return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isTraceEventUpdateLayoutTree(event) &&
                event.args.beginData?.stackTrace?.[0].functionName === 'testFuncs.changeAttributeAndDisplay';
        });
        if (!updateLayoutTreeEvent) {
            throw new Error('Could not find update layout tree event');
        }
        const invalidations = traceData.Invalidations.invalidationsForEvent.get(updateLayoutTreeEvent) ?? [];
        const { groupedByReason, backendNodeIds } = _components_js__WEBPACK_IMPORTED_MODULE_3__.DetailsView.generateInvalidationsList(invalidations);
        const reasons = Object.keys(groupedByReason);
        assert.deepEqual(reasons, [
            'PseudoClass:active',
            'Attribute (dir)',
            'Element has pending invalidation list',
        ]);
        // Map the backendNodeIds to numbers to avoid casting to Protocol.DOM.backendNodeId
        assert.deepEqual(Array.from(backendNodeIds).map(Number), [
            107,
            110,
            111,
        ]);
    });
});


/***/ })

}]);