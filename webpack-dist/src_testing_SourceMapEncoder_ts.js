"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_testing_SourceMapEncoder_ts"],{

/***/ "./src/testing/SourceMapEncoder.ts":
/*!*****************************************!*\
  !*** ./src/testing/SourceMapEncoder.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneratedRangeBuilder: () => (/* binding */ GeneratedRangeBuilder),
/* harmony export */   OriginalScopeBuilder: () => (/* binding */ OriginalScopeBuilder),
/* harmony export */   encodeSourceMap: () => (/* binding */ encodeSourceMap),
/* harmony export */   encodeVlq: () => (/* binding */ encodeVlq),
/* harmony export */   encodeVlqList: () => (/* binding */ encodeVlqList)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _OriginalScopeBuilder_instances, _OriginalScopeBuilder_encodedScope, _OriginalScopeBuilder_lastLine, _OriginalScopeBuilder_lastKind, _OriginalScopeBuilder_names, _OriginalScopeBuilder_encodeKind, _OriginalScopeBuilder_nameIdx, _GeneratedRangeBuilder_instances, _GeneratedRangeBuilder_encodedRange, _GeneratedRangeBuilder_state, _GeneratedRangeBuilder_names, _GeneratedRangeBuilder_emitLineSeparator, _GeneratedRangeBuilder_emitItemSepratorIfRequired, _GeneratedRangeBuilder_nameIdx;

