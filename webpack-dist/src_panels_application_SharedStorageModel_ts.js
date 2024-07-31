"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_SharedStorageModel_ts"],{

/***/ "./src/panels/application/SharedStorageModel.ts":
/*!******************************************************!*\
  !*** ./src/panels/application/SharedStorageModel.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Events: () => (/* binding */ Events),
/* harmony export */   SharedStorageForOrigin: () => (/* binding */ SharedStorageForOrigin),
/* harmony export */   SharedStorageModel: () => (/* binding */ SharedStorageModel)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
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
var _SharedStorageForOrigin_model, _SharedStorageForOrigin_securityOrigin, _SharedStorageModel_instances, _SharedStorageModel_securityOriginManager, _SharedStorageModel_storages, _SharedStorageModel_enabled, _SharedStorageModel_addAllOrigins, _SharedStorageModel_removeAllOrigins, _SharedStorageModel_securityOriginAdded, _SharedStorageModel_maybeAddOrigin, _SharedStorageModel_securityOriginRemoved, _SharedStorageModel_removeOrigin;



class SharedStorageForOrigin extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    constructor(model, securityOrigin) {
        super();
        _SharedStorageForOrigin_model.set(this, void 0);
        _SharedStorageForOrigin_securityOrigin.set(this, void 0);
        __classPrivateFieldSet(this, _SharedStorageForOrigin_model, model, "f");
        __classPrivateFieldSet(this, _SharedStorageForOrigin_securityOrigin, securityOrigin, "f");
    }
    get securityOrigin() {
        return __classPrivateFieldGet(this, _SharedStorageForOrigin_securityOrigin, "f");
    }
    async getMetadata() {
        return __classPrivateFieldGet(this, _SharedStorageForOrigin_model, "f").storageAgent.invoke_getSharedStorageMetadata({ ownerOrigin: this.securityOrigin })
            .then(({ metadata }) => metadata);
    }
    async getEntries() {
        return __classPrivateFieldGet(this, _SharedStorageForOrigin_model, "f").storageAgent.invoke_getSharedStorageEntries({ ownerOrigin: this.securityOrigin })
            .then(({ entries }) => entries);
    }
    async setEntry(key, value, ignoreIfPresent) {
        await __classPrivateFieldGet(this, _SharedStorageForOrigin_model, "f").storageAgent.invoke_setSharedStorageEntry({ ownerOrigin: this.securityOrigin, key, value, ignoreIfPresent });
    }
    async deleteEntry(key) {
        await __classPrivateFieldGet(this, _SharedStorageForOrigin_model, "f").storageAgent.invoke_deleteSharedStorageEntry({ ownerOrigin: this.securityOrigin, key });
    }
    async clear() {
        await __classPrivateFieldGet(this, _SharedStorageForOrigin_model, "f").storageAgent.invoke_clearSharedStorageEntries({ ownerOrigin: this.securityOrigin });
    }
    async resetBudget() {
        await __classPrivateFieldGet(this, _SharedStorageForOrigin_model, "f").storageAgent.invoke_resetSharedStorageBudget({ ownerOrigin: this.securityOrigin });
    }
}
_SharedStorageForOrigin_model = new WeakMap(), _SharedStorageForOrigin_securityOrigin = new WeakMap();
(function (SharedStorageForOrigin) {
    let Events;
    (function (Events) {
        Events["SharedStorageChanged"] = "SharedStorageChanged";
    })(Events = SharedStorageForOrigin.Events || (SharedStorageForOrigin.Events = {}));
})(SharedStorageForOrigin || (SharedStorageForOrigin = {}));
class SharedStorageModel extends _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SDKModel.SDKModel {
    constructor(target) {
        super(target);
        _SharedStorageModel_instances.add(this);
        _SharedStorageModel_securityOriginManager.set(this, void 0);
        _SharedStorageModel_storages.set(this, void 0);
        Object.defineProperty(this, "storageAgent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _SharedStorageModel_enabled.set(this, void 0);
        target.registerStorageDispatcher(this);
        __classPrivateFieldSet(this, _SharedStorageModel_securityOriginManager, target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SecurityOriginManager.SecurityOriginManager), "f");
        __classPrivateFieldSet(this, _SharedStorageModel_storages, new Map(), "f");
        this.storageAgent = target.storageAgent();
        __classPrivateFieldSet(this, _SharedStorageModel_enabled, false, "f");
    }
    async enable() {
        if (__classPrivateFieldGet(this, _SharedStorageModel_enabled, "f")) {
            return;
        }
        __classPrivateFieldGet(this, _SharedStorageModel_securityOriginManager, "f").addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SecurityOriginManager.Events.SecurityOriginAdded, __classPrivateFieldGet(this, _SharedStorageModel_instances, "m", _SharedStorageModel_securityOriginAdded), this);
        __classPrivateFieldGet(this, _SharedStorageModel_securityOriginManager, "f").addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SecurityOriginManager.Events.SecurityOriginRemoved, __classPrivateFieldGet(this, _SharedStorageModel_instances, "m", _SharedStorageModel_securityOriginRemoved), this);
        await this.storageAgent.invoke_setSharedStorageTracking({ enable: true });
        __classPrivateFieldGet(this, _SharedStorageModel_instances, "m", _SharedStorageModel_addAllOrigins).call(this);
        __classPrivateFieldSet(this, _SharedStorageModel_enabled, true, "f");
    }
    disable() {
        if (!__classPrivateFieldGet(this, _SharedStorageModel_enabled, "f")) {
            return;
        }
        __classPrivateFieldGet(this, _SharedStorageModel_securityOriginManager, "f").removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SecurityOriginManager.Events.SecurityOriginAdded, __classPrivateFieldGet(this, _SharedStorageModel_instances, "m", _SharedStorageModel_securityOriginAdded), this);
        __classPrivateFieldGet(this, _SharedStorageModel_securityOriginManager, "f").removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SecurityOriginManager.Events.SecurityOriginRemoved, __classPrivateFieldGet(this, _SharedStorageModel_instances, "m", _SharedStorageModel_securityOriginRemoved), this);
        void this.storageAgent.invoke_setSharedStorageTracking({ enable: false });
        __classPrivateFieldGet(this, _SharedStorageModel_instances, "m", _SharedStorageModel_removeAllOrigins).call(this);
        __classPrivateFieldSet(this, _SharedStorageModel_enabled, false, "f");
    }
    dispose() {
        this.disable();
    }
    storages() {
        return __classPrivateFieldGet(this, _SharedStorageModel_storages, "f").values();
    }
    storageForOrigin(origin) {
        return __classPrivateFieldGet(this, _SharedStorageModel_storages, "f").get(origin) || null;
    }
    numStoragesForTesting() {
        return __classPrivateFieldGet(this, _SharedStorageModel_storages, "f").size;
    }
    isChangeEvent(event) {
        return [
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Storage.SharedStorageAccessType.DocumentSet,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Storage.SharedStorageAccessType.DocumentAppend,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Storage.SharedStorageAccessType.DocumentDelete,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Storage.SharedStorageAccessType.DocumentClear,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Storage.SharedStorageAccessType.WorkletSet,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Storage.SharedStorageAccessType.WorkletAppend,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Storage.SharedStorageAccessType.WorkletDelete,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Storage.SharedStorageAccessType.WorkletClear,
        ].includes(event.type);
    }
    sharedStorageAccessed(event) {
        if (this.isChangeEvent(event)) {
            const sharedStorage = this.storageForOrigin(event.ownerOrigin);
            if (sharedStorage) {
                const eventData = { accessTime: event.accessTime, type: event.type, mainFrameId: event.mainFrameId, params: event.params };
                // Forward events that may have changed `sharedStorage` to listeners for `sharedStorage`.
                sharedStorage.dispatchEventToListeners(SharedStorageForOrigin.Events.SharedStorageChanged, eventData);
            }
            else {
                void __classPrivateFieldGet(this, _SharedStorageModel_instances, "m", _SharedStorageModel_maybeAddOrigin).call(this, event.ownerOrigin);
            }
        }
        this.dispatchEventToListeners(Events.SharedStorageAccess, event);
    }
    attributionReportingTriggerRegistered(_event) {
    }
    indexedDBListUpdated(_event) {
    }
    indexedDBContentUpdated(_event) {
    }
    cacheStorageListUpdated(_event) {
    }
    cacheStorageContentUpdated(_event) {
    }
    interestGroupAccessed(_event) {
    }
    interestGroupAuctionEventOccurred(_event) {
    }
    interestGroupAuctionNetworkRequestCreated(_event) {
    }
    storageBucketCreatedOrUpdated(_event) {
    }
    storageBucketDeleted(_event) {
    }
    attributionReportingSourceRegistered(_event) {
    }
}
_SharedStorageModel_securityOriginManager = new WeakMap(), _SharedStorageModel_storages = new WeakMap(), _SharedStorageModel_enabled = new WeakMap(), _SharedStorageModel_instances = new WeakSet(), _SharedStorageModel_addAllOrigins = function _SharedStorageModel_addAllOrigins() {
    for (const securityOrigin of __classPrivateFieldGet(this, _SharedStorageModel_securityOriginManager, "f").securityOrigins()) {
        void __classPrivateFieldGet(this, _SharedStorageModel_instances, "m", _SharedStorageModel_maybeAddOrigin).call(this, securityOrigin);
    }
}, _SharedStorageModel_removeAllOrigins = function _SharedStorageModel_removeAllOrigins() {
    for (const securityOrigin of __classPrivateFieldGet(this, _SharedStorageModel_storages, "f").keys()) {
        __classPrivateFieldGet(this, _SharedStorageModel_instances, "m", _SharedStorageModel_removeOrigin).call(this, securityOrigin);
    }
}, _SharedStorageModel_securityOriginAdded = function _SharedStorageModel_securityOriginAdded(event) {
    __classPrivateFieldGet(this, _SharedStorageModel_instances, "m", _SharedStorageModel_maybeAddOrigin).call(this, event.data);
}, _SharedStorageModel_maybeAddOrigin = function _SharedStorageModel_maybeAddOrigin(securityOrigin) {
    const parsedSecurityOrigin = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL(securityOrigin);
    // These are "opaque" origins which are not supposed to support shared storage.
    if (!parsedSecurityOrigin.isValid || parsedSecurityOrigin.scheme === 'data' ||
        parsedSecurityOrigin.scheme === 'about' || parsedSecurityOrigin.scheme === 'javascript') {
        return;
    }
    // Only add origin if it's not already added.
    if (__classPrivateFieldGet(this, _SharedStorageModel_storages, "f").has(securityOrigin)) {
        return;
    }
    const storage = new SharedStorageForOrigin(this, securityOrigin);
    __classPrivateFieldGet(this, _SharedStorageModel_storages, "f").set(securityOrigin, storage);
    this.dispatchEventToListeners(Events.SharedStorageAdded, storage);
}, _SharedStorageModel_securityOriginRemoved = function _SharedStorageModel_securityOriginRemoved(event) {
    __classPrivateFieldGet(this, _SharedStorageModel_instances, "m", _SharedStorageModel_removeOrigin).call(this, event.data);
}, _SharedStorageModel_removeOrigin = function _SharedStorageModel_removeOrigin(securityOrigin) {
    const storage = this.storageForOrigin(securityOrigin);
    if (!storage) {
        return;
    }
    __classPrivateFieldGet(this, _SharedStorageModel_storages, "f").delete(securityOrigin);
    this.dispatchEventToListeners(Events.SharedStorageRemoved, storage);
};
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SDKModel.SDKModel.register(SharedStorageModel, { capabilities: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Capability.Storage, autostart: false });
var Events;
(function (Events) {
    Events["SharedStorageAccess"] = "SharedStorageAccess";
    Events["SharedStorageAdded"] = "SharedStorageAdded";
    Events["SharedStorageRemoved"] = "SharedStorageRemoved";
})(Events || (Events = {}));


/***/ })

}]);