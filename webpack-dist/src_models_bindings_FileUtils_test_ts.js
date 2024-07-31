"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_bindings_FileUtils_test_ts"],{

/***/ "./src/models/bindings/FileUtils.test.ts":
/*!***********************************************!*\
  !*** ./src/models/bindings/FileUtils.test.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bindings.js */ "./src/models/bindings/bindings.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


const ChunkedFileReader = _bindings_js__WEBPACK_IMPORTED_MODULE_1__.FileUtils.ChunkedFileReader;
const StringOutputStream = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.StringOutputStream.StringOutputStream;
describe('FileUtils', () => {
    describe('ChunkedFileReader', () => {
        it('re-assembles chunks including multibyte characters', async () => {
            const text = [
                'Латынь из моды вышла ныне:\n',
                'Так, если правду вам сказать,\n',
                'Он знал довольно по-латыне,\n',
                'Чтоб эпиграфы разбирать\n',
            ];
            const blob = new Blob(text, { type: 'text/plain' });
            // Most of the characters above will be encoded as 2 bytes, so make sure we use odd
            // chunk size to cause chunk boundaries sometimes to happen between chaacter bytes.
            const chunkSize = 5;
            let chunkCount = 0;
            const reader = new ChunkedFileReader(new File([blob], 'ru.txt'), chunkSize, () => ++chunkCount);
            const output = new StringOutputStream();
            const hasNoError = await reader.read(output);
            assert.strictEqual(hasNoError, true);
            assert.strictEqual(chunkCount, 41);
            assert.strictEqual(text.join(''), output.data(), 'Read text is different from written text');
        });
        it('can decompress gzipped data', async () => {
            async function getAsCompressedFile(text) {
                const blob = new Blob([text], { type: 'text/plain' });
                // https://github.com/wicg/compression/blob/main/explainer.md#deflate-compress-an-arraybuffer
                const cstream = blob.stream().pipeThrough(new CompressionStream('gzip'));
                const creader = cstream.getReader();
                const values = [];
                while (true) {
                    const { value, done } = await creader.read();
                    if (done) {
                        break;
                    }
                    values.push(value);
                }
                const cblob = new Blob(values, { type: 'application/gzip' });
                return cblob;
            }
            const expectedText = 'This text will get compressed and then decompressed!';
            const cblob = await getAsCompressedFile(expectedText);
            let chunkCount = 0;
            const chunkSize = 5;
            const output = new StringOutputStream();
            const compressedFile = new File([cblob], 'ru.txt.gz', { type: 'application/gzip' });
            const cfreader = new ChunkedFileReader(compressedFile, chunkSize, () => ++chunkCount);
            const hasNoError = await cfreader.read(output);
            assert.strictEqual(hasNoError, true);
            assert.strictEqual(expectedText, output.data(), 'Read text is different from written text');
        });
    });
});


/***/ })

}]);