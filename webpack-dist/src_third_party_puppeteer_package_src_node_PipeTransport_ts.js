"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_node_PipeTransport_ts"],{

/***/ "./src/third_party/puppeteer/package/src/node/PipeTransport.ts":
/*!*********************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/node/PipeTransport.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PipeTransport: () => (/* binding */ PipeTransport)
/* harmony export */ });
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./src/third_party/puppeteer/package/src/common/EventEmitter.ts");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/src/common/util.ts");
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/src/util/assert.ts");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/disposable.js */ "./src/third_party/puppeteer/package/src/util/disposable.ts");
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
var _PipeTransport_instances, _PipeTransport_pipeWrite, _PipeTransport_subscriptions, _PipeTransport_isClosed, _PipeTransport_pendingMessage, _PipeTransport_dispatch;




/**
 * @internal
 */
class PipeTransport {
    constructor(pipeWrite, pipeRead) {
        _PipeTransport_instances.add(this);
        _PipeTransport_pipeWrite.set(this, void 0);
        _PipeTransport_subscriptions.set(this, new _util_disposable_js__WEBPACK_IMPORTED_MODULE_3__.DisposableStack());
        _PipeTransport_isClosed.set(this, false);
        _PipeTransport_pendingMessage.set(this, '');
        Object.defineProperty(this, "onclose", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "onmessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        __classPrivateFieldSet(this, _PipeTransport_pipeWrite, pipeWrite, "f");
        const pipeReadEmitter = __classPrivateFieldGet(this, _PipeTransport_subscriptions, "f").use(
        // NodeJS event emitters don't support `*` so we need to typecast
        // As long as we don't use it we should be OK.
        new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(pipeRead));
        pipeReadEmitter.on('data', (buffer) => {
            return __classPrivateFieldGet(this, _PipeTransport_instances, "m", _PipeTransport_dispatch).call(this, buffer);
        });
        pipeReadEmitter.on('close', () => {
            if (this.onclose) {
                this.onclose.call(null);
            }
        });
        pipeReadEmitter.on('error', _common_util_js__WEBPACK_IMPORTED_MODULE_1__.debugError);
        const pipeWriteEmitter = __classPrivateFieldGet(this, _PipeTransport_subscriptions, "f").use(
        // NodeJS event emitters don't support `*` so we need to typecast
        // As long as we don't use it we should be OK.
        new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(pipeRead));
        pipeWriteEmitter.on('error', _common_util_js__WEBPACK_IMPORTED_MODULE_1__.debugError);
    }
    send(message) {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!__classPrivateFieldGet(this, _PipeTransport_isClosed, "f"), '`PipeTransport` is closed.');
        __classPrivateFieldGet(this, _PipeTransport_pipeWrite, "f").write(message);
        __classPrivateFieldGet(this, _PipeTransport_pipeWrite, "f").write('\0');
    }
    close() {
        __classPrivateFieldSet(this, _PipeTransport_isClosed, true, "f");
        __classPrivateFieldGet(this, _PipeTransport_subscriptions, "f").dispose();
    }
}
_PipeTransport_pipeWrite = new WeakMap(), _PipeTransport_subscriptions = new WeakMap(), _PipeTransport_isClosed = new WeakMap(), _PipeTransport_pendingMessage = new WeakMap(), _PipeTransport_instances = new WeakSet(), _PipeTransport_dispatch = function _PipeTransport_dispatch(buffer) {
    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!__classPrivateFieldGet(this, _PipeTransport_isClosed, "f"), '`PipeTransport` is closed.');
    let end = buffer.indexOf('\0');
    if (end === -1) {
        __classPrivateFieldSet(this, _PipeTransport_pendingMessage, __classPrivateFieldGet(this, _PipeTransport_pendingMessage, "f") + buffer.toString(), "f");
        return;
    }
    const message = __classPrivateFieldGet(this, _PipeTransport_pendingMessage, "f") + buffer.toString(undefined, 0, end);
    if (this.onmessage) {
        this.onmessage.call(null, message);
    }
    let start = end + 1;
    end = buffer.indexOf('\0', start);
    while (end !== -1) {
        if (this.onmessage) {
            this.onmessage.call(null, buffer.toString(undefined, start, end));
        }
        start = end + 1;
        end = buffer.indexOf('\0', start);
    }
    __classPrivateFieldSet(this, _PipeTransport_pendingMessage, buffer.toString(undefined, start), "f");
};


/***/ })

}]);