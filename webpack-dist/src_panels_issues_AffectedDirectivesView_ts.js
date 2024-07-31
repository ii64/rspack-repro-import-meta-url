"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_issues_AffectedDirectivesView_ts"],{

/***/ "./src/panels/issues/AffectedDirectivesView.ts":
/*!*****************************************************!*\
  !*** ./src/panels/issues/AffectedDirectivesView.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AffectedDirectivesView: () => (/* binding */ AffectedDirectivesView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./src/models/issues_manager/issues_manager.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/issues/components/components.ts");
/* harmony import */ var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./src/panels/issues/AffectedResourcesView.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AffectedDirectivesView_instances, _AffectedDirectivesView_appendStatus, _AffectedDirectivesView_appendViolatedDirective, _AffectedDirectivesView_appendBlockedURL, _AffectedDirectivesView_appendBlockedElement, _AffectedDirectivesView_appendAffectedContentSecurityPolicyDetails, _AffectedDirectivesView_appendAffectedContentSecurityPolicyDetail;








const UIStrings = {
    /**
     *@description Singular or plural label for number of affected CSP (content security policy,
     * see https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) directives in issue view.
     */
    nDirectives: '{n, plural, =1 {# directive} other {# directives}}',
    /**
     *@description Indicates that a CSP error should be treated as a warning
     */
    reportonly: 'report-only',
    /**
     *@description The kind of resolution for a mixed content issue
     */
    blocked: 'blocked',
    /**
     *@description Tooltip for button linking to the Elements panel
     */
    clickToRevealTheViolatingDomNode: 'Click to reveal the violating DOM node in the Elements panel',
    /**
     *@description Header for the section listing affected directives
     */
    directiveC: 'Directive',
    /**
     *@description Label for the column in the element list in the CSS overview report
     */
    element: 'Element',
    /**
     *@description Header for the source location column
     */
    sourceLocation: 'Source location',
    /**
     *@description Text for the status of something
     */
    status: 'Status',
    /**
     *@description Text that refers to the resources of the web page
     */
    resourceC: 'Resource',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/issues/AffectedDirectivesView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
class AffectedDirectivesView extends _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_7__.AffectedResourcesView {
    constructor() {
        super(...arguments);
        _AffectedDirectivesView_instances.add(this);
    }
    getResourceNameWithCount(count) {
        return i18nString(UIStrings.nDirectives, { n: count });
    }
    update() {
        this.clear();
        __classPrivateFieldGet(this, _AffectedDirectivesView_instances, "m", _AffectedDirectivesView_appendAffectedContentSecurityPolicyDetails).call(this, this.issue.getCspIssues());
    }
}
_AffectedDirectivesView_instances = new WeakSet(), _AffectedDirectivesView_appendStatus = function _AffectedDirectivesView_appendStatus(element, isReportOnly) {
    const status = document.createElement('td');
    if (isReportOnly) {
        status.classList.add('affected-resource-report-only-status');
        status.textContent = i18nString(UIStrings.reportonly);
    }
    else {
        status.classList.add('affected-resource-blocked-status');
        status.textContent = i18nString(UIStrings.blocked);
    }
    element.appendChild(status);
}, _AffectedDirectivesView_appendViolatedDirective = function _AffectedDirectivesView_appendViolatedDirective(element, directive) {
    const violatedDirective = document.createElement('td');
    violatedDirective.textContent = directive;
    element.appendChild(violatedDirective);
}, _AffectedDirectivesView_appendBlockedURL = function _AffectedDirectivesView_appendBlockedURL(element, url) {
    const info = document.createElement('td');
    info.classList.add('affected-resource-directive-info');
    info.textContent = url;
    element.appendChild(info);
}, _AffectedDirectivesView_appendBlockedElement = function _AffectedDirectivesView_appendBlockedElement(element, nodeId, model) {
    const elementsPanelLinkComponent = new _components_components_js__WEBPACK_IMPORTED_MODULE_6__.ElementsPanelLink.ElementsPanelLink();
    if (nodeId) {
        const violatingNodeId = nodeId;
        elementsPanelLinkComponent.title = i18nString(UIStrings.clickToRevealTheViolatingDomNode);
        const onElementRevealIconClick = () => {
            const target = model.getTargetIfNotDisposed();
            if (target) {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.issuesPanelResourceOpened(this.issue.getCategory(), _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_7__.AffectedItem.Element);
                const deferredDOMNode = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DeferredDOMNode(target, violatingNodeId);
                void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(deferredDOMNode);
            }
        };
        const onElementRevealIconMouseEnter = () => {
            const target = model.getTargetIfNotDisposed();
            if (target) {
                const deferredDOMNode = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DeferredDOMNode(target, violatingNodeId);
                if (deferredDOMNode) {
                    deferredDOMNode.highlight();
                }
            }
        };
        const onElementRevealIconMouseLeave = () => {
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
        };
        elementsPanelLinkComponent
            .data = { onElementRevealIconClick, onElementRevealIconMouseEnter, onElementRevealIconMouseLeave };
    }
    const violatingNode = document.createElement('td');
    violatingNode.classList.add('affected-resource-csp-info-node');
    violatingNode.appendChild(elementsPanelLinkComponent);
    element.appendChild(violatingNode);
}, _AffectedDirectivesView_appendAffectedContentSecurityPolicyDetails = function _AffectedDirectivesView_appendAffectedContentSecurityPolicyDetails(cspIssues) {
    const header = document.createElement('tr');
    if (this.issue.code() === _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.ContentSecurityPolicyIssue.inlineViolationCode) {
        this.appendColumnTitle(header, i18nString(UIStrings.directiveC));
        this.appendColumnTitle(header, i18nString(UIStrings.element));
        this.appendColumnTitle(header, i18nString(UIStrings.sourceLocation));
        this.appendColumnTitle(header, i18nString(UIStrings.status));
    }
    else if (this.issue.code() === _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.ContentSecurityPolicyIssue.urlViolationCode) {
        this.appendColumnTitle(header, i18nString(UIStrings.resourceC), 'affected-resource-directive-info-header');
        this.appendColumnTitle(header, i18nString(UIStrings.status));
        this.appendColumnTitle(header, i18nString(UIStrings.directiveC));
        this.appendColumnTitle(header, i18nString(UIStrings.sourceLocation));
    }
    else if (this.issue.code() === _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.ContentSecurityPolicyIssue.evalViolationCode) {
        this.appendColumnTitle(header, i18nString(UIStrings.sourceLocation));
        this.appendColumnTitle(header, i18nString(UIStrings.directiveC));
        this.appendColumnTitle(header, i18nString(UIStrings.status));
    }
    else if (this.issue.code() === _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.ContentSecurityPolicyIssue.trustedTypesSinkViolationCode) {
        this.appendColumnTitle(header, i18nString(UIStrings.sourceLocation));
        this.appendColumnTitle(header, i18nString(UIStrings.status));
    }
    else if (this.issue.code() === _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.ContentSecurityPolicyIssue.trustedTypesPolicyViolationCode) {
        this.appendColumnTitle(header, i18nString(UIStrings.sourceLocation));
        this.appendColumnTitle(header, i18nString(UIStrings.directiveC));
        this.appendColumnTitle(header, i18nString(UIStrings.status));
    }
    else {
        this.updateAffectedResourceCount(0);
        return;
    }
    this.affectedResources.appendChild(header);
    let count = 0;
    for (const cspIssue of cspIssues) {
        count++;
        __classPrivateFieldGet(this, _AffectedDirectivesView_instances, "m", _AffectedDirectivesView_appendAffectedContentSecurityPolicyDetail).call(this, cspIssue);
    }
    this.updateAffectedResourceCount(count);
}, _AffectedDirectivesView_appendAffectedContentSecurityPolicyDetail = function _AffectedDirectivesView_appendAffectedContentSecurityPolicyDetail(cspIssue) {
    const element = document.createElement('tr');
    element.classList.add('affected-resource-directive');
    const cspIssueDetails = cspIssue.details();
    const location = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.Issue.toZeroBasedLocation(cspIssueDetails.sourceCodeLocation);
    const model = cspIssue.model();
    const maybeTarget = cspIssue.model()?.getTargetIfNotDisposed();
    if (this.issue.code() === _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.ContentSecurityPolicyIssue.inlineViolationCode && model) {
        __classPrivateFieldGet(this, _AffectedDirectivesView_instances, "m", _AffectedDirectivesView_appendViolatedDirective).call(this, element, cspIssueDetails.violatedDirective);
        __classPrivateFieldGet(this, _AffectedDirectivesView_instances, "m", _AffectedDirectivesView_appendBlockedElement).call(this, element, cspIssueDetails.violatingNodeId, model);
        this.appendSourceLocation(element, location, maybeTarget);
        __classPrivateFieldGet(this, _AffectedDirectivesView_instances, "m", _AffectedDirectivesView_appendStatus).call(this, element, cspIssueDetails.isReportOnly);
    }
    else if (this.issue.code() === _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.ContentSecurityPolicyIssue.urlViolationCode) {
        const url = cspIssueDetails.blockedURL ? cspIssueDetails.blockedURL :
            _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.DevToolsPath.EmptyUrlString;
        __classPrivateFieldGet(this, _AffectedDirectivesView_instances, "m", _AffectedDirectivesView_appendBlockedURL).call(this, element, url);
        __classPrivateFieldGet(this, _AffectedDirectivesView_instances, "m", _AffectedDirectivesView_appendStatus).call(this, element, cspIssueDetails.isReportOnly);
        __classPrivateFieldGet(this, _AffectedDirectivesView_instances, "m", _AffectedDirectivesView_appendViolatedDirective).call(this, element, cspIssueDetails.violatedDirective);
        this.appendSourceLocation(element, location, maybeTarget);
    }
    else if (this.issue.code() === _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.ContentSecurityPolicyIssue.evalViolationCode) {
        this.appendSourceLocation(element, location, maybeTarget);
        __classPrivateFieldGet(this, _AffectedDirectivesView_instances, "m", _AffectedDirectivesView_appendViolatedDirective).call(this, element, cspIssueDetails.violatedDirective);
        __classPrivateFieldGet(this, _AffectedDirectivesView_instances, "m", _AffectedDirectivesView_appendStatus).call(this, element, cspIssueDetails.isReportOnly);
    }
    else if (this.issue.code() === _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.ContentSecurityPolicyIssue.trustedTypesSinkViolationCode) {
        this.appendSourceLocation(element, location, maybeTarget);
        __classPrivateFieldGet(this, _AffectedDirectivesView_instances, "m", _AffectedDirectivesView_appendStatus).call(this, element, cspIssueDetails.isReportOnly);
    }
    else if (this.issue.code() === _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.ContentSecurityPolicyIssue.trustedTypesPolicyViolationCode) {
        this.appendSourceLocation(element, location, maybeTarget);
        __classPrivateFieldGet(this, _AffectedDirectivesView_instances, "m", _AffectedDirectivesView_appendViolatedDirective).call(this, element, cspIssueDetails.violatedDirective);
        __classPrivateFieldGet(this, _AffectedDirectivesView_instances, "m", _AffectedDirectivesView_appendStatus).call(this, element, cspIssueDetails.isReportOnly);
    }
    else {
        return;
    }
    this.affectedResources.appendChild(element);
};


/***/ }),

