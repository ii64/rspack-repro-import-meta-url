"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_inline_editor_CSSShadowEditor_js"],{

/***/ "./ui/legacy/components/inline_editor/CSSShadowEditor.js":
/*!***************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/CSSShadowEditor.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSLength: () => (/* binding */ CSSLength),
/* harmony export */   CSSShadowEditor: () => (/* binding */ CSSShadowEditor)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _cssShadowEditor_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cssShadowEditor.css.js */ "./ui/legacy/components/inline_editor/cssShadowEditor.css.js");
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     *@description Text that refers to some types
     */
    type: 'Type',
    /**
     *@description Text in CSSShadow Editor of the inline editor in the Styles tab
     */
    xOffset: 'X offset',
    /**
     *@description Text in CSSShadow Editor of the inline editor in the Styles tab
     */
    yOffset: 'Y offset',
    /**
     * @description Text in CSSShadow Editor of the inline editor in the Styles tab. Noun which is a
     * label for an input that allows the user to specify how blurred the box-shadow should be.
     */
    blur: 'Blur',
    /**
     *@description Text in CSSShadow Editor of the inline editor in the Styles tab
     */
    spread: 'Spread',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('ui/legacy/components/inline_editor/CSSShadowEditor.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
const maxRange = 20;
const defaultUnit = 'px';
const sliderThumbRadius = 6;
const canvasSize = 88;
const CSS_LENGTH_REGEX = (function () {
    const number = '([+-]?(?:[0-9]*[.])?[0-9]+(?:[eE][+-]?[0-9]+)?)';
    const unit = '(ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmax|vmin|vw)';
    const zero = '[+-]?(?:0*[.])?0+(?:[eE][+-]?[0-9]+)?';
    return new RegExp(number + unit + '|' + zero, 'gi').source;
})();
class CSSLength {
    amount;
    unit;
    constructor(amount, unit) {
        this.amount = amount;
        this.unit = unit;
    }
    static parse(text) {
        const lengthRegex = new RegExp('^(?:' + CSS_LENGTH_REGEX + ')$', 'i');
        const match = text.match(lengthRegex);
        if (!match) {
            return null;
        }
        if (match.length > 2 && match[2]) {
            return new CSSLength(parseFloat(match[1]), match[2]);
        }
        return CSSLength.zero();
    }
    static zero() {
        return new CSSLength(0, '');
    }
    asCSSText() {
        return this.amount + this.unit;
    }
}
class CSSShadowEditor extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.VBox) {
    typeField;
    outsetButton;
    insetButton;
    xInput;
    yInput;
    xySlider;
    halfCanvasSize;
    innerCanvasSize;
    blurInput;
    blurSlider;
    spreadField;
    spreadInput;
    spreadSlider;
    model;
    canvasOrigin;
    changedElement;
    constructor() {
        super(true);
        this.contentElement.tabIndex = 0;
        this.contentElement.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.dialog('cssShadowEditor').parent('mapped').track({ keydown: 'Enter|Escape' })}`);
        this.setDefaultFocusedElement(this.contentElement);
        this.typeField = this.contentElement.createChild('div', 'shadow-editor-field shadow-editor-flex-field');
        this.typeField.createChild('label', 'shadow-editor-label').textContent = i18nString(UIStrings.type);
        this.outsetButton = this.typeField.createChild('button', 'shadow-editor-button-left');
        this.outsetButton.textContent = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Outset');
        this.outsetButton.addEventListener('click', this.onButtonClick.bind(this), false);
        this.insetButton = this.typeField.createChild('button', 'shadow-editor-button-right');
        this.insetButton.textContent = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Inset');
        this.insetButton.addEventListener('click', this.onButtonClick.bind(this), false);
        const xField = this.contentElement.createChild('div', 'shadow-editor-field');
        this.xInput = this.createTextInput(xField, i18nString(UIStrings.xOffset), 'x-offset');
        const yField = this.contentElement.createChild('div', 'shadow-editor-field');
        this.yInput = this.createTextInput(yField, i18nString(UIStrings.yOffset), 'y-offset');
        this.xySlider = xField.createChild('canvas', 'shadow-editor-2D-slider');
        this.xySlider.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.slider('xy').track({
            click: true,
            drag: true,
            keydown: 'ArrowUp|ArrowDown|ArrowLeft|ArrowRight',
        })}`);
        this.xySlider.width = canvasSize;
        this.xySlider.height = canvasSize;
        this.xySlider.tabIndex = -1;
        this.halfCanvasSize = canvasSize / 2;
        this.innerCanvasSize = this.halfCanvasSize - sliderThumbRadius;
        _legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.installDragHandle(this.xySlider, this.dragStart.bind(this), this.dragMove.bind(this), null, 'default');
        this.xySlider.addEventListener('keydown', this.onCanvasArrowKey.bind(this), false);
        this.xySlider.addEventListener('blur', this.onCanvasBlur.bind(this), false);
        const blurField = this.contentElement.createChild('div', 'shadow-editor-field shadow-editor-flex-field shadow-editor-blur-field');
        this.blurInput = this.createTextInput(blurField, i18nString(UIStrings.blur), 'blur');
        this.blurSlider = this.createSlider(blurField, 'blur');
        this.spreadField = this.contentElement.createChild('div', 'shadow-editor-field shadow-editor-flex-field');
        this.spreadInput = this.createTextInput(this.spreadField, i18nString(UIStrings.spread), 'spread');
        this.spreadSlider = this.createSlider(this.spreadField, 'spread');
    }
    createTextInput(field, propertyName, jslogContext) {
        const label = field.createChild('label', 'shadow-editor-label');
        label.textContent = propertyName;
        label.setAttribute('for', propertyName);
        const textInput = _legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createInput('shadow-editor-text-input', 'text');
        field.appendChild(textInput);
        textInput.id = propertyName;
        textInput.addEventListener('keydown', this.handleValueModification.bind(this), false);
        textInput.addEventListener('wheel', this.handleValueModification.bind(this), false);
        textInput.addEventListener('input', this.onTextInput.bind(this), false);
        textInput.addEventListener('blur', this.onTextBlur.bind(this), false);
        textInput.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.value().track({ change: true, keydown: 'ArrowUp|ArrowDown' }).context(jslogContext)}`);
        return textInput;
    }
    createSlider(field, jslogContext) {
        const slider = _legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createSlider(0, maxRange, -1);
        slider.addEventListener('input', this.onSliderInput.bind(this), false);
        slider.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.slider().track({ click: true, drag: true }).context(jslogContext)}`);
        field.appendChild(slider);
        return slider;
    }
    wasShown() {
        this.registerCSSFiles([_cssShadowEditor_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]]);
        this.updateUI();
    }
    setModel(model) {
        this.model = model;
        this.typeField.classList.toggle('hidden', !model.isBoxShadow());
        this.spreadField.classList.toggle('hidden', !model.isBoxShadow());
        this.updateUI();
    }
    updateUI() {
        this.updateButtons();
        this.xInput.value = this.model.offsetX().asCSSText();
        this.yInput.value = this.model.offsetY().asCSSText();
        this.blurInput.value = this.model.blurRadius().asCSSText();
        this.spreadInput.value = this.model.spreadRadius().asCSSText();
        this.blurSlider.value = this.model.blurRadius().amount.toString();
        this.spreadSlider.value = this.model.spreadRadius().amount.toString();
        this.updateCanvas(false);
    }
    updateButtons() {
        this.insetButton.classList.toggle('enabled', this.model.inset());
        this.outsetButton.classList.toggle('enabled', !this.model.inset());
    }
    updateCanvas(drawFocus) {
        const context = this.xySlider.getContext('2d');
        if (!context) {
            throw new Error('Unable to obtain canvas context');
        }
        context.clearRect(0, 0, this.xySlider.width, this.xySlider.height);
        // Draw dashed axes.
        context.save();
        context.setLineDash([1, 1]);
        context.strokeStyle = 'rgba(210, 210, 210, 0.8)';
        context.beginPath();
        context.moveTo(this.halfCanvasSize, 0);
        context.lineTo(this.halfCanvasSize, canvasSize);
        context.moveTo(0, this.halfCanvasSize);
        context.lineTo(canvasSize, this.halfCanvasSize);
        context.stroke();
        context.restore();
        const thumbPoint = this.sliderThumbPosition();
        // Draw 2D slider line.
        context.save();
        context.translate(this.halfCanvasSize, this.halfCanvasSize);
        context.lineWidth = 2;
        context.strokeStyle = 'rgba(130, 130, 130, 0.75)';
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(thumbPoint.x, thumbPoint.y);
        context.stroke();
        // Draw 2D slider thumb.
        if (drawFocus) {
            context.beginPath();
            context.fillStyle = 'rgba(66, 133, 244, 0.4)';
            context.arc(thumbPoint.x, thumbPoint.y, sliderThumbRadius + 2, 0, 2 * Math.PI);
            context.fill();
        }
        context.beginPath();
        context.fillStyle = '#4285F4';
        context.arc(thumbPoint.x, thumbPoint.y, sliderThumbRadius, 0, 2 * Math.PI);
        context.fill();
        context.restore();
    }
    onButtonClick(event) {
        const insetClicked = (event.currentTarget === this.insetButton);
        if (insetClicked && this.model.inset() || !insetClicked && !this.model.inset()) {
            return;
        }
        this.model.setInset(insetClicked);
        this.updateButtons();
        this.dispatchEventToListeners("ShadowChanged" /* Events.ShadowChanged */, this.model);
    }
    handleValueModification(event) {
        const target = event.currentTarget;
        const modifiedValue = _legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createReplacementString(target.value, event, customNumberHandler);
        if (!modifiedValue) {
            return;
        }
        const length = CSSLength.parse(modifiedValue);
        if (!length) {
            return;
        }
        if (event.currentTarget === this.blurInput && length.amount < 0) {
            length.amount = 0;
        }
        target.value = length.asCSSText();
        target.selectionStart = 0;
        target.selectionEnd = target.value.length;
        this.onTextInput(event);
        event.consume(true);
        function customNumberHandler(prefix, number, suffix) {
            if (!suffix.length) {
                suffix = defaultUnit;
            }
            return prefix + number + suffix;
        }
    }
    onTextInput(event) {
        const currentTarget = event.currentTarget;
        this.changedElement = currentTarget;
        this.changedElement.classList.remove('invalid');
        const length = CSSLength.parse(currentTarget.value);
        if (!length || currentTarget === this.blurInput && length.amount < 0) {
            return;
        }
        if (currentTarget === this.xInput) {
            this.model.setOffsetX(length);
            this.updateCanvas(false);
        }
        else if (currentTarget === this.yInput) {
            this.model.setOffsetY(length);
            this.updateCanvas(false);
        }
        else if (currentTarget === this.blurInput) {
            this.model.setBlurRadius(length);
            this.blurSlider.value = length.amount.toString();
        }
        else if (currentTarget === this.spreadInput) {
            this.model.setSpreadRadius(length);
            this.spreadSlider.value = length.amount.toString();
        }
        this.dispatchEventToListeners("ShadowChanged" /* Events.ShadowChanged */, this.model);
    }
    onTextBlur() {
        if (!this.changedElement) {
            return;
        }
        let length = !this.changedElement.value.trim() ? CSSLength.zero() : CSSLength.parse(this.changedElement.value);
        if (!length) {
            length = CSSLength.parse(this.changedElement.value + defaultUnit);
        }
        if (!length) {
            this.changedElement.classList.add('invalid');
            this.changedElement = null;
            return;
        }
        if (this.changedElement === this.xInput) {
            this.model.setOffsetX(length);
            this.xInput.value = length.asCSSText();
            this.updateCanvas(false);
        }
        else if (this.changedElement === this.yInput) {
            this.model.setOffsetY(length);
            this.yInput.value = length.asCSSText();
            this.updateCanvas(false);
        }
        else if (this.changedElement === this.blurInput) {
            if (length.amount < 0) {
                length = CSSLength.zero();
            }
            this.model.setBlurRadius(length);
            this.blurInput.value = length.asCSSText();
            this.blurSlider.value = length.amount.toString();
        }
        else if (this.changedElement === this.spreadInput) {
            this.model.setSpreadRadius(length);
            this.spreadInput.value = length.asCSSText();
            this.spreadSlider.value = length.amount.toString();
        }
        this.changedElement = null;
        this.dispatchEventToListeners("ShadowChanged" /* Events.ShadowChanged */, this.model);
    }
    onSliderInput(event) {
        if (event.currentTarget === this.blurSlider) {
            this.model.setBlurRadius(new CSSLength(Number(this.blurSlider.value), this.model.blurRadius().unit || defaultUnit));
            this.blurInput.value = this.model.blurRadius().asCSSText();
            this.blurInput.classList.remove('invalid');
        }
        else if (event.currentTarget === this.spreadSlider) {
            this.model.setSpreadRadius(new CSSLength(Number(this.spreadSlider.value), this.model.spreadRadius().unit || defaultUnit));
            this.spreadInput.value = this.model.spreadRadius().asCSSText();
            this.spreadInput.classList.remove('invalid');
        }
        this.dispatchEventToListeners("ShadowChanged" /* Events.ShadowChanged */, this.model);
    }
    dragStart(event) {
        this.xySlider.focus();
        this.updateCanvas(true);
        this.canvasOrigin = new _legacy_js__WEBPACK_IMPORTED_MODULE_4__.Geometry.Point(this.xySlider.getBoundingClientRect().left + this.halfCanvasSize, this.xySlider.getBoundingClientRect().top + this.halfCanvasSize);
        const clickedPoint = new _legacy_js__WEBPACK_IMPORTED_MODULE_4__.Geometry.Point(event.x - this.canvasOrigin.x, event.y - this.canvasOrigin.y);
        const thumbPoint = this.sliderThumbPosition();
        if (clickedPoint.distanceTo(thumbPoint) >= sliderThumbRadius) {
            this.dragMove(event);
        }
        return true;
    }
    dragMove(event) {
        let point = new _legacy_js__WEBPACK_IMPORTED_MODULE_4__.Geometry.Point(event.x - this.canvasOrigin.x, event.y - this.canvasOrigin.y);
        if (event.shiftKey) {
            point = this.snapToClosestDirection(point);
        }
        const constrainedPoint = this.constrainPoint(point, this.innerCanvasSize);
        const newX = Math.round((constrainedPoint.x / this.innerCanvasSize) * maxRange);
        const newY = Math.round((constrainedPoint.y / this.innerCanvasSize) * maxRange);
        if (event.shiftKey) {
            this.model.setOffsetX(new CSSLength(newX, this.model.offsetX().unit || defaultUnit));
            this.model.setOffsetY(new CSSLength(newY, this.model.offsetY().unit || defaultUnit));
        }
        else {
            if (!event.altKey) {
                this.model.setOffsetX(new CSSLength(newX, this.model.offsetX().unit || defaultUnit));
            }
            if (!_legacy_js__WEBPACK_IMPORTED_MODULE_4__.KeyboardShortcut.KeyboardShortcut.eventHasCtrlEquivalentKey(event)) {
                this.model.setOffsetY(new CSSLength(newY, this.model.offsetY().unit || defaultUnit));
            }
        }
        this.xInput.value = this.model.offsetX().asCSSText();
        this.yInput.value = this.model.offsetY().asCSSText();
        this.xInput.classList.remove('invalid');
        this.yInput.classList.remove('invalid');
        this.updateCanvas(true);
        this.dispatchEventToListeners("ShadowChanged" /* Events.ShadowChanged */, this.model);
    }
    onCanvasBlur() {
        this.updateCanvas(false);
    }
    onCanvasArrowKey(event) {
        const keyboardEvent = event;
        let shiftX = 0;
        let shiftY = 0;
        if (keyboardEvent.key === 'ArrowRight') {
            shiftX = 1;
        }
        else if (keyboardEvent.key === 'ArrowLeft') {
            shiftX = -1;
        }
        else if (keyboardEvent.key === 'ArrowUp') {
            shiftY = -1;
        }
        else if (keyboardEvent.key === 'ArrowDown') {
            shiftY = 1;
        }
        if (!shiftX && !shiftY) {
            return;
        }
        event.consume(true);
        if (shiftX) {
            const offsetX = this.model.offsetX();
            const newAmount = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.clamp(offsetX.amount + shiftX, -maxRange, maxRange);
            if (newAmount === offsetX.amount) {
                return;
            }
            this.model.setOffsetX(new CSSLength(newAmount, offsetX.unit || defaultUnit));
            this.xInput.value = this.model.offsetX().asCSSText();
            this.xInput.classList.remove('invalid');
        }
        if (shiftY) {
            const offsetY = this.model.offsetY();
            const newAmount = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.clamp(offsetY.amount + shiftY, -maxRange, maxRange);
            if (newAmount === offsetY.amount) {
                return;
            }
            this.model.setOffsetY(new CSSLength(newAmount, offsetY.unit || defaultUnit));
            this.yInput.value = this.model.offsetY().asCSSText();
            this.yInput.classList.remove('invalid');
        }
        this.updateCanvas(true);
        this.dispatchEventToListeners("ShadowChanged" /* Events.ShadowChanged */, this.model);
    }
    constrainPoint(point, max) {
        if (Math.abs(point.x) <= max && Math.abs(point.y) <= max) {
            return new _legacy_js__WEBPACK_IMPORTED_MODULE_4__.Geometry.Point(point.x, point.y);
        }
        return point.scale(max / Math.max(Math.abs(point.x), Math.abs(point.y)));
    }
    snapToClosestDirection(point) {
        let minDistance = Number.MAX_VALUE;
        let closestPoint = point;
        const directions = [
            new _legacy_js__WEBPACK_IMPORTED_MODULE_4__.Geometry.Point(0, -1), new _legacy_js__WEBPACK_IMPORTED_MODULE_4__.Geometry.Point(1, -1), new _legacy_js__WEBPACK_IMPORTED_MODULE_4__.Geometry.Point(1, 0),
            new _legacy_js__WEBPACK_IMPORTED_MODULE_4__.Geometry.Point(1, 1), // Southeast
        ];
        for (const direction of directions) {
            const projection = point.projectOn(direction);
            const distance = point.distanceTo(projection);
            if (distance < minDistance) {
                minDistance = distance;
                closestPoint = projection;
            }
        }
        return closestPoint;
    }
    sliderThumbPosition() {
        const x = (this.model.offsetX().amount / maxRange) * this.innerCanvasSize;
        const y = (this.model.offsetY().amount / maxRange) * this.innerCanvasSize;
        return this.constrainPoint(new _legacy_js__WEBPACK_IMPORTED_MODULE_4__.Geometry.Point(x, y), this.innerCanvasSize);
    }
}
//# sourceMappingURL=CSSShadowEditor.js.map

