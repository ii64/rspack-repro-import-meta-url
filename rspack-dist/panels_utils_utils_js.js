"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_utils_utils_js"], {
"./panels/utils/utils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PanelUtils: function() { return PanelUtils; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _models_formatter_formatter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/formatter/formatter.js */ "./models/formatter/formatter.js");
/* harmony import */var _ui_components_diff_view_diff_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/diff_view/diff_view.js */ "./ui/components/diff_view/diff_view.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
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
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
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
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}



// These utilities are packaged in a class to allow unittests to stub or spy the implementation.
var PanelUtils = /*#__PURE__*/ function() {
    "use strict";
    function PanelUtils() {
        _class_call_check(this, PanelUtils);
    }
    _create_class(PanelUtils, null, [
        {
            key: "iconDataForResourceType",
            value: function iconDataForResourceType(resourceType) {
                if (resourceType.isDocument()) {
                    return {
                        iconName: 'file-document',
                        color: 'var(--icon-file-document)'
                    };
                }
                if (resourceType.isImage()) {
                    return {
                        iconName: 'file-image',
                        color: 'var(--icon-file-image)'
                    };
                }
                if (resourceType.isFont()) {
                    return {
                        iconName: 'file-font',
                        color: 'var(--icon-file-font)'
                    };
                }
                if (resourceType.isScript()) {
                    return {
                        iconName: 'file-script',
                        color: 'var(--icon-file-script)'
                    };
                }
                if (resourceType.isStyleSheet()) {
                    return {
                        iconName: 'file-stylesheet',
                        color: 'var(--icon-file-styles)'
                    };
                }
                if (resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Manifest.name()) {
                    return {
                        iconName: 'file-manifest',
                        color: 'var(--icon-default)'
                    };
                }
                if (resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Wasm.name()) {
                    return {
                        iconName: 'file-wasm',
                        color: 'var(--icon-default)'
                    };
                }
                if (resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.WebSocket.name()) {
                    return {
                        iconName: 'file-websocket',
                        color: 'var(--icon-default)'
                    };
                }
                if (resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Media.name()) {
                    return {
                        iconName: 'file-media',
                        color: 'var(--icon-file-media)'
                    };
                }
                if (resourceType.isWebbundle()) {
                    return {
                        iconName: 'bundle',
                        color: 'var(--icon-default)'
                    };
                }
                if (resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Fetch.name() || resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.XHR.name()) {
                    return {
                        iconName: 'file-fetch-xhr',
                        color: 'var(--icon-default)'
                    };
                }
                return {
                    iconName: 'file-generic',
                    color: 'var(--icon-default)'
                };
            }
        },
        {
            key: "formatCSSChangesFromDiff",
            value: function formatCSSChangesFromDiff(diff) {
                return _async_to_generator(function() {
                    var indent, _DiffView_DiffView_buildDiffRows, originalLines, currentLines, rows, originalRuleMaps, currentRuleMaps, changes, recordedOriginalSelector, recordedCurrentSelector, hasOpenDeclarationBlock, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step_value, currentLineNumber, originalLineNumber, type, isDeletion, lines, lineIndex, line, _ref, declarationIDToStyleRule, styleRuleIDToStyleRule, styleRule, prefix, selector, processedLine;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                indent = '  ';
                                _DiffView_DiffView_buildDiffRows = _ui_components_diff_view_diff_view_js__WEBPACK_IMPORTED_MODULE_2__.DiffView.buildDiffRows(diff), originalLines = _DiffView_DiffView_buildDiffRows.originalLines, currentLines = _DiffView_DiffView_buildDiffRows.currentLines, rows = _DiffView_DiffView_buildDiffRows.rows;
                                return [
                                    4,
                                    buildStyleRuleMaps(originalLines.join('\n'))
                                ];
                            case 1:
                                originalRuleMaps = _state.sent();
                                return [
                                    4,
                                    buildStyleRuleMaps(currentLines.join('\n'))
                                ];
                            case 2:
                                currentRuleMaps = _state.sent();
                                changes = '';
                                hasOpenDeclarationBlock = false;
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = rows[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        _step_value = _step.value, currentLineNumber = _step_value.currentLineNumber, originalLineNumber = _step_value.originalLineNumber, type = _step_value.type;
                                        if (type !== "deletion" /* DiffView.DiffView.RowType.Deletion */  && type !== "addition" /* DiffView.DiffView.RowType.Addition */ ) {
                                            continue;
                                        }
                                        isDeletion = type === "deletion" /* DiffView.DiffView.RowType.Deletion */ ;
                                        lines = isDeletion ? originalLines : currentLines;
                                        // Diff line arrays starts at 0, but line numbers start at 1.
                                        lineIndex = isDeletion ? originalLineNumber - 1 : currentLineNumber - 1;
                                        line = lines[lineIndex].trim();
                                        _ref = isDeletion ? originalRuleMaps : currentRuleMaps, declarationIDToStyleRule = _ref.declarationIDToStyleRule, styleRuleIDToStyleRule = _ref.styleRuleIDToStyleRule;
                                        styleRule = void 0;
                                        prefix = '';
                                        if (declarationIDToStyleRule.has(lineIndex)) {
                                            styleRule = declarationIDToStyleRule.get(lineIndex);
                                            selector = styleRule.selector;
                                            // Use the equality of selector strings as a best-effort check for the equality of style rules.
                                            if (selector !== recordedOriginalSelector && selector !== recordedCurrentSelector) {
                                                prefix += "".concat(selector, " {\n");
                                            }
                                            prefix += indent;
                                            hasOpenDeclarationBlock = true;
                                        } else {
                                            if (hasOpenDeclarationBlock) {
                                                prefix = '}\n\n';
                                                hasOpenDeclarationBlock = false;
                                            }
                                            if (styleRuleIDToStyleRule.has(lineIndex)) {
                                                styleRule = styleRuleIDToStyleRule.get(lineIndex);
                                            }
                                        }
                                        processedLine = isDeletion ? "/* ".concat(line, " */") : line;
                                        changes += prefix + processedLine + '\n';
                                        if (isDeletion) {
                                            recordedOriginalSelector = styleRule === null || styleRule === void 0 ? void 0 : styleRule.selector;
                                        } else {
                                            recordedCurrentSelector = styleRule === null || styleRule === void 0 ? void 0 : styleRule.selector;
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
                                if (changes.length > 0) {
                                    changes += '}';
                                }
                                return [
                                    2,
                                    changes
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "highlightElement",
            value: function highlightElement(element) {
                element.scrollIntoViewIfNeeded();
                element.animate([
                    {
                        offset: 0,
                        backgroundColor: 'rgba(255, 255, 0, 0.2)'
                    },
                    {
                        offset: 0.1,
                        backgroundColor: 'rgba(255, 255, 0, 0.7)'
                    },
                    {
                        offset: 1,
                        backgroundColor: 'transparent'
                    }
                ], {
                    duration: 2000,
                    easing: 'cubic-bezier(0, 0, 0.2, 1)'
                });
            }
        }
    ]);
    return PanelUtils;
}();
function buildStyleRuleMaps(content) {
    return _buildStyleRuleMaps.apply(this, arguments);
}
function _buildStyleRuleMaps() {
    _buildStyleRuleMaps = _async_to_generator(function(content) {
        var rules, declarationIDToStyleRule, styleRuleIDToStyleRule, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, rule, _rule_selectorText_split_pop, selector, styleRule, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, property;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        new Promise(function(res) {
                            var rules = [];
                            _models_formatter_formatter_js__WEBPACK_IMPORTED_MODULE_1__.FormatterWorkerPool.formatterWorkerPool().parseCSS(content, function(isLastChunk, currentRules) {
                                var _rules;
                                (_rules = rules).push.apply(_rules, _to_consumable_array(currentRules));
                                if (isLastChunk) {
                                    res(rules);
                                }
                            });
                        })
                    ];
                case 1:
                    rules = _state.sent();
                    // We use line numbers as unique IDs for rules and declarations
                    declarationIDToStyleRule = new Map();
                    styleRuleIDToStyleRule = new Map();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = rules[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            rule = _step.value;
                            if ('styleRange' in rule) {
                                ;
                                selector = (_rule_selectorText_split_pop = rule.selectorText.split('\n').pop()) === null || _rule_selectorText_split_pop === void 0 ? void 0 : _rule_selectorText_split_pop.trim();
                                if (!selector) {
                                    continue;
                                }
                                styleRule = {
                                    rule: rule,
                                    selector: selector
                                };
                                styleRuleIDToStyleRule.set(rule.styleRange.startLine, styleRule);
                                _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                try {
                                    for(_iterator1 = rule.properties[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                        property = _step1.value;
                                        declarationIDToStyleRule.set(property.range.startLine, styleRule);
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
                    return [
                        2,
                        {
                            declarationIDToStyleRule: declarationIDToStyleRule,
                            styleRuleIDToStyleRule: styleRuleIDToStyleRule
                        }
                    ];
            }
        });
    } //# sourceMappingURL=utils.js.map
    );
    return _buildStyleRuleMaps.apply(this, arguments);
}


}),
"./ui/components/diff_view/diff_view.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DiffView: function() { return /* reexport module object */ _DiffView_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _DiffView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DiffView.js */ "./ui/components/diff_view/DiffView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
 //# sourceMappingURL=diff_view.js.map



}),

}]);