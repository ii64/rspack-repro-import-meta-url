"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_browser_debugger_XHRBreakpointsSidebarPane_ts"],{

/***/ "./src/panels/browser_debugger/XHRBreakpointsSidebarPane.ts":
/*!******************************************************************!*\
  !*** ./src/panels/browser_debugger/XHRBreakpointsSidebarPane.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XHRBreakpointsSidebarPane: () => (/* binding */ XHRBreakpointsSidebarPane)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './xhrBreakpointsSidebarPane.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _XHRBreakpointsSidebarPane_breakpoints, _XHRBreakpointsSidebarPane_list, _XHRBreakpointsSidebarPane_emptyElement, _XHRBreakpointsSidebarPane_breakpointElements, _XHRBreakpointsSidebarPane_addButton, _XHRBreakpointsSidebarPane_hitBreakpoint;






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
class XHRBreakpointsSidebarPane extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox {
    constructor() {
        super(true);
        _XHRBreakpointsSidebarPane_breakpoints.set(this, void 0);
        _XHRBreakpointsSidebarPane_list.set(this, void 0);
        _XHRBreakpointsSidebarPane_emptyElement.set(this, void 0);
        _XHRBreakpointsSidebarPane_breakpointElements.set(this, void 0);
        _XHRBreakpointsSidebarPane_addButton.set(this, void 0);
        // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _XHRBreakpointsSidebarPane_hitBreakpoint.set(this, void 0);
        __classPrivateFieldSet(this, _XHRBreakpointsSidebarPane_breakpoints, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListModel.ListModel(), "f");
        __classPrivateFieldSet(this, _XHRBreakpointsSidebarPane_list, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListControl.ListControl(__classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_breakpoints, "f"), this, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListControl.ListMode.NonViewport), "f");
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.section('source.xhr-breakpoints')}`);
        this.contentElement.appendChild(__classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_list, "f").element);
        __classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_list, "f").element.classList.add('breakpoint-list', 'hidden');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.markAsList(__classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_list, "f").element);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.setLabel(__classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_list, "f").element, i18nString(UIStrings.xhrfetchBreakpoints));
        __classPrivateFieldSet(this, _XHRBreakpointsSidebarPane_emptyElement, this.contentElement.createChild('div', 'gray-info-message'), "f");
        __classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_emptyElement, "f").textContent = i18nString(UIStrings.noBreakpoints);
        __classPrivateFieldSet(this, _XHRBreakpointsSidebarPane_breakpointElements, new Map(), "f");
        __classPrivateFieldSet(this, _XHRBreakpointsSidebarPane_addButton, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.ToolbarButton(i18nString(UIStrings.addXhrfetchBreakpoint), 'plus', undefined, 'sources.add-xhr-fetch-breakpoint'), "f");
        __classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_addButton, "f").addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.ToolbarButton.Events.Click, () => {
            void this.addButtonClicked();
        });
        __classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_emptyElement, "f").addEventListener('contextmenu', this.emptyElementContextMenu.bind(this), true);
        __classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_emptyElement, "f").tabIndex = -1;
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
        return [__classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_addButton, "f")];
    }
    emptyElementContextMenu(event) {
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ContextMenu.ContextMenu(event);
        contextMenu.defaultSection().appendItem(i18nString(UIStrings.addBreakpoint), this.addButtonClicked.bind(this), { jslogContext: 'sources.add-xhr-fetch-breakpoint' });
        void contextMenu.show();
    }
    async addButtonClicked() {
        await _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ViewManager.ViewManager.instance().showView('sources.xhr-breakpoints');
        const inputElementContainer = document.createElement('p');
        inputElementContainer.classList.add('breakpoint-condition');
        inputElementContainer.textContent = i18nString(UIStrings.breakWhenUrlContains);
        inputElementContainer.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.value('condition').track({ change: true })}`);
        const inputElement = inputElementContainer.createChild('span', 'breakpoint-condition-input');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.setLabel(inputElement, i18nString(UIStrings.urlBreakpoint));
        this.addListElement(inputElementContainer, __classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_list, "f").element.firstChild);
        function finishEditing(accept, e, text) {
            this.removeListElement(inputElementContainer);
            if (accept) {
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMDebuggerModel.DOMDebuggerManager.instance().addXHRBreakpoint(text, true);
                this.setBreakpoint(text);
            }
            this.update();
        }
        const config = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.InplaceEditor.Config(finishEditing.bind(this, true), finishEditing.bind(this, false));
        // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.InplaceEditor.InplaceEditor.startEditing(inputElement, config);
    }
    heightForItem(_item) {
        return 0;
    }
    isItemSelectable(_item) {
        return true;
    }
    setBreakpoint(breakKeyword) {
        if (__classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_breakpoints, "f").indexOf(breakKeyword) !== -1) {
            __classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_list, "f").refreshItem(breakKeyword);
        }
        else {
            __classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_breakpoints, "f").insertWithComparator(breakKeyword, (a, b) => {
                if (a > b) {
                    return 1;
                }
                if (a < b) {
                    return -1;
                }
                return 0;
            });
        }
        if (!__classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_list, "f").selectedItem() || !this.hasFocus()) {
            __classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_list, "f").selectItem(__classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_breakpoints, "f").at(0));
        }
    }
    createElementForItem(item) {
        const listItemElement = document.createElement('div');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.markAsListitem(listItemElement);
        const element = listItemElement.createChild('div', 'breakpoint-entry');
        containerToBreakpointEntry.set(listItemElement, element);
        const enabled = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMDebuggerModel.DOMDebuggerManager.instance().xhrBreakpoints().get(item) || false;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.markAsCheckbox(element);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.setChecked(element, enabled);
        element.addEventListener('contextmenu', this.contextMenu.bind(this, item), true);
        const title = item ? i18nString(UIStrings.urlContainsS, { PH1: item }) : i18nString(UIStrings.anyXhrOrFetch);
        const label = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.CheckboxLabel.create(title, enabled, undefined, undefined, /* small */ true);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.markAsHidden(label);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.setLabel(element, title);
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
        if (item === __classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_list, "f").selectedItem()) {
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
        if (item === __classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_hitBreakpoint, "f")) {
            element.classList.add('breakpoint-hit');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.setDescription(element, i18nString(UIStrings.breakpointHit));
        }
        label.classList.add('cursor-auto');
        label.textElement.addEventListener('dblclick', this.labelClicked.bind(this, item), false);
        __classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_breakpointElements, "f").set(item, listItemElement);
        listItemElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.item().track({
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
        const index = __classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_breakpoints, "f").indexOf(breakKeyword);
        if (index >= 0) {
            __classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_breakpoints, "f").remove(index);
        }
        __classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_breakpointElements, "f").delete(breakKeyword);
        this.update();
    }
    addListElement(element, beforeNode) {
        __classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_list, "f").element.insertBefore(element, beforeNode);
        __classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_emptyElement, "f").classList.add('hidden');
        __classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_list, "f").element.classList.remove('hidden');
    }
    removeListElement(element) {
        __classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_list, "f").element.removeChild(element);
        if (!__classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_list, "f").element.firstElementChild) {
            __classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_emptyElement, "f").classList.remove('hidden');
            __classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_list, "f").element.classList.add('hidden');
        }
    }
    contextMenu(breakKeyword, event) {
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ContextMenu.ContextMenu(event);
        function removeBreakpoint() {
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMDebuggerModel.DOMDebuggerManager.instance().removeXHRBreakpoint(breakKeyword);
            this.removeBreakpoint(breakKeyword);
        }
        function removeAllBreakpoints() {
            for (const url of __classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_breakpointElements, "f").keys()) {
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
        __classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_list, "f").refreshItem(breakKeyword);
        __classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_list, "f").selectItem(breakKeyword);
        if (hadFocus) {
            this.focus();
        }
    }
    labelClicked(breakKeyword) {
        const element = __classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_breakpointElements, "f").get(breakKeyword);
        const inputElement = document.createElement('span');
        inputElement.classList.add('breakpoint-condition');
        inputElement.textContent = breakKeyword;
        inputElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.value('condition').track({ change: true })}`);
        if (element) {
            __classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_list, "f").element.insertBefore(inputElement, element);
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
                __classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_list, "f").selectItem(text);
            }
            else if (element) {
                element.classList.remove('hidden');
            }
            this.focus();
        }
        const config = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.InplaceEditor.Config(finishEditing.bind(this, true), finishEditing.bind(this, false));
        // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.InplaceEditor.InplaceEditor.startEditing(inputElement, config);
    }
    flavorChanged(_object) {
        this.update();
    }
    update() {
        const isEmpty = __classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_breakpoints, "f").length === 0;
        __classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_list, "f").element.classList.toggle('hidden', isEmpty);
        __classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_emptyElement, "f").classList.toggle('hidden', !isEmpty);
        const details = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerPausedDetails);
        if (!details || details.reason !== _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Debugger.PausedEventReason.XHR) {
            if (__classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_hitBreakpoint, "f")) {
                const oldHitBreakpoint = __classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_hitBreakpoint, "f");
                __classPrivateFieldSet(this, _XHRBreakpointsSidebarPane_hitBreakpoint, undefined, "f");
                if (__classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_breakpoints, "f").indexOf(oldHitBreakpoint) >= 0) {
                    __classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_list, "f").refreshItem(oldHitBreakpoint);
                }
            }
            return;
        }
        const url = details.auxData && details.auxData['breakpointURL'];
        __classPrivateFieldSet(this, _XHRBreakpointsSidebarPane_hitBreakpoint, url, "f");
        if (__classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_breakpoints, "f").indexOf(url) < 0) {
            return;
        }
        __classPrivateFieldGet(this, _XHRBreakpointsSidebarPane_list, "f").refreshItem(url);
        void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ViewManager.ViewManager.instance().showView('sources.xhr-breakpoints');
    }
    restoreBreakpoints() {
        const breakpoints = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMDebuggerModel.DOMDebuggerManager.instance().xhrBreakpoints();
        for (const url of breakpoints.keys()) {
            this.setBreakpoint(url);
        }
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './xhrBreakpointsSidebarPane.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}
_XHRBreakpointsSidebarPane_breakpoints = new WeakMap(), _XHRBreakpointsSidebarPane_list = new WeakMap(), _XHRBreakpointsSidebarPane_emptyElement = new WeakMap(), _XHRBreakpointsSidebarPane_breakpointElements = new WeakMap(), _XHRBreakpointsSidebarPane_addButton = new WeakMap(), _XHRBreakpointsSidebarPane_hitBreakpoint = new WeakMap();


/***/ })

}]);