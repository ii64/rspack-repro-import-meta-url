"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_common_Base64_test_js"],{

/***/ "./core/common/Base64.test.js":
/*!************************************!*\
  !*** ./core/common/Base64.test.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./core/common/common.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('Base64 decoder', () => {
    function decode(str) {
        const encoded = btoa(str);
        const decoded = _common_js__WEBPACK_IMPORTED_MODULE_0__.Base64.decode(encoded);
        const view = new DataView(decoded);
        for (let idx = 0; idx < str.length; idx++) {
            assert.strictEqual(view.getUint8(idx), str.charCodeAt(idx));
        }
    }
    it('decodes correctly with double padding', () => {
        decode('ABCDEFG'); // Double-equals padded: QUJDREVGRw==
    });
    it('decodes correctly with padding', () => {
        decode('ABCDE'); // Single-equals padded: QUJDREU=
    });
    it('decodes correctly without padding', () => {
        decode('ABCDEF'); // Unpadded: QUJDREVG
    });
});
describe('Base64 encoder', () => {
    it('encodes ArrayBuffers correctly', async () => {
        const buffer1 = new Uint8Array([0]);
        assert.strictEqual(await _common_js__WEBPACK_IMPORTED_MODULE_0__.Base64.encode(buffer1), 'AA==');
        const buffer2 = new Uint8Array([0, 1]);
        assert.strictEqual(await _common_js__WEBPACK_IMPORTED_MODULE_0__.Base64.encode(buffer2), 'AAE=');
        const buffer3 = new Uint8Array([0, 1, 2]);
        assert.strictEqual(await _common_js__WEBPACK_IMPORTED_MODULE_0__.Base64.encode(buffer3), 'AAEC');
    });
});
//# sourceMappingURL=Base64.test.js.map

/***/ })

}]);