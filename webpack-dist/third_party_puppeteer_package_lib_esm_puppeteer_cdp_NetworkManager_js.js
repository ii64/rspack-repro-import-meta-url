"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_NetworkManager_js"],{

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/api/HTTPResponse.js":
/*!*****************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/api/HTTPResponse.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HTTPResponse: () => (/* binding */ HTTPResponse)
/* harmony export */ });
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * The HTTPResponse class represents responses which are received by the
 * {@link Page} class.
 *
 * @public
 */
class HTTPResponse {
    /**
     * @internal
     */
    constructor() { }
    /**
     * True if the response was successful (status in the range 200-299).
     */
    ok() {
        // TODO: document === 0 case?
        const status = this.status();
        return status === 0 || (status >= 200 && status <= 299);
    }
    /**
     * Promise which resolves to a text (utf8) representation of response body.
     */
    async text() {
        const content = await this.buffer();
        return content.toString('utf8');
    }
    /**
     * Promise which resolves to a JSON representation of response body.
     *
     * @remarks
     *
     * This method will throw if the response body is not parsable via
     * `JSON.parse`.
     */
    async json() {
        const content = await this.text();
        return JSON.parse(content);
    }
}
//# sourceMappingURL=HTTPResponse.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/HTTPRequest.js":
/*!****************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/cdp/HTTPRequest.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdpHTTPRequest: () => (/* binding */ CdpHTTPRequest)
/* harmony export */ });
/* harmony import */ var _api_HTTPRequest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/HTTPRequest.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/HTTPRequest.js");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");


/**
 * @internal
 */
class CdpHTTPRequest extends _api_HTTPRequest_js__WEBPACK_IMPORTED_MODULE_0__.HTTPRequest {
    id;
    #client;
    #isNavigationRequest;
    #url;
    #resourceType;
    #method;
    #hasPostData = false;
    #postData;
    #headers = {};
    #frame;
    #initiator;
    get client() {
        return this.#client;
    }
    constructor(client, frame, interceptionId, allowInterception, data, redirectChain) {
        super();
        this.#client = client;
        this.id = data.requestId;
        this.#isNavigationRequest =
            data.requestId === data.loaderId && data.type === 'Document';
        this._interceptionId = interceptionId;
        this.#url = data.request.url;
        this.#resourceType = (data.type || 'other').toLowerCase();
        this.#method = data.request.method;
        this.#postData = data.request.postData;
        this.#hasPostData = data.request.hasPostData ?? false;
        this.#frame = frame;
        this._redirectChain = redirectChain;
        this.#initiator = data.initiator;
        this.interception.enabled = allowInterception;
        for (const [key, value] of Object.entries(data.request.headers)) {
            this.#headers[key.toLowerCase()] = value;
        }
    }
    url() {
        return this.#url;
    }
    resourceType() {
        return this.#resourceType;
    }
    method() {
        return this.#method;
    }
    postData() {
        return this.#postData;
    }
    hasPostData() {
        return this.#hasPostData;
    }
    async fetchPostData() {
        try {
            const result = await this.#client.send('Network.getRequestPostData', {
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
        return this.#headers;
    }
    response() {
        return this._response;
    }
    frame() {
        return this.#frame;
    }
    isNavigationRequest() {
        return this.#isNavigationRequest;
    }
    initiator() {
        return this.#initiator;
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
        await this.#client
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
        await this.#client
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
        await this.#client
            .send('Fetch.failRequest', {
            requestId: this._interceptionId,
            errorReason: errorReason || 'Failed',
        })
            .catch(_api_HTTPRequest_js__WEBPACK_IMPORTED_MODULE_0__.handleError);
    }
}
//# sourceMappingURL=HTTPRequest.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/HTTPResponse.js":
/*!*****************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/cdp/HTTPResponse.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdpHTTPResponse: () => (/* binding */ CdpHTTPResponse)
/* harmony export */ });
/* harmony import */ var _api_HTTPResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/HTTPResponse.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/HTTPResponse.js");
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */ var _common_SecurityDetails_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/SecurityDetails.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/SecurityDetails.js");
/* harmony import */ var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/Deferred.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");




