"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_inline_editor_FontEditor_js"],{

/***/ "./ui/legacy/components/inline_editor/FontEditor.js":
/*!**********************************************************!*\
  !*** ./ui/legacy/components/inline_editor/FontEditor.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FontEditor: () => (/* binding */ FontEditor)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _fontEditor_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fontEditor.css.js */ "./ui/legacy/components/inline_editor/fontEditor.css.js");
/* harmony import */ var _FontEditorUnitConverter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FontEditorUnitConverter.js */ "./ui/legacy/components/inline_editor/FontEditorUnitConverter.js");
/* harmony import */ var _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FontEditorUtils.js */ "./ui/legacy/components/inline_editor/FontEditorUtils.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.










const UIStrings = {
    /**
     *@description Font editor label for font family selector
     */
    fontFamily: 'Font Family',
    /**
     *@description Section header for CSS property inputs
     */
    cssProperties: 'CSS Properties',
    /**
     *@description Font size slider label for Font Editor
     */
    fontSize: 'Font Size',
    /**
     *@description Line height slider label for Font Editor
     */
    lineHeight: 'Line Height',
    /**
     *@description Font weight slider label for Font Editor
     */
    fontWeight: 'Font Weight',
    /**
     *@description Label for letter-spacing labels
     */
    spacing: 'Spacing',
    /**
     *@description Label for numbered fallback selectors
     *@example {2} PH1
     */
    fallbackS: 'Fallback {PH1}',
    /**
     *@description Announcement for deleting an empty font family selector in the Font Editor
     *@example {2} PH1
     */
    thereIsNoValueToDeleteAtIndexS: 'There is no value to delete at index: {PH1}',
    /**
     *@description Announcement when deleting a font selector in the Font Editor
     *@example {2} PH1
     */
    fontSelectorDeletedAtIndexS: 'Font Selector deleted at index: {PH1}',
    /**
     *@description Label for Font Editor button to delete font family/fallback selectors
     *@example {Fallback 1} PH1
     */
    deleteS: 'Delete {PH1}',
    /**
     * @description Warning message for Font Editor invalid text input. The placeholder is the name of
     * the CSS attribute that is incorrect.
     * @example {font-size} PH1
     */
    PleaseEnterAValidValueForSText: '* Please enter a valid value for {PH1} text input',
    /**
     *@description Error text in Font Editor
     *@example {font-size} PH1
     */
    thisPropertyIsSetToContainUnits: 'This property is set to contain units but does not have a defined corresponding unitsArray: {PH1}',
    /**
     *@description Label for slider input in the Font Editor.
     *@example {font-size} PH1
     */
    sSliderInput: '{PH1} Slider Input',
    /**
     *@description Accessible label for a text input for a property in the Font Editor.
     *@example {font-size} PH1
     */
    sTextInput: '{PH1} Text Input',
    /**
     *@description Font Editor units text box label
     */
    units: 'Units',
    /**
     * @description Accessible name for Font Editor unit input. The placeholder is the name of the font
     * property that this UI input controls. e.g. font-size, line-height, line-weight.
     * @example {font-size} PH1
     */
    sUnitInput: '{PH1} Unit Input',
    /**
     *@description Text used in the Font Editor for the key values selector
     *@example {font-size} PH1
     */
    sKeyValueSelector: '{PH1} Key Value Selector',
    /**
     * @description Label for Font Editor toggle input type button. The placeholder is the name of the
     * font property that this UI input controls. e.g. font-size, line-height, line-weight. Tooltip for
     * a button next to the text input which allows the user to change the input type. When they click
     * this button, the UI changes to allow the user to choose from a list of pre-selected font
     * categories.
     * @example {font-size} PH1
     */
    sToggleInputType: '{PH1} toggle input type',
    /**
     *@description Label for Font Editor alert in CSS Properties section when toggling inputs
     */
    selectorInputMode: 'Selector Input Mode',
    /**
     *@description Label for Font Editor alert in CSS Properties section when toggling inputs
     */
    sliderInputMode: 'Slider Input Mode',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('ui/legacy/components/inline_editor/FontEditor.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class FontEditor extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox) {
    selectedNode;
    propertyMap;
    fontSelectorSection;
    fontSelectors;
    fontsList;
    constructor(propertyMap) {
        super(true);
        this.selectedNode = _legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMNode);
        this.propertyMap = propertyMap;
        this.contentElement.tabIndex = 0;
        this.contentElement.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.dialog('font-editor').parent('mapped').track({ keydown: 'Enter|Escape' })}`);
        this.setDefaultFocusedElement(this.contentElement);
        // Font Selector Section
        this.fontSelectorSection = this.contentElement.createChild('div', 'font-selector-section');
        this.fontSelectorSection.createChild('h2', 'font-section-header').textContent = i18nString(UIStrings.fontFamily);
        this.fontSelectors = [];
        this.fontsList = null;
        const propertyValue = this.propertyMap.get('font-family');
        void this.createFontSelectorSection(propertyValue);
        //  CSS Font Property Section
        const cssPropertySection = this.contentElement.createChild('div', 'font-section');
        cssPropertySection.createChild('h2', 'font-section-header').textContent = i18nString(UIStrings.cssProperties);
        // The regexes only handle valid property values as invalid values are not passed into the property map.
        const fontSizePropertyInfo = this.getPropertyInfo('font-size', _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_9__.FontSizeStaticParams.regex);
        const lineHeightPropertyInfo = this.getPropertyInfo('line-height', _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_9__.LineHeightStaticParams.regex);
        const fontWeightPropertyInfo = this.getPropertyInfo('font-weight', _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_9__.FontWeightStaticParams.regex);
        const letterSpacingPropertyInfo = this.getPropertyInfo('letter-spacing', _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_9__.LetterSpacingStaticParams.regex);
        new FontPropertyInputs('font-size', i18nString(UIStrings.fontSize), cssPropertySection, fontSizePropertyInfo, _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_9__.FontSizeStaticParams, this.updatePropertyValue.bind(this), this.resizePopout.bind(this), 
        /** hasUnits= */ true);
        new FontPropertyInputs('line-height', i18nString(UIStrings.lineHeight), cssPropertySection, lineHeightPropertyInfo, _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_9__.LineHeightStaticParams, this.updatePropertyValue.bind(this), this.resizePopout.bind(this), 
        /** hasUnits= */ true);
        new FontPropertyInputs('font-weight', i18nString(UIStrings.fontWeight), cssPropertySection, fontWeightPropertyInfo, _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_9__.FontWeightStaticParams, this.updatePropertyValue.bind(this), this.resizePopout.bind(this), 
        /** hasUnits= */ false);
        new FontPropertyInputs('letter-spacing', i18nString(UIStrings.spacing), cssPropertySection, letterSpacingPropertyInfo, _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_9__.LetterSpacingStaticParams, this.updatePropertyValue.bind(this), this.resizePopout.bind(this), 
        /** hasUnits= */ true);
    }
    wasShown() {
        this.registerCSSFiles([_fontEditor_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]]);
    }
    async createFontSelectorSection(propertyValue) {
        if (propertyValue) {
            // FIXME(crbug.com/1148434): propertyValue will not be split correctly for font family names that contain commas.
            // e.g. font-family: "Name,with,commas"
            const splitValue = propertyValue.split(',');
            await this.createFontSelector(splitValue[0], /* isPrimary= */ true);
            if (!_FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_9__.GlobalValues.includes(splitValue[0])) {
                // We add one to the splitValue length so that we have an additional empty fallback selector
                for (let i = 1; i < splitValue.length + 1; i++) {
                    void this.createFontSelector(splitValue[i]);
                }
            }
        }
        else {
            void this.createFontSelector('', true);
        }
        this.resizePopout();
    }
    async createFontsList() {
        const computedFontArray = await _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_9__.generateComputedFontArray();
        const computedMap = new Map();
        const splicedArray = this.splitComputedFontArray(computedFontArray);
        computedMap.set('Computed Fonts', splicedArray);
        const systemMap = new Map();
        systemMap.set('System Fonts', _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_9__.SystemFonts);
        systemMap.set('Generic Families', _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_9__.GenericFonts);
        const fontList = [];
        fontList.push(computedMap);
        fontList.push(systemMap);
        return fontList;
    }
    splitComputedFontArray(computedFontArray) {
        const array = [];
        for (const fontFamilyValue of computedFontArray) {
            if (fontFamilyValue.includes(',')) {
                const fonts = fontFamilyValue.split(',');
                fonts.forEach(element => {
                    if (array.findIndex(item => item.toLowerCase() === element.trim().toLowerCase().replace(/"/g, '\'')) === -1) {
                        array.push(element.trim().replace(/"/g, ''));
                    }
                });
            }
            else if (array.findIndex(item => item.toLowerCase() === fontFamilyValue.toLowerCase().replace('"', '\'')) === -1) {
                array.push(fontFamilyValue.replace(/"/g, ''));
            }
        }
        return array;
    }
    async createFontSelector(value, isPrimary) {
        // FIXME(crbug.com/1148434): Custom font family names that use single/double quotes in the font family name will not be handled correctly.
        // e.g. font-family: "FontWith\"DoubleQuotes"
        value = value ? value.trim() : '';
        if (value) {
            const firstChar = value.charAt(0);
            if (firstChar === '\'') {
                value = value.replace(/'/g, '');
            }
            else if (firstChar === '"') {
                value = value.replace(/"/g, '');
            }
        }
        const selectorField = this.fontSelectorSection.createChild('div', 'shadow-editor-field shadow-editor-flex-field');
        if (!this.fontsList) {
            this.fontsList = await this.createFontsList();
        }
        let label;
        if (isPrimary) {
            label = i18nString(UIStrings.fontFamily);
            const globalValuesMap = new Map([['Global Values', _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_9__.GlobalValues]]);
            const primaryFontList = [...this.fontsList];
            primaryFontList.push(globalValuesMap);
            this.createSelector(selectorField, label, primaryFontList, value.trim(), 'primary-font-family');
        }
        else {
            label = i18nString(UIStrings.fallbackS, { PH1: this.fontSelectors.length });
            this.createSelector(selectorField, label, this.fontsList, value.trim(), 'fallback-font-family');
        }
    }
    deleteFontSelector(index, isGlobalValue) {
        let fontSelectorObject = this.fontSelectors[index];
        const isPrimary = index === 0;
        if (fontSelectorObject.input.value === '' && !isGlobalValue) {
            _legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.alert(i18nString(UIStrings.thereIsNoValueToDeleteAtIndexS, { PH1: index }));
            return;
        }
        if (isPrimary) {
            // When deleting the primary font selector, we overwrite the value of the primary selector
            // with the value of the secondary selector and delete the secondary selector.
            const secondarySelector = this.fontSelectors[1];
            let newPrimarySelectorValue = '';
            if (secondarySelector) {
                newPrimarySelectorValue = secondarySelector.input.value;
                fontSelectorObject = secondarySelector;
            }
            const primarySelector = this.fontSelectors[0].input;
            primarySelector.value = newPrimarySelectorValue;
            index = 1;
        }
        if (fontSelectorObject.input.parentNode) {
            const hasSecondarySelector = this.fontSelectors.length > 1;
            if (!isPrimary || hasSecondarySelector) {
                const selectorElement = fontSelectorObject.input.parentElement;
                if (selectorElement) {
                    selectorElement.remove();
                    this.fontSelectors.splice(index, 1);
                    this.updateFontSelectorList();
                }
            }
            _legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.alert(i18nString(UIStrings.fontSelectorDeletedAtIndexS, { PH1: index }));
        }
        this.onFontSelectorChanged();
        this.resizePopout();
        const focusIndex = isPrimary ? 0 : index - 1;
        this.fontSelectors[focusIndex].input.focus();
    }
    updateFontSelectorList() {
        for (let i = 0; i < this.fontSelectors.length; i++) {
            const fontSelectorObject = this.fontSelectors[i];
            let label;
            if (i === 0) {
                label = i18nString(UIStrings.fontFamily);
            }
            else {
                label = i18nString(UIStrings.fallbackS, { PH1: i });
            }
            fontSelectorObject.label.textContent = label;
            _legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setLabel(fontSelectorObject.input, label);
            fontSelectorObject.deleteButton.setTitle(i18nString(UIStrings.deleteS, { PH1: label }));
            fontSelectorObject.index = i;
        }
    }
    getPropertyInfo(name, regex) {
        const value = this.propertyMap.get(name);
        if (value) {
            const valueString = value;
            const match = valueString.match(regex);
            if (match) {
                const retValue = match[1].charAt(0) === '+' ? match[1].substr(1) : match[1];
                const retUnits = match[2] ? match[2] : '';
                return { value: retValue, units: retUnits };
            }
            return { value: valueString, units: null };
        }
        return { value: null, units: null };
    }
    createSelector(field, label, options, currentValue, jslogContext) {
        const index = this.fontSelectors.length;
        const selectInput = _legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createSelect(label, options);
        selectInput.value = currentValue;
        selectInput.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.dropDown(jslogContext).track({ click: true, change: true })}`);
        const selectLabel = _legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createLabel(label, 'shadow-editor-label', selectInput);
        selectInput.addEventListener('input', this.onFontSelectorChanged.bind(this), false);
        // We want to prevent the Enter key from propagating to the SwatchPopoverHelper which will close the editor.
        selectInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.consume();
            }
        }, false);
        field.appendChild(selectLabel);
        field.appendChild(selectInput);
        const deleteToolbar = new _legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar('', field);
        const deleteButton = new _legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton(i18nString(UIStrings.deleteS, { PH1: label }), 'bin', undefined, 'delete');
        deleteToolbar.appendToolbarItem(deleteButton);
        const fontSelectorObject = { label: selectLabel, input: selectInput, deleteButton, index };
        deleteButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, () => {
            this.deleteFontSelector(fontSelectorObject.index);
        });
        deleteButton.element.addEventListener('keydown', (event) => {
            if (_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.KeyboardUtilities.isEnterOrSpaceKey(event)) {
                this.deleteFontSelector(fontSelectorObject.index);
                event.consume();
            }
        }, false);
        this.fontSelectors.push(fontSelectorObject);
    }
    onFontSelectorChanged() {
        let value = '';
        const isGlobalValue = _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_9__.GlobalValues.includes(this.fontSelectors[0].input.value);
        if (isGlobalValue) {
            for (let i = 1; i < this.fontSelectors.length; i++) {
                this.deleteFontSelector(i, /** isGlobalValue= */ true);
            }
        }
        for (const fontSelector of this.fontSelectors) {
            const fontSelectorInput = fontSelector.input;
            if (fontSelectorInput.value !== '') {
                if (value === '') {
                    value = this.fontSelectors[0].input.value;
                }
                else {
                    value += ', ' + fontSelectorInput.value;
                }
            }
        }
        // Add an extra blank selector as long as the last selector doesn't have an empty value, the primary
        // selector's value is not a global value and if the list of selectors has not exceeded 10.
        if (this.fontSelectors[this.fontSelectors.length - 1].input.value !== '' && !isGlobalValue &&
            this.fontSelectors.length < 10) {
            void this.createFontSelector(/** value= */ '');
            this.resizePopout();
        }
        this.updatePropertyValue('font-family', value);
    }
    updatePropertyValue(propertyName, value) {
        this.dispatchEventToListeners("FontChanged" /* Events.FontChanged */, { propertyName, value });
    }
    resizePopout() {
        this.dispatchEventToListeners("FontEditorResized" /* Events.FontEditorResized */);
    }
}
class FontPropertyInputs {
    showSliderMode;
    errorText;
    propertyInfo;
    propertyName;
    staticParams;
    hasUnits;
    units;
    addedUnit;
    initialRange;
    boundUpdateCallback;
    boundResizeCallback;
    selectedNode;
    sliderInput;
    textBoxInput;
    unitInput;
    selectorInput;
    applyNextInput;
    constructor(propertyName, label, field, propertyInfo, staticParams, updateCallback, resizeCallback, hasUnits) {
        this.showSliderMode = true;
        const propertyField = field.createChild('div', 'shadow-editor-field shadow-editor-flex-field');
        this.errorText = field.createChild('div', 'error-text');
        this.errorText.textContent = i18nString(UIStrings.PleaseEnterAValidValueForSText, { PH1: propertyName });
        this.errorText.hidden = true;
        _legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsAlert(this.errorText);
        this.propertyInfo = propertyInfo;
        this.propertyName = propertyName;
        this.staticParams = staticParams;
        // Unit handling
        this.hasUnits = hasUnits;
        if (this.hasUnits && this.staticParams.units && this.staticParams.defaultUnit !== null) {
            const defaultUnits = this.staticParams.defaultUnit;
            this.units = propertyInfo.units !== null ? propertyInfo.units : defaultUnits;
            this.addedUnit = !this.staticParams.units.has(this.units);
        }
        else if (this.hasUnits) {
            throw new Error(i18nString(UIStrings.thisPropertyIsSetToContainUnits, { PH1: propertyName }));
        }
        else {
            this.units = '';
        }
        this.initialRange = this.getUnitRange();
        this.boundUpdateCallback = updateCallback;
        this.boundResizeCallback = resizeCallback;
        this.selectedNode = _legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMNode);
        const propertyLabel = _legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createLabel(label, 'shadow-editor-label');
        propertyField.append(propertyLabel);
        this.sliderInput = this.createSliderInput(propertyField, propertyName);
        this.textBoxInput = this.createTextBoxInput(propertyField, propertyName);
        _legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.bindLabelToControl(propertyLabel, this.textBoxInput);
        this.unitInput = this.createUnitInput(propertyField, `${propertyName}-unit`);
        this.selectorInput = this.createSelectorInput(propertyField, propertyName);
        this.createTypeToggle(propertyField, `${propertyName}-value-type`);
        this.checkSelectorValueAndToggle();
        this.applyNextInput = false;
    }
    setInvalidTextBoxInput(invalid) {
        if (invalid) {
            if (this.errorText.hidden) {
                this.errorText.hidden = false;
                this.textBoxInput.classList.add('error-input');
                this.boundResizeCallback();
            }
        }
        else {
            if (!this.errorText.hidden) {
                this.errorText.hidden = true;
                this.textBoxInput.classList.remove('error-input');
                this.boundResizeCallback();
            }
        }
    }
    checkSelectorValueAndToggle() {
        if (this.staticParams.keyValues && this.propertyInfo.value !== null &&
            (this.staticParams.keyValues.has(this.propertyInfo.value))) {
            this.toggleInputType();
            return true;
        }
        return false;
    }
    getUnitRange() {
        let min = 0;
        let max = 100;
        let step = 1;
        if (this.propertyInfo.value !== null && /\d/.test(this.propertyInfo.value)) {
            if (this.staticParams.rangeMap.get(this.units)) {
                const unitRangeMap = this.staticParams.rangeMap.get(this.units);
                if (unitRangeMap) {
                    min = Math.min(unitRangeMap.min, parseFloat(this.propertyInfo.value));
                    max = Math.max(unitRangeMap.max, parseFloat(this.propertyInfo.value));
                    step = unitRangeMap.step;
                }
            }
            else {
                const unitRangeMap = this.staticParams.rangeMap.get('px');
                if (unitRangeMap) {
                    min = Math.min(unitRangeMap.min, parseFloat(this.propertyInfo.value));
                    max = Math.max(unitRangeMap.max, parseFloat(this.propertyInfo.value));
                    step = unitRangeMap.step;
                }
            }
        }
        else {
            const unitRangeMap = this.staticParams.rangeMap.get(this.units);
            if (unitRangeMap) {
                min = unitRangeMap.min;
                max = unitRangeMap.max;
                step = unitRangeMap.step;
            }
        }
        return { min, max, step };
    }
    createSliderInput(field, jslogContext) {
        const min = this.initialRange.min;
        const max = this.initialRange.max;
        const step = this.initialRange.step;
        const slider = _legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createSlider(min, max, -1);
        slider.sliderElement.step = step.toString();
        slider.sliderElement.tabIndex = 0;
        if (this.propertyInfo.value) {
            slider.value = parseFloat(this.propertyInfo.value);
        }
        else {
            const newValue = (min + max) / 2;
            slider.value = newValue;
        }
        slider.addEventListener('input', event => {
            this.onSliderInput(event, /** apply= */ false);
        });
        slider.addEventListener('mouseup', event => {
            this.onSliderInput(event, /** apply= */ true);
        });
        slider.addEventListener('keydown', event => {
            if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' ||
                event.key === 'ArrowRight') {
                // Pressing an arrow key will trigger two events for the slider: A keyboard event and an input event
                // The keyboard event will come before the slider value has changed and the subsequent input event will cause
                // the value to change.  We use the applyNextInput boolean to tell onSliderInput that the next input event
                // is coming because of the keyboard event and that it should be applied to the section.
                this.applyNextInput = true;
            }
        });
        field.appendChild(slider);
        _legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setLabel(slider.sliderElement, i18nString(UIStrings.sSliderInput, { PH1: this.propertyName }));
        slider.sliderElement.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.slider(jslogContext).track({ change: true })}`);
        return slider;
    }
    createTextBoxInput(field, jslogContext) {
        const textBoxInput = _legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createInput('shadow-editor-text-input', 'number', jslogContext);
        textBoxInput.step = this.initialRange.step.toString();
        textBoxInput.classList.add('font-editor-text-input');
        if (this.propertyInfo.value !== null) {
            if (this.propertyInfo.value.charAt(0) === '+') {
                this.propertyInfo.value = this.propertyInfo.value.substr(1);
            }
            textBoxInput.value = this.propertyInfo.value;
        }
        textBoxInput.step = 'any';
        textBoxInput.addEventListener('input', this.onTextBoxInput.bind(this), false);
        field.appendChild(textBoxInput);
        _legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setLabel(textBoxInput, i18nString(UIStrings.sTextInput, { PH1: this.propertyName }));
        return textBoxInput;
    }
    createUnitInput(field, jslogContext) {
        let unitInput;
        if (this.hasUnits && this.staticParams.units) {
            const currentValue = this.propertyInfo.units;
            const options = this.staticParams.units;
            unitInput = _legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createSelect(i18nString(UIStrings.units), options);
            unitInput.classList.add('font-editor-select');
            if (this.addedUnit && currentValue) {
                unitInput.add(new Option(currentValue, currentValue));
            }
            if (currentValue) {
                unitInput.value = currentValue;
            }
            unitInput.addEventListener('change', this.onUnitInput.bind(this), false);
        }
        else {
            unitInput = _legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createSelect(i18nString(UIStrings.units), []);
            unitInput.classList.add('font-editor-select');
            unitInput.disabled = true;
        }
        unitInput.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.dropDown(jslogContext).track({ click: true, change: true })}`);
        // We want to prevent the Enter key from propagating to the SwatchPopoverHelper which will close the editor.
        unitInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.consume();
            }
        }, false);
        field.appendChild(unitInput);
        _legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setLabel(unitInput, i18nString(UIStrings.sUnitInput, { PH1: this.propertyName }));
        return unitInput;
    }
    createSelectorInput(field, jslogContext) {
        const selectInput = _legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createSelect(i18nString(UIStrings.sKeyValueSelector, { PH1: this.propertyName }), this.staticParams.keyValues);
        selectInput.classList.add('font-selector-input');
        if (this.propertyInfo.value) {
            selectInput.value = this.propertyInfo.value;
        }
        selectInput.addEventListener('input', this.onSelectorInput.bind(this), false);
        // We want to prevent the Enter key from propagating to the SwatchPopoverHelper which will close the editor.
        selectInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.consume();
            }
        }, false);
        field.appendChild(selectInput);
        selectInput.hidden = true;
        selectInput.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.dropDown(jslogContext).track({ click: true, change: true })}`);
        return selectInput;
    }
    onSelectorInput(event) {
        if (event.currentTarget) {
            const value = event.currentTarget.value;
            this.textBoxInput.value = '';
            const newValue = (parseFloat(this.sliderInput.sliderElement.min) + parseFloat(this.sliderInput.sliderElement.max)) / 2;
            this.sliderInput.value = newValue;
            this.setInvalidTextBoxInput(false);
            this.boundUpdateCallback(this.propertyName, value);
        }
    }
    onSliderInput(event, apply) {
        const target = event.currentTarget;
        if (target) {
            const value = target.value;
            this.textBoxInput.value = value;
            this.selectorInput.value = '';
            const valueString = this.hasUnits ? value + this.unitInput.value : value.toString();
            this.setInvalidTextBoxInput(false);
            if (apply || this.applyNextInput) {
                this.boundUpdateCallback(this.propertyName, valueString);
                this.applyNextInput = false;
            }
        }
    }
    onTextBoxInput(event) {
        const target = event.currentTarget;
        if (target) {
            const value = target.value;
            const units = value === '' ? '' : this.unitInput.value;
            const valueString = value + units;
            if (this.staticParams.regex.test(valueString) || (value === '' && !target.validationMessage.length)) {
                if (parseFloat(value) > parseFloat(this.sliderInput.sliderElement.max)) {
                    this.sliderInput.sliderElement.max = value;
                }
                else if (parseFloat(value) < parseFloat(this.sliderInput.sliderElement.min)) {
                    this.sliderInput.sliderElement.min = value;
                }
                this.sliderInput.value = parseFloat(value);
                this.selectorInput.value = '';
                this.setInvalidTextBoxInput(false);
                this.boundUpdateCallback(this.propertyName, valueString);
            }
            else {
                this.setInvalidTextBoxInput(true);
            }
        }
    }
    async onUnitInput(event) {
        const unitInput = event.currentTarget;
        const hasFocus = unitInput.hasFocus();
        const newUnit = unitInput.value;
        unitInput.disabled = true;
        const prevUnit = this.units;
        const conversionMultiplier = await _FontEditorUnitConverter_js__WEBPACK_IMPORTED_MODULE_8__.getUnitConversionMultiplier(prevUnit, newUnit, this.propertyName === 'font-size');
        this.setInputUnits(conversionMultiplier, newUnit);
        if (this.textBoxInput.value) {
            this.boundUpdateCallback(this.propertyName, this.textBoxInput.value + newUnit);
        }
        this.units = newUnit;
        unitInput.disabled = false;
        if (hasFocus) {
            unitInput.focus();
        }
    }
    createTypeToggle(field, jslogContext) {
        const displaySwitcher = field.createChild('div', 'spectrum-switcher');
        const icon = new _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon();
        icon.data = { iconName: 'fold-more', color: 'var(--icon-default)', width: '16px', height: '16px' };
        displaySwitcher.appendChild(icon);
        _legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.setTitle(displaySwitcher, i18nString(UIStrings.sToggleInputType, { PH1: this.propertyName }));
        displaySwitcher.tabIndex = 0;
        self.onInvokeElement(displaySwitcher, this.toggleInputType.bind(this));
        _legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsButton(displaySwitcher);
        displaySwitcher.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.toggle(jslogContext).track({ click: true })}`);
    }
    toggleInputType(event) {
        if (event && event.key === 'Enter') {
            event.consume();
        }
        if (this.showSliderMode) {
            // Show selector input type
            this.sliderInput.hidden = true;
            this.textBoxInput.hidden = true;
            this.unitInput.hidden = true;
            this.selectorInput.hidden = false;
            this.showSliderMode = false;
            _legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.alert(i18nString(UIStrings.selectorInputMode));
        }
        else {
            // Show sliderinput type
            this.sliderInput.hidden = false;
            this.textBoxInput.hidden = false;
            this.unitInput.hidden = false;
            this.selectorInput.hidden = true;
            this.showSliderMode = true;
            _legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.alert(i18nString(UIStrings.sliderInputMode));
        }
    }
    setInputUnits(multiplier, newUnit) {
        const newRangeMap = this.staticParams.rangeMap.get(newUnit);
        let newMin, newMax, newStep;
        if (newRangeMap) {
            newMin = newRangeMap.min;
            newMax = newRangeMap.max;
            newStep = newRangeMap.step;
        }
        else {
            newMin = 0;
            newMax = 100;
            newStep = 1;
        }
        let hasValue = false;
        const roundingPrecision = _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_9__.getRoundingPrecision(newStep);
        let newValue = (newMin + newMax) / 2;
        if (this.textBoxInput.value) {
            hasValue = true;
            newValue = parseFloat((parseFloat(this.textBoxInput.value) * multiplier).toFixed(roundingPrecision));
        }
        this.sliderInput.sliderElement.min = Math.min(newValue, newMin).toString();
        this.sliderInput.sliderElement.max = Math.max(newValue, newMax).toString();
        this.sliderInput.sliderElement.step = newStep.toString();
        this.textBoxInput.step = newStep.toString();
        if (hasValue) {
            this.textBoxInput.value = newValue.toString();
        }
        this.sliderInput.value = newValue;
    }
}
//# sourceMappingURL=FontEditor.js.map

