"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_bidi_HTTPRequest_ts"],{

/***/ "./src/third_party/puppeteer/package/src/bidi/HTTPRequest.ts":
/*!*******************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/bidi/HTTPRequest.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BidiHTTPRequest: () => (/* binding */ BidiHTTPRequest),
/* harmony export */   requests: () => (/* binding */ requests)
/* harmony export */ });
/* harmony import */ var _api_HTTPRequest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/HTTPRequest.js */ "./src/third_party/puppeteer/package/src/api/HTTPRequest.ts");
/* harmony import */ var _api_Page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Page.js */ "./src/third_party/puppeteer/package/src/api/Page.ts");
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Errors.js */ "./src/third_party/puppeteer/package/src/common/Errors.ts");
/* harmony import */ var _HTTPResponse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HTTPResponse.js */ "./src/third_party/puppeteer/package/src/bidi/HTTPResponse.ts");
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
var _BidiHTTPRequest_instances, _a, _BidiHTTPRequest_redirectChain, _BidiHTTPRequest_response, _BidiHTTPRequest_frame, _BidiHTTPRequest_request, _BidiHTTPRequest_initialize, _BidiHTTPRequest_hasInternalHeaderOverwrite_get, _BidiHTTPRequest_extraHTTPHeaders_get, _BidiHTTPRequest_userAgentHeaders_get, _BidiHTTPRequest_authenticationHandled, _BidiHTTPRequest_handleAuthentication;




const requests = new WeakMap();
/**
 * @internal
 */
