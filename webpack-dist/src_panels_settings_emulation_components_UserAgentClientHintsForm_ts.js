"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_settings_emulation_components_UserAgentClientHintsForm_ts"],{

/***/ "./src/panels/settings/emulation/components/UserAgentClientHintsForm.ts":
/*!******************************************************************************!*\
  !*** ./src/panels/settings/emulation/components/UserAgentClientHintsForm.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientHintsChangeEvent: () => (/* binding */ ClientHintsChangeEvent),
/* harmony export */   ClientHintsSubmitEvent: () => (/* binding */ ClientHintsSubmitEvent),
/* harmony export */   UserAgentClientHintsForm: () => (/* binding */ UserAgentClientHintsForm)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ui/components/input/input.js */ "./src/ui/components/input/input.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/utils.js */ "./src/panels/settings/emulation/utils/utils.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './userAgentClientHintsForm.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2021 The Chromium Authors. All rights reserved.
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
var _UserAgentClientHintsForm_instances, _UserAgentClientHintsForm_shadow, _UserAgentClientHintsForm_isFormOpened, _UserAgentClientHintsForm_isFormDisabled, _UserAgentClientHintsForm_metaData, _UserAgentClientHintsForm_showMobileCheckbox, _UserAgentClientHintsForm_showSubmitButton, _UserAgentClientHintsForm_useragentModifiedAriaMessage, _UserAgentClientHintsForm_handleTreeExpand, _UserAgentClientHintsForm_handleTreeClick, _UserAgentClientHintsForm_handleUseragentInputChange, _UserAgentClientHintsForm_handleFullVersionListInputChange, _UserAgentClientHintsForm_handleUseragentDelete, _UserAgentClientHintsForm_handleFullVersionListDelete, _UserAgentClientHintsForm_handleAddUseragentBrandClick, _UserAgentClientHintsForm_handleAddUseragentBrandKeyPress, _UserAgentClientHintsForm_handleAddFullVersionListBrandClick, _UserAgentClientHintsForm_handleAddFullVersionListBrandKeyPress, _UserAgentClientHintsForm_handleInputChange, _UserAgentClientHintsForm_handleLinkPress, _UserAgentClientHintsForm_handleSubmit, _UserAgentClientHintsForm_renderInputWithLabel, _UserAgentClientHintsForm_renderPlatformSection, _UserAgentClientHintsForm_renderDeviceModelSection, _UserAgentClientHintsForm_renderUseragent, _UserAgentClientHintsForm_renderFullVersionList, _UserAgentClientHintsForm_render;









