"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["entrypoints_wasmparser_worker_WasmParserWorker_js"], {
"./entrypoints/wasmparser_worker/WasmParserWorker.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  dissambleWASM: function() { return dissambleWASM; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _third_party_wasmparser_wasmparser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../third_party/wasmparser/wasmparser.js */ "./third_party/wasmparser/wasmparser.js");
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
        var dataBuffer = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Base64.decode(params.content);
        var parser = new _third_party_wasmparser_wasmparser_js__WEBPACK_IMPORTED_MODULE_1__.WasmParser.BinaryReader();
        parser.setData(dataBuffer, 0, dataBuffer.byteLength);
        var nameGenerator = new _third_party_wasmparser_wasmparser_js__WEBPACK_IMPORTED_MODULE_1__.WasmDis.DevToolsNameGenerator();
        nameGenerator.read(parser);
        var data = new Uint8Array(dataBuffer);
        parser = new _third_party_wasmparser_wasmparser_js__WEBPACK_IMPORTED_MODULE_1__.WasmParser.BinaryReader();
        var dis = new _third_party_wasmparser_wasmparser_js__WEBPACK_IMPORTED_MODULE_1__.WasmDis.WasmDisassembler();
        dis.addOffsets = true;
        dis.exportMetadata = nameGenerator.getExportMetadata();
        dis.nameResolver = nameGenerator.getNameResolver();
        var lines = [];
        var offsets = [];
        var functionBodyOffsets = [];
        var chunkSize = 128 * 1024;
        var buffer = new Uint8Array(chunkSize);
        var pendingSize = 0;
        var offsetInModule = 0;
        for(var i = 0; i < data.length;){
            if (chunkSize > data.length - i) {
                chunkSize = data.length - i;
            }
            var bufferSize = pendingSize + chunkSize;
            if (buffer.byteLength < bufferSize) {
                var newBuffer = new Uint8Array(bufferSize);
                newBuffer.set(buffer);
                buffer = newBuffer;
            }
            while(pendingSize < bufferSize){
                buffer[pendingSize++] = data[i++];
            }
            parser.setData(buffer.buffer, 0, bufferSize, i === data.length);
            // The disassemble will attemp to fetch the data as much as possible.
            var finished = dis.disassembleChunk(parser, offsetInModule);
            var result = dis.getResult();
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = result.lines[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var line = _step.value;
                    lines.push(line);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                for(var _iterator1 = result.offsets[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                    var offset = _step1.value;
                    offsets.push(offset);
                }
            } catch (err) {
                _didIteratorError1 = true;
                _iteratorError1 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                        _iterator1.return();
                    }
                } finally{
                    if (_didIteratorError1) {
                        throw _iteratorError1;
                    }
                }
            }
            var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
            try {
                for(var _iterator2 = result.functionBodyOffsets[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                    var functionBodyOffset = _step2.value;
                    functionBodyOffsets.push(functionBodyOffset);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                        _iterator2.return();
                    }
                } finally{
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
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
            var pending = parser.data.subarray(parser.position, parser.length);
            pendingSize = pending.length;
            buffer.set(pending);
            offsetInModule += parser.position;
            var percentage = Math.floor(offsetInModule / data.length * 100);
            postMessage({
                event: 'progress',
                params: {
                    percentage: percentage
                }
            });
        }
        postMessage({
            event: 'progress',
            params: {
                percentage: 100
            }
        });
        postMessage({
            method: 'disassemble',
            result: {
                lines: lines,
                offsets: offsets,
                functionBodyOffsets: functionBodyOffsets
            }
        });
    } catch (error) {
        postMessage({
            method: 'disassemble',
            error: error
        });
    }
} //# sourceMappingURL=WasmParserWorker.js.map


}),
"./third_party/wasmparser/wasmparser.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WasmDis: function() { return /* reexport module object */ _package_dist_esm_WasmDis_js__WEBPACK_IMPORTED_MODULE_0__; },
  WasmParser: function() { return /* reexport module object */ _package_dist_esm_WasmParser_js__WEBPACK_IMPORTED_MODULE_1__; }
});
/* harmony import */var _package_dist_esm_WasmDis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package/dist/esm/WasmDis.js */ "./third_party/wasmparser/package/dist/esm/WasmDis.js");
/* harmony import */var _package_dist_esm_WasmParser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./package/dist/esm/WasmParser.js */ "./third_party/wasmparser/package/dist/esm/WasmParser.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


 //# sourceMappingURL=wasmparser.js.map


}),

}]);