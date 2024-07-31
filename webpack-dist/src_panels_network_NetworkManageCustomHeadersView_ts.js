"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_network_NetworkManageCustomHeadersView_ts"],{

/***/ "./src/panels/network/NetworkManageCustomHeadersView.ts":
/*!**************************************************************!*\
  !*** ./src/panels/network/NetworkManageCustomHeadersView.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NetworkManageCustomHeadersView: () => (/* binding */ NetworkManageCustomHeadersView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './networkManageCustomHeadersView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const UIStrings = {
    /**
     *@description Text in Network Manage Custom Headers View of the Network panel
     */
    manageHeaderColumns: 'Manage Header Columns',
    /**
     *@description Placeholder text content in Network Manage Custom Headers View of the Network panel
     */
    noCustomHeaders: 'No custom headers',
    /**
     *@description Text of add button in Network Manage Custom Headers View of the Network panel
     */
    addCustomHeader: 'Add custom header…',
    /**
     *@description Text in Network Manage Custom Headers View of the Network panel
     */
    headerName: 'Header Name',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/network/NetworkManageCustomHeadersView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class NetworkManageCustomHeadersView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Widget.VBox {
    constructor(columnData, addHeaderColumnCallback, changeHeaderColumnCallback, removeHeaderColumnCallback) {
        super(true);
        Object.defineProperty(this, "list", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "columnConfigs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "addHeaderColumnCallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "changeHeaderColumnCallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "removeHeaderColumnCallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "editor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.contentElement.classList.add('custom-headers-wrapper');
        this.contentElement.createChild('div', 'header').textContent = i18nString(UIStrings.manageHeaderColumns);
        this.list = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ListWidget.ListWidget(this);
        this.list.element.classList.add('custom-headers-list');
        const placeholder = document.createElement('div');
        placeholder.classList.add('custom-headers-list-list-empty');
        placeholder.textContent = i18nString(UIStrings.noCustomHeaders);
        this.list.setEmptyPlaceholder(placeholder);
        this.list.show(this.contentElement);
        this.contentElement.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createTextButton(i18nString(UIStrings.addCustomHeader), this.addButtonClicked.bind(this), {
            className: 'add-button',
            jslogContext: 'network.add-custom-header',
        }));
        this.columnConfigs = new Map();
        columnData.forEach(columnData => this.columnConfigs.set(columnData.title.toLowerCase(), columnData));
        this.addHeaderColumnCallback = addHeaderColumnCallback;
        this.changeHeaderColumnCallback = changeHeaderColumnCallback;
        this.removeHeaderColumnCallback = removeHeaderColumnCallback;
        this.contentElement.tabIndex = 0;
    }
    wasShown() {
        this.headersUpdated();
        this.list.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './networkManageCustomHeadersView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './networkManageCustomHeadersView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
    headersUpdated() {
        this.list.clear();
        this.columnConfigs.forEach(headerData => this.list.appendItem({ header: headerData.title }, headerData.editable));
    }
    addButtonClicked() {
        this.list.addNewItem(this.columnConfigs.size, { header: '' });
    }
    renderItem(item, _editable) {
        const element = document.createElement('div');
        element.classList.add('custom-headers-list-item');
        const header = element.createChild('div', 'custom-header-name');
        header.textContent = item.header;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip.Tooltip.install(header, item.header);
        return element;
    }
    removeItemRequested(item, _index) {
        this.removeHeaderColumnCallback(item.header);
        this.columnConfigs.delete(item.header.toLowerCase());
        this.headersUpdated();
    }
    commitEdit(item, editor, isNew) {
        const headerId = editor.control('header').value.trim();
        let success;
        if (isNew) {
            success = this.addHeaderColumnCallback(headerId);
        }
        else {
            success = this.changeHeaderColumnCallback(item.header, headerId);
        }
        if (success && !isNew) {
            this.columnConfigs.delete(item.header.toLowerCase());
        }
        if (success) {
            this.columnConfigs.set(headerId.toLowerCase(), { title: headerId, editable: true });
        }
        this.headersUpdated();
    }
    beginEdit(item) {
        const editor = this.createEditor();
        editor.control('header').value = item.header;
        return editor;
    }
    createEditor() {
        if (this.editor) {
            return this.editor;
        }
        const editor = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ListWidget.Editor();
        this.editor = editor;
        const content = editor.contentElement();
        const titles = content.createChild('div', 'custom-headers-edit-row');
        titles.createChild('div', 'custom-headers-header').textContent = i18nString(UIStrings.headerName);
        const fields = content.createChild('div', 'custom-headers-edit-row');
        fields.createChild('div', 'custom-headers-header')
            .appendChild(editor.createInput('header', 'text', 'x-custom-header', validateHeader.bind(this)));
        return editor;
        function validateHeader(item, _index, _input) {
            let valid = true;
            const headerId = editor.control('header').value.trim().toLowerCase();
            if (this.columnConfigs.has(headerId) && item.header !== headerId) {
                valid = false;
            }
            return { valid, errorMessage: undefined };
        }
    }
}


/***/ })

}]);