"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_cdp_HTTPResponse_ts"],{

/***/ "./src/third_party/puppeteer/package/src/api/HTTPResponse.ts":
/*!*******************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/api/HTTPResponse.ts ***!
  \*******************************************************************/
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


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/cdp/HTTPResponse.ts":
/*!*******************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/cdp/HTTPResponse.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdpHTTPResponse: () => (/* binding */ CdpHTTPResponse)
/* harmony export */ });
/* harmony import */ var _api_HTTPResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/HTTPResponse.js */ "./src/third_party/puppeteer/package/src/api/HTTPResponse.ts");
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Errors.js */ "./src/third_party/puppeteer/package/src/common/Errors.ts");
/* harmony import */ var _common_SecurityDetails_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/SecurityDetails.js */ "./src/third_party/puppeteer/package/src/common/SecurityDetails.ts");
/* harmony import */ var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/Deferred.js */ "./src/third_party/puppeteer/package/src/util/Deferred.ts");
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
var _CdpHTTPResponse_instances, _CdpHTTPResponse_client, _CdpHTTPResponse_request, _CdpHTTPResponse_contentPromise, _CdpHTTPResponse_bodyLoadedDeferred, _CdpHTTPResponse_remoteAddress, _CdpHTTPResponse_status, _CdpHTTPResponse_statusText, _CdpHTTPResponse_url, _CdpHTTPResponse_fromDiskCache, _CdpHTTPResponse_fromServiceWorker, _CdpHTTPResponse_headers, _CdpHTTPResponse_securityDetails, _CdpHTTPResponse_timing, _CdpHTTPResponse_parseStatusTextFromExtraInfo;




/**
 * @internal
 */
