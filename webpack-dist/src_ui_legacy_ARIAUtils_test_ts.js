"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_legacy_ARIAUtils_test_ts"],{

/***/ "./src/ui/legacy/ARIAUtils.test.ts":
/*!*****************************************!*\
  !*** ./src/ui/legacy/ARIAUtils.test.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legacy.js */ "./src/ui/legacy/legacy.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('ARIAUtils', () => {
    beforeEach(() => {
        _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Dialog.Dialog.getInstance()?.hide();
        _legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.alert('');
        _legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.alert('');
    });
    afterEach(() => {
        _legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.alert('');
        _legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.alert('');
        _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Dialog.Dialog.getInstance()?.hide();
    });
    describe('ARIAUtils.alertElementInstance', () => {
        it('switches elements to announce alerts', () => {
            const container = document.createElement('div');
            const element1 = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.alertElementInstance(container);
            const element2 = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.alertElementInstance(container);
            const element3 = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.alertElementInstance(container);
            const element4 = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.alertElementInstance(container);
            assert.strictEqual(element1, element3);
            assert.strictEqual(element2, element4);
            assert.strictEqual(element1.textContent, '');
            assert.strictEqual(element2.textContent, '');
        });
    });
    describe('ARIAUtils.alert', () => {
        it('shows alerts in the dialog if it is shown', () => {
            _legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.getOrCreateAlertElements(document.body);
            const dialog = new _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Dialog.Dialog();
            _legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.getOrCreateAlertElements(dialog.contentElement);
            dialog.show();
            _legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.alert('test');
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.getOrCreateAlertElements(document.body).one.textContent, '');
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.getOrCreateAlertElements(document.body).two.textContent, '');
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.getOrCreateAlertElements(dialog.contentElement).one.textContent, 'test');
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.getOrCreateAlertElements(dialog.contentElement).two.textContent, '');
            _legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.alert('test');
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.getOrCreateAlertElements(document.body).one.textContent, '');
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.getOrCreateAlertElements(document.body).two.textContent, '');
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.getOrCreateAlertElements(dialog.contentElement).one.textContent, '');
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.getOrCreateAlertElements(dialog.contentElement).two.textContent, 'test');
        });
        // Flaky test.
        it.skip('[crbug.com/338872707] shows alerts in the body if the dialog is not shown', () => {
            _legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.getOrCreateAlertElements(document.body);
            const dialog = new _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Dialog.Dialog();
            _legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.getOrCreateAlertElements(dialog.contentElement);
            dialog.hide();
            _legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.alert('test');
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.getOrCreateAlertElements(document.body).one.textContent, 'test');
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.getOrCreateAlertElements(document.body).two.textContent, '');
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.getOrCreateAlertElements(dialog.contentElement).one.textContent, '');
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.getOrCreateAlertElements(dialog.contentElement).two.textContent, '');
            _legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.alert('test');
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.getOrCreateAlertElements(document.body).one.textContent, '');
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.getOrCreateAlertElements(document.body).two.textContent, 'test');
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.getOrCreateAlertElements(dialog.contentElement).one.textContent, '');
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.getOrCreateAlertElements(dialog.contentElement).two.textContent, '');
        });
    });
});


/***/ })

}]);