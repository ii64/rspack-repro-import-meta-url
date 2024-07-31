"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_legacy_SuggestBox_test_ts"],{

/***/ "./src/ui/legacy/SuggestBox.test.ts":
/*!******************************************!*\
  !*** ./src/ui/legacy/SuggestBox.test.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legacy.js */ "./src/ui/legacy/legacy.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


class MockSuggestBoxDelegate {
    constructor(element) {
        Object.defineProperty(this, "element", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: element
        });
        Object.defineProperty(this, "appliedSuggestions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "accceptedSuggestions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "lastAppliedSuggestion", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    applySuggestion(suggestion, isIntermediateSuggestion) {
        if (!suggestion) {
            throw new Error('All tests should pass a real suggestion to `applySuggestion`');
        }
        this.appliedSuggestions.push({ suggestion: suggestion.text, isIntermediateSuggestion });
        this.lastAppliedSuggestion = suggestion;
    }
    acceptSuggestion() {
        this.accceptedSuggestions.push(this.lastAppliedSuggestion.text);
    }
    ownerElement() {
        return this.element;
    }
}
const createKeyEvent = (key) => new KeyboardEvent('keydown', { bubbles: true, cancelable: true, key });
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithLocale)('SuggestBox', () => {
    let delegate;
    let div;
    let suggestBox;
    const anchorBox = new AnchorBox(50, 50, 400, 400);
    beforeEach(() => {
        div = document.createElement('div');
        delegate = new MockSuggestBoxDelegate(div);
        suggestBox = new _legacy_js__WEBPACK_IMPORTED_MODULE_1__.SuggestBox.SuggestBox(delegate);
        // Needed to render the `SuggestBox`.
        _legacy_js__WEBPACK_IMPORTED_MODULE_1__.GlassPane.GlassPane.setContainer(suggestBox.element);
    });
    afterEach(() => {
        suggestBox.hide();
        div.remove();
    });
    it('opens the controller element after updating suggestions', () => {
        suggestBox.updateSuggestions(anchorBox, [{ text: 'First' }, { text: 'Second' }], true, true, 'e');
        assert.strictEqual(div.getAttribute('aria-expanded'), 'true');
    });
    it('selects the first item when no priority is specified', () => {
        suggestBox.updateSuggestions(anchorBox, [{ text: 'First' }, { text: 'Hello' }, { text: 'The best suggestion' }], true, true, 'e');
        assert.deepStrictEqual(delegate.appliedSuggestions, [{ suggestion: 'First', isIntermediateSuggestion: true }]);
    });
    it('selects no item when "canShowForSingleItem" is false', () => {
        suggestBox.updateSuggestions(anchorBox, [{ text: 'First' }, { text: 'Hello', priority: 2 }, { text: 'The best suggestion', priority: 5 }], false, true, 'e');
        assert.deepStrictEqual(delegate.appliedSuggestions, []);
    });
    it('selects the highest priority item', () => {
        suggestBox.updateSuggestions(anchorBox, [{ text: 'First' }, { text: 'Hello', priority: 2 }, { text: 'The best suggestion', priority: 5 }], true, true, 'e');
        assert.deepStrictEqual(delegate.appliedSuggestions, [{ suggestion: 'The best suggestion', isIntermediateSuggestion: true }]);
    });
    it('allows arrow keys for selection', () => {
        suggestBox.updateSuggestions(anchorBox, [{ text: 'First' }, { text: 'Hello', priority: 2 }, { text: 'The best suggestion', priority: 5 }], true, true, 'e');
        suggestBox.keyPressed(createKeyEvent('ArrowUp'));
        suggestBox.keyPressed(createKeyEvent('ArrowUp'));
        suggestBox.keyPressed(createKeyEvent('ArrowUp'));
        suggestBox.keyPressed(createKeyEvent('ArrowDown'));
        suggestBox.keyPressed(createKeyEvent('ArrowDown'));
        assert.deepStrictEqual(delegate.appliedSuggestions, [
            { suggestion: 'The best suggestion', isIntermediateSuggestion: true },
            { suggestion: 'Hello', isIntermediateSuggestion: true },
            { suggestion: 'First', isIntermediateSuggestion: true },
            { suggestion: 'The best suggestion', isIntermediateSuggestion: true },
            { suggestion: 'First', isIntermediateSuggestion: true },
            { suggestion: 'Hello', isIntermediateSuggestion: true },
        ]);
    });
    it('allows using the "Enter" key to accept a suggestions', () => {
        suggestBox.updateSuggestions(anchorBox, [{ text: 'First' }, { text: 'Hello', priority: 2 }, { text: 'The best suggestion', priority: 5 }], true, true, 'e');
        suggestBox.keyPressed(createKeyEvent('Enter'));
        assert.deepStrictEqual(delegate.accceptedSuggestions, ['The best suggestion']);
    });
    it('closes the controller element after accepting a suggestion', () => {
        suggestBox.updateSuggestions(anchorBox, [{ text: 'First' }, { text: 'Hello', priority: 2 }, { text: 'The best suggestion', priority: 5 }], true, true, 'e');
        suggestBox.keyPressed(createKeyEvent('Enter'));
        assert.strictEqual(div.getAttribute('aria-expanded'), 'false');
    });
});


/***/ })

}]);