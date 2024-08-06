"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_text_utils_ContentData_test_js"],{

/***/ "./models/text_utils/ContentData.test.js":
/*!***********************************************!*\
  !*** ./models/text_utils/ContentData.test.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _text_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text_utils.js */ "./models/text_utils/text_utils.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('ContentData', () => {
    const { ContentData } = _text_utils_js__WEBPACK_IMPORTED_MODULE_1__.ContentData;
    const { MimeType } = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.MimeType;
    it('throws an error when trying to encode text content into base64', () => {
        const contentData = new ContentData('a simple text', false, "text/html" /* MimeType.HTML */);
        assert.throws(() => contentData.base64);
    });
    it('decodes text based on the provided encoding', () => {
        const contentData = new ContentData('//48ACEARABPAEMAVABZAFAARQAgAGgAdABtAGwAPgAKADwAcAA+AEkA8QB0AOsAcgBuAOIAdABpAPQAbgDgAGwAaQB6AOYAdABpAPgAbgADJjTYBt88AC8AcAA+AAoA', true, "text/html" /* MimeType.HTML */, 'utf-16');
        assert.strictEqual(contentData.text, '<!DOCTYPE html>\n<p>Iñtërnâtiônàlizætiøn☃𝌆</p>\n');
    });
    it('throws an error  when trying to decode data not considered text content', () => {
        const contentData = new ContentData('AQIDBA==', true, 'application/wasm');
        assert.throws(() => contentData.text);
    });
    it('treats an empty string for charset as utf-8', () => {
        const contentData = new ContentData('PCFET0NUWVBFIGh0bWw+CjxwPknDsXTDq3Juw6J0acO0bsOgbGl6w6Z0acO4buKYg/CdjIY8L3A+Cg==', true, "text/html" /* MimeType.HTML */, '');
        assert.strictEqual(contentData.text, '<!DOCTYPE html>\n<p>Iñtërnâtiônàlizætiøn☃𝌆</p>\n');
    });
    it('falls back to default mime types if none is provided', () => {
        const textData = new ContentData('foo', false, '');
        assert.strictEqual(textData.mimeType, 'text/plain');
        const binaryData = new ContentData('AQIDBA==', true, '');
        assert.strictEqual(binaryData.mimeType, 'application/octet-stream');
    });
    it('converts to a data URL', () => {
        const textContent = new ContentData('a simple text', false, "text/html" /* MimeType.HTML */);
        assert.strictEqual(textContent.asDataUrl(), 'data:text/html;charset=utf-8,a%20simple%20text');
        const binaryData = new ContentData('AQIDBA==', true, 'application/wasm');
        assert.strictEqual(binaryData.asDataUrl(), 'data:application/wasm;base64,AQIDBA==');
        const textAsBase64Utf16 = new ContentData('//48ACEARABPAEMAVABZAFAARQAgAGgAdABtAGwAPgAKADwAcAA+AEkA8QB0AOsAcgBuAOIAdABpAPQAbgDgAGwAaQB6AOYAdABpAPgAbgADJjTYBt88AC8AcAA+AAoA', true, "text/html" /* MimeType.HTML */, 'utf-16');
        assert.strictEqual(textAsBase64Utf16.asDataUrl(), 'data:text/html;charset=utf-16;base64,//48ACEARABPAEMAVABZAFAARQAgAGgAdABtAGwAPgAKADwAcAA+AEkA8QB0AOsAcgBuAOIAdABpAPQAbgDgAGwAaQB6AOYAdABpAPgAbgADJjTYBt88AC8AcAA+AAoA');
    });
    it('does include utf-8 charset for already decoded text in the data URL', () => {
        const textWithCharsetContent = new ContentData('a simple text', false, "text/html" /* MimeType.HTML */, 'utf-16');
        assert.strictEqual(textWithCharsetContent.asDataUrl(), 'data:text/html;charset=utf-8,a%20simple%20text');
    });
    it('converts to DeferredContent', () => {
        const textContent = new ContentData('a simple text', false, "text/html" /* MimeType.HTML */);
        const deferredTextContent = textContent.asDeferedContent();
        assert.isFalse(deferredTextContent.isEncoded);
        assert.strictEqual(deferredTextContent.content, 'a simple text');
        const binaryData = new ContentData('AQIDBA==', true, 'application/wasm');
        const deferredBinaryData = binaryData.asDeferedContent();
        assert.isTrue(deferredBinaryData.isEncoded);
        assert.strictEqual(deferredBinaryData.content, 'AQIDBA==');
        const binaryTextData = new ContentData('PCFET0NUWVBFIGh0bWw+CjxwPknDsXTDq3Juw6J0acO0bsOgbGl6w6Z0acO4buKYg/CdjIY8L3A+Cg==', true, "text/html" /* MimeType.HTML */, 'utf-8');
        const deferredBinaryTextData = binaryTextData.asDeferedContent();
        assert.isFalse(deferredBinaryTextData.isEncoded);
        assert.strictEqual(deferredBinaryTextData.content, '<!DOCTYPE html>\n<p>Iñtërnâtiônàlizætiøn☃𝌆</p>\n');
        const unknownTextData = new ContentData('foobar', false, 'some/weird-text-mime');
        const deferredUnknownTextData = unknownTextData.asDeferedContent();
        assert.isFalse(deferredUnknownTextData.isEncoded);
        assert.strictEqual(deferredUnknownTextData.content, 'foobar');
    });
    it('converts ContentDataOrError to DeferredContent', () => {
        const textContent = new ContentData('a simple text', false, "text/html" /* MimeType.HTML */);
        const deferredTextContent = ContentData.asDeferredContent(textContent);
        assert.isFalse(deferredTextContent.isEncoded);
        assert.strictEqual(deferredTextContent.content, 'a simple text');
        const error = { error: 'something went wrong' };
        const deferedErrorContent = ContentData.asDeferredContent(error);
        // TypeScript somehow doesn't think DeferredContent.error is a thing.
        assert.property(deferedErrorContent, 'error');
        assert.propertyVal(deferedErrorContent, 'error', 'something went wrong');
    });
    describe('contentEqualTo', () => {
        it('ignores mime type', () => {
            const textContent1 = new ContentData('a simple text', false, "text/html" /* MimeType.HTML */);
            const textContent2 = new ContentData('a simple text', false, "text/css" /* MimeType.CSS */);
            assert.isTrue(textContent1.contentEqualTo(textContent2));
        });
        it('ignores charset', () => {
            // Charset is only used for decoding, so creating a text ContentData with non-utf8 is fine.
            const textContent1 = new ContentData('a simple text', false, "text/plain" /* MimeType.PLAIN */, 'utf-8');
            const textContent2 = new ContentData('a simple text', false, "text/plain" /* MimeType.PLAIN */, 'utf-16');
            assert.isTrue(textContent1.contentEqualTo(textContent2));
        });
        it('compares content accurately', () => {
            const textContent1 = new ContentData('a simple text', false, "text/plain" /* MimeType.PLAIN */);
            const textContent2 = new ContentData('another text', false, "text/plain" /* MimeType.PLAIN */);
            const textContent3 = new ContentData('another text', false, "text/plain" /* MimeType.PLAIN */);
            assert.isFalse(textContent1.contentEqualTo(textContent2));
            assert.isFalse(textContent1.contentEqualTo(textContent3));
            assert.isTrue(textContent2.contentEqualTo(textContent3));
            const binaryContent1 = new ContentData('AQIDBA==', true, 'application/wasm');
            const binaryContent2 = new ContentData('AGFzbQEAAAA=', true, 'application/wasm');
            const binaryContent3 = new ContentData('AQIDBA==', true, 'application/wasm');
            assert.isFalse(binaryContent1.contentEqualTo(binaryContent2));
            assert.isTrue(binaryContent1.contentEqualTo(binaryContent3));
            assert.isFalse(binaryContent2.contentEqualTo(binaryContent3));
        });
        it('compares content when one is text and the other is binary', () => {
            const content1 = new ContentData('PCFET0NUWVBFIGh0bWw+CjxwPknDsXTDq3Juw6J0acO0bsOgbGl6w6Z0acO4buKYg/CdjIY8L3A+Cg==', true, "text/html" /* MimeType.HTML */);
            const content2 = new ContentData('<!DOCTYPE html>\n<p>Iñtërnâtiônàlizætiøn☃𝌆</p>\n', false, "text/html" /* MimeType.HTML */);
            assert.isTrue(content1.contentEqualTo(content2));
        });
    });
});
//# sourceMappingURL=ContentData.test.js.map

/***/ })

}]);