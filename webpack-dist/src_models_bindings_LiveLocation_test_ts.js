"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_bindings_LiveLocation_test_ts"],{

/***/ "./src/models/bindings/LiveLocation.test.ts":
/*!**************************************************!*\
  !*** ./src/models/bindings/LiveLocation.test.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bindings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bindings.js */ "./src/models/bindings/bindings.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const LiveLocationPool = _bindings_js__WEBPACK_IMPORTED_MODULE_0__.LiveLocation.LiveLocationPool;
const LiveLocationWithPool = _bindings_js__WEBPACK_IMPORTED_MODULE_0__.LiveLocation.LiveLocationWithPool;
describe('LiveLocation', () => {
    it('executes updates atomically', async () => {
        const pool = new LiveLocationPool();
        // Create a promise that our async update is blocked on. The test then becomes:
        //   1. schedule two updates to the live location
        //   2. resolve the blocking promise
        //   3. schedule a third update
        //   4. check that all actions were still executed atomically.
        let fulfillBlockingPromise = (_) => { };
        const blockingPromise = new Promise(fulfill => {
            fulfillBlockingPromise = fulfill;
        });
        const updateDelegateLog = [];
        const liveLocation = new LiveLocationWithPool(async () => {
            updateDelegateLog.push('enter');
            await blockingPromise;
            updateDelegateLog.push('exit');
        }, pool);
        void liveLocation.update();
        void liveLocation.update();
        fulfillBlockingPromise(undefined);
        await liveLocation.update();
        assert.deepEqual(updateDelegateLog, ['enter', 'exit', 'enter', 'exit', 'enter', 'exit']);
    });
    it('isDisposed returns true after locationPool.disposeAll', () => {
        const pool = new LiveLocationPool();
        const liveLocation = new LiveLocationWithPool(async () => { }, pool);
        assert.isFalse(liveLocation.isDisposed());
        pool.disposeAll();
        assert.isTrue(liveLocation.isDisposed());
    });
});


/***/ })

}]);