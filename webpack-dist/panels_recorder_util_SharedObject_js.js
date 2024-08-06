"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_util_SharedObject_js"],{

/***/ "./panels/recorder/util/SharedObject.js":
/*!**********************************************!*\
  !*** ./panels/recorder/util/SharedObject.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedObject: () => (/* binding */ SharedObject)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * SharedObject is similar to a C++ shared pointer, i.e. a reference counted
 * object.
 *
 * A object is "created" whenever there are no acquirers and it's then acquired.
 * Subsequent acquirers use the same object. Only until all acquirers release
 * will the object be "destroyed".
 *
 * Using an object after it's destroyed is undefined behavior.
 *
 * The definition of "created" and "destroyed" is dependent on the functions
 * passed into the constructor.
 */
class SharedObject {
    #mutex = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Mutex.Mutex();
    #counter = 0;
    #value;
    #create;
    #destroy;
    constructor(create, destroy) {
        this.#create = create;
        this.#destroy = destroy;
    }
    /**
     * @returns The shared object and a release function. If the release function
     * throws, you may attempt to call it again (however this probably implies
     * your destroy function is bad).
     */
    async acquire() {
        await this.#mutex.run(async () => {
            if (this.#counter === 0) {
                this.#value = await this.#create();
            }
            ++this.#counter;
        });
        return [this.#value, this.#release.bind(this, { released: false })];
    }
    /**
     * Automatically perform an acquire and release.
     *
     * **If the release fails**, then this will throw and the object will be
     * permanently alive. This is expected to be a fatal error and you should
     * debug your destroy function.
     */
    async run(action) {
        const [value, release] = await this.acquire();
        try {
            const result = await action(value);
            return result;
        }
        finally {
            await release();
        }
    }
    async #release(state) {
        if (state.released) {
            throw new Error('Attempted to release object multiple times.');
        }
        try {
            state.released = true;
            await this.#mutex.run(async () => {
                if (this.#counter === 1) {
                    await this.#destroy(this.#value);
                    this.#value = undefined;
                }
                --this.#counter;
            });
        }
        catch (error) {
            state.released = false;
            throw error;
        }
    }
}
//# sourceMappingURL=SharedObject.js.map

/***/ })

}]);