const UIStrings = {
    /**
     * @description Title for user agent client hints form
     */
    title: 'User agent client hints',
    /**
     * @description Heading for user agent section.
     * Brands here relate to different browser brands/vendors like Google Chrome, Microsoft Edge etc.
     */
    useragent: 'User agent (Sec-CH-UA)',
    /**
     * @description Heading for full-version-list section.
     */
    fullVersionList: 'Full version list (Sec-CH-UA-Full-Version-List)',
    /**
     * @description ARIA label for a form with properties for a single brand in a brand list. The form includes a brand name input field, a version
     * input field and a delete icon. Brand refer to different browser brands/vendors like Google Chrome, Microsoft Edge etc.
     */
    brandProperties: 'User agent properties',
    /**
     * @description Input field placeholder for brands browser name.
     * Brands here relate to different browser brands/vendors like Google Chrome, Microsoft Edge etc.
     */
    brandName: 'Brand',
    /**
     * @description Aria label for brands browser name input field.
     * Brands here relate to different browser brands/vendors like Google Chrome, Microsoft Edge etc.
     * @example {index} PH1
     */
    brandNameAriaLabel: 'Brand {PH1}',
    /**
     * @description Input field placeholder for significant brand version.
     * Brands here relate to different browser brands/vendors like Google Chrome (v89), Microsoft Edge (v92) etc.
     */
    significantBrandVersionPlaceholder: 'Significant version (e.g. 87)',
    /**
     * @description Input field placeholder for brand version.
     * Brands here relate to different browser brands/vendors like Google Chrome (v89), Microsoft Edge (v92) etc.
     */
    brandVersionPlaceholder: 'Version (e.g. 87.0.4280.88)',
    /**
     * @description Aria label for brands browser version input field.
     * Brands here relate to different browser brands/vendors like Google Chrome, Microsoft Edge etc.
     * @example {index} PH1
     */
    brandVersionAriaLabel: 'Version {PH1}',
    /**
     * @description Button title for adding another brand in brands section to client hints.
     * Brands here relate to different browser brands/vendors like Google Chrome, Microsoft Edge etc.
     */
    addBrand: 'Add Brand',
    /**
     * @description Tooltip and aria label for delete icon for deleting browser brand from brands user agent section.
     * Brands here relate to different browser brands/vendors like Google Chrome, Microsoft Edge etc.
     */
    brandUserAgentDelete: 'Delete brand from user agent section',
    /**
     * @description Tooltip and aria label for delete icon for deleting user agent from brands full version list.
     * Brands here relate to different browser brands/vendors like Google Chrome, Microsoft Edge etc.
     */
    brandFullVersionListDelete: 'Delete brand from full version list',
    /**
     * @description Label for full browser version input field.
     */
    fullBrowserVersion: 'Full browser version (Sec-CH-UA-Full-Browser-Version)',
    /**
     * @description Placeholder for full browser version input field.
     */
    fullBrowserVersionPlaceholder: 'Full browser version (e.g. 87.0.4280.88)',
    /**
     * @description Label for platform heading section, platform relates to OS like Android, Windows etc.
     */
    platformLabel: 'Platform (Sec-CH-UA-Platform / Sec-CH-UA-Platform-Version)',
    /**
     * @description Platform row, including platform name and platform version input field.
     */
    platformProperties: 'Platform properties',
    /**
     * @description Version for platform input field, platform relates to OS like Android, Windows etc.
     */
    platformVersion: 'Platform version',
    /**
     * @description Placeholder for platform name input field, platform relates to OS like Android, Windows etc.
     */
    platformPlaceholder: 'Platform (e.g. Android)',
    /**
     * @description Label for architecture (Eg: x86, x64, arm) input field.
     */
    architecture: 'Architecture (Sec-CH-UA-Arch)',
    /**
     * @description Placeholder for architecture (Eg: x86, x64, arm) input field.
     */
    architecturePlaceholder: 'Architecture (e.g. x86)',
    /**
     * @description Device model row, including device model input field and mobile checkbox
     */
    deviceProperties: 'Device properties',
    /**
     * @description Label for Device Model input field.
     */
    deviceModel: 'Device model (Sec-CH-UA-Model)',
    /**
     * @description Label for Mobile phone checkbox.
     */
    mobileCheckboxLabel: 'Mobile',
    /**
     * @description Label for button to submit client hints form in DevTools.
     */
    update: 'Update',
    /**
     *@description Field Error message in the Device settings pane that shows that the entered value has characters that can't be represented in the corresponding User Agent Client Hints
     */
    notRepresentable: 'Not representable as structured headers string.',
    /**
     * @description Hover text for info icon which explains user agent client hints.
     */
    userAgentClientHintsInfo: 'User agent client hints are an alternative to the user agent string that identify the browser and the device in a more structured way with better privacy accounting.',
    /**
     * @description Success message when brand row is successfully added in client hints form.
     * Brands here relate to different browser brands/vendors like Google Chrome, Microsoft Edge etc.
     */
    addedBrand: 'Added brand row',
    /**
     * @description Success message when brand row is successfully deleted in client hints form.
     * Brands here relate to different browser brands/vendors like Google Chrome, Microsoft Edge etc.
     */
    deletedBrand: 'Deleted brand row',
    /**
     *@description Text that is usually a hyperlink to more documentation
     */
    learnMore: 'Learn more',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/settings/emulation/components/UserAgentClientHintsForm.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class ClientHintsChangeEvent extends Event {
    constructor() {
        super(ClientHintsChangeEvent.eventName);
    }
}
Object.defineProperty(ClientHintsChangeEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'clienthintschange'
});
class ClientHintsSubmitEvent extends Event {
    constructor(value) {
        super(ClientHintsSubmitEvent.eventName);
        Object.defineProperty(this, "detail", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.detail = { value };
    }
}
Object.defineProperty(ClientHintsSubmitEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'clienthintssubmit'
});
const DEFAULT_METADATA = {
    brands: [
        {
            brand: '',
            version: '',
        },
    ],
    fullVersionList: [
        {
            brand: '',
            version: '',
        },
    ],
    fullVersion: '',
    platform: '',
    platformVersion: '',
    architecture: '',
    model: '',
    mobile: false,
};
/**
 * Component for user agent client hints form, it is used in device settings panel
 * and network conditions panel. It is customizable through showMobileCheckbox and showSubmitButton.
 */
