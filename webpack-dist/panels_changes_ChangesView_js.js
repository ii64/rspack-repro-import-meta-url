"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_changes_ChangesView_js"],{

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

/***/ "./panels/changes/ChangesView.js":
/*!***************************************!*\
  !*** ./panels/changes/ChangesView.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* binding */ ActionDelegate),
/* harmony export */   ChangesView: () => (/* binding */ ChangesView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _models_workspace_diff_workspace_diff_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/workspace_diff/workspace_diff.js */ "./models/workspace_diff/workspace_diff.js");
/* harmony import */ var _panels_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../panels/utils/utils.js */ "./panels/utils/utils.js");
/* harmony import */ var _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../third_party/diff/diff.js */ "./third_party/diff/diff.js");
/* harmony import */ var _ui_components_diff_view_diff_view_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/components/diff_view/diff_view.js */ "./ui/components/diff_view/diff_view.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _ChangesSidebar_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ChangesSidebar.js */ "./panels/changes/ChangesSidebar.js");
/* harmony import */ var _changesView_css_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./changesView.css.js */ "./panels/changes/changesView.css.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.











const UIStrings = {
    /**
     *@description Text in Changes View of the Changes tab
     */
    noChanges: 'No changes',
    /**
     *@description Text in Changes View of the Changes tab
     */
    binaryData: 'Binary data',
    /**
     * @description Text in the Changes tab that indicates how many lines of code have changed in the
     * selected file. An insertion refers to an added line of code. The (+) is a visual cue to indicate
     * lines were added (not translatable).
     */
    sInsertions: '{n, plural, =1 {# insertion (+)} other {# insertions (+)}}',
    /**
     * @description Text in the Changes tab that indicates how many lines of code have changed in the
     * selected file. A deletion refers to a removed line of code. The (-) is a visual cue to indicate
     * lines were removed (not translatable).
     */
    sDeletions: '{n, plural, =1 {# deletion (-)} other {# deletions (-)}}',
    /**
     *@description Text for a button in the Changes tool that copies all the changes from the currently open file.
     */
    copy: 'Copy',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/changes/ChangesView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
function diffStats(diff) {
    const insertions = diff.reduce((ins, token) => ins + (token[0] === _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_5__.Diff.Operation.Insert ? token[1].length : 0), 0);
    const deletions = diff.reduce((ins, token) => ins + (token[0] === _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_5__.Diff.Operation.Delete ? token[1].length : 0), 0);
    const deletionText = i18nString(UIStrings.sDeletions, { n: deletions });
    const insertionText = i18nString(UIStrings.sInsertions, { n: insertions });
    return `${insertionText}, ${deletionText}`;
}
class ChangesView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Widget.VBox {
    emptyWidget;
    workspaceDiff;
    changesSidebar;
    selectedUISourceCode;
    #selectedSourceCodeFormattedMapping;
    diffContainer;
    toolbar;
    diffStats;
    diffView;
    constructor() {
        super(true);
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.panel('changes').track({ resize: true })}`);
        const splitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.SplitWidget.SplitWidget(true /* vertical */, false /* sidebar on left */);
        const mainWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Widget.Widget();
        splitWidget.setMainWidget(mainWidget);
        splitWidget.show(this.contentElement);
        this.emptyWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.EmptyWidget.EmptyWidget('');
        this.emptyWidget.show(mainWidget.element);
        this.workspaceDiff = _models_workspace_diff_workspace_diff_js__WEBPACK_IMPORTED_MODULE_3__.WorkspaceDiff.workspaceDiff();
        this.changesSidebar = new _ChangesSidebar_js__WEBPACK_IMPORTED_MODULE_9__.ChangesSidebar(this.workspaceDiff);
        this.changesSidebar.addEventListener("SelectedUISourceCodeChanged" /* Events.SelectedUISourceCodeChanged */, this.selectedUISourceCodeChanged, this);
        splitWidget.setSidebarWidget(this.changesSidebar);
        this.selectedUISourceCode = null;
        this.diffContainer = mainWidget.element.createChild('div', 'diff-container');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ARIAUtils.markAsTabpanel(this.diffContainer);
        this.diffContainer.addEventListener('click', event => this.click(event));
        this.diffView = this.diffContainer.appendChild(new _ui_components_diff_view_diff_view_js__WEBPACK_IMPORTED_MODULE_6__.DiffView.DiffView());
        this.toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.Toolbar('changes-toolbar', mainWidget.element);
        this.toolbar.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.toolbar()}`);
        this.toolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.Toolbar.createActionButtonForId('changes.revert'));
        this.diffStats = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.ToolbarText('');
        this.toolbar.appendToolbarItem(this.diffStats);
        this.toolbar.appendToolbarItem(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.ToolbarSeparator());
        this.toolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.Toolbar.createActionButtonForId('changes.copy', {
            showLabel: true,
            label() {
                return i18nString(UIStrings.copy);
            },
        }));
        this.hideDiff(i18nString(UIStrings.noChanges));
        this.selectedUISourceCodeChanged();
    }
    selectedUISourceCodeChanged() {
        this.revealUISourceCode(this.changesSidebar.selectedUISourceCode());
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ActionRegistry.ActionRegistry.instance()
            .getAction('changes.copy')
            .setEnabled(this.selectedUISourceCode?.contentType() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Stylesheet);
    }
    revert() {
        const uiSourceCode = this.selectedUISourceCode;
        if (!uiSourceCode) {
            return;
        }
        void this.workspaceDiff.revertToOriginal(uiSourceCode);
    }
    async copy() {
        const uiSourceCode = this.selectedUISourceCode;
        if (!uiSourceCode) {
            return;
        }
        const diffResponse = await this.workspaceDiff.requestDiff(uiSourceCode, { shouldFormatDiff: true });
        // Diff array with real diff will contain at least 2 lines.
        if (!diffResponse || diffResponse?.diff.length < 2) {
            return;
        }
        const changes = await _panels_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.PanelUtils.formatCSSChangesFromDiff(diffResponse.diff);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(changes);
    }
    click(event) {
        if (!this.selectedUISourceCode) {
            return;
        }
        for (const target of event.composedPath()) {
            if (!(target instanceof HTMLElement)) {
                continue;
            }
            const selection = target.ownerDocument.getSelection();
            if (selection?.toString()) {
                // We abort source revelation when user has text selection.
                break;
            }
            if (target.classList.contains('diff-line-content') && target.hasAttribute('data-line-number')) {
                let lineNumber = Number(target.dataset.lineNumber) - 1;
                // Unfortunately, caretRangeFromPoint is broken in shadow
                // roots, which makes determining the character offset more
                // work than justified here.
                if (this.#selectedSourceCodeFormattedMapping) {
                    lineNumber = this.#selectedSourceCodeFormattedMapping.formattedToOriginal(lineNumber, 0)[0];
                }
                void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(this.selectedUISourceCode.uiLocation(lineNumber, 0), false);
                event.consume(true);
                break;
            }
            else if (target.classList.contains('diff-listing')) {
                break;
            }
        }
    }
    revealUISourceCode(uiSourceCode) {
        if (this.selectedUISourceCode === uiSourceCode) {
            return;
        }
        if (this.selectedUISourceCode) {
            this.workspaceDiff.unsubscribeFromDiffChange(this.selectedUISourceCode, this.refreshDiff, this);
        }
        if (uiSourceCode && this.isShowing()) {
            this.workspaceDiff.subscribeToDiffChange(uiSourceCode, this.refreshDiff, this);
        }
        this.selectedUISourceCode = uiSourceCode;
        void this.refreshDiff();
    }
    wasShown() {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Context.Context.instance().setFlavor(ChangesView, this);
        this.registerCSSFiles([_changesView_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]]);
        super.wasShown();
        void this.refreshDiff();
    }
    willHide() {
        super.willHide();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Context.Context.instance().setFlavor(ChangesView, null);
    }
    async refreshDiff() {
        if (!this.isShowing()) {
            return;
        }
        if (!this.selectedUISourceCode) {
            this.renderDiffRows();
            return;
        }
        const uiSourceCode = this.selectedUISourceCode;
        if (!uiSourceCode.contentType().isTextType()) {
            this.hideDiff(i18nString(UIStrings.binaryData));
            return;
        }
        const diffResponse = await this.workspaceDiff.requestDiff(uiSourceCode, { shouldFormatDiff: true });
        if (this.selectedUISourceCode !== uiSourceCode) {
            return;
        }
        this.#selectedSourceCodeFormattedMapping = diffResponse?.formattedCurrentMapping;
        this.renderDiffRows(diffResponse?.diff);
    }
    hideDiff(message) {
        this.diffStats.setText('');
        this.toolbar.setEnabled(false);
        this.diffContainer.style.display = 'none';
        this.emptyWidget.text = message;
        this.emptyWidget.showWidget();
    }
    renderDiffRows(diff) {
        if (!diff || (diff.length === 1 && diff[0][0] === _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_5__.Diff.Operation.Equal)) {
            this.hideDiff(i18nString(UIStrings.noChanges));
        }
        else {
            this.diffStats.setText(diffStats(diff));
            this.toolbar.setEnabled(true);
            this.emptyWidget.hideWidget();
            const mimeType = this.selectedUISourceCode.mimeType();
            this.diffContainer.style.display = 'block';
            this.diffView.data = { diff, mimeType };
        }
    }
}
class ActionDelegate {
    handleAction(context, actionId) {
        const changesView = context.flavor(ChangesView);
        if (changesView === null) {
            return false;
        }
        switch (actionId) {
            case 'changes.revert':
                changesView.revert();
                return true;
            case 'changes.copy':
                void changesView.copy();
                return true;
        }
        return false;
    }
}
//# sourceMappingURL=ChangesView.js.map

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


