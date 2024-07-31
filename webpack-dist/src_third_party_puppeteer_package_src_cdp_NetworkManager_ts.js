"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_cdp_NetworkManager_ts"],{

/***/ "./src/third_party/puppeteer/package/src/cdp/HTTPRequest.ts":
/*!******************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/cdp/HTTPRequest.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdpHTTPRequest: () => (/* binding */ CdpHTTPRequest)
/* harmony export */ });
/* harmony import */ var _api_HTTPRequest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/HTTPRequest.js */ "./src/third_party/puppeteer/package/src/api/HTTPRequest.ts");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/src/common/util.ts");
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
var _CdpHTTPRequest_client, _CdpHTTPRequest_isNavigationRequest, _CdpHTTPRequest_url, _CdpHTTPRequest_resourceType, _CdpHTTPRequest_method, _CdpHTTPRequest_hasPostData, _CdpHTTPRequest_postData, _CdpHTTPRequest_headers, _CdpHTTPRequest_frame, _CdpHTTPRequest_initiator;


/**
 * @internal
 */
class CdpHTTPRequest extends _api_HTTPRequest_js__WEBPACK_IMPORTED_MODULE_0__.HTTPRequest {
    get client() {
        return __classPrivateFieldGet(this, _CdpHTTPRequest_client, "f");
    }
    constructor(client, frame, interceptionId, allowInterception, data, redirectChain) {
        super();
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _CdpHTTPRequest_client.set(this, void 0);
        _CdpHTTPRequest_isNavigationRequest.set(this, void 0);
        _CdpHTTPRequest_url.set(this, void 0);
        _CdpHTTPRequest_resourceType.set(this, void 0);
        _CdpHTTPRequest_method.set(this, void 0);
        _CdpHTTPRequest_hasPostData.set(this, false);
        _CdpHTTPRequest_postData.set(this, void 0);
        _CdpHTTPRequest_headers.set(this, {});
        _CdpHTTPRequest_frame.set(this, void 0);
        _CdpHTTPRequest_initiator.set(this, void 0);
        __classPrivateFieldSet(this, _CdpHTTPRequest_client, client, "f");
        this.id = data.requestId;
        __classPrivateFieldSet(this, _CdpHTTPRequest_isNavigationRequest, data.requestId === data.loaderId && data.type === 'Document', "f");
        this._interceptionId = interceptionId;
        __classPrivateFieldSet(this, _CdpHTTPRequest_url, data.request.url, "f");
        __classPrivateFieldSet(this, _CdpHTTPRequest_resourceType, (data.type || 'other').toLowerCase(), "f");
        __classPrivateFieldSet(this, _CdpHTTPRequest_method, data.request.method, "f");
        __classPrivateFieldSet(this, _CdpHTTPRequest_postData, data.request.postData, "f");
        __classPrivateFieldSet(this, _CdpHTTPRequest_hasPostData, data.request.hasPostData ?? false, "f");
        __classPrivateFieldSet(this, _CdpHTTPRequest_frame, frame, "f");
        this._redirectChain = redirectChain;
        __classPrivateFieldSet(this, _CdpHTTPRequest_initiator, data.initiator, "f");
        this.interception.enabled = allowInterception;
        for (const [key, value] of Object.entries(data.request.headers)) {
            __classPrivateFieldGet(this, _CdpHTTPRequest_headers, "f")[key.toLowerCase()] = value;
        }
    }
    url() {
        return __classPrivateFieldGet(this, _CdpHTTPRequest_url, "f");
    }
    resourceType() {
        return __classPrivateFieldGet(this, _CdpHTTPRequest_resourceType, "f");
    }
    method() {
        return __classPrivateFieldGet(this, _CdpHTTPRequest_method, "f");
    }
    postData() {
        return __classPrivateFieldGet(this, _CdpHTTPRequest_postData, "f");
    }
    hasPostData() {
        return __classPrivateFieldGet(this, _CdpHTTPRequest_hasPostData, "f");
    }
    async fetchPostData() {
        try {
            const result = await __classPrivateFieldGet(this, _CdpHTTPRequest_client, "f").send('Network.getRequestPostData', {
                requestId: this.id,
            });
            return result.postData;
        }
        catch (err) {
            (0,_common_util_js__WEBPACK_IMPORTED_MODULE_1__.debugError)(err);
            return;
        }
    }
    headers() {
        return __classPrivateFieldGet(this, _CdpHTTPRequest_headers, "f");
    }
    response() {
        return this._response;
    }
    frame() {
        return __classPrivateFieldGet(this, _CdpHTTPRequest_frame, "f");
    }
    isNavigationRequest() {
        return __classPrivateFieldGet(this, _CdpHTTPRequest_isNavigationRequest, "f");
    }
    initiator() {
        return __classPrivateFieldGet(this, _CdpHTTPRequest_initiator, "f");
    }
    redirectChain() {
        return this._redirectChain.slice();
    }
    failure() {
        if (!this._failureText) {
            return null;
        }
        return {
            errorText: this._failureText,
        };
    }
    /**
     * @internal
     */
    async _continue(overrides = {}) {
        const { url, method, postData, headers } = overrides;
        this.interception.handled = true;
        const postDataBinaryBase64 = postData ? btoa(postData) : undefined;
        if (this._interceptionId === undefined) {
            throw new Error('HTTPRequest is missing _interceptionId needed for Fetch.continueRequest');
        }
        await __classPrivateFieldGet(this, _CdpHTTPRequest_client, "f")
            .send('Fetch.continueRequest', {
            requestId: this._interceptionId,
            url,
            method,
            postData: postDataBinaryBase64,
            headers: headers ? (0,_api_HTTPRequest_js__WEBPACK_IMPORTED_MODULE_0__.headersArray)(headers) : undefined,
        })
            .catch(error => {
            this.interception.handled = false;
            return (0,_api_HTTPRequest_js__WEBPACK_IMPORTED_MODULE_0__.handleError)(error);
        });
    }
    async _respond(response) {
        this.interception.handled = true;
        let parsedBody;
        if (response.body) {
            parsedBody = _api_HTTPRequest_js__WEBPACK_IMPORTED_MODULE_0__.HTTPRequest.getResponse(response.body);
        }
        const responseHeaders = {};
        if (response.headers) {
            for (const header of Object.keys(response.headers)) {
                const value = response.headers[header];
                responseHeaders[header.toLowerCase()] = Array.isArray(value)
                    ? value.map(item => {
                        return String(item);
                    })
                    : String(value);
            }
        }
        if (response.contentType) {
            responseHeaders['content-type'] = response.contentType;
        }
        if (parsedBody?.contentLength && !('content-length' in responseHeaders)) {
            responseHeaders['content-length'] = String(parsedBody.contentLength);
        }
        const status = response.status || 200;
        if (this._interceptionId === undefined) {
            throw new Error('HTTPRequest is missing _interceptionId needed for Fetch.fulfillRequest');
        }
        await __classPrivateFieldGet(this, _CdpHTTPRequest_client, "f")
            .send('Fetch.fulfillRequest', {
            requestId: this._interceptionId,
            responseCode: status,
            responsePhrase: _api_HTTPRequest_js__WEBPACK_IMPORTED_MODULE_0__.STATUS_TEXTS[status],
            responseHeaders: (0,_api_HTTPRequest_js__WEBPACK_IMPORTED_MODULE_0__.headersArray)(responseHeaders),
            body: parsedBody?.base64,
        })
            .catch(error => {
            this.interception.handled = false;
            return (0,_api_HTTPRequest_js__WEBPACK_IMPORTED_MODULE_0__.handleError)(error);
        });
    }
    async _abort(errorReason) {
        this.interception.handled = true;
        if (this._interceptionId === undefined) {
            throw new Error('HTTPRequest is missing _interceptionId needed for Fetch.failRequest');
        }
        await __classPrivateFieldGet(this, _CdpHTTPRequest_client, "f")
            .send('Fetch.failRequest', {
            requestId: this._interceptionId,
            errorReason: errorReason || 'Failed',
        })
            .catch(_api_HTTPRequest_js__WEBPACK_IMPORTED_MODULE_0__.handleError);
    }
}
_CdpHTTPRequest_client = new WeakMap(), _CdpHTTPRequest_isNavigationRequest = new WeakMap(), _CdpHTTPRequest_url = new WeakMap(), _CdpHTTPRequest_resourceType = new WeakMap(), _CdpHTTPRequest_method = new WeakMap(), _CdpHTTPRequest_hasPostData = new WeakMap(), _CdpHTTPRequest_postData = new WeakMap(), _CdpHTTPRequest_headers = new WeakMap(), _CdpHTTPRequest_frame = new WeakMap(), _CdpHTTPRequest_initiator = new WeakMap();


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/cdp/NetworkEventManager.ts":
/*!**************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/cdp/NetworkEventManager.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NetworkEventManager: () => (/* binding */ NetworkEventManager)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _NetworkEventManager_requestWillBeSentMap, _NetworkEventManager_requestPausedMap, _NetworkEventManager_httpRequestsMap, _NetworkEventManager_responseReceivedExtraInfoMap, _NetworkEventManager_queuedRedirectInfoMap, _NetworkEventManager_queuedEventGroupMap;
/**
 * Helper class to track network events by request ID
 *
 * @internal
 */
