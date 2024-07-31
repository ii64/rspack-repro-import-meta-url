"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_cdp_HTTPRequest_ts"],{

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


/***/ })

}]);