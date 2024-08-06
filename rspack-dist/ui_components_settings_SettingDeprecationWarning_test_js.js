"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_settings_SettingDeprecationWarning_test_js"], {
"./ui/components/settings/SettingDeprecationWarning.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.js */ "./ui/components/settings/settings.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



function createWarningElement(deprecationNotice) {
    var _component_shadowRoot;
    var registration = {
        settingName: 'boolean',
        settingType: "boolean" /* Common.Settings.SettingType.BOOLEAN */ ,
        defaultValue: false,
        deprecationNotice: deprecationNotice
    };
    var component = new _settings_js__WEBPACK_IMPORTED_MODULE_2__.SettingDeprecationWarning.SettingDeprecationWarning();
    component.data = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Deprecation(registration);
    var element = (_component_shadowRoot = component.shadowRoot) === null || _component_shadowRoot === void 0 ? void 0 : _component_shadowRoot.firstElementChild;
    return {
        component: component,
        element: element
    };
}
var warning = function() {
    return 'Warning';
};
var EXPERIMENT_NAME = 'testExperiment';
describe('SettingDeprecationWarning', function() {
    beforeEach(function() {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.clearForTest();
    });
    afterEach(function() {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.clearForTest();
    });
    it('shows the warning tooltip', function() {
        var element = createWarningElement({
            disabled: true,
            warning: warning
        }).element;
        assert.deepEqual(element === null || element === void 0 ? void 0 : element.title, warning());
    });
    it('is clickable when disabled and associated with an experiment', function() {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.register(EXPERIMENT_NAME, EXPERIMENT_NAME);
        var element = createWarningElement({
            disabled: true,
            warning: warning,
            experiment: EXPERIMENT_NAME
        }).element;
        assert.exists(element);
        assert.include(Array.from(element.classList.values()), 'clickable');
    });
    it('is not clickable when not disabled and associated with an experiment', function() {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.register(EXPERIMENT_NAME, EXPERIMENT_NAME);
        var element = createWarningElement({
            disabled: false,
            warning: warning,
            experiment: EXPERIMENT_NAME
        }).element;
        assert.exists(element);
        assert.notInclude(Array.from(element.classList.values()), 'clickable');
    });
    it('reveals the associated experiment on click', function() {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.register(EXPERIMENT_NAME, EXPERIMENT_NAME);
        var experiment = _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.allConfigurableExperiments().find(function(e) {
            return e.name === EXPERIMENT_NAME;
        });
        assert.exists(experiment);
        var element = createWarningElement({
            disabled: true,
            warning: warning,
            experiment: EXPERIMENT_NAME
        }).element;
        var reveal = sinon.stub(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.RevealerRegistry.prototype, 'reveal').resolves();
        assert.exists(element);
        element.click();
        assert.isTrue(reveal.calledOnceWithExactly(experiment, false), 'Revealer was either not called or was called with unexpected arguments');
    });
}); //# sourceMappingURL=SettingDeprecationWarning.test.js.map


}),

}]);