class NetworkEventManager {
    constructor() {
        /**
         * There are four possible orders of events:
         * A. `_onRequestWillBeSent`
         * B. `_onRequestWillBeSent`, `_onRequestPaused`
         * C. `_onRequestPaused`, `_onRequestWillBeSent`
         * D. `_onRequestPaused`, `_onRequestWillBeSent`, `_onRequestPaused`,
         * `_onRequestWillBeSent`, `_onRequestPaused`, `_onRequestPaused`
         * (see crbug.com/1196004)
         *
         * For `_onRequest` we need the event from `_onRequestWillBeSent` and
         * optionally the `interceptionId` from `_onRequestPaused`.
         *
         * If request interception is disabled, call `_onRequest` once per call to
         * `_onRequestWillBeSent`.
         * If request interception is enabled, call `_onRequest` once per call to
         * `_onRequestPaused` (once per `interceptionId`).
         *
         * Events are stored to allow for subsequent events to call `_onRequest`.
         *
         * Note that (chains of) redirect requests have the same `requestId` (!) as
         * the original request. We have to anticipate series of events like these:
         * A. `_onRequestWillBeSent`,
         * `_onRequestWillBeSent`, ...
         * B. `_onRequestWillBeSent`, `_onRequestPaused`,
         * `_onRequestWillBeSent`, `_onRequestPaused`, ...
         * C. `_onRequestWillBeSent`, `_onRequestPaused`,
         * `_onRequestPaused`, `_onRequestWillBeSent`, ...
         * D. `_onRequestPaused`, `_onRequestWillBeSent`,
         * `_onRequestPaused`, `_onRequestWillBeSent`, `_onRequestPaused`,
         * `_onRequestWillBeSent`, `_onRequestPaused`, `_onRequestPaused`, ...
         * (see crbug.com/1196004)
         */
        _NetworkEventManager_requestWillBeSentMap.set(this, new Map());
        _NetworkEventManager_requestPausedMap.set(this, new Map());
        _NetworkEventManager_httpRequestsMap.set(this, new Map());
        /*
         * The below maps are used to reconcile Network.responseReceivedExtraInfo
         * events with their corresponding request. Each response and redirect
         * response gets an ExtraInfo event, and we don't know which will come first.
         * This means that we have to store a Response or an ExtraInfo for each
         * response, and emit the event when we get both of them. In addition, to
         * handle redirects, we have to make them Arrays to represent the chain of
         * events.
         */
        _NetworkEventManager_responseReceivedExtraInfoMap.set(this, new Map());
        _NetworkEventManager_queuedRedirectInfoMap.set(this, new Map());
        _NetworkEventManager_queuedEventGroupMap.set(this, new Map());
    }
    forget(networkRequestId) {
        __classPrivateFieldGet(this, _NetworkEventManager_requestWillBeSentMap, "f").delete(networkRequestId);
        __classPrivateFieldGet(this, _NetworkEventManager_requestPausedMap, "f").delete(networkRequestId);
        __classPrivateFieldGet(this, _NetworkEventManager_queuedEventGroupMap, "f").delete(networkRequestId);
        __classPrivateFieldGet(this, _NetworkEventManager_queuedRedirectInfoMap, "f").delete(networkRequestId);
        __classPrivateFieldGet(this, _NetworkEventManager_responseReceivedExtraInfoMap, "f").delete(networkRequestId);
    }
    responseExtraInfo(networkRequestId) {
        if (!__classPrivateFieldGet(this, _NetworkEventManager_responseReceivedExtraInfoMap, "f").has(networkRequestId)) {
            __classPrivateFieldGet(this, _NetworkEventManager_responseReceivedExtraInfoMap, "f").set(networkRequestId, []);
        }
        return __classPrivateFieldGet(this, _NetworkEventManager_responseReceivedExtraInfoMap, "f").get(networkRequestId);
    }
    queuedRedirectInfo(fetchRequestId) {
        if (!__classPrivateFieldGet(this, _NetworkEventManager_queuedRedirectInfoMap, "f").has(fetchRequestId)) {
            __classPrivateFieldGet(this, _NetworkEventManager_queuedRedirectInfoMap, "f").set(fetchRequestId, []);
        }
        return __classPrivateFieldGet(this, _NetworkEventManager_queuedRedirectInfoMap, "f").get(fetchRequestId);
    }
    queueRedirectInfo(fetchRequestId, redirectInfo) {
        this.queuedRedirectInfo(fetchRequestId).push(redirectInfo);
    }
    takeQueuedRedirectInfo(fetchRequestId) {
        return this.queuedRedirectInfo(fetchRequestId).shift();
    }
    inFlightRequestsCount() {
        let inFlightRequestCounter = 0;
        for (const request of __classPrivateFieldGet(this, _NetworkEventManager_httpRequestsMap, "f").values()) {
            if (!request.response()) {
                inFlightRequestCounter++;
            }
        }
        return inFlightRequestCounter;
    }
    storeRequestWillBeSent(networkRequestId, event) {
        __classPrivateFieldGet(this, _NetworkEventManager_requestWillBeSentMap, "f").set(networkRequestId, event);
    }
    getRequestWillBeSent(networkRequestId) {
        return __classPrivateFieldGet(this, _NetworkEventManager_requestWillBeSentMap, "f").get(networkRequestId);
    }
    forgetRequestWillBeSent(networkRequestId) {
        __classPrivateFieldGet(this, _NetworkEventManager_requestWillBeSentMap, "f").delete(networkRequestId);
    }
    getRequestPaused(networkRequestId) {
        return __classPrivateFieldGet(this, _NetworkEventManager_requestPausedMap, "f").get(networkRequestId);
    }
    forgetRequestPaused(networkRequestId) {
        __classPrivateFieldGet(this, _NetworkEventManager_requestPausedMap, "f").delete(networkRequestId);
    }
    storeRequestPaused(networkRequestId, event) {
        __classPrivateFieldGet(this, _NetworkEventManager_requestPausedMap, "f").set(networkRequestId, event);
    }
    getRequest(networkRequestId) {
        return __classPrivateFieldGet(this, _NetworkEventManager_httpRequestsMap, "f").get(networkRequestId);
    }
    storeRequest(networkRequestId, request) {
        __classPrivateFieldGet(this, _NetworkEventManager_httpRequestsMap, "f").set(networkRequestId, request);
    }
    forgetRequest(networkRequestId) {
        __classPrivateFieldGet(this, _NetworkEventManager_httpRequestsMap, "f").delete(networkRequestId);
    }
    getQueuedEventGroup(networkRequestId) {
        return __classPrivateFieldGet(this, _NetworkEventManager_queuedEventGroupMap, "f").get(networkRequestId);
    }
    queueEventGroup(networkRequestId, event) {
        __classPrivateFieldGet(this, _NetworkEventManager_queuedEventGroupMap, "f").set(networkRequestId, event);
    }
    forgetQueuedEventGroup(networkRequestId) {
        __classPrivateFieldGet(this, _NetworkEventManager_queuedEventGroupMap, "f").delete(networkRequestId);
    }
}
_NetworkEventManager_requestWillBeSentMap = new WeakMap(), _NetworkEventManager_requestPausedMap = new WeakMap(), _NetworkEventManager_httpRequestsMap = new WeakMap(), _NetworkEventManager_responseReceivedExtraInfoMap = new WeakMap(), _NetworkEventManager_queuedRedirectInfoMap = new WeakMap(), _NetworkEventManager_queuedEventGroupMap = new WeakMap();


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/cdp/NetworkManager.ts":
/*!*********************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/cdp/NetworkManager.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NetworkManager: () => (/* binding */ NetworkManager)
/* harmony export */ });
/* harmony import */ var _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/CDPSession.js */ "./src/third_party/puppeteer/package/src/api/CDPSession.ts");
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./src/third_party/puppeteer/package/src/common/EventEmitter.ts");
/* harmony import */ var _common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/NetworkManagerEvents.js */ "./src/third_party/puppeteer/package/src/common/NetworkManagerEvents.ts");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/src/common/util.ts");
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/src/util/assert.ts");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/disposable.js */ "./src/third_party/puppeteer/package/src/util/disposable.ts");
/* harmony import */ var _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HTTPRequest.js */ "./src/third_party/puppeteer/package/src/cdp/HTTPRequest.ts");
/* harmony import */ var _HTTPResponse_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HTTPResponse.js */ "./src/third_party/puppeteer/package/src/cdp/HTTPResponse.ts");
/* harmony import */ var _NetworkEventManager_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NetworkEventManager.js */ "./src/third_party/puppeteer/package/src/cdp/NetworkEventManager.ts");
/**
 * @license
 * Copyright 2017 Google Inc.
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
var _NetworkManager_instances, _NetworkManager_frameManager, _NetworkManager_networkEventManager, _NetworkManager_extraHTTPHeaders, _NetworkManager_credentials, _NetworkManager_attemptedAuthentications, _NetworkManager_userRequestInterceptionEnabled, _NetworkManager_protocolRequestInterceptionEnabled, _NetworkManager_userCacheDisabled, _NetworkManager_emulatedNetworkConditions, _NetworkManager_userAgent, _NetworkManager_userAgentMetadata, _NetworkManager_handlers, _NetworkManager_clients, _NetworkManager_removeClient, _NetworkManager_applyExtraHTTPHeaders, _NetworkManager_applyToAllClients, _NetworkManager_applyNetworkConditions, _NetworkManager_applyUserAgent, _NetworkManager_applyProtocolRequestInterception, _NetworkManager_applyProtocolCacheDisabled, _NetworkManager_onRequestWillBeSent, _NetworkManager_onAuthRequired, _NetworkManager_onRequestPaused, _NetworkManager_patchRequestEventHeaders, _NetworkManager_onRequestWithoutNetworkInstrumentation, _NetworkManager_onRequest, _NetworkManager_onRequestServedFromCache, _NetworkManager_handleRequestRedirect, _NetworkManager_emitResponseEvent, _NetworkManager_onResponseReceived, _NetworkManager_onResponseReceivedExtraInfo, _NetworkManager_forgetRequest, _NetworkManager_onLoadingFinished, _NetworkManager_emitLoadingFinished, _NetworkManager_onLoadingFailed, _NetworkManager_emitLoadingFailed;









/**
 * @internal
 */
