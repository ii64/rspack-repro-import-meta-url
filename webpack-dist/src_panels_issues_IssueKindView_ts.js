"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_issues_IssueKindView_ts"],{

/***/ "./src/panels/issues/IssueKindView.ts":
/*!********************************************!*\
  !*** ./src/panels/issues/IssueKindView.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IssueKindView: () => (/* binding */ IssueKindView),
/* harmony export */   getClassNameFromKind: () => (/* binding */ getClassNameFromKind),
/* harmony export */   getGroupIssuesByKindSetting: () => (/* binding */ getGroupIssuesByKindSetting),
/* harmony export */   issueKindViewSortPriority: () => (/* binding */ issueKindViewSortPriority)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./src/models/issues_manager/issues_manager.ts");
/* harmony import */ var _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/adorners/adorners.js */ "./src/ui/components/adorners/adorners.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/issue_counter/issue_counter.js */ "./src/ui/components/issue_counter/issue_counter.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/issues/components/components.ts");
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
var _IssueKindView_instances, _IssueKindView_kind, _IssueKindView_issueCount, _IssueKindView_appendHeader;








const UIStrings = {
    /**
     * @description Menu entry for hiding all current Page Errors.
     */
    hideAllCurrentPageErrors: 'Hide all current Page Errors',
    /**
     * @description Menu entry for hiding all current Breaking Changes.
     */
    hideAllCurrentBreakingChanges: 'Hide all current Breaking Changes',
    /**
     * @description Menu entry for hiding all current Page Errors.
     */
    hideAllCurrentImprovements: 'Hide all current Improvements',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/issues/IssueKindView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
function getGroupIssuesByKindSetting() {
    return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('group-issues-by-kind', false);
}
function issueKindViewSortPriority(a, b) {
    if (a.getKind() === b.getKind()) {
        return 0;
    }
    if (a.getKind() === _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueKind.PageError) {
        return -1;
    }
    if (a.getKind() === _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueKind.BreakingChange &&
        b.getKind() === _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueKind.Improvement) {
        return -1;
    }
    return 1;
}
function getClassNameFromKind(kind) {
    switch (kind) {
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueKind.BreakingChange:
            return 'breaking-changes';
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueKind.Improvement:
            return 'improvements';
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueKind.PageError:
            return 'page-errors';
    }
}
class IssueKindView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeElement {
    constructor(kind) {
        super(undefined, true);
        _IssueKindView_instances.add(this);
        _IssueKindView_kind.set(this, void 0);
        _IssueKindView_issueCount.set(this, void 0);
        __classPrivateFieldSet(this, _IssueKindView_kind, kind, "f");
        __classPrivateFieldSet(this, _IssueKindView_issueCount, document.createElement('span'), "f");
        this.toggleOnClick = true;
        this.listItemElement.classList.add('issue-kind');
        this.listItemElement.classList.add(getClassNameFromKind(kind));
        this.childrenListElement.classList.add('issue-kind-body');
    }
    getKind() {
        return __classPrivateFieldGet(this, _IssueKindView_kind, "f");
    }
    getHideAllCurrentKindString() {
        switch (__classPrivateFieldGet(this, _IssueKindView_kind, "f")) {
            case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueKind.PageError:
                return i18nString(UIStrings.hideAllCurrentPageErrors);
            case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueKind.Improvement:
                return i18nString(UIStrings.hideAllCurrentImprovements);
            case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueKind.BreakingChange:
                return i18nString(UIStrings.hideAllCurrentBreakingChanges);
        }
    }
    onattach() {
        __classPrivateFieldGet(this, _IssueKindView_instances, "m", _IssueKindView_appendHeader).call(this);
        this.expand();
    }
    update(count) {
        __classPrivateFieldGet(this, _IssueKindView_issueCount, "f").textContent = `${count}`;
    }
}
_IssueKindView_kind = new WeakMap(), _IssueKindView_issueCount = new WeakMap(), _IssueKindView_instances = new WeakSet(), _IssueKindView_appendHeader = function _IssueKindView_appendHeader() {
    const header = document.createElement('div');
    header.classList.add('header');
    const issueKindIcon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon();
    issueKindIcon.data = _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_5__.IssueCounter.getIssueKindIconData(__classPrivateFieldGet(this, _IssueKindView_kind, "f"));
    issueKindIcon.classList.add('leading-issue-icon');
    const countAdorner = new _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_3__.Adorner.Adorner();
    countAdorner.data = {
        name: 'countWrapper',
        content: __classPrivateFieldGet(this, _IssueKindView_issueCount, "f"),
    };
    countAdorner.classList.add('aggregated-issues-count');
    __classPrivateFieldGet(this, _IssueKindView_issueCount, "f").textContent = '0';
    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.getIssueKindName(__classPrivateFieldGet(this, _IssueKindView_kind, "f"));
    const hideAvailableIssuesBtn = new _components_components_js__WEBPACK_IMPORTED_MODULE_7__.HideIssuesMenu.HideIssuesMenu();
    hideAvailableIssuesBtn.classList.add('hide-available-issues');
    hideAvailableIssuesBtn.data = {
        menuItemLabel: this.getHideAllCurrentKindString(),
        menuItemAction: () => {
            const setting = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.getHideIssueByCodeSetting();
            const values = setting.get();
            for (const issue of _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.IssuesManager.instance().issues()) {
                if (issue.getKind() === __classPrivateFieldGet(this, _IssueKindView_kind, "f")) {
                    values[issue.code()] = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.IssueStatus.Hidden;
                }
            }
            setting.set(values);
        },
    };
    header.appendChild(issueKindIcon);
    header.appendChild(countAdorner);
    header.appendChild(title);
    header.appendChild(hideAvailableIssuesBtn);
    this.listItemElement.appendChild(header);
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