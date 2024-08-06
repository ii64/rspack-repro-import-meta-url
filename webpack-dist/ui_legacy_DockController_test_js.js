"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_DockController_test_js"],{

/***/ "./ui/legacy/DockController.test.js":
/*!******************************************!*\
  !*** ./ui/legacy/DockController.test.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




async function registerDockingSettings(currentValue) {
    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.registerSettingsForTest([{
            category: "GLOBAL" /* Common.Settings.SettingCategory.GLOBAL */,
            settingName: 'currentDockState',
            settingType: "enum" /* Common.Settings.SettingType.ENUM */,
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
        assert.strictEqual(dockController.dockSide(), "undocked" /* LegacyUI.DockController.DockState.UNDOCKED */);
    });
    it('can toggle the dock between two settings', async () => {
        await registerDockingSettings('left');
        const dockController = _legacy_js__WEBPACK_IMPORTED_MODULE_3__.DockController.DockController.instance({ forceNew: true, canDock: true });
        dockController.toggleDockSide();
        assert.strictEqual(dockController.dockSide(), "bottom" /* LegacyUI.DockController.DockState.BOTTOM */);
        dockController.toggleDockSide();
        assert.strictEqual(dockController.dockSide(), "left" /* LegacyUI.DockController.DockState.LEFT */);
        dockController.toggleDockSide();
        assert.strictEqual(dockController.dockSide(), "bottom" /* LegacyUI.DockController.DockState.BOTTOM */);
    });
});
//# sourceMappingURL=DockController.test.js.map

/***/ })

}]);