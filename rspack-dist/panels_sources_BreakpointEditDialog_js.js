"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_BreakpointEditDialog_js"], {
"./panels/sources/BreakpointEditDialog.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BreakpointEditDialog: function() { return BreakpointEditDialog; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../third_party/codemirror.next/codemirror.next.js */ "./third_party/codemirror.next/codemirror.next.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/text_editor/text_editor.js */ "./ui/components/text_editor/text_editor.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _breakpointEditDialog_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./breakpointEditDialog.css.js */ "./panels/sources/breakpointEditDialog.css.js");
// Copyright 2018 The Chromium Authors. All rights reserved.
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
function _templateObject() {
    var data = _tagged_template_literal([
        '<x-link class="link devtools-link" tabindex="0" href="https://goo.gle/devtools-loc"\n                                          jslog="',
        '">',
        "</x-link>"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}









var Direction = _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_5__.TextEditorHistory.Direction;
var UIStrings = {
    /**
     *@description Screen reader label for a select box that chooses the breakpoint type in the Sources panel when editing a breakpoint
     */ breakpointType: 'Breakpoint type',
    /**
     *@description Text in Breakpoint Edit Dialog of the Sources panel
     */ breakpoint: 'Breakpoint',
    /**
     *@description Tooltip text in Breakpoint Edit Dialog of the Sources panel that shows up when hovering over the close icon
     */ closeDialog: 'Close edit dialog and save changes',
    /**
     *@description Text in Breakpoint Edit Dialog of the Sources panel
     */ conditionalBreakpoint: 'Conditional breakpoint',
    /**
     *@description Text in Breakpoint Edit Dialog of the Sources panel
     */ logpoint: 'Logpoint',
    /**
     *@description Text in Breakpoint Edit Dialog of the Sources panel
     */ expressionToCheckBeforePausingEg: 'Expression to check before pausing, e.g. x > 5',
    /**
     *@description Type selector element title in Breakpoint Edit Dialog of the Sources panel
     */ pauseOnlyWhenTheConditionIsTrue: 'Pause only when the condition is true',
    /**
     * @description Link text in the Breakpoint Edit Dialog of the Sources panel
     */ learnMoreOnBreakpointTypes: 'Learn more: Breakpoint Types',
    /**
     *@description Text in Breakpoint Edit Dialog of the Sources panel. It is used as
     *the placeholder for a text input field before the user enters text. Provides the user with
     *an example on how to use Logpoints. 'Log' is a verb and 'message' is a noun.
     *See: https://developer.chrome.com/blog/new-in-devtools-73/#logpoints
     */ logMessageEgXIsX: 'Log message, e.g. `\'x is\', x`',
    /**
     *@description Type selector element title in Breakpoint Edit Dialog of the Sources panel
     */ logAMessageToConsoleDoNotBreak: 'Log a message to Console, do not break'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/sources/BreakpointEditDialog.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var _history = /*#__PURE__*/ new WeakMap(), _editorHistory = /*#__PURE__*/ new WeakMap();
var BreakpointEditDialog = /*#__PURE__*/ function(_UI_Widget_Widget) {
    "use strict";
    _inherits(BreakpointEditDialog, _UI_Widget_Widget);
    var _super = _create_super(BreakpointEditDialog);
    function BreakpointEditDialog(editorLineNumber, oldCondition, isLogpoint, onFinish) {
        _class_call_check(this, BreakpointEditDialog);
        var _this;
        _this = _super.call(this, true);
        _define_property(_assert_this_initialized(_this), "onFinish", void 0);
        _define_property(_assert_this_initialized(_this), "finished", void 0);
        _define_property(_assert_this_initialized(_this), "editor", void 0);
        _define_property(_assert_this_initialized(_this), "typeSelector", void 0);
        _define_property(_assert_this_initialized(_this), "placeholderCompartment", void 0);
        _class_private_field_init(_assert_this_initialized(_this), _history, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _editorHistory, {
            writable: true,
            value: void 0
        });
        var editorConfig = [
            _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.javascript.javascriptLanguage,
            _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_5__.Config.baseConfiguration(oldCondition || ''),
            _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_5__.Config.closeBrackets.instance(),
            _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_5__.Config.autocompletion.instance(),
            _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.EditorView.lineWrapping,
            _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_5__.Config.showCompletionHint,
            _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_5__.Config.conservativeCompletion,
            _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.javascript.javascriptLanguage.data.of({
                autocomplete: function(context) {
                    return _class_private_field_get(_this, _editorHistory).historyCompletions(context);
                }
            }),
            _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.autocompletion(),
            _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_5__.JavaScript.argumentHints()
        ];
        _this.onFinish = onFinish;
        _this.finished = false;
        _this.element.tabIndex = -1;
        _this.element.classList.add('sources-edit-breakpoint-dialog');
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.dialog('edit-breakpoint')));
        var header = _this.contentElement.createChild('div', 'dialog-header');
        var toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar('source-frame-breakpoint-toolbar', header);
        toolbar.appendText("Line ".concat(editorLineNumber + 1, ":"));
        _this.typeSelector = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarComboBox(_this.onTypeChanged.bind(_assert_this_initialized(_this)), i18nString(UIStrings.breakpointType), undefined, 'type');
        _this.typeSelector.createOption(i18nString(UIStrings.breakpoint), "REGULAR_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT */ );
        var conditionalOption = _this.typeSelector.createOption(i18nString(UIStrings.conditionalBreakpoint), "CONDITIONAL_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.CONDITIONAL_BREAKPOINT */ );
        var logpointOption = _this.typeSelector.createOption(i18nString(UIStrings.logpoint), "LOGPOINT" /* SDK.DebuggerModel.BreakpointType.LOGPOINT */ );
        _this.typeSelector.select(isLogpoint ? logpointOption : conditionalOption);
        toolbar.appendToolbarItem(_this.typeSelector);
        var content = oldCondition || '';
        var finishIfComplete = function(view) {
            void _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_5__.JavaScript.isExpressionComplete(view.state.doc.toString()).then(function(complete) {
                if (complete) {
                    _this.finishEditing(true, _this.editor.state.doc.toString());
                } else {
                    _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.insertNewlineAndIndent(view);
                }
            });
            return true;
        };
        var keymap = [
            {
                key: 'ArrowUp',
                run: function() {
                    return _class_private_field_get(_this, _editorHistory).moveHistory(-1 /* Direction.BACKWARD */ );
                }
            },
            {
                key: 'ArrowDown',
                run: function() {
                    return _class_private_field_get(_this, _editorHistory).moveHistory(1 /* Direction.FORWARD */ );
                }
            },
            {
                mac: 'Ctrl-p',
                run: function() {
                    return _class_private_field_get(_this, _editorHistory).moveHistory(-1 /* Direction.BACKWARD */ , true);
                }
            },
            {
                mac: 'Ctrl-n',
                run: function() {
                    return _class_private_field_get(_this, _editorHistory).moveHistory(1 /* Direction.FORWARD */ , true);
                }
            },
            {
                key: 'Mod-Enter',
                run: finishIfComplete
            },
            {
                key: 'Enter',
                run: finishIfComplete
            },
            {
                key: 'Shift-Enter',
                run: _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.insertNewlineAndIndent
            },
            {
                key: 'Escape',
                run: function() {
                    _this.finishEditing(false, '');
                    return true;
                }
            }
        ];
        _this.placeholderCompartment = new _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.Compartment();
        var editorWrapper = _this.contentElement.appendChild(document.createElement('div'));
        editorWrapper.classList.add('condition-editor');
        editorWrapper.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.textField().track({
            change: true
        })));
        _this.editor = new _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_5__.TextEditor.TextEditor(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.EditorState.create({
            doc: content,
            selection: {
                anchor: 0,
                head: content.length
            },
            extensions: [
                _this.placeholderCompartment.of(_this.getPlaceholder()),
                _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.keymap.of(keymap),
                editorConfig
            ]
        }));
        editorWrapper.appendChild(_this.editor);
        var closeIcon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon();
        closeIcon.name = 'cross';
        closeIcon.title = i18nString(UIStrings.closeDialog);
        closeIcon.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.close().track({
            click: true
        })));
        closeIcon.onclick = function() {
            return _this.finishEditing(true, _this.editor.state.doc.toString());
        };
        header.appendChild(closeIcon);
        _class_private_field_set(_assert_this_initialized(_this), _history, new _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_5__.AutocompleteHistory.AutocompleteHistory(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('breakpoint-condition-history', [])));
        _class_private_field_set(_assert_this_initialized(_this), _editorHistory, new _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_5__.TextEditorHistory.TextEditorHistory(_this.editor, _class_private_field_get(_assert_this_initialized(_this), _history)));
        var linkWrapper = _this.contentElement.appendChild(document.createElement('div'));
        linkWrapper.classList.add('link-wrapper');
        var link = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Fragment.html(_templateObject(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.link('learn-more'), i18nString(UIStrings.learnMoreOnBreakpointTypes));
        var linkIcon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon();
        linkIcon.name = 'open-externally';
        linkIcon.classList.add('link-icon');
        link.prepend(linkIcon);
        linkWrapper.appendChild(link);
        _this.updateTooltip();
        return _this;
    }
    _create_class(BreakpointEditDialog, [
        {
            key: "saveAndFinish",
            value: function saveAndFinish() {
                this.finishEditing(true, this.editor.state.doc.toString());
            }
        },
        {
            key: "focusEditor",
            value: function focusEditor() {
                this.editor.editor.focus();
            }
        },
        {
            key: "onTypeChanged",
            value: function onTypeChanged() {
                if (this.breakpointType === "REGULAR_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT */ ) {
                    this.finishEditing(true, '');
                    return;
                }
                this.focusEditor();
                this.editor.dispatch({
                    effects: this.placeholderCompartment.reconfigure(this.getPlaceholder())
                });
                this.updateTooltip();
            }
        },
        {
            key: "breakpointType",
            get: function get() {
                var option = this.typeSelector.selectedOption();
                return option ? option.value : null;
            }
        },
        {
            key: "getPlaceholder",
            value: function getPlaceholder() {
                var type = this.breakpointType;
                if (type === "CONDITIONAL_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.CONDITIONAL_BREAKPOINT */ ) {
                    return _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.placeholder(i18nString(UIStrings.expressionToCheckBeforePausingEg));
                }
                if (type === "LOGPOINT" /* SDK.DebuggerModel.BreakpointType.LOGPOINT */ ) {
                    return _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.placeholder(i18nString(UIStrings.logMessageEgXIsX));
                }
                return [];
            }
        },
        {
            key: "updateTooltip",
            value: function updateTooltip() {
                var type = this.breakpointType;
                if (type === "CONDITIONAL_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.CONDITIONAL_BREAKPOINT */ ) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install(this.typeSelector.element, i18nString(UIStrings.pauseOnlyWhenTheConditionIsTrue));
                } else if (type === "LOGPOINT" /* SDK.DebuggerModel.BreakpointType.LOGPOINT */ ) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install(this.typeSelector.element, i18nString(UIStrings.logAMessageToConsoleDoNotBreak));
                }
            }
        },
        {
            key: "finishEditing",
            value: function finishEditing(committed, condition) {
                if (this.finished) {
                    return;
                }
                this.finished = true;
                this.editor.remove();
                _class_private_field_get(this, _history).pushHistoryItem(condition);
                var isLogpoint = this.breakpointType === "LOGPOINT" /* SDK.DebuggerModel.BreakpointType.LOGPOINT */ ;
                this.onFinish({
                    committed: committed,
                    condition: condition,
                    isLogpoint: isLogpoint
                });
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(BreakpointEditDialog.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _breakpointEditDialog_css_js__WEBPACK_IMPORTED_MODULE_8__["default"]
                ]);
            }
        },
        {
            key: "editorForTest",
            get: function get() {
                return this.editor;
            }
        }
    ]);
    return BreakpointEditDialog;
} //# sourceMappingURL=BreakpointEditDialog.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.Widget);


}),
"./panels/sources/breakpointEditDialog.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2018 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  z-index: 30;\n  padding: 4px;\n  background-color: var(--sys-color-surface3);\n  border-radius: 7px;\n  border: 2px solid var(--sys-color-divider);\n  width: 90%;\n  pointer-events: auto;\n}\n\n:host(.sources-edit-breakpoint-dialog) {\n  border-radius: 0;\n  z-index: 30;\n  background-color: var(--sys-color-surface3);\n  width: 555px;\n  pointer-events: auto;\n  margin-left: -1px;\n  padding: 0 10px 10px 5px;\n  border: 1px solid var(--sys-color-divider);\n}\n\n:host-context(.sources-edit-breakpoint-dialog) .condition-editor {\n  background-color: var(--sys-color-cdt-base-container);\n  margin: 0 6px 20px 3px;\n}\n\n:host-context(.sources-edit-breakpoint-dialog) .source-frame-breakpoint-toolbar {\n  font-family: sans-serif;\n  font-size: 12px;\n}\n\n:host-context(.sources-edit-breakpoint-dialog) .link,\n.devtools-link {\n  font-family: sans-serif;\n  font-size: 12px;\n  margin: 0 3px;\n}\n\n:host-context(.sources-edit-breakpoint-dialog) devtools-icon.link-icon {\n  vertical-align: sub;\n  margin-right: 0.5ch;\n  color: var(--icon-link);\n  width: 16px;\n  height: 16px;\n}\n\n:host-context(.sources-edit-breakpoint-dialog) .link-wrapper {\n  display: inline-flex;\n}\n\n:host-context(.sources-edit-breakpoint-dialog) .dialog-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n:host-context(.sources-edit-breakpoint-dialog) .dialog-header > devtools-icon:hover {\n  color: var(--icon-default-hover);\n}\n\n/*# sourceURL=breakpointEditDialog.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);