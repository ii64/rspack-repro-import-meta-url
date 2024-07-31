"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_profiler_HeapSnapshotProxy_ts"],{

/***/ "./src/panels/profiler/HeapSnapshotProxy.ts":
/*!**************************************************!*\
  !*** ./src/panels/profiler/HeapSnapshotProxy.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeapSnapshotLoaderProxy: () => (/* binding */ HeapSnapshotLoaderProxy),
/* harmony export */   HeapSnapshotProviderProxy: () => (/* binding */ HeapSnapshotProviderProxy),
/* harmony export */   HeapSnapshotProxy: () => (/* binding */ HeapSnapshotProxy),
/* harmony export */   HeapSnapshotProxyObject: () => (/* binding */ HeapSnapshotProxyObject),
/* harmony export */   HeapSnapshotWorkerProxy: () => (/* binding */ HeapSnapshotWorkerProxy)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
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


const UIStrings = {
    /**
     *@description Text in Heap Snapshot Proxy of a profiler tool
     *@example {functionName} PH1
     */
    anErrorOccurredWhenACallToMethod: 'An error occurred when a call to method \'\'{PH1}\'\' was requested',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/profiler/HeapSnapshotProxy.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class HeapSnapshotWorkerProxy extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(eventHandler) {
        super();
        // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Object.defineProperty(this, "eventHandler", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "nextObjectId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "nextCallId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Object.defineProperty(this, "callbacks", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "previousCallbacks", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "worker", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "interval", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.eventHandler = eventHandler;
        this.nextObjectId = 1;
        this.nextCallId = 1;
        this.callbacks = new Map();
        this.previousCallbacks = new Set();
        this.worker = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Worker.WorkerWrapper.fromURL(new URL(/* asset import */ __webpack_require__(/*! ../../entrypoints/heap_snapshot_worker/heap_snapshot_worker-entrypoint.js */ "./src/entrypoints/heap_snapshot_worker/heap_snapshot_worker-entrypoint.ts?7191"), __webpack_require__.b));
        this.worker.onmessage = this.messageReceived.bind(this);
    }
    createLoader(profileUid, snapshotReceivedCallback) {
        const objectId = this.nextObjectId++;
        const proxy = new HeapSnapshotLoaderProxy(this, objectId, profileUid, snapshotReceivedCallback);
        this.postMessage({
            callId: this.nextCallId++,
            disposition: 'createLoader',
            objectId: objectId,
        });
        return proxy;
    }
    dispose() {
        this.worker.terminate();
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
    disposeObject(objectId) {
        this.postMessage({ callId: this.nextCallId++, disposition: 'dispose', objectId: objectId });
    }
    evaluateForTest(script, callback) {
        const callId = this.nextCallId++;
        this.callbacks.set(callId, callback);
        this.postMessage({ callId: callId, disposition: 'evaluateForTest', source: script });
    }
    callFactoryMethod(callback, objectId, methodName, proxyConstructor, ...methodArguments) {
        const callId = this.nextCallId++;
        const newObjectId = this.nextObjectId++;
        if (callback) {
            this.callbacks.set(callId, remoteResult => {
                callback(remoteResult ? new proxyConstructor(this, newObjectId) : null);
            });
            this.postMessage({
                callId: callId,
                disposition: 'factory',
                objectId: objectId,
                methodName: methodName,
                methodArguments: methodArguments,
                newObjectId: newObjectId,
            });
            return null;
        }
        this.postMessage({
            callId: callId,
            disposition: 'factory',
            objectId: objectId,
            methodName: methodName,
            methodArguments: methodArguments,
            newObjectId: newObjectId,
        });
        return new proxyConstructor(this, newObjectId);
    }
    callMethod(callback, objectId, methodName, ...methodArguments) {
        const callId = this.nextCallId++;
        if (callback) {
            this.callbacks.set(callId, callback);
        }
        this.postMessage({
            callId: callId,
            disposition: 'method',
            objectId: objectId,
            methodName: methodName,
            methodArguments: methodArguments,
        });
    }
    startCheckingForLongRunningCalls() {
        if (this.interval) {
            return;
        }
        this.checkLongRunningCalls();
        this.interval = window.setInterval(this.checkLongRunningCalls.bind(this), 300);
    }
    checkLongRunningCalls() {
        for (const callId of this.previousCallbacks) {
            if (!this.callbacks.has(callId)) {
                this.previousCallbacks.delete(callId);
            }
        }
        const hasLongRunningCalls = Boolean(this.previousCallbacks.size);
        this.dispatchEventToListeners(HeapSnapshotWorkerProxy.Events.Wait, hasLongRunningCalls);
        for (const callId of this.callbacks.keys()) {
            this.previousCallbacks.add(callId);
        }
    }
    // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    messageReceived(event) {
        const data = event.data;
        if (data.eventName) {
            if (this.eventHandler) {
                this.eventHandler(data.eventName, data.data);
            }
            return;
        }
        if (data.error) {
            if (data.errorMethodName) {
                _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance().error(i18nString(UIStrings.anErrorOccurredWhenACallToMethod, { PH1: data.errorMethodName }));
            }
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance().error(data['errorCallStack']);
            this.callbacks.delete(data.callId);
            return;
        }
        const callback = this.callbacks.get(data.callId);
        if (!callback) {
            return;
        }
        this.callbacks.delete(data.callId);
        callback(data.result);
    }
    // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    postMessage(message) {
        this.worker.postMessage(message);
    }
}
(function (HeapSnapshotWorkerProxy) {
    let Events;
    (function (Events) {
        Events["Wait"] = "Wait";
    })(Events = HeapSnapshotWorkerProxy.Events || (HeapSnapshotWorkerProxy.Events = {}));
})(HeapSnapshotWorkerProxy || (HeapSnapshotWorkerProxy = {}));
class HeapSnapshotProxyObject {
    constructor(worker, objectId) {
        Object.defineProperty(this, "worker", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "objectId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.worker = worker;
        this.objectId = objectId;
    }
    dispose() {
        this.worker.disposeObject(this.objectId);
    }
    disposeWorker() {
        this.worker.dispose();
    }
    callFactoryMethod(methodName, proxyConstructor, ...args) {
        return this.worker.callFactoryMethod(null, String(this.objectId), methodName, proxyConstructor, ...args);
    }
    callFactoryMethodPromise(methodName, proxyConstructor, ...args) {
        return new Promise(resolve => this.worker.callFactoryMethod(resolve, String(this.objectId), methodName, proxyConstructor, ...args));
    }
    callMethodPromise(methodName, ...args) {
        return new Promise(resolve => this.worker.callMethod(resolve, String(this.objectId), methodName, ...args));
    }
}
class HeapSnapshotLoaderProxy extends HeapSnapshotProxyObject {
    constructor(worker, objectId, profileUid, snapshotReceivedCallback) {
        super(worker, objectId);
        Object.defineProperty(this, "profileUid", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "snapshotReceivedCallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.profileUid = profileUid;
        this.snapshotReceivedCallback = snapshotReceivedCallback;
    }
    async write(chunk) {
        await this.callMethodPromise('write', chunk);
    }
    async close() {
        await this.callMethodPromise('close');
        const snapshotProxy = await this.callFactoryMethodPromise('buildSnapshot', HeapSnapshotProxy);
        this.dispose();
        // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
        // @ts-expect-error
        snapshotProxy.setProfileUid(this.profileUid);
        await snapshotProxy.updateStaticData();
        this.snapshotReceivedCallback(snapshotProxy);
    }
}
class HeapSnapshotProxy extends HeapSnapshotProxyObject {
    constructor(worker, objectId) {
        super(worker, objectId);
        Object.defineProperty(this, "staticData", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "profileUid", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.staticData = null;
    }
    search(searchConfig, filter) {
        return this.callMethodPromise('search', searchConfig, filter);
    }
    aggregatesWithFilter(filter) {
        return this.callMethodPromise('aggregatesWithFilter', filter);
    }
    aggregatesForDiff() {
        return this.callMethodPromise('aggregatesForDiff');
    }
    calculateSnapshotDiff(baseSnapshotId, baseSnapshotAggregates) {
        return this.callMethodPromise('calculateSnapshotDiff', baseSnapshotId, baseSnapshotAggregates);
    }
    nodeClassName(snapshotObjectId) {
        return this.callMethodPromise('nodeClassName', snapshotObjectId);
    }
    createEdgesProvider(nodeIndex) {
        return this.callFactoryMethod('createEdgesProvider', HeapSnapshotProviderProxy, nodeIndex);
    }
    createRetainingEdgesProvider(nodeIndex) {
        return this.callFactoryMethod('createRetainingEdgesProvider', HeapSnapshotProviderProxy, nodeIndex);
    }
    createAddedNodesProvider(baseSnapshotId, className) {
        return this.callFactoryMethod('createAddedNodesProvider', HeapSnapshotProviderProxy, baseSnapshotId, className);
    }
    createDeletedNodesProvider(nodeIndexes) {
        return this.callFactoryMethod('createDeletedNodesProvider', HeapSnapshotProviderProxy, nodeIndexes);
    }
    createNodesProvider(filter) {
        return this.callFactoryMethod('createNodesProvider', HeapSnapshotProviderProxy, filter);
    }
    createNodesProviderForClass(className, nodeFilter) {
        return this.callFactoryMethod('createNodesProviderForClass', HeapSnapshotProviderProxy, className, nodeFilter);
    }
    allocationTracesTops() {
        return this.callMethodPromise('allocationTracesTops');
    }
    allocationNodeCallers(nodeId) {
        return this.callMethodPromise('allocationNodeCallers', nodeId);
    }
    allocationStack(nodeIndex) {
        return this.callMethodPromise('allocationStack', nodeIndex);
    }
    dispose() {
        throw new Error('Should never be called');
    }
    get nodeCount() {
        if (!this.staticData) {
            return 0;
        }
        return this.staticData.nodeCount;
    }
    get rootNodeIndex() {
        if (!this.staticData) {
            return 0;
        }
        return this.staticData.rootNodeIndex;
    }
    async updateStaticData() {
        this.staticData = await this.callMethodPromise('updateStaticData');
    }
    getStatistics() {
        return this.callMethodPromise('getStatistics');
    }
    getLocation(nodeIndex) {
        return this.callMethodPromise('getLocation', nodeIndex);
    }
    getSamples() {
        return this.callMethodPromise('getSamples');
    }
    ignoreNodeInRetainersView(nodeIndex) {
        return this.callMethodPromise('ignoreNodeInRetainersView', nodeIndex);
    }
    unignoreNodeInRetainersView(nodeIndex) {
        return this.callMethodPromise('unignoreNodeInRetainersView', nodeIndex);
    }
    unignoreAllNodesInRetainersView() {
        return this.callMethodPromise('unignoreAllNodesInRetainersView');
    }
    areNodesIgnoredInRetainersView() {
        return this.callMethodPromise('areNodesIgnoredInRetainersView');
    }
    get totalSize() {
        if (!this.staticData) {
            return 0;
        }
        return this.staticData.totalSize;
    }
    get uid() {
        return this.profileUid;
    }
    setProfileUid(profileUid) {
        this.profileUid = profileUid;
    }
    maxJSObjectId() {
        if (!this.staticData) {
            return 0;
        }
        return this.staticData.maxJSObjectId;
    }
}
class HeapSnapshotProviderProxy extends HeapSnapshotProxyObject {
    constructor(worker, objectId) {
        super(worker, objectId);
    }
    nodePosition(snapshotObjectId) {
        return this.callMethodPromise('nodePosition', snapshotObjectId);
    }
    isEmpty() {
        return this.callMethodPromise('isEmpty');
    }
    serializeItemsRange(startPosition, endPosition) {
        return this.callMethodPromise('serializeItemsRange', startPosition, endPosition);
    }
    async sortAndRewind(comparator) {
        await this.callMethodPromise('sortAndRewind', comparator);
    }
}


/***/ }),

/***/ "./src/entrypoints/heap_snapshot_worker/heap_snapshot_worker-entrypoint.ts?7191":
/*!*********************************************************************************!*\
  !*** ./src/entrypoints/heap_snapshot_worker/heap_snapshot_worker-entrypoint.ts ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ce1282f8f3e83ecb6593.ts";

/***/ })

}]);