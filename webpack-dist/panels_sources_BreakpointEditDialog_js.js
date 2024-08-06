"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_sources_BreakpointEditDialog_js"],{

/***/ "./panels/sources/BreakpointEditDialog.js":
/*!************************************************!*\
  !*** ./panels/sources/BreakpointEditDialog.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BreakpointEditDialog: () => (/* binding */ BreakpointEditDialog)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../third_party/codemirror.next/codemirror.next.js */ "./third_party/codemirror.next/codemirror.next.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/text_editor/text_editor.js */ "./ui/components/text_editor/text_editor.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _breakpointEditDialog_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./breakpointEditDialog.css.js */ "./panels/sources/breakpointEditDialog.css.js");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









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
    onFinish;
    finished;
    editor;
    typeSelector;
    placeholderCompartment;
    #history;
    #editorHistory;
    constructor(editorLineNumber, oldCondition, isLogpoint, onFinish) {
        super(true);
        const editorConfig = [
            _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.javascript.javascriptLanguage,
            _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_5__.Config.baseConfiguration(oldCondition || ''),
            _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_5__.Config.closeBrackets.instance(),
            _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_5__.Config.autocompletion.instance(),
            _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.EditorView.lineWrapping,
            _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_5__.Config.showCompletionHint,
            _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_5__.Config.conservativeCompletion,
            _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.javascript.javascriptLanguage.data.of({
                autocomplete: (context) => this.#editorHistory.historyCompletions(context),
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
        this.typeSelector.createOption(i18nString(UIStrings.breakpoint), "REGULAR_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT */);
        const conditionalOption = this.typeSelector.createOption(i18nString(UIStrings.conditionalBreakpoint), "CONDITIONAL_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.CONDITIONAL_BREAKPOINT */);
        const logpointOption = this.typeSelector.createOption(i18nString(UIStrings.logpoint), "LOGPOINT" /* SDK.DebuggerModel.BreakpointType.LOGPOINT */);
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
            { key: 'ArrowUp', run: () => this.#editorHistory.moveHistory(-1 /* Direction.BACKWARD */) },
            { key: 'ArrowDown', run: () => this.#editorHistory.moveHistory(1 /* Direction.FORWARD */) },
            { mac: 'Ctrl-p', run: () => this.#editorHistory.moveHistory(-1 /* Direction.BACKWARD */, true) },
            { mac: 'Ctrl-n', run: () => this.#editorHistory.moveHistory(1 /* Direction.FORWARD */, true) },
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
        this.#history = new _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_5__.AutocompleteHistory.AutocompleteHistory(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('breakpoint-condition-history', []));
        this.#editorHistory = new _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_5__.TextEditorHistory.TextEditorHistory(this.editor, this.#history);
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
        if (this.breakpointType === "REGULAR_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT */) {
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
        if (type === "CONDITIONAL_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.CONDITIONAL_BREAKPOINT */) {
            return _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.placeholder(i18nString(UIStrings.expressionToCheckBeforePausingEg));
        }
        if (type === "LOGPOINT" /* SDK.DebuggerModel.BreakpointType.LOGPOINT */) {
            return _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.placeholder(i18nString(UIStrings.logMessageEgXIsX));
        }
        return [];
    }
    updateTooltip() {
        const type = this.breakpointType;
        if (type === "CONDITIONAL_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.CONDITIONAL_BREAKPOINT */) {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install((this.typeSelector.element), i18nString(UIStrings.pauseOnlyWhenTheConditionIsTrue));
        }
        else if (type === "LOGPOINT" /* SDK.DebuggerModel.BreakpointType.LOGPOINT */) {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install((this.typeSelector.element), i18nString(UIStrings.logAMessageToConsoleDoNotBreak));
        }
    }
    finishEditing(committed, condition) {
        if (this.finished) {
            return;
        }
        this.finished = true;
        this.editor.remove();
        this.#history.pushHistoryItem(condition);
        const isLogpoint = this.breakpointType === "LOGPOINT" /* SDK.DebuggerModel.BreakpointType.LOGPOINT */;
        this.onFinish({ committed, condition: condition, isLogpoint });
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([_breakpointEditDialog_css_js__WEBPACK_IMPORTED_MODULE_8__["default"]]);
    }
    get editorForTest() {
        return this.editor;
    }
}
//# sourceMappingURL=BreakpointEditDialog.js.map

/***/ }),

/***/ "./panels/sources/breakpointEditDialog.css.js":
/*!****************************************************!*\
  !*** ./panels/sources/breakpointEditDialog.css.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2018 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  z-index: 30;
  padding: 4px;
  background-color: var(--sys-color-surface3);
  border-radius: 7px;
  border: 2px solid var(--sys-color-divider);
  width: 90%;
  pointer-events: auto;
}

:host(.sources-edit-breakpoint-dialog) {
  border-radius: 0;
  z-index: 30;
  background-color: var(--sys-color-surface3);
  width: 555px;
  pointer-events: auto;
  margin-left: -1px;
  padding: 0 10px 10px 5px;
  border: 1px solid var(--sys-color-divider);
}

:host-context(.sources-edit-breakpoint-dialog) .condition-editor {
  background-color: var(--sys-color-cdt-base-container);
  margin: 0 6px 20px 3px;
}

:host-context(.sources-edit-breakpoint-dialog) .source-frame-breakpoint-toolbar {
  font-family: sans-serif;
  font-size: 12px;
}

:host-context(.sources-edit-breakpoint-dialog) .link,
.devtools-link {
  font-family: sans-serif;
  font-size: 12px;
  margin: 0 3px;
}

:host-context(.sources-edit-breakpoint-dialog) devtools-icon.link-icon {
  vertical-align: sub;
  margin-right: 0.5ch;
  color: var(--icon-link);
  width: 16px;
  height: 16px;
}

:host-context(.sources-edit-breakpoint-dialog) .link-wrapper {
  display: inline-flex;
}

:host-context(.sources-edit-breakpoint-dialog) .dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

:host-context(.sources-edit-breakpoint-dialog) .dialog-header > devtools-icon:hover {
  color: var(--icon-default-hover);
}

/*# sourceURL=breakpointEditDialog.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);