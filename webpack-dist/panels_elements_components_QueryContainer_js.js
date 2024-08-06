"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_components_QueryContainer_js"],{

/***/ "./panels/elements/components/QueryContainer.js":
/*!******************************************************!*\
  !*** ./panels/elements/components/QueryContainer.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueriedSizeRequestedEvent: () => (/* binding */ QueriedSizeRequestedEvent),
/* harmony export */   QueryContainer: () => (/* binding */ QueryContainer)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_components_node_text_node_text_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/node_text/node_text.js */ "./ui/components/node_text/node_text.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _queryContainer_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./queryContainer.css.js */ "./panels/elements/components/queryContainer.css.js");
// Copyright (c) 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__;
const { PhysicalAxis, QueryAxis } = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSContainerQuery;
class QueriedSizeRequestedEvent extends Event {
    static eventName = 'queriedsizerequested';
    constructor() {
        super(QueriedSizeRequestedEvent.eventName, {});
    }
}
class QueryContainer extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-query-container`;
    #shadow = this.attachShadow({ mode: 'open' });
    #queryName;
    #container;
    #onContainerLinkClick;
    #isContainerLinkHovered = false;
    #queriedSizeDetails;
    set data(data) {
        this.#queryName = data.queryName;
        this.#container = data.container;
        this.#onContainerLinkClick = data.onContainerLinkClick;
        this.#render();
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_queryContainer_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]];
    }
    updateContainerQueriedSizeDetails(details) {
        this.#queriedSizeDetails = details;
        this.#render();
    }
    async #onContainerLinkMouseEnter() {
        this.#container?.highlightNode('container-outline');
        this.#isContainerLinkHovered = true;
        this.dispatchEvent(new QueriedSizeRequestedEvent());
    }
    #onContainerLinkMouseLeave() {
        this.#container?.clearHighlight();
        this.#isContainerLinkHovered = false;
        this.#render();
    }
    #render() {
        if (!this.#container) {
            return;
        }
        let idToDisplay, classesToDisplay;
        if (!this.#queryName) {
            idToDisplay = this.#container.getAttribute('id');
            classesToDisplay = this.#container.getAttribute('class')?.split(/\s+/).filter(Boolean);
        }
        const nodeTitle = this.#queryName || this.#container.nodeNameNicelyCased;
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        // eslint-disable-next-line rulesdir/ban_a_tags_in_lit_html
        render(html `
      →
      <a href="#"
        draggable=false
        class="container-link"
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.cssRuleHeader('container-query').track({ click: true })}
        @click=${this.#onContainerLinkClick}
        @mouseenter=${this.#onContainerLinkMouseEnter}
        @mouseleave=${this.#onContainerLinkMouseLeave}
      ><${_ui_components_node_text_node_text_js__WEBPACK_IMPORTED_MODULE_2__.NodeText.NodeText.litTagName}
          data-node-title=${nodeTitle}
          .data=${{
            nodeTitle,
            nodeId: idToDisplay,
            nodeClasses: classesToDisplay,
        }}></${_ui_components_node_text_node_text_js__WEBPACK_IMPORTED_MODULE_2__.NodeText.NodeText.litTagName}></a>
      ${this.#isContainerLinkHovered ? this.#renderQueriedSizeDetails() : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing}
    `, this.#shadow, {
            host: this,
        });
        // clang-format on
    }
    #renderQueriedSizeDetails() {
        if (!this.#queriedSizeDetails || this.#queriedSizeDetails.queryAxis === "" /* QueryAxis.None */) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing;
        }
        const areBothAxesQueried = this.#queriedSizeDetails.queryAxis === "size" /* QueryAxis.Both */;
        const axisIconClasses = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.Directives.classMap({
            'axis-icon': true,
            'hidden': areBothAxesQueried,
            'vertical': this.#queriedSizeDetails.physicalAxis === "Vertical" /* PhysicalAxis.Vertical */,
        });
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return html `
      <span class="queried-size-details">
        (${this.#queriedSizeDetails.queryAxis}<${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName}
          class=${axisIconClasses} .data=${{
            iconName: 'width',
            color: 'var(--icon-default)',
        }}></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName}>)
        ${areBothAxesQueried && this.#queriedSizeDetails.width ? 'width:' : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing}
        ${this.#queriedSizeDetails.width || _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing}
        ${areBothAxesQueried && this.#queriedSizeDetails.height ? 'height:' : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing}
        ${this.#queriedSizeDetails.height || _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing}
      </span>
    `;
        // clang-format on
    }
}
customElements.define('devtools-query-container', QueryContainer);
//# sourceMappingURL=QueryContainer.js.map

/***/ }),

/***/ "./panels/elements/components/queryContainer.css.js":
/*!**********************************************************!*\
  !*** ./panels/elements/components/queryContainer.css.js ***!
  \**********************************************************/
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

.container-link {
  display: inline-block;
  color: var(--sys-color-state-disabled);
}

.container-link:hover {
  color: var(--sys-color-primary);
}

.queried-size-details {
  color: var(--sys-color-on-surface);
}

.axis-icon {
  margin-left: 0.4em;
  width: 16px;
  height: 12px;
  vertical-align: text-top;
}

.axis-icon.hidden {
  display: none;
}

.axis-icon.vertical {
  transform: rotate(90deg);
}

/*# sourceURL=queryContainer.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/node_text/NodeText.js":
/*!*********************************************!*\
  !*** ./ui/components/node_text/NodeText.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeText: () => (/* binding */ NodeText)
/* harmony export */ });
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _nodeText_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodeText.css.js */ "./ui/components/node_text/nodeText.css.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__;
class NodeText extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-node-text`;
    #shadow = this.attachShadow({ mode: 'open' });
    #nodeTitle = '';
    #nodeId = '';
    #nodeClasses = [];
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_nodeText_css_js__WEBPACK_IMPORTED_MODULE_1__["default"]];
    }
    set data(data) {
        this.#nodeTitle = data.nodeTitle;
        this.#nodeId = data.nodeId;
        this.#nodeClasses = data.nodeClasses;
        this.#render();
    }
    #render() {
        const hasId = Boolean(this.#nodeId);
        const hasNodeClasses = Boolean(this.#nodeClasses && this.#nodeClasses.length > 0);
        const parts = [
            html `<span class="node-label-name">${this.#nodeTitle}</span>`,
        ];
        if (this.#nodeId) {
            const classes = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Directives.classMap({
                'node-label-id': true,
                'node-multiple-descriptors': hasNodeClasses,
            });
            parts.push(html `<span class=${classes}>#${CSS.escape(this.#nodeId)}</span>`);
        }
        if (this.#nodeClasses && this.#nodeClasses.length > 0) {
            const text = this.#nodeClasses.map(c => `.${CSS.escape(c)}`).join('');
            const classes = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Directives.classMap({
                'node-label-class': true,
                'node-multiple-descriptors': hasId,
            });
            parts.push(html `<span class=${classes}>${text}</span>`);
        }
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        render(html `
      ${parts}
    `, this.#shadow, {
            host: this,
        });
        // clang-format on
    }
}
customElements.define('devtools-node-text', NodeText);
//# sourceMappingURL=NodeText.js.map

/***/ }),

/***/ "./ui/components/node_text/nodeText.css.js":
/*!*************************************************!*\
  !*** ./ui/components/node_text/nodeText.css.js ***!
  \*************************************************/
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

/* See: https://crbug.com/1227651 for details on changing these to --override pattern. */

.node-label-name {
  color: var(--override-node-text-label-color, var(--sys-color-token-tag));
}

.node-label-class {
  color: var(--override-node-text-class-color, var(--sys-color-token-attribute));
}

.node-label-id {
  color: var(--override-node-text-id-color, var(--sys-color-token-attribute));
}

.node-label-class.node-multiple-descriptors {
  color: var(--override-node-text-multiple-descriptors-class, var(--override-node-text-class-color, var(--sys-color-token-attribute)));
}

.node-label-id.node-multiple-descriptors {
  color: var(--override-node-text-multiple-descriptors-id, var(--override-node-text-id-color, var(--sys-color-token-attribute)));
}

/*# sourceURL=nodeText.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/node_text/node_text.js":
/*!**********************************************!*\
  !*** ./ui/components/node_text/node_text.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeText: () => (/* reexport module object */ _NodeText_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _NodeText_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodeText.js */ "./ui/components/node_text/NodeText.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


//# sourceMappingURL=node_text.js.map

/***/ })

}]);