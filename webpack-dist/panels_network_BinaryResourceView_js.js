"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_network_BinaryResourceView_js"],{

/***/ "./panels/network/BinaryResourceView.js":
/*!**********************************************!*\
  !*** ./panels/network/BinaryResourceView.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BinaryResourceView: () => (/* binding */ BinaryResourceView),
/* harmony export */   BinaryViewObject: () => (/* binding */ BinaryViewObject)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _binaryResourceView_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./binaryResourceView.css.js */ "./panels/network/binaryResourceView.css.js");
/* harmony import */ var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     * @description Text in Binary Resource View of the Network panel. Shown to the user as a status
     * message after the current text has been copied to the clipboard. Base64 is a format for encoding
     * data.
     */
    copiedAsBase: 'Copied as `Base64`',
    /**
     *@description Text in Binary Resource View of the Network panel
     */
    hexViewer: '`Hex` Viewer',
    /**
     * @description Text in Binary Resource View of the Network panel. Shown to the user as a status
     * message after the current text has been copied to the clipboard. Hex is short for hexadecimal,
     * and is a format for encoding data.
     */
    copiedAsHex: 'Copied as `Hex`',
    /**
     *@description Text in Binary Resource View of the Network panel. Shown to the user as a status
     * message after the current text has been copied to the clipboard. UTF-8 is a format for encoding data.
     */
    copiedAsUtf: 'Copied as `UTF-8`',
    /**
     *@description Screen reader label for a select box that chooses how to display binary data in the Network panel
     */
    binaryViewType: 'Binary view type',
    /**
     *@description Tooltip text that appears when hovering over the largeicon copy button in the Binary Resource View of the Network panel
     */
    copyToClipboard: 'Copy to clipboard',
    /**
     * @description A context menu command in the Binary Resource View of the Network panel, for
     * copying to the clipboard. Base64 is a format for encoding data.
     */
    copyAsBase: 'Copy as `Base64`',
    /**
     *@description A context menu command in the Binary Resource View of the Network panel, for copying
     * to the clipboard. Hex is short for hexadecimal, and is a format for encoding data.
     */
    copyAsHex: 'Copy as `Hex`',
    /**
     *@description A context menu command in the Binary Resource View of the Network panel, for copying
     *to the clipboard. UTF-8 is a format for encoding data.
     */
    copyAsUtf: 'Copy as `UTF-8`',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/network/BinaryResourceView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
