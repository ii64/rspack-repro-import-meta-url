"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_screencast_ScreencastApp_js"], {
"./panels/screencast/ScreencastApp.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ScreencastApp: function() { return ScreencastApp; },
  ScreencastAppProvider: function() { return ScreencastAppProvider; },
  ToolbarButtonProvider: function() { return ToolbarButtonProvider; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ScreencastView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ScreencastView.js */ "./panels/screencast/ScreencastView.js");
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}





var UIStrings = {
    /**
     *@description Tooltip text that appears when hovering over largeicon phone button in Screencast App of the Remote Devices tab when toggling screencast
     */ toggleScreencast: 'Toggle screencast'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/screencast/ScreencastApp.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var appInstance;
var ScreencastApp = /*#__PURE__*/ function() {
    "use strict";
    function ScreencastApp() {
        _class_call_check(this, ScreencastApp);
        _define_property(this, "enabledSetting", void 0);
        _define_property(this, "toggleButton", void 0);
        _define_property(this, "rootSplitWidget", void 0);
        _define_property(this, "screenCaptureModel", void 0);
        _define_property(this, "screencastView", void 0);
        _define_property(this, "rootView", void 0);
        this.enabledSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('screencast-enabled', true);
        this.toggleButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.ToolbarToggle(i18nString(UIStrings.toggleScreencast), 'devices');
        this.toggleButton.setToggled(this.enabledSetting.get());
        this.toggleButton.setEnabled(false);
        this.toggleButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , this.toggleButtonClicked, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ScreenCaptureModel.ScreenCaptureModel, this);
    }
    _create_class(ScreencastApp, [
        {
            key: "presentUI",
            value: function presentUI(document) {
                this.rootView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.RootView.RootView();
                this.rootSplitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.SplitWidget.SplitWidget(false, true, 'inspector-view.screencast-split-view-state', 300, 300);
                this.rootSplitWidget.setVertical(true);
                this.rootSplitWidget.setSecondIsSidebar(true);
                this.rootSplitWidget.show(this.rootView.element);
                this.rootSplitWidget.hideMain();
                this.rootSplitWidget.setSidebarWidget(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.InspectorView.InspectorView.instance());
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.InspectorView.InspectorView.instance().setOwnerSplit(this.rootSplitWidget);
                this.rootView.attachToDocument(document);
                this.rootView.focus();
            }
        },
        {
            key: "modelAdded",
            value: function modelAdded(screenCaptureModel) {
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
        },
        {
            key: "modelRemoved",
            value: function modelRemoved(screenCaptureModel) {
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
        },
        {
            key: "toggleButtonClicked",
            value: function toggleButtonClicked() {
                var enabled = !this.toggleButton.isToggled();
                this.enabledSetting.set(enabled);
                this.onScreencastEnabledChanged();
            }
        },
        {
            key: "onScreencastEnabledChanged",
            value: function onScreencastEnabledChanged() {
                if (!this.rootSplitWidget) {
                    return;
                }
                var enabled = Boolean(this.enabledSetting.get() && this.screencastView);
                this.toggleButton.setToggled(enabled);
                if (enabled) {
                    this.rootSplitWidget.showBoth();
                } else {
                    this.rootSplitWidget.hideMain();
                }
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                if (!appInstance) {
                    appInstance = new ScreencastApp();
                }
                return appInstance;
            }
        }
    ]);
    return ScreencastApp;
}();
var toolbarButtonProviderInstance;
var ToolbarButtonProvider = /*#__PURE__*/ function() {
    "use strict";
    function ToolbarButtonProvider() {
        _class_call_check(this, ToolbarButtonProvider);
    }
    _create_class(ToolbarButtonProvider, [
        {
            key: "item",
            value: function item() {
                return ScreencastApp.instance().toggleButton;
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    forceNew: false
                };
                var forceNew = opts.forceNew;
                if (!toolbarButtonProviderInstance || forceNew) {
                    toolbarButtonProviderInstance = new ToolbarButtonProvider();
                }
                return toolbarButtonProviderInstance;
            }
        }
    ]);
    return ToolbarButtonProvider;
}();
var screencastAppProviderInstance;
var ScreencastAppProvider = /*#__PURE__*/ function() {
    "use strict";
    function ScreencastAppProvider() {
        _class_call_check(this, ScreencastAppProvider);
    }
    _create_class(ScreencastAppProvider, [
        {
            key: "createApp",
            value: function createApp() {
                return ScreencastApp.instance();
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    forceNew: false
                };
                var forceNew = opts.forceNew;
                if (!screencastAppProviderInstance || forceNew) {
                    screencastAppProviderInstance = new ScreencastAppProvider();
                }
                return screencastAppProviderInstance;
            }
        }
    ]);
    return ScreencastAppProvider;
} //# sourceMappingURL=ScreencastApp.js.map
();


}),

}]);