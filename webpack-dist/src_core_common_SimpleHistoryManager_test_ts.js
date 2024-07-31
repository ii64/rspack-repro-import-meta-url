"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_core_common_SimpleHistoryManager_test_ts"],{

/***/ "./src/core/common/SimpleHistoryManager.test.ts":
/*!******************************************************!*\
  !*** ./src/core/common/SimpleHistoryManager.test.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/core/common/common.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const SimpleHistoryManager = _common_js__WEBPACK_IMPORTED_MODULE_0__.SimpleHistoryManager.SimpleHistoryManager;
class Entry {
    constructor(callback) {
        Object.defineProperty(this, "callback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.callback = callback;
    }
    valid() {
        return true;
    }
    reveal() {
        this.callback();
    }
}
describe('SimpleHistoryManager', () => {
    function setUpHistory(numberOfEntries, revealedElements) {
        const history = new SimpleHistoryManager(numberOfEntries);
        for (let i = 0; i < numberOfEntries; ++i) {
            history.push(new Entry(() => {
                revealedElements.push(i);
            }));
        }
        assert.isFalse(history.empty());
        return history;
    }
    it('correctly reflects if it can roll back', () => {
        const numberOfEntries = 10;
        const revealedElements = [];
        const history = setUpHistory(numberOfEntries, revealedElements);
        while (history.canRollback()) {
            history.rollback();
        }
        const expectedHistoryEntries = [8, 7, 6, 5, 4, 3, 2, 1, 0];
        assert.deepEqual(revealedElements, expectedHistoryEntries);
    });
    it('correctly reflects if it can roll over', () => {
        const numberOfEntries = 10;
        const revealedElements = [];
        const history = setUpHistory(numberOfEntries, revealedElements);
        for (let i = 0; i < numberOfEntries / 2; ++i) {
            history.rollback();
        }
        while (history.canRollover()) {
            history.rollover();
        }
        const expectedHistoryEntries = [8, 7, 6, 5, 4, 5, 6, 7, 8, 9];
        assert.deepEqual(revealedElements, expectedHistoryEntries);
    });
});


/***/ })

}]);