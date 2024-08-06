"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_GoToLineQuickOpen_js"], {
"./panels/sources/GoToLineQuickOpen.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  GoToLineQuickOpen: function() { return GoToLineQuickOpen; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_legacy_components_quick_open_quick_open_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/components/quick_open/quick_open.js */ "./ui/legacy/components/quick_open/quick_open.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _SourcesView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SourcesView.js */ "./panels/sources/SourcesView.js");
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
     *@description Text to show no results have been found
     */ noResultsFound: 'No results found',
    /**
     *@description Text in Go To Line Quick Open of the Sources panel
     */ typeANumberToGoToThatLine: 'Type a number to go to that line.',
    /**
     *@description Text in Go To Line Quick Open of the Sources panel
     *@example {abc} PH1
     *@example {000} PH2
     *@example {bbb} PH3
     */ currentPositionXsTypeAnOffset: 'Current position: 0x{PH1}. Type an offset between 0x{PH2} and 0x{PH3} to navigate to.',
    /**
     *@description Text in the GoToLine dialog of the Sources pane that describes the current line number, file line number range, and use of the GoToLine dialog
     *@example {1} PH1
     *@example {100} PH2
     */ currentLineSTypeALineNumber: 'Current line: {PH1}. Type a line number between 1 and {PH2} to navigate to.',
    /**
     *@description Text in Go To Line Quick Open of the Sources panel
     *@example {abc} PH1
     */ goToOffsetXs: 'Go to offset 0x{PH1}.',
    /**
     *@description Text in Go To Line Quick Open of the Sources panel
     *@example {2} PH1
     *@example {2} PH2
     */ goToLineSAndColumnS: 'Go to line {PH1} and column {PH2}.',
    /**
     *@description Text in Go To Line Quick Open of the Sources panel
     *@example {2} PH1
     */ goToLineS: 'Go to line {PH1}.'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/sources/GoToLineQuickOpen.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var _goToLineStrings = /*#__PURE__*/ new WeakMap();
