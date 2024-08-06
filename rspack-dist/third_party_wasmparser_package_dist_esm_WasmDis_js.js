"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_wasmparser_package_dist_esm_WasmDis_js"], {
"./third_party/wasmparser/package/dist/esm/WasmDis.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DefaultNameResolver: function() { return DefaultNameResolver; },
  DevToolsNameGenerator: function() { return DevToolsNameGenerator; },
  DevToolsNameResolver: function() { return DevToolsNameResolver; },
  LabelMode: function() { return LabelMode; },
  NameSectionReader: function() { return NameSectionReader; },
  NumericNameResolver: function() { return NumericNameResolver; },
  WasmDisassembler: function() { return WasmDisassembler; }
});
/* harmony import */var _WasmParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WasmParser.js */ "./third_party/wasmparser/package/dist/esm/WasmParser.js");
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
 */ function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}

var NAME_SECTION_NAME = "name";
var INVALID_NAME_SYMBOLS_REGEX = /[^0-9A-Za-z!#$%&'*+.:<=>?@^_`|~\/\-]/;
var INVALID_NAME_SYMBOLS_REGEX_GLOBAL = new RegExp(INVALID_NAME_SYMBOLS_REGEX.source, "g");
function formatFloat32(n) {
    if (n === 0) return 1 / n < 0 ? "-0.0" : "0.0";
    if (isFinite(n)) return n.toString();
    if (!isNaN(n)) return n < 0 ? "-inf" : "inf";
    var view = new DataView(new ArrayBuffer(8));
    view.setFloat32(0, n, true);
    var data = view.getInt32(0, true);
    var payload = data & 0x7fffff;
    var canonicalBits = 4194304; // 0x800..0
    if (data > 0 && payload === canonicalBits) return "nan";
    else if (payload === canonicalBits) return "-nan";
    return (data < 0 ? "-" : "+") + "nan:0x" + payload.toString(16);
}
function formatFloat64(n) {
    if (n === 0) return 1 / n < 0 ? "-0.0" : "0.0";
    if (isFinite(n)) return n.toString();
    if (!isNaN(n)) return n < 0 ? "-inf" : "inf";
    var view = new DataView(new ArrayBuffer(8));
    view.setFloat64(0, n, true);
    var data1 = view.getUint32(0, true);
    var data2 = view.getInt32(4, true);
    var payload = data1 + (data2 & 0xfffff) * 4294967296;
    var canonicalBits = 524288 * 4294967296; // 0x800..0
    if (data2 > 0 && payload === canonicalBits) return "nan";
    else if (payload === canonicalBits) return "-nan";
    return (data2 < 0 ? "-" : "+") + "nan:0x" + payload.toString(16);
}
function formatI32Array(bytes, count) {
    var dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    var result = [];
    for(var i = 0; i < count; i++)result.push("0x".concat(formatHex(dv.getInt32(i << 2, true), 8)));
    return result.join(" ");
}
function formatI8Array(bytes, count) {
    var dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    var result = [];
    for(var i = 0; i < count; i++)result.push("".concat(dv.getInt8(i)));
    return result.join(" ");
}
function memoryAddressToString(address, code) {
    var defaultAlignFlags;
    switch(code){
        case 64768 /* v128_load */ :
        case 64769 /* i16x8_load8x8_s */ :
        case 64770 /* i16x8_load8x8_u */ :
        case 64771 /* i32x4_load16x4_s */ :
        case 64772 /* i32x4_load16x4_u */ :
        case 64773 /* i64x2_load32x2_s */ :
        case 64774 /* i64x2_load32x2_u */ :
        case 64775 /* v8x16_load_splat */ :
        case 64776 /* v16x8_load_splat */ :
        case 64777 /* v32x4_load_splat */ :
        case 64778 /* v64x2_load_splat */ :
        case 64779 /* v128_store */ :
            defaultAlignFlags = 4;
            break;
        case 41 /* i64_load */ :
        case 55 /* i64_store */ :
        case 43 /* f64_load */ :
        case 57 /* f64_store */ :
        case 65026 /* i64_atomic_wait */ :
        case 65041 /* i64_atomic_load */ :
        case 65048 /* i64_atomic_store */ :
        case 65055 /* i64_atomic_rmw_add */ :
        case 65062 /* i64_atomic_rmw_sub */ :
        case 65069 /* i64_atomic_rmw_and */ :
        case 65076 /* i64_atomic_rmw_or */ :
        case 65083 /* i64_atomic_rmw_xor */ :
        case 65090 /* i64_atomic_rmw_xchg */ :
        case 65097 /* i64_atomic_rmw_cmpxchg */ :
        case 64861 /* v128_load64_zero */ :
            defaultAlignFlags = 3;
            break;
        case 40 /* i32_load */ :
        case 52 /* i64_load32_s */ :
        case 53 /* i64_load32_u */ :
        case 54 /* i32_store */ :
        case 62 /* i64_store32 */ :
        case 42 /* f32_load */ :
        case 56 /* f32_store */ :
        case 65024 /* atomic_notify */ :
        case 65025 /* i32_atomic_wait */ :
        case 65040 /* i32_atomic_load */ :
        case 65046 /* i64_atomic_load32_u */ :
        case 65047 /* i32_atomic_store */ :
        case 65053 /* i64_atomic_store32 */ :
        case 65054 /* i32_atomic_rmw_add */ :
        case 65060 /* i64_atomic_rmw32_add_u */ :
        case 65061 /* i32_atomic_rmw_sub */ :
        case 65067 /* i64_atomic_rmw32_sub_u */ :
        case 65068 /* i32_atomic_rmw_and */ :
        case 65074 /* i64_atomic_rmw32_and_u */ :
        case 65075 /* i32_atomic_rmw_or */ :
        case 65081 /* i64_atomic_rmw32_or_u */ :
        case 65082 /* i32_atomic_rmw_xor */ :
        case 65088 /* i64_atomic_rmw32_xor_u */ :
        case 65089 /* i32_atomic_rmw_xchg */ :
        case 65095 /* i64_atomic_rmw32_xchg_u */ :
        case 65096 /* i32_atomic_rmw_cmpxchg */ :
        case 65102 /* i64_atomic_rmw32_cmpxchg_u */ :
        case 64860 /* v128_load32_zero */ :
            defaultAlignFlags = 2;
            break;
        case 46 /* i32_load16_s */ :
        case 47 /* i32_load16_u */ :
        case 50 /* i64_load16_s */ :
        case 51 /* i64_load16_u */ :
        case 59 /* i32_store16 */ :
        case 61 /* i64_store16 */ :
        case 65043 /* i32_atomic_load16_u */ :
        case 65045 /* i64_atomic_load16_u */ :
        case 65050 /* i32_atomic_store16 */ :
        case 65052 /* i64_atomic_store16 */ :
        case 65057 /* i32_atomic_rmw16_add_u */ :
        case 65059 /* i64_atomic_rmw16_add_u */ :
        case 65064 /* i32_atomic_rmw16_sub_u */ :
        case 65066 /* i64_atomic_rmw16_sub_u */ :
        case 65071 /* i32_atomic_rmw16_and_u */ :
        case 65073 /* i64_atomic_rmw16_and_u */ :
        case 65078 /* i32_atomic_rmw16_or_u */ :
        case 65080 /* i64_atomic_rmw16_or_u */ :
        case 65085 /* i32_atomic_rmw16_xor_u */ :
        case 65087 /* i64_atomic_rmw16_xor_u */ :
        case 65092 /* i32_atomic_rmw16_xchg_u */ :
        case 65094 /* i64_atomic_rmw16_xchg_u */ :
        case 65099 /* i32_atomic_rmw16_cmpxchg_u */ :
        case 65101 /* i64_atomic_rmw16_cmpxchg_u */ :
            defaultAlignFlags = 1;
            break;
        case 44 /* i32_load8_s */ :
        case 45 /* i32_load8_u */ :
        case 48 /* i64_load8_s */ :
        case 49 /* i64_load8_u */ :
        case 58 /* i32_store8 */ :
        case 60 /* i64_store8 */ :
        case 65042 /* i32_atomic_load8_u */ :
        case 65044 /* i64_atomic_load8_u */ :
        case 65049 /* i32_atomic_store8 */ :
        case 65051 /* i64_atomic_store8 */ :
        case 65056 /* i32_atomic_rmw8_add_u */ :
        case 65058 /* i64_atomic_rmw8_add_u */ :
        case 65063 /* i32_atomic_rmw8_sub_u */ :
        case 65065 /* i64_atomic_rmw8_sub_u */ :
        case 65070 /* i32_atomic_rmw8_and_u */ :
        case 65072 /* i64_atomic_rmw8_and_u */ :
        case 65077 /* i32_atomic_rmw8_or_u */ :
        case 65079 /* i64_atomic_rmw8_or_u */ :
        case 65084 /* i32_atomic_rmw8_xor_u */ :
        case 65086 /* i64_atomic_rmw8_xor_u */ :
        case 65091 /* i32_atomic_rmw8_xchg_u */ :
        case 65093 /* i64_atomic_rmw8_xchg_u */ :
        case 65098 /* i32_atomic_rmw8_cmpxchg_u */ :
        case 65100 /* i64_atomic_rmw8_cmpxchg_u */ :
            defaultAlignFlags = 0;
            break;
    }
    if (address.flags == defaultAlignFlags) // hide default flags
    return !address.offset ? null : "offset=".concat(address.offset);
    if (!address.offset) // hide default offset
    return "align=".concat(1 << address.flags);
    return "offset=".concat(address.offset | 0, " align=").concat(1 << address.flags);
}
function limitsToString(limits) {
    return limits.initial + (limits.maximum !== undefined ? " " + limits.maximum : "");
}
var paddingCache = [
    "0",
    "00",
    "000"
];
function formatHex(n, width) {
    var s = (n >>> 0).toString(16).toUpperCase();
    if (width === undefined || s.length >= width) return s;
    var paddingIndex = width - s.length - 1;
    while(paddingIndex >= paddingCache.length)paddingCache.push(paddingCache[paddingCache.length - 1] + "0");
    return paddingCache[paddingIndex] + s;
}
var IndentIncrement = "  ";
function isValidName(name) {
    return !INVALID_NAME_SYMBOLS_REGEX.test(name);
}
var DefaultNameResolver = /*#__PURE__*/ function() {
    "use strict";
    function DefaultNameResolver() {
        _class_call_check(this, DefaultNameResolver);
    }
    _create_class(DefaultNameResolver, [
        {
            key: "getTypeName",
            value: function getTypeName(index, isRef) {
                return "$type" + index;
            }
        },
        {
            key: "getTableName",
            value: function getTableName(index, isRef) {
                return "$table" + index;
            }
        },
        {
            key: "getMemoryName",
            value: function getMemoryName(index, isRef) {
                return "$memory" + index;
            }
        },
        {
            key: "getGlobalName",
            value: function getGlobalName(index, isRef) {
                return "$global" + index;
            }
        },
        {
            key: "getElementName",
            value: function getElementName(index, isRef) {
                return "$elem".concat(index);
            }
        },
        {
            key: "getEventName",
            value: function getEventName(index, isRef) {
                return "$event".concat(index);
            }
        },
        {
            key: "getFunctionName",
            value: function getFunctionName(index, isImport, isRef) {
                return (isImport ? "$import" : "$func") + index;
            }
        },
        {
            key: "getVariableName",
            value: function getVariableName(funcIndex, index, isRef) {
                return "$var" + index;
            }
        },
        {
            key: "getFieldName",
            value: function getFieldName(typeIndex, index, isRef) {
                return "$field" + index;
            }
        },
        {
            key: "getLabel",
            value: function getLabel(index) {
                return "$label" + index;
            }
        }
    ]);
    return DefaultNameResolver;
}();
var EMPTY_STRING_ARRAY = [];
var DevToolsExportMetadata = /*#__PURE__*/ function() {
    "use strict";
    function DevToolsExportMetadata(functionExportNames, globalExportNames, memoryExportNames, tableExportNames, eventExportNames) {
        _class_call_check(this, DevToolsExportMetadata);
        this._functionExportNames = functionExportNames;
        this._globalExportNames = globalExportNames;
        this._memoryExportNames = memoryExportNames;
        this._tableExportNames = tableExportNames;
        this._eventExportNames = eventExportNames;
    }
    _create_class(DevToolsExportMetadata, [
        {
            key: "getFunctionExportNames",
            value: function getFunctionExportNames(index) {
                var _a;
                return (_a = this._functionExportNames[index]) !== null && _a !== void 0 ? _a : EMPTY_STRING_ARRAY;
            }
        },
        {
            key: "getGlobalExportNames",
            value: function getGlobalExportNames(index) {
                var _a;
                return (_a = this._globalExportNames[index]) !== null && _a !== void 0 ? _a : EMPTY_STRING_ARRAY;
            }
        },
        {
            key: "getMemoryExportNames",
            value: function getMemoryExportNames(index) {
                var _a;
                return (_a = this._memoryExportNames[index]) !== null && _a !== void 0 ? _a : EMPTY_STRING_ARRAY;
            }
        },
        {
            key: "getTableExportNames",
            value: function getTableExportNames(index) {
                var _a;
                return (_a = this._tableExportNames[index]) !== null && _a !== void 0 ? _a : EMPTY_STRING_ARRAY;
            }
        },
        {
            key: "getEventExportNames",
            value: function getEventExportNames(index) {
                var _a;
                return (_a = this._eventExportNames[index]) !== null && _a !== void 0 ? _a : EMPTY_STRING_ARRAY;
            }
        }
    ]);
    return DevToolsExportMetadata;
}();
var NumericNameResolver = /*#__PURE__*/ function() {
    "use strict";
    function NumericNameResolver() {
        _class_call_check(this, NumericNameResolver);
    }
    _create_class(NumericNameResolver, [
        {
            key: "getTypeName",
            value: function getTypeName(index, isRef) {
                return isRef ? "" + index : "(;".concat(index, ";)");
            }
        },
        {
            key: "getTableName",
            value: function getTableName(index, isRef) {
                return isRef ? "" + index : "(;".concat(index, ";)");
            }
        },
        {
            key: "getMemoryName",
            value: function getMemoryName(index, isRef) {
                return isRef ? "" + index : "(;".concat(index, ";)");
            }
        },
        {
            key: "getGlobalName",
            value: function getGlobalName(index, isRef) {
                return isRef ? "" + index : "(;".concat(index, ";)");
            }
        },
        {
            key: "getElementName",
            value: function getElementName(index, isRef) {
                return isRef ? "" + index : "(;".concat(index, ";)");
            }
        },
        {
            key: "getEventName",
            value: function getEventName(index, isRef) {
                return isRef ? "" + index : "(;".concat(index, ";)");
            }
        },
        {
            key: "getFunctionName",
            value: function getFunctionName(index, isImport, isRef) {
                return isRef ? "" + index : "(;".concat(index, ";)");
            }
        },
        {
            key: "getVariableName",
            value: function getVariableName(funcIndex, index, isRef) {
                return isRef ? "" + index : "(;".concat(index, ";)");
            }
        },
        {
            key: "getFieldName",
            value: function getFieldName(typeIndex, index, isRef) {
                return isRef ? "" : index + "(;".concat(index, ";)");
            }
        },
        {
            key: "getLabel",
            value: function getLabel(index) {
                return null;
            }
        }
    ]);
    return NumericNameResolver;
}();
var LabelMode;
(function(LabelMode) {
    LabelMode[LabelMode["Depth"] = 0] = "Depth";
    LabelMode[LabelMode["WhenUsed"] = 1] = "WhenUsed";
    LabelMode[LabelMode["Always"] = 2] = "Always";
})(LabelMode || (LabelMode = {}));
var WasmDisassembler = /*#__PURE__*/ function() {
    "use strict";
    function WasmDisassembler() {
        _class_call_check(this, WasmDisassembler);
        this._skipTypes = true;
        this._exportMetadata = null;
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
        this._currentSectionId = -1 /* Unknown */ ;
        this._logFirstInstruction = false;
        this._reset();
    }
    _create_class(WasmDisassembler, [
        {
            key: "_reset",
            value: function _reset() {
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
        },
        {
            key: "addOffsets",
            get: function get() {
                return this._addOffsets;
            },
            set: function set(value) {
                if (this._currentPosition) throw new Error("Cannot switch addOffsets during processing.");
                this._addOffsets = value;
            }
        },
        {
            key: "skipTypes",
            get: function get() {
                return this._skipTypes;
            },
            set: function set(skipTypes) {
                if (this._currentPosition) throw new Error("Cannot switch skipTypes during processing.");
                this._skipTypes = skipTypes;
            }
        },
        {
            key: "labelMode",
            get: function get() {
                return this._labelMode;
            },
            set: function set(value) {
                if (this._currentPosition) throw new Error("Cannot switch labelMode during processing.");
                this._labelMode = value;
            }
        },
        {
            key: "exportMetadata",
            get: function get() {
                return this._exportMetadata;
            },
            set: function set(exportMetadata) {
                if (this._currentPosition) throw new Error("Cannot switch exportMetadata during processing.");
                this._exportMetadata = exportMetadata;
            }
        },
        {
            key: "nameResolver",
            get: function get() {
                return this._nameResolver;
            },
            set: function set(resolver) {
                if (this._currentPosition) throw new Error("Cannot switch nameResolver during processing.");
                this._nameResolver = resolver;
            }
        },
        {
            key: "appendBuffer",
            value: function appendBuffer(s) {
                this._buffer += s;
            }
        },
        {
            key: "newLine",
            value: function newLine() {
                if (this.addOffsets) this._offsets.push(this._currentPosition);
                this._lines.push(this._buffer);
                this._buffer = "";
            }
        },
        {
            key: "logStartOfFunctionBodyOffset",
            value: function logStartOfFunctionBodyOffset() {
                if (this.addOffsets) {
                    this._currentFunctionBodyOffset = this._currentPosition;
                }
            }
        },
        {
            key: "logEndOfFunctionBodyOffset",
            value: function logEndOfFunctionBodyOffset() {
                if (this.addOffsets) {
                    this._functionBodyOffsets.push({
                        start: this._currentFunctionBodyOffset,
                        end: this._currentPosition
                    });
                }
            }
        },
        {
            key: "typeIndexToString",
            value: function typeIndexToString(typeIndex) {
                if (typeIndex >= 0) return this._nameResolver.getTypeName(typeIndex, true);
                switch(typeIndex){
                    case -16 /* funcref */ :
                        return "func";
                    case -17 /* externref */ :
                        return "extern";
                    case -18 /* anyref */ :
                        return "any";
                    case -19 /* eqref */ :
                        return "eq";
                    case -22 /* i31ref */ :
                        return "i31";
                    case -25 /* dataref */ :
                        return "data";
                }
            }
        },
        {
            key: "typeToString",
            value: function typeToString(type) {
                switch(type.kind){
                    case -1 /* i32 */ :
                        return "i32";
                    case -2 /* i64 */ :
                        return "i64";
                    case -3 /* f32 */ :
                        return "f32";
                    case -4 /* f64 */ :
                        return "f64";
                    case -5 /* v128 */ :
                        return "v128";
                    case -6 /* i8 */ :
                        return "i8";
                    case -7 /* i16 */ :
                        return "i16";
                    case -16 /* funcref */ :
                        return "funcref";
                    case -17 /* externref */ :
                        return "externref";
                    case -18 /* anyref */ :
                        return "anyref";
                    case -19 /* eqref */ :
                        return "eqref";
                    case -22 /* i31ref */ :
                        return "i31ref";
                    case -25 /* dataref */ :
                        return "dataref";
                    case -21 /* ref */ :
                        return "(ref ".concat(this.typeIndexToString(type.index), ")");
                    case -20 /* optref */ :
                        return "(ref null ".concat(this.typeIndexToString(type.index), ")");
                    case -24 /* rtt */ :
                        return "(rtt ".concat(this.typeIndexToString(type.index), ")");
                    case -23 /* rtt_d */ :
                        return "(rtt ".concat(type.depth, " ").concat(this.typeIndexToString(type.index), ")");
                    default:
                        throw new Error("Unexpected type ".concat(JSON.stringify(type)));
                }
            }
        },
        {
            key: "maybeMut",
            value: function maybeMut(type, mutability) {
                return mutability ? "(mut ".concat(type, ")") : type;
            }
        },
        {
            key: "globalTypeToString",
            value: function globalTypeToString(type) {
                var typeStr = this.typeToString(type.contentType);
                return this.maybeMut(typeStr, !!type.mutability);
            }
        },
        {
            key: "printFuncType",
            value: function printFuncType(typeIndex) {
                var type = this._types[typeIndex];
                if (type.params.length > 0) {
                    this.appendBuffer(" (param");
                    for(var i = 0; i < type.params.length; i++){
                        this.appendBuffer(" ");
                        this.appendBuffer(this.typeToString(type.params[i]));
                    }
                    this.appendBuffer(")");
                }
                if (type.returns.length > 0) {
                    this.appendBuffer(" (result");
                    for(var i = 0; i < type.returns.length; i++){
                        this.appendBuffer(" ");
                        this.appendBuffer(this.typeToString(type.returns[i]));
                    }
                    this.appendBuffer(")");
                }
            }
        },
        {
            key: "printStructType",
            value: function printStructType(typeIndex) {
                var type = this._types[typeIndex];
                if (type.fields.length === 0) return;
                for(var i = 0; i < type.fields.length; i++){
                    var fieldType = this.maybeMut(this.typeToString(type.fields[i]), type.mutabilities[i]);
                    var fieldName = this._nameResolver.getFieldName(typeIndex, i, false);
                    this.appendBuffer(" (field ".concat(fieldName, " ").concat(fieldType, ")"));
                }
            }
        },
        {
            key: "printArrayType",
            value: function printArrayType(typeIndex) {
                var type = this._types[typeIndex];
                this.appendBuffer(" (field ");
                this.appendBuffer(this.maybeMut(this.typeToString(type.elementType), type.mutability));
            }
        },
        {
            key: "printBlockType",
            value: function printBlockType(type) {
                if (type.kind === -64 /* empty_block_type */ ) {
                    return;
                }
                if (type.kind === 0 /* unspecified */ ) {
                    return this.printFuncType(type.index);
                }
                this.appendBuffer(" (result ");
                this.appendBuffer(this.typeToString(type));
                this.appendBuffer(")");
            }
        },
        {
            key: "printString",
            value: function printString(b) {
                this.appendBuffer('"');
                for(var i = 0; i < b.length; i++){
                    var byte = b[i];
                    if (byte < 0x20 || byte >= 0x7f || byte == /* " */ 0x22 || byte == /* \ */ 0x5c) {
                        this.appendBuffer("\\" + (byte >> 4).toString(16) + (byte & 15).toString(16));
                    } else {
                        this.appendBuffer(String.fromCharCode(byte));
                    }
                }
                this.appendBuffer('"');
            }
        },
        {
            key: "printExpression",
            value: function printExpression(expression) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = expression[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var operator = _step.value;
                        this.appendBuffer("(");
                        this.printOperator(operator);
                        this.appendBuffer(")");
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
            }
        },
        {
            // extraDepthOffset is used by "delegate" instructions.
            key: "useLabel",
            value: function useLabel(depth) {
                var extraDepthOffset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
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
                    this._lines[backrefLabel.line] = line.substring(0, backrefLabel.position) + " " + backrefLabel.label + line.substring(backrefLabel.position);
                    this._labelIndex++;
                }
                return backrefLabel.label || "" + depth;
            }
        },
        {
            key: "printOperator",
            value: function printOperator(operator) {
                var code = operator.code;
                this.appendBuffer(_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.OperatorCodeNames[code]);
                switch(code){
                    case 2 /* block */ :
                    case 3 /* loop */ :
                    case 4 /* if */ :
                    case 6 /* try */ :
                        if (this._labelMode !== LabelMode.Depth) {
                            var backrefLabel = {
                                line: this._lines.length,
                                position: this._buffer.length,
                                useLabel: false,
                                label: null
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
                    case 11 /* end */ :
                        if (this._labelMode === LabelMode.Depth) {
                            break;
                        }
                        var backrefLabel1 = this._backrefLabels.pop();
                        if (backrefLabel1.label) {
                            this.appendBuffer(" ");
                            this.appendBuffer(backrefLabel1.label);
                        }
                        break;
                    case 12 /* br */ :
                    case 13 /* br_if */ :
                    case 212 /* br_on_null */ :
                    case 214 /* br_on_non_null */ :
                    case 64322 /* br_on_cast */ :
                    case 64323 /* br_on_cast_fail */ :
                    case 64352 /* br_on_func */ :
                    case 64355 /* br_on_non_func */ :
                    case 64353 /* br_on_data */ :
                    case 64356 /* br_on_non_data */ :
                    case 64354 /* br_on_i31 */ :
                    case 64357 /* br_on_non_i31 */ :
                        this.appendBuffer(" ");
                        this.appendBuffer(this.useLabel(operator.brDepth));
                        break;
                    case 64326 /* br_on_cast_static */ :
                    case 64327 /* br_on_cast_static_fail */ :
                        {
                            var label = this.useLabel(operator.brDepth);
                            var refType = this._nameResolver.getTypeName(operator.refType, true);
                            this.appendBuffer(" ".concat(label, " ").concat(refType));
                            break;
                        }
                    case 14 /* br_table */ :
                        for(var i = 0; i < operator.brTable.length; i++){
                            this.appendBuffer(" ");
                            this.appendBuffer(this.useLabel(operator.brTable[i]));
                        }
                        break;
                    case 9 /* rethrow */ :
                        this.appendBuffer(" ");
                        this.appendBuffer(this.useLabel(operator.relativeDepth));
                        break;
                    case 24 /* delegate */ :
                        this.appendBuffer(" ");
                        this.appendBuffer(this.useLabel(operator.relativeDepth, 1));
                        break;
                    case 7 /* catch */ :
                    case 8 /* throw */ :
                        var eventName = this._nameResolver.getEventName(operator.eventIndex, true);
                        this.appendBuffer(" ".concat(eventName));
                        break;
                    case 208 /* ref_null */ :
                        this.appendBuffer(" ");
                        this.appendBuffer(this.typeIndexToString(operator.refType));
                        break;
                    case 16 /* call */ :
                    case 18 /* return_call */ :
                    case 210 /* ref_func */ :
                        var funcName = this._nameResolver.getFunctionName(operator.funcIndex, operator.funcIndex < this._importCount, true);
                        this.appendBuffer(" ".concat(funcName));
                        break;
                    case 17 /* call_indirect */ :
                    case 19 /* return_call_indirect */ :
                        this.printFuncType(operator.typeIndex);
                        break;
                    case 28 /* select_with_type */ :
                        {
                            var selectType = this.typeToString(operator.selectType);
                            this.appendBuffer(" ".concat(selectType));
                            break;
                        }
                    case 32 /* local_get */ :
                    case 33 /* local_set */ :
                    case 34 /* local_tee */ :
                        var paramName = this._nameResolver.getVariableName(this._funcIndex, operator.localIndex, true);
                        this.appendBuffer(" ".concat(paramName));
                        break;
                    case 35 /* global_get */ :
                    case 36 /* global_set */ :
                        var globalName = this._nameResolver.getGlobalName(operator.globalIndex, true);
                        this.appendBuffer(" ".concat(globalName));
                        break;
                    case 40 /* i32_load */ :
                    case 41 /* i64_load */ :
                    case 42 /* f32_load */ :
                    case 43 /* f64_load */ :
                    case 44 /* i32_load8_s */ :
                    case 45 /* i32_load8_u */ :
                    case 46 /* i32_load16_s */ :
                    case 47 /* i32_load16_u */ :
                    case 48 /* i64_load8_s */ :
                    case 49 /* i64_load8_u */ :
                    case 50 /* i64_load16_s */ :
                    case 51 /* i64_load16_u */ :
                    case 52 /* i64_load32_s */ :
                    case 53 /* i64_load32_u */ :
                    case 54 /* i32_store */ :
                    case 55 /* i64_store */ :
                    case 56 /* f32_store */ :
                    case 57 /* f64_store */ :
                    case 58 /* i32_store8 */ :
                    case 59 /* i32_store16 */ :
                    case 60 /* i64_store8 */ :
                    case 61 /* i64_store16 */ :
                    case 62 /* i64_store32 */ :
                    case 65024 /* atomic_notify */ :
                    case 65025 /* i32_atomic_wait */ :
                    case 65026 /* i64_atomic_wait */ :
                    case 65040 /* i32_atomic_load */ :
                    case 65041 /* i64_atomic_load */ :
                    case 65042 /* i32_atomic_load8_u */ :
                    case 65043 /* i32_atomic_load16_u */ :
                    case 65044 /* i64_atomic_load8_u */ :
                    case 65045 /* i64_atomic_load16_u */ :
                    case 65046 /* i64_atomic_load32_u */ :
                    case 65047 /* i32_atomic_store */ :
                    case 65048 /* i64_atomic_store */ :
                    case 65049 /* i32_atomic_store8 */ :
                    case 65050 /* i32_atomic_store16 */ :
                    case 65051 /* i64_atomic_store8 */ :
                    case 65052 /* i64_atomic_store16 */ :
                    case 65053 /* i64_atomic_store32 */ :
                    case 65054 /* i32_atomic_rmw_add */ :
                    case 65055 /* i64_atomic_rmw_add */ :
                    case 65056 /* i32_atomic_rmw8_add_u */ :
                    case 65057 /* i32_atomic_rmw16_add_u */ :
                    case 65058 /* i64_atomic_rmw8_add_u */ :
                    case 65059 /* i64_atomic_rmw16_add_u */ :
                    case 65060 /* i64_atomic_rmw32_add_u */ :
                    case 65061 /* i32_atomic_rmw_sub */ :
                    case 65062 /* i64_atomic_rmw_sub */ :
                    case 65063 /* i32_atomic_rmw8_sub_u */ :
                    case 65064 /* i32_atomic_rmw16_sub_u */ :
                    case 65065 /* i64_atomic_rmw8_sub_u */ :
                    case 65066 /* i64_atomic_rmw16_sub_u */ :
                    case 65067 /* i64_atomic_rmw32_sub_u */ :
                    case 65068 /* i32_atomic_rmw_and */ :
                    case 65069 /* i64_atomic_rmw_and */ :
                    case 65070 /* i32_atomic_rmw8_and_u */ :
                    case 65071 /* i32_atomic_rmw16_and_u */ :
                    case 65072 /* i64_atomic_rmw8_and_u */ :
                    case 65073 /* i64_atomic_rmw16_and_u */ :
                    case 65074 /* i64_atomic_rmw32_and_u */ :
                    case 65075 /* i32_atomic_rmw_or */ :
                    case 65076 /* i64_atomic_rmw_or */ :
                    case 65077 /* i32_atomic_rmw8_or_u */ :
                    case 65078 /* i32_atomic_rmw16_or_u */ :
                    case 65079 /* i64_atomic_rmw8_or_u */ :
                    case 65080 /* i64_atomic_rmw16_or_u */ :
                    case 65081 /* i64_atomic_rmw32_or_u */ :
                    case 65082 /* i32_atomic_rmw_xor */ :
                    case 65083 /* i64_atomic_rmw_xor */ :
                    case 65084 /* i32_atomic_rmw8_xor_u */ :
                    case 65085 /* i32_atomic_rmw16_xor_u */ :
                    case 65086 /* i64_atomic_rmw8_xor_u */ :
                    case 65087 /* i64_atomic_rmw16_xor_u */ :
                    case 65088 /* i64_atomic_rmw32_xor_u */ :
                    case 65089 /* i32_atomic_rmw_xchg */ :
                    case 65090 /* i64_atomic_rmw_xchg */ :
                    case 65091 /* i32_atomic_rmw8_xchg_u */ :
                    case 65092 /* i32_atomic_rmw16_xchg_u */ :
                    case 65093 /* i64_atomic_rmw8_xchg_u */ :
                    case 65094 /* i64_atomic_rmw16_xchg_u */ :
                    case 65095 /* i64_atomic_rmw32_xchg_u */ :
                    case 65096 /* i32_atomic_rmw_cmpxchg */ :
                    case 65097 /* i64_atomic_rmw_cmpxchg */ :
                    case 65098 /* i32_atomic_rmw8_cmpxchg_u */ :
                    case 65099 /* i32_atomic_rmw16_cmpxchg_u */ :
                    case 65100 /* i64_atomic_rmw8_cmpxchg_u */ :
                    case 65101 /* i64_atomic_rmw16_cmpxchg_u */ :
                    case 65102 /* i64_atomic_rmw32_cmpxchg_u */ :
                    case 64768 /* v128_load */ :
                    case 64769 /* i16x8_load8x8_s */ :
                    case 64770 /* i16x8_load8x8_u */ :
                    case 64771 /* i32x4_load16x4_s */ :
                    case 64772 /* i32x4_load16x4_u */ :
                    case 64773 /* i64x2_load32x2_s */ :
                    case 64774 /* i64x2_load32x2_u */ :
                    case 64775 /* v8x16_load_splat */ :
                    case 64776 /* v16x8_load_splat */ :
                    case 64777 /* v32x4_load_splat */ :
                    case 64778 /* v64x2_load_splat */ :
                    case 64779 /* v128_store */ :
                    case 64860 /* v128_load32_zero */ :
                    case 64861 /* v128_load64_zero */ :
                        var memoryAddress = memoryAddressToString(operator.memoryAddress, operator.code);
                        if (memoryAddress !== null) {
                            this.appendBuffer(" ");
                            this.appendBuffer(memoryAddress);
                        }
                        break;
                    case 63 /* current_memory */ :
                    case 64 /* grow_memory */ :
                        break;
                    case 65 /* i32_const */ :
                        this.appendBuffer(" ".concat(operator.literal.toString()));
                        break;
                    case 66 /* i64_const */ :
                        this.appendBuffer(" ".concat(operator.literal.toString()));
                        break;
                    case 67 /* f32_const */ :
                        this.appendBuffer(" ".concat(formatFloat32(operator.literal)));
                        break;
                    case 68 /* f64_const */ :
                        this.appendBuffer(" ".concat(formatFloat64(operator.literal)));
                        break;
                    case 64780 /* v128_const */ :
                        this.appendBuffer(" i32x4 ".concat(formatI32Array(operator.literal, 4)));
                        break;
                    case 64781 /* i8x16_shuffle */ :
                        this.appendBuffer(" ".concat(formatI8Array(operator.lines, 16)));
                        break;
                    case 64789 /* i8x16_extract_lane_s */ :
                    case 64790 /* i8x16_extract_lane_u */ :
                    case 64791 /* i8x16_replace_lane */ :
                    case 64792 /* i16x8_extract_lane_s */ :
                    case 64793 /* i16x8_extract_lane_u */ :
                    case 64794 /* i16x8_replace_lane */ :
                    case 64795 /* i32x4_extract_lane */ :
                    case 64796 /* i32x4_replace_lane */ :
                    case 64799 /* f32x4_extract_lane */ :
                    case 64800 /* f32x4_replace_lane */ :
                    case 64797 /* i64x2_extract_lane */ :
                    case 64798 /* i64x2_replace_lane */ :
                    case 64801 /* f64x2_extract_lane */ :
                    case 64802 /* f64x2_replace_lane */ :
                        this.appendBuffer(" ".concat(operator.lineIndex));
                        break;
                    case 64520 /* memory_init */ :
                    case 64521 /* data_drop */ :
                        this.appendBuffer(" ".concat(operator.segmentIndex));
                        break;
                    case 64525 /* elem_drop */ :
                        var elementName = this._nameResolver.getElementName(operator.segmentIndex, true);
                        this.appendBuffer(" ".concat(elementName));
                        break;
                    case 38 /* table_set */ :
                    case 37 /* table_get */ :
                    case 64529 /* table_fill */ :
                        {
                            var tableName = this._nameResolver.getTableName(operator.tableIndex, true);
                            this.appendBuffer(" ".concat(tableName));
                            break;
                        }
                    case 64526 /* table_copy */ :
                        {
                            // Table index might be omitted and defaults to 0.
                            if (operator.tableIndex !== 0 || operator.destinationIndex !== 0) {
                                var tableName1 = this._nameResolver.getTableName(operator.tableIndex, true);
                                var destinationName = this._nameResolver.getTableName(operator.destinationIndex, true);
                                this.appendBuffer(" ".concat(destinationName, " ").concat(tableName1));
                            }
                            break;
                        }
                    case 64524 /* table_init */ :
                        {
                            // Table index might be omitted and defaults to 0.
                            if (operator.tableIndex !== 0) {
                                var tableName2 = this._nameResolver.getTableName(operator.tableIndex, true);
                                this.appendBuffer(" ".concat(tableName2));
                            }
                            var elementName1 = this._nameResolver.getElementName(operator.segmentIndex, true);
                            this.appendBuffer(" ".concat(elementName1));
                            break;
                        }
                    case 64259 /* struct_get */ :
                    case 64260 /* struct_get_s */ :
                    case 64261 /* struct_get_u */ :
                    case 64262 /* struct_set */ :
                        {
                            var refType1 = this._nameResolver.getTypeName(operator.refType, true);
                            var fieldName = this._nameResolver.getFieldName(operator.refType, operator.fieldIndex, true);
                            this.appendBuffer(" ".concat(refType1, " ").concat(fieldName));
                            break;
                        }
                    case 64304 /* rtt_canon */ :
                    case 64305 /* rtt_sub */ :
                    case 64306 /* rtt_fresh_sub */ :
                    case 64324 /* ref_test_static */ :
                    case 64325 /* ref_cast_static */ :
                    case 64264 /* struct_new_default */ :
                    case 64258 /* struct_new_default_with_rtt */ :
                    case 64263 /* struct_new */ :
                    case 64257 /* struct_new_with_rtt */ :
                    case 64284 /* array_new_default */ :
                    case 64274 /* array_new_default_with_rtt */ :
                    case 64283 /* array_new */ :
                    case 64273 /* array_new_with_rtt */ :
                    case 64275 /* array_get */ :
                    case 64276 /* array_get_s */ :
                    case 64277 /* array_get_u */ :
                    case 64278 /* array_set */ :
                    case 64279 /* array_len */ :
                        {
                            var refType2 = this._nameResolver.getTypeName(operator.refType, true);
                            this.appendBuffer(" ".concat(refType2));
                            break;
                        }
                    case 64280 /* array_copy */ :
                        {
                            var dstType = this._nameResolver.getTypeName(operator.refType, true);
                            var srcType = this._nameResolver.getTypeName(operator.srcType, true);
                            this.appendBuffer(" ".concat(dstType, " ").concat(srcType));
                            break;
                        }
                    case 64281 /* array_init */ :
                    case 64282 /* array_init_static */ :
                        {
                            var refType3 = this._nameResolver.getTypeName(operator.refType, true);
                            var length = operator.brDepth; // Overloaded field.
                            this.appendBuffer(" ".concat(refType3, " ").concat(length));
                            break;
                        }
                }
            }
        },
        {
            key: "printImportSource",
            value: function printImportSource(info) {
                this.printString(info.module);
                this.appendBuffer(" ");
                this.printString(info.field);
            }
        },
        {
            key: "increaseIndent",
            value: function increaseIndent() {
                this._indent += IndentIncrement;
                this._indentLevel++;
            }
        },
        {
            key: "decreaseIndent",
            value: function decreaseIndent() {
                this._indent = this._indent.slice(0, -IndentIncrement.length);
                this._indentLevel--;
            }
        },
        {
            key: "disassemble",
            value: function disassemble(reader) {
                var _this = this;
                var done = this.disassembleChunk(reader);
                if (!done) return null;
                var lines = this._lines;
                if (this._addOffsets) {
                    lines = lines.map(function(line, index) {
                        var position = formatHex(_this._offsets[index], 4);
                        return line + " ;; @" + position;
                    });
                }
                lines.push(""); // we need '\n' after last line
                var result = lines.join("\n");
                this._lines.length = 0;
                this._offsets.length = 0;
                this._functionBodyOffsets.length = 0;
                return result;
            }
        },
        {
            key: "getResult",
            value: function getResult() {
                var linesReady = this._lines.length;
                if (this._backrefLabels && this._labelMode === LabelMode.WhenUsed) {
                    this._backrefLabels.some(function(backrefLabel) {
                        if (backrefLabel.useLabel) return false;
                        linesReady = backrefLabel.line;
                        return true;
                    });
                }
                if (linesReady === 0) {
                    return {
                        lines: [],
                        offsets: this._addOffsets ? [] : undefined,
                        done: this._done,
                        functionBodyOffsets: this._addOffsets ? [] : undefined
                    };
                }
                if (linesReady === this._lines.length) {
                    var result = {
                        lines: this._lines,
                        offsets: this._addOffsets ? this._offsets : undefined,
                        done: this._done,
                        functionBodyOffsets: this._addOffsets ? this._functionBodyOffsets : undefined
                    };
                    this._lines = [];
                    if (this._addOffsets) {
                        this._offsets = [];
                        this._functionBodyOffsets = [];
                    }
                    return result;
                }
                var result1 = {
                    lines: this._lines.splice(0, linesReady),
                    offsets: this._addOffsets ? this._offsets.splice(0, linesReady) : undefined,
                    done: false,
                    functionBodyOffsets: this._addOffsets ? this._functionBodyOffsets : undefined
                };
                if (this._backrefLabels) {
                    this._backrefLabels.forEach(function(backrefLabel) {
                        backrefLabel.line -= linesReady;
                    });
                }
                return result1;
            }
        },
        {
            key: "disassembleChunk",
            value: function disassembleChunk(reader) {
                var offsetInModule = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                if (this._done) throw new Error("Invalid state: disassembly process was already finished.");
                while(true){
                    this._currentPosition = reader.position + offsetInModule;
                    if (!reader.read()) return false;
                    switch(reader.state){
                        case 2 /* END_WASM */ :
                            this.appendBuffer(")");
                            this.newLine();
                            this._reset();
                            if (!reader.hasMoreBytes()) {
                                this._done = true;
                                return true;
                            }
                            break;
                        case -1 /* ERROR */ :
                            throw reader.error;
                        case 1 /* BEGIN_WASM */ :
                            this.appendBuffer("(module");
                            this.newLine();
                            break;
                        case 4 /* END_SECTION */ :
                            this._currentSectionId = -1 /* Unknown */ ;
                            break;
                        case 3 /* BEGIN_SECTION */ :
                            var sectionInfo = reader.result;
                            switch(sectionInfo.id){
                                case 1 /* Type */ :
                                case 2 /* Import */ :
                                case 7 /* Export */ :
                                case 6 /* Global */ :
                                case 3 /* Function */ :
                                case 8 /* Start */ :
                                case 10 /* Code */ :
                                case 5 /* Memory */ :
                                case 11 /* Data */ :
                                case 4 /* Table */ :
                                case 9 /* Element */ :
                                case 13 /* Event */ :
                                    this._currentSectionId = sectionInfo.id;
                                    break; // reading known section;
                                default:
                                    reader.skipSection();
                                    break;
                            }
                            break;
                        case 15 /* MEMORY_SECTION_ENTRY */ :
                            var memoryInfo = reader.result;
                            var memoryIndex = this._memoryCount++;
                            var memoryName = this._nameResolver.getMemoryName(memoryIndex, false);
                            this.appendBuffer("  (memory ".concat(memoryName));
                            if (this._exportMetadata !== null) {
                                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(var _iterator = this._exportMetadata.getMemoryExportNames(memoryIndex)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        var exportName = _step.value;
                                        this.appendBuffer(" (export ".concat(JSON.stringify(exportName), ")"));
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
                            }
                            this.appendBuffer(" ".concat(limitsToString(memoryInfo.limits)));
                            if (memoryInfo.shared) {
                                this.appendBuffer(" shared");
                            }
                            this.appendBuffer(")");
                            this.newLine();
                            break;
                        case 23 /* EVENT_SECTION_ENTRY */ :
                            var eventInfo = reader.result;
                            var eventIndex = this._eventCount++;
                            var eventName = this._nameResolver.getEventName(eventIndex, false);
                            this.appendBuffer("  (event ".concat(eventName));
                            if (this._exportMetadata !== null) {
                                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                try {
                                    for(var _iterator1 = this._exportMetadata.getEventExportNames(eventIndex)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                        var exportName1 = _step1.value;
                                        this.appendBuffer(" (export ".concat(JSON.stringify(exportName1), ")"));
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
                            }
                            this.printFuncType(eventInfo.typeIndex);
                            this.appendBuffer(")");
                            this.newLine();
                            break;
                        case 14 /* TABLE_SECTION_ENTRY */ :
                            var tableInfo = reader.result;
                            var tableIndex = this._tableCount++;
                            var tableName = this._nameResolver.getTableName(tableIndex, false);
                            this.appendBuffer("  (table ".concat(tableName));
                            if (this._exportMetadata !== null) {
                                var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                                try {
                                    for(var _iterator2 = this._exportMetadata.getTableExportNames(tableIndex)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                                        var exportName2 = _step2.value;
                                        this.appendBuffer(" (export ".concat(JSON.stringify(exportName2), ")"));
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
                            }
                            this.appendBuffer(" ".concat(limitsToString(tableInfo.limits), " ").concat(this.typeToString(tableInfo.elementType), ")"));
                            this.newLine();
                            break;
                        case 17 /* EXPORT_SECTION_ENTRY */ :
                            // Skip printing exports here when we have export metadata
                            // which we can use to print export information inline.
                            if (this._exportMetadata === null) {
                                var exportInfo = reader.result;
                                this.appendBuffer("  (export ");
                                this.printString(exportInfo.field);
                                this.appendBuffer(" ");
                                switch(exportInfo.kind){
                                    case 0 /* Function */ :
                                        var funcName = this._nameResolver.getFunctionName(exportInfo.index, exportInfo.index < this._importCount, true);
                                        this.appendBuffer("(func ".concat(funcName, ")"));
                                        break;
                                    case 1 /* Table */ :
                                        var tableName = this._nameResolver.getTableName(exportInfo.index, true);
                                        this.appendBuffer("(table ".concat(tableName, ")"));
                                        break;
                                    case 2 /* Memory */ :
                                        var memoryName = this._nameResolver.getMemoryName(exportInfo.index, true);
                                        this.appendBuffer("(memory ".concat(memoryName, ")"));
                                        break;
                                    case 3 /* Global */ :
                                        var globalName = this._nameResolver.getGlobalName(exportInfo.index, true);
                                        this.appendBuffer("(global ".concat(globalName, ")"));
                                        break;
                                    case 4 /* Event */ :
                                        var eventName = this._nameResolver.getEventName(exportInfo.index, true);
                                        this.appendBuffer("(event ".concat(eventName, ")"));
                                        break;
                                    default:
                                        throw new Error("Unsupported export ".concat(exportInfo.kind));
                                }
                                this.appendBuffer(")");
                                this.newLine();
                            }
                            break;
                        case 12 /* IMPORT_SECTION_ENTRY */ :
                            var importInfo = reader.result;
                            switch(importInfo.kind){
                                case 0 /* Function */ :
                                    this._importCount++;
                                    var funcIndex = this._funcIndex++;
                                    var funcName = this._nameResolver.getFunctionName(funcIndex, true, false);
                                    this.appendBuffer("  (func ".concat(funcName));
                                    if (this._exportMetadata !== null) {
                                        var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
                                        try {
                                            for(var _iterator3 = this._exportMetadata.getFunctionExportNames(funcIndex)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                                                var exportName3 = _step3.value;
                                                this.appendBuffer(" (export ".concat(JSON.stringify(exportName3), ")"));
                                            }
                                        } catch (err) {
                                            _didIteratorError3 = true;
                                            _iteratorError3 = err;
                                        } finally{
                                            try {
                                                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                                                    _iterator3.return();
                                                }
                                            } finally{
                                                if (_didIteratorError3) {
                                                    throw _iteratorError3;
                                                }
                                            }
                                        }
                                    }
                                    this.appendBuffer(" (import ");
                                    this.printImportSource(importInfo);
                                    this.appendBuffer(")");
                                    this.printFuncType(importInfo.funcTypeIndex);
                                    this.appendBuffer(")");
                                    break;
                                case 3 /* Global */ :
                                    var globalImportInfo = importInfo.type;
                                    var globalIndex = this._globalCount++;
                                    var globalName = this._nameResolver.getGlobalName(globalIndex, false);
                                    this.appendBuffer("  (global ".concat(globalName));
                                    if (this._exportMetadata !== null) {
                                        var _iteratorNormalCompletion4 = true, _didIteratorError4 = false, _iteratorError4 = undefined;
                                        try {
                                            for(var _iterator4 = this._exportMetadata.getGlobalExportNames(globalIndex)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true){
                                                var exportName4 = _step4.value;
                                                this.appendBuffer(" (export ".concat(JSON.stringify(exportName4), ")"));
                                            }
                                        } catch (err) {
                                            _didIteratorError4 = true;
                                            _iteratorError4 = err;
                                        } finally{
                                            try {
                                                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                                                    _iterator4.return();
                                                }
                                            } finally{
                                                if (_didIteratorError4) {
                                                    throw _iteratorError4;
                                                }
                                            }
                                        }
                                    }
                                    this.appendBuffer(" (import ");
                                    this.printImportSource(importInfo);
                                    this.appendBuffer(") ".concat(this.globalTypeToString(globalImportInfo), ")"));
                                    break;
                                case 2 /* Memory */ :
                                    var memoryImportInfo = importInfo.type;
                                    var memoryIndex = this._memoryCount++;
                                    var memoryName = this._nameResolver.getMemoryName(memoryIndex, false);
                                    this.appendBuffer("  (memory ".concat(memoryName));
                                    if (this._exportMetadata !== null) {
                                        var _iteratorNormalCompletion5 = true, _didIteratorError5 = false, _iteratorError5 = undefined;
                                        try {
                                            for(var _iterator5 = this._exportMetadata.getMemoryExportNames(memoryIndex)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true){
                                                var exportName5 = _step5.value;
                                                this.appendBuffer(" (export ".concat(JSON.stringify(exportName5), ")"));
                                            }
                                        } catch (err) {
                                            _didIteratorError5 = true;
                                            _iteratorError5 = err;
                                        } finally{
                                            try {
                                                if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                                                    _iterator5.return();
                                                }
                                            } finally{
                                                if (_didIteratorError5) {
                                                    throw _iteratorError5;
                                                }
                                            }
                                        }
                                    }
                                    this.appendBuffer(" (import ");
                                    this.printImportSource(importInfo);
                                    this.appendBuffer(") ".concat(limitsToString(memoryImportInfo.limits)));
                                    if (memoryImportInfo.shared) {
                                        this.appendBuffer(" shared");
                                    }
                                    this.appendBuffer(")");
                                    break;
                                case 1 /* Table */ :
                                    var tableImportInfo = importInfo.type;
                                    var tableIndex = this._tableCount++;
                                    var tableName = this._nameResolver.getTableName(tableIndex, false);
                                    this.appendBuffer("  (table ".concat(tableName));
                                    if (this._exportMetadata !== null) {
                                        var _iteratorNormalCompletion6 = true, _didIteratorError6 = false, _iteratorError6 = undefined;
                                        try {
                                            for(var _iterator6 = this._exportMetadata.getTableExportNames(tableIndex)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true){
                                                var exportName6 = _step6.value;
                                                this.appendBuffer(" (export ".concat(JSON.stringify(exportName6), ")"));
                                            }
                                        } catch (err) {
                                            _didIteratorError6 = true;
                                            _iteratorError6 = err;
                                        } finally{
                                            try {
                                                if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                                                    _iterator6.return();
                                                }
                                            } finally{
                                                if (_didIteratorError6) {
                                                    throw _iteratorError6;
                                                }
                                            }
                                        }
                                    }
                                    this.appendBuffer(" (import ");
                                    this.printImportSource(importInfo);
                                    this.appendBuffer(") ".concat(limitsToString(tableImportInfo.limits), " ").concat(this.typeToString(tableImportInfo.elementType), ")"));
                                    break;
                                case 4 /* Event */ :
                                    var eventImportInfo = importInfo.type;
                                    var eventIndex = this._eventCount++;
                                    var eventName = this._nameResolver.getEventName(eventIndex, false);
                                    this.appendBuffer("  (event ".concat(eventName));
                                    if (this._exportMetadata !== null) {
                                        var _iteratorNormalCompletion7 = true, _didIteratorError7 = false, _iteratorError7 = undefined;
                                        try {
                                            for(var _iterator7 = this._exportMetadata.getEventExportNames(eventIndex)[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true){
                                                var exportName7 = _step7.value;
                                                this.appendBuffer(" (export ".concat(JSON.stringify(exportName7), ")"));
                                            }
                                        } catch (err) {
                                            _didIteratorError7 = true;
                                            _iteratorError7 = err;
                                        } finally{
                                            try {
                                                if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                                                    _iterator7.return();
                                                }
                                            } finally{
                                                if (_didIteratorError7) {
                                                    throw _iteratorError7;
                                                }
                                            }
                                        }
                                    }
                                    this.appendBuffer(" (import ");
                                    this.printImportSource(importInfo);
                                    this.appendBuffer(")");
                                    this.printFuncType(eventImportInfo.typeIndex);
                                    this.appendBuffer(")");
                                    break;
                                default:
                                    throw new Error("NYI other import types: ".concat(importInfo.kind));
                            }
                            this.newLine();
                            break;
                        case 33 /* BEGIN_ELEMENT_SECTION_ENTRY */ :
                            var elementSegment = reader.result;
                            var elementIndex = this._elementCount++;
                            var elementName = this._nameResolver.getElementName(elementIndex, false);
                            this.appendBuffer("  (elem ".concat(elementName));
                            switch(elementSegment.mode){
                                case 0 /* Active */ :
                                    if (elementSegment.tableIndex !== 0) {
                                        var tableName1 = this._nameResolver.getTableName(elementSegment.tableIndex, false);
                                        this.appendBuffer(" (table ".concat(tableName1, ")"));
                                    }
                                    break;
                                case 1 /* Passive */ :
                                    break;
                                case 2 /* Declarative */ :
                                    this.appendBuffer(" declare");
                                    break;
                            }
                            break;
                        case 35 /* END_ELEMENT_SECTION_ENTRY */ :
                            this.appendBuffer(")");
                            this.newLine();
                            break;
                        case 34 /* ELEMENT_SECTION_ENTRY_BODY */ :
                            var elementSegmentBody = reader.result;
                            this.appendBuffer(" ".concat(this.typeToString(elementSegmentBody.elementType)));
                            break;
                        case 39 /* BEGIN_GLOBAL_SECTION_ENTRY */ :
                            var globalInfo = reader.result;
                            var globalIndex = this._globalCount++;
                            var globalName = this._nameResolver.getGlobalName(globalIndex, false);
                            this.appendBuffer("  (global ".concat(globalName));
                            if (this._exportMetadata !== null) {
                                var _iteratorNormalCompletion8 = true, _didIteratorError8 = false, _iteratorError8 = undefined;
                                try {
                                    for(var _iterator8 = this._exportMetadata.getGlobalExportNames(globalIndex)[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true){
                                        var exportName8 = _step8.value;
                                        this.appendBuffer(" (export ".concat(JSON.stringify(exportName8), ")"));
                                    }
                                } catch (err) {
                                    _didIteratorError8 = true;
                                    _iteratorError8 = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
                                            _iterator8.return();
                                        }
                                    } finally{
                                        if (_didIteratorError8) {
                                            throw _iteratorError8;
                                        }
                                    }
                                }
                            }
                            this.appendBuffer(" ".concat(this.globalTypeToString(globalInfo.type)));
                            break;
                        case 40 /* END_GLOBAL_SECTION_ENTRY */ :
                            this.appendBuffer(")");
                            this.newLine();
                            break;
                        case 11 /* TYPE_SECTION_ENTRY */ :
                            var typeEntry = reader.result;
                            var typeIndex = this._types.length;
                            this._types.push(typeEntry);
                            if (!this._skipTypes) {
                                var typeName = this._nameResolver.getTypeName(typeIndex, false);
                                var superTypeName = undefined;
                                if (typeEntry.supertype !== undefined) {
                                    superTypeName = this.typeIndexToString(typeEntry.supertype);
                                }
                                if (typeEntry.form === -32 /* func */ ) {
                                    this.appendBuffer("  (type ".concat(typeName, " (func"));
                                    this.printFuncType(typeIndex);
                                    this.appendBuffer("))");
                                } else if (typeEntry.form === -35 /* func_subtype */ ) {
                                    this.appendBuffer("  (type ".concat(typeName, " (func_subtype"));
                                    this.printFuncType(typeIndex);
                                    this.appendBuffer(" (supertype ".concat(superTypeName, ")))"));
                                } else if (typeEntry.form === -33 /* struct */ ) {
                                    this.appendBuffer("  (type ".concat(typeName, " (struct"));
                                    this.printStructType(typeIndex);
                                    this.appendBuffer("))");
                                } else if (typeEntry.form === -36 /* struct_subtype */ ) {
                                    this.appendBuffer("  (type ".concat(typeName, " (struct_subtype"));
                                    this.printStructType(typeIndex);
                                    this.appendBuffer(" (supertype ".concat(superTypeName, ")))"));
                                } else if (typeEntry.form === -34 /* array */ ) {
                                    this.appendBuffer("  (type ".concat(typeName, " (array"));
                                    this.printArrayType(typeIndex);
                                    this.appendBuffer("))");
                                } else if (typeEntry.form === -37 /* array_subtype */ ) {
                                    this.appendBuffer("  (type ".concat(typeName, " (array_subtype"));
                                    this.printArrayType(typeIndex);
                                    this.appendBuffer(") (supertype ".concat(superTypeName, ")))"));
                                } else {
                                    throw new Error("Unknown type form: ".concat(typeEntry.form));
                                }
                                this.newLine();
                            }
                            break;
                        case 22 /* START_SECTION_ENTRY */ :
                            var startEntry = reader.result;
                            var funcName = this._nameResolver.getFunctionName(startEntry.index, startEntry.index < this._importCount, true);
                            this.appendBuffer("  (start ".concat(funcName, ")"));
                            this.newLine();
                            break;
                        case 36 /* BEGIN_DATA_SECTION_ENTRY */ :
                            this.appendBuffer("  (data");
                            break;
                        case 37 /* DATA_SECTION_ENTRY_BODY */ :
                            var body = reader.result;
                            this.appendBuffer(" ");
                            this.printString(body.data);
                            break;
                        case 38 /* END_DATA_SECTION_ENTRY */ :
                            this.appendBuffer(")");
                            this.newLine();
                            break;
                        case 25 /* BEGIN_INIT_EXPRESSION_BODY */ :
                        case 44 /* BEGIN_OFFSET_EXPRESSION_BODY */ :
                            this._expression = [];
                            break;
                        case 26 /* INIT_EXPRESSION_OPERATOR */ :
                        case 45 /* OFFSET_EXPRESSION_OPERATOR */ :
                            var operator = reader.result;
                            if (operator.code !== 11 /* end */ ) {
                                this._expression.push(operator);
                            }
                            break;
                        case 46 /* END_OFFSET_EXPRESSION_BODY */ :
                            if (this._expression.length > 1) {
                                this.appendBuffer(" (offset ");
                                this.printExpression(this._expression);
                                this.appendBuffer(")");
                            } else {
                                this.appendBuffer(" ");
                                this.printExpression(this._expression);
                            }
                            this._expression = [];
                            break;
                        case 27 /* END_INIT_EXPRESSION_BODY */ :
                            if (this._expression.length > 1 && this._currentSectionId === 9 /* Element */ ) {
                                this.appendBuffer(" (item ");
                                this.printExpression(this._expression);
                                this.appendBuffer(")");
                            } else {
                                this.appendBuffer(" ");
                                this.printExpression(this._expression);
                            }
                            this._expression = [];
                            break;
                        case 13 /* FUNCTION_SECTION_ENTRY */ :
                            this._funcTypes.push(reader.result.typeIndex);
                            break;
                        case 28 /* BEGIN_FUNCTION_BODY */ :
                            var func = reader.result;
                            var type = this._types[this._funcTypes[this._funcIndex - this._importCount]];
                            this.appendBuffer("  (func ");
                            this.appendBuffer(this._nameResolver.getFunctionName(this._funcIndex, false, false));
                            if (this._exportMetadata !== null) {
                                var _iteratorNormalCompletion9 = true, _didIteratorError9 = false, _iteratorError9 = undefined;
                                try {
                                    for(var _iterator9 = this._exportMetadata.getFunctionExportNames(this._funcIndex)[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true){
                                        var exportName9 = _step9.value;
                                        this.appendBuffer(" (export ".concat(JSON.stringify(exportName9), ")"));
                                    }
                                } catch (err) {
                                    _didIteratorError9 = true;
                                    _iteratorError9 = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
                                            _iterator9.return();
                                        }
                                    } finally{
                                        if (_didIteratorError9) {
                                            throw _iteratorError9;
                                        }
                                    }
                                }
                            }
                            for(var i = 0; i < type.params.length; i++){
                                var paramName = this._nameResolver.getVariableName(this._funcIndex, i, false);
                                this.appendBuffer(" (param ".concat(paramName, " ").concat(this.typeToString(type.params[i]), ")"));
                            }
                            for(var i = 0; i < type.returns.length; i++){
                                this.appendBuffer(" (result ".concat(this.typeToString(type.returns[i]), ")"));
                            }
                            this.newLine();
                            var localIndex = type.params.length;
                            if (func.locals.length > 0) {
                                this.appendBuffer("   ");
                                var _iteratorNormalCompletion10 = true, _didIteratorError10 = false, _iteratorError10 = undefined;
                                try {
                                    for(var _iterator10 = func.locals[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true){
                                        var l = _step10.value;
                                        for(var i = 0; i < l.count; i++){
                                            var paramName = this._nameResolver.getVariableName(this._funcIndex, localIndex++, false);
                                            this.appendBuffer(" (local ".concat(paramName, " ").concat(this.typeToString(l.type), ")"));
                                        }
                                    }
                                } catch (err) {
                                    _didIteratorError10 = true;
                                    _iteratorError10 = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
                                            _iterator10.return();
                                        }
                                    } finally{
                                        if (_didIteratorError10) {
                                            throw _iteratorError10;
                                        }
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
                        case 30 /* CODE_OPERATOR */ :
                            if (this._logFirstInstruction) {
                                this.logStartOfFunctionBodyOffset();
                                this._logFirstInstruction = false;
                            }
                            var operator = reader.result;
                            if (operator.code == 11 /* end */  && this._indentLevel == 0) {
                                // reached of the function, closing function body
                                this.appendBuffer("  )");
                                this.newLine();
                                break;
                            }
                            switch(operator.code){
                                case 11 /* end */ :
                                case 5 /* else */ :
                                case 7 /* catch */ :
                                case 25 /* catch_all */ :
                                case 10 /* unwind */ :
                                case 24 /* delegate */ :
                                    this.decreaseIndent();
                                    break;
                            }
                            this.appendBuffer(this._indent);
                            this.printOperator(operator);
                            this.newLine();
                            switch(operator.code){
                                case 4 /* if */ :
                                case 2 /* block */ :
                                case 3 /* loop */ :
                                case 5 /* else */ :
                                case 6 /* try */ :
                                case 7 /* catch */ :
                                case 25 /* catch_all */ :
                                case 10 /* unwind */ :
                                    this.increaseIndent();
                                    break;
                            }
                            break;
                        case 31 /* END_FUNCTION_BODY */ :
                            this._funcIndex++;
                            this._backrefLabels = null;
                            this.logEndOfFunctionBodyOffset();
                            break;
                        default:
                            throw new Error("Expectected state: ".concat(reader.state));
                    }
                }
            }
        }
    ]);
    return WasmDisassembler;
}();
var UNKNOWN_FUNCTION_PREFIX = "unknown";
var NameSectionNameResolver = /*#__PURE__*/ function(DefaultNameResolver) {
    "use strict";
    _inherits(NameSectionNameResolver, DefaultNameResolver);
    var _super = _create_super(NameSectionNameResolver);
    function NameSectionNameResolver(functionNames, localNames, eventNames, typeNames, tableNames, memoryNames, globalNames, fieldNames) {
        _class_call_check(this, NameSectionNameResolver);
        var _this;
        _this = _super.call(this);
        _this._functionNames = functionNames;
        _this._localNames = localNames;
        _this._eventNames = eventNames;
        _this._typeNames = typeNames;
        _this._tableNames = tableNames;
        _this._memoryNames = memoryNames;
        _this._globalNames = globalNames;
        _this._fieldNames = fieldNames;
        return _this;
    }
    _create_class(NameSectionNameResolver, [
        {
            key: "getTypeName",
            value: function getTypeName(index, isRef) {
                var name = this._typeNames[index];
                if (!name) return _get(_get_prototype_of(NameSectionNameResolver.prototype), "getTypeName", this).call(this, index, isRef);
                return isRef ? "$".concat(name) : "$".concat(name, " (;").concat(index, ";)");
            }
        },
        {
            key: "getTableName",
            value: function getTableName(index, isRef) {
                var name = this._tableNames[index];
                if (!name) return _get(_get_prototype_of(NameSectionNameResolver.prototype), "getTableName", this).call(this, index, isRef);
                return isRef ? "$".concat(name) : "$".concat(name, " (;").concat(index, ";)");
            }
        },
        {
            key: "getMemoryName",
            value: function getMemoryName(index, isRef) {
                var name = this._memoryNames[index];
                if (!name) return _get(_get_prototype_of(NameSectionNameResolver.prototype), "getMemoryName", this).call(this, index, isRef);
                return isRef ? "$".concat(name) : "$".concat(name, " (;").concat(index, ";)");
            }
        },
        {
            key: "getGlobalName",
            value: function getGlobalName(index, isRef) {
                var name = this._globalNames[index];
                if (!name) return _get(_get_prototype_of(NameSectionNameResolver.prototype), "getGlobalName", this).call(this, index, isRef);
                return isRef ? "$".concat(name) : "$".concat(name, " (;").concat(index, ";)");
            }
        },
        {
            key: "getEventName",
            value: function getEventName(index, isRef) {
                var name = this._eventNames[index];
                if (!name) return _get(_get_prototype_of(NameSectionNameResolver.prototype), "getEventName", this).call(this, index, isRef);
                return isRef ? "$".concat(name) : "$".concat(name, " (;").concat(index, ";)");
            }
        },
        {
            key: "getFunctionName",
            value: function getFunctionName(index, isImport, isRef) {
                var name = this._functionNames[index];
                if (!name) return "$".concat(UNKNOWN_FUNCTION_PREFIX).concat(index);
                return isRef ? "$".concat(name) : "$".concat(name, " (;").concat(index, ";)");
            }
        },
        {
            key: "getVariableName",
            value: function getVariableName(funcIndex, index, isRef) {
                var name = this._localNames[funcIndex] && this._localNames[funcIndex][index];
                if (!name) return _get(_get_prototype_of(NameSectionNameResolver.prototype), "getVariableName", this).call(this, funcIndex, index, isRef);
                return isRef ? "$".concat(name) : "$".concat(name, " (;").concat(index, ";)");
            }
        },
        {
            key: "getFieldName",
            value: function getFieldName(typeIndex, index, isRef) {
                var name = this._fieldNames[typeIndex] && this._fieldNames[typeIndex][index];
                if (!name) return _get(_get_prototype_of(NameSectionNameResolver.prototype), "getFieldName", this).call(this, typeIndex, index, isRef);
                return isRef ? "$".concat(name) : "$".concat(name, " (;").concat(index, ";)");
            }
        }
    ]);
    return NameSectionNameResolver;
}(DefaultNameResolver);
var NameSectionReader = /*#__PURE__*/ function() {
    "use strict";
    function NameSectionReader() {
        _class_call_check(this, NameSectionReader);
        this._done = false;
        this._functionsCount = 0;
        this._functionImportsCount = 0;
        this._functionNames = null;
        this._functionLocalNames = null;
        this._eventNames = null;
        this._typeNames = null;
        this._tableNames = null;
        this._memoryNames = null;
        this._globalNames = null;
        this._fieldNames = null;
        this._hasNames = false;
    }
    _create_class(NameSectionReader, [
        {
            key: "read",
            value: function read(reader) {
                var _this = this;
                if (this._done) throw new Error("Invalid state: disassembly process was already finished.");
                while(true){
                    if (!reader.read()) return false;
                    switch(reader.state){
                        case 2 /* END_WASM */ :
                            if (!reader.hasMoreBytes()) {
                                this._done = true;
                                return true;
                            }
                            break;
                        case -1 /* ERROR */ :
                            throw reader.error;
                        case 1 /* BEGIN_WASM */ :
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
                        case 4 /* END_SECTION */ :
                            break;
                        case 3 /* BEGIN_SECTION */ :
                            var sectionInfo = reader.result;
                            if (sectionInfo.id === 0 /* Custom */  && (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(sectionInfo.name) === NAME_SECTION_NAME) {
                                break;
                            }
                            if (sectionInfo.id === 3 /* Function */  || sectionInfo.id === 2 /* Import */ ) {
                                break;
                            }
                            reader.skipSection();
                            break;
                        case 12 /* IMPORT_SECTION_ENTRY */ :
                            var importInfo = reader.result;
                            if (importInfo.kind === 0 /* Function */ ) this._functionImportsCount++;
                            break;
                        case 13 /* FUNCTION_SECTION_ENTRY */ :
                            this._functionsCount++;
                            break;
                        case 19 /* NAME_SECTION_ENTRY */ :
                            var nameInfo = reader.result;
                            if (nameInfo.type === 1 /* Function */ ) {
                                var names = nameInfo.names;
                                names.forEach(function(param) {
                                    var index = param.index, name = param.name;
                                    _this._functionNames[index] = (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(name);
                                });
                                this._hasNames = true;
                            } else if (nameInfo.type === 2 /* Local */ ) {
                                var funcs = nameInfo.funcs;
                                funcs.forEach(function(param) {
                                    var index = param.index, locals = param.locals;
                                    var localNames = _this._functionLocalNames[index] = [];
                                    locals.forEach(function(param) {
                                        var index = param.index, name = param.name;
                                        localNames[index] = (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(name);
                                    });
                                });
                                this._hasNames = true;
                            } else if (nameInfo.type === 3 /* Event */ ) {
                                var names1 = nameInfo.names;
                                names1.forEach(function(param) {
                                    var index = param.index, name = param.name;
                                    _this._eventNames[index] = (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(name);
                                });
                                this._hasNames = true;
                            } else if (nameInfo.type === 4 /* Type */ ) {
                                var names2 = nameInfo.names;
                                names2.forEach(function(param) {
                                    var index = param.index, name = param.name;
                                    _this._typeNames[index] = (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(name);
                                });
                                this._hasNames = true;
                            } else if (nameInfo.type === 5 /* Table */ ) {
                                var names3 = nameInfo.names;
                                names3.forEach(function(param) {
                                    var index = param.index, name = param.name;
                                    _this._tableNames[index] = (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(name);
                                });
                                this._hasNames = true;
                            } else if (nameInfo.type === 6 /* Memory */ ) {
                                var names4 = nameInfo.names;
                                names4.forEach(function(param) {
                                    var index = param.index, name = param.name;
                                    _this._memoryNames[index] = (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(name);
                                });
                                this._hasNames = true;
                            } else if (nameInfo.type === 7 /* Global */ ) {
                                var names5 = nameInfo.names;
                                names5.forEach(function(param) {
                                    var index = param.index, name = param.name;
                                    _this._globalNames[index] = (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(name);
                                });
                                this._hasNames = true;
                            } else if (nameInfo.type === 10 /* Field */ ) {
                                var types = nameInfo.types;
                                types.forEach(function(param) {
                                    var index = param.index, fields = param.fields;
                                    var fieldNames = _this._fieldNames[index] = [];
                                    fields.forEach(function(param) {
                                        var index = param.index, name = param.name;
                                        fieldNames[index] = (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(name);
                                    });
                                });
                            }
                            break;
                        default:
                            throw new Error("Expectected state: ".concat(reader.state));
                    }
                }
            }
        },
        {
            key: "hasValidNames",
            value: function hasValidNames() {
                return this._hasNames;
            }
        },
        {
            key: "getNameResolver",
            value: function getNameResolver() {
                if (!this.hasValidNames()) throw new Error("Has no valid name section");
                // Fix bad names.
                var functionNamesLength = this._functionImportsCount + this._functionsCount;
                var functionNames = this._functionNames.slice(0, functionNamesLength);
                var usedNameAt = Object.create(null);
                for(var i = 0; i < functionNames.length; i++){
                    var name = functionNames[i];
                    if (!name) continue;
                    var goodName = !(name in usedNameAt) && isValidName(name) && name.indexOf(UNKNOWN_FUNCTION_PREFIX) !== 0;
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
    ]);
    return NameSectionReader;
}();
var DevToolsNameResolver = /*#__PURE__*/ function(NameSectionNameResolver) {
    "use strict";
    _inherits(DevToolsNameResolver, NameSectionNameResolver);
    var _super = _create_super(DevToolsNameResolver);
    function DevToolsNameResolver(functionNames, localNames, eventNames, typeNames, tableNames, memoryNames, globalNames, fieldNames) {
        _class_call_check(this, DevToolsNameResolver);
        return _super.call(this, functionNames, localNames, eventNames, typeNames, tableNames, memoryNames, globalNames, fieldNames);
    }
    _create_class(DevToolsNameResolver, [
        {
            key: "getFunctionName",
            value: function getFunctionName(index, isImport, isRef) {
                var name = this._functionNames[index];
                if (!name) return isImport ? "$import".concat(index) : "$func".concat(index);
                return isRef ? "$".concat(name) : "$".concat(name, " (;").concat(index, ";)");
            }
        }
    ]);
    return DevToolsNameResolver;
}(NameSectionNameResolver);
var DevToolsNameGenerator = /*#__PURE__*/ function() {
    "use strict";
    function DevToolsNameGenerator() {
        _class_call_check(this, DevToolsNameGenerator);
        this._done = false;
        this._functionImportsCount = 0;
        this._memoryImportsCount = 0;
        this._tableImportsCount = 0;
        this._globalImportsCount = 0;
        this._eventImportsCount = 0;
        this._functionNames = null;
        this._functionLocalNames = null;
        this._eventNames = null;
        this._memoryNames = null;
        this._typeNames = null;
        this._tableNames = null;
        this._globalNames = null;
        this._fieldNames = null;
        this._functionExportNames = null;
        this._globalExportNames = null;
        this._memoryExportNames = null;
        this._tableExportNames = null;
        this._eventExportNames = null;
    }
    _create_class(DevToolsNameGenerator, [
        {
            key: "_addExportName",
            value: function _addExportName(exportNames, index, name) {
                var names = exportNames[index];
                if (names) {
                    names.push(name);
                } else {
                    exportNames[index] = [
                        name
                    ];
                }
            }
        },
        {
            key: "_setName",
            value: function _setName(names, index, name, isNameSectionName) {
                if (!name) return;
                if (isNameSectionName) {
                    if (!isValidName(name)) return;
                    names[index] = name;
                } else if (!names[index]) {
                    names[index] = name.replace(INVALID_NAME_SYMBOLS_REGEX_GLOBAL, "_");
                }
            }
        },
        {
            key: "read",
            value: function read(reader) {
                var _this = this;
                if (this._done) throw new Error("Invalid state: disassembly process was already finished.");
                while(true){
                    if (!reader.read()) return false;
                    switch(reader.state){
                        case 2 /* END_WASM */ :
                            if (!reader.hasMoreBytes()) {
                                this._done = true;
                                return true;
                            }
                            break;
                        case -1 /* ERROR */ :
                            throw reader.error;
                        case 1 /* BEGIN_WASM */ :
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
                        case 4 /* END_SECTION */ :
                            break;
                        case 3 /* BEGIN_SECTION */ :
                            var sectionInfo = reader.result;
                            if (sectionInfo.id === 0 /* Custom */  && (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(sectionInfo.name) === NAME_SECTION_NAME) {
                                break;
                            }
                            switch(sectionInfo.id){
                                case 2 /* Import */ :
                                case 7 /* Export */ :
                                    break; // reading known section;
                                default:
                                    reader.skipSection();
                                    break;
                            }
                            break;
                        case 12 /* IMPORT_SECTION_ENTRY */ :
                            var importInfo = reader.result;
                            var importName = "".concat((0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(importInfo.module), ".").concat((0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(importInfo.field));
                            switch(importInfo.kind){
                                case 0 /* Function */ :
                                    this._setName(this._functionNames, this._functionImportsCount++, importName, false);
                                    break;
                                case 1 /* Table */ :
                                    this._setName(this._tableNames, this._tableImportsCount++, importName, false);
                                    break;
                                case 2 /* Memory */ :
                                    this._setName(this._memoryNames, this._memoryImportsCount++, importName, false);
                                    break;
                                case 3 /* Global */ :
                                    this._setName(this._globalNames, this._globalImportsCount++, importName, false);
                                    break;
                                case 4 /* Event */ :
                                    this._setName(this._eventNames, this._eventImportsCount++, importName, false);
                                default:
                                    throw new Error("Unsupported export ".concat(importInfo.kind));
                            }
                            break;
                        case 19 /* NAME_SECTION_ENTRY */ :
                            var nameInfo = reader.result;
                            if (nameInfo.type === 1 /* Function */ ) {
                                var names = nameInfo.names;
                                names.forEach(function(param) {
                                    var index = param.index, name = param.name;
                                    _this._setName(_this._functionNames, index, (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(name), true);
                                });
                            } else if (nameInfo.type === 2 /* Local */ ) {
                                var funcs = nameInfo.funcs;
                                funcs.forEach(function(param) {
                                    var index = param.index, locals = param.locals;
                                    var localNames = _this._functionLocalNames[index] = [];
                                    locals.forEach(function(param) {
                                        var index = param.index, name = param.name;
                                        localNames[index] = (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(name);
                                    });
                                });
                            } else if (nameInfo.type === 3 /* Event */ ) {
                                var names1 = nameInfo.names;
                                names1.forEach(function(param) {
                                    var index = param.index, name = param.name;
                                    _this._setName(_this._eventNames, index, (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(name), true);
                                });
                            } else if (nameInfo.type === 4 /* Type */ ) {
                                var names2 = nameInfo.names;
                                names2.forEach(function(param) {
                                    var index = param.index, name = param.name;
                                    _this._setName(_this._typeNames, index, (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(name), true);
                                });
                            } else if (nameInfo.type === 5 /* Table */ ) {
                                var names3 = nameInfo.names;
                                names3.forEach(function(param) {
                                    var index = param.index, name = param.name;
                                    _this._setName(_this._tableNames, index, (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(name), true);
                                });
                            } else if (nameInfo.type === 6 /* Memory */ ) {
                                var names4 = nameInfo.names;
                                names4.forEach(function(param) {
                                    var index = param.index, name = param.name;
                                    _this._setName(_this._memoryNames, index, (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(name), true);
                                });
                            } else if (nameInfo.type === 7 /* Global */ ) {
                                var names5 = nameInfo.names;
                                names5.forEach(function(param) {
                                    var index = param.index, name = param.name;
                                    _this._setName(_this._globalNames, index, (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(name), true);
                                });
                            } else if (nameInfo.type === 10 /* Field */ ) {
                                var types = nameInfo.types;
                                types.forEach(function(param) {
                                    var index = param.index, fields = param.fields;
                                    var fieldNames = _this._fieldNames[index] = [];
                                    fields.forEach(function(param) {
                                        var index = param.index, name = param.name;
                                        fieldNames[index] = (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(name);
                                    });
                                });
                            }
                            break;
                        case 17 /* EXPORT_SECTION_ENTRY */ :
                            var exportInfo = reader.result;
                            var exportName = (0,_WasmParser_js__WEBPACK_IMPORTED_MODULE_0__.bytesToString)(exportInfo.field);
                            switch(exportInfo.kind){
                                case 0 /* Function */ :
                                    this._addExportName(this._functionExportNames, exportInfo.index, exportName);
                                    this._setName(this._functionNames, exportInfo.index, exportName, false);
                                    break;
                                case 3 /* Global */ :
                                    this._addExportName(this._globalExportNames, exportInfo.index, exportName);
                                    this._setName(this._globalNames, exportInfo.index, exportName, false);
                                    break;
                                case 2 /* Memory */ :
                                    this._addExportName(this._memoryExportNames, exportInfo.index, exportName);
                                    this._setName(this._memoryNames, exportInfo.index, exportName, false);
                                    break;
                                case 1 /* Table */ :
                                    this._addExportName(this._tableExportNames, exportInfo.index, exportName);
                                    this._setName(this._tableNames, exportInfo.index, exportName, false);
                                    break;
                                case 4 /* Event */ :
                                    this._addExportName(this._eventExportNames, exportInfo.index, exportName);
                                    this._setName(this._eventNames, exportInfo.index, exportName, false);
                                    break;
                                default:
                                    throw new Error("Unsupported export ".concat(exportInfo.kind));
                            }
                            break;
                        default:
                            throw new Error("Expectected state: ".concat(reader.state));
                    }
                }
            }
        },
        {
            key: "getExportMetadata",
            value: function getExportMetadata() {
                return new DevToolsExportMetadata(this._functionExportNames, this._globalExportNames, this._memoryExportNames, this._tableExportNames, this._eventExportNames);
            }
        },
        {
            key: "getNameResolver",
            value: function getNameResolver() {
                return new DevToolsNameResolver(this._functionNames, this._functionLocalNames, this._eventNames, this._typeNames, this._tableNames, this._memoryNames, this._globalNames, this._fieldNames);
            }
        }
    ]);
    return DevToolsNameGenerator;
} //# sourceMappingURL=WasmDis.js.map
();


}),

}]);