"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_ARIAUtils_test_js"], {
"./ui/legacy/ARIAUtils.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('ARIAUtils', function() {
    beforeEach(function() {
        var _UI_Dialog_Dialog_getInstance;
        (_UI_Dialog_Dialog_getInstance = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Dialog.Dialog.getInstance()) === null || _UI_Dialog_Dialog_getInstance === void 0 ? void 0 : _UI_Dialog_Dialog_getInstance.hide();
        _legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.alert('');
        _legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.alert('');
    });
    afterEach(function() {
        var _UI_Dialog_Dialog_getInstance;
        _legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.alert('');
        _legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.alert('');
        (_UI_Dialog_Dialog_getInstance = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Dialog.Dialog.getInstance()) === null || _UI_Dialog_Dialog_getInstance === void 0 ? void 0 : _UI_Dialog_Dialog_getInstance.hide();
    });
    describe('ARIAUtils.alertElementInstance', function() {
        it('switches elements to announce alerts', function() {
            var container = document.createElement('div');
            var element1 = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.alertElementInstance(container);
            var element2 = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.alertElementInstance(container);
            var element3 = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.alertElementInstance(container);
            var element4 = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.alertElementInstance(container);
            assert.strictEqual(element1, element3);
            assert.strictEqual(element2, element4);
            assert.strictEqual(element1.textContent, '');
            assert.strictEqual(element2.textContent, '');
        });
    });
    describe('ARIAUtils.alert', function() {
        it('shows alerts in the dialog if it is shown', function() {
            _legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.getOrCreateAlertElements(document.body);
            var dialog = new _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Dialog.Dialog();
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
        it.skip('[crbug.com/338872707] shows alerts in the body if the dialog is not shown', function() {
            _legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.getOrCreateAlertElements(document.body);
            var dialog = new _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Dialog.Dialog();
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
}); //# sourceMappingURL=ARIAUtils.test.js.map


}),

}]);