"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_sdk_CSSContainerQuery_test_js"],{

/***/ "./core/sdk/CSSContainerQuery.test.js":
/*!********************************************!*\
  !*** ./core/sdk/CSSContainerQuery.test.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const { getPhysicalAxisFromQueryAxis, getQueryAxis, PhysicalAxis, QueryAxis } = _sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSContainerQuery;
describe('CSSContainerQuery', () => {
    describe('getQueryAxis', () => {
        it('gets the query axis of no containment correctly', () => {
            assert.strictEqual(getQueryAxis(''), "" /* QueryAxis.None */);
            assert.strictEqual(getQueryAxis('style layout'), "" /* QueryAxis.None */);
        });
        it('gets the query axis of an inline container query correctly', () => {
            assert.strictEqual(getQueryAxis('inline-size layout style'), "inline-size" /* QueryAxis.Inline */);
            assert.strictEqual(getQueryAxis('layout inline-size style inline-size'), "inline-size" /* QueryAxis.Inline */);
        });
        it('gets the query axis of a block container query correctly', () => {
            assert.strictEqual(getQueryAxis('block-size layout style'), "block-size" /* QueryAxis.Block */);
            assert.strictEqual(getQueryAxis('layout block-size style block-size'), "block-size" /* QueryAxis.Block */);
        });
        it('gets the query axis of inline-block container query correctly', () => {
            assert.strictEqual(getQueryAxis('inline-size layout style block-size'), "size" /* QueryAxis.Both */);
            assert.strictEqual(getQueryAxis('layout size style'), "size" /* QueryAxis.Both */);
            assert.strictEqual(getQueryAxis('size'), "size" /* QueryAxis.Both */);
        });
    });
    describe('getPhysicalAxisFromQueryAxis', () => {
        it('gets the physical axis of no containment correctly', () => {
            assert.strictEqual(getPhysicalAxisFromQueryAxis("" /* QueryAxis.None */, 'horizontal-tb'), "" /* PhysicalAxis.None */);
            assert.strictEqual(getPhysicalAxisFromQueryAxis("" /* QueryAxis.None */, 'vertical-lr'), "" /* PhysicalAxis.None */);
            assert.strictEqual(getPhysicalAxisFromQueryAxis("" /* QueryAxis.None */, 'vertical-rl'), "" /* PhysicalAxis.None */);
        });
        it('gets the physical axis of horizontal containment correctly', () => {
            assert.strictEqual(getPhysicalAxisFromQueryAxis("inline-size" /* QueryAxis.Inline */, 'horizontal-tb'), "Horizontal" /* PhysicalAxis.Horizontal */);
            assert.strictEqual(getPhysicalAxisFromQueryAxis("block-size" /* QueryAxis.Block */, 'vertical-lr'), "Horizontal" /* PhysicalAxis.Horizontal */);
            assert.strictEqual(getPhysicalAxisFromQueryAxis("block-size" /* QueryAxis.Block */, 'vertical-rl'), "Horizontal" /* PhysicalAxis.Horizontal */);
        });
        it('gets the physical axis of vertical containment correctly', () => {
            assert.strictEqual(getPhysicalAxisFromQueryAxis("block-size" /* QueryAxis.Block */, 'horizontal-tb'), "Vertical" /* PhysicalAxis.Vertical */);
            assert.strictEqual(getPhysicalAxisFromQueryAxis("inline-size" /* QueryAxis.Inline */, 'vertical-lr'), "Vertical" /* PhysicalAxis.Vertical */);
            assert.strictEqual(getPhysicalAxisFromQueryAxis("inline-size" /* QueryAxis.Inline */, 'vertical-rl'), "Vertical" /* PhysicalAxis.Vertical */);
        });
        it('gets the physical axis both-axes containment correctly', () => {
            assert.strictEqual(getPhysicalAxisFromQueryAxis("size" /* QueryAxis.Both */, 'horizontal-tb'), "Both" /* PhysicalAxis.Both */);
            assert.strictEqual(getPhysicalAxisFromQueryAxis("size" /* QueryAxis.Both */, 'vertical-lr'), "Both" /* PhysicalAxis.Both */);
            assert.strictEqual(getPhysicalAxisFromQueryAxis("size" /* QueryAxis.Both */, 'vertical-rl'), "Both" /* PhysicalAxis.Both */);
        });
    });
});
//# sourceMappingURL=CSSContainerQuery.test.js.map

/***/ })

}]);