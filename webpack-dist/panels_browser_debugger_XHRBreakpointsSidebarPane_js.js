"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_browser_debugger_XHRBreakpointsSidebarPane_js"],{

/***/ "./panels/browser_debugger/XHRBreakpointsSidebarPane.js":
/*!**************************************************************!*\
  !*** ./panels/browser_debugger/XHRBreakpointsSidebarPane.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XHRBreakpointsSidebarPane: () => (/* binding */ XHRBreakpointsSidebarPane)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _xhrBreakpointsSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./xhrBreakpointsSidebarPane.css.js */ "./panels/browser_debugger/xhrBreakpointsSidebarPane.css.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const UIStrings = {
    /**
     *@description Title of the 'XHR/fetch Breakpoints' tool in the bottom sidebar of the Sources tool
     */
    xhrfetchBreakpoints: 'XHR/fetch Breakpoints',
    /**
     *@description Text to indicate there are no breakpoints
     */
    noBreakpoints: 'No breakpoints',
    /**
     *@description Label for a button in the Sources panel that opens the input field to create a new XHR/fetch breakpoint.
     */
    addXhrfetchBreakpoint: 'Add XHR/fetch breakpoint',
    /**
     *@description Text to add a breakpoint
     */
    addBreakpoint: 'Add breakpoint',
    /**
     *@description Input element container text content in XHRBreakpoints Sidebar Pane of the JavaScript Debugging pane in the Sources panel or the DOM Breakpoints pane in the Elements panel
     */
    breakWhenUrlContains: 'Break when URL contains:',
    /**
     *@description Accessible label for XHR/fetch breakpoint text input
     */
    urlBreakpoint: 'URL Breakpoint',
    /**
     *@description Text in XHRBreakpoints Sidebar Pane of the JavaScript Debugging pane in the Sources panel or the DOM Breakpoints pane in the Elements panel
     *@example {example.com} PH1
     */
    urlContainsS: 'URL contains "{PH1}"',
    /**
     *@description Text in XHRBreakpoints Sidebar Pane of the JavaScript Debugging pane in the Sources panel or the DOM Breakpoints pane in the Elements panel
     */
    anyXhrOrFetch: 'Any XHR or fetch',
    /**
     *@description Screen reader description of a hit breakpoint in the Sources panel
     */
    breakpointHit: 'breakpoint hit',
    /**
     *@description Text to remove all breakpoints
     */
    removeAllBreakpoints: 'Remove all breakpoints',
    /**
     *@description Text to remove a breakpoint
     */
    removeBreakpoint: 'Remove breakpoint',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/browser_debugger/XHRBreakpointsSidebarPane.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
