"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_components_OriginTrialTreeView_ts"],{

/***/ "./src/panels/application/components/OriginTrialTreeView.ts":
/*!******************************************************************!*\
  !*** ./src/panels/application/components/OriginTrialTreeView.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Badge: () => (/* binding */ Badge),
/* harmony export */   OriginTrialTokenRows: () => (/* binding */ OriginTrialTokenRows),
/* harmony export */   OriginTrialTreeView: () => (/* binding */ OriginTrialTreeView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/adorners/adorners.js */ "./src/ui/components/adorners/adorners.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/tree_outline/tree_outline.js */ "./src/ui/components/tree_outline/tree_outline.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './badge.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './originTrialTokenRows.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './originTrialTreeView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Badge_instances, _Badge_shadow, _Badge_adorner, _Badge_render, _OriginTrialTokenRows_instances, _OriginTrialTokenRows_shadow, _OriginTrialTokenRows_tokenWithStatus, _OriginTrialTokenRows_parsedTokenDetails, _OriginTrialTokenRows_dateFormatter, _OriginTrialTokenRows_renderTokenField, _OriginTrialTokenRows_setTokenFields, _OriginTrialTokenRows_render, _OriginTrialTreeView_instances, _OriginTrialTreeView_shadow, _OriginTrialTreeView_render;









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
    constructor() {
        super(...arguments);
        _Badge_instances.add(this);
        _Badge_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _Badge_adorner.set(this, new _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_2__.Adorner.Adorner());
    }
    set data(data) {
        __classPrivateFieldGet(this, _Badge_instances, "m", _Badge_render).call(this, data);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _Badge_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './badge.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
}
_Badge_shadow = new WeakMap(), _Badge_adorner = new WeakMap(), _Badge_instances = new WeakSet(), _Badge_render = function _Badge_render(data) {
    const adornerContent = document.createElement('span');
    adornerContent.textContent = data.badgeContent;
    __classPrivateFieldGet(this, _Badge_adorner, "f").data = {
        name: 'badge',
        content: adornerContent,
    };
    __classPrivateFieldGet(this, _Badge_adorner, "f").classList.add(`badge-${data.style}`);
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
      ${__classPrivateFieldGet(this, _Badge_adorner, "f")}
    `, __classPrivateFieldGet(this, _Badge_shadow, "f"), { host: this });
};
Object.defineProperty(Badge, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.literal `devtools-resources-origin-trial-tree-view-badge`
});
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
            const tokenCountBadge = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
        <${Badge.litTagName} .data=${{
                badgeContent: i18nString(UIStrings.tokens, { PH1: trial.tokensWithStatus.length }),
                style: 'secondary',
            }}></${Badge.litTagName}>
      `;
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
        ${trial.trialName}
        <${Badge.litTagName} .data=${{
                badgeContent: trial.status,
                style: trial.status === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Page.OriginTrialStatus.Enabled ? 'success' : 'error',
            }}></${Badge.litTagName}>
        ${trial.tokensWithStatus.length > 1 ? tokenCountBadge : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.nothing}
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
            const statusBadge = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
        <${Badge.litTagName} .data=${{
                badgeContent: tokenStatus,
                style: tokenStatus === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Page.OriginTrialTokenStatus.Success ? 'success' : 'error',
            }}></${Badge.litTagName}>
      `;
            // Only display token status for convenience when the node is not expanded.
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `${i18nString(UIStrings.token)} ${state.isExpanded ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.nothing : statusBadge}`;
        },
    };
}
function renderTokenDetails(node) {
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
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
                    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
        <div style="overflow-wrap: break-word;">
          ${tokenText}
        </div>
        `;
                },
            }],
    };
}
function defaultRenderer(node) {
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `${String(node.treeNodeData)}`;
}
class OriginTrialTokenRows extends HTMLElement {
    constructor() {
        super(...arguments);
        _OriginTrialTokenRows_instances.add(this);
        _OriginTrialTokenRows_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _OriginTrialTokenRows_tokenWithStatus.set(this, null);
        _OriginTrialTokenRows_parsedTokenDetails.set(this, []);
        _OriginTrialTokenRows_dateFormatter.set(this, new Intl.DateTimeFormat(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsLocale.DevToolsLocale.instance().locale, { dateStyle: 'long', timeStyle: 'long' }));
        _OriginTrialTokenRows_renderTokenField.set(this, (fieldValue, hasError) => _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
        <div class=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.Directives.ifDefined(hasError ? 'error-text' : undefined)}>
          ${fieldValue}
        </div>`);
    }
    set data(data) {
        __classPrivateFieldSet(this, _OriginTrialTokenRows_tokenWithStatus, data.node.treeNodeData, "f");
        __classPrivateFieldGet(this, _OriginTrialTokenRows_instances, "m", _OriginTrialTokenRows_setTokenFields).call(this);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _OriginTrialTokenRows_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './originTrialTokenRows.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _OriginTrialTokenRows_instances, "m", _OriginTrialTokenRows_render).call(this);
    }
}
_OriginTrialTokenRows_shadow = new WeakMap(), _OriginTrialTokenRows_tokenWithStatus = new WeakMap(), _OriginTrialTokenRows_parsedTokenDetails = new WeakMap(), _OriginTrialTokenRows_dateFormatter = new WeakMap(), _OriginTrialTokenRows_renderTokenField = new WeakMap(), _OriginTrialTokenRows_instances = new WeakSet(), _OriginTrialTokenRows_setTokenFields = function _OriginTrialTokenRows_setTokenFields() {
    if (!__classPrivateFieldGet(this, _OriginTrialTokenRows_tokenWithStatus, "f")?.parsedToken) {
        return;
    }
    __classPrivateFieldSet(this, _OriginTrialTokenRows_parsedTokenDetails, [
        {
            name: i18nString(UIStrings.origin),
            value: __classPrivateFieldGet(this, _OriginTrialTokenRows_renderTokenField, "f").call(this, __classPrivateFieldGet(this, _OriginTrialTokenRows_tokenWithStatus, "f").parsedToken.origin, __classPrivateFieldGet(this, _OriginTrialTokenRows_tokenWithStatus, "f").status === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Page.OriginTrialTokenStatus.WrongOrigin),
        },
        {
            name: i18nString(UIStrings.expiryTime),
            value: __classPrivateFieldGet(this, _OriginTrialTokenRows_renderTokenField, "f").call(this, __classPrivateFieldGet(this, _OriginTrialTokenRows_dateFormatter, "f").format(__classPrivateFieldGet(this, _OriginTrialTokenRows_tokenWithStatus, "f").parsedToken.expiryTime * 1000), __classPrivateFieldGet(this, _OriginTrialTokenRows_tokenWithStatus, "f").status === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Page.OriginTrialTokenStatus.Expired),
        },
        {
            name: i18nString(UIStrings.usageRestriction),
            value: __classPrivateFieldGet(this, _OriginTrialTokenRows_renderTokenField, "f").call(this, __classPrivateFieldGet(this, _OriginTrialTokenRows_tokenWithStatus, "f").parsedToken.usageRestriction),
        },
        {
            name: i18nString(UIStrings.isThirdParty),
            value: __classPrivateFieldGet(this, _OriginTrialTokenRows_renderTokenField, "f").call(this, __classPrivateFieldGet(this, _OriginTrialTokenRows_tokenWithStatus, "f").parsedToken.isThirdParty.toString()),
        },
        {
            name: i18nString(UIStrings.matchSubDomains),
            value: __classPrivateFieldGet(this, _OriginTrialTokenRows_renderTokenField, "f").call(this, __classPrivateFieldGet(this, _OriginTrialTokenRows_tokenWithStatus, "f").parsedToken.matchSubDomains.toString()),
        },
    ], "f");
    if (__classPrivateFieldGet(this, _OriginTrialTokenRows_tokenWithStatus, "f").status === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Page.OriginTrialTokenStatus.UnknownTrial) {
        __classPrivateFieldSet(this, _OriginTrialTokenRows_parsedTokenDetails, [
            {
                name: i18nString(UIStrings.trialName),
                value: __classPrivateFieldGet(this, _OriginTrialTokenRows_renderTokenField, "f").call(this, __classPrivateFieldGet(this, _OriginTrialTokenRows_tokenWithStatus, "f").parsedToken.trialName),
            },
            ...__classPrivateFieldGet(this, _OriginTrialTokenRows_parsedTokenDetails, "f"),
        ], "f");
    }
}, _OriginTrialTokenRows_render = function _OriginTrialTokenRows_render() {
    if (!__classPrivateFieldGet(this, _OriginTrialTokenRows_tokenWithStatus, "f")) {
        return;
    }
    const tokenDetails = [
        {
            name: i18nString(UIStrings.status),
            value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
          <${Badge.litTagName} .data=${{
                badgeContent: __classPrivateFieldGet(this, _OriginTrialTokenRows_tokenWithStatus, "f").status,
                style: __classPrivateFieldGet(this, _OriginTrialTokenRows_tokenWithStatus, "f").status === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Page.OriginTrialTokenStatus.Success ? 'success' : 'error',
            }}></${Badge.litTagName}>`,
        },
        ...__classPrivateFieldGet(this, _OriginTrialTokenRows_parsedTokenDetails, "f"),
    ];
    const tokenDetailRows = tokenDetails.map((field) => {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
          <div class="key">${field.name}</div>
          <div class="value">${field.value}</div>
          `;
    });
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
      <div class="content">
        ${tokenDetailRows}
      </div>
    `, __classPrivateFieldGet(this, _OriginTrialTokenRows_shadow, "f"), { host: this });
};
Object.defineProperty(OriginTrialTokenRows, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.literal `devtools-resources-origin-trial-token-rows`
});
customElements.define('devtools-resources-origin-trial-token-rows', OriginTrialTokenRows);
class OriginTrialTreeView extends HTMLElement {
    constructor() {
        super(...arguments);
        _OriginTrialTreeView_instances.add(this);
        _OriginTrialTreeView_shadow.set(this, this.attachShadow({ mode: 'open' }));
    }
    set data(data) {
        __classPrivateFieldGet(this, _OriginTrialTreeView_instances, "m", _OriginTrialTreeView_render).call(this, data.trials);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _OriginTrialTreeView_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './originTrialTreeView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
}
_OriginTrialTreeView_shadow = new WeakMap(), _OriginTrialTreeView_instances = new WeakSet(), _OriginTrialTreeView_render = function _OriginTrialTreeView_render(trials) {
    if (!trials.length) {
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
    <span class="status-badge">
      <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName}
          .data=${{
            iconName: 'clear',
            color: 'var(--icon-default)',
            width: '16px',
            height: '16px',
        }}
        >
      </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName}>
      <span>${i18nString(UIStrings.noTrialTokens)}</span>
    </span>`, __classPrivateFieldGet(this, _OriginTrialTreeView_shadow, "f"), { host: this });
        return;
    }
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
      <${_ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeOutline.litTagName} .data=${{
        tree: trials.map(constructOriginTrialTree),
        defaultRenderer,
    }}>
      </${_ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeOutline.litTagName}>
    `, __classPrivateFieldGet(this, _OriginTrialTreeView_shadow, "f"), { host: this });
};
Object.defineProperty(OriginTrialTreeView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.literal `devtools-resources-origin-trial-tree-view`
});
customElements.define('devtools-resources-origin-trial-tree-view', OriginTrialTreeView);


/***/ }),

/***/ "./src/ui/components/tree_outline/tree_outline.ts":
/*!********************************************************!*\
  !*** ./src/ui/components/tree_outline/tree_outline.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TreeOutline: () => (/* reexport module object */ _TreeOutline_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   TreeOutlineUtils: () => (/* reexport module object */ _TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _TreeOutline_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TreeOutline.js */ "./src/ui/components/tree_outline/TreeOutline.ts");
/* harmony import */ var _TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TreeOutlineUtils.js */ "./src/ui/components/tree_outline/TreeOutlineUtils.ts");
// Copyright (c) 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





/***/ })

}]);