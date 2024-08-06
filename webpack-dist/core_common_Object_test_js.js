"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_common_Object_test_js"],{

/***/ "./core/common/Object.test.js":
/*!************************************!*\
  !*** ./core/common/Object.test.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./core/common/common.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('ObjectWrapper', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let obj;
    beforeEach(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        obj = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper();
    });
    describe('event listeners', () => {
        it('adds event listeners', done => {
            obj.addEventListener('foo', () => {
                done();
            });
            obj.dispatchEventToListeners('foo');
        });
        it('reports event listeners correctly', () => {
            const callback = () => { };
            obj.addEventListener('foo', callback);
            assert.isTrue(obj.hasEventListeners('foo'));
            obj.removeEventListener('foo', callback);
            assert.isFalse(obj.hasEventListeners('foo'));
        });
        it('fires event listeners once', async () => {
            const fireOnce = obj.once('foo');
            obj.dispatchEventToListeners('foo');
            await fireOnce;
            assert.isFalse(obj.hasEventListeners('foo'));
        });
        it('fires event listeners multiple times', () => {
            let count = 0;
            const callback = () => {
                count++;
            };
            obj.addEventListener('foo', callback);
            obj.dispatchEventToListeners('foo');
            obj.dispatchEventToListeners('foo');
            assert.strictEqual(count, 2);
        });
        it('fires event listeners with data', done => {
            const count = 0;
            const callback = (evt) => {
                assert.strictEqual(evt.data.bar, 'baz');
                done();
            };
            obj.addEventListener('foo', callback);
            obj.dispatchEventToListeners('foo', { bar: 'baz' });
            assert.strictEqual(count, 2);
        });
        it('fires event listeners with source', done => {
            const count = 0;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const callback = (evt) => {
                assert.strictEqual(evt.source, obj);
                done();
            };
            obj.addEventListener('foo', callback);
            obj.dispatchEventToListeners('foo');
            assert.strictEqual(count, 2);
        });
        it('handles removal of non-existent listener', () => {
            assert.doesNotThrow(() => {
                obj.removeEventListener('foo', () => { });
            });
        });
        it('handles dispatch of events with zero listeners', () => {
            assert.doesNotThrow(() => {
                obj.dispatchEventToListeners('foo');
            });
        });
    });
});
//# sourceMappingURL=Object.test.js.map

/***/ })

}]);