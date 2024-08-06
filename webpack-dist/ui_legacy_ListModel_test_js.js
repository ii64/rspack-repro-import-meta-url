"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_ListModel_test_js"],{

/***/ "./ui/legacy/ListModel.test.js":
/*!*************************************!*\
  !*** ./ui/legacy/ListModel.test.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('ListModel', () => {
    it('can be instantiated correctly without a list of items', () => {
        const model = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.ListModel.ListModel();
        assert.deepEqual([...model], []);
    });
    it('can be instantiated correctly with a list of items', () => {
        const model = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.ListModel.ListModel([4, 5, 6]);
        assert.deepEqual([...model], [4, 5, 6]);
    });
    it('supports replacing all list elements', () => {
        const model = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.ListModel.ListModel();
        model.replaceAll([0, 1, 2]);
        assert.deepEqual([...model], [0, 1, 2]);
    });
    it('supports replacing a range of list elements', () => {
        const model = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.ListModel.ListModel([0, 1, 2]);
        model.replaceRange(0, 1, [5, 6, 7]);
        assert.deepEqual([...model], [5, 6, 7, 1, 2]);
    });
    it('supports inserting new list elements', () => {
        const model = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.ListModel.ListModel([5, 6, 7, 1, 2]);
        model.insert(model.length, 10);
        assert.deepEqual([...model], [5, 6, 7, 1, 2, 10]);
    });
    it('supports removing list elements', () => {
        const model = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.ListModel.ListModel([5, 6, 7, 1, 2, 10]);
        model.remove(model.length - 1);
        assert.deepEqual([...model], [5, 6, 7, 1, 2]);
    });
    it('supports removing list elements', () => {
        const model = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.ListModel.ListModel([5, 6, 7, 1, 2]);
        model.remove(4);
        assert.deepEqual([...model], [5, 6, 7, 1]);
    });
    it('supports replacing list elements in place', () => {
        const model = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.ListModel.ListModel([5, 6, 7, 1]);
        model.insert(1, 8);
        assert.deepEqual([...model], [5, 8, 6, 7, 1]);
    });
    it('supports replacing list elements in place', () => {
        const model = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.ListModel.ListModel([
            0, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 4, 5, 6, 27, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 28, 29,
        ]);
        model.replaceRange(0, 29, []);
        assert.deepEqual([...model], [29]);
    });
    it('fires an event when elements are replaced', () => {
        const model = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.ListModel.ListModel([0, 1, 2]);
        let eventData;
        model.addEventListener("ItemsReplaced" /* UI.ListModel.Events.ItemsReplaced */, (event) => {
            eventData = event.data;
        });
        model.replaceRange(0, 1, [5, 6, 7]);
        assert.deepEqual([...model], [5, 6, 7, 1, 2]);
        assert.deepEqual(eventData, {
            index: 0,
            removed: [0],
            inserted: 3,
            keepSelectedIndex: undefined,
        });
    });
});
//# sourceMappingURL=ListModel.test.js.map

/***/ })

}]);