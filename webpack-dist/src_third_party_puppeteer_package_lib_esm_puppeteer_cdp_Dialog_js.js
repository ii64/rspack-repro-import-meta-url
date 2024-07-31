"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_esm_puppeteer_cdp_Dialog_js"],{

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/api/Dialog.js":
/*!***************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/api/Dialog.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dialog: () => (/* binding */ Dialog)
/* harmony export */ });
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Dialog instances are dispatched by the {@link Page} via the `dialog` event.
 *
 * @remarks
 *
 * @example
 *
 * ```ts
 * import puppeteer from 'puppeteer';
 *
 * (async () => {
 *   const browser = await puppeteer.launch();
 *   const page = await browser.newPage();
 *   page.on('dialog', async dialog => {
 *     console.log(dialog.message());
 *     await dialog.dismiss();
 *     await browser.close();
 *   });
 *   page.evaluate(() => alert('1'));
 * })();
 * ```
 *
 * @public
 */
class Dialog {
    #type;
    #message;
    #defaultValue;
    /**
     * @internal
     */
    handled = false;
    /**
     * @internal
     */
    constructor(type, message, defaultValue = '') {
        this.#type = type;
        this.#message = message;
        this.#defaultValue = defaultValue;
    }
    /**
     * The type of the dialog.
     */
    type() {
        return this.#type;
    }
    /**
     * The message displayed in the dialog.
     */
    message() {
        return this.#message;
    }
    /**
     * The default value of the prompt, or an empty string if the dialog
     * is not a `prompt`.
     */
    defaultValue() {
        return this.#defaultValue;
    }
    /**
     * A promise that resolves when the dialog has been accepted.
     *
     * @param promptText - optional text that will be entered in the dialog
     * prompt. Has no effect if the dialog's type is not `prompt`.
     *
     */
    async accept(promptText) {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(!this.handled, 'Cannot accept dialog which is already handled!');
        this.handled = true;
        await this.handle({
            accept: true,
            text: promptText,
        });
    }
    /**
     * A promise which will resolve once the dialog has been dismissed
     */
    async dismiss() {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(!this.handled, 'Cannot dismiss dialog which is already handled!');
        this.handled = true;
        await this.handle({
            accept: false,
        });
    }
}
//# sourceMappingURL=Dialog.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/Dialog.js":
/*!***************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/Dialog.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdpDialog: () => (/* binding */ CdpDialog)
/* harmony export */ });
/* harmony import */ var _api_Dialog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Dialog.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/api/Dialog.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @internal
 */
class CdpDialog extends _api_Dialog_js__WEBPACK_IMPORTED_MODULE_0__.Dialog {
    #client;
    constructor(client, type, message, defaultValue = '') {
        super(type, message, defaultValue);
        this.#client = client;
    }
    async handle(options) {
        await this.#client.send('Page.handleJavaScriptDialog', {
            accept: options.accept,
            promptText: options.text,
        });
    }
}
//# sourceMappingURL=Dialog.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js":
/*!****************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assert: () => (/* binding */ assert)
/* harmony export */ });
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Asserts that the given value is truthy.
 * @param value - some conditional statement
 * @param message - the error message to throw if the value is not truthy.
 *
 * @internal
 */
const assert = (value, message) => {
    if (!value) {
        throw new Error(message);
    }
};
//# sourceMappingURL=assert.js.map

/***/ })

}]);