class BinaryResourceView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox {
    binaryResourceViewFactory;
    toolbar;
    binaryViewObjects;
    binaryViewTypeSetting;
    binaryViewTypeCombobox;
    copiedText;
    addFadeoutSettimeoutId;
    lastView;
    constructor(base64content, contentUrl, resourceType) {
        super();
        this.binaryResourceViewFactory =
            new _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_4__.BinaryResourceViewFactory.BinaryResourceViewFactory(base64content, contentUrl, resourceType);
        this.toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.Toolbar('binary-view-toolbar', this.element);
        this.binaryViewObjects = [
            new BinaryViewObject('base64', _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString('Base64'), i18nString(UIStrings.copiedAsBase), this.binaryResourceViewFactory.createBase64View.bind(this.binaryResourceViewFactory), () => Promise.resolve(this.binaryResourceViewFactory.base64())),
            new BinaryViewObject('hex', i18nString(UIStrings.hexViewer), i18nString(UIStrings.copiedAsHex), this.binaryResourceViewFactory.createHexView.bind(this.binaryResourceViewFactory), this.binaryResourceViewFactory.hex.bind(this.binaryResourceViewFactory)),
            new BinaryViewObject('utf8', _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString('UTF-8'), i18nString(UIStrings.copiedAsUtf), this.binaryResourceViewFactory.createUtf8View.bind(this.binaryResourceViewFactory), this.binaryResourceViewFactory.utf8.bind(this.binaryResourceViewFactory)),
        ];
        this.binaryViewTypeSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('binary-view-type', 'hex');
        this.binaryViewTypeCombobox =
            new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarComboBox(this.binaryViewTypeChanged.bind(this), i18nString(UIStrings.binaryViewType));
        for (const viewObject of this.binaryViewObjects) {
            this.binaryViewTypeCombobox.addOption(this.binaryViewTypeCombobox.createOption(viewObject.label, viewObject.type));
        }
        this.toolbar.appendToolbarItem(this.binaryViewTypeCombobox);
        const copyButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarButton(i18nString(UIStrings.copyToClipboard), 'copy');
        copyButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, _event => {
            void this.copySelectedViewToClipboard();
        }, this);
        this.toolbar.appendToolbarItem(copyButton);
        this.copiedText = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarText();
        this.copiedText.element.classList.add('binary-view-copied-text');
        this.toolbar.element.appendChild(this.copiedText.element);
        this.addFadeoutSettimeoutId = null;
        this.lastView = null;
        this.updateView();
    }
    getCurrentViewObject() {
        const filter = (obj) => obj.type === this.binaryViewTypeSetting.get();
        const binaryViewObject = this.binaryViewObjects.find(filter);
        console.assert(Boolean(binaryViewObject), `No binary view found for binary view type found in setting 'binary-view-type': ${this.binaryViewTypeSetting.get()}`);
        return binaryViewObject || null;
    }
    async copySelectedViewToClipboard() {
        const viewObject = this.getCurrentViewObject();
        if (!viewObject) {
            return;
        }
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(await viewObject.content());
        this.copiedText.setText(viewObject.copiedMessage);
        this.copiedText.element.classList.remove('fadeout');
        function addFadeoutClass() {
            this.copiedText.element.classList.add('fadeout');
        }
        if (this.addFadeoutSettimeoutId) {
            clearTimeout(this.addFadeoutSettimeoutId);
            this.addFadeoutSettimeoutId = null;
        }
        this.addFadeoutSettimeoutId = window.setTimeout(addFadeoutClass.bind(this), 2000);
    }
    wasShown() {
        this.updateView();
        this.registerCSSFiles([_binaryResourceView_css_js__WEBPACK_IMPORTED_MODULE_3__["default"]]);
    }
    updateView() {
        const newViewObject = this.getCurrentViewObject();
        if (!newViewObject) {
            return;
        }
        const newView = newViewObject.getView();
        if (newView === this.lastView) {
            return;
        }
        if (this.lastView) {
            this.lastView.detach();
        }
        this.lastView = newView;
        newView.show(this.element, this.toolbar.element);
        this.binaryViewTypeCombobox.selectElement().value = this.binaryViewTypeSetting.get();
    }
    binaryViewTypeChanged() {
        const selectedOption = this.binaryViewTypeCombobox.selectedOption();
        if (!selectedOption) {
            return;
        }
        const newViewType = selectedOption.value;
        if (this.binaryViewTypeSetting.get() === newViewType) {
            return;
        }
        this.binaryViewTypeSetting.set(newViewType);
        this.updateView();
    }
    addCopyToContextMenu(contextMenu, submenuItemText) {
        const copyMenu = contextMenu.clipboardSection().appendSubMenuItem(submenuItemText, false, 'copy');
        const footerSection = copyMenu.footerSection();
        footerSection.appendItem(i18nString(UIStrings.copyAsBase), async () => {
            const content = this.binaryResourceViewFactory.base64();
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(content);
        }, { jslogContext: 'copy-as-base' });
        footerSection.appendItem(i18nString(UIStrings.copyAsHex), async () => {
            const content = await this.binaryResourceViewFactory.hex();
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(content);
        }, { jslogContext: 'copy-as-hex' });
        footerSection.appendItem(i18nString(UIStrings.copyAsUtf), async () => {
            const content = await this.binaryResourceViewFactory.utf8();
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(content);
        }, { jslogContext: 'copy-as-utf' });
    }
}
class BinaryViewObject {
    type;
    label;
    copiedMessage;
    content;
    createViewFn;
    view;
    constructor(type, label, copiedMessage, createViewFn, content) {
        this.type = type;
        this.label = label;
        this.copiedMessage = copiedMessage;
        this.content = content;
        this.createViewFn = createViewFn;
        this.view = null;
    }
    getView() {
        if (!this.view) {
            this.view = this.createViewFn();
        }
        return this.view;
    }
}
//# sourceMappingURL=BinaryResourceView.js.map

/***/ }),

/***/ "./panels/network/binaryResourceView.css.js":
/*!**************************************************!*\
  !*** ./panels/network/binaryResourceView.css.js ***!
  \**************************************************/
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
 * Copyright 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.panel.network .toolbar.binary-view-toolbar {
  border-top: 1px solid var(--sys-color-divider);
  border-bottom: 0;
  padding-left: 5px;
}

.binary-view-copied-text {
  opacity: 100%;
}

.binary-view-copied-text.fadeout {
  opacity: 0%;
  transition: opacity 1s;
}

/*# sourceURL=binaryResourceView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);