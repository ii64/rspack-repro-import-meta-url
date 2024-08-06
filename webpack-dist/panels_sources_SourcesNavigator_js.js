"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_sources_SourcesNavigator_js"],{

/***/ "./panels/sources/SourcesNavigator.js":
/*!********************************************!*\
  !*** ./panels/sources/SourcesNavigator.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* binding */ ActionDelegate),
/* harmony export */   ContentScriptsNavigatorView: () => (/* binding */ ContentScriptsNavigatorView),
/* harmony export */   FilesNavigatorView: () => (/* binding */ FilesNavigatorView),
/* harmony export */   NetworkNavigatorView: () => (/* binding */ NetworkNavigatorView),
/* harmony export */   OverridesNavigatorView: () => (/* binding */ OverridesNavigatorView),
/* harmony export */   SnippetsNavigatorView: () => (/* binding */ SnippetsNavigatorView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _snippets_snippets_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../snippets/snippets.js */ "./panels/snippets/snippets.js");
/* harmony import */ var _NavigatorView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NavigatorView.js */ "./panels/sources/NavigatorView.js");
/* harmony import */ var _sourcesNavigator_css_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sourcesNavigator.css.js */ "./panels/sources/sourcesNavigator.css.js");
/*
 * Copyright (C) 2011 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */












const UIStrings = {
    /**
     *@description Text to explain the Workspace feature in the Sources panel. https://goo.gle/devtools-workspace
     */
    explainWorkspace: 'Set up workspace to sync edits directly to the sources you develop',
    /**
     *@description Text to explain the Local Overrides feature. https://goo.gle/devtools-overrides
     */
    explainLocalOverrides: 'Override network requests and web content locally to mock remote resources',
    /**
     *@description Text that is usually a hyperlink to more documentation
     */
    learnMore: 'Learn more',
    /**
     *@description Tooltip text that appears when hovering over the largeicon clear button in the Sources Navigator of the Sources panel
     */
    clearConfiguration: 'Clear configuration',
    /**
     *@description Text in Sources Navigator of the Sources panel
     */
    selectFolderForOverrides: 'Select folder for overrides',
    /**
     *@description Text to explain the content scripts pane in the Sources panel
     */
    explainContentScripts: 'View content scripts served by extensions',
    /**
     *@description Text to explain the Snippets feature in the Sources panel https://goo.gle/devtools-snippets
     */
    explainSnippets: 'Save the JavaScript code you run often to run it again anytime',
    /**
     *@description Text in Sources Navigator of the Sources panel
     */
    newSnippet: 'New snippet',
    /**
     *@description Title of an action in the sources tool to create snippet
     */
    createNewSnippet: 'Create new snippet',
    /**
     *@description A context menu item in the Sources Navigator of the Sources panel
     */
    run: 'Run',
    /**
     *@description A context menu item in the Navigator View of the Sources panel
     */
    rename: 'Rename…',
    /**
     *@description Label for an item to remove something
     */
    remove: 'Remove',
    /**
     *@description Text to save content as a specific file type
     */
    saveAs: 'Save as...',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/sources/SourcesNavigator.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
let networkNavigatorViewInstance;
class NetworkNavigatorView extends _NavigatorView_js__WEBPACK_IMPORTED_MODULE_10__.NavigatorView {
    constructor() {
        super('navigator-network', true);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().addEventListener("InspectedURLChanged" /* SDK.TargetManager.Events.InspectedURLChanged */, this.inspectedURLChanged, this);
        // Record the sources tool load time after the file navigator has loaded.
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.panelLoaded('sources', 'DevTools.Launch.Sources');
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().addScopeChangeListener(this.onScopeChange.bind(this));
    }
    wasShown() {
        this.registerCSSFiles([_sourcesNavigator_css_js__WEBPACK_IMPORTED_MODULE_11__["default"]]);
        super.wasShown();
    }
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!networkNavigatorViewInstance || forceNew) {
            networkNavigatorViewInstance = new NetworkNavigatorView();
        }
        return networkNavigatorViewInstance;
    }
    acceptProject(project) {
        return project.type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.projectTypes.Network &&
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().isInScope(_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.NetworkProject.NetworkProject.getTargetForProject(project));
    }
    onScopeChange() {
        for (const project of _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.WorkspaceImpl.instance().projects()) {
            if (!this.acceptProject(project)) {
                this.removeProject(project);
            }
            else {
                this.tryAddProject(project);
            }
        }
    }
    inspectedURLChanged(event) {
        const mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().scopeTarget();
        if (event.data !== mainTarget) {
            return;
        }
        const inspectedURL = mainTarget && mainTarget.inspectedURL();
        if (!inspectedURL) {
            return;
        }
        for (const uiSourceCode of this.workspace().uiSourceCodes()) {
            if (this.acceptProject(uiSourceCode.project()) && uiSourceCode.url() === inspectedURL) {
                this.revealUISourceCode(uiSourceCode, true);
            }
        }
    }
    uiSourceCodeAdded(uiSourceCode) {
        const mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().scopeTarget();
        const inspectedURL = mainTarget && mainTarget.inspectedURL();
        if (!inspectedURL) {
            return;
        }
        if (uiSourceCode.url() === inspectedURL) {
            this.revealUISourceCode(uiSourceCode, true);
        }
    }
}
class FilesNavigatorView extends _NavigatorView_js__WEBPACK_IMPORTED_MODULE_10__.NavigatorView {
    constructor() {
        super('navigator-files');
        const placeholder = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.EmptyWidget.EmptyWidget('');
        this.setPlaceholder(placeholder);
        placeholder.appendParagraph().appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Fragment.html `
  <div>${i18nString(UIStrings.explainWorkspace)}</div><br />
  ${_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.XLink.XLink.create('https://goo.gle/devtools-workspace', i18nString(UIStrings.learnMore), undefined, undefined, 'learn-more')}
  `);
        const toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.Toolbar('navigator-toolbar');
        void toolbar.appendItemsAtLocation('files-navigator-toolbar').then(() => {
            if (!toolbar.empty()) {
                this.contentElement.insertBefore(toolbar.element, this.contentElement.firstChild);
            }
        });
    }
    sourceSelected(uiSourceCode, focusSource) {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.WorkspaceSourceSelected);
        super.sourceSelected(uiSourceCode, focusSource);
    }
    acceptProject(project) {
        return project.type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.projectTypes.FileSystem &&
            _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_6__.FileSystemWorkspaceBinding.FileSystemWorkspaceBinding.fileSystemType(project) !== 'overrides' &&
            !_snippets_snippets_js__WEBPACK_IMPORTED_MODULE_9__.ScriptSnippetFileSystem.isSnippetsProject(project);
    }
    handleContextMenu(event) {
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.ContextMenu.ContextMenu(event);
        contextMenu.defaultSection().appendAction('sources.add-folder-to-workspace', undefined, true);
        void contextMenu.show();
    }
}
let overridesNavigatorViewInstance;
class OverridesNavigatorView extends _NavigatorView_js__WEBPACK_IMPORTED_MODULE_10__.NavigatorView {
    toolbar;
    constructor() {
        super('navigator-overrides');
        const placeholder = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.EmptyWidget.EmptyWidget('');
        this.setPlaceholder(placeholder);
        placeholder.appendParagraph().appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Fragment.html `
  <div>${i18nString(UIStrings.explainLocalOverrides)}</div><br />
  ${_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.XLink.XLink.create('https://goo.gle/devtools-overrides', i18nString(UIStrings.learnMore), undefined, undefined, 'learn-more')}
  `);
        this.toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.Toolbar('navigator-toolbar');
        this.contentElement.insertBefore(this.toolbar.element, this.contentElement.firstChild);
        _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_6__.NetworkPersistenceManager.NetworkPersistenceManager.instance().addEventListener("ProjectChanged" /* Persistence.NetworkPersistenceManager.Events.ProjectChanged */, this.updateProjectAndUI, this);
        this.workspace().addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.Events.ProjectAdded, this.onProjectAddOrRemoved, this);
        this.workspace().addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.Events.ProjectRemoved, this.onProjectAddOrRemoved, this);
        this.updateProjectAndUI();
    }
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!overridesNavigatorViewInstance || forceNew) {
            overridesNavigatorViewInstance = new OverridesNavigatorView();
        }
        return overridesNavigatorViewInstance;
    }
    onProjectAddOrRemoved(event) {
        const project = event.data;
        if (project && project.type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.projectTypes.FileSystem &&
            _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_6__.FileSystemWorkspaceBinding.FileSystemWorkspaceBinding.fileSystemType(project) !== 'overrides') {
            return;
        }
        this.updateUI();
    }
    updateProjectAndUI() {
        this.reset();
        const project = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_6__.NetworkPersistenceManager.NetworkPersistenceManager.instance().project();
        if (project) {
            this.tryAddProject(project);
        }
        this.updateUI();
    }
    updateUI() {
        this.toolbar.removeToolbarItems();
        const project = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_6__.NetworkPersistenceManager.NetworkPersistenceManager.instance().project();
        if (project) {
            const enableCheckbox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarSettingCheckbox(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('persistence-network-overrides-enabled'));
            this.toolbar.appendToolbarItem(enableCheckbox);
            this.toolbar.appendToolbarItem(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarSeparator(true));
            const clearButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarButton(i18nString(UIStrings.clearConfiguration), 'clear');
            clearButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, () => {
                _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('persistence-network-overrides-enabled').set(false);
                project.remove();
            });
            this.toolbar.appendToolbarItem(clearButton);
            return;
        }
        const title = i18nString(UIStrings.selectFolderForOverrides);
        const setupButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarButton(title, 'plus', title);
        setupButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, _event => {
            void this.setupNewWorkspace();
        }, this);
        this.toolbar.appendToolbarItem(setupButton);
    }
    async setupNewWorkspace() {
        const fileSystem = await _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_6__.IsolatedFileSystemManager.IsolatedFileSystemManager.instance().addFileSystem('overrides');
        if (!fileSystem) {
            return;
        }
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('persistence-network-overrides-enabled').set(true);
    }
    sourceSelected(uiSourceCode, focusSource) {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.OverridesSourceSelected);
        super.sourceSelected(uiSourceCode, focusSource);
    }
    acceptProject(project) {
        return project === _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_6__.NetworkPersistenceManager.NetworkPersistenceManager.instance().project();
    }
}
class ContentScriptsNavigatorView extends _NavigatorView_js__WEBPACK_IMPORTED_MODULE_10__.NavigatorView {
    constructor() {
        super('navigator-content-scripts');
        const placeholder = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.EmptyWidget.EmptyWidget('');
        this.setPlaceholder(placeholder);
        placeholder.appendParagraph().appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Fragment.html `
  <div>${i18nString(UIStrings.explainContentScripts)}</div><br />
  ${_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.XLink.XLink.create('https://developer.chrome.com/extensions/content_scripts', i18nString(UIStrings.learnMore), undefined, undefined, 'learn-more')}
  `);
    }
    acceptProject(project) {
        return project.type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.projectTypes.ContentScripts;
    }
}
class SnippetsNavigatorView extends _NavigatorView_js__WEBPACK_IMPORTED_MODULE_10__.NavigatorView {
    constructor() {
        super('navigator-snippets');
        const placeholder = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.EmptyWidget.EmptyWidget('');
        this.setPlaceholder(placeholder);
        placeholder.appendParagraph().appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Fragment.html `
  <div>${i18nString(UIStrings.explainSnippets)}</div><br />
  ${_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.XLink.XLink.create('https://goo.gle/devtools-snippets', i18nString(UIStrings.learnMore), undefined, undefined, 'learn-more')}
  `);
        const toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.Toolbar('navigator-toolbar');
        const newButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarButton(i18nString(UIStrings.newSnippet), 'plus', i18nString(UIStrings.newSnippet), 'sources.new-snippet');
        newButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, _event => {
            void this.create(_snippets_snippets_js__WEBPACK_IMPORTED_MODULE_9__.ScriptSnippetFileSystem.findSnippetsProject(), '');
        });
        toolbar.appendToolbarItem(newButton);
        this.contentElement.insertBefore(toolbar.element, this.contentElement.firstChild);
    }
    acceptProject(project) {
        return _snippets_snippets_js__WEBPACK_IMPORTED_MODULE_9__.ScriptSnippetFileSystem.isSnippetsProject(project);
    }
    handleContextMenu(event) {
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.ContextMenu.ContextMenu(event);
        contextMenu.headerSection().appendItem(i18nString(UIStrings.createNewSnippet), () => this.create(_snippets_snippets_js__WEBPACK_IMPORTED_MODULE_9__.ScriptSnippetFileSystem.findSnippetsProject(), ''), { jslogContext: 'create-new-snippet' });
        void contextMenu.show();
    }
    handleFileContextMenu(event, node) {
        const uiSourceCode = node.uiSourceCode();
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.ContextMenu.ContextMenu(event);
        contextMenu.headerSection().appendItem(i18nString(UIStrings.run), () => _snippets_snippets_js__WEBPACK_IMPORTED_MODULE_9__.ScriptSnippetFileSystem.evaluateScriptSnippet(uiSourceCode), { jslogContext: 'run' });
        contextMenu.editSection().appendItem(i18nString(UIStrings.rename), () => this.rename(node, false), { jslogContext: 'rename' });
        contextMenu.editSection().appendItem(i18nString(UIStrings.remove), () => uiSourceCode.project().deleteFile(uiSourceCode), { jslogContext: 'remove' });
        contextMenu.saveSection().appendItem(i18nString(UIStrings.saveAs), this.handleSaveAs.bind(this, uiSourceCode), { jslogContext: 'save-as' });
        void contextMenu.show();
    }
    async handleSaveAs(uiSourceCode) {
        uiSourceCode.commitWorkingCopy();
        const { content } = await uiSourceCode.requestContent();
        await _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.FileManager.FileManager.instance().save(this.addJSExtension(uiSourceCode.url()), content || '', true, false /* isBase64 */);
        _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.FileManager.FileManager.instance().close(uiSourceCode.url());
    }
    addJSExtension(url) {
        return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.concatenate(url, '.js');
    }
}
class ActionDelegate {
    handleAction(context, actionId) {
        switch (actionId) {
            case 'sources.create-snippet':
                void _snippets_snippets_js__WEBPACK_IMPORTED_MODULE_9__.ScriptSnippetFileSystem.findSnippetsProject()
                    .createFile(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.DevToolsPath.EmptyEncodedPathString, null, '')
                    .then(uiSourceCode => _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(uiSourceCode));
                return true;
            case 'sources.add-folder-to-workspace':
                void _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_6__.IsolatedFileSystemManager.IsolatedFileSystemManager.instance().addFileSystem();
                return true;
        }
        return false;
    }
}
//# sourceMappingURL=SourcesNavigator.js.map

/***/ }),

/***/ "./panels/sources/sourcesNavigator.css.js":
/*!************************************************!*\
  !*** ./panels/sources/sourcesNavigator.css.js ***!
  \************************************************/
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

.border-container {
  border-bottom: 1px solid var(--sys-color-divider);
  flex-shrink: 0;
}

/*# sourceURL=sourcesNavigator.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);