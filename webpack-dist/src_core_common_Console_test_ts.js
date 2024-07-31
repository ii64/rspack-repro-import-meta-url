"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_core_common_Console_test_ts"],{

/***/ "./src/core/common/Console.test.ts":
/*!*****************************************!*\
  !*** ./src/core/common/Console.test.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/core/common/common.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const Console = _common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console;
describe('Console', () => {
    let consoleImpl;
    beforeEach(() => {
        consoleImpl = Console.instance({ forceNew: true });
    });
    it('adds messages', () => {
        consoleImpl.addMessage('Foo', _common_js__WEBPACK_IMPORTED_MODULE_0__.Console.MessageLevel.Info, true);
        const messages = consoleImpl.messages();
        assert.strictEqual(messages.length, 1);
        assert.strictEqual(messages[0].text, 'Foo');
    });
    it('adds handles messages of all types', () => {
        const messageTypes = new Map([
            [_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.MessageLevel.Info, 'log'],
            [_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.MessageLevel.Warning, 'warn'],
            [_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.MessageLevel.Error, 'error'],
        ]);
        for (const [type, method] of messageTypes) {
            consoleImpl = Console.instance({ forceNew: true });
            // Dispatch the message of the appropriate type.
            // @ts-ignore
            consoleImpl[method](type);
            // Now read the message back and check it.
            const messages = consoleImpl.messages();
            assert.strictEqual(messages.length, 1);
            assert.strictEqual(messages[0].text, type);
            assert.strictEqual(messages[0].level, type);
        }
    });
    it('stores messages', () => {
        consoleImpl.addMessage('Foo', _common_js__WEBPACK_IMPORTED_MODULE_0__.Console.MessageLevel.Info, true);
        consoleImpl.addMessage('Baz', _common_js__WEBPACK_IMPORTED_MODULE_0__.Console.MessageLevel.Warning, true);
        consoleImpl.addMessage('Bar', _common_js__WEBPACK_IMPORTED_MODULE_0__.Console.MessageLevel.Error, true);
        consoleImpl.addMessage('Donkey', _common_js__WEBPACK_IMPORTED_MODULE_0__.Console.MessageLevel.Info, true);
        const messages = consoleImpl.messages();
        assert.strictEqual(messages.length, 4);
    });
    it('dispatches events to listeners', done => {
        const callback = ({ data }) => {
            consoleImpl.removeEventListener(_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Events.MessageAdded, callback);
            assert.strictEqual(data.text, 'Foo');
            done();
        };
        consoleImpl.addEventListener(_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Events.MessageAdded, callback);
        consoleImpl.addMessage('Foo', _common_js__WEBPACK_IMPORTED_MODULE_0__.Console.MessageLevel.Info, true);
    });
});


/***/ })

}]);