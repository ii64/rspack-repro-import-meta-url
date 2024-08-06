"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_components_StorageMetadataView_js"],{

/***/ "./panels/application/components/StorageMetadataView.js":
/*!**************************************************************!*\
  !*** ./panels/application/components/StorageMetadataView.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageMetadataView: () => (/* binding */ StorageMetadataView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/report_view/report_view.js */ "./ui/components/report_view/report_view.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









const UIStrings = {
    /**
     *@description The origin of a URL (https://web.dev/same-site-same-origin/#origin).
     *(for a lot of languages this does not need to be translated, please translate only where necessary)
     */
    origin: 'Origin',
    /**
     *@description Site (https://web.dev/same-site-same-origin/#site) for the URL the user sees in the omnibox.
     */
    topLevelSite: 'Top-level site',
    /**
     *@description Text to show in the top-level site row, in case the value is opaque (https://html.spec.whatwg.org/#concept-origin-opaque).
     */
    opaque: '(opaque)',
    /**
     *@description Whether the storage corresponds to an opaque key (similar to https://html.spec.whatwg.org/#concept-origin-opaque).
     */
    isOpaque: 'Is opaque',
    /**
     *@description Whether the storage corresponds to a third-party origin (https://web.dev/learn/privacy/third-parties/).
     */
    isThirdParty: 'Is third-party',
    /**
     *@description Text indicating that the condition holds.
     */
    yes: 'Yes',
    /**
     *@description Text indicating that the condition does not hold.
     */
    no: 'No',
    /**
     *@description Text indicating that the storage corresponds to a third-party origin because top-level site is opaque.
     */
    yesBecauseTopLevelIsOpaque: 'Yes, because the top-level site is opaque',
    /**
     *@description Text indicating that the storage corresponds to a third-party origin because the storage key is opaque.
     */
    yesBecauseKeyIsOpaque: 'Yes, because the storage key is opaque',
    /**
     *@description Text indicating that the storage corresponds to a third-party origin because the origin doesn't match the top-level site.
     */
    yesBecauseOriginNotInTopLevelSite: 'Yes, because the origin is outside of the top-level site',
    /**
     *@description Text indicating that the storage corresponds to a third-party origin because the was a third-party origin in the ancestry chain.
     */
    yesBecauseAncestorChainHasCrossSite: 'Yes, because the ancestry chain contains a third-party origin',
    /**
     *@description Text when something is loading.
     */
    loading: 'Loading…',
    /**
     *@description The storage bucket name (https://wicg.github.io/storage-buckets/explainer#bucket-names)
     */
    bucketName: 'Bucket name',
    /**
     *@description The name of the default bucket (https://wicg.github.io/storage-buckets/explainer#the-default-bucket)
     *(This should not be a valid bucket name (https://wicg.github.io/storage-buckets/explainer#bucket-names))
     */
    defaultBucket: 'Default bucket',
    /**
     *@description Text indicating that the storage is persistent (https://wicg.github.io/storage-buckets/explainer#storage-policy-persistence)
     */
    persistent: 'Is persistent',
    /**
     *@description The storage durability policy (https://wicg.github.io/storage-buckets/explainer#storage-policy-durability)
     */
    durability: 'Durability',
    /**
     *@description The storage quota (https://wicg.github.io/storage-buckets/explainer#storage-policy-quota)
     */
    quota: 'Quota',
    /**
     *@description The storage expiration (https://wicg.github.io/storage-buckets/explainer#storage-policy-expiration)
     */
    expiration: 'Expiration',
    /**
     *@description Text indicating that no value is set
     */
    none: 'None',
    /**
     * @description Label of the button that triggers the Storage Bucket to be deleted.
     */
    deleteBucket: 'Delete bucket',
    /**
     *@description Text shown in the confirmation dialogue that displays before deleting the bucket.
     *@example {bucket} PH1
     */
    confirmBucketDeletion: 'Delete the "{PH1}" bucket?',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/components/StorageMetadataView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__.RenderCoordinator.RenderCoordinator.instance();
class StorageMetadataView extends _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_4__.LegacyWrapper.WrappableComponent {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.literal `devtools-storage-metadata-view`;
    #shadow = this.attachShadow({ mode: 'open' });
    #storageBucketsModel;
    #storageKey = null;
    #storageBucket = null;
    getShadow() {
        return this.#shadow;
    }
    setStorageKey(storageKey) {
        this.#storageKey = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.StorageKeyManager.parseStorageKey(storageKey);
        void this.render();
    }
    setStorageBucket(storageBucket) {
        this.#storageBucket = storageBucket;
        this.setStorageKey(storageBucket.bucket.storageKey);
    }
    enableStorageBucketControls(model) {
        this.#storageBucketsModel = model;
        if (this.#storageKey) {
            void this.render();
        }
    }
    render() {
        return coordinator.write('StorageMetadataView render', async () => {
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.Report.litTagName} .data=${{ reportTitle: this.getTitle() ?? i18nString(UIStrings.loading) }}>
          ${await this.renderReportContent()}
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.Report.litTagName}>`, this.#shadow, { host: this });
            // clang-format on
        });
    }
    getTitle() {
        if (!this.#storageKey) {
            return;
        }
        const origin = this.#storageKey.origin;
        const bucketName = this.#storageBucket?.bucket.name || i18nString(UIStrings.defaultBucket);
        return this.#storageBucketsModel ? `${bucketName} - ${origin}` : origin;
    }
    key(content) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `<${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportKey.litTagName}>${content}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportKey.litTagName}>`;
    }
    value(content) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `<${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportValue.litTagName}>${content}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportValue.litTagName}>`;
    }
    async renderReportContent() {
        if (!this.#storageKey) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing;
        }
        const origin = this.#storageKey.origin;
        const ancestorChainHasCrossSite = Boolean(this.#storageKey.components.get("3" /* SDK.StorageKeyManager.StorageKeyComponent.ANCESTOR_CHAIN_BIT */));
        const hasNonce = Boolean(this.#storageKey.components.get("1" /* SDK.StorageKeyManager.StorageKeyComponent.NONCE_HIGH */));
        const topLevelSiteIsOpaque = Boolean(this.#storageKey.components.get("4" /* SDK.StorageKeyManager.StorageKeyComponent.TOP_LEVEL_SITE_OPAQUE_NONCE_HIGH */));
        const topLevelSite = this.#storageKey.components.get("0" /* SDK.StorageKeyManager.StorageKeyComponent.TOP_LEVEL_SITE */);
        const thirdPartyReason = ancestorChainHasCrossSite ? i18nString(UIStrings.yesBecauseAncestorChainHasCrossSite) :
            hasNonce ? i18nString(UIStrings.yesBecauseKeyIsOpaque) :
                topLevelSiteIsOpaque ? i18nString(UIStrings.yesBecauseTopLevelIsOpaque) :
                    (topLevelSite && origin !== topLevelSite) ? i18nString(UIStrings.yesBecauseOriginNotInTopLevelSite) :
                        null;
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `
        ${this.key(i18nString(UIStrings.origin))}
        ${this.value(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `<div class="text-ellipsis" title=${origin}>${origin}</div>`)}
        ${(topLevelSite || topLevelSiteIsOpaque) ? this.key(i18nString(UIStrings.topLevelSite)) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing}
        ${topLevelSite ? this.value(topLevelSite) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing}
        ${topLevelSiteIsOpaque ? this.value(i18nString(UIStrings.opaque)) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing}
        ${thirdPartyReason ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `${this.key(i18nString(UIStrings.isThirdParty))}${this.value(thirdPartyReason)}` : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing}
        ${hasNonce || topLevelSiteIsOpaque ?
            this.key(i18nString(UIStrings.isOpaque)) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing}
        ${hasNonce ? this.value(i18nString(UIStrings.yes)) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing}
        ${topLevelSiteIsOpaque ?
            this.value(i18nString(UIStrings.yesBecauseTopLevelIsOpaque)) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing}
        ${this.#storageBucket ? this.#renderStorageBucketInfo() : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing}
        ${this.#storageBucketsModel ? this.#renderBucketControls() : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing}`;
        // clang-format on
    }
    #renderStorageBucketInfo() {
        if (!this.#storageBucket) {
            throw new Error('Should not call #renderStorageBucketInfo if #bucket is null.');
        }
        const { bucket: { name }, persistent, durability, quota } = this.#storageBucket;
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `
      ${this.key(i18nString(UIStrings.bucketName))}
      ${this.value(name || 'default')}
      ${this.key(i18nString(UIStrings.persistent))}
      ${this.value(persistent ? i18nString(UIStrings.yes) : i18nString(UIStrings.no))}
      ${this.key(i18nString(UIStrings.durability))}
      ${this.value(durability)}
      ${this.key(i18nString(UIStrings.quota))}
      ${this.value(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.NumberUtilities.bytesToString(quota))}
      ${this.key(i18nString(UIStrings.expiration))}
      ${this.value(this.#getExpirationString())}`;
    }
    #getExpirationString() {
        if (!this.#storageBucket) {
            throw new Error('Should not call #getExpirationString if #bucket is null.');
        }
        const { expiration } = this.#storageBucket;
        if (expiration === 0) {
            return i18nString(UIStrings.none);
        }
        return (new Date(expiration * 1000)).toLocaleString();
    }
    #renderBucketControls() {
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection.litTagName}>
        <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__.Button.Button.litTagName}
          aria-label=${i18nString(UIStrings.deleteBucket)}
          .variant=${"primary" /* Buttons.Button.Variant.PRIMARY */}
          @click=${this.#deleteBucket}>
          ${i18nString(UIStrings.deleteBucket)}
        </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__.Button.Button.litTagName}>
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection.litTagName}>`;
        // clang-format on
    }
    async #deleteBucket() {
        if (!this.#storageBucketsModel || !this.#storageBucket) {
            throw new Error('Should not call #deleteBucket if #storageBucketsModel or #storageBucket is null.');
        }
        const ok = await _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.UIUtils.ConfirmDialog.show(i18nString(UIStrings.confirmBucketDeletion, { PH1: this.#storageBucket.bucket.name || '' }), this, { jslogContext: 'delete-bucket-confirmation' });
        if (ok) {
            this.#storageBucketsModel.deleteBucket(this.#storageBucket.bucket);
        }
    }
}
customElements.define('devtools-storage-metadata-view', StorageMetadataView);
//# sourceMappingURL=StorageMetadataView.js.map

/***/ })

}]);