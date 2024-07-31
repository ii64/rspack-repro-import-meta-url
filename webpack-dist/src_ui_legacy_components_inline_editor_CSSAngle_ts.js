"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_legacy_components_inline_editor_CSSAngle_ts"],{

/***/ "./src/ui/legacy/components/inline_editor/CSSAngle.ts":
/*!************************************************************!*\
  !*** ./src/ui/legacy/components/inline_editor/CSSAngle.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSAngle: () => (/* binding */ CSSAngle),
/* harmony export */   PopoverToggledEvent: () => (/* binding */ PopoverToggledEvent),
/* harmony export */   UnitChangedEvent: () => (/* binding */ UnitChangedEvent)
/* harmony export */ });
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssAngle.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _CSSAngleEditor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CSSAngleEditor.js */ "./src/ui/legacy/components/inline_editor/CSSAngleEditor.ts");
/* harmony import */ var _CSSAngleSwatch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CSSAngleSwatch.js */ "./src/ui/legacy/components/inline_editor/CSSAngleSwatch.ts");
/* harmony import */ var _CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CSSAngleUtils.js */ "./src/ui/legacy/components/inline_editor/CSSAngleUtils.ts");
/* harmony import */ var _InlineEditorUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InlineEditorUtils.js */ "./src/ui/legacy/components/inline_editor/InlineEditorUtils.ts");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const { render, html } = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__;
const styleMap = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Directives.styleMap;
class PopoverToggledEvent extends Event {
    constructor(open) {
        super(PopoverToggledEvent.eventName, {});
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = { open };
    }
}
Object.defineProperty(PopoverToggledEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'popovertoggled'
});
class UnitChangedEvent extends Event {
    constructor(value) {
        super(UnitChangedEvent.eventName, {});
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = { value };
    }
}
Object.defineProperty(UnitChangedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'unitchanged'
});
const DefaultAngle = {
    value: 0,
    unit: _CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_4__.AngleUnit.Rad,
};
class CSSAngle extends HTMLElement {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "shadow", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.attachShadow({ mode: 'open' })
        });
        Object.defineProperty(this, "angle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: DefaultAngle
        });
        Object.defineProperty(this, "displayedAngle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: DefaultAngle
        });
        Object.defineProperty(this, "propertyValue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ''
        });
        Object.defineProperty(this, "containingPane", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "angleElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "swatchElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "popoverOpen", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "popoverStyleTop", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ''
        });
        Object.defineProperty(this, "popoverStyleLeft", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ''
        });
        Object.defineProperty(this, "onMinifyingAction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.minify.bind(this)
        });
    }
    connectedCallback() {
        this.shadow.adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssAngle.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    set data(data) {
        const parsedResult = (0,_CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_4__.parseText)(data.angleText);
        if (!parsedResult) {
            return;
        }
        this.angle = parsedResult;
        this.displayedAngle = { ...parsedResult };
        this.containingPane = data.containingPane;
        this.render();
    }
    disconnectedCallback() {
        this.unbindMinifyingAction();
    }
    // We bind and unbind mouse event listeners upon popping over and minifying,
    // because we anticipate most of the time this widget is minified even when
    // it's attached to the DOM tree.
    popOver() {
        if (!this.containingPane) {
            return;
        }
        if (!this.angleElement) {
            this.angleElement = this.shadow.querySelector('.css-angle');
        }
        if (!this.swatchElement) {
            this.swatchElement = this.shadow.querySelector('devtools-css-angle-swatch');
        }
        if (!this.angleElement || !this.swatchElement) {
            return;
        }
        this.dispatchEvent(new PopoverToggledEvent(true));
        this.bindMinifyingAction();
        const miniIconBottom = this.swatchElement.getBoundingClientRect().bottom;
        const miniIconLeft = this.swatchElement.getBoundingClientRect().left;
        if (miniIconBottom && miniIconLeft) {
            // We offset mini icon's X and Y positions with the containing styles
            // pane's positions because DevTools' root SplitWidget's
            // insertion-point-sidebar slot, where most of the DevTools content lives,
            // has an offset of positions, which makes all of its children's DOMRect
            // positions to have this offset.
            const offsetTop = this.containingPane.getBoundingClientRect().top;
            const offsetLeft = this.containingPane.getBoundingClientRect().left;
            this.popoverStyleTop = `${miniIconBottom - offsetTop}px`;
            this.popoverStyleLeft = `${miniIconLeft - offsetLeft}px`;
        }
        this.popoverOpen = true;
        this.render();
        this.angleElement.focus();
    }
    addEventListener(type, listener, options) {
        super.addEventListener(type, listener, options);
    }
    minify() {
        if (this.popoverOpen === false) {
            return;
        }
        this.popoverOpen = false;
        this.dispatchEvent(new PopoverToggledEvent(false));
        this.unbindMinifyingAction();
        this.render();
    }
    updateProperty(value) {
        this.propertyValue = value;
        this.render();
    }
    updateAngle(angle) {
        this.displayedAngle = (0,_CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_4__.roundAngleByUnit)((0,_CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_4__.convertAngleUnit)(angle, this.displayedAngle.unit));
        this.angle = this.displayedAngle;
        this.dispatchEvent(new _InlineEditorUtils_js__WEBPACK_IMPORTED_MODULE_5__.ValueChangedEvent(`${this.angle.value}${this.angle.unit}`));
    }
    displayNextUnit() {
        const nextUnit = (0,_CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_4__.getNextUnit)(this.displayedAngle.unit);
        this.displayedAngle = (0,_CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_4__.roundAngleByUnit)((0,_CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_4__.convertAngleUnit)(this.angle, nextUnit));
        this.dispatchEvent(new UnitChangedEvent(`${this.displayedAngle.value}${this.displayedAngle.unit}`));
    }
    bindMinifyingAction() {
        document.addEventListener('mousedown', this.onMinifyingAction);
        if (this.containingPane) {
            this.containingPane.addEventListener('scroll', this.onMinifyingAction);
        }
    }
    unbindMinifyingAction() {
        document.removeEventListener('mousedown', this.onMinifyingAction);
        if (this.containingPane) {
            this.containingPane.removeEventListener('scroll', this.onMinifyingAction);
        }
    }
    onMiniIconClick(event) {
        event.stopPropagation();
        if (event.shiftKey && !this.popoverOpen) {
            this.displayNextUnit();
            return;
        }
        this.popoverOpen ? this.minify() : this.popOver();
    }
    // Fix that the previous text will be selected when double-clicking the angle icon
    consume(event) {
        event.stopPropagation();
    }
    onKeydown(event) {
        if (!this.popoverOpen) {
            return;
        }
        switch (event.key) {
            case 'Escape':
                event.stopPropagation();
                this.minify();
                this.blur();
                break;
            case 'ArrowUp':
            case 'ArrowDown': {
                const newAngle = (0,_CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_4__.getNewAngleFromEvent)(this.angle, event);
                if (newAngle) {
                    this.updateAngle(newAngle);
                }
                event.preventDefault();
                break;
            }
        }
    }
    render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        render(html `
      <div class="css-angle" @focusout=${this.minify} @keydown=${this.onKeydown} tabindex="-1">
        <div class="preview">
          <${_CSSAngleSwatch_js__WEBPACK_IMPORTED_MODULE_3__.CSSAngleSwatch.litTagName}
            @click=${this.onMiniIconClick}
            @mousedown=${this.consume}
            @dblclick=${this.consume}
            .data=${{
            angle: this.angle,
        }}>
          </${_CSSAngleSwatch_js__WEBPACK_IMPORTED_MODULE_3__.CSSAngleSwatch.litTagName}><slot></slot></div>
        ${this.popoverOpen ? this.renderPopover() : null}
      </div>
    `, this.shadow, {
            host: this,
        });
        // clang-format on
    }
    renderPopover() {
        let contextualBackground = '';
        if (this.propertyValue && !this.propertyValue.match(/url\(.*\)/i)) {
            contextualBackground = this.propertyValue;
        }
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return html `
    <${_CSSAngleEditor_js__WEBPACK_IMPORTED_MODULE_2__.CSSAngleEditor.litTagName}
      class="popover popover-css-angle"
      style=${styleMap({ top: this.popoverStyleTop, left: this.popoverStyleLeft })}
      .data=${{
            angle: this.angle,
            onAngleUpdate: (angle) => {
                this.updateAngle(angle);
            },
            background: contextualBackground,
        }}
    ></${_CSSAngleEditor_js__WEBPACK_IMPORTED_MODULE_2__.CSSAngleEditor.litTagName}>
    `;
        // clang-format on
    }
}
Object.defineProperty(CSSAngle, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-css-angle`
});
customElements.define('devtools-css-angle', CSSAngle);


/***/ }),

/***/ "./src/ui/legacy/components/inline_editor/CSSAngleSwatch.ts":
/*!******************************************************************!*\
  !*** ./src/ui/legacy/components/inline_editor/CSSAngleSwatch.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSAngleSwatch: () => (/* binding */ CSSAngleSwatch)
/* harmony export */ });
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssAngleSwatch.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CSSAngleUtils.js */ "./src/ui/legacy/components/inline_editor/CSSAngleUtils.ts");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const { render, html } = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__;
const styleMap = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Directives.styleMap;
const swatchWidth = 11;
class CSSAngleSwatch extends HTMLElement {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "shadow", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.attachShadow({ mode: 'open' })
        });
        Object.defineProperty(this, "angle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {
                value: 0,
                unit: _CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_2__.AngleUnit.Rad,
            }
        });
    }
    connectedCallback() {
        this.shadow.adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssAngleSwatch.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    set data(data) {
        this.angle = data.angle;
        this.render();
    }
    render() {
        const { translateX, translateY } = (0,_CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_2__.get2DTranslationsForAngle)(this.angle, swatchWidth / 4);
        const miniHandStyle = {
            transform: `translate(${translateX}px, ${translateY}px) rotate(${this.angle.value}${this.angle.unit})`,
        };
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        render(html `
      <div class="swatch">
        <span class="mini-hand" style=${styleMap(miniHandStyle)}></span>
      </div>
    `, this.shadow, {
            host: this,
        });
        // clang-format on
    }
}
Object.defineProperty(CSSAngleSwatch, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-css-angle-swatch`
});
customElements.define('devtools-css-angle-swatch', CSSAngleSwatch);


/***/ }),

/***/ "./src/ui/legacy/components/inline_editor/InlineEditorUtils.ts":
/*!*********************************************************************!*\
  !*** ./src/ui/legacy/components/inline_editor/InlineEditorUtils.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValueChangedEvent: () => (/* binding */ ValueChangedEvent)
/* harmony export */ });
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ValueChangedEvent extends Event {
    constructor(value) {
        super(ValueChangedEvent.eventName, {});
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = { value };
    }
}
Object.defineProperty(ValueChangedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'valuechanged'
});


/***/ })

}]);