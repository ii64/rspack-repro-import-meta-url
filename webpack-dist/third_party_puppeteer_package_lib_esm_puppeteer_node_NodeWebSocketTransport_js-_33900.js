"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_node_NodeWebSocketTransport_js-_33900"],{

/***/ "../node_modules/.pnpm/ws@8.18.0/node_modules/ws/browser.js":
/*!******************************************************************!*\
  !*** ../node_modules/.pnpm/ws@8.18.0/node_modules/ws/browser.js ***!
  \******************************************************************/
/***/ ((module) => {



module.exports = function () {
  throw new Error(
    'ws does not work in the browser. Browser clients must use the native ' +
      'WebSocket object'
  );
};


/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/generated/version.js":
/*!******************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/generated/version.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   packageVersion: () => (/* binding */ packageVersion)
/* harmony export */ });
/**
 * @internal
 */
const packageVersion = '22.14.0';
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/node/NodeWebSocketTransport.js":
/*!****************************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/node/NodeWebSocketTransport.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeWebSocketTransport: () => (/* binding */ NodeWebSocketTransport)
/* harmony export */ });
/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ws */ "../node_modules/.pnpm/ws@8.18.0/node_modules/ws/browser.js");
/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ws__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _generated_version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generated/version.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/generated/version.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */


/**
 * @internal
 */
class NodeWebSocketTransport {
    static create(url, headers) {
        return new Promise((resolve, reject) => {
            const ws = new (ws__WEBPACK_IMPORTED_MODULE_0___default())(url, [], {
                followRedirects: true,
                perMessageDeflate: false,
                // @ts-expect-error https://github.com/websockets/ws/blob/master/doc/ws.md#new-websocketaddress-protocols-options
                allowSynchronousEvents: false,
                maxPayload: 256 * 1024 * 1024, // 256Mb
                headers: {
                    'User-Agent': `Puppeteer ${_generated_version_js__WEBPACK_IMPORTED_MODULE_1__.packageVersion}`,
                    ...headers,
                },
            });
            ws.addEventListener('open', () => {
                return resolve(new NodeWebSocketTransport(ws));
            });
            ws.addEventListener('error', reject);
        });
    }
    #ws;
    onmessage;
    onclose;
    constructor(ws) {
        this.#ws = ws;
        this.#ws.addEventListener('message', event => {
            if (this.onmessage) {
                this.onmessage.call(null, event.data);
            }
        });
        this.#ws.addEventListener('close', () => {
            if (this.onclose) {
                this.onclose.call(null);
            }
        });
        // Silently ignore all errors - we don't know what to do with them.
        this.#ws.addEventListener('error', () => { });
    }
    send(message) {
        this.#ws.send(message);
    }
    close() {
        this.#ws.close();
    }
}
//# sourceMappingURL=NodeWebSocketTransport.js.map

/***/ })

}]);