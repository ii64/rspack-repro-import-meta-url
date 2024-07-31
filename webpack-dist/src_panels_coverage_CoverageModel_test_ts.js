"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_coverage_CoverageModel_test_ts"],{

/***/ "./src/panels/coverage/CoverageModel.test.ts":
/*!***************************************************!*\
  !*** ./src/panels/coverage/CoverageModel.test.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coverage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coverage.js */ "./src/panels/coverage/coverage.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('CoverageModel', () => {
    describe('CoverageInfo', () => {
        describe('#rangesForExport', () => {
            it('omits ranges with count of zero', () => {
                const segments = [{ end: 10, count: 0, stamp: 100 }, { end: 20, count: 2, stamp: 100 }, { end: 30, count: 0, stamp: 100 }];
                const info = new _coverage_js__WEBPACK_IMPORTED_MODULE_0__.CoverageModel.CoverageInfo(null, 100, 10, 20, _coverage_js__WEBPACK_IMPORTED_MODULE_0__.CoverageModel.CoverageType.JavaScript, {});
                info.mergeCoverage(segments);
                const ranges = info.rangesForExport();
                assert.deepEqual(ranges, [{ start: 10, end: 20 }]);
            });
            it('merges consecutive ranges with different non-zero counts', () => {
                const segments = [{ end: 10, count: 0, stamp: 100 }, { end: 20, count: 2, stamp: 100 }, { end: 30, count: 1, stamp: 100 }];
                const info = new _coverage_js__WEBPACK_IMPORTED_MODULE_0__.CoverageModel.CoverageInfo(null, 100, 10, 20, _coverage_js__WEBPACK_IMPORTED_MODULE_0__.CoverageModel.CoverageType.JavaScript, {});
                info.mergeCoverage(segments);
                const ranges = info.rangesForExport();
                assert.deepEqual(ranges, [{ start: 10, end: 30 }]);
            });
            it('does not merge a range with a consecutive range with count zero', () => {
                const segments = [{ end: 10, count: 1, stamp: 100 }, { end: 30, count: 0, stamp: 100 }];
                const info = new _coverage_js__WEBPACK_IMPORTED_MODULE_0__.CoverageModel.CoverageInfo(null, 100, 10, 20, _coverage_js__WEBPACK_IMPORTED_MODULE_0__.CoverageModel.CoverageType.JavaScript, {});
                info.mergeCoverage(segments);
                const ranges = info.rangesForExport();
                assert.deepEqual(ranges, [{ start: 0, end: 10 }]);
            });
        });
    });
    describe('CoverageModel', () => {
        describe('mergeSegments', () => {
            const checkMerge = (a, b, expectedResult) => {
                const mergedAB = _coverage_js__WEBPACK_IMPORTED_MODULE_0__.CoverageModel.mergeSegments(a, b);
                assert.deepEqual(mergedAB, expectedResult);
                const mergedBA = _coverage_js__WEBPACK_IMPORTED_MODULE_0__.CoverageModel.mergeSegments(b, a);
                assert.deepEqual(mergedBA, expectedResult);
            };
            it('merges coverage segments with the same timestamp correctly', () => {
                checkMerge([], [], []);
                checkMerge([{ end: 10, count: 1, stamp: 100 }], [], [{ end: 10, count: 1, stamp: 100 }]);
                checkMerge([{ end: 10, count: 1, stamp: 100 }], [{ end: 10, count: 1, stamp: 100 }], [{ end: 10, count: 2, stamp: 100 }]);
                checkMerge([{ end: 10, count: 1, stamp: 100 }], [{ end: 20, count: 1, stamp: 100 }], [{ end: 10, count: 2, stamp: 100 }, { end: 20, count: 1, stamp: 100 }]);
                checkMerge([{ end: 10, count: 1, stamp: 100 }, { end: 20, count: 1, stamp: 100 }], [], [{ end: 10, count: 1, stamp: 100 }, { end: 20, count: 1, stamp: 100 }]);
                checkMerge([{ end: 30, count: 1, stamp: 100 }], [{ end: 10, count: 0, stamp: 100 }, { end: 20, count: 2, stamp: 100 }], [{ end: 10, count: 1, stamp: 100 }, { end: 20, count: 3, stamp: 100 }, { end: 30, count: 1, stamp: 100 }]);
                checkMerge([{ end: 30, count: 0, stamp: 100 }], [{ end: 10, count: 0, stamp: 100 }, { end: 20, count: 2, stamp: 100 }], [{ end: 10, count: 0, stamp: 100 }, { end: 20, count: 2, stamp: 100 }, { end: 30, count: 0, stamp: 100 }]);
            });
            it('merges coverage segments with the different timestamp correctly', () => {
                checkMerge([{ end: 10, count: 1, stamp: 100 }], [{ end: 10, count: 1, stamp: 200 }], [{ end: 10, count: 2, stamp: 100 }]);
                checkMerge([{ end: 10, count: 1, stamp: 100 }], [{ end: 20, count: 1, stamp: 200 }], [{ end: 10, count: 2, stamp: 100 }, { end: 20, count: 1, stamp: 200 }]);
                checkMerge([{ end: 10, count: 1, stamp: 100 }, { end: 20, count: 1, stamp: 200 }], [], [{ end: 10, count: 1, stamp: 100 }, { end: 20, count: 1, stamp: 200 }]);
                checkMerge([{ end: 30, count: 1, stamp: 100 }], [{ end: 10, count: 0, stamp: 100 }, { end: 20, count: 2, stamp: 200 }], [{ end: 10, count: 1, stamp: 100 }, { end: 20, count: 3, stamp: 100 }, { end: 30, count: 1, stamp: 100 }]);
            });
        });
    });
});


/***/ }),

/***/ "./src/panels/coverage/coverage.ts":
/*!*****************************************!*\
  !*** ./src/panels/coverage/coverage.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoverageDecorationManager: () => (/* reexport module object */ _CoverageDecorationManager_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   CoverageListView: () => (/* reexport module object */ _CoverageListView_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   CoverageModel: () => (/* reexport module object */ _CoverageModel_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   CoverageView: () => (/* reexport module object */ _CoverageView_js__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _CoverageModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CoverageModel.js */ "./src/panels/coverage/CoverageModel.ts");
/* harmony import */ var _CoverageListView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CoverageListView.js */ "./src/panels/coverage/CoverageListView.ts");
/* harmony import */ var _CoverageView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CoverageView.js */ "./src/panels/coverage/CoverageView.ts");
/* harmony import */ var _CoverageDecorationManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CoverageDecorationManager.js */ "./src/panels/coverage/CoverageDecorationManager.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.











/***/ })

}]);