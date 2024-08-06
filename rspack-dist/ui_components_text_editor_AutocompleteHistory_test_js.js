"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_text_editor_AutocompleteHistory_test_js"], {
"./ui/components/text_editor/AutocompleteHistory.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _text_editor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text_editor.js */ "./ui/components/text_editor/text_editor.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}


(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('AutocompleteHistory', function() {
    var setting;
    var history;
    beforeEach(function() {
        setting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createFakeSetting)('history', []);
        history = new _text_editor_js__WEBPACK_IMPORTED_MODULE_1__.AutocompleteHistory.AutocompleteHistory(setting);
    });
    describe('pushHistoryItem', function() {
        it('stores the commited text in the setting', function() {
            history.pushHistoryItem('sample input');
            assert.deepEqual(setting.get(), [
                'sample input'
            ]);
        });
        it('ignores sub-sequent identical inputs', function() {
            history.pushHistoryItem('entry x');
            history.pushHistoryItem('entry x');
            assert.deepEqual(setting.get(), [
                'entry x'
            ]);
        });
        it('resets the history navigation back to the beginning', function() {
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
    describe('previous', function() {
        it('returns "undefined" for an empty history', function() {
            assert.isUndefined(history.previous(''));
        });
        it('moves backwards through history', function() {
            history.pushHistoryItem('entry 1');
            history.pushHistoryItem('entry 2');
            assert.strictEqual(history.previous(''), 'entry 2');
            assert.strictEqual(history.previous(''), 'entry 1');
            assert.isUndefined(history.previous(''));
        });
    });
    describe('next', function() {
        it('returns "undefined" for an empty history', function() {
            assert.isUndefined(history.next());
        });
        it('returns "undefined" when not navigating through the history', function() {
            history.pushHistoryItem('entry 1');
            history.pushHistoryItem('entry 2');
            assert.isUndefined(history.next());
        });
        it('moves forwards through history', function() {
            history.pushHistoryItem('entry 1');
            history.pushHistoryItem('entry 2');
            history.previous('');
            history.previous('');
            history.previous('');
            assert.strictEqual(history.next(), 'entry 1');
            assert.strictEqual(history.next(), 'entry 2');
        });
    });
    it('stores the "temporary input" on the first "previous" call with a non-empty history', function() {
        history.pushHistoryItem('entry 1');
        history.pushHistoryItem('entry 2');
        assert.strictEqual(history.previous('incomplete user inp'), 'entry 2');
        assert.strictEqual(history.next(), 'incomplete user inp');
    });
    it('does not write the temporary user input to the setting', function() {
        history.pushHistoryItem('entry 1');
        assert.strictEqual(history.previous('incomplete user inp'), 'entry 1');
        assert.deepEqual(setting.get(), [
            'entry 1'
        ]);
    });
    describe('matchingEntries', function() {
        it('returns the appropriate matches', function() {
            history.pushHistoryItem('x === 5');
            history.pushHistoryItem('y < 42');
            history.pushHistoryItem('x > 20');
            var matches = history.matchingEntries('x ');
            assert.deepEqual(_to_consumable_array(matches), [
                'x > 20',
                'x === 5'
            ]);
        });
        it('respects the "limit" argument', function() {
            for(var i = 0; i < 20; ++i){
                history.pushHistoryItem("x === ".concat(i));
            }
            var matches = history.matchingEntries('x ', 3);
            assert.deepEqual(_to_consumable_array(matches), [
                'x === 19',
                'x === 18',
                'x === 17'
            ]);
        });
    });
}); //# sourceMappingURL=AutocompleteHistory.test.js.map


}),

}]);