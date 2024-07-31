"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_sources_SourcesSearchScope_ts"],{

/***/ "./src/panels/sources/SourcesSearchScope.ts":
/*!**************************************************!*\
  !*** ./src/panels/sources/SourcesSearchScope.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileBasedSearchResult: () => (/* binding */ FileBasedSearchResult),
/* harmony export */   SourcesSearchScope: () => (/* binding */ SourcesSearchScope)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./src/models/persistence/persistence.ts");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
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






class SourcesSearchScope {
    constructor() {
        Object.defineProperty(this, "searchId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "searchResultCandidates", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "searchResultCallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "searchFinishedCallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "searchConfig", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // FIXME: Add title once it is used by search controller.
        this.searchId = 0;
        this.searchResultCandidates = [];
        this.searchResultCallback = null;
        this.searchFinishedCallback = null;
        this.searchConfig = null;
    }
    static filesComparator(uiSourceCode1, uiSourceCode2) {
        if (uiSourceCode1.isDirty() && !uiSourceCode2.isDirty()) {
            return -1;
        }
        if (!uiSourceCode1.isDirty() && uiSourceCode2.isDirty()) {
            return 1;
        }
        const isFileSystem1 = uiSourceCode1.project().type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.projectTypes.FileSystem &&
            !_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.Persistence.PersistenceImpl.instance().binding(uiSourceCode1);
        const isFileSystem2 = uiSourceCode2.project().type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.projectTypes.FileSystem &&
            !_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.Persistence.PersistenceImpl.instance().binding(uiSourceCode2);
        if (isFileSystem1 !== isFileSystem2) {
            return isFileSystem1 ? 1 : -1;
        }
        const url1 = uiSourceCode1.url();
        const url2 = uiSourceCode2.url();
        if (url1 && !url2) {
            return -1;
        }
        if (!url1 && url2) {
            return 1;
        }
        return _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.naturalOrderComparator(uiSourceCode1.fullDisplayName(), uiSourceCode2.fullDisplayName());
    }
    static urlComparator(uiSourceCode1, uiSourceCode2) {
        return _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.naturalOrderComparator(uiSourceCode1.url(), uiSourceCode2.url());
    }
    performIndexing(progress) {
        this.stopSearch();
        const projects = this.projects();
        const compositeProgress = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Progress.CompositeProgress(progress);
        for (let i = 0; i < projects.length; ++i) {
            const project = projects[i];
            const projectProgress = compositeProgress.createSubProgress([...project.uiSourceCodes()].length);
            project.indexContent(projectProgress);
        }
    }
    projects() {
        const searchInAnonymousAndContentScripts = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('search-in-anonymous-and-content-scripts').get();
        return _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance().projects().filter(project => {
            if (project.type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.projectTypes.Service) {
                return false;
            }
            if (!searchInAnonymousAndContentScripts && project.isServiceProject() &&
                project.type() !== _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.projectTypes.Formatter) {
                return false;
            }
            if (!searchInAnonymousAndContentScripts && project.type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.projectTypes.ContentScripts) {
                return false;
            }
            return true;
        });
    }
    performSearch(searchConfig, progress, searchResultCallback, searchFinishedCallback) {
        this.stopSearch();
        this.searchResultCandidates = [];
        this.searchResultCallback = searchResultCallback;
        this.searchFinishedCallback = searchFinishedCallback;
        this.searchConfig = searchConfig;
        const promises = [];
        const compositeProgress = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Progress.CompositeProgress(progress);
        const searchContentProgress = compositeProgress.createSubProgress();
        const findMatchingFilesProgress = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Progress.CompositeProgress(compositeProgress.createSubProgress());
        for (const project of this.projects()) {
            const weight = [...project.uiSourceCodes()].length;
            const findMatchingFilesInProjectProgress = findMatchingFilesProgress.createSubProgress(weight);
            const filesMatchingFileQuery = this.projectFilesMatchingFileQuery(project, searchConfig);
            const promise = project
                .findFilesMatchingSearchRequest(searchConfig, filesMatchingFileQuery, findMatchingFilesInProjectProgress)
                .then(this.processMatchingFilesForProject.bind(this, this.searchId, project, searchConfig, filesMatchingFileQuery));
            promises.push(promise);
        }
        void Promise.all(promises).then(this.processMatchingFiles.bind(this, this.searchId, searchContentProgress, this.searchFinishedCallback.bind(this, true)));
    }
    projectFilesMatchingFileQuery(project, searchConfig, dirtyOnly) {
        const result = [];
        for (const uiSourceCode of project.uiSourceCodes()) {
            if (!uiSourceCode.contentType().isTextType()) {
                continue;
            }
            if (_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.IgnoreListManager.IgnoreListManager.instance().isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode)) {
                continue;
            }
            const binding = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.Persistence.PersistenceImpl.instance().binding(uiSourceCode);
            if (binding && binding.network === uiSourceCode) {
                continue;
            }
            if (dirtyOnly && !uiSourceCode.isDirty()) {
                continue;
            }
            if (searchConfig.filePathMatchesFileQuery(uiSourceCode.fullDisplayName())) {
                result.push(uiSourceCode);
            }
        }
        result.sort(SourcesSearchScope.urlComparator);
        return result;
    }
    processMatchingFilesForProject(searchId, project, searchConfig, filesMatchingFileQuery, filesWithPreliminaryResult) {
        if (searchId !== this.searchId && this.searchFinishedCallback) {
            this.searchFinishedCallback(false);
            return;
        }
        let files = [...filesWithPreliminaryResult.keys()];
        files.sort(SourcesSearchScope.urlComparator);
        files = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.ArrayUtilities.intersectOrdered(files, filesMatchingFileQuery, SourcesSearchScope.urlComparator);
        const dirtyFiles = this.projectFilesMatchingFileQuery(project, searchConfig, true);
        files = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.ArrayUtilities.mergeOrdered(files, dirtyFiles, SourcesSearchScope.urlComparator);
        const uiSourceCodes = [];
        for (const uiSourceCode of files) {
            const script = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DefaultScriptMapping.DefaultScriptMapping.scriptForUISourceCode(uiSourceCode);
            if (script && !script.isAnonymousScript()) {
                continue;
            }
            uiSourceCodes.push(uiSourceCode);
        }
        uiSourceCodes.sort(SourcesSearchScope.filesComparator);
        this.searchResultCandidates = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.ArrayUtilities.mergeOrdered(this.searchResultCandidates, uiSourceCodes, SourcesSearchScope.filesComparator);
    }
    processMatchingFiles(searchId, progress, callback) {
        if (searchId !== this.searchId && this.searchFinishedCallback) {
            this.searchFinishedCallback(false);
            return;
        }
        const files = this.searchResultCandidates;
        if (!files.length) {
            progress.done();
            callback();
            return;
        }
        progress.setTotalWork(files.length);
        let fileIndex = 0;
        const maxFileContentRequests = 20;
        let callbacksLeft = 0;
        for (let i = 0; i < maxFileContentRequests && i < files.length; ++i) {
            scheduleSearchInNextFileOrFinish.call(this);
        }
        function searchInNextFile(uiSourceCode) {
            if (uiSourceCode.isDirty()) {
                contentLoaded.call(this, uiSourceCode, uiSourceCode.workingCopy());
            }
            else {
                void uiSourceCode.requestContent().then(deferredContent => {
                    contentLoaded.call(this, uiSourceCode, deferredContent.content || '');
                });
            }
        }
        function scheduleSearchInNextFileOrFinish() {
            if (fileIndex >= files.length) {
                if (!callbacksLeft) {
                    progress.done();
                    callback();
                    return;
                }
                return;
            }
            ++callbacksLeft;
            const uiSourceCode = files[fileIndex++];
            window.setTimeout(searchInNextFile.bind(this, uiSourceCode), 0);
        }
        function contentLoaded(uiSourceCode, content) {
            progress.incrementWorked(1);
            let matches = [];
            const searchConfig = this.searchConfig;
            const queries = searchConfig.queries();
            if (content !== null) {
                for (let i = 0; i < queries.length; ++i) {
                    const nextMatches = _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.TextUtils.performSearchInContent(content, queries[i], !searchConfig.ignoreCase(), searchConfig.isRegex());
                    matches = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.ArrayUtilities.mergeOrdered(matches, nextMatches, _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.ContentProvider.SearchMatch.comparator);
                }
                if (!searchConfig.queries().length) {
                    matches = [new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.ContentProvider.SearchMatch(0, (new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.Text.Text(content)).lineAt(0), 0, 0)];
                }
            }
            if (matches && this.searchResultCallback) {
                const searchResult = new FileBasedSearchResult(uiSourceCode, matches);
                this.searchResultCallback(searchResult);
            }
            --callbacksLeft;
            scheduleSearchInNextFileOrFinish.call(this);
        }
    }
    stopSearch() {
        ++this.searchId;
    }
}
class FileBasedSearchResult {
    constructor(uiSourceCode, searchMatches) {
        Object.defineProperty(this, "uiSourceCode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "searchMatches", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.uiSourceCode = uiSourceCode;
        this.searchMatches = searchMatches;
    }
    label() {
        return this.uiSourceCode.displayName();
    }
    description() {
        return this.uiSourceCode.fullDisplayName();
    }
    matchesCount() {
        return this.searchMatches.length;
    }
    matchLineContent(index) {
        return this.searchMatches[index].lineContent;
    }
    matchRevealable(index) {
        const { lineNumber, columnNumber, matchLength } = this.searchMatches[index];
        const range = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.TextRange.TextRange(lineNumber, columnNumber, lineNumber, columnNumber + matchLength);
        return new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UILocationRange(this.uiSourceCode, range);
    }
    matchLabel(index) {
        return String(this.searchMatches[index].lineNumber + 1);
    }
    matchColumn(index) {
        return this.searchMatches[index].columnNumber;
    }
    matchLength(index) {
        return this.searchMatches[index].matchLength;
    }
}


/***/ })

}]);