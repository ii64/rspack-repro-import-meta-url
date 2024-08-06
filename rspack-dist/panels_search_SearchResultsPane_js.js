"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_search_SearchResultsPane_js"], {
"./panels/search/SearchResultsPane.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SearchResultsPane: function() { return SearchResultsPane; },
  SearchResultsTreeElement: function() { return SearchResultsTreeElement; },
  lineSegmentForMatch: function() { return lineSegmentForMatch; },
  matchesExpandedByDefault: function() { return matchesExpandedByDefault; },
  matchesShownAtOnce: function() { return matchesShownAtOnce; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _searchResultsPane_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searchResultsPane.css.js */ "./panels/search/searchResultsPane.css.js");
// Copyright 2014 The Chromium Authors. All rights reserved.
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
     *@description Accessibility label for number of matches in each file in search results pane
     *@example {2} PH1
     */ matchesCountS: 'Matches Count {PH1}',
    /**
     *@description Search result label for results in the Search tool
     *@example {2} PH1
     */ lineS: 'Line {PH1}',
    /**
     *@description Text in Search Results Pane of the Search tab
     *@example {2} PH1
     */ showDMore: 'Show {PH1} more'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/search/SearchResultsPane.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var SearchResultsPane = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(SearchResultsPane, _UI_Widget_VBox);
    var _super = _create_super(SearchResultsPane);
    function SearchResultsPane(searchConfig) {
        _class_call_check(this, SearchResultsPane);
        var _this;
        _this = _super.call(this, true);
        _define_property(_assert_this_initialized(_this), "searchConfig", void 0);
        _define_property(_assert_this_initialized(_this), "searchResults", void 0);
        _define_property(_assert_this_initialized(_this), "treeElements", void 0);
        _define_property(_assert_this_initialized(_this), "treeOutline", void 0);
        _define_property(_assert_this_initialized(_this), "matchesExpandedCount", void 0);
        _this.searchConfig = searchConfig;
        _this.searchResults = [];
        _this.treeElements = [];
        _this.treeOutline = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.TreeOutline.TreeOutlineInShadow();
        _this.treeOutline.hideOverflow();
        _this.contentElement.appendChild(_this.treeOutline.element);
        _this.matchesExpandedCount = 0;
        return _this;
    }
    _create_class(SearchResultsPane, [
        {
            key: "addSearchResult",
            value: function addSearchResult(searchResult) {
                this.searchResults.push(searchResult);
                this.addTreeElement(searchResult);
            }
        },
        {
            key: "showAllMatches",
            value: function showAllMatches() {
                this.treeElements.forEach(function(treeElement) {
                    treeElement.expand();
                    treeElement.showAllMatches();
                });
            }
        },
        {
            key: "collapseAllResults",
            value: function collapseAllResults() {
                this.treeElements.forEach(function(treeElement) {
                    treeElement.collapse();
                });
            }
        },
        {
            key: "addTreeElement",
            value: function addTreeElement(searchResult) {
                var treeElement = new SearchResultsTreeElement(this.searchConfig, searchResult);
                this.treeOutline.appendChild(treeElement);
                if (!this.treeOutline.selectedTreeElement) {
                    treeElement.select(/* omitFocus */ true, /* selectedByUser */ true);
                }
                // Expand until at least a certain number of matches is expanded.
                if (this.matchesExpandedCount < matchesExpandedByDefault) {
                    treeElement.expand();
                }
                this.matchesExpandedCount += searchResult.matchesCount();
                this.treeElements.push(treeElement);
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(SearchResultsPane.prototype), "wasShown", this).call(this);
                this.treeOutline.registerCSSFiles([
                    _searchResultsPane_css_js__WEBPACK_IMPORTED_MODULE_6__["default"]
                ]);
            }
        }
    ]);
    return SearchResultsPane;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox);
