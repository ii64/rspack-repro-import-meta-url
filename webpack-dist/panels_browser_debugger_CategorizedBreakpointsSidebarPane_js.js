"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_browser_debugger_CategorizedBreakpointsSidebarPane_js"],{

/***/ "./panels/browser_debugger/CategorizedBreakpointsSidebarPane.js":
/*!**********************************************************************!*\
  !*** ./panels/browser_debugger/CategorizedBreakpointsSidebarPane.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategorizedBreakpointsSidebarPane: () => (/* binding */ CategorizedBreakpointsSidebarPane)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../panels/sources/sources.js */ "./panels/sources/sources.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _categorizedBreakpointsSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categorizedBreakpointsSidebarPane.css.js */ "./panels/browser_debugger/categorizedBreakpointsSidebarPane.css.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     * @description Category of breakpoints
     */
    auctionWorklet: 'Ad Auction Worklet',
    /**
     *@description Text that refers to the animation of the web page
     */
    animation: 'Animation',
    /**
     *@description Screen reader description of a hit breakpoint in the Sources panel
     */
    breakpointHit: 'breakpoint hit',
    /**
     *@description Text in DOMDebugger Model
     */
    canvas: 'Canvas',
    /**
     *@description Text in DOMDebugger Model
     */
    clipboard: 'Clipboard',
    /**
     * @description Noun. Describes a group of DOM events (such as 'select' and 'submit') in this context.
     */
    control: 'Control',
    /**
     *@description Text that refers to device such as a phone
     */
    device: 'Device',
    /**
     *@description Text in DOMDebugger Model
     */
    domMutation: 'DOM Mutation',
    /**
     *@description Text in DOMDebugger Model
     */
    dragDrop: 'Drag / drop',
    /**
     *@description Title for a group of cities
     */
    geolocation: 'Geolocation',
    /**
     *@description Text in DOMDebugger Model
     */
    keyboard: 'Keyboard',
    /**
     *@description Text to load something
     */
    load: 'Load',
    /**
     *@description Text that appears on a button for the media resource type filter.
     */
    media: 'Media',
    /**
     *@description Text in DOMDebugger Model
     */
    mouse: 'Mouse',
    /**
     *@description Text in DOMDebugger Model
     */
    notification: 'Notification',
    /**
     *@description Text to parse something
     */
    parse: 'Parse',
    /**
     *@description Text in DOMDebugger Model
     */
    pictureinpicture: 'Picture-in-Picture',
    /**
     *@description Text in DOMDebugger Model
     */
    pointer: 'Pointer',
    /**
     *@description Label for a group of JavaScript files
     */
    script: 'Script',
    /**
     *@description Category of breakpoints
     */
    sharedStorageWorklet: 'Shared Storage Worklet',
    /**
     *@description Text in DOMDebugger Model
     */
    timer: 'Timer',
    /**
     *@description Text for the touch type to simulate on a device
     */
    touch: 'Touch',
    /**
     *@description Title for a category of breakpoints on Trusted Type violations
     */
    trustedTypeViolations: 'Trusted Type Violations',
    /**
     *@description Title of the WebAudio tool
     */
    webaudio: 'WebAudio',
    /**
     *@description Text in DOMDebugger Model
     */
    window: 'Window',
    /**
     *@description Text for the service worker type.
     */
    worker: 'Worker',
    /**
     *@description Text that appears on a button for the xhr resource type filter.
     */
    xhr: 'XHR',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/browser_debugger/CategorizedBreakpointsSidebarPane.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