// eslint-disable-next-line rulesdir/custom_element_definitions_location
class UserAgentClientHintsForm extends HTMLElement {
    constructor() {
        super(...arguments);
        _UserAgentClientHintsForm_instances.add(this);
        _UserAgentClientHintsForm_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _UserAgentClientHintsForm_isFormOpened.set(this, false);
        _UserAgentClientHintsForm_isFormDisabled.set(this, false);
        _UserAgentClientHintsForm_metaData.set(this, DEFAULT_METADATA);
        _UserAgentClientHintsForm_showMobileCheckbox.set(this, false);
        _UserAgentClientHintsForm_showSubmitButton.set(this, false);
        _UserAgentClientHintsForm_useragentModifiedAriaMessage.set(this, '');
        _UserAgentClientHintsForm_handleTreeExpand.set(this, (event) => {
            if (event.code === 'Space' || event.code === 'Enter' || event.code === 'ArrowLeft' || event.code === 'ArrowRight') {
                event.stopPropagation();
                __classPrivateFieldGet(this, _UserAgentClientHintsForm_handleTreeClick, "f").call(this, event.code);
            }
        });
        _UserAgentClientHintsForm_handleTreeClick.set(this, (key) => {
            if (__classPrivateFieldGet(this, _UserAgentClientHintsForm_isFormDisabled, "f")) {
                return;
            }
            if ((key === 'ArrowLeft' && !__classPrivateFieldGet(this, _UserAgentClientHintsForm_isFormOpened, "f")) || (key === 'ArrowRight' && __classPrivateFieldGet(this, _UserAgentClientHintsForm_isFormOpened, "f"))) {
                return;
            }
            __classPrivateFieldSet(this, _UserAgentClientHintsForm_isFormOpened, !__classPrivateFieldGet(this, _UserAgentClientHintsForm_isFormOpened, "f"), "f");
            __classPrivateFieldGet(this, _UserAgentClientHintsForm_instances, "m", _UserAgentClientHintsForm_render).call(this);
        });
        _UserAgentClientHintsForm_handleUseragentInputChange.set(this, (value, index, brandInputType) => {
            const updatedUseragent = __classPrivateFieldGet(this, _UserAgentClientHintsForm_metaData, "f").brands?.map((browserBrand, brandIndex) => {
                if (brandIndex === index) {
                    const { brand, version } = browserBrand;
                    if (brandInputType === 'brandName') {
                        return {
                            brand: value,
                            version,
                        };
                    }
                    return {
                        brand,
                        version: value,
                    };
                }
                return browserBrand;
            });
            __classPrivateFieldSet(this, _UserAgentClientHintsForm_metaData, {
                ...__classPrivateFieldGet(this, _UserAgentClientHintsForm_metaData, "f"),
                brands: updatedUseragent,
            }, "f");
            this.dispatchEvent(new ClientHintsChangeEvent());
            __classPrivateFieldGet(this, _UserAgentClientHintsForm_instances, "m", _UserAgentClientHintsForm_render).call(this);
        });
        _UserAgentClientHintsForm_handleFullVersionListInputChange.set(this, (value, index, brandInputType) => {
            const fullVersionList = __classPrivateFieldGet(this, _UserAgentClientHintsForm_metaData, "f").fullVersionList?.map((browserBrand, brandIndex) => {
                if (brandIndex === index) {
                    const { brand, version } = browserBrand;
                    if (brandInputType === 'brandName') {
                        return {
                            brand: value,
                            version,
                        };
                    }
                    return {
                        brand,
                        version: value,
                    };
                }
                return browserBrand;
            });
            __classPrivateFieldSet(this, _UserAgentClientHintsForm_metaData, {
                ...__classPrivateFieldGet(this, _UserAgentClientHintsForm_metaData, "f"),
                fullVersionList,
            }, "f");
            this.dispatchEvent(new ClientHintsChangeEvent());
            __classPrivateFieldGet(this, _UserAgentClientHintsForm_instances, "m", _UserAgentClientHintsForm_render).call(this);
        });
        _UserAgentClientHintsForm_handleUseragentDelete.set(this, (index) => {
            const { brands = [] } = __classPrivateFieldGet(this, _UserAgentClientHintsForm_metaData, "f");
            brands.splice(index, 1);
            __classPrivateFieldSet(this, _UserAgentClientHintsForm_metaData, {
                ...__classPrivateFieldGet(this, _UserAgentClientHintsForm_metaData, "f"),
                brands,
            }, "f");
            this.dispatchEvent(new ClientHintsChangeEvent());
            __classPrivateFieldSet(this, _UserAgentClientHintsForm_useragentModifiedAriaMessage, i18nString(UIStrings.deletedBrand), "f");
            __classPrivateFieldGet(this, _UserAgentClientHintsForm_instances, "m", _UserAgentClientHintsForm_render).call(this);
            // after deleting a brand row, focus on next Brand input if available,
            // otherwise focus on the "Add Brand" button
            let nextFocusElement = this.shadowRoot?.getElementById(`ua-brand-${index + 1}-input`);
            if (!nextFocusElement) {
                nextFocusElement = this.shadowRoot?.getElementById('add-brand-button');
            }
            nextFocusElement?.focus();
        });
        _UserAgentClientHintsForm_handleFullVersionListDelete.set(this, (index) => {
            const { fullVersionList = [] } = __classPrivateFieldGet(this, _UserAgentClientHintsForm_metaData, "f");
            fullVersionList.splice(index, 1);
            __classPrivateFieldSet(this, _UserAgentClientHintsForm_metaData, {
                ...__classPrivateFieldGet(this, _UserAgentClientHintsForm_metaData, "f"),
                fullVersionList,
            }, "f");
            this.dispatchEvent(new ClientHintsChangeEvent());
            __classPrivateFieldSet(this, _UserAgentClientHintsForm_useragentModifiedAriaMessage, i18nString(UIStrings.deletedBrand), "f");
            __classPrivateFieldGet(this, _UserAgentClientHintsForm_instances, "m", _UserAgentClientHintsForm_render).call(this);
            // after deleting a brand row, focus on next Brand input if available,
            // otherwise focus on the "Add Brand" button
            let nextFocusElement = this.shadowRoot?.getElementById(`fvl-brand-${index + 1}-input`);
            if (!nextFocusElement) {
                nextFocusElement = this.shadowRoot?.getElementById('add-fvl-brand-button');
            }
            nextFocusElement?.focus();
        });
        _UserAgentClientHintsForm_handleAddUseragentBrandClick.set(this, () => {
            const { brands } = __classPrivateFieldGet(this, _UserAgentClientHintsForm_metaData, "f");
            __classPrivateFieldSet(this, _UserAgentClientHintsForm_metaData, {
                ...__classPrivateFieldGet(this, _UserAgentClientHintsForm_metaData, "f"),
                brands: [
                    ...(Array.isArray(brands) ? brands : []),
                    {
                        brand: '',
                        version: '',
                    },
                ],
            }, "f");
            this.dispatchEvent(new ClientHintsChangeEvent());
            __classPrivateFieldSet(this, _UserAgentClientHintsForm_useragentModifiedAriaMessage, i18nString(UIStrings.addedBrand), "f");
            __classPrivateFieldGet(this, _UserAgentClientHintsForm_instances, "m", _UserAgentClientHintsForm_render).call(this);
            const brandInputElements = this.shadowRoot?.querySelectorAll('.ua-brand-name-input');
            if (brandInputElements) {
                const lastBrandInputElement = Array.from(brandInputElements).pop();
                if (lastBrandInputElement) {
                    lastBrandInputElement.focus();
                }
            }
        });
        _UserAgentClientHintsForm_handleAddUseragentBrandKeyPress.set(this, (event) => {
            if (event.code === 'Space' || event.code === 'Enter') {
                event.preventDefault();
                __classPrivateFieldGet(this, _UserAgentClientHintsForm_handleAddUseragentBrandClick, "f").call(this);
            }
        });
        _UserAgentClientHintsForm_handleAddFullVersionListBrandClick.set(this, () => {
            const { fullVersionList } = __classPrivateFieldGet(this, _UserAgentClientHintsForm_metaData, "f");
            __classPrivateFieldSet(this, _UserAgentClientHintsForm_metaData, {
                ...__classPrivateFieldGet(this, _UserAgentClientHintsForm_metaData, "f"),
                fullVersionList: [
                    ...(Array.isArray(fullVersionList) ? fullVersionList : []),
                    {
                        brand: '',
                        version: '',
                    },
                ],
            }, "f");
            this.dispatchEvent(new ClientHintsChangeEvent());
            __classPrivateFieldSet(this, _UserAgentClientHintsForm_useragentModifiedAriaMessage, i18nString(UIStrings.addedBrand), "f");
            __classPrivateFieldGet(this, _UserAgentClientHintsForm_instances, "m", _UserAgentClientHintsForm_render).call(this);
            const brandInputElements = this.shadowRoot?.querySelectorAll('.fvl-brand-name-input');
            if (brandInputElements) {
                const lastBrandInputElement = Array.from(brandInputElements).pop();
                if (lastBrandInputElement) {
                    lastBrandInputElement.focus();
                }
            }
        });
        _UserAgentClientHintsForm_handleAddFullVersionListBrandKeyPress.set(this, (event) => {
            if (event.code === 'Space' || event.code === 'Enter') {
                event.preventDefault();
                __classPrivateFieldGet(this, _UserAgentClientHintsForm_handleAddFullVersionListBrandClick, "f").call(this);
            }
        });
        _UserAgentClientHintsForm_handleInputChange.set(this, (stateKey, value) => {
            if (stateKey in __classPrivateFieldGet(this, _UserAgentClientHintsForm_metaData, "f")) {
                __classPrivateFieldSet(this, _UserAgentClientHintsForm_metaData, {
                    ...__classPrivateFieldGet(this, _UserAgentClientHintsForm_metaData, "f"),
                    [stateKey]: value,
                }, "f");
                __classPrivateFieldGet(this, _UserAgentClientHintsForm_instances, "m", _UserAgentClientHintsForm_render).call(this);
            }
            this.dispatchEvent(new ClientHintsChangeEvent());
        });
        _UserAgentClientHintsForm_handleLinkPress.set(this, (event) => {
            if (event.code === 'Space' || event.code === 'Enter') {
                event.preventDefault();
                event.target.click();
            }
        });
        _UserAgentClientHintsForm_handleSubmit.set(this, (event) => {
            event.preventDefault();
            if (__classPrivateFieldGet(this, _UserAgentClientHintsForm_showSubmitButton, "f")) {
                this.dispatchEvent(new ClientHintsSubmitEvent(__classPrivateFieldGet(this, _UserAgentClientHintsForm_metaData, "f")));
                __classPrivateFieldGet(this, _UserAgentClientHintsForm_instances, "m", _UserAgentClientHintsForm_render).call(this);
            }
        });
        Object.defineProperty(this, "validate", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                for (const [metaDataKey, metaDataValue] of Object.entries(__classPrivateFieldGet(this, _UserAgentClientHintsForm_metaData, "f"))) {
                    if (metaDataKey === 'brands' || metaDataKey === 'fullVersionList') {
                        // for sturctured fields, check each individual brand/version
                        const isBrandValid = __classPrivateFieldGet(this, _UserAgentClientHintsForm_metaData, "f").brands?.every(({ brand, version }) => {
                            const brandNameResult = _utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.UserAgentMetadata.validateAsStructuredHeadersString(brand, i18nString(UIStrings.notRepresentable));
                            const brandVersionResult = _utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.UserAgentMetadata.validateAsStructuredHeadersString(version, i18nString(UIStrings.notRepresentable));
                            return brandNameResult.valid && brandVersionResult.valid;
                        });
                        if (!isBrandValid) {
                            return { valid: false, errorMessage: i18nString(UIStrings.notRepresentable) };
                        }
                    }
                    else {
                        // otherwise, validate the value as a string
                        const metaDataError = _utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.UserAgentMetadata.validateAsStructuredHeadersString(metaDataValue, i18nString(UIStrings.notRepresentable));
                        if (!metaDataError.valid) {
                            return metaDataError;
                        }
                    }
                }
                return { valid: true };
            }
        });
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _UserAgentClientHintsForm_shadow, "f").adoptedStyleSheets = [_ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_4__.checkboxStyles, Object(function webpackMissingModule() { var e = new Error("Cannot find module './userAgentClientHintsForm.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    set value(data) {
        const { metaData = DEFAULT_METADATA, showMobileCheckbox = false, showSubmitButton = false } = data;
        __classPrivateFieldSet(this, _UserAgentClientHintsForm_metaData, {
            ...__classPrivateFieldGet(this, _UserAgentClientHintsForm_metaData, "f"),
            ...metaData,
        }, "f");
        __classPrivateFieldSet(this, _UserAgentClientHintsForm_showMobileCheckbox, showMobileCheckbox, "f");
        __classPrivateFieldSet(this, _UserAgentClientHintsForm_showSubmitButton, showSubmitButton, "f");
        __classPrivateFieldGet(this, _UserAgentClientHintsForm_instances, "m", _UserAgentClientHintsForm_render).call(this);
    }
    get value() {
        return {
            metaData: __classPrivateFieldGet(this, _UserAgentClientHintsForm_metaData, "f"),
        };
    }
    set disabled(disableForm) {
        __classPrivateFieldSet(this, _UserAgentClientHintsForm_isFormDisabled, disableForm, "f");
        __classPrivateFieldSet(this, _UserAgentClientHintsForm_isFormOpened, false, "f");
        __classPrivateFieldGet(this, _UserAgentClientHintsForm_instances, "m", _UserAgentClientHintsForm_render).call(this);
    }
    get disabled() {
        return __classPrivateFieldGet(this, _UserAgentClientHintsForm_isFormDisabled, "f");
    }
}
_UserAgentClientHintsForm_shadow = new WeakMap(), _UserAgentClientHintsForm_isFormOpened = new WeakMap(), _UserAgentClientHintsForm_isFormDisabled = new WeakMap(), _UserAgentClientHintsForm_metaData = new WeakMap(), _UserAgentClientHintsForm_showMobileCheckbox = new WeakMap(), _UserAgentClientHintsForm_showSubmitButton = new WeakMap(), _UserAgentClientHintsForm_useragentModifiedAriaMessage = new WeakMap(), _UserAgentClientHintsForm_handleTreeExpand = new WeakMap(), _UserAgentClientHintsForm_handleTreeClick = new WeakMap(), _UserAgentClientHintsForm_handleUseragentInputChange = new WeakMap(), _UserAgentClientHintsForm_handleFullVersionListInputChange = new WeakMap(), _UserAgentClientHintsForm_handleUseragentDelete = new WeakMap(), _UserAgentClientHintsForm_handleFullVersionListDelete = new WeakMap(), _UserAgentClientHintsForm_handleAddUseragentBrandClick = new WeakMap(), _UserAgentClientHintsForm_handleAddUseragentBrandKeyPress = new WeakMap(), _UserAgentClientHintsForm_handleAddFullVersionListBrandClick = new WeakMap(), _UserAgentClientHintsForm_handleAddFullVersionListBrandKeyPress = new WeakMap(), _UserAgentClientHintsForm_handleInputChange = new WeakMap(), _UserAgentClientHintsForm_handleLinkPress = new WeakMap(), _UserAgentClientHintsForm_handleSubmit = new WeakMap(), _UserAgentClientHintsForm_instances = new WeakSet(), _UserAgentClientHintsForm_renderInputWithLabel = function _UserAgentClientHintsForm_renderInputWithLabel(label, placeholder, value, stateKey) {
    const handleInputChange = (event) => {
        const value = event.target.value;
        __classPrivateFieldGet(this, _UserAgentClientHintsForm_handleInputChange, "f").call(this, stateKey, value);
    };
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
      <label class="full-row label input-field-label-container">
        ${label}
        <input
          class="input-field"
          type="text"
          @input=${handleInputChange}
          .value=${value}
          placeholder=${placeholder}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.textField().track({ change: true }).context(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toKebabCase(stateKey))}
          />
      </label>
    `;
}, _UserAgentClientHintsForm_renderPlatformSection = function _UserAgentClientHintsForm_renderPlatformSection() {
    const { platform, platformVersion } = __classPrivateFieldGet(this, _UserAgentClientHintsForm_metaData, "f");
    const handlePlatformNameChange = (event) => {
        const value = event.target.value;
        __classPrivateFieldGet(this, _UserAgentClientHintsForm_handleInputChange, "f").call(this, 'platform', value);
    };
    const handlePlatformVersionChange = (event) => {
        const value = event.target.value;
        __classPrivateFieldGet(this, _UserAgentClientHintsForm_handleInputChange, "f").call(this, 'platformVersion', value);
    };
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
      <span class="full-row label">${i18nString(UIStrings.platformLabel)}</span>
      <div class="full-row brand-row" aria-label=${i18nString(UIStrings.platformProperties)} role="group">
        <input
          class="input-field half-row"
          type="text"
          @input=${handlePlatformNameChange}
          .value=${platform}
          placeholder=${i18nString(UIStrings.platformPlaceholder)}
          aria-label=${i18nString(UIStrings.platformLabel)}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.textField('platform').track({
        change: true,
    })}
        />
        <input
          class="input-field half-row"
          type="text"
          @input=${handlePlatformVersionChange}
          .value=${platformVersion}
          placeholder=${i18nString(UIStrings.platformVersion)}
          aria-label=${i18nString(UIStrings.platformVersion)}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.textField('platform-version').track({
        change: true,
    })}
        />
      </div>
    `;
}, _UserAgentClientHintsForm_renderDeviceModelSection = function _UserAgentClientHintsForm_renderDeviceModelSection() {
    const { model, mobile } = __classPrivateFieldGet(this, _UserAgentClientHintsForm_metaData, "f");
    const handleDeviceModelChange = (event) => {
        const value = event.target.value;
        __classPrivateFieldGet(this, _UserAgentClientHintsForm_handleInputChange, "f").call(this, 'model', value);
    };
    const handleMobileChange = (event) => {
        const value = event.target.checked;
        __classPrivateFieldGet(this, _UserAgentClientHintsForm_handleInputChange, "f").call(this, 'mobile', value);
    };
    const mobileCheckboxInput = __classPrivateFieldGet(this, _UserAgentClientHintsForm_showMobileCheckbox, "f") ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
      <label class="mobile-checkbox-container">
        <input type="checkbox" @input=${handleMobileChange} .checked=${mobile}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.toggle('mobile').track({
        click: true,
    })}
        />
        ${i18nString(UIStrings.mobileCheckboxLabel)}
      </label>
    ` :
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html ``;
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
      <span class="full-row label">${i18nString(UIStrings.deviceModel)}</span>
      <div class="full-row brand-row" aria-label=${i18nString(UIStrings.deviceProperties)} role="group">
        <input
          class="input-field ${__classPrivateFieldGet(this, _UserAgentClientHintsForm_showMobileCheckbox, "f") ? 'device-model-input' : 'full-row'}"
          type="text"
          @input=${handleDeviceModelChange}
          .value=${model}
          placeholder=${i18nString(UIStrings.deviceModel)}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.textField('model').track({
        change: true,
    })}
        />
        ${mobileCheckboxInput}
      </div>
    `;
}, _UserAgentClientHintsForm_renderUseragent = function _UserAgentClientHintsForm_renderUseragent() {
    const { brands = [
        {
            brand: '',
            version: '',
        },
    ], } = __classPrivateFieldGet(this, _UserAgentClientHintsForm_metaData, "f");
    const brandElements = brands.map((brandRow, index) => {
        const { brand, version } = brandRow;
        const handleDeleteClick = () => {
            __classPrivateFieldGet(this, _UserAgentClientHintsForm_handleUseragentDelete, "f").call(this, index);
        };
        const handleKeyPress = (event) => {
            if (event.code === 'Space' || event.code === 'Enter') {
                event.preventDefault();
                handleDeleteClick();
            }
        };
        const handleBrandChange = (event) => {
            const value = event.target.value;
            __classPrivateFieldGet(this, _UserAgentClientHintsForm_handleUseragentInputChange, "f").call(this, value, index, 'brandName');
        };
        const handleVersionChange = (event) => {
            const value = event.target.value;
            __classPrivateFieldGet(this, _UserAgentClientHintsForm_handleUseragentInputChange, "f").call(this, value, index, 'brandVersion');
        };
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
        <div class="full-row brand-row" aria-label=${i18nString(UIStrings.brandProperties)} role="group">
          <input
            class="input-field ua-brand-name-input"
            type="text"
            @input=${handleBrandChange}
            .value=${brand}
            id="ua-brand-${index + 1}-input"
            placeholder=${i18nString(UIStrings.brandName)}
            aria-label=${i18nString(UIStrings.brandNameAriaLabel, {
            PH1: index + 1,
        })}
            jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.textField('brand-name').track({
            change: true,
        })}
          />
          <input
            class="input-field"
            type="text"
            @input=${handleVersionChange}
            .value=${version}
            placeholder=${i18nString(UIStrings.significantBrandVersionPlaceholder)}
            aria-label=${i18nString(UIStrings.brandVersionAriaLabel, {
            PH1: index + 1,
        })}
            jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.textField('brand-version').track({
            change: true,
        })}
          />
          <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName}
            .data=${{ color: 'var(--icon-default)', iconName: 'bin', width: '16px', height: '16px' }}
            title=${i18nString(UIStrings.brandUserAgentDelete)}
            class="delete-icon"
            tabindex="0"
            role="button"
            @click=${handleDeleteClick}
            @keypress=${handleKeyPress}
            aria-label=${i18nString(UIStrings.brandUserAgentDelete)}
          >
          </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName}>
        </div>
      `;
    });
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
      <span class="full-row label">${i18nString(UIStrings.useragent)}</span>
      ${brandElements}
      <div
        class="add-container full-row"
        role="button"
        tabindex="0"
        id="add-brand-button"
        aria-label=${i18nString(UIStrings.addBrand)}
        @click=${__classPrivateFieldGet(this, _UserAgentClientHintsForm_handleAddUseragentBrandClick, "f")}
        @keypress=${__classPrivateFieldGet(this, _UserAgentClientHintsForm_handleAddUseragentBrandKeyPress, "f")}
      >
        <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName}
          aria-hidden="true"
          .data=${{ color: 'var(--icon-default)', iconName: 'plus', width: '16px' }}
        >
        </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName}>
        ${i18nString(UIStrings.addBrand)}
      </div>
    `;
}, _UserAgentClientHintsForm_renderFullVersionList = function _UserAgentClientHintsForm_renderFullVersionList() {
    const { fullVersionList = [
        {
            brand: '',
            version: '',
        },
    ], } = __classPrivateFieldGet(this, _UserAgentClientHintsForm_metaData, "f");
    const elements = fullVersionList.map((brandRow, index) => {
        const { brand, version } = brandRow;
        const handleDeleteClick = () => {
            __classPrivateFieldGet(this, _UserAgentClientHintsForm_handleFullVersionListDelete, "f").call(this, index);
        };
        const handleKeyPress = (event) => {
            if (event.code === 'Space' || event.code === 'Enter') {
                event.preventDefault();
                handleDeleteClick();
            }
        };
        const handleBrandChange = (event) => {
            const value = event.target.value;
            __classPrivateFieldGet(this, _UserAgentClientHintsForm_handleFullVersionListInputChange, "f").call(this, value, index, 'brandName');
        };
        const handleVersionChange = (event) => {
            const value = event.target.value;
            __classPrivateFieldGet(this, _UserAgentClientHintsForm_handleFullVersionListInputChange, "f").call(this, value, index, 'brandVersion');
        };
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
        <div
          class="full-row brand-row"
          aria-label=${i18nString(UIStrings.brandProperties)}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.section('full-version')}
          role="group">
          <input
            class="input-field fvl-brand-name-input"
            type="text"
            @input=${handleBrandChange}
            .value=${brand}
            id="fvl-brand-${index + 1}-input"
            placeholder=${i18nString(UIStrings.brandName)}
            aria-label=${i18nString(UIStrings.brandNameAriaLabel, {
            PH1: index + 1,
        })}
            jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.textField('brand-name').track({
            change: true,
        })}
          />
          <input
            class="input-field"
            type="text"
            @input=${handleVersionChange}
            .value=${version}
            placeholder=${i18nString(UIStrings.brandVersionPlaceholder)}
            aria-label=${i18nString(UIStrings.brandVersionAriaLabel, {
            PH1: index + 1,
        })}
            jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.textField('brand-version').track({
            change: true,
        })}
          />
          <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName}
            .data=${{ color: 'var(--icon-default)', iconName: 'bin', width: '16px', height: '16px' }}
            title=${i18nString(UIStrings.brandFullVersionListDelete)}
            class="delete-icon"
            tabindex="0"
            role="button"
            @click=${handleDeleteClick}
            @keypress=${handleKeyPress}
            aria-label=${i18nString(UIStrings.brandFullVersionListDelete)}
          >
          </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName}>
        </div>
      `;
    });
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
      <span class="full-row label">${i18nString(UIStrings.fullVersionList)}</span>
      ${elements}
      <div
        class="add-container full-row"
        role="button"
        tabindex="0"
        id="add-fvl-brand-button"
        aria-label=${i18nString(UIStrings.addBrand)}
        @click=${__classPrivateFieldGet(this, _UserAgentClientHintsForm_handleAddFullVersionListBrandClick, "f")}
        @keypress=${__classPrivateFieldGet(this, _UserAgentClientHintsForm_handleAddFullVersionListBrandKeyPress, "f")}
      >
        <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName}
          aria-hidden="true"
          .data=${{ color: 'var(--icon-default)', iconName: 'plus', width: '16px' }}
        >
        </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName}>
        ${i18nString(UIStrings.addBrand)}
      </div>
    `;
}, _UserAgentClientHintsForm_render = function _UserAgentClientHintsForm_render() {
    const { fullVersion, architecture } = __classPrivateFieldGet(this, _UserAgentClientHintsForm_metaData, "f");
    const useragentSection = __classPrivateFieldGet(this, _UserAgentClientHintsForm_instances, "m", _UserAgentClientHintsForm_renderUseragent).call(this);
    const fullVersionListSection = __classPrivateFieldGet(this, _UserAgentClientHintsForm_instances, "m", _UserAgentClientHintsForm_renderFullVersionList).call(this);
    const fullBrowserInput = __classPrivateFieldGet(this, _UserAgentClientHintsForm_instances, "m", _UserAgentClientHintsForm_renderInputWithLabel).call(this, i18nString(UIStrings.fullBrowserVersion), i18nString(UIStrings.fullBrowserVersionPlaceholder), fullVersion || '', 'fullVersion');
    const platformSection = __classPrivateFieldGet(this, _UserAgentClientHintsForm_instances, "m", _UserAgentClientHintsForm_renderPlatformSection).call(this);
    const architectureInput = __classPrivateFieldGet(this, _UserAgentClientHintsForm_instances, "m", _UserAgentClientHintsForm_renderInputWithLabel).call(this, i18nString(UIStrings.architecture), i18nString(UIStrings.architecturePlaceholder), architecture, 'architecture');
    const deviceModelSection = __classPrivateFieldGet(this, _UserAgentClientHintsForm_instances, "m", _UserAgentClientHintsForm_renderDeviceModelSection).call(this);
    // clang-format off
    const submitButton = __classPrivateFieldGet(this, _UserAgentClientHintsForm_showSubmitButton, "f") ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
      <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}
        .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.OUTLINED}
        .type=${'submit'}
      >
        ${i18nString(UIStrings.update)}
      </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}>
    ` : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.nothing;
    // clang-format on
    // clang-format off
    const output = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
      <section class="root">
        <div
          class="tree-title"
          role="button"
          @click=${__classPrivateFieldGet(this, _UserAgentClientHintsForm_handleTreeClick, "f")}
          tabindex="0"
          @keydown=${__classPrivateFieldGet(this, _UserAgentClientHintsForm_handleTreeExpand, "f")}
          aria-expanded=${__classPrivateFieldGet(this, _UserAgentClientHintsForm_isFormOpened, "f")}
          aria-controls="form-container"
          @disabled=${__classPrivateFieldGet(this, _UserAgentClientHintsForm_isFormDisabled, "f")}
          aria-disabled=${__classPrivateFieldGet(this, _UserAgentClientHintsForm_isFormDisabled, "f")}
          aria-label=${i18nString(UIStrings.title)}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.toggleSubpane().track({ click: true })}
        >
          <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName}
            class=${__classPrivateFieldGet(this, _UserAgentClientHintsForm_isFormOpened, "f") ? 'rotate-icon' : ''}
            .data=${{
        color: 'var(--icon-default)',
        iconName: 'triangle-right',
        width: '14px',
    }}
          ></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName}>
          ${i18nString(UIStrings.title)}
          <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName}
            .data=${{
        color: 'var(--icon-default)',
        iconName: 'info',
        width: '16px',
    }}
            title=${i18nString(UIStrings.userAgentClientHintsInfo)}
            class='info-icon',
          ></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName}>
          <x-link
           tabindex="0"
           href="https://web.dev/user-agent-client-hints/"
           target="_blank"
           class="link"
           @keypress=${__classPrivateFieldGet(this, _UserAgentClientHintsForm_handleLinkPress, "f")}
           aria-label=${i18nString(UIStrings.userAgentClientHintsInfo)}
           jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.link('learn-more').track({ click: true })}
          >
            ${i18nString(UIStrings.learnMore)}
          </x-link>
        </div>
        <form
          id="form-container"
          class="form-container ${__classPrivateFieldGet(this, _UserAgentClientHintsForm_isFormOpened, "f") ? '' : 'hide-container'}"
          @submit=${__classPrivateFieldGet(this, _UserAgentClientHintsForm_handleSubmit, "f")}
        >
          ${useragentSection}
          ${fullVersionListSection}
          ${fullBrowserInput}
          ${platformSection}
          ${architectureInput}
          ${deviceModelSection}
          ${submitButton}
        </form>
        <div aria-live="polite" aria-label=${__classPrivateFieldGet(this, _UserAgentClientHintsForm_useragentModifiedAriaMessage, "f")}></div>
      </section>
    `;
    // clang-format on
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.render(output, __classPrivateFieldGet(this, _UserAgentClientHintsForm_shadow, "f"), { host: this });
};
Object.defineProperty(UserAgentClientHintsForm, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.literal `devtools-user-agent-client-hints-form`
});
customElements.define('devtools-user-agent-client-hints-form', UserAgentClientHintsForm);


