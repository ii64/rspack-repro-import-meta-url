"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_FilteredUISourceCodeListProvider_js"], {
"./panels/sources/FilePathScoreFunction.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  FilePathScoreFunction: function() { return FilePathScoreFunction; }
});
/*
 * Copyright (C) 2013 Google Inc. All rights reserved.
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
 */ function _class_call_check(instance, Constructor) {
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
var FilePathScoreFunction = /*#__PURE__*/ function() {
    "use strict";
    function FilePathScoreFunction(query) {
        _class_call_check(this, FilePathScoreFunction);
        _define_property(this, "query", void 0);
        _define_property(this, "queryUpperCase", void 0);
        _define_property(this, "score", void 0);
        _define_property(this, "sequence", void 0);
        _define_property(this, "dataUpperCase", void 0);
        _define_property(this, "fileNameIndex", void 0);
        this.query = query;
        this.queryUpperCase = query.toUpperCase();
        this.score = new Int32Array(20 * 100);
        this.sequence = new Int32Array(20 * 100);
        this.dataUpperCase = '';
        this.fileNameIndex = 0;
    }
    _create_class(FilePathScoreFunction, [
        {
            key: "calculateScore",
            value: function calculateScore(data, matchIndexes) {
                if (!data || !this.query) {
                    return 0;
                }
                var n = this.query.length;
                var m = data.length;
                if (!this.score || this.score.length < n * m) {
                    this.score = new Int32Array(n * m * 2);
                    this.sequence = new Int32Array(n * m * 2);
                }
                var score = this.score;
                var sequence = this.sequence;
                this.dataUpperCase = data.toUpperCase();
                this.fileNameIndex = data.lastIndexOf('/');
                for(var i = 0; i < n; ++i){
                    for(var j = 0; j < m; ++j){
                        var skipCharScore = j === 0 ? 0 : score[i * m + j - 1];
                        var prevCharScore = i === 0 || j === 0 ? 0 : score[(i - 1) * m + j - 1];
                        var consecutiveMatch = i === 0 || j === 0 ? 0 : sequence[(i - 1) * m + j - 1];
                        var pickCharScore = this.match(this.query, data, i, j, consecutiveMatch);
                        if (pickCharScore && prevCharScore + pickCharScore >= skipCharScore) {
                            sequence[i * m + j] = consecutiveMatch + 1;
                            score[i * m + j] = prevCharScore + pickCharScore;
                        } else {
                            sequence[i * m + j] = 0;
                            score[i * m + j] = skipCharScore;
                        }
                    }
                }
                if (matchIndexes) {
                    this.restoreMatchIndexes(sequence, n, m, matchIndexes);
                }
                var maxDataLength = 256;
                return score[n * m - 1] * maxDataLength + (maxDataLength - data.length);
            }
        },
        {
            key: "testWordStart",
            value: function testWordStart(data, j) {
                if (j === 0) {
                    return true;
                }
                var prevChar = data.charAt(j - 1);
                return prevChar === '_' || prevChar === '-' || prevChar === '/' || prevChar === '.' || prevChar === ' ' || data[j - 1] !== this.dataUpperCase[j - 1] && data[j] === this.dataUpperCase[j];
            }
        },
        {
            key: "restoreMatchIndexes",
            value: function restoreMatchIndexes(sequence, n, m, out) {
                var i = n - 1, j = m - 1;
                while(i >= 0 && j >= 0){
                    switch(sequence[i * m + j]){
                        case 0:
                            --j;
                            break;
                        default:
                            out.push(j);
                            --i;
                            --j;
                            break;
                    }
                }
                out.reverse();
            }
        },
        {
            key: "singleCharScore",
            value: function singleCharScore(query, data, i, j) {
                var isWordStart = this.testWordStart(data, j);
                var isFileName = j > this.fileNameIndex;
                var isPathTokenStart = j === 0 || data[j - 1] === '/';
                var isCapsMatch = query[i] === data[j] && query[i] === this.queryUpperCase[i];
                var score = 10;
                if (isPathTokenStart) {
                    score += 4;
                }
                if (isWordStart) {
                    score += 2;
                }
                if (isCapsMatch) {
                    score += 6;
                }
                if (isFileName) {
                    score += 4;
                }
                // promote the case of making the whole match in the filename
                if (j === this.fileNameIndex + 1 && i === 0) {
                    score += 5;
                }
                if (isFileName && isWordStart) {
                    score += 3;
                }
                return score;
            }
        },
        {
            key: "sequenceCharScore",
            value: function sequenceCharScore(query, data, i, j, sequenceLength) {
                var isFileName = j > this.fileNameIndex;
                var isPathTokenStart = j === 0 || data[j - 1] === '/';
                var score = 10;
                if (isFileName) {
                    score += 4;
                }
                if (isPathTokenStart) {
                    score += 5;
                }
                score += sequenceLength * 4;
                return score;
            }
        },
        {
            key: "match",
            value: function match(query, data, i, j, consecutiveMatch) {
                if (this.queryUpperCase[i] !== this.dataUpperCase[j]) {
                    return 0;
                }
                if (!consecutiveMatch) {
                    return this.singleCharScore(query, data, i, j);
                }
                return this.sequenceCharScore(query, data, i, j - consecutiveMatch, consecutiveMatch);
            }
        }
    ]);
    return FilePathScoreFunction;
} //# sourceMappingURL=FilePathScoreFunction.js.map
();


}),
"./panels/sources/FilteredUISourceCodeListProvider.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  FilteredUISourceCodeListProvider: function() { return FilteredUISourceCodeListProvider; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _ui_legacy_components_quick_open_quick_open_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/quick_open/quick_open.js */ "./ui/legacy/components/quick_open/quick_open.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _FilePathScoreFunction_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FilePathScoreFunction.js */ "./panels/sources/FilePathScoreFunction.js");
// Copyright 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}








