"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_cdp_Target_ts"],{

/***/ "./src/third_party/puppeteer/package/src/cdp/Target.ts":
/*!*************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/cdp/Target.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdpTarget: () => (/* binding */ CdpTarget),
/* harmony export */   DevToolsTarget: () => (/* binding */ DevToolsTarget),
/* harmony export */   InitializationStatus: () => (/* binding */ InitializationStatus),
/* harmony export */   OtherTarget: () => (/* binding */ OtherTarget),
/* harmony export */   PageTarget: () => (/* binding */ PageTarget),
/* harmony export */   WorkerTarget: () => (/* binding */ WorkerTarget)
/* harmony export */ });
/* harmony import */ var _api_Page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Page.js */ "./src/third_party/puppeteer/package/src/api/Page.ts");
/* harmony import */ var _api_Target_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Target.js */ "./src/third_party/puppeteer/package/src/api/Target.ts");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/src/common/util.ts");
/* harmony import */ var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/Deferred.js */ "./src/third_party/puppeteer/package/src/util/Deferred.ts");
/* harmony import */ var _CDPSession_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CDPSession.js */ "./src/third_party/puppeteer/package/src/cdp/CDPSession.ts");
/* harmony import */ var _Page_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Page.js */ "./src/third_party/puppeteer/package/src/cdp/Page.ts");
/* harmony import */ var _WebWorker_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WebWorker.js */ "./src/third_party/puppeteer/package/src/cdp/WebWorker.ts");
/**
 * @license
 * Copyright 2019 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
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
var _CdpTarget_browserContext, _CdpTarget_session, _CdpTarget_targetInfo, _CdpTarget_targetManager, _CdpTarget_sessionFactory, _CdpTarget_childTargets, _PageTarget_defaultViewport, _WorkerTarget_workerPromise;







/**
 * @internal
 */
var InitializationStatus;
(function (InitializationStatus) {
    InitializationStatus["SUCCESS"] = "success";
    InitializationStatus["ABORTED"] = "aborted";
})(InitializationStatus || (InitializationStatus = {}));
/**
 * @internal
 */
