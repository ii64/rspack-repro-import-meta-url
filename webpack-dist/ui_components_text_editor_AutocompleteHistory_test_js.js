"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_text_editor_AutocompleteHistory_test_js"],{

/***/ "./ui/components/text_editor/AutocompleteHistory.test.js":
/*!***************************************************************!*\
  !*** ./ui/components/text_editor/AutocompleteHistory.test.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _text_editor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text_editor.js */ "./ui/components/text_editor/text_editor.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('AutocompleteHistory', () => {
    let setting;
    let history;
    beforeEach(() => {
        setting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createFakeSetting)('history', []);
        history = new _text_editor_js__WEBPACK_IMPORTED_MODULE_1__.AutocompleteHistory.AutocompleteHistory(setting);
    });
    describe('pushHistoryItem', () => {
        it('stores the commited text in the setting', () => {
            history.pushHistoryItem('sample input');
            assert.deepEqual(setting.get(), ['sample input']);
        });
        it('ignores sub-sequent identical inputs', () => {
            history.pushHistoryItem('entry x');
            history.pushHistoryItem('entry x');
            assert.deepEqual(setting.get(), ['entry x']);
        });
        it('resets the history navigation back to the beginning', () => {
            history.pushHistoryItem('entry 1');
            history.pushHistoryItem('entry 2');
            history.previous('');
            history.previous('');
            // Even though the user navigated back in the history, they can still commit a different text
            history.pushHistoryItem('entry 3');
            assert.isUndefined(history.next());
            assert.strictEqual(history.previous(''), 'entry 3');
        });
    });
    describe('previous', () => {
        it('returns "undefined" for an empty history', () => {
            assert.isUndefined(history.previous(''));
        });
        it('moves backwards through history', () => {
            history.pushHistoryItem('entry 1');
            history.pushHistoryItem('entry 2');
            assert.strictEqual(history.previous(''), 'entry 2');
            assert.strictEqual(history.previous(''), 'entry 1');
            assert.isUndefined(history.previous(''));
        });
    });
    describe('next', () => {
        it('returns "undefined" for an empty history', () => {
            assert.isUndefined(history.next());
        });
        it('returns "undefined" when not navigating through the history', () => {
            history.pushHistoryItem('entry 1');
            history.pushHistoryItem('entry 2');
            assert.isUndefined(history.next());
        });
        it('moves forwards through history', () => {
            history.pushHistoryItem('entry 1');
            history.pushHistoryItem('entry 2');
            history.previous('');
            history.previous('');
            history.previous('');
            assert.strictEqual(history.next(), 'entry 1');
            assert.strictEqual(history.next(), 'entry 2');
        });
    });
    it('stores the "temporary input" on the first "previous" call with a non-empty history', () => {
        history.pushHistoryItem('entry 1');
        history.pushHistoryItem('entry 2');
        assert.strictEqual(history.previous('incomplete user inp'), 'entry 2');
        assert.strictEqual(history.next(), 'incomplete user inp');
    });
    it('does not write the temporary user input to the setting', () => {
        history.pushHistoryItem('entry 1');
        assert.strictEqual(history.previous('incomplete user inp'), 'entry 1');
        assert.deepEqual(setting.get(), ['entry 1']);
    });
    describe('matchingEntries', () => {
        it('returns the appropriate matches', () => {
            history.pushHistoryItem('x === 5');
            history.pushHistoryItem('y < 42');
            history.pushHistoryItem('x > 20');
            const matches = history.matchingEntries('x ');
            assert.deepEqual([...matches], ['x > 20', 'x === 5']);
        });
        it('respects the "limit" argument', () => {
            for (let i = 0; i < 20; ++i) {
                history.pushHistoryItem(`x === ${i}`);
            }
            const matches = history.matchingEntries('x ', 3);
            assert.deepEqual([...matches], ['x === 19', 'x === 18', 'x === 17']);
        });
    });
});
//# sourceMappingURL=AutocompleteHistory.test.js.map

/***/ })

}]);