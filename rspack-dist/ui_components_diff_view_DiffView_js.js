"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_diff_view_DiffView_js"], {
"./ui/components/diff_view/DiffView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DiffView: function() { return DiffView; },
  buildDiffRows: function() { return buildDiffRows; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../third_party/diff/diff.js */ "./third_party/diff/diff.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../code_highlighter/code_highlighter.js */ "./ui/components/code_highlighter/code_highlighter.js");
/* harmony import */var _diffView_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./diffView.css.js */ "./ui/components/diff_view/diffView.css.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}
function _class_private_method_init(obj, privateSet) {
    _check_private_redeclaration(obj, privateSet);
    privateSet.add(obj);
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
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
function _templateObject() {
    var data = _tagged_template_literal([
        '\n      <div class="diff-listing" aria-label=',
        ">\n        ",
        "\n      </div>"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '<span class="diff-hidden-text">',
        "</span>"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        '<span class="diff-hidden-text">',
        "</span>"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        '\n      <div class="diff-line-number" aria-hidden="true">',
        '</div>\n      <div class="diff-line-number" aria-hidden="true">',
        "</div>\n      <div class=",
        ' aria-hidden="true">',
        '</div>\n      <div class="diff-line-content diff-line-',
        '" data-line-number=',
        " jslog=",
        ">",
        "",
        "</div>"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "",
        ""
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "<span class=",
        ">",
        "</span>"
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        "<span class=",
        ">",
        "</span>"
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        "",
        ""
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = _tagged_template_literal([
        "devtools-diff-view"
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}






var UIStrings = {
    /**
     *@description Text prepended to a removed line in a diff in the Changes tool, viewable only by screen reader.
     */ deletions: 'Deletion:',
    /**
     *@description Text prepended to a new line in a diff in the Changes tool, viewable only by screen reader.
     */ additions: 'Addition:',
    /**
     *@description Screen-reader accessible name for the code editor in the Changes tool showing the user's changes.
     */ changesDiffViewer: 'Changes diff viewer',
    /**
     *@description Text in Changes View of the Changes tab
     *@example {2} PH1
     */ SkippingDMatchingLines: '( … Skipping {PH1} matching lines … )'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('ui/components/diff_view/DiffView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
function buildDiffRows(diff) {
    var currentLineNumber = 0;
    var originalLineNumber = 0;
    var paddingLines = 3;
    var originalLines = [];
    var currentLines = [];
    var rows = [];
    for(var i = 0; i < diff.length; ++i){
        var token = diff[i];
        switch(token[0]){
            case _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_1__.Diff.Operation.Equal:
                var _rows, _originalLines, _currentLines;
                (_rows = rows).push.apply(_rows, _to_consumable_array(createEqualRows(token[1], i === 0, i === diff.length - 1)));
                (_originalLines = originalLines).push.apply(_originalLines, _to_consumable_array(token[1]));
                (_currentLines = currentLines).push.apply(_currentLines, _to_consumable_array(token[1]));
                break;
            case _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_1__.Diff.Operation.Insert:
                var _currentLines1;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = token[1][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var line = _step.value;
                        rows.push(createRow(line, "addition" /* RowType.Addition */ ));
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
                (_currentLines1 = currentLines).push.apply(_currentLines1, _to_consumable_array(token[1]));
                break;
            case _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_1__.Diff.Operation.Delete:
                var _originalLines1;
                (_originalLines1 = originalLines).push.apply(_originalLines1, _to_consumable_array(token[1]));
                if (diff[i + 1] && diff[i + 1][0] === _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_1__.Diff.Operation.Insert) {
                    var _rows1, _currentLines2;
                    i++;
                    (_rows1 = rows).push.apply(_rows1, _to_consumable_array(createModifyRows(token[1].join('\n'), diff[i][1].join('\n'))));
                    (_currentLines2 = currentLines).push.apply(_currentLines2, _to_consumable_array(diff[i][1]));
                } else {
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(var _iterator1 = token[1][Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            var line1 = _step1.value;
                            rows.push(createRow(line1, "deletion" /* RowType.Deletion */ ));
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
                break;
        }
    }
    return {
        originalLines: originalLines,
        currentLines: currentLines,
        rows: rows
    };
    function createEqualRows(lines, atStart, atEnd) {
        var equalRows = [];
        if (!atStart) {
            for(var i = 0; i < paddingLines && i < lines.length; i++){
                equalRows.push(createRow(lines[i], "equal" /* RowType.Equal */ ));
            }
            if (lines.length > paddingLines * 2 + 1 && !atEnd) {
                equalRows.push(createRow(i18nString(UIStrings.SkippingDMatchingLines, {
                    PH1: lines.length - paddingLines * 2
                }), "spacer" /* RowType.Spacer */ ));
            }
        }
        if (!atEnd) {
            var start = Math.max(lines.length - paddingLines - 1, atStart ? 0 : paddingLines);
            var skip = lines.length - paddingLines - 1;
            if (!atStart) {
                skip -= paddingLines;
            }
            if (skip > 0) {
                originalLineNumber += skip;
                currentLineNumber += skip;
            }
            for(var i1 = start; i1 < lines.length; i1++){
                equalRows.push(createRow(lines[i1], "equal" /* RowType.Equal */ ));
            }
        }
        return equalRows;
    }
    function createModifyRows(before, after) {
        var internalDiff = _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_1__.Diff.DiffWrapper.charDiff(before, after, true);
        var deletionRows = [
            createRow('', "deletion" /* RowType.Deletion */ )
        ];
        var insertionRows = [
            createRow('', "addition" /* RowType.Addition */ )
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = internalDiff[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var token = _step.value;
                var text = token[1];
                var type = token[0];
                var className = type === _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_1__.Diff.Operation.Equal ? '' : 'inner-diff';
                var lines = text.split('\n');
                for(var i = 0; i < lines.length; i++){
                    if (i > 0 && type !== _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_1__.Diff.Operation.Insert) {
                        deletionRows.push(createRow('', "deletion" /* RowType.Deletion */ ));
                    }
                    if (i > 0 && type !== _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_1__.Diff.Operation.Delete) {
                        insertionRows.push(createRow('', "addition" /* RowType.Addition */ ));
                    }
                    if (!lines[i]) {
                        continue;
                    }
                    if (type !== _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_1__.Diff.Operation.Insert) {
                        deletionRows[deletionRows.length - 1].tokens.push({
                            text: lines[i],
                            className: className
                        });
                    }
                    if (type !== _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_1__.Diff.Operation.Delete) {
                        insertionRows[insertionRows.length - 1].tokens.push({
                            text: lines[i],
                            className: className
                        });
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
        return deletionRows.concat(insertionRows);
    }
    function createRow(text, type) {
        if (type === "addition" /* RowType.Addition */ ) {
            currentLineNumber++;
        }
        if (type === "deletion" /* RowType.Deletion */ ) {
            originalLineNumber++;
        }
        if (type === "equal" /* RowType.Equal */ ) {
            originalLineNumber++;
            currentLineNumber++;
        }
        return {
            originalLineNumber: originalLineNumber,
            currentLineNumber: currentLineNumber,
            tokens: text ? [
                {
                    text: text,
                    className: 'inner-diff'
                }
            ] : [],
            type: type
        };
    }
}
function documentMap(lines) {
    var map = new Map();
    for(var pos = 0, lineNo = 0; lineNo < lines.length; lineNo++){
        map.set(lineNo + 1, pos);
        pos += lines[lineNo].length + 1;
    }
    return map;
}
var _render = /*#__PURE__*/ new WeakSet(), _renderRow = /*#__PURE__*/ new WeakSet(), _renderRowContent = /*#__PURE__*/ new WeakSet();
var DiffRenderer = /*#__PURE__*/ function() {
    "use strict";
    function DiffRenderer(originalHighlighter, originalMap, currentHighlighter, currentMap) {
        _class_call_check(this, DiffRenderer);
        _class_private_method_init(this, _render);
        _class_private_method_init(this, _renderRow);
        _class_private_method_init(this, _renderRowContent);
        _define_property(this, "originalHighlighter", void 0);
        _define_property(this, "originalMap", void 0);
        _define_property(this, "currentHighlighter", void 0);
        _define_property(this, "currentMap", void 0);
        this.originalHighlighter = originalHighlighter;
        this.originalMap = originalMap;
        this.currentHighlighter = currentHighlighter;
        this.currentMap = currentMap;
    }
    _create_class(DiffRenderer, null, [
        {
            key: "render",
            value: function render1(diff, mimeType, parent) {
                var _this = this;
                return _async_to_generator(function() {
                    var _buildDiffRows, originalLines, currentLines, rows, renderer, _, _tmp;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _buildDiffRows = buildDiffRows(diff), originalLines = _buildDiffRows.originalLines, currentLines = _buildDiffRows.currentLines, rows = _buildDiffRows.rows;
                                _ = DiffRenderer.bind;
                                return [
                                    4,
                                    _code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_4__.CodeHighlighter.create(originalLines.join('\n'), mimeType)
                                ];
                            case 1:
                                _tmp = [
                                    void 0,
                                    _state.sent(),
                                    documentMap(originalLines)
                                ];
                                return [
                                    4,
                                    _code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_4__.CodeHighlighter.create(currentLines.join('\n'), mimeType)
                                ];
                            case 2:
                                renderer = new (_.apply(DiffRenderer, _tmp.concat([
                                    _state.sent(),
                                    documentMap(currentLines)
                                ])));
                                _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render(_class_private_method_get(renderer, _render, render).call(renderer, rows), parent, {
                                    host: _this
                                });
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return DiffRenderer;
}();
function render(rows) {
    var _this = this;
    return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html(_templateObject(), i18nString(UIStrings.changesDiffViewer), rows.map(function(row) {
        return _class_private_method_get(_this, _renderRow, renderRow).call(_this, row);
    }));
}
function renderRow(row) {
    var baseNumber = row.type === "equal" /* RowType.Equal */  || row.type === "deletion" /* RowType.Deletion */  ? String(row.originalLineNumber) : '';
    var curNumber = row.type === "equal" /* RowType.Equal */  || row.type === "addition" /* RowType.Addition */  ? String(row.currentLineNumber) : '';
    var marker = '', markerClass = 'diff-line-marker', screenReaderText = null;
    if (row.type === "addition" /* RowType.Addition */ ) {
        marker = '+';
        markerClass += ' diff-line-addition';
        screenReaderText = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html(_templateObject1(), i18nString(UIStrings.additions));
    } else if (row.type === "deletion" /* RowType.Deletion */ ) {
        marker = '-';
        markerClass += ' diff-line-deletion';
        screenReaderText = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html(_templateObject2(), i18nString(UIStrings.deletions));
    }
    return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html(_templateObject3(), baseNumber, curNumber, markerClass, marker, row.type, curNumber, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.link('changes.reveal-source').track({
        click: true
    }), screenReaderText, _class_private_method_get(this, _renderRowContent, renderRowContent).call(this, row));
}
function renderRowContent(row) {
    if (row.type === "spacer" /* RowType.Spacer */ ) {
        return row.tokens.map(function(tok) {
            return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html(_templateObject4(), tok.text);
        });
    }
    var _ref = _sliced_to_array(row.type === "deletion" /* RowType.Deletion */  ? [
        this.originalHighlighter,
        this.originalMap.get(row.originalLineNumber)
    ] : [
        this.currentHighlighter,
        this.currentMap.get(row.currentLineNumber)
    ], 2), doc = _ref[0], startPos = _ref[1];
    var content = [];
    var pos = startPos;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        var _loop = function() {
            var token = _step.value;
            var tokenContent = [];
            doc.highlightRange(pos, pos + token.text.length, function(text, style) {
                tokenContent.push(style ? _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html(_templateObject5(), style, text) : text);
            });
            content.push(token.className ? _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html(_templateObject6(), token.className, tokenContent) : _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html(_templateObject7(), tokenContent));
            pos += token.text.length;
        };
        for(var _iterator = row.tokens[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
    return content;
}
var _shadow = /*#__PURE__*/ new WeakMap();
var DiffView = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(DiffView, HTMLElement1);
    var _super = _create_super(DiffView);
    function DiffView(data) {
        _class_call_check(this, DiffView);
        var _this;
        _this = _super.call(this);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _define_property(_assert_this_initialized(_this), "loaded", void 0);
        _class_private_field_get(_this, _shadow).adoptedStyleSheets = [
            _diffView_css_js__WEBPACK_IMPORTED_MODULE_5__["default"],
            _code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_4__.Style["default"]
        ];
        if (data) {
            _this.loaded = DiffRenderer.render(data.diff, data.mimeType, _class_private_field_get(_assert_this_initialized(_this), _shadow));
        } else {
            _this.loaded = Promise.resolve();
        }
        return _this;
    }
    _create_class(DiffView, [
        {
            key: "data",
            set: function set(data) {
                this.loaded = DiffRenderer.render(data.diff, data.mimeType, _class_private_field_get(this, _shadow));
            }
        }
    ]);
    return DiffView;
}(_wrap_native_super(HTMLElement));
_define_property(DiffView, "litTagName", _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal(_templateObject8()));
customElements.define('devtools-diff-view', DiffView); //# sourceMappingURL=DiffView.js.map


}),
"./ui/components/diff_view/diffView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.diff-listing {\n  display: grid;\n  grid-template-columns: max-content max-content max-content auto;\n  font-family: var(--source-code-font-family);\n  font-size: var(--source-code-font-size);\n  white-space: pre;\n  line-height: 1.2em;\n  user-select: text;\n}\n\n.diff-line-number {\n  color: var(--sys-color-token-subtle);\n  padding: 0 3px 0 9px;\n  text-align: right;\n  user-select: none;\n}\n\n.diff-line-marker {\n  border-right: 1px solid var(--sys-color-divider);\n  width: 20px;\n  text-align: center;\n}\n\n.diff-line-content {\n  padding: 0 4px;\n}\n\n.diff-line-marker-addition,\n.diff-line-addition {\n  background-color: var(--sys-color-surface-green);\n}\n\n.diff-line-marker-deletion,\n.diff-line-deletion {\n  background-color: var(--sys-color-surface-error);\n}\n\n.diff-line-addition .inner-diff {\n  background-color: color-mix(in sRGB, var(--ref-palette-green70) 40%, transparent);\n}\n\n.diff-line-deletion .inner-diff {\n  background-color: color-mix(in sRGB, var(--ref-palette-error60) 40%, transparent);\n}\n\n.diff-hidden-text {\n  display: inline-block;\n  width: 0;\n  overflow: hidden;\n}\n\n.diff-line-equal {\n  opacity: 50%;\n}\n\n.diff-line-spacer {\n  text-align: center;\n  background-color: var(--sys-color-surface5);\n}\n\n/*# sourceURL=diffView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);