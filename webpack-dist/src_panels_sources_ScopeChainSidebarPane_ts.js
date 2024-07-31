"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_sources_ScopeChainSidebarPane_ts"],{

/***/ "./src/panels/sources/ScopeChainSidebarPane.ts":
/*!*****************************************************!*\
  !*** ./src/panels/sources/ScopeChainSidebarPane.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScopeChainSidebarPane: () => (/* binding */ ScopeChainSidebarPane)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _models_source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/source_map_scopes/source_map_scopes.js */ "./src/models/source_map_scopes/source_map_scopes.ts");
/* harmony import */ var _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/object_ui.js */ "./src/ui/legacy/components/object_ui/object_ui.ts");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./src/ui/legacy/components/utils/utils.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './scopeChainSidebarPane.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
var _ScopeChainSidebarPane_scopeChainModel;









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
class ScopeChainSidebarPane extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox {
    constructor() {
        super(true);
        Object.defineProperty(this, "treeOutline", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "expandController", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "linkifier", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "infoElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _ScopeChainSidebarPane_scopeChainModel.set(this, null);
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.section('sources.scope-chain')}`);
        this.treeOutline = new _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_4__.ObjectPropertiesSection.ObjectPropertiesSectionsTreeOutline();
        this.treeOutline.hideOverflow();
        this.treeOutline.setShowSelectionOnKeyboardFocus(/* show */ true);
        this.expandController =
            new _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_4__.ObjectPropertiesSection.ObjectPropertiesSectionsTreeExpandController(this.treeOutline);
        this.linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.Linkifier.Linkifier();
        this.infoElement = document.createElement('div');
        this.infoElement.className = 'gray-info-message';
        this.infoElement.tabIndex = -1;
        this.flavorChanged(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.CallFrame));
    }
    static instance() {
        if (!scopeChainSidebarPaneInstance) {
            scopeChainSidebarPaneInstance = new ScopeChainSidebarPane();
        }
        return scopeChainSidebarPaneInstance;
    }
    flavorChanged(callFrame) {
        __classPrivateFieldGet(this, _ScopeChainSidebarPane_scopeChainModel, "f")?.dispose();
        __classPrivateFieldSet(this, _ScopeChainSidebarPane_scopeChainModel, null, "f");
        this.linkifier.reset();
        this.contentElement.removeChildren();
        this.contentElement.appendChild(this.infoElement);
        if (callFrame) {
            // Resolving the scope may take a while to complete, so indicate to the user that something
            // is happening (see https://crbug.com/1162416).
            this.infoElement.textContent = i18nString(UIStrings.loading);
            __classPrivateFieldSet(this, _ScopeChainSidebarPane_scopeChainModel, new _models_source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_3__.ScopeChainModel.ScopeChainModel(callFrame), "f");
            __classPrivateFieldGet(this, _ScopeChainSidebarPane_scopeChainModel, "f").addEventListener(_models_source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_3__.ScopeChainModel.Events.ScopeChainUpdated, event => this.buildScopeTreeOutline(event.data), this);
        }
        else {
            this.infoElement.textContent = i18nString(UIStrings.notPaused);
        }
    }
    focus() {
        if (this.hasFocus()) {
            return;
        }
        if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerPausedDetails)) {
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
            if (scope.type() === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Debugger.ScopeType.Local) {
                foundLocalScope = true;
            }
            const section = this.createScopeSectionTreeElement(scope);
            if (scope.type() === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Debugger.ScopeType.Global) {
                section.collapse();
            }
            else if (!foundLocalScope || scope.type() === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Debugger.ScopeType.Local) {
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
        if (scope.type() === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Debugger.ScopeType.Local || scope.type() === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Debugger.ScopeType.Closure) {
            emptyPlaceholder = i18nString(UIStrings.noVariables);
        }
        let title = scope.typeName();
        if (scope.type() === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Debugger.ScopeType.Closure) {
            const scopeName = scope.name();
            if (scopeName) {
                title = i18nString(UIStrings.closureS, { PH1: _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.beautifyFunctionName(scopeName) });
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
        const section = new _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_4__.ObjectPropertiesSection.RootElement(scope.object(), this.linkifier, emptyPlaceholder, _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_4__.ObjectPropertiesSection.ObjectPropertiesMode.All, scope.extraProperties());
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
        this.treeOutline.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './scopeChainSidebarPane.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './scopeChainSidebarPane.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}
_ScopeChainSidebarPane_scopeChainModel = new WeakMap();


/***/ })

}]);