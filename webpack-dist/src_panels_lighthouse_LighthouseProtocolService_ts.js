"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_lighthouse_LighthouseProtocolService_ts"],{

/***/ "./src/panels/lighthouse/LighthouseProtocolService.ts":
/*!************************************************************!*\
  !*** ./src/panels/lighthouse/LighthouseProtocolService.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProtocolService: () => (/* binding */ ProtocolService)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/* eslint-disable jsdoc/check-alignment */
/**
 * @overview
                                                   ┌────────────┐
                                                   │CDP Backend │
                                                   └────────────┘
                                                        │ ▲
                                                        │ │ parallelConnection
                          ┌┐                            ▼ │                     ┌┐
                          ││   dispatchProtocolMessage     sendProtocolMessage  ││
                          ││                     │          ▲                   ││
          ProtocolService ││                     |          │                   ││
                          ││    sendWithResponse ▼          │                   ││
                          ││              │    send          onWorkerMessage    ││
                          └┘              │    │                 ▲              └┘
          worker boundary - - - - - - - - ┼ - -│- - - - - - - - -│- - - - - - - - - - - -
                          ┌┐              ▼    ▼                 │                    ┌┐
                          ││   onFrontendMessage      notifyFrontendViaWorkerMessage  ││
                          ││                   │       ▲                              ││
                          ││                   ▼       │                              ││
LighthouseWorkerService   ││          Either ConnectionProxy or LegacyPort            ││
                          ││                           │ ▲                            ││
                          ││     ┌─────────────────────┼─┼───────────────────────┐    ││
                          ││     │  Lighthouse    ┌────▼──────┐                  │    ││
                          ││     │                │connection │                  │    ││
                          ││     │                └───────────┘                  │    ││
                          └┘     └───────────────────────────────────────────────┘    └┘

 * All messages traversing the worker boundary are action-wrapped.
 * All messages over the parallelConnection speak pure CDP.
 * All messages within ConnectionProxy/LegacyPort speak pure CDP.
 * The foundational CDP connection is `parallelConnection`.
 * All connections within the worker are not actual ParallelConnection's.
 */
/* eslint-enable jsdoc/check-alignment */
let lastId = 1;
/**
 * ProtocolService manages a connection between the frontend (Lighthouse panel) and the Lighthouse worker.
 */
