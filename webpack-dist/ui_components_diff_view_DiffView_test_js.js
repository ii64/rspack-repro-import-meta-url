"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_diff_view_DiffView_test_js"],{

/***/ "./ui/components/diff_view/DiffView.test.js":
/*!**************************************************!*\
  !*** ./ui/components/diff_view/DiffView.test.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../third_party/diff/diff.js */ "./third_party/diff/diff.js");
/* harmony import */ var _diff_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./diff_view.js */ "./ui/components/diff_view/diff_view.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



function buildDiff(original, updated) {
    const diff = _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_1__.Diff.DiffWrapper.lineDiff(original.split('\n'), updated.split('\n'));
    const view = new _diff_view_js__WEBPACK_IMPORTED_MODULE_2__.DiffView.DiffView({ diff, mimeType: 'text/javascript' });
    return view.loaded.then(() => view.shadowRoot);
}
let cachedSimpleDiff = null;
const original = 'let x = `one\ntwo` /* with a\ncomment */\nreturn okay()';
const updated = 'let x = `one\nthree` // with a\n"comment"\nreturn okay()';
function simpleDiff() {
    if (!cachedSimpleDiff) {
        cachedSimpleDiff = buildDiff(original, updated);
    }
    return cachedSimpleDiff;
}
function text(elt) {
    if (elt instanceof Text) {
        return elt.nodeValue;
    }
    if (elt instanceof HTMLElement && !elt.classList.contains('diff-hidden-text')) {
        return Array.from(elt.childNodes).map(text).join('');
    }
    return '';
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithLocale)('DiffView', () => {
    it('renders the proper content', async () => {
        const output = await simpleDiff();
        const lines = Array.from(output.querySelectorAll('.diff-line-content'));
        assert.strictEqual(lines.length, 6);
        assert.strictEqual(lines.filter(l => !l.classList.contains('diff-line-addition')).map(text).join('\n'), original);
        assert.strictEqual(lines.filter(l => !l.classList.contains('diff-line-deletion')).map(text).join('\n'), updated);
    });
    it('renders line numbers', async () => {
        const output = await simpleDiff();
        const numbers = Array.from(output.querySelectorAll('.diff-line-number'));
        // Line numbers are rendered pairwise per line, with one number
        // omitted from inserted/deleted lines
        assert.strictEqual(numbers.map(text).join('-'), '1-1-2--3---2--3-4-4');
    });
    it('highlights code properly', async () => {
        const output = await simpleDiff();
        const lines = output.querySelectorAll('.diff-line-content');
        // Basic highlighting
        assert.isNotNull(lines[0].querySelector('.token-keyword'));
        // Accurate per-file highlighting
        // - lines[2] holds 'comment */', lines[4] holds '"comment"'.
        assert.isNotNull(lines[2].querySelector('.token-comment'));
        assert.isNotNull(lines[4].querySelector('.token-string'));
    });
    it('collapses long stretches of equal text', async () => {
        const original = 'boring\n'.repeat(100);
        const changed = 'interesting\n' + original.slice(0, 500) + '...' + original.slice(500);
        const view = await buildDiff(original, changed);
        assert.isTrue(view.querySelectorAll('.diff-line-content').length < 100);
        assert.isNotNull(view.querySelector('.diff-line-spacer'));
    });
});
//# sourceMappingURL=DiffView.test.js.map

/***/ }),

/***/ "./ui/components/diff_view/diff_view.js":
/*!**********************************************!*\
  !*** ./ui/components/diff_view/diff_view.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DiffView: () => (/* reexport module object */ _DiffView_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _DiffView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DiffView.js */ "./ui/components/diff_view/DiffView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//# sourceMappingURL=diff_view.js.map

/***/ })

}]);