/***/ }),

/***/ "./ui/legacy/components/inline_editor/FontEditorUtils.js":
/*!***************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/FontEditorUtils.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FontFamilyRegex: () => (/* binding */ FontFamilyRegex),
/* harmony export */   FontPropertiesRegex: () => (/* binding */ FontPropertiesRegex),
/* harmony export */   FontSizeStaticParams: () => (/* binding */ FontSizeStaticParams),
/* harmony export */   FontWeightStaticParams: () => (/* binding */ FontWeightStaticParams),
/* harmony export */   GenericFonts: () => (/* binding */ GenericFonts),
/* harmony export */   GlobalValues: () => (/* binding */ GlobalValues),
/* harmony export */   LetterSpacingStaticParams: () => (/* binding */ LetterSpacingStaticParams),
/* harmony export */   LineHeightStaticParams: () => (/* binding */ LineHeightStaticParams),
/* harmony export */   SystemFonts: () => (/* binding */ SystemFonts),
/* harmony export */   generateComputedFontArray: () => (/* binding */ generateComputedFontArray),
/* harmony export */   getRoundingPrecision: () => (/* binding */ getRoundingPrecision)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _panels_css_overview_css_overview_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../panels/css_overview/css_overview.js */ "./panels/css_overview/css_overview.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


