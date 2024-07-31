"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_formatter_ScriptFormatter_test_ts"],{

/***/ "./src/models/formatter/ScriptFormatter.test.ts":
/*!******************************************************!*\
  !*** ./src/models/formatter/ScriptFormatter.test.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _formatter_formatter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../formatter/formatter.js */ "./src/models/formatter/formatter.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('ScriptFormatter', () => {
    const indentString = '  ';
    it('can format a HTML document', async () => {
        const { formattedContent } = await _formatter_formatter_js__WEBPACK_IMPORTED_MODULE_1__.ScriptFormatter.format(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeType('text/html'), 'text/html', '<html><head></head><body></body></html>', indentString);
        assert.strictEqual(formattedContent, `<html>
  <head></head>
  <body></body>
</html>
`);
    });
    it('can map original locations to formatted locations for HTML documents', async () => {
        const { formattedMapping } = await _formatter_formatter_js__WEBPACK_IMPORTED_MODULE_1__.ScriptFormatter.format(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeType('text/html'), 'text/html', '<html><head></head><body></body></html>', indentString);
        // The start of <head>
        assert.deepEqual(formattedMapping.originalToFormatted(0, 6), [1, 2]);
    });
    it('can map original lines to formatted locations for HTML documents', async () => {
        const { formattedMapping } = await _formatter_formatter_js__WEBPACK_IMPORTED_MODULE_1__.ScriptFormatter.format(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeType('text/html'), 'text/html', `<html><head>
</head><body></body></html>`, indentString);
        // The start of </head>
        assert.deepEqual(formattedMapping.originalToFormatted(1), [1, 8]);
    });
    it('can map formatted locations to original locations for HTML documents', async () => {
        const { formattedMapping } = await _formatter_formatter_js__WEBPACK_IMPORTED_MODULE_1__.ScriptFormatter.format(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeType('text/html'), 'text/html', '<html><head></head><body></body></html>', indentString);
        // The start of <head>
        assert.deepEqual(formattedMapping.formattedToOriginal(1, 2), [0, 6]);
    });
    it('can map formatted lines to original locations for HTML documents', async () => {
        const { formattedMapping } = await _formatter_formatter_js__WEBPACK_IMPORTED_MODULE_1__.ScriptFormatter.format(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeType('text/html'), 'text/html', '<html><head></head><body></body></html>', indentString);
        // The start of <head>
        assert.deepEqual(formattedMapping.formattedToOriginal(1), [0, 6]);
    });
    describe('for documents that cant be formatted', () => {
        // Technically we can format SVG files, but for this test we pretend its
        // mimetype is an image, which we consider unformattable.
        const originalContent = `<svg>
  <rect x="10" y="-10" /></svg>`;
        const mimeType = 'image/svg';
        const resourceType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeType(mimeType);
        it('returns the original content', async () => {
            const { formattedContent } = await _formatter_formatter_js__WEBPACK_IMPORTED_MODULE_1__.ScriptFormatter.format(resourceType, mimeType, originalContent, indentString);
            assert.deepEqual(formattedContent, originalContent);
        });
        it('maps to the same locations from formatted locations', async () => {
            const { formattedMapping } = await _formatter_formatter_js__WEBPACK_IMPORTED_MODULE_1__.ScriptFormatter.format(resourceType, mimeType, originalContent, indentString);
            assert.deepEqual(formattedMapping.formattedToOriginal(1, 2), [1, 2]);
        });
        it('defaults column number to zero from formatted locations', async () => {
            const { formattedMapping } = await _formatter_formatter_js__WEBPACK_IMPORTED_MODULE_1__.ScriptFormatter.format(resourceType, mimeType, originalContent, indentString);
            assert.deepEqual(formattedMapping.formattedToOriginal(1), [1, 0]);
        });
        it('maps to the same locations from original locations', async () => {
            const { formattedMapping } = await _formatter_formatter_js__WEBPACK_IMPORTED_MODULE_1__.ScriptFormatter.format(resourceType, mimeType, originalContent, indentString);
            assert.deepEqual(formattedMapping.originalToFormatted(1, 4), [1, 4]);
        });
        it('defaults column number to zero from original locations', async () => {
            const { formattedMapping } = await _formatter_formatter_js__WEBPACK_IMPORTED_MODULE_1__.ScriptFormatter.format(resourceType, mimeType, originalContent, indentString);
            assert.deepEqual(formattedMapping.originalToFormatted(1), [1, 0]);
        });
    });
});


/***/ })

}]);