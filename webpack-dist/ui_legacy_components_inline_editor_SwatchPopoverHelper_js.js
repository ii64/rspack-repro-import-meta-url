"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_inline_editor_SwatchPopoverHelper_js"],{

/***/ "./ui/legacy/components/inline_editor/ColorSwatch.js":
/*!***********************************************************!*\
  !*** ./ui/legacy/components/inline_editor/ColorSwatch.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClickEvent: () => (/* binding */ ClickEvent),
/* harmony export */   ColorChangedEvent: () => (/* binding */ ColorChangedEvent),
/* harmony export */   ColorSwatch: () => (/* binding */ ColorSwatch)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _legacy_components_color_picker_color_picker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../legacy/components/color_picker/color_picker.js */ "./ui/legacy/components/color_picker/color_picker.js");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _colorSwatch_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colorSwatch.css.js */ "./ui/legacy/components/inline_editor/colorSwatch.css.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     *@description Icon element title in Color Swatch of the inline editor in the Styles tab
     */
    shiftclickToChangeColorFormat: 'Shift-click to change color format',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('ui/legacy/components/inline_editor/ColorSwatch.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class ColorChangedEvent extends Event {
    static eventName = 'colorchanged';
    data;
    constructor(color) {
        super(ColorChangedEvent.eventName, {});
        this.data = { color };
    }
}
class ClickEvent extends Event {
    static eventName = 'swatchclick';
    constructor() {
        super(ClickEvent.eventName, {});
    }
}
class ColorSwatch extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-color-swatch`;
    shadow = this.attachShadow({ mode: 'open' });
    tooltip = i18nString(UIStrings.shiftclickToChangeColorFormat);
    color = null;
    readonly = false;
    constructor(tooltip) {
        super();
        this.shadow.adoptedStyleSheets = [
            _colorSwatch_css_js__WEBPACK_IMPORTED_MODULE_5__["default"],
        ];
        if (tooltip) {
            this.tooltip = tooltip;
        }
    }
    static isColorSwatch(element) {
        return element.localName === 'devtools-color-swatch';
    }
    getReadonly() {
        return this.readonly;
    }
    setReadonly(readonly) {
        if (this.readonly === readonly) {
            return;
        }
        this.readonly = readonly;
        if (this.color) {
            this.renderColor(this.color);
        }
    }
    getColor() {
        return this.color;
    }
    get anchorBox() {
        const swatch = this.shadow.querySelector('.color-swatch');
        return swatch ? swatch.boxInWindow() : null;
    }
    getText() {
        return this.color?.getAuthoredText() ?? this.color?.asString();
    }
    /**
     * Render this swatch given a color object or text to be parsed as a color.
     * @param color The color object or string to use for this swatch.
     */
    renderColor(color) {
        this.color = color;
        const colorSwatchClasses = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.Directives.classMap({
            'color-swatch': true,
            'readonly': this.readonly,
        });
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        // Note that we use a <slot> with a default value here to display the color text. Consumers of this component are
        // free to append any content to replace what is being shown here.
        // Note also that whitespace between nodes is removed on purpose to avoid pushing these elements apart. Do not
        // re-format the HTML code.
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `<span class=${colorSwatchClasses} title=${this.tooltip}><span class="color-swatch-inner"
        style="background-color: ${this.getText()};"
        jslog=${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.showStyleEditor('color').track({ click: true })}
        @click=${this.onClick}
        @mousedown=${this.consume}
        @dblclick=${this.consume}></span></span><slot><span>${this.getText()}</span></slot>`, this.shadow, { host: this });
        // clang-format on
    }
    onClick(e) {
        if (this.readonly) {
            return;
        }
        if (e.shiftKey) {
            e.stopPropagation();
            this.showFormatPicker(e);
            return;
        }
        this.dispatchEvent(new ClickEvent());
    }
    consume(e) {
        e.stopPropagation();
    }
    setColor(color) {
        this.renderColor(color);
        this.dispatchEvent(new ColorChangedEvent(color));
    }
    setColorText(color) {
        this.firstElementChild?.remove();
        this.renderColor(color);
        const span = this.appendChild(document.createElement('span'));
        span.appendChild(document.createTextNode(color.getAuthoredText() ?? color.asString()));
        this.dispatchEvent(new ColorChangedEvent(color));
    }
    showFormatPicker(e) {
        if (!this.color) {
            return;
        }
        const contextMenu = new _legacy_components_color_picker_color_picker_js__WEBPACK_IMPORTED_MODULE_2__.FormatPickerContextMenu.FormatPickerContextMenu(this.color);
        void contextMenu.show(e, color => {
            this.setColorText(color);
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.colorConvertedFrom(0 /* Host.UserMetrics.ColorConvertedFrom.ColorSwatch */);
        });
    }
}
customElements.define('devtools-color-swatch', ColorSwatch);
//# sourceMappingURL=ColorSwatch.js.map

/***/ }),

/***/ "./ui/legacy/components/inline_editor/SwatchPopoverHelper.js":
/*!*******************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/SwatchPopoverHelper.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SwatchPopoverHelper: () => (/* binding */ SwatchPopoverHelper)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ColorSwatch_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ColorSwatch.js */ "./ui/legacy/components/inline_editor/ColorSwatch.js");
/* harmony import */ var _swatchPopover_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./swatchPopover.css.js */ "./ui/legacy/components/inline_editor/swatchPopover.css.js");
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






class SwatchPopoverHelper extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    popover;
    hideProxy;
    boundOnKeyDown;
    boundFocusOut;
    isHidden;
    anchorElement;
    view;
    hiddenCallback;
    focusRestorer;
    constructor() {
        super();
        this.popover = new _legacy_js__WEBPACK_IMPORTED_MODULE_3__.GlassPane.GlassPane();
        this.popover.setSizeBehavior("MeasureContent" /* UI.GlassPane.SizeBehavior.MeasureContent */);
        this.popover.setMarginBehavior("Arrow" /* UI.GlassPane.MarginBehavior.Arrow */);
        this.popover.element.addEventListener('mousedown', e => e.consume(), false);
        this.hideProxy = this.hide.bind(this, true);
        this.boundOnKeyDown = this.onKeyDown.bind(this);
        this.boundFocusOut = this.onFocusOut.bind(this);
        this.isHidden = true;
        this.anchorElement = null;
    }
    onFocusOut(event) {
        const relatedTarget = event.relatedTarget;
        if (this.isHidden || !relatedTarget || !this.view || relatedTarget.isSelfOrDescendant(this.view.contentElement)) {
            return;
        }
        this.hideProxy();
    }
    setAnchorElement(anchorElement) {
        this.anchorElement = anchorElement;
    }
    isShowing(view) {
        return this.popover.isShowing() && ((view && this.view === view) || !view);
    }
    show(view, anchorElement, hiddenCallback) {
        if (this.popover.isShowing()) {
            if (this.anchorElement === anchorElement) {
                return;
            }
            // Reopen the picker for another anchor element.
            this.hide(true);
        }
        _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.setMappedParent(view.contentElement, anchorElement);
        this.popover.registerCSSFiles([_swatchPopover_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]]);
        this.dispatchEventToListeners("WillShowPopover" /* Events.WillShowPopover */);
        this.isHidden = false;
        this.anchorElement = anchorElement;
        this.view = view;
        this.hiddenCallback = hiddenCallback;
        this.reposition();
        view.focus();
        const document = this.popover.element.ownerDocument;
        document.addEventListener('mousedown', this.hideProxy, false);
        if (document.defaultView) {
            document.defaultView.addEventListener('resize', this.hideProxy, false);
        }
        this.view.contentElement.addEventListener('keydown', this.boundOnKeyDown, false);
    }
    reposition() {
        // This protects against trying to reposition the popover after it has been hidden.
        if (this.isHidden || !this.view) {
            return;
        }
        // Unbind "blur" listener to avoid reenterability: |popover.show()| will hide the popover and trigger it synchronously.
        this.view.contentElement.removeEventListener('focusout', this.boundFocusOut, false);
        this.view.show(this.popover.contentElement);
        if (this.anchorElement) {
            let anchorBox = this.anchorElement.boxInWindow();
            if (_ColorSwatch_js__WEBPACK_IMPORTED_MODULE_4__.ColorSwatch.isColorSwatch(this.anchorElement)) {
                const swatch = this.anchorElement;
                if (!swatch.anchorBox) {
                    return;
                }
                anchorBox = swatch.anchorBox;
            }
            this.popover.setContentAnchorBox(anchorBox);
            this.popover.show(this.anchorElement.ownerDocument);
        }
        this.view.contentElement.addEventListener('focusout', this.boundFocusOut, false);
        if (!this.focusRestorer) {
            this.focusRestorer = new _legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.WidgetFocusRestorer(this.view);
        }
    }
    hide(commitEdit) {
        if (this.isHidden) {
            return;
        }
        const document = this.popover.element.ownerDocument;
        this.isHidden = true;
        this.popover.hide();
        document.removeEventListener('mousedown', this.hideProxy, false);
        if (document.defaultView) {
            document.defaultView.removeEventListener('resize', this.hideProxy, false);
        }
        if (this.hiddenCallback) {
            this.hiddenCallback.call(null, Boolean(commitEdit));
        }
        if (this.focusRestorer) {
            this.focusRestorer.restore();
        }
        this.anchorElement = null;
        if (this.view) {
            this.view.detach();
            this.view.contentElement.removeEventListener('keydown', this.boundOnKeyDown, false);
            this.view.contentElement.removeEventListener('focusout', this.boundFocusOut, false);
            delete this.view;
        }
    }
    onKeyDown(event) {
        if (event.key === 'Enter') {
            this.hide(true);
            event.consume(true);
            return;
        }
        if (event.key === _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.KeyboardUtilities.ESCAPE_KEY) {
            this.hide(false);
            event.consume(true);
        }
    }
}
//# sourceMappingURL=SwatchPopoverHelper.js.map

/***/ }),

/***/ "./ui/legacy/components/inline_editor/colorSwatch.css.js":
/*!***************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/colorSwatch.css.js ***!
  \***************************************************************/
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
  white-space: nowrap;
}

.color-swatch {
  position: relative;
  margin-left: 1px;
  margin-right: 2px;
  width: 12px;
  height: 12px;
  transform: scale(0.8);
  vertical-align: -2px;
  display: inline-block;
  user-select: none;
  background-image: var(--image-file-checker);
  line-height: 10px;
}

.color-swatch-inner {
  width: 100%;
  height: 100%;
  display: inline-block;
  border: 1px solid var(--sys-color-neutral-outline);
  box-sizing: border-box;
  cursor: pointer;
}

.color-swatch.readonly .color-swatch-inner {
  cursor: unset;
}

.color-swatch:not(.readonly) .color-swatch-inner:hover {
  border: 1px solid var(--sys-color-outline);
}

@media (forced-colors: active) {
  .color-swatch {
    forced-color-adjust: none;
  }
}

/*# sourceURL=colorSwatch.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/legacy/components/inline_editor/swatchPopover.css.js":
/*!*****************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/swatchPopover.css.js ***!
  \*****************************************************************/
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
 * Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.widget {
  display: flex;
  background: var(--sys-color-cdt-base-container);
  box-shadow: var(--drop-shadow);
  border-radius: 2px;
  overflow: auto;
  user-select: text;
  line-height: 11px;
}

/*# sourceURL=swatchPopover.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);