var matchesExpandedByDefault = 200;
var matchesShownAtOnce = 20;
var SearchResultsTreeElement = /*#__PURE__*/ function(_UI_TreeOutline_TreeElement) {
    "use strict";
    _inherits(SearchResultsTreeElement, _UI_TreeOutline_TreeElement);
    var _super = _create_super(SearchResultsTreeElement);
    function SearchResultsTreeElement(searchConfig, searchResult) {
        _class_call_check(this, SearchResultsTreeElement);
        var _this;
        _this = _super.call(this, '', true);
        _define_property(_assert_this_initialized(_this), "searchConfig", void 0);
        _define_property(_assert_this_initialized(_this), "searchResult", void 0);
        _define_property(_assert_this_initialized(_this), "initialized", void 0);
        _define_property(_assert_this_initialized(_this), "toggleOnClick", void 0);
        _this.searchConfig = searchConfig;
        _this.searchResult = searchResult;
        _this.initialized = false;
        _this.toggleOnClick = true;
        return _this;
    }
    _create_class(SearchResultsTreeElement, [
        {
            key: "onexpand",
            value: function onexpand() {
                if (this.initialized) {
                    return;
                }
                this.updateMatchesUI();
                this.initialized = true;
            }
        },
        {
            key: "showAllMatches",
            value: function showAllMatches() {
                this.removeChildren();
                this.appendSearchMatches(0, this.searchResult.matchesCount());
            }
        },
        {
            key: "updateMatchesUI",
            value: function updateMatchesUI() {
                this.removeChildren();
                var toIndex = Math.min(this.searchResult.matchesCount(), matchesShownAtOnce);
                if (toIndex < this.searchResult.matchesCount()) {
                    this.appendSearchMatches(0, toIndex - 1);
                    this.appendShowMoreMatchesElement(toIndex - 1);
                } else {
                    this.appendSearchMatches(0, toIndex);
                }
            }
        },
        {
            key: "onattach",
            value: function onattach() {
                this.updateSearchMatches();
            }
        },
        {
            key: "updateSearchMatches",
            value: function updateSearchMatches() {
                this.listItemElement.classList.add('search-result');
                var fileNameSpan = span(this.searchResult.label(), 'search-result-file-name');
                fileNameSpan.appendChild(span('\u2014', 'search-result-dash'));
                fileNameSpan.appendChild(span(this.searchResult.description(), 'search-result-qualifier'));
                this.tooltip = this.searchResult.description();
                this.listItemElement.appendChild(fileNameSpan);
                var matchesCountSpan = document.createElement('span');
                matchesCountSpan.className = 'search-result-matches-count';
                matchesCountSpan.textContent = "".concat(this.searchResult.matchesCount());
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(matchesCountSpan, i18nString(UIStrings.matchesCountS, {
                    PH1: this.searchResult.matchesCount()
                }));
                this.listItemElement.appendChild(matchesCountSpan);
                if (this.expanded) {
                    this.updateMatchesUI();
                }
                function span(text, className) {
                    var _$span = document.createElement('span');
                    _$span.className = className;
                    _$span.textContent = text;
                    return _$span;
                }
            }
        },
        {
            key: "appendSearchMatches",
            value: function appendSearchMatches(fromIndex, toIndex) {
                var _this, _loop = function(i1) {
                    var lineContent = searchResult.matchLineContent(i1);
                    var matchRanges = [];
                    // Searching in scripts and network response bodies produces one result entry per match. We can skip re-doing the
                    // search since we have the exact match range.
                    // For matches found in headers or the request URL we re-do the search to find all match ranges.
                    var column = searchResult.matchColumn(i1);
                    var matchLength = searchResult.matchLength(i1);
                    if (column !== undefined && matchLength !== undefined) {
                        var _lineSegmentForMatch = lineSegmentForMatch(lineContent, new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__.TextRange.SourceRange(column, matchLength)), matchRange = _lineSegmentForMatch.matchRange, lineSegment = _lineSegmentForMatch.lineSegment;
                        lineContent = lineSegment;
                        matchRanges = [
                            matchRange
                        ];
                    } else {
                        lineContent = lineContent.trim();
                        for(var j = 0; j < regexes.length; ++j){
                            matchRanges = matchRanges.concat(_this.regexMatchRanges(lineContent, regexes[j]));
                        }
                        var ref;
                        ref = lineSegmentForMultipleMatches(lineContent, matchRanges), lineContent = ref.lineSegment, matchRanges = ref.matchRanges, ref;
                    }
                    var anchor = _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.Linkifier.Linkifier.linkifyRevealable(searchResult.matchRevealable(i1), '', undefined, undefined, undefined, 'search-match');
                    anchor.classList.add('search-match-link');
                    anchor.tabIndex = 0;
                    var labelSpan = document.createElement('span');
                    labelSpan.classList.add('search-match-line-number');
                    var resultLabel = searchResult.matchLabel(i1);
                    labelSpan.textContent = resultLabel;
                    if (typeof resultLabel === 'number' && !isNaN(resultLabel)) {
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(labelSpan, i18nString(UIStrings.lineS, {
                            PH1: resultLabel
                        }));
                    } else {
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(labelSpan, resultLabel);
                    }
                    anchor.appendChild(labelSpan);
                    var contentSpan = _this.createContentSpan(lineContent, matchRanges);
                    anchor.appendChild(contentSpan);
                    var searchMatchElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.TreeOutline.TreeElement();
                    _this.appendChild(searchMatchElement);
                    searchMatchElement.listItemElement.className = 'search-match';
                    searchMatchElement.listItemElement.appendChild(anchor);
                    searchMatchElement.listItemElement.addEventListener('keydown', function(event) {
                        if (event.key === 'Enter') {
                            event.consume(true);
                            void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(searchResult.matchRevealable(i1));
                        }
                    });
                    searchMatchElement.tooltip = lineContent;
                };
                var searchResult = this.searchResult;
                var queries = this.searchConfig.queries();
                var regexes = [];
                for(var i = 0; i < queries.length; ++i){
                    regexes.push(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.createSearchRegex(queries[i], !this.searchConfig.ignoreCase(), this.searchConfig.isRegex()));
                }
                for(var i1 = fromIndex; i1 < toIndex; ++i1)_this = this, _loop(i1);
            }
        },
        {
            key: "appendShowMoreMatchesElement",
            value: function appendShowMoreMatchesElement(startMatchIndex) {
                var matchesLeftCount = this.searchResult.matchesCount() - startMatchIndex;
                var showMoreMatchesText = i18nString(UIStrings.showDMore, {
                    PH1: matchesLeftCount
                });
                var showMoreMatchesTreeElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.TreeOutline.TreeElement(showMoreMatchesText);
                this.appendChild(showMoreMatchesTreeElement);
                showMoreMatchesTreeElement.listItemElement.classList.add('show-more-matches');
                showMoreMatchesTreeElement.onselect = this.showMoreMatchesElementSelected.bind(this, showMoreMatchesTreeElement, startMatchIndex);
            }
        },
        {
            key: "createContentSpan",
            value: function createContentSpan(lineContent, matchRanges) {
                var contentSpan = document.createElement('span');
                contentSpan.className = 'search-match-content';
                contentSpan.textContent = lineContent;
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(contentSpan, "".concat(lineContent, " line"));
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.highlightRangesWithStyleClass(contentSpan, matchRanges, 'highlighted-search-result');
                return contentSpan;
            }
        },
        {
            key: "regexMatchRanges",
            value: function regexMatchRanges(lineContent, regex) {
                regex.lastIndex = 0;
                var match;
                var matchRanges = [];
                while(regex.lastIndex < lineContent.length && (match = regex.exec(lineContent))){
                    matchRanges.push(new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__.TextRange.SourceRange(match.index, match[0].length));
                }
                return matchRanges;
            }
        },
        {
            key: "showMoreMatchesElementSelected",
            value: function showMoreMatchesElementSelected(showMoreMatchesTreeElement, startMatchIndex) {
                this.removeChild(showMoreMatchesTreeElement);
                this.appendSearchMatches(startMatchIndex, this.searchResult.matchesCount());
                return false;
            }
        }
    ]);
    return SearchResultsTreeElement;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.TreeOutline.TreeElement);
