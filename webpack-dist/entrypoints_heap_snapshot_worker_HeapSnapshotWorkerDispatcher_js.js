"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["entrypoints_heap_snapshot_worker_HeapSnapshotWorkerDispatcher_js"],{

/***/ "./entrypoints/heap_snapshot_worker/HeapSnapshotLoader.js":
/*!****************************************************************!*\
  !*** ./entrypoints/heap_snapshot_worker/HeapSnapshotLoader.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeapSnapshotLoader: () => (/* binding */ HeapSnapshotLoader)
/* harmony export */ });
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */ var _HeapSnapshot_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeapSnapshot.js */ "./entrypoints/heap_snapshot_worker/HeapSnapshot.js");
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



class HeapSnapshotLoader {
    #progress;
    #buffer;
    #dataCallback;
    #done;
    // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    #snapshot;
    #array;
    #arrayIndex;
    #json = '';
    constructor(dispatcher) {
        this.#reset();
        this.#progress = new _HeapSnapshot_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotProgress(dispatcher);
        this.#buffer = [];
        this.#dataCallback = null;
        this.#done = false;
        void this.#parseInput();
    }
    dispose() {
        this.#reset();
    }
    #reset() {
        this.#json = '';
        this.#snapshot = undefined;
    }
    close() {
        this.#done = true;
        if (this.#dataCallback) {
            this.#dataCallback('');
        }
    }
    buildSnapshot() {
        this.#snapshot = this.#snapshot || {};
        this.#progress.updateStatus('Processing snapshot…');
        const result = new _HeapSnapshot_js__WEBPACK_IMPORTED_MODULE_2__.JSHeapSnapshot(this.#snapshot, this.#progress);
        this.#reset();
        return result;
    }
    #parseUintArray() {
        let index = 0;
        const char0 = '0'.charCodeAt(0);
        const char9 = '9'.charCodeAt(0);
        const closingBracket = ']'.charCodeAt(0);
        const length = this.#json.length;
        while (true) {
            while (index < length) {
                const code = this.#json.charCodeAt(index);
                if (char0 <= code && code <= char9) {
                    break;
                }
                else if (code === closingBracket) {
                    this.#json = this.#json.slice(index + 1);
                    return false;
                }
                ++index;
            }
            if (index === length) {
                this.#json = '';
                return true;
            }
            let nextNumber = 0;
            const startIndex = index;
            while (index < length) {
                const code = this.#json.charCodeAt(index);
                if (char0 > code || code > char9) {
                    break;
                }
                nextNumber *= 10;
                nextNumber += (code - char0);
                ++index;
            }
            if (index === length) {
                this.#json = this.#json.slice(startIndex);
                return true;
            }
            if (!this.#array) {
                throw new Error('Array not instantiated');
            }
            this.#array.setValue(this.#arrayIndex++, nextNumber);
        }
    }
    #parseStringsArray() {
        this.#progress.updateStatus('Parsing strings…');
        const closingBracketIndex = this.#json.lastIndexOf(']');
        if (closingBracketIndex === -1) {
            throw new Error('Incomplete JSON');
        }
        this.#json = this.#json.slice(0, closingBracketIndex + 1);
        if (!this.#snapshot) {
            throw new Error('No snapshot in parseStringsArray');
        }
        this.#snapshot.strings = JSON.parse(this.#json);
    }
    write(chunk) {
        this.#buffer.push(chunk);
        if (!this.#dataCallback) {
            return;
        }
        this.#dataCallback(this.#buffer.shift());
        this.#dataCallback = null;
    }
    #fetchChunk() {
        // This method shoudln't be entered more than once since parsing happens
        // sequentially. This means it's fine to stash away a single #dataCallback
        // instead of an array of them.
        if (this.#buffer.length > 0) {
            return Promise.resolve(this.#buffer.shift());
        }
        const { promise, resolve } = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.PromiseUtilities.promiseWithResolvers();
        this.#dataCallback = resolve;
        return promise;
    }
    async #findToken(token, startIndex) {
        while (true) {
            const pos = this.#json.indexOf(token, startIndex || 0);
            if (pos !== -1) {
                return pos;
            }
            startIndex = this.#json.length - token.length + 1;
            this.#json += await this.#fetchChunk();
        }
    }
    async #parseArray(name, title, length) {
        const nameIndex = await this.#findToken(name);
        const bracketIndex = await this.#findToken('[', nameIndex);
        this.#json = this.#json.slice(bracketIndex + 1);
        this.#array = length === undefined ? _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.TypedArrayUtilities.createExpandableBigUint32Array() :
            _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.TypedArrayUtilities.createFixedBigUint32Array(length);
        this.#arrayIndex = 0;
        while (this.#parseUintArray()) {
            if (length) {
                this.#progress.updateProgress(title, this.#arrayIndex, this.#array.length);
            }
            else {
                this.#progress.updateStatus(title);
            }
            this.#json += await this.#fetchChunk();
        }
        const result = this.#array;
        this.#array = null;
        return result;
    }
    async #parseInput() {
        const snapshotToken = '"snapshot"';
        const snapshotTokenIndex = await this.#findToken(snapshotToken);
        if (snapshotTokenIndex === -1) {
            throw new Error('Snapshot token not found');
        }
        this.#progress.updateStatus('Loading snapshot info…');
        const json = this.#json.slice(snapshotTokenIndex + snapshotToken.length + 1);
        let jsonTokenizerDone = false;
        const jsonTokenizer = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__.TextUtils.BalancedJSONTokenizer(metaJSON => {
            this.#json = jsonTokenizer.remainder();
            jsonTokenizerDone = true;
            this.#snapshot = this.#snapshot || {};
            this.#snapshot.snapshot = JSON.parse(metaJSON);
        });
        jsonTokenizer.write(json);
        while (!jsonTokenizerDone) {
            jsonTokenizer.write(await this.#fetchChunk());
        }
        this.#snapshot = this.#snapshot || {};
        const nodes = await this.#parseArray('"nodes"', 'Loading nodes… {PH1}%', this.#snapshot.snapshot.meta.node_fields.length * this.#snapshot.snapshot.node_count);
        this.#snapshot.nodes = nodes;
        const edges = await this.#parseArray('"edges"', 'Loading edges… {PH1}%', this.#snapshot.snapshot.meta.edge_fields.length * this.#snapshot.snapshot.edge_count);
        this.#snapshot.edges = edges;
        if (this.#snapshot.snapshot.trace_function_count) {
            const traceFunctionInfos = await this.#parseArray('"trace_function_infos"', 'Loading allocation traces… {PH1}%', this.#snapshot.snapshot.meta.trace_function_info_fields.length *
                this.#snapshot.snapshot.trace_function_count);
            this.#snapshot.trace_function_infos = traceFunctionInfos.asUint32ArrayOrFail();
            const thisTokenEndIndex = await this.#findToken(':');
            const nextTokenIndex = await this.#findToken('"', thisTokenEndIndex);
            const openBracketIndex = this.#json.indexOf('[');
            const closeBracketIndex = this.#json.lastIndexOf(']', nextTokenIndex);
            this.#snapshot.trace_tree = JSON.parse(this.#json.substring(openBracketIndex, closeBracketIndex + 1));
            this.#json = this.#json.slice(closeBracketIndex + 1);
        }
        if (this.#snapshot.snapshot.meta.sample_fields) {
            const samples = await this.#parseArray('"samples"', 'Loading samples…');
            this.#snapshot.samples = samples.asArrayOrFail();
        }
        if (this.#snapshot.snapshot.meta['location_fields']) {
            const locations = await this.#parseArray('"locations"', 'Loading locations…');
            this.#snapshot.locations = locations.asArrayOrFail();
        }
        else {
            this.#snapshot.locations = [];
        }
        this.#progress.updateStatus('Loading strings…');
        const stringsTokenIndex = await this.#findToken('"strings"');
        const bracketIndex = await this.#findToken('[', stringsTokenIndex);
        this.#json = this.#json.slice(bracketIndex);
        while (!this.#done) {
            this.#json += await this.#fetchChunk();
        }
        this.#parseStringsArray();
    }
}
//# sourceMappingURL=HeapSnapshotLoader.js.map

