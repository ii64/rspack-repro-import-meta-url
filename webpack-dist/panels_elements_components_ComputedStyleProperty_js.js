"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_components_ComputedStyleProperty_js"],{

/***/ "./panels/elements/components/ComputedStyleProperty.js":
/*!*************************************************************!*\
  !*** ./panels/elements/components/ComputedStyleProperty.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComputedStyleProperty: () => (/* binding */ ComputedStyleProperty),
/* harmony export */   NavigateToSourceEvent: () => (/* binding */ NavigateToSourceEvent)
/* harmony export */ });
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _computedStyleProperty_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computedStyleProperty.css.js */ "./panels/elements/components/computedStyleProperty.css.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__;
class NavigateToSourceEvent extends Event {
    static eventName = 'onnavigatetosource';
    constructor() {
        super(NavigateToSourceEvent.eventName, { bubbles: true, composed: true });
    }
}
class ComputedStyleProperty extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-computed-style-property`;
    #shadow = this.attachShadow({ mode: 'open' });
    #inherited = false;
    #traceable = false;
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_computedStyleProperty_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]];
        this.#render();
    }
    set inherited(inherited) {
        if (inherited === this.#inherited) {
            return;
        }
        this.#inherited = inherited;
        this.#render();
    }
    set traceable(traceable) {
        if (traceable === this.#traceable) {
            return;
        }
        this.#traceable = traceable;
        this.#render();
    }
    #onNavigateToSourceClick() {
        this.dispatchEvent(new NavigateToSourceEvent());
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        render(html `
      <div class="computed-style-property ${this.#inherited ? 'inherited' : ''}">
        <div class="property-name">
          <slot name="name"></slot>
        </div>
        <span class="hidden" aria-hidden="false">: </span>
        ${this.#traceable ?
            html `<span class="goto" @click=${this.#onNavigateToSourceClick} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.action('elements.jump-to-style').track({ click: true })}></span>` :
            null}
        <div class="property-value">
          <slot name="value"></slot>
        </div>
        <span class="hidden" aria-hidden="false">;</span>
      </div>
    `, this.#shadow, {
            host: this,
        });
        // clang-format on
    }
}
customElements.define('devtools-computed-style-property', ComputedStyleProperty);
//# sourceMappingURL=ComputedStyleProperty.js.map

/***/ }),

/***/ "./panels/elements/components/computedStyleProperty.css.js":
/*!*****************************************************************!*\
  !*** ./panels/elements/components/computedStyleProperty.css.js ***!
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
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  position: relative;
  overflow: hidden;
  flex: auto;
  text-overflow: ellipsis;
}

.computed-style-property {
  --goto-size: 16px;

  font-family: var(--monospace-font-family);
  font-size: var(--monospace-font-size);
  min-height: 16px;
  box-sizing: border-box;
  padding-top: 2px;
  white-space: nowrap;
  user-select: text;
}

.computed-style-property:hover {
  background-color: var(--sys-color-state-hover-on-subtle);
  cursor: text;
}

.computed-style-property.inherited {
  opacity: 50%;
}

.property-name,
.property-value {
  display: contents;
  overflow: hidden;
  text-overflow: ellipsis;
}

.property-name {
  width: 16em;
  max-width: 52%;
  margin-right: calc(var(--goto-size) / 2);
  display: inline-block;
  vertical-align: text-top;
  color: var(--webkit-css-property-color, var(--sys-color-token-property-special)); /* stylelint-disable-line plugin/use_theme_colors */ /* See: crbug.com/1152736 for color variable migration. */
}

.property-value {
  margin-left: 2em;
}

.goto {
  display: none;
  cursor: pointer;
  position: absolute;
  width: var(--goto-size);
  height: var(--goto-size);
  margin: -1px 0 0 calc(-1 * var(--goto-size));
  mask: var(--image-file-goto-filled) center / contain no-repeat;
  background-color: var(--sys-color-primary-bright);
}

.computed-style-property:hover .goto {
  display: inline-block;
}

.hidden {
  display: none;
}
/* narrowed styles */
:host-context(.computed-narrow) .computed-style-property {
  white-space: normal;

  & .goto {
    display: none;
    margin-left: 0;
  }
}

:host-context(.computed-narrow) .property-name,
:host-context(.computed-narrow) .property-value {
  display: inline-block;
  width: 100%;
  max-width: 100%;
  margin-left: 0;
  white-space: nowrap;
}

:host-context(.computed-narrow) .computed-style-property:not(.inherited):hover {
  & .property-value {
    margin-left: var(--goto-size);
  }

  & .goto {
    display: inline-block;
  }
}
/* high-contrast styles */
@media (forced-colors: active) {
  .computed-style-property.inherited {
    opacity: 100%;
  }

  .computed-style-property:hover {
    forced-color-adjust: none;
    background-color: Highlight;
  }

  .computed-style-property:hover * {
    color: HighlightText;
  }

  .goto {
    background-color: HighlightText;
  }
}

/*# sourceURL=computedStyleProperty.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);