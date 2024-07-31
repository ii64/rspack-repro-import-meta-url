"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_util_SharedObject_ts"],{

/***/ "./src/panels/recorder/util/SharedObject.ts":
/*!**************************************************!*\
  !*** ./src/panels/recorder/util/SharedObject.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedObject: () => (/* binding */ SharedObject)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
var _SharedObject_instances, _SharedObject_mutex, _SharedObject_counter, _SharedObject_value, _SharedObject_create, _SharedObject_destroy, _SharedObject_release;

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
    constructor(create, destroy) {
        _SharedObject_instances.add(this);
        _SharedObject_mutex.set(this, new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Mutex.Mutex());
        _SharedObject_counter.set(this, 0);
        _SharedObject_value.set(this, void 0);
        _SharedObject_create.set(this, void 0);
        _SharedObject_destroy.set(this, void 0);
        __classPrivateFieldSet(this, _SharedObject_create, create, "f");
        __classPrivateFieldSet(this, _SharedObject_destroy, destroy, "f");
    }
    /**
     * @returns The shared object and a release function. If the release function
     * throws, you may attempt to call it again (however this probably implies
     * your destroy function is bad).
     */
    async acquire() {
        await __classPrivateFieldGet(this, _SharedObject_mutex, "f").run(async () => {
            var _a;
            if (__classPrivateFieldGet(this, _SharedObject_counter, "f") === 0) {
                __classPrivateFieldSet(this, _SharedObject_value, await __classPrivateFieldGet(this, _SharedObject_create, "f").call(this), "f");
            }
            __classPrivateFieldSet(this, _SharedObject_counter, (_a = __classPrivateFieldGet(this, _SharedObject_counter, "f"), ++_a), "f");
        });
        return [__classPrivateFieldGet(this, _SharedObject_value, "f"), __classPrivateFieldGet(this, _SharedObject_instances, "m", _SharedObject_release).bind(this, { released: false })];
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
}
_SharedObject_mutex = new WeakMap(), _SharedObject_counter = new WeakMap(), _SharedObject_value = new WeakMap(), _SharedObject_create = new WeakMap(), _SharedObject_destroy = new WeakMap(), _SharedObject_instances = new WeakSet(), _SharedObject_release = async function _SharedObject_release(state) {
    if (state.released) {
        throw new Error('Attempted to release object multiple times.');
    }
    try {
        state.released = true;
        await __classPrivateFieldGet(this, _SharedObject_mutex, "f").run(async () => {
            var _a;
            if (__classPrivateFieldGet(this, _SharedObject_counter, "f") === 1) {
                await __classPrivateFieldGet(this, _SharedObject_destroy, "f").call(this, __classPrivateFieldGet(this, _SharedObject_value, "f"));
                __classPrivateFieldSet(this, _SharedObject_value, undefined, "f");
            }
            __classPrivateFieldSet(this, _SharedObject_counter, (_a = __classPrivateFieldGet(this, _SharedObject_counter, "f"), --_a), "f");
        });
    }
    catch (error) {
        state.released = false;
        throw error;
    }
};


/***/ })

}]);