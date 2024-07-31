"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_api_CDPSession_ts-src_third_party_puppeteer_package_src-cb7336"],{

/***/ "./src/third_party/puppeteer/package/src/api/CDPSession.ts":
/*!*****************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/api/CDPSession.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CDPSession: () => (/* binding */ CDPSession),
/* harmony export */   CDPSessionEvent: () => (/* binding */ CDPSessionEvent)
/* harmony export */ });
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./src/third_party/puppeteer/package/src/common/EventEmitter.ts");

/**
 * Events that the CDPSession class emits.
 *
 * @public
 */
// eslint-disable-next-line @typescript-eslint/no-namespace
var CDPSessionEvent;
(function (CDPSessionEvent) {
    /** @internal */
    CDPSessionEvent.Disconnected = Symbol('CDPSession.Disconnected');
    /** @internal */
    CDPSessionEvent.Swapped = Symbol('CDPSession.Swapped');
    /**
     * Emitted when the session is ready to be configured during the auto-attach
     * process. Right after the event is handled, the session will be resumed.
     *
     * @internal
     */
    CDPSessionEvent.Ready = Symbol('CDPSession.Ready');
    CDPSessionEvent.SessionAttached = 'sessionattached';
    CDPSessionEvent.SessionDetached = 'sessiondetached';
})(CDPSessionEvent || (CDPSessionEvent = {}));
/**
 * The `CDPSession` instances are used to talk raw Chrome Devtools Protocol.
 *
 * @remarks
 *
 * Protocol methods can be called with {@link CDPSession.send} method and protocol
 * events can be subscribed to with `CDPSession.on` method.
 *
 * Useful links: {@link https://chromedevtools.github.io/devtools-protocol/ | DevTools Protocol Viewer}
 * and {@link https://github.com/aslushnikov/getting-started-with-cdp/blob/HEAD/README.md | Getting Started with DevTools Protocol}.
 *
 * @example
 *
 * ```ts
 * const client = await page.createCDPSession();
 * await client.send('Animation.enable');
 * client.on('Animation.animationCreated', () =>
 *   console.log('Animation created!')
 * );
 * const response = await client.send('Animation.getPlaybackRate');
 * console.log('playback rate is ' + response.playbackRate);
 * await client.send('Animation.setPlaybackRate', {
 *   playbackRate: response.playbackRate / 2,
 * });
 * ```
 *
 * @public
 */
class CDPSession extends _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter {
    /**
     * @internal
     */
    constructor() {
        super();
    }
    /**
     * Parent session in terms of CDP's auto-attach mechanism.
     *
     * @internal
     */
    parentSession() {
        return undefined;
    }
}


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/common/TimeoutSettings.ts":
/*!*************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/common/TimeoutSettings.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeoutSettings: () => (/* binding */ TimeoutSettings)
/* harmony export */ });
/**
 * @license
 * Copyright 2019 Google Inc.
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
var _TimeoutSettings_defaultTimeout, _TimeoutSettings_defaultNavigationTimeout;
const DEFAULT_TIMEOUT = 30000;
/**
 * @internal
 */
class TimeoutSettings {
    constructor() {
        _TimeoutSettings_defaultTimeout.set(this, void 0);
        _TimeoutSettings_defaultNavigationTimeout.set(this, void 0);
        __classPrivateFieldSet(this, _TimeoutSettings_defaultTimeout, null, "f");
        __classPrivateFieldSet(this, _TimeoutSettings_defaultNavigationTimeout, null, "f");
    }
    setDefaultTimeout(timeout) {
        __classPrivateFieldSet(this, _TimeoutSettings_defaultTimeout, timeout, "f");
    }
    setDefaultNavigationTimeout(timeout) {
        __classPrivateFieldSet(this, _TimeoutSettings_defaultNavigationTimeout, timeout, "f");
    }
    navigationTimeout() {
        if (__classPrivateFieldGet(this, _TimeoutSettings_defaultNavigationTimeout, "f") !== null) {
            return __classPrivateFieldGet(this, _TimeoutSettings_defaultNavigationTimeout, "f");
        }
        if (__classPrivateFieldGet(this, _TimeoutSettings_defaultTimeout, "f") !== null) {
            return __classPrivateFieldGet(this, _TimeoutSettings_defaultTimeout, "f");
        }
        return DEFAULT_TIMEOUT;
    }
    timeout() {
        if (__classPrivateFieldGet(this, _TimeoutSettings_defaultTimeout, "f") !== null) {
            return __classPrivateFieldGet(this, _TimeoutSettings_defaultTimeout, "f");
        }
        return DEFAULT_TIMEOUT;
    }
}
_TimeoutSettings_defaultTimeout = new WeakMap(), _TimeoutSettings_defaultNavigationTimeout = new WeakMap();


/***/ })

}]);