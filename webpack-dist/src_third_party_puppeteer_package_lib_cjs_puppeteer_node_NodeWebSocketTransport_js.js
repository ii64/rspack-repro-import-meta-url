"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_cjs_puppeteer_node_NodeWebSocketTransport_js"],{

/***/ "./node_modules/.pnpm/ws@8.18.0/node_modules/ws/browser.js":
/*!*****************************************************************!*\
  !*** ./node_modules/.pnpm/ws@8.18.0/node_modules/ws/browser.js ***!
  \*****************************************************************/
/***/ ((module) => {



module.exports = function () {
  throw new Error(
    'ws does not work in the browser. Browser clients must use the native ' +
      'WebSocket object'
  );
};


/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/generated/version.js":
/*!**********************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/generated/version.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.packageVersion = void 0;
/**
 * @internal
 */
exports.packageVersion = '22.14.0';
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/node/NodeWebSocketTransport.js":
/*!********************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/node/NodeWebSocketTransport.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NodeWebSocketTransport = void 0;
/**
 * @license
 * Copyright 2018 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const ws_1 = __importDefault(__webpack_require__(/*! ws */ "./node_modules/.pnpm/ws@8.18.0/node_modules/ws/browser.js"));
const version_js_1 = __webpack_require__(/*! ../generated/version.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/generated/version.js");
/**
 * @internal
 */
class NodeWebSocketTransport {
    static create(url, headers) {
        return new Promise((resolve, reject) => {
            const ws = new ws_1.default(url, [], {
                followRedirects: true,
                perMessageDeflate: false,
                // @ts-expect-error https://github.com/websockets/ws/blob/master/doc/ws.md#new-websocketaddress-protocols-options
                allowSynchronousEvents: false,
                maxPayload: 256 * 1024 * 1024, // 256Mb
                headers: {
                    'User-Agent': `Puppeteer ${version_js_1.packageVersion}`,
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
exports.NodeWebSocketTransport = NodeWebSocketTransport;
//# sourceMappingURL=NodeWebSocketTransport.js.map

/***/ })

}]);