/***/ }),

/***/ "./src/panels/settings/emulation/utils/UserAgentMetadata.ts":
/*!******************************************************************!*\
  !*** ./src/panels/settings/emulation/utils/UserAgentMetadata.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseBrandsList: () => (/* binding */ parseBrandsList),
/* harmony export */   serializeBrandsList: () => (/* binding */ serializeBrandsList),
/* harmony export */   validateAsStructuredHeadersString: () => (/* binding */ validateAsStructuredHeadersString)
/* harmony export */ });
/* harmony import */ var _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StructuredHeaders.js */ "./src/panels/settings/emulation/utils/StructuredHeaders.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Helper functions for working with UserAgentMetadata protocol objects, in
// particular their plain string representation.

/* Returned string is for error, either parseErrorString or structErrorString.
 */
function parseBrandsList(stringForm, parseErrorString, structErrorString) {
    const brandList = [];
    const parseResult = (0,_StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.parseList)(stringForm);
    if (parseResult.kind === _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.ResultKind.ERROR) {
        return parseErrorString;
    }
    for (const listItem of parseResult.items) {
        if (listItem.kind !== _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.ResultKind.ITEM) {
            return structErrorString;
        }
        const bareItem = listItem.value;
        if (bareItem.kind !== _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.ResultKind.STRING) {
            return structErrorString;
        }
        if (listItem.parameters.items.length !== 1) {
            return structErrorString;
        }
        const param = listItem.parameters.items[0];
        if (param.name.value !== 'v') {
            return structErrorString;
        }
        const paramValue = param.value;
        if (paramValue.kind !== _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.ResultKind.STRING) {
            return structErrorString;
        }
        brandList.push({ brand: bareItem.value, version: paramValue.value });
    }
    return brandList;
}
function serializeBrandsList(brands) {
    const shList = { kind: _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.ResultKind.LIST, items: [] };
    const vParamName = { kind: _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.ResultKind.PARAM_NAME, value: 'v' };
    for (const brand of brands) {
        const nameString = { kind: _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.ResultKind.STRING, value: brand.brand };
        const verString = { kind: _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.ResultKind.STRING, value: brand.version };
        const verParams = {
            kind: _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.ResultKind.PARAMETERS,
            items: [{ kind: _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.ResultKind.PARAMETER, name: vParamName, value: verString }],
        };
        const shItem = { kind: _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.ResultKind.ITEM, value: nameString, parameters: verParams };
        shList.items.push(shItem);
    }
    const serializeResult = (0,_StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.serializeList)(shList);
    return serializeResult.kind === _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.ResultKind.ERROR ? '' : serializeResult.value;
}
/*
 * This checks whether the value provided is representable as a structured headers string,
 * which is the validity requirement for the fields in UserAgentMetadata that are not the brand list
 * or mobile bool.
 *
 * errorMessage will be passed through on failure.
 */
function validateAsStructuredHeadersString(value, errorString) {
    const parsedResult = (0,_StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.serializeItem)({
        kind: _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.ResultKind.ITEM,
        value: { kind: _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.ResultKind.STRING, value: value },
        parameters: { kind: _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.ResultKind.PARAMETERS, items: [] },
    });
    if (parsedResult.kind === _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.ResultKind.ERROR) {
        return { valid: false, errorMessage: errorString };
    }
    return { valid: true, errorMessage: undefined };
}


/***/ }),

/***/ "./src/panels/settings/emulation/utils/utils.ts":
/*!******************************************************!*\
  !*** ./src/panels/settings/emulation/utils/utils.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StructuredHeaders: () => (/* reexport module object */ _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   UserAgentMetadata: () => (/* reexport module object */ _UserAgentMetadata_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StructuredHeaders.js */ "./src/panels/settings/emulation/utils/StructuredHeaders.ts");
/* harmony import */ var _UserAgentMetadata_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserAgentMetadata.js */ "./src/panels/settings/emulation/utils/UserAgentMetadata.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





/***/ })

}]);