/***/ }),

/***/ "./entrypoints/heap_snapshot_worker/HeapSnapshotWorkerDispatcher.js":
/*!**************************************************************************!*\
  !*** ./entrypoints/heap_snapshot_worker/HeapSnapshotWorkerDispatcher.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeapSnapshotWorkerDispatcher: () => (/* binding */ HeapSnapshotWorkerDispatcher)
/* harmony export */ });
/* harmony import */ var _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/heap_snapshot_model/heap_snapshot_model.js */ "./models/heap_snapshot_model/heap_snapshot_model.js");
/* harmony import */ var _AllocationProfile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllocationProfile.js */ "./entrypoints/heap_snapshot_worker/AllocationProfile.js");
/* harmony import */ var _HeapSnapshot_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeapSnapshot.js */ "./entrypoints/heap_snapshot_worker/HeapSnapshot.js");
/* harmony import */ var _HeapSnapshotLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeapSnapshotLoader.js */ "./entrypoints/heap_snapshot_worker/HeapSnapshotLoader.js");
/*
 * Copyright (C) 2011 Google Inc. All rights reserved.
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

// We mirror what heap_snapshot_worker.ts does, but we can't use it here as we'd have a
// cyclic GN dependency otherwise.



class HeapSnapshotWorkerDispatcher {
    // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    #objects;
    #postMessage;
    constructor(postMessage) {
        this.#objects = [];
        this.#postMessage = postMessage;
    }
    sendEvent(name, data) {
        this.#postMessage({ eventName: name, data: data });
    }
    dispatchMessage({ data }) {
        const response = { callId: data.callId, result: null, error: undefined, errorCallStack: undefined, errorMethodName: undefined };
        try {
            switch (data.disposition) {
                case 'createLoader':
                    this.#objects[data.objectId] = new _HeapSnapshotLoader_js__WEBPACK_IMPORTED_MODULE_3__.HeapSnapshotLoader(this);
                    break;
                case 'dispose': {
                    delete this.#objects[data.objectId];
                    break;
                }
                case 'getter': {
                    const object = this.#objects[data.objectId];
                    const result = object[data.methodName];
                    response.result = result;
                    break;
                }
                case 'factory': {
                    const object = this.#objects[data.objectId];
                    const result = object[data.methodName].apply(object, data.methodArguments);
                    if (result) {
                        this.#objects[data.newObjectId] = result;
                    }
                    response.result = Boolean(result);
                    break;
                }
                case 'method': {
                    const object = this.#objects[data.objectId];
                    response.result = object[data.methodName].apply(object, data.methodArguments);
                    break;
                }
                case 'evaluateForTest': {
                    try {
                        // Make 'HeapSnapshotWorker' and 'HeapSnapshotModel' available to web tests. 'eval' can't use 'import'.
                        // @ts-ignore
                        globalThis.HeapSnapshotWorker = {
                            AllocationProfile: _AllocationProfile_js__WEBPACK_IMPORTED_MODULE_1__,
                            HeapSnapshot: _HeapSnapshot_js__WEBPACK_IMPORTED_MODULE_2__,
                            HeapSnapshotLoader: _HeapSnapshotLoader_js__WEBPACK_IMPORTED_MODULE_3__,
                        };
                        // @ts-ignore
                        globalThis.HeapSnapshotModel = _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_0__;
                        response.result = self.eval(data.source);
                    }
                    catch (error) {
                        response.result = error.toString();
                    }
                    break;
                }
            }
        }
        catch (error) {
            response.error = error.toString();
            response.errorCallStack = error.stack;
            if (data.methodName) {
                response.errorMethodName = data.methodName;
            }
        }
        this.#postMessage(response);
    }
}
//# sourceMappingURL=HeapSnapshotWorkerDispatcher.js.map

/***/ })

}]);