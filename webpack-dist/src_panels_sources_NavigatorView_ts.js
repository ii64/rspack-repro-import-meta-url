"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_sources_NavigatorView_ts"],{

/***/ "./src/panels/search/SearchScope.ts":
/*!******************************************!*\
  !*** ./src/panels/search/SearchScope.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



/***/ }),

/***/ "./src/panels/search/search.ts":
/*!*************************************!*\
  !*** ./src/panels/search/search.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchResultsPane: () => (/* reexport module object */ _SearchResultsPane_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   SearchScope: () => (/* reexport module object */ _SearchScope_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   SearchView: () => (/* reexport module object */ _SearchView_js__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _SearchResultsPane_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchResultsPane.js */ "./src/panels/search/SearchResultsPane.ts");
/* harmony import */ var _SearchScope_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchScope.js */ "./src/panels/search/SearchScope.ts");
/* harmony import */ var _SearchView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchView.js */ "./src/panels/search/SearchView.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






/***/ }),

/***/ "./src/panels/sources/NavigatorView.ts":
/*!*********************************************!*\
  !*** ./src/panels/sources/NavigatorView.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigatorFolderTreeElement: () => (/* binding */ NavigatorFolderTreeElement),
/* harmony export */   NavigatorFolderTreeNode: () => (/* binding */ NavigatorFolderTreeNode),
/* harmony export */   NavigatorGroupTreeNode: () => (/* binding */ NavigatorGroupTreeNode),
/* harmony export */   NavigatorRootTreeNode: () => (/* binding */ NavigatorRootTreeNode),
/* harmony export */   NavigatorSourceTreeElement: () => (/* binding */ NavigatorSourceTreeElement),
/* harmony export */   NavigatorTreeNode: () => (/* binding */ NavigatorTreeNode),
/* harmony export */   NavigatorUISourceCodeTreeNode: () => (/* binding */ NavigatorUISourceCodeTreeNode),
/* harmony export */   NavigatorView: () => (/* binding */ NavigatorView),
/* harmony export */   Types: () => (/* binding */ Types)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./src/models/persistence/persistence.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _snippets_snippets_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../snippets/snippets.js */ "./src/panels/snippets/snippets.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './navigatorTree.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './navigatorView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _SearchSourcesView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SearchSourcesView.js */ "./src/panels/sources/SearchSourcesView.ts");
/*
 * Copyright (C) 2012 Google Inc. All rights reserved.
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
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _NavigatorView_instances, _NavigatorView_onRequestsForHeaderOverridesFileChanged, _NavigatorView_isUISourceCodeOrAnyAncestorSelected, _a, _NavigatorFolderTreeElement_contextForType;
















const UIStrings = {
    /**
     *@description Text in Navigator View of the Sources panel
     */
    searchInFolder: 'Search in folder',
    /**
     *@description Search label in Navigator View of the Sources panel
     */
    searchInAllFiles: 'Search in all files',
    /**
     *@description Text in Navigator View of the Sources panel
     */
    noDomain: '(no domain)',
    /**
     *@description Text in Navigator View of the Sources panel
     */
    authored: 'Authored',
    /**
     *@description Text in Navigator View of the Sources panel
     */
    authoredTooltip: 'Contains original sources',
    /**
     *@description Text in Navigator View of the Sources panel
     */
    deployed: 'Deployed',
    /**
     *@description Text in Navigator View of the Sources panel
     */
    deployedTooltip: 'Contains final sources the browser sees',
    /**
     *@description Text in Navigator View of the Sources panel
     */
    areYouSureYouWantToExcludeThis: 'Are you sure you want to exclude this folder?',
    /**
     *@description Text in Navigator View of the Sources panel
     */
    areYouSureYouWantToDeleteThis: 'Are you sure you want to delete this file?',
    /**
     *@description A context menu item in the Navigator View of the Sources panel
     */
    rename: 'Rename…',
    /**
     *@description A context menu item in the Navigator View of the Sources panel
     */
    makeACopy: 'Make a copy…',
    /**
     *@description Text to delete something
     */
    delete: 'Delete',
    /**
     *@description A button text to confirm an action to remove a folder. This is not the same as delete. It removes the folder from UI but do not delete them.
     */
    remove: 'Remove',
    /**
     *@description Text in Navigator View of the Sources panel
     */
    areYouSureYouWantToDeleteFolder: 'Are you sure you want to delete this folder and its contents?',
    /**
     *@description Text in Navigator View of the Sources panel. A confirmation message on action to delete a folder.
     */
    actionCannotBeUndone: 'This action cannot be undone.',
    /**
     *@description A context menu item in the Navigator View of the Sources panel
     */
    openFolder: 'Open folder',
    /**
     *@description A context menu item in the Navigator View of the Sources panel
     */
    newFile: 'New file',
    /**
     *@description A context menu item in the Navigator View of the Sources panel to exclude a folder from workspace
     */
    excludeFolder: 'Exclude from workspace',
    /**
     *@description A context menu item in the Navigator View of the Sources panel
     */
    removeFolderFromWorkspace: 'Remove from workspace',
    /**
     *@description Text in Navigator View of the Sources panel
     * @example {a-folder-name} PH1
     */
    areYouSureYouWantToRemoveThis: 'Remove ‘{PH1}’ from Workspace?',
    /**
     *@description Text in Navigator View of the Sources panel. Warning message when user remove a folder.
     */
    workspaceStopSyncing: 'This will stop syncing changes from DevTools to your sources.',
    /**
     *@description Name of an item from source map
     *@example {compile.html} PH1
     */
    sFromSourceMap: '{PH1} (from source map)',
    /**
     *@description Name of an item that is on the ignore list
     *@example {compile.html} PH1
     */
    sIgnoreListed: '{PH1} (ignore listed)',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/sources/NavigatorView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