/**
 * @internal
 */
class CdpHTTPResponse extends _api_HTTPResponse_js__WEBPACK_IMPORTED_MODULE_0__.HTTPResponse {
    #client;
    #request;
    #contentPromise = null;
    #bodyLoadedDeferred = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_3__.Deferred.create();
    #remoteAddress;
    #status;
    #statusText;
    #url;
    #fromDiskCache;
    #fromServiceWorker;
    #headers = {};
    #securityDetails;
    #timing;
    constructor(client, request, responsePayload, extraInfo) {
        super();
        this.#client = client;
        this.#request = request;
        this.#remoteAddress = {
            ip: responsePayload.remoteIPAddress,
            port: responsePayload.remotePort,
        };
        this.#statusText =
            this.#parseStatusTextFromExtraInfo(extraInfo) ||
                responsePayload.statusText;
        this.#url = request.url();
        this.#fromDiskCache = !!responsePayload.fromDiskCache;
        this.#fromServiceWorker = !!responsePayload.fromServiceWorker;
        this.#status = extraInfo ? extraInfo.statusCode : responsePayload.status;
        const headers = extraInfo ? extraInfo.headers : responsePayload.headers;
        for (const [key, value] of Object.entries(headers)) {
            this.#headers[key.toLowerCase()] = value;
        }
        this.#securityDetails = responsePayload.securityDetails
            ? new _common_SecurityDetails_js__WEBPACK_IMPORTED_MODULE_2__.SecurityDetails(responsePayload.securityDetails)
            : null;
        this.#timing = responsePayload.timing || null;
    }
    #parseStatusTextFromExtraInfo(extraInfo) {
        if (!extraInfo || !extraInfo.headersText) {
            return;
        }
        const firstLine = extraInfo.headersText.split('\r', 1)[0];
        if (!firstLine) {
            return;
        }
        const match = firstLine.match(/[^ ]* [^ ]* (.*)/);
        if (!match) {
            return;
        }
        const statusText = match[1];
        if (!statusText) {
            return;
        }
        return statusText;
    }
    _resolveBody(err) {
        if (err) {
            return this.#bodyLoadedDeferred.reject(err);
        }
        return this.#bodyLoadedDeferred.resolve();
    }
    remoteAddress() {
        return this.#remoteAddress;
    }
    url() {
        return this.#url;
    }
    status() {
        return this.#status;
    }
    statusText() {
        return this.#statusText;
    }
    headers() {
        return this.#headers;
    }
    securityDetails() {
        return this.#securityDetails;
    }
    timing() {
        return this.#timing;
    }
    buffer() {
        if (!this.#contentPromise) {
            this.#contentPromise = this.#bodyLoadedDeferred
                .valueOrThrow()
                .then(async () => {
                try {
                    const response = await this.#client.send('Network.getResponseBody', {
                        requestId: this.#request.id,
                    });
                    return Buffer.from(response.body, response.base64Encoded ? 'base64' : 'utf8');
                }
                catch (error) {
                    if (error instanceof _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.ProtocolError &&
                        error.originalMessage ===
                            'No resource with given identifier found') {
                        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.ProtocolError('Could not load body for this request. This might happen if the request is a preflight request.');
                    }
                    throw error;
                }
            });
        }
        return this.#contentPromise;
    }
    request() {
        return this.#request;
    }
    fromCache() {
        return this.#fromDiskCache || this.#request._fromMemoryCache;
    }
    fromServiceWorker() {
        return this.#fromServiceWorker;
    }
    frame() {
        return this.#request.frame();
    }
}
//# sourceMappingURL=HTTPResponse.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/NetworkEventManager.js":
/*!************************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/cdp/NetworkEventManager.js ***!
  \************************************************************************************/
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
/**
 * Helper class to track network events by request ID
 *
 * @internal
 */
