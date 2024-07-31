"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_components_StorageMetadataView_ts"],{

/***/ "./src/panels/application/components/StorageMetadataView.ts":
/*!******************************************************************!*\
  !*** ./src/panels/application/components/StorageMetadataView.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageMetadataView: () => (/* binding */ StorageMetadataView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./src/ui/components/legacy_wrapper/legacy_wrapper.ts");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/report_view/report_view.js */ "./src/ui/components/report_view/report_view.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _StorageMetadataView_instances, _StorageMetadataView_shadow, _StorageMetadataView_storageBucketsModel, _StorageMetadataView_storageKey, _StorageMetadataView_storageBucket, _StorageMetadataView_renderStorageBucketInfo, _StorageMetadataView_getExpirationString, _StorageMetadataView_renderBucketControls, _StorageMetadataView_deleteBucket;









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
    constructor() {
        super(...arguments);
        _StorageMetadataView_instances.add(this);
        _StorageMetadataView_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _StorageMetadataView_storageBucketsModel.set(this, void 0);
        _StorageMetadataView_storageKey.set(this, null);
        _StorageMetadataView_storageBucket.set(this, null);
    }
    getShadow() {
        return __classPrivateFieldGet(this, _StorageMetadataView_shadow, "f");
    }
    setStorageKey(storageKey) {
        __classPrivateFieldSet(this, _StorageMetadataView_storageKey, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.StorageKeyManager.parseStorageKey(storageKey), "f");
        void this.render();
    }
    setStorageBucket(storageBucket) {
        __classPrivateFieldSet(this, _StorageMetadataView_storageBucket, storageBucket, "f");
        this.setStorageKey(storageBucket.bucket.storageKey);
    }
    enableStorageBucketControls(model) {
        __classPrivateFieldSet(this, _StorageMetadataView_storageBucketsModel, model, "f");
        if (__classPrivateFieldGet(this, _StorageMetadataView_storageKey, "f")) {
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
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.Report.litTagName}>`, __classPrivateFieldGet(this, _StorageMetadataView_shadow, "f"), { host: this });
            // clang-format on
        });
    }
    getTitle() {
        if (!__classPrivateFieldGet(this, _StorageMetadataView_storageKey, "f")) {
            return;
        }
        const origin = __classPrivateFieldGet(this, _StorageMetadataView_storageKey, "f").origin;
        const bucketName = __classPrivateFieldGet(this, _StorageMetadataView_storageBucket, "f")?.bucket.name || i18nString(UIStrings.defaultBucket);
        return __classPrivateFieldGet(this, _StorageMetadataView_storageBucketsModel, "f") ? `${bucketName} - ${origin}` : origin;
    }
    key(content) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `<${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportKey.litTagName}>${content}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportKey.litTagName}>`;
    }
    value(content) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `<${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportValue.litTagName}>${content}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportValue.litTagName}>`;
    }
    async renderReportContent() {
        if (!__classPrivateFieldGet(this, _StorageMetadataView_storageKey, "f")) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing;
        }
        const origin = __classPrivateFieldGet(this, _StorageMetadataView_storageKey, "f").origin;
        const ancestorChainHasCrossSite = Boolean(__classPrivateFieldGet(this, _StorageMetadataView_storageKey, "f").components.get(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.StorageKeyManager.StorageKeyComponent.ANCESTOR_CHAIN_BIT));
        const hasNonce = Boolean(__classPrivateFieldGet(this, _StorageMetadataView_storageKey, "f").components.get(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.StorageKeyManager.StorageKeyComponent.NONCE_HIGH));
        const topLevelSiteIsOpaque = Boolean(__classPrivateFieldGet(this, _StorageMetadataView_storageKey, "f").components.get(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.StorageKeyManager.StorageKeyComponent.TOP_LEVEL_SITE_OPAQUE_NONCE_HIGH));
        const topLevelSite = __classPrivateFieldGet(this, _StorageMetadataView_storageKey, "f").components.get(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.StorageKeyManager.StorageKeyComponent.TOP_LEVEL_SITE);
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
        ${__classPrivateFieldGet(this, _StorageMetadataView_storageBucket, "f") ? __classPrivateFieldGet(this, _StorageMetadataView_instances, "m", _StorageMetadataView_renderStorageBucketInfo).call(this) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing}
        ${__classPrivateFieldGet(this, _StorageMetadataView_storageBucketsModel, "f") ? __classPrivateFieldGet(this, _StorageMetadataView_instances, "m", _StorageMetadataView_renderBucketControls).call(this) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing}`;
        // clang-format on
    }
}
_StorageMetadataView_shadow = new WeakMap(), _StorageMetadataView_storageBucketsModel = new WeakMap(), _StorageMetadataView_storageKey = new WeakMap(), _StorageMetadataView_storageBucket = new WeakMap(), _StorageMetadataView_instances = new WeakSet(), _StorageMetadataView_renderStorageBucketInfo = function _StorageMetadataView_renderStorageBucketInfo() {
    if (!__classPrivateFieldGet(this, _StorageMetadataView_storageBucket, "f")) {
        throw new Error('Should not call #renderStorageBucketInfo if #bucket is null.');
    }
    const { bucket: { name }, persistent, durability, quota } = __classPrivateFieldGet(this, _StorageMetadataView_storageBucket, "f");
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
      ${this.value(__classPrivateFieldGet(this, _StorageMetadataView_instances, "m", _StorageMetadataView_getExpirationString).call(this))}`;
}, _StorageMetadataView_getExpirationString = function _StorageMetadataView_getExpirationString() {
    if (!__classPrivateFieldGet(this, _StorageMetadataView_storageBucket, "f")) {
        throw new Error('Should not call #getExpirationString if #bucket is null.');
    }
    const { expiration } = __classPrivateFieldGet(this, _StorageMetadataView_storageBucket, "f");
    if (expiration === 0) {
        return i18nString(UIStrings.none);
    }
    return (new Date(expiration * 1000)).toLocaleString();
}, _StorageMetadataView_renderBucketControls = function _StorageMetadataView_renderBucketControls() {
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection.litTagName}>
        <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__.Button.Button.litTagName}
          aria-label=${i18nString(UIStrings.deleteBucket)}
          .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__.Button.Variant.PRIMARY}
          @click=${__classPrivateFieldGet(this, _StorageMetadataView_instances, "m", _StorageMetadataView_deleteBucket)}>
          ${i18nString(UIStrings.deleteBucket)}
        </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__.Button.Button.litTagName}>
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection.litTagName}>`;
    // clang-format on
}, _StorageMetadataView_deleteBucket = async function _StorageMetadataView_deleteBucket() {
    if (!__classPrivateFieldGet(this, _StorageMetadataView_storageBucketsModel, "f") || !__classPrivateFieldGet(this, _StorageMetadataView_storageBucket, "f")) {
        throw new Error('Should not call #deleteBucket if #storageBucketsModel or #storageBucket is null.');
    }
    const ok = await _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.UIUtils.ConfirmDialog.show(i18nString(UIStrings.confirmBucketDeletion, { PH1: __classPrivateFieldGet(this, _StorageMetadataView_storageBucket, "f").bucket.name || '' }), this, { jslogContext: 'delete-bucket-confirmation' });
    if (ok) {
        __classPrivateFieldGet(this, _StorageMetadataView_storageBucketsModel, "f").deleteBucket(__classPrivateFieldGet(this, _StorageMetadataView_storageBucket, "f").bucket);
    }
};
Object.defineProperty(StorageMetadataView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.literal `devtools-storage-metadata-view`
});
customElements.define('devtools-storage-metadata-view', StorageMetadataView);