const i18nLazyString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);
class CategorizedBreakpointsSidebarPane extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.VBox {
    #categoriesTreeOutline;
    #viewId;
    #detailsPausedReason;
    #categories;
    #breakpoints;
    #highlightedElement;
    constructor(breakpoints, viewId, detailsPausedReason) {
        super(true);
        this.#categoriesTreeOutline = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeOutlineInShadow();
        this.#categoriesTreeOutline.setShowSelectionOnKeyboardFocus(/* show */ true);
        this.contentElement.appendChild(this.#categoriesTreeOutline.element);
        this.#viewId = viewId;
        this.#detailsPausedReason = detailsPausedReason;
        const categories = new Set(breakpoints.map(bp => bp.category()));
        const sortedCategories = [...categories].sort((a, b) => {
            const categoryA = getLocalizedCategory(a);
            const categoryB = getLocalizedCategory(b);
            return categoryA.localeCompare(categoryB, _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsLocale.DevToolsLocale.instance().locale);
        });
        this.#categories = new Map();
        for (const category of sortedCategories) {
            this.createCategory(category);
        }
        if (sortedCategories.length > 0) {
            const firstCategory = this.#categories.get(sortedCategories[0]);
            if (firstCategory) {
                firstCategory.element.select();
            }
        }
        this.#breakpoints = new Map();
        for (const breakpoint of breakpoints) {
            this.createBreakpoint(breakpoint);
        }
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.Events.DebuggerPaused, this.update, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.Events.DebuggerResumed, this.update, this);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Target, this.update, this);
    }
    get categories() {
        return this.#categories;
    }
    get breakpoints() {
        return this.#breakpoints;
    }
    focus() {
        this.#categoriesTreeOutline.forceSelect();
    }
    handleSpaceKeyEventOnBreakpoint(event, breakpoint) {
        if (event && event.key === ' ') {
            if (breakpoint) {
                breakpoint.checkbox.click();
            }
            event.consume(true);
        }
    }
    createCategory(name) {
        const labelNode = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.CheckboxLabel.create(getLocalizedCategory(name), undefined, undefined, name, /* small */ true);
        labelNode.checkboxElement.addEventListener('click', this.categoryCheckboxClicked.bind(this, name), true);
        labelNode.checkboxElement.tabIndex = -1;
        const treeElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeElement(labelNode, undefined, name);
        treeElement.listItemElement.addEventListener('keydown', event => {
            this.handleSpaceKeyEventOnBreakpoint(event, this.#categories.get(name));
        });
        labelNode.checkboxElement.addEventListener('keydown', event => {
            treeElement.listItemElement.focus();
            this.handleSpaceKeyEventOnBreakpoint(event, this.#categories.get(name));
        });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setChecked(treeElement.listItemElement, false);
        this.#categoriesTreeOutline.appendChild(treeElement);
        this.#categories.set(name, { element: treeElement, checkbox: labelNode.checkboxElement });
    }
    createBreakpoint(breakpoint) {
        const labelNode = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.CheckboxLabel.create(_panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_3__.CategorizedBreakpointL10n.getLocalizedBreakpointName(breakpoint.name), undefined, undefined, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toKebabCase(breakpoint.name), /* small */ true);
        labelNode.classList.add('source-code');
        labelNode.checkboxElement.addEventListener('click', this.breakpointCheckboxClicked.bind(this, breakpoint), true);
        labelNode.checkboxElement.tabIndex = -1;
        const treeElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeElement(labelNode, undefined, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toKebabCase(breakpoint.name));
        treeElement.listItemElement.addEventListener('keydown', event => {
            this.handleSpaceKeyEventOnBreakpoint(event, this.#breakpoints.get(breakpoint));
        });
        labelNode.checkboxElement.addEventListener('keydown', event => {
            treeElement.listItemElement.focus();
            this.handleSpaceKeyEventOnBreakpoint(event, this.#breakpoints.get(breakpoint));
        });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setChecked(treeElement.listItemElement, false);
        treeElement.listItemElement.createChild('div', 'breakpoint-hit-marker');
        const category = this.#categories.get(breakpoint.category());
        if (category) {
            category.element.appendChild(treeElement);
        }
        // Better to return that to produce a side-effect
        this.#breakpoints.set(breakpoint, { element: treeElement, checkbox: labelNode.checkboxElement });
    }
    getBreakpointFromPausedDetails(_details) {
        return null;
    }
    update() {
        const target = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Target);
        const debuggerModel = target ? target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel) : null;
        const details = debuggerModel ? debuggerModel.debuggerPausedDetails() : null;
        if (!details || details.reason !== this.#detailsPausedReason || !details.auxData) {
            if (this.#highlightedElement) {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setDescription(this.#highlightedElement, '');
                this.#highlightedElement.classList.remove('breakpoint-hit');
                this.#highlightedElement = undefined;
            }
            return;
        }
        const breakpoint = this.getBreakpointFromPausedDetails(details);
        if (!breakpoint) {
            return;
        }
        void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ViewManager.ViewManager.instance().showView(this.#viewId);
        const category = this.#categories.get(breakpoint.category());
        if (category) {
            category.element.expand();
        }
        const matchingBreakpoint = this.#breakpoints.get(breakpoint);
        if (matchingBreakpoint) {
            this.#highlightedElement = matchingBreakpoint.element.listItemElement;
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setDescription(this.#highlightedElement, i18nString(UIStrings.breakpointHit));
            this.#highlightedElement.classList.add('breakpoint-hit');
        }
    }
    // Probably can be kept although eventListener does not call this._breakpointCheckboxClicke
    categoryCheckboxClicked(category) {
        const item = this.#categories.get(category);
        if (!item) {
            return;
        }
        const enabled = item.checkbox.checked;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setChecked(item.element.listItemElement, enabled);
        for (const [breakpoint, treeItem] of this.#breakpoints) {
            if (breakpoint.category() === category) {
                const matchingBreakpoint = this.#breakpoints.get(breakpoint);
                if (matchingBreakpoint) {
                    matchingBreakpoint.checkbox.checked = enabled;
                    this.toggleBreakpoint(breakpoint, enabled);
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setChecked(treeItem.element.listItemElement, enabled);
                }
            }
        }
    }
    toggleBreakpoint(breakpoint, enabled) {
        breakpoint.setEnabled(enabled);
    }
    breakpointCheckboxClicked(breakpoint) {
        const item = this.#breakpoints.get(breakpoint);
        if (!item) {
            return;
        }
        this.toggleBreakpoint(breakpoint, item.checkbox.checked);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setChecked(item.element.listItemElement, item.checkbox.checked);
        // Put the rest in a separate function
        let hasEnabled = false;
        let hasDisabled = false;
        for (const other of this.#breakpoints.keys()) {
            if (other.category() === breakpoint.category()) {
                if (other.enabled()) {
                    hasEnabled = true;
                }
                else {
                    hasDisabled = true;
                }
            }
        }
        const category = this.#categories.get(breakpoint.category());
        if (!category) {
            return;
        }
        category.checkbox.checked = hasEnabled;
        category.checkbox.indeterminate = hasEnabled && hasDisabled;
        if (category.checkbox.indeterminate) {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setCheckboxAsIndeterminate(category.element.listItemElement);
        }
        else {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setChecked(category.element.listItemElement, hasEnabled);
        }
    }
    wasShown() {
        super.wasShown();
        this.#categoriesTreeOutline.registerCSSFiles([_categorizedBreakpointsSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]]);
    }
}
const LOCALIZED_CATEGORIES = {
    ["animation" /* SDK.CategorizedBreakpoint.Category.Animation */]: i18nLazyString(UIStrings.animation),
    ["auction-worklet" /* SDK.CategorizedBreakpoint.Category.AuctionWorklet */]: i18nLazyString(UIStrings.auctionWorklet),
    ["canvas" /* SDK.CategorizedBreakpoint.Category.Canvas */]: i18nLazyString(UIStrings.canvas),
    ["clipboard" /* SDK.CategorizedBreakpoint.Category.Clipboard */]: i18nLazyString(UIStrings.clipboard),
    ["control" /* SDK.CategorizedBreakpoint.Category.Control */]: i18nLazyString(UIStrings.control),
    ["device" /* SDK.CategorizedBreakpoint.Category.Device */]: i18nLazyString(UIStrings.device),
    ["dom-mutation" /* SDK.CategorizedBreakpoint.Category.DomMutation */]: i18nLazyString(UIStrings.domMutation),
    ["drag-drop" /* SDK.CategorizedBreakpoint.Category.DragDrop */]: i18nLazyString(UIStrings.dragDrop),
    ["geolocation" /* SDK.CategorizedBreakpoint.Category.Geolocation */]: i18nLazyString(UIStrings.geolocation),
    ["keyboard" /* SDK.CategorizedBreakpoint.Category.Keyboard */]: i18nLazyString(UIStrings.keyboard),
    ["load" /* SDK.CategorizedBreakpoint.Category.Load */]: i18nLazyString(UIStrings.load),
    ["media" /* SDK.CategorizedBreakpoint.Category.Media */]: i18nLazyString(UIStrings.media),
    ["mouse" /* SDK.CategorizedBreakpoint.Category.Mouse */]: i18nLazyString(UIStrings.mouse),
    ["notification" /* SDK.CategorizedBreakpoint.Category.Notification */]: i18nLazyString(UIStrings.notification),
    ["parse" /* SDK.CategorizedBreakpoint.Category.Parse */]: i18nLazyString(UIStrings.parse),
    ["picture-in-picture" /* SDK.CategorizedBreakpoint.Category.PictureInPicture */]: i18nLazyString(UIStrings.pictureinpicture),
    ["pointer" /* SDK.CategorizedBreakpoint.Category.Pointer */]: i18nLazyString(UIStrings.pointer),
    ["script" /* SDK.CategorizedBreakpoint.Category.Script */]: i18nLazyString(UIStrings.script),
    ["shared-storage-worklet" /* SDK.CategorizedBreakpoint.Category.SharedStorageWorklet */]: i18nLazyString(UIStrings.sharedStorageWorklet),
    ["timer" /* SDK.CategorizedBreakpoint.Category.Timer */]: i18nLazyString(UIStrings.timer),
    ["touch" /* SDK.CategorizedBreakpoint.Category.Touch */]: i18nLazyString(UIStrings.touch),
    ["trusted-type-violation" /* SDK.CategorizedBreakpoint.Category.TrustedTypeViolation */]: i18nLazyString(UIStrings.trustedTypeViolations),
    ["web-audio" /* SDK.CategorizedBreakpoint.Category.WebAudio */]: i18nLazyString(UIStrings.webaudio),
    ["window" /* SDK.CategorizedBreakpoint.Category.Window */]: i18nLazyString(UIStrings.window),
    ["worker" /* SDK.CategorizedBreakpoint.Category.Worker */]: i18nLazyString(UIStrings.worker),
    ["xhr" /* SDK.CategorizedBreakpoint.Category.Xhr */]: i18nLazyString(UIStrings.xhr),
};
function getLocalizedCategory(category) {
    return LOCALIZED_CATEGORIES[category]();
}
//# sourceMappingURL=CategorizedBreakpointsSidebarPane.js.map

/***/ }),

/***/ "./panels/browser_debugger/categorizedBreakpointsSidebarPane.css.js":
/*!**************************************************************************!*\
  !*** ./panels/browser_debugger/categorizedBreakpointsSidebarPane.css.js ***!
  \**************************************************************************/
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
 * Copyright 2016 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  margin: 0;
  padding: 2px 4px;
  min-height: 18px;
}

.tree-outline {
  padding: 0;
}

.tree-outline li {
  margin-left: 14px;
  user-select: text;
}

.tree-outline li.parent {
  margin-left: 1px;
}

.tree-outline li:not(.parent)::before {
  display: none;
}

.breakpoint-hit {
  background-color: var(--sys-color-yellow-container);
  color: var(--sys-color-on-yellow-container);
}

.breakpoint-hit .breakpoint-hit-marker {
  background-color: var(--sys-color-yellow-container);
  border-right: 3px solid var(--sys-color-yellow-outline);
  color: var(--sys-color-on-yellow-container);
  height: 100%;
  left: 0;
  margin-left: -30px;
  position: absolute;
  right: -4px;
  z-index: -1;
}

.source-code[is="dt-checkbox"] {
  max-width: 100%;
}

/*# sourceURL=categorizedBreakpointsSidebarPane.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);