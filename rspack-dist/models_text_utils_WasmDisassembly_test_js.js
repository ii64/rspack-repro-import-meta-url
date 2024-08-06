"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_text_utils_WasmDisassembly_test_js"], {
"./models/text_utils/WasmDisassembly.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _text_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text_utils.js */ "./models/text_utils/text_utils.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}

var WasmDisassembly = _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.WasmDisassembly.WasmDisassembly;
describe('WasmDisassembly', function() {
    var LINES = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        ' H',
        'I'
    ];
    var BYTECODE_OFFSETS = [
        0,
        10,
        23,
        32,
        35,
        37,
        39,
        40,
        75
    ];
    var FUNCTION_BODY_OFFSETS = [
        {
            start: 35,
            end: 41
        }
    ];
    it('reports the correct line numbers', function() {
        var disassembly = new WasmDisassembly(LINES, BYTECODE_OFFSETS, FUNCTION_BODY_OFFSETS);
        assert.strictEqual(disassembly.lineNumbers, BYTECODE_OFFSETS.length);
    });
    it('maps line numbers to bytecode offsets correctly', function() {
        var disassembly = new WasmDisassembly(LINES, BYTECODE_OFFSETS, FUNCTION_BODY_OFFSETS);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = BYTECODE_OFFSETS.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), lineNumber = _step_value[0], bytecodeOffset = _step_value[1];
                assert.strictEqual(disassembly.lineNumberToBytecodeOffset(lineNumber), bytecodeOffset);
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
    });
    it('maps bytecode offsets to line numbers correctly', function() {
        var disassembly = new WasmDisassembly(LINES, BYTECODE_OFFSETS, FUNCTION_BODY_OFFSETS);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = BYTECODE_OFFSETS.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), lineNumber = _step_value[0], bytecodeOffset = _step_value[1];
                assert.strictEqual(disassembly.bytecodeOffsetToLineNumber(bytecodeOffset), lineNumber);
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
    });
    it('yields non-breakable line numbers correctly', function() {
        var disassembly = new WasmDisassembly(LINES, BYTECODE_OFFSETS, FUNCTION_BODY_OFFSETS);
        assert.deepEqual(_to_consumable_array(disassembly.nonBreakableLineNumbers()), [
            0,
            1,
            2,
            3,
            8
        ]);
    });
    it('can be converted to a DeferredContent', function() {
        var disassembly = new WasmDisassembly(LINES, BYTECODE_OFFSETS, FUNCTION_BODY_OFFSETS);
        var content = disassembly.asDeferedContent();
        if ('wasmDisassemblyInfo' in content) {
            assert.strictEqual(content.wasmDisassemblyInfo, disassembly);
        } else {
            assert.fail('wasmDissasembly not set on DeferredContent');
        }
        assert.isEmpty(content.content);
        assert.isFalse(content.isEncoded);
    });
    it('produces the joined lines for the "text" property', function() {
        var disassembly = new WasmDisassembly(LINES, BYTECODE_OFFSETS, FUNCTION_BODY_OFFSETS);
        assert.strictEqual(disassembly.text, 'A\nB\nC\nD\nE\nF\nG\n H\nI');
    });
}); //# sourceMappingURL=WasmDisassembly.test.js.map


}),

}]);