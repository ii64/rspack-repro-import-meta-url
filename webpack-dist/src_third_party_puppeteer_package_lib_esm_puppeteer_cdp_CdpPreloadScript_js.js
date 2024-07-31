"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_esm_puppeteer_cdp_CdpPreloadScript_js"],{

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/CdpPreloadScript.js":
/*!*************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/CdpPreloadScript.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdpPreloadScript: () => (/* binding */ CdpPreloadScript)
/* harmony export */ });
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @internal
 */
class CdpPreloadScript {
    /**
     * This is the ID of the preload script returned by
     * Page.addScriptToEvaluateOnNewDocument in the main frame.
     *
     * Sub-frames would get a different CDP ID because
     * addScriptToEvaluateOnNewDocument is called for each subframe. But
     * users only see this ID and subframe IDs are internal to Puppeteer.
     */
    #id;
    #source;
    #frameToId = new WeakMap();
    constructor(mainFrame, id, source) {
        this.#id = id;
        this.#source = source;
        this.#frameToId.set(mainFrame, id);
    }
    get id() {
        return this.#id;
    }
    get source() {
        return this.#source;
    }
    getIdForFrame(frame) {
        return this.#frameToId.get(frame);
    }
    setIdForFrame(frame, identifier) {
        this.#frameToId.set(frame, identifier);
    }
}
//# sourceMappingURL=CdpPreloadScript.js.map

/***/ })

}]);