class NetworkEventManager {
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
    #requestWillBeSentMap = new Map();
    #requestPausedMap = new Map();
    #httpRequestsMap = new Map();
    /*
     * The below maps are used to reconcile Network.responseReceivedExtraInfo
     * events with their corresponding request. Each response and redirect
     * response gets an ExtraInfo event, and we don't know which will come first.
     * This means that we have to store a Response or an ExtraInfo for each
     * response, and emit the event when we get both of them. In addition, to
     * handle redirects, we have to make them Arrays to represent the chain of
     * events.
     */
    #responseReceivedExtraInfoMap = new Map();
    #queuedRedirectInfoMap = new Map();
    #queuedEventGroupMap = new Map();
    forget(networkRequestId) {
        this.#requestWillBeSentMap.delete(networkRequestId);
        this.#requestPausedMap.delete(networkRequestId);
        this.#queuedEventGroupMap.delete(networkRequestId);
        this.#queuedRedirectInfoMap.delete(networkRequestId);
        this.#responseReceivedExtraInfoMap.delete(networkRequestId);
    }
    responseExtraInfo(networkRequestId) {
        if (!this.#responseReceivedExtraInfoMap.has(networkRequestId)) {
            this.#responseReceivedExtraInfoMap.set(networkRequestId, []);
        }
        return this.#responseReceivedExtraInfoMap.get(networkRequestId);
    }
    queuedRedirectInfo(fetchRequestId) {
        if (!this.#queuedRedirectInfoMap.has(fetchRequestId)) {
            this.#queuedRedirectInfoMap.set(fetchRequestId, []);
        }
        return this.#queuedRedirectInfoMap.get(fetchRequestId);
    }
    queueRedirectInfo(fetchRequestId, redirectInfo) {
        this.queuedRedirectInfo(fetchRequestId).push(redirectInfo);
    }
    takeQueuedRedirectInfo(fetchRequestId) {
        return this.queuedRedirectInfo(fetchRequestId).shift();
    }
    inFlightRequestsCount() {
        let inFlightRequestCounter = 0;
        for (const request of this.#httpRequestsMap.values()) {
            if (!request.response()) {
                inFlightRequestCounter++;
            }
        }
        return inFlightRequestCounter;
    }
    storeRequestWillBeSent(networkRequestId, event) {
        this.#requestWillBeSentMap.set(networkRequestId, event);
    }
    getRequestWillBeSent(networkRequestId) {
        return this.#requestWillBeSentMap.get(networkRequestId);
    }
    forgetRequestWillBeSent(networkRequestId) {
        this.#requestWillBeSentMap.delete(networkRequestId);
    }
    getRequestPaused(networkRequestId) {
        return this.#requestPausedMap.get(networkRequestId);
    }
    forgetRequestPaused(networkRequestId) {
        this.#requestPausedMap.delete(networkRequestId);
    }
    storeRequestPaused(networkRequestId, event) {
        this.#requestPausedMap.set(networkRequestId, event);
    }
    getRequest(networkRequestId) {
        return this.#httpRequestsMap.get(networkRequestId);
    }
    storeRequest(networkRequestId, request) {
        this.#httpRequestsMap.set(networkRequestId, request);
    }
    forgetRequest(networkRequestId) {
        this.#httpRequestsMap.delete(networkRequestId);
    }
    getQueuedEventGroup(networkRequestId) {
        return this.#queuedEventGroupMap.get(networkRequestId);
    }
    queueEventGroup(networkRequestId, event) {
        this.#queuedEventGroupMap.set(networkRequestId, event);
    }
    forgetQueuedEventGroup(networkRequestId) {
        this.#queuedEventGroupMap.delete(networkRequestId);
    }
}
//# sourceMappingURL=NetworkEventManager.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/NetworkManager.js":
/*!*******************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/cdp/NetworkManager.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NetworkManager: () => (/* binding */ NetworkManager)
/* harmony export */ });
/* harmony import */ var _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/CDPSession.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/CDPSession.js");
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */ var _common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/NetworkManagerEvents.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/NetworkManagerEvents.js");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/* harmony import */ var _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HTTPRequest.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/HTTPRequest.js");
/* harmony import */ var _HTTPResponse_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HTTPResponse.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/HTTPResponse.js");
/* harmony import */ var _NetworkEventManager_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NetworkEventManager.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/NetworkEventManager.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */









/**
 * @internal
 */
class NetworkManager extends _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter {
    #frameManager;
    #networkEventManager = new _NetworkEventManager_js__WEBPACK_IMPORTED_MODULE_8__.NetworkEventManager();
    #extraHTTPHeaders;
    #credentials = null;
    #attemptedAuthentications = new Set();
    #userRequestInterceptionEnabled = false;
    #protocolRequestInterceptionEnabled = false;
    #userCacheDisabled;
    #emulatedNetworkConditions;
    #userAgent;
    #userAgentMetadata;
    #handlers = [
        ['Fetch.requestPaused', this.#onRequestPaused],
        ['Fetch.authRequired', this.#onAuthRequired],
        ['Network.requestWillBeSent', this.#onRequestWillBeSent],
        ['Network.requestServedFromCache', this.#onRequestServedFromCache],
        ['Network.responseReceived', this.#onResponseReceived],
        ['Network.loadingFinished', this.#onLoadingFinished],
        ['Network.loadingFailed', this.#onLoadingFailed],
        ['Network.responseReceivedExtraInfo', this.#onResponseReceivedExtraInfo],
        [_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.Disconnected, this.#removeClient],
    ];
    #clients = new Map();
    constructor(frameManager) {
        super();
        this.#frameManager = frameManager;
    }
    async addClient(client) {
        if (this.#clients.has(client)) {
            return;
        }
        const subscriptions = new _util_disposable_js__WEBPACK_IMPORTED_MODULE_5__.DisposableStack();
        this.#clients.set(client, subscriptions);
        const clientEmitter = subscriptions.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(client));
        for (const [event, handler] of this.#handlers) {
            clientEmitter.on(event, (arg) => {
                return handler.bind(this)(client, arg);
            });
        }
        await Promise.all([
            client.send('Network.enable'),
            this.#applyExtraHTTPHeaders(client),
            this.#applyNetworkConditions(client),
            this.#applyProtocolCacheDisabled(client),
            this.#applyProtocolRequestInterception(client),
            this.#applyUserAgent(client),
        ]);
    }
    async #removeClient(client) {
        this.#clients.get(client)?.dispose();
        this.#clients.delete(client);
    }
    async authenticate(credentials) {
        this.#credentials = credentials;
        const enabled = this.#userRequestInterceptionEnabled || !!this.#credentials;
        if (enabled === this.#protocolRequestInterceptionEnabled) {
            return;
        }
        this.#protocolRequestInterceptionEnabled = enabled;
        await this.#applyToAllClients(this.#applyProtocolRequestInterception.bind(this));
    }
    async setExtraHTTPHeaders(headers) {
        const extraHTTPHeaders = {};
        for (const [key, value] of Object.entries(headers)) {
            (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_4__.assert)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_3__.isString)(value), `Expected value of header "${key}" to be String, but "${typeof value}" is found.`);
            extraHTTPHeaders[key.toLowerCase()] = value;
        }
        this.#extraHTTPHeaders = extraHTTPHeaders;
        await this.#applyToAllClients(this.#applyExtraHTTPHeaders.bind(this));
    }
    async #applyExtraHTTPHeaders(client) {
        if (this.#extraHTTPHeaders === undefined) {
            return;
        }
        await client.send('Network.setExtraHTTPHeaders', {
            headers: this.#extraHTTPHeaders,
        });
    }
    extraHTTPHeaders() {
        return Object.assign({}, this.#extraHTTPHeaders);
    }
    inFlightRequestsCount() {
        return this.#networkEventManager.inFlightRequestsCount();
    }
    async setOfflineMode(value) {
        if (!this.#emulatedNetworkConditions) {
            this.#emulatedNetworkConditions = {
                offline: false,
                upload: -1,
                download: -1,
                latency: 0,
            };
        }
        this.#emulatedNetworkConditions.offline = value;
        await this.#applyToAllClients(this.#applyNetworkConditions.bind(this));
    }
    async emulateNetworkConditions(networkConditions) {
        if (!this.#emulatedNetworkConditions) {
            this.#emulatedNetworkConditions = {
                offline: false,
                upload: -1,
                download: -1,
                latency: 0,
            };
        }
        this.#emulatedNetworkConditions.upload = networkConditions
            ? networkConditions.upload
            : -1;
        this.#emulatedNetworkConditions.download = networkConditions
            ? networkConditions.download
            : -1;
        this.#emulatedNetworkConditions.latency = networkConditions
            ? networkConditions.latency
            : 0;
        await this.#applyToAllClients(this.#applyNetworkConditions.bind(this));
    }
    async #applyToAllClients(fn) {
        await Promise.all(Array.from(this.#clients.keys()).map(client => {
            return fn(client);
        }));
    }
    async #applyNetworkConditions(client) {
        if (this.#emulatedNetworkConditions === undefined) {
            return;
        }
        await client.send('Network.emulateNetworkConditions', {
            offline: this.#emulatedNetworkConditions.offline,
            latency: this.#emulatedNetworkConditions.latency,
            uploadThroughput: this.#emulatedNetworkConditions.upload,
            downloadThroughput: this.#emulatedNetworkConditions.download,
        });
    }
    async setUserAgent(userAgent, userAgentMetadata) {
        this.#userAgent = userAgent;
        this.#userAgentMetadata = userAgentMetadata;
        await this.#applyToAllClients(this.#applyUserAgent.bind(this));
    }
    async #applyUserAgent(client) {
        if (this.#userAgent === undefined) {
            return;
        }
        await client.send('Network.setUserAgentOverride', {
            userAgent: this.#userAgent,
            userAgentMetadata: this.#userAgentMetadata,
        });
    }
    async setCacheEnabled(enabled) {
        this.#userCacheDisabled = !enabled;
        await this.#applyToAllClients(this.#applyProtocolCacheDisabled.bind(this));
    }
    async setRequestInterception(value) {
        this.#userRequestInterceptionEnabled = value;
        const enabled = this.#userRequestInterceptionEnabled || !!this.#credentials;
        if (enabled === this.#protocolRequestInterceptionEnabled) {
            return;
        }
        this.#protocolRequestInterceptionEnabled = enabled;
        await this.#applyToAllClients(this.#applyProtocolRequestInterception.bind(this));
    }
    async #applyProtocolRequestInterception(client) {
        if (this.#userCacheDisabled === undefined) {
            this.#userCacheDisabled = false;
        }
        if (this.#protocolRequestInterceptionEnabled) {
            await Promise.all([
                this.#applyProtocolCacheDisabled(client),
                client.send('Fetch.enable', {
                    handleAuthRequests: true,
                    patterns: [{ urlPattern: '*' }],
                }),
            ]);
        }
        else {
            await Promise.all([
                this.#applyProtocolCacheDisabled(client),
                client.send('Fetch.disable'),
            ]);
        }
    }
    async #applyProtocolCacheDisabled(client) {
        if (this.#userCacheDisabled === undefined) {
            return;
        }
        await client.send('Network.setCacheDisabled', {
            cacheDisabled: this.#userCacheDisabled,
        });
    }
    #onRequestWillBeSent(client, event) {
        // Request interception doesn't happen for data URLs with Network Service.
        if (this.#userRequestInterceptionEnabled &&
            !event.request.url.startsWith('data:')) {
            const { requestId: networkRequestId } = event;
            this.#networkEventManager.storeRequestWillBeSent(networkRequestId, event);
            /**
             * CDP may have sent a Fetch.requestPaused event already. Check for it.
             */
            const requestPausedEvent = this.#networkEventManager.getRequestPaused(networkRequestId);
            if (requestPausedEvent) {
                const { requestId: fetchRequestId } = requestPausedEvent;
                this.#patchRequestEventHeaders(event, requestPausedEvent);
                this.#onRequest(client, event, fetchRequestId);
                this.#networkEventManager.forgetRequestPaused(networkRequestId);
            }
            return;
        }
        this.#onRequest(client, event, undefined);
    }
    #onAuthRequired(client, event) {
        let response = 'Default';
        if (this.#attemptedAuthentications.has(event.requestId)) {
            response = 'CancelAuth';
        }
        else if (this.#credentials) {
            response = 'ProvideCredentials';
            this.#attemptedAuthentications.add(event.requestId);
        }
        const { username, password } = this.#credentials || {
            username: undefined,
            password: undefined,
        };
        client
            .send('Fetch.continueWithAuth', {
            requestId: event.requestId,
            authChallengeResponse: { response, username, password },
        })
            .catch(_common_util_js__WEBPACK_IMPORTED_MODULE_3__.debugError);
    }
    /**
     * CDP may send a Fetch.requestPaused without or before a
     * Network.requestWillBeSent
     *
     * CDP may send multiple Fetch.requestPaused
     * for the same Network.requestWillBeSent.
     */
    #onRequestPaused(client, event) {
        if (!this.#userRequestInterceptionEnabled &&
            this.#protocolRequestInterceptionEnabled) {
            client
                .send('Fetch.continueRequest', {
                requestId: event.requestId,
            })
                .catch(_common_util_js__WEBPACK_IMPORTED_MODULE_3__.debugError);
        }
        const { networkId: networkRequestId, requestId: fetchRequestId } = event;
        if (!networkRequestId) {
            this.#onRequestWithoutNetworkInstrumentation(client, event);
            return;
        }
        const requestWillBeSentEvent = (() => {
            const requestWillBeSentEvent = this.#networkEventManager.getRequestWillBeSent(networkRequestId);
            // redirect requests have the same `requestId`,
            if (requestWillBeSentEvent &&
                (requestWillBeSentEvent.request.url !== event.request.url ||
                    requestWillBeSentEvent.request.method !== event.request.method)) {
                this.#networkEventManager.forgetRequestWillBeSent(networkRequestId);
                return;
            }
            return requestWillBeSentEvent;
        })();
        if (requestWillBeSentEvent) {
            this.#patchRequestEventHeaders(requestWillBeSentEvent, event);
            this.#onRequest(client, requestWillBeSentEvent, fetchRequestId);
        }
        else {
            this.#networkEventManager.storeRequestPaused(networkRequestId, event);
        }
    }
    #patchRequestEventHeaders(requestWillBeSentEvent, requestPausedEvent) {
        requestWillBeSentEvent.request.headers = {
            ...requestWillBeSentEvent.request.headers,
            // includes extra headers, like: Accept, Origin
            ...requestPausedEvent.request.headers,
        };
    }
    #onRequestWithoutNetworkInstrumentation(client, event) {
        // If an event has no networkId it should not have any network events. We
        // still want to dispatch it for the interception by the user.
        const frame = event.frameId
            ? this.#frameManager.frame(event.frameId)
            : null;
        const request = new _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_6__.CdpHTTPRequest(client, frame, event.requestId, this.#userRequestInterceptionEnabled, event, []);
        this.emit(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManagerEvent.Request, request);
        void request.finalizeInterceptions();
    }
    #onRequest(client, event, fetchRequestId) {
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
                redirectResponseExtraInfo = this.#networkEventManager
                    .responseExtraInfo(event.requestId)
                    .shift();
                if (!redirectResponseExtraInfo) {
                    this.#networkEventManager.queueRedirectInfo(event.requestId, {
                        event,
                        fetchRequestId,
                    });
                    return;
                }
            }
            const request = this.#networkEventManager.getRequest(event.requestId);
            // If we connect late to the target, we could have missed the
            // requestWillBeSent event.
            if (request) {
                this.#handleRequestRedirect(client, request, event.redirectResponse, redirectResponseExtraInfo);
                redirectChain = request._redirectChain;
            }
        }
        const frame = event.frameId
            ? this.#frameManager.frame(event.frameId)
            : null;
        const request = new _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_6__.CdpHTTPRequest(client, frame, fetchRequestId, this.#userRequestInterceptionEnabled, event, redirectChain);
        this.#networkEventManager.storeRequest(event.requestId, request);
        this.emit(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManagerEvent.Request, request);
        void request.finalizeInterceptions();
    }
    #onRequestServedFromCache(_client, event) {
        const request = this.#networkEventManager.getRequest(event.requestId);
        if (request) {
            request._fromMemoryCache = true;
        }
        this.emit(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManagerEvent.RequestServedFromCache, request);
    }
    #handleRequestRedirect(client, request, responsePayload, extraInfo) {
        const response = new _HTTPResponse_js__WEBPACK_IMPORTED_MODULE_7__.CdpHTTPResponse(client, request, responsePayload, extraInfo);
        request._response = response;
        request._redirectChain.push(request);
        response._resolveBody(new Error('Response body is unavailable for redirect responses'));
        this.#forgetRequest(request, false);
        this.emit(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManagerEvent.Response, response);
        this.emit(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManagerEvent.RequestFinished, request);
    }
    #emitResponseEvent(client, responseReceived, extraInfo) {
        const request = this.#networkEventManager.getRequest(responseReceived.requestId);
        // FileUpload sends a response without a matching request.
        if (!request) {
            return;
        }
        const extraInfos = this.#networkEventManager.responseExtraInfo(responseReceived.requestId);
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
    }
    #onResponseReceived(client, event) {
        const request = this.#networkEventManager.getRequest(event.requestId);
        let extraInfo = null;
        if (request && !request._fromMemoryCache && event.hasExtraInfo) {
            extraInfo = this.#networkEventManager
                .responseExtraInfo(event.requestId)
                .shift();
            if (!extraInfo) {
                // Wait until we get the corresponding ExtraInfo event.
                this.#networkEventManager.queueEventGroup(event.requestId, {
                    responseReceivedEvent: event,
                });
                return;
            }
        }
        this.#emitResponseEvent(client, event, extraInfo);
    }
    #onResponseReceivedExtraInfo(client, event) {
        // We may have skipped a redirect response/request pair due to waiting for
        // this ExtraInfo event. If so, continue that work now that we have the
        // request.
        const redirectInfo = this.#networkEventManager.takeQueuedRedirectInfo(event.requestId);
        if (redirectInfo) {
            this.#networkEventManager.responseExtraInfo(event.requestId).push(event);
            this.#onRequest(client, redirectInfo.event, redirectInfo.fetchRequestId);
            return;
        }
        // We may have skipped response and loading events because we didn't have
        // this ExtraInfo event yet. If so, emit those events now.
        const queuedEvents = this.#networkEventManager.getQueuedEventGroup(event.requestId);
        if (queuedEvents) {
            this.#networkEventManager.forgetQueuedEventGroup(event.requestId);
            this.#emitResponseEvent(client, queuedEvents.responseReceivedEvent, event);
            if (queuedEvents.loadingFinishedEvent) {
                this.#emitLoadingFinished(queuedEvents.loadingFinishedEvent);
            }
            if (queuedEvents.loadingFailedEvent) {
                this.#emitLoadingFailed(queuedEvents.loadingFailedEvent);
            }
            return;
        }
        // Wait until we get another event that can use this ExtraInfo event.
        this.#networkEventManager.responseExtraInfo(event.requestId).push(event);
    }
    #forgetRequest(request, events) {
        const requestId = request.id;
        const interceptionId = request._interceptionId;
        this.#networkEventManager.forgetRequest(requestId);
        interceptionId !== undefined &&
            this.#attemptedAuthentications.delete(interceptionId);
        if (events) {
            this.#networkEventManager.forget(requestId);
        }
    }
    #onLoadingFinished(_client, event) {
        // If the response event for this request is still waiting on a
        // corresponding ExtraInfo event, then wait to emit this event too.
        const queuedEvents = this.#networkEventManager.getQueuedEventGroup(event.requestId);
        if (queuedEvents) {
            queuedEvents.loadingFinishedEvent = event;
        }
        else {
            this.#emitLoadingFinished(event);
        }
    }
    #emitLoadingFinished(event) {
        const request = this.#networkEventManager.getRequest(event.requestId);
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
        this.#forgetRequest(request, true);
        this.emit(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManagerEvent.RequestFinished, request);
    }
    #onLoadingFailed(_client, event) {
        // If the response event for this request is still waiting on a
        // corresponding ExtraInfo event, then wait to emit this event too.
        const queuedEvents = this.#networkEventManager.getQueuedEventGroup(event.requestId);
        if (queuedEvents) {
            queuedEvents.loadingFailedEvent = event;
        }
        else {
            this.#emitLoadingFailed(event);
        }
    }
    #emitLoadingFailed(event) {
        const request = this.#networkEventManager.getRequest(event.requestId);
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
        this.#forgetRequest(request, true);
        this.emit(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManagerEvent.RequestFailed, request);
    }
}
//# sourceMappingURL=NetworkManager.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/common/NetworkManagerEvents.js":
/*!****************************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/common/NetworkManagerEvents.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NetworkManagerEvent: () => (/* binding */ NetworkManagerEvent)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * We use symbols to prevent any external parties listening to these events.
 * They are internal to Puppeteer.
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-namespace
var NetworkManagerEvent;
(function (NetworkManagerEvent) {
    NetworkManagerEvent.Request = Symbol('NetworkManager.Request');
    NetworkManagerEvent.RequestServedFromCache = Symbol('NetworkManager.RequestServedFromCache');
    NetworkManagerEvent.Response = Symbol('NetworkManager.Response');
    NetworkManagerEvent.RequestFailed = Symbol('NetworkManager.RequestFailed');
    NetworkManagerEvent.RequestFinished = Symbol('NetworkManager.RequestFinished');
})(NetworkManagerEvent || (NetworkManagerEvent = {}));
//# sourceMappingURL=NetworkManagerEvents.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/common/SecurityDetails.js":
/*!***********************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/common/SecurityDetails.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecurityDetails: () => (/* binding */ SecurityDetails)
/* harmony export */ });
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * The SecurityDetails class represents the security details of a
 * response that was received over a secure connection.
 *
 * @public
 */