/***/ }),

/***/ "./ui/legacy/components/inline_editor/cssShadowEditor.css.js":
/*!*******************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/cssShadowEditor.css.js ***!
  \*******************************************************************/
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
 * Copyright 2016 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  user-select: none;
  padding: 4px 12px 12px;
  border: 1px solid transparent;
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
  width: 52px;
  height: 24px;
  line-height: 24px;
  margin-right: 8px;
  text-align: right;
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
  box-shadow: 0 1px 1px var(--color-background-elevation-1);
}

.shadow-editor-button-left:focus,
.shadow-editor-button-right:focus {
  background-color: var(--color-background-elevation-1);
}

.shadow-editor-button-left.enabled,
.shadow-editor-button-right.enabled {
  --override-button-text-color: #fff;

  background-color: var(--color-primary-old);
  color: var(--override-button-text-color);
}

.shadow-editor-button-left.enabled:focus,
.shadow-editor-button-right.enabled:focus {
  background-color: var(--color-primary-variant);
}

.shadow-editor-text-input {
  width: 52px;
  margin-right: 8px;
  text-align: right;
  box-shadow: var(--legacy-focus-ring-inactive-shadow);
}

@media (forced-colors: active) {
  .shadow-editor-button-left:hover,
  .shadow-editor-button-left.enabled:focus,
  .shadow-editor-button-right:hover .shadow-editor-button-left.enabled,
  .shadow-editor-button-right.enabled,
  .shadow-editor-button-right.enabled:focus {
    forced-color-adjust: none;
    background-color: Highlight;
    color: HighlightText;
  }
}

/*# sourceURL=cssShadowEditor.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);