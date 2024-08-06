"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_changes_ChangesSidebar_js"],{

/***/ "./models/workspace_diff/workspace_diff.js":
/*!*************************************************!*\
  !*** ./models/workspace_diff/workspace_diff.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkspaceDiff: () => (/* reexport module object */ _WorkspaceDiff_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _WorkspaceDiff_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorkspaceDiff.js */ "./models/workspace_diff/WorkspaceDiff.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


//# sourceMappingURL=workspace_diff.js.map

/***/ }),

/***/ "./panels/changes/ChangesSidebar.js":
/*!******************************************!*\
  !*** ./panels/changes/ChangesSidebar.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangesSidebar: () => (/* binding */ ChangesSidebar),
/* harmony export */   UISourceCodeTreeElement: () => (/* binding */ UISourceCodeTreeElement)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */ var _models_workspace_diff_workspace_diff_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/workspace_diff/workspace_diff.js */ "./models/workspace_diff/workspace_diff.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _snippets_snippets_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../snippets/snippets.js */ "./panels/snippets/snippets.js");
/* harmony import */ var _changesSidebar_css_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./changesSidebar.css.js */ "./panels/changes/changesSidebar.css.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.










const UIStrings = {
    /**
     *@description Name of an item from source map
     *@example {compile.html} PH1
     */
    sFromSourceMap: '{PH1} (from source map)',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/changes/ChangesSidebar.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class ChangesSidebar extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.Widget) {
    treeoutline;
    treeElements;
    workspaceDiff;
    constructor(workspaceDiff) {
        super();
        this.treeoutline = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeOutlineInShadow();
        this.treeoutline.setFocusable(false);
        this.treeoutline.setComparator((a, b) => _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.compare(a.titleAsText(), b.titleAsText()));
        this.treeoutline.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.Events.ElementSelected, this.selectionChanged, this);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsTablist(this.treeoutline.contentElement);
        this.element.appendChild(this.treeoutline.element);
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.pane('sidebar').track({ resize: true })}`);
        this.treeElements = new Map();
        this.workspaceDiff = workspaceDiff;
        this.workspaceDiff.modifiedUISourceCodes().forEach(this.addUISourceCode.bind(this));
        this.workspaceDiff.addEventListener("ModifiedStatusChanged" /* WorkspaceDiff.WorkspaceDiff.Events.ModifiedStatusChanged */, this.uiSourceCodeMofiedStatusChanged, this);
    }
    selectUISourceCode(uiSourceCode, omitFocus) {
        const treeElement = this.treeElements.get(uiSourceCode);
        if (!treeElement) {
            return;
        }
        treeElement.select(omitFocus);
    }
    selectedUISourceCode() {
        // @ts-ignore uiSourceCode seems to be dynamically attached.
        return this.treeoutline.selectedTreeElement ? this.treeoutline.selectedTreeElement.uiSourceCode : null;
    }
    selectionChanged() {
        this.dispatchEventToListeners("SelectedUISourceCodeChanged" /* Events.SelectedUISourceCodeChanged */);
    }
    uiSourceCodeMofiedStatusChanged(event) {
        if (event.data.isModified) {
            this.addUISourceCode(event.data.uiSourceCode);
        }
        else {
            this.removeUISourceCode(event.data.uiSourceCode);
        }
    }
    removeUISourceCode(uiSourceCode) {
        const treeElement = this.treeElements.get(uiSourceCode);
        this.treeElements.delete(uiSourceCode);
        if (this.treeoutline.selectedTreeElement === treeElement) {
            const nextElementToSelect = treeElement.previousSibling || treeElement.nextSibling;
            if (nextElementToSelect) {
                nextElementToSelect.select(true);
            }
            else {
                treeElement.deselect();
                this.selectionChanged();
            }
        }
        if (treeElement) {
            this.treeoutline.removeChild(treeElement);
            treeElement.dispose();
        }
        if (this.treeoutline.rootElement().childCount() === 0) {
            this.treeoutline.setFocusable(false);
        }
    }
    addUISourceCode(uiSourceCode) {
        const treeElement = new UISourceCodeTreeElement(uiSourceCode);
        this.treeElements.set(uiSourceCode, treeElement);
        this.treeoutline.setFocusable(true);
        this.treeoutline.appendChild(treeElement);
        if (!this.treeoutline.selectedTreeElement) {
            treeElement.select(true);
        }
    }
    wasShown() {
        super.wasShown();
        this.treeoutline.registerCSSFiles([_changesSidebar_css_js__WEBPACK_IMPORTED_MODULE_9__["default"]]);
    }
}
class UISourceCodeTreeElement extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeElement {
    uiSourceCode;
    eventListeners;
    constructor(uiSourceCode) {
        super();
        this.uiSourceCode = uiSourceCode;
        this.listItemElement.classList.add('navigator-' + uiSourceCode.contentType().name() + '-tree-item');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsTab(this.listItemElement);
        let iconName = 'document';
        if (_snippets_snippets_js__WEBPACK_IMPORTED_MODULE_8__.ScriptSnippetFileSystem.isSnippetsUISourceCode(this.uiSourceCode)) {
            iconName = 'snippet';
        }
        const defaultIcon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.create(iconName);
        this.setLeadingIcons([defaultIcon]);
        this.eventListeners = [
            uiSourceCode.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.UISourceCode.Events.TitleChanged, this.updateTitle, this),
            uiSourceCode.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.UISourceCode.Events.WorkingCopyChanged, this.updateTitle, this),
            uiSourceCode.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.UISourceCode.Events.WorkingCopyCommitted, this.updateTitle, this),
        ];
        this.updateTitle();
    }
    updateTitle() {
        let titleText = this.uiSourceCode.displayName();
        if (this.uiSourceCode.isDirty()) {
            titleText = '*' + titleText;
        }
        this.title = titleText;
        let tooltip = this.uiSourceCode.url();
        if (this.uiSourceCode.contentType().isFromSourceMap()) {
            tooltip = i18nString(UIStrings.sFromSourceMap, { PH1: this.uiSourceCode.displayName() });
        }
        this.tooltip = tooltip;
    }
    dispose() {
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(this.eventListeners);
    }
}
//# sourceMappingURL=ChangesSidebar.js.map

/***/ }),

/***/ "./panels/changes/changesSidebar.css.js":
/*!**********************************************!*\
  !*** ./panels/changes/changesSidebar.css.js ***!
  \**********************************************/
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

.tree-outline li {
  min-height: 20px;
}

devtools-icon {
  color: var(--icon-file-default);
}

.navigator-sm-script-tree-item devtools-icon,
.navigator-script-tree-item devtools-icon,
.navigator-snippet-tree-item devtools-icon {
  color: var(--icon-file-script);
}

.navigator-sm-stylesheet-tree-item devtools-icon,
.navigator-stylesheet-tree-item devtools-icon {
  color: var(--icon-file-styles);
}

.navigator-image-tree-item devtools-icon {
  color: var(--icon-file-image);
}

.navigator-font-tree-item devtools-icon {
  color: var(--icon-file-font);
}

.tree-outline li:hover:not(.selected) .selection {
  display: block;

  & devtools-icon {
    color: var(--icon-default-hover);
  }
}

@media (forced-colors: active) {
  li,
  devtools-icon {
    forced-color-adjust: none;
    color: ButtonText !important; /* stylelint-disable-line declaration-no-important */
  }
}

/*# sourceURL=changesSidebar.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);