/***/ "./src/panels/issues/components/ElementsPanelLink.ts":
/*!***********************************************************!*\
  !*** ./src/panels/issues/components/ElementsPanelLink.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElementsPanelLink: () => (/* binding */ ElementsPanelLink)
/* harmony export */ });
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './elementsPanelLink.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ElementsPanelLink_instances, _ElementsPanelLink_shadow, _ElementsPanelLink_onElementRevealIconClick, _ElementsPanelLink_onElementRevealIconMouseEnter, _ElementsPanelLink_onElementRevealIconMouseLeave, _ElementsPanelLink_update, _ElementsPanelLink_render;



class ElementsPanelLink extends HTMLElement {
    constructor() {
        super(...arguments);
        _ElementsPanelLink_instances.add(this);
        _ElementsPanelLink_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _ElementsPanelLink_onElementRevealIconClick.set(this, () => { });
        _ElementsPanelLink_onElementRevealIconMouseEnter.set(this, () => { });
        _ElementsPanelLink_onElementRevealIconMouseLeave.set(this, () => { });
    }
    set data(data) {
        __classPrivateFieldSet(this, _ElementsPanelLink_onElementRevealIconClick, data.onElementRevealIconClick, "f");
        __classPrivateFieldSet(this, _ElementsPanelLink_onElementRevealIconMouseEnter, data.onElementRevealIconMouseEnter, "f");
        __classPrivateFieldSet(this, _ElementsPanelLink_onElementRevealIconMouseLeave, data.onElementRevealIconMouseLeave, "f");
        __classPrivateFieldGet(this, _ElementsPanelLink_instances, "m", _ElementsPanelLink_update).call(this);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ElementsPanelLink_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './elementsPanelLink.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
}
_ElementsPanelLink_shadow = new WeakMap(), _ElementsPanelLink_onElementRevealIconClick = new WeakMap(), _ElementsPanelLink_onElementRevealIconMouseEnter = new WeakMap(), _ElementsPanelLink_onElementRevealIconMouseLeave = new WeakMap(), _ElementsPanelLink_instances = new WeakSet(), _ElementsPanelLink_update = function _ElementsPanelLink_update() {
    __classPrivateFieldGet(this, _ElementsPanelLink_instances, "m", _ElementsPanelLink_render).call(this);
}, _ElementsPanelLink_render = function _ElementsPanelLink_render() {
    // clang-format off
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <span
        class="element-reveal-icon"
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.link('elements-panel').track({ click: true })}
        @click=${__classPrivateFieldGet(this, _ElementsPanelLink_onElementRevealIconClick, "f")}
        @mouseenter=${__classPrivateFieldGet(this, _ElementsPanelLink_onElementRevealIconMouseEnter, "f")}
        @mouseleave=${__classPrivateFieldGet(this, _ElementsPanelLink_onElementRevealIconMouseLeave, "f")}></span>
      `, __classPrivateFieldGet(this, _ElementsPanelLink_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ElementsPanelLink, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-elements-panel-link`
});
customElements.define('devtools-elements-panel-link', ElementsPanelLink);


