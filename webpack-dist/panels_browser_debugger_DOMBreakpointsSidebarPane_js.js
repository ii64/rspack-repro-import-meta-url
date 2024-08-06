"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_browser_debugger_DOMBreakpointsSidebarPane_js"],{

/***/ "./panels/browser_debugger/DOMBreakpointsSidebarPane.js":
/*!**************************************************************!*\
  !*** ./panels/browser_debugger/DOMBreakpointsSidebarPane.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextMenuProvider: () => (/* binding */ ContextMenuProvider),
/* harmony export */   DOMBreakpointsSidebarPane: () => (/* binding */ DOMBreakpointsSidebarPane)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _sources_sources_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sources/sources.js */ "./panels/sources/sources.js");
/* harmony import */ var _domBreakpointsSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./domBreakpointsSidebarPane.css.js */ "./panels/browser_debugger/domBreakpointsSidebarPane.css.js");
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
class DOMBreakpointsSidebarPane extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox {
    elementToCheckboxes;
    #emptyElement;
    #breakpoints;
    #list;
    #highlightedBreakpoint;
    constructor() {
        super(true);
        this.elementToCheckboxes = new WeakMap();
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.section('sources.dom-breakpoints').track({ resize: true })}`);
        this.#emptyElement = this.contentElement.createChild('div', 'gray-info-message');
        this.#emptyElement.textContent = i18nString(UIStrings.noBreakpoints);
        this.#breakpoints = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListModel.ListModel();
        this.#list = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListControl.ListControl(this.#breakpoints, this, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListControl.ListMode.NonViewport);
        this.contentElement.appendChild(this.#list.element);
        this.#list.element.classList.add('breakpoint-list', 'hidden');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.markAsList(this.#list.element);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.setLabel(this.#list.element, i18nString(UIStrings.domBreakpointsList));
        this.#emptyElement.tabIndex = -1;
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMDebuggerModel.DOMDebuggerModel, "DOMBreakpointAdded" /* SDK.DOMDebuggerModel.Events.DOMBreakpointAdded */, this.breakpointAdded, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMDebuggerModel.DOMDebuggerModel, "DOMBreakpointToggled" /* SDK.DOMDebuggerModel.Events.DOMBreakpointToggled */, this.breakpointToggled, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMDebuggerModel.DOMDebuggerModel, "DOMBreakpointsRemoved" /* SDK.DOMDebuggerModel.Events.DOMBreakpointsRemoved */, this.breakpointsRemoved, this);
        for (const domDebuggerModel of _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().models(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMDebuggerModel.DOMDebuggerModel)) {
            domDebuggerModel.retrieveDOMBreakpoints();
            for (const breakpoint of domDebuggerModel.domBreakpoints()) {
                this.addBreakpoint(breakpoint);
            }
        }
        this.#highlightedBreakpoint = null;
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
        element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.domBreakpoint().context(item.type).track({ keydown: 'ArrowUp|ArrowDown|PageUp|PageDown' })}`);
        element.addEventListener('contextmenu', this.contextMenu.bind(this, item), true);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.markAsListitem(element);
        element.tabIndex = -1;
        const checkboxLabel = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.CheckboxLabel.create(/* title */ undefined, item.enabled);
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
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.setLabel(checkboxElement, breakpointTypeText);
        checkboxElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.toggle().track({ click: true })}`);
        const checkedStateText = item.enabled ? i18nString(UIStrings.checked) : i18nString(UIStrings.unchecked);
        const linkifiedNode = document.createElement('monospace');
        linkifiedNode.style.display = 'block';
        labelElement.appendChild(linkifiedNode);
        void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.Linkifier.linkify(item.node, { preventKeyboardFocus: true, tooltip: undefined })
            .then(linkified => {
            linkifiedNode.appendChild(linkified);
            // Give the checkbox an aria-label as it is required for all form element
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.setLabel(checkboxElement, i18nString(UIStrings.sS, { PH1: breakpointTypeText, PH2: linkified.deepTextContent() }));
            // The parent list element is the one that actually gets focused.
            // Assign it an aria-label with complete information for the screen reader to read out properly
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.setLabel(element, i18nString(UIStrings.sSS, { PH1: breakpointTypeText, PH2: linkified.deepTextContent(), PH3: checkedStateText }));
        });
        labelElement.appendChild(description);
        if (item === this.#highlightedBreakpoint) {
            element.classList.add('breakpoint-hit');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.setDescription(element, i18nString(UIStrings.sBreakpointHit, { PH1: checkedStateText }));
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.setDescription(checkboxElement, i18nString(UIStrings.breakpointHit));
        }
        else {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.setDescription(element, checkedStateText);
        }
        this.#emptyElement.classList.add('hidden');
        this.#list.element.classList.remove('hidden');
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
        this.#list.refreshItem(breakpoint);
        if (hadFocus) {
            this.focus();
        }
    }
    breakpointsRemoved(event) {
        const hadFocus = this.hasFocus();
        const breakpoints = event.data;
        let lastIndex = -1;
        for (const breakpoint of breakpoints) {
            const index = this.#breakpoints.indexOf(breakpoint);
            if (index >= 0) {
                this.#breakpoints.remove(index);
                lastIndex = index;
            }
        }
        if (this.#breakpoints.length === 0) {
            this.#emptyElement.classList.remove('hidden');
            this.setDefaultFocusedElement(this.#emptyElement);
            this.#list.element.classList.add('hidden');
        }
        else if (lastIndex >= 0) {
            const breakpointToSelect = this.#breakpoints.at(lastIndex);
            if (breakpointToSelect) {
                this.#list.selectItem(breakpointToSelect);
            }
        }
        if (hadFocus) {
            this.focus();
        }
    }
    addBreakpoint(breakpoint) {
        this.#breakpoints.insertWithComparator(breakpoint, (breakpointA, breakpointB) => {
            if (breakpointA.type > breakpointB.type) {
                return -1;
            }
            if (breakpointA.type < breakpointB.type) {
                return 1;
            }
            return 0;
        });
        if (!this.#list.selectedItem() || !this.hasFocus()) {
            this.#list.selectItem(this.#breakpoints.at(0));
        }
    }
    contextMenu(breakpoint, event) {
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ContextMenu.ContextMenu(event);
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
        const details = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerPausedDetails);
        if (this.#highlightedBreakpoint) {
            const oldHighlightedBreakpoint = this.#highlightedBreakpoint;
            this.#highlightedBreakpoint = null;
            this.#list.refreshItem(oldHighlightedBreakpoint);
        }
        if (!details || !details.auxData || details.reason !== "DOM" /* Protocol.Debugger.PausedEventReason.DOM */) {
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
        for (const breakpoint of this.#breakpoints) {
            if (breakpoint.node === data.node && breakpoint.type === data.type) {
                this.#highlightedBreakpoint = breakpoint;
            }
        }
        if (this.#highlightedBreakpoint) {
            this.#list.refreshItem(this.#highlightedBreakpoint);
        }
        void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ViewManager.ViewManager.instance().showView('sources.dom-breakpoints');
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([_domBreakpointsSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_6__["default"]]);
    }
}
const BreakpointTypeLabels = new Map([
    ["subtree-modified" /* Protocol.DOMDebugger.DOMBreakpointType.SubtreeModified */, i18nLazyString(UIStrings.subtreeModified)],
    ["attribute-modified" /* Protocol.DOMDebugger.DOMBreakpointType.AttributeModified */, i18nLazyString(UIStrings.attributeModified)],
    ["node-removed" /* Protocol.DOMDebugger.DOMBreakpointType.NodeRemoved */, i18nLazyString(UIStrings.nodeRemoved)],
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
            const label = _sources_sources_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerPausedMessage.BreakpointTypeNouns.get(type);
            const labelString = label ? label() : '';
            if (domDebuggerModel.hasDOMBreakpoint(node, type)) {
                domDebuggerModel.removeDOMBreakpoint(node, type);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.alert(`${i18nString(UIStrings.breakpointRemoved)}: ${labelString}`);
            }
            else {
                domDebuggerModel.setDOMBreakpoint(node, type);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.alert(`${i18nString(UIStrings.breakpointSet)}: ${labelString}`);
            }
        }
        const breakpointsMenu = contextMenu.debugSection().appendSubMenuItem(i18nString(UIStrings.breakOn), false, 'break-on');
        const allBreakpointTypes = {
            SubtreeModified: "subtree-modified" /* Protocol.DOMDebugger.DOMBreakpointType.SubtreeModified */,
            AttributeModified: "attribute-modified" /* Protocol.DOMDebugger.DOMBreakpointType.AttributeModified */,
            NodeRemoved: "node-removed" /* Protocol.DOMDebugger.DOMBreakpointType.NodeRemoved */,
        };
        for (const type of Object.values(allBreakpointTypes)) {
            const label = _sources_sources_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerPausedMessage.BreakpointTypeNouns.get(type);
            if (label) {
                breakpointsMenu.defaultSection().appendCheckboxItem(label(), toggleBreakpoint.bind(null, type), { checked: domDebuggerModel.hasDOMBreakpoint(node, type), jslogContext: type });
            }
        }
    }
}
//# sourceMappingURL=DOMBreakpointsSidebarPane.js.map

/***/ }),

/***/ "./panels/browser_debugger/domBreakpointsSidebarPane.css.js":
/*!******************************************************************!*\
  !*** ./panels/browser_debugger/domBreakpointsSidebarPane.css.js ***!
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

.breakpoint-list .dom-breakpoint > div {
  overflow: hidden;
  text-overflow: ellipsis;
}

.breakpoint-entry {
  display: flex;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 2px 0;
}

.breakpoint-entry:focus-visible {
  background-color: var(--sys-color-tonal-container);
}

.breakpoint-hit {
  background-color: var(--sys-color-neutral-container);
  color: var(--sys-color-on-surface);
}

@media (forced-colors: active) {
  .breakpoint-entry:focus-visible,
  .breakpoint-list .breakpoint-entry:hover {
    forced-color-adjust: none;
    background-color: Highlight;
  }

  .breakpoint-entry:focus-visible *,
  .breakpoint-list .breakpoint-entry:hover * {
    color: HighlightText;
  }
}

/*# sourceURL=domBreakpointsSidebarPane.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);