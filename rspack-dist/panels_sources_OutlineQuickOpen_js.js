"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_OutlineQuickOpen_js"], {
"./panels/sources/OutlineQuickOpen.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  OutlineQuickOpen: function() { return OutlineQuickOpen; },
  outline: function() { return outline; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../third_party/codemirror.next/codemirror.next.js */ "./third_party/codemirror.next/codemirror.next.js");
/* harmony import */var _ui_legacy_components_quick_open_quick_open_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/components/quick_open/quick_open.js */ "./ui/legacy/components/quick_open/quick_open.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _SourcesView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SourcesView.js */ "./panels/sources/SourcesView.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
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
     *@description Text in Go To Line Quick Open of the Sources panel
     */ noFileSelected: 'No file selected.',
    /**
     *@description Text in Outline Quick Open of the Sources panel
     */ openAJavascriptOrCssFileToSee: 'Open a JavaScript or CSS file to see symbols',
    /**
     *@description Text to show no results have been found
     */ noResultsFound: 'No results found'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/sources/OutlineQuickOpen.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
function outline(state) {
    function toLineColumn(offset) {
        offset = Math.max(0, Math.min(offset, state.doc.length));
        var line = state.doc.lineAt(offset);
        return {
            lineNumber: line.number - 1,
            columnNumber: offset - line.from
        };
    }
    function subtitleFromParamList() {
        while(cursor.name !== 'ParamList' && cursor.nextSibling()){}
        var parameters = '';
        if (cursor.name === 'ParamList' && cursor.firstChild()) {
            do {
                switch(cursor.name){
                    case 'ArrayPattern':
                        parameters += '[‥]';
                        break;
                    case 'ObjectPattern':
                        parameters += '{‥}';
                        break;
                    case 'VariableDefinition':
                        parameters += state.sliceDoc(cursor.from, cursor.to);
                        break;
                    case 'Spread':
                        parameters += '...';
                        break;
                    case ',':
                        parameters += ', ';
                        break;
                }
            }while (cursor.nextSibling());
        }
        return "(".concat(parameters, ")");
    }
    var tree = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__.syntaxTree(state);
    var items = [];
    var cursor = tree.cursor();
    do {
        switch(cursor.name){
            // css.grammar
            case 'RuleSet':
                {
                    for(cursor.firstChild();; cursor.nextSibling()){
                        var title = state.sliceDoc(cursor.from, cursor.to);
                        var _toLineColumn = toLineColumn(cursor.from), lineNumber = _toLineColumn.lineNumber, columnNumber = _toLineColumn.columnNumber;
                        items.push({
                            title: title,
                            lineNumber: lineNumber,
                            columnNumber: columnNumber
                        });
                        cursor.nextSibling();
                        if (cursor.name !== ',') {
                            break;
                        }
                    }
                    break;
                }
            // javascript.grammar
            case 'FunctionDeclaration':
            case 'MethodDeclaration':
                {
                    var prefix = '';
                    cursor.firstChild();
                    do {
                        switch(cursor.name){
                            case 'abstract':
                            case 'async':
                            case 'get':
                            case 'set':
                            case 'static':
                                prefix = "".concat(prefix).concat(cursor.name, " ");
                                break;
                            case 'Star':
                                prefix += '*';
                                break;
                            case 'PropertyDefinition':
                            case 'PrivatePropertyDefinition':
                            case 'VariableDefinition':
                                {
                                    var title1 = prefix + state.sliceDoc(cursor.from, cursor.to);
                                    var _toLineColumn1 = toLineColumn(cursor.from), lineNumber1 = _toLineColumn1.lineNumber, columnNumber1 = _toLineColumn1.columnNumber;
                                    var subtitle = subtitleFromParamList();
                                    items.push({
                                        title: title1,
                                        subtitle: subtitle,
                                        lineNumber: lineNumber1,
                                        columnNumber: columnNumber1
                                    });
                                    break;
                                }
                        }
                    }while (cursor.nextSibling());
                    break;
                }
            case 'Property':
                {
                    var prefix1 = '';
                    cursor.firstChild();
                    do {
                        if (cursor.name === 'async' || cursor.name === 'get' || cursor.name === 'set') {
                            prefix1 = "".concat(prefix1).concat(cursor.name, " ");
                        } else if (cursor.name === 'Star') {
                            prefix1 += '*';
                        } else if (cursor.name === 'PropertyDefinition') {
                            var title2 = state.sliceDoc(cursor.from, cursor.to);
                            var _toLineColumn2 = toLineColumn(cursor.from), lineNumber2 = _toLineColumn2.lineNumber, columnNumber2 = _toLineColumn2.columnNumber;
                            while(cursor.nextSibling()){
                                if (cursor.name === 'ClassExpression') {
                                    title2 = "class ".concat(title2);
                                    items.push({
                                        title: title2,
                                        lineNumber: lineNumber2,
                                        columnNumber: columnNumber2
                                    });
                                    break;
                                }
                                if (cursor.name === 'ArrowFunction' || cursor.name === 'FunctionExpression') {
                                    cursor.firstChild();
                                }
                                if (cursor.name === 'async') {
                                    prefix1 = "async ".concat(prefix1);
                                } else if (cursor.name === 'Star') {
                                    prefix1 += '*';
                                } else if (cursor.name === 'ParamList') {
                                    title2 = prefix1 + title2;
                                    var subtitle1 = subtitleFromParamList();
                                    items.push({
                                        title: title2,
                                        subtitle: subtitle1,
                                        lineNumber: lineNumber2,
                                        columnNumber: columnNumber2
                                    });
                                    break;
                                }
                            }
                            break;
                        } else {
                            break;
                        }
                    }while (cursor.nextSibling());
                    break;
                }
            case 'PropertyName':
            case 'VariableDefinition':
                {
                    if (cursor.matchContext([
                        'ClassDeclaration'
                    ])) {
                        var title3 = 'class ' + state.sliceDoc(cursor.from, cursor.to);
                        var _toLineColumn3 = toLineColumn(cursor.from), lineNumber3 = _toLineColumn3.lineNumber, columnNumber3 = _toLineColumn3.columnNumber;
                        items.push({
                            title: title3,
                            lineNumber: lineNumber3,
                            columnNumber: columnNumber3
                        });
                    } else if (cursor.matchContext([
                        'AssignmentExpression',
                        'MemberExpression'
                    ]) || cursor.matchContext([
                        'VariableDeclaration'
                    ])) {
                        var title4 = state.sliceDoc(cursor.from, cursor.to);
                        var _toLineColumn4 = toLineColumn(cursor.from), lineNumber4 = _toLineColumn4.lineNumber, columnNumber4 = _toLineColumn4.columnNumber;
                        while(cursor.name !== 'Equals' && cursor.next()){}
                        if (!cursor.nextSibling()) {
                            break;
                        }
                        if (cursor.name === 'ArrowFunction' || cursor.name === 'FunctionExpression') {
                            cursor.firstChild();
                            var prefix2 = '';
                            while(cursor.name !== 'ParamList'){
                                if (cursor.name === 'async') {
                                    prefix2 = "async ".concat(prefix2);
                                } else if (cursor.name === 'Star') {
                                    prefix2 += '*';
                                }
                                if (!cursor.nextSibling()) {
                                    break;
                                }
                            }
                            title4 = prefix2 + title4;
                            var subtitle2 = subtitleFromParamList();
                            items.push({
                                title: title4,
                                subtitle: subtitle2,
                                lineNumber: lineNumber4,
                                columnNumber: columnNumber4
                            });
                        } else if (cursor.name === 'ClassExpression') {
                            title4 = "class ".concat(title4);
                            items.push({
                                title: title4,
                                lineNumber: lineNumber4,
                                columnNumber: columnNumber4
                            });
                        }
                    }
                    break;
                }
            // wast.grammar
            case 'App':
                {
                    if (cursor.firstChild() && cursor.nextSibling() && state.sliceDoc(cursor.from, cursor.to) === 'module') {
                        if (cursor.nextSibling() && cursor.name === 'Identifier') {
                            var title5 = state.sliceDoc(cursor.from, cursor.to);
                            var _toLineColumn5 = toLineColumn(cursor.from), lineNumber5 = _toLineColumn5.lineNumber, columnNumber5 = _toLineColumn5.columnNumber;
                            items.push({
                                title: title5,
                                lineNumber: lineNumber5,
                                columnNumber: columnNumber5
                            });
                        }
                        do {
                            if (cursor.name === 'App' && cursor.firstChild()) {
                                if (cursor.nextSibling() && state.sliceDoc(cursor.from, cursor.to) === 'func' && cursor.nextSibling() && cursor.name === 'Identifier') {
                                    var title6 = state.sliceDoc(cursor.from, cursor.to);
                                    var _toLineColumn6 = toLineColumn(cursor.from), lineNumber6 = _toLineColumn6.lineNumber, columnNumber6 = _toLineColumn6.columnNumber;
                                    var params = [];
                                    while(cursor.nextSibling()){
                                        if (cursor.name === 'App' && cursor.firstChild()) {
                                            if (cursor.nextSibling() && state.sliceDoc(cursor.from, cursor.to) === 'param') {
                                                if (cursor.nextSibling() && cursor.name === 'Identifier') {
                                                    params.push(state.sliceDoc(cursor.from, cursor.to));
                                                } else {
                                                    params.push("$".concat(params.length));
                                                }
                                            }
                                            cursor.parent();
                                        }
                                    }
                                    var subtitle3 = "(".concat(params.join(', '), ")");
                                    items.push({
                                        title: title6,
                                        subtitle: subtitle3,
                                        lineNumber: lineNumber6,
                                        columnNumber: columnNumber6
                                    });
                                }
                                cursor.parent();
                            }
                        }while (cursor.nextSibling());
                    }
                    break;
                }
            // cpp.grammar
            case 'FieldIdentifier':
            case 'Identifier':
                {
                    if (cursor.matchContext([
                        'FunctionDeclarator'
                    ])) {
                        var title7 = state.sliceDoc(cursor.from, cursor.to);
                        var _toLineColumn7 = toLineColumn(cursor.from), lineNumber7 = _toLineColumn7.lineNumber, columnNumber7 = _toLineColumn7.columnNumber;
                        items.push({
                            title: title7,
                            lineNumber: lineNumber7,
                            columnNumber: columnNumber7
                        });
                    }
                    break;
                }
            case 'TypeIdentifier':
                {
                    if (cursor.matchContext([
                        'ClassSpecifier'
                    ])) {
                        var title8 = "class ".concat(state.sliceDoc(cursor.from, cursor.to));
                        var _toLineColumn8 = toLineColumn(cursor.from), lineNumber8 = _toLineColumn8.lineNumber, columnNumber8 = _toLineColumn8.columnNumber;
                        items.push({
                            title: title8,
                            lineNumber: lineNumber8,
                            columnNumber: columnNumber8
                        });
                    } else if (cursor.matchContext([
                        'StructSpecifier'
                    ])) {
                        var title9 = "struct ".concat(state.sliceDoc(cursor.from, cursor.to));
                        var _toLineColumn9 = toLineColumn(cursor.from), lineNumber9 = _toLineColumn9.lineNumber, columnNumber9 = _toLineColumn9.columnNumber;
                        items.push({
                            title: title9,
                            lineNumber: lineNumber9,
                            columnNumber: columnNumber9
                        });
                    }
                    break;
                }
            default:
                break;
        }
    }while (cursor.next());
    return items;
}
var OutlineQuickOpen = /*#__PURE__*/ function(_QuickOpen_FilteredListWidget_Provider) {
    "use strict";
    _inherits(OutlineQuickOpen, _QuickOpen_FilteredListWidget_Provider);
    var _super = _create_super(OutlineQuickOpen);
    function OutlineQuickOpen() {
        _class_call_check(this, OutlineQuickOpen);
        var _this;
        _this = _super.call(this, 'source-symbol');
        _define_property(_assert_this_initialized(_this), "items", []);
        _define_property(_assert_this_initialized(_this), "active", false);
        return _this;
    }
    _create_class(OutlineQuickOpen, [
        {
            key: "attach",
            value: function attach() {
                var sourceFrame = this.currentSourceFrame();
                if (sourceFrame) {
                    this.active = true;
                    this.items = outline(sourceFrame.textEditor.state).map(function(param) {
                        var title = param.title, subtitle = param.subtitle, lineNumber = param.lineNumber, columnNumber = param.columnNumber;
                        var ref;
                        ref = sourceFrame.editorLocationToUILocation(lineNumber, columnNumber), lineNumber = ref.lineNumber, columnNumber = ref.columnNumber, ref;
                        return {
                            title: title,
                            subtitle: subtitle,
                            lineNumber: lineNumber,
                            columnNumber: columnNumber
                        };
                    });
                } else {
                    this.active = false;
                    this.items = [];
                }
            }
        },
        {
            key: "detach",
            value: function detach() {
                this.active = false;
                this.items = [];
            }
        },
        {
            key: "itemCount",
            value: function itemCount() {
                return this.items.length;
            }
        },
        {
            key: "itemKeyAt",
            value: function itemKeyAt(itemIndex) {
                var item = this.items[itemIndex];
                return item.title + (item.subtitle ? item.subtitle : '');
            }
        },
        {
            key: "itemScoreAt",
            value: function itemScoreAt(itemIndex, query) {
                var item = this.items[itemIndex];
                var methodName = query.split('(')[0];
                if (methodName.toLowerCase() === item.title.toLowerCase()) {
                    return 1 / (1 + item.lineNumber);
                }
                return -item.lineNumber - 1;
            }
        },
        {
            key: "renderItem",
            value: function renderItem(itemIndex, query, titleElement, _subtitleElement) {
                var _titleElement_parentElement_parentElement, _titleElement_parentElement;
                var item = this.items[itemIndex];
                titleElement.textContent = item.title + (item.subtitle ? item.subtitle : '');
                _ui_legacy_components_quick_open_quick_open_js__WEBPACK_IMPORTED_MODULE_2__.FilteredListWidget.FilteredListWidget.highlightRanges(titleElement, query);
                var sourceFrame = this.currentSourceFrame();
                if (!sourceFrame) {
                    return;
                }
                var tagElement = (_titleElement_parentElement = titleElement.parentElement) === null || _titleElement_parentElement === void 0 ? void 0 : (_titleElement_parentElement_parentElement = _titleElement_parentElement.parentElement) === null || _titleElement_parentElement_parentElement === void 0 ? void 0 : _titleElement_parentElement_parentElement.createChild('span', 'tag');
                if (!tagElement) {
                    return;
                }
                var disassembly = sourceFrame.wasmDisassembly;
                if (disassembly) {
                    var lastBytecodeOffset = disassembly.lineNumberToBytecodeOffset(disassembly.lineNumbers - 1);
                    var bytecodeOffsetDigits = lastBytecodeOffset.toString(16).length;
                    tagElement.textContent = ":0x".concat(item.columnNumber.toString(16).padStart(bytecodeOffsetDigits, '0'));
                } else {
                    tagElement.textContent = ":".concat(item.lineNumber + 1);
                }
            }
        },
        {
            key: "selectItem",
            value: function selectItem(itemIndex, _promptValue) {
                if (itemIndex === null) {
                    return;
                }
                var sourceFrame = this.currentSourceFrame();
                if (!sourceFrame) {
                    return;
                }
                var item = this.items[itemIndex];
                sourceFrame.revealPosition({
                    lineNumber: item.lineNumber,
                    columnNumber: item.columnNumber
                }, true);
            }
        },
        {
            key: "currentSourceFrame",
            value: function currentSourceFrame() {
                var sourcesView = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().flavor(_SourcesView_js__WEBPACK_IMPORTED_MODULE_4__.SourcesView);
                return sourcesView && sourcesView.currentSourceFrame();
            }
        },
        {
            key: "notFoundText",
            value: function notFoundText() {
                if (!this.currentSourceFrame()) {
                    return i18nString(UIStrings.noFileSelected);
                }
                if (!this.active) {
                    return i18nString(UIStrings.openAJavascriptOrCssFileToSee);
                }
                return i18nString(UIStrings.noResultsFound);
            }
        }
    ]);
    return OutlineQuickOpen;
} //# sourceMappingURL=OutlineQuickOpen.js.map
(_ui_legacy_components_quick_open_quick_open_js__WEBPACK_IMPORTED_MODULE_2__.FilteredListWidget.Provider);


}),

}]);