"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_common_SegmentedRange_test_js"], {
"./core/common/SegmentedRange.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./core/common/common.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var Segment = _common_js__WEBPACK_IMPORTED_MODULE_0__.SegmentedRange.Segment;
var SegmentedRange = _common_js__WEBPACK_IMPORTED_MODULE_0__.SegmentedRange.SegmentedRange;
describe('Segment', function() {
    it('calculates intersections', function() {
        var segmentA = new Segment(1, 2, 'A');
        var segmentB = new Segment(1.5, 2.5, 'B');
        var segmentC = new Segment(3, 5, 'C');
        assert.isTrue(segmentA.intersects(segmentB));
        assert.isFalse(segmentA.intersects(segmentC));
    });
    it('throws for invalid segments', function() {
        assert.throws(function() {
            return new Segment(3, 2, 'V');
        });
    });
});
describe('SegmentedRange', function() {
    var mergeSegments = function mergeSegments(first, second) {
        var inOrder = first.end >= second.begin;
        var matchingData = first.data === second.data;
        return inOrder && matchingData ? first : null;
    };
    var segmentedRange;
    beforeEach(function() {
        segmentedRange = new SegmentedRange(mergeSegments);
    });
    it('handles single ranges', function() {
        var segment = new Segment(0, 1, 'A');
        segmentedRange.append(segment);
        assert.deepEqual(segmentedRange.segments(), [
            segment
        ]);
    });
    it('handles two adjacent ranges', function() {
        var segmentA = new Segment(1, 2, 'A');
        var segmentB = new Segment(2, 3, 'B');
        segmentedRange.append(segmentA);
        segmentedRange.append(segmentB);
        assert.deepEqual(segmentedRange.segments(), [
            segmentA,
            segmentB
        ]);
    });
    it('handles two overlapping mergeable ranges', function() {
        var segmentA = new Segment(1, 2, 'A');
        var segmentB = new Segment(1.5, 3, 'A');
        segmentedRange.append(segmentA);
        segmentedRange.append(segmentB);
        var expectedSegment = new Segment(1, 3, 'A');
        assert.deepEqual(segmentedRange.segments(), [
            expectedSegment
        ]);
    });
    it('handles multiple overlapping mergeable ranges', function() {
        var segmentA = new Segment(1, 2, 'A');
        var segmentB = new Segment(3, 5, 'A');
        var segmentC = new Segment(1.5, 3.5, 'A');
        segmentedRange.append(segmentA);
        segmentedRange.append(segmentB);
        segmentedRange.append(segmentC);
        var expectedSegment = new Segment(1, 5, 'A');
        assert.deepEqual(segmentedRange.segments(), [
            expectedSegment
        ]);
    });
    it('handles multiple overlapping non-mergeable ranges', function() {
        var segmentA = new Segment(1, 2, 'A');
        var segmentB = new Segment(3, 5, 'A');
        var segmentC = new Segment(1.5, 3.5, 'B');
        segmentedRange.append(segmentA);
        segmentedRange.append(segmentB);
        segmentedRange.append(segmentC);
        var expectedSegments = [
            new Segment(1, 1.5, 'A'),
            new Segment(1.5, 3.5, 'B'),
            new Segment(3.5, 5, 'A')
        ];
        assert.deepEqual(segmentedRange.segments(), expectedSegments);
    });
    it('handles two overlapping non-mergeable ranges', function() {
        var segmentA = new Segment(1, 2, 'A');
        var segmentB = new Segment(1.5, 3, 'B');
        segmentedRange.append(segmentA);
        segmentedRange.append(segmentB);
        var expectedSegments = [
            new Segment(1, 1.5, 'A'),
            new Segment(1.5, 3, 'B')
        ];
        assert.deepEqual(segmentedRange.segments(), expectedSegments);
    });
    it('handles nested, mergeable ranges', function() {
        var segmentA = new Segment(0, 4, 'A');
        var segmentB = new Segment(2, 3, 'A');
        segmentedRange.append(segmentA);
        segmentedRange.append(segmentB);
        var expectedSegment = new Segment(0, 4, 'A');
        assert.deepEqual(segmentedRange.segments(), [
            expectedSegment
        ]);
    });
    it('handles nested, non-mergeable ranges', function() {
        var segmentA = new Segment(0, 4, 'A');
        var segmentB = new Segment(2, 3, 'B');
        segmentedRange.append(segmentA);
        segmentedRange.append(segmentB);
        var expectedSegments = [
            new Segment(0, 2, 'A'),
            new Segment(2, 3, 'B'),
            new Segment(3, 4, 'A')
        ];
        assert.deepEqual(segmentedRange.segments(), expectedSegments);
    });
    it('handles out-of-order, mergeable ranges', function() {
        var segmentA = new Segment(0, 2, 'A');
        var segmentB = new Segment(3, 5, 'A');
        var segmentC = new Segment(2, 3, 'A');
        segmentedRange.append(segmentA);
        segmentedRange.append(segmentB);
        segmentedRange.append(segmentC);
        var expectedSegment = new Segment(0, 5, 'A');
        assert.deepEqual(segmentedRange.segments(), [
            expectedSegment
        ]);
    });
    it('handles out-of-order, non-mergeable ranges', function() {
        var segmentA = new Segment(0, 2, 'A');
        var segmentB = new Segment(3, 5, 'A');
        var segmentC = new Segment(2, 3, 'B');
        segmentedRange.append(segmentA);
        segmentedRange.append(segmentB);
        segmentedRange.append(segmentC);
        var expectedSegments = [
            new Segment(0, 2, 'A'),
            new Segment(2, 3, 'B'),
            new Segment(3, 5, 'A')
        ];
        assert.deepEqual(segmentedRange.segments(), expectedSegments);
    });
    it('handles one segment consuming many mergeable ranges', function() {
        var segmentA = new Segment(0, 1, 'A');
        var segmentB = new Segment(2, 3, 'A');
        var segmentC = new Segment(4, 5, 'A');
        var segmentD = new Segment(6, 7, 'A');
        // E merges A through D.
        var segmentE = new Segment(2, 6, 'A');
        segmentedRange.append(segmentA);
        segmentedRange.append(segmentB);
        segmentedRange.append(segmentC);
        segmentedRange.append(segmentD);
        segmentedRange.append(segmentE);
        var expectedSegments = [
            new Segment(0, 1, 'A'),
            new Segment(2, 7, 'A')
        ];
        assert.deepEqual(segmentedRange.segments(), expectedSegments);
    });
    it('handles one segment consuming many non-mergeable ranges', function() {
        var segmentA = new Segment(0, 1, 'A');
        var segmentB = new Segment(2, 3, 'A');
        var segmentC = new Segment(4, 5, 'A');
        var segmentD = new Segment(6, 7, 'A');
        // E merges A through D.
        var segmentE = new Segment(2, 6, 'B');
        segmentedRange.append(segmentA);
        segmentedRange.append(segmentB);
        segmentedRange.append(segmentC);
        segmentedRange.append(segmentD);
        segmentedRange.append(segmentE);
        var expectedSegments = [
            new Segment(0, 1, 'A'),
            new Segment(2, 6, 'B'),
            new Segment(6, 7, 'A')
        ];
        assert.deepEqual(segmentedRange.segments(), expectedSegments);
    });
}); //# sourceMappingURL=SegmentedRange.test.js.map


}),

}]);