class NetworkManager extends _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter {
    constructor(frameManager) {
        super();
        _NetworkManager_instances.add(this);
        _NetworkManager_frameManager.set(this, void 0);
        _NetworkManager_networkEventManager.set(this, new _NetworkEventManager_js__WEBPACK_IMPORTED_MODULE_8__.NetworkEventManager());
        _NetworkManager_extraHTTPHeaders.set(this, void 0);
        _NetworkManager_credentials.set(this, null);
        _NetworkManager_attemptedAuthentications.set(this, new Set());
        _NetworkManager_userRequestInterceptionEnabled.set(this, false);
        _NetworkManager_protocolRequestInterceptionEnabled.set(this, false);
        _NetworkManager_userCacheDisabled.set(this, void 0);
        _NetworkManager_emulatedNetworkConditions.set(this, void 0);
        _NetworkManager_userAgent.set(this, void 0);
        _NetworkManager_userAgentMetadata.set(this, void 0);
        _NetworkManager_handlers.set(this, [
            ['Fetch.requestPaused', __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_onRequestPaused)],
            ['Fetch.authRequired', __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_onAuthRequired)],
            ['Network.requestWillBeSent', __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_onRequestWillBeSent)],
            ['Network.requestServedFromCache', __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_onRequestServedFromCache)],
            ['Network.responseReceived', __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_onResponseReceived)],
            ['Network.loadingFinished', __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_onLoadingFinished)],
            ['Network.loadingFailed', __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_onLoadingFailed)],
            ['Network.responseReceivedExtraInfo', __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_onResponseReceivedExtraInfo)],
            [_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.Disconnected, __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_removeClient)],
        ]);
        _NetworkManager_clients.set(this, new Map());
        __classPrivateFieldSet(this, _NetworkManager_frameManager, frameManager, "f");
    }
    async addClient(client) {
        if (__classPrivateFieldGet(this, _NetworkManager_clients, "f").has(client)) {
            return;
        }
        const subscriptions = new _util_disposable_js__WEBPACK_IMPORTED_MODULE_5__.DisposableStack();
        __classPrivateFieldGet(this, _NetworkManager_clients, "f").set(client, subscriptions);
        const clientEmitter = subscriptions.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(client));
        for (const [event, handler] of __classPrivateFieldGet(this, _NetworkManager_handlers, "f")) {
            clientEmitter.on(event, (arg) => {
                return handler.bind(this)(client, arg);
            });
        }
        await Promise.all([
            client.send('Network.enable'),
            __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_applyExtraHTTPHeaders).call(this, client),
            __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_applyNetworkConditions).call(this, client),
            __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_applyProtocolCacheDisabled).call(this, client),
            __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_applyProtocolRequestInterception).call(this, client),
            __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_applyUserAgent).call(this, client),
        ]);
    }
    async authenticate(credentials) {
        __classPrivateFieldSet(this, _NetworkManager_credentials, credentials, "f");
        const enabled = __classPrivateFieldGet(this, _NetworkManager_userRequestInterceptionEnabled, "f") || !!__classPrivateFieldGet(this, _NetworkManager_credentials, "f");
        if (enabled === __classPrivateFieldGet(this, _NetworkManager_protocolRequestInterceptionEnabled, "f")) {
            return;
        }
        __classPrivateFieldSet(this, _NetworkManager_protocolRequestInterceptionEnabled, enabled, "f");
        await __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_applyToAllClients).call(this, __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_applyProtocolRequestInterception).bind(this));
    }
    async setExtraHTTPHeaders(headers) {
        const extraHTTPHeaders = {};
        for (const [key, value] of Object.entries(headers)) {
            (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_4__.assert)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_3__.isString)(value), `Expected value of header "${key}" to be String, but "${typeof value}" is found.`);
            extraHTTPHeaders[key.toLowerCase()] = value;
        }
        __classPrivateFieldSet(this, _NetworkManager_extraHTTPHeaders, extraHTTPHeaders, "f");
        await __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_applyToAllClients).call(this, __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_applyExtraHTTPHeaders).bind(this));
    }
    extraHTTPHeaders() {
        return Object.assign({}, __classPrivateFieldGet(this, _NetworkManager_extraHTTPHeaders, "f"));
    }
    inFlightRequestsCount() {
        return __classPrivateFieldGet(this, _NetworkManager_networkEventManager, "f").inFlightRequestsCount();
    }
    async setOfflineMode(value) {
        if (!__classPrivateFieldGet(this, _NetworkManager_emulatedNetworkConditions, "f")) {
            __classPrivateFieldSet(this, _NetworkManager_emulatedNetworkConditions, {
                offline: false,
                upload: -1,
                download: -1,
                latency: 0,
            }, "f");
        }
        __classPrivateFieldGet(this, _NetworkManager_emulatedNetworkConditions, "f").offline = value;
        await __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_applyToAllClients).call(this, __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_applyNetworkConditions).bind(this));
    }
    async emulateNetworkConditions(networkConditions) {
        if (!__classPrivateFieldGet(this, _NetworkManager_emulatedNetworkConditions, "f")) {
            __classPrivateFieldSet(this, _NetworkManager_emulatedNetworkConditions, {
                offline: false,
                upload: -1,
                download: -1,
                latency: 0,
            }, "f");
        }
        __classPrivateFieldGet(this, _NetworkManager_emulatedNetworkConditions, "f").upload = networkConditions
            ? networkConditions.upload
            : -1;
        __classPrivateFieldGet(this, _NetworkManager_emulatedNetworkConditions, "f").download = networkConditions
            ? networkConditions.download
            : -1;
        __classPrivateFieldGet(this, _NetworkManager_emulatedNetworkConditions, "f").latency = networkConditions
            ? networkConditions.latency
            : 0;
        await __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_applyToAllClients).call(this, __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_applyNetworkConditions).bind(this));
    }
    async setUserAgent(userAgent, userAgentMetadata) {
        __classPrivateFieldSet(this, _NetworkManager_userAgent, userAgent, "f");
        __classPrivateFieldSet(this, _NetworkManager_userAgentMetadata, userAgentMetadata, "f");
        await __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_applyToAllClients).call(this, __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_applyUserAgent).bind(this));
    }
    async setCacheEnabled(enabled) {
        __classPrivateFieldSet(this, _NetworkManager_userCacheDisabled, !enabled, "f");
        await __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_applyToAllClients).call(this, __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_applyProtocolCacheDisabled).bind(this));
    }
    async setRequestInterception(value) {
        __classPrivateFieldSet(this, _NetworkManager_userRequestInterceptionEnabled, value, "f");
        const enabled = __classPrivateFieldGet(this, _NetworkManager_userRequestInterceptionEnabled, "f") || !!__classPrivateFieldGet(this, _NetworkManager_credentials, "f");
        if (enabled === __classPrivateFieldGet(this, _NetworkManager_protocolRequestInterceptionEnabled, "f")) {
            return;
        }
        __classPrivateFieldSet(this, _NetworkManager_protocolRequestInterceptionEnabled, enabled, "f");
        await __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_applyToAllClients).call(this, __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_applyProtocolRequestInterception).bind(this));
    }
}
_NetworkManager_frameManager = new WeakMap(), _NetworkManager_networkEventManager = new WeakMap(), _NetworkManager_extraHTTPHeaders = new WeakMap(), _NetworkManager_credentials = new WeakMap(), _NetworkManager_attemptedAuthentications = new WeakMap(), _NetworkManager_userRequestInterceptionEnabled = new WeakMap(), _NetworkManager_protocolRequestInterceptionEnabled = new WeakMap(), _NetworkManager_userCacheDisabled = new WeakMap(), _NetworkManager_emulatedNetworkConditions = new WeakMap(), _NetworkManager_userAgent = new WeakMap(), _NetworkManager_userAgentMetadata = new WeakMap(), _NetworkManager_handlers = new WeakMap(), _NetworkManager_clients = new WeakMap(), _NetworkManager_instances = new WeakSet(), _NetworkManager_removeClient = async function _NetworkManager_removeClient(client) {
    __classPrivateFieldGet(this, _NetworkManager_clients, "f").get(client)?.dispose();
    __classPrivateFieldGet(this, _NetworkManager_clients, "f").delete(client);
}, _NetworkManager_applyExtraHTTPHeaders = async function _NetworkManager_applyExtraHTTPHeaders(client) {
    if (__classPrivateFieldGet(this, _NetworkManager_extraHTTPHeaders, "f") === undefined) {
        return;
    }
    await client.send('Network.setExtraHTTPHeaders', {
        headers: __classPrivateFieldGet(this, _NetworkManager_extraHTTPHeaders, "f"),
    });
}, _NetworkManager_applyToAllClients = async function _NetworkManager_applyToAllClients(fn) {
    await Promise.all(Array.from(__classPrivateFieldGet(this, _NetworkManager_clients, "f").keys()).map(client => {
        return fn(client);
    }));
}, _NetworkManager_applyNetworkConditions = async function _NetworkManager_applyNetworkConditions(client) {
    if (__classPrivateFieldGet(this, _NetworkManager_emulatedNetworkConditions, "f") === undefined) {
        return;
    }
    await client.send('Network.emulateNetworkConditions', {
        offline: __classPrivateFieldGet(this, _NetworkManager_emulatedNetworkConditions, "f").offline,
        latency: __classPrivateFieldGet(this, _NetworkManager_emulatedNetworkConditions, "f").latency,
        uploadThroughput: __classPrivateFieldGet(this, _NetworkManager_emulatedNetworkConditions, "f").upload,
        downloadThroughput: __classPrivateFieldGet(this, _NetworkManager_emulatedNetworkConditions, "f").download,
    });
}, _NetworkManager_applyUserAgent = async function _NetworkManager_applyUserAgent(client) {
    if (__classPrivateFieldGet(this, _NetworkManager_userAgent, "f") === undefined) {
        return;
    }
    await client.send('Network.setUserAgentOverride', {
        userAgent: __classPrivateFieldGet(this, _NetworkManager_userAgent, "f"),
        userAgentMetadata: __classPrivateFieldGet(this, _NetworkManager_userAgentMetadata, "f"),
    });
}, _NetworkManager_applyProtocolRequestInterception = async function _NetworkManager_applyProtocolRequestInterception(client) {
    if (__classPrivateFieldGet(this, _NetworkManager_userCacheDisabled, "f") === undefined) {
        __classPrivateFieldSet(this, _NetworkManager_userCacheDisabled, false, "f");
    }
    if (__classPrivateFieldGet(this, _NetworkManager_protocolRequestInterceptionEnabled, "f")) {
        await Promise.all([
            __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_applyProtocolCacheDisabled).call(this, client),
            client.send('Fetch.enable', {
                handleAuthRequests: true,
                patterns: [{ urlPattern: '*' }],
            }),
        ]);
    }
    else {
        await Promise.all([
            __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_applyProtocolCacheDisabled).call(this, client),
            client.send('Fetch.disable'),
        ]);
    }
}, _NetworkManager_applyProtocolCacheDisabled = async function _NetworkManager_applyProtocolCacheDisabled(client) {
    if (__classPrivateFieldGet(this, _NetworkManager_userCacheDisabled, "f") === undefined) {
        return;
    }
    await client.send('Network.setCacheDisabled', {
        cacheDisabled: __classPrivateFieldGet(this, _NetworkManager_userCacheDisabled, "f"),
    });
}, _NetworkManager_onRequestWillBeSent = function _NetworkManager_onRequestWillBeSent(client, event) {
    // Request interception doesn't happen for data URLs with Network Service.
    if (__classPrivateFieldGet(this, _NetworkManager_userRequestInterceptionEnabled, "f") &&
        !event.request.url.startsWith('data:')) {
        const { requestId: networkRequestId } = event;
        __classPrivateFieldGet(this, _NetworkManager_networkEventManager, "f").storeRequestWillBeSent(networkRequestId, event);
        /**
         * CDP may have sent a Fetch.requestPaused event already. Check for it.
         */
        const requestPausedEvent = __classPrivateFieldGet(this, _NetworkManager_networkEventManager, "f").getRequestPaused(networkRequestId);
        if (requestPausedEvent) {
            const { requestId: fetchRequestId } = requestPausedEvent;
            __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_patchRequestEventHeaders).call(this, event, requestPausedEvent);
            __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_onRequest).call(this, client, event, fetchRequestId);
            __classPrivateFieldGet(this, _NetworkManager_networkEventManager, "f").forgetRequestPaused(networkRequestId);
        }
        return;
    }
    __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_onRequest).call(this, client, event, undefined);
}, _NetworkManager_onAuthRequired = function _NetworkManager_onAuthRequired(client, event) {
    let response = 'Default';
    if (__classPrivateFieldGet(this, _NetworkManager_attemptedAuthentications, "f").has(event.requestId)) {
        response = 'CancelAuth';
    }
    else if (__classPrivateFieldGet(this, _NetworkManager_credentials, "f")) {
        response = 'ProvideCredentials';
        __classPrivateFieldGet(this, _NetworkManager_attemptedAuthentications, "f").add(event.requestId);
    }
    const { username, password } = __classPrivateFieldGet(this, _NetworkManager_credentials, "f") || {
        username: undefined,
        password: undefined,
    };
    client
        .send('Fetch.continueWithAuth', {
        requestId: event.requestId,
        authChallengeResponse: { response, username, password },
    })
        .catch(_common_util_js__WEBPACK_IMPORTED_MODULE_3__.debugError);
}, _NetworkManager_onRequestPaused = function _NetworkManager_onRequestPaused(client, event) {
    if (!__classPrivateFieldGet(this, _NetworkManager_userRequestInterceptionEnabled, "f") &&
        __classPrivateFieldGet(this, _NetworkManager_protocolRequestInterceptionEnabled, "f")) {
        client
            .send('Fetch.continueRequest', {
            requestId: event.requestId,
        })
            .catch(_common_util_js__WEBPACK_IMPORTED_MODULE_3__.debugError);
    }
    const { networkId: networkRequestId, requestId: fetchRequestId } = event;
    if (!networkRequestId) {
        __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_onRequestWithoutNetworkInstrumentation).call(this, client, event);
        return;
    }
    const requestWillBeSentEvent = (() => {
        const requestWillBeSentEvent = __classPrivateFieldGet(this, _NetworkManager_networkEventManager, "f").getRequestWillBeSent(networkRequestId);
        // redirect requests have the same `requestId`,
        if (requestWillBeSentEvent &&
            (requestWillBeSentEvent.request.url !== event.request.url ||
                requestWillBeSentEvent.request.method !== event.request.method)) {
            __classPrivateFieldGet(this, _NetworkManager_networkEventManager, "f").forgetRequestWillBeSent(networkRequestId);
            return;
        }
        return requestWillBeSentEvent;
    })();
    if (requestWillBeSentEvent) {
        __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_patchRequestEventHeaders).call(this, requestWillBeSentEvent, event);
        __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_onRequest).call(this, client, requestWillBeSentEvent, fetchRequestId);
    }
    else {
        __classPrivateFieldGet(this, _NetworkManager_networkEventManager, "f").storeRequestPaused(networkRequestId, event);
    }
}, _NetworkManager_patchRequestEventHeaders = function _NetworkManager_patchRequestEventHeaders(requestWillBeSentEvent, requestPausedEvent) {
    requestWillBeSentEvent.request.headers = {
        ...requestWillBeSentEvent.request.headers,
        // includes extra headers, like: Accept, Origin
        ...requestPausedEvent.request.headers,
    };
}, _NetworkManager_onRequestWithoutNetworkInstrumentation = function _NetworkManager_onRequestWithoutNetworkInstrumentation(client, event) {
    // If an event has no networkId it should not have any network events. We
    // still want to dispatch it for the interception by the user.
    const frame = event.frameId
        ? __classPrivateFieldGet(this, _NetworkManager_frameManager, "f").frame(event.frameId)
        : null;
    const request = new _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_6__.CdpHTTPRequest(client, frame, event.requestId, __classPrivateFieldGet(this, _NetworkManager_userRequestInterceptionEnabled, "f"), event, []);
    this.emit(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManagerEvent.Request, request);
    void request.finalizeInterceptions();
}, _NetworkManager_onRequest = function _NetworkManager_onRequest(client, event, fetchRequestId) {
    let redirectChain = [];
    if (event.redirectResponse) {
        // We want to emit a response and requestfinished for the
        // redirectResponse, but we can't do so unless we have a
        // responseExtraInfo ready to pair it up with. If we don't have any
        // responseExtraInfos saved in our queue, they we have to wait until
        // the next one to emit response and requestfinished, *and* we should
        // also wait to emit this Request too because it should come after the
        // response/requestfinished.
        let redirectResponseExtraInfo = null;
        if (event.redirectHasExtraInfo) {
            redirectResponseExtraInfo = __classPrivateFieldGet(this, _NetworkManager_networkEventManager, "f")
                .responseExtraInfo(event.requestId)
                .shift();
            if (!redirectResponseExtraInfo) {
                __classPrivateFieldGet(this, _NetworkManager_networkEventManager, "f").queueRedirectInfo(event.requestId, {
                    event,
                    fetchRequestId,
                });
                return;
            }
        }
        const request = __classPrivateFieldGet(this, _NetworkManager_networkEventManager, "f").getRequest(event.requestId);
        // If we connect late to the target, we could have missed the
        // requestWillBeSent event.
        if (request) {
            __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_handleRequestRedirect).call(this, client, request, event.redirectResponse, redirectResponseExtraInfo);
            redirectChain = request._redirectChain;
        }
    }
    const frame = event.frameId
        ? __classPrivateFieldGet(this, _NetworkManager_frameManager, "f").frame(event.frameId)
        : null;
    const request = new _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_6__.CdpHTTPRequest(client, frame, fetchRequestId, __classPrivateFieldGet(this, _NetworkManager_userRequestInterceptionEnabled, "f"), event, redirectChain);
    __classPrivateFieldGet(this, _NetworkManager_networkEventManager, "f").storeRequest(event.requestId, request);
    this.emit(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManagerEvent.Request, request);
    void request.finalizeInterceptions();
}, _NetworkManager_onRequestServedFromCache = function _NetworkManager_onRequestServedFromCache(_client, event) {
    const request = __classPrivateFieldGet(this, _NetworkManager_networkEventManager, "f").getRequest(event.requestId);
    if (request) {
        request._fromMemoryCache = true;
    }
    this.emit(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManagerEvent.RequestServedFromCache, request);
}, _NetworkManager_handleRequestRedirect = function _NetworkManager_handleRequestRedirect(client, request, responsePayload, extraInfo) {
    const response = new _HTTPResponse_js__WEBPACK_IMPORTED_MODULE_7__.CdpHTTPResponse(client, request, responsePayload, extraInfo);
    request._response = response;
    request._redirectChain.push(request);
    response._resolveBody(new Error('Response body is unavailable for redirect responses'));
    __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_forgetRequest).call(this, request, false);
    this.emit(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManagerEvent.Response, response);
    this.emit(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManagerEvent.RequestFinished, request);
}, _NetworkManager_emitResponseEvent = function _NetworkManager_emitResponseEvent(client, responseReceived, extraInfo) {
    const request = __classPrivateFieldGet(this, _NetworkManager_networkEventManager, "f").getRequest(responseReceived.requestId);
    // FileUpload sends a response without a matching request.
    if (!request) {
        return;
    }
    const extraInfos = __classPrivateFieldGet(this, _NetworkManager_networkEventManager, "f").responseExtraInfo(responseReceived.requestId);
    if (extraInfos.length) {
        (0,_common_util_js__WEBPACK_IMPORTED_MODULE_3__.debugError)(new Error('Unexpected extraInfo events for request ' +
            responseReceived.requestId));
    }
    // Chromium sends wrong extraInfo events for responses served from cache.
    // See https://github.com/puppeteer/puppeteer/issues/9965 and
    // https://crbug.com/1340398.
    if (responseReceived.response.fromDiskCache) {
        extraInfo = null;
    }
    const response = new _HTTPResponse_js__WEBPACK_IMPORTED_MODULE_7__.CdpHTTPResponse(client, request, responseReceived.response, extraInfo);
    request._response = response;
    this.emit(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManagerEvent.Response, response);
}, _NetworkManager_onResponseReceived = function _NetworkManager_onResponseReceived(client, event) {
    const request = __classPrivateFieldGet(this, _NetworkManager_networkEventManager, "f").getRequest(event.requestId);
    let extraInfo = null;
    if (request && !request._fromMemoryCache && event.hasExtraInfo) {
        extraInfo = __classPrivateFieldGet(this, _NetworkManager_networkEventManager, "f")
            .responseExtraInfo(event.requestId)
            .shift();
        if (!extraInfo) {
            // Wait until we get the corresponding ExtraInfo event.
            __classPrivateFieldGet(this, _NetworkManager_networkEventManager, "f").queueEventGroup(event.requestId, {
                responseReceivedEvent: event,
            });
            return;
        }
    }
    __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_emitResponseEvent).call(this, client, event, extraInfo);
}, _NetworkManager_onResponseReceivedExtraInfo = function _NetworkManager_onResponseReceivedExtraInfo(client, event) {
    // We may have skipped a redirect response/request pair due to waiting for
    // this ExtraInfo event. If so, continue that work now that we have the
    // request.
    const redirectInfo = __classPrivateFieldGet(this, _NetworkManager_networkEventManager, "f").takeQueuedRedirectInfo(event.requestId);
    if (redirectInfo) {
        __classPrivateFieldGet(this, _NetworkManager_networkEventManager, "f").responseExtraInfo(event.requestId).push(event);
        __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_onRequest).call(this, client, redirectInfo.event, redirectInfo.fetchRequestId);
        return;
    }
    // We may have skipped response and loading events because we didn't have
    // this ExtraInfo event yet. If so, emit those events now.
    const queuedEvents = __classPrivateFieldGet(this, _NetworkManager_networkEventManager, "f").getQueuedEventGroup(event.requestId);
    if (queuedEvents) {
        __classPrivateFieldGet(this, _NetworkManager_networkEventManager, "f").forgetQueuedEventGroup(event.requestId);
        __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_emitResponseEvent).call(this, client, queuedEvents.responseReceivedEvent, event);
        if (queuedEvents.loadingFinishedEvent) {
            __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_emitLoadingFinished).call(this, queuedEvents.loadingFinishedEvent);
        }
        if (queuedEvents.loadingFailedEvent) {
            __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_emitLoadingFailed).call(this, queuedEvents.loadingFailedEvent);
        }
        return;
    }
    // Wait until we get another event that can use this ExtraInfo event.
    __classPrivateFieldGet(this, _NetworkManager_networkEventManager, "f").responseExtraInfo(event.requestId).push(event);
}, _NetworkManager_forgetRequest = function _NetworkManager_forgetRequest(request, events) {
    const requestId = request.id;
    const interceptionId = request._interceptionId;
    __classPrivateFieldGet(this, _NetworkManager_networkEventManager, "f").forgetRequest(requestId);
    interceptionId !== undefined &&
        __classPrivateFieldGet(this, _NetworkManager_attemptedAuthentications, "f").delete(interceptionId);
    if (events) {
        __classPrivateFieldGet(this, _NetworkManager_networkEventManager, "f").forget(requestId);
    }
}, _NetworkManager_onLoadingFinished = function _NetworkManager_onLoadingFinished(_client, event) {
    // If the response event for this request is still waiting on a
    // corresponding ExtraInfo event, then wait to emit this event too.
    const queuedEvents = __classPrivateFieldGet(this, _NetworkManager_networkEventManager, "f").getQueuedEventGroup(event.requestId);
    if (queuedEvents) {
        queuedEvents.loadingFinishedEvent = event;
    }
    else {
        __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_emitLoadingFinished).call(this, event);
    }
}, _NetworkManager_emitLoadingFinished = function _NetworkManager_emitLoadingFinished(event) {
    const request = __classPrivateFieldGet(this, _NetworkManager_networkEventManager, "f").getRequest(event.requestId);
    // For certain requestIds we never receive requestWillBeSent event.
    // @see https://crbug.com/750469
    if (!request) {
        return;
    }
    // Under certain conditions we never get the Network.responseReceived
    // event from protocol. @see https://crbug.com/883475
    if (request.response()) {
        request.response()?._resolveBody();
    }
    __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_forgetRequest).call(this, request, true);
    this.emit(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManagerEvent.RequestFinished, request);
}, _NetworkManager_onLoadingFailed = function _NetworkManager_onLoadingFailed(_client, event) {
    // If the response event for this request is still waiting on a
    // corresponding ExtraInfo event, then wait to emit this event too.
    const queuedEvents = __classPrivateFieldGet(this, _NetworkManager_networkEventManager, "f").getQueuedEventGroup(event.requestId);
    if (queuedEvents) {
        queuedEvents.loadingFailedEvent = event;
    }
    else {
        __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_emitLoadingFailed).call(this, event);
    }
}, _NetworkManager_emitLoadingFailed = function _NetworkManager_emitLoadingFailed(event) {
    const request = __classPrivateFieldGet(this, _NetworkManager_networkEventManager, "f").getRequest(event.requestId);
    // For certain requestIds we never receive requestWillBeSent event.
    // @see https://crbug.com/750469
    if (!request) {
        return;
    }
    request._failureText = event.errorText;
    const response = request.response();
    if (response) {
        response._resolveBody();
    }
    __classPrivateFieldGet(this, _NetworkManager_instances, "m", _NetworkManager_forgetRequest).call(this, request, true);
    this.emit(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManagerEvent.RequestFailed, request);
};


/***/ })

}]);