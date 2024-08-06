"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_sources_WatchExpressionsSidebarPane_js"],{

/***/ "./panels/sources/WatchExpressionsSidebarPane.js":
/*!*******************************************************!*\
  !*** ./panels/sources/WatchExpressionsSidebarPane.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WatchExpression: () => (/* binding */ WatchExpression),
/* harmony export */   WatchExpressionsSidebarPane: () => (/* binding */ WatchExpressionsSidebarPane)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_formatter_formatter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/formatter/formatter.js */ "./models/formatter/formatter.js");
/* harmony import */ var _models_source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/source_map_scopes/source_map_scopes.js */ "./models/source_map_scopes/source_map_scopes.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/object_ui.js */ "./ui/legacy/components/object_ui/object_ui.js");
/* harmony import */ var _ui_legacy_components_object_ui_objectValue_css_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/objectValue.css.js */ "./ui/legacy/components/object_ui/objectValue.css.js");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./UISourceCodeFrame.js */ "./panels/sources/UISourceCodeFrame.js");
/* harmony import */ var _watchExpressionsSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./watchExpressionsSidebarPane.css.js */ "./panels/sources/watchExpressionsSidebarPane.css.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * Copyright (C) IBM Corp. 2009  All rights reserved.
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
 *     * Neither the name of IBM Corp. nor the names of its
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
 */









// eslint-disable-next-line rulesdir/es_modules_import






