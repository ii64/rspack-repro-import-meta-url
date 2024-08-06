"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_bidi_HTTPRequest_js"],{

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

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/HTTPRequest.js":
/*!*****************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/bidi/HTTPRequest.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BidiHTTPRequest: () => (/* binding */ BidiHTTPRequest),
/* harmony export */   requests: () => (/* binding */ requests)
/* harmony export */ });
/* harmony import */ var _api_HTTPRequest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/HTTPRequest.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/HTTPRequest.js");
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */ var _HTTPResponse_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HTTPResponse.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/HTTPResponse.js");
var _a;



const requests = new WeakMap();
/**
 * @internal
 */
class BidiHTTPRequest extends _api_HTTPRequest_js__WEBPACK_IMPORTED_MODULE_0__.HTTPRequest {
    static from(bidiRequest, frame, redirect) {
        const request = new _a(bidiRequest, frame, redirect);
        request.#initialize();
        return request;
    }
    #redirectChain;
    #response = null;
    id;
    #frame;
    #request;
    constructor(request, frame, redirect) {
        super();
        requests.set(request, this);
        this.interception.enabled = request.isBlocked;
        this.#request = request;
        this.#frame = frame;
        this.#redirectChain = redirect ? redirect.#redirectChain : [];
        this.id = request.id;
    }
    get client() {
        return this.#frame.client;
    }
    #initialize() {
        this.#request.on('redirect', request => {
            const httpRequest = _a.from(request, this.#frame, this);
            this.#redirectChain.push(this);
            request.once('success', () => {
                this.#frame
                    .page()
                    .trustedEmitter.emit("requestfinished" /* PageEvent.RequestFinished */, httpRequest);
            });
            request.once('error', () => {
                this.#frame
                    .page()
                    .trustedEmitter.emit("requestfailed" /* PageEvent.RequestFailed */, httpRequest);
            });
            void httpRequest.finalizeInterceptions();
        });
        this.#request.once('success', data => {
            this.#response = _HTTPResponse_js__WEBPACK_IMPORTED_MODULE_2__.BidiHTTPResponse.from(data, this, this.#frame.page().browser().cdpSupported);
        });
        this.#request.on('authenticate', this.#handleAuthentication);
        this.#frame.page().trustedEmitter.emit("request" /* PageEvent.Request */, this);
        if (this.#hasInternalHeaderOverwrite) {
            this.interception.handlers.push(async () => {
                await this.continue({
                    headers: this.headers(),
                }, 0);
            });
        }
    }
    url() {
        return this.#request.url;
    }
    resourceType() {
        if (!this.#frame.page().browser().cdpSupported) {
            throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
        }
        return (this.#request.resourceType || 'other').toLowerCase();
    }
    method() {
        return this.#request.method;
    }
    postData() {
        if (!this.#frame.page().browser().cdpSupported) {
            throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
        }
        return this.#request.postData;
    }
    hasPostData() {
        if (!this.#frame.page().browser().cdpSupported) {
            throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
        }
        return this.#request.hasPostData;
    }
    async fetchPostData() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
    }
    get #hasInternalHeaderOverwrite() {
        return Boolean(Object.keys(this.#extraHTTPHeaders).length ||
            Object.keys(this.#userAgentHeaders).length);
    }
    get #extraHTTPHeaders() {
        return this.#frame?.page()._extraHTTPHeaders ?? {};
    }
    get #userAgentHeaders() {
        return this.#frame?.page()._userAgentHeaders ?? {};
    }
    headers() {
        const headers = {};
        for (const header of this.#request.headers) {
            headers[header.name.toLowerCase()] = header.value.value;
        }
        return {
            ...headers,
            ...this.#extraHTTPHeaders,
            ...this.#userAgentHeaders,
        };
    }
    response() {
        return this.#response;
    }
    failure() {
        if (this.#request.error === undefined) {
            return null;
        }
        return { errorText: this.#request.error };
    }
    isNavigationRequest() {
        return this.#request.navigation !== undefined;
    }
    initiator() {
        return this.#request.initiator;
    }
    redirectChain() {
        return this.#redirectChain.slice();
    }
    frame() {
        return this.#frame;
    }
    async continue(overrides, priority) {
        return await super.continue({
            headers: this.#hasInternalHeaderOverwrite ? this.headers() : undefined,
            ...overrides,
        }, priority);
    }
    async _continue(overrides = {}) {
        const headers = getBidiHeaders(overrides.headers);
        this.interception.handled = true;
        return await this.#request
            .continueRequest({
            url: overrides.url,
            method: overrides.method,
            body: overrides.postData
                ? {
                    type: 'base64',
                    value: btoa(overrides.postData),
                }
                : undefined,
            headers: headers.length > 0 ? headers : undefined,
        })
            .catch(error => {
            this.interception.handled = false;
            return (0,_api_HTTPRequest_js__WEBPACK_IMPORTED_MODULE_0__.handleError)(error);
        });
    }
    async _abort() {
        this.interception.handled = true;
        return await this.#request.failRequest().catch(error => {
            this.interception.handled = false;
            throw error;
        });
    }
    async _respond(response, _priority) {
        this.interception.handled = true;
        let parsedBody;
        if (response.body) {
            parsedBody = _api_HTTPRequest_js__WEBPACK_IMPORTED_MODULE_0__.HTTPRequest.getResponse(response.body);
        }
        const headers = getBidiHeaders(response.headers);
        const hasContentLength = headers.some(header => {
            return header.name === 'content-length';
        });
        if (response.contentType) {
            headers.push({
                name: 'content-type',
                value: {
                    type: 'string',
                    value: response.contentType,
                },
            });
        }
        if (parsedBody?.contentLength && !hasContentLength) {
            headers.push({
                name: 'content-length',
                value: {
                    type: 'string',
                    value: String(parsedBody.contentLength),
                },
            });
        }
        const status = response.status || 200;
        return await this.#request
            .provideResponse({
            statusCode: status,
            headers: headers.length > 0 ? headers : undefined,
            reasonPhrase: _api_HTTPRequest_js__WEBPACK_IMPORTED_MODULE_0__.STATUS_TEXTS[status],
            body: parsedBody?.base64
                ? {
                    type: 'base64',
                    value: parsedBody?.base64,
                }
                : undefined,
        })
            .catch(error => {
            this.interception.handled = false;
            throw error;
        });
    }
    #authenticationHandled = false;
    #handleAuthentication = async () => {
        if (!this.#frame) {
            return;
        }
        const credentials = this.#frame.page()._credentials;
        if (credentials && !this.#authenticationHandled) {
            this.#authenticationHandled = true;
            void this.#request.continueWithAuth({
                action: 'provideCredentials',
                credentials: {
                    type: 'password',
                    username: credentials.username,
                    password: credentials.password,
                },
            });
        }
        else {
            void this.#request.continueWithAuth({
                action: 'cancel',
            });
        }
    };
}
_a = BidiHTTPRequest;
function getBidiHeaders(rawHeaders) {
    const headers = [];
    for (const [name, value] of Object.entries(rawHeaders ?? [])) {
        if (!Object.is(value, undefined)) {
            const values = Array.isArray(value) ? value : [value];
            for (const value of values) {
                headers.push({
                    name: name.toLowerCase(),
                    value: {
                        type: 'string',
                        value: String(value),
                    },
                });
            }
        }
    }
    return headers;
}
//# sourceMappingURL=HTTPRequest.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/HTTPResponse.js":
/*!******************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/bidi/HTTPResponse.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BidiHTTPResponse: () => (/* binding */ BidiHTTPResponse)
/* harmony export */ });
/* harmony import */ var _api_HTTPResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/HTTPResponse.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/HTTPResponse.js");
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */ var _common_SecurityDetails_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/SecurityDetails.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/SecurityDetails.js");
/* harmony import */ var _util_decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/decorators.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/decorators.js");
var __runInitializers = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (undefined && undefined.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};




