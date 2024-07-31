"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_bidi_HTTPResponse_ts"],{

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

/***/ "./src/third_party/puppeteer/package/src/bidi/HTTPResponse.ts":
/*!********************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/bidi/HTTPResponse.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BidiHTTPResponse: () => (/* binding */ BidiHTTPResponse)
/* harmony export */ });
/* harmony import */ var _api_HTTPResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/HTTPResponse.js */ "./src/third_party/puppeteer/package/src/api/HTTPResponse.ts");
/* harmony import */ var _api_Page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Page.js */ "./src/third_party/puppeteer/package/src/api/Page.ts");
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Errors.js */ "./src/third_party/puppeteer/package/src/common/Errors.ts");
/* harmony import */ var _common_SecurityDetails_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/SecurityDetails.js */ "./src/third_party/puppeteer/package/src/common/SecurityDetails.ts");
/* harmony import */ var _util_decorators_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/decorators.js */ "./src/third_party/puppeteer/package/src/util/decorators.ts");
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





/**
 * @internal
 */
let BidiHTTPResponse = (() => {
    var _BidiHTTPResponse_instances, _a, _BidiHTTPResponse_data, _BidiHTTPResponse_request, _BidiHTTPResponse_securityDetails, _BidiHTTPResponse_cdpSupported, _BidiHTTPResponse_initialize;
    let _classSuper = _api_HTTPResponse_js__WEBPACK_IMPORTED_MODULE_0__.HTTPResponse;
    let _instanceExtraInitializers = [];
    let _remoteAddress_decorators;
    return _a = class BidiHTTPResponse extends _classSuper {
            static from(data, request, cdpSupported) {
                const response = new _a(data, request, cdpSupported);
                __classPrivateFieldGet(response, _BidiHTTPResponse_instances, "m", _BidiHTTPResponse_initialize).call(response);
                return response;
            }
            constructor(data, request, cdpSupported) {
                super();
                _BidiHTTPResponse_instances.add(this);
                _BidiHTTPResponse_data.set(this, __runInitializers(this, _instanceExtraInitializers));
                _BidiHTTPResponse_request.set(this, void 0);
                _BidiHTTPResponse_securityDetails.set(this, void 0);
                _BidiHTTPResponse_cdpSupported.set(this, false);
                __classPrivateFieldSet(this, _BidiHTTPResponse_data, data, "f");
                __classPrivateFieldSet(this, _BidiHTTPResponse_request, request, "f");
                __classPrivateFieldSet(this, _BidiHTTPResponse_cdpSupported, cdpSupported, "f");
                // @ts-expect-error non-standard property.
                const securityDetails = data['goog:securityDetails'];
                if (cdpSupported && securityDetails) {
                    __classPrivateFieldSet(this, _BidiHTTPResponse_securityDetails, new _common_SecurityDetails_js__WEBPACK_IMPORTED_MODULE_3__.SecurityDetails(securityDetails), "f");
                }
            }
            remoteAddress() {
                return {
                    ip: '',
                    port: -1,
                };
            }
            url() {
                return __classPrivateFieldGet(this, _BidiHTTPResponse_data, "f").url;
            }
            status() {
                return __classPrivateFieldGet(this, _BidiHTTPResponse_data, "f").status;
            }
            statusText() {
                return __classPrivateFieldGet(this, _BidiHTTPResponse_data, "f").statusText;
            }
            headers() {
                const headers = {};
                for (const header of __classPrivateFieldGet(this, _BidiHTTPResponse_data, "f").headers) {
                    // TODO: How to handle Binary Headers
                    // https://w3c.github.io/webdriver-bidi/#type-network-Header
                    if (header.value.type === 'string') {
                        headers[header.name.toLowerCase()] = header.value.value;
                    }
                }
                return headers;
            }
            request() {
                return __classPrivateFieldGet(this, _BidiHTTPResponse_request, "f");
            }
            fromCache() {
                return __classPrivateFieldGet(this, _BidiHTTPResponse_data, "f").fromCache;
            }
            timing() {
                throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_2__.UnsupportedOperation();
            }
            frame() {
                return __classPrivateFieldGet(this, _BidiHTTPResponse_request, "f").frame();
            }
            fromServiceWorker() {
                return false;
            }
            securityDetails() {
                if (!__classPrivateFieldGet(this, _BidiHTTPResponse_cdpSupported, "f")) {
                    throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_2__.UnsupportedOperation();
                }
                return __classPrivateFieldGet(this, _BidiHTTPResponse_securityDetails, "f") ?? null;
            }
            buffer() {
                throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_2__.UnsupportedOperation();
            }
        },
        _BidiHTTPResponse_data = new WeakMap(),
        _BidiHTTPResponse_request = new WeakMap(),
        _BidiHTTPResponse_securityDetails = new WeakMap(),
        _BidiHTTPResponse_cdpSupported = new WeakMap(),
        _BidiHTTPResponse_instances = new WeakSet(),
        _BidiHTTPResponse_initialize = function _BidiHTTPResponse_initialize() {
            if (__classPrivateFieldGet(this, _BidiHTTPResponse_data, "f").fromCache) {
                __classPrivateFieldGet(this, _BidiHTTPResponse_request, "f")
                    .frame()
                    ?.page()
                    .trustedEmitter.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_1__.PageEvent.RequestServedFromCache, __classPrivateFieldGet(this, _BidiHTTPResponse_request, "f"));
            }
            __classPrivateFieldGet(this, _BidiHTTPResponse_request, "f").frame()?.page().trustedEmitter.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_1__.PageEvent.Response, this);
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _remoteAddress_decorators = [_util_decorators_js__WEBPACK_IMPORTED_MODULE_4__.invokeAtMostOnceForArguments];
            __esDecorate(_a, null, _remoteAddress_decorators, { kind: "method", name: "remoteAddress", static: false, private: false, access: { has: obj => "remoteAddress" in obj, get: obj => obj.remoteAddress }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();



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