const UIStrings = {
    /**
     *@description A context menu item in the Watch Expressions Sidebar Pane of the Sources panel
     */
    addWatchExpression: 'Add watch expression',
    /**
     *@description Tooltip/screen reader label of a button in the Sources panel that refreshes all watch expressions.
     */
    refreshWatchExpressions: 'Refresh watch expressions',
    /**
     *@description Empty element text content in Watch Expressions Sidebar Pane of the Sources panel
     */
    noWatchExpressions: 'No watch expressions',
    /**
     *@description A context menu item in the Watch Expressions Sidebar Pane of the Sources panel
     */
    deleteAllWatchExpressions: 'Delete all watch expressions',
    /**
     *@description A context menu item in the Watch Expressions Sidebar Pane of the Sources panel
     */
    addPropertyPathToWatch: 'Add property path to watch',
    /**
     *@description A context menu item in the Watch Expressions Sidebar Pane of the Sources panel
     */
    deleteWatchExpression: 'Delete watch expression',
    /**
     *@description Value element text content in Watch Expressions Sidebar Pane of the Sources panel
     */
    notAvailable: '<not available>',
    /**
     *@description A context menu item in the Watch Expressions Sidebar Pane of the Sources panel and Network pane request.
     */
    copyValue: 'Copy value',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/sources/WatchExpressionsSidebarPane.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
let watchExpressionsSidebarPaneInstance;
class WatchExpressionsSidebarPane extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ThrottledWidget.ThrottledWidget {
    watchExpressions;
    emptyElement;
    watchExpressionsSetting;
    addButton;
    refreshButton;
    treeOutline;
    expandController;
    linkifier;
    constructor() {
        super(true);
        // TODO(szuend): Replace with a Set once the web test
        // panels/sources/debugger-ui/watch-expressions-preserve-expansion.js is either converted
        // to an e2e test or no longer accesses this variable directly.
        this.watchExpressions = [];
        this.watchExpressionsSetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('watch-expressions', []);
        this.addButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Toolbar.ToolbarButton(i18nString(UIStrings.addWatchExpression), 'plus', undefined, 'add-watch-expression');
        this.addButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, _event => {
            void this.addButtonClicked();
        });
        this.refreshButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Toolbar.ToolbarButton(i18nString(UIStrings.refreshWatchExpressions), 'refresh', undefined, 'refresh-watch-expressions');
        this.refreshButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, this.update, this);
        this.contentElement.classList.add('watch-expressions');
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.section('sources.watch')}`);
        this.contentElement.addEventListener('contextmenu', this.contextMenu.bind(this), false);
        this.treeOutline = new _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_8__.ObjectPropertiesSection.ObjectPropertiesSectionsTreeOutline();
        this.treeOutline.hideOverflow();
        this.treeOutline.setShowSelectionOnKeyboardFocus(/* show */ true);
        this.expandController =
            new _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_8__.ObjectPropertiesSection.ObjectPropertiesSectionsTreeExpandController(this.treeOutline);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.RuntimeModel.ExecutionContext, this.update, this);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.CallFrame, this.update, this);
        this.linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_10__.Linkifier.Linkifier();
        this.update();
    }
    static instance() {
        if (!watchExpressionsSidebarPaneInstance) {
            watchExpressionsSidebarPaneInstance = new WatchExpressionsSidebarPane();
        }
        return watchExpressionsSidebarPaneInstance;
    }
    toolbarItems() {
        return [this.addButton, this.refreshButton];
    }
    focus() {
        if (this.hasFocus()) {
            return;
        }
        if (this.watchExpressions.length > 0) {
            this.treeOutline.forceSelect();
        }
    }
    hasExpressions() {
        return Boolean(this.watchExpressionsSetting.get().length);
    }
    saveExpressions() {
        const toSave = [];
        for (let i = 0; i < this.watchExpressions.length; i++) {
            const expression = this.watchExpressions[i].expression();
            if (expression) {
                toSave.push(expression);
            }
        }
        this.watchExpressionsSetting.set(toSave);
    }
    async addButtonClicked() {
        await _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ViewManager.ViewManager.instance().showView('sources.watch');
        this.emptyElement.classList.add('hidden');
        this.createWatchExpression(null).startEditing();
    }
    async doUpdate() {
        this.linkifier.reset();
        this.contentElement.removeChildren();
        this.treeOutline.removeChildren();
        this.watchExpressions = [];
        this.emptyElement = this.contentElement.createChild('div', 'gray-info-message');
        this.emptyElement.textContent = i18nString(UIStrings.noWatchExpressions);
        this.emptyElement.tabIndex = -1;
        const watchExpressionStrings = this.watchExpressionsSetting.get();
        if (watchExpressionStrings.length) {
            this.emptyElement.classList.add('hidden');
        }
        for (let i = 0; i < watchExpressionStrings.length; ++i) {
            const expression = watchExpressionStrings[i];
            if (!expression) {
                continue;
            }
            this.createWatchExpression(expression);
        }
    }
    createWatchExpression(expression) {
        this.contentElement.appendChild(this.treeOutline.element);
        const watchExpression = new WatchExpression(expression, this.expandController, this.linkifier);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ARIAUtils.setLabel(this.contentElement, i18nString(UIStrings.addWatchExpression));
        watchExpression.addEventListener("ExpressionUpdated" /* Events.ExpressionUpdated */, this.watchExpressionUpdated, this);
        this.treeOutline.appendChild(watchExpression.treeElement());
        this.watchExpressions.push(watchExpression);
        return watchExpression;
    }
    watchExpressionUpdated({ data: watchExpression }) {
        if (!watchExpression.expression()) {
            _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.ArrayUtilities.removeElement(this.watchExpressions, watchExpression);
            this.treeOutline.removeChild(watchExpression.treeElement());
            this.emptyElement.classList.toggle('hidden', Boolean(this.watchExpressions.length));
            if (this.watchExpressions.length === 0) {
                this.treeOutline.element.remove();
            }
        }
        this.saveExpressions();
    }
    contextMenu(event) {
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ContextMenu.ContextMenu(event);
        this.populateContextMenu(contextMenu, event);
        void contextMenu.show();
    }
    populateContextMenu(contextMenu, event) {
        let isEditing = false;
        for (const watchExpression of this.watchExpressions) {
            isEditing = isEditing || watchExpression.isEditing();
        }
        if (!isEditing) {
            contextMenu.debugSection().appendItem(i18nString(UIStrings.addWatchExpression), this.addButtonClicked.bind(this), { jslogContext: 'add-watch-expression' });
        }
        if (this.watchExpressions.length > 1) {
            contextMenu.debugSection().appendItem(i18nString(UIStrings.deleteAllWatchExpressions), this.deleteAllButtonClicked.bind(this), { jslogContext: 'delete-all-watch-expressions' });
        }
        const treeElement = this.treeOutline.treeElementFromEvent(event);
        if (!treeElement) {
            return;
        }
        const currentWatchExpression = this.watchExpressions.find(watchExpression => treeElement.hasAncestorOrSelf(watchExpression.treeElement()));
        if (currentWatchExpression) {
            currentWatchExpression.populateContextMenu(contextMenu, event);
        }
    }
    deleteAllButtonClicked() {
        this.watchExpressions = [];
        this.saveExpressions();
        this.update();
    }
    async focusAndAddExpressionToWatch(expression) {
        await _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ViewManager.ViewManager.instance().showView('sources.watch');
        this.createWatchExpression(expression);
        this.saveExpressions();
        this.update();
    }
    handleAction(_context, _actionId) {
        const frame = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Context.Context.instance().flavor(_UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_13__.UISourceCodeFrame);
        if (!frame) {
            return false;
        }
        const { state } = frame.textEditor;
        const text = state.sliceDoc(state.selection.main.from, state.selection.main.to);
        void this.focusAndAddExpressionToWatch(text);
        return true;
    }
    appendApplicableItems(_event, contextMenu, target) {
        if (target instanceof _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_8__.ObjectPropertiesSection.ObjectPropertyTreeElement) {
            if (!target.property.synthetic) {
                contextMenu.debugSection().appendItem(i18nString(UIStrings.addPropertyPathToWatch), () => this.focusAndAddExpressionToWatch(target.path()), { jslogContext: 'add-property-path-to-watch' });
            }
            return;
        }
        if (target.textEditor.state.selection.main.empty) {
            return;
        }
        contextMenu.debugSection().appendAction('sources.add-to-watch');
    }
    wasShown() {
        super.wasShown();
        this.treeOutline.registerCSSFiles([_watchExpressionsSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_14__["default"]]);
        this.registerCSSFiles([_watchExpressionsSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_14__["default"], _ui_legacy_components_object_ui_objectValue_css_js__WEBPACK_IMPORTED_MODULE_9__["default"]]);
    }
}
class WatchExpression extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    treeElementInternal;
    nameElement;
    valueElement;
    expressionInternal;
    expandController;
    element;
    editing;
    linkifier;
    textPrompt;
    result;
    preventClickTimeout;
    constructor(expression, expandController, linkifier) {
        super();
        this.expressionInternal = expression;
        this.expandController = expandController;
        this.element = document.createElement('div');
        this.element.classList.add('watch-expression');
        this.element.classList.add('monospace');
        this.editing = false;
        this.linkifier = linkifier;
        this.createWatchExpression();
        this.update();
    }
    treeElement() {
        return this.treeElementInternal;
    }
    expression() {
        return this.expressionInternal;
    }
    async #evaluateExpression(executionContext, expression) {
        const callFrame = executionContext.debuggerModel.selectedCallFrame();
        if (callFrame && callFrame.script.isJavaScript()) {
            const nameMap = await _models_source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_6__.NamesResolver.allVariablesInCallFrame(callFrame);
            try {
                expression =
                    await _models_formatter_formatter_js__WEBPACK_IMPORTED_MODULE_5__.FormatterWorkerPool.formatterWorkerPool().javaScriptSubstitute(expression, nameMap);
            }
            catch {
            }
        }
        return executionContext.evaluate({
            expression,
            objectGroup: WatchExpression.watchObjectGroupId,
            includeCommandLineAPI: false,
            silent: true,
            returnByValue: false,
            generatePreview: false,
        }, 
        /* userGesture */ false, 
        /* awaitPromise */ false);
    }
    update() {
        const currentExecutionContext = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.RuntimeModel.ExecutionContext);
        if (currentExecutionContext && this.expressionInternal) {
            void this.#evaluateExpression(currentExecutionContext, this.expressionInternal).then(result => {
                if ('object' in result) {
                    this.createWatchExpression(result.object, result.exceptionDetails);
                }
                else {
                    this.createWatchExpression();
                }
            });
        }
        else {
            this.createWatchExpression();
        }
    }
    startEditing() {
        this.editing = true;
        this.treeElementInternal.setDisableSelectFocus(true);
        this.element.removeChildren();
        const newDiv = this.element.createChild('div');
        newDiv.textContent = this.nameElement.textContent;
        this.textPrompt = new _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_8__.ObjectPropertiesSection.ObjectPropertyPrompt();
        this.textPrompt.renderAsBlock();
        const proxyElement = this.textPrompt.attachAndStartEditing(newDiv, this.finishEditing.bind(this));
        this.treeElementInternal.listItemElement.classList.add('watch-expression-editing');
        this.treeElementInternal.collapse();
        proxyElement.classList.add('watch-expression-text-prompt-proxy');
        proxyElement.addEventListener('keydown', this.promptKeyDown.bind(this), false);
        const selection = this.element.getComponentSelection();
        if (selection) {
            selection.selectAllChildren(newDiv);
        }
    }
    isEditing() {
        return Boolean(this.editing);
    }
    finishEditing(event, canceled) {
        if (event) {
            event.consume(canceled);
        }
        this.editing = false;
        this.treeElementInternal.setDisableSelectFocus(false);
        this.treeElementInternal.listItemElement.classList.remove('watch-expression-editing');
        if (this.textPrompt) {
            this.textPrompt.detach();
            const newExpression = canceled ? this.expressionInternal : this.textPrompt.text();
            this.textPrompt = undefined;
            this.element.removeChildren();
            this.updateExpression(newExpression);
        }
    }
    dblClickOnWatchExpression(event) {
        event.consume();
        if (!this.isEditing()) {
            this.startEditing();
        }
    }
    updateExpression(newExpression) {
        if (this.expressionInternal) {
            this.expandController.stopWatchSectionsWithId(this.expressionInternal);
        }
        this.expressionInternal = newExpression;
        this.update();
        this.dispatchEventToListeners("ExpressionUpdated" /* Events.ExpressionUpdated */, this);
    }
    deleteWatchExpression(event) {
        event.consume(true);
        this.updateExpression(null);
    }
    createWatchExpression(result, exceptionDetails) {
        this.result = result || null;
        this.element.removeChildren();
        const oldTreeElement = this.treeElementInternal;
        this.createWatchExpressionTreeElement(result, exceptionDetails);
        if (oldTreeElement && oldTreeElement.parent) {
            const root = oldTreeElement.parent;
            const index = root.indexOfChild(oldTreeElement);
            root.removeChild(oldTreeElement);
            root.insertChild(this.treeElementInternal, index);
        }
        this.treeElementInternal.select();
    }
    createWatchExpressionHeader(expressionValue, exceptionDetails) {
        const headerElement = this.element.createChild('div', 'watch-expression-header');
        const deleteButton = new _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_7__.Button.Button();
        deleteButton.data = {
            variant: "icon" /* Buttons.Button.Variant.ICON */,
            iconName: 'bin',
            size: "SMALL" /* Buttons.Button.Size.SMALL */,
            jslogContext: 'delete-watch-expression',
        };
        deleteButton.className = 'watch-expression-delete-button';
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Tooltip.Tooltip.install(deleteButton, i18nString(UIStrings.deleteWatchExpression));
        deleteButton.addEventListener('click', this.deleteWatchExpression.bind(this), false);
        deleteButton.addEventListener('keydown', event => {
            if (event.key === 'Enter') {
                this.deleteWatchExpression(event);
            }
        });
        const titleElement = headerElement.createChild('div', 'watch-expression-title tree-element-title');
        titleElement.appendChild(deleteButton);
        this.nameElement =
            _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_8__.ObjectPropertiesSection.ObjectPropertiesSection.createNameElement(this.expressionInternal);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Tooltip.Tooltip.install(this.nameElement, this.expressionInternal);
        if (Boolean(exceptionDetails) || !expressionValue) {
            this.valueElement = document.createElement('span');
            this.valueElement.classList.add('watch-expression-error');
            this.valueElement.classList.add('value');
            titleElement.classList.add('dimmed');
            this.valueElement.textContent = i18nString(UIStrings.notAvailable);
            if (exceptionDetails !== undefined && exceptionDetails.exception !== undefined &&
                exceptionDetails.exception.description !== undefined) {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Tooltip.Tooltip.install(this.valueElement, exceptionDetails.exception.description);
            }
        }
        else {
            const propertyValue = _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_8__.ObjectPropertiesSection.ObjectPropertiesSection.createPropertyValueWithCustomSupport(expressionValue, Boolean(exceptionDetails), false /* showPreview */, titleElement, this.linkifier);
            this.valueElement = propertyValue.element;
        }
        const separatorElement = document.createElement('span');
        separatorElement.classList.add('watch-expressions-separator');
        separatorElement.textContent = ': ';
        titleElement.append(this.nameElement, separatorElement, this.valueElement);
        return headerElement;
    }
    createWatchExpressionTreeElement(expressionValue, exceptionDetails) {
        const headerElement = this.createWatchExpressionHeader(expressionValue, exceptionDetails);
        if (!exceptionDetails && expressionValue && expressionValue.hasChildren && !expressionValue.customPreview()) {
            headerElement.classList.add('watch-expression-object-header');
            this.treeElementInternal = new _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_8__.ObjectPropertiesSection.RootElement(expressionValue, this.linkifier);
            this.expandController.watchSection(this.expressionInternal, this.treeElementInternal);
            this.treeElementInternal.toggleOnClick = false;
            this.treeElementInternal.listItemElement.addEventListener('click', this.onSectionClick.bind(this), false);
            this.treeElementInternal.listItemElement.addEventListener('dblclick', this.dblClickOnWatchExpression.bind(this));
        }
        else {
            headerElement.addEventListener('dblclick', this.dblClickOnWatchExpression.bind(this));
            this.treeElementInternal = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.TreeOutline.TreeElement();
        }
        this.treeElementInternal.title = this.element;
        this.treeElementInternal.listItemElement.classList.add('watch-expression-tree-item');
        this.treeElementInternal.listItemElement.addEventListener('keydown', event => {
            if (event.key === 'Enter' && !this.isEditing()) {
                this.startEditing();
                event.consume(true);
            }
            else if (event.key === 'Delete' && !this.isEditing()) {
                this.deleteWatchExpression(event);
            }
        });
    }
    onSectionClick(event) {
        event.consume(true);
        const mouseEvent = event;
        if (mouseEvent.detail === 1) {
            this.preventClickTimeout = window.setTimeout(handleClick.bind(this), 333);
        }
        else if (this.preventClickTimeout !== undefined) {
            window.clearTimeout(this.preventClickTimeout);
            this.preventClickTimeout = undefined;
        }
        function handleClick() {
            if (!this.treeElementInternal) {
                return;
            }
            if (this.treeElementInternal.expanded) {
                this.treeElementInternal.collapse();
            }
            else if (!this.editing) {
                this.treeElementInternal.expand();
            }
        }
    }
    promptKeyDown(event) {
        const isEscapeKey = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.KeyboardUtilities.isEscKey(event);
        if (event.key === 'Enter' || isEscapeKey) {
            this.finishEditing(event, isEscapeKey);
        }
    }
    populateContextMenu(contextMenu, event) {
        if (!this.isEditing()) {
            contextMenu.editSection().appendItem(i18nString(UIStrings.deleteWatchExpression), this.updateExpression.bind(this, null), { jslogContext: 'delete-watch-expression' });
        }
        if (!this.isEditing() && this.result && (this.result.type === 'number' || this.result.type === 'string')) {
            contextMenu.clipboardSection().appendItem(i18nString(UIStrings.copyValue), this.copyValueButtonClicked.bind(this), { jslogContext: 'copy-watch-expression-value' });
        }
        const target = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.UIUtils.deepElementFromEvent(event);
        if (target && this.valueElement.isSelfOrAncestor(target) && this.result) {
            contextMenu.appendApplicableItems(this.result);
        }
    }
    copyValueButtonClicked() {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(this.valueElement.textContent);
    }
    static watchObjectGroupId = 'watch-group';
}
//# sourceMappingURL=WatchExpressionsSidebarPane.js.map

/***/ }),

/***/ "./panels/sources/watchExpressionsSidebarPane.css.js":
/*!***********************************************************!*\
  !*** ./panels/sources/watchExpressionsSidebarPane.css.js ***!
  \***********************************************************/
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
 * Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.watch-expression-delete-button {
  position: absolute;
  opacity: 0%;
  right: 0;

  .watch-expression-title:hover & {
    opacity: 100%;
  }

  .watch-expression-title:focus-within & {
    opacity: 100%;
  }
}

:host-context(.theme-with-dark-background) .watch-expression-delete-button {
  /* This is a workaround due to a sprite with hardcoded color.
     It should no longer be necessary after we update icons. */
  filter: brightness(1.5);
}

.watch-expressions {
  min-height: 26px;
}

.watch-expression-title {
  white-space: nowrap;
  line-height: 20px;
  display: flex;
}

.watch-expression-title:hover,
.watch-expression-title:focus-within {
  padding-right: 26px;
}

.watch-expression-object-header .watch-expression-title {
  margin-left: 1px;
}

.watch-expression {
  position: relative;
  flex: auto;
  min-height: 20px;
}

.watch-expression .name {
  color: var(--sys-color-purple);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  flex-shrink: 1000000;
  min-width: 2em;
}

.watch-expression-error {
  color: var(--sys-color-error);
}

.watch-expressions-separator {
  flex-shrink: 0;
  flex-grow: 0;
}

.watch-expression .value {
  white-space: nowrap;
  display: inline;
  overflow: hidden;
  padding-left: 4px;
  text-overflow: ellipsis;
  flex-shrink: 1;
}

.watch-expression .text-prompt {
  text-overflow: clip;
  overflow: hidden;
  white-space: nowrap;
  padding-left: 4px;
  min-height: 18px;
  line-height: 18px;
  user-select: text;
}

.watch-expression-text-prompt-proxy {
  margin: 2px 12px 2px -4px;
  padding-bottom: 3px;
}

.watch-expression-header {
  flex: auto;
  margin-left: -16px;
  padding-left: 15px;
}

li.watch-expression-tree-item {
  padding-left: 4px;
}

li.watch-expression-tree-item.selected {
  background: var(--sys-color-neutral-container);
}

li.watch-expression-tree-item.selected:focus {
  background: var(--sys-color-tonal-container);
}

li.watch-expression-tree-item.selected:focus-within:focus-visible {
  background: var(--sys-color-tonal-container);
}

.watch-expression-header:focus-visible {
  background: var(--sys-color-tonal-container);
}

li.watch-expression-editing::before {
  background-color: transparent;
}

@media (forced-colors: active) {
  .watch-expression-title:hover .watch-expression-delete-button,
  .watch-expressions .dimmed {
    opacity: 100%;
  }

  li.watch-expression-tree-item * {
    forced-color-adjust: none;
    color: ButtonText;
  }

  li.watch-expression-tree-item:hover {
    forced-color-adjust: none;
    background-color: Highlight;
  }

  li.watch-expression-tree-item:hover * {
    color: HighlightText;
  }

  li.watch-expression-tree-item:hover .watch-expression-delete-button {
    background-color: HighlightText;
  }
}

/*# sourceURL=watchExpressionsSidebarPane.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);