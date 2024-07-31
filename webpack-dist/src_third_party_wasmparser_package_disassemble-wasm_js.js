(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_wasmparser_package_disassemble-wasm_js"],{

/***/ "./src/third_party/wasmparser/package/disassemble-wasm.js":
/*!****************************************************************!*\
  !*** ./src/third_party/wasmparser/package/disassemble-wasm.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

//#!/usr/bin/env node
/* Copyright 2016 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var wasmparser = __webpack_require__(/*! ./dist/cjs/WasmParser.js */ "./src/third_party/wasmparser/package/dist/cjs/WasmParser.js");
var wasmdis = __webpack_require__(/*! ./dist/cjs/WasmDis.js */ "./src/third_party/wasmparser/package/dist/cjs/WasmDis.js");
var fs = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var wasmPath = process.argv[2];
var data = new Uint8Array(fs.readFileSync(wasmPath));

var parser = new wasmparser.BinaryReader();
parser.setData(data.buffer, 0, data.length);
var dis = new wasmdis.WasmDisassembler();
console.log(dis.disassemble(parser));


/***/ })

}]);