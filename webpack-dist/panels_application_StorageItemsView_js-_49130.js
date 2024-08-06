"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_StorageItemsView_js-_49130"],{

/***/ "./panels/application/StorageItemsView.js":
/*!************************************************!*\
  !*** ./panels/application/StorageItemsView.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageItemsView: () => (/* binding */ StorageItemsView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.js */ "./panels/application/components/components.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const UIStrings = {
    /**
     *@description Text to refresh the page
     */
    refresh: 'Refresh',
    /**
     *@description Text to clear everything
     */
    clearAll: 'Clear All',
    /**
     *@description Tooltip text that appears when hovering over the largeicon delete button in the Service Worker Cache Views of the Application panel
     */
    deleteSelected: 'Delete Selected',
    /**
     *@description Text that informs screen reader users that the storage table has been refreshed
     */
    refreshedStatus: 'Table refreshed',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/StorageItemsView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class StorageItemsView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.VBox {
    filterRegex;
    refreshButton;
    mainToolbar;
    filterItem;
    deleteAllButton;
    deleteSelectedButton;
    metadataView = new _components_components_js__WEBPACK_IMPORTED_MODULE_4__.StorageMetadataView.StorageMetadataView();
    constructor(_title, _filterName) {
        super(false);
        this.filterRegex = null;
        this.refreshButton = this.addButton(i18nString(UIStrings.refresh), 'refresh', () => {
            this.refreshItems();
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.alert(i18nString(UIStrings.refreshedStatus));
        });
        this.refreshButton.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.action('storage-items-view.refresh').track({ click: true })}`);
        this.mainToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Toolbar('top-resources-toolbar', this.element);
        this.mainToolbar.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.toolbar()}`);
        this.filterItem = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarFilter(undefined, 0.4);
        this.filterItem.addEventListener("TextChanged" /* UI.Toolbar.ToolbarInput.Event.TextChanged */, this.filterChanged, this);
        const toolbarSeparator = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarSeparator();
        this.deleteAllButton = this.addButton(i18nString(UIStrings.clearAll), 'clear', this.deleteAllItems);
        this.deleteSelectedButton = this.addButton(i18nString(UIStrings.deleteSelected), 'cross', this.deleteSelectedItem);
        this.deleteSelectedButton.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.action('storage-items-view.delete-selected').track({ click: true })}`);
        this.deleteAllButton.element.id = 'storage-items-delete-all';
        this.deleteAllButton.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.action('storage-items-view.clear-all').track({ click: true })}`);
        const toolbarItems = [this.refreshButton, this.filterItem, toolbarSeparator, this.deleteAllButton, this.deleteSelectedButton];
        for (const item of toolbarItems) {
            this.mainToolbar.appendToolbarItem(item);
        }
        this.contentElement.appendChild(this.metadataView);
    }
    setDeleteAllTitle(title) {
        this.deleteAllButton.setTitle(title);
    }
    setDeleteAllGlyph(glyph) {
        this.deleteAllButton.setGlyph(glyph);
    }
    appendToolbarItem(item) {
        this.mainToolbar.appendToolbarItem(item);
    }
    setStorageKey(storageKey) {
        this.metadataView.setStorageKey(storageKey);
    }
    addButton(label, glyph, callback) {
        const button = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarButton(label, glyph);
        button.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, callback, this);
        return button;
    }
    filterChanged({ data: text }) {
        this.filterRegex = text ? new RegExp(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.escapeForRegExp(text), 'i') : null;
        this.refreshItems();
    }
    filter(items, keyFunction) {
        if (this.filterRegex) {
            const regExp = this.filterRegex;
            return items.filter(item => regExp.test(keyFunction(item)));
        }
        return items;
    }
    hasFilter() {
        return Boolean(this.filterRegex);
    }
    wasShown() {
        this.refreshItems();
    }
    setCanDeleteAll(enabled) {
        this.deleteAllButton.setEnabled(enabled);
    }
    setCanDeleteSelected(enabled) {
        this.deleteSelectedButton.setEnabled(enabled);
    }
    setCanRefresh(enabled) {
        this.refreshButton.setEnabled(enabled);
    }
    setCanFilter(enabled) {
        this.filterItem.setEnabled(enabled);
    }
    deleteAllItems() {
    }
    deleteSelectedItem() {
    }
    refreshItems() {
    }
}
//# sourceMappingURL=StorageItemsView.js.map

/***/ })

}]);