const Types = {
    Authored: 'authored',
    Deployed: 'deployed',
    Domain: 'domain',
    File: 'file',
    FileSystem: 'fs',
    FileSystemFolder: 'fs-folder',
    Frame: 'frame',
    NetworkFolder: 'nw-folder',
    Root: 'root',
    Worker: 'worker',
};
const TYPE_ORDERS = new Map([
    [Types.Root, 1],
    [Types.Authored, 1],
    [Types.Deployed, 5],
    [Types.Domain, 10],
    [Types.FileSystemFolder, 1],
    [Types.NetworkFolder, 1],
    [Types.File, 10],
    [Types.Frame, 70],
    [Types.Worker, 90],
    [Types.FileSystem, 100],
]);
class NavigatorView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Widget.VBox {
    constructor(jslogContext, enableAuthoredGrouping) {
        super(true);
        _NavigatorView_instances.add(this);
        Object.defineProperty(this, "placeholder", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "scriptsTree", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "uiSourceCodeNodes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "subfolderNodes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "rootNode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "frameNodes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "authoredNode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "deployedNode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "navigatorGroupByFolderSetting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "navigatorGroupByAuthoredExperiment", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "workspaceInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "groupByFrame", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "groupByAuthored", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "groupByDomain", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "groupByFolder", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.placeholder = null;
        this.scriptsTree = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.TreeOutline.TreeOutlineInShadow();
        this.scriptsTree.setComparator(NavigatorView.treeElementsCompare);
        this.scriptsTree.setFocusable(false);
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.pane(jslogContext).track({ resize: true })}`);
        this.contentElement.appendChild(this.scriptsTree.element);
        this.setDefaultFocusedElement(this.scriptsTree.element);
        this.uiSourceCodeNodes = new _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.MapUtilities.Multimap();
        this.subfolderNodes = new Map();
        this.rootNode = new NavigatorRootTreeNode(this);
        this.rootNode.populate();
        this.frameNodes = new Map();
        this.contentElement.addEventListener('contextmenu', this.handleContextMenu.bind(this), false);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ShortcutRegistry.ShortcutRegistry.instance().addShortcutListener(this.contentElement, { 'sources.rename': this.renameShortcut.bind(this) });
        this.navigatorGroupByFolderSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('navigator-group-by-folder');
        this.navigatorGroupByFolderSetting.addChangeListener(this.groupingChanged.bind(this));
        if (enableAuthoredGrouping) {
            this.navigatorGroupByAuthoredExperiment = _core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.ExperimentName.AUTHORED_DEPLOYED_GROUPING;
        }
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.IgnoreListManager.IgnoreListManager.instance().addChangeListener(this.ignoreListChanged.bind(this));
        this.initGrouping();
        _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.Persistence.PersistenceImpl.instance().addEventListener(_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.Persistence.Events.BindingCreated, this.onBindingChanged, this);
        _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.Persistence.PersistenceImpl.instance().addEventListener(_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.Persistence.Events.BindingRemoved, this.onBindingChanged, this);
        _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.NetworkPersistenceManager.NetworkPersistenceManager.instance().addEventListener(_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.NetworkPersistenceManager.Events.RequestsForHeaderOverridesFileChanged, __classPrivateFieldGet(this, _NavigatorView_instances, "m", _NavigatorView_onRequestsForHeaderOverridesFileChanged), this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.Events.NameChanged, this.targetNameChanged, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().observeTargets(this);
        this.resetWorkspace(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.WorkspaceImpl.instance());
        this.workspaceInternal.uiSourceCodes().forEach(this.addUISourceCode.bind(this));
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.NetworkProject.NetworkProjectManager.instance().addEventListener(_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.NetworkProject.Events.FrameAttributionAdded, this.frameAttributionAdded, this);
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.NetworkProject.NetworkProjectManager.instance().addEventListener(_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.NetworkProject.Events.FrameAttributionRemoved, this.frameAttributionRemoved, this);
    }
    static treeElementOrder(treeElement) {
        if (boostOrderForNode.has(treeElement)) {
            return 0;
        }
        const actualElement = treeElement;
        let order = TYPE_ORDERS.get(actualElement.nodeType) || 0;
        if (actualElement.uiSourceCode) {
            const contentType = actualElement.uiSourceCode.contentType();
            if (contentType.isDocument()) {
                order += 3;
            }
            else if (contentType.isScript()) {
                order += 5;
            }
            else if (contentType.isStyleSheet()) {
                order += 10;
            }
            else {
                order += 15;
            }
        }
        return order;
    }
    static appendSearchItem(contextMenu, path) {
        const searchLabel = path ? i18nString(UIStrings.searchInFolder) : i18nString(UIStrings.searchInAllFiles);
        const searchSources = new _SearchSourcesView_js__WEBPACK_IMPORTED_MODULE_14__.SearchSources(path && `file:${path}`);
        contextMenu.viewSection().appendItem(searchLabel, () => _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(searchSources), { jslogContext: path ? 'search-in-folder' : 'search-in-all-files' });
    }
    static treeElementsCompare(treeElement1, treeElement2) {
        const typeWeight1 = NavigatorView.treeElementOrder(treeElement1);
        const typeWeight2 = NavigatorView.treeElementOrder(treeElement2);
        if (typeWeight1 > typeWeight2) {
            return 1;
        }
        if (typeWeight1 < typeWeight2) {
            return -1;
        }
        return _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.naturalOrderComparator(treeElement1.titleAsText(), treeElement2.titleAsText());
    }
    setPlaceholder(placeholder) {
        console.assert(!this.placeholder, 'A placeholder widget was already set');
        this.placeholder = placeholder;
        placeholder.show(this.contentElement, this.contentElement.firstChild);
        updateVisibility.call(this);
        this.scriptsTree.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.TreeOutline.Events.ElementAttached, updateVisibility.bind(this));
        this.scriptsTree.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.TreeOutline.Events.ElementsDetached, updateVisibility.bind(this));
        function updateVisibility() {
            const showTree = this.scriptsTree.firstChild();
            if (showTree) {
                placeholder.hideWidget();
            }
            else {
                placeholder.showWidget();
            }
            this.scriptsTree.element.classList.toggle('hidden', !showTree);
        }
    }
    onBindingChanged(event) {
        const binding = event.data;
        let isFromSourceMap = false;
        // Update UISourceCode titles.
        const networkNodes = this.uiSourceCodeNodes.get(binding.network);
        for (const networkNode of networkNodes) {
            networkNode.updateTitle();
            isFromSourceMap || (isFromSourceMap = networkNode.uiSourceCode().contentType().isFromSourceMap());
        }
        const fileSystemNodes = this.uiSourceCodeNodes.get(binding.fileSystem);
        for (const fileSystemNode of fileSystemNodes) {
            fileSystemNode.updateTitle();
            isFromSourceMap || (isFromSourceMap = fileSystemNode.uiSourceCode().contentType().isFromSourceMap());
        }
        // Update folder titles.
        const pathTokens = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.FileSystemWorkspaceBinding.FileSystemWorkspaceBinding.relativePath(binding.fileSystem);
        let folderPath = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.DevToolsPath.EmptyEncodedPathString;
        for (let i = 0; i < pathTokens.length - 1; ++i) {
            folderPath = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.concatenate(folderPath, pathTokens[i]);
            const folderId = this.folderNodeId(binding.fileSystem.project(), null, null, binding.fileSystem.origin(), isFromSourceMap, folderPath);
            const folderNode = this.subfolderNodes.get(folderId);
            if (folderNode) {
                folderNode.updateTitle();
            }
            folderPath = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.concatenate(folderPath, '/');
        }
        // Update fileSystem root title.
        const fileSystemRoot = this.rootOrDeployedNode().child(binding.fileSystem.project().id());
        if (fileSystemRoot) {
            fileSystemRoot.updateTitle();
        }
    }
    focus() {
        this.scriptsTree.focus();
    }
    /**
     * Central place to add elements to the tree to
     * enable focus if the tree has elements
     */
    appendChild(parent, child) {
        this.scriptsTree.setFocusable(true);
        parent.appendChild(child);
    }
    /**
     * Central place to remove elements from the tree to
     * disable focus if the tree is empty
     */
    removeChild(parent, child) {
        parent.removeChild(child);
        if (this.scriptsTree.rootElement().childCount() === 0) {
            this.scriptsTree.setFocusable(false);
        }
    }
    resetWorkspace(workspace) {
        // Clear old event listeners first.
        if (this.workspaceInternal) {
            this.workspaceInternal.removeEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.Events.UISourceCodeAdded, this.uiSourceCodeAddedCallback, this);
            this.workspaceInternal.removeEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.Events.UISourceCodeRemoved, this.uiSourceCodeRemovedCallback, this);
            this.workspaceInternal.removeEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.Events.ProjectAdded, this.projectAddedCallback, this);
            this.workspaceInternal.removeEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.Events.ProjectRemoved, this.projectRemovedCallback, this);
        }
        this.workspaceInternal = workspace;
        this.workspaceInternal.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.Events.UISourceCodeAdded, this.uiSourceCodeAddedCallback, this);
        this.workspaceInternal.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.Events.UISourceCodeRemoved, this.uiSourceCodeRemovedCallback, this);
        this.workspaceInternal.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.Events.ProjectAdded, this.projectAddedCallback, this);
        this.workspaceInternal.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.Events.ProjectRemoved, this.projectRemovedCallback, this);
        this.workspaceInternal.projects().forEach(this.projectAdded.bind(this));
        this.computeUniqueFileSystemProjectNames();
    }
    projectAddedCallback(event) {
        const project = event.data;
        this.projectAdded(project);
        if (project.type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.projectTypes.FileSystem) {
            this.computeUniqueFileSystemProjectNames();
        }
    }
    projectRemovedCallback(event) {
        const project = event.data;
        this.removeProject(project);
        if (project.type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.projectTypes.FileSystem) {
            this.computeUniqueFileSystemProjectNames();
        }
    }
    workspace() {
        return this.workspaceInternal;
    }
    acceptProject(project) {
        return !project.isServiceProject();
    }
    frameAttributionAdded(event) {
        const { uiSourceCode } = event.data;
        if (!this.acceptsUISourceCode(uiSourceCode)) {
            return;
        }
        const addedFrame = event.data.frame;
        // This event does not happen for UISourceCodes without initial attribution.
        this.addUISourceCodeNode(uiSourceCode, addedFrame);
    }
    frameAttributionRemoved(event) {
        const { uiSourceCode } = event.data;
        if (!this.acceptsUISourceCode(uiSourceCode)) {
            return;
        }
        const removedFrame = event.data.frame;
        const node = Array.from(this.uiSourceCodeNodes.get(uiSourceCode)).find(node => node.frame() === removedFrame);
        if (node) {
            this.removeUISourceCodeNode(node);
        }
    }
    acceptsUISourceCode(uiSourceCode) {
        return this.acceptProject(uiSourceCode.project());
    }
    addUISourceCode(uiSourceCode) {
        if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.isEnabled(_core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.ExperimentName.JUST_MY_CODE) &&
            _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.IgnoreListManager.IgnoreListManager.instance().isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode)) {
            return;
        }
        if (!this.acceptsUISourceCode(uiSourceCode)) {
            return;
        }
        if (uiSourceCode.isFetchXHR()) {
            return;
        }
        const frames = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.NetworkProject.NetworkProject.framesForUISourceCode(uiSourceCode);
        if (frames.length) {
            for (const frame of frames) {
                this.addUISourceCodeNode(uiSourceCode, frame);
            }
        }
        else {
            this.addUISourceCodeNode(uiSourceCode, null);
        }
        this.uiSourceCodeAdded(uiSourceCode);
    }
    addUISourceCodeNode(uiSourceCode, frame) {
        const isFromSourceMap = uiSourceCode.contentType().isFromSourceMap();
        let path;
        if (uiSourceCode.project().type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.projectTypes.FileSystem) {
            path =
                _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.FileSystemWorkspaceBinding.FileSystemWorkspaceBinding.relativePath(uiSourceCode).slice(0, -1);
        }
        else {
            path = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.extractPath(uiSourceCode.url()).split('/').slice(1, -1);
        }
        const project = uiSourceCode.project();
        const target = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.NetworkProject.NetworkProject.targetForUISourceCode(uiSourceCode);
        const folderNode = this.folderNode(uiSourceCode, project, target, frame, uiSourceCode.origin(), path, isFromSourceMap);
        const uiSourceCodeNode = new NavigatorUISourceCodeTreeNode(this, uiSourceCode, frame);
        const existingNode = folderNode.child(uiSourceCodeNode.id);
        if (existingNode && existingNode instanceof NavigatorUISourceCodeTreeNode) {
            this.uiSourceCodeNodes.set(uiSourceCode, existingNode);
        }
        else {
            folderNode.appendChild(uiSourceCodeNode);
            this.uiSourceCodeNodes.set(uiSourceCode, uiSourceCodeNode);
            uiSourceCodeNode.updateTitleBubbleUp();
        }
        this.selectDefaultTreeNode();
    }
    uiSourceCodeAdded(_uiSourceCode) {
    }
    uiSourceCodeAddedCallback(event) {
        const uiSourceCode = event.data;
        this.addUISourceCode(uiSourceCode);
    }
    uiSourceCodeRemovedCallback(event) {
        this.removeUISourceCodes([event.data]);
    }
    tryAddProject(project) {
        this.projectAdded(project);
        for (const uiSourceCode of project.uiSourceCodes()) {
            this.addUISourceCode(uiSourceCode);
        }
    }
    projectAdded(project) {
        const rootOrDeployed = this.rootOrDeployedNode();
        if (!this.acceptProject(project) || project.type() !== _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.projectTypes.FileSystem ||
            _snippets_snippets_js__WEBPACK_IMPORTED_MODULE_12__.ScriptSnippetFileSystem.isSnippetsProject(project) || rootOrDeployed.child(project.id())) {
            return;
        }
        rootOrDeployed.appendChild(new NavigatorGroupTreeNode(this, project, project.id(), Types.FileSystem, project.displayName()));
        this.selectDefaultTreeNode();
    }
    // TODO(einbinder) remove this code after crbug.com/964075 is fixed
    selectDefaultTreeNode() {
        const children = this.rootNode.children();
        if (children.length && !this.scriptsTree.selectedTreeElement) {
            children[0].treeNode().select(true /* omitFocus */, false /* selectedByUser */);
        }
    }
    computeUniqueFileSystemProjectNames() {
        const fileSystemProjects = this.workspaceInternal.projectsForType(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.projectTypes.FileSystem);
        if (!fileSystemProjects.length) {
            return;
        }
        const reversedIndex = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Trie.Trie.newArrayTrie();
        const reversedPaths = [];
        for (const project of fileSystemProjects) {
            const fileSystem = project;
            const reversedPathParts = fileSystem.fileSystemPath().split('/').reverse();
            reversedPaths.push(reversedPathParts);
            reversedIndex.add(reversedPathParts);
        }
        const rootOrDeployed = this.rootOrDeployedNode();
        for (let i = 0; i < fileSystemProjects.length; ++i) {
            const reversedPath = reversedPaths[i];
            const project = fileSystemProjects[i];
            reversedIndex.remove(reversedPath);
            const commonPrefix = reversedIndex.longestPrefix(reversedPath, false /* fullWordOnly */);
            reversedIndex.add(reversedPath);
            const prefixPath = reversedPath.slice(0, commonPrefix.length + 1);
            const path = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.encodedPathToRawPathString(prefixPath.reverse().join('/'));
            const fileSystemNode = rootOrDeployed.child(project.id());
            if (fileSystemNode) {
                fileSystemNode.setTitle(path);
            }
        }
    }
    removeProject(project) {
        this.removeUISourceCodes(project.uiSourceCodes());
        if (project.type() !== _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.projectTypes.FileSystem) {
            return;
        }
        const fileSystemNode = this.rootNode.child(project.id());
        if (!fileSystemNode) {
            return;
        }
        this.rootNode.removeChild(fileSystemNode);
    }
    folderNodeId(project, target, frame, projectOrigin, isFromSourceMap, path) {
        const projectId = project.type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.projectTypes.FileSystem ? project.id() : '';
        let targetId = target && !(this.groupByAuthored && isFromSourceMap) ? target.id() : '';
        let frameId = this.groupByFrame && frame ? frame.id : '';
        if (this.groupByAuthored) {
            if (isFromSourceMap) {
                targetId = 'Authored';
                frameId = '';
            }
            else {
                targetId = 'Deployed:' + targetId;
            }
        }
        return targetId + ':' + projectId + ':' + frameId + ':' + projectOrigin + ':' + path;
    }
    folderNode(uiSourceCode, project, target, frame, projectOrigin, path, fromSourceMap) {
        if (_snippets_snippets_js__WEBPACK_IMPORTED_MODULE_12__.ScriptSnippetFileSystem.isSnippetsUISourceCode(uiSourceCode)) {
            return this.rootNode;
        }
        if (target && !this.groupByFolder && !fromSourceMap) {
            return this.domainNode(uiSourceCode, project, target, frame, projectOrigin);
        }
        const folderPath = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.join(path, '/');
        const folderId = this.folderNodeId(project, target, frame, projectOrigin, fromSourceMap, folderPath);
        let folderNode = this.subfolderNodes.get(folderId);
        if (folderNode) {
            return folderNode;
        }
        if (!path.length) {
            if (target) {
                return this.domainNode(uiSourceCode, project, target, frame, projectOrigin);
            }
            return this.rootOrDeployedNode().child(project.id());
        }
        const parentNode = this.folderNode(uiSourceCode, project, target, frame, projectOrigin, path.slice(0, -1), fromSourceMap);
        let type = Types.NetworkFolder;
        if (project.type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.projectTypes.FileSystem) {
            type = Types.FileSystemFolder;
        }
        const name = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.encodedPathToRawPathString(path[path.length - 1]);
        folderNode = new NavigatorFolderTreeNode(this, project, folderId, type, folderPath, name, projectOrigin);
        this.subfolderNodes.set(folderId, folderNode);
        parentNode.appendChild(folderNode);
        return folderNode;
    }
    domainNode(uiSourceCode, project, target, frame, projectOrigin) {
        const isAuthored = uiSourceCode.contentType().isFromSourceMap();
        const frameNode = this.frameNode(project, target, frame, isAuthored);
        if (!this.groupByDomain) {
            return frameNode;
        }
        let domainNode = frameNode.child(projectOrigin);
        if (domainNode) {
            return domainNode;
        }
        domainNode = new NavigatorGroupTreeNode(this, project, projectOrigin, Types.Domain, this.computeProjectDisplayName(target, projectOrigin));
        if (frame && projectOrigin === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.extractOrigin(frame.url)) {
            boostOrderForNode.add(domainNode.treeNode());
        }
        frameNode.appendChild(domainNode);
        if (isAuthored && this.groupByAuthored) {
            domainNode.treeNode().expand();
        }
        return domainNode;
    }
    frameNode(project, target, frame, isAuthored) {
        if (!this.groupByFrame || !frame || (this.groupByAuthored && isAuthored)) {
            return this.targetNode(project, target, isAuthored);
        }
        let frameNode = this.frameNodes.get(frame);
        if (frameNode) {
            return frameNode;
        }
        frameNode =
            new NavigatorGroupTreeNode(this, project, target.id() + ':' + frame.id, Types.Frame, frame.displayName());
        frameNode.setHoverCallback(hoverCallback);
        this.frameNodes.set(frame, frameNode);
        const parentFrame = frame.parentFrame();
        this.frameNode(project, parentFrame ? parentFrame.resourceTreeModel().target() : target, parentFrame, isAuthored)
            .appendChild(frameNode);
        if (!parentFrame) {
            boostOrderForNode.add(frameNode.treeNode());
            frameNode.treeNode().expand();
        }
        function hoverCallback(hovered) {
            if (hovered) {
                const overlayModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.OverlayModel.OverlayModel);
                if (overlayModel && frame) {
                    overlayModel.highlightFrame(frame.id);
                }
            }
            else {
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
            }
        }
        return frameNode;
    }
    targetNode(project, target, isAuthored) {
        if (this.groupByAuthored && isAuthored) {
            if (!this.authoredNode) {
                this.authoredNode = new NavigatorGroupTreeNode(this, null, 'group:Authored', Types.Authored, i18nString(UIStrings.authored), i18nString(UIStrings.authoredTooltip));
                this.rootNode.appendChild(this.authoredNode);
                this.authoredNode.treeNode().expand();
            }
            return this.authoredNode;
        }
        const rootOrDeployed = this.rootOrDeployedNode();
        if (target === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().scopeTarget()) {
            return rootOrDeployed;
        }
        let targetNode = rootOrDeployed.child('target:' + target.id());
        if (!targetNode) {
            targetNode = new NavigatorGroupTreeNode(this, project, 'target:' + target.id(), target.type() === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Type.Frame ? Types.Frame : Types.Worker, target.name());
            rootOrDeployed.appendChild(targetNode);
        }
        return targetNode;
    }
    rootOrDeployedNode() {
        if (this.groupByAuthored) {
            if (!this.deployedNode) {
                this.deployedNode = new NavigatorGroupTreeNode(this, null, 'group:Deployed', Types.Deployed, i18nString(UIStrings.deployed), i18nString(UIStrings.deployedTooltip));
                this.rootNode.appendChild(this.deployedNode);
            }
            return this.deployedNode;
        }
        return this.rootNode;
    }
    computeProjectDisplayName(target, projectOrigin) {
        const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.RuntimeModel.RuntimeModel);
        const executionContexts = runtimeModel ? runtimeModel.executionContexts() : [];
        for (const context of executionContexts) {
            if (context.name && context.origin && projectOrigin.startsWith(context.origin)) {
                return context.name;
            }
        }
        if (!projectOrigin) {
            return i18nString(UIStrings.noDomain);
        }
        const parsedURL = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL(projectOrigin);
        const prettyURL = parsedURL.isValid ? parsedURL.host + (parsedURL.port ? (':' + parsedURL.port) : '') : '';
        return (prettyURL || projectOrigin);
    }
    revealUISourceCode(uiSourceCode, select) {
        const nodes = this.uiSourceCodeNodes.get(uiSourceCode);
        if (nodes.size === 0) {
            return null;
        }
        const node = nodes.values().next().value;
        if (!node) {
            return null;
        }
        if (this.scriptsTree.selectedTreeElement) {
            // If the tree outline is being marked as "being edited" (i.e. we're renaming a file
            // or chosing the name for a new snippet), we shall not proceed with revealing here,
            // as that will steal focus from the input widget and thus cancel editing. The
            // test/e2e/snippets/breakpoint_test.ts exercises this.
            if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.isBeingEdited(this.scriptsTree.selectedTreeElement.treeOutline?.element)) {
                return null;
            }
            this.scriptsTree.selectedTreeElement.deselect();
        }
        // TODO(dgozman): figure out revealing multiple.
        node.reveal(select);
        return node;
    }
    sourceSelected(uiSourceCode, focusSource) {
        void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(uiSourceCode, !focusSource);
    }
    removeUISourceCodes(uiSourceCodes) {
        const nodesWithSelectionOnPath = [];
        // First we remove source codes without any selection on their path to root, and only then
        // the ones with selection. This to avoid layout work associated with moving the selection
        // around (crbug.com/1409025).
        for (const uiSourceCode of uiSourceCodes) {
            const nodes = this.uiSourceCodeNodes.get(uiSourceCode);
            for (const node of nodes) {
                if (__classPrivateFieldGet(this, _NavigatorView_instances, "m", _NavigatorView_isUISourceCodeOrAnyAncestorSelected).call(this, node)) {
                    nodesWithSelectionOnPath.push(node);
                }
                else {
                    this.removeUISourceCodeNode(node);
                }
            }
        }
        nodesWithSelectionOnPath.forEach(this.removeUISourceCodeNode.bind(this));
    }
    removeUISourceCodeNode(node) {
        const uiSourceCode = node.uiSourceCode();
        this.uiSourceCodeNodes.delete(uiSourceCode, node);
        const project = uiSourceCode.project();
        const target = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.NetworkProject.NetworkProject.targetForUISourceCode(uiSourceCode);
        let frame = node.frame();
        let parentNode = node.parent;
        if (!parentNode) {
            return;
        }
        parentNode.removeChild(node);
        let currentNode = parentNode;
        while (currentNode) {
            parentNode = currentNode.parent;
            if (!parentNode) {
                break;
            }
            if ((parentNode === this.rootNode || parentNode === this.deployedNode) &&
                project.type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.projectTypes.FileSystem) {
                break;
            }
            if (!(currentNode instanceof NavigatorGroupTreeNode || currentNode instanceof NavigatorFolderTreeNode)) {
                break;
            }
            if (!currentNode.isEmpty()) {
                currentNode.updateTitleBubbleUp();
                break;
            }
            if (currentNode.type === Types.Frame) {
                this.discardFrame(frame, Boolean(this.groupByAuthored) && uiSourceCode.contentType().isFromSourceMap());
                frame = frame.parentFrame();
            }
            else {
                const folderId = this.folderNodeId(project, target, frame, uiSourceCode.origin(), uiSourceCode.contentType().isFromSourceMap(), currentNode instanceof NavigatorFolderTreeNode && currentNode.folderPath ||
                    _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.DevToolsPath.EmptyEncodedPathString);
                this.subfolderNodes.delete(folderId);
                parentNode.removeChild(currentNode);
            }
            if (currentNode === this.authoredNode) {
                this.authoredNode = undefined;
            }
            else if (currentNode === this.deployedNode) {
                this.deployedNode = undefined;
            }
            currentNode = parentNode;
        }
    }
    reset(tearDownOnly) {
        for (const node of this.uiSourceCodeNodes.valuesArray()) {
            node.dispose();
        }
        this.scriptsTree.removeChildren();
        this.scriptsTree.setFocusable(false);
        this.uiSourceCodeNodes.clear();
        this.subfolderNodes.clear();
        this.frameNodes.clear();
        this.rootNode.reset();
        this.authoredNode = undefined;
        this.deployedNode = undefined;
        if (!tearDownOnly) {
            // Reset the workspace to repopulate filesystem folders.
            this.resetWorkspace(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.WorkspaceImpl.instance());
        }
    }
    handleContextMenu(_event) {
    }
    async renameShortcut() {
        const selectedTreeElement = this.scriptsTree.selectedTreeElement;
        const node = selectedTreeElement && selectedTreeElement.node;
        if (!node || !node.uiSourceCode() || !node.uiSourceCode().canRename()) {
            return false;
        }
        this.rename(node, false);
        return true;
    }
    handleContextMenuCreate(project, path, uiSourceCode) {
        if (uiSourceCode) {
            const relativePath = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.FileSystemWorkspaceBinding.FileSystemWorkspaceBinding.relativePath(uiSourceCode);
            relativePath.pop();
            path = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.join(relativePath, '/');
        }
        void this.create(project, path, uiSourceCode);
    }
    handleContextMenuRename(node) {
        this.rename(node, false);
    }
    async handleContextMenuExclude(project, path) {
        const shouldExclude = await _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.ConfirmDialog.show(i18nString(UIStrings.areYouSureYouWantToExcludeThis), undefined, { jslogContext: 'exclude-folder-confirmation' });
        if (shouldExclude) {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.startBatchUpdate();
            project.excludeFolder(_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.FileSystemWorkspaceBinding.FileSystemWorkspaceBinding.completeURL(project, path));
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.endBatchUpdate();
        }
    }
    async handleContextMenuDelete(uiSourceCode) {
        const shouldDelete = await _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.ConfirmDialog.show(i18nString(UIStrings.areYouSureYouWantToDeleteThis), undefined, { jslogContext: 'delete-file-confirmation' });
        if (shouldDelete) {
            uiSourceCode.project().deleteFile(uiSourceCode);
        }
    }
    handleFileContextMenu(event, node) {
        const uiSourceCode = node.uiSourceCode();
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ContextMenu.ContextMenu(event);
        contextMenu.appendApplicableItems(uiSourceCode);
        const project = uiSourceCode.project();
        if (project.type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.projectTypes.FileSystem) {
            contextMenu.editSection().appendItem(i18nString(UIStrings.rename), this.handleContextMenuRename.bind(this, node), { jslogContext: 'rename' });
            contextMenu.editSection().appendItem(i18nString(UIStrings.makeACopy), this.handleContextMenuCreate.bind(this, project, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.DevToolsPath.EmptyEncodedPathString, uiSourceCode), { jslogContext: 'make-a-copy' });
            contextMenu.editSection().appendItem(i18nString(UIStrings.delete), this.handleContextMenuDelete.bind(this, uiSourceCode), { jslogContext: 'delete' });
        }
        void contextMenu.show();
    }
    async handleDeleteFolder(node) {
        const warningMsg = `${i18nString(UIStrings.areYouSureYouWantToDeleteFolder)}\n${i18nString(UIStrings.actionCannotBeUndone)}`;
        const shouldRemove = await _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.ConfirmDialog.show(warningMsg, undefined, { jslogContext: 'delete-folder-confirmation' });
        if (shouldRemove) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.OverrideTabDeleteFolderContextMenu);
            const topNode = this.findTopNonMergedNode(node);
            await this.removeUISourceCodeFromProject(topNode);
            await this.deleteDirectoryRecursively(topNode);
        }
    }
    async removeUISourceCodeFromProject(node) {
        node.children().forEach(async (child) => {
            await this.removeUISourceCodeFromProject(child);
        });
        if (node instanceof NavigatorUISourceCodeTreeNode) {
            node.uiSourceCode().project().removeUISourceCode(node.uiSourceCode().url());
        }
    }
    async deleteDirectoryRecursively(node) {
        if (!(node instanceof NavigatorFolderTreeNode)) {
            return;
        }
        await _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.NetworkPersistenceManager.NetworkPersistenceManager.instance()
            .project()
            ?.deleteDirectoryRecursively(node.folderPath);
    }
    findTopNonMergedNode(node) {
        // multiple folder nodes can be merged into one if it only contains one file
        // e.g. the folder of "abc.com/assets/css/button.css" can be "abc.com/assets/css"
        // find the top non-merged node (abc.com) recursively
        if (!node.isMerged) {
            return node;
        }
        if (!(node.parent instanceof NavigatorFolderTreeNode)) {
            return node;
        }
        return this.findTopNonMergedNode(node.parent);
    }
    handleFolderContextMenu(event, node) {
        const path = node.folderPath || _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.DevToolsPath.EmptyEncodedPathString;
        const project = node.project || null;
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ContextMenu.ContextMenu(event);
        NavigatorView.appendSearchItem(contextMenu, path);
        if (!project) {
            return;
        }
        if (project.type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.projectTypes.FileSystem) {
            const folderPath = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.urlToRawPathString(_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.FileSystemWorkspaceBinding.FileSystemWorkspaceBinding.completeURL(project, path), _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.Platform.isWin());
            contextMenu.revealSection().appendItem(i18nString(UIStrings.openFolder), () => _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.showItemInFolder(folderPath), { jslogContext: 'open-folder' });
            if (project.canCreateFile()) {
                contextMenu.defaultSection().appendItem(i18nString(UIStrings.newFile), () => {
                    this.handleContextMenuCreate(project, path, undefined);
                }, { jslogContext: 'new-file' });
            }
        }
        else if (node.origin && node.folderPath) {
            const url = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.concatenate(node.origin, '/', node.folderPath);
            const options = {
                isContentScript: node.recursiveProperties.exclusivelyContentScripts || false,
                isKnownThirdParty: node.recursiveProperties.exclusivelyThirdParty || false,
                isCurrentlyIgnoreListed: node.recursiveProperties.exclusivelyIgnored || false,
            };
            for (const { text, callback, jslogContext } of _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.IgnoreListManager.IgnoreListManager.instance()
                .getIgnoreListFolderContextMenuItems(url, options)) {
                contextMenu.defaultSection().appendItem(text, callback, { jslogContext });
            }
        }
        if (project.canExcludeFolder(path)) {
            contextMenu.defaultSection().appendItem(i18nString(UIStrings.excludeFolder), this.handleContextMenuExclude.bind(this, project, path), { jslogContext: 'exclude-folder' });
        }
        if (project.type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.projectTypes.FileSystem) {
            const isFileOverrides = project.fileSystem().type() === 'overrides';
            if (!isFileOverrides) {
                if (node instanceof NavigatorGroupTreeNode) {
                    contextMenu.defaultSection().appendItem(i18nString(UIStrings.removeFolderFromWorkspace), async () => {
                        const warningMessage = `${i18nString(UIStrings.areYouSureYouWantToRemoveThis, {
                            PH1: node.title,
                        })}\n${i18nString(UIStrings.workspaceStopSyncing)}`;
                        const shouldRemove = await _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.ConfirmDialog.show(warningMessage, undefined, {
                            okButtonLabel: i18nString(UIStrings.remove),
                            jslogContext: 'remove-folder-from-workspace-confirmation',
                        });
                        if (shouldRemove) {
                            project.remove();
                        }
                    }, { jslogContext: 'remove-folder-from-workspace' });
                }
            }
            else {
                if (!(node instanceof NavigatorGroupTreeNode)) {
                    contextMenu.defaultSection().appendItem(i18nString(UIStrings.delete), this.handleDeleteFolder.bind(this, node), { jslogContext: 'delete' });
                }
            }
        }
        void contextMenu.show();
    }
    rename(node, creatingNewUISourceCode) {
        const uiSourceCode = node.uiSourceCode();
        node.rename(callback.bind(this));
        function callback(committed) {
            if (!creatingNewUISourceCode) {
                return;
            }
            if (!committed) {
                uiSourceCode.remove();
            }
            else if (node.treeElement && node.treeElement.listItemElement.hasFocus()) {
                this.sourceSelected(uiSourceCode, true);
            }
        }
    }
    async create(project, path, uiSourceCodeToCopy) {
        let content = '';
        if (uiSourceCodeToCopy) {
            content = (await uiSourceCodeToCopy.requestContent()).content || '';
        }
        const uiSourceCode = await project.createFile(path, null, content);
        if (!uiSourceCode) {
            return;
        }
        this.sourceSelected(uiSourceCode, false);
        const node = this.revealUISourceCode(uiSourceCode, true);
        if (node) {
            this.rename(node, true);
        }
    }
    groupingChanged() {
        this.reset(true);
        this.initGrouping();
        // Reset the workspace to repopulate filesystem folders.
        this.resetWorkspace(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.WorkspaceImpl.instance());
        this.workspaceInternal.uiSourceCodes().forEach(this.addUISourceCode.bind(this));
    }
    ignoreListChanged() {
        if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.isEnabled(_core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.ExperimentName.JUST_MY_CODE)) {
            this.groupingChanged();
        }
        else {
            this.rootNode.updateTitleRecursive();
        }
    }
    initGrouping() {
        this.groupByFrame = true;
        this.groupByDomain = this.navigatorGroupByFolderSetting.get();
        this.groupByFolder = this.groupByDomain;
        if (this.navigatorGroupByAuthoredExperiment) {
            this.groupByAuthored = _core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.isEnabled(this.navigatorGroupByAuthoredExperiment);
        }
        else {
            this.groupByAuthored = false;
        }
    }
    resetForTest() {
        this.reset();
        this.workspaceInternal.uiSourceCodes().forEach(this.addUISourceCode.bind(this));
    }
    discardFrame(frame, isAuthored) {
        if (isAuthored) {
            return;
        }
        const node = this.frameNodes.get(frame);
        if (!node) {
            return;
        }
        if (node.parent) {
            node.parent.removeChild(node);
        }
        this.frameNodes.delete(frame);
        for (const child of frame.childFrames) {
            this.discardFrame(child, isAuthored);
        }
    }
    targetAdded(_target) {
    }
    targetRemoved(target) {
        const rootOrDeployed = this.rootOrDeployedNode();
        const targetNode = rootOrDeployed.child('target:' + target.id());
        if (targetNode) {
            rootOrDeployed.removeChild(targetNode);
        }
    }
    targetNameChanged(event) {
        const target = event.data;
        const targetNode = this.rootOrDeployedNode().child('target:' + target.id());
        if (targetNode) {
            targetNode.setTitle(target.name());
        }
    }
    wasShown() {
        super.wasShown();
        this.scriptsTree.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './navigatorTree.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './navigatorView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}
_NavigatorView_instances = new WeakSet(), _NavigatorView_onRequestsForHeaderOverridesFileChanged = function _NavigatorView_onRequestsForHeaderOverridesFileChanged(event) {
    const headersFileUiSourceCode = event.data;
    const networkNodes = this.uiSourceCodeNodes.get(headersFileUiSourceCode);
    for (const networkNode of networkNodes) {
        networkNode.updateTitle();
    }
}, _NavigatorView_isUISourceCodeOrAnyAncestorSelected = function _NavigatorView_isUISourceCodeOrAnyAncestorSelected(node) {
    const selectedTreeElement = this.scriptsTree.selectedTreeElement;
    const selectedNode = selectedTreeElement && selectedTreeElement.node;
    let currentNode = node;
    while (currentNode) {
        if (currentNode === selectedNode) {
            return true;
        }
        currentNode = currentNode.parent;
        if (!(node instanceof NavigatorGroupTreeNode || node instanceof NavigatorFolderTreeElement)) {
            break;
        }
    }
    return false;
};
const boostOrderForNode = new WeakSet();
class NavigatorFolderTreeElement extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.TreeOutline.TreeElement {
    constructor(navigatorView, type, title, hoverCallback) {
        super('', true, __classPrivateFieldGet(_a, _a, "m", _NavigatorFolderTreeElement_contextForType).call(_a, type));
        Object.defineProperty(this, "nodeType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "navigatorView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "hoverCallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "node", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "hovered", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "isIgnoreListed", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "isFromSourceMap", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.listItemElement.classList.add('navigator-' + type + '-tree-item', 'navigator-folder-tree-item');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.setLabel(this.listItemElement, `${title}, ${type}`);
        this.nodeType = type;
        this.title = title;
        this.tooltip = title;
        this.navigatorView = navigatorView;
        this.hoverCallback = hoverCallback;
        this.isFromSourceMap = false;
        let iconType = 'folder';
        if (type === Types.Domain) {
            iconType = 'cloud';
        }
        else if (type === Types.Frame) {
            iconType = 'frame';
        }
        else if (type === Types.Worker) {
            iconType = 'gears';
        }
        else if (type === Types.Authored) {
            iconType = 'code';
        }
        else if (type === Types.Deployed) {
            iconType = 'deployed';
        }
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_9__.Icon.create(iconType);
        this.setLeadingIcons([icon]);
    }
    async onpopulate() {
        this.node.populate();
    }
    onattach() {
        this.collapse();
        this.node.onattach();
        this.listItemElement.addEventListener('contextmenu', this.handleContextMenuEvent.bind(this), false);
        this.listItemElement.addEventListener('mousemove', this.mouseMove.bind(this), false);
        this.listItemElement.addEventListener('mouseleave', this.mouseLeave.bind(this), false);
    }
    setIgnoreListed(isIgnoreListed) {
        if (this.isIgnoreListed !== isIgnoreListed) {
            this.isIgnoreListed = isIgnoreListed;
            this.listItemElement.classList.toggle('is-ignore-listed', isIgnoreListed);
            this.updateTooltip();
        }
    }
    setFromSourceMap(isFromSourceMap) {
        this.isFromSourceMap = isFromSourceMap;
        this.listItemElement.classList.toggle('is-from-source-map', isFromSourceMap);
    }
    setNode(node) {
        this.node = node;
        this.updateTooltip();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.setLabel(this.listItemElement, `${this.title}, ${this.nodeType}`);
    }
    updateTooltip() {
        if (this.node.tooltip) {
            this.tooltip = this.node.tooltip;
        }
        else {
            const paths = [];
            let currentNode = this.node;
            while (currentNode && !currentNode.isRoot() && currentNode.type === this.node.type) {
                paths.push(currentNode.title);
                currentNode = currentNode.parent;
            }
            paths.reverse();
            let tooltip = paths.join('/');
            if (this.isIgnoreListed) {
                tooltip = i18nString(UIStrings.sIgnoreListed, { PH1: tooltip });
            }
            this.tooltip = tooltip;
        }
    }
    handleContextMenuEvent(event) {
        if (!this.node) {
            return;
        }
        this.select();
        this.navigatorView.handleFolderContextMenu(event, this.node);
    }
    mouseMove(_event) {
        if (this.hovered || !this.hoverCallback) {
            return;
        }
        this.hovered = true;
        this.hoverCallback(true);
    }
    mouseLeave(_event) {
        if (!this.hoverCallback) {
            return;
        }
        this.hovered = false;
        this.hoverCallback(false);
    }
}
_a = NavigatorFolderTreeElement, _NavigatorFolderTreeElement_contextForType = function _NavigatorFolderTreeElement_contextForType(type) {
    switch (type) {
        case Types.Domain:
            return 'domain';
        case Types.Frame:
            return 'frame';
        case Types.Worker:
            return 'worker';
        case Types.Authored:
            return 'authored';
        case Types.Deployed:
            return 'deployed';
    }
    return 'folder';
};
class NavigatorSourceTreeElement extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.TreeOutline.TreeElement {
    constructor(navigatorView, uiSourceCode, title, node) {
        super('', false, uiSourceCode.contentType().name());
        Object.defineProperty(this, "nodeType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "node", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "navigatorView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "uiSourceCodeInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.nodeType = Types.File;
        this.node = node;
        this.title = title;
        this.listItemElement.classList.add('navigator-' + uiSourceCode.contentType().name() + '-tree-item', 'navigator-file-tree-item');
        this.tooltip = uiSourceCode.url();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.setLabel(this.listItemElement, `${uiSourceCode.name()}, ${this.nodeType}`);
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.fireEvent('source-tree-file-added', uiSourceCode.fullDisplayName());
        this.navigatorView = navigatorView;
        this.uiSourceCodeInternal = uiSourceCode;
        this.updateIcon();
        this.titleElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.value('title').track({ change: true })}`);
    }
    updateIcon() {
        const binding = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.Persistence.PersistenceImpl.instance().binding(this.uiSourceCodeInternal);
        const networkPersistenceManager = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.NetworkPersistenceManager.NetworkPersistenceManager.instance();
        let iconType = 'document';
        let iconStyles = [];
        if (binding) {
            if (_snippets_snippets_js__WEBPACK_IMPORTED_MODULE_12__.ScriptSnippetFileSystem.isSnippetsUISourceCode(binding.fileSystem)) {
                iconType = 'snippet';
            }
            const badgeIsPurple = networkPersistenceManager.project() === binding.fileSystem.project();
            iconStyles = badgeIsPurple ? ['dot', 'purple'] : ['dot', 'green'];
        }
        else if (networkPersistenceManager.isActiveHeaderOverrides(this.uiSourceCode)) {
            iconStyles = ['dot', 'purple'];
        }
        else {
            if (_snippets_snippets_js__WEBPACK_IMPORTED_MODULE_12__.ScriptSnippetFileSystem.isSnippetsUISourceCode(this.uiSourceCodeInternal)) {
                iconType = 'snippet';
            }
        }
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_9__.Icon.create(iconType, iconStyles.join(' '));
        if (binding) {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Tooltip.Tooltip.install(icon, _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.PersistenceUtils.PersistenceUtils.tooltipForUISourceCode(this.uiSourceCodeInternal));
        }
        this.setLeadingIcons([icon]);
    }
    updateAccessibleName() {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.setLabel(this.listItemElement, `${this.uiSourceCodeInternal.name()}, ${this.nodeType}`);
    }
    get uiSourceCode() {
        return this.uiSourceCodeInternal;
    }
    onattach() {
        this.listItemElement.draggable = true;
        this.listItemElement.addEventListener('click', this.onclick.bind(this), false);
        this.listItemElement.addEventListener('contextmenu', this.handleContextMenuEvent.bind(this), false);
        this.listItemElement.addEventListener('dragstart', this.ondragstart.bind(this), false);
    }
    shouldRenameOnMouseDown() {
        if (!this.uiSourceCodeInternal.canRename()) {
            return false;
        }
        if (!this.treeOutline) {
            return false;
        }
        const isSelected = this === this.treeOutline.selectedTreeElement;
        return isSelected && this.treeOutline.element.hasFocus() && !_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.isBeingEdited(this.treeOutline.element);
    }
    selectOnMouseDown(event) {
        if (event.which !== 1 || !this.shouldRenameOnMouseDown()) {
            super.selectOnMouseDown(event);
            return;
        }
        window.setTimeout(rename.bind(this), 300);
        function rename() {
            if (this.shouldRenameOnMouseDown()) {
                this.navigatorView.rename(this.node, false);
            }
        }
    }
    ondragstart(event) {
        if (!event.dataTransfer) {
            return;
        }
        event.dataTransfer.setData('text/plain', this.uiSourceCodeInternal.url());
        event.dataTransfer.effectAllowed = 'copy';
    }
    onspace() {
        this.navigatorView.sourceSelected(this.uiSourceCode, true);
        return true;
    }
    onclick(_event) {
        this.navigatorView.sourceSelected(this.uiSourceCode, false);
    }
    ondblclick(event) {
        const middleClick = event.button === 1;
        this.navigatorView.sourceSelected(this.uiSourceCode, !middleClick);
        return false;
    }
    onenter() {
        this.navigatorView.sourceSelected(this.uiSourceCode, true);
        return true;
    }
    ondelete() {
        return true;
    }
    handleContextMenuEvent(event) {
        this.select();
        this.navigatorView.handleFileContextMenu(event, this.node);
    }
}
class NavigatorTreeNode {
    constructor(navigatorView, id, type, tooltip) {
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "navigatorView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "childrenInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "populated", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "isMerged", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "parent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "tooltip", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "recursiveProperties", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.id = id;
        this.navigatorView = navigatorView;
        this.type = type;
        this.childrenInternal = new Map();
        this.tooltip = tooltip;
        this.populated = false;
        this.isMerged = false;
        this.recursiveProperties = {
            exclusivelySourceMapped: null,
            exclusivelyIgnored: null,
            exclusivelyContentScripts: null,
            exclusivelyThirdParty: null,
        };
    }
    treeNode() {
        throw 'Not implemented';
    }
    dispose() {
    }
    updateTitle() {
    }
    updateTitleRecursive() {
        for (const child of this.children()) {
            child.updateTitleRecursive();
        }
        this.updateTitle();
    }
    updateTitleBubbleUp() {
        this.updateTitle();
        if (this.parent) {
            this.parent.updateTitleBubbleUp();
        }
    }
    isRoot() {
        return false;
    }
    hasChildren() {
        return true;
    }
    onattach() {
    }
    setTitle(_title) {
        throw 'Not implemented';
    }
    populate() {
        if (this.isPopulated()) {
            return;
        }
        if (this.parent) {
            this.parent.populate();
        }
        this.populated = true;
        this.wasPopulated();
    }
    wasPopulated() {
        const children = this.children();
        for (let i = 0; i < children.length; ++i) {
            this.navigatorView.appendChild(this.treeNode(), children[i].treeNode());
        }
    }
    didAddChild(node) {
        if (this.isPopulated()) {
            this.navigatorView.appendChild(this.treeNode(), node.treeNode());
        }
    }
    willRemoveChild(node) {
        if (this.isPopulated()) {
            this.navigatorView.removeChild(this.treeNode(), node.treeNode());
        }
    }
    isPopulated() {
        return this.populated;
    }
    isEmpty() {
        return !this.childrenInternal.size;
    }
    children() {
        return [...this.childrenInternal.values()];
    }
    child(id) {
        return this.childrenInternal.get(id) || null;
    }
    appendChild(node) {
        this.childrenInternal.set(node.id, node);
        node.parent = this;
        this.didAddChild(node);
    }
    removeChild(node) {
        this.willRemoveChild(node);
        this.childrenInternal.delete(node.id);
        node.parent = null;
        node.dispose();
    }
    reset() {
        this.childrenInternal.clear();
    }
}
class NavigatorRootTreeNode extends NavigatorTreeNode {
    constructor(navigatorView) {
        super(navigatorView, '', Types.Root);
    }
    isRoot() {
        return true;
    }
    treeNode() {
        return this.navigatorView.scriptsTree.rootElement();
    }
}
class NavigatorUISourceCodeTreeNode extends NavigatorTreeNode {
    constructor(navigatorView, uiSourceCode, frame) {
        super(navigatorView, 'UISourceCode:' + uiSourceCode.canononicalScriptId(), Types.File);
        Object.defineProperty(this, "uiSourceCodeInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "treeElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "eventListeners", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "frameInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.uiSourceCodeInternal = uiSourceCode;
        this.treeElement = null;
        this.eventListeners = [];
        this.frameInternal = frame;
        this.recursiveProperties.exclusivelySourceMapped = uiSourceCode.contentType().isFromSourceMap();
        if (uiSourceCode.contentType().isScript()) {
            // These properties affect ignore-listing menus and only matter when the UISourceCode is a script
            this.recursiveProperties.exclusivelyThirdParty = uiSourceCode.isKnownThirdParty();
            this.recursiveProperties.exclusivelyContentScripts =
                uiSourceCode.project().type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.projectTypes.ContentScripts;
        }
    }
    frame() {
        return this.frameInternal;
    }
    uiSourceCode() {
        return this.uiSourceCodeInternal;
    }
    treeNode() {
        if (this.treeElement) {
            return this.treeElement;
        }
        this.treeElement = new NavigatorSourceTreeElement(this.navigatorView, this.uiSourceCodeInternal, '', this);
        this.updateTitle();
        const updateTitleBound = this.updateTitle.bind(this, undefined);
        this.eventListeners = [
            this.uiSourceCodeInternal.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.UISourceCode.Events.TitleChanged, updateTitleBound),
            this.uiSourceCodeInternal.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.UISourceCode.Events.WorkingCopyChanged, updateTitleBound),
            this.uiSourceCodeInternal.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.UISourceCode.Events.WorkingCopyCommitted, updateTitleBound),
        ];
        return this.treeElement;
    }
    updateTitle(ignoreIsDirty) {
        const isIgnoreListed = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.IgnoreListManager.IgnoreListManager.instance().isUserOrSourceMapIgnoreListedUISourceCode(this.uiSourceCodeInternal);
        if (this.uiSourceCodeInternal.contentType().isScript() || isIgnoreListed) {
            this.recursiveProperties.exclusivelyIgnored = isIgnoreListed;
        }
        if (!this.treeElement) {
            return;
        }
        let titleText = this.uiSourceCodeInternal.displayName();
        if (!ignoreIsDirty && this.uiSourceCodeInternal.isDirty()) {
            titleText = '*' + titleText;
        }
        this.treeElement.title = titleText;
        this.treeElement.updateIcon();
        this.treeElement.listItemElement.classList.toggle('is-ignore-listed', isIgnoreListed);
        let tooltip = this.uiSourceCodeInternal.url();
        if (this.uiSourceCodeInternal.contentType().isFromSourceMap()) {
            tooltip = i18nString(UIStrings.sFromSourceMap, { PH1: this.uiSourceCodeInternal.displayName() });
        }
        if (isIgnoreListed) {
            tooltip = i18nString(UIStrings.sIgnoreListed, { PH1: tooltip });
        }
        this.treeElement.tooltip = tooltip;
        this.treeElement.updateAccessibleName();
        this.parent?.childrenInternal.delete(this.id);
        this.id = 'UISourceCode:' + this.uiSourceCodeInternal.canononicalScriptId();
        this.parent?.childrenInternal.set(this.id, this);
    }
    hasChildren() {
        return false;
    }
    dispose() {
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(this.eventListeners);
    }
    reveal(select) {
        if (this.parent) {
            this.parent.populate();
            this.parent.treeNode().expand();
        }
        if (this.treeElement) {
            this.treeElement.reveal(true);
            if (select) {
                this.treeElement.select(true);
            }
        }
    }
    rename(callback) {
        if (!this.treeElement) {
            return;
        }
        this.treeElement.listItemElement.focus();
        if (!this.treeElement.treeOutline) {
            return;
        }
        // Tree outline should be marked as edited as well as the tree element to prevent search from starting.
        const treeOutlineElement = this.treeElement.treeOutline.element;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.markBeingEdited(treeOutlineElement, true);
        function commitHandler(element, newTitle, oldTitle) {
            if (newTitle !== oldTitle) {
                if (this.treeElement) {
                    this.treeElement.title = newTitle;
                }
                // necessary cast to RawPathString as alternative would be altering type of Config<T>
                void this.uiSourceCodeInternal.rename(newTitle)
                    .then(renameCallback.bind(this));
                return;
            }
            afterEditing.call(this, true);
        }
        function renameCallback(success) {
            if (!success) {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.markBeingEdited(treeOutlineElement, false);
                this.updateTitle();
                this.rename(callback);
                return;
            }
            if (this.treeElement) {
                const { parent } = this.treeElement;
                if (parent) {
                    parent.removeChild(this.treeElement);
                    parent.appendChild(this.treeElement);
                    this.treeElement.select();
                }
            }
            afterEditing.call(this, true);
        }
        function afterEditing(committed) {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.markBeingEdited(treeOutlineElement, false);
            this.updateTitle();
            if (callback) {
                callback(committed);
            }
        }
        this.updateTitle(true);
        this.treeElement.startEditingTitle(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.InplaceEditor.Config(commitHandler.bind(this), afterEditing.bind(this, false)));
    }
}
class NavigatorFolderTreeNode extends NavigatorTreeNode {
    constructor(navigatorView, project, id, type, folderPath, title, origin) {
        super(navigatorView, id, type);
        Object.defineProperty(this, "project", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "folderPath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "origin", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "treeElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.project = project;
        this.folderPath = folderPath;
        this.title = title;
        this.origin = origin;
    }
    treeNode() {
        if (this.treeElement) {
            return this.treeElement;
        }
        this.treeElement = this.createTreeElement(this.title, this);
        this.updateTitle();
        return this.treeElement;
    }
    updateTitle() {
        let propName;
        for (propName in this.recursiveProperties) {
            let propValue = null;
            for (const child of this.children()) {
                if (child.recursiveProperties[propName] === false) {
                    propValue = false;
                    break;
                }
                else if (child.recursiveProperties[propName]) {
                    propValue = true;
                }
            }
            this.recursiveProperties[propName] = propValue;
        }
        if (!this.treeElement) {
            return;
        }
        this.treeElement.setFromSourceMap(this.recursiveProperties.exclusivelySourceMapped || false);
        this.treeElement.setIgnoreListed(this.recursiveProperties.exclusivelyIgnored || false);
        if (!this.project || this.project.type() !== _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.projectTypes.FileSystem) {
            return;
        }
        const absoluteFileSystemPath = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.concatenate(_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.FileSystemWorkspaceBinding.FileSystemWorkspaceBinding.fileSystemPath(this.project.id()), '/', this.folderPath);
        const hasMappedFiles = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.Persistence.PersistenceImpl.instance().filePathHasBindings(absoluteFileSystemPath);
        this.treeElement.listItemElement.classList.toggle('has-mapped-files', hasMappedFiles);
    }
    createTreeElement(title, node) {
        const treeElement = new NavigatorFolderTreeElement(this.navigatorView, this.type, title);
        treeElement.setNode(node);
        return treeElement;
    }
    wasPopulated() {
        // @ts-ignore These types are invalid, but removing this check causes wrong behavior
        if (!this.treeElement || this.treeElement.node !== this) {
            return;
        }
        this.addChildrenRecursive();
    }
    addChildrenRecursive() {
        const children = this.children();
        for (let i = 0; i < children.length; ++i) {
            const child = children[i];
            this.didAddChild(child);
            if (child instanceof NavigatorFolderTreeNode) {
                child.addChildrenRecursive();
            }
        }
    }
    shouldMerge(node) {
        return this.type !== Types.Domain && node instanceof NavigatorFolderTreeNode;
    }
    didAddChild(node) {
        if (!this.treeElement) {
            return;
        }
        let children = this.children();
        if (children.length === 1 && this.shouldMerge(node)) {
            node.isMerged = true;
            this.treeElement.title = this.treeElement.title + '/' + node.title;
            node.treeElement = this.treeElement;
            node.updateTitle();
            this.treeElement.setNode(node);
            return;
        }
        let oldNode;
        if (children.length === 2) {
            oldNode = children[0] !== node ? children[0] : children[1];
        }
        if (oldNode && oldNode.isMerged) {
            oldNode.isMerged = false;
            const mergedToNodes = [];
            mergedToNodes.push(this);
            let treeNode = this;
            while (treeNode && treeNode.isMerged) {
                treeNode = treeNode.parent;
                if (treeNode) {
                    mergedToNodes.push(treeNode);
                }
            }
            mergedToNodes.reverse();
            const titleText = mergedToNodes.map(node => node.title).join('/');
            const nodes = [];
            treeNode = oldNode;
            do {
                nodes.push(treeNode);
                children = treeNode.children();
                treeNode = children.length === 1 ? children[0] : null;
            } while (treeNode && treeNode.isMerged);
            if (!this.isPopulated()) {
                this.treeElement.title = titleText;
                this.treeElement.setNode(this);
                for (let i = 0; i < nodes.length; ++i) {
                    nodes[i].treeElement = null;
                    nodes[i].isMerged = false;
                }
                this.updateTitle();
                return;
            }
            const oldTreeElement = this.treeElement;
            const treeElement = this.createTreeElement(titleText, this);
            for (let i = 0; i < mergedToNodes.length; ++i) {
                mergedToNodes[i].treeElement = treeElement;
                mergedToNodes[i].updateTitle();
            }
            if (oldTreeElement.parent) {
                this.navigatorView.appendChild(oldTreeElement.parent, treeElement);
            }
            oldTreeElement.setNode(nodes[nodes.length - 1]);
            oldTreeElement.title = nodes.map(node => node.title).join('/');
            if (oldTreeElement.parent) {
                this.navigatorView.removeChild(oldTreeElement.parent, oldTreeElement);
            }
            this.navigatorView.appendChild(this.treeElement, oldTreeElement);
            if (oldTreeElement.expanded) {
                treeElement.expand();
            }
            this.updateTitle();
        }
        if (this.isPopulated()) {
            this.navigatorView.appendChild(this.treeElement, node.treeNode());
        }
    }
    willRemoveChild(node) {
        const actualNode = node;
        if (actualNode.isMerged || !this.isPopulated() || !this.treeElement || !actualNode.treeElement) {
            return;
        }
        this.navigatorView.removeChild(this.treeElement, actualNode.treeElement);
    }
}
class NavigatorGroupTreeNode extends NavigatorTreeNode {
    constructor(navigatorView, project, id, type, title, tooltip) {
        super(navigatorView, id, type, tooltip);
        Object.defineProperty(this, "project", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "hoverCallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "treeElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.project = project;
        this.title = title;
        this.populate();
    }
    setHoverCallback(hoverCallback) {
        this.hoverCallback = hoverCallback;
    }
    treeNode() {
        if (this.treeElement) {
            return this.treeElement;
        }
        this.treeElement = new NavigatorFolderTreeElement(this.navigatorView, this.type, this.title, this.hoverCallback);
        this.treeElement.setNode(this);
        return this.treeElement;
    }
    onattach() {
        this.updateTitle();
    }
    updateTitle() {
        if (!this.treeElement || !this.project || this.project.type() !== _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.projectTypes.FileSystem) {
            return;
        }
        const fileSystemPath = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.FileSystemWorkspaceBinding.FileSystemWorkspaceBinding.fileSystemPath(this.project.id());
        const wasActive = this.treeElement.listItemElement.classList.contains('has-mapped-files');
        const isActive = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.Persistence.PersistenceImpl.instance().filePathHasBindings(fileSystemPath);
        if (wasActive === isActive) {
            return;
        }
        this.treeElement.listItemElement.classList.toggle('has-mapped-files', isActive);
        if (this.treeElement.childrenListElement.hasFocus()) {
            return;
        }
        if (isActive) {
            this.treeElement.expand();
        }
        else {
            this.treeElement.collapse();
        }
    }
    setTitle(title) {
        this.title = title;
        if (this.treeElement) {
            this.treeElement.title = this.title;
        }
    }
}


/***/ }),

