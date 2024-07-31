"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_components_SharedStorageMetadataView_ts"],{

/***/ "./src/panels/application/components/SharedStorageMetadataView.ts":
/*!************************************************************************!*\
  !*** ./src/panels/application/components/SharedStorageMetadataView.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedStorageMetadataView: () => (/* binding */ SharedStorageMetadataView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './sharedStorageMetadataView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _StorageMetadataView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StorageMetadataView.js */ "./src/panels/application/components/StorageMetadataView.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
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
var _SharedStorageMetadataView_instances, _SharedStorageMetadataView_sharedStorageMetadataGetter, _SharedStorageMetadataView_creationTime, _SharedStorageMetadataView_length, _SharedStorageMetadataView_bytesUsed, _SharedStorageMetadataView_remainingBudget, _SharedStorageMetadataView_resetBudget, _SharedStorageMetadataView_renderDateForCreationTime, _SharedStorageMetadataView_renderResetBudgetButton;






const UIStrings = {
    /**
     *@description Text in SharedStorage Metadata View of the Application panel
     */
    sharedStorage: 'Shared storage',
    /**
     *@description The time when the origin most recently created its shared storage database
     */
    creation: 'Creation Time',
    /**
     *@description The placeholder text if there is no creation time because the origin is not yet using shared storage.
     */
    notYetCreated: 'Not yet created',
    /**
     *@description The number of entries currently in the origin's database
     */
    numEntries: 'Number of Entries',
    /**
     *@description The number of bits remaining in the origin's shared storage privacy budget
     */
    entropyBudget: 'Entropy Budget for Fenced Frames',
    /**
     *@description Hover text for `entropyBudget` giving a more detailed explanation
     */
    budgetExplanation: 'Remaining data leakage allowed within a 24-hour period for this origin in bits of entropy',
    /**
     *@description Label for a button which when clicked causes the budget to be reset to the max.
     */
    resetBudget: 'Reset Budget',
    /**
     *@description The number of bytes used by entries currently in the origin's database
     */
    numBytesUsed: 'Number of Bytes Used',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/components/SharedStorageMetadataView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class SharedStorageMetadataView extends _StorageMetadataView_js__WEBPACK_IMPORTED_MODULE_5__.StorageMetadataView {
    constructor(sharedStorageMetadataGetter, owner) {
        super();
        _SharedStorageMetadataView_instances.add(this);
        _SharedStorageMetadataView_sharedStorageMetadataGetter.set(this, void 0);
        _SharedStorageMetadataView_creationTime.set(this, null);
        _SharedStorageMetadataView_length.set(this, 0);
        _SharedStorageMetadataView_bytesUsed.set(this, 0);
        _SharedStorageMetadataView_remainingBudget.set(this, 0);
        __classPrivateFieldSet(this, _SharedStorageMetadataView_sharedStorageMetadataGetter, sharedStorageMetadataGetter, "f");
        this.classList.add('overflow-auto');
        this.setStorageKey(owner);
    }
    connectedCallback() {
        this.getShadow().adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './sharedStorageMetadataView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    getTitle() {
        return i18nString(UIStrings.sharedStorage);
    }
    async renderReportContent() {
        const metadata = await __classPrivateFieldGet(this, _SharedStorageMetadataView_sharedStorageMetadataGetter, "f").getMetadata();
        __classPrivateFieldSet(this, _SharedStorageMetadataView_creationTime, metadata?.creationTime ?? null, "f");
        __classPrivateFieldSet(this, _SharedStorageMetadataView_length, metadata?.length ?? 0, "f");
        __classPrivateFieldSet(this, _SharedStorageMetadataView_bytesUsed, metadata?.bytesUsed ?? 0, "f");
        __classPrivateFieldSet(this, _SharedStorageMetadataView_remainingBudget, metadata?.remainingBudget ?? 0, "f");
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
      ${await super.renderReportContent()}
      ${this.key(i18nString(UIStrings.creation))}
      ${this.value(__classPrivateFieldGet(this, _SharedStorageMetadataView_instances, "m", _SharedStorageMetadataView_renderDateForCreationTime).call(this))}
      ${this.key(i18nString(UIStrings.numEntries))}
      ${this.value(String(__classPrivateFieldGet(this, _SharedStorageMetadataView_length, "f")))}
      ${this.key(i18nString(UIStrings.numBytesUsed))}
      ${this.value(String(__classPrivateFieldGet(this, _SharedStorageMetadataView_bytesUsed, "f")))}
      ${this.key(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `${i18nString(UIStrings.entropyBudget)}<${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName} name="info" title=${i18nString(UIStrings.budgetExplanation)}></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName}>`)}
      ${this.value(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `${__classPrivateFieldGet(this, _SharedStorageMetadataView_remainingBudget, "f")}${__classPrivateFieldGet(this, _SharedStorageMetadataView_instances, "m", _SharedStorageMetadataView_renderResetBudgetButton).call(this)}`)}`;
        // clang-format on
    }
}
_SharedStorageMetadataView_sharedStorageMetadataGetter = new WeakMap(), _SharedStorageMetadataView_creationTime = new WeakMap(), _SharedStorageMetadataView_length = new WeakMap(), _SharedStorageMetadataView_bytesUsed = new WeakMap(), _SharedStorageMetadataView_remainingBudget = new WeakMap(), _SharedStorageMetadataView_instances = new WeakSet(), _SharedStorageMetadataView_resetBudget = async function _SharedStorageMetadataView_resetBudget() {
    await __classPrivateFieldGet(this, _SharedStorageMetadataView_sharedStorageMetadataGetter, "f").resetBudget();
    await this.render();
}, _SharedStorageMetadataView_renderDateForCreationTime = function _SharedStorageMetadataView_renderDateForCreationTime() {
    if (!__classPrivateFieldGet(this, _SharedStorageMetadataView_creationTime, "f")) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `${i18nString(UIStrings.notYetCreated)}`;
    }
    const date = new Date(1e3 * __classPrivateFieldGet(this, _SharedStorageMetadataView_creationTime, "f"));
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `${date.toLocaleString()}`;
}, _SharedStorageMetadataView_renderResetBudgetButton = function _SharedStorageMetadataView_renderResetBudgetButton() {
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
      <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName} .iconName=${'undo'}
                                           .jslogContext=${'reset-entropy-budget'}
                                           .size=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Size.SMALL}
                                           .title=${i18nString(UIStrings.resetBudget)}
                                           .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Variant.ICON}
                                           @click=${__classPrivateFieldGet(this, _SharedStorageMetadataView_instances, "m", _SharedStorageMetadataView_resetBudget).bind(this)}></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName}>
    `;
    // clang-format on
};
Object.defineProperty(SharedStorageMetadataView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-shared-storage-metadata-view`
});
customElements.define('devtools-shared-storage-metadata-view', SharedStorageMetadataView);


/***/ })

}]);