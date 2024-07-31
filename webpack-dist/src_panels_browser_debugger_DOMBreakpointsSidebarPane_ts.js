"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_browser_debugger_DOMBreakpointsSidebarPane_ts"],{

/***/ "./src/panels/browser_debugger/DOMBreakpointsSidebarPane.ts":
/*!******************************************************************!*\
  !*** ./src/panels/browser_debugger/DOMBreakpointsSidebarPane.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextMenuProvider: () => (/* binding */ ContextMenuProvider),
/* harmony export */   DOMBreakpointsSidebarPane: () => (/* binding */ DOMBreakpointsSidebarPane)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _sources_sources_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sources/sources.js */ "./src/panels/sources/sources.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './domBreakpointsSidebarPane.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/*
 * Copyright (C) 2011 Google Inc. All rights reserved.
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
 *     * Neither the name of Google Inc. nor the names of its
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
var _DOMBreakpointsSidebarPane_emptyElement, _DOMBreakpointsSidebarPane_breakpoints, _DOMBreakpointsSidebarPane_list, _DOMBreakpointsSidebarPane_highlightedBreakpoint;








const UIStrings = {
    /**
     *@description Text to indicate there are no breakpoints
     */
    noBreakpoints: 'No breakpoints',
    /**
     *@description Accessibility label for the DOM breakpoints list in the Sources panel
     */
    domBreakpointsList: 'DOM Breakpoints list',
    /**
     *@description Text with two placeholders separated by a colon
     *@example {Node removed} PH1
     *@example {div#id1} PH2
     */
    sS: '{PH1}: {PH2}',
    /**
     *@description Text with three placeholders separated by a colon and a comma
     *@example {Node removed} PH1
     *@example {div#id1} PH2
     *@example {checked} PH3
     */
    sSS: '{PH1}: {PH2}, {PH3}',
    /**
     *@description Text exposed to screen readers on checked items.
     */
    checked: 'checked',
    /**
     *@description Accessible text exposed to screen readers when the screen reader encounters an unchecked checkbox.
     */
    unchecked: 'unchecked',
    /**
     *@description Accessibility label for hit breakpoints in the Sources panel.
     *@example {checked} PH1
     */
    sBreakpointHit: '{PH1} breakpoint hit',
    /**
     *@description Screen reader description of a hit breakpoint in the Sources panel
     */
    breakpointHit: 'breakpoint hit',
    /**
     *@description A context menu item in the DOM Breakpoints sidebar that reveals the node on which the current breakpoint is set.
     */
    revealDomNodeInElementsPanel: 'Reveal DOM node in Elements panel',
    /**
     *@description Text to remove a breakpoint
     */
    removeBreakpoint: 'Remove breakpoint',
    /**
     *@description A context menu item in the DOMBreakpoints Sidebar Pane of the JavaScript Debugging pane in the Sources panel or the DOM Breakpoints pane in the Elements panel
     */
    removeAllDomBreakpoints: 'Remove all DOM breakpoints',
    /**
     *@description Text in DOMBreakpoints Sidebar Pane of the JavaScript Debugging pane in the Sources panel or the DOM Breakpoints pane in the Elements panel
     */
    subtreeModified: 'Subtree modified',
    /**
     *@description Text in DOMBreakpoints Sidebar Pane of the JavaScript Debugging pane in the Sources panel or the DOM Breakpoints pane in the Elements panel
     */
    attributeModified: 'Attribute modified',
    /**
     *@description Text in DOMBreakpoints Sidebar Pane of the JavaScript Debugging pane in the Sources panel or the DOM Breakpoints pane in the Elements panel
     */
    nodeRemoved: 'Node removed',
    /**
     *@description Entry in context menu of the elements pane, allowing developers to select a DOM
     * breakpoint for the element that they have right-clicked on. Short for the action 'set a
     * breakpoint on this DOM Element'. A breakpoint pauses the website when the code reaches a
     * specified line, or when a specific action happen (in this case, when the DOM Element is
     * modified).
     */
    breakOn: 'Break on',
    /**
     *@description Screen reader description for removing a DOM breakpoint.
     */
    breakpointRemoved: 'Breakpoint removed',
    /**
     *@description Screen reader description for setting a DOM breakpoint.
     */
    breakpointSet: 'Breakpoint set',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/browser_debugger/DOMBreakpointsSidebarPane.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
const i18nLazyString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);
let domBreakpointsSidebarPaneInstance;
class DOMBreakpointsSidebarPane extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.VBox {
    constructor() {
        super(true);
        Object.defineProperty(this, "elementToCheckboxes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _DOMBreakpointsSidebarPane_emptyElement.set(this, void 0);
        _DOMBreakpointsSidebarPane_breakpoints.set(this, void 0);
        _DOMBreakpointsSidebarPane_list.set(this, void 0);
        _DOMBreakpointsSidebarPane_highlightedBreakpoint.set(this, void 0);
        this.elementToCheckboxes = new WeakMap();
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.section('sources.dom-breakpoints').track({ resize: true })}`);
        __classPrivateFieldSet(this, _DOMBreakpointsSidebarPane_emptyElement, this.contentElement.createChild('div', 'gray-info-message'), "f");
        __classPrivateFieldGet(this, _DOMBreakpointsSidebarPane_emptyElement, "f").textContent = i18nString(UIStrings.noBreakpoints);
        __classPrivateFieldSet(this, _DOMBreakpointsSidebarPane_breakpoints, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ListModel.ListModel(), "f");
        __classPrivateFieldSet(this, _DOMBreakpointsSidebarPane_list, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ListControl.ListControl(__classPrivateFieldGet(this, _DOMBreakpointsSidebarPane_breakpoints, "f"), this, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ListControl.ListMode.NonViewport), "f");
        this.contentElement.appendChild(__classPrivateFieldGet(this, _DOMBreakpointsSidebarPane_list, "f").element);
        __classPrivateFieldGet(this, _DOMBreakpointsSidebarPane_list, "f").element.classList.add('breakpoint-list', 'hidden');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.markAsList(__classPrivateFieldGet(this, _DOMBreakpointsSidebarPane_list, "f").element);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setLabel(__classPrivateFieldGet(this, _DOMBreakpointsSidebarPane_list, "f").element, i18nString(UIStrings.domBreakpointsList));
        __classPrivateFieldGet(this, _DOMBreakpointsSidebarPane_emptyElement, "f").tabIndex = -1;
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMDebuggerModel.DOMDebuggerModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMDebuggerModel.Events.DOMBreakpointAdded, this.breakpointAdded, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMDebuggerModel.DOMDebuggerModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMDebuggerModel.Events.DOMBreakpointToggled, this.breakpointToggled, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMDebuggerModel.DOMDebuggerModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMDebuggerModel.Events.DOMBreakpointsRemoved, this.breakpointsRemoved, this);
        for (const domDebuggerModel of _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().models(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMDebuggerModel.DOMDebuggerModel)) {
            domDebuggerModel.retrieveDOMBreakpoints();
            for (const breakpoint of domDebuggerModel.domBreakpoints()) {
                this.addBreakpoint(breakpoint);
            }
        }
        __classPrivateFieldSet(this, _DOMBreakpointsSidebarPane_highlightedBreakpoint, null, "f");
        this.update();
    }
    static instance() {
        if (!domBreakpointsSidebarPaneInstance) {
            domBreakpointsSidebarPaneInstance = new DOMBreakpointsSidebarPane();
        }
        return domBreakpointsSidebarPaneInstance;
    }
    createElementForItem(item) {
        const element = document.createElement('div');
        element.classList.add('breakpoint-entry');
        element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.domBreakpoint().context(item.type).track({ keydown: 'ArrowUp|ArrowDown|PageUp|PageDown' })}`);
        element.addEventListener('contextmenu', this.contextMenu.bind(this, item), true);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.markAsListitem(element);
        element.tabIndex = -1;
        const checkboxLabel = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.CheckboxLabel.create(/* title */ undefined, item.enabled);
        const checkboxElement = checkboxLabel.checkboxElement;
        checkboxElement.addEventListener('click', this.checkboxClicked.bind(this, item), false);
        checkboxElement.tabIndex = -1;
        this.elementToCheckboxes.set(element, checkboxElement);
        element.appendChild(checkboxLabel);
        element.addEventListener('keydown', event => {
            if (event.key === ' ') {
                checkboxLabel.checkboxElement.click();
                event.consume(true);
            }
        });
        const labelElement = document.createElement('div');
        labelElement.classList.add('dom-breakpoint');
        element.appendChild(labelElement);
        const description = document.createElement('div');
        const breakpointTypeLabel = BreakpointTypeLabels.get(item.type);
        description.textContent = breakpointTypeLabel ? breakpointTypeLabel() : null;
        const breakpointTypeText = breakpointTypeLabel ? breakpointTypeLabel() : '';
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setLabel(checkboxElement, breakpointTypeText);
        checkboxElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.toggle().track({ click: true })}`);
        const checkedStateText = item.enabled ? i18nString(UIStrings.checked) : i18nString(UIStrings.unchecked);
        const linkifiedNode = document.createElement('monospace');
        linkifiedNode.style.display = 'block';
        labelElement.appendChild(linkifiedNode);
        void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.Linkifier.linkify(item.node, { preventKeyboardFocus: true, tooltip: undefined })
            .then(linkified => {
            linkifiedNode.appendChild(linkified);
            // Give the checkbox an aria-label as it is required for all form element
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setLabel(checkboxElement, i18nString(UIStrings.sS, { PH1: breakpointTypeText, PH2: linkified.deepTextContent() }));
            // The parent list element is the one that actually gets focused.
            // Assign it an aria-label with complete information for the screen reader to read out properly
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setLabel(element, i18nString(UIStrings.sSS, { PH1: breakpointTypeText, PH2: linkified.deepTextContent(), PH3: checkedStateText }));
        });
        labelElement.appendChild(description);
        if (item === __classPrivateFieldGet(this, _DOMBreakpointsSidebarPane_highlightedBreakpoint, "f")) {
            element.classList.add('breakpoint-hit');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setDescription(element, i18nString(UIStrings.sBreakpointHit, { PH1: checkedStateText }));
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setDescription(checkboxElement, i18nString(UIStrings.breakpointHit));
        }
        else {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setDescription(element, checkedStateText);
        }
        __classPrivateFieldGet(this, _DOMBreakpointsSidebarPane_emptyElement, "f").classList.add('hidden');
        __classPrivateFieldGet(this, _DOMBreakpointsSidebarPane_list, "f").element.classList.remove('hidden');
        return element;
    }
    heightForItem(_item) {
        return 0;
    }
    isItemSelectable(_item) {
        return true;
    }
    updateSelectedItemARIA(_fromElement, _toElement) {
        return true;
    }
    selectedItemChanged(from, to, fromElement, toElement) {
        if (fromElement) {
            fromElement.tabIndex = -1;
        }
        if (toElement) {
            this.setDefaultFocusedElement(toElement);
            toElement.tabIndex = 0;
            if (this.hasFocus()) {
                toElement.focus();
            }
        }
    }
    breakpointAdded(event) {
        this.addBreakpoint(event.data);
    }
    breakpointToggled(event) {
        const hadFocus = this.hasFocus();
        const breakpoint = event.data;
        __classPrivateFieldGet(this, _DOMBreakpointsSidebarPane_list, "f").refreshItem(breakpoint);
        if (hadFocus) {
            this.focus();
        }
    }
    breakpointsRemoved(event) {
        const hadFocus = this.hasFocus();
        const breakpoints = event.data;
        let lastIndex = -1;
        for (const breakpoint of breakpoints) {
            const index = __classPrivateFieldGet(this, _DOMBreakpointsSidebarPane_breakpoints, "f").indexOf(breakpoint);
            if (index >= 0) {
                __classPrivateFieldGet(this, _DOMBreakpointsSidebarPane_breakpoints, "f").remove(index);
                lastIndex = index;
            }
        }
        if (__classPrivateFieldGet(this, _DOMBreakpointsSidebarPane_breakpoints, "f").length === 0) {
            __classPrivateFieldGet(this, _DOMBreakpointsSidebarPane_emptyElement, "f").classList.remove('hidden');
            this.setDefaultFocusedElement(__classPrivateFieldGet(this, _DOMBreakpointsSidebarPane_emptyElement, "f"));
            __classPrivateFieldGet(this, _DOMBreakpointsSidebarPane_list, "f").element.classList.add('hidden');
        }
        else if (lastIndex >= 0) {
            const breakpointToSelect = __classPrivateFieldGet(this, _DOMBreakpointsSidebarPane_breakpoints, "f").at(lastIndex);
            if (breakpointToSelect) {
                __classPrivateFieldGet(this, _DOMBreakpointsSidebarPane_list, "f").selectItem(breakpointToSelect);
            }
        }
        if (hadFocus) {
            this.focus();
        }
    }
    addBreakpoint(breakpoint) {
        __classPrivateFieldGet(this, _DOMBreakpointsSidebarPane_breakpoints, "f").insertWithComparator(breakpoint, (breakpointA, breakpointB) => {
            if (breakpointA.type > breakpointB.type) {
                return -1;
            }
            if (breakpointA.type < breakpointB.type) {
                return 1;
            }
            return 0;
        });
        if (!__classPrivateFieldGet(this, _DOMBreakpointsSidebarPane_list, "f").selectedItem() || !this.hasFocus()) {
            __classPrivateFieldGet(this, _DOMBreakpointsSidebarPane_list, "f").selectItem(__classPrivateFieldGet(this, _DOMBreakpointsSidebarPane_breakpoints, "f").at(0));
        }
    }
    contextMenu(breakpoint, event) {
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ContextMenu.ContextMenu(event);
        contextMenu.defaultSection().appendItem(i18nString(UIStrings.revealDomNodeInElementsPanel), () => _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(breakpoint.node), { jslogContext: 'reveal-in-elements' });
        contextMenu.defaultSection().appendItem(i18nString(UIStrings.removeBreakpoint), () => {
            breakpoint.domDebuggerModel.removeDOMBreakpoint(breakpoint.node, breakpoint.type);
        }, { jslogContext: 'remove-breakpoint' });
        contextMenu.defaultSection().appendItem(i18nString(UIStrings.removeAllDomBreakpoints), () => {
            breakpoint.domDebuggerModel.removeAllDOMBreakpoints();
        }, { jslogContext: 'remove-all-dom-breakpoints' });
        void contextMenu.show();
    }
    checkboxClicked(breakpoint, event) {
        breakpoint.domDebuggerModel.toggleDOMBreakpoint(breakpoint, event.target ? event.target.checked : false);
    }
    flavorChanged(_object) {
        this.update();
    }
    update() {
        const details = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerPausedDetails);
        if (__classPrivateFieldGet(this, _DOMBreakpointsSidebarPane_highlightedBreakpoint, "f")) {
            const oldHighlightedBreakpoint = __classPrivateFieldGet(this, _DOMBreakpointsSidebarPane_highlightedBreakpoint, "f");
            __classPrivateFieldSet(this, _DOMBreakpointsSidebarPane_highlightedBreakpoint, null, "f");
            __classPrivateFieldGet(this, _DOMBreakpointsSidebarPane_list, "f").refreshItem(oldHighlightedBreakpoint);
        }
        if (!details || !details.auxData || details.reason !== _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Debugger.PausedEventReason.DOM) {
            return;
        }
        const domDebuggerModel = details.debuggerModel.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMDebuggerModel.DOMDebuggerModel);
        if (!domDebuggerModel) {
            return;
        }
        // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data = domDebuggerModel.resolveDOMBreakpointData(details.auxData);
        if (!data) {
            return;
        }
        for (const breakpoint of __classPrivateFieldGet(this, _DOMBreakpointsSidebarPane_breakpoints, "f")) {
            if (breakpoint.node === data.node && breakpoint.type === data.type) {
                __classPrivateFieldSet(this, _DOMBreakpointsSidebarPane_highlightedBreakpoint, breakpoint, "f");
            }
        }
        if (__classPrivateFieldGet(this, _DOMBreakpointsSidebarPane_highlightedBreakpoint, "f")) {
            __classPrivateFieldGet(this, _DOMBreakpointsSidebarPane_list, "f").refreshItem(__classPrivateFieldGet(this, _DOMBreakpointsSidebarPane_highlightedBreakpoint, "f"));
        }
        void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ViewManager.ViewManager.instance().showView('sources.dom-breakpoints');
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './domBreakpointsSidebarPane.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}
_DOMBreakpointsSidebarPane_emptyElement = new WeakMap(), _DOMBreakpointsSidebarPane_breakpoints = new WeakMap(), _DOMBreakpointsSidebarPane_list = new WeakMap(), _DOMBreakpointsSidebarPane_highlightedBreakpoint = new WeakMap();
const BreakpointTypeLabels = new Map([
    [_generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.DOMDebugger.DOMBreakpointType.SubtreeModified, i18nLazyString(UIStrings.subtreeModified)],
    [_generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.DOMDebugger.DOMBreakpointType.AttributeModified, i18nLazyString(UIStrings.attributeModified)],
    [_generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.DOMDebugger.DOMBreakpointType.NodeRemoved, i18nLazyString(UIStrings.nodeRemoved)],
]);
class ContextMenuProvider {
    appendApplicableItems(event, contextMenu, node) {
        if (node.pseudoType()) {
            return;
        }
        const domDebuggerModel = node.domModel().target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMDebuggerModel.DOMDebuggerModel);
        if (!domDebuggerModel) {
            return;
        }
        function toggleBreakpoint(type) {
            if (!domDebuggerModel) {
                return;
            }
            const label = _sources_sources_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerPausedMessage.BreakpointTypeNouns.get(type);
            const labelString = label ? label() : '';
            if (domDebuggerModel.hasDOMBreakpoint(node, type)) {
                domDebuggerModel.removeDOMBreakpoint(node, type);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.alert(`${i18nString(UIStrings.breakpointRemoved)}: ${labelString}`);
            }
            else {
                domDebuggerModel.setDOMBreakpoint(node, type);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.alert(`${i18nString(UIStrings.breakpointSet)}: ${labelString}`);
            }
        }
        const breakpointsMenu = contextMenu.debugSection().appendSubMenuItem(i18nString(UIStrings.breakOn), false, 'break-on');
        const allBreakpointTypes = {
            SubtreeModified: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.DOMDebugger.DOMBreakpointType.SubtreeModified,
            AttributeModified: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.DOMDebugger.DOMBreakpointType.AttributeModified,
            NodeRemoved: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.DOMDebugger.DOMBreakpointType.NodeRemoved,
        };
        for (const type of Object.values(allBreakpointTypes)) {
            const label = _sources_sources_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerPausedMessage.BreakpointTypeNouns.get(type);
            if (label) {
                breakpointsMenu.defaultSection().appendCheckboxItem(label(), toggleBreakpoint.bind(null, type), { checked: domDebuggerModel.hasDOMBreakpoint(node, type), jslogContext: type });
            }
        }
    }
}


/***/ })

}]);