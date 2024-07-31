"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_wasmparser_package_src_WasmDis_ts"],{

/***/ "./src/third_party/wasmparser/package/src/WasmDis.ts":
/*!***********************************************************!*\
  !*** ./src/third_party/wasmparser/package/src/WasmDis.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultNameResolver: () => (/* binding */ DefaultNameResolver),
/* harmony export */   DevToolsNameGenerator: () => (/* binding */ DevToolsNameGenerator),
/* harmony export */   DevToolsNameResolver: () => (/* binding */ DevToolsNameResolver),
/* harmony export */   LabelMode: () => (/* binding */ LabelMode),
/* harmony export */   NameSectionReader: () => (/* binding */ NameSectionReader),
/* harmony export */   NumericNameResolver: () => (/* binding */ NumericNameResolver),
/* harmony export */   WasmDisassembler: () => (/* binding */ WasmDisassembler)
/* harmony export */ });
/* harmony import */ var _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WasmParser.js */ "./src/third_party/wasmparser/package/src/WasmParser.ts");
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

const NAME_SECTION_NAME = "name";
const INVALID_NAME_SYMBOLS_REGEX = /[^0-9A-Za-z!#$%&'*+.:<=>?@^_`|~\/\-]/;
const INVALID_NAME_SYMBOLS_REGEX_GLOBAL = new RegExp(INVALID_NAME_SYMBOLS_REGEX.source, "g");
function formatFloat32(n) {
    if (n === 0)
        return 1 / n < 0 ? "-0.0" : "0.0";
    if (isFinite(n))
        return n.toString();
    if (!isNaN(n))
        return n < 0 ? "-inf" : "inf";
    var view = new DataView(new ArrayBuffer(8));
    view.setFloat32(0, n, true);
    var data = view.getInt32(0, true);
    var payload = data & 0x7fffff;
    const canonicalBits = 4194304; // 0x800..0
    if (data > 0 && payload === canonicalBits)
        return "nan";
    // canonical NaN;
    else if (payload === canonicalBits)
        return "-nan";
    return (data < 0 ? "-" : "+") + "nan:0x" + payload.toString(16);
}
function formatFloat64(n) {
    if (n === 0)
        return 1 / n < 0 ? "-0.0" : "0.0";
    if (isFinite(n))
        return n.toString();
    if (!isNaN(n))
        return n < 0 ? "-inf" : "inf";
    var view = new DataView(new ArrayBuffer(8));
    view.setFloat64(0, n, true);
    var data1 = view.getUint32(0, true);
    var data2 = view.getInt32(4, true);
    var payload = data1 + (data2 & 0xfffff) * 4294967296;
    const canonicalBits = 524288 * 4294967296; // 0x800..0
    if (data2 > 0 && payload === canonicalBits)
        return "nan";
    // canonical NaN;
    else if (payload === canonicalBits)
        return "-nan";
    return (data2 < 0 ? "-" : "+") + "nan:0x" + payload.toString(16);
}
function formatI32Array(bytes, count) {
    var dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    var result = [];
    for (var i = 0; i < count; i++)
        result.push(`0x${formatHex(dv.getInt32(i << 2, true), 8)}`);
    return result.join(" ");
}
function formatI8Array(bytes, count) {
    var dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    var result = [];
    for (var i = 0; i < count; i++)
        result.push(`${dv.getInt8(i)}`);
    return result.join(" ");
}
function memoryAddressToString(address, code) {
    var defaultAlignFlags;
    switch (code) {
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.v128_load:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i16x8_load8x8_s:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i16x8_load8x8_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32x4_load16x4_s:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32x4_load16x4_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64x2_load32x2_s:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64x2_load32x2_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.v8x16_load_splat:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.v16x8_load_splat:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.v32x4_load_splat:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.v64x2_load_splat:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.v128_store:
            defaultAlignFlags = 4;
            break;
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_load:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_store:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.f64_load:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.f64_store:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_wait:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_load:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_store:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw_add:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw_sub:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw_and:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw_or:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw_xor:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw_xchg:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw_cmpxchg:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.v128_load64_zero:
            defaultAlignFlags = 3;
            break;
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_load:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_load32_s:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_load32_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_store:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_store32:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.f32_load:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.f32_store:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.atomic_notify:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_wait:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_load:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_load32_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_store:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_store32:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw_add:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw32_add_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw_sub:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw32_sub_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw_and:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw32_and_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw_or:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw32_or_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw_xor:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw32_xor_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw_xchg:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw32_xchg_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw_cmpxchg:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw32_cmpxchg_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.v128_load32_zero:
            defaultAlignFlags = 2;
            break;
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_load16_s:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_load16_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_load16_s:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_load16_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_store16:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_store16:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_load16_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_load16_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_store16:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_store16:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw16_add_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw16_add_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw16_sub_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw16_sub_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw16_and_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw16_and_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw16_or_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw16_or_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw16_xor_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw16_xor_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw16_xchg_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw16_xchg_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw16_cmpxchg_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw16_cmpxchg_u:
            defaultAlignFlags = 1;
            break;
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_load8_s:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_load8_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_load8_s:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_load8_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_store8:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_store8:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_load8_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_load8_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_store8:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_store8:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw8_add_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw8_add_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw8_sub_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw8_sub_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw8_and_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw8_and_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw8_or_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw8_or_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw8_xor_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw8_xor_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw8_xchg_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw8_xchg_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw8_cmpxchg_u:
        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw8_cmpxchg_u:
            defaultAlignFlags = 0;
            break;
    }
    if (address.flags == defaultAlignFlags)
        // hide default flags
        return !address.offset ? null : `offset=${address.offset}`;
    if (!address.offset)
        // hide default offset
        return `align=${1 << address.flags}`;
    return `offset=${address.offset | 0} align=${1 << address.flags}`;
}
function limitsToString(limits) {
    return (limits.initial + (limits.maximum !== undefined ? " " + limits.maximum : ""));
}
var paddingCache = ["0", "00", "000"];
function formatHex(n, width) {
    var s = (n >>> 0).toString(16).toUpperCase();
    if (width === undefined || s.length >= width)
        return s;
    var paddingIndex = width - s.length - 1;
    while (paddingIndex >= paddingCache.length)
        paddingCache.push(paddingCache[paddingCache.length - 1] + "0");
    return paddingCache[paddingIndex] + s;
}
const IndentIncrement = "  ";
function isValidName(name) {
    return !INVALID_NAME_SYMBOLS_REGEX.test(name);
}
class DefaultNameResolver {
    getTypeName(index, isRef) {
        return "$type" + index;
    }
    getTableName(index, isRef) {
        return "$table" + index;
    }
    getMemoryName(index, isRef) {
        return "$memory" + index;
    }
    getGlobalName(index, isRef) {
        return "$global" + index;
    }
    getElementName(index, isRef) {
        return `$elem${index}`;
    }
    getEventName(index, isRef) {
        return `$event${index}`;
    }
    getFunctionName(index, isImport, isRef) {
        return (isImport ? "$import" : "$func") + index;
    }
    getVariableName(funcIndex, index, isRef) {
        return "$var" + index;
    }
    getFieldName(typeIndex, index, isRef) {
        return "$field" + index;
    }
    getLabel(index) {
        return "$label" + index;
    }
}
const EMPTY_STRING_ARRAY = [];
class DevToolsExportMetadata {
    constructor(functionExportNames, globalExportNames, memoryExportNames, tableExportNames, eventExportNames) {
        Object.defineProperty(this, "_functionExportNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_globalExportNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_memoryExportNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_tableExportNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_eventExportNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._functionExportNames = functionExportNames;
        this._globalExportNames = globalExportNames;
        this._memoryExportNames = memoryExportNames;
        this._tableExportNames = tableExportNames;
        this._eventExportNames = eventExportNames;
    }
    getFunctionExportNames(index) {
        return this._functionExportNames[index] ?? EMPTY_STRING_ARRAY;
    }
    getGlobalExportNames(index) {
        return this._globalExportNames[index] ?? EMPTY_STRING_ARRAY;
    }
    getMemoryExportNames(index) {
        return this._memoryExportNames[index] ?? EMPTY_STRING_ARRAY;
    }
    getTableExportNames(index) {
        return this._tableExportNames[index] ?? EMPTY_STRING_ARRAY;
    }
    getEventExportNames(index) {
        return this._eventExportNames[index] ?? EMPTY_STRING_ARRAY;
    }
}
class NumericNameResolver {
    getTypeName(index, isRef) {
        return isRef ? "" + index : `(;${index};)`;
    }
    getTableName(index, isRef) {
        return isRef ? "" + index : `(;${index};)`;
    }
    getMemoryName(index, isRef) {
        return isRef ? "" + index : `(;${index};)`;
    }
    getGlobalName(index, isRef) {
        return isRef ? "" + index : `(;${index};)`;
    }
    getElementName(index, isRef) {
        return isRef ? "" + index : `(;${index};)`;
    }
    getEventName(index, isRef) {
        return isRef ? "" + index : `(;${index};)`;
    }
    getFunctionName(index, isImport, isRef) {
        return isRef ? "" + index : `(;${index};)`;
    }
    getVariableName(funcIndex, index, isRef) {
        return isRef ? "" + index : `(;${index};)`;
    }
    getFieldName(typeIndex, index, isRef) {
        return isRef ? "" : index + `(;${index};)`;
    }
    getLabel(index) {
        return null;
    }
}
var LabelMode;
(function (LabelMode) {
    LabelMode[LabelMode["Depth"] = 0] = "Depth";
    LabelMode[LabelMode["WhenUsed"] = 1] = "WhenUsed";
    LabelMode[LabelMode["Always"] = 2] = "Always";
})(LabelMode || (LabelMode = {}));
class WasmDisassembler {
    constructor() {
        Object.defineProperty(this, "_lines", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_offsets", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_buffer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_types", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_funcIndex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_funcTypes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_importCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_globalCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_memoryCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_eventCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_tableCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_elementCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_expression", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_backrefLabels", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_labelIndex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_indent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_indentLevel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_addOffsets", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_skipTypes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        Object.defineProperty(this, "_done", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_currentPosition", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_nameResolver", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_exportMetadata", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "_labelMode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_functionBodyOffsets", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_currentFunctionBodyOffset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_currentSectionId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_logFirstInstruction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._lines = [];
        this._offsets = [];
        this._buffer = "";
        this._indent = null;
        this._indentLevel = 0;
        this._addOffsets = false;
        this._done = false;
        this._currentPosition = 0;
        this._nameResolver = new DefaultNameResolver();
        this._labelMode = LabelMode.WhenUsed;
        this._functionBodyOffsets = [];
        this._currentFunctionBodyOffset = 0;
        this._currentSectionId = _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.SectionCode.Unknown;
        this._logFirstInstruction = false;
        this._reset();
    }
    _reset() {
        this._types = [];
        this._funcIndex = 0;
        this._funcTypes = [];
        this._importCount = 0;
        this._globalCount = 0;
        this._memoryCount = 0;
        this._eventCount = 0;
        this._tableCount = 0;
        this._elementCount = 0;
        this._expression = [];
        this._backrefLabels = null;
        this._labelIndex = 0;
    }
    get addOffsets() {
        return this._addOffsets;
    }
    set addOffsets(value) {
        if (this._currentPosition)
            throw new Error("Cannot switch addOffsets during processing.");
        this._addOffsets = value;
    }
    get skipTypes() {
        return this._skipTypes;
    }
    set skipTypes(skipTypes) {
        if (this._currentPosition)
            throw new Error("Cannot switch skipTypes during processing.");
        this._skipTypes = skipTypes;
    }
    get labelMode() {
        return this._labelMode;
    }
    set labelMode(value) {
        if (this._currentPosition)
            throw new Error("Cannot switch labelMode during processing.");
        this._labelMode = value;
    }
    get exportMetadata() {
        return this._exportMetadata;
    }
    set exportMetadata(exportMetadata) {
        if (this._currentPosition)
            throw new Error("Cannot switch exportMetadata during processing.");
        this._exportMetadata = exportMetadata;
    }
    get nameResolver() {
        return this._nameResolver;
    }
    set nameResolver(resolver) {
        if (this._currentPosition)
            throw new Error("Cannot switch nameResolver during processing.");
        this._nameResolver = resolver;
    }
    appendBuffer(s) {
        this._buffer += s;
    }
    newLine() {
        if (this.addOffsets)
            this._offsets.push(this._currentPosition);
        this._lines.push(this._buffer);
        this._buffer = "";
    }
    logStartOfFunctionBodyOffset() {
        if (this.addOffsets) {
            this._currentFunctionBodyOffset = this._currentPosition;
        }
    }
    logEndOfFunctionBodyOffset() {
        if (this.addOffsets) {
            this._functionBodyOffsets.push({
                start: this._currentFunctionBodyOffset,
                end: this._currentPosition,
            });
        }
    }
    typeIndexToString(typeIndex) {
        if (typeIndex >= 0)
            return this._nameResolver.getTypeName(typeIndex, true);
        switch (typeIndex) {
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.TypeKind.funcref:
                return "func";
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.TypeKind.externref:
                return "extern";
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.TypeKind.anyref:
                return "any";
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.TypeKind.eqref:
                return "eq";
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.TypeKind.i31ref:
                return "i31";
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.TypeKind.dataref:
                return "data";
        }
    }
    typeToString(type) {
        switch (type.kind) {
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.TypeKind.i32:
                return "i32";
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.TypeKind.i64:
                return "i64";
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.TypeKind.f32:
                return "f32";
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.TypeKind.f64:
                return "f64";
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.TypeKind.v128:
                return "v128";
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.TypeKind.i8:
                return "i8";
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.TypeKind.i16:
                return "i16";
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.TypeKind.funcref:
                return "funcref";
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.TypeKind.externref:
                return "externref";
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.TypeKind.anyref:
                return "anyref";
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.TypeKind.eqref:
                return "eqref";
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.TypeKind.i31ref:
                return "i31ref";
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.TypeKind.dataref:
                return "dataref";
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.TypeKind.ref:
                return `(ref ${this.typeIndexToString(type.index)})`;
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.TypeKind.optref:
                return `(ref null ${this.typeIndexToString(type.index)})`;
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.TypeKind.rtt:
                return `(rtt ${this.typeIndexToString(type.index)})`;
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.TypeKind.rtt_d:
                return `(rtt ${type.depth} ${this.typeIndexToString(type.index)})`;
            default:
                throw new Error(`Unexpected type ${JSON.stringify(type)}`);
        }
    }
    maybeMut(type, mutability) {
        return mutability ? `(mut ${type})` : type;
    }
    globalTypeToString(type) {
        const typeStr = this.typeToString(type.contentType);
        return this.maybeMut(typeStr, !!type.mutability);
    }
    printFuncType(typeIndex) {
        var type = this._types[typeIndex];
        if (type.params.length > 0) {
            this.appendBuffer(" (param");
            for (var i = 0; i < type.params.length; i++) {
                this.appendBuffer(" ");
                this.appendBuffer(this.typeToString(type.params[i]));
            }
            this.appendBuffer(")");
        }
        if (type.returns.length > 0) {
            this.appendBuffer(" (result");
            for (var i = 0; i < type.returns.length; i++) {
                this.appendBuffer(" ");
                this.appendBuffer(this.typeToString(type.returns[i]));
            }
            this.appendBuffer(")");
        }
    }
    printStructType(typeIndex) {
        var type = this._types[typeIndex];
        if (type.fields.length === 0)
            return;
        for (var i = 0; i < type.fields.length; i++) {
            const fieldType = this.maybeMut(this.typeToString(type.fields[i]), type.mutabilities[i]);
            const fieldName = this._nameResolver.getFieldName(typeIndex, i, false);
            this.appendBuffer(` (field ${fieldName} ${fieldType})`);
        }
    }
    printArrayType(typeIndex) {
        var type = this._types[typeIndex];
        this.appendBuffer(" (field ");
        this.appendBuffer(this.maybeMut(this.typeToString(type.elementType), type.mutability));
    }
    printBlockType(type) {
        if (type.kind === _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.TypeKind.empty_block_type) {
            return;
        }
        if (type.kind === _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.TypeKind.unspecified) {
            return this.printFuncType(type.index);
        }
        this.appendBuffer(" (result ");
        this.appendBuffer(this.typeToString(type));
        this.appendBuffer(")");
    }
    printString(b) {
        this.appendBuffer('"');
        for (var i = 0; i < b.length; i++) {
            var byte = b[i];
            if (byte < 0x20 ||
                byte >= 0x7f ||
                byte == /* " */ 0x22 ||
                byte == /* \ */ 0x5c) {
                this.appendBuffer("\\" + (byte >> 4).toString(16) + (byte & 15).toString(16));
            }
            else {
                this.appendBuffer(String.fromCharCode(byte));
            }
        }
        this.appendBuffer('"');
    }
    printExpression(expression) {
        for (const operator of expression) {
            this.appendBuffer("(");
            this.printOperator(operator);
            this.appendBuffer(")");
        }
    }
    // extraDepthOffset is used by "delegate" instructions.
    useLabel(depth, extraDepthOffset = 0) {
        if (!this._backrefLabels) {
            return "" + depth;
        }
        var i = this._backrefLabels.length - depth - 1 - extraDepthOffset;
        if (i < 0) {
            return "" + depth;
        }
        var backrefLabel = this._backrefLabels[i];
        if (!backrefLabel.useLabel) {
            backrefLabel.useLabel = true;
            backrefLabel.label = this._nameResolver.getLabel(this._labelIndex);
            var line = this._lines[backrefLabel.line];
            this._lines[backrefLabel.line] =
                line.substring(0, backrefLabel.position) +
                    " " +
                    backrefLabel.label +
                    line.substring(backrefLabel.position);
            this._labelIndex++;
        }
        return backrefLabel.label || "" + depth;
    }
    printOperator(operator) {
        var code = operator.code;
        this.appendBuffer(_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCodeNames[code]);
        switch (code) {
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.block:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.loop:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.if:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.try:
                if (this._labelMode !== LabelMode.Depth) {
                    const backrefLabel = {
                        line: this._lines.length,
                        position: this._buffer.length,
                        useLabel: false,
                        label: null,
                    };
                    if (this._labelMode === LabelMode.Always) {
                        backrefLabel.useLabel = true;
                        backrefLabel.label = this._nameResolver.getLabel(this._labelIndex++);
                        if (backrefLabel.label) {
                            this.appendBuffer(" ");
                            this.appendBuffer(backrefLabel.label);
                        }
                    }
                    this._backrefLabels.push(backrefLabel);
                }
                this.printBlockType(operator.blockType);
                break;
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.end:
                if (this._labelMode === LabelMode.Depth) {
                    break;
                }
                const backrefLabel = this._backrefLabels.pop();
                if (backrefLabel.label) {
                    this.appendBuffer(" ");
                    this.appendBuffer(backrefLabel.label);
                }
                break;
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.br:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.br_if:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.br_on_null:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.br_on_non_null:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.br_on_cast:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.br_on_cast_fail:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.br_on_func:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.br_on_non_func:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.br_on_data:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.br_on_non_data:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.br_on_i31:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.br_on_non_i31:
                this.appendBuffer(" ");
                this.appendBuffer(this.useLabel(operator.brDepth));
                break;
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.br_on_cast_static:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.br_on_cast_static_fail: {
                const label = this.useLabel(operator.brDepth);
                const refType = this._nameResolver.getTypeName(operator.refType, true);
                this.appendBuffer(` ${label} ${refType}`);
                break;
            }
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.br_table:
                for (var i = 0; i < operator.brTable.length; i++) {
                    this.appendBuffer(" ");
                    this.appendBuffer(this.useLabel(operator.brTable[i]));
                }
                break;
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.rethrow:
                this.appendBuffer(" ");
                this.appendBuffer(this.useLabel(operator.relativeDepth));
                break;
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.delegate:
                this.appendBuffer(" ");
                this.appendBuffer(this.useLabel(operator.relativeDepth, 1));
                break;
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.catch:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.throw:
                var eventName = this._nameResolver.getEventName(operator.eventIndex, true);
                this.appendBuffer(` ${eventName}`);
                break;
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.ref_null:
                this.appendBuffer(" ");
                this.appendBuffer(this.typeIndexToString(operator.refType));
                break;
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.call:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.return_call:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.ref_func:
                var funcName = this._nameResolver.getFunctionName(operator.funcIndex, operator.funcIndex < this._importCount, true);
                this.appendBuffer(` ${funcName}`);
                break;
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.call_indirect:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.return_call_indirect:
                this.printFuncType(operator.typeIndex);
                break;
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.select_with_type: {
                const selectType = this.typeToString(operator.selectType);
                this.appendBuffer(` ${selectType}`);
                break;
            }
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.local_get:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.local_set:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.local_tee:
                var paramName = this._nameResolver.getVariableName(this._funcIndex, operator.localIndex, true);
                this.appendBuffer(` ${paramName}`);
                break;
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.global_get:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.global_set:
                var globalName = this._nameResolver.getGlobalName(operator.globalIndex, true);
                this.appendBuffer(` ${globalName}`);
                break;
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_load:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_load:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.f32_load:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.f64_load:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_load8_s:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_load8_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_load16_s:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_load16_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_load8_s:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_load8_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_load16_s:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_load16_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_load32_s:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_load32_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_store:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_store:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.f32_store:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.f64_store:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_store8:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_store16:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_store8:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_store16:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_store32:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.atomic_notify:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_wait:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_wait:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_load:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_load:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_load8_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_load16_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_load8_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_load16_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_load32_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_store:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_store:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_store8:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_store16:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_store8:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_store16:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_store32:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw_add:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw_add:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw8_add_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw16_add_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw8_add_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw16_add_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw32_add_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw_sub:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw_sub:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw8_sub_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw16_sub_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw8_sub_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw16_sub_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw32_sub_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw_and:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw_and:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw8_and_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw16_and_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw8_and_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw16_and_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw32_and_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw_or:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw_or:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw8_or_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw16_or_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw8_or_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw16_or_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw32_or_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw_xor:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw_xor:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw8_xor_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw16_xor_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw8_xor_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw16_xor_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw32_xor_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw_xchg:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw_xchg:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw8_xchg_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw16_xchg_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw8_xchg_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw16_xchg_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw32_xchg_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw_cmpxchg:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw_cmpxchg:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw8_cmpxchg_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_atomic_rmw16_cmpxchg_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw8_cmpxchg_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw16_cmpxchg_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_atomic_rmw32_cmpxchg_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.v128_load:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i16x8_load8x8_s:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i16x8_load8x8_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32x4_load16x4_s:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32x4_load16x4_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64x2_load32x2_s:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64x2_load32x2_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.v8x16_load_splat:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.v16x8_load_splat:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.v32x4_load_splat:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.v64x2_load_splat:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.v128_store:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.v128_load32_zero:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.v128_load64_zero:
                var memoryAddress = memoryAddressToString(operator.memoryAddress, operator.code);
                if (memoryAddress !== null) {
                    this.appendBuffer(" ");
                    this.appendBuffer(memoryAddress);
                }
                break;
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.current_memory:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.grow_memory:
                break;
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32_const:
                this.appendBuffer(` ${operator.literal.toString()}`);
                break;
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64_const:
                this.appendBuffer(` ${operator.literal.toString()}`);
                break;
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.f32_const:
                this.appendBuffer(` ${formatFloat32(operator.literal)}`);
                break;
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.f64_const:
                this.appendBuffer(` ${formatFloat64(operator.literal)}`);
                break;
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.v128_const:
                this.appendBuffer(` i32x4 ${formatI32Array(operator.literal, 4)}`);
                break;
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i8x16_shuffle:
                this.appendBuffer(` ${formatI8Array(operator.lines, 16)}`);
                break;
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i8x16_extract_lane_s:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i8x16_extract_lane_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i8x16_replace_lane:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i16x8_extract_lane_s:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i16x8_extract_lane_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i16x8_replace_lane:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32x4_extract_lane:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i32x4_replace_lane:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.f32x4_extract_lane:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.f32x4_replace_lane:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64x2_extract_lane:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.i64x2_replace_lane:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.f64x2_extract_lane:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.f64x2_replace_lane:
                this.appendBuffer(` ${operator.lineIndex}`);
                break;
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.memory_init:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.data_drop:
                this.appendBuffer(` ${operator.segmentIndex}`);
                break;
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.elem_drop:
                const elementName = this._nameResolver.getElementName(operator.segmentIndex, true);
                this.appendBuffer(` ${elementName}`);
                break;
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.table_set:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.table_get:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.table_fill: {
                const tableName = this._nameResolver.getTableName(operator.tableIndex, true);
                this.appendBuffer(` ${tableName}`);
                break;
            }
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.table_copy: {
                // Table index might be omitted and defaults to 0.
                if (operator.tableIndex !== 0 || operator.destinationIndex !== 0) {
                    const tableName = this._nameResolver.getTableName(operator.tableIndex, true);
                    const destinationName = this._nameResolver.getTableName(operator.destinationIndex, true);
                    this.appendBuffer(` ${destinationName} ${tableName}`);
                }
                break;
            }
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.table_init: {
                // Table index might be omitted and defaults to 0.
                if (operator.tableIndex !== 0) {
                    const tableName = this._nameResolver.getTableName(operator.tableIndex, true);
                    this.appendBuffer(` ${tableName}`);
                }
                const elementName = this._nameResolver.getElementName(operator.segmentIndex, true);
                this.appendBuffer(` ${elementName}`);
                break;
            }
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.struct_get:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.struct_get_s:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.struct_get_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.struct_set: {
                const refType = this._nameResolver.getTypeName(operator.refType, true);
                const fieldName = this._nameResolver.getFieldName(operator.refType, operator.fieldIndex, true);
                this.appendBuffer(` ${refType} ${fieldName}`);
                break;
            }
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.rtt_canon:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.rtt_sub:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.rtt_fresh_sub:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.ref_test_static:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.ref_cast_static:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.struct_new_default:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.struct_new_default_with_rtt:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.struct_new:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.struct_new_with_rtt:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.array_new_default:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.array_new_default_with_rtt:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.array_new:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.array_new_with_rtt:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.array_get:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.array_get_s:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.array_get_u:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.array_set:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.array_len: {
                const refType = this._nameResolver.getTypeName(operator.refType, true);
                this.appendBuffer(` ${refType}`);
                break;
            }
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.array_copy: {
                const dstType = this._nameResolver.getTypeName(operator.refType, true);
                const srcType = this._nameResolver.getTypeName(operator.srcType, true);
                this.appendBuffer(` ${dstType} ${srcType}`);
                break;
            }
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.array_init:
            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.array_init_static: {
                const refType = this._nameResolver.getTypeName(operator.refType, true);
                const length = operator.brDepth; // Overloaded field.
                this.appendBuffer(` ${refType} ${length}`);
                break;
            }
        }
    }
    printImportSource(info) {
        this.printString(info.module);
        this.appendBuffer(" ");
        this.printString(info.field);
    }
    increaseIndent() {
        this._indent += IndentIncrement;
        this._indentLevel++;
    }
    decreaseIndent() {
        this._indent = this._indent.slice(0, -IndentIncrement.length);
        this._indentLevel--;
    }
    disassemble(reader) {
        const done = this.disassembleChunk(reader);
        if (!done)
            return null;
        let lines = this._lines;
        if (this._addOffsets) {
            lines = lines.map((line, index) => {
                var position = formatHex(this._offsets[index], 4);
                return line + " ;; @" + position;
            });
        }
        lines.push(""); // we need '\n' after last line
        const result = lines.join("\n");
        this._lines.length = 0;
        this._offsets.length = 0;
        this._functionBodyOffsets.length = 0;
        return result;
    }
    getResult() {
        let linesReady = this._lines.length;
        if (this._backrefLabels && this._labelMode === LabelMode.WhenUsed) {
            this._backrefLabels.some((backrefLabel) => {
                if (backrefLabel.useLabel)
                    return false;
                linesReady = backrefLabel.line;
                return true;
            });
        }
        if (linesReady === 0) {
            return {
                lines: [],
                offsets: this._addOffsets ? [] : undefined,
                done: this._done,
                functionBodyOffsets: this._addOffsets ? [] : undefined,
            };
        }
        if (linesReady === this._lines.length) {
            const result = {
                lines: this._lines,
                offsets: this._addOffsets ? this._offsets : undefined,
                done: this._done,
                functionBodyOffsets: this._addOffsets
                    ? this._functionBodyOffsets
                    : undefined,
            };
            this._lines = [];
            if (this._addOffsets) {
                this._offsets = [];
                this._functionBodyOffsets = [];
            }
            return result;
        }
        const result = {
            lines: this._lines.splice(0, linesReady),
            offsets: this._addOffsets
                ? this._offsets.splice(0, linesReady)
                : undefined,
            done: false,
            functionBodyOffsets: this._addOffsets
                ? this._functionBodyOffsets
                : undefined,
        };
        if (this._backrefLabels) {
            this._backrefLabels.forEach((backrefLabel) => {
                backrefLabel.line -= linesReady;
            });
        }
        return result;
    }
    disassembleChunk(reader, offsetInModule = 0) {
        if (this._done)
            throw new Error("Invalid state: disassembly process was already finished.");
        while (true) {
            this._currentPosition = reader.position + offsetInModule;
            if (!reader.read())
                return false;
            switch (reader.state) {
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.END_WASM:
                    this.appendBuffer(")");
                    this.newLine();
                    this._reset();
                    if (!reader.hasMoreBytes()) {
                        this._done = true;
                        return true;
                    }
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.ERROR:
                    throw reader.error;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.BEGIN_WASM:
                    this.appendBuffer("(module");
                    this.newLine();
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.END_SECTION:
                    this._currentSectionId = _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.SectionCode.Unknown;
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.BEGIN_SECTION:
                    var sectionInfo = reader.result;
                    switch (sectionInfo.id) {
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.SectionCode.Type:
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.SectionCode.Import:
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.SectionCode.Export:
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.SectionCode.Global:
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.SectionCode.Function:
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.SectionCode.Start:
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.SectionCode.Code:
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.SectionCode.Memory:
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.SectionCode.Data:
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.SectionCode.Table:
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.SectionCode.Element:
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.SectionCode.Event:
                            this._currentSectionId = sectionInfo.id;
                            break; // reading known section;
                        default:
                            reader.skipSection();
                            break;
                    }
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.MEMORY_SECTION_ENTRY:
                    var memoryInfo = reader.result;
                    var memoryIndex = this._memoryCount++;
                    var memoryName = this._nameResolver.getMemoryName(memoryIndex, false);
                    this.appendBuffer(`  (memory ${memoryName}`);
                    if (this._exportMetadata !== null) {
                        for (const exportName of this._exportMetadata.getMemoryExportNames(memoryIndex)) {
                            this.appendBuffer(` (export ${JSON.stringify(exportName)})`);
                        }
                    }
                    this.appendBuffer(` ${limitsToString(memoryInfo.limits)}`);
                    if (memoryInfo.shared) {
                        this.appendBuffer(` shared`);
                    }
                    this.appendBuffer(")");
                    this.newLine();
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.EVENT_SECTION_ENTRY:
                    var eventInfo = reader.result;
                    var eventIndex = this._eventCount++;
                    var eventName = this._nameResolver.getEventName(eventIndex, false);
                    this.appendBuffer(`  (event ${eventName}`);
                    if (this._exportMetadata !== null) {
                        for (const exportName of this._exportMetadata.getEventExportNames(eventIndex)) {
                            this.appendBuffer(` (export ${JSON.stringify(exportName)})`);
                        }
                    }
                    this.printFuncType(eventInfo.typeIndex);
                    this.appendBuffer(")");
                    this.newLine();
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.TABLE_SECTION_ENTRY:
                    var tableInfo = reader.result;
                    var tableIndex = this._tableCount++;
                    var tableName = this._nameResolver.getTableName(tableIndex, false);
                    this.appendBuffer(`  (table ${tableName}`);
                    if (this._exportMetadata !== null) {
                        for (const exportName of this._exportMetadata.getTableExportNames(tableIndex)) {
                            this.appendBuffer(` (export ${JSON.stringify(exportName)})`);
                        }
                    }
                    this.appendBuffer(` ${limitsToString(tableInfo.limits)} ${this.typeToString(tableInfo.elementType)})`);
                    this.newLine();
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.EXPORT_SECTION_ENTRY:
                    // Skip printing exports here when we have export metadata
                    // which we can use to print export information inline.
                    if (this._exportMetadata === null) {
                        var exportInfo = reader.result;
                        this.appendBuffer("  (export ");
                        this.printString(exportInfo.field);
                        this.appendBuffer(" ");
                        switch (exportInfo.kind) {
                            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.ExternalKind.Function:
                                var funcName = this._nameResolver.getFunctionName(exportInfo.index, exportInfo.index < this._importCount, true);
                                this.appendBuffer(`(func ${funcName})`);
                                break;
                            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.ExternalKind.Table:
                                var tableName = this._nameResolver.getTableName(exportInfo.index, true);
                                this.appendBuffer(`(table ${tableName})`);
                                break;
                            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.ExternalKind.Memory:
                                var memoryName = this._nameResolver.getMemoryName(exportInfo.index, true);
                                this.appendBuffer(`(memory ${memoryName})`);
                                break;
                            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.ExternalKind.Global:
                                var globalName = this._nameResolver.getGlobalName(exportInfo.index, true);
                                this.appendBuffer(`(global ${globalName})`);
                                break;
                            case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.ExternalKind.Event:
                                var eventName = this._nameResolver.getEventName(exportInfo.index, true);
                                this.appendBuffer(`(event ${eventName})`);
                                break;
                            default:
                                throw new Error(`Unsupported export ${exportInfo.kind}`);
                        }
                        this.appendBuffer(")");
                        this.newLine();
                    }
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.IMPORT_SECTION_ENTRY:
                    var importInfo = reader.result;
                    switch (importInfo.kind) {
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.ExternalKind.Function:
                            this._importCount++;
                            var funcIndex = this._funcIndex++;
                            var funcName = this._nameResolver.getFunctionName(funcIndex, true, false);
                            this.appendBuffer(`  (func ${funcName}`);
                            if (this._exportMetadata !== null) {
                                for (const exportName of this._exportMetadata.getFunctionExportNames(funcIndex)) {
                                    this.appendBuffer(` (export ${JSON.stringify(exportName)})`);
                                }
                            }
                            this.appendBuffer(` (import `);
                            this.printImportSource(importInfo);
                            this.appendBuffer(")");
                            this.printFuncType(importInfo.funcTypeIndex);
                            this.appendBuffer(")");
                            break;
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.ExternalKind.Global:
                            var globalImportInfo = importInfo.type;
                            var globalIndex = this._globalCount++;
                            var globalName = this._nameResolver.getGlobalName(globalIndex, false);
                            this.appendBuffer(`  (global ${globalName}`);
                            if (this._exportMetadata !== null) {
                                for (const exportName of this._exportMetadata.getGlobalExportNames(globalIndex)) {
                                    this.appendBuffer(` (export ${JSON.stringify(exportName)})`);
                                }
                            }
                            this.appendBuffer(` (import `);
                            this.printImportSource(importInfo);
                            this.appendBuffer(`) ${this.globalTypeToString(globalImportInfo)})`);
                            break;
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.ExternalKind.Memory:
                            var memoryImportInfo = importInfo.type;
                            var memoryIndex = this._memoryCount++;
                            var memoryName = this._nameResolver.getMemoryName(memoryIndex, false);
                            this.appendBuffer(`  (memory ${memoryName}`);
                            if (this._exportMetadata !== null) {
                                for (const exportName of this._exportMetadata.getMemoryExportNames(memoryIndex)) {
                                    this.appendBuffer(` (export ${JSON.stringify(exportName)})`);
                                }
                            }
                            this.appendBuffer(` (import `);
                            this.printImportSource(importInfo);
                            this.appendBuffer(`) ${limitsToString(memoryImportInfo.limits)}`);
                            if (memoryImportInfo.shared) {
                                this.appendBuffer(` shared`);
                            }
                            this.appendBuffer(")");
                            break;
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.ExternalKind.Table:
                            var tableImportInfo = importInfo.type;
                            var tableIndex = this._tableCount++;
                            var tableName = this._nameResolver.getTableName(tableIndex, false);
                            this.appendBuffer(`  (table ${tableName}`);
                            if (this._exportMetadata !== null) {
                                for (const exportName of this._exportMetadata.getTableExportNames(tableIndex)) {
                                    this.appendBuffer(` (export ${JSON.stringify(exportName)})`);
                                }
                            }
                            this.appendBuffer(` (import `);
                            this.printImportSource(importInfo);
                            this.appendBuffer(`) ${limitsToString(tableImportInfo.limits)} ${this.typeToString(tableImportInfo.elementType)})`);
                            break;
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.ExternalKind.Event:
                            var eventImportInfo = importInfo.type;
                            var eventIndex = this._eventCount++;
                            var eventName = this._nameResolver.getEventName(eventIndex, false);
                            this.appendBuffer(`  (event ${eventName}`);
                            if (this._exportMetadata !== null) {
                                for (const exportName of this._exportMetadata.getEventExportNames(eventIndex)) {
                                    this.appendBuffer(` (export ${JSON.stringify(exportName)})`);
                                }
                            }
                            this.appendBuffer(` (import `);
                            this.printImportSource(importInfo);
                            this.appendBuffer(")");
                            this.printFuncType(eventImportInfo.typeIndex);
                            this.appendBuffer(")");
                            break;
                        default:
                            throw new Error(`NYI other import types: ${importInfo.kind}`);
                    }
                    this.newLine();
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.BEGIN_ELEMENT_SECTION_ENTRY:
                    var elementSegment = reader.result;
                    var elementIndex = this._elementCount++;
                    var elementName = this._nameResolver.getElementName(elementIndex, false);
                    this.appendBuffer(`  (elem ${elementName}`);
                    switch (elementSegment.mode) {
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.ElementMode.Active:
                            if (elementSegment.tableIndex !== 0) {
                                const tableName = this._nameResolver.getTableName(elementSegment.tableIndex, false);
                                this.appendBuffer(` (table ${tableName})`);
                            }
                            break;
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.ElementMode.Passive:
                            break;
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.ElementMode.Declarative:
                            this.appendBuffer(" declare");
                            break;
                    }
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.END_ELEMENT_SECTION_ENTRY:
                    this.appendBuffer(")");
                    this.newLine();
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.ELEMENT_SECTION_ENTRY_BODY:
                    const elementSegmentBody = reader.result;
                    this.appendBuffer(` ${this.typeToString(elementSegmentBody.elementType)}`);
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.BEGIN_GLOBAL_SECTION_ENTRY:
                    var globalInfo = reader.result;
                    var globalIndex = this._globalCount++;
                    var globalName = this._nameResolver.getGlobalName(globalIndex, false);
                    this.appendBuffer(`  (global ${globalName}`);
                    if (this._exportMetadata !== null) {
                        for (const exportName of this._exportMetadata.getGlobalExportNames(globalIndex)) {
                            this.appendBuffer(` (export ${JSON.stringify(exportName)})`);
                        }
                    }
                    this.appendBuffer(` ${this.globalTypeToString(globalInfo.type)}`);
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.END_GLOBAL_SECTION_ENTRY:
                    this.appendBuffer(")");
                    this.newLine();
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.TYPE_SECTION_ENTRY:
                    var typeEntry = reader.result;
                    var typeIndex = this._types.length;
                    this._types.push(typeEntry);
                    if (!this._skipTypes) {
                        var typeName = this._nameResolver.getTypeName(typeIndex, false);
                        var superTypeName = undefined;
                        if (typeEntry.supertype !== undefined) {
                            superTypeName = this.typeIndexToString(typeEntry.supertype);
                        }
                        if (typeEntry.form === _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.TypeKind.func) {
                            this.appendBuffer(`  (type ${typeName} (func`);
                            this.printFuncType(typeIndex);
                            this.appendBuffer("))");
                        }
                        else if (typeEntry.form === _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.TypeKind.func_subtype) {
                            this.appendBuffer(`  (type ${typeName} (func_subtype`);
                            this.printFuncType(typeIndex);
                            this.appendBuffer(` (supertype ${superTypeName})))`);
                        }
                        else if (typeEntry.form === _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.TypeKind.struct) {
                            this.appendBuffer(`  (type ${typeName} (struct`);
                            this.printStructType(typeIndex);
                            this.appendBuffer("))");
                        }
                        else if (typeEntry.form === _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.TypeKind.struct_subtype) {
                            this.appendBuffer(`  (type ${typeName} (struct_subtype`);
                            this.printStructType(typeIndex);
                            this.appendBuffer(` (supertype ${superTypeName})))`);
                        }
                        else if (typeEntry.form === _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.TypeKind.array) {
                            this.appendBuffer(`  (type ${typeName} (array`);
                            this.printArrayType(typeIndex);
                            this.appendBuffer("))");
                        }
                        else if (typeEntry.form === _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.TypeKind.array_subtype) {
                            this.appendBuffer(`  (type ${typeName} (array_subtype`);
                            this.printArrayType(typeIndex);
                            this.appendBuffer(`) (supertype ${superTypeName})))`);
                        }
                        else {
                            throw new Error(`Unknown type form: ${typeEntry.form}`);
                        }
                        this.newLine();
                    }
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.START_SECTION_ENTRY:
                    var startEntry = reader.result;
                    var funcName = this._nameResolver.getFunctionName(startEntry.index, startEntry.index < this._importCount, true);
                    this.appendBuffer(`  (start ${funcName})`);
                    this.newLine();
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.BEGIN_DATA_SECTION_ENTRY:
                    this.appendBuffer("  (data");
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.DATA_SECTION_ENTRY_BODY:
                    var body = reader.result;
                    this.appendBuffer(" ");
                    this.printString(body.data);
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.END_DATA_SECTION_ENTRY:
                    this.appendBuffer(")");
                    this.newLine();
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.BEGIN_INIT_EXPRESSION_BODY:
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.BEGIN_OFFSET_EXPRESSION_BODY:
                    this._expression = [];
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.INIT_EXPRESSION_OPERATOR:
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.OFFSET_EXPRESSION_OPERATOR:
                    var operator = reader.result;
                    if (operator.code !== _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.end) {
                        this._expression.push(operator);
                    }
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.END_OFFSET_EXPRESSION_BODY:
                    if (this._expression.length > 1) {
                        this.appendBuffer(" (offset ");
                        this.printExpression(this._expression);
                        this.appendBuffer(")");
                    }
                    else {
                        this.appendBuffer(" ");
                        this.printExpression(this._expression);
                    }
                    this._expression = [];
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.END_INIT_EXPRESSION_BODY:
                    if (this._expression.length > 1 &&
                        this._currentSectionId === _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.SectionCode.Element) {
                        this.appendBuffer(" (item ");
                        this.printExpression(this._expression);
                        this.appendBuffer(")");
                    }
                    else {
                        this.appendBuffer(" ");
                        this.printExpression(this._expression);
                    }
                    this._expression = [];
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.FUNCTION_SECTION_ENTRY:
                    this._funcTypes.push(reader.result.typeIndex);
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.BEGIN_FUNCTION_BODY:
                    var func = reader.result;
                    var type = this._types[this._funcTypes[this._funcIndex - this._importCount]];
                    this.appendBuffer("  (func ");
                    this.appendBuffer(this._nameResolver.getFunctionName(this._funcIndex, false, false));
                    if (this._exportMetadata !== null) {
                        for (const exportName of this._exportMetadata.getFunctionExportNames(this._funcIndex)) {
                            this.appendBuffer(` (export ${JSON.stringify(exportName)})`);
                        }
                    }
                    for (var i = 0; i < type.params.length; i++) {
                        var paramName = this._nameResolver.getVariableName(this._funcIndex, i, false);
                        this.appendBuffer(` (param ${paramName} ${this.typeToString(type.params[i])})`);
                    }
                    for (var i = 0; i < type.returns.length; i++) {
                        this.appendBuffer(` (result ${this.typeToString(type.returns[i])})`);
                    }
                    this.newLine();
                    var localIndex = type.params.length;
                    if (func.locals.length > 0) {
                        this.appendBuffer("   ");
                        for (var l of func.locals) {
                            for (var i = 0; i < l.count; i++) {
                                var paramName = this._nameResolver.getVariableName(this._funcIndex, localIndex++, false);
                                this.appendBuffer(` (local ${paramName} ${this.typeToString(l.type)})`);
                            }
                        }
                        this.newLine();
                    }
                    this._indent = "    ";
                    this._indentLevel = 0;
                    this._labelIndex = 0;
                    this._backrefLabels = this._labelMode === LabelMode.Depth ? null : [];
                    this._logFirstInstruction = true;
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.CODE_OPERATOR:
                    if (this._logFirstInstruction) {
                        this.logStartOfFunctionBodyOffset();
                        this._logFirstInstruction = false;
                    }
                    var operator = reader.result;
                    if (operator.code == _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.end && this._indentLevel == 0) {
                        // reached of the function, closing function body
                        this.appendBuffer(`  )`);
                        this.newLine();
                        break;
                    }
                    switch (operator.code) {
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.end:
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.else:
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.catch:
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.catch_all:
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.unwind:
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.delegate:
                            this.decreaseIndent();
                            break;
                    }
                    this.appendBuffer(this._indent);
                    this.printOperator(operator);
                    this.newLine();
                    switch (operator.code) {
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.if:
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.block:
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.loop:
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.else:
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.try:
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.catch:
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.catch_all:
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCode.unwind:
                            this.increaseIndent();
                            break;
                    }
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.END_FUNCTION_BODY:
                    this._funcIndex++;
                    this._backrefLabels = null;
                    this.logEndOfFunctionBodyOffset();
                    // See case BinaryReaderState.CODE_OPERATOR for closing of body
                    break;
                default:
                    throw new Error(`Expectected state: ${reader.state}`);
            }
        }
    }
}
const UNKNOWN_FUNCTION_PREFIX = "unknown";
class NameSectionNameResolver extends DefaultNameResolver {
    constructor(functionNames, localNames, eventNames, typeNames, tableNames, memoryNames, globalNames, fieldNames) {
        super();
        Object.defineProperty(this, "_functionNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_localNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_eventNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_typeNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_tableNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_memoryNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_globalNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_fieldNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._functionNames = functionNames;
        this._localNames = localNames;
        this._eventNames = eventNames;
        this._typeNames = typeNames;
        this._tableNames = tableNames;
        this._memoryNames = memoryNames;
        this._globalNames = globalNames;
        this._fieldNames = fieldNames;
    }
    getTypeName(index, isRef) {
        const name = this._typeNames[index];
        if (!name)
            return super.getTypeName(index, isRef);
        return isRef ? `$${name}` : `$${name} (;${index};)`;
    }
    getTableName(index, isRef) {
        const name = this._tableNames[index];
        if (!name)
            return super.getTableName(index, isRef);
        return isRef ? `$${name}` : `$${name} (;${index};)`;
    }
    getMemoryName(index, isRef) {
        const name = this._memoryNames[index];
        if (!name)
            return super.getMemoryName(index, isRef);
        return isRef ? `$${name}` : `$${name} (;${index};)`;
    }
    getGlobalName(index, isRef) {
        const name = this._globalNames[index];
        if (!name)
            return super.getGlobalName(index, isRef);
        return isRef ? `$${name}` : `$${name} (;${index};)`;
    }
    getEventName(index, isRef) {
        const name = this._eventNames[index];
        if (!name)
            return super.getEventName(index, isRef);
        return isRef ? `$${name}` : `$${name} (;${index};)`;
    }
    getFunctionName(index, isImport, isRef) {
        const name = this._functionNames[index];
        if (!name)
            return `$${UNKNOWN_FUNCTION_PREFIX}${index}`;
        return isRef ? `$${name}` : `$${name} (;${index};)`;
    }
    getVariableName(funcIndex, index, isRef) {
        const name = this._localNames[funcIndex] && this._localNames[funcIndex][index];
        if (!name)
            return super.getVariableName(funcIndex, index, isRef);
        return isRef ? `$${name}` : `$${name} (;${index};)`;
    }
    getFieldName(typeIndex, index, isRef) {
        const name = this._fieldNames[typeIndex] && this._fieldNames[typeIndex][index];
        if (!name)
            return super.getFieldName(typeIndex, index, isRef);
        return isRef ? `$${name}` : `$${name} (;${index};)`;
    }
}
class NameSectionReader {
    constructor() {
        Object.defineProperty(this, "_done", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "_functionsCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "_functionImportsCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "_functionNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "_functionLocalNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "_eventNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "_typeNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "_tableNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "_memoryNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "_globalNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "_fieldNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "_hasNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
    }
    read(reader) {
        if (this._done)
            throw new Error("Invalid state: disassembly process was already finished.");
        while (true) {
            if (!reader.read())
                return false;
            switch (reader.state) {
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.END_WASM:
                    if (!reader.hasMoreBytes()) {
                        this._done = true;
                        return true;
                    }
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.ERROR:
                    throw reader.error;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.BEGIN_WASM:
                    this._functionsCount = 0;
                    this._functionImportsCount = 0;
                    this._functionNames = [];
                    this._functionLocalNames = [];
                    this._eventNames = [];
                    this._typeNames = [];
                    this._tableNames = [];
                    this._memoryNames = [];
                    this._globalNames = [];
                    this._fieldNames = [];
                    this._hasNames = false;
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.END_SECTION:
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.BEGIN_SECTION:
                    var sectionInfo = reader.result;
                    if (sectionInfo.id === _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.SectionCode.Custom &&
                        (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(sectionInfo.name) === NAME_SECTION_NAME) {
                        break;
                    }
                    if (sectionInfo.id === _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.SectionCode.Function ||
                        sectionInfo.id === _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.SectionCode.Import) {
                        break;
                    }
                    reader.skipSection();
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.IMPORT_SECTION_ENTRY:
                    var importInfo = reader.result;
                    if (importInfo.kind === _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.ExternalKind.Function)
                        this._functionImportsCount++;
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.FUNCTION_SECTION_ENTRY:
                    this._functionsCount++;
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.NAME_SECTION_ENTRY:
                    const nameInfo = reader.result;
                    if (nameInfo.type === _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.NameType.Function) {
                        const { names } = nameInfo;
                        names.forEach(({ index, name }) => {
                            this._functionNames[index] = (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(name);
                        });
                        this._hasNames = true;
                    }
                    else if (nameInfo.type === _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.NameType.Local) {
                        const { funcs } = nameInfo;
                        funcs.forEach(({ index, locals }) => {
                            const localNames = (this._functionLocalNames[index] = []);
                            locals.forEach(({ index, name }) => {
                                localNames[index] = (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(name);
                            });
                        });
                        this._hasNames = true;
                    }
                    else if (nameInfo.type === _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.NameType.Event) {
                        const { names } = nameInfo;
                        names.forEach(({ index, name }) => {
                            this._eventNames[index] = (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(name);
                        });
                        this._hasNames = true;
                    }
                    else if (nameInfo.type === _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.NameType.Type) {
                        const { names } = nameInfo;
                        names.forEach(({ index, name }) => {
                            this._typeNames[index] = (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(name);
                        });
                        this._hasNames = true;
                    }
                    else if (nameInfo.type === _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.NameType.Table) {
                        const { names } = nameInfo;
                        names.forEach(({ index, name }) => {
                            this._tableNames[index] = (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(name);
                        });
                        this._hasNames = true;
                    }
                    else if (nameInfo.type === _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.NameType.Memory) {
                        const { names } = nameInfo;
                        names.forEach(({ index, name }) => {
                            this._memoryNames[index] = (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(name);
                        });
                        this._hasNames = true;
                    }
                    else if (nameInfo.type === _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.NameType.Global) {
                        const { names } = nameInfo;
                        names.forEach(({ index, name }) => {
                            this._globalNames[index] = (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(name);
                        });
                        this._hasNames = true;
                    }
                    else if (nameInfo.type === _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.NameType.Field) {
                        const { types } = nameInfo;
                        types.forEach(({ index, fields }) => {
                            const fieldNames = (this._fieldNames[index] = []);
                            fields.forEach(({ index, name }) => {
                                fieldNames[index] = (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(name);
                            });
                        });
                    }
                    break;
                default:
                    throw new Error(`Expectected state: ${reader.state}`);
            }
        }
    }
    hasValidNames() {
        return this._hasNames;
    }
    getNameResolver() {
        if (!this.hasValidNames())
            throw new Error("Has no valid name section");
        // Fix bad names.
        const functionNamesLength = this._functionImportsCount + this._functionsCount;
        const functionNames = this._functionNames.slice(0, functionNamesLength);
        const usedNameAt = Object.create(null);
        for (let i = 0; i < functionNames.length; i++) {
            const name = functionNames[i];
            if (!name)
                continue;
            const goodName = !(name in usedNameAt) &&
                isValidName(name) &&
                name.indexOf(UNKNOWN_FUNCTION_PREFIX) !== 0;
            if (!goodName) {
                if (usedNameAt[name] >= 0) {
                    // Remove all non-unique names.
                    functionNames[usedNameAt[name]] = null;
                    usedNameAt[name] = -1;
                }
                functionNames[i] = null;
                continue;
            }
            usedNameAt[name] = i;
        }
        return new NameSectionNameResolver(functionNames, this._functionLocalNames, this._eventNames, this._typeNames, this._tableNames, this._memoryNames, this._globalNames, this._fieldNames);
    }
}
class DevToolsNameResolver extends NameSectionNameResolver {
    constructor(functionNames, localNames, eventNames, typeNames, tableNames, memoryNames, globalNames, fieldNames) {
        super(functionNames, localNames, eventNames, typeNames, tableNames, memoryNames, globalNames, fieldNames);
    }
    getFunctionName(index, isImport, isRef) {
        const name = this._functionNames[index];
        if (!name)
            return isImport ? `$import${index}` : `$func${index}`;
        return isRef ? `$${name}` : `$${name} (;${index};)`;
    }
}
class DevToolsNameGenerator {
    constructor() {
        Object.defineProperty(this, "_done", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "_functionImportsCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "_memoryImportsCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "_tableImportsCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "_globalImportsCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "_eventImportsCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "_functionNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "_functionLocalNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "_eventNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "_memoryNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "_typeNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "_tableNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "_globalNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "_fieldNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "_functionExportNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "_globalExportNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "_memoryExportNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "_tableExportNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "_eventExportNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
    }
    _addExportName(exportNames, index, name) {
        const names = exportNames[index];
        if (names) {
            names.push(name);
        }
        else {
            exportNames[index] = [name];
        }
    }
    _setName(names, index, name, isNameSectionName) {
        if (!name)
            return;
        if (isNameSectionName) {
            if (!isValidName(name))
                return;
            names[index] = name;
        }
        else if (!names[index]) {
            names[index] = name.replace(INVALID_NAME_SYMBOLS_REGEX_GLOBAL, "_");
        }
    }
    read(reader) {
        if (this._done)
            throw new Error("Invalid state: disassembly process was already finished.");
        while (true) {
            if (!reader.read())
                return false;
            switch (reader.state) {
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.END_WASM:
                    if (!reader.hasMoreBytes()) {
                        this._done = true;
                        return true;
                    }
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.ERROR:
                    throw reader.error;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.BEGIN_WASM:
                    this._functionImportsCount = 0;
                    this._memoryImportsCount = 0;
                    this._tableImportsCount = 0;
                    this._globalImportsCount = 0;
                    this._eventImportsCount = 0;
                    this._functionNames = [];
                    this._functionLocalNames = [];
                    this._eventNames = [];
                    this._memoryNames = [];
                    this._typeNames = [];
                    this._tableNames = [];
                    this._globalNames = [];
                    this._fieldNames = [];
                    this._functionExportNames = [];
                    this._globalExportNames = [];
                    this._memoryExportNames = [];
                    this._tableExportNames = [];
                    this._eventExportNames = [];
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.END_SECTION:
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.BEGIN_SECTION:
                    var sectionInfo = reader.result;
                    if (sectionInfo.id === _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.SectionCode.Custom &&
                        (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(sectionInfo.name) === NAME_SECTION_NAME) {
                        break;
                    }
                    switch (sectionInfo.id) {
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.SectionCode.Import:
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.SectionCode.Export:
                            break; // reading known section;
                        default:
                            reader.skipSection();
                            break;
                    }
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.IMPORT_SECTION_ENTRY:
                    var importInfo = reader.result;
                    const importName = `${(0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(importInfo.module)}.${(0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(importInfo.field)}`;
                    switch (importInfo.kind) {
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.ExternalKind.Function:
                            this._setName(this._functionNames, this._functionImportsCount++, importName, false);
                            break;
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.ExternalKind.Table:
                            this._setName(this._tableNames, this._tableImportsCount++, importName, false);
                            break;
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.ExternalKind.Memory:
                            this._setName(this._memoryNames, this._memoryImportsCount++, importName, false);
                            break;
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.ExternalKind.Global:
                            this._setName(this._globalNames, this._globalImportsCount++, importName, false);
                            break;
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.ExternalKind.Event:
                            this._setName(this._eventNames, this._eventImportsCount++, importName, false);
                        default:
                            throw new Error(`Unsupported export ${importInfo.kind}`);
                    }
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.NAME_SECTION_ENTRY:
                    const nameInfo = reader.result;
                    if (nameInfo.type === _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.NameType.Function) {
                        const { names } = nameInfo;
                        names.forEach(({ index, name }) => {
                            this._setName(this._functionNames, index, (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(name), true);
                        });
                    }
                    else if (nameInfo.type === _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.NameType.Local) {
                        const { funcs } = nameInfo;
                        funcs.forEach(({ index, locals }) => {
                            const localNames = (this._functionLocalNames[index] = []);
                            locals.forEach(({ index, name }) => {
                                localNames[index] = (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(name);
                            });
                        });
                    }
                    else if (nameInfo.type === _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.NameType.Event) {
                        const { names } = nameInfo;
                        names.forEach(({ index, name }) => {
                            this._setName(this._eventNames, index, (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(name), true);
                        });
                    }
                    else if (nameInfo.type === _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.NameType.Type) {
                        const { names } = nameInfo;
                        names.forEach(({ index, name }) => {
                            this._setName(this._typeNames, index, (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(name), true);
                        });
                    }
                    else if (nameInfo.type === _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.NameType.Table) {
                        const { names } = nameInfo;
                        names.forEach(({ index, name }) => {
                            this._setName(this._tableNames, index, (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(name), true);
                        });
                    }
                    else if (nameInfo.type === _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.NameType.Memory) {
                        const { names } = nameInfo;
                        names.forEach(({ index, name }) => {
                            this._setName(this._memoryNames, index, (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(name), true);
                        });
                    }
                    else if (nameInfo.type === _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.NameType.Global) {
                        const { names } = nameInfo;
                        names.forEach(({ index, name }) => {
                            this._setName(this._globalNames, index, (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(name), true);
                        });
                    }
                    else if (nameInfo.type === _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.NameType.Field) {
                        const { types } = nameInfo;
                        types.forEach(({ index, fields }) => {
                            const fieldNames = (this._fieldNames[index] = []);
                            fields.forEach(({ index, name }) => {
                                fieldNames[index] = (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(name);
                            });
                        });
                    }
                    break;
                case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReaderState.EXPORT_SECTION_ENTRY:
                    var exportInfo = reader.result;
                    const exportName = (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(exportInfo.field);
                    switch (exportInfo.kind) {
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.ExternalKind.Function:
                            this._addExportName(this._functionExportNames, exportInfo.index, exportName);
                            this._setName(this._functionNames, exportInfo.index, exportName, false);
                            break;
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.ExternalKind.Global:
                            this._addExportName(this._globalExportNames, exportInfo.index, exportName);
                            this._setName(this._globalNames, exportInfo.index, exportName, false);
                            break;
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.ExternalKind.Memory:
                            this._addExportName(this._memoryExportNames, exportInfo.index, exportName);
                            this._setName(this._memoryNames, exportInfo.index, exportName, false);
                            break;
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.ExternalKind.Table:
                            this._addExportName(this._tableExportNames, exportInfo.index, exportName);
                            this._setName(this._tableNames, exportInfo.index, exportName, false);
                            break;
                        case _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.ExternalKind.Event:
                            this._addExportName(this._eventExportNames, exportInfo.index, exportName);
                            this._setName(this._eventNames, exportInfo.index, exportName, false);
                            break;
                        default:
                            throw new Error(`Unsupported export ${exportInfo.kind}`);
                    }
                    break;
                default:
                    throw new Error(`Expectected state: ${reader.state}`);
            }
        }
    }
    getExportMetadata() {
        return new DevToolsExportMetadata(this._functionExportNames, this._globalExportNames, this._memoryExportNames, this._tableExportNames, this._eventExportNames);
    }
    getNameResolver() {
        return new DevToolsNameResolver(this._functionNames, this._functionLocalNames, this._eventNames, this._typeNames, this._tableNames, this._memoryNames, this._globalNames, this._fieldNames);
    }
}


/***/ })

}]);