/**
 * @internal
 */
let BidiHTTPResponse = (() => {
    let _classSuper = _api_HTTPResponse_js__WEBPACK_IMPORTED_MODULE_0__.HTTPResponse;
    let _instanceExtraInitializers = [];
    let _remoteAddress_decorators;
    return class BidiHTTPResponse extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _remoteAddress_decorators = [_util_decorators_js__WEBPACK_IMPORTED_MODULE_3__.invokeAtMostOnceForArguments];
            __esDecorate(this, null, _remoteAddress_decorators, { kind: "method", name: "remoteAddress", static: false, private: false, access: { has: obj => "remoteAddress" in obj, get: obj => obj.remoteAddress }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static from(data, request, cdpSupported) {
            const response = new BidiHTTPResponse(data, request, cdpSupported);
            response.#initialize();
            return response;
        }
        #data = __runInitializers(this, _instanceExtraInitializers);
        #request;
        #securityDetails;
        #cdpSupported = false;
        constructor(data, request, cdpSupported) {
            super();
            this.#data = data;
            this.#request = request;
            this.#cdpSupported = cdpSupported;
            // @ts-expect-error non-standard property.
            const securityDetails = data['goog:securityDetails'];
            if (cdpSupported && securityDetails) {
                this.#securityDetails = new _common_SecurityDetails_js__WEBPACK_IMPORTED_MODULE_2__.SecurityDetails(securityDetails);
            }
        }
        #initialize() {
            if (this.#data.fromCache) {
                this.#request
                    .frame()
                    ?.page()
                    .trustedEmitter.emit("requestservedfromcache" /* PageEvent.RequestServedFromCache */, this.#request);
            }
            this.#request.frame()?.page().trustedEmitter.emit("response" /* PageEvent.Response */, this);
        }
        remoteAddress() {
            return {
                ip: '',
                port: -1,
            };
        }
        url() {
            return this.#data.url;
        }
        status() {
            return this.#data.status;
        }
        statusText() {
            return this.#data.statusText;
        }
        headers() {
            const headers = {};
            for (const header of this.#data.headers) {
                // TODO: How to handle Binary Headers
                // https://w3c.github.io/webdriver-bidi/#type-network-Header
                if (header.value.type === 'string') {
                    headers[header.name.toLowerCase()] = header.value.value;
                }
            }
            return headers;
        }
        request() {
            return this.#request;
        }
        fromCache() {
            return this.#data.fromCache;
        }
        timing() {
            throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
        }
        frame() {
            return this.#request.frame();
        }
        fromServiceWorker() {
            return false;
        }
        securityDetails() {
            if (!this.#cdpSupported) {
                throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
            }
            return this.#securityDetails ?? null;
        }
        buffer() {
            throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
        }
    };
})();

//# sourceMappingURL=HTTPResponse.js.map

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