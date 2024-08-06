"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_quick_open_FilteredListWidget_test_js"],{

/***/ "./ui/legacy/components/quick_open/FilteredListWidget.test.js":
/*!********************************************************************!*\
  !*** ./ui/legacy/components/quick_open/FilteredListWidget.test.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _quick_open_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quick_open.js */ "./ui/legacy/components/quick_open/quick_open.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





function createCommandMenuProvider(inputs) {
    const setting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createFakeSetting)('test-setting', false);
    setting.setRegistration({
        settingName: 'test-setting',
        settingType: "boolean" /* Common.SettingRegistration.SettingType.BOOLEAN */,
        category: "APPEARANCE" /* Common.SettingRegistration.SettingCategory.APPEARANCE */,
        defaultValue: false,
    });
    const provider = new _quick_open_js__WEBPACK_IMPORTED_MODULE_4__.CommandMenu.CommandMenuProvider(inputs.map(input => _quick_open_js__WEBPACK_IMPORTED_MODULE_4__.CommandMenu.CommandMenu.createSettingCommand(setting, _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString(input), true)));
    return provider;
}
async function testMatch(inputs, query, expectedSelection, expectedMatches) {
    const provider = createCommandMenuProvider(inputs);
    const selectItem = sinon.spy(provider, 'selectItem');
    const listModelReplaceAll = sinon.spy(_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListModel.ListModel.prototype, 'replaceAll');
    const history = [];
    const filteredListWidget = new _quick_open_js__WEBPACK_IMPORTED_MODULE_4__.FilteredListWidget.FilteredListWidget(provider, history, () => undefined);
    await filteredListWidget.setQuery(query);
    // FilteredListWidget.scheduleFilter uses setTimeout.
    await new Promise(resolve => window.setTimeout(resolve, 0));
    const keyboardEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    filteredListWidget.contentElement.dispatchEvent(keyboardEvent);
    assert.deepEqual([query], history);
    assert.strictEqual(1, selectItem.callCount);
    assert.strictEqual(expectedSelection, selectItem.lastCall.args[0]);
    assert.deepEqual(expectedMatches, listModelReplaceAll.lastCall.args[0]);
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithLocale)('FilteredListWidget', () => {
    beforeEach(() => {
        sinon.reset();
    });
    it('set query to select item and type Enter', async () => {
        const provider = createCommandMenuProvider([
            'first setting',
            'second setting',
            'third setting',
        ]);
        const selectItem = sinon.spy(provider, 'selectItem');
        let callCount = 0;
        async function testSetting(query, expectation) {
            const filteredListWidget = new _quick_open_js__WEBPACK_IMPORTED_MODULE_4__.FilteredListWidget.FilteredListWidget(provider, [], () => undefined);
            await filteredListWidget.setQuery(query);
            // FilteredListWidget.scheduleFilter uses setTimeout.
            await new Promise(resolve => window.setTimeout(resolve, 0));
            const keyboardEvent = new KeyboardEvent('keydown', { key: 'Enter' });
            filteredListWidget.contentElement.dispatchEvent(keyboardEvent);
            assert.strictEqual(++callCount, selectItem.callCount);
            assert.strictEqual(expectation, selectItem.lastCall.args[0]);
        }
        await testSetting('third', 2);
        await testSetting('second', 1);
        await testSetting('first', 0);
    });
    it('type Enter when no item has been selected', () => {
        const provider = createCommandMenuProvider([
            'setting a',
            'setting b',
            'setting c',
        ]);
        const selectItem = sinon.spy(provider, 'selectItem');
        const filteredListWidget = new _quick_open_js__WEBPACK_IMPORTED_MODULE_4__.FilteredListWidget.FilteredListWidget(provider, [], () => undefined);
        const keyboardEvent = new KeyboardEvent('keydown', { key: 'Enter' });
        filteredListWidget.contentElement.dispatchEvent(keyboardEvent);
        assert.isTrue(selectItem.notCalled);
    });
    it('empty query matches everything', async () => {
        await testMatch(['a', 'bc'], '', 0, [0, 1]);
    });
    it('case-insensitive matching: upper case', async () => {
        await testMatch(['abc', 'acB'], 'aB', 0, [0, 1]);
    });
    it('case-insensitive matching: lower case', async () => {
        await testMatch(['abc', 'bac', 'a_B'], 'ab', 0, [0, 2]);
    });
    it('duplicate symbols in matching', async () => {
        await testMatch(['abab', 'abaa', 'caab', 'baac', 'fooaab'], 'aab', 2, [2, 4, 0]);
    });
    it('ranking by score', async () => {
        await testMatch(['fxxxoxxxo', 'barforo', 'foobar', 'fxoxoxo'], 'foo', 2, [2, 1, 0, 3]);
    });
    it('dangerous input escaping', async () => {
        await testMatch(['^[]{}()\\.$*+?|', '0123456789abcdef'], '^[]{}()\\.$*+?|', 0, [0]);
    });
});
//# sourceMappingURL=FilteredListWidget.test.js.map

/***/ })

}]);