class CdpTarget extends _api_Target_js__WEBPACK_IMPORTED_MODULE_1__.Target {
    /**
     * To initialize the target for use, call initialize.
     *
     * @internal
     */
    constructor(targetInfo, session, browserContext, targetManager, sessionFactory) {
        super();
        _CdpTarget_browserContext.set(this, void 0);
        _CdpTarget_session.set(this, void 0);
        _CdpTarget_targetInfo.set(this, void 0);
        _CdpTarget_targetManager.set(this, void 0);
        _CdpTarget_sessionFactory.set(this, void 0);
        _CdpTarget_childTargets.set(this, new Set());
        Object.defineProperty(this, "_initializedDeferred", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _util_Deferred_js__WEBPACK_IMPORTED_MODULE_3__.Deferred.create()
        });
        Object.defineProperty(this, "_isClosedDeferred", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _util_Deferred_js__WEBPACK_IMPORTED_MODULE_3__.Deferred.create()
        });
        Object.defineProperty(this, "_targetId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        __classPrivateFieldSet(this, _CdpTarget_session, session, "f");
        __classPrivateFieldSet(this, _CdpTarget_targetManager, targetManager, "f");
        __classPrivateFieldSet(this, _CdpTarget_targetInfo, targetInfo, "f");
        __classPrivateFieldSet(this, _CdpTarget_browserContext, browserContext, "f");
        this._targetId = targetInfo.targetId;
        __classPrivateFieldSet(this, _CdpTarget_sessionFactory, sessionFactory, "f");
        if (__classPrivateFieldGet(this, _CdpTarget_session, "f") && __classPrivateFieldGet(this, _CdpTarget_session, "f") instanceof _CDPSession_js__WEBPACK_IMPORTED_MODULE_4__.CdpCDPSession) {
            __classPrivateFieldGet(this, _CdpTarget_session, "f")._setTarget(this);
        }
    }
    async asPage() {
        const session = this._session();
        if (!session) {
            return await this.createCDPSession().then(client => {
                return _Page_js__WEBPACK_IMPORTED_MODULE_5__.CdpPage._create(client, this, null);
            });
        }
        return await _Page_js__WEBPACK_IMPORTED_MODULE_5__.CdpPage._create(session, this, null);
    }
    _subtype() {
        return __classPrivateFieldGet(this, _CdpTarget_targetInfo, "f").subtype;
    }
    _session() {
        return __classPrivateFieldGet(this, _CdpTarget_session, "f");
    }
    _addChildTarget(target) {
        __classPrivateFieldGet(this, _CdpTarget_childTargets, "f").add(target);
    }
    _removeChildTarget(target) {
        __classPrivateFieldGet(this, _CdpTarget_childTargets, "f").delete(target);
    }
    _childTargets() {
        return __classPrivateFieldGet(this, _CdpTarget_childTargets, "f");
    }
    _sessionFactory() {
        if (!__classPrivateFieldGet(this, _CdpTarget_sessionFactory, "f")) {
            throw new Error('sessionFactory is not initialized');
        }
        return __classPrivateFieldGet(this, _CdpTarget_sessionFactory, "f");
    }
    createCDPSession() {
        if (!__classPrivateFieldGet(this, _CdpTarget_sessionFactory, "f")) {
            throw new Error('sessionFactory is not initialized');
        }
        return __classPrivateFieldGet(this, _CdpTarget_sessionFactory, "f").call(this, false).then(session => {
            session._setTarget(this);
            return session;
        });
    }
    url() {
        return __classPrivateFieldGet(this, _CdpTarget_targetInfo, "f").url;
    }
    type() {
        const type = __classPrivateFieldGet(this, _CdpTarget_targetInfo, "f").type;
        switch (type) {
            case 'page':
                return _api_Target_js__WEBPACK_IMPORTED_MODULE_1__.TargetType.PAGE;
            case 'background_page':
                return _api_Target_js__WEBPACK_IMPORTED_MODULE_1__.TargetType.BACKGROUND_PAGE;
            case 'service_worker':
                return _api_Target_js__WEBPACK_IMPORTED_MODULE_1__.TargetType.SERVICE_WORKER;
            case 'shared_worker':
                return _api_Target_js__WEBPACK_IMPORTED_MODULE_1__.TargetType.SHARED_WORKER;
            case 'browser':
                return _api_Target_js__WEBPACK_IMPORTED_MODULE_1__.TargetType.BROWSER;
            case 'webview':
                return _api_Target_js__WEBPACK_IMPORTED_MODULE_1__.TargetType.WEBVIEW;
            case 'tab':
                return _api_Target_js__WEBPACK_IMPORTED_MODULE_1__.TargetType.TAB;
            default:
                return _api_Target_js__WEBPACK_IMPORTED_MODULE_1__.TargetType.OTHER;
        }
    }
    _targetManager() {
        if (!__classPrivateFieldGet(this, _CdpTarget_targetManager, "f")) {
            throw new Error('targetManager is not initialized');
        }
        return __classPrivateFieldGet(this, _CdpTarget_targetManager, "f");
    }
    _getTargetInfo() {
        return __classPrivateFieldGet(this, _CdpTarget_targetInfo, "f");
    }
    browser() {
        if (!__classPrivateFieldGet(this, _CdpTarget_browserContext, "f")) {
            throw new Error('browserContext is not initialized');
        }
        return __classPrivateFieldGet(this, _CdpTarget_browserContext, "f").browser();
    }
    browserContext() {
        if (!__classPrivateFieldGet(this, _CdpTarget_browserContext, "f")) {
            throw new Error('browserContext is not initialized');
        }
        return __classPrivateFieldGet(this, _CdpTarget_browserContext, "f");
    }
    opener() {
        const { openerId } = __classPrivateFieldGet(this, _CdpTarget_targetInfo, "f");
        if (!openerId) {
            return;
        }
        return this.browser()
            .targets()
            .find(target => {
            return target._targetId === openerId;
        });
    }
    _targetInfoChanged(targetInfo) {
        __classPrivateFieldSet(this, _CdpTarget_targetInfo, targetInfo, "f");
        this._checkIfInitialized();
    }
    _initialize() {
        this._initializedDeferred.resolve(InitializationStatus.SUCCESS);
    }
    _isTargetExposed() {
        return this.type() !== _api_Target_js__WEBPACK_IMPORTED_MODULE_1__.TargetType.TAB && !this._subtype();
    }
    _checkIfInitialized() {
        if (!this._initializedDeferred.resolved()) {
            this._initializedDeferred.resolve(InitializationStatus.SUCCESS);
        }
    }
}
_CdpTarget_browserContext = new WeakMap(), _CdpTarget_session = new WeakMap(), _CdpTarget_targetInfo = new WeakMap(), _CdpTarget_targetManager = new WeakMap(), _CdpTarget_sessionFactory = new WeakMap(), _CdpTarget_childTargets = new WeakMap();
/**
 * @internal
 */
