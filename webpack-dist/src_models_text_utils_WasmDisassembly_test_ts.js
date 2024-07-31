"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_text_utils_WasmDisassembly_test_ts"],{

/***/ "./src/models/text_utils/WasmDisassembly.test.ts":
/*!*******************************************************!*\
  !*** ./src/models/text_utils/WasmDisassembly.test.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _text_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text_utils.js */ "./src/models/text_utils/text_utils.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const WasmDisassembly = _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.WasmDisassembly.WasmDisassembly;
describe('WasmDisassembly', () => {
    const LINES = ['A', 'B', 'C', 'D', 'E', 'F', 'G', ' H', 'I'];
    const BYTECODE_OFFSETS = [0, 10, 23, 32, 35, 37, 39, 40, 75];
    const FUNCTION_BODY_OFFSETS = [{ start: 35, end: 41 }];
    it('reports the correct line numbers', () => {
        const disassembly = new WasmDisassembly(LINES, BYTECODE_OFFSETS, FUNCTION_BODY_OFFSETS);
        assert.strictEqual(disassembly.lineNumbers, BYTECODE_OFFSETS.length);
    });
    it('maps line numbers to bytecode offsets correctly', () => {
        const disassembly = new WasmDisassembly(LINES, BYTECODE_OFFSETS, FUNCTION_BODY_OFFSETS);
        for (const [lineNumber, bytecodeOffset] of BYTECODE_OFFSETS.entries()) {
            assert.strictEqual(disassembly.lineNumberToBytecodeOffset(lineNumber), bytecodeOffset);
        }
    });
    it('maps bytecode offsets to line numbers correctly', () => {
        const disassembly = new WasmDisassembly(LINES, BYTECODE_OFFSETS, FUNCTION_BODY_OFFSETS);
        for (const [lineNumber, bytecodeOffset] of BYTECODE_OFFSETS.entries()) {
            assert.strictEqual(disassembly.bytecodeOffsetToLineNumber(bytecodeOffset), lineNumber);
        }
    });
    it('yields non-breakable line numbers correctly', () => {
        const disassembly = new WasmDisassembly(LINES, BYTECODE_OFFSETS, FUNCTION_BODY_OFFSETS);
        assert.deepEqual([...disassembly.nonBreakableLineNumbers()], [0, 1, 2, 3, 8]);
    });
    it('can be converted to a DeferredContent', () => {
        const disassembly = new WasmDisassembly(LINES, BYTECODE_OFFSETS, FUNCTION_BODY_OFFSETS);
        const content = disassembly.asDeferedContent();
        if ('wasmDisassemblyInfo' in content) {
            assert.strictEqual(content.wasmDisassemblyInfo, disassembly);
        }
        else {
            assert.fail('wasmDissasembly not set on DeferredContent');
        }
        assert.isEmpty(content.content);
        assert.isFalse(content.isEncoded);
    });
    it('produces the joined lines for the "text" property', () => {
        const disassembly = new WasmDisassembly(LINES, BYTECODE_OFFSETS, FUNCTION_BODY_OFFSETS);
        assert.strictEqual(disassembly.text, 'A\nB\nC\nD\nE\nF\nG\n H\nI');
    });
});


/***/ })

}]);