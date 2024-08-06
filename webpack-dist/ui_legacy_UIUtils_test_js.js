"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_UIUtils_test_js"],{

/***/ "./ui/legacy/UIUtils.test.js":
/*!***********************************!*\
  !*** ./ui/legacy/UIUtils.test.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('UIUtils', () => {
    describe('addReferrerToURL', () => {
        it('correctly adds referrer info to URLs', () => {
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_0__.UIUtils.addReferrerToURL('https://www.domain.com/route'), 'https://www.domain.com/route?utm_source=devtools');
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_0__.UIUtils.addReferrerToURL('https://www.domain.com/route#anchor'), 'https://www.domain.com/route?utm_source=devtools#anchor');
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_0__.UIUtils.addReferrerToURL('https://www.domain.com/route?key=value'), 'https://www.domain.com/route?key=value&utm_source=devtools');
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_0__.UIUtils.addReferrerToURL('https://www.domain.com/route?key=value#anchor'), 'https://www.domain.com/route?key=value&utm_source=devtools#anchor');
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_0__.UIUtils.addReferrerToURL('https://www.domain.com/route?utm_source=devtools#anchor'), 'https://www.domain.com/route?utm_source=devtools#anchor');
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_0__.UIUtils.addReferrerToURL('https://www.domain.com/route?key=value&utm_source=devtools#anchor'), 'https://www.domain.com/route?key=value&utm_source=devtools#anchor');
        });
    });
    describe('addReferrerToURLIfNecessary', () => {
        it('correctly adds referrer for web.dev and developers.google.com', () => {
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_0__.UIUtils.addReferrerToURLIfNecessary('https://web.dev/route'), 'https://web.dev/route?utm_source=devtools');
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_0__.UIUtils.addReferrerToURLIfNecessary('https://developers.google.com/route#anchor'), 'https://developers.google.com/route?utm_source=devtools#anchor');
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_0__.UIUtils.addReferrerToURLIfNecessary('https://www.domain.com/web.dev/route'), 'https://www.domain.com/web.dev/route');
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_0__.UIUtils.addReferrerToURLIfNecessary('https://foo.developers.google.com/route#anchor'), 'https://foo.developers.google.com/route#anchor');
        });
    });
    describe('LongClickController', () => {
        it('does not invoke callback when disposed', () => {
            const el = document.createElement('div');
            const callback = sinon.spy();
            const controller = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.UIUtils.LongClickController(el, callback);
            // @ts-ignore
            const setTimeout = sinon.stub(window, 'setTimeout').callsFake(cb => cb());
            el.dispatchEvent(new PointerEvent('pointerdown'));
            assert.isTrue(callback.calledOnce);
            controller.dispose();
            el.dispatchEvent(new PointerEvent('pointerdown'));
            assert.isTrue(callback.calledOnce);
            setTimeout.restore();
        });
    });
    describe('measuredScrollbarWidth', () => {
        let style;
        before(() => {
            _legacy_js__WEBPACK_IMPORTED_MODULE_0__.UIUtils.resetMeasuredScrollbarWidthForTest();
        });
        after(() => {
            style.remove();
        });
        it('provides a default value', () => {
            const expectedDefaultWidth = 16;
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_0__.UIUtils.measuredScrollbarWidth(), expectedDefaultWidth);
        });
        it('calculates specific widths correctly', () => {
            const width = 20;
            // Enforce custom width on scrollbars to test.
            style = document.createElement('style');
            style.textContent = `::-webkit-scrollbar {
        appearance: none;
        width: ${width}px;
      }`;
            document.head.appendChild(style);
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_0__.UIUtils.measuredScrollbarWidth(document), width);
            // Remove the styles and try again to detect that cached values are used.
            style.remove();
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_0__.UIUtils.measuredScrollbarWidth(document), width);
        });
    });
    describe('createFileSelectorElement', () => {
        it('by default it accepts any file types', async () => {
            const callback = () => { };
            const inputElement = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.UIUtils.createFileSelectorElement(callback);
            assert.isNull(inputElement.getAttribute('accept'));
        });
        it('can set the accept attribute on the input', async () => {
            const callback = () => { };
            const inputElement = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.UIUtils.createFileSelectorElement(callback, '.json');
            assert.strictEqual(inputElement.getAttribute('accept'), '.json');
        });
    });
});
//# sourceMappingURL=UIUtils.test.js.map

/***/ })

}]);