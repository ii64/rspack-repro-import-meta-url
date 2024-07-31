"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_css_overview_CSSOverviewSidebarPanel_ts"],{

/***/ "./src/panels/css_overview/CSSOverviewSidebarPanel.ts":
/*!************************************************************!*\
  !*** ./src/panels/css_overview/CSSOverviewSidebarPanel.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSOverviewSidebarPanel: () => (/* binding */ CSSOverviewSidebarPanel),
/* harmony export */   SidebarEvents: () => (/* binding */ SidebarEvents)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssOverviewSidebarPanel.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CSSOverviewSidebarPanel_instances, _CSSOverviewSidebarPanel_reset, _CSSOverviewSidebarPanel_deselectAllItems, _CSSOverviewSidebarPanel_onItemClick, _CSSOverviewSidebarPanel_onItemKeyDown;





const UIStrings = {
    /**
     *@description Label for the 'Clear overview' button in the CSS overview report
     */
    clearOverview: 'Clear overview',
    /**
     * @description Accessible label for the CSS overview panel sidebar
     */
    cssOverviewPanelSidebar: 'CSS overview panel sidebar',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/css_overview/CSSOverviewSidebarPanel.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
const ITEM_CLASS_NAME = 'overview-sidebar-panel-item';
const SELECTED_CLASS_NAME = 'selected';
class CSSOverviewSidebarPanel extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.VBox) {
    constructor() {
        super(true);
        _CSSOverviewSidebarPanel_instances.add(this);
        Object.defineProperty(this, "containerElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.contentElement.classList.add('overview-sidebar-panel');
        this.contentElement.addEventListener('click', __classPrivateFieldGet(this, _CSSOverviewSidebarPanel_instances, "m", _CSSOverviewSidebarPanel_onItemClick).bind(this));
        this.contentElement.addEventListener('keydown', __classPrivateFieldGet(this, _CSSOverviewSidebarPanel_instances, "m", _CSSOverviewSidebarPanel_onItemKeyDown).bind(this));
        // We need a container so that each item covers the full width of the
        // longest item, so that the selected item's background expands fully
        // even when the sidebar overflows.
        // Also see crbug/1408003
        this.containerElement =
            this.contentElement.createChild('div', 'overview-sidebar-panel-container');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.setLabel(this.containerElement, i18nString(UIStrings.cssOverviewPanelSidebar));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.markAsTree(this.containerElement);
        // Clear overview.
        const clearResultsButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarButton(i18nString(UIStrings.clearOverview), 'clear', undefined, 'css-overview.clear-overview');
        clearResultsButton.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarButton.Events.Click, __classPrivateFieldGet(this, _CSSOverviewSidebarPanel_instances, "m", _CSSOverviewSidebarPanel_reset), this);
        // Toolbar.
        const toolbarElement = this.containerElement.createChild('div', 'overview-toolbar');
        const toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Toolbar('', toolbarElement);
        toolbar.appendToolbarItem(clearResultsButton);
    }
    addItem(name, id) {
        const item = this.containerElement.createChild('div', ITEM_CLASS_NAME);
        item.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.item()
            .track({ click: true, keydown: 'Enter|ArrowUp|ArrowDown' })
            .context(`css-overview.${id}`)}`);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.markAsTreeitem(item);
        item.textContent = name;
        item.dataset.id = id;
        item.tabIndex = 0;
    }
    select(id, focus) {
        const target = this.containerElement.querySelector(`[data-id=${CSS.escape(id)}]`);
        if (!target) {
            return;
        }
        if (target.classList.contains(SELECTED_CLASS_NAME)) {
            return;
        }
        __classPrivateFieldGet(this, _CSSOverviewSidebarPanel_instances, "m", _CSSOverviewSidebarPanel_deselectAllItems).call(this);
        target.classList.add(SELECTED_CLASS_NAME);
        if (focus) {
            target.contentEditable = 'true';
            target.focus();
            target.contentEditable = 'false';
        }
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssOverviewSidebarPanel.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}
_CSSOverviewSidebarPanel_instances = new WeakSet(), _CSSOverviewSidebarPanel_reset = function _CSSOverviewSidebarPanel_reset() {
    this.dispatchEventToListeners(SidebarEvents.Reset);
}, _CSSOverviewSidebarPanel_deselectAllItems = function _CSSOverviewSidebarPanel_deselectAllItems() {
    const items = this.containerElement.querySelectorAll(`.${ITEM_CLASS_NAME}`);
    items.forEach(item => {
        item.classList.remove(SELECTED_CLASS_NAME);
    });
}, _CSSOverviewSidebarPanel_onItemClick = function _CSSOverviewSidebarPanel_onItemClick(event) {
    const target = event.composedPath()[0];
    if (!target.classList.contains(ITEM_CLASS_NAME)) {
        return;
    }
    const { id } = target.dataset;
    if (!id) {
        return;
    }
    this.select(id, false);
    this.dispatchEventToListeners(SidebarEvents.ItemSelected, { id, isMouseEvent: true, key: undefined });
}, _CSSOverviewSidebarPanel_onItemKeyDown = function _CSSOverviewSidebarPanel_onItemKeyDown(event) {
    if (event.key !== 'Enter' && event.key !== 'ArrowUp' && event.key !== 'ArrowDown') {
        return;
    }
    const target = event.composedPath()[0];
    if (!target.classList.contains(ITEM_CLASS_NAME)) {
        return;
    }
    const { id } = target.dataset;
    if (!id) {
        return;
    }
    if (event.key === 'Enter') {
        this.select(id, false);
        this.dispatchEventToListeners(SidebarEvents.ItemSelected, { id, isMouseEvent: false, key: event.key });
    }
    else { // arrow up/down key
        const items = this.containerElement.querySelectorAll(`.${ITEM_CLASS_NAME}`);
        let currItemIndex = -1;
        for (let idx = 0; idx < items.length; idx++) {
            if (items[idx].dataset.id === id) {
                currItemIndex = idx;
                break;
            }
        }
        if (currItemIndex < 0) {
            return;
        }
        const moveTo = (event.key === 'ArrowDown' ? 1 : -1);
        const nextItemIndex = (currItemIndex + moveTo) % items.length;
        const nextItemId = items[nextItemIndex].dataset.id;
        if (!nextItemId) {
            return;
        }
        this.select(nextItemId, true);
        this.dispatchEventToListeners(SidebarEvents.ItemSelected, { id: nextItemId, isMouseEvent: false, key: event.key });
    }
    event.consume(true);
};
var SidebarEvents;
(function (SidebarEvents) {
    SidebarEvents["ItemSelected"] = "ItemSelected";
    SidebarEvents["Reset"] = "Reset";
})(SidebarEvents || (SidebarEvents = {}));


/***/ })

}]);