class CdpHTTPResponse extends _api_HTTPResponse_js__WEBPACK_IMPORTED_MODULE_0__.HTTPResponse {
    constructor(client, request, responsePayload, extraInfo) {
        super();
        _CdpHTTPResponse_instances.add(this);
        _CdpHTTPResponse_client.set(this, void 0);
        _CdpHTTPResponse_request.set(this, void 0);
        _CdpHTTPResponse_contentPromise.set(this, null);
        _CdpHTTPResponse_bodyLoadedDeferred.set(this, _util_Deferred_js__WEBPACK_IMPORTED_MODULE_3__.Deferred.create());
        _CdpHTTPResponse_remoteAddress.set(this, void 0);
        _CdpHTTPResponse_status.set(this, void 0);
        _CdpHTTPResponse_statusText.set(this, void 0);
        _CdpHTTPResponse_url.set(this, void 0);
        _CdpHTTPResponse_fromDiskCache.set(this, void 0);
        _CdpHTTPResponse_fromServiceWorker.set(this, void 0);
        _CdpHTTPResponse_headers.set(this, {});
        _CdpHTTPResponse_securityDetails.set(this, void 0);
        _CdpHTTPResponse_timing.set(this, void 0);
        __classPrivateFieldSet(this, _CdpHTTPResponse_client, client, "f");
        __classPrivateFieldSet(this, _CdpHTTPResponse_request, request, "f");
        __classPrivateFieldSet(this, _CdpHTTPResponse_remoteAddress, {
            ip: responsePayload.remoteIPAddress,
            port: responsePayload.remotePort,
        }, "f");
        __classPrivateFieldSet(this, _CdpHTTPResponse_statusText, __classPrivateFieldGet(this, _CdpHTTPResponse_instances, "m", _CdpHTTPResponse_parseStatusTextFromExtraInfo).call(this, extraInfo) ||
            responsePayload.statusText, "f");
        __classPrivateFieldSet(this, _CdpHTTPResponse_url, request.url(), "f");
        __classPrivateFieldSet(this, _CdpHTTPResponse_fromDiskCache, !!responsePayload.fromDiskCache, "f");
        __classPrivateFieldSet(this, _CdpHTTPResponse_fromServiceWorker, !!responsePayload.fromServiceWorker, "f");
        __classPrivateFieldSet(this, _CdpHTTPResponse_status, extraInfo ? extraInfo.statusCode : responsePayload.status, "f");
        const headers = extraInfo ? extraInfo.headers : responsePayload.headers;
        for (const [key, value] of Object.entries(headers)) {
            __classPrivateFieldGet(this, _CdpHTTPResponse_headers, "f")[key.toLowerCase()] = value;
        }
        __classPrivateFieldSet(this, _CdpHTTPResponse_securityDetails, responsePayload.securityDetails
            ? new _common_SecurityDetails_js__WEBPACK_IMPORTED_MODULE_2__.SecurityDetails(responsePayload.securityDetails)
            : null, "f");
        __classPrivateFieldSet(this, _CdpHTTPResponse_timing, responsePayload.timing || null, "f");
    }
    _resolveBody(err) {
        if (err) {
            return __classPrivateFieldGet(this, _CdpHTTPResponse_bodyLoadedDeferred, "f").reject(err);
        }
        return __classPrivateFieldGet(this, _CdpHTTPResponse_bodyLoadedDeferred, "f").resolve();
    }
    remoteAddress() {
        return __classPrivateFieldGet(this, _CdpHTTPResponse_remoteAddress, "f");
    }
    url() {
        return __classPrivateFieldGet(this, _CdpHTTPResponse_url, "f");
    }
    status() {
        return __classPrivateFieldGet(this, _CdpHTTPResponse_status, "f");
    }
    statusText() {
        return __classPrivateFieldGet(this, _CdpHTTPResponse_statusText, "f");
    }
    headers() {
        return __classPrivateFieldGet(this, _CdpHTTPResponse_headers, "f");
    }
    securityDetails() {
        return __classPrivateFieldGet(this, _CdpHTTPResponse_securityDetails, "f");
    }
    timing() {
        return __classPrivateFieldGet(this, _CdpHTTPResponse_timing, "f");
    }
    buffer() {
        if (!__classPrivateFieldGet(this, _CdpHTTPResponse_contentPromise, "f")) {
            __classPrivateFieldSet(this, _CdpHTTPResponse_contentPromise, __classPrivateFieldGet(this, _CdpHTTPResponse_bodyLoadedDeferred, "f")
                .valueOrThrow()
                .then(async () => {
                try {
                    const response = await __classPrivateFieldGet(this, _CdpHTTPResponse_client, "f").send('Network.getResponseBody', {
                        requestId: __classPrivateFieldGet(this, _CdpHTTPResponse_request, "f").id,
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
            }), "f");
        }
        return __classPrivateFieldGet(this, _CdpHTTPResponse_contentPromise, "f");
    }
    request() {
        return __classPrivateFieldGet(this, _CdpHTTPResponse_request, "f");
    }
    fromCache() {
        return __classPrivateFieldGet(this, _CdpHTTPResponse_fromDiskCache, "f") || __classPrivateFieldGet(this, _CdpHTTPResponse_request, "f")._fromMemoryCache;
    }
    fromServiceWorker() {
        return __classPrivateFieldGet(this, _CdpHTTPResponse_fromServiceWorker, "f");
    }
    frame() {
        return __classPrivateFieldGet(this, _CdpHTTPResponse_request, "f").frame();
    }
}
_CdpHTTPResponse_client = new WeakMap(), _CdpHTTPResponse_request = new WeakMap(), _CdpHTTPResponse_contentPromise = new WeakMap(), _CdpHTTPResponse_bodyLoadedDeferred = new WeakMap(), _CdpHTTPResponse_remoteAddress = new WeakMap(), _CdpHTTPResponse_status = new WeakMap(), _CdpHTTPResponse_statusText = new WeakMap(), _CdpHTTPResponse_url = new WeakMap(), _CdpHTTPResponse_fromDiskCache = new WeakMap(), _CdpHTTPResponse_fromServiceWorker = new WeakMap(), _CdpHTTPResponse_headers = new WeakMap(), _CdpHTTPResponse_securityDetails = new WeakMap(), _CdpHTTPResponse_timing = new WeakMap(), _CdpHTTPResponse_instances = new WeakSet(), _CdpHTTPResponse_parseStatusTextFromExtraInfo = function _CdpHTTPResponse_parseStatusTextFromExtraInfo(extraInfo) {
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
};


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/common/SecurityDetails.ts":
/*!*************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/common/SecurityDetails.ts ***!
  \*************************************************************************/
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
var _SecurityDetails_subjectName, _SecurityDetails_issuer, _SecurityDetails_validFrom, _SecurityDetails_validTo, _SecurityDetails_protocol, _SecurityDetails_sanList;
/**
 * The SecurityDetails class represents the security details of a
 * response that was received over a secure connection.
 *
 * @public
 */
class SecurityDetails {
    /**
     * @internal
     */
    constructor(securityPayload) {
        _SecurityDetails_subjectName.set(this, void 0);
        _SecurityDetails_issuer.set(this, void 0);
        _SecurityDetails_validFrom.set(this, void 0);
        _SecurityDetails_validTo.set(this, void 0);
        _SecurityDetails_protocol.set(this, void 0);
        _SecurityDetails_sanList.set(this, void 0);
        __classPrivateFieldSet(this, _SecurityDetails_subjectName, securityPayload.subjectName, "f");
        __classPrivateFieldSet(this, _SecurityDetails_issuer, securityPayload.issuer, "f");
        __classPrivateFieldSet(this, _SecurityDetails_validFrom, securityPayload.validFrom, "f");
        __classPrivateFieldSet(this, _SecurityDetails_validTo, securityPayload.validTo, "f");
        __classPrivateFieldSet(this, _SecurityDetails_protocol, securityPayload.protocol, "f");
        __classPrivateFieldSet(this, _SecurityDetails_sanList, securityPayload.sanList, "f");
    }
    /**
     * The name of the issuer of the certificate.
     */
    issuer() {
        return __classPrivateFieldGet(this, _SecurityDetails_issuer, "f");
    }
    /**
     * {@link https://en.wikipedia.org/wiki/Unix_time | Unix timestamp}
     * marking the start of the certificate's validity.
     */
    validFrom() {
        return __classPrivateFieldGet(this, _SecurityDetails_validFrom, "f");
    }
    /**
     * {@link https://en.wikipedia.org/wiki/Unix_time | Unix timestamp}
     * marking the end of the certificate's validity.
     */
    validTo() {
        return __classPrivateFieldGet(this, _SecurityDetails_validTo, "f");
    }
    /**
     * The security protocol being used, e.g. "TLS 1.2".
     */
    protocol() {
        return __classPrivateFieldGet(this, _SecurityDetails_protocol, "f");
    }
    /**
     * The name of the subject to which the certificate was issued.
     */
    subjectName() {
        return __classPrivateFieldGet(this, _SecurityDetails_subjectName, "f");
    }
    /**
     * The list of {@link https://en.wikipedia.org/wiki/Subject_Alternative_Name | subject alternative names (SANs)} of the certificate.
     */
    subjectAlternativeNames() {
        return __classPrivateFieldGet(this, _SecurityDetails_sanList, "f");
    }
}
_SecurityDetails_subjectName = new WeakMap(), _SecurityDetails_issuer = new WeakMap(), _SecurityDetails_validFrom = new WeakMap(), _SecurityDetails_validTo = new WeakMap(), _SecurityDetails_protocol = new WeakMap(), _SecurityDetails_sanList = new WeakMap();


/***/ })

}]);