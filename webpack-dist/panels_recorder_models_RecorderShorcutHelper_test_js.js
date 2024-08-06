"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_models_RecorderShorcutHelper_test_js"],{

/***/ "./panels/recorder/models/RecorderShorcutHelper.test.js":
/*!**************************************************************!*\
  !*** ./panels/recorder/models/RecorderShorcutHelper.test.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _models_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models.js */ "./panels/recorder/models/models.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('RecorderShortcutHelper', () => {
    function waitFor(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }
    function dispatchShortcut() {
        const event = new KeyboardEvent('keyup', {
            key: 'E',
            ctrlKey: _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.Platform.isMac() ? false : true,
            metaKey: _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.Platform.isMac() ? true : false,
            bubbles: true,
            composed: true,
        });
        document.dispatchEvent(event);
    }
    it('should wait for timeout', async () => {
        const time = 10;
        const helper = new _models_js__WEBPACK_IMPORTED_MODULE_1__.RecorderShortcutHelper.RecorderShortcutHelper(time);
        const stub = sinon.stub();
        helper.handleShortcut(stub);
        await waitFor(time + 10);
        assert.strictEqual(stub.callCount, 1);
        dispatchShortcut();
        assert.strictEqual(stub.callCount, 1);
    });
    it('should stop on click', async () => {
        const time = 100;
        const helper = new _models_js__WEBPACK_IMPORTED_MODULE_1__.RecorderShortcutHelper.RecorderShortcutHelper(time);
        const stub = sinon.stub();
        helper.handleShortcut(stub);
        dispatchShortcut();
        await waitFor(time / 2);
        assert.strictEqual(stub.callCount, 1);
        await waitFor(time);
        assert.strictEqual(stub.callCount, 1);
    });
});
//# sourceMappingURL=RecorderShorcutHelper.test.js.map

/***/ })

}]);