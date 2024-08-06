"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_inline_editor_BezierEditor_js"],{

/***/ "./ui/legacy/components/inline_editor/AnimationTimingModel.js":
/*!********************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/AnimationTimingModel.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationTimingModel: () => (/* binding */ AnimationTimingModel),
/* harmony export */   LINEAR_BEZIER: () => (/* binding */ LINEAR_BEZIER)
/* harmony export */ });
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _CSSLinearEasingModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSLinearEasingModel.js */ "./ui/legacy/components/inline_editor/CSSLinearEasingModel.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


// Provides a unified interface for both linear easing and cubic bezier
// models and handles the parsing for animation-timing texts.
class AnimationTimingModel {
    static parse(text) {
        // Try to parse as a CSSLinearEasingModel first.
        // The reason is: `linear` keyword is valid in both
        // models, however we want to treat it as a `CSSLinearEasingModel`
        // for visualizing in animation timing tool.
        const cssLinearEasingModel = _CSSLinearEasingModel_js__WEBPACK_IMPORTED_MODULE_1__.CSSLinearEasingModel.parse(text);
        if (cssLinearEasingModel) {
            return cssLinearEasingModel;
        }
        return _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.CubicBezier.parse(text) || null;
    }
}
const LINEAR_BEZIER = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.LINEAR_BEZIER;
//# sourceMappingURL=AnimationTimingModel.js.map

/***/ }),

