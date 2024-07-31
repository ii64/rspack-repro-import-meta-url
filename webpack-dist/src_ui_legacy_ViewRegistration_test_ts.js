"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_legacy_ViewRegistration_test_ts"],{

/***/ "./src/ui/legacy/ViewRegistration.test.ts":
/*!************************************************!*\
  !*** ./src/ui/legacy/ViewRegistration.test.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _components_quick_open_quick_open_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/quick_open/quick_open.js */ "./src/ui/legacy/components/quick_open/quick_open.ts");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./legacy.js */ "./src/ui/legacy/legacy.ts");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




class MockView extends _legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.Widget {
    resolveLocation(_location) {
        return _legacy_js__WEBPACK_IMPORTED_MODULE_3__.ViewManager.ViewManager.instance().createStackLocation();
    }
}
const viewId = 'mock-view';
const viewTitle = 'Mock';
const commandPrompt = 'Show Mock';
const order = 10;
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('ViewRegistration', () => {
    before(() => {
        _legacy_js__WEBPACK_IMPORTED_MODULE_3__.ViewManager.registerViewExtension({
            location: _legacy_js__WEBPACK_IMPORTED_MODULE_3__.ViewManager.ViewLocationValues.PANEL,
            id: viewId,
            commandPrompt: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString(commandPrompt),
            title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString(viewTitle),
            order,
            persistence: _legacy_js__WEBPACK_IMPORTED_MODULE_3__.ViewManager.ViewPersistence.PERMANENT,
            hasToolbar: false,
            async loadView() {
                return new MockView();
            },
        });
        // The location resolver needs to be registered to add the command to show a view
        // from the command menu.
        _legacy_js__WEBPACK_IMPORTED_MODULE_3__.ViewManager.registerLocationResolver({
            name: _legacy_js__WEBPACK_IMPORTED_MODULE_3__.ViewManager.ViewLocationValues.PANEL,
            category: _legacy_js__WEBPACK_IMPORTED_MODULE_3__.ViewManager.ViewLocationCategory.PANEL,
            async loadResolver() {
                return new MockView();
            },
        });
    });
    it('retrieves a registered view', async () => {
        const preRegisteredView = _legacy_js__WEBPACK_IMPORTED_MODULE_3__.ViewManager.ViewManager.instance().view(viewId);
        const mockWidget = await preRegisteredView.widget();
        assert.instanceOf(mockWidget, MockView, 'View did not load correctly');
        assert.strictEqual(preRegisteredView.title(), viewTitle, 'View title is not returned correctly');
        assert.strictEqual(preRegisteredView.commandPrompt(), commandPrompt, 'Command for view is not returned correctly');
    });
    it('adds command for showing a pre registered view', () => {
        const allCommands = _components_quick_open_quick_open_js__WEBPACK_IMPORTED_MODULE_2__.CommandMenu.CommandMenu.instance({ forceNew: true }).commands();
        const filteredCommands = allCommands.filter(command => command.title === commandPrompt && command.isPanelOrDrawer === _components_quick_open_quick_open_js__WEBPACK_IMPORTED_MODULE_2__.CommandMenu.PanelOrDrawer.PANEL);
        assert.strictEqual(filteredCommands.length, 1, 'Command for showing a preregistered view was not added correctly');
    });
    it('deletes a registered view using its id', () => {
        const removalResult = _legacy_js__WEBPACK_IMPORTED_MODULE_3__.ViewManager.maybeRemoveViewExtension(viewId);
        assert.isTrue(removalResult);
        assert.doesNotThrow(() => {
            _legacy_js__WEBPACK_IMPORTED_MODULE_3__.ViewManager.registerViewExtension({
                id: viewId,
                commandPrompt: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString(commandPrompt),
                title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString(viewTitle),
                async loadView() {
                    return new MockView();
                },
            });
        });
    });
});


/***/ })

}]);