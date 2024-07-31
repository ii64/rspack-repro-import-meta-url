"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_legacy_components_inline_editor_SwatchPopoverHelper_ts"],{

/***/ "./src/ui/legacy/components/inline_editor/ColorSwatch.ts":
/*!***************************************************************!*\
  !*** ./src/ui/legacy/components/inline_editor/ColorSwatch.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClickEvent: () => (/* binding */ ClickEvent),
/* harmony export */   ColorChangedEvent: () => (/* binding */ ColorChangedEvent),
/* harmony export */   ColorSwatch: () => (/* binding */ ColorSwatch)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _legacy_components_color_picker_color_picker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../legacy/components/color_picker/color_picker.js */ "./src/ui/legacy/components/color_picker/color_picker.ts");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './colorSwatch.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
    constructor(color) {
        super(ColorChangedEvent.eventName, {});
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = { color };
    }
}
Object.defineProperty(ColorChangedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'colorchanged'
});
class ClickEvent extends Event {
    constructor() {
        super(ClickEvent.eventName, {});
    }
}
Object.defineProperty(ClickEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'swatchclick'
});
class ColorSwatch extends HTMLElement {
    constructor(tooltip) {
        super();
        Object.defineProperty(this, "shadow", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.attachShadow({ mode: 'open' })
        });
        Object.defineProperty(this, "tooltip", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: i18nString(UIStrings.shiftclickToChangeColorFormat)
        });
        Object.defineProperty(this, "color", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "readonly", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        this.shadow.adoptedStyleSheets = [
            Object(function webpackMissingModule() { var e = new Error("Cannot find module './colorSwatch.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
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
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.colorConvertedFrom(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.ColorConvertedFrom.ColorSwatch);
        });
    }
}
Object.defineProperty(ColorSwatch, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-color-swatch`
});
customElements.define('devtools-color-swatch', ColorSwatch);


/***/ }),

/***/ "./src/ui/legacy/components/inline_editor/SwatchPopoverHelper.ts":
/*!***********************************************************************!*\
  !*** ./src/ui/legacy/components/inline_editor/SwatchPopoverHelper.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Events: () => (/* binding */ Events),
/* harmony export */   SwatchPopoverHelper: () => (/* binding */ SwatchPopoverHelper)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ColorSwatch_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ColorSwatch.js */ "./src/ui/legacy/components/inline_editor/ColorSwatch.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './swatchPopover.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






class SwatchPopoverHelper extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    constructor() {
        super();
        Object.defineProperty(this, "popover", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "hideProxy", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "boundOnKeyDown", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "boundFocusOut", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "isHidden", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "anchorElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "view", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "hiddenCallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "focusRestorer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.popover = new _legacy_js__WEBPACK_IMPORTED_MODULE_3__.GlassPane.GlassPane();
        this.popover.setSizeBehavior(_legacy_js__WEBPACK_IMPORTED_MODULE_3__.GlassPane.SizeBehavior.MeasureContent);
        this.popover.setMarginBehavior(_legacy_js__WEBPACK_IMPORTED_MODULE_3__.GlassPane.MarginBehavior.Arrow);
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
        this.popover.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './swatchPopover.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        this.dispatchEventToListeners(Events.WillShowPopover);
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
var Events;
(function (Events) {
    Events["WillShowPopover"] = "WillShowPopover";
})(Events || (Events = {}));


/***/ })

}]);