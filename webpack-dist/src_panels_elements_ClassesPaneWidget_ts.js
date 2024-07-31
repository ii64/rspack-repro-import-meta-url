"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_ClassesPaneWidget_ts"],{

/***/ "./src/panels/elements/ClassesPaneWidget.ts":
/*!**************************************************!*\
  !*** ./src/panels/elements/ClassesPaneWidget.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonProvider: () => (/* binding */ ButtonProvider),
/* harmony export */   ClassNamePrompt: () => (/* binding */ ClassNamePrompt),
/* harmony export */   ClassesPaneWidget: () => (/* binding */ ClassesPaneWidget)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './classesPaneWidget.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ElementsPanel.js */ "./src/panels/elements/ElementsPanel.ts");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








const UIStrings = {
    /**
     * @description Prompt text for a text field in the Classes Pane Widget of the Elements panel.
     * Class refers to a CSS class.
     */
    addNewClass: 'Add new class',
    /**
     * @description Screen reader announcement string when adding a CSS class via the Classes Pane Widget.
     * @example {vbox flex-auto} PH1
     */
    classesSAdded: 'Classes {PH1} added',
    /**
     * @description Screen reader announcement string when adding a class via the Classes Pane Widget.
     * @example {title-container} PH1
     */
    classSAdded: 'Class {PH1} added',
    /**
     * @description Accessible title read by screen readers for the Classes Pane Widget of the Elements
     * panel. Element is a HTML DOM Element and classes refers to CSS classes.
     */
    elementClasses: 'Element Classes',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/elements/ClassesPaneWidget.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class ClassesPaneWidget extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.Widget {
    constructor() {
        super(true);
        Object.defineProperty(this, "input", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "classesContainer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "prompt", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "mutatingNodes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "pendingNodeClasses", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "updateNodeThrottler", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "previousTarget", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.contentElement.className = 'styles-element-classes-pane';
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.pane('elements-classes')}`);
        const container = this.contentElement.createChild('div', 'title-container');
        this.input = container.createChild('div', 'new-class-input monospace');
        this.setDefaultFocusedElement(this.input);
        this.classesContainer = this.contentElement.createChild('div', 'source-code');
        this.classesContainer.classList.add('styles-element-classes-container');
        this.prompt = new ClassNamePrompt(this.nodeClasses.bind(this));
        this.prompt.setAutocompletionTimeout(0);
        this.prompt.renderAsBlock();
        const proxyElement = this.prompt.attach(this.input);
        this.prompt.setPlaceholder(i18nString(UIStrings.addNewClass));
        this.prompt.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TextPrompt.Events.TextChanged, this.onTextChanged, this);
        proxyElement.addEventListener('keydown', this.onKeyDown.bind(this), false);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.Events.DOMMutated, this.onDOMMutated, this, { scoped: true });
        this.mutatingNodes = new Set();
        this.pendingNodeClasses = new Map();
        this.updateNodeThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(0);
        this.previousTarget = null;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMNode, this.onSelectedNodeChanged, this);
    }
    splitTextIntoClasses(text) {
        return text.split(/[,\s]/).map(className => className.trim()).filter(className => className.length);
    }
    onKeyDown(event) {
        if (!(event.key === 'Enter') && !_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.KeyboardUtilities.isEscKey(event)) {
            return;
        }
        if (event.key === 'Enter') {
            event.consume();
            if (this.prompt.acceptAutoComplete()) {
                return;
            }
        }
        const eventTarget = event.target;
        let text = eventTarget.textContent;
        if (_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.KeyboardUtilities.isEscKey(event)) {
            if (!_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.isWhitespace(text)) {
                event.consume(true);
            }
            text = '';
        }
        this.prompt.clearAutocomplete();
        eventTarget.textContent = '';
        const node = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMNode);
        if (!node) {
            return;
        }
        const classNames = this.splitTextIntoClasses(text);
        if (!classNames.length) {
            this.installNodeClasses(node);
            return;
        }
        for (const className of classNames) {
            this.toggleClass(node, className, true);
        }
        // annoucementString is used for screen reader to announce that the class(es) has been added successfully.
        const joinClassString = classNames.join(' ');
        const announcementString = classNames.length > 1 ? i18nString(UIStrings.classesSAdded, { PH1: joinClassString }) :
            i18nString(UIStrings.classSAdded, { PH1: joinClassString });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.alert(announcementString);
        this.installNodeClasses(node);
        this.update();
    }
    onTextChanged() {
        const node = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMNode);
        if (!node) {
            return;
        }
        this.installNodeClasses(node);
    }
    onDOMMutated(event) {
        const node = event.data;
        if (this.mutatingNodes.has(node)) {
            return;
        }
        cachedClassesMap.delete(node);
        this.update();
    }
    onSelectedNodeChanged(event) {
        if (this.previousTarget && this.prompt.text()) {
            this.input.textContent = '';
            this.installNodeClasses(this.previousTarget);
        }
        this.previousTarget = event.data;
        this.update();
    }
    wasShown() {
        super.wasShown();
        this.update();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './classesPaneWidget.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
    update() {
        if (!this.isShowing()) {
            return;
        }
        let node = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMNode);
        if (node) {
            node = node.enclosingElementOrSelf();
        }
        this.classesContainer.removeChildren();
        // @ts-ignore this.input is a div, not an input element. So this line makes no sense at all
        this.input.disabled = !node;
        if (!node) {
            return;
        }
        const classes = this.nodeClasses(node);
        const keys = [...classes.keys()];
        keys.sort(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.caseInsensetiveComparator);
        for (const className of keys) {
            const label = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.CheckboxLabel.create(className, classes.get(className), undefined, 'element-class', true);
            label.classList.add('monospace');
            label.checkboxElement.addEventListener('click', this.onClick.bind(this, className), false);
            this.classesContainer.appendChild(label);
        }
    }
    onClick(className, event) {
        const node = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMNode);
        if (!node) {
            return;
        }
        const enabled = event.target.checked;
        this.toggleClass(node, className, enabled);
        this.installNodeClasses(node);
    }
    nodeClasses(node) {
        let result = cachedClassesMap.get(node);
        if (!result) {
            const classAttribute = node.getAttribute('class') || '';
            const classes = classAttribute.split(/\s/);
            result = new Map();
            for (let i = 0; i < classes.length; ++i) {
                const className = classes[i].trim();
                if (!className.length) {
                    continue;
                }
                result.set(className, true);
            }
            cachedClassesMap.set(node, result);
        }
        return result;
    }
    toggleClass(node, className, enabled) {
        const classes = this.nodeClasses(node);
        classes.set(className, enabled);
        ButtonProvider.instance().item().setChecked([...classes.values()].includes(true));
    }
    installNodeClasses(node) {
        const classes = this.nodeClasses(node);
        const activeClasses = new Set();
        for (const className of classes.keys()) {
            if (classes.get(className)) {
                activeClasses.add(className);
            }
        }
        const additionalClasses = this.splitTextIntoClasses(this.prompt.textWithCurrentSuggestion());
        for (const className of additionalClasses) {
            activeClasses.add(className);
        }
        const newClasses = [...activeClasses.values()].sort();
        this.pendingNodeClasses.set(node, newClasses.join(' '));
        void this.updateNodeThrottler.schedule(this.flushPendingClasses.bind(this));
    }
    async flushPendingClasses() {
        const promises = [];
        for (const node of this.pendingNodeClasses.keys()) {
            this.mutatingNodes.add(node);
            const promise = node.setAttributeValuePromise('class', this.pendingNodeClasses.get(node))
                .then(onClassValueUpdated.bind(this, node));
            promises.push(promise);
        }
        this.pendingNodeClasses.clear();
        await Promise.all(promises);
        function onClassValueUpdated(node) {
            this.mutatingNodes.delete(node);
        }
    }
}
const cachedClassesMap = new WeakMap();
let buttonProviderInstance;
class ButtonProvider {
    constructor() {
        Object.defineProperty(this, "button", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "view", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.button = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Toolbar.ToolbarToggle(i18nString(UIStrings.elementClasses), 'class');
        this.button.element.style.setProperty('--dot-toggle-top', '12px');
        this.button.element.style.setProperty('--dot-toggle-left', '18px');
        this.button.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.toggleSubpane('elements-classes').track({ click: true })}`);
        this.button.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Toolbar.ToolbarButton.Events.Click, this.clicked, this);
        this.view = new ClassesPaneWidget();
    }
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!buttonProviderInstance || forceNew) {
            buttonProviderInstance = new ButtonProvider();
        }
        return buttonProviderInstance;
    }
    clicked() {
        _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_7__.ElementsPanel.instance().showToolbarPane(!this.view.isShowing() ? this.view : null, this.button);
    }
    item() {
        return this.button;
    }
}
class ClassNamePrompt extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TextPrompt.TextPrompt {
    constructor(nodeClasses) {
        super();
        Object.defineProperty(this, "nodeClasses", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "selectedFrameId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "classNamesPromise", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.nodeClasses = nodeClasses;
        this.initialize(this.buildClassNameCompletions.bind(this), ' ');
        this.disableDefaultSuggestionForEmptyInput();
        this.selectedFrameId = '';
        this.classNamesPromise = null;
    }
    async getClassNames(selectedNode) {
        const promises = [];
        const completions = new Set();
        this.selectedFrameId = selectedNode.frameId();
        const cssModel = selectedNode.domModel().cssModel();
        const allStyleSheets = cssModel.allStyleSheets();
        for (const stylesheet of allStyleSheets) {
            if (stylesheet.frameId !== this.selectedFrameId) {
                continue;
            }
            const cssPromise = cssModel.getClassNames(stylesheet.id).then(classes => {
                for (const className of classes) {
                    completions.add(className);
                }
            });
            promises.push(cssPromise);
        }
        const ownerDocumentId = (selectedNode.ownerDocument.id);
        const domPromise = selectedNode.domModel().classNamesPromise(ownerDocumentId).then(classes => {
            for (const className of classes) {
                completions.add(className);
            }
        });
        promises.push(domPromise);
        await Promise.all(promises);
        return [...completions];
    }
    async buildClassNameCompletions(expression, prefix, force) {
        if (!prefix || force) {
            this.classNamesPromise = null;
        }
        const selectedNode = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMNode);
        if (!selectedNode || (!prefix && !force && !expression.trim())) {
            return [];
        }
        if (!this.classNamesPromise || this.selectedFrameId !== selectedNode.frameId()) {
            this.classNamesPromise = this.getClassNames(selectedNode);
        }
        let completions = await this.classNamesPromise;
        const classesMap = this.nodeClasses(selectedNode);
        completions = completions.filter(value => !classesMap.get(value));
        if (prefix[0] === '.') {
            completions = completions.map(value => '.' + value);
        }
        return completions.filter(value => value.startsWith(prefix)).sort().map(completion => {
            return {
                text: completion,
                title: undefined,
                subtitle: undefined,
                priority: undefined,
                isSecondary: undefined,
                subtitleRenderer: undefined,
                selectionRange: undefined,
                hideGhostText: undefined,
                iconElement: undefined,
            };
        });
    }
}


/***/ })

}]);