class ProtocolService {
    constructor() {
        Object.defineProperty(this, "mainSessionId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "rootTargetId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "parallelConnection", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "lighthouseWorkerPromise", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "lighthouseMessageUpdateCallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "removeDialogHandler", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "configForTesting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    async attach() {
        await _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().suspendAllTargets();
        const mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().primaryPageTarget();
        if (!mainTarget) {
            throw new Error('Unable to find main target required for Lighthouse');
        }
        const rootTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().rootTarget();
        if (!rootTarget) {
            throw new Error('Could not find the root target');
        }
        const childTargetManager = mainTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ChildTargetManager.ChildTargetManager);
        if (!childTargetManager) {
            throw new Error('Unable to find child target manager required for Lighthouse');
        }
        const resourceTreeModel = mainTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
        if (!resourceTreeModel) {
            throw new Error('Unable to find resource tree model required for Lighthouse');
        }
        const rootChildTargetManager = rootTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ChildTargetManager.ChildTargetManager);
        if (!rootChildTargetManager) {
            throw new Error('Could not find the child target manager class for the root target');
        }
        const { connection, sessionId } = await rootChildTargetManager.createParallelConnection(message => {
            if (typeof message === 'string') {
                message = JSON.parse(message);
            }
            this.dispatchProtocolMessage(message);
        });
        // Lighthouse implements its own dialog handler like this, however its lifecycle ends when
        // the internal Lighthouse session is disposed.
        //
        // If the page is reloaded near the end of the run (e.g. bfcache testing), the Lighthouse
        // internal session can be disposed before a dialog message appears. This allows the dialog
        // to block important Lighthouse teardown operations in LighthouseProtocolService.
        //
        // To ensure the teardown operations can proceed, we need a dialog handler which lasts until
        // the LighthouseProtocolService detaches.
        const dialogHandler = () => {
            void mainTarget.pageAgent().invoke_handleJavaScriptDialog({ accept: true });
        };
        resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.JavaScriptDialogOpening, dialogHandler);
        this.removeDialogHandler = () => resourceTreeModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.JavaScriptDialogOpening, dialogHandler);
        this.parallelConnection = connection;
        this.rootTargetId = await rootChildTargetManager.getParentTargetId();
        this.mainSessionId = sessionId;
    }
    getLocales() {
        return [_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsLocale.DevToolsLocale.instance().locale];
    }
    async startTimespan(currentLighthouseRun) {
        const { inspectedURL, categoryIDs, flags } = currentLighthouseRun;
        if (!this.mainSessionId || !this.rootTargetId) {
            throw new Error('Unable to get target info required for Lighthouse');
        }
        await this.sendWithResponse('startTimespan', {
            url: inspectedURL,
            categoryIDs,
            flags,
            config: this.configForTesting,
            locales: this.getLocales(),
            mainSessionId: this.mainSessionId,
            rootTargetId: this.rootTargetId,
        });
    }
    async collectLighthouseResults(currentLighthouseRun) {
        const { inspectedURL, categoryIDs, flags } = currentLighthouseRun;
        if (!this.mainSessionId || !this.rootTargetId) {
            throw new Error('Unable to get target info required for Lighthouse');
        }
        let mode = flags.mode;
        if (mode === 'timespan') {
            mode = 'endTimespan';
        }
        return this.sendWithResponse(mode, {
            url: inspectedURL,
            categoryIDs,
            flags,
            config: this.configForTesting,
            locales: this.getLocales(),
            mainSessionId: this.mainSessionId,
            rootTargetId: this.rootTargetId,
        });
    }
    async detach() {
        const oldLighthouseWorker = this.lighthouseWorkerPromise;
        const oldParallelConnection = this.parallelConnection;
        // When detaching, make sure that we remove the old promises, before we
        // perform any async cleanups. That way, if there is a message coming from
        // lighthouse while we are in the process of cleaning up, we shouldn't deliver
        // them to the backend.
        this.lighthouseWorkerPromise = undefined;
        this.parallelConnection = undefined;
        if (oldLighthouseWorker) {
            (await oldLighthouseWorker).terminate();
        }
        if (oldParallelConnection) {
            await oldParallelConnection.disconnect();
        }
        await _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().resumeAllTargets();
        this.removeDialogHandler?.();
    }
    registerStatusCallback(callback) {
        this.lighthouseMessageUpdateCallback = callback;
    }
    dispatchProtocolMessage(message) {
        // A message without a sessionId is the main session of the main target (call it "Main session").
        // A parallel connection and session was made that connects to the same main target (call it "Lighthouse session").
        // Messages from the "Lighthouse session" have a sessionId.
        // Without some care, there is a risk of sending the same events for the same main frame to Lighthouse–the backend
        // will create events for the "Main session" and the "Lighthouse session".
        // The workaround–only send message to Lighthouse if:
        //   * the message has a sessionId (is not for the "Main session")
        //   * the message does not have a sessionId (is for the "Main session"), but only for the Target domain
        //     (to kickstart autoAttach in LH).
        const protocolMessage = message;
        if (protocolMessage.sessionId || (protocolMessage.method && protocolMessage.method.startsWith('Target'))) {
            void this.send('dispatchProtocolMessage', { message });
        }
    }
    initWorker() {
        this.lighthouseWorkerPromise = new Promise(resolve => {
            const workerUrl = new URL(/* asset import */ __webpack_require__(/*! ../../entrypoints/lighthouse_worker/lighthouse_worker.js */ "./src/entrypoints/lighthouse_worker/lighthouse_worker.ts?4efa"), __webpack_require__.b);
            const remoteBaseSearchParam = new URL(self.location.href).searchParams.get('remoteBase');
            if (remoteBaseSearchParam) {
                // Allows Lighthouse worker to fetch remote locale files.
                workerUrl.searchParams.set('remoteBase', remoteBaseSearchParam);
            }
            const worker = new Worker(workerUrl, { type: 'module' });
            worker.addEventListener('message', event => {
                if (event.data === 'workerReady') {
                    resolve(worker);
                    return;
                }
                this.onWorkerMessage(event);
            });
        });
        return this.lighthouseWorkerPromise;
    }
    async ensureWorkerExists() {
        let worker;
        if (!this.lighthouseWorkerPromise) {
            worker = await this.initWorker();
        }
        else {
            worker = await this.lighthouseWorkerPromise;
        }
        return worker;
    }
    onWorkerMessage(event) {
        const lighthouseMessage = event.data;
        if (lighthouseMessage.action === 'statusUpdate') {
            if (this.lighthouseMessageUpdateCallback && lighthouseMessage.args && 'message' in lighthouseMessage.args) {
                this.lighthouseMessageUpdateCallback(lighthouseMessage.args.message);
            }
        }
        else if (lighthouseMessage.action === 'sendProtocolMessage') {
            if (lighthouseMessage.args && 'message' in lighthouseMessage.args) {
                this.sendProtocolMessage(lighthouseMessage.args.message);
            }
        }
    }
    sendProtocolMessage(message) {
        if (this.parallelConnection) {
            this.parallelConnection.sendRawMessage(message);
        }
    }
    async send(action, args = {}) {
        const worker = await this.ensureWorkerExists();
        const messageId = lastId++;
        worker.postMessage({ id: messageId, action, args: { ...args, id: messageId } });
    }
    /** sendWithResponse currently only handles the original startLighthouse request and LHR-filled response. */
    async sendWithResponse(action, args = {}) {
        const worker = await this.ensureWorkerExists();
        const messageId = lastId++;
        const messageResult = new Promise(resolve => {
            const workerListener = (event) => {
                const lighthouseMessage = event.data;
                if (lighthouseMessage.id === messageId) {
                    worker.removeEventListener('message', workerListener);
                    resolve(lighthouseMessage.result);
                }
            };
            worker.addEventListener('message', workerListener);
        });
        worker.postMessage({ id: messageId, action, args: { ...args, id: messageId } });
        return messageResult;
    }
}


/***/ }),

/***/ "./src/entrypoints/lighthouse_worker/lighthouse_worker.ts?4efa":
/*!****************************************************************!*\
  !*** ./src/entrypoints/lighthouse_worker/lighthouse_worker.ts ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cddc05e556ec74916a34.ts";

/***/ })

}]);