class PageTarget extends CdpTarget {
    constructor(targetInfo, session, browserContext, targetManager, sessionFactory, defaultViewport) {
        super(targetInfo, session, browserContext, targetManager, sessionFactory);
        _PageTarget_defaultViewport.set(this, void 0);
        Object.defineProperty(this, "pagePromise", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        __classPrivateFieldSet(this, _PageTarget_defaultViewport, defaultViewport ?? undefined, "f");
    }
    _initialize() {
        this._initializedDeferred
            .valueOrThrow()
            .then(async (result) => {
            if (result === InitializationStatus.ABORTED) {
                return;
            }
            const opener = this.opener();
            if (!(opener instanceof PageTarget)) {
                return;
            }
            if (!opener || !opener.pagePromise || this.type() !== 'page') {
                return true;
            }
            const openerPage = await opener.pagePromise;
            if (!openerPage.listenerCount(_api_Page_js__WEBPACK_IMPORTED_MODULE_0__.PageEvent.Popup)) {
                return true;
            }
            const popupPage = await this.page();
            openerPage.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_0__.PageEvent.Popup, popupPage);
            return true;
        })
            .catch(_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError);
        this._checkIfInitialized();
    }
    async page() {
        if (!this.pagePromise) {
            const session = this._session();
            this.pagePromise = (session
                ? Promise.resolve(session)
                : this._sessionFactory()(/* isAutoAttachEmulated=*/ false)).then(client => {
                return _Page_js__WEBPACK_IMPORTED_MODULE_5__.CdpPage._create(client, this, __classPrivateFieldGet(this, _PageTarget_defaultViewport, "f") ?? null);
            });
        }
        return (await this.pagePromise) ?? null;
    }
    _checkIfInitialized() {
        if (this._initializedDeferred.resolved()) {
            return;
        }
        if (this._getTargetInfo().url !== '') {
            this._initializedDeferred.resolve(InitializationStatus.SUCCESS);
        }
    }
}
_PageTarget_defaultViewport = new WeakMap();
/**
 * @internal
 */
class DevToolsTarget extends PageTarget {
}
/**
 * @internal
 */
class WorkerTarget extends CdpTarget {
    constructor() {
        super(...arguments);
        _WorkerTarget_workerPromise.set(this, void 0);
    }
    async worker() {
        if (!__classPrivateFieldGet(this, _WorkerTarget_workerPromise, "f")) {
            const session = this._session();
            // TODO(einbinder): Make workers send their console logs.
            __classPrivateFieldSet(this, _WorkerTarget_workerPromise, (session
                ? Promise.resolve(session)
                : this._sessionFactory()(/* isAutoAttachEmulated=*/ false)).then(client => {
                return new _WebWorker_js__WEBPACK_IMPORTED_MODULE_6__.CdpWebWorker(client, this._getTargetInfo().url, this._targetId, this.type(), () => { } /* consoleAPICalled */, () => { } /* exceptionThrown */);
            }), "f");
        }
        return await __classPrivateFieldGet(this, _WorkerTarget_workerPromise, "f");
    }
}
_WorkerTarget_workerPromise = new WeakMap();
/**
 * @internal
 */
class OtherTarget extends CdpTarget {
}


/***/ })

}]);