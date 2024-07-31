"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_sources_BreakpointEditDialog_ts"],{

/***/ "./src/panels/sources/BreakpointEditDialog.ts":
/*!****************************************************!*\
  !*** ./src/panels/sources/BreakpointEditDialog.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BreakpointEditDialog: () => (/* binding */ BreakpointEditDialog)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../third_party/codemirror.next/codemirror.next.js */ "./src/third_party/codemirror.next/codemirror.next.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/text_editor/text_editor.js */ "./src/ui/components/text_editor/text_editor.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './breakpointEditDialog.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _BreakpointEditDialog_history, _BreakpointEditDialog_editorHistory;









const { Direction } = _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_5__.TextEditorHistory;
const UIStrings = {
    /**
     *@description Screen reader label for a select box that chooses the breakpoint type in the Sources panel when editing a breakpoint
     */
    breakpointType: 'Breakpoint type',
    /**
     *@description Text in Breakpoint Edit Dialog of the Sources panel
     */
    breakpoint: 'Breakpoint',
    /**
     *@description Tooltip text in Breakpoint Edit Dialog of the Sources panel that shows up when hovering over the close icon
     */
    closeDialog: 'Close edit dialog and save changes',
    /**
     *@description Text in Breakpoint Edit Dialog of the Sources panel
     */
    conditionalBreakpoint: 'Conditional breakpoint',
    /**
     *@description Text in Breakpoint Edit Dialog of the Sources panel
     */
    logpoint: 'Logpoint',
    /**
     *@description Text in Breakpoint Edit Dialog of the Sources panel
     */
    expressionToCheckBeforePausingEg: 'Expression to check before pausing, e.g. x > 5',
    /**
     *@description Type selector element title in Breakpoint Edit Dialog of the Sources panel
     */
    pauseOnlyWhenTheConditionIsTrue: 'Pause only when the condition is true',
    /**
     * @description Link text in the Breakpoint Edit Dialog of the Sources panel
     */
    learnMoreOnBreakpointTypes: 'Learn more: Breakpoint Types',
    /**
     *@description Text in Breakpoint Edit Dialog of the Sources panel. It is used as
     *the placeholder for a text input field before the user enters text. Provides the user with
     *an example on how to use Logpoints. 'Log' is a verb and 'message' is a noun.
     *See: https://developer.chrome.com/blog/new-in-devtools-73/#logpoints
     */
    logMessageEgXIsX: 'Log message, e.g. `\'x is\', x`',
    /**
     *@description Type selector element title in Breakpoint Edit Dialog of the Sources panel
     */
    logAMessageToConsoleDoNotBreak: 'Log a message to Console, do not break',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/sources/BreakpointEditDialog.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class BreakpointEditDialog extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.Widget {
    constructor(editorLineNumber, oldCondition, isLogpoint, onFinish) {
        super(true);
        Object.defineProperty(this, "onFinish", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "finished", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "editor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "typeSelector", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "placeholderCompartment", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _BreakpointEditDialog_history.set(this, void 0);
        _BreakpointEditDialog_editorHistory.set(this, void 0);
        const editorConfig = [
            _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.javascript.javascriptLanguage,
            _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_5__.Config.baseConfiguration(oldCondition || ''),
            _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_5__.Config.closeBrackets.instance(),
            _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_5__.Config.autocompletion.instance(),
            _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.EditorView.lineWrapping,
            _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_5__.Config.showCompletionHint,
            _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_5__.Config.conservativeCompletion,
            _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.javascript.javascriptLanguage.data.of({
                autocomplete: (context) => __classPrivateFieldGet(this, _BreakpointEditDialog_editorHistory, "f").historyCompletions(context),
            }),
            _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.autocompletion(),
            _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_5__.JavaScript.argumentHints(),
        ];
        this.onFinish = onFinish;
        this.finished = false;
        this.element.tabIndex = -1;
        this.element.classList.add('sources-edit-breakpoint-dialog');
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.dialog('edit-breakpoint')}`);
        const header = this.contentElement.createChild('div', 'dialog-header');
        const toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar('source-frame-breakpoint-toolbar', header);
        toolbar.appendText(`Line ${editorLineNumber + 1}:`);
        this.typeSelector = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarComboBox(this.onTypeChanged.bind(this), i18nString(UIStrings.breakpointType), undefined, 'type');
        this.typeSelector.createOption(i18nString(UIStrings.breakpoint), _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT);
        const conditionalOption = this.typeSelector.createOption(i18nString(UIStrings.conditionalBreakpoint), _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.BreakpointType.CONDITIONAL_BREAKPOINT);
        const logpointOption = this.typeSelector.createOption(i18nString(UIStrings.logpoint), _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.BreakpointType.LOGPOINT);
        this.typeSelector.select(isLogpoint ? logpointOption : conditionalOption);
        toolbar.appendToolbarItem(this.typeSelector);
        const content = oldCondition || '';
        const finishIfComplete = (view) => {
            void _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_5__.JavaScript.isExpressionComplete(view.state.doc.toString()).then(complete => {
                if (complete) {
                    this.finishEditing(true, this.editor.state.doc.toString());
                }
                else {
                    _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.insertNewlineAndIndent(view);
                }
            });
            return true;
        };
        const keymap = [
            { key: 'ArrowUp', run: () => __classPrivateFieldGet(this, _BreakpointEditDialog_editorHistory, "f").moveHistory(Direction.BACKWARD) },
            { key: 'ArrowDown', run: () => __classPrivateFieldGet(this, _BreakpointEditDialog_editorHistory, "f").moveHistory(Direction.FORWARD) },
            { mac: 'Ctrl-p', run: () => __classPrivateFieldGet(this, _BreakpointEditDialog_editorHistory, "f").moveHistory(Direction.BACKWARD, true) },
            { mac: 'Ctrl-n', run: () => __classPrivateFieldGet(this, _BreakpointEditDialog_editorHistory, "f").moveHistory(Direction.FORWARD, true) },
            {
                key: 'Mod-Enter',
                run: finishIfComplete,
            },
            {
                key: 'Enter',
                run: finishIfComplete,
            },
            {
                key: 'Shift-Enter',
                run: _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.insertNewlineAndIndent,
            },
            {
                key: 'Escape',
                run: () => {
                    this.finishEditing(false, '');
                    return true;
                },
            },
        ];
        this.placeholderCompartment = new _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.Compartment();
        const editorWrapper = this.contentElement.appendChild(document.createElement('div'));
        editorWrapper.classList.add('condition-editor');
        editorWrapper.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.textField().track({ change: true })}`);
        this.editor = new _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_5__.TextEditor.TextEditor(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.EditorState.create({
            doc: content,
            selection: { anchor: 0, head: content.length },
            extensions: [
                this.placeholderCompartment.of(this.getPlaceholder()),
                _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.keymap.of(keymap),
                editorConfig,
            ],
        }));
        editorWrapper.appendChild(this.editor);
        const closeIcon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon();
        closeIcon.name = 'cross';
        closeIcon.title = i18nString(UIStrings.closeDialog);
        closeIcon.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.close().track({ click: true })}`);
        closeIcon.onclick = () => this.finishEditing(true, this.editor.state.doc.toString());
        header.appendChild(closeIcon);
        __classPrivateFieldSet(this, _BreakpointEditDialog_history, new _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_5__.AutocompleteHistory.AutocompleteHistory(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('breakpoint-condition-history', [])), "f");
        __classPrivateFieldSet(this, _BreakpointEditDialog_editorHistory, new _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_5__.TextEditorHistory.TextEditorHistory(this.editor, __classPrivateFieldGet(this, _BreakpointEditDialog_history, "f")), "f");
        const linkWrapper = this.contentElement.appendChild(document.createElement('div'));
        linkWrapper.classList.add('link-wrapper');
        const link = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Fragment.html `<x-link class="link devtools-link" tabindex="0" href="https://goo.gle/devtools-loc"
                                          jslog="${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.link('learn-more')}">${i18nString(UIStrings.learnMoreOnBreakpointTypes)}</x-link>`;
        const linkIcon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon();
        linkIcon.name = 'open-externally';
        linkIcon.classList.add('link-icon');
        link.prepend(linkIcon);
        linkWrapper.appendChild(link);
        this.updateTooltip();
    }
    saveAndFinish() {
        this.finishEditing(true, this.editor.state.doc.toString());
    }
    focusEditor() {
        this.editor.editor.focus();
    }
    onTypeChanged() {
        if (this.breakpointType === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT) {
            this.finishEditing(true, '');
            return;
        }
        this.focusEditor();
        this.editor.dispatch({ effects: this.placeholderCompartment.reconfigure(this.getPlaceholder()) });
        this.updateTooltip();
    }
    get breakpointType() {
        const option = this.typeSelector.selectedOption();
        return option ? option.value : null;
    }
    getPlaceholder() {
        const type = this.breakpointType;
        if (type === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.BreakpointType.CONDITIONAL_BREAKPOINT) {
            return _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.placeholder(i18nString(UIStrings.expressionToCheckBeforePausingEg));
        }
        if (type === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.BreakpointType.LOGPOINT) {
            return _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.placeholder(i18nString(UIStrings.logMessageEgXIsX));
        }
        return [];
    }
    updateTooltip() {
        const type = this.breakpointType;
        if (type === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.BreakpointType.CONDITIONAL_BREAKPOINT) {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install((this.typeSelector.element), i18nString(UIStrings.pauseOnlyWhenTheConditionIsTrue));
        }
        else if (type === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.BreakpointType.LOGPOINT) {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install((this.typeSelector.element), i18nString(UIStrings.logAMessageToConsoleDoNotBreak));
        }
    }
    finishEditing(committed, condition) {
        if (this.finished) {
            return;
        }
        this.finished = true;
        this.editor.remove();
        __classPrivateFieldGet(this, _BreakpointEditDialog_history, "f").pushHistoryItem(condition);
        const isLogpoint = this.breakpointType === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.BreakpointType.LOGPOINT;
        this.onFinish({ committed, condition: condition, isLogpoint });
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './breakpointEditDialog.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
    get editorForTest() {
        return this.editor;
    }
}
_BreakpointEditDialog_history = new WeakMap(), _BreakpointEditDialog_editorHistory = new WeakMap();


/***/ })

}]);