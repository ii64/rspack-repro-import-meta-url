"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_emulation_AdvancedApp_test_js"],{

/***/ "./panels/emulation/AdvancedApp.test.js":
/*!**********************************************!*\
  !*** ./panels/emulation/AdvancedApp.test.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/theme_support/theme_support.js */ "./ui/legacy/theme_support/theme_support.js");
/* harmony import */ var _emulation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./emulation.js */ "./panels/emulation/emulation.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('AdvancedApp', () => {
    beforeEach(async () => {
        await (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.deinitializeGlobalVars)();
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.registerSettingsForTest([{
                category: "GLOBAL" /* Common.Settings.SettingCategory.GLOBAL */,
                settingName: 'currentDockState',
                settingType: "enum" /* Common.Settings.SettingType.ENUM */,
                defaultValue: 'right',
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
        await (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.initializeGlobalVars)({ reset: false });
    });
    afterEach(async () => {
        await (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.deinitializeGlobalVars)();
    });
    it('updates colors node link on ColorThemeChanged', async () => {
        const advancedApp = _emulation_js__WEBPACK_IMPORTED_MODULE_5__.AdvancedApp.AdvancedApp.instance();
        assert.exists(advancedApp);
        const fetchColorsSpy = sinon.spy(_ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__.ThemeSupport.instance(), 'fetchColorsAndApplyHostTheme');
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.events.dispatchEventToListeners(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHostAPI.Events.ColorThemeChanged);
        assert.isTrue(fetchColorsSpy.called);
    });
});
//# sourceMappingURL=AdvancedApp.test.js.map

/***/ }),

/***/ "./panels/emulation/emulation.js":
/*!***************************************!*\
  !*** ./panels/emulation/emulation.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvancedApp: () => (/* reexport module object */ _AdvancedApp_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   DeviceModeToolbar: () => (/* reexport module object */ _DeviceModeToolbar_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   DeviceModeView: () => (/* reexport module object */ _DeviceModeView_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   DeviceModeWrapper: () => (/* reexport module object */ _DeviceModeWrapper_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   InspectedPagePlaceholder: () => (/* reexport module object */ _InspectedPagePlaceholder_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   MediaQueryInspector: () => (/* reexport module object */ _MediaQueryInspector_js__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _AdvancedApp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdvancedApp.js */ "./panels/emulation/AdvancedApp.js");
/* harmony import */ var _InspectedPagePlaceholder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InspectedPagePlaceholder.js */ "./panels/emulation/InspectedPagePlaceholder.js");
/* harmony import */ var _MediaQueryInspector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MediaQueryInspector.js */ "./panels/emulation/MediaQueryInspector.js");
/* harmony import */ var _DeviceModeToolbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DeviceModeToolbar.js */ "./panels/emulation/DeviceModeToolbar.js");
/* harmony import */ var _DeviceModeView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DeviceModeView.js */ "./panels/emulation/DeviceModeView.js");
/* harmony import */ var _DeviceModeWrapper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DeviceModeWrapper.js */ "./panels/emulation/DeviceModeWrapper.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.













//# sourceMappingURL=emulation.js.map

/***/ })

}]);