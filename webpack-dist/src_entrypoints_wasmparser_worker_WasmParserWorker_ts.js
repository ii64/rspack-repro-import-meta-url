"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_entrypoints_wasmparser_worker_WasmParserWorker_ts"],{

/***/ "./src/entrypoints/wasmparser_worker/WasmParserWorker.ts":
/*!***************************************************************!*\
  !*** ./src/entrypoints/wasmparser_worker/WasmParserWorker.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dissambleWASM: () => (/* binding */ dissambleWASM)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _third_party_wasmparser_wasmparser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../third_party/wasmparser/wasmparser.js */ "./src/third_party/wasmparser/wasmparser.ts");
/*
 * Copyright (C) 2020 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


function dissambleWASM(params, postMessage) {
    try {
        const dataBuffer = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Base64.decode(params.content);
        let parser = new _third_party_wasmparser_wasmparser_js__WEBPACK_IMPORTED_MODULE_1__.WasmParser.BinaryReader();
        parser.setData(dataBuffer, 0, dataBuffer.byteLength);
        const nameGenerator = new _third_party_wasmparser_wasmparser_js__WEBPACK_IMPORTED_MODULE_1__.WasmDis.DevToolsNameGenerator();
        nameGenerator.read(parser);
        const data = new Uint8Array(dataBuffer);
        parser = new _third_party_wasmparser_wasmparser_js__WEBPACK_IMPORTED_MODULE_1__.WasmParser.BinaryReader();
        const dis = new _third_party_wasmparser_wasmparser_js__WEBPACK_IMPORTED_MODULE_1__.WasmDis.WasmDisassembler();
        dis.addOffsets = true;
        dis.exportMetadata = nameGenerator.getExportMetadata();
        dis.nameResolver = nameGenerator.getNameResolver();
        const lines = [];
        const offsets = [];
        const functionBodyOffsets = [];
        let chunkSize = 128 * 1024;
        let buffer = new Uint8Array(chunkSize);
        let pendingSize = 0;
        let offsetInModule = 0;
        for (let i = 0; i < data.length;) {
            if (chunkSize > data.length - i) {
                chunkSize = data.length - i;
            }
            const bufferSize = pendingSize + chunkSize;
            if (buffer.byteLength < bufferSize) {
                const newBuffer = new Uint8Array(bufferSize);
                newBuffer.set(buffer);
                buffer = newBuffer;
            }
            while (pendingSize < bufferSize) {
                buffer[pendingSize++] = data[i++];
            }
            parser.setData(buffer.buffer, 0, bufferSize, i === data.length);
            // The disassemble will attemp to fetch the data as much as possible.
            const finished = dis.disassembleChunk(parser, offsetInModule);
            const result = dis.getResult();
            for (const line of result.lines) {
                lines.push(line);
            }
            for (const offset of result.offsets) {
                offsets.push(offset);
            }
            for (const functionBodyOffset of result.functionBodyOffsets) {
                functionBodyOffsets.push(functionBodyOffset);
            }
            if (finished) {
                break;
            }
            if (parser.position === 0) {
                // Parser did not consume anything, needs more data.
                pendingSize = bufferSize;
                continue;
            }
            // Shift the data to the beginning of the buffer.
            const pending = parser.data.subarray(parser.position, parser.length);
            pendingSize = pending.length;
            buffer.set(pending);
            offsetInModule += parser.position;
            const percentage = Math.floor((offsetInModule / data.length) * 100);
            postMessage({ event: 'progress', params: { percentage } });
        }
        postMessage({ event: 'progress', params: { percentage: 100 } });
        postMessage({ method: 'disassemble', result: { lines, offsets, functionBodyOffsets } });
    }
    catch (error) {
        postMessage({ method: 'disassemble', error });
    }
}


/***/ }),

/***/ "./src/third_party/wasmparser/wasmparser.ts":
/*!**************************************************!*\
  !*** ./src/third_party/wasmparser/wasmparser.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WasmDis: () => (/* reexport module object */ _package_dist_esm_WasmDis_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   WasmParser: () => (/* reexport module object */ _package_dist_esm_WasmParser_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _package_dist_esm_WasmDis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package/dist/esm/WasmDis.js */ "./src/third_party/wasmparser/package/dist/esm/WasmDis.js");
/* harmony import */ var _package_dist_esm_WasmParser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./package/dist/esm/WasmParser.js */ "./src/third_party/wasmparser/package/dist/esm/WasmParser.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





/***/ })

}]);