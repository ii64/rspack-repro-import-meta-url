"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_search_SearchResultsPane_test_js"], {
"./panels/search/SearchResultsPane.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.js */ "./panels/search/search.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
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
function _templateObject() {
    var data = _tagged_template_literal([
        "       [    )"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "                [    )"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "      [    )"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "           [     )"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "           [     )"
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "            [   )"
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        "       [   )"
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        "                            [     )"
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = _tagged_template_literal([
        "      [     )"
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = _tagged_template_literal([
        "   [       )"
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject10() {
    var data = _tagged_template_literal([
        "[       )"
    ]);
    _templateObject10 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject11() {
    var data = _tagged_template_literal([
        "            [                                    )"
    ]);
    _templateObject11 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject12() {
    var data = _tagged_template_literal([
        "      [         )"
    ]);
    _templateObject12 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject13() {
    var data = _tagged_template_literal([
        "        [  )"
    ]);
    _templateObject13 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject14() {
    var data = _tagged_template_literal([
        "                                [  )"
    ]);
    _templateObject14 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject15() {
    var data = _tagged_template_literal([
        "                              [  )"
    ]);
    _templateObject15 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject16() {
    var data = _tagged_template_literal([
        "        [  )"
    ]);
    _templateObject16 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject17() {
    var data = _tagged_template_literal([
        "                                [  )"
    ]);
    _templateObject17 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject18() {
    var data = _tagged_template_literal([
        "                              [  )"
    ]);
    _templateObject18 = function _templateObject() {
        return data;
    };
    return data;
}




var lineSegmentForMatch = _search_js__WEBPACK_IMPORTED_MODULE_3__.SearchResultsPane.lineSegmentForMatch;
function r(matchDescriptor) {
    var start = matchDescriptor[0].indexOf('[');
    var end = matchDescriptor[0].indexOf(')');
    return new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextRange.SourceRange(start, end - start);
}
describe('lineSegmentForMatch', function() {
    it('is a no-op if for short lines with the match close to the start', function() {
        var lineContent = 'Just a short line';
        var matchRange = r(_templateObject());
        var _lineSegmentForMatch = lineSegmentForMatch(lineContent, matchRange), lineSegment = _lineSegmentForMatch.lineSegment, actualMRange = _lineSegmentForMatch.matchRange;
        assert.strictEqual(lineSegment, lineContent);
        assert.deepEqual(actualMRange, matchRange);
    });
    it('only shows {prefixLength} characters before the match with an ellipsis', function() {
        var lineContent = 'Just a somewhat short line';
        var matchRange = r(_templateObject1());
        var _lineSegmentForMatch = lineSegmentForMatch(lineContent, matchRange, {
            prefixLength: 5
        }), lineSegment = _lineSegmentForMatch.lineSegment, actualMRange = _lineSegmentForMatch.matchRange;
        assert.strictEqual(lineSegment, '…what short line');
        assert.deepEqual(actualMRange, r(_templateObject2()));
    });
    it('only shows {maxLength} characters (excluding prefix ellipsis)', function() {
        var lineContent = 'A somewhat longer line to demonstrate maxLength';
        var matchRange = r(_templateObject3());
        var _lineSegmentForMatch = lineSegmentForMatch(lineContent, matchRange, {
            maxLength: 22
        }), lineSegment = _lineSegmentForMatch.lineSegment, actualMRange = _lineSegmentForMatch.matchRange;
        assert.strictEqual(lineSegment, 'A somewhat longer line');
        assert.deepEqual(actualMRange, r(_templateObject4()));
    });
    it('trims whitespace at the beginning of the line', function() {
        var lineContent = '     A line with whitespace at the beginning';
        var matchRange = r(_templateObject5());
        var _lineSegmentForMatch = lineSegmentForMatch(lineContent, matchRange), lineSegment = _lineSegmentForMatch.lineSegment, actualMRange = _lineSegmentForMatch.matchRange;
        assert.strictEqual(lineSegment, 'A line with whitespace at the beginning');
        assert.deepEqual(actualMRange, r(_templateObject6()));
    });
    it('works with whitespace trimming and {prefixLength}', function() {
        var lineContent = '     A line with whitespace at the beginning';
        var matchRange = r(_templateObject7());
        var _lineSegmentForMatch = lineSegmentForMatch(lineContent, matchRange, {
            prefixLength: 5
        }), lineSegment = _lineSegmentForMatch.lineSegment, actualMRange = _lineSegmentForMatch.matchRange;
        assert.strictEqual(lineSegment, '…pace at the beginning');
        assert.deepEqual(actualMRange, r(_templateObject8()));
    });
    it('only trims whitespace until the match starts', function() {
        var lineContent = '     A line with whitespace at the beginning';
        var matchRange = r(_templateObject9());
        var _lineSegmentForMatch = lineSegmentForMatch(lineContent, matchRange), lineSegment = _lineSegmentForMatch.lineSegment, actualMRange = _lineSegmentForMatch.matchRange;
        assert.strictEqual(lineSegment, '  A line with whitespace at the beginning');
        assert.deepEqual(actualMRange, r(_templateObject10()));
    });
    it('it shortens the range to the end of the segment if the line was truncated (together with the match)', function() {
        var lineContent = 'A very very very long line with a very long match';
        var matchRange = r(_templateObject11());
        var _lineSegmentForMatch = lineSegmentForMatch(lineContent, matchRange, {
            prefixLength: 5,
            maxLength: 15
        }), lineSegment = _lineSegmentForMatch.lineSegment, actualMRange = _lineSegmentForMatch.matchRange;
        assert.strictEqual(lineSegment, '…very very long ');
        assert.deepEqual(actualMRange, r(_templateObject12()));
    });
});
var _label = /*#__PURE__*/ new WeakMap(), _description = /*#__PURE__*/ new WeakMap(), _matchDescriptors = /*#__PURE__*/ new WeakMap();
var FakeSearchResult = /*#__PURE__*/ function() {
    "use strict";
    function FakeSearchResult(label, description, matchDescriptors) {
        _class_call_check(this, FakeSearchResult);
        _class_private_field_init(this, _label, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _description, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _matchDescriptors, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _label, label);
        _class_private_field_set(this, _description, description);
        _class_private_field_set(this, _matchDescriptors, matchDescriptors);
    }
    _create_class(FakeSearchResult, [
        {
            key: "label",
            value: function label() {
                return _class_private_field_get(this, _label);
            }
        },
        {
            key: "description",
            value: function description() {
                return _class_private_field_get(this, _description);
            }
        },
        {
            key: "matchesCount",
            value: function matchesCount() {
                return _class_private_field_get(this, _matchDescriptors).length;
            }
        },
        {
            key: "matchLabel",
            value: function matchLabel(index) {
                return _class_private_field_get(this, _matchDescriptors)[index].lineNumber.toString();
            }
        },
        {
            key: "matchLineContent",
            value: function matchLineContent(index) {
                return _class_private_field_get(this, _matchDescriptors)[index].lineContent;
            }
        },
        {
            key: "matchRevealable",
            value: function matchRevealable() {
                return {};
            }
        },
        {
            key: "matchColumn",
            value: function matchColumn(index) {
                var _class_private_field_get_index_matchRange;
                return (_class_private_field_get_index_matchRange = _class_private_field_get(this, _matchDescriptors)[index].matchRange) === null || _class_private_field_get_index_matchRange === void 0 ? void 0 : _class_private_field_get_index_matchRange.offset;
            }
        },
        {
            key: "matchLength",
            value: function matchLength(index) {
                var _class_private_field_get_index_matchRange;
                return (_class_private_field_get_index_matchRange = _class_private_field_get(this, _matchDescriptors)[index].matchRange) === null || _class_private_field_get_index_matchRange === void 0 ? void 0 : _class_private_field_get_index_matchRange.length;
            }
        }
    ]);
    return FakeSearchResult;
}();
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithLocale)('SearchResultsPane', function() {
    it('shows one entry per line with matches when matchColumn/matchLength is NOT present', function() {
        var searchConfig = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.SearchConfig.SearchConfig('the', true, false);
        var resultPane = new _search_js__WEBPACK_IMPORTED_MODULE_3__.SearchResultsPane.SearchResultsPane(searchConfig);
        resultPane.addSearchResult(new FakeSearchResult('file.txt', 'file.txt', [
            {
                lineNumber: 10,
                lineContent: 'This is the line with multiple "the" matches'
            },
            {
                lineNumber: 15,
                lineContent: 'This is a line with only one "the" match'
            }
        ]));
        resultPane.showAllMatches();
        var matchSpans = resultPane['treeOutline'].shadowRoot.querySelectorAll('.search-match-content');
        assert.lengthOf(matchSpans, 2);
        assert.deepEqual(_to_consumable_array(matchSpans).map(function(span) {
            return span.textContent;
        }), [
            'This is the line with multiple "the" matches',
            '…with only one "the" match'
        ]);
    });
    it('shows one entry per match when matchColumn/matchLength is present', function() {
        var searchConfig = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.SearchConfig.SearchConfig('the', true, false);
        var resultPane = new _search_js__WEBPACK_IMPORTED_MODULE_3__.SearchResultsPane.SearchResultsPane(searchConfig);
        resultPane.addSearchResult(new FakeSearchResult('file.txt', 'file.txt', [
            {
                lineNumber: 10,
                lineContent: 'This is the line with multiple "the" matches',
                matchRange: r(_templateObject13())
            },
            {
                lineNumber: 10,
                lineContent: 'This is the line with multiple "the" matches',
                matchRange: r(_templateObject14())
            },
            {
                lineNumber: 15,
                lineContent: 'This is a line with only one "the" match',
                matchRange: r(_templateObject15())
            }
        ]));
        resultPane.showAllMatches();
        var matchSpans = resultPane['treeOutline'].shadowRoot.querySelectorAll('.search-match-content');
        assert.lengthOf(matchSpans, 3);
        assert.deepEqual(_to_consumable_array(matchSpans).map(function(span) {
            return span.textContent;
        }), [
            'This is the line with multiple "the" matches',
            '… the line with multiple "the" matches',
            '…is a line with only one "the" match'
        ]);
    });
    it('highlights all matches of a line when matchColumn/matchLength is NOT present', function() {
        var searchConfig = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.SearchConfig.SearchConfig('the', true, false);
        var resultPane = new _search_js__WEBPACK_IMPORTED_MODULE_3__.SearchResultsPane.SearchResultsPane(searchConfig);
        resultPane.addSearchResult(new FakeSearchResult('file.txt', 'file.txt', [
            {
                lineNumber: 10,
                lineContent: 'This is the line with multiple "the" matches'
            },
            {
                lineNumber: 15,
                lineContent: 'This is a line with only one "the" match'
            }
        ]));
        resultPane.showAllMatches();
        var matchSpans = resultPane['treeOutline'].shadowRoot.querySelectorAll('.highlighted-search-result');
        assert.lengthOf(matchSpans, 3);
        assert.deepEqual(_to_consumable_array(matchSpans).map(function(span) {
            return span.textContent;
        }), [
            'the',
            'the',
            'the'
        ]);
    });
    it('highlights only the specified match when matchColumn/matchLength is present', function() {
        var searchConfig = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.SearchConfig.SearchConfig('the', true, false);
        var resultPane = new _search_js__WEBPACK_IMPORTED_MODULE_3__.SearchResultsPane.SearchResultsPane(searchConfig);
        resultPane.addSearchResult(new FakeSearchResult('file.txt', 'file.txt', [
            {
                lineNumber: 10,
                lineContent: 'This is the line with multiple "the" matches',
                matchRange: r(_templateObject16())
            },
            {
                lineNumber: 10,
                lineContent: 'This is the line with multiple "the" matches',
                matchRange: r(_templateObject17())
            },
            {
                lineNumber: 15,
                lineContent: 'This is a line with only one "the" match',
                matchRange: r(_templateObject18())
            }
        ]));
        resultPane.showAllMatches();
        var matchSpans = resultPane['treeOutline'].shadowRoot.querySelectorAll('.search-match-content');
        assert.lengthOf(matchSpans, 3);
        assert.deepEqual(_to_consumable_array(matchSpans).map(function(span) {
            return span.innerHTML;
        }), [
            'This is <span class="highlighted-search-result">the</span> line with multiple "the" matches',
            '… the line with multiple "<span class="highlighted-search-result">the</span>" matches',
            '…is a line with only one "<span class="highlighted-search-result">the</span>" match'
        ]);
    });
}); //# sourceMappingURL=SearchResultsPane.test.js.map


}),
"./panels/search/SearchScope.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
 //# sourceMappingURL=SearchScope.js.map


}),
"./panels/search/search.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SearchResultsPane: function() { return /* reexport module object */ _SearchResultsPane_js__WEBPACK_IMPORTED_MODULE_0__; },
  SearchScope: function() { return /* reexport module object */ _SearchScope_js__WEBPACK_IMPORTED_MODULE_1__; },
  SearchView: function() { return /* reexport module object */ _SearchView_js__WEBPACK_IMPORTED_MODULE_2__; }
});
/* harmony import */var _SearchResultsPane_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchResultsPane.js */ "./panels/search/SearchResultsPane.js");
/* harmony import */var _SearchScope_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchScope.js */ "./panels/search/SearchScope.js");
/* harmony import */var _SearchView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchView.js */ "./panels/search/SearchView.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



 //# sourceMappingURL=search.js.map


}),

}]);