const base64Digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
function encodeVlq(n) {
    // Set the sign bit as the least significant bit.
    n = n >= 0 ? 2 * n : 1 - 2 * n;
    // Encode into a base64 run.
    let result = '';
    while (true) {
        // Extract the lowest 5 bits and remove them from the number.
        const digit = n & 0x1f;
        n >>= 5;
        // Is there anything more left to encode?
        if (n === 0) {
            // We are done encoding, finish the run.
            result += base64Digits[digit];
            break;
        }
        else {
            // There is still more encode, so add the digit and the continuation bit.
            result += base64Digits[0x20 + digit];
        }
    }
    return result;
}
function encodeVlqList(list) {
    return list.map(encodeVlq).join('');
}
// Encode array mappings of the form "compiledLine:compiledColumn => srcFile:srcLine:srcColumn@name"
// as a source map.
function encodeSourceMap(textMap, sourceRoot) {
    let mappings = '';
    const sources = [];
    const names = [];
    let sourcesContent;
    const state = {
        line: -1,
        column: 0,
        srcFile: 0,
        srcLine: 0,
        srcColumn: 0,
        srcName: 0,
    };
    for (const mapping of textMap) {
        let match = mapping.match(/^(\d+):(\d+)(?:\s*=>\s*([^:]+):(\d+):(\d+)(?:@(\S+))?)?$/);
        if (!match) {
            match = mapping.match(/^([^:]+):\s*(.+)$/);
            if (!match) {
                throw new Error(`Cannot parse mapping "${mapping}"`);
            }
            (sourcesContent = sourcesContent ?? [])[getOrAddString(sources, match[1])] = match[2];
            continue;
        }
        const lastState = Object.assign({}, state);
        state.line = Number(match[1]);
        state.column = Number(match[2]);
        const hasSource = match[3] !== undefined;
        const hasName = hasSource && (match[6] !== undefined);
        if (hasSource) {
            state.srcFile = getOrAddString(sources, match[3]);
            state.srcLine = Number(match[4]);
            state.srcColumn = Number(match[5]);
            if (hasName) {
                state.srcName = getOrAddString(names, match[6]);
            }
        }
        if (state.line < lastState.line) {
            throw 'Line numbers must be increasing';
        }
        const isNewLine = state.line !== lastState.line;
        if (isNewLine) {
            // Fixup for the first line mapping.
            if (lastState.line === -1) {
                lastState.line = 0;
            }
            // Insert semicolons for all the new lines.
            mappings += ';'.repeat(state.line - lastState.line);
            // Reset the compiled code column counter.
            lastState.column = 0;
        }
        else {
            mappings += ',';
        }
        // Encode the mapping and add it to the list of mappings.
        const toEncode = [state.column - lastState.column];
        if (hasSource) {
            toEncode.push(state.srcFile - lastState.srcFile, state.srcLine - lastState.srcLine, state.srcColumn - lastState.srcColumn);
            if (hasName) {
                toEncode.push(state.srcName - lastState.srcName);
            }
        }
        mappings += encodeVlqList(toEncode);
    }
    const sourceMapV3 = { version: 3, mappings, sources, names };
    if (sourceRoot !== undefined) {
        sourceMapV3.sourceRoot = sourceRoot;
    }
    if (sourcesContent !== undefined) {
        for (let i = 0; i < sources.length; ++i) {
            if (typeof sourcesContent[i] !== 'string') {
                sourcesContent[i] = null;
            }
        }
        sourceMapV3.sourcesContent = sourcesContent;
    }
    return sourceMapV3;
    function getOrAddString(array, s) {
        const index = array.indexOf(s);
        if (index >= 0) {
            return index;
        }
        array.push(s);
        return array.length - 1;
    }
}
class OriginalScopeBuilder {
    /** The 'names' field of the SourceMap. The builder will modify it. */
    constructor(names) {
        _OriginalScopeBuilder_instances.add(this);
        _OriginalScopeBuilder_encodedScope.set(this, '');
        _OriginalScopeBuilder_lastLine.set(this, 0);
        _OriginalScopeBuilder_lastKind.set(this, 0);
        _OriginalScopeBuilder_names.set(this, void 0);
        __classPrivateFieldSet(this, _OriginalScopeBuilder_names, names, "f");
    }
    start(line, column, kind, name, variables) {
        if (__classPrivateFieldGet(this, _OriginalScopeBuilder_encodedScope, "f") !== '') {
            __classPrivateFieldSet(this, _OriginalScopeBuilder_encodedScope, __classPrivateFieldGet(this, _OriginalScopeBuilder_encodedScope, "f") + ',', "f");
        }
        const lineDiff = line - __classPrivateFieldGet(this, _OriginalScopeBuilder_lastLine, "f");
        __classPrivateFieldSet(this, _OriginalScopeBuilder_lastLine, line, "f");
        const flags = (name !== undefined ? 0x1 : 0x0);
        __classPrivateFieldSet(this, _OriginalScopeBuilder_encodedScope, __classPrivateFieldGet(this, _OriginalScopeBuilder_encodedScope, "f") + encodeVlqList([lineDiff, column, __classPrivateFieldGet(this, _OriginalScopeBuilder_instances, "m", _OriginalScopeBuilder_encodeKind).call(this, kind), flags]), "f");
        if (name !== undefined) {
            __classPrivateFieldSet(this, _OriginalScopeBuilder_encodedScope, __classPrivateFieldGet(this, _OriginalScopeBuilder_encodedScope, "f") + encodeVlq(__classPrivateFieldGet(this, _OriginalScopeBuilder_instances, "m", _OriginalScopeBuilder_nameIdx).call(this, name)), "f");
        }
        if (variables !== undefined) {
            __classPrivateFieldSet(this, _OriginalScopeBuilder_encodedScope, __classPrivateFieldGet(this, _OriginalScopeBuilder_encodedScope, "f") + encodeVlqList(variables.map(variable => __classPrivateFieldGet(this, _OriginalScopeBuilder_instances, "m", _OriginalScopeBuilder_nameIdx).call(this, variable))), "f");
        }
        return this;
    }
    end(line, column) {
        if (__classPrivateFieldGet(this, _OriginalScopeBuilder_encodedScope, "f") !== '') {
            __classPrivateFieldSet(this, _OriginalScopeBuilder_encodedScope, __classPrivateFieldGet(this, _OriginalScopeBuilder_encodedScope, "f") + ',', "f");
        }
        const lineDiff = line - __classPrivateFieldGet(this, _OriginalScopeBuilder_lastLine, "f");
        __classPrivateFieldSet(this, _OriginalScopeBuilder_lastLine, line, "f");
        __classPrivateFieldSet(this, _OriginalScopeBuilder_encodedScope, __classPrivateFieldGet(this, _OriginalScopeBuilder_encodedScope, "f") + encodeVlqList([lineDiff, column]), "f");
        return this;
    }
    build() {
        const result = __classPrivateFieldGet(this, _OriginalScopeBuilder_encodedScope, "f");
        __classPrivateFieldSet(this, _OriginalScopeBuilder_lastLine, 0, "f");
        __classPrivateFieldSet(this, _OriginalScopeBuilder_encodedScope, '', "f");
        return result;
    }
}
_OriginalScopeBuilder_encodedScope = new WeakMap(), _OriginalScopeBuilder_lastLine = new WeakMap(), _OriginalScopeBuilder_lastKind = new WeakMap(), _OriginalScopeBuilder_names = new WeakMap(), _OriginalScopeBuilder_instances = new WeakSet(), _OriginalScopeBuilder_encodeKind = function _OriginalScopeBuilder_encodeKind(kind) {
    const kindIdx = __classPrivateFieldGet(this, _OriginalScopeBuilder_instances, "m", _OriginalScopeBuilder_nameIdx).call(this, kind);
    const encodedIdx = kindIdx - __classPrivateFieldGet(this, _OriginalScopeBuilder_lastKind, "f");
    __classPrivateFieldSet(this, _OriginalScopeBuilder_lastKind, kindIdx, "f");
    return encodedIdx;
}, _OriginalScopeBuilder_nameIdx = function _OriginalScopeBuilder_nameIdx(name) {
    let idx = __classPrivateFieldGet(this, _OriginalScopeBuilder_names, "f").indexOf(name);
    if (idx < 0) {
        idx = __classPrivateFieldGet(this, _OriginalScopeBuilder_names, "f").length;
        __classPrivateFieldGet(this, _OriginalScopeBuilder_names, "f").push(name);
    }
    return idx;
};
class GeneratedRangeBuilder {
    /** The 'names' field of the SourceMap. The builder will modify it. */
    constructor(names) {
        _GeneratedRangeBuilder_instances.add(this);
        _GeneratedRangeBuilder_encodedRange.set(this, '');
        _GeneratedRangeBuilder_state.set(this, {
            line: 0,
            column: 0,
            defSourceIdx: 0,
            defScopeIdx: 0,
            callsiteSourceIdx: 0,
            callsiteLine: 0,
            callsiteColumn: 0,
        });
        _GeneratedRangeBuilder_names.set(this, void 0);
        __classPrivateFieldSet(this, _GeneratedRangeBuilder_names, names, "f");
    }
    start(line, column, options) {
        __classPrivateFieldGet(this, _GeneratedRangeBuilder_instances, "m", _GeneratedRangeBuilder_emitLineSeparator).call(this, line);
        __classPrivateFieldGet(this, _GeneratedRangeBuilder_instances, "m", _GeneratedRangeBuilder_emitItemSepratorIfRequired).call(this);
        const emittedColumn = column - (__classPrivateFieldGet(this, _GeneratedRangeBuilder_state, "f").line === line ? __classPrivateFieldGet(this, _GeneratedRangeBuilder_state, "f").column : 0);
        __classPrivateFieldSet(this, _GeneratedRangeBuilder_encodedRange, __classPrivateFieldGet(this, _GeneratedRangeBuilder_encodedRange, "f") + encodeVlq(emittedColumn), "f");
        __classPrivateFieldGet(this, _GeneratedRangeBuilder_state, "f").line = line;
        __classPrivateFieldGet(this, _GeneratedRangeBuilder_state, "f").column = column;
        let flags = 0;
        if (options?.definition) {
            flags |= _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SourceMapScopes.EncodedGeneratedRangeFlag.HasDefinition;
        }
        if (options?.callsite) {
            flags |= _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SourceMapScopes.EncodedGeneratedRangeFlag.HasCallsite;
        }
        if (options?.isScope) {
            flags |= _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SourceMapScopes.EncodedGeneratedRangeFlag.IsScope;
        }
        __classPrivateFieldSet(this, _GeneratedRangeBuilder_encodedRange, __classPrivateFieldGet(this, _GeneratedRangeBuilder_encodedRange, "f") + encodeVlq(flags), "f");
        if (options?.definition) {
            const { sourceIdx, scopeIdx } = options.definition;
            __classPrivateFieldSet(this, _GeneratedRangeBuilder_encodedRange, __classPrivateFieldGet(this, _GeneratedRangeBuilder_encodedRange, "f") + encodeVlq(sourceIdx - __classPrivateFieldGet(this, _GeneratedRangeBuilder_state, "f").defSourceIdx), "f");
            const emittedScopeIdx = scopeIdx - (__classPrivateFieldGet(this, _GeneratedRangeBuilder_state, "f").defSourceIdx === sourceIdx ? __classPrivateFieldGet(this, _GeneratedRangeBuilder_state, "f").defScopeIdx : 0);
            __classPrivateFieldSet(this, _GeneratedRangeBuilder_encodedRange, __classPrivateFieldGet(this, _GeneratedRangeBuilder_encodedRange, "f") + encodeVlq(emittedScopeIdx), "f");
            __classPrivateFieldGet(this, _GeneratedRangeBuilder_state, "f").defSourceIdx = sourceIdx;
            __classPrivateFieldGet(this, _GeneratedRangeBuilder_state, "f").defScopeIdx = scopeIdx;
        }
        if (options?.callsite) {
            const { sourceIdx, line, column } = options.callsite;
            __classPrivateFieldSet(this, _GeneratedRangeBuilder_encodedRange, __classPrivateFieldGet(this, _GeneratedRangeBuilder_encodedRange, "f") + encodeVlq(sourceIdx - __classPrivateFieldGet(this, _GeneratedRangeBuilder_state, "f").callsiteSourceIdx), "f");
            const emittedLine = line - (__classPrivateFieldGet(this, _GeneratedRangeBuilder_state, "f").callsiteSourceIdx === sourceIdx ? __classPrivateFieldGet(this, _GeneratedRangeBuilder_state, "f").callsiteLine : 0);
            __classPrivateFieldSet(this, _GeneratedRangeBuilder_encodedRange, __classPrivateFieldGet(this, _GeneratedRangeBuilder_encodedRange, "f") + encodeVlq(emittedLine), "f");
            const emittedColumn = column - (__classPrivateFieldGet(this, _GeneratedRangeBuilder_state, "f").callsiteLine === line ? __classPrivateFieldGet(this, _GeneratedRangeBuilder_state, "f").callsiteColumn : 0);
            __classPrivateFieldSet(this, _GeneratedRangeBuilder_encodedRange, __classPrivateFieldGet(this, _GeneratedRangeBuilder_encodedRange, "f") + encodeVlq(emittedColumn), "f");
            __classPrivateFieldGet(this, _GeneratedRangeBuilder_state, "f").callsiteSourceIdx = sourceIdx;
            __classPrivateFieldGet(this, _GeneratedRangeBuilder_state, "f").callsiteLine = line;
            __classPrivateFieldGet(this, _GeneratedRangeBuilder_state, "f").callsiteColumn = column;
        }
        for (const bindings of options?.bindings ?? []) {
            if (bindings === undefined || typeof bindings === 'string') {
                __classPrivateFieldSet(this, _GeneratedRangeBuilder_encodedRange, __classPrivateFieldGet(this, _GeneratedRangeBuilder_encodedRange, "f") + encodeVlq(__classPrivateFieldGet(this, _GeneratedRangeBuilder_instances, "m", _GeneratedRangeBuilder_nameIdx).call(this, bindings)), "f");
                continue;
            }
            __classPrivateFieldSet(this, _GeneratedRangeBuilder_encodedRange, __classPrivateFieldGet(this, _GeneratedRangeBuilder_encodedRange, "f") + encodeVlq(-bindings.length), "f");
            __classPrivateFieldSet(this, _GeneratedRangeBuilder_encodedRange, __classPrivateFieldGet(this, _GeneratedRangeBuilder_encodedRange, "f") + encodeVlq(__classPrivateFieldGet(this, _GeneratedRangeBuilder_instances, "m", _GeneratedRangeBuilder_nameIdx).call(this, bindings[0].name)), "f");
            if (bindings[0].line !== line || bindings[0].column !== column) {
                throw new Error('First binding line/column must match the range start line/column');
            }
            for (let i = 1; i < bindings.length; ++i) {
                const { line, column, name } = bindings[i];
                const emittedLine = line - bindings[i - 1].line;
                const emittedColumn = column - (line === bindings[i - 1].line ? bindings[i - 1].column : 0);
                __classPrivateFieldSet(this, _GeneratedRangeBuilder_encodedRange, __classPrivateFieldGet(this, _GeneratedRangeBuilder_encodedRange, "f") + encodeVlq(emittedLine), "f");
                __classPrivateFieldSet(this, _GeneratedRangeBuilder_encodedRange, __classPrivateFieldGet(this, _GeneratedRangeBuilder_encodedRange, "f") + encodeVlq(emittedColumn), "f");
                __classPrivateFieldSet(this, _GeneratedRangeBuilder_encodedRange, __classPrivateFieldGet(this, _GeneratedRangeBuilder_encodedRange, "f") + encodeVlq(__classPrivateFieldGet(this, _GeneratedRangeBuilder_instances, "m", _GeneratedRangeBuilder_nameIdx).call(this, name)), "f");
            }
        }
        return this;
    }
    end(line, column) {
        __classPrivateFieldGet(this, _GeneratedRangeBuilder_instances, "m", _GeneratedRangeBuilder_emitLineSeparator).call(this, line);
        __classPrivateFieldGet(this, _GeneratedRangeBuilder_instances, "m", _GeneratedRangeBuilder_emitItemSepratorIfRequired).call(this);
        const emittedColumn = column - (__classPrivateFieldGet(this, _GeneratedRangeBuilder_state, "f").line === line ? __classPrivateFieldGet(this, _GeneratedRangeBuilder_state, "f").column : 0);
        __classPrivateFieldSet(this, _GeneratedRangeBuilder_encodedRange, __classPrivateFieldGet(this, _GeneratedRangeBuilder_encodedRange, "f") + encodeVlq(emittedColumn), "f");
        __classPrivateFieldGet(this, _GeneratedRangeBuilder_state, "f").line = line;
        __classPrivateFieldGet(this, _GeneratedRangeBuilder_state, "f").column = column;
        return this;
    }
    build() {
        const result = __classPrivateFieldGet(this, _GeneratedRangeBuilder_encodedRange, "f");
        __classPrivateFieldSet(this, _GeneratedRangeBuilder_state, {
            line: 0,
            column: 0,
            defSourceIdx: 0,
            defScopeIdx: 0,
            callsiteSourceIdx: 0,
            callsiteLine: 0,
            callsiteColumn: 0,
        }, "f");
        __classPrivateFieldSet(this, _GeneratedRangeBuilder_encodedRange, '', "f");
        return result;
    }
}
_GeneratedRangeBuilder_encodedRange = new WeakMap(), _GeneratedRangeBuilder_state = new WeakMap(), _GeneratedRangeBuilder_names = new WeakMap(), _GeneratedRangeBuilder_instances = new WeakSet(), _GeneratedRangeBuilder_emitLineSeparator = function _GeneratedRangeBuilder_emitLineSeparator(line) {
    for (let i = __classPrivateFieldGet(this, _GeneratedRangeBuilder_state, "f").line; i < line; ++i) {
        __classPrivateFieldSet(this, _GeneratedRangeBuilder_encodedRange, __classPrivateFieldGet(this, _GeneratedRangeBuilder_encodedRange, "f") + ';', "f");
    }
}, _GeneratedRangeBuilder_emitItemSepratorIfRequired = function _GeneratedRangeBuilder_emitItemSepratorIfRequired() {
    if (__classPrivateFieldGet(this, _GeneratedRangeBuilder_encodedRange, "f") !== '' && __classPrivateFieldGet(this, _GeneratedRangeBuilder_encodedRange, "f")[__classPrivateFieldGet(this, _GeneratedRangeBuilder_encodedRange, "f").length - 1] !== ';') {
        __classPrivateFieldSet(this, _GeneratedRangeBuilder_encodedRange, __classPrivateFieldGet(this, _GeneratedRangeBuilder_encodedRange, "f") + ',', "f");
    }
}, _GeneratedRangeBuilder_nameIdx = function _GeneratedRangeBuilder_nameIdx(name) {
    if (name === undefined) {
        return -1;
    }
    let idx = __classPrivateFieldGet(this, _GeneratedRangeBuilder_names, "f").indexOf(name);
    if (idx < 0) {
        idx = __classPrivateFieldGet(this, _GeneratedRangeBuilder_names, "f").length;
        __classPrivateFieldGet(this, _GeneratedRangeBuilder_names, "f").push(name);
    }
    return idx;
};


/***/ })

}]);