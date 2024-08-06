"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_components_OriginTrialTreeView_js"],{

/***/ "./panels/application/components/OriginTrialTreeView.js":
/*!**************************************************************!*\
  !*** ./panels/application/components/OriginTrialTreeView.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Badge: () => (/* binding */ Badge),
/* harmony export */   OriginTrialTokenRows: () => (/* binding */ OriginTrialTokenRows),
/* harmony export */   OriginTrialTreeView: () => (/* binding */ OriginTrialTreeView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/adorners/adorners.js */ "./ui/components/adorners/adorners.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/tree_outline/tree_outline.js */ "./ui/components/tree_outline/tree_outline.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _badge_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./badge.css.js */ "./panels/application/components/badge.css.js");
/* harmony import */ var _originTrialTokenRows_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./originTrialTokenRows.css.js */ "./panels/application/components/originTrialTokenRows.css.js");
/* harmony import */ var _originTrialTreeView_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./originTrialTreeView.css.js */ "./panels/application/components/originTrialTreeView.css.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








const UIStrings = {
    /**
     *@description Label for the 'origin' field in a parsed Origin Trial Token.
     */
    origin: 'Origin',
    /**
     *@description Label for `trialName` field in a parsed Origin Trial Token.
     * This field is only shown when token has unknown trial name as the token
     * will be put into 'UNKNOWN' group.
     */
    trialName: 'Trial Name',
    /**
     *@description Label for `expiryTime` field in a parsed Origin Trial Token.
     */
    expiryTime: 'Expiry Time',
    /**
     *@description Label for `usageRestriction` field in a parsed Origin Trial Token.
     */
    usageRestriction: 'Usage Restriction',
    /**
     *@description Label for `isThirdParty` field in a parsed Origin Trial Token.
     */
    isThirdParty: 'Third Party',
    /**
     *@description Label for a field containing info about an Origin Trial Token's `matchSubDomains` field.
     *An Origin Trial Token contains an origin URL. The `matchSubDomains` field describes whether the token
     *only applies to the origin URL or to all subdomains of the origin URL as well.
     *The field contains either 'true' or 'false'.
     */
    matchSubDomains: 'Subdomain Matching',
    /**
     *@description Label for the raw(= encoded / not human-readable) Origin Trial Token.
     */
    rawTokenText: 'Raw Token',
    /**
     *@description Label for `status` field in an Origin Trial Token.
     */
    status: 'Token Status',
    /**
     *@description Label for tokenWithStatus node.
     */
    token: 'Token',
    /**
     *@description Label for a badge showing the number of Origin Trial Tokens. This number is always greater than 1.
     *@example {2} PH1
     */
    tokens: '{PH1} tokens',
    /**
     *@description Label shown when there are no Origin Trial Tokens in the Frame view of the Application panel.
     */
    noTrialTokens: 'No trial tokens',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/components/OriginTrialTreeView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class Badge extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal `devtools-resources-origin-trial-tree-view-badge`;
    #shadow = this.attachShadow({ mode: 'open' });
    #adorner = new _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_1__.Adorner.Adorner();
    set data(data) {
        this.#render(data);
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_badge_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]];
    }
    #render(data) {
        const adornerContent = document.createElement('span');
        adornerContent.textContent = data.badgeContent;
        this.#adorner.data = {
            name: 'badge',
            content: adornerContent,
        };
        this.#adorner.classList.add(`badge-${data.style}`);
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
      ${this.#adorner}
    `, this.#shadow, { host: this });
    }
}
customElements.define('devtools-resources-origin-trial-tree-view-badge', Badge);
function constructOriginTrialTree(originTrial) {
    return {
        treeNodeData: originTrial,
        id: 'OriginTrialTreeNode#' + originTrial.trialName,
        children: async () => originTrial.tokensWithStatus.length > 1 ?
            originTrial.tokensWithStatus.map(constructTokenNode) :
            constructTokenDetailsNodes(originTrial.tokensWithStatus[0]),
        renderer: (node) => {
            const trial = node.treeNodeData;
            const tokenCountBadge = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
        <${Badge.litTagName} .data=${{
                badgeContent: i18nString(UIStrings.tokens, { PH1: trial.tokensWithStatus.length }),
                style: 'secondary',
            }}></${Badge.litTagName}>
      `;
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
        ${trial.trialName}
        <${Badge.litTagName} .data=${{
                badgeContent: trial.status,
                style: trial.status === "Enabled" /* Protocol.Page.OriginTrialStatus.Enabled */ ? 'success' : 'error',
            }}></${Badge.litTagName}>
        ${trial.tokensWithStatus.length > 1 ? tokenCountBadge : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.nothing}
      `;
        },
    };
}
function constructTokenNode(token) {
    return {
        treeNodeData: token.status,
        id: 'TokenNode#' + token.rawTokenText,
        children: async () => constructTokenDetailsNodes(token),
        renderer: (node, state) => {
            const tokenStatus = node.treeNodeData;
            const statusBadge = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
        <${Badge.litTagName} .data=${{
                badgeContent: tokenStatus,
                style: tokenStatus === "Success" /* Protocol.Page.OriginTrialTokenStatus.Success */ ? 'success' : 'error',
            }}></${Badge.litTagName}>
      `;
            // Only display token status for convenience when the node is not expanded.
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `${i18nString(UIStrings.token)} ${state.isExpanded ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.nothing : statusBadge}`;
        },
    };
}
function renderTokenDetails(node) {
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
    <${OriginTrialTokenRows.litTagName} .data=${{ node: node }}>
    </${OriginTrialTokenRows.litTagName}>
    `;
}
function constructTokenDetailsNodes(token) {
    return [
        {
            treeNodeData: token,
            id: 'TokenDetailsNode#' + token.rawTokenText,
            renderer: renderTokenDetails,
        },
        constructRawTokenTextNode(token.rawTokenText),
    ];
}
function constructRawTokenTextNode(tokenText) {
    return {
        treeNodeData: i18nString(UIStrings.rawTokenText),
        id: 'TokenRawTextContainerNode#' + tokenText,
        children: async () => [{
                treeNodeData: tokenText,
                id: 'TokenRawTextNode#' + tokenText,
                renderer: (data) => {
                    const tokenText = data.treeNodeData;
                    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
        <div style="overflow-wrap: break-word;">
          ${tokenText}
        </div>
        `;
                },
            }],
    };
}
function defaultRenderer(node) {
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `${String(node.treeNodeData)}`;
}
class OriginTrialTokenRows extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal `devtools-resources-origin-trial-token-rows`;
    #shadow = this.attachShadow({ mode: 'open' });
    #tokenWithStatus = null;
    #parsedTokenDetails = [];
    #dateFormatter = new Intl.DateTimeFormat(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsLocale.DevToolsLocale.instance().locale, { dateStyle: 'long', timeStyle: 'long' });
    set data(data) {
        this.#tokenWithStatus = data.node.treeNodeData;
        this.#setTokenFields();
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_originTrialTokenRows_css_js__WEBPACK_IMPORTED_MODULE_6__["default"]];
        this.#render();
    }
    #renderTokenField = (fieldValue, hasError) => _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
        <div class=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.Directives.ifDefined(hasError ? 'error-text' : undefined)}>
          ${fieldValue}
        </div>`;
    #setTokenFields() {
        if (!this.#tokenWithStatus?.parsedToken) {
            return;
        }
        this.#parsedTokenDetails = [
            {
                name: i18nString(UIStrings.origin),
                value: this.#renderTokenField(this.#tokenWithStatus.parsedToken.origin, this.#tokenWithStatus.status === "WrongOrigin" /* Protocol.Page.OriginTrialTokenStatus.WrongOrigin */),
            },
            {
                name: i18nString(UIStrings.expiryTime),
                value: this.#renderTokenField(this.#dateFormatter.format(this.#tokenWithStatus.parsedToken.expiryTime * 1000), this.#tokenWithStatus.status === "Expired" /* Protocol.Page.OriginTrialTokenStatus.Expired */),
            },
            {
                name: i18nString(UIStrings.usageRestriction),
                value: this.#renderTokenField(this.#tokenWithStatus.parsedToken.usageRestriction),
            },
            {
                name: i18nString(UIStrings.isThirdParty),
                value: this.#renderTokenField(this.#tokenWithStatus.parsedToken.isThirdParty.toString()),
            },
            {
                name: i18nString(UIStrings.matchSubDomains),
                value: this.#renderTokenField(this.#tokenWithStatus.parsedToken.matchSubDomains.toString()),
            },
        ];
        if (this.#tokenWithStatus.status === "UnknownTrial" /* Protocol.Page.OriginTrialTokenStatus.UnknownTrial */) {
            this.#parsedTokenDetails = [
                {
                    name: i18nString(UIStrings.trialName),
                    value: this.#renderTokenField(this.#tokenWithStatus.parsedToken.trialName),
                },
                ...this.#parsedTokenDetails,
            ];
        }
    }
    #render() {
        if (!this.#tokenWithStatus) {
            return;
        }
        const tokenDetails = [
            {
                name: i18nString(UIStrings.status),
                value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
          <${Badge.litTagName} .data=${{
                    badgeContent: this.#tokenWithStatus.status,
                    style: this.#tokenWithStatus.status === "Success" /* Protocol.Page.OriginTrialTokenStatus.Success */ ? 'success' : 'error',
                }}></${Badge.litTagName}>`,
            },
            ...this.#parsedTokenDetails,
        ];
        const tokenDetailRows = tokenDetails.map((field) => {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
          <div class="key">${field.name}</div>
          <div class="value">${field.value}</div>
          `;
        });
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
      <div class="content">
        ${tokenDetailRows}
      </div>
    `, this.#shadow, { host: this });
    }
}
customElements.define('devtools-resources-origin-trial-token-rows', OriginTrialTokenRows);
class OriginTrialTreeView extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal `devtools-resources-origin-trial-tree-view`;
    #shadow = this.attachShadow({ mode: 'open' });
    set data(data) {
        this.#render(data.trials);
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_originTrialTreeView_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]];
    }
    #render(trials) {
        if (!trials.length) {
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
    <span class="status-badge">
      <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName}
          .data=${{
                iconName: 'clear',
                color: 'var(--icon-default)',
                width: '16px',
                height: '16px',
            }}
        >
      </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName}>
      <span>${i18nString(UIStrings.noTrialTokens)}</span>
    </span>`, this.#shadow, { host: this });
            return;
        }
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
      <${_ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_3__.TreeOutline.TreeOutline.litTagName} .data=${{
            tree: trials.map(constructOriginTrialTree),
            defaultRenderer,
        }}>
      </${_ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_3__.TreeOutline.TreeOutline.litTagName}>
    `, this.#shadow, { host: this });
    }
}
customElements.define('devtools-resources-origin-trial-tree-view', OriginTrialTreeView);
//# sourceMappingURL=OriginTrialTreeView.js.map

