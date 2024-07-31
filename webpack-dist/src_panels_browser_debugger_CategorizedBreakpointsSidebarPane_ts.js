"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_browser_debugger_CategorizedBreakpointsSidebarPane_ts"],{

/***/ "./src/panels/browser_debugger/CategorizedBreakpointsSidebarPane.ts":
/*!**************************************************************************!*\
  !*** ./src/panels/browser_debugger/CategorizedBreakpointsSidebarPane.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategorizedBreakpointsSidebarPane: () => (/* binding */ CategorizedBreakpointsSidebarPane)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../panels/sources/sources.js */ "./src/panels/sources/sources.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './categorizedBreakpointsSidebarPane.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
var _CategorizedBreakpointsSidebarPane_categoriesTreeOutline, _CategorizedBreakpointsSidebarPane_viewId, _CategorizedBreakpointsSidebarPane_detailsPausedReason, _CategorizedBreakpointsSidebarPane_categories, _CategorizedBreakpointsSidebarPane_breakpoints, _CategorizedBreakpointsSidebarPane_highlightedElement;






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
    constructor(breakpoints, viewId, detailsPausedReason) {
        super(true);
        _CategorizedBreakpointsSidebarPane_categoriesTreeOutline.set(this, void 0);
        _CategorizedBreakpointsSidebarPane_viewId.set(this, void 0);
        _CategorizedBreakpointsSidebarPane_detailsPausedReason.set(this, void 0);
        _CategorizedBreakpointsSidebarPane_categories.set(this, void 0);
        _CategorizedBreakpointsSidebarPane_breakpoints.set(this, void 0);
        _CategorizedBreakpointsSidebarPane_highlightedElement.set(this, void 0);
        __classPrivateFieldSet(this, _CategorizedBreakpointsSidebarPane_categoriesTreeOutline, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeOutlineInShadow(), "f");
        __classPrivateFieldGet(this, _CategorizedBreakpointsSidebarPane_categoriesTreeOutline, "f").setShowSelectionOnKeyboardFocus(/* show */ true);
        this.contentElement.appendChild(__classPrivateFieldGet(this, _CategorizedBreakpointsSidebarPane_categoriesTreeOutline, "f").element);
        __classPrivateFieldSet(this, _CategorizedBreakpointsSidebarPane_viewId, viewId, "f");
        __classPrivateFieldSet(this, _CategorizedBreakpointsSidebarPane_detailsPausedReason, detailsPausedReason, "f");
        const categories = new Set(breakpoints.map(bp => bp.category()));
        const sortedCategories = [...categories].sort((a, b) => {
            const categoryA = getLocalizedCategory(a);
            const categoryB = getLocalizedCategory(b);
            return categoryA.localeCompare(categoryB, _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsLocale.DevToolsLocale.instance().locale);
        });
        __classPrivateFieldSet(this, _CategorizedBreakpointsSidebarPane_categories, new Map(), "f");
        for (const category of sortedCategories) {
            this.createCategory(category);
        }
        if (sortedCategories.length > 0) {
            const firstCategory = __classPrivateFieldGet(this, _CategorizedBreakpointsSidebarPane_categories, "f").get(sortedCategories[0]);
            if (firstCategory) {
                firstCategory.element.select();
            }
        }
        __classPrivateFieldSet(this, _CategorizedBreakpointsSidebarPane_breakpoints, new Map(), "f");
        for (const breakpoint of breakpoints) {
            this.createBreakpoint(breakpoint);
        }
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.Events.DebuggerPaused, this.update, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.Events.DebuggerResumed, this.update, this);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Target, this.update, this);
    }
    get categories() {
        return __classPrivateFieldGet(this, _CategorizedBreakpointsSidebarPane_categories, "f");
    }
    get breakpoints() {
        return __classPrivateFieldGet(this, _CategorizedBreakpointsSidebarPane_breakpoints, "f");
    }
    focus() {
        __classPrivateFieldGet(this, _CategorizedBreakpointsSidebarPane_categoriesTreeOutline, "f").forceSelect();
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
            this.handleSpaceKeyEventOnBreakpoint(event, __classPrivateFieldGet(this, _CategorizedBreakpointsSidebarPane_categories, "f").get(name));
        });
        labelNode.checkboxElement.addEventListener('keydown', event => {
            treeElement.listItemElement.focus();
            this.handleSpaceKeyEventOnBreakpoint(event, __classPrivateFieldGet(this, _CategorizedBreakpointsSidebarPane_categories, "f").get(name));
        });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setChecked(treeElement.listItemElement, false);
        __classPrivateFieldGet(this, _CategorizedBreakpointsSidebarPane_categoriesTreeOutline, "f").appendChild(treeElement);
        __classPrivateFieldGet(this, _CategorizedBreakpointsSidebarPane_categories, "f").set(name, { element: treeElement, checkbox: labelNode.checkboxElement });
    }
    createBreakpoint(breakpoint) {
        const labelNode = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.CheckboxLabel.create(_panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_3__.CategorizedBreakpointL10n.getLocalizedBreakpointName(breakpoint.name), undefined, undefined, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toKebabCase(breakpoint.name), /* small */ true);
        labelNode.classList.add('source-code');
        labelNode.checkboxElement.addEventListener('click', this.breakpointCheckboxClicked.bind(this, breakpoint), true);
        labelNode.checkboxElement.tabIndex = -1;
        const treeElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeElement(labelNode, undefined, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toKebabCase(breakpoint.name));
        treeElement.listItemElement.addEventListener('keydown', event => {
            this.handleSpaceKeyEventOnBreakpoint(event, __classPrivateFieldGet(this, _CategorizedBreakpointsSidebarPane_breakpoints, "f").get(breakpoint));
        });
        labelNode.checkboxElement.addEventListener('keydown', event => {
            treeElement.listItemElement.focus();
            this.handleSpaceKeyEventOnBreakpoint(event, __classPrivateFieldGet(this, _CategorizedBreakpointsSidebarPane_breakpoints, "f").get(breakpoint));
        });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setChecked(treeElement.listItemElement, false);
        treeElement.listItemElement.createChild('div', 'breakpoint-hit-marker');
        const category = __classPrivateFieldGet(this, _CategorizedBreakpointsSidebarPane_categories, "f").get(breakpoint.category());
        if (category) {
            category.element.appendChild(treeElement);
        }
        // Better to return that to produce a side-effect
        __classPrivateFieldGet(this, _CategorizedBreakpointsSidebarPane_breakpoints, "f").set(breakpoint, { element: treeElement, checkbox: labelNode.checkboxElement });
    }
    getBreakpointFromPausedDetails(_details) {
        return null;
    }
    update() {
        const target = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Target);
        const debuggerModel = target ? target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel) : null;
        const details = debuggerModel ? debuggerModel.debuggerPausedDetails() : null;
        if (!details || details.reason !== __classPrivateFieldGet(this, _CategorizedBreakpointsSidebarPane_detailsPausedReason, "f") || !details.auxData) {
            if (__classPrivateFieldGet(this, _CategorizedBreakpointsSidebarPane_highlightedElement, "f")) {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setDescription(__classPrivateFieldGet(this, _CategorizedBreakpointsSidebarPane_highlightedElement, "f"), '');
                __classPrivateFieldGet(this, _CategorizedBreakpointsSidebarPane_highlightedElement, "f").classList.remove('breakpoint-hit');
                __classPrivateFieldSet(this, _CategorizedBreakpointsSidebarPane_highlightedElement, undefined, "f");
            }
            return;
        }
        const breakpoint = this.getBreakpointFromPausedDetails(details);
        if (!breakpoint) {
            return;
        }
        void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ViewManager.ViewManager.instance().showView(__classPrivateFieldGet(this, _CategorizedBreakpointsSidebarPane_viewId, "f"));
        const category = __classPrivateFieldGet(this, _CategorizedBreakpointsSidebarPane_categories, "f").get(breakpoint.category());
        if (category) {
            category.element.expand();
        }
        const matchingBreakpoint = __classPrivateFieldGet(this, _CategorizedBreakpointsSidebarPane_breakpoints, "f").get(breakpoint);
        if (matchingBreakpoint) {
            __classPrivateFieldSet(this, _CategorizedBreakpointsSidebarPane_highlightedElement, matchingBreakpoint.element.listItemElement, "f");
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setDescription(__classPrivateFieldGet(this, _CategorizedBreakpointsSidebarPane_highlightedElement, "f"), i18nString(UIStrings.breakpointHit));
            __classPrivateFieldGet(this, _CategorizedBreakpointsSidebarPane_highlightedElement, "f").classList.add('breakpoint-hit');
        }
    }
    // Probably can be kept although eventListener does not call this._breakpointCheckboxClicke
    categoryCheckboxClicked(category) {
        const item = __classPrivateFieldGet(this, _CategorizedBreakpointsSidebarPane_categories, "f").get(category);
        if (!item) {
            return;
        }
        const enabled = item.checkbox.checked;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setChecked(item.element.listItemElement, enabled);
        for (const [breakpoint, treeItem] of __classPrivateFieldGet(this, _CategorizedBreakpointsSidebarPane_breakpoints, "f")) {
            if (breakpoint.category() === category) {
                const matchingBreakpoint = __classPrivateFieldGet(this, _CategorizedBreakpointsSidebarPane_breakpoints, "f").get(breakpoint);
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
        const item = __classPrivateFieldGet(this, _CategorizedBreakpointsSidebarPane_breakpoints, "f").get(breakpoint);
        if (!item) {
            return;
        }
        this.toggleBreakpoint(breakpoint, item.checkbox.checked);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setChecked(item.element.listItemElement, item.checkbox.checked);
        // Put the rest in a separate function
        let hasEnabled = false;
        let hasDisabled = false;
        for (const other of __classPrivateFieldGet(this, _CategorizedBreakpointsSidebarPane_breakpoints, "f").keys()) {
            if (other.category() === breakpoint.category()) {
                if (other.enabled()) {
                    hasEnabled = true;
                }
                else {
                    hasDisabled = true;
                }
            }
        }
        const category = __classPrivateFieldGet(this, _CategorizedBreakpointsSidebarPane_categories, "f").get(breakpoint.category());
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
        __classPrivateFieldGet(this, _CategorizedBreakpointsSidebarPane_categoriesTreeOutline, "f").registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './categorizedBreakpointsSidebarPane.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}
_CategorizedBreakpointsSidebarPane_categoriesTreeOutline = new WeakMap(), _CategorizedBreakpointsSidebarPane_viewId = new WeakMap(), _CategorizedBreakpointsSidebarPane_detailsPausedReason = new WeakMap(), _CategorizedBreakpointsSidebarPane_categories = new WeakMap(), _CategorizedBreakpointsSidebarPane_breakpoints = new WeakMap(), _CategorizedBreakpointsSidebarPane_highlightedElement = new WeakMap();
const LOCALIZED_CATEGORIES = {
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CategorizedBreakpoint.Category.Animation]: i18nLazyString(UIStrings.animation),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CategorizedBreakpoint.Category.AuctionWorklet]: i18nLazyString(UIStrings.auctionWorklet),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CategorizedBreakpoint.Category.Canvas]: i18nLazyString(UIStrings.canvas),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CategorizedBreakpoint.Category.Clipboard]: i18nLazyString(UIStrings.clipboard),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CategorizedBreakpoint.Category.Control]: i18nLazyString(UIStrings.control),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CategorizedBreakpoint.Category.Device]: i18nLazyString(UIStrings.device),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CategorizedBreakpoint.Category.DomMutation]: i18nLazyString(UIStrings.domMutation),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CategorizedBreakpoint.Category.DragDrop]: i18nLazyString(UIStrings.dragDrop),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CategorizedBreakpoint.Category.Geolocation]: i18nLazyString(UIStrings.geolocation),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CategorizedBreakpoint.Category.Keyboard]: i18nLazyString(UIStrings.keyboard),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CategorizedBreakpoint.Category.Load]: i18nLazyString(UIStrings.load),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CategorizedBreakpoint.Category.Media]: i18nLazyString(UIStrings.media),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CategorizedBreakpoint.Category.Mouse]: i18nLazyString(UIStrings.mouse),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CategorizedBreakpoint.Category.Notification]: i18nLazyString(UIStrings.notification),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CategorizedBreakpoint.Category.Parse]: i18nLazyString(UIStrings.parse),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CategorizedBreakpoint.Category.PictureInPicture]: i18nLazyString(UIStrings.pictureinpicture),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CategorizedBreakpoint.Category.Pointer]: i18nLazyString(UIStrings.pointer),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CategorizedBreakpoint.Category.Script]: i18nLazyString(UIStrings.script),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CategorizedBreakpoint.Category.SharedStorageWorklet]: i18nLazyString(UIStrings.sharedStorageWorklet),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CategorizedBreakpoint.Category.Timer]: i18nLazyString(UIStrings.timer),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CategorizedBreakpoint.Category.Touch]: i18nLazyString(UIStrings.touch),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CategorizedBreakpoint.Category.TrustedTypeViolation]: i18nLazyString(UIStrings.trustedTypeViolations),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CategorizedBreakpoint.Category.WebAudio]: i18nLazyString(UIStrings.webaudio),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CategorizedBreakpoint.Category.Window]: i18nLazyString(UIStrings.window),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CategorizedBreakpoint.Category.Worker]: i18nLazyString(UIStrings.worker),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CategorizedBreakpoint.Category.Xhr]: i18nLazyString(UIStrings.xhr),
};
function getLocalizedCategory(category) {
    return LOCALIZED_CATEGORIES[category]();
}


/***/ })

}]);