var UIStrings = {
    /**
     *@description Text in Filtered UISource Code List Provider of the Sources panel
     */ noFilesFound: 'No files found',
    /**
     *@description Name of an item that is on the ignore list
     *@example {compile.html} PH1
     */ sIgnoreListed: '{PH1} (ignore listed)'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/sources/FilteredUISourceCodeListProvider.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var FilteredUISourceCodeListProvider = /*#__PURE__*/ function(_QuickOpen_FilteredListWidget_Provider) {
    "use strict";
    _inherits(FilteredUISourceCodeListProvider, _QuickOpen_FilteredListWidget_Provider);
    var _super = _create_super(FilteredUISourceCodeListProvider);
    function FilteredUISourceCodeListProvider(jslogContext) {
        _class_call_check(this, FilteredUISourceCodeListProvider);
        var _this;
        _this = _super.call(this, jslogContext);
        _define_property(_assert_this_initialized(_this), "queryLineNumberAndColumnNumber", void 0);
        _define_property(_assert_this_initialized(_this), "defaultScores", void 0);
        _define_property(_assert_this_initialized(_this), "scorer", void 0);
        _define_property(_assert_this_initialized(_this), "uiSourceCodes", void 0);
        _define_property(_assert_this_initialized(_this), "uiSourceCodeIds", void 0);
        _define_property(_assert_this_initialized(_this), "query", void 0);
        _this.queryLineNumberAndColumnNumber = '';
        _this.defaultScores = null;
        _this.scorer = new _FilePathScoreFunction_js__WEBPACK_IMPORTED_MODULE_7__.FilePathScoreFunction('');
        _this.uiSourceCodes = [];
        _this.uiSourceCodeIds = new Set();
        return _this;
    }
    _create_class(FilteredUISourceCodeListProvider, [
        {
            key: "projectRemoved",
            value: function projectRemoved(event) {
                var project = event.data;
                this.populate(project);
                this.refresh();
            }
        },
        {
            key: "populate",
            value: function populate(skipProject) {
                this.uiSourceCodes = [];
                this.uiSourceCodeIds.clear();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance().projects()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var project = _step.value;
                        if (project !== skipProject && this.filterProject(project)) {
                            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                            try {
                                for(var _iterator1 = project.uiSourceCodes()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                    var uiSourceCode = _step1.value;
                                    if (this.filterUISourceCode(uiSourceCode)) {
                                        this.uiSourceCodes.push(uiSourceCode);
                                        this.uiSourceCodeIds.add(uiSourceCode.canononicalScriptId());
                                    }
                                }
                            } catch (err) {
                                _didIteratorError1 = true;
                                _iteratorError1 = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                        _iterator1.return();
                                    }
                                } finally{
                                    if (_didIteratorError1) {
                                        throw _iteratorError1;
                                    }
                                }
                            }
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
            }
        },
        {
            key: "filterUISourceCode",
            value: function filterUISourceCode(uiSourceCode) {
                if (this.uiSourceCodeIds.has(uiSourceCode.canononicalScriptId())) {
                    return false;
                }
                if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.experiments.isEnabled("just-my-code" /* Root.Runtime.ExperimentName.JUST_MY_CODE */ ) && _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.IgnoreListManager.IgnoreListManager.instance().isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode)) {
                    return false;
                }
                if (uiSourceCode.isFetchXHR()) {
                    return false;
                }
                var binding = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_2__.Persistence.PersistenceImpl.instance().binding(uiSourceCode);
                return !binding || binding.fileSystem === uiSourceCode;
            }
        },
        {
            key: "uiSourceCodeSelected",
            value: function uiSourceCodeSelected(_uiSourceCode, _lineNumber, _columnNumber) {
            // Overridden by subclasses
            }
        },
        {
            key: "filterProject",
            value: function filterProject(_project) {
                return true;
            // Overridden by subclasses
            }
        },
        {
            key: "itemCount",
            value: function itemCount() {
                return this.uiSourceCodes.length;
            }
        },
        {
            key: "itemContentTypeAt",
            value: function itemContentTypeAt(itemIndex) {
                return this.uiSourceCodes[itemIndex].contentType();
            }
        },
        {
            key: "itemKeyAt",
            value: function itemKeyAt(itemIndex) {
                return this.uiSourceCodes[itemIndex].url();
            }
        },
        {
            key: "setDefaultScores",
            value: function setDefaultScores(defaultScores) {
                this.defaultScores = defaultScores;
            }
        },
        {
            key: "itemScoreAt",
            value: function itemScoreAt(itemIndex, query) {
                var uiSourceCode = this.uiSourceCodes[itemIndex];
                var score = this.defaultScores ? this.defaultScores.get(uiSourceCode) || 0 : 0;
                if (!query || query.length < 2) {
                    return score;
                }
                if (this.query !== query) {
                    this.query = query;
                    this.scorer = new _FilePathScoreFunction_js__WEBPACK_IMPORTED_MODULE_7__.FilePathScoreFunction(query);
                }
                var multiplier = 10;
                if (uiSourceCode.project().type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.projectTypes.FileSystem && !_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_2__.Persistence.PersistenceImpl.instance().binding(uiSourceCode)) {
                    multiplier = 5;
                }
                var contentTypeBonus = 0;
                if (uiSourceCode.contentType().isFromSourceMap() && !uiSourceCode.isKnownThirdParty()) {
                    contentTypeBonus = 100;
                }
                if (uiSourceCode.contentType().isScript()) {
                    // Bonus points for being a script if it is not ignore-listed. Note
                    // that ignore listing logic does not apply to non-scripts.
                    if (!_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.IgnoreListManager.IgnoreListManager.instance().isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode)) {
                        contentTypeBonus += 50;
                    }
                }
                var fullDisplayName = uiSourceCode.fullDisplayName();
                return score + multiplier * (contentTypeBonus + this.scorer.calculateScore(fullDisplayName, null));
            }
        },
        {
            key: "renderItem",
            value: function renderItem(itemIndex, query, titleElement, subtitleElement) {
                query = this.rewriteQuery(query);
                var uiSourceCode = this.uiSourceCodes[itemIndex];
                var fullDisplayName = uiSourceCode.fullDisplayName();
                var indexes = [];
                new _FilePathScoreFunction_js__WEBPACK_IMPORTED_MODULE_7__.FilePathScoreFunction(query).calculateScore(fullDisplayName, indexes);
                var fileNameIndex = fullDisplayName.lastIndexOf('/');
                var isIgnoreListed = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.IgnoreListManager.IgnoreListManager.instance().isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode);
                var tooltipText = fullDisplayName;
                if (isIgnoreListed) {
                    var _titleElement_parentElement;
                    (_titleElement_parentElement = titleElement.parentElement) === null || _titleElement_parentElement === void 0 ? void 0 : _titleElement_parentElement.classList.add('is-ignore-listed');
                    tooltipText = i18nString(UIStrings.sIgnoreListed, {
                        PH1: tooltipText
                    });
                }
                titleElement.textContent = uiSourceCode.displayName() + (this.queryLineNumberAndColumnNumber || '');
                this.renderSubtitleElement(subtitleElement, fullDisplayName.substring(0, fileNameIndex + 1));
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install(subtitleElement, tooltipText);
                var ranges = [];
                for(var i = 0; i < indexes.length; ++i){
                    ranges.push({
                        offset: indexes[i],
                        length: 1
                    });
                }
                if (indexes[0] > fileNameIndex) {
                    for(var i1 = 0; i1 < ranges.length; ++i1){
                        ranges[i1].offset -= fileNameIndex + 1;
                    }
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.highlightRangesWithStyleClass(titleElement, ranges, 'highlight');
                } else {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.highlightRangesWithStyleClass(subtitleElement, ranges, 'highlight');
                }
            }
        },
        {
            key: "renderSubtitleElement",
            value: function renderSubtitleElement(element, text) {
                element.removeChildren();
                var splitPosition = text.lastIndexOf('/');
                var maxTextLength = 43;
                if (text.length > maxTextLength) {
                    splitPosition = text.length - maxTextLength;
                }
                var first = element.createChild('div', 'first-part');
                first.textContent = text.substring(0, splitPosition);
                var second = element.createChild('div', 'second-part');
                second.textContent = text.substring(splitPosition);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install(element, text);
            }
        },
        {
            key: "selectItem",
            value: function selectItem(itemIndex, promptValue) {
                var parsedExpression = promptValue.trim().match(/^([^:]*)(:\d+)?(:\d+)?$/);
                if (!parsedExpression) {
                    return;
                }
                var lineNumber;
                var columnNumber;
                if (parsedExpression[2]) {
                    lineNumber = parseInt(parsedExpression[2].substr(1), 10) - 1;
                }
                if (parsedExpression[3]) {
                    columnNumber = parseInt(parsedExpression[3].substr(1), 10) - 1;
                }
                var uiSourceCode = itemIndex !== null ? this.uiSourceCodes[itemIndex] : null;
                this.uiSourceCodeSelected(uiSourceCode, lineNumber, columnNumber);
            }
        },
        {
            key: "rewriteQuery",
            value: function rewriteQuery(query) {
                query = query ? query.trim() : '';
                if (!query || query === ':') {
                    return '';
                }
                var lineNumberMatch = query.match(/^([^:]+)((?::[^:]*){0,2})$/);
                this.queryLineNumberAndColumnNumber = lineNumberMatch ? lineNumberMatch[2] : '';
                return lineNumberMatch ? lineNumberMatch[1] : query;
            }
        },
        {
            key: "uiSourceCodeAdded",
            value: function uiSourceCodeAdded(event) {
                var uiSourceCode = event.data;
                if (!this.filterUISourceCode(uiSourceCode) || !this.filterProject(uiSourceCode.project())) {
                    return;
                }
                this.uiSourceCodes.push(uiSourceCode);
                this.uiSourceCodeIds.add(uiSourceCode.canononicalScriptId());
                this.refresh();
            }
        },
        {
            key: "notFoundText",
            value: function notFoundText() {
                return i18nString(UIStrings.noFilesFound);
            }
        },
        {
            key: "attach",
            value: function attach() {
                _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance().addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.Events.UISourceCodeAdded, this.uiSourceCodeAdded, this);
                _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance().addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.Events.ProjectRemoved, this.projectRemoved, this);
                this.populate();
            }
        },
        {
            key: "detach",
            value: function detach() {
                _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance().removeEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.Events.UISourceCodeAdded, this.uiSourceCodeAdded, this);
                _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance().removeEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.Events.ProjectRemoved, this.projectRemoved, this);
                this.queryLineNumberAndColumnNumber = '';
                this.defaultScores = null;
            }
        }
    ]);
    return FilteredUISourceCodeListProvider;
} //# sourceMappingURL=FilteredUISourceCodeListProvider.js.map
(_ui_legacy_components_quick_open_quick_open_js__WEBPACK_IMPORTED_MODULE_5__.FilteredListWidget.Provider);


}),

}]);