"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_two_states_counter_basic_js"],{

/***/ "./ui/components/docs/two_states_counter/basic.js":
/*!********************************************************!*\
  !*** ./ui/components/docs/two_states_counter/basic.js ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */ var _two_states_counter_two_states_counter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../two_states_counter/two_states_counter.js */ "./ui/components/two_states_counter/two_states_counter.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.initializeGlobalVars();
function getGeneralCounterData() {
    return {
        active: 3,
        inactive: 10,
        width: '18px',
        height: '18px',
        activeTitle: 'Num active',
        inactiveTitle: 'Num inactive',
    };
}
function appendCounter(counter) {
    document.querySelector('#container')?.appendChild(counter);
}
// Active and inactive counts.
const counterData = getGeneralCounterData();
const counter = new _two_states_counter_two_states_counter_js__WEBPACK_IMPORTED_MODULE_2__.TwoStatesCounter.TwoStatesCounter();
counter.data = counterData;
appendCounter(counter);
// Only active count.
const activeCountData = getGeneralCounterData();
activeCountData.inactive = 0;
const activeOnlyCounter = new _two_states_counter_two_states_counter_js__WEBPACK_IMPORTED_MODULE_2__.TwoStatesCounter.TwoStatesCounter();
activeOnlyCounter.data = activeCountData;
appendCounter(activeOnlyCounter);
// Only inactive count.
const inactiveCountData = getGeneralCounterData();
inactiveCountData.active = 0;
const inactiveOnlyCounter = new _two_states_counter_two_states_counter_js__WEBPACK_IMPORTED_MODULE_2__.TwoStatesCounter.TwoStatesCounter();
inactiveOnlyCounter.data = inactiveCountData;
appendCounter(inactiveOnlyCounter);
//# sourceMappingURL=basic.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./ui/components/two_states_counter/TwoStatesCounter.js":
/*!**************************************************************!*\
  !*** ./ui/components/two_states_counter/TwoStatesCounter.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TwoStatesCounter: () => (/* binding */ TwoStatesCounter)
/* harmony export */ });
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */ var _twoStatesCounter_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./twoStatesCounter.css.js */ "./ui/components/two_states_counter/twoStatesCounter.css.js");
// Copyright (c) 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const isString = (value) => value !== undefined;
class TwoStatesCounter extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-two-states-counter`;
    #boundRender = this.#render.bind(this);
    #shadow = this.attachShadow({ mode: 'open' });
    #numActive = 0;
    #numInactive = 0;
    #width = '14px';
    #height = '14px';
    #activeTitle;
    #inactiveTitle;
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_twoStatesCounter_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]];
        void _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.ScheduledRender.scheduleRender(this, this.#boundRender);
    }
    set data(data) {
        if (data.active < 0 || data.inactive < 0) {
            throw new Error('Values need to be greater or equal to zero.');
        }
        this.#numActive = data.active;
        this.#numInactive = data.inactive;
        this.#width = isString(data.width) ? data.width : this.#width;
        this.#height = isString(data.height) ? data.height : this.#height;
        this.#activeTitle = data.activeTitle;
        this.#inactiveTitle = data.inactiveTitle;
        void _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.ScheduledRender.scheduleRender(this, this.#boundRender);
    }
    #render() {
        if (this.#numActive === 0 && this.#numInactive === 0) {
            return;
        }
        const showBothNumbers = this.#numActive > 0 && this.#numInactive > 0;
        const commonClasses = {
            part: true,
            split: showBothNumbers,
        };
        const activeClassMap = {
            ...commonClasses,
            active: true,
        };
        const inactiveClassMap = {
            ...commonClasses,
            inactive: true,
        };
        // clang-format off
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
    <div class='counter'>
      ${this.#renderPart(this.#numActive, activeClassMap, this.#activeTitle)}
      ${this.#renderPart(this.#numInactive, inactiveClassMap, this.#inactiveTitle)}
    </div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
    #renderPart(count, classInfo, title) {
        const styles = {
            width: this.#width,
            height: this.#height,
        };
        // clang-format off
        return count > 0 ? _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
       <span class=${_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Directives.classMap(classInfo)} style=${_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Directives.styleMap(styles)} title=${title}>
          ${count}
       </span>
      ` : _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing;
        // clang-format on
    }
}
customElements.define('devtools-two-states-counter', TwoStatesCounter);
//# sourceMappingURL=TwoStatesCounter.js.map

/***/ }),

/***/ "./ui/components/two_states_counter/twoStatesCounter.css.js":
/*!******************************************************************!*\
  !*** ./ui/components/two_states_counter/twoStatesCounter.css.js ***!
  \******************************************************************/
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
 * Copyright 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.active.split {
  border-radius: 50% 0% 0% 50%;
}

.inactive.split {
  border-radius: 0% 50% 50% 0%;
}

.counter {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.part {
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.active {
  color: var(--sys-color-on-primary);
  background-color: var(--sys-color-primary);
}

.inactive {
  color: var(--sys-color-state-disabled);
  background-color: var(--sys-color-state-disabled-container);
}

/*# sourceURL=twoStatesCounter.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/two_states_counter/two_states_counter.js":
/*!****************************************************************!*\
  !*** ./ui/components/two_states_counter/two_states_counter.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TwoStatesCounter: () => (/* reexport module object */ _TwoStatesCounter_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _TwoStatesCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TwoStatesCounter.js */ "./ui/components/two_states_counter/TwoStatesCounter.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


//# sourceMappingURL=two_states_counter.js.map

/***/ })

}]);