/***/ }),

/***/ "./panels/changes/changesView.css.js":
/*!*******************************************!*\
  !*** ./panels/changes/changesView.css.js ***!
  \*******************************************/
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
 * Copyright (c) 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

[slot="insertion-point-main"] {
  flex-direction: column;
  display: flex;
}

[slot="insertion-point-sidebar"] {
  overflow: auto;
}

.diff-container {
  flex: 1;
  overflow: auto;
}

:focus.selected {
  background-color: var(--sys-color-tonal-container);
  color: var(--sys-color-on-tonal-container);
}

.changes-toolbar {
  background-color: var(--sys-color-cdt-base-container);
  border-top: 1px solid var(--sys-color-divider);
}

/*# sourceURL=changesView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/utils/utils.js":
/*!*******************************!*\
  !*** ./panels/utils/utils.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelUtils: () => (/* binding */ PanelUtils)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _models_formatter_formatter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/formatter/formatter.js */ "./models/formatter/formatter.js");
/* harmony import */ var _ui_components_diff_view_diff_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/diff_view/diff_view.js */ "./ui/components/diff_view/diff_view.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



// These utilities are packaged in a class to allow unittests to stub or spy the implementation.
class PanelUtils {
    static iconDataForResourceType(resourceType) {
        if (resourceType.isDocument()) {
            return { iconName: 'file-document', color: 'var(--icon-file-document)' };
        }
        if (resourceType.isImage()) {
            return { iconName: 'file-image', color: 'var(--icon-file-image)' };
        }
        if (resourceType.isFont()) {
            return { iconName: 'file-font', color: 'var(--icon-file-font)' };
        }
        if (resourceType.isScript()) {
            return { iconName: 'file-script', color: 'var(--icon-file-script)' };
        }
        if (resourceType.isStyleSheet()) {
            return { iconName: 'file-stylesheet', color: 'var(--icon-file-styles)' };
        }
        if (resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Manifest.name()) {
            return { iconName: 'file-manifest', color: 'var(--icon-default)' };
        }
        if (resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Wasm.name()) {
            return { iconName: 'file-wasm', color: 'var(--icon-default)' };
        }
        if (resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.WebSocket.name()) {
            return { iconName: 'file-websocket', color: 'var(--icon-default)' };
        }
        if (resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Media.name()) {
            return { iconName: 'file-media', color: 'var(--icon-file-media)' };
        }
        if (resourceType.isWebbundle()) {
            return { iconName: 'bundle', color: 'var(--icon-default)' };
        }
        if (resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Fetch.name() ||
            resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.XHR.name()) {
            return { iconName: 'file-fetch-xhr', color: 'var(--icon-default)' };
        }
        return { iconName: 'file-generic', color: 'var(--icon-default)' };
    }
    static async formatCSSChangesFromDiff(diff) {
        const indent = '  ';
        const { originalLines, currentLines, rows } = _ui_components_diff_view_diff_view_js__WEBPACK_IMPORTED_MODULE_2__.DiffView.buildDiffRows(diff);
        const originalRuleMaps = await buildStyleRuleMaps(originalLines.join('\n'));
        const currentRuleMaps = await buildStyleRuleMaps(currentLines.join('\n'));
        let changes = '';
        let recordedOriginalSelector, recordedCurrentSelector;
        let hasOpenDeclarationBlock = false;
        for (const { currentLineNumber, originalLineNumber, type } of rows) {
            if (type !== "deletion" /* DiffView.DiffView.RowType.Deletion */ && type !== "addition" /* DiffView.DiffView.RowType.Addition */) {
                continue;
            }
            const isDeletion = type === "deletion" /* DiffView.DiffView.RowType.Deletion */;
            const lines = isDeletion ? originalLines : currentLines;
            // Diff line arrays starts at 0, but line numbers start at 1.
            const lineIndex = isDeletion ? originalLineNumber - 1 : currentLineNumber - 1;
            const line = lines[lineIndex].trim();
            const { declarationIDToStyleRule, styleRuleIDToStyleRule } = isDeletion ? originalRuleMaps : currentRuleMaps;
            let styleRule;
            let prefix = '';
            if (declarationIDToStyleRule.has(lineIndex)) {
                styleRule = declarationIDToStyleRule.get(lineIndex);
                const selector = styleRule.selector;
                // Use the equality of selector strings as a best-effort check for the equality of style rules.
                if (selector !== recordedOriginalSelector && selector !== recordedCurrentSelector) {
                    prefix += `${selector} {\n`;
                }
                prefix += indent;
                hasOpenDeclarationBlock = true;
            }
            else {
                if (hasOpenDeclarationBlock) {
                    prefix = '}\n\n';
                    hasOpenDeclarationBlock = false;
                }
                if (styleRuleIDToStyleRule.has(lineIndex)) {
                    styleRule = styleRuleIDToStyleRule.get(lineIndex);
                }
            }
            const processedLine = isDeletion ? `/* ${line} */` : line;
            changes += prefix + processedLine + '\n';
            if (isDeletion) {
                recordedOriginalSelector = styleRule?.selector;
            }
            else {
                recordedCurrentSelector = styleRule?.selector;
            }
        }
        if (changes.length > 0) {
            changes += '}';
        }
        return changes;
    }
    static highlightElement(element) {
        element.scrollIntoViewIfNeeded();
        element.animate([
            { offset: 0, backgroundColor: 'rgba(255, 255, 0, 0.2)' },
            { offset: 0.1, backgroundColor: 'rgba(255, 255, 0, 0.7)' },
            { offset: 1, backgroundColor: 'transparent' },
        ], { duration: 2000, easing: 'cubic-bezier(0, 0, 0.2, 1)' });
    }
}
async function buildStyleRuleMaps(content) {
    const rules = await new Promise(res => {
        const rules = [];
        _models_formatter_formatter_js__WEBPACK_IMPORTED_MODULE_1__.FormatterWorkerPool.formatterWorkerPool().parseCSS(content, (isLastChunk, currentRules) => {
            rules.push(...currentRules);
            if (isLastChunk) {
                res(rules);
            }
        });
    });
    // We use line numbers as unique IDs for rules and declarations
    const declarationIDToStyleRule = new Map();
    const styleRuleIDToStyleRule = new Map();
    for (const rule of rules) {
        if ('styleRange' in rule) {
            const selector = rule.selectorText.split('\n').pop()?.trim();
            if (!selector) {
                continue;
            }
            const styleRule = { rule, selector };
            styleRuleIDToStyleRule.set(rule.styleRange.startLine, styleRule);
            for (const property of rule.properties) {
                declarationIDToStyleRule.set(property.range.startLine, styleRule);
            }
        }
    }
    return { declarationIDToStyleRule, styleRuleIDToStyleRule };
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./ui/components/diff_view/diff_view.js":
/*!**********************************************!*\
  !*** ./ui/components/diff_view/diff_view.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DiffView: () => (/* reexport module object */ _DiffView_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _DiffView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DiffView.js */ "./ui/components/diff_view/DiffView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//# sourceMappingURL=diff_view.js.map

/***/ })

}]);