class SecurityDetails {
    #subjectName;
    #issuer;
    #validFrom;
    #validTo;
    #protocol;
    #sanList;
    /**
     * @internal
     */
    constructor(securityPayload) {
        this.#subjectName = securityPayload.subjectName;
        this.#issuer = securityPayload.issuer;
        this.#validFrom = securityPayload.validFrom;
        this.#validTo = securityPayload.validTo;
        this.#protocol = securityPayload.protocol;
        this.#sanList = securityPayload.sanList;
    }
    /**
     * The name of the issuer of the certificate.
     */
    issuer() {
        return this.#issuer;
    }
    /**
     * {@link https://en.wikipedia.org/wiki/Unix_time | Unix timestamp}
     * marking the start of the certificate's validity.
     */
    validFrom() {
        return this.#validFrom;
    }
    /**
     * {@link https://en.wikipedia.org/wiki/Unix_time | Unix timestamp}
     * marking the end of the certificate's validity.
     */
    validTo() {
        return this.#validTo;
    }
    /**
     * The security protocol being used, e.g. "TLS 1.2".
     */
    protocol() {
        return this.#protocol;
    }
    /**
     * The name of the subject to which the certificate was issued.
     */
    subjectName() {
        return this.#subjectName;
    }
    /**
     * The list of {@link https://en.wikipedia.org/wiki/Subject_Alternative_Name | subject alternative names (SANs)} of the certificate.
     */
    subjectAlternativeNames() {
        return this.#sanList;
    }
}
//# sourceMappingURL=SecurityDetails.js.map

/***/ })

}]);