/***/ }),

/***/ "./panels/application/components/badge.css.js":
/*!****************************************************!*\
  !*** ./panels/application/components/badge.css.js ***!
  \****************************************************/
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
 * Copyright (c) 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host .badge-error {
  --override-adorner-text-color: var(--sys-color-error-bright);
  --override-adorner-border-color: var(--sys-color-error-bright);
}

:host .badge-success {
  --override-adorner-text-color: var(--sys-color-tertiary);
  --override-adorner-border-color: var(--sys-color-tertiary);
}

:host .badge-secondary {
  --override-adorner-text-color: var(--sys-color-token-subtle);
  --override-adorner-border-color: var(--sys-color-token-subtle);
}

/* Use mono-space source code font to assist reading of adorner content */
:host {
  font-family: var(--source-code-font-family);
}

/*# sourceURL=badge.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/application/components/originTrialTokenRows.css.js":
/*!*******************************************************************!*\
  !*** ./panels/application/components/originTrialTokenRows.css.js ***!
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
 * Copyright (c) 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.content {
  display: grid;
  grid-template-columns: min-content 1fr;
}

.key {
  color: var(--sys-color-token-subtle);
  padding: 0 6px;
  text-align: right;
  white-space: pre;
}

.value {
  color: var(--sys-color-token-subtle);
  margin-inline-start: 0;
  padding: 0 6px;
}

.error-text {
  color: var(--sys-color-error-bright);
  font-weight: bold;
}

/*# sourceURL=originTrialTokenRows.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/application/components/originTrialTreeView.css.js":
/*!******************************************************************!*\
  !*** ./panels/application/components/originTrialTreeView.css.js ***!
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
 * Copyright (c) 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.status-badge {
  border-radius: 4px;
  padding: 4px;
  background: var(--sys-color-neutral-container);

  & > devtools-icon {
    vertical-align: sub;
  }
}

/*# sourceURL=originTrialTreeView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/tree_outline/tree_outline.js":
/*!****************************************************!*\
  !*** ./ui/components/tree_outline/tree_outline.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TreeOutline: () => (/* reexport module object */ _TreeOutline_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   TreeOutlineUtils: () => (/* reexport module object */ _TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _TreeOutline_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TreeOutline.js */ "./ui/components/tree_outline/TreeOutline.js");
/* harmony import */ var _TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TreeOutlineUtils.js */ "./ui/components/tree_outline/TreeOutlineUtils.js");
// Copyright (c) 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



//# sourceMappingURL=tree_outline.js.map

/***/ })

}]);