"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_esm_puppeteer_cdp_HTTPRequest_js"],{

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/HTTPRequest.js":
/*!********************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/HTTPRequest.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdpHTTPRequest: () => (/* binding */ CdpHTTPRequest)
/* harmony export */ });
/* harmony import */ var _api_HTTPRequest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/HTTPRequest.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/api/HTTPRequest.js");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");


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

/***/ })

}]);