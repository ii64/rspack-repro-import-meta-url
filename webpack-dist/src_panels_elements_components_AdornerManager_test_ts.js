"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_components_AdornerManager_test_ts"],{

/***/ "./src/panels/elements/components/AdornerManager.test.ts":
/*!***************************************************************!*\
  !*** ./src/panels/elements/components/AdornerManager.test.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components.js */ "./src/panels/elements/components/components.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FakeSettingStore_store;

class FakeSettingStore {
    constructor(store) {
        _FakeSettingStore_store.set(this, void 0);
        __classPrivateFieldSet(this, _FakeSettingStore_store, store, "f");
    }
    get() {
        return __classPrivateFieldGet(this, _FakeSettingStore_store, "f");
    }
    set(settings) {
        __classPrivateFieldSet(this, _FakeSettingStore_store, settings, "f");
    }
}
_FakeSettingStore_store = new WeakMap();
describe('AdornerManager', () => {
    it('can sync badge settings with the settings store correctly', () => {
        const nonexistentAdorner = '__SHOULD_NEVER_EXIST__';
        const settingStore = new FakeSettingStore([
            {
                adorner: nonexistentAdorner,
                isEnabled: true,
            },
        ]);
        const adornerManager = new _components_js__WEBPACK_IMPORTED_MODULE_0__.AdornerManager.AdornerManager(settingStore);
        const syncedSettings = adornerManager.getSettings();
        assert.isFalse(syncedSettings.has(nonexistentAdorner), 'setting-syncing should remove nonexistent adorners from setting store');
        for (const { adorner, isEnabled } of _components_js__WEBPACK_IMPORTED_MODULE_0__.AdornerManager.DefaultAdornerSettings) {
            assert.isTrue(syncedSettings.has(adorner), 'synced settings should contain default adorners');
            assert.strictEqual(syncedSettings.get(adorner), isEnabled, 'synced default setting should store the correct value');
        }
        assert.sameDeepMembers(settingStore.get(), _components_js__WEBPACK_IMPORTED_MODULE_0__.AdornerManager.DefaultAdornerSettings, 'the setting store should be persisted with the updated settings');
    });
    it('can preserve persisted setting after syncing', () => {
        const { adorner, isEnabled } = _components_js__WEBPACK_IMPORTED_MODULE_0__.AdornerManager.DefaultAdornerSettings[0];
        const updatedSetting = !isEnabled;
        const adornerManager = new _components_js__WEBPACK_IMPORTED_MODULE_0__.AdornerManager.AdornerManager(new FakeSettingStore([
            {
                adorner,
                isEnabled: updatedSetting,
            },
        ]));
        assert.isTrue(adornerManager.getSettings().has(adorner), 'synced settings should contain existing adorners');
        assert.strictEqual(adornerManager.isAdornerEnabled(adorner), updatedSetting, 'synced setting should preserve previously persisted value');
    });
    it('can update settings to be persisted', () => {
        const { adorner, isEnabled } = _components_js__WEBPACK_IMPORTED_MODULE_0__.AdornerManager.DefaultAdornerSettings[0];
        const updatedSetting = !isEnabled;
        const settingStore = new FakeSettingStore([]);
        const adornerManager = new _components_js__WEBPACK_IMPORTED_MODULE_0__.AdornerManager.AdornerManager(settingStore);
        adornerManager.updateSettings(new Map([
            [adorner, updatedSetting],
        ]));
        assert.isTrue(adornerManager.getSettings().has(adorner), 'badge setting should still exist after update');
        assert.strictEqual(adornerManager.isAdornerEnabled(adorner), updatedSetting, 'badge setting should be updated in the manager');
        assert.deepOwnInclude(settingStore.get(), {
            adorner,
            isEnabled: updatedSetting,
        }, 'badge setting update should be persisted to the setting store');
    });
});


/***/ })

}]);