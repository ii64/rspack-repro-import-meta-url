"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["entrypoints_main_MainImpl_test_js"],{

/***/ "./entrypoints/main/MainImpl.test.js":
/*!*******************************************!*\
  !*** ./entrypoints/main/MainImpl.test.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/ContextMenuHelpers.js */ "./testing/ContextMenuHelpers.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main.js */ "./entrypoints/main/main.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('MainMenuItem', () => {
    beforeEach(async () => {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.stubNoopSettings)();
        sinon.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ShortcutRegistry.ShortcutRegistry, 'instance').returns({
            shortcutTitleForAction: () => { },
            shortcutsForAction: () => [],
        });
        const tabTaget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Tab });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({ parentTarget: tabTaget, subtype: 'prerender' });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({ parentTarget: tabTaget });
        sinon.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ActionRegistry.ActionRegistry.instance(), 'hasAction')
            .withArgs(sinon.match(/inspector-main.focus-debuggee|main.toggle-drawer/))
            .returns(true);
        sinon.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ActionRegistry.ActionRegistry.instance(), 'getAction')
            .withArgs(sinon.match(/inspector-main.focus-debuggee|main.toggle-drawer/))
            .returns(sinon.createStubInstance(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ActionRegistration.Action));
    });
    it('includes focus debuggee item when undocked', async () => {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.DockController.DockController.instance().setDockSide("undocked" /* UI.DockController.DockState.UNDOCKED */);
        const item = _main_js__WEBPACK_IMPORTED_MODULE_5__.MainImpl.MainMenuItem.instance({ forceNew: true }).item();
        const menu = (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getMenuForToolbarButton)(item);
        assert.exists(menu.defaultSection().items.find((item) => item.buildDescriptor().label === 'Focus page'));
    });
    it('does not include focus debuggee item when docked', async () => {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.DockController.DockController.instance().setDockSide("bottom" /* UI.DockController.DockState.BOTTOM */);
        const item = _main_js__WEBPACK_IMPORTED_MODULE_5__.MainImpl.MainMenuItem.instance({ forceNew: true }).item();
        assert.exists(item);
        const contextMenuShow = sinon.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ContextMenu.ContextMenu.prototype, 'show').resolves();
        item.clicked(new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));
        assert.isTrue(contextMenuShow.calledOnce);
        assert.notExists(contextMenuShow.thisValues[0].defaultSection().items.find((item) => item.buildDescriptor().label === 'Focus page'));
    });
});
//# sourceMappingURL=MainImpl.test.js.map

/***/ }),

/***/ "./testing/ContextMenuHelpers.js":
/*!***************************************!*\
  !*** ./testing/ContextMenuHelpers.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findMenuItemWithLabel: () => (/* binding */ findMenuItemWithLabel),
/* harmony export */   getContextMenuForElement: () => (/* binding */ getContextMenuForElement),
/* harmony export */   getMenuForShiftClick: () => (/* binding */ getMenuForShiftClick),
/* harmony export */   getMenuForToolbarButton: () => (/* binding */ getMenuForToolbarButton),
/* harmony export */   getMenuItemLabels: () => (/* binding */ getMenuItemLabels)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function getMenu(action) {
    const sandbox = sinon.createSandbox();
    const contextMenuShow = sandbox.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.ContextMenu.ContextMenu.prototype, 'show').resolves();
    action();
    sandbox.restore();
    return contextMenuShow.thisValues[0];
}
function getMenuForToolbarButton(button) {
    return getMenu(() => {
        button.clicked(new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));
    });
}
function findMenuItemWithLabel(section, label) {
    return section.items.find((item) => item.buildDescriptor().label === label);
}
function getMenuItemLabels(section) {
    return section.items.map((item) => item.buildDescriptor().label);
}
function getContextMenuForElement(element, target) {
    return getMenu(() => {
        const event = new MouseEvent('contextmenu', { bubbles: true });
        if (target) {
            sinon.stub(event, 'target').value(target);
        }
        element.dispatchEvent(event);
    });
}
function getMenuForShiftClick(element) {
    return getMenu(() => {
        element.dispatchEvent(new MouseEvent('click', { shiftKey: true }));
    });
}
//# sourceMappingURL=ContextMenuHelpers.js.map

/***/ })

}]);