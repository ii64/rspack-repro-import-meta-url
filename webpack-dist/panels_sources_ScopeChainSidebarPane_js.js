"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_sources_ScopeChainSidebarPane_js"],{

/***/ "./panels/sources/ScopeChainSidebarPane.js":
/*!*************************************************!*\
  !*** ./panels/sources/ScopeChainSidebarPane.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScopeChainSidebarPane: () => (/* binding */ ScopeChainSidebarPane)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/source_map_scopes/source_map_scopes.js */ "./models/source_map_scopes/source_map_scopes.js");
/* harmony import */ var _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/object_ui.js */ "./ui/legacy/components/object_ui/object_ui.js");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _scopeChainSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scopeChainSidebarPane.css.js */ "./panels/sources/scopeChainSidebarPane.css.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








const UIStrings = {
    /**
     *@description Loading indicator in Scope Sidebar Pane of the Sources panel
     */
    loading: 'Loading...',
    /**
     *@description Not paused message element text content in Call Stack Sidebar Pane of the Sources panel
     */
    notPaused: 'Not paused',
    /**
     *@description Empty placeholder in Scope Chain Sidebar Pane of the Sources panel
     */
    noVariables: 'No variables',
    /**
     *@description Text in the Sources panel Scope pane describing a closure scope.
     *@example {func} PH1
     */
    closureS: 'Closure ({PH1})',
    /**
     *@description Text that refers to closure as a programming term
     */
    closure: 'Closure',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/sources/ScopeChainSidebarPane.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
let scopeChainSidebarPaneInstance;
class ScopeChainSidebarPane extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox {
    treeOutline;
    expandController;
    linkifier;
    infoElement;
    #scopeChainModel = null;
    constructor() {
        super(true);
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.section('sources.scope-chain')}`);
        this.treeOutline = new _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_3__.ObjectPropertiesSection.ObjectPropertiesSectionsTreeOutline();
        this.treeOutline.hideOverflow();
        this.treeOutline.setShowSelectionOnKeyboardFocus(/* show */ true);
        this.expandController =
            new _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_3__.ObjectPropertiesSection.ObjectPropertiesSectionsTreeExpandController(this.treeOutline);
        this.linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.Linkifier.Linkifier();
        this.infoElement = document.createElement('div');
        this.infoElement.className = 'gray-info-message';
        this.infoElement.tabIndex = -1;
        this.flavorChanged(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.CallFrame));
    }
    static instance() {
        if (!scopeChainSidebarPaneInstance) {
            scopeChainSidebarPaneInstance = new ScopeChainSidebarPane();
        }
        return scopeChainSidebarPaneInstance;
    }
    flavorChanged(callFrame) {
        this.#scopeChainModel?.dispose();
        this.#scopeChainModel = null;
        this.linkifier.reset();
        this.contentElement.removeChildren();
        this.contentElement.appendChild(this.infoElement);
        if (callFrame) {
            // Resolving the scope may take a while to complete, so indicate to the user that something
            // is happening (see https://crbug.com/1162416).
            this.infoElement.textContent = i18nString(UIStrings.loading);
            this.#scopeChainModel = new _models_source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_2__.ScopeChainModel.ScopeChainModel(callFrame);
            this.#scopeChainModel.addEventListener("ScopeChainUpdated" /* SourceMapScopes.ScopeChainModel.Events.ScopeChainUpdated */, event => this.buildScopeTreeOutline(event.data), this);
        }
        else {
            this.infoElement.textContent = i18nString(UIStrings.notPaused);
        }
    }
    focus() {
        if (this.hasFocus()) {
            return;
        }
        if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerPausedDetails)) {
            this.treeOutline.forceSelect();
        }
    }
    buildScopeTreeOutline(eventScopeChain) {
        const { scopeChain } = eventScopeChain;
        this.treeOutline.removeChildren();
        this.contentElement.removeChildren();
        this.contentElement.appendChild(this.treeOutline.element);
        let foundLocalScope = false;
        for (const [i, scope] of scopeChain.entries()) {
            if (scope.type() === "local" /* Protocol.Debugger.ScopeType.Local */) {
                foundLocalScope = true;
            }
            const section = this.createScopeSectionTreeElement(scope);
            if (scope.type() === "global" /* Protocol.Debugger.ScopeType.Global */) {
                section.collapse();
            }
            else if (!foundLocalScope || scope.type() === "local" /* Protocol.Debugger.ScopeType.Local */) {
                section.expand();
            }
            this.treeOutline.appendChild(section);
            if (i === 0) {
                section.select(/* omitFocus */ true);
            }
        }
        this.sidebarPaneUpdatedForTest();
    }
    createScopeSectionTreeElement(scope) {
        let emptyPlaceholder = null;
        if (scope.type() === "local" /* Protocol.Debugger.ScopeType.Local */ || scope.type() === "closure" /* Protocol.Debugger.ScopeType.Closure */) {
            emptyPlaceholder = i18nString(UIStrings.noVariables);
        }
        let title = scope.typeName();
        if (scope.type() === "closure" /* Protocol.Debugger.ScopeType.Closure */) {
            const scopeName = scope.name();
            if (scopeName) {
                title = i18nString(UIStrings.closureS, { PH1: _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.beautifyFunctionName(scopeName) });
            }
            else {
                title = i18nString(UIStrings.closure);
            }
        }
        let subtitle = scope.description();
        if (!title || title === subtitle) {
            subtitle = null;
        }
        const icon = scope.icon();
        const titleElement = document.createElement('div');
        titleElement.classList.add('scope-chain-sidebar-pane-section-header');
        titleElement.classList.add('tree-element-title');
        if (icon) {
            const iconElement = document.createElement('img');
            iconElement.classList.add('scope-chain-sidebar-pane-section-icon');
            iconElement.src = icon;
            titleElement.appendChild(iconElement);
        }
        titleElement.createChild('div', 'scope-chain-sidebar-pane-section-subtitle').textContent = subtitle;
        titleElement.createChild('div', 'scope-chain-sidebar-pane-section-title').textContent = title;
        const section = new _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_3__.ObjectPropertiesSection.RootElement(scope.object(), this.linkifier, emptyPlaceholder, 0 /* ObjectUI.ObjectPropertiesSection.ObjectPropertiesMode.All */, scope.extraProperties());
        section.title = titleElement;
        section.listItemElement.classList.add('scope-chain-sidebar-pane-section');
        section.listItemElement.setAttribute('aria-label', title);
        this.expandController.watchSection(title + (subtitle ? ':' + subtitle : ''), section);
        return section;
    }
    sidebarPaneUpdatedForTest() {
    }
    wasShown() {
        super.wasShown();
        this.treeOutline.registerCSSFiles([_scopeChainSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]]);
        this.registerCSSFiles([_scopeChainSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]]);
    }
}
//# sourceMappingURL=ScopeChainSidebarPane.js.map

/***/ }),

/***/ "./panels/sources/scopeChainSidebarPane.css.js":
/*!*****************************************************!*\
  !*** ./panels/sources/scopeChainSidebarPane.css.js ***!
  \*****************************************************/
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

.scope-chain-sidebar-pane-section-header {
  flex: auto;
}

.scope-chain-sidebar-pane-section-icon {
  float: left;
  margin-right: 5px;
}

.scope-chain-sidebar-pane-section-subtitle {
  float: right;
  margin-left: 5px;
  max-width: 55%;
  text-overflow: ellipsis;
  overflow: hidden;
}

.scope-chain-sidebar-pane-section-title {
  font-weight: normal;
  word-wrap: break-word;
  white-space: normal;
}

.scope-chain-sidebar-pane-section {
  padding: 2px 4px;
  flex: none;
}

/*# sourceURL=scopeChainSidebarPane.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);