var DEFAULT_OPTS = {
    prefixLength: 25,
    maxLength: 1000
};
/**
 * Takes a whole line and calculates the substring we want to actually display in the UI.
 * Also returns a translated {matchRange} (the parameter is relative to {lineContent} but the
 * caller needs it relative to {lineSegment}).
 *
 * {lineContent} is modified in the following way:
 *
 *   * Whitespace is trimmed from the beginning (unless the match includes it).
 *   * We only leave {options.prefixLength} characters before the match (and add an ellipsis in
 *     case we removed anything)
 *   * Truncate the remainder to {options.maxLength} characters.
 */ function lineSegmentForMatch(lineContent, range) {
    var optionsArg = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : DEFAULT_OPTS;
    var options = _object_spread({}, DEFAULT_OPTS, optionsArg);
    // Remove the whitespace at the beginning, but stop where the match starts.
    var attemptedTrimmedLine = lineContent.trimStart();
    var potentiallyRemovedWhitespaceLength = lineContent.length - attemptedTrimmedLine.length;
    var actuallyRemovedWhitespaceLength = Math.min(range.offset, potentiallyRemovedWhitespaceLength);
    // Apply {options.prefixLength} and {options.maxLength}.
    var lineSegmentBegin = Math.max(actuallyRemovedWhitespaceLength, range.offset - options.prefixLength);
    var lineSegmentEnd = Math.min(lineContent.length, lineSegmentBegin + options.maxLength);
    var lineSegmentPrefix = lineSegmentBegin > actuallyRemovedWhitespaceLength ? '…' : '';
    // Build the resulting line segment and match range.
    var lineSegment = lineSegmentPrefix + lineContent.substring(lineSegmentBegin, lineSegmentEnd);
    var rangeOffset = range.offset - lineSegmentBegin + lineSegmentPrefix.length;
    var rangeLength = Math.min(range.length, lineSegment.length - rangeOffset);
    var matchRange = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__.TextRange.SourceRange(rangeOffset, rangeLength);
    return {
        lineSegment: lineSegment,
        matchRange: matchRange
    };
}
/**
 * Takes a line and multiple match ranges and trims/cuts the line accordingly.
 * The match ranges are then adjusted to reflect the transformation.
 *
 * Ideally prefer `lineSegmentForMatch`, it can center the line on the match
 * whereas this method risks cutting matches out of the string.
 */ function lineSegmentForMultipleMatches(lineContent, ranges) {
    var trimBy = 0;
    var matchRanges = ranges;
    if (matchRanges.length > 0 && matchRanges[0].offset > 20) {
        trimBy = 15;
    }
    var lineSegment = lineContent.substring(trimBy, 1000 + trimBy);
    if (trimBy) {
        matchRanges = matchRanges.map(function(range) {
            return new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__.TextRange.SourceRange(range.offset - trimBy + 1, range.length);
        });
        lineSegment = '…' + lineSegment;
    }
    return {
        lineSegment: lineSegment,
        matchRanges: matchRanges
    };
} //# sourceMappingURL=SearchResultsPane.js.map


}),
"./panels/search/searchResultsPane.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2016 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  padding: 0;\n  margin: 0;\n  overflow-y: auto;\n}\n\n.tree-outline {\n  padding: 0;\n}\n\n.tree-outline ol {\n  padding: 0;\n}\n\n.tree-outline li {\n  height: 16px;\n}\n\nli.search-result {\n  cursor: pointer;\n  font-size: 12px;\n  margin-top: 8px;\n  padding: 2px 0 2px 4px;\n  word-wrap: normal;\n  white-space: pre;\n}\n\nli.search-result:hover {\n  background-color: var(--sys-color-state-hover-on-subtle);\n}\n\nli.search-result .search-result-file-name {\n  color: var(--sys-color-on-surface);\n  flex: 1 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\nli.search-result .search-result-matches-count {\n  color: var(--sys-color-token-subtle);\n  margin: 0 8px;\n}\n\nli.search-result.expanded .search-result-matches-count {\n  display: none;\n}\n\nli.show-more-matches {\n  color: var(--sys-color-on-surface);\n  cursor: pointer;\n  margin: 8px 0 0 -4px;\n}\n\nli.show-more-matches:hover {\n  text-decoration: underline;\n}\n\nli.search-match {\n  margin: 2px 0;\n  word-wrap: normal;\n  white-space: pre;\n}\n\nli.search-match.selected:focus-visible {\n  background: var(--sys-color-tonal-container);\n}\n\nli.search-match::before {\n  display: none;\n}\n\nli.search-match .search-match-line-number {\n  color: var(--sys-color-token-subtle);\n  text-align: right;\n  vertical-align: top;\n  word-break: normal;\n  padding: 2px 4px 2px 6px;\n  margin-right: 5px;\n}\n\n.tree-outline .devtools-link {\n  text-decoration: none;\n  display: block;\n  flex: auto;\n}\n\nli.search-match .search-match-content {\n  color: var(--sys-color-on-surface);\n}\n\nol.children.expanded {\n  padding-bottom: 4px;\n}\n\nli.search-match .link-style.search-match-link {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-left: 9px;\n  text-align: left;\n}\n\n.search-result-qualifier {\n  color: var(--sys-color-token-subtle);\n}\n\n.search-result-dash {\n  color: var(--sys-color-surface-variant);\n  margin: 0 4px;\n}\n\n/*# sourceURL=searchResultsPane.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);