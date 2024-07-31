"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_timeline_Breadcrumbs_test_ts"],{

/***/ "./src/panels/timeline/Breadcrumbs.test.ts":
/*!*************************************************!*\
  !*** ./src/panels/timeline/Breadcrumbs.test.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./src/models/trace/trace.ts");
/* harmony import */ var _services_trace_bounds_trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/trace_bounds/trace_bounds.js */ "./src/services/trace_bounds/trace_bounds.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/timeline/components/components.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



describe('Timeline breadcrumbs', () => {
    it('can create breadcrumbs', () => {
        const initialTraceWindow = {
            min: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(1),
            max: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10),
            range: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(9),
        };
        _services_trace_bounds_trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__.TraceBounds.BoundsManager.instance({ forceNew: true }).resetWithNewBounds(initialTraceWindow);
        const crumbs = new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.Breadcrumbs.Breadcrumbs(initialTraceWindow);
        const traceWindow1 = {
            min: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(3),
            max: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(9),
            range: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(6),
        };
        const traceWindow2 = {
            min: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(4),
            max: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(6),
            range: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(2),
        };
        crumbs.add(traceWindow1);
        crumbs.add(traceWindow2);
        const breadcrumb2 = {
            window: traceWindow2,
            child: null,
        };
        const breadcrumb1 = {
            window: traceWindow1,
            child: breadcrumb2,
        };
        const initialBreadcrumb = {
            window: initialTraceWindow,
            child: breadcrumb1,
        };
        assert.deepEqual(_components_components_js__WEBPACK_IMPORTED_MODULE_2__.Breadcrumbs.flattenBreadcrumbs(initialBreadcrumb), [initialBreadcrumb, breadcrumb1, breadcrumb2]);
        assert.deepEqual(crumbs.lastBreadcrumb, breadcrumb2);
    });
    it('can remove breadcrumbs', () => {
        const initialTraceWindow = {
            min: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(1),
            max: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10),
            range: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(9),
        };
        _services_trace_bounds_trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__.TraceBounds.BoundsManager.instance({ forceNew: true }).resetWithNewBounds(initialTraceWindow);
        const crumbs = new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.Breadcrumbs.Breadcrumbs(initialTraceWindow);
        const traceWindow1 = {
            min: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(3),
            max: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(9),
            range: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(6),
        };
        const traceWindow2 = {
            min: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(4),
            max: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(6),
            range: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(2),
        };
        crumbs.add(traceWindow1);
        crumbs.add(traceWindow2);
        const breadcrumb2 = {
            window: traceWindow2,
            child: null,
        };
        const breadcrumb1 = {
            window: traceWindow1,
            child: breadcrumb2,
        };
        const initialBreadcrumb = {
            window: initialTraceWindow,
            child: breadcrumb1,
        };
        assert.deepEqual(_components_components_js__WEBPACK_IMPORTED_MODULE_2__.Breadcrumbs.flattenBreadcrumbs(initialBreadcrumb), [initialBreadcrumb, breadcrumb1, breadcrumb2]);
        assert.deepEqual(crumbs.lastBreadcrumb, breadcrumb2);
        crumbs.setLastBreadcrumb(breadcrumb1);
        breadcrumb1.child = null;
        assert.deepEqual(_components_components_js__WEBPACK_IMPORTED_MODULE_2__.Breadcrumbs.flattenBreadcrumbs(initialBreadcrumb), [initialBreadcrumb, breadcrumb1]);
        assert.deepEqual(crumbs.lastBreadcrumb, breadcrumb1);
    });
    it('can not create a breadcrumb equal to the parent breadcrumb', () => {
        assert.throws(() => {
            const initialTraceWindow = {
                min: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(1),
                max: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10),
                range: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(9),
            };
            _services_trace_bounds_trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__.TraceBounds.BoundsManager.instance({ forceNew: true }).resetWithNewBounds(initialTraceWindow);
            const crumbs = new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.Breadcrumbs.Breadcrumbs(initialTraceWindow);
            const traceWindow1 = {
                min: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(1),
                max: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10),
                range: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(9),
            };
            crumbs.add(traceWindow1);
        }, 'Can not add a breadcrumb that is equal to or is outside of the parent breadcrumb TimeWindow');
    });
    it('can create breadcrumbs with equal start or end as the parent breadcrumb', () => {
        const initialTraceWindow = {
            min: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(1),
            max: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10),
            range: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(9),
        };
        _services_trace_bounds_trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__.TraceBounds.BoundsManager.instance({ forceNew: true }).resetWithNewBounds(initialTraceWindow);
        const crumbs = new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.Breadcrumbs.Breadcrumbs(initialTraceWindow);
        const traceWindow1 = {
            min: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(1),
            max: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(9),
            range: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(8),
        };
        const traceWindow2 = {
            min: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(3),
            max: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(9),
            range: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(6),
        };
        crumbs.add(traceWindow1);
        crumbs.add(traceWindow2);
        const breadcrumb2 = {
            window: traceWindow2,
            child: null,
        };
        const breadcrumb1 = {
            window: traceWindow1,
            child: breadcrumb2,
        };
        const initialBreadcrumb = {
            window: initialTraceWindow,
            child: breadcrumb1,
        };
        assert.deepEqual(_components_components_js__WEBPACK_IMPORTED_MODULE_2__.Breadcrumbs.flattenBreadcrumbs(initialBreadcrumb), [initialBreadcrumb, breadcrumb1, breadcrumb2]);
        assert.deepEqual(crumbs.lastBreadcrumb, breadcrumb2);
    });
    it('correctly sets the last breadrumb and trace bound window when a new initial breadcrumb is provided', () => {
        const initialTraceWindow = {
            min: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(1000),
            max: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10000),
            range: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(9000),
        };
        _services_trace_bounds_trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__.TraceBounds.BoundsManager.instance({ forceNew: true }).resetWithNewBounds(initialTraceWindow);
        const crumbs = new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.Breadcrumbs.Breadcrumbs(initialTraceWindow);
        const traceWindow1 = {
            min: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(1000),
            max: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(9000),
            range: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(8000),
        };
        const traceWindow2 = {
            min: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(3000),
            max: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(9000),
            range: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(6000),
        };
        const breadcrumb2 = {
            window: traceWindow2,
            child: null,
        };
        const breadcrumb1 = {
            window: traceWindow1,
            child: breadcrumb2,
        };
        const initialBreadcrumb = {
            window: initialTraceWindow,
            child: breadcrumb1,
        };
        crumbs.setInitialBreadcrumbFromLoadedModifications(initialBreadcrumb);
        assert.deepEqual(_components_components_js__WEBPACK_IMPORTED_MODULE_2__.Breadcrumbs.flattenBreadcrumbs(initialBreadcrumb), [initialBreadcrumb, breadcrumb1, breadcrumb2]);
        assert.deepEqual(crumbs.lastBreadcrumb, breadcrumb2);
        // Make sure the trace bounds were correctly set to the last breadcrumb bounds
        assert.deepEqual(_services_trace_bounds_trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__.TraceBounds.BoundsManager.instance().state()?.micro.minimapTraceBounds.min, 3000);
        assert.deepEqual(_services_trace_bounds_trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__.TraceBounds.BoundsManager.instance().state()?.micro.minimapTraceBounds.max, 9000);
        assert.deepEqual(_services_trace_bounds_trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__.TraceBounds.BoundsManager.instance().state()?.micro.minimapTraceBounds.range, 6000);
        // Make sure the TimelineVisibleWindow was correctly set to the last breadcrumb bounds
        assert.deepEqual(_services_trace_bounds_trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__.TraceBounds.BoundsManager.instance().state()?.micro.timelineTraceWindow.min, 3000);
        assert.deepEqual(_services_trace_bounds_trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__.TraceBounds.BoundsManager.instance().state()?.micro.timelineTraceWindow.max, 9000);
        assert.deepEqual(_services_trace_bounds_trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__.TraceBounds.BoundsManager.instance().state()?.micro.timelineTraceWindow.range, 6000);
    });
});


/***/ })

}]);