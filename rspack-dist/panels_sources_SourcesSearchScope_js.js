"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_SourcesSearchScope_js"], {
"./panels/sources/SourcesSearchScope.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  FileBasedSearchResult: function() { return FileBasedSearchResult; },
  SourcesSearchScope: function() { return SourcesSearchScope; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
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
 */ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}






var SourcesSearchScope = /*#__PURE__*/ function() {
    "use strict";
    function SourcesSearchScope() {
        _class_call_check(this, SourcesSearchScope);
        _define_property(this, "searchId", void 0);
        _define_property(this, "searchResultCandidates", void 0);
        _define_property(this, "searchResultCallback", void 0);
        _define_property(this, "searchFinishedCallback", void 0);
        _define_property(this, "searchConfig", void 0);
        // FIXME: Add title once it is used by search controller.
        this.searchId = 0;
        this.searchResultCandidates = [];
        this.searchResultCallback = null;
        this.searchFinishedCallback = null;
        this.searchConfig = null;
    }
    _create_class(SourcesSearchScope, [
        {
            key: "performIndexing",
            value: function performIndexing(progress) {
                this.stopSearch();
                var projects = this.projects();
                var compositeProgress = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Progress.CompositeProgress(progress);
                for(var i = 0; i < projects.length; ++i){
                    var project = projects[i];
                    var projectProgress = compositeProgress.createSubProgress(_to_consumable_array(project.uiSourceCodes()).length);
                    project.indexContent(projectProgress);
                }
            }
        },
        {
            key: "projects",
            value: function projects() {
                var searchInAnonymousAndContentScripts = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('search-in-anonymous-and-content-scripts').get();
                return _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance().projects().filter(function(project) {
                    if (project.type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.projectTypes.Service) {
                        return false;
                    }
                    if (!searchInAnonymousAndContentScripts && project.isServiceProject() && project.type() !== _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.projectTypes.Formatter) {
                        return false;
                    }
                    if (!searchInAnonymousAndContentScripts && project.type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.projectTypes.ContentScripts) {
                        return false;
                    }
                    return true;
                });
            }
        },
        {
            key: "performSearch",
            value: function performSearch(searchConfig, progress, searchResultCallback, searchFinishedCallback) {
                this.stopSearch();
                this.searchResultCandidates = [];
                this.searchResultCallback = searchResultCallback;
                this.searchFinishedCallback = searchFinishedCallback;
                this.searchConfig = searchConfig;
                var promises = [];
                var compositeProgress = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Progress.CompositeProgress(progress);
                var searchContentProgress = compositeProgress.createSubProgress();
                var findMatchingFilesProgress = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Progress.CompositeProgress(compositeProgress.createSubProgress());
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.projects()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var project = _step.value;
                        var weight = _to_consumable_array(project.uiSourceCodes()).length;
                        var findMatchingFilesInProjectProgress = findMatchingFilesProgress.createSubProgress(weight);
                        var filesMatchingFileQuery = this.projectFilesMatchingFileQuery(project, searchConfig);
                        var promise = project.findFilesMatchingSearchRequest(searchConfig, filesMatchingFileQuery, findMatchingFilesInProjectProgress).then(this.processMatchingFilesForProject.bind(this, this.searchId, project, searchConfig, filesMatchingFileQuery));
                        promises.push(promise);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                void Promise.all(promises).then(this.processMatchingFiles.bind(this, this.searchId, searchContentProgress, this.searchFinishedCallback.bind(this, true)));
            }
        },
        {
            key: "projectFilesMatchingFileQuery",
            value: function projectFilesMatchingFileQuery(project, searchConfig, dirtyOnly) {
                var result = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = project.uiSourceCodes()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var uiSourceCode = _step.value;
                        if (!uiSourceCode.contentType().isTextType()) {
                            continue;
                        }
                        if (_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.IgnoreListManager.IgnoreListManager.instance().isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode)) {
                            continue;
                        }
                        var binding = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.Persistence.PersistenceImpl.instance().binding(uiSourceCode);
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
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                result.sort(SourcesSearchScope.urlComparator);
                return result;
            }
        },
        {
            key: "processMatchingFilesForProject",
            value: function processMatchingFilesForProject(searchId, project, searchConfig, filesMatchingFileQuery, filesWithPreliminaryResult) {
                if (searchId !== this.searchId && this.searchFinishedCallback) {
                    this.searchFinishedCallback(false);
                    return;
                }
                var files = _to_consumable_array(filesWithPreliminaryResult.keys());
                files.sort(SourcesSearchScope.urlComparator);
                files = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.ArrayUtilities.intersectOrdered(files, filesMatchingFileQuery, SourcesSearchScope.urlComparator);
                var dirtyFiles = this.projectFilesMatchingFileQuery(project, searchConfig, true);
                files = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.ArrayUtilities.mergeOrdered(files, dirtyFiles, SourcesSearchScope.urlComparator);
                var uiSourceCodes = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var uiSourceCode = _step.value;
                        var script = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DefaultScriptMapping.DefaultScriptMapping.scriptForUISourceCode(uiSourceCode);
                        if (script && !script.isAnonymousScript()) {
                            continue;
                        }
                        uiSourceCodes.push(uiSourceCode);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                uiSourceCodes.sort(SourcesSearchScope.filesComparator);
                this.searchResultCandidates = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.ArrayUtilities.mergeOrdered(this.searchResultCandidates, uiSourceCodes, SourcesSearchScope.filesComparator);
            }
        },
        {
            key: "processMatchingFiles",
            value: function processMatchingFiles(searchId, progress, callback) {
                if (searchId !== this.searchId && this.searchFinishedCallback) {
                    this.searchFinishedCallback(false);
                    return;
                }
                var files = this.searchResultCandidates;
                if (!files.length) {
                    progress.done();
                    callback();
                    return;
                }
                progress.setTotalWork(files.length);
                var fileIndex = 0;
                var maxFileContentRequests = 20;
                var callbacksLeft = 0;
                for(var i = 0; i < maxFileContentRequests && i < files.length; ++i){
                    scheduleSearchInNextFileOrFinish.call(this);
                }
                function searchInNextFile(uiSourceCode) {
                    var _this = this;
                    if (uiSourceCode.isDirty()) {
                        contentLoaded.call(this, uiSourceCode, uiSourceCode.workingCopy());
                    } else {
                        void uiSourceCode.requestContent().then(function(deferredContent) {
                            contentLoaded.call(_this, uiSourceCode, deferredContent.content || '');
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
                    var uiSourceCode = files[fileIndex++];
                    window.setTimeout(searchInNextFile.bind(this, uiSourceCode), 0);
                }
                function contentLoaded(uiSourceCode, content) {
                    progress.incrementWorked(1);
                    var matches = [];
                    var searchConfig = this.searchConfig;
                    var queries = searchConfig.queries();
                    if (content !== null) {
                        for(var i = 0; i < queries.length; ++i){
                            var nextMatches = _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.TextUtils.performSearchInContent(content, queries[i], !searchConfig.ignoreCase(), searchConfig.isRegex());
                            matches = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.ArrayUtilities.mergeOrdered(matches, nextMatches, _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.ContentProvider.SearchMatch.comparator);
                        }
                        if (!searchConfig.queries().length) {
                            matches = [
                                new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.ContentProvider.SearchMatch(0, new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.Text.Text(content).lineAt(0), 0, 0)
                            ];
                        }
                    }
                    if (matches && this.searchResultCallback) {
                        var searchResult = new FileBasedSearchResult(uiSourceCode, matches);
                        this.searchResultCallback(searchResult);
                    }
                    --callbacksLeft;
                    scheduleSearchInNextFileOrFinish.call(this);
                }
            }
        },
        {
            key: "stopSearch",
            value: function stopSearch() {
                ++this.searchId;
            }
        }
    ], [
        {
            key: "filesComparator",
            value: function filesComparator(uiSourceCode1, uiSourceCode2) {
                if (uiSourceCode1.isDirty() && !uiSourceCode2.isDirty()) {
                    return -1;
                }
                if (!uiSourceCode1.isDirty() && uiSourceCode2.isDirty()) {
                    return 1;
                }
                var isFileSystem1 = uiSourceCode1.project().type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.projectTypes.FileSystem && !_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.Persistence.PersistenceImpl.instance().binding(uiSourceCode1);
                var isFileSystem2 = uiSourceCode2.project().type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.projectTypes.FileSystem && !_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.Persistence.PersistenceImpl.instance().binding(uiSourceCode2);
                if (isFileSystem1 !== isFileSystem2) {
                    return isFileSystem1 ? 1 : -1;
                }
                var url1 = uiSourceCode1.url();
                var url2 = uiSourceCode2.url();
                if (url1 && !url2) {
                    return -1;
                }
                if (!url1 && url2) {
                    return 1;
                }
                return _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.naturalOrderComparator(uiSourceCode1.fullDisplayName(), uiSourceCode2.fullDisplayName());
            }
        },
        {
            key: "urlComparator",
            value: function urlComparator(uiSourceCode1, uiSourceCode2) {
                return _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.naturalOrderComparator(uiSourceCode1.url(), uiSourceCode2.url());
            }
        }
    ]);
    return SourcesSearchScope;
}();
var FileBasedSearchResult = /*#__PURE__*/ function() {
    "use strict";
    function FileBasedSearchResult(uiSourceCode, searchMatches) {
        _class_call_check(this, FileBasedSearchResult);
        _define_property(this, "uiSourceCode", void 0);
        _define_property(this, "searchMatches", void 0);
        this.uiSourceCode = uiSourceCode;
        this.searchMatches = searchMatches;
    }
    _create_class(FileBasedSearchResult, [
        {
            key: "label",
            value: function label() {
                return this.uiSourceCode.displayName();
            }
        },
        {
            key: "description",
            value: function description() {
                return this.uiSourceCode.fullDisplayName();
            }
        },
        {
            key: "matchesCount",
            value: function matchesCount() {
                return this.searchMatches.length;
            }
        },
        {
            key: "matchLineContent",
            value: function matchLineContent(index) {
                return this.searchMatches[index].lineContent;
            }
        },
        {
            key: "matchRevealable",
            value: function matchRevealable(index) {
                var _this_searchMatches_index = this.searchMatches[index], lineNumber = _this_searchMatches_index.lineNumber, columnNumber = _this_searchMatches_index.columnNumber, matchLength = _this_searchMatches_index.matchLength;
                var range = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.TextRange.TextRange(lineNumber, columnNumber, lineNumber, columnNumber + matchLength);
                return new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UILocationRange(this.uiSourceCode, range);
            }
        },
        {
            key: "matchLabel",
            value: function matchLabel(index) {
                return String(this.searchMatches[index].lineNumber + 1);
            }
        },
        {
            key: "matchColumn",
            value: function matchColumn(index) {
                return this.searchMatches[index].columnNumber;
            }
        },
        {
            key: "matchLength",
            value: function matchLength(index) {
                return this.searchMatches[index].matchLength;
            }
        }
    ]);
    return FileBasedSearchResult;
} //# sourceMappingURL=SourcesSearchScope.js.map
();


}),

}]);