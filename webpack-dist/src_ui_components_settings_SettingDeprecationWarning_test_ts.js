"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_settings_SettingDeprecationWarning_test_ts"],{

/***/ "./src/ui/components/settings/SettingDeprecationWarning.test.ts":
/*!**********************************************************************!*\
  !*** ./src/ui/components/settings/SettingDeprecationWarning.test.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.js */ "./src/ui/components/settings/settings.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



function createWarningElement(deprecationNotice) {
    const registration = {
        settingName: 'boolean',
        settingType: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.BOOLEAN,
        defaultValue: false,
        deprecationNotice,
    };
    const component = new _settings_js__WEBPACK_IMPORTED_MODULE_2__.SettingDeprecationWarning.SettingDeprecationWarning();
    component.data = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Deprecation(registration);
    const element = component.shadowRoot?.firstElementChild;
    return { component, element };
}
const warning = () => 'Warning';
const EXPERIMENT_NAME = 'testExperiment';
describe('SettingDeprecationWarning', () => {
    beforeEach(() => {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.clearForTest();
    });
    afterEach(() => {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.clearForTest();
    });
    it('shows the warning tooltip', () => {
        const { element } = createWarningElement({ disabled: true, warning });
        assert.deepEqual(element?.title, warning());
    });
    it('is clickable when disabled and associated with an experiment', () => {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.register(EXPERIMENT_NAME, EXPERIMENT_NAME);
        const { element } = createWarningElement({ disabled: true, warning, experiment: EXPERIMENT_NAME });
        assert.exists(element);
        assert.include(Array.from(element.classList.values()), 'clickable');
    });
    it('is not clickable when not disabled and associated with an experiment', () => {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.register(EXPERIMENT_NAME, EXPERIMENT_NAME);
        const { element } = createWarningElement({ disabled: false, warning, experiment: EXPERIMENT_NAME });
        assert.exists(element);
        assert.notInclude(Array.from(element.classList.values()), 'clickable');
    });
    it('reveals the associated experiment on click', () => {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.register(EXPERIMENT_NAME, EXPERIMENT_NAME);
        const experiment = _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.allConfigurableExperiments().find(e => e.name === EXPERIMENT_NAME);
        assert.exists(experiment);
        const { element } = createWarningElement({ disabled: true, warning, experiment: EXPERIMENT_NAME });
        const reveal = sinon.stub(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.RevealerRegistry.prototype, 'reveal').resolves();
        assert.exists(element);
        element.click();
        assert.isTrue(reveal.calledOnceWithExactly(experiment, false), 'Revealer was either not called or was called with unexpected arguments');
    });
});


/***/ })

}]);