/***/ "./src/panels/sources/SearchSourcesView.ts":
/*!*************************************************!*\
  !*** ./src/panels/sources/SearchSourcesView.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* binding */ ActionDelegate),
/* harmony export */   Revealer: () => (/* binding */ Revealer),
/* harmony export */   SearchSources: () => (/* binding */ SearchSources),
/* harmony export */   SearchSourcesView: () => (/* binding */ SearchSourcesView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _search_search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/search.js */ "./src/panels/search/search.ts");
/* harmony import */ var _SourcesSearchScope_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SourcesSearchScope.js */ "./src/panels/sources/SourcesSearchScope.ts");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




class SearchSources {
    constructor(query) {
        Object.defineProperty(this, "query", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.query = query;
    }
}
class SearchSourcesView extends _search_search_js__WEBPACK_IMPORTED_MODULE_2__.SearchView.SearchView {
    constructor() {
        super('sources', new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(/* timeoutMs */ 200));
    }
    createScope() {
        return new _SourcesSearchScope_js__WEBPACK_IMPORTED_MODULE_3__.SourcesSearchScope();
    }
}
class ActionDelegate {
    handleAction(_context, actionId) {
        switch (actionId) {
            case 'sources.search': {
                const selection = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.InspectorView.InspectorView.instance().element.window().getSelection();
                const query = selection ? selection.toString().replace(/\r?\n.*/, '') : '';
                void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(new SearchSources(query));
                return true;
            }
        }
        return false;
    }
}
class Revealer {
    async reveal({ query }, omitFocus) {
        const viewManager = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ViewManager.ViewManager.instance();
        await viewManager.showView('sources.search-sources-tab', true, omitFocus);
        const searchSourcesView = viewManager.materializedWidget('sources.search-sources-tab');
        if (searchSourcesView instanceof SearchSourcesView) {
            searchSourcesView.toggle(query);
        }
    }
}


/***/ })

}]);