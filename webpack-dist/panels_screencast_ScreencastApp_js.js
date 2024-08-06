"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_screencast_ScreencastApp_js"],{

/***/ "./panels/screencast/ScreencastApp.js":
/*!********************************************!*\
  !*** ./panels/screencast/ScreencastApp.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreencastApp: () => (/* binding */ ScreencastApp),
/* harmony export */   ScreencastAppProvider: () => (/* binding */ ScreencastAppProvider),
/* harmony export */   ToolbarButtonProvider: () => (/* binding */ ToolbarButtonProvider)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ScreencastView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ScreencastView.js */ "./panels/screencast/ScreencastView.js");
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const UIStrings = {
    /**
     *@description Tooltip text that appears when hovering over largeicon phone button in Screencast App of the Remote Devices tab when toggling screencast
     */
    toggleScreencast: 'Toggle screencast',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/screencast/ScreencastApp.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
let appInstance;
class ScreencastApp {
    enabledSetting;
    toggleButton;
    rootSplitWidget;
    screenCaptureModel;
    screencastView;
    rootView;
    constructor() {
        this.enabledSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('screencast-enabled', true);
        this.toggleButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.ToolbarToggle(i18nString(UIStrings.toggleScreencast), 'devices');
        this.toggleButton.setToggled(this.enabledSetting.get());
        this.toggleButton.setEnabled(false);
        this.toggleButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, this.toggleButtonClicked, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ScreenCaptureModel.ScreenCaptureModel, this);
    }
    static instance() {
        if (!appInstance) {
            appInstance = new ScreencastApp();
        }
        return appInstance;
    }
    presentUI(document) {
        this.rootView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.RootView.RootView();
        this.rootSplitWidget =
            new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.SplitWidget.SplitWidget(false, true, 'inspector-view.screencast-split-view-state', 300, 300);
        this.rootSplitWidget.setVertical(true);
        this.rootSplitWidget.setSecondIsSidebar(true);
        this.rootSplitWidget.show(this.rootView.element);
        this.rootSplitWidget.hideMain();
        this.rootSplitWidget.setSidebarWidget(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.InspectorView.InspectorView.instance());
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.InspectorView.InspectorView.instance().setOwnerSplit(this.rootSplitWidget);
        this.rootView.attachToDocument(document);
        this.rootView.focus();
    }
    modelAdded(screenCaptureModel) {
        if (screenCaptureModel.target() !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().primaryPageTarget()) {
            return;
        }
        this.screenCaptureModel = screenCaptureModel;
        this.toggleButton.setEnabled(true);
        this.screencastView = new _ScreencastView_js__WEBPACK_IMPORTED_MODULE_4__.ScreencastView(screenCaptureModel);
        if (this.rootSplitWidget) {
            this.rootSplitWidget.setMainWidget(this.screencastView);
        }
        this.screencastView.initialize();
        this.onScreencastEnabledChanged();
    }
    modelRemoved(screenCaptureModel) {
        if (this.screenCaptureModel !== screenCaptureModel) {
            return;
        }
        delete this.screenCaptureModel;
        this.toggleButton.setEnabled(false);
        if (this.screencastView) {
            this.screencastView.detach();
            delete this.screencastView;
        }
        this.onScreencastEnabledChanged();
    }
    toggleButtonClicked() {
        const enabled = !this.toggleButton.isToggled();
        this.enabledSetting.set(enabled);
        this.onScreencastEnabledChanged();
    }
    onScreencastEnabledChanged() {
        if (!this.rootSplitWidget) {
            return;
        }
        const enabled = Boolean(this.enabledSetting.get() && this.screencastView);
        this.toggleButton.setToggled(enabled);
        if (enabled) {
            this.rootSplitWidget.showBoth();
        }
        else {
            this.rootSplitWidget.hideMain();
        }
    }
}
let toolbarButtonProviderInstance;
class ToolbarButtonProvider {
    static instance(opts = { forceNew: false }) {
        const { forceNew } = opts;
        if (!toolbarButtonProviderInstance || forceNew) {
            toolbarButtonProviderInstance = new ToolbarButtonProvider();
        }
        return toolbarButtonProviderInstance;
    }
    item() {
        return ScreencastApp.instance().toggleButton;
    }
}
let screencastAppProviderInstance;
class ScreencastAppProvider {
    static instance(opts = { forceNew: false }) {
        const { forceNew } = opts;
        if (!screencastAppProviderInstance || forceNew) {
            screencastAppProviderInstance = new ScreencastAppProvider();
        }
        return screencastAppProviderInstance;
    }
    createApp() {
        return ScreencastApp.instance();
    }
}
//# sourceMappingURL=ScreencastApp.js.map

/***/ })

}]);