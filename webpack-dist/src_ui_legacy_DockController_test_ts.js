"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_legacy_DockController_test_ts"],{

/***/ "./src/ui/legacy/DockController.test.ts":
/*!**********************************************!*\
  !*** ./src/ui/legacy/DockController.test.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./legacy.js */ "./src/ui/legacy/legacy.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




async function registerDockingSettings(currentValue) {
    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.registerSettingsForTest([{
            category: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingCategory.GLOBAL,
            settingName: 'currentDockState',
            settingType: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.ENUM,
            defaultValue: currentValue,
            options: [
                {
                    value: 'right',
                    text: () => 'right',
                    title: () => 'Dock to right',
                    raw: false,
                },
                {
                    value: 'bottom',
                    text: () => 'bottom',
                    title: () => 'Dock to bottom',
                    raw: false,
                },
                {
                    value: 'left',
                    text: () => 'left',
                    title: () => 'Dock to left',
                    raw: false,
                },
                {
                    value: 'undocked',
                    text: () => 'undocked',
                    title: () => 'Undock',
                    raw: false,
                },
            ],
        }]);
    _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.clearForTest();
    await (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.initializeGlobalVars)({ reset: false });
}
describe('DockController', () => {
    after(async () => {
        await (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.deinitializeGlobalVars)();
    });
    it('defaults the dockside to undefined when first created', async () => {
        /* Note: this seems like weird behaviour, but updating DockController to
         * explicitly set DockSide by default seems to cause issues in Chrome web
         * tests, so adding this test here to ensure we don't cause any problems.
         */
        await registerDockingSettings('left');
        const dockController = _legacy_js__WEBPACK_IMPORTED_MODULE_3__.DockController.DockController.instance({ forceNew: true, canDock: true });
        assert.strictEqual(dockController.dockSide(), undefined);
    });
    it('falls back to undefined if the setting value is unexpected', async () => {
        await registerDockingSettings('woah-not-a-real-setting-value');
        const dockController = _legacy_js__WEBPACK_IMPORTED_MODULE_3__.DockController.DockController.instance({ forceNew: true, canDock: true });
        assert.strictEqual(dockController.dockSide(), undefined);
    });
    it('sets the dockSide to undocked if the dock cannot be docked', async () => {
        await registerDockingSettings('left');
        const dockController = _legacy_js__WEBPACK_IMPORTED_MODULE_3__.DockController.DockController.instance({ forceNew: true, canDock: false });
        assert.strictEqual(dockController.dockSide(), _legacy_js__WEBPACK_IMPORTED_MODULE_3__.DockController.DockState.UNDOCKED);
    });
    it('can toggle the dock between two settings', async () => {
        await registerDockingSettings('left');
        const dockController = _legacy_js__WEBPACK_IMPORTED_MODULE_3__.DockController.DockController.instance({ forceNew: true, canDock: true });
        dockController.toggleDockSide();
        assert.strictEqual(dockController.dockSide(), _legacy_js__WEBPACK_IMPORTED_MODULE_3__.DockController.DockState.BOTTOM);
        dockController.toggleDockSide();
        assert.strictEqual(dockController.dockSide(), _legacy_js__WEBPACK_IMPORTED_MODULE_3__.DockController.DockState.LEFT);
        dockController.toggleDockSide();
        assert.strictEqual(dockController.dockSide(), _legacy_js__WEBPACK_IMPORTED_MODULE_3__.DockController.DockState.BOTTOM);
    });
});


/***/ })

}]);