const containerToBreakpointEntry = new WeakMap();
const breakpointEntryToCheckbox = new WeakMap();
let xhrBreakpointsSidebarPaneInstance;
class XHRBreakpointsSidebarPane extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.VBox {
    #breakpoints;
    #list;
    #emptyElement;
    #breakpointElements;
    #addButton;
    // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    #hitBreakpoint;
    constructor() {
        super(true);
        this.#breakpoints = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ListModel.ListModel();
        this.#list = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ListControl.ListControl(this.#breakpoints, this, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ListControl.ListMode.NonViewport);
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.section('source.xhr-breakpoints')}`);
        this.contentElement.appendChild(this.#list.element);
        this.#list.element.classList.add('breakpoint-list', 'hidden');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.markAsList(this.#list.element);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.setLabel(this.#list.element, i18nString(UIStrings.xhrfetchBreakpoints));
        this.#emptyElement = this.contentElement.createChild('div', 'gray-info-message');
        this.#emptyElement.textContent = i18nString(UIStrings.noBreakpoints);
        this.#breakpointElements = new Map();
        this.#addButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarButton(i18nString(UIStrings.addXhrfetchBreakpoint), 'plus', undefined, 'sources.add-xhr-fetch-breakpoint');
        this.#addButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, () => {
            void this.addButtonClicked();
        });
        this.#emptyElement.addEventListener('contextmenu', this.emptyElementContextMenu.bind(this), true);
        this.#emptyElement.tabIndex = -1;
        this.restoreBreakpoints();
        this.update();
    }
    static instance() {
        if (!xhrBreakpointsSidebarPaneInstance) {
            xhrBreakpointsSidebarPaneInstance = new XHRBreakpointsSidebarPane();
        }
        return xhrBreakpointsSidebarPaneInstance;
    }
    toolbarItems() {
        return [this.#addButton];
    }
    emptyElementContextMenu(event) {
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ContextMenu.ContextMenu(event);
        contextMenu.defaultSection().appendItem(i18nString(UIStrings.addBreakpoint), this.addButtonClicked.bind(this), { jslogContext: 'sources.add-xhr-fetch-breakpoint' });
        void contextMenu.show();
    }
    async addButtonClicked() {
        await _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ViewManager.ViewManager.instance().showView('sources.xhr-breakpoints');
        const inputElementContainer = document.createElement('p');
        inputElementContainer.classList.add('breakpoint-condition');
        inputElementContainer.textContent = i18nString(UIStrings.breakWhenUrlContains);
        inputElementContainer.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.value('condition').track({ change: true })}`);
        const inputElement = inputElementContainer.createChild('span', 'breakpoint-condition-input');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.setLabel(inputElement, i18nString(UIStrings.urlBreakpoint));
        this.addListElement(inputElementContainer, this.#list.element.firstChild);
        function finishEditing(accept, e, text) {
            this.removeListElement(inputElementContainer);
            if (accept) {
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMDebuggerModel.DOMDebuggerManager.instance().addXHRBreakpoint(text, true);
                this.setBreakpoint(text);
            }
            this.update();
        }
        const config = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.InplaceEditor.Config(finishEditing.bind(this, true), finishEditing.bind(this, false));
        // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.InplaceEditor.InplaceEditor.startEditing(inputElement, config);
    }
    heightForItem(_item) {
        return 0;
    }
    isItemSelectable(_item) {
        return true;
    }
    setBreakpoint(breakKeyword) {
        if (this.#breakpoints.indexOf(breakKeyword) !== -1) {
            this.#list.refreshItem(breakKeyword);
        }
        else {
            this.#breakpoints.insertWithComparator(breakKeyword, (a, b) => {
                if (a > b) {
                    return 1;
                }
                if (a < b) {
                    return -1;
                }
                return 0;
            });
        }
        if (!this.#list.selectedItem() || !this.hasFocus()) {
            this.#list.selectItem(this.#breakpoints.at(0));
        }
    }
    createElementForItem(item) {
        const listItemElement = document.createElement('div');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.markAsListitem(listItemElement);
        const element = listItemElement.createChild('div', 'breakpoint-entry');
        containerToBreakpointEntry.set(listItemElement, element);
        const enabled = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMDebuggerModel.DOMDebuggerManager.instance().xhrBreakpoints().get(item) || false;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.markAsCheckbox(element);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.setChecked(element, enabled);
        element.addEventListener('contextmenu', this.contextMenu.bind(this, item), true);
        const title = item ? i18nString(UIStrings.urlContainsS, { PH1: item }) : i18nString(UIStrings.anyXhrOrFetch);
        const label = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.CheckboxLabel.create(title, enabled, undefined, undefined, /* small */ true);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.markAsHidden(label);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.setLabel(element, title);
        element.appendChild(label);
        label.checkboxElement.addEventListener('click', this.checkboxClicked.bind(this, item, enabled), false);
        element.addEventListener('click', event => {
            if (event.target === element) {
                this.checkboxClicked(item, enabled);
            }
        }, false);
        breakpointEntryToCheckbox.set(element, label.checkboxElement);
        label.checkboxElement.tabIndex = -1;
        element.tabIndex = -1;
        if (item === this.#list.selectedItem()) {
            element.tabIndex = 0;
            this.setDefaultFocusedElement(element);
        }
        element.addEventListener('keydown', event => {
            let handled = false;
            if (event.key === ' ') {
                this.checkboxClicked(item, enabled);
                handled = true;
            }
            else if (event.key === 'Enter') {
                this.labelClicked(item);
                handled = true;
            }
            if (handled) {
                event.consume(true);
            }
        });
        if (item === this.#hitBreakpoint) {
            element.classList.add('breakpoint-hit');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.setDescription(element, i18nString(UIStrings.breakpointHit));
        }
        label.classList.add('cursor-auto');
        label.textElement.addEventListener('dblclick', this.labelClicked.bind(this, item), false);
        this.#breakpointElements.set(item, listItemElement);
        listItemElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.item().track({
            click: true,
            dblclick: true,
            keydown: 'ArrowUp|ArrowDown|PageUp|PageDown|Enter|Space',
        })}`);
        return listItemElement;
    }
    selectedItemChanged(from, to, fromElement, toElement) {
        if (fromElement) {
            const breakpointEntryElement = containerToBreakpointEntry.get(fromElement);
            if (!breakpointEntryElement) {
                throw new Error('Expected breakpoint entry to be found for an element');
            }
            breakpointEntryElement.tabIndex = -1;
        }
        if (toElement) {
            const breakpointEntryElement = containerToBreakpointEntry.get(toElement);
            if (!breakpointEntryElement) {
                throw new Error('Expected breakpoint entry to be found for an element');
            }
            this.setDefaultFocusedElement(breakpointEntryElement);
            breakpointEntryElement.tabIndex = 0;
            if (this.hasFocus()) {
                breakpointEntryElement.focus();
            }
        }
    }
    updateSelectedItemARIA(_fromElement, _toElement) {
        return true;
    }
    removeBreakpoint(breakKeyword) {
        const index = this.#breakpoints.indexOf(breakKeyword);
        if (index >= 0) {
            this.#breakpoints.remove(index);
        }
        this.#breakpointElements.delete(breakKeyword);
        this.update();
    }
    addListElement(element, beforeNode) {
        this.#list.element.insertBefore(element, beforeNode);
        this.#emptyElement.classList.add('hidden');
        this.#list.element.classList.remove('hidden');
    }
    removeListElement(element) {
        this.#list.element.removeChild(element);
        if (!this.#list.element.firstElementChild) {
            this.#emptyElement.classList.remove('hidden');
            this.#list.element.classList.add('hidden');
        }
    }
    contextMenu(breakKeyword, event) {
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ContextMenu.ContextMenu(event);
        function removeBreakpoint() {
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMDebuggerModel.DOMDebuggerManager.instance().removeXHRBreakpoint(breakKeyword);
            this.removeBreakpoint(breakKeyword);
        }
        function removeAllBreakpoints() {
            for (const url of this.#breakpointElements.keys()) {
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMDebuggerModel.DOMDebuggerManager.instance().removeXHRBreakpoint(url);
                this.removeBreakpoint(url);
            }
            this.update();
        }
        const removeAllTitle = i18nString(UIStrings.removeAllBreakpoints);
        contextMenu.defaultSection().appendItem(i18nString(UIStrings.addBreakpoint), this.addButtonClicked.bind(this), { jslogContext: 'sources.add-xhr-fetch-breakpoint' });
        contextMenu.defaultSection().appendItem(i18nString(UIStrings.removeBreakpoint), removeBreakpoint.bind(this), { jslogContext: 'sources.remove-xhr-fetch-breakpoint' });
        contextMenu.defaultSection().appendItem(removeAllTitle, removeAllBreakpoints.bind(this), { jslogContext: 'sources.remove-all-xhr-fetch-breakpoints' });
        void contextMenu.show();
    }
    checkboxClicked(breakKeyword, checked) {
        const hadFocus = this.hasFocus();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMDebuggerModel.DOMDebuggerManager.instance().toggleXHRBreakpoint(breakKeyword, !checked);
        this.#list.refreshItem(breakKeyword);
        this.#list.selectItem(breakKeyword);
        if (hadFocus) {
            this.focus();
        }
    }
    labelClicked(breakKeyword) {
        const element = this.#breakpointElements.get(breakKeyword);
        const inputElement = document.createElement('span');
        inputElement.classList.add('breakpoint-condition');
        inputElement.textContent = breakKeyword;
        inputElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.value('condition').track({ change: true })}`);
        if (element) {
            this.#list.element.insertBefore(inputElement, element);
            element.classList.add('hidden');
        }
        function finishEditing(accept, e, text) {
            this.removeListElement(inputElement);
            if (accept) {
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMDebuggerModel.DOMDebuggerManager.instance().removeXHRBreakpoint(breakKeyword);
                this.removeBreakpoint(breakKeyword);
                let enabled = true;
                if (element) {
                    const breakpointEntryElement = containerToBreakpointEntry.get(element);
                    const checkboxElement = breakpointEntryElement ? breakpointEntryToCheckbox.get(breakpointEntryElement) : undefined;
                    if (checkboxElement) {
                        enabled = checkboxElement.checked;
                    }
                }
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMDebuggerModel.DOMDebuggerManager.instance().addXHRBreakpoint(text, enabled);
                this.setBreakpoint(text);
                this.#list.selectItem(text);
            }
            else if (element) {
                element.classList.remove('hidden');
            }
            this.focus();
        }
        const config = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.InplaceEditor.Config(finishEditing.bind(this, true), finishEditing.bind(this, false));
        // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.InplaceEditor.InplaceEditor.startEditing(inputElement, config);
    }
    flavorChanged(_object) {
        this.update();
    }
    update() {
        const isEmpty = this.#breakpoints.length === 0;
        this.#list.element.classList.toggle('hidden', isEmpty);
        this.#emptyElement.classList.toggle('hidden', !isEmpty);
        const details = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerPausedDetails);
        if (!details || details.reason !== "XHR" /* Protocol.Debugger.PausedEventReason.XHR */) {
            if (this.#hitBreakpoint) {
                const oldHitBreakpoint = this.#hitBreakpoint;
                this.#hitBreakpoint = undefined;
                if (this.#breakpoints.indexOf(oldHitBreakpoint) >= 0) {
                    this.#list.refreshItem(oldHitBreakpoint);
                }
            }
            return;
        }
        const url = details.auxData && details.auxData['breakpointURL'];
        this.#hitBreakpoint = url;
        if (this.#breakpoints.indexOf(url) < 0) {
            return;
        }
        this.#list.refreshItem(url);
        void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ViewManager.ViewManager.instance().showView('sources.xhr-breakpoints');
    }
    restoreBreakpoints() {
        const breakpoints = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMDebuggerModel.DOMDebuggerManager.instance().xhrBreakpoints();
        for (const url of breakpoints.keys()) {
            this.setBreakpoint(url);
        }
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([_xhrBreakpointsSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]]);
    }
}
//# sourceMappingURL=XHRBreakpointsSidebarPane.js.map