class BidiHTTPRequest extends _api_HTTPRequest_js__WEBPACK_IMPORTED_MODULE_0__.HTTPRequest {
    static from(bidiRequest, frame, redirect) {
        const request = new _a(bidiRequest, frame, redirect);
        __classPrivateFieldGet(request, _BidiHTTPRequest_instances, "m", _BidiHTTPRequest_initialize).call(request);
        return request;
    }
    constructor(request, frame, redirect) {
        super();
        _BidiHTTPRequest_instances.add(this);
        _BidiHTTPRequest_redirectChain.set(this, void 0);
        _BidiHTTPRequest_response.set(this, null);
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _BidiHTTPRequest_frame.set(this, void 0);
        _BidiHTTPRequest_request.set(this, void 0);
        _BidiHTTPRequest_authenticationHandled.set(this, false);
        _BidiHTTPRequest_handleAuthentication.set(this, async () => {
            if (!__classPrivateFieldGet(this, _BidiHTTPRequest_frame, "f")) {
                return;
            }
            const credentials = __classPrivateFieldGet(this, _BidiHTTPRequest_frame, "f").page()._credentials;
            if (credentials && !__classPrivateFieldGet(this, _BidiHTTPRequest_authenticationHandled, "f")) {
                __classPrivateFieldSet(this, _BidiHTTPRequest_authenticationHandled, true, "f");
                void __classPrivateFieldGet(this, _BidiHTTPRequest_request, "f").continueWithAuth({
                    action: 'provideCredentials',
                    credentials: {
                        type: 'password',
                        username: credentials.username,
                        password: credentials.password,
                    },
                });
            }
            else {
                void __classPrivateFieldGet(this, _BidiHTTPRequest_request, "f").continueWithAuth({
                    action: 'cancel',
                });
            }
        });
        requests.set(request, this);
        this.interception.enabled = request.isBlocked;
        __classPrivateFieldSet(this, _BidiHTTPRequest_request, request, "f");
        __classPrivateFieldSet(this, _BidiHTTPRequest_frame, frame, "f");
        __classPrivateFieldSet(this, _BidiHTTPRequest_redirectChain, redirect ? __classPrivateFieldGet(redirect, _BidiHTTPRequest_redirectChain, "f") : [], "f");
        this.id = request.id;
    }
    get client() {
        return __classPrivateFieldGet(this, _BidiHTTPRequest_frame, "f").client;
    }
    url() {
        return __classPrivateFieldGet(this, _BidiHTTPRequest_request, "f").url;
    }
    resourceType() {
        if (!__classPrivateFieldGet(this, _BidiHTTPRequest_frame, "f").page().browser().cdpSupported) {
            throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_2__.UnsupportedOperation();
        }
        return (__classPrivateFieldGet(this, _BidiHTTPRequest_request, "f").resourceType || 'other').toLowerCase();
    }
    method() {
        return __classPrivateFieldGet(this, _BidiHTTPRequest_request, "f").method;
    }
    postData() {
        if (!__classPrivateFieldGet(this, _BidiHTTPRequest_frame, "f").page().browser().cdpSupported) {
            throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_2__.UnsupportedOperation();
        }
        return __classPrivateFieldGet(this, _BidiHTTPRequest_request, "f").postData;
    }
    hasPostData() {
        if (!__classPrivateFieldGet(this, _BidiHTTPRequest_frame, "f").page().browser().cdpSupported) {
            throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_2__.UnsupportedOperation();
        }
        return __classPrivateFieldGet(this, _BidiHTTPRequest_request, "f").hasPostData;
    }
    async fetchPostData() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_2__.UnsupportedOperation();
    }
    headers() {
        const headers = {};
        for (const header of __classPrivateFieldGet(this, _BidiHTTPRequest_request, "f").headers) {
            headers[header.name.toLowerCase()] = header.value.value;
        }
        return {
            ...headers,
            ...__classPrivateFieldGet(this, _BidiHTTPRequest_instances, "a", _BidiHTTPRequest_extraHTTPHeaders_get),
            ...__classPrivateFieldGet(this, _BidiHTTPRequest_instances, "a", _BidiHTTPRequest_userAgentHeaders_get),
        };
    }
    response() {
        return __classPrivateFieldGet(this, _BidiHTTPRequest_response, "f");
    }
    failure() {
        if (__classPrivateFieldGet(this, _BidiHTTPRequest_request, "f").error === undefined) {
            return null;
        }
        return { errorText: __classPrivateFieldGet(this, _BidiHTTPRequest_request, "f").error };
    }
    isNavigationRequest() {
        return __classPrivateFieldGet(this, _BidiHTTPRequest_request, "f").navigation !== undefined;
    }
    initiator() {
        return __classPrivateFieldGet(this, _BidiHTTPRequest_request, "f").initiator;
    }
    redirectChain() {
        return __classPrivateFieldGet(this, _BidiHTTPRequest_redirectChain, "f").slice();
    }
    frame() {
        return __classPrivateFieldGet(this, _BidiHTTPRequest_frame, "f");
    }
    async continue(overrides, priority) {
        return await super.continue({
            headers: __classPrivateFieldGet(this, _BidiHTTPRequest_instances, "a", _BidiHTTPRequest_hasInternalHeaderOverwrite_get) ? this.headers() : undefined,
            ...overrides,
        }, priority);
    }
    async _continue(overrides = {}) {
        const headers = getBidiHeaders(overrides.headers);
        this.interception.handled = true;
        return await __classPrivateFieldGet(this, _BidiHTTPRequest_request, "f")
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
        return await __classPrivateFieldGet(this, _BidiHTTPRequest_request, "f").failRequest().catch(error => {
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
        return await __classPrivateFieldGet(this, _BidiHTTPRequest_request, "f")
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
}
_a = BidiHTTPRequest, _BidiHTTPRequest_redirectChain = new WeakMap(), _BidiHTTPRequest_response = new WeakMap(), _BidiHTTPRequest_frame = new WeakMap(), _BidiHTTPRequest_request = new WeakMap(), _BidiHTTPRequest_authenticationHandled = new WeakMap(), _BidiHTTPRequest_handleAuthentication = new WeakMap(), _BidiHTTPRequest_instances = new WeakSet(), _BidiHTTPRequest_initialize = function _BidiHTTPRequest_initialize() {
    __classPrivateFieldGet(this, _BidiHTTPRequest_request, "f").on('redirect', request => {
        const httpRequest = _a.from(request, __classPrivateFieldGet(this, _BidiHTTPRequest_frame, "f"), this);
        __classPrivateFieldGet(this, _BidiHTTPRequest_redirectChain, "f").push(this);
        request.once('success', () => {
            __classPrivateFieldGet(this, _BidiHTTPRequest_frame, "f")
                .page()
                .trustedEmitter.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_1__.PageEvent.RequestFinished, httpRequest);
        });
        request.once('error', () => {
            __classPrivateFieldGet(this, _BidiHTTPRequest_frame, "f")
                .page()
                .trustedEmitter.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_1__.PageEvent.RequestFailed, httpRequest);
        });
        void httpRequest.finalizeInterceptions();
    });
    __classPrivateFieldGet(this, _BidiHTTPRequest_request, "f").once('success', data => {
        __classPrivateFieldSet(this, _BidiHTTPRequest_response, _HTTPResponse_js__WEBPACK_IMPORTED_MODULE_3__.BidiHTTPResponse.from(data, this, __classPrivateFieldGet(this, _BidiHTTPRequest_frame, "f").page().browser().cdpSupported), "f");
    });
    __classPrivateFieldGet(this, _BidiHTTPRequest_request, "f").on('authenticate', __classPrivateFieldGet(this, _BidiHTTPRequest_handleAuthentication, "f"));
    __classPrivateFieldGet(this, _BidiHTTPRequest_frame, "f").page().trustedEmitter.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_1__.PageEvent.Request, this);
    if (__classPrivateFieldGet(this, _BidiHTTPRequest_instances, "a", _BidiHTTPRequest_hasInternalHeaderOverwrite_get)) {
        this.interception.handlers.push(async () => {
            await this.continue({
                headers: this.headers(),
            }, 0);
        });
    }
}, _BidiHTTPRequest_hasInternalHeaderOverwrite_get = function _BidiHTTPRequest_hasInternalHeaderOverwrite_get() {
    return Boolean(Object.keys(__classPrivateFieldGet(this, _BidiHTTPRequest_instances, "a", _BidiHTTPRequest_extraHTTPHeaders_get)).length ||
        Object.keys(__classPrivateFieldGet(this, _BidiHTTPRequest_instances, "a", _BidiHTTPRequest_userAgentHeaders_get)).length);
}, _BidiHTTPRequest_extraHTTPHeaders_get = function _BidiHTTPRequest_extraHTTPHeaders_get() {
    return __classPrivateFieldGet(this, _BidiHTTPRequest_frame, "f")?.page()._extraHTTPHeaders ?? {};
}, _BidiHTTPRequest_userAgentHeaders_get = function _BidiHTTPRequest_userAgentHeaders_get() {
    return __classPrivateFieldGet(this, _BidiHTTPRequest_frame, "f")?.page()._userAgentHeaders ?? {};
};
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


/***/ })

}]);