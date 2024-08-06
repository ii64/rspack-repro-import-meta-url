"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_Target_js"],{

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Target.js":
/*!***********************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Target.js ***!
  \***********************************************************************/
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
/* harmony import */ var _api_Target_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Target.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Target.js");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */ var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Deferred.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/* harmony import */ var _CDPSession_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CDPSession.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/CDPSession.js");
/* harmony import */ var _Page_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Page.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Page.js");
/* harmony import */ var _WebWorker_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WebWorker.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/WebWorker.js");
/**
 * @license
 * Copyright 2019 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */






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
class CdpTarget extends _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.Target {
    #browserContext;
    #session;
    #targetInfo;
    #targetManager;
    #sessionFactory;
    #childTargets = new Set();
    _initializedDeferred = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_2__.Deferred.create();
    _isClosedDeferred = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_2__.Deferred.create();
    _targetId;
    /**
     * To initialize the target for use, call initialize.
     *
     * @internal
     */
    constructor(targetInfo, session, browserContext, targetManager, sessionFactory) {
        super();
        this.#session = session;
        this.#targetManager = targetManager;
        this.#targetInfo = targetInfo;
        this.#browserContext = browserContext;
        this._targetId = targetInfo.targetId;
        this.#sessionFactory = sessionFactory;
        if (this.#session && this.#session instanceof _CDPSession_js__WEBPACK_IMPORTED_MODULE_3__.CdpCDPSession) {
            this.#session._setTarget(this);
        }
    }
    async asPage() {
        const session = this._session();
        if (!session) {
            return await this.createCDPSession().then(client => {
                return _Page_js__WEBPACK_IMPORTED_MODULE_4__.CdpPage._create(client, this, null);
            });
        }
        return await _Page_js__WEBPACK_IMPORTED_MODULE_4__.CdpPage._create(session, this, null);
    }
    _subtype() {
        return this.#targetInfo.subtype;
    }
    _session() {
        return this.#session;
    }
    _addChildTarget(target) {
        this.#childTargets.add(target);
    }
    _removeChildTarget(target) {
        this.#childTargets.delete(target);
    }
    _childTargets() {
        return this.#childTargets;
    }
    _sessionFactory() {
        if (!this.#sessionFactory) {
            throw new Error('sessionFactory is not initialized');
        }
        return this.#sessionFactory;
    }
    createCDPSession() {
        if (!this.#sessionFactory) {
            throw new Error('sessionFactory is not initialized');
        }
        return this.#sessionFactory(false).then(session => {
            session._setTarget(this);
            return session;
        });
    }
    url() {
        return this.#targetInfo.url;
    }
    type() {
        const type = this.#targetInfo.type;
        switch (type) {
            case 'page':
                return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.PAGE;
            case 'background_page':
                return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.BACKGROUND_PAGE;
            case 'service_worker':
                return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.SERVICE_WORKER;
            case 'shared_worker':
                return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.SHARED_WORKER;
            case 'browser':
                return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.BROWSER;
            case 'webview':
                return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.WEBVIEW;
            case 'tab':
                return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.TAB;
            default:
                return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.OTHER;
        }
    }
    _targetManager() {
        if (!this.#targetManager) {
            throw new Error('targetManager is not initialized');
        }
        return this.#targetManager;
    }
    _getTargetInfo() {
        return this.#targetInfo;
    }
    browser() {
        if (!this.#browserContext) {
            throw new Error('browserContext is not initialized');
        }
        return this.#browserContext.browser();
    }
    browserContext() {
        if (!this.#browserContext) {
            throw new Error('browserContext is not initialized');
        }
        return this.#browserContext;
    }
    opener() {
        const { openerId } = this.#targetInfo;
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
        this.#targetInfo = targetInfo;
        this._checkIfInitialized();
    }
    _initialize() {
        this._initializedDeferred.resolve(InitializationStatus.SUCCESS);
    }
    _isTargetExposed() {
        return this.type() !== _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.TAB && !this._subtype();
    }
    _checkIfInitialized() {
        if (!this._initializedDeferred.resolved()) {
            this._initializedDeferred.resolve(InitializationStatus.SUCCESS);
        }
    }
}
/**
 * @internal
 */
class PageTarget extends CdpTarget {
    #defaultViewport;
    pagePromise;
    constructor(targetInfo, session, browserContext, targetManager, sessionFactory, defaultViewport) {
        super(targetInfo, session, browserContext, targetManager, sessionFactory);
        this.#defaultViewport = defaultViewport ?? undefined;
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
            if (!openerPage.listenerCount("popup" /* PageEvent.Popup */)) {
                return true;
            }
            const popupPage = await this.page();
            openerPage.emit("popup" /* PageEvent.Popup */, popupPage);
            return true;
        })
            .catch(_common_util_js__WEBPACK_IMPORTED_MODULE_1__.debugError);
        this._checkIfInitialized();
    }
    async page() {
        if (!this.pagePromise) {
            const session = this._session();
            this.pagePromise = (session
                ? Promise.resolve(session)
                : this._sessionFactory()(/* isAutoAttachEmulated=*/ false)).then(client => {
                return _Page_js__WEBPACK_IMPORTED_MODULE_4__.CdpPage._create(client, this, this.#defaultViewport ?? null);
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
/**
 * @internal
 */
class DevToolsTarget extends PageTarget {
}
/**
 * @internal
 */
class WorkerTarget extends CdpTarget {
    #workerPromise;
    async worker() {
        if (!this.#workerPromise) {
            const session = this._session();
            // TODO(einbinder): Make workers send their console logs.
            this.#workerPromise = (session
                ? Promise.resolve(session)
                : this._sessionFactory()(/* isAutoAttachEmulated=*/ false)).then(client => {
                return new _WebWorker_js__WEBPACK_IMPORTED_MODULE_5__.CdpWebWorker(client, this._getTargetInfo().url, this._targetId, this.type(), () => { } /* consoleAPICalled */, () => { } /* exceptionThrown */);
            });
        }
        return await this.#workerPromise;
    }
}
/**
 * @internal
 */
class OtherTarget extends CdpTarget {
}
//# sourceMappingURL=Target.js.map

/***/ })

}]);