/***/ }),

/***/ "./panels/browser_debugger/xhrBreakpointsSidebarPane.css.js":
/*!******************************************************************!*\
  !*** ./panels/browser_debugger/xhrBreakpointsSidebarPane.css.js ***!
  \******************************************************************/
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

.breakpoint-list {
  padding-bottom: 3px;
}

.breakpoint-list .editing.being-edited {
  overflow: hidden;
  white-space: nowrap;
}

.breakpoint-condition {
  display: block;
  margin: 4px 8px 4px 23px;
}

.breakpoint-condition-input {
  display: block;
  margin-left: 0;
  margin-right: 0;
  border: 1px solid var(--sys-color-neutral-outline);
  border-radius: 4px;

  &:focus {
    outline: 5px auto var(--sys-color-tonal-outline);
    box-shadow: none;
  }
}

.breakpoint-entry {
  white-space: nowrap;
  padding: 2px 0;
}

.breakpoint-list .breakpoint-entry:focus-visible {
  background-color: var(--sys-color-tonal-container);
}

.breakpoint-entry [is="dt-checkbox"] {
  max-width: 100%;
}

.breakpoint-hit {
  background-color: var(--sys-color-yellow-container);
  border-right: 3px solid var(--sys-color-yellow-outline);
  color: var(--sys-color-on-yellow-container);
}

@media (forced-colors: active) {
  .breakpoint-list .breakpoint-entry:hover,
  .breakpoint-list .breakpoint-entry:focus-visible {
    forced-color-adjust: none;
    background-color: Highlight;
  }

  .breakpoint-list .breakpoint-entry:hover *,
  .breakpoint-list .breakpoint-entry:focus-visible * {
    color: HighlightText;
  }
}

/*# sourceURL=xhrBreakpointsSidebarPane.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);