// The following regexes are used within in the StylesSidebarPropertyRenderer class
// and will parse both invalid and valid values. They both match full strings.
// [^- ][a-zA-Z-]+ matches property key values (e.g. smaller, x-large, initial)
// -?\+?(?:[0-9]+\.[0-9]+|\.[0-9]+|[0-9]+) matches numeric property values (e.g. -.23, 3.3, 55)
// [a-zA-Z%]{0,4} matches the units of numeric property values (e.g. px, vmin, or blank units)
const FontPropertiesRegex = /^[^- ][a-zA-Z-]+$|^-?\+?(?:[0-9]+\.[0-9]+|\.[0-9]+|[0-9]+)[a-zA-Z%]{0,4}$/;
// "[\w \,-]+",? ? matches double quoted values and the trailing comma/space (e.g. "Tahoma", )
// ('[\w \,-]+',? ?) matches single quoted values and the trailing comma/space (e.g. 'Segoe UI', )
// ([\w \,-]+,? ?) matches non quoted values and the trailing comma/space (e.g. Helvetica)
// (?: ...)+ will match 1 or more of the groups above such that it would match a value with fallbacks (e.g. "Tahoma", 'Segoe UI', Helvetica)
const FontFamilyRegex = /^"[\w \,-]+"$|^'[\w \,-]+'$|^[\w \-]+$/;
// The following regexes are used within the Font Editor and will only parse valid property values.
// Example Input/Outputs:
// font-size: "20px" -> (20)(px)
// line-height: "0.5em" -> (0.5)(em)
// font-weight: "300" -> (300);
// letter-spacing: -.625rem -> (-.625)(rem)
const fontSizeRegex = /(^[\+\d\.]+)([a-zA-Z%]+)/;
const lineHeightRegex = /(^[\+\d\.]+)([a-zA-Z%]*)/;
const fontWeightRegex = /(^[\+\d\.]+)/;
const letterSpacingRegex = /([\+-0-9\.]+)([a-zA-Z%]+)/;
const fontSizeUnits = new Set(['px', 'em', 'rem', '%', 'vh', 'vw']);
const lineHeightUnits = new Set(['', 'px', 'em', '%']);
const letterSpacingUnits = new Set(['em', 'rem', 'px']);
const fontSizeKeyValuesArray = [
    '',
    'xx-small',
    'x-small',
    'smaller',
    'small',
    'medium',
    'large',
    'larger',
    'x-large',
    'xx-large',
];
const lineHeightKeyValuesArray = ['', 'normal'];
const fontWeightKeyValuesArray = ['', 'lighter', 'normal', 'bold', 'bolder'];
const letterSpacingKeyValuesArray = ['', 'normal'];
const GlobalValues = ['inherit', 'initial', 'unset'];
fontSizeKeyValuesArray.push(...GlobalValues);
lineHeightKeyValuesArray.push(...GlobalValues);
fontWeightKeyValuesArray.push(...GlobalValues);
letterSpacingKeyValuesArray.push(...GlobalValues);
const fontSizeKeyValues = new Set(fontSizeKeyValuesArray);
const lineHeightKeyValues = new Set(lineHeightKeyValuesArray);
const fontWeightKeyValues = new Set(fontWeightKeyValuesArray);
const letterSpacingKeyValues = new Set(letterSpacingKeyValuesArray);
const fontSizeRangeMap = new Map([
    // Common Units
    ['px', { min: 0, max: 72, step: 1 }],
    ['em', { min: 0, max: 4.5, step: .1 }],
    ['rem', { min: 0, max: 4.5, step: .1 }],
    ['%', { min: 0, max: 450, step: 1 }],
    ['vh', { min: 0, max: 10, step: .1 }],
    ['vw', { min: 0, max: 10, step: .1 }],
    // Extra Units
    ['vmin', { min: 0, max: 10, step: .1 }],
    ['vmax', { min: 0, max: 10, step: .1 }],
    ['cm', { min: 0, max: 2, step: .1 }],
    ['mm', { min: 0, max: 20, step: .1 }],
    ['in', { min: 0, max: 1, step: .01 }],
    ['pt', { min: 0, max: 54, step: 1 }],
    ['pc', { min: 0, max: 4.5, step: .1 }],
]);
const lineHeightRangeMap = new Map([
    // Common Units
    ['', { min: 0, max: 2, step: .1 }],
    ['em', { min: 0, max: 2, step: .1 }],
    ['%', { min: 0, max: 200, step: 1 }],
    ['px', { min: 0, max: 32, step: 1 }],
    // Extra Units
    ['rem', { min: 0, max: 2, step: .1 }],
    ['vh', { min: 0, max: 4.5, step: .1 }],
    ['vw', { min: 0, max: 4.5, step: .1 }],
    ['vmin', { min: 0, max: 4.5, step: .1 }],
    ['vmax', { min: 0, max: 4.5, step: .1 }],
    ['cm', { min: 0, max: 1, step: .1 }],
    ['mm', { min: 0, max: 8.5, step: .1 }],
    ['in', { min: 0, max: .5, step: .1 }],
    ['pt', { min: 0, max: 24, step: 1 }],
    ['pc', { min: 0, max: 2, step: .1 }],
]);
const fontWeightRangeMap = new Map([
    ['', { min: 100, max: 700, step: 100 }],
]);
const letterSpacingRangeMap = new Map([
    // Common Units
    ['px', { min: -10, max: 10, step: .01 }],
    ['em', { min: -0.625, max: 0.625, step: .001 }],
    ['rem', { min: -0.625, max: 0.625, step: .001 }],
    // Extra Units
    ['%', { min: -62.5, max: 62.5, step: .1 }],
    ['vh', { min: -1.5, max: 1.5, step: .01 }],
    ['vw', { min: -1.5, max: 1.5, step: .01 }],
    ['vmin', { min: -1.5, max: 1.5, step: .01 }],
    ['vmax', { min: -1.5, max: 1.5, step: .01 }],
    ['cm', { min: -0.25, max: .025, step: .001 }],
    ['mm', { min: -2.5, max: 2.5, step: .01 }],
    ['in', { min: -0.1, max: 0.1, step: .001 }],
    ['pt', { min: -7.5, max: 7.5, step: .01 }],
    ['pc', { min: -0.625, max: 0.625, step: .001 }],
]);
const FontSizeStaticParams = {
    regex: fontSizeRegex,
    units: fontSizeUnits,
    keyValues: fontSizeKeyValues,
    rangeMap: fontSizeRangeMap,
    defaultUnit: 'px',
};
const LineHeightStaticParams = {
    regex: lineHeightRegex,
    units: lineHeightUnits,
    keyValues: lineHeightKeyValues,
    rangeMap: lineHeightRangeMap,
    defaultUnit: '',
};
const FontWeightStaticParams = {
    regex: fontWeightRegex,
    units: null,
    keyValues: fontWeightKeyValues,
    rangeMap: fontWeightRangeMap,
    defaultUnit: null,
};
const LetterSpacingStaticParams = {
    regex: letterSpacingRegex,
    units: letterSpacingUnits,
    keyValues: letterSpacingKeyValues,
    rangeMap: letterSpacingRangeMap,
    defaultUnit: 'em',
};
const SystemFonts = [
    'Arial',
    'Bookman',
    'Candara',
    'Comic Sans MS',
    'Courier New',
    'Garamond',
    'Georgia',
    'Helvetica',
    'Impact',
    'Palatino',
    'Roboto',
    'Times New Roman',
    'Verdana',
];
const GenericFonts = [
    'serif',
    'sans-serif',
    'monspace',
    'cursive',
    'fantasy',
    'system-ui',
    'ui-serif',
    'ui-sans-serif',
    'ui-monospace',
    'ui-rounded',
    'emoji',
    'math',
    'fangsong',
];
async function generateComputedFontArray() {
    const modelArray = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().models(_panels_css_overview_css_overview_js__WEBPACK_IMPORTED_MODULE_1__.CSSOverviewModel.CSSOverviewModel);
    if (modelArray) {
        const cssOverviewModel = modelArray[0];
        if (cssOverviewModel) {
            const { fontInfo } = await cssOverviewModel.getNodeStyleStats();
            const computedFontArray = Array.from(fontInfo.keys());
            return computedFontArray;
        }
    }
    return [];
}
function getRoundingPrecision(step) {
    switch (step) {
        case 1:
            return 0;
        case .1:
            return 1;
        case .01:
            return 2;
        case .001:
            return 3;
        default:
            return 0;
    }
}
//# sourceMappingURL=FontEditorUtils.js.map