/***/ }),

/***/ "./src/panels/issues/components/HideIssuesMenu.ts":
/*!********************************************************!*\
  !*** ./src/panels/issues/components/HideIssuesMenu.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HideIssuesMenu: () => (/* binding */ HideIssuesMenu)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './hideIssuesMenu.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HideIssuesMenu_instances, _HideIssuesMenu_shadow, _HideIssuesMenu_menuItemLabel, _HideIssuesMenu_menuItemAction, _HideIssuesMenu_render;







const UIStrings = {
    /**
     *@description Title for the tooltip of the (3 dots) Hide Issues menu icon.
     */
    tooltipTitle: 'Hide issues',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/issues/components/HideIssuesMenu.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class HideIssuesMenu extends HTMLElement {
    constructor() {
        super(...arguments);
        _HideIssuesMenu_instances.add(this);
        _HideIssuesMenu_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _HideIssuesMenu_menuItemLabel.set(this, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.UIString.LocalizedEmptyString);
        _HideIssuesMenu_menuItemAction.set(this, () => { });
    }
    set data(data) {
        __classPrivateFieldSet(this, _HideIssuesMenu_menuItemLabel, data.menuItemLabel, "f");
        __classPrivateFieldSet(this, _HideIssuesMenu_menuItemAction, data.menuItemAction, "f");
        __classPrivateFieldGet(this, _HideIssuesMenu_instances, "m", _HideIssuesMenu_render).call(this);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _HideIssuesMenu_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './hideIssuesMenu.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    onMenuOpen(event) {
        event.stopPropagation();
        const buttonElement = __classPrivateFieldGet(this, _HideIssuesMenu_shadow, "f").querySelector('button');
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ContextMenu.ContextMenu(event, {
            x: buttonElement?.getBoundingClientRect().left,
            y: buttonElement?.getBoundingClientRect().bottom,
        });
        contextMenu.headerSection().appendItem(__classPrivateFieldGet(this, _HideIssuesMenu_menuItemLabel, "f"), () => __classPrivateFieldGet(this, _HideIssuesMenu_menuItemAction, "f").call(this), { jslogContext: 'toggle-similar-issues' });
        void contextMenu.show();
    }
}
_HideIssuesMenu_shadow = new WeakMap(), _HideIssuesMenu_menuItemLabel = new WeakMap(), _HideIssuesMenu_menuItemAction = new WeakMap(), _HideIssuesMenu_instances = new WeakSet(), _HideIssuesMenu_render = function _HideIssuesMenu_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
      <button class="hide-issues-menu-btn" @click=${this.onMenuOpen.bind(this)} title=${i18nString(UIStrings.tooltipTitle)}>
        <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName} name="dots-vertical" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.dropDown('hide-issues').track({ click: true })}></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName}>
      </button>
    `, __classPrivateFieldGet(this, _HideIssuesMenu_shadow, "f"), { host: this });
};
Object.defineProperty(HideIssuesMenu, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal `devtools-hide-issues-menu`
});
customElements.define('devtools-hide-issues-menu', HideIssuesMenu);


/***/ }),

/***/ "./src/panels/issues/components/components.ts":
/*!****************************************************!*\
  !*** ./src/panels/issues/components/components.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElementsPanelLink: () => (/* reexport module object */ _ElementsPanelLink_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   HideIssuesMenu: () => (/* reexport module object */ _HideIssuesMenu_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _ElementsPanelLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ElementsPanelLink.js */ "./src/panels/issues/components/ElementsPanelLink.ts");
/* harmony import */ var _HideIssuesMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HideIssuesMenu.js */ "./src/panels/issues/components/HideIssuesMenu.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





/***/ })

}]);