/***/ "./ui/legacy/components/inline_editor/BezierEditor.js":
/*!************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/BezierEditor.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BezierEditor: () => (/* binding */ BezierEditor),
/* harmony export */   Presets: () => (/* binding */ Presets)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _AnimationTimingModel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnimationTimingModel.js */ "./ui/legacy/components/inline_editor/AnimationTimingModel.js");
/* harmony import */ var _AnimationTimingUI_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AnimationTimingUI.js */ "./ui/legacy/components/inline_editor/AnimationTimingUI.js");
/* harmony import */ var _bezierEditor_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bezierEditor.css.js */ "./ui/legacy/components/inline_editor/bezierEditor.css.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const PREVIEW_ANIMATION_DEBOUNCE_DELAY = 300;
class BezierEditor extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.VBox) {
    model;
    previewElement;
    previewOnion;
    outerContainer;
    selectedCategory;
    presetsContainer;
    presetUI;
    presetCategories;
    animationTimingUI;
    header;
    label;
    previewAnimation;
    debouncedStartPreviewAnimation;
    constructor(model) {
        super(true);
        this.model = model;
        this.contentElement.tabIndex = 0;
        this.contentElement.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.dialog('bezierEditor').parent('mapped').track({ keydown: 'Enter|Escape' })}`);
        this.setDefaultFocusedElement(this.contentElement);
        this.element.style.overflowY = 'auto';
        // Preview UI
        this.previewElement = this.contentElement.createChild('div', 'bezier-preview-container');
        this.previewElement.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.preview().track({ click: true })}`);
        this.previewElement.createChild('div', 'bezier-preview-animation');
        this.previewElement.addEventListener('click', this.startPreviewAnimation.bind(this));
        this.previewOnion = this.contentElement.createChild('div', 'bezier-preview-onion');
        this.previewOnion.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.preview().track({ click: true })}`);
        this.previewOnion.addEventListener('click', this.startPreviewAnimation.bind(this));
        this.outerContainer = this.contentElement.createChild('div', 'bezier-container');
        // Presets UI
        this.selectedCategory = null;
        this.presetsContainer = this.outerContainer.createChild('div', 'bezier-presets');
        this.presetUI = new _AnimationTimingUI_js__WEBPACK_IMPORTED_MODULE_4__.PresetUI();
        this.presetCategories = [];
        for (let i = 0; i < Presets.length; i++) {
            const category = this.createCategory(Presets[i]);
            if (!category) {
                continue;
            }
            this.presetCategories[i] = category;
            this.presetsContainer.appendChild(this.presetCategories[i].icon);
        }
        // Curve UI
        this.debouncedStartPreviewAnimation =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Debouncer.debounce(this.startPreviewAnimation.bind(this), PREVIEW_ANIMATION_DEBOUNCE_DELAY);
        this.animationTimingUI = new _AnimationTimingUI_js__WEBPACK_IMPORTED_MODULE_4__.AnimationTimingUI({
            model: this.model,
            onChange: (model) => {
                this.setModel(model);
                this.onchange();
                this.unselectPresets();
                this.debouncedStartPreviewAnimation();
            },
        });
        this.animationTimingUI.element().setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.bezierCurveEditor().track({ click: true, drag: true })}`);
        this.outerContainer.appendChild(this.animationTimingUI.element());
        this.header = this.contentElement.createChild('div', 'bezier-header');
        const minus = this.createPresetModifyIcon(this.header, 'bezier-preset-minus', 'M 12 6 L 8 10 L 12 14');
        minus.addEventListener('click', this.presetModifyClicked.bind(this, false));
        minus.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.action('bezier.prev-preset').track({ click: true })}`);
        const plus = this.createPresetModifyIcon(this.header, 'bezier-preset-plus', 'M 8 6 L 12 10 L 8 14');
        plus.addEventListener('click', this.presetModifyClicked.bind(this, true));
        plus.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.action('bezier.next-preset').track({ click: true })}`);
        this.label = this.header.createChild('span', 'source-code bezier-display-value');
    }
    setModel(model) {
        this.model = model;
        this.animationTimingUI?.setModel(this.model);
        this.updateUI();
    }
    wasShown() {
        this.registerCSSFiles([_bezierEditor_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]]);
        this.unselectPresets();
        // Check if bezier matches a preset
        for (const category of this.presetCategories) {
            for (let i = 0; i < category.presets.length; i++) {
                if (this.model.asCSSText() === category.presets[i].value) {
                    category.presetIndex = i;
                    this.presetCategorySelected(category);
                }
            }
        }
        this.updateUI();
        this.startPreviewAnimation();
    }
    onchange() {
        this.updateUI();
        this.dispatchEventToListeners("BezierChanged" /* Events.BezierChanged */, this.model.asCSSText());
    }
    updateUI() {
        const labelText = this.selectedCategory ? this.selectedCategory.presets[this.selectedCategory.presetIndex].name :
            this.model.asCSSText().replace(/\s(-\d\.\d)/g, '$1');
        this.label.textContent = labelText;
        this.animationTimingUI?.draw();
    }
    createCategory(presetGroup) {
        const pivot = _AnimationTimingModel_js__WEBPACK_IMPORTED_MODULE_3__.AnimationTimingModel.parse(presetGroup[0].value);
        if (!pivot) {
            return null;
        }
        const presetElement = document.createElement('div');
        presetElement.classList.add('bezier-preset-category');
        presetElement.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.bezierPresetCategory().track({ click: true }).context(presetGroup[0].name)}`);
        const iconElement = _legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createSVGChild(presetElement, 'svg', 'bezier-preset monospace');
        const category = { presets: presetGroup, presetIndex: 0, icon: presetElement };
        this.presetUI.draw(pivot, iconElement);
        iconElement.addEventListener('click', this.presetCategorySelected.bind(this, category));
        return category;
    }
    createPresetModifyIcon(parentElement, className, drawPath) {
        const icon = _legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createSVGChild(parentElement, 'svg', 'bezier-preset-modify ' + className);
        icon.setAttribute('width', '20');
        icon.setAttribute('height', '20');
        const path = _legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createSVGChild(icon, 'path');
        path.setAttribute('d', drawPath);
        return icon;
    }
    unselectPresets() {
        for (const category of this.presetCategories) {
            category.icon.classList.remove('bezier-preset-selected');
        }
        this.selectedCategory = null;
        this.header.classList.remove('bezier-header-active');
    }
    presetCategorySelected(category, event) {
        if (this.selectedCategory === category) {
            return;
        }
        this.unselectPresets();
        this.header.classList.add('bezier-header-active');
        this.selectedCategory = category;
        this.selectedCategory.icon.classList.add('bezier-preset-selected');
        const newModel = _AnimationTimingModel_js__WEBPACK_IMPORTED_MODULE_3__.AnimationTimingModel.parse(category.presets[category.presetIndex].value);
        if (newModel) {
            this.setModel(newModel);
            this.onchange();
            this.startPreviewAnimation();
        }
        if (event) {
            event.consume(true);
        }
    }
    presetModifyClicked(intensify, _event) {
        if (this.selectedCategory === null) {
            return;
        }
        const length = this.selectedCategory.presets.length;
        this.selectedCategory.presetIndex = (this.selectedCategory.presetIndex + (intensify ? 1 : -1) + length) % length;
        const selectedPreset = this.selectedCategory.presets[this.selectedCategory.presetIndex].value;
        const newModel = _AnimationTimingModel_js__WEBPACK_IMPORTED_MODULE_3__.AnimationTimingModel.parse(selectedPreset);
        if (newModel) {
            this.setModel(newModel);
            this.onchange();
            this.startPreviewAnimation();
        }
    }
    startPreviewAnimation() {
        this.previewOnion.removeChildren();
        if (this.previewAnimation) {
            this.previewAnimation.cancel();
        }
        const animationDuration = 1600;
        const numberOnionSlices = 20;
        const keyframes = [
            { offset: 0, transform: 'translateX(0px)', opacity: 1 },
            { offset: 1, transform: 'translateX(218px)', opacity: 1 },
        ];
        this.previewAnimation = this.previewElement.animate(keyframes, {
            easing: this.model.asCSSText(),
            duration: animationDuration,
        });
        this.previewOnion.removeChildren();
        for (let i = 0; i <= numberOnionSlices; i++) {
            const slice = this.previewOnion.createChild('div', 'bezier-preview-animation');
            const player = slice.animate([{ transform: 'translateX(0px)', easing: this.model.asCSSText() }, { transform: 'translateX(218px)' }], { duration: animationDuration, fill: 'forwards' });
            player.pause();
            player.currentTime = animationDuration * i / numberOnionSlices;
        }
    }
}
const Presets = [
    [
        { name: 'linear', value: 'linear' },
        {
            name: 'elastic',
            value: 'linear(0 0%, 0.22 2.1%, 0.86 6.5%, 1.11 8.6%, 1.3 10.7%, 1.35 11.8%, 1.37 12.9%, 1.37 13.7%, 1.36 14.5%, 1.32 16.2%, 1.03 21.8%, 0.94 24%, 0.89 25.9%, 0.88 26.85%, 0.87 27.8%, 0.87 29.25%, 0.88 30.7%, 0.91 32.4%, 0.98 36.4%, 1.01 38.3%, 1.04 40.5%, 1.05 42.7%, 1.05 44.1%, 1.04 45.7%, 1 53.3%, 0.99 55.4%, 0.98 57.5%, 0.99 60.7%, 1 68.1%, 1.01 72.2%, 1 86.7%, 1 100%)',
        },
        {
            name: 'bounce',
            value: 'linear(0 0%, 0 2.27%, 0.02 4.53%, 0.04 6.8%, 0.06 9.07%, 0.1 11.33%, 0.14 13.6%, 0.25 18.15%, 0.39 22.7%, 0.56 27.25%, 0.77 31.8%, 1 36.35%, 0.89 40.9%, 0.85 43.18%, 0.81 45.45%, 0.79 47.72%, 0.77 50%, 0.75 52.27%, 0.75 54.55%, 0.75 56.82%, 0.77 59.1%, 0.79 61.38%, 0.81 63.65%, 0.85 65.93%, 0.89 68.2%, 1 72.7%, 0.97 74.98%, 0.95 77.25%, 0.94 79.53%, 0.94 81.8%, 0.94 84.08%, 0.95 86.35%, 0.97 88.63%, 1 90.9%, 0.99 93.18%, 0.98 95.45%, 0.99 97.73%, 1 100%)',
        },
        {
            name: 'emphasized',
            value: 'linear(0 0%, 0 1.8%, 0.01 3.6%, 0.03 6.35%, 0.07 9.1%, 0.13 11.4%, 0.19 13.4%, 0.27 15%, 0.34 16.1%, 0.54 18.35%, 0.66 20.6%, 0.72 22.4%, 0.77 24.6%, 0.81 27.3%, 0.85 30.4%, 0.88 35.1%, 0.92 40.6%, 0.94 47.2%, 0.96 55%, 0.98 64%, 0.99 74.4%, 1 86.4%, 1 100%)',
        },
    ],
    [
        { name: 'ease-in-out', value: 'ease-in-out' },
        { name: 'In Out · Sine', value: 'cubic-bezier(0.45, 0.05, 0.55, 0.95)' },
        { name: 'In Out · Quadratic', value: 'cubic-bezier(0.46, 0.03, 0.52, 0.96)' },
        { name: 'In Out · Cubic', value: 'cubic-bezier(0.65, 0.05, 0.36, 1)' },
        { name: 'Fast Out, Slow In', value: 'cubic-bezier(0.4, 0, 0.2, 1)' },
        { name: 'In Out · Back', value: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)' },
    ],
    [
        { name: 'Fast Out, Linear In', value: 'cubic-bezier(0.4, 0, 1, 1)' },
        { name: 'ease-in', value: 'ease-in' },
        { name: 'In · Sine', value: 'cubic-bezier(0.47, 0, 0.75, 0.72)' },
        { name: 'In · Quadratic', value: 'cubic-bezier(0.55, 0.09, 0.68, 0.53)' },
        { name: 'In · Cubic', value: 'cubic-bezier(0.55, 0.06, 0.68, 0.19)' },
        { name: 'In · Back', value: 'cubic-bezier(0.6, -0.28, 0.74, 0.05)' },
    ],
    [
        { name: 'ease-out', value: 'ease-out' },
        { name: 'Out · Sine', value: 'cubic-bezier(0.39, 0.58, 0.57, 1)' },
        { name: 'Out · Quadratic', value: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' },
        { name: 'Out · Cubic', value: 'cubic-bezier(0.22, 0.61, 0.36, 1)' },
        { name: 'Linear Out, Slow In', value: 'cubic-bezier(0, 0, 0.2, 1)' },
        { name: 'Out · Back', value: 'cubic-bezier(0.18, 0.89, 0.32, 1.28)' },
    ],
];
//# sourceMappingURL=BezierEditor.js.map

/***/ }),

/***/ "./ui/legacy/components/inline_editor/bezierEditor.css.js":
/*!****************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/bezierEditor.css.js ***!
  \****************************************************************/
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
 * Copyright (c) 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  width: 270px;
  height: 350px;
  user-select: none;
  padding: 16px;
  overflow: hidden;
}

.bezier-preset-selected > svg {
  background-color: var(--sys-color-tonal-container);
}

.bezier-container {
  --override-bezier-control-color: var(--sys-color-purple-bright);

  display: flex;
  margin-top: 38px;
  flex-shrink: 0;
  /* overflown bezier visualization must be on top of the source text */
  z-index: 2;
  background-image: radial-gradient(circle, var(--sys-color-surface-variant) 1px, var(--color-background-inverted-opacity-0) 1px);
  background-size: 17px 17px;
  background-position: -5px -10px;
}

.bezier-preset {
  width: 50px;
  height: 50px;
  padding: 5px;
  margin: auto;
  background-color: var(--sys-color-surface1);
  border-radius: 3px;
}

.bezier-preset line.bezier-control-line {
  stroke: var(--sys-color-token-subtle);
  stroke-width: 1;
  stroke-linecap: round;
  fill: none;
}

.bezier-preset circle.bezier-control-circle {
  fill: var(--sys-color-token-subtle);
}

.bezier-preset path.bezier-path {
  stroke: var(--sys-color-inverse-surface);
  stroke-width: 2;
  stroke-linecap: round;
  fill: none;
}

.bezier-preset-selected path.bezier-path,
.bezier-preset-selected line.bezier-control-line {
  stroke: var(--sys-color-on-tonal-container);
}

.bezier-preset-selected circle.bezier-control-circle {
  fill: var(--sys-color-on-tonal-container);
}

.bezier-curve line.linear-line {
  stroke: var(--sys-color-neutral-outline);
  stroke-width: 2;
  stroke-linecap: round;
  fill: none;
}

.bezier-curve line.bezier-control-line {
  stroke: var(--override-bezier-control-color);
  stroke-width: 2;
  stroke-linecap: round;
  fill: none;
  opacity: 60%;
}

.bezier-curve circle.bezier-control-circle {
  fill: var(--override-bezier-control-color);
  cursor: pointer;
}

.bezier-curve path.bezier-path {
  stroke: var(--sys-color-inverse-surface);
  stroke-width: 3;
  stroke-linecap: round;
  fill: none;
}

.bezier-curve path.bezier-path.linear-path {
  cursor: pointer;
}

.bezier-preview-container {
  position: relative;
  background-color: var(--sys-color-cdt-base-container);
  overflow: hidden;
  border-radius: 20px;
  width: 200%;
  height: 20px;
  z-index: 2;
  flex-shrink: 0;
  opacity: 0%;
}

.bezier-preview-animation {
  background-color: var(--sys-color-purple-bright);
  width: 20px;
  height: 20px;
  border-radius: 20px;
  position: absolute;
}

.bezier-preview-onion {
  margin-top: -20px;
  position: relative;
  z-index: 1;
}

.bezier-preview-onion > .bezier-preview-animation {
  opacity: 10%;
}

svg.bezier-preset-modify {
  background-color: var(--sys-color-cdt-base-container);
  border-radius: 35px;
  display: inline-block;
  visibility: hidden;
  transition: transform 100ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: absolute;
}

svg.bezier-preset-modify:hover,
.bezier-preset:hover {
  background-color: var(--sys-color-state-hover-on-subtle);
}

.bezier-preset-selected .bezier-preset:hover {
  background-color: var(--sys-color-tonal-container);
}

.bezier-preset-modify path {
  stroke-width: 2;
  stroke: var(--sys-color-on-surface-subtle);
  fill: none;
}

.bezier-presets {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.bezier-preset-selected .bezier-preset-modify {
  opacity: 100%;
}

.bezier-preset-category {
  width: 50px;
  cursor: pointer;
  transition: transform 100ms cubic-bezier(0.4, 0, 0.2, 1);
}

span.bezier-display-value {
  width: 100%;
  user-select: text;
  display: block;
  text-align: center;
  line-height: 20px;
  min-height: 20px;
  cursor: text;
}

svg.bezier-curve {
  margin-left: 32px;
  margin-top: -8px;
}

svg.bezier-curve.linear {
  margin-top: 42px;
  overflow: visible;
}

svg.bezier-preset-modify.bezier-preset-plus {
  right: 0;
}

.bezier-header {
  margin-top: 16px;
  z-index: 1;
}

svg.bezier-preset-modify:active {
  transform: scale(1.1);
  background-color: var(--sys-color-state-ripple-neutral-on-subtle);
}

.bezier-preset-category:active {
  transform: scale(1.05);
}

.bezier-header-active > svg.bezier-preset-modify {
  visibility: visible;
}

.bezier-preset-modify:active path {
  stroke: var(--sys-color-on-surface-subtle);
}

/*# sourceURL=bezierEditor.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);