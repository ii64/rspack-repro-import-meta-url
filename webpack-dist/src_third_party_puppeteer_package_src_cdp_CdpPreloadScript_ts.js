"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_cdp_CdpPreloadScript_ts"],{

/***/ "./src/third_party/puppeteer/package/src/cdp/CdpPreloadScript.ts":
/*!***********************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/cdp/CdpPreloadScript.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdpPreloadScript: () => (/* binding */ CdpPreloadScript)
/* harmony export */ });
/**
 * @license
 * Copyright 2024 Google Inc.
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
var _CdpPreloadScript_id, _CdpPreloadScript_source, _CdpPreloadScript_frameToId;
/**
 * @internal
 */
class CdpPreloadScript {
    constructor(mainFrame, id, source) {
        /**
         * This is the ID of the preload script returned by
         * Page.addScriptToEvaluateOnNewDocument in the main frame.
         *
         * Sub-frames would get a different CDP ID because
         * addScriptToEvaluateOnNewDocument is called for each subframe. But
         * users only see this ID and subframe IDs are internal to Puppeteer.
         */
        _CdpPreloadScript_id.set(this, void 0);
        _CdpPreloadScript_source.set(this, void 0);
        _CdpPreloadScript_frameToId.set(this, new WeakMap());
        __classPrivateFieldSet(this, _CdpPreloadScript_id, id, "f");
        __classPrivateFieldSet(this, _CdpPreloadScript_source, source, "f");
        __classPrivateFieldGet(this, _CdpPreloadScript_frameToId, "f").set(mainFrame, id);
    }
    get id() {
        return __classPrivateFieldGet(this, _CdpPreloadScript_id, "f");
    }
    get source() {
        return __classPrivateFieldGet(this, _CdpPreloadScript_source, "f");
    }
    getIdForFrame(frame) {
        return __classPrivateFieldGet(this, _CdpPreloadScript_frameToId, "f").get(frame);
    }
    setIdForFrame(frame, identifier) {
        __classPrivateFieldGet(this, _CdpPreloadScript_frameToId, "f").set(frame, identifier);
    }
}
_CdpPreloadScript_id = new WeakMap(), _CdpPreloadScript_source = new WeakMap(), _CdpPreloadScript_frameToId = new WeakMap();


/***/ })

}]);