/***/ }),

/***/ "./ui/legacy/components/inline_editor/fontEditor.css.js":
/*!**************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/fontEditor.css.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2020 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  user-select: none;
  padding: 4px 12px 12px;
}

.error-input {
  box-shadow: 0 0 0 1px var(--sys-color-error);
}

.error-text {
  color: var(--sys-color-error);
  padding: 6px 0;
}

.warning-input {
  --override-warning-input-color: #ffdd9e;

  box-shadow: 0 0 0 1px var(--override-warning-input-color);
}

.theme-with-dark-background .warning-input,
:host-context(.theme-with-dark-background) .warning-input {
  --override-warning-input-color: rgb(97 63 0);
}

.hide-warning {
  display: none;
}

.font-section-header {
  font-weight: normal;
  font-size: 17px;
  text-align: left;
}

.font-section-subheader {
  font-size: 12px;
  text-align: left;
  font-weight: bold;
}

.font-selector-section {
  overflow-y: auto;
  padding-bottom: 10px;
}

.font-selector-input {
  width: 204px;
  text-align-last: center;
}

.font-reset-button {
  width: 100%;
  margin-top: 10px;
}

.font-section {
  border-top: 1px solid var(--sys-color-divider);
}

.chrome-select.font-editor-select {
  min-width: 50px;
  min-height: 27px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  display: none;
  margin: 0;
}

.preview-text {
  max-width: 300px;
  word-break: break-word;
  display: block;
}

.rendered-font-list-label {
  font-weight: bold;
  font-size: 12px;
}

.rendered-font-list {
  padding: 5px 0;
}

.shadow-editor-field {
  height: 24px;
  margin-top: 8px;
  font-size: 12px;
  flex-shrink: 0;
}

.shadow-editor-field:last-of-type {
  margin-bottom: 8px;
}

.shadow-editor-flex-field {
  display: flex;
  align-items: center;
  flex-direction: row;
}

.shadow-editor-field.shadow-editor-blur-field {
  margin-top: 40px;
}

.shadow-editor-2D-slider {
  position: absolute;
  height: 88px;
  width: 88px;
  border: 1px solid var(--divider-line);
  border-radius: 2px;
}

.shadow-editor-label {
  display: inline-block;
  width: 70px;
  height: 24px;
  line-height: 24px;
  margin-right: 8px;
  text-align: left;
}

.shadow-editor-button-left,
.shadow-editor-button-right {
  width: 74px;
  height: 24px;
  padding: 3px 7px;
  line-height: 16px;
  border: 1px solid var(--divider-line);
  color: var(--sys-color-on-surface);
  background-color: var(--sys-color-cdt-base-container);
  text-align: center;
  font-weight: 500;
}

.shadow-editor-button-left {
  border-radius: 2px 0 0 2px;
}

.shadow-editor-button-right {
  border-radius: 0 2px 2px 0;
  border-left-width: 0;
}

.shadow-editor-button-left:hover,
.shadow-editor-button-right:hover {
  box-shadow: 0 1px 1px var(--divider-line);
}

.shadow-editor-button-left:focus,
.shadow-editor-button-right:focus {
  background-color: var(--sys-color-state-focus-highlight);
}

.shadow-editor-text-input {
  width: 50px;
  margin: 8px;
  text-align: center;
  box-shadow: var(--legacy-focus-ring-inactive-shadow);
}

.spectrum-switcher {
  border-radius: 2px;
  height: 20px;
  width: 20px;
  padding: 2px;
  margin-left: 5px;
}

.spectrum-switcher:hover {
  background-color: var(--sys-color-state-hover-on-subtle);
}

.spectrum-switcher:focus-visible {
  background-color: var(--sys-color-state-focus-highlight);
}

/*# sourceURL=fontEditor.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);