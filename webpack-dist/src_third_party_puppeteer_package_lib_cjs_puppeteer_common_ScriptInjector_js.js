"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_cjs_puppeteer_common_ScriptInjector_js"],{

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/ScriptInjector.js":
/*!**************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/ScriptInjector.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.scriptInjector = exports.ScriptInjector = void 0;
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const injected_js_1 = __webpack_require__(/*! ../generated/injected.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/generated/injected.js");
/**
 * @internal
 */
class ScriptInjector {
    #updated = false;
    #amendments = new Set();
    // Appends a statement of the form `(PuppeteerUtil) => {...}`.
    append(statement) {
        this.#update(() => {
            this.#amendments.add(statement);
        });
    }
    pop(statement) {
        this.#update(() => {
            this.#amendments.delete(statement);
        });
    }
    inject(inject, force = false) {
        if (this.#updated || force) {
            inject(this.#get());
        }
        this.#updated = false;
    }
    #update(callback) {
        callback();
        this.#updated = true;
    }
    #get() {
        return `(() => {
      const module = {};
      ${injected_js_1.source}
      ${[...this.#amendments]
            .map(statement => {
            return `(${statement})(module.exports.default);`;
        })
            .join('')}
      return module.exports.default;
    })()`;
    }
}
exports.ScriptInjector = ScriptInjector;
/**
 * @internal
 */
exports.scriptInjector = new ScriptInjector();
//# sourceMappingURL=ScriptInjector.js.map

/***/ })

}]);