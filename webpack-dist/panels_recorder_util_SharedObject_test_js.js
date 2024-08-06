"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_util_SharedObject_test_js"],{

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

/***/ }),

/***/ "./panels/recorder/util/SharedObject.test.js":
/*!***************************************************!*\
  !*** ./panels/recorder/util/SharedObject.test.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./panels/recorder/util/util.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('SharedObject', () => {
    it('should work', async () => {
        // The test object
        const testObject = { value: false };
        const object = new _util_js__WEBPACK_IMPORTED_MODULE_0__.SharedObject.SharedObject(() => {
            testObject.value = true;
            return { ...testObject };
        }, object => {
            object.value = false;
        });
        // No one acquired.
        assert.isFalse(testObject.value);
        // First acquire.
        const [object1, release1] = await object.acquire();
        // Should be created.
        assert.notStrictEqual(object1, testObject);
        // Acquired actually occured.
        assert.isTrue(testObject.value);
        // The second object should be the same.
        const [object2, release2] = await object.acquire();
        // Should equal the first acquired object.
        assert.strictEqual(object2, object1);
        // Should still be true.
        assert.isTrue(object1.value);
        // First release (can be in any order).
        await release1();
        // Should still be true.
        assert.isTrue(object1.value);
        // Second release.
        await release2();
        assert.isFalse(object1.value);
    });
    it('should work with run', async () => {
        // The test object
        const testObject = { value: false };
        const object = new _util_js__WEBPACK_IMPORTED_MODULE_0__.SharedObject.SharedObject(() => {
            testObject.value = true;
            return { ...testObject };
        }, object => {
            object.value = false;
        });
        // No one acquired.
        assert.isFalse(testObject.value);
        let finalObject;
        const promises = [];
        // First acquire.
        promises.push(object.run(async (object1) => {
            // Should be created.
            assert.notStrictEqual(object1, testObject);
            // Acquired actually occured.
            assert.isTrue(testObject.value);
            promises.push(object.run(async (object2) => {
                // Should equal the first acquired object.
                assert.strictEqual(object2, object1);
                // Should still be true.
                assert.isTrue(object1.value);
                finalObject = object1;
            }));
        }));
        await Promise.all(promises);
        assert.exists(finalObject);
        assert.isFalse(finalObject?.value);
    });
});
//# sourceMappingURL=SharedObject.test.js.map

/***/ }),

/***/ "./panels/recorder/util/util.js":
/*!**************************************!*\
  !*** ./panels/recorder/util/util.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEVTOOLS_RECORDER_WORLD_NAME: () => (/* binding */ DEVTOOLS_RECORDER_WORLD_NAME),
/* harmony export */   InjectedScript: () => (/* binding */ InjectedScript),
/* harmony export */   SharedObject: () => (/* reexport module object */ _SharedObject_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   isDebugBuild: () => (/* binding */ isDebugBuild)
/* harmony export */ });
/* harmony import */ var _SharedObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharedObject.js */ "./panels/recorder/util/SharedObject.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Setting this to `true` enables extra logging for the injected scripts.
const isDebugBuild = false;
const DEVTOOLS_RECORDER_WORLD_NAME = 'devtools_recorder';
class InjectedScript {
    static #injectedScript;
    static async get() {
        if (!this.#injectedScript) {
            this.#injectedScript = (await fetch(new URL(/* asset import */ __webpack_require__(/*! ../injected/injected.generated.js */ "./panels/recorder/injected/injected.generated.js?ecbe"), __webpack_require__.b)))
                .text();
        }
        return this.#injectedScript;
    }
}

//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./panels/recorder/injected/injected.generated.js?ecbe":
/*!********************************************************!*\
  !*** ./panels/recorder/injected/injected.generated.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "44652505ecf532b0b8f1.js";

/***/ })

}]);