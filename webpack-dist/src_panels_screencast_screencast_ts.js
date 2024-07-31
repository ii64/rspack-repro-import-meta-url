"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_screencast_screencast_ts"],{

/***/ "./src/panels/screencast/ScreencastApp.ts":
/*!************************************************!*\
  !*** ./src/panels/screencast/ScreencastApp.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreencastApp: () => (/* binding */ ScreencastApp),
/* harmony export */   ScreencastAppProvider: () => (/* binding */ ScreencastAppProvider),
/* harmony export */   ToolbarButtonProvider: () => (/* binding */ ToolbarButtonProvider)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ScreencastView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ScreencastView.js */ "./src/panels/screencast/ScreencastView.ts");
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
    constructor() {
        Object.defineProperty(this, "enabledSetting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "toggleButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "rootSplitWidget", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "screenCaptureModel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "screencastView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "rootView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.enabledSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('screencast-enabled', true);
        this.toggleButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.ToolbarToggle(i18nString(UIStrings.toggleScreencast), 'devices');
        this.toggleButton.setToggled(this.enabledSetting.get());
        this.toggleButton.setEnabled(false);
        this.toggleButton.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.ToolbarButton.Events.Click, this.toggleButtonClicked, this);
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


/***/ }),

/***/ "./src/panels/screencast/screencast.ts":
/*!*********************************************!*\
  !*** ./src/panels/screencast/screencast.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputModel: () => (/* reexport module object */ _InputModel_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   ScreencastApp: () => (/* reexport module object */ _ScreencastApp_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   ScreencastView: () => (/* reexport module object */ _ScreencastView_js__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _InputModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputModel.js */ "./src/panels/screencast/InputModel.ts");
/* harmony import */ var _ScreencastApp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScreencastApp.js */ "./src/panels/screencast/ScreencastApp.ts");
/* harmony import */ var _ScreencastView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScreencastView.js */ "./src/panels/screencast/ScreencastView.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






/***/ })

}]);