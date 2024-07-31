"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_entrypoints_heap_snapshot_worker_HeapSnapshotLoader_ts"],{

/***/ "./src/entrypoints/heap_snapshot_worker/HeapSnapshotLoader.ts":
/*!********************************************************************!*\
  !*** ./src/entrypoints/heap_snapshot_worker/HeapSnapshotLoader.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeapSnapshotLoader: () => (/* binding */ HeapSnapshotLoader)
/* harmony export */ });
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _HeapSnapshot_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeapSnapshot.js */ "./src/entrypoints/heap_snapshot_worker/HeapSnapshot.ts");
/*
 * Copyright (C) 2012 Google Inc. All rights reserved.
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
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _HeapSnapshotLoader_instances, _HeapSnapshotLoader_progress, _HeapSnapshotLoader_buffer, _HeapSnapshotLoader_dataCallback, _HeapSnapshotLoader_done, _HeapSnapshotLoader_snapshot, _HeapSnapshotLoader_array, _HeapSnapshotLoader_arrayIndex, _HeapSnapshotLoader_json, _HeapSnapshotLoader_reset, _HeapSnapshotLoader_parseUintArray, _HeapSnapshotLoader_parseStringsArray, _HeapSnapshotLoader_fetchChunk, _HeapSnapshotLoader_findToken, _HeapSnapshotLoader_parseArray, _HeapSnapshotLoader_parseInput;



class HeapSnapshotLoader {
    constructor(dispatcher) {
        _HeapSnapshotLoader_instances.add(this);
        _HeapSnapshotLoader_progress.set(this, void 0);
        _HeapSnapshotLoader_buffer.set(this, void 0);
        _HeapSnapshotLoader_dataCallback.set(this, void 0);
        _HeapSnapshotLoader_done.set(this, void 0);
        // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _HeapSnapshotLoader_snapshot.set(this, void 0);
        _HeapSnapshotLoader_array.set(this, void 0);
        _HeapSnapshotLoader_arrayIndex.set(this, void 0);
        _HeapSnapshotLoader_json.set(this, '');
        __classPrivateFieldGet(this, _HeapSnapshotLoader_instances, "m", _HeapSnapshotLoader_reset).call(this);
        __classPrivateFieldSet(this, _HeapSnapshotLoader_progress, new _HeapSnapshot_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotProgress(dispatcher), "f");
        __classPrivateFieldSet(this, _HeapSnapshotLoader_buffer, [], "f");
        __classPrivateFieldSet(this, _HeapSnapshotLoader_dataCallback, null, "f");
        __classPrivateFieldSet(this, _HeapSnapshotLoader_done, false, "f");
        void __classPrivateFieldGet(this, _HeapSnapshotLoader_instances, "m", _HeapSnapshotLoader_parseInput).call(this);
    }
    dispose() {
        __classPrivateFieldGet(this, _HeapSnapshotLoader_instances, "m", _HeapSnapshotLoader_reset).call(this);
    }
    close() {
        __classPrivateFieldSet(this, _HeapSnapshotLoader_done, true, "f");
        if (__classPrivateFieldGet(this, _HeapSnapshotLoader_dataCallback, "f")) {
            __classPrivateFieldGet(this, _HeapSnapshotLoader_dataCallback, "f").call(this, '');
        }
    }
    buildSnapshot() {
        __classPrivateFieldSet(this, _HeapSnapshotLoader_snapshot, __classPrivateFieldGet(this, _HeapSnapshotLoader_snapshot, "f") || {}, "f");
        __classPrivateFieldGet(this, _HeapSnapshotLoader_progress, "f").updateStatus('Processing snapshot…');
        const result = new _HeapSnapshot_js__WEBPACK_IMPORTED_MODULE_2__.JSHeapSnapshot(__classPrivateFieldGet(this, _HeapSnapshotLoader_snapshot, "f"), __classPrivateFieldGet(this, _HeapSnapshotLoader_progress, "f"));
        __classPrivateFieldGet(this, _HeapSnapshotLoader_instances, "m", _HeapSnapshotLoader_reset).call(this);
        return result;
    }
    write(chunk) {
        __classPrivateFieldGet(this, _HeapSnapshotLoader_buffer, "f").push(chunk);
        if (!__classPrivateFieldGet(this, _HeapSnapshotLoader_dataCallback, "f")) {
            return;
        }
        __classPrivateFieldGet(this, _HeapSnapshotLoader_dataCallback, "f").call(this, __classPrivateFieldGet(this, _HeapSnapshotLoader_buffer, "f").shift());
        __classPrivateFieldSet(this, _HeapSnapshotLoader_dataCallback, null, "f");
    }
}
_HeapSnapshotLoader_progress = new WeakMap(), _HeapSnapshotLoader_buffer = new WeakMap(), _HeapSnapshotLoader_dataCallback = new WeakMap(), _HeapSnapshotLoader_done = new WeakMap(), _HeapSnapshotLoader_snapshot = new WeakMap(), _HeapSnapshotLoader_array = new WeakMap(), _HeapSnapshotLoader_arrayIndex = new WeakMap(), _HeapSnapshotLoader_json = new WeakMap(), _HeapSnapshotLoader_instances = new WeakSet(), _HeapSnapshotLoader_reset = function _HeapSnapshotLoader_reset() {
    __classPrivateFieldSet(this, _HeapSnapshotLoader_json, '', "f");
    __classPrivateFieldSet(this, _HeapSnapshotLoader_snapshot, undefined, "f");
}, _HeapSnapshotLoader_parseUintArray = function _HeapSnapshotLoader_parseUintArray() {
    var _a, _b;
    let index = 0;
    const char0 = '0'.charCodeAt(0);
    const char9 = '9'.charCodeAt(0);
    const closingBracket = ']'.charCodeAt(0);
    const length = __classPrivateFieldGet(this, _HeapSnapshotLoader_json, "f").length;
    while (true) {
        while (index < length) {
            const code = __classPrivateFieldGet(this, _HeapSnapshotLoader_json, "f").charCodeAt(index);
            if (char0 <= code && code <= char9) {
                break;
            }
            else if (code === closingBracket) {
                __classPrivateFieldSet(this, _HeapSnapshotLoader_json, __classPrivateFieldGet(this, _HeapSnapshotLoader_json, "f").slice(index + 1), "f");
                return false;
            }
            ++index;
        }
        if (index === length) {
            __classPrivateFieldSet(this, _HeapSnapshotLoader_json, '', "f");
            return true;
        }
        let nextNumber = 0;
        const startIndex = index;
        while (index < length) {
            const code = __classPrivateFieldGet(this, _HeapSnapshotLoader_json, "f").charCodeAt(index);
            if (char0 > code || code > char9) {
                break;
            }
            nextNumber *= 10;
            nextNumber += (code - char0);
            ++index;
        }
        if (index === length) {
            __classPrivateFieldSet(this, _HeapSnapshotLoader_json, __classPrivateFieldGet(this, _HeapSnapshotLoader_json, "f").slice(startIndex), "f");
            return true;
        }
        if (!__classPrivateFieldGet(this, _HeapSnapshotLoader_array, "f")) {
            throw new Error('Array not instantiated');
        }
        __classPrivateFieldGet(this, _HeapSnapshotLoader_array, "f").setValue((__classPrivateFieldSet(this, _HeapSnapshotLoader_arrayIndex, (_b = __classPrivateFieldGet(this, _HeapSnapshotLoader_arrayIndex, "f"), _a = _b++, _b), "f"), _a), nextNumber);
    }
}, _HeapSnapshotLoader_parseStringsArray = function _HeapSnapshotLoader_parseStringsArray() {
    __classPrivateFieldGet(this, _HeapSnapshotLoader_progress, "f").updateStatus('Parsing strings…');
    const closingBracketIndex = __classPrivateFieldGet(this, _HeapSnapshotLoader_json, "f").lastIndexOf(']');
    if (closingBracketIndex === -1) {
        throw new Error('Incomplete JSON');
    }
    __classPrivateFieldSet(this, _HeapSnapshotLoader_json, __classPrivateFieldGet(this, _HeapSnapshotLoader_json, "f").slice(0, closingBracketIndex + 1), "f");
    if (!__classPrivateFieldGet(this, _HeapSnapshotLoader_snapshot, "f")) {
        throw new Error('No snapshot in parseStringsArray');
    }
    __classPrivateFieldGet(this, _HeapSnapshotLoader_snapshot, "f").strings = JSON.parse(__classPrivateFieldGet(this, _HeapSnapshotLoader_json, "f"));
}, _HeapSnapshotLoader_fetchChunk = function _HeapSnapshotLoader_fetchChunk() {
    // This method shoudln't be entered more than once since parsing happens
    // sequentially. This means it's fine to stash away a single #dataCallback
    // instead of an array of them.
    if (__classPrivateFieldGet(this, _HeapSnapshotLoader_buffer, "f").length > 0) {
        return Promise.resolve(__classPrivateFieldGet(this, _HeapSnapshotLoader_buffer, "f").shift());
    }
    const { promise, resolve } = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.PromiseUtilities.promiseWithResolvers();
    __classPrivateFieldSet(this, _HeapSnapshotLoader_dataCallback, resolve, "f");
    return promise;
}, _HeapSnapshotLoader_findToken = async function _HeapSnapshotLoader_findToken(token, startIndex) {
    while (true) {
        const pos = __classPrivateFieldGet(this, _HeapSnapshotLoader_json, "f").indexOf(token, startIndex || 0);
        if (pos !== -1) {
            return pos;
        }
        startIndex = __classPrivateFieldGet(this, _HeapSnapshotLoader_json, "f").length - token.length + 1;
        __classPrivateFieldSet(this, _HeapSnapshotLoader_json, __classPrivateFieldGet(this, _HeapSnapshotLoader_json, "f") + await __classPrivateFieldGet(this, _HeapSnapshotLoader_instances, "m", _HeapSnapshotLoader_fetchChunk).call(this), "f");
    }
}, _HeapSnapshotLoader_parseArray = async function _HeapSnapshotLoader_parseArray(name, title, length) {
    const nameIndex = await __classPrivateFieldGet(this, _HeapSnapshotLoader_instances, "m", _HeapSnapshotLoader_findToken).call(this, name);
    const bracketIndex = await __classPrivateFieldGet(this, _HeapSnapshotLoader_instances, "m", _HeapSnapshotLoader_findToken).call(this, '[', nameIndex);
    __classPrivateFieldSet(this, _HeapSnapshotLoader_json, __classPrivateFieldGet(this, _HeapSnapshotLoader_json, "f").slice(bracketIndex + 1), "f");
    __classPrivateFieldSet(this, _HeapSnapshotLoader_array, length === undefined ? _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.TypedArrayUtilities.createExpandableBigUint32Array() :
        _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.TypedArrayUtilities.createFixedBigUint32Array(length), "f");
    __classPrivateFieldSet(this, _HeapSnapshotLoader_arrayIndex, 0, "f");
    while (__classPrivateFieldGet(this, _HeapSnapshotLoader_instances, "m", _HeapSnapshotLoader_parseUintArray).call(this)) {
        if (length) {
            __classPrivateFieldGet(this, _HeapSnapshotLoader_progress, "f").updateProgress(title, __classPrivateFieldGet(this, _HeapSnapshotLoader_arrayIndex, "f"), __classPrivateFieldGet(this, _HeapSnapshotLoader_array, "f").length);
        }
        else {
            __classPrivateFieldGet(this, _HeapSnapshotLoader_progress, "f").updateStatus(title);
        }
        __classPrivateFieldSet(this, _HeapSnapshotLoader_json, __classPrivateFieldGet(this, _HeapSnapshotLoader_json, "f") + await __classPrivateFieldGet(this, _HeapSnapshotLoader_instances, "m", _HeapSnapshotLoader_fetchChunk).call(this), "f");
    }
    const result = __classPrivateFieldGet(this, _HeapSnapshotLoader_array, "f");
    __classPrivateFieldSet(this, _HeapSnapshotLoader_array, null, "f");
    return result;
}, _HeapSnapshotLoader_parseInput = async function _HeapSnapshotLoader_parseInput() {
    const snapshotToken = '"snapshot"';
    const snapshotTokenIndex = await __classPrivateFieldGet(this, _HeapSnapshotLoader_instances, "m", _HeapSnapshotLoader_findToken).call(this, snapshotToken);
    if (snapshotTokenIndex === -1) {
        throw new Error('Snapshot token not found');
    }
    __classPrivateFieldGet(this, _HeapSnapshotLoader_progress, "f").updateStatus('Loading snapshot info…');
    const json = __classPrivateFieldGet(this, _HeapSnapshotLoader_json, "f").slice(snapshotTokenIndex + snapshotToken.length + 1);
    let jsonTokenizerDone = false;
    const jsonTokenizer = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__.TextUtils.BalancedJSONTokenizer(metaJSON => {
        __classPrivateFieldSet(this, _HeapSnapshotLoader_json, jsonTokenizer.remainder(), "f");
        jsonTokenizerDone = true;
        __classPrivateFieldSet(this, _HeapSnapshotLoader_snapshot, __classPrivateFieldGet(this, _HeapSnapshotLoader_snapshot, "f") || {}, "f");
        __classPrivateFieldGet(this, _HeapSnapshotLoader_snapshot, "f").snapshot = JSON.parse(metaJSON);
    });
    jsonTokenizer.write(json);
    while (!jsonTokenizerDone) {
        jsonTokenizer.write(await __classPrivateFieldGet(this, _HeapSnapshotLoader_instances, "m", _HeapSnapshotLoader_fetchChunk).call(this));
    }
    __classPrivateFieldSet(this, _HeapSnapshotLoader_snapshot, __classPrivateFieldGet(this, _HeapSnapshotLoader_snapshot, "f") || {}, "f");
    const nodes = await __classPrivateFieldGet(this, _HeapSnapshotLoader_instances, "m", _HeapSnapshotLoader_parseArray).call(this, '"nodes"', 'Loading nodes… {PH1}%', __classPrivateFieldGet(this, _HeapSnapshotLoader_snapshot, "f").snapshot.meta.node_fields.length * __classPrivateFieldGet(this, _HeapSnapshotLoader_snapshot, "f").snapshot.node_count);
    __classPrivateFieldGet(this, _HeapSnapshotLoader_snapshot, "f").nodes = nodes;
    const edges = await __classPrivateFieldGet(this, _HeapSnapshotLoader_instances, "m", _HeapSnapshotLoader_parseArray).call(this, '"edges"', 'Loading edges… {PH1}%', __classPrivateFieldGet(this, _HeapSnapshotLoader_snapshot, "f").snapshot.meta.edge_fields.length * __classPrivateFieldGet(this, _HeapSnapshotLoader_snapshot, "f").snapshot.edge_count);
    __classPrivateFieldGet(this, _HeapSnapshotLoader_snapshot, "f").edges = edges;
    if (__classPrivateFieldGet(this, _HeapSnapshotLoader_snapshot, "f").snapshot.trace_function_count) {
        const traceFunctionInfos = await __classPrivateFieldGet(this, _HeapSnapshotLoader_instances, "m", _HeapSnapshotLoader_parseArray).call(this, '"trace_function_infos"', 'Loading allocation traces… {PH1}%', __classPrivateFieldGet(this, _HeapSnapshotLoader_snapshot, "f").snapshot.meta.trace_function_info_fields.length *
            __classPrivateFieldGet(this, _HeapSnapshotLoader_snapshot, "f").snapshot.trace_function_count);
        __classPrivateFieldGet(this, _HeapSnapshotLoader_snapshot, "f").trace_function_infos = traceFunctionInfos.asUint32ArrayOrFail();
        const thisTokenEndIndex = await __classPrivateFieldGet(this, _HeapSnapshotLoader_instances, "m", _HeapSnapshotLoader_findToken).call(this, ':');
        const nextTokenIndex = await __classPrivateFieldGet(this, _HeapSnapshotLoader_instances, "m", _HeapSnapshotLoader_findToken).call(this, '"', thisTokenEndIndex);
        const openBracketIndex = __classPrivateFieldGet(this, _HeapSnapshotLoader_json, "f").indexOf('[');
        const closeBracketIndex = __classPrivateFieldGet(this, _HeapSnapshotLoader_json, "f").lastIndexOf(']', nextTokenIndex);
        __classPrivateFieldGet(this, _HeapSnapshotLoader_snapshot, "f").trace_tree = JSON.parse(__classPrivateFieldGet(this, _HeapSnapshotLoader_json, "f").substring(openBracketIndex, closeBracketIndex + 1));
        __classPrivateFieldSet(this, _HeapSnapshotLoader_json, __classPrivateFieldGet(this, _HeapSnapshotLoader_json, "f").slice(closeBracketIndex + 1), "f");
    }
    if (__classPrivateFieldGet(this, _HeapSnapshotLoader_snapshot, "f").snapshot.meta.sample_fields) {
        const samples = await __classPrivateFieldGet(this, _HeapSnapshotLoader_instances, "m", _HeapSnapshotLoader_parseArray).call(this, '"samples"', 'Loading samples…');
        __classPrivateFieldGet(this, _HeapSnapshotLoader_snapshot, "f").samples = samples.asArrayOrFail();
    }
    if (__classPrivateFieldGet(this, _HeapSnapshotLoader_snapshot, "f").snapshot.meta['location_fields']) {
        const locations = await __classPrivateFieldGet(this, _HeapSnapshotLoader_instances, "m", _HeapSnapshotLoader_parseArray).call(this, '"locations"', 'Loading locations…');
        __classPrivateFieldGet(this, _HeapSnapshotLoader_snapshot, "f").locations = locations.asArrayOrFail();
    }
    else {
        __classPrivateFieldGet(this, _HeapSnapshotLoader_snapshot, "f").locations = [];
    }
    __classPrivateFieldGet(this, _HeapSnapshotLoader_progress, "f").updateStatus('Loading strings…');
    const stringsTokenIndex = await __classPrivateFieldGet(this, _HeapSnapshotLoader_instances, "m", _HeapSnapshotLoader_findToken).call(this, '"strings"');
    const bracketIndex = await __classPrivateFieldGet(this, _HeapSnapshotLoader_instances, "m", _HeapSnapshotLoader_findToken).call(this, '[', stringsTokenIndex);
    __classPrivateFieldSet(this, _HeapSnapshotLoader_json, __classPrivateFieldGet(this, _HeapSnapshotLoader_json, "f").slice(bracketIndex), "f");
    while (!__classPrivateFieldGet(this, _HeapSnapshotLoader_done, "f")) {
        __classPrivateFieldSet(this, _HeapSnapshotLoader_json, __classPrivateFieldGet(this, _HeapSnapshotLoader_json, "f") + await __classPrivateFieldGet(this, _HeapSnapshotLoader_instances, "m", _HeapSnapshotLoader_fetchChunk).call(this), "f");
    }
    __classPrivateFieldGet(this, _HeapSnapshotLoader_instances, "m", _HeapSnapshotLoader_parseStringsArray).call(this);
};


/***/ })

}]);