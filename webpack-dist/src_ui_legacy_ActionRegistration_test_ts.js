"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_legacy_ActionRegistration_test_ts"],{

/***/ "./src/ui/legacy/ActionRegistration.test.ts":
/*!**************************************************!*\
  !*** ./src/ui/legacy/ActionRegistration.test.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _components_quick_open_quick_open_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/quick_open/quick_open.js */ "./src/ui/legacy/components/quick_open/quick_open.ts");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./legacy.js */ "./src/ui/legacy/legacy.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithEnvironment)('ActionRegistration', () => {
    it('toggling settings affects registered actions', () => {
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.registerSettingExtension({
            settingName: 'test-setting',
            settingType: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.BOOLEAN,
            defaultValue: false,
        });
        // Force new instance for the setting extension to apply.
        const dummyStorage = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingsStorage({});
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance({
            forceNew: true,
            syncedStorage: dummyStorage,
            globalStorage: dummyStorage,
            localStorage: dummyStorage,
        });
        _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistration.registerActionExtension({
            actionId: 'test-action',
            category: _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistration.ActionCategory.GLOBAL,
            setting: 'test-setting',
        });
        let list = _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistration.getRegisteredActionExtensions();
        assert.lengthOf(list, 0);
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.moduleSetting('test-setting').set(true);
        list = _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistration.getRegisteredActionExtensions();
        assert.lengthOf(list, 1);
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.moduleSetting('test-setting').set(false);
        list = _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistration.getRegisteredActionExtensions();
        assert.lengthOf(list, 0);
    });
});
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithEnvironment)('ActionRegistration', () => {
    let actionExecuted = false;
    const actionTitle = 'Mock action';
    const actionId = 'mock.action';
    class MockActionDelegate {
        handleAction(_context, _actionId) {
            actionExecuted = true;
            return actionExecuted;
        }
    }
    class MockContextType {
    }
    before(async () => {
        _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistration.registerActionExtension({
            actionId,
            category: _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistration.ActionCategory.ELEMENTS,
            title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedLazyString(actionTitle),
            async loadActionDelegate() {
                return new MockActionDelegate();
            },
            contextTypes() {
                return [MockContextType];
            },
        });
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.experiments.clearForTest();
        await (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.initializeGlobalVars)();
        // A ShortcutRegistry instance is needed to add a command to execute an action to the
        // command menu and an instance of ActionRegistry is needed to instatiate the ShorcutRegistry.
        const actionRegistryInstance = _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistry.ActionRegistry.instance({ forceNew: true });
        _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ShortcutRegistry.ShortcutRegistry.instance({ forceNew: true, actionRegistry: actionRegistryInstance });
        _legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().setFlavor(MockContextType, new MockContextType());
    });
    after(async () => {
        await (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.deinitializeGlobalVars)();
        _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistry.ActionRegistry.reset();
        _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ShortcutRegistry.ShortcutRegistry.removeInstance();
        _legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().setFlavor(MockContextType, null);
    });
    describe('hasAction', () => {
        it('yields true for a registered action', () => {
            assert.isTrue(_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistry.ActionRegistry.instance().hasAction(actionId));
        });
        it('yields false for an unknown action', () => {
            assert.isFalse(_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistry.ActionRegistry.instance().hasAction('foo'));
        });
    });
    describe('getAction', () => {
        it('retrieves a registered action', () => {
            const preRegisteredAction = _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistry.ActionRegistry.instance().getAction(actionId);
            assert.strictEqual(preRegisteredAction.title(), actionTitle, 'Action title is not returned correctly');
        });
        it('throws for unknown actions', () => {
            assert.throws(() => _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistry.ActionRegistry.instance().getAction('foo'));
        });
    });
    it('finds a pre registered action as available when its context types are in the current context flavors', () => {
        const availableActions = _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistry.ActionRegistry.instance().availableActions().map(action => action.id());
        assert.notStrictEqual(availableActions.indexOf(actionId), -1);
    });
    it('executes a pre registered action', async () => {
        actionExecuted = false;
        const preRegisteredAction = _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistry.ActionRegistry.instance().getAction(actionId);
        await preRegisteredAction.execute();
        assert.isTrue(actionExecuted, 'Action was not executed');
    });
    it('executes a pre registered from the command menu', async () => {
        actionExecuted = false;
        const commandMenuProvider = new _components_quick_open_quick_open_js__WEBPACK_IMPORTED_MODULE_4__.CommandMenu.CommandMenuProvider();
        commandMenuProvider.attach();
        for (let i = 0; i < commandMenuProvider.itemCount(); ++i) {
            if (commandMenuProvider.itemKeyAt(i).includes(actionTitle)) {
                await commandMenuProvider.selectItem(i, '');
            }
        }
        assert.isTrue(actionExecuted, 'Action was not executed from CommandMenu');
    });
    it('throws an error trying to register a duplicated view id', () => {
        assert.throws(() => {
            _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistration.registerActionExtension({
                actionId,
                category: _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistration.ActionCategory.ELEMENTS,
            });
        });
    });
    it('throws an error trying to register an action with an invalid id', () => {
        assert.throws(() => {
            _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistration.registerActionExtension({
                actionId: 'quickOpen.show',
                category: _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistration.ActionCategory.GLOBAL,
            });
        });
    });
    it('does not find a pre registered action as available when its context types are not in the current context flavors', () => {
        _legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().setFlavor(MockContextType, null);
        const availableActions = _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistry.ActionRegistry.instance().availableActions().map(action => action.id());
        assert.strictEqual(availableActions.indexOf(actionId), -1);
    });
    it('deletes a registered action using its id', () => {
        const removalResult = _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistration.maybeRemoveActionExtension(actionId);
        assert.isTrue(removalResult);
        assert.doesNotThrow(() => {
            _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistration.registerActionExtension({
                actionId,
                category: _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistration.ActionCategory.ELEMENTS,
            });
        });
    });
});


/***/ })

}]);