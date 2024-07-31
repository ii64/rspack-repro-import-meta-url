"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_emulation_DeviceModeToolbar_ts"],{

/***/ "./src/panels/emulation/DeviceModeToolbar.ts":
/*!***************************************************!*\
  !*** ./src/panels/emulation/DeviceModeToolbar.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeviceModeToolbar: () => (/* binding */ DeviceModeToolbar)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/emulation/emulation.js */ "./src/models/emulation/emulation.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _mobile_throttling_mobile_throttling_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mobile_throttling/mobile_throttling.js */ "./src/panels/mobile_throttling/mobile_throttling.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/emulation/components/components.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './deviceModeToolbar.css.legacy.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.










const UIStrings = {
    /**
     * @description Title of the device dimensions selection iteam in the Device Mode Toolbar.
     * webpage in pixels.
     */
    dimensions: 'Dimensions',
    /**
     * @description Title of the width input textbox in the Device Mode Toolbar, for the width of the
     * webpage in pixels.
     */
    width: 'Width',
    /**
     * @description Title of the height input textbox in the Device Mode Toolbar, for the height of the
     * webpage in pixels. 'leave empty for full' is an instruction to the user - the webpage will be
     * full-height if this textbox is left empty.
     */
    heightLeaveEmptyForFull: 'Height (leave empty for full)',
    /**
     * @description Tooltip text for a drop-down menu where the user can select the zoom percentage of
     * the webpage preview.
     */
    zoom: 'Zoom',
    /**
     * @description Tooltip tip for a drop-down menu where the user can select the device pixel ratio
     * (the ratio between the physical pixels on a screen and CSS logical pixels) of the webpage
     * preview.
     */
    devicePixelRatio: 'Device pixel ratio',
    /**
     * @description Tooltip tip for a drop-down menu where the user can select the device type e.g.
     * Mobile, Desktop.
     */
    deviceType: 'Device type',
    /**
     * @description Tooltip text for a button to disable Experimental Web Platform Features when they are enabled.
     */
    experimentalWebPlatformFeature: '"`Experimental Web Platform Feature`" flag is enabled. Click to disable it.',
    /**
     * @description Tooltip text for a button to enable Experimental Web Platform Features when they are disabled.
     */
    experimentalWebPlatformFeatureFlag: '"`Experimental Web Platform Feature`" flag is disabled. Click to enable it.',
    /**
     * @description Tooltip text for a 'three dots' style menu button which shows an expanded set of options.
     */
    moreOptions: 'More options',
    /**
     * @description A context menu item in the Device Mode Toolbar. This is a command to resize the
     * webpage preview to fit the current window. The placeholder is the percentage of full-size that
     * will be displayed after fitting.
     * @example {30.0} PH1
     */
    fitToWindowF: 'Fit to window ({PH1}%)',
    /**
     * @description A checkbox setting that appears in the context menu for the zoom level, in the
     * Device Mode Toolbar.
     */
    autoadjustZoom: 'Auto-adjust zoom',
    /**
     * @description A menu item in the drop-down box that allows the user to select the device pixel
     * ratio. Labels the default value which varies between device types, represented by the
     * placeholder, which is a number. In the Device Mode Toolbar.
     * @example {4.3} PH1
     */
    defaultF: 'Default: {PH1}',
    /**
     * @description Command to hide the frame (like a picture frame) around the mobile device screen.
     */
    hideDeviceFrame: 'Hide device frame',
    /**
     * @description Command to show the frame (like a picture frame) around the mobile device screen.
     */
    showDeviceFrame: 'Show device frame',
    /**
     * @description Command to hide a display in the Device Mode Toolbar that shows the different media
     * queries for the device, above the device screen.
     * https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
     */
    hideMediaQueries: 'Hide media queries',
    /**
     * @description Command to show a display in the Device Mode Toolbar that shows the different media
     * queries for the device, above the device screen.
     * https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
     */
    showMediaQueries: 'Show media queries',
    /**
     * @description Command in the Device Mode Toolbar to hide a virtual ruler (for measuring),
     * displayed above and next to the device screen.
     */
    hideRulers: 'Hide rulers',
    /**
     * @description Command in the Device Mode Toolbar to show a virtual ruler (for measuring),
     * displayed above and next to the device screen.
     */
    showRulers: 'Show rulers',
    /**
     * @description Command in the Device Mode Toolbar to remove the drop-down menu from the toolbar
     * that lets the user override the device pixel ratio of the emulated device.
     */
    removeDevicePixelRatio: 'Remove device pixel ratio',
    /**
     * @description Command in the Device Mode Toolbar to add the drop-down menu to the toolbar
     * that lets the user override the device pixel ratio of the emulated device.
     */
    addDevicePixelRatio: 'Add device pixel ratio',
    /**
     * @description Command in the Device Mode Toolbar to add the drop-down menu to the toolbar
     * that lets the user set the device type (e.g. Desktop or Mobile).
     */
    removeDeviceType: 'Remove device type',
    /**
     * @description Command in the Device Mode Toolbar to add the drop-down menu to the toolbar
     * that lets the user add the device type (e.g. Desktop or Mobile).
     */
    addDeviceType: 'Add device type',
    /**
     * @description A context menu item in the Device Mode Toolbar that resets all settings back to
     * their default values.
     */
    resetToDefaults: 'Reset to defaults',
    /**
     * @description A menu command in the Device Mode Toolbar that closes DevTools.
     */
    closeDevtools: 'Close DevTools',
    /**
     * @description Title of the device selected in the Device Mode Toolbar. The 'response' device is
     * not a specific phone/tablet model but a virtual device that can change its height and width
     * dynamically by clicking and dragging the sides. 'Response' refers to response design:
     * https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design
     */
    responsive: 'Responsive',
    /**
     * @description A context menu item in the Device Mode Toolbar that takes the user to a new screen
     * where they can add/edit/remove custom devices.
     */
    edit: 'Edit…',
    /**
     * @description Text describing the current orientation of the phone/device (vs. landscape).
     */
    portrait: 'Portrait',
    /**
     * @description Text describing the current orientation of the phone/device (vs. portrait).
     */
    landscape: 'Landscape',
    /**
     * @description Title of button in the Device Mode Toolbar which rotates the device 90 degrees.
     */
    rotate: 'Rotate',
    /**
     * @description Fallback/default text used for the name of a custom device when no name has been
     * provided by the user.
     */
    none: 'None',
    /**
     * @description Tooltip of the rotate/screen orientation button.
     */
    screenOrientationOptions: 'Screen orientation options',
    /**
     * @description Tooltip for a button which turns on/off dual-screen mode, which emulates devices
     * like tablets which have two screens.
     */
    toggleDualscreenMode: 'Toggle dual-screen mode',
    /**
     * @description Tooltip tip for a drop-down menu where the user can select the device
     * posture e.g. Continuous, Folded.
     */
    devicePosture: 'Device posture',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/emulation/DeviceModeToolbar.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
/**
 * Even though the emulation panel uses all UI elements, the tooltips are not supported.
 * That's because the emulation elements are rendered around the page context, rather
 * than in the DevTools panel itself. Therefore, we need to fall back to using the
 * built-in tooltip by setting the title attribute on the button's element.
 */
function setTitleForButton(button, title) {
    button.setTitle(title);
    button.element.title = title;
}
class DeviceModeToolbar {
    constructor(model, showMediaInspectorSetting, showRulersSetting) {
        Object.defineProperty(this, "model", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "showMediaInspectorSetting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "showRulersSetting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "deviceOutlineSetting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "showDeviceScaleFactorSetting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "showUserAgentTypeSetting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "autoAdjustScaleSetting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "lastMode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "elementInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "emulatedDevicesList", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "persistenceSetting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "spanButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "postureItem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "modeButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "widthInput", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "heightInput", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "deviceScaleItem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "deviceSelectItem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "scaleItem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "uaItem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "experimentalButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cachedDeviceScale", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cachedUaType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "xItem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "throttlingConditionsItem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cachedModelType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cachedScale", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cachedModelDevice", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cachedModelMode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.model = model;
        this.showMediaInspectorSetting = showMediaInspectorSetting;
        this.showRulersSetting = showRulersSetting;
        this.deviceOutlineSetting = this.model.deviceOutlineSetting();
        this.showDeviceScaleFactorSetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('emulation.show-device-scale-factor', false);
        this.showDeviceScaleFactorSetting.addChangeListener(this.updateDeviceScaleFactorVisibility, this);
        this.showUserAgentTypeSetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('emulation.show-user-agent-type', false);
        this.showUserAgentTypeSetting.addChangeListener(this.updateUserAgentTypeVisibility, this);
        this.autoAdjustScaleSetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('emulation.auto-adjust-scale', true);
        this.lastMode = new Map();
        this.elementInternal = document.createElement('div');
        this.elementInternal.classList.add('device-mode-toolbar');
        this.elementInternal.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.toolbar('device-mode').track({ resize: true })}`);
        const leftContainer = this.elementInternal.createChild('div', 'device-mode-toolbar-spacer');
        leftContainer.createChild('div', 'device-mode-toolbar-spacer');
        const leftToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.Toolbar('', leftContainer);
        this.fillLeftToolbar(leftToolbar);
        const mainToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.Toolbar('', this.elementInternal);
        mainToolbar.makeWrappable();
        this.widthInput = new _components_components_js__WEBPACK_IMPORTED_MODULE_8__.DeviceSizeInputElement.SizeInputElement(i18nString(UIStrings.width), { jslogContext: 'width' });
        this.widthInput.addEventListener('sizechanged', ({ size: width }) => {
            if (this.autoAdjustScaleSetting.get()) {
                this.model.setWidthAndScaleToFit(width);
            }
            else {
                this.model.setWidth(width);
            }
        });
        this.heightInput = new _components_components_js__WEBPACK_IMPORTED_MODULE_8__.DeviceSizeInputElement.SizeInputElement(i18nString(UIStrings.heightLeaveEmptyForFull), { jslogContext: 'height' });
        this.heightInput.addEventListener('sizechanged', ({ size: height }) => {
            if (this.autoAdjustScaleSetting.get()) {
                this.model.setHeightAndScaleToFit(height);
            }
            else {
                this.model.setHeight(height);
            }
        });
        this.fillMainToolbar(mainToolbar);
        const rightContainer = this.elementInternal.createChild('div', 'device-mode-toolbar-spacer');
        const rightToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.Toolbar('device-mode-toolbar-fixed-size', rightContainer);
        rightToolbar.makeWrappable();
        this.fillRightToolbar(rightToolbar);
        const modeToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.Toolbar('device-mode-toolbar-fixed-size', rightContainer);
        modeToolbar.makeWrappable();
        this.fillModeToolbar(modeToolbar);
        rightContainer.createChild('div', 'device-mode-toolbar-spacer');
        const optionsToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.Toolbar('device-mode-toolbar-options', rightContainer);
        optionsToolbar.makeWrappable();
        this.fillOptionsToolbar(optionsToolbar);
        this.emulatedDevicesList = _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.EmulatedDevices.EmulatedDevicesList.instance();
        this.emulatedDevicesList.addEventListener(_models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.EmulatedDevices.Events.CustomDevicesUpdated, this.deviceListChanged, this);
        this.emulatedDevicesList.addEventListener(_models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.EmulatedDevices.Events.StandardDevicesUpdated, this.deviceListChanged, this);
        this.persistenceSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('emulation.device-mode-value', { device: '', orientation: '', mode: '' });
        this.model.toolbarControlsEnabledSetting().addChangeListener(updateToolbarsEnabled);
        updateToolbarsEnabled();
        function updateToolbarsEnabled() {
            const enabled = model.toolbarControlsEnabledSetting().get();
            leftToolbar.setEnabled(enabled);
            mainToolbar.setEnabled(enabled);
            rightToolbar.setEnabled(enabled);
            modeToolbar.setEnabled(enabled);
            optionsToolbar.setEnabled(enabled);
        }
    }
    createEmptyToolbarElement() {
        const element = document.createElement('div');
        element.classList.add('device-mode-empty-toolbar-element');
        return element;
    }
    fillLeftToolbar(toolbar) {
        toolbar.appendToolbarItem(this.wrapToolbarItem(this.createEmptyToolbarElement()));
        this.deviceSelectItem =
            new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarMenuButton(this.appendDeviceMenuItems.bind(this), undefined, undefined, 'device');
        this.deviceSelectItem.turnShrinkable();
        this.deviceSelectItem.setDarkText();
        toolbar.appendToolbarItem(this.deviceSelectItem);
    }
    fillMainToolbar(toolbar) {
        toolbar.appendToolbarItem(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarItem(this.widthInput));
        const xElement = document.createElement('div');
        xElement.classList.add('device-mode-x');
        xElement.textContent = '×';
        this.xItem = this.wrapToolbarItem(xElement);
        toolbar.appendToolbarItem(this.xItem);
        toolbar.appendToolbarItem(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarItem(this.heightInput));
    }
    fillRightToolbar(toolbar) {
        toolbar.appendToolbarItem(this.wrapToolbarItem(this.createEmptyToolbarElement()));
        this.scaleItem =
            new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarMenuButton(this.appendScaleMenuItems.bind(this), undefined, undefined, 'scale');
        setTitleForButton(this.scaleItem, i18nString(UIStrings.zoom));
        this.scaleItem.setDarkText();
        toolbar.appendToolbarItem(this.scaleItem);
        toolbar.appendToolbarItem(this.wrapToolbarItem(this.createEmptyToolbarElement()));
        this.deviceScaleItem = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarMenuButton(this.appendDeviceScaleMenuItems.bind(this), undefined, undefined, 'device-pixel-ratio');
        this.deviceScaleItem.setVisible(this.showDeviceScaleFactorSetting.get());
        setTitleForButton(this.deviceScaleItem, i18nString(UIStrings.devicePixelRatio));
        this.deviceScaleItem.setDarkText();
        toolbar.appendToolbarItem(this.deviceScaleItem);
        toolbar.appendToolbarItem(this.wrapToolbarItem(this.createEmptyToolbarElement()));
        this.uaItem =
            new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarMenuButton(this.appendUserAgentMenuItems.bind(this), undefined, undefined, 'device-type');
        this.uaItem.setVisible(this.showUserAgentTypeSetting.get());
        setTitleForButton(this.uaItem, i18nString(UIStrings.deviceType));
        this.uaItem.setDarkText();
        toolbar.appendToolbarItem(this.uaItem);
        this.throttlingConditionsItem =
            _mobile_throttling_mobile_throttling_js__WEBPACK_IMPORTED_MODULE_7__.ThrottlingManager.throttlingManager().createMobileThrottlingButton();
        toolbar.appendToolbarItem(this.throttlingConditionsItem);
    }
    fillModeToolbar(toolbar) {
        toolbar.appendToolbarItem(this.wrapToolbarItem(this.createEmptyToolbarElement()));
        this.modeButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarButton('', 'screen-rotation', undefined, 'screen-rotation');
        this.modeButton.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarButton.Events.Click, this.modeMenuClicked, this);
        toolbar.appendToolbarItem(this.modeButton);
        // Show dual screen toolbar.
        this.spanButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarButton('', 'device-fold', undefined, 'device-fold');
        this.spanButton.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarButton.Events.Click, this.spanClicked, this);
        toolbar.appendToolbarItem(this.spanButton);
        // Show posture toolbar menu for foldable devices.
        toolbar.appendToolbarItem(this.wrapToolbarItem(this.createEmptyToolbarElement()));
        this.postureItem = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarMenuButton(this.appendDevicePostureItems.bind(this), undefined, undefined, 'device-posture');
        this.postureItem.setDarkText();
        setTitleForButton(this.postureItem, i18nString(UIStrings.devicePosture));
        toolbar.appendToolbarItem(this.postureItem);
        this.createExperimentalButton(toolbar);
    }
    createExperimentalButton(toolbar) {
        toolbar.appendToolbarItem(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarSeparator(true));
        const title = (this.model.webPlatformExperimentalFeaturesEnabled()) ?
            i18nString(UIStrings.experimentalWebPlatformFeature) :
            i18nString(UIStrings.experimentalWebPlatformFeatureFlag);
        this.experimentalButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarToggle(title, 'experiment-check');
        this.experimentalButton.setToggled(this.model.webPlatformExperimentalFeaturesEnabled());
        this.experimentalButton.setEnabled(true);
        this.experimentalButton.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarButton.Events.Click, this.experimentalClicked, this);
        toolbar.appendToolbarItem(this.experimentalButton);
    }
    experimentalClicked() {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab('chrome://flags/#enable-experimental-web-platform-features');
    }
    fillOptionsToolbar(toolbar) {
        toolbar.appendToolbarItem(this.wrapToolbarItem(this.createEmptyToolbarElement()));
        const moreOptionsButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarMenuButton(this.appendOptionsMenuItems.bind(this), undefined, undefined, 'more-options');
        setTitleForButton(moreOptionsButton, i18nString(UIStrings.moreOptions));
        toolbar.appendToolbarItem(moreOptionsButton);
    }
    appendDevicePostureItems(contextMenu) {
        for (const title of ['Continuous', 'Folded']) {
            contextMenu.defaultSection().appendCheckboxItem(title, this.spanClicked.bind(this), { checked: title === this.currentDevicePosture(), jslogContext: title.toLowerCase() });
        }
    }
    currentDevicePosture() {
        const mode = this.model.mode();
        if (mode &&
            (mode.orientation === _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.EmulatedDevices.VerticalSpanned ||
                mode.orientation === _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.EmulatedDevices.HorizontalSpanned)) {
            return 'Folded';
        }
        return 'Continuous';
    }
    appendScaleMenuItems(contextMenu) {
        if (this.model.type() === _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.Device) {
            contextMenu.footerSection().appendItem(i18nString(UIStrings.fitToWindowF, { PH1: this.getPrettyFitZoomPercentage() }), this.onScaleMenuChanged.bind(this, this.model.fitScale()), { jslogContext: 'fit-to-window' });
        }
        contextMenu.footerSection().appendCheckboxItem(i18nString(UIStrings.autoadjustZoom), this.onAutoAdjustScaleChanged.bind(this), { checked: this.autoAdjustScaleSetting.get(), jslogContext: 'auto-adjust-zoom' });
        const boundAppendScaleItem = appendScaleItem.bind(this);
        boundAppendScaleItem('50%', 0.5);
        boundAppendScaleItem('75%', 0.75);
        boundAppendScaleItem('100%', 1);
        boundAppendScaleItem('125%', 1.25);
        boundAppendScaleItem('150%', 1.5);
        boundAppendScaleItem('200%', 2);
        function appendScaleItem(title, value) {
            contextMenu.defaultSection().appendCheckboxItem(title, this.onScaleMenuChanged.bind(this, value), { checked: this.model.scaleSetting().get() === value, jslogContext: title });
        }
    }
    onScaleMenuChanged(value) {
        this.model.scaleSetting().set(value);
    }
    onAutoAdjustScaleChanged() {
        this.autoAdjustScaleSetting.set(!this.autoAdjustScaleSetting.get());
    }
    appendDeviceScaleMenuItems(contextMenu) {
        const deviceScaleFactorSetting = this.model.deviceScaleFactorSetting();
        const defaultValue = this.model.uaSetting().get() === _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.UA.Mobile ||
            this.model.uaSetting().get() === _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.UA.MobileNoTouch ?
            _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.defaultMobileScaleFactor :
            window.devicePixelRatio;
        appendDeviceScaleFactorItem(contextMenu.headerSection(), i18nString(UIStrings.defaultF, { PH1: defaultValue }), 0, 'dpr-default');
        appendDeviceScaleFactorItem(contextMenu.defaultSection(), '1', 1, 'dpr-1');
        appendDeviceScaleFactorItem(contextMenu.defaultSection(), '2', 2, 'dpr-2');
        appendDeviceScaleFactorItem(contextMenu.defaultSection(), '3', 3, 'dpr-3');
        function appendDeviceScaleFactorItem(section, title, value, jslogContext) {
            section.appendCheckboxItem(title, deviceScaleFactorSetting.set.bind(deviceScaleFactorSetting, value), { checked: deviceScaleFactorSetting.get() === value, jslogContext });
        }
    }
    appendUserAgentMenuItems(contextMenu) {
        const uaSetting = this.model.uaSetting();
        appendUAItem(_models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.UA.Mobile, _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.UA.Mobile);
        appendUAItem(_models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.UA.MobileNoTouch, _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.UA.MobileNoTouch);
        appendUAItem(_models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.UA.Desktop, _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.UA.Desktop);
        appendUAItem(_models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.UA.DesktopTouch, _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.UA.DesktopTouch);
        function appendUAItem(title, value) {
            contextMenu.defaultSection().appendCheckboxItem(title, uaSetting.set.bind(uaSetting, value), { checked: uaSetting.get() === value, jslogContext: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.toKebabCase(value) });
        }
    }
    appendOptionsMenuItems(contextMenu) {
        const model = this.model;
        appendToggleItem(contextMenu.headerSection(), this.deviceOutlineSetting, i18nString(UIStrings.hideDeviceFrame), i18nString(UIStrings.showDeviceFrame), model.type() !== _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.Device, 'device-frame');
        appendToggleItem(contextMenu.headerSection(), this.showMediaInspectorSetting, i18nString(UIStrings.hideMediaQueries), i18nString(UIStrings.showMediaQueries), undefined, 'media-queries');
        appendToggleItem(contextMenu.headerSection(), this.showRulersSetting, i18nString(UIStrings.hideRulers), i18nString(UIStrings.showRulers), undefined, 'rulers');
        appendToggleItem(contextMenu.defaultSection(), this.showDeviceScaleFactorSetting, i18nString(UIStrings.removeDevicePixelRatio), i18nString(UIStrings.addDevicePixelRatio), undefined, 'device-pixel-ratio');
        appendToggleItem(contextMenu.defaultSection(), this.showUserAgentTypeSetting, i18nString(UIStrings.removeDeviceType), i18nString(UIStrings.addDeviceType), undefined, 'device-type');
        contextMenu.appendItemsAtLocation('deviceModeMenu');
        contextMenu.footerSection().appendItem(i18nString(UIStrings.resetToDefaults), this.reset.bind(this), { jslogContext: 'reset-to-defaults' });
        contextMenu.footerSection().appendItem(i18nString(UIStrings.closeDevtools), _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.closeWindow.bind(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance), { jslogContext: 'close-dev-tools' });
        function appendToggleItem(section, setting, title1, title2, disabled, context) {
            if (typeof disabled === 'undefined') {
                disabled = model.type() === _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.None;
            }
            const isEnabled = setting.get();
            const jslogContext = `${context}-${isEnabled ? 'disable' : 'enable'}`;
            section.appendItem(isEnabled ? title1 : title2, setting.set.bind(setting, !setting.get()), { disabled, jslogContext });
        }
    }
    reset() {
        this.deviceOutlineSetting.set(false);
        this.showDeviceScaleFactorSetting.set(false);
        this.showUserAgentTypeSetting.set(false);
        this.showMediaInspectorSetting.set(false);
        this.showRulersSetting.set(false);
        this.model.reset();
    }
    wrapToolbarItem(element) {
        const container = document.createElement('div');
        const shadowRoot = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createShadowRootWithCoreStyles(container, { cssFile: Object(function webpackMissingModule() { var e = new Error("Cannot find module './deviceModeToolbar.css.legacy.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), delegatesFocus: undefined });
        shadowRoot.appendChild(element);
        return new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarItem(container);
    }
    emulateDevice(device) {
        const scale = this.autoAdjustScaleSetting.get() ? undefined : this.model.scaleSetting().get();
        this.model.emulate(_models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.Device, device, this.lastMode.get(device) || device.modes[0], scale);
    }
    switchToResponsive() {
        this.model.emulate(_models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.Responsive, null, null);
    }
    filterDevices(devices) {
        devices = devices.filter(function (d) {
            return d.show();
        });
        devices.sort(_models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.EmulatedDevices.EmulatedDevice.deviceComparator);
        return devices;
    }
    standardDevices() {
        return this.filterDevices(this.emulatedDevicesList.standard());
    }
    customDevices() {
        return this.filterDevices(this.emulatedDevicesList.custom());
    }
    allDevices() {
        return this.standardDevices().concat(this.customDevices());
    }
    appendDeviceMenuItems(contextMenu) {
        contextMenu.headerSection().appendCheckboxItem(i18nString(UIStrings.responsive), this.switchToResponsive.bind(this), { checked: this.model.type() === _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.Responsive, jslogContext: 'responsive' });
        appendGroup.call(this, this.standardDevices());
        appendGroup.call(this, this.customDevices());
        contextMenu.footerSection().appendItem(i18nString(UIStrings.edit), this.emulatedDevicesList.revealCustomSetting.bind(this.emulatedDevicesList), { jslogContext: 'edit' });
        function appendGroup(devices) {
            if (!devices.length) {
                return;
            }
            const section = contextMenu.section();
            for (const device of devices) {
                section.appendCheckboxItem(device.title, this.emulateDevice.bind(this, device), {
                    checked: this.model.device() === device,
                    jslogContext: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.toKebabCase(device.title),
                });
            }
        }
    }
    deviceListChanged() {
        const device = this.model.device();
        if (!device) {
            return;
        }
        const devices = this.allDevices();
        if (devices.indexOf(device) === -1) {
            if (devices.length) {
                this.emulateDevice(devices[0]);
            }
            else {
                this.model.emulate(_models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.Responsive, null, null);
            }
        }
        else {
            this.emulateDevice(device);
        }
    }
    updateDeviceScaleFactorVisibility() {
        if (this.deviceScaleItem) {
            this.deviceScaleItem.setVisible(this.showDeviceScaleFactorSetting.get());
        }
    }
    updateUserAgentTypeVisibility() {
        if (this.uaItem) {
            this.uaItem.setVisible(this.showUserAgentTypeSetting.get());
        }
    }
    spanClicked() {
        const device = this.model.device();
        if (!device || (!device.isDualScreen && !device.isFoldableScreen)) {
            return;
        }
        const scale = this.autoAdjustScaleSetting.get() ? undefined : this.model.scaleSetting().get();
        const mode = this.model.mode();
        if (!mode) {
            return;
        }
        const newMode = device.getSpanPartner(mode);
        if (!newMode) {
            return;
        }
        this.model.emulate(this.model.type(), device, newMode, scale);
        return;
    }
    modeMenuClicked(event) {
        const device = this.model.device();
        const model = this.model;
        const autoAdjustScaleSetting = this.autoAdjustScaleSetting;
        if (model.type() === _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.Responsive) {
            const appliedSize = model.appliedDeviceSize();
            if (autoAdjustScaleSetting.get()) {
                model.setSizeAndScaleToFit(appliedSize.height, appliedSize.width);
            }
            else {
                model.setWidth(appliedSize.height);
                model.setHeight(appliedSize.width);
            }
            return;
        }
        if (!device) {
            return;
        }
        if ((device.isDualScreen || device.isFoldableScreen || device.modes.length === 2) &&
            device.modes[0].orientation !== device.modes[1].orientation) {
            const scale = autoAdjustScaleSetting.get() ? undefined : model.scaleSetting().get();
            const mode = model.mode();
            if (!mode) {
                return;
            }
            const rotationPartner = device.getRotationPartner(mode);
            if (!rotationPartner) {
                return;
            }
            model.emulate(model.type(), model.device(), rotationPartner, scale);
            return;
        }
        if (!this.modeButton) {
            return;
        }
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ContextMenu.ContextMenu(event.data, {
            useSoftMenu: false,
            x: this.modeButton.element.getBoundingClientRect().left,
            y: this.modeButton.element.getBoundingClientRect().top + this.modeButton.element.offsetHeight,
        });
        addOrientation(_models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.EmulatedDevices.Vertical, i18nString(UIStrings.portrait));
        addOrientation(_models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.EmulatedDevices.Horizontal, i18nString(UIStrings.landscape));
        void contextMenu.show();
        function addOrientation(orientation, title) {
            if (!device) {
                return;
            }
            const modes = device.modesForOrientation(orientation);
            if (!modes.length) {
                return;
            }
            if (modes.length === 1) {
                addMode(modes[0], title);
            }
            else {
                for (let index = 0; index < modes.length; index++) {
                    addMode(modes[index], title + ' \u2013 ' + modes[index].title);
                }
            }
        }
        function addMode(mode, title) {
            contextMenu.defaultSection().appendCheckboxItem(title, applyMode.bind(null, mode), { checked: model.mode() === mode, jslogContext: 'device-mode' });
        }
        function applyMode(mode) {
            const scale = autoAdjustScaleSetting.get() ? undefined : model.scaleSetting().get();
            model.emulate(model.type(), model.device(), mode, scale);
        }
    }
    getPrettyFitZoomPercentage() {
        return `${(this.model.fitScale() * 100).toFixed(0)}`;
    }
    getPrettyZoomPercentage() {
        return `${(this.model.scale() * 100).toFixed(0)}`;
    }
    element() {
        return this.elementInternal;
    }
    update() {
        if (this.model.type() !== this.cachedModelType) {
            this.cachedModelType = this.model.type();
            this.widthInput.disabled = this.model.type() !== _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.Responsive;
            this.heightInput.disabled = this.model.type() !== _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.Responsive;
            this.deviceScaleItem.setEnabled(this.model.type() === _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.Responsive);
            this.uaItem.setEnabled(this.model.type() === _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.Responsive);
            if (this.model.type() === _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.Responsive) {
                this.modeButton.setEnabled(true);
                setTitleForButton(this.modeButton, i18nString(UIStrings.rotate));
            }
            else {
                this.modeButton.setEnabled(false);
            }
        }
        const size = this.model.appliedDeviceSize();
        this.widthInput.size = String(size.width);
        this.heightInput.size =
            this.model.type() === _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.Responsive && this.model.isFullHeight() ?
                '' :
                String(size.height);
        this.heightInput.placeholder = String(size.height);
        if (this.model.scale() !== this.cachedScale) {
            this.scaleItem.setText(`${this.getPrettyZoomPercentage()}%`);
            this.cachedScale = this.model.scale();
        }
        const deviceScale = this.model.appliedDeviceScaleFactor();
        if (deviceScale !== this.cachedDeviceScale) {
            this.deviceScaleItem.setText(`DPR: ${deviceScale.toFixed(1)}`);
            this.cachedDeviceScale = deviceScale;
        }
        const uaType = this.model.appliedUserAgentType();
        if (uaType !== this.cachedUaType) {
            this.uaItem.setText(uaType);
            this.cachedUaType = uaType;
        }
        let deviceItemTitle = i18nString(UIStrings.none);
        if (this.model.type() === _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.Responsive) {
            deviceItemTitle = i18nString(UIStrings.responsive);
        }
        const device = this.model.device();
        if (this.model.type() === _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.Device && device) {
            deviceItemTitle = device.title;
        }
        this.deviceSelectItem.setText(`${i18nString(UIStrings.dimensions)}: ${deviceItemTitle}`);
        if (this.model.device() !== this.cachedModelDevice) {
            const device = this.model.device();
            if (device) {
                const modeCount = device ? device.modes.length : 0;
                this.modeButton.setEnabled(modeCount >= 2);
                setTitleForButton(this.modeButton, modeCount === 2 ? i18nString(UIStrings.rotate) : i18nString(UIStrings.screenOrientationOptions));
            }
            this.cachedModelDevice = device;
        }
        if (this.experimentalButton) {
            const device = this.model.device();
            if (device && (device.isDualScreen || device.isFoldableScreen)) {
                if (device.isDualScreen) {
                    this.spanButton.setVisible(true);
                    this.postureItem.setVisible(false);
                }
                else if (device.isFoldableScreen) {
                    this.spanButton.setVisible(false);
                    this.postureItem.setVisible(true);
                    this.postureItem.setText(this.currentDevicePosture());
                }
                this.experimentalButton.setVisible(true);
            }
            else {
                this.spanButton.setVisible(false);
                this.postureItem.setVisible(false);
                this.experimentalButton.setVisible(false);
            }
            setTitleForButton(this.spanButton, i18nString(UIStrings.toggleDualscreenMode));
        }
        if (this.model.type() === _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.Device) {
            this.lastMode.set(this.model.device(), this.model.mode());
        }
        if (this.model.mode() !== this.cachedModelMode && this.model.type() !== _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.None) {
            this.cachedModelMode = this.model.mode();
            const value = this.persistenceSetting.get();
            const device = this.model.device();
            if (device) {
                value.device = device.title;
                const mode = this.model.mode();
                value.orientation = mode ? mode.orientation : '';
                value.mode = mode ? mode.title : '';
            }
            else {
                value.device = '';
                value.orientation = '';
                value.mode = '';
            }
            this.persistenceSetting.set(value);
        }
    }
    restore() {
        for (const device of this.allDevices()) {
            if (device.title === this.persistenceSetting.get().device) {
                for (const mode of device.modes) {
                    if (mode.orientation === this.persistenceSetting.get().orientation &&
                        mode.title === this.persistenceSetting.get().mode) {
                        this.lastMode.set(device, mode);
                        this.emulateDevice(device);
                        return;
                    }
                }
            }
        }
        this.model.emulate(_models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.Responsive, null, null);
    }
}


/***/ }),

/***/ "./src/panels/emulation/components/DeviceSizeInputElement.ts":
/*!*******************************************************************!*\
  !*** ./src/panels/emulation/components/DeviceSizeInputElement.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SizeInputElement: () => (/* binding */ SizeInputElement)
/* harmony export */ });
/* harmony import */ var _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/emulation/emulation.js */ "./src/models/emulation/emulation.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
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
var _SizeInputElement_instances, _SizeInputElement_root, _SizeInputElement_disabled, _SizeInputElement_size, _SizeInputElement_placeholder, _SizeInputElement_title, _SizeInputElement_jslogContext, _SizeInputElement_fireSizeChange, _SizeInputElement_handleModifierKeys;




class SizeChangedEvent extends Event {
    constructor(size) {
        super(SizeChangedEvent.eventName);
        Object.defineProperty(this, "size", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: size
        });
    }
}
Object.defineProperty(SizeChangedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'sizechanged'
});
function getInputValue(event) {
    return Number(event.target.value);
}
class SizeInputElement extends HTMLElement {
    constructor(title, { jslogContext }) {
        super();
        _SizeInputElement_instances.add(this);
        _SizeInputElement_root.set(this, this.attachShadow({ mode: 'open' }));
        _SizeInputElement_disabled.set(this, false);
        _SizeInputElement_size.set(this, '0');
        _SizeInputElement_placeholder.set(this, '');
        _SizeInputElement_title.set(this, void 0);
        _SizeInputElement_jslogContext.set(this, void 0);
        __classPrivateFieldSet(this, _SizeInputElement_title, title, "f");
        __classPrivateFieldSet(this, _SizeInputElement_jslogContext, jslogContext, "f");
    }
    connectedCallback() {
        this.render();
    }
    set disabled(disabled) {
        __classPrivateFieldSet(this, _SizeInputElement_disabled, disabled, "f");
        this.render();
    }
    set size(size) {
        __classPrivateFieldSet(this, _SizeInputElement_size, size, "f");
        this.render();
    }
    set placeholder(placeholder) {
        __classPrivateFieldSet(this, _SizeInputElement_placeholder, placeholder, "f");
        this.render();
    }
    render() {
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.render(
        // Since the emulation code runs in a different frame, we can't
        // use constructed stylesheets (they are disallowed cross-frame).
        // For now, use an inline style tag and later we can refactor this
        // to use proper constructed stylesheets, when the code runs
        // in the correct frame context.
        // eslint-disable-next-line rulesdir/ban_style_tags_in_lit_html
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html `
      <style>
        input {
          /*
           * 4 characters for the maximum size of the value,
           * 2 characters for the width of the step-buttons,
           * 2 pixels padding between the characters and the
           * step-buttons.
           */
          width: calc(4ch + 2ch + 2px);
          max-height: 18px;
          border: var(--sys-color-neutral-outline);
          border-radius: 4px;
          margin: 0 2px;
          text-align: center;
          font-size: inherit;
          font-family: inherit;
        }

        input:disabled {
          user-select: none;
        }

        input:focus::-webkit-input-placeholder {
          color: transparent;
        }
      </style>
      <input type="number"
             max=${_models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_0__.DeviceModeModel.MaxDeviceSize}
             min=${_models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_0__.DeviceModeModel.MinDeviceSize}
             jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.textField().track({ change: true }).context(__classPrivateFieldGet(this, _SizeInputElement_jslogContext, "f"))}
             maxlength="4"
             title=${__classPrivateFieldGet(this, _SizeInputElement_title, "f")}
             placeholder=${__classPrivateFieldGet(this, _SizeInputElement_placeholder, "f")}
             ?disabled=${__classPrivateFieldGet(this, _SizeInputElement_disabled, "f")}
             .value=${__classPrivateFieldGet(this, _SizeInputElement_size, "f")}
             @change=${__classPrivateFieldGet(this, _SizeInputElement_instances, "m", _SizeInputElement_fireSizeChange)}
             @keydown=${__classPrivateFieldGet(this, _SizeInputElement_instances, "m", _SizeInputElement_handleModifierKeys)} />
    `, __classPrivateFieldGet(this, _SizeInputElement_root, "f"), { host: this });
    }
}
_SizeInputElement_root = new WeakMap(), _SizeInputElement_disabled = new WeakMap(), _SizeInputElement_size = new WeakMap(), _SizeInputElement_placeholder = new WeakMap(), _SizeInputElement_title = new WeakMap(), _SizeInputElement_jslogContext = new WeakMap(), _SizeInputElement_instances = new WeakSet(), _SizeInputElement_fireSizeChange = function _SizeInputElement_fireSizeChange(event) {
    this.dispatchEvent(new SizeChangedEvent(getInputValue(event)));
}, _SizeInputElement_handleModifierKeys = function _SizeInputElement_handleModifierKeys(event) {
    let modifiedValue = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.modifiedFloatNumber(getInputValue(event), event);
    if (modifiedValue === null) {
        return;
    }
    modifiedValue = Math.min(modifiedValue, _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_0__.DeviceModeModel.MaxDeviceSize);
    modifiedValue = Math.max(modifiedValue, _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_0__.DeviceModeModel.MinDeviceSize);
    event.preventDefault();
    event.target.value = String(modifiedValue);
    this.dispatchEvent(new SizeChangedEvent(modifiedValue));
};
Object.defineProperty(SizeInputElement, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal `device-mode-emulation-size-input`
});
customElements.define('device-mode-emulation-size-input', SizeInputElement);


/***/ }),

/***/ "./src/panels/emulation/components/components.ts":
/*!*******************************************************!*\
  !*** ./src/panels/emulation/components/components.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeviceSizeInputElement: () => (/* reexport module object */ _DeviceSizeInputElement_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _DeviceSizeInputElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeviceSizeInputElement.js */ "./src/panels/emulation/components/DeviceSizeInputElement.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/***/ })

}]);