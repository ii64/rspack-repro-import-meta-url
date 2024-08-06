"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_ColorSwatchPopoverIcon_js"],{

/***/ "./panels/elements/ColorSwatchPopoverIcon.js":
/*!***************************************************!*\
  !*** ./panels/elements/ColorSwatchPopoverIcon.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BezierPopoverIcon: () => (/* binding */ BezierPopoverIcon),
/* harmony export */   ColorSwatchPopoverIcon: () => (/* binding */ ColorSwatchPopoverIcon),
/* harmony export */   FontEditorSectionManager: () => (/* binding */ FontEditorSectionManager),
/* harmony export */   ShadowSwatchPopoverHelper: () => (/* binding */ ShadowSwatchPopoverHelper)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _ui_legacy_components_color_picker_color_picker_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/color_picker/color_picker.js */ "./ui/legacy/components/color_picker/color_picker.js");
/* harmony import */ var _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/inline_editor/inline_editor.js */ "./ui/legacy/components/inline_editor/inline_editor.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







const UIStrings = {
    /**
     * @description Tooltip text for an icon that opens the cubic bezier editor, which is a tool that
     * allows the user to edit cubic-bezier CSS properties directly.
     */
    openCubicBezierEditor: 'Open cubic bezier editor',
    /**
     * @description Tooltip text for an icon that opens shadow editor. The shadow editor is a tool
     * which allows the user to edit CSS shadow properties.
     */
    openShadowEditor: 'Open shadow editor',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/elements/ColorSwatchPopoverIcon.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
class BezierPopoverIcon {
    treeElement;
    swatchPopoverHelper;
    swatch;
    boundBezierChanged;
    boundOnScroll;
    bezierEditor;
    scrollerElement;
    originalPropertyText;
    constructor({ treeElement, swatchPopoverHelper, swatch, }) {
        this.treeElement = treeElement;
        this.swatchPopoverHelper = swatchPopoverHelper;
        this.swatch = swatch;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install(this.swatch.iconElement(), i18nString(UIStrings.openCubicBezierEditor));
        this.swatch.iconElement().addEventListener('click', this.iconClick.bind(this), false);
        this.swatch.iconElement().addEventListener('mousedown', (event) => event.consume(), false);
        this.boundBezierChanged = this.bezierChanged.bind(this);
        this.boundOnScroll = this.onScroll.bind(this);
    }
    iconClick(event) {
        event.consume(true);
        if (this.swatchPopoverHelper.isShowing()) {
            this.swatchPopoverHelper.hide(true);
            return;
        }
        const model = _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_5__.AnimationTimingModel.AnimationTimingModel.parse(this.swatch.bezierText()) ||
            _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_5__.AnimationTimingModel.LINEAR_BEZIER;
        this.bezierEditor = new _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_5__.BezierEditor.BezierEditor(model);
        this.bezierEditor.addEventListener("BezierChanged" /* InlineEditor.BezierEditor.Events.BezierChanged */, this.boundBezierChanged);
        this.swatchPopoverHelper.show(this.bezierEditor, this.swatch.iconElement(), this.onPopoverHidden.bind(this));
        this.scrollerElement = this.swatch.enclosingNodeOrSelfWithClass('style-panes-wrapper');
        if (this.scrollerElement) {
            this.scrollerElement.addEventListener('scroll', this.boundOnScroll, false);
        }
        this.originalPropertyText = this.treeElement.property.propertyText;
        this.treeElement.parentPane().setEditingStyle(true);
        const uiLocation = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance().propertyUILocation(this.treeElement.property, false /* forName */);
        if (uiLocation) {
            void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(uiLocation, true /* omitFocus */);
        }
    }
    bezierChanged(event) {
        this.swatch.setBezierText(event.data);
        void this.treeElement.applyStyleText(this.treeElement.renderedPropertyText(), false);
    }
    onScroll(_event) {
        this.swatchPopoverHelper.hide(true);
    }
    onPopoverHidden(commitEdit) {
        if (this.scrollerElement) {
            this.scrollerElement.removeEventListener('scroll', this.boundOnScroll, false);
        }
        if (this.bezierEditor) {
            this.bezierEditor.removeEventListener("BezierChanged" /* InlineEditor.BezierEditor.Events.BezierChanged */, this.boundBezierChanged);
        }
        this.bezierEditor = undefined;
        const propertyText = commitEdit ? this.treeElement.renderedPropertyText() : this.originalPropertyText || '';
        void this.treeElement.applyStyleText(propertyText, true);
        this.treeElement.parentPane().setEditingStyle(false);
        delete this.originalPropertyText;
    }
}
class ColorSwatchPopoverIcon extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    treeElement;
    swatchPopoverHelper;
    swatch;
    contrastInfo;
    boundSpectrumChanged;
    boundOnScroll;
    spectrum;
    scrollerElement;
    originalPropertyText;
    constructor(treeElement, swatchPopoverHelper, swatch) {
        super();
        this.treeElement = treeElement;
        this.swatchPopoverHelper = swatchPopoverHelper;
        this.swatch = swatch;
        this.swatch.addEventListener(_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_5__.ColorSwatch.ClickEvent.eventName, this.iconClick.bind(this));
        this.contrastInfo = null;
        this.boundSpectrumChanged = this.spectrumChanged.bind(this);
        this.boundOnScroll = this.onScroll.bind(this);
    }
    generateCSSVariablesPalette() {
        const matchedStyles = this.treeElement.matchedStyles();
        const style = this.treeElement.property.ownerStyle;
        const cssVariables = matchedStyles.availableCSSVariables(style);
        const colors = [];
        const colorNames = [];
        for (const cssVariable of cssVariables) {
            if (cssVariable === this.treeElement.property.name) {
                continue;
            }
            const value = matchedStyles.computeCSSVariable(style, cssVariable);
            if (!value) {
                continue;
            }
            const color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(value.value);
            if (!color) {
                continue;
            }
            colors.push(value.value);
            colorNames.push(cssVariable);
        }
        return { title: 'CSS Variables', mutable: false, matchUserFormat: true, colors: colors, colorNames: colorNames };
    }
    setContrastInfo(contrastInfo) {
        this.contrastInfo = contrastInfo;
    }
    iconClick(event) {
        event.consume(true);
        this.showPopover();
    }
    async toggleEyeDropper() {
        await this.spectrum?.toggleColorPicker();
    }
    showPopover() {
        if (this.swatchPopoverHelper.isShowing()) {
            this.swatchPopoverHelper.hide(true);
            return;
        }
        const color = this.swatch.getColor();
        if (!color) {
            return;
        }
        this.spectrum = new _ui_legacy_components_color_picker_color_picker_js__WEBPACK_IMPORTED_MODULE_4__.Spectrum.Spectrum(this.contrastInfo);
        this.spectrum.setColor(color);
        this.spectrum.addPalette(this.generateCSSVariablesPalette());
        this.spectrum.addEventListener("SizeChanged" /* ColorPicker.Spectrum.Events.SizeChanged */, this.spectrumResized, this);
        this.spectrum.addEventListener("ColorChanged" /* ColorPicker.Spectrum.Events.ColorChanged */, this.boundSpectrumChanged);
        this.swatchPopoverHelper.show(this.spectrum, this.swatch, this.onPopoverHidden.bind(this));
        this.scrollerElement = this.swatch.enclosingNodeOrSelfWithClass('style-panes-wrapper');
        if (this.scrollerElement) {
            this.scrollerElement.addEventListener('scroll', this.boundOnScroll, false);
        }
        this.originalPropertyText = this.treeElement.property.propertyText;
        this.treeElement.parentPane().setEditingStyle(true);
        const uiLocation = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance().propertyUILocation(this.treeElement.property, false /* forName */);
        if (uiLocation) {
            void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(uiLocation, true /* omitFocus */);
        }
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().setFlavor(ColorSwatchPopoverIcon, this);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.colorPickerOpenedFrom(1 /* Host.UserMetrics.ColorPickerOpenedFrom.StylesPane */);
    }
    spectrumResized() {
        this.swatchPopoverHelper.reposition();
    }
    async spectrumChanged(event) {
        const color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(event.data);
        if (!color) {
            return;
        }
        const colorName = this.spectrum ? this.spectrum.colorName() : undefined;
        const text = colorName && colorName.startsWith('--') ? `var(${colorName})` : (color.getAuthoredText() ?? color.asString());
        this.swatch.renderColor(color);
        const value = this.swatch.firstElementChild;
        if (value) {
            value.remove();
            this.swatch.createChild('span').textContent = text;
        }
        // `asString` somehow can return null.
        if (text) {
            this.dispatchEventToListeners("colorchanged" /* ColorSwatchPopoverIconEvents.ColorChanged */, text);
        }
    }
    onScroll(_event) {
        this.swatchPopoverHelper.hide(true);
    }
    onPopoverHidden(commitEdit) {
        if (this.scrollerElement) {
            this.scrollerElement.removeEventListener('scroll', this.boundOnScroll, false);
        }
        if (this.spectrum) {
            this.spectrum.removeEventListener("ColorChanged" /* ColorPicker.Spectrum.Events.ColorChanged */, this.boundSpectrumChanged);
        }
        this.spectrum = undefined;
        const propertyText = commitEdit ? this.treeElement.renderedPropertyText() : this.originalPropertyText || '';
        void this.treeElement.applyStyleText(propertyText, true);
        this.treeElement.parentPane().setEditingStyle(false);
        delete this.originalPropertyText;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().setFlavor(ColorSwatchPopoverIcon, null);
    }
}
class ShadowSwatchPopoverHelper extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    treeElement;
    swatchPopoverHelper;
    shadowSwatch;
    iconElement;
    boundShadowChanged;
    boundOnScroll;
    cssShadowEditor;
    scrollerElement;
    originalPropertyText;
    constructor(treeElement, swatchPopoverHelper, shadowSwatch) {
        super();
        this.treeElement = treeElement;
        this.swatchPopoverHelper = swatchPopoverHelper;
        this.shadowSwatch = shadowSwatch;
        this.iconElement = shadowSwatch.iconElement();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install(this.iconElement, i18nString(UIStrings.openShadowEditor));
        this.iconElement.addEventListener('click', this.iconClick.bind(this), false);
        this.iconElement.addEventListener('mousedown', event => event.consume(), false);
        this.boundShadowChanged = this.shadowChanged.bind(this);
        this.boundOnScroll = this.onScroll.bind(this);
    }
    iconClick(event) {
        event.consume(true);
        this.showPopover();
    }
    showPopover() {
        if (this.swatchPopoverHelper.isShowing()) {
            this.swatchPopoverHelper.hide(true);
            return;
        }
        this.cssShadowEditor = new _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_5__.CSSShadowEditor.CSSShadowEditor();
        this.cssShadowEditor.setModel(this.shadowSwatch.model());
        this.cssShadowEditor.addEventListener("ShadowChanged" /* InlineEditor.CSSShadowEditor.Events.ShadowChanged */, this.boundShadowChanged);
        this.swatchPopoverHelper.show(this.cssShadowEditor, this.iconElement, this.onPopoverHidden.bind(this));
        this.scrollerElement = this.iconElement.enclosingNodeOrSelfWithClass('style-panes-wrapper');
        if (this.scrollerElement) {
            this.scrollerElement.addEventListener('scroll', this.boundOnScroll, false);
        }
        this.originalPropertyText = this.treeElement.property.propertyText;
        this.treeElement.parentPane().setEditingStyle(true);
        const uiLocation = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance().propertyUILocation(this.treeElement.property, false /* forName */);
        if (uiLocation) {
            void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(uiLocation, true /* omitFocus */);
        }
    }
    shadowChanged(event) {
        this.dispatchEventToListeners("shadowChanged" /* ShadowEvents.ShadowChanged */, event.data);
    }
    onScroll(_event) {
        this.swatchPopoverHelper.hide(true);
    }
    onPopoverHidden(commitEdit) {
        if (this.scrollerElement) {
            this.scrollerElement.removeEventListener('scroll', this.boundOnScroll, false);
        }
        if (this.cssShadowEditor) {
            this.cssShadowEditor.removeEventListener("ShadowChanged" /* InlineEditor.CSSShadowEditor.Events.ShadowChanged */, this.boundShadowChanged);
        }
        this.cssShadowEditor = undefined;
        const propertyText = commitEdit ? this.treeElement.renderedPropertyText() : this.originalPropertyText || '';
        void this.treeElement.applyStyleText(propertyText, true);
        this.treeElement.parentPane().setEditingStyle(false);
        delete this.originalPropertyText;
    }
}
class FontEditorSectionManager {
    treeElementMap;
    swatchPopoverHelper;
    section;
    parentPane;
    fontEditor;
    scrollerElement;
    boundFontChanged;
    boundOnScroll;
    boundResized;
    constructor(swatchPopoverHelper, section) {
        this.treeElementMap = new Map();
        this.swatchPopoverHelper = swatchPopoverHelper;
        this.section = section;
        this.parentPane = null;
        this.fontEditor = null;
        this.scrollerElement = null;
        this.boundFontChanged = this.fontChanged.bind(this);
        this.boundOnScroll = this.onScroll.bind(this);
        this.boundResized = this.fontEditorResized.bind(this);
    }
    fontChanged(event) {
        const { propertyName, value } = event.data;
        const treeElement = this.treeElementMap.get(propertyName);
        void this.updateFontProperty(propertyName, value, treeElement);
    }
    async updateFontProperty(propertyName, value, treeElement) {
        if (treeElement && treeElement.treeOutline && treeElement.valueElement && treeElement.property.parsedOk &&
            treeElement.property.range) {
            let elementRemoved = false;
            treeElement.valueElement.textContent = value;
            treeElement.property.value = value;
            let styleText;
            const propertyName = treeElement.property.name;
            if (value.length) {
                styleText = treeElement.renderedPropertyText();
            }
            else {
                styleText = '';
                elementRemoved = true;
                this.fixIndex(treeElement.property.index);
            }
            this.treeElementMap.set(propertyName, treeElement);
            await treeElement.applyStyleText(styleText, true);
            if (elementRemoved) {
                this.treeElementMap.delete(propertyName);
            }
        }
        else if (value.length) {
            const newProperty = this.section.addNewBlankProperty();
            if (newProperty) {
                newProperty.property.name = propertyName;
                newProperty.property.value = value;
                newProperty.updateTitle();
                await newProperty.applyStyleText(newProperty.renderedPropertyText(), true);
                this.treeElementMap.set(newProperty.property.name, newProperty);
            }
        }
        this.section.onpopulate();
        this.swatchPopoverHelper.reposition();
        return;
    }
    fontEditorResized() {
        this.swatchPopoverHelper.reposition();
    }
    fixIndex(removedIndex) {
        for (const treeElement of this.treeElementMap.values()) {
            if (treeElement.property.index > removedIndex) {
                treeElement.property.index -= 1;
            }
        }
    }
    createPropertyValueMap() {
        const propertyMap = new Map();
        for (const fontProperty of this.treeElementMap) {
            const propertyName = fontProperty[0];
            const treeElement = fontProperty[1];
            if (treeElement.property.value.length) {
                propertyMap.set(propertyName, treeElement.property.value);
            }
            else {
                this.treeElementMap.delete(propertyName);
            }
        }
        return propertyMap;
    }
    registerFontProperty(treeElement) {
        const propertyName = treeElement.property.name;
        if (this.treeElementMap.has(propertyName)) {
            const treeElementFromMap = this.treeElementMap.get(propertyName);
            if (!treeElement.overloaded() || (treeElementFromMap && treeElementFromMap.overloaded())) {
                this.treeElementMap.set(propertyName, treeElement);
            }
        }
        else {
            this.treeElementMap.set(propertyName, treeElement);
        }
    }
    async showPopover(iconElement, parentPane) {
        if (this.swatchPopoverHelper.isShowing()) {
            this.swatchPopoverHelper.hide(true);
            return;
        }
        this.parentPane = parentPane;
        const propertyValueMap = this.createPropertyValueMap();
        this.fontEditor = new _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_5__.FontEditor.FontEditor(propertyValueMap);
        this.fontEditor.addEventListener("FontChanged" /* InlineEditor.FontEditor.Events.FontChanged */, this.boundFontChanged);
        this.fontEditor.addEventListener("FontEditorResized" /* InlineEditor.FontEditor.Events.FontEditorResized */, this.boundResized);
        this.swatchPopoverHelper.show(this.fontEditor, iconElement, this.onPopoverHidden.bind(this));
        this.scrollerElement = iconElement.enclosingNodeOrSelfWithClass('style-panes-wrapper');
        if (this.scrollerElement) {
            this.scrollerElement.addEventListener('scroll', this.boundOnScroll, false);
        }
        this.parentPane.setEditingStyle(true);
    }
    onScroll() {
        this.swatchPopoverHelper.hide(true);
    }
    onPopoverHidden() {
        if (this.scrollerElement) {
            this.scrollerElement.removeEventListener('scroll', this.boundOnScroll, false);
        }
        this.section.onpopulate();
        if (this.fontEditor) {
            this.fontEditor.removeEventListener("FontChanged" /* InlineEditor.FontEditor.Events.FontChanged */, this.boundFontChanged);
        }
        this.fontEditor = null;
        if (this.parentPane) {
            this.parentPane.setEditingStyle(false);
        }
        this.section.resetToolbars();
        this.section.onpopulate();
    }
}
//# sourceMappingURL=ColorSwatchPopoverIcon.js.map

/***/ })

}]);