var GoToLineQuickOpen = /*#__PURE__*/ function(_QuickOpen_FilteredListWidget_Provider) {
    "use strict";
    _inherits(GoToLineQuickOpen, _QuickOpen_FilteredListWidget_Provider);
    var _super = _create_super(GoToLineQuickOpen);
    function GoToLineQuickOpen() {
        _class_call_check(this, GoToLineQuickOpen);
        var _this;
        _this = _super.call(this, 'source-line');
        _class_private_field_init(_assert_this_initialized(_this), _goToLineStrings, {
            writable: true,
            value: []
        });
        return _this;
    }
    _create_class(GoToLineQuickOpen, [
        {
            key: "selectItem",
            value: function selectItem(_itemIndex, promptValue) {
                var sourceFrame = this.currentSourceFrame();
                if (!sourceFrame) {
                    return;
                }
                var position = this.parsePosition(promptValue);
                if (!position) {
                    return;
                }
                sourceFrame.revealPosition({
                    lineNumber: position.line - 1,
                    columnNumber: position.column - 1
                });
            }
        },
        {
            key: "itemCount",
            value: function itemCount() {
                return _class_private_field_get(this, _goToLineStrings).length;
            }
        },
        {
            key: "renderItem",
            value: function renderItem(itemIndex, _query, titleElement, _subtitleElement) {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createTextChild(titleElement, _class_private_field_get(this, _goToLineStrings)[itemIndex]);
            }
        },
        {
            key: "rewriteQuery",
            value: function rewriteQuery(_query) {
                // For Go to Line Quick Open, we don't need to filter any item, set query to empty string, so the filter regex matching will be skipped
                return '';
            }
        },
        {
            key: "queryChanged",
            value: function queryChanged(query) {
                _class_private_field_set(this, _goToLineStrings, []);
                var position = this.parsePosition(query);
                var sourceFrame = this.currentSourceFrame();
                if (!position) {
                    if (!sourceFrame) {
                        _class_private_field_get(this, _goToLineStrings).push(i18nString(UIStrings.typeANumberToGoToThatLine));
                        return;
                    }
                    var editorState = sourceFrame.textEditor.state;
                    var disassembly = sourceFrame.wasmDisassembly;
                    var currentLineNumber = sourceFrame.editorLocationToUILocation(editorState.doc.lineAt(editorState.selection.main.head).number - 1).lineNumber;
                    if (disassembly) {
                        var lastBytecodeOffset = disassembly.lineNumberToBytecodeOffset(disassembly.lineNumbers - 1);
                        var bytecodeOffsetDigits = lastBytecodeOffset.toString(16).length;
                        var currentPosition = disassembly.lineNumberToBytecodeOffset(currentLineNumber);
                        _class_private_field_get(this, _goToLineStrings).push(i18nString(UIStrings.currentPositionXsTypeAnOffset, {
                            PH1: currentPosition.toString(16).padStart(bytecodeOffsetDigits, '0'),
                            PH2: '0'.padStart(bytecodeOffsetDigits, '0'),
                            PH3: lastBytecodeOffset.toString(16)
                        }));
                        return;
                    }
                    var linesCount = sourceFrame.editorLocationToUILocation(editorState.doc.lines - 1).lineNumber + 1;
                    _class_private_field_get(this, _goToLineStrings).push(i18nString(UIStrings.currentLineSTypeALineNumber, {
                        PH1: currentLineNumber + 1,
                        PH2: linesCount
                    }));
                    return;
                }
                if (sourceFrame && sourceFrame.wasmDisassembly) {
                    _class_private_field_get(this, _goToLineStrings).push(i18nString(UIStrings.goToOffsetXs, {
                        PH1: (position.column - 1).toString(16)
                    }));
                    return;
                }
                if (position.column && position.column > 1) {
                    _class_private_field_get(this, _goToLineStrings).push(i18nString(UIStrings.goToLineSAndColumnS, {
                        PH1: position.line,
                        PH2: position.column
                    }));
                    return;
                }
                if (sourceFrame && position.line > sourceFrame.textEditor.state.doc.lines) {
                    return;
                }
                _class_private_field_get(this, _goToLineStrings).push(i18nString(UIStrings.goToLineS, {
                    PH1: position.line
                }));
            }
        },
        {
            key: "notFoundText",
            value: function notFoundText(_query) {
                if (!this.currentSourceFrame()) {
                    return i18nString(UIStrings.noFileSelected);
                }
                return i18nString(UIStrings.noResultsFound);
            }
        },
        {
            key: "parsePosition",
            value: function parsePosition(query) {
                var sourceFrame = this.currentSourceFrame();
                if (sourceFrame && sourceFrame.wasmDisassembly) {
                    var parts = query.match(/0x([0-9a-fA-F]+)/);
                    if (!parts || !parts[0] || parts[0].length !== query.length) {
                        return null;
                    }
                    var column = parseInt(parts[0], 16) + 1;
                    return {
                        line: 0,
                        column: column
                    };
                }
                var parts1 = query.match(/([0-9]+)(\:[0-9]*)?/);
                if (!parts1 || !parts1[0] || parts1[0].length !== query.length) {
                    return null;
                }
                var line = parseInt(parts1[1], 10);
                var column1 = 0;
                if (parts1[2]) {
                    column1 = parseInt(parts1[2].substring(1), 10);
                }
                return {
                    line: Math.max(line | 0, 1),
                    column: Math.max(column1 | 0, 1)
                };
            }
        },
        {
            key: "currentSourceFrame",
            value: function currentSourceFrame() {
                var sourcesView = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Context.Context.instance().flavor(_SourcesView_js__WEBPACK_IMPORTED_MODULE_3__.SourcesView);
                if (!sourcesView) {
                    return null;
                }
                return sourcesView.currentSourceFrame();
            }
        }
    ]);
    return GoToLineQuickOpen;
} //# sourceMappingURL=GoToLineQuickOpen.js.map
(_ui_legacy_components_quick_open_quick_open_js__WEBPACK_IMPORTED_MODULE_1__.FilteredListWidget.Provider);


}),

}]);