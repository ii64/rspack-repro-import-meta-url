"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_quick_open_CommandMenu_test_js"], {
"./ui/legacy/components/quick_open/CommandMenu.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _quick_open_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quick_open.js */ "./ui/legacy/components/quick_open/quick_open.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




function createCommandMenuProvider(deprecationNotice) {
    var setting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createFakeSetting)('test-setting', false);
    setting.setRegistration({
        settingName: 'test-setting',
        settingType: "boolean" /* Common.SettingRegistration.SettingType.BOOLEAN */ ,
        category: "APPEARANCE" /* Common.SettingRegistration.SettingCategory.APPEARANCE */ ,
        defaultValue: false,
        deprecationNotice: deprecationNotice
    });
    var command = _quick_open_js__WEBPACK_IMPORTED_MODULE_3__.CommandMenu.CommandMenu.createSettingCommand(setting, _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Test Set Value'), true);
    var provider = new _quick_open_js__WEBPACK_IMPORTED_MODULE_3__.CommandMenu.CommandMenuProvider([
        command
    ]);
    return {
        setting: setting,
        provider: provider,
        command: command
    };
}
var warning = function() {
    return 'Deprecation Warning';
};
function setupElements() {
    var toplevel = document.createElement('div');
    var container = toplevel.createChild('div');
    var title = container.createChild('div');
    var subtitle = container.createChild('div');
    return {
        toplevel: toplevel,
        container: container,
        title: title,
        subtitle: subtitle
    };
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithLocale)('CommandMenu', function() {
    var elements;
    beforeEach(function() {
        elements = setupElements();
    });
    afterEach(function() {
        var toplevel = elements.toplevel, container = elements.container, title = elements.title, subtitle = elements.subtitle;
        subtitle.remove();
        title.remove();
        container.remove();
        toplevel.remove();
    });
    it('shows a deprecation warning for deprecated settings', function() {
        var deprecation = {
            disabled: true,
            warning: warning
        };
        var provider = createCommandMenuProvider(deprecation).provider;
        provider.renderItem(0, 'Test', elements.title, elements.subtitle);
        var tags = Array.from(elements.toplevel.querySelectorAll('.deprecated-tag'));
        try {
            assert.deepEqual(tags.map(function(e) {
                return e.textContent;
            }), [
                '— deprecated'
            ]);
            assert.deepEqual(tags[0].title, 'Deprecation Warning');
        } finally{}
    });
    it('reveals the setting when calling a deprecated setting', function() {
        var deprecation = {
            disabled: true,
            warning: warning
        };
        var _createCommandMenuProvider = createCommandMenuProvider(deprecation), setting = _createCommandMenuProvider.setting, command = _createCommandMenuProvider.command;
        var reveal = sinon.stub(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.RevealerRegistry.prototype, 'reveal');
        command.execute();
        assert.isTrue(reveal.calledOnceWithExactly(setting, false), 'Revealer was either not called or was called with unexpected arguments');
    });
}); //# sourceMappingURL=CommandMenu.test.js.map


}),

}]);