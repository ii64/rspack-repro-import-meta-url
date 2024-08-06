"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_color_picker_ContrastDetails_js"],{

/***/ "./ui/legacy/components/color_picker/ContrastDetails.js":
/*!**************************************************************!*\
  !*** ./ui/legacy/components/color_picker/ContrastDetails.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContrastDetails: () => (/* binding */ ContrastDetails),
/* harmony export */   Swatch: () => (/* binding */ Swatch)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/root/root.js */ "./core/root/root.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







const UIStrings = {
    /**
     *@description Label for when no contrast information is available in the color picker
     */
    noContrastInformationAvailable: 'No contrast information available',
    /**
     *@description Text of a DOM element in Contrast Details of the Color Picker
     */
    contrastRatio: 'Contrast ratio',
    /**
     *@description Text to show more content
     */
    showMore: 'Show more',
    /**
     *@description Choose bg color text content in Contrast Details of the Color Picker
     */
    pickBackgroundColor: 'Pick background color',
    /**
     *@description Tooltip text that appears when hovering over largeicon eyedropper button in Contrast Details of the Color Picker
     */
    toggleBackgroundColorPicker: 'Toggle background color picker',
    /**
     *@description Text of a button in Contrast Details of the Color Picker
     *@example {rgba(0 0 0 / 100%) } PH1
     */
    useSuggestedColorStoFixLow: 'Use suggested color {PH1}to fix low contrast',
    /**
     *@description Label for the APCA contrast in Color Picker
     */
    apca: 'APCA',
    /**
     *@description Label aa text content in Contrast Details of the Color Picker
     */
    aa: 'AA',
    /**
     *@description Text that starts with a colon and includes a placeholder
     *@example {3.0} PH1
     */
    placeholderWithColon: ': {PH1}',
    /**
     *@description Label aaa text content in Contrast Details of the Color Picker
     */
    aaa: 'AAA',
    /**
     *@description Text to show less content
     */
    showLess: 'Show less',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('ui/legacy/components/color_picker/ContrastDetails.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
class ContrastDetails extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    contrastInfo;
    elementInternal;
    toggleMainColorPicker;
    expandedChangedCallback;
    colorSelectedCallback;
    expandedInternal;
    passesAA;
    contrastUnknown;
    visibleInternal;
    noContrastInfoAvailable;
    contrastValueBubble;
    contrastValue;
    contrastValueBubbleIcons;
    expandButton;
    expandedDetails;
    contrastThresholds;
    contrastAA;
    contrastPassFailAA;
    contrastAAA;
    contrastPassFailAAA;
    contrastAPCA;
    contrastPassFailAPCA;
    chooseBgColor;
    bgColorPickerButton;
    bgColorPickedBound;
    bgColorSwatch;
    constructor(contrastInfo, contentElement, toggleMainColorPickerCallback, expandedChangedCallback, colorSelectedCallback) {
        super();
        this.contrastInfo = contrastInfo;
        this.elementInternal = contentElement.createChild('div', 'spectrum-contrast-details collapsed');
        this.toggleMainColorPicker = toggleMainColorPickerCallback;
        this.expandedChangedCallback = expandedChangedCallback;
        this.colorSelectedCallback = colorSelectedCallback;
        this.expandedInternal = false;
        this.passesAA = true;
        this.contrastUnknown = false;
        // This will not be visible if we don't get ContrastInfo,
        // e.g. for a non-font color property such as border-color.
        this.visibleInternal = false;
        // No contrast info message is created to show if it's not possible to provide the extended details.
        this.noContrastInfoAvailable = contentElement.createChild('div', 'no-contrast-info-available');
        this.noContrastInfoAvailable.textContent = i18nString(UIStrings.noContrastInformationAvailable);
        this.noContrastInfoAvailable.classList.add('hidden');
        const contrastValueRow = this.elementInternal.createChild('div');
        contrastValueRow.addEventListener('click', this.topRowClicked.bind(this));
        const contrastValueRowContents = contrastValueRow.createChild('div', 'container');
        _legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(contrastValueRowContents, i18nString(UIStrings.contrastRatio));
        this.contrastValueBubble = contrastValueRowContents.createChild('span', 'contrast-details-value');
        this.contrastValue = this.contrastValueBubble.createChild('span');
        this.contrastValueBubbleIcons = [];
        this.contrastValueBubbleIcons.push(this.contrastValueBubble.appendChild(_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.create('checkmark')));
        this.contrastValueBubbleIcons.push(this.contrastValueBubble.appendChild(_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.create('check-double')));
        this.contrastValueBubbleIcons.push(this.contrastValueBubble.appendChild(_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.create('clear')));
        this.contrastValueBubbleIcons.forEach(button => button.addEventListener('click', (event) => {
            ContrastDetails.showHelp();
            event.consume(false);
        }));
        const expandToolbar = new _legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar('expand', contrastValueRowContents);
        this.expandButton = new _legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton(i18nString(UIStrings.showMore), 'chevron-down');
        this.expandButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, this.expandButtonClicked.bind(this));
        _legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setExpanded(this.expandButton.element, false);
        expandToolbar.appendToolbarItem(this.expandButton);
        this.expandedDetails = this.elementInternal.createChild('div', 'expanded-details');
        _legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setControls(this.expandButton.element, this.expandedDetails);
        this.contrastThresholds = this.expandedDetails.createChild('div', 'contrast-thresholds');
        this.contrastAA = this.contrastThresholds.createChild('div', 'contrast-threshold');
        this.contrastPassFailAA = this.contrastAA.createChild('div', 'contrast-pass-fail');
        this.contrastAAA = this.contrastThresholds.createChild('div', 'contrast-threshold');
        this.contrastPassFailAAA = this.contrastAAA.createChild('div', 'contrast-pass-fail');
        this.contrastAPCA = this.contrastThresholds.createChild('div', 'contrast-threshold');
        this.contrastPassFailAPCA = this.contrastAPCA.createChild('div', 'contrast-pass-fail');
        this.chooseBgColor = this.expandedDetails.createChild('div', 'contrast-choose-bg-color');
        this.chooseBgColor.textContent = i18nString(UIStrings.pickBackgroundColor);
        const bgColorContainer = this.expandedDetails.createChild('div', 'background-color');
        const pickerToolbar = new _legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar('spectrum-eye-dropper', bgColorContainer);
        this.bgColorPickerButton = new _legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarToggle(i18nString(UIStrings.toggleBackgroundColorPicker), 'color-picker', 'color-picker-filled');
        this.bgColorPickerButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, this.toggleBackgroundColorPickerInternal.bind(this, undefined, true));
        pickerToolbar.appendToolbarItem(this.bgColorPickerButton);
        this.bgColorPickedBound = this.bgColorPicked.bind(this);
        this.bgColorSwatch = new Swatch(bgColorContainer);
        this.contrastInfo.addEventListener("ContrastInfoUpdated" /* ContrastInfoEvents.ContrastInfoUpdated */, this.update.bind(this));
    }
    showNoContrastInfoAvailableMessage() {
        this.noContrastInfoAvailable.classList.remove('hidden');
    }
    hideNoContrastInfoAvailableMessage() {
        this.noContrastInfoAvailable.classList.add('hidden');
    }
    computeSuggestedColor(threshold) {
        const fgColor = this.contrastInfo.color();
        const bgColor = this.contrastInfo.bgColor();
        if (!fgColor || !bgColor) {
            return;
        }
        if (threshold === 'APCA') {
            const requiredContrast = this.contrastInfo.contrastRatioAPCAThreshold();
            if (requiredContrast === null) {
                return;
            }
            // We add 1% to the min required contrast to make sure we are over the limit.
            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.findFgColorForContrastAPCA(fgColor, bgColor, requiredContrast + 1);
        }
        const requiredContrast = this.contrastInfo.contrastRatioThreshold(threshold);
        if (!requiredContrast) {
            return;
        }
        // We add a bit to the required contrast to make sure we are over the limit.
        return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.findFgColorForContrast(fgColor, bgColor, requiredContrast + 0.1);
    }
    onSuggestColor(threshold) {
        const color = this.computeSuggestedColor(threshold);
        if (color) {
            this.colorSelectedCallback(color);
        }
    }
    createFixColorButton(parent, suggestedColor) {
        const button = parent.createChild('button', 'contrast-fix-button');
        const formattedColor = suggestedColor.asString(this.contrastInfo.colorFormat());
        const suggestedColorString = formattedColor ? formattedColor + ' ' : '';
        const label = i18nString(UIStrings.useSuggestedColorStoFixLow, { PH1: suggestedColorString });
        _legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setLabel(button, label);
        _legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install(button, label);
        button.tabIndex = 0;
        button.style.backgroundColor = suggestedColorString;
        return button;
    }
    update() {
        if (this.contrastInfo.isNull()) {
            this.showNoContrastInfoAvailableMessage();
            this.setVisible(false);
            return;
        }
        this.setVisible(true);
        this.hideNoContrastInfoAvailableMessage();
        const isAPCAEnabled = _core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.isEnabled('apca');
        const fgColor = this.contrastInfo.color();
        const bgColor = this.contrastInfo.bgColor();
        if (isAPCAEnabled) {
            const apcaContrastRatio = this.contrastInfo.contrastRatioAPCA();
            if (apcaContrastRatio === null || !bgColor || !fgColor) {
                this.contrastUnknown = true;
                this.contrastValue.textContent = '';
                this.contrastValueBubble.classList.add('contrast-unknown');
                this.chooseBgColor.classList.remove('hidden');
                this.contrastThresholds.classList.add('hidden');
                this.showNoContrastInfoAvailableMessage();
                return;
            }
            this.contrastUnknown = false;
            this.chooseBgColor.classList.add('hidden');
            this.contrastThresholds.classList.remove('hidden');
            this.contrastValueBubble.classList.remove('contrast-unknown');
            this.contrastValue.textContent = `${_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.floor(apcaContrastRatio, 2)}%`;
            const apcaThreshold = this.contrastInfo.contrastRatioAPCAThreshold();
            const passesAPCA = apcaContrastRatio && apcaThreshold ? Math.abs(apcaContrastRatio) >= apcaThreshold : false;
            this.contrastPassFailAPCA.removeChildren();
            const labelAPCA = this.contrastPassFailAPCA.createChild('span', 'contrast-link-label');
            labelAPCA.textContent = i18nString(UIStrings.apca);
            if (apcaThreshold !== null) {
                this.contrastPassFailAPCA.createChild('span').textContent = `: ${apcaThreshold.toFixed(2)}%`;
            }
            if (passesAPCA) {
                const iconCheckmark = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon();
                iconCheckmark
                    .data = { iconName: 'checkmark', color: 'var(--icon-checkmark-green)', width: '20px', height: '14px' };
                this.contrastPassFailAPCA.appendChild(iconCheckmark);
            }
            else {
                const iconNo = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon();
                iconNo.data = { iconName: 'clear', color: 'var(--icon-error)', width: '14px', height: '14px' };
                this.contrastPassFailAPCA.appendChild(iconNo);
                const suggestedColor = this.computeSuggestedColor('APCA');
                if (suggestedColor) {
                    const fixAPCA = this.createFixColorButton(this.contrastPassFailAPCA, suggestedColor);
                    fixAPCA.addEventListener('click', () => this.onSuggestColor('APCA'));
                }
            }
            labelAPCA.addEventListener('click', (_event) => ContrastDetails.showHelp());
            this.elementInternal.classList.toggle('contrast-fail', !passesAPCA);
            this.contrastValueBubble.classList.toggle('contrast-aa', passesAPCA);
            this.bgColorSwatch.setColors(fgColor, bgColor);
            return;
        }
        const contrastRatio = this.contrastInfo.contrastRatio();
        if (!contrastRatio || !bgColor || !fgColor) {
            this.contrastUnknown = true;
            this.contrastValue.textContent = '';
            this.contrastValueBubble.classList.add('contrast-unknown');
            this.chooseBgColor.classList.remove('hidden');
            this.contrastThresholds.classList.add('hidden');
            this.showNoContrastInfoAvailableMessage();
            return;
        }
        this.contrastUnknown = false;
        this.chooseBgColor.classList.add('hidden');
        this.contrastThresholds.classList.remove('hidden');
        this.contrastValueBubble.classList.remove('contrast-unknown');
        this.contrastValue.textContent = String(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.floor(contrastRatio, 2));
        this.bgColorSwatch.setColors(fgColor, bgColor);
        // In greater then comparisons we can substite null with 0.
        const aa = this.contrastInfo.contrastRatioThreshold('aa') || 0;
        this.passesAA = (this.contrastInfo.contrastRatio() || 0) >= aa;
        this.contrastPassFailAA.removeChildren();
        const labelAA = this.contrastPassFailAA.createChild('span', 'contrast-link-label');
        labelAA.textContent = i18nString(UIStrings.aa);
        this.contrastPassFailAA.createChild('span').textContent =
            i18nString(UIStrings.placeholderWithColon, { PH1: aa.toFixed(1) });
        if (this.passesAA) {
            const iconCheckmark = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon();
            iconCheckmark.data = { iconName: 'checkmark', color: 'var(--icon-checkmark-green)', width: '20px', height: '14px' };
            this.contrastPassFailAA.appendChild(iconCheckmark);
        }
        else {
            const iconNo = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon();
            iconNo.data = { iconName: 'clear', color: 'var(--icon-error)', width: '14px', height: '14px' };
            this.contrastPassFailAA.appendChild(iconNo);
            const suggestedColor = this.computeSuggestedColor('aa');
            if (suggestedColor) {
                const fixAA = this.createFixColorButton(this.contrastPassFailAA, suggestedColor);
                fixAA.addEventListener('click', () => this.onSuggestColor('aa'));
            }
        }
        // In greater then comparisons we can substite null with 0.
        const aaa = this.contrastInfo.contrastRatioThreshold('aaa') || 0;
        const passesAAA = (this.contrastInfo.contrastRatio() || 0) >= aaa;
        this.contrastPassFailAAA.removeChildren();
        const labelAAA = this.contrastPassFailAAA.createChild('span', 'contrast-link-label');
        labelAAA.textContent = i18nString(UIStrings.aaa);
        this.contrastPassFailAAA.createChild('span').textContent =
            i18nString(UIStrings.placeholderWithColon, { PH1: aaa.toFixed(1) });
        if (passesAAA) {
            const iconCheckmark = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon();
            iconCheckmark.data = { iconName: 'checkmark', color: 'var(--icon-checkmark-green)', width: '20px', height: '14px' };
            this.contrastPassFailAAA.appendChild(iconCheckmark);
        }
        else {
            const iconNo = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon();
            iconNo.data = { iconName: 'clear', color: 'var(--icon-error)', width: '14px', height: '14px' };
            this.contrastPassFailAAA.appendChild(iconNo);
            const suggestedColor = this.computeSuggestedColor('aaa');
            if (suggestedColor) {
                const fixAAA = this.createFixColorButton(this.contrastPassFailAAA, suggestedColor);
                fixAAA.addEventListener('click', () => this.onSuggestColor('aaa'));
            }
        }
        [labelAA, labelAAA].forEach(e => e.addEventListener('click', () => ContrastDetails.showHelp()));
        this.elementInternal.classList.toggle('contrast-fail', !this.passesAA);
        // show checkmark icon when passes AA, but not AAA
        this.contrastValueBubble.classList.toggle('contrast-aa', this.passesAA && !passesAAA);
        this.contrastValueBubble.classList.toggle('contrast-aaa', passesAAA);
    }
    static showHelp() {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.addReferrerToURL('https://web.dev/color-and-contrast-accessibility/'));
    }
    setVisible(visible) {
        this.visibleInternal = visible;
        this.elementInternal.classList.toggle('hidden', !visible);
    }
    visible() {
        return this.visibleInternal;
    }
    element() {
        return this.elementInternal;
    }
    expandButtonClicked() {
        const selection = this.contrastValueBubble.getComponentSelection();
        if (selection) {
            selection.empty();
        }
        this.toggleExpanded();
    }
    topRowClicked(event) {
        const selection = this.contrastValueBubble.getComponentSelection();
        if (selection) {
            selection.empty();
        }
        this.toggleExpanded();
        event.consume(true);
    }
    toggleExpanded() {
        this.expandedInternal = !this.expandedInternal;
        _legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setExpanded(this.expandButton.element, this.expandedInternal);
        this.elementInternal.classList.toggle('collapsed', !this.expandedInternal);
        if (this.expandedInternal) {
            this.toggleMainColorPicker(false);
            this.expandButton.setGlyph('chevron-up');
            this.expandButton.setTitle(i18nString(UIStrings.showLess));
            if (this.contrastUnknown) {
                this.toggleBackgroundColorPickerInternal(true);
            }
        }
        else {
            this.toggleBackgroundColorPickerInternal(false);
            this.expandButton.setGlyph('chevron-down');
            this.expandButton.setTitle(i18nString(UIStrings.showMore));
        }
        this.expandedChangedCallback();
    }
    collapse() {
        this.elementInternal.classList.remove('expanded');
        this.toggleBackgroundColorPickerInternal(false);
        this.toggleMainColorPicker(false);
    }
    expanded() {
        return this.expandedInternal;
    }
    backgroundColorPickerEnabled() {
        return this.bgColorPickerButton.isToggled();
    }
    toggleBackgroundColorPicker(enabled) {
        this.toggleBackgroundColorPickerInternal(enabled, false);
    }
    toggleBackgroundColorPickerInternal(enabled, shouldTriggerEvent = true) {
        if (enabled === undefined) {
            enabled = !this.bgColorPickerButton.isToggled();
        }
        this.bgColorPickerButton.setToggled(enabled);
        if (shouldTriggerEvent) {
            this.dispatchEventToListeners("BackgroundColorPickerWillBeToggled" /* Events.BackgroundColorPickerWillBeToggled */, enabled);
        }
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.setEyeDropperActive(enabled);
        if (enabled) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.events.addEventListener(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHostAPI.Events.EyeDropperPickedColor, this.bgColorPickedBound);
        }
        else {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.events.removeEventListener(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHostAPI.Events.EyeDropperPickedColor, this.bgColorPickedBound);
        }
    }
    bgColorPicked({ data: rgbColor, }) {
        const rgba = [rgbColor.r, rgbColor.g, rgbColor.b, (rgbColor.a / 2.55 | 0) / 100];
        const color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Legacy.fromRGBA(rgba);
        this.contrastInfo.setBgColor(color);
        this.toggleBackgroundColorPickerInternal(false);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.bringToFront();
    }
}
class Swatch {
    parentElement;
    swatchElement;
    swatchInnerElement;
    textPreview;
    constructor(parentElement) {
        this.parentElement = parentElement;
        this.swatchElement = parentElement.createChild('span', 'swatch contrast swatch-inner-white');
        this.swatchInnerElement = this.swatchElement.createChild('span', 'swatch-inner');
        this.textPreview = this.swatchElement.createChild('div', 'text-preview');
        this.textPreview.textContent = 'Aa';
    }
    setColors(fgColor, bgColor) {
        this.textPreview.style.color = fgColor.asString("rgba" /* Common.Color.Format.RGBA */);
        this.swatchInnerElement.style.backgroundColor = bgColor.asString("rgba" /* Common.Color.Format.RGBA */);
        // Show border if the swatch is white.
        this.swatchElement.classList.toggle('swatch-inner-white', bgColor.as("hsl" /* Common.Color.Format.HSL */).l > 0.9);
    }
}
//# sourceMappingURL=ContrastDetails.js.map

/***/ })

}]);