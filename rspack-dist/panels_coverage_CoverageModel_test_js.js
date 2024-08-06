"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_coverage_CoverageModel_test_js"], {
"./panels/coverage/CoverageModel.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _coverage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coverage.js */ "./panels/coverage/coverage.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('CoverageModel', function() {
    describe('CoverageInfo', function() {
        describe('#rangesForExport', function() {
            it('omits ranges with count of zero', function() {
                var segments = [
                    {
                        end: 10,
                        count: 0,
                        stamp: 100
                    },
                    {
                        end: 20,
                        count: 2,
                        stamp: 100
                    },
                    {
                        end: 30,
                        count: 0,
                        stamp: 100
                    }
                ];
                var info = new _coverage_js__WEBPACK_IMPORTED_MODULE_0__.CoverageModel.CoverageInfo(null, 100, 10, 20, 2 /* Coverage.CoverageModel.CoverageType.JavaScript */ , {});
                info.mergeCoverage(segments);
                var ranges = info.rangesForExport();
                assert.deepEqual(ranges, [
                    {
                        start: 10,
                        end: 20
                    }
                ]);
            });
            it('merges consecutive ranges with different non-zero counts', function() {
                var segments = [
                    {
                        end: 10,
                        count: 0,
                        stamp: 100
                    },
                    {
                        end: 20,
                        count: 2,
                        stamp: 100
                    },
                    {
                        end: 30,
                        count: 1,
                        stamp: 100
                    }
                ];
                var info = new _coverage_js__WEBPACK_IMPORTED_MODULE_0__.CoverageModel.CoverageInfo(null, 100, 10, 20, 2 /* Coverage.CoverageModel.CoverageType.JavaScript */ , {});
                info.mergeCoverage(segments);
                var ranges = info.rangesForExport();
                assert.deepEqual(ranges, [
                    {
                        start: 10,
                        end: 30
                    }
                ]);
            });
            it('does not merge a range with a consecutive range with count zero', function() {
                var segments = [
                    {
                        end: 10,
                        count: 1,
                        stamp: 100
                    },
                    {
                        end: 30,
                        count: 0,
                        stamp: 100
                    }
                ];
                var info = new _coverage_js__WEBPACK_IMPORTED_MODULE_0__.CoverageModel.CoverageInfo(null, 100, 10, 20, 2 /* Coverage.CoverageModel.CoverageType.JavaScript */ , {});
                info.mergeCoverage(segments);
                var ranges = info.rangesForExport();
                assert.deepEqual(ranges, [
                    {
                        start: 0,
                        end: 10
                    }
                ]);
            });
        });
    });
    describe('CoverageModel', function() {
        describe('mergeSegments', function() {
            var checkMerge = function(a, b, expectedResult) {
                var mergedAB = _coverage_js__WEBPACK_IMPORTED_MODULE_0__.CoverageModel.mergeSegments(a, b);
                assert.deepEqual(mergedAB, expectedResult);
                var mergedBA = _coverage_js__WEBPACK_IMPORTED_MODULE_0__.CoverageModel.mergeSegments(b, a);
                assert.deepEqual(mergedBA, expectedResult);
            };
            it('merges coverage segments with the same timestamp correctly', function() {
                checkMerge([], [], []);
                checkMerge([
                    {
                        end: 10,
                        count: 1,
                        stamp: 100
                    }
                ], [], [
                    {
                        end: 10,
                        count: 1,
                        stamp: 100
                    }
                ]);
                checkMerge([
                    {
                        end: 10,
                        count: 1,
                        stamp: 100
                    }
                ], [
                    {
                        end: 10,
                        count: 1,
                        stamp: 100
                    }
                ], [
                    {
                        end: 10,
                        count: 2,
                        stamp: 100
                    }
                ]);
                checkMerge([
                    {
                        end: 10,
                        count: 1,
                        stamp: 100
                    }
                ], [
                    {
                        end: 20,
                        count: 1,
                        stamp: 100
                    }
                ], [
                    {
                        end: 10,
                        count: 2,
                        stamp: 100
                    },
                    {
                        end: 20,
                        count: 1,
                        stamp: 100
                    }
                ]);
                checkMerge([
                    {
                        end: 10,
                        count: 1,
                        stamp: 100
                    },
                    {
                        end: 20,
                        count: 1,
                        stamp: 100
                    }
                ], [], [
                    {
                        end: 10,
                        count: 1,
                        stamp: 100
                    },
                    {
                        end: 20,
                        count: 1,
                        stamp: 100
                    }
                ]);
                checkMerge([
                    {
                        end: 30,
                        count: 1,
                        stamp: 100
                    }
                ], [
                    {
                        end: 10,
                        count: 0,
                        stamp: 100
                    },
                    {
                        end: 20,
                        count: 2,
                        stamp: 100
                    }
                ], [
                    {
                        end: 10,
                        count: 1,
                        stamp: 100
                    },
                    {
                        end: 20,
                        count: 3,
                        stamp: 100
                    },
                    {
                        end: 30,
                        count: 1,
                        stamp: 100
                    }
                ]);
                checkMerge([
                    {
                        end: 30,
                        count: 0,
                        stamp: 100
                    }
                ], [
                    {
                        end: 10,
                        count: 0,
                        stamp: 100
                    },
                    {
                        end: 20,
                        count: 2,
                        stamp: 100
                    }
                ], [
                    {
                        end: 10,
                        count: 0,
                        stamp: 100
                    },
                    {
                        end: 20,
                        count: 2,
                        stamp: 100
                    },
                    {
                        end: 30,
                        count: 0,
                        stamp: 100
                    }
                ]);
            });
            it('merges coverage segments with the different timestamp correctly', function() {
                checkMerge([
                    {
                        end: 10,
                        count: 1,
                        stamp: 100
                    }
                ], [
                    {
                        end: 10,
                        count: 1,
                        stamp: 200
                    }
                ], [
                    {
                        end: 10,
                        count: 2,
                        stamp: 100
                    }
                ]);
                checkMerge([
                    {
                        end: 10,
                        count: 1,
                        stamp: 100
                    }
                ], [
                    {
                        end: 20,
                        count: 1,
                        stamp: 200
                    }
                ], [
                    {
                        end: 10,
                        count: 2,
                        stamp: 100
                    },
                    {
                        end: 20,
                        count: 1,
                        stamp: 200
                    }
                ]);
                checkMerge([
                    {
                        end: 10,
                        count: 1,
                        stamp: 100
                    },
                    {
                        end: 20,
                        count: 1,
                        stamp: 200
                    }
                ], [], [
                    {
                        end: 10,
                        count: 1,
                        stamp: 100
                    },
                    {
                        end: 20,
                        count: 1,
                        stamp: 200
                    }
                ]);
                checkMerge([
                    {
                        end: 30,
                        count: 1,
                        stamp: 100
                    }
                ], [
                    {
                        end: 10,
                        count: 0,
                        stamp: 100
                    },
                    {
                        end: 20,
                        count: 2,
                        stamp: 200
                    }
                ], [
                    {
                        end: 10,
                        count: 1,
                        stamp: 100
                    },
                    {
                        end: 20,
                        count: 3,
                        stamp: 100
                    },
                    {
                        end: 30,
                        count: 1,
                        stamp: 100
                    }
                ]);
            });
        });
    });
}); //# sourceMappingURL=CoverageModel.test.js.map


}),
"./panels/coverage/coverage.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CoverageDecorationManager: function() { return /* reexport module object */ _CoverageDecorationManager_js__WEBPACK_IMPORTED_MODULE_3__; },
  CoverageListView: function() { return /* reexport module object */ _CoverageListView_js__WEBPACK_IMPORTED_MODULE_1__; },
  CoverageModel: function() { return /* reexport module object */ _CoverageModel_js__WEBPACK_IMPORTED_MODULE_0__; },
  CoverageView: function() { return /* reexport module object */ _CoverageView_js__WEBPACK_IMPORTED_MODULE_2__; }
});
/* harmony import */var _CoverageModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CoverageModel.js */ "./panels/coverage/CoverageModel.js");
/* harmony import */var _CoverageListView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CoverageListView.js */ "./panels/coverage/CoverageListView.js");
/* harmony import */var _CoverageView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CoverageView.js */ "./panels/coverage/CoverageView.js");
/* harmony import */var _CoverageDecorationManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CoverageDecorationManager.js */ "./panels/coverage/CoverageDecorationManager.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








 //# sourceMappingURL=coverage.js.map


}),

}]);