/***/ }),

/***/ "./src/ui/components/report_view/ReportView.ts":
/*!*****************************************************!*\
  !*** ./src/ui/components/report_view/ReportView.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Report: () => (/* binding */ Report),
/* harmony export */   ReportKey: () => (/* binding */ ReportKey),
/* harmony export */   ReportSection: () => (/* binding */ ReportSection),
/* harmony export */   ReportSectionDivider: () => (/* binding */ ReportSectionDivider),
/* harmony export */   ReportSectionHeader: () => (/* binding */ ReportSectionHeader),
/* harmony export */   ReportValue: () => (/* binding */ ReportValue)
/* harmony export */ });
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './report.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportKey.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSection.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSectionDivider.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSectionHeader.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportValue.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
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
var _Report_instances, _Report_shadow, _Report_reportTitle, _Report_render, _ReportSection_instances, _ReportSection_shadow, _ReportSection_render, _ReportSectionHeader_instances, _ReportSectionHeader_shadow, _ReportSectionHeader_render, _ReportSectionDivider_instances, _ReportSectionDivider_shadow, _ReportSectionDivider_render, _ReportKey_instances, _ReportKey_shadow, _ReportKey_render, _ReportValue_instances, _ReportValue_shadow, _ReportValue_render;







class Report extends HTMLElement {
    constructor() {
        super(...arguments);
        _Report_instances.add(this);
        _Report_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _Report_reportTitle.set(this, '');
    }
    set data({ reportTitle }) {
        __classPrivateFieldSet(this, _Report_reportTitle, reportTitle, "f");
        __classPrivateFieldGet(this, _Report_instances, "m", _Report_render).call(this);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _Report_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './report.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _Report_instances, "m", _Report_render).call(this);
    }
}
_Report_shadow = new WeakMap(), _Report_reportTitle = new WeakMap(), _Report_instances = new WeakSet(), _Report_render = function _Report_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="content">
        ${__classPrivateFieldGet(this, _Report_reportTitle, "f") ? _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `<div class="report-title">${__classPrivateFieldGet(this, _Report_reportTitle, "f")}</div>` : _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing}
        <slot></slot>
      </div>
    `, __classPrivateFieldGet(this, _Report_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(Report, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report`
});
class ReportSection extends HTMLElement {
    constructor() {
        super(...arguments);
        _ReportSection_instances.add(this);
        _ReportSection_shadow.set(this, this.attachShadow({ mode: 'open' }));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ReportSection_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSection.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _ReportSection_instances, "m", _ReportSection_render).call(this);
    }
}
_ReportSection_shadow = new WeakMap(), _ReportSection_instances = new WeakSet(), _ReportSection_render = function _ReportSection_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="section">
        <slot></slot>
      </div>
    `, __classPrivateFieldGet(this, _ReportSection_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ReportSection, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-section`
});
class ReportSectionHeader extends HTMLElement {
    constructor() {
        super(...arguments);
        _ReportSectionHeader_instances.add(this);
        _ReportSectionHeader_shadow.set(this, this.attachShadow({ mode: 'open' }));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ReportSectionHeader_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSectionHeader.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _ReportSectionHeader_instances, "m", _ReportSectionHeader_render).call(this);
    }
}
_ReportSectionHeader_shadow = new WeakMap(), _ReportSectionHeader_instances = new WeakSet(), _ReportSectionHeader_render = function _ReportSectionHeader_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="section-header">
        <slot></slot>
      </div>
    `, __classPrivateFieldGet(this, _ReportSectionHeader_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ReportSectionHeader, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-section-header`
});
class ReportSectionDivider extends HTMLElement {
    constructor() {
        super(...arguments);
        _ReportSectionDivider_instances.add(this);
        _ReportSectionDivider_shadow.set(this, this.attachShadow({ mode: 'open' }));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ReportSectionDivider_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSectionDivider.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _ReportSectionDivider_instances, "m", _ReportSectionDivider_render).call(this);
    }
}
_ReportSectionDivider_shadow = new WeakMap(), _ReportSectionDivider_instances = new WeakSet(), _ReportSectionDivider_render = function _ReportSectionDivider_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="section-divider">
      </div>
    `, __classPrivateFieldGet(this, _ReportSectionDivider_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ReportSectionDivider, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-divider`
});
class ReportKey extends HTMLElement {
    constructor() {
        super(...arguments);
        _ReportKey_instances.add(this);
        _ReportKey_shadow.set(this, this.attachShadow({ mode: 'open' }));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ReportKey_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportKey.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _ReportKey_instances, "m", _ReportKey_render).call(this);
    }
}
_ReportKey_shadow = new WeakMap(), _ReportKey_instances = new WeakSet(), _ReportKey_render = function _ReportKey_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="key"><slot></slot></div>
    `, __classPrivateFieldGet(this, _ReportKey_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ReportKey, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-key`
});
class ReportValue extends HTMLElement {
    constructor() {
        super(...arguments);
        _ReportValue_instances.add(this);
        _ReportValue_shadow.set(this, this.attachShadow({ mode: 'open' }));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ReportValue_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportValue.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _ReportValue_instances, "m", _ReportValue_render).call(this);
    }
}
_ReportValue_shadow = new WeakMap(), _ReportValue_instances = new WeakSet(), _ReportValue_render = function _ReportValue_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="value"><slot></slot></div>
    `, __classPrivateFieldGet(this, _ReportValue_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ReportValue, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-value`
});
customElements.define('devtools-report', Report);
customElements.define('devtools-report-section', ReportSection);
customElements.define('devtools-report-section-header', ReportSectionHeader);
customElements.define('devtools-report-key', ReportKey);
customElements.define('devtools-report-value', ReportValue);
customElements.define('devtools-report-divider', ReportSectionDivider);


/***/ }),

/***/ "./src/ui/components/report_view/report_view.ts":
/*!******************************************************!*\
  !*** ./src/ui/components/report_view/report_view.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportView: () => (/* reexport module object */ _ReportView_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _ReportView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportView.js */ "./src/ui/components/report_view/ReportView.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/***/ })

}]);