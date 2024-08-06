"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_settings_emulation_components_UserAgentClientHintsForm_js"],{

/***/ "./panels/settings/emulation/components/UserAgentClientHintsForm.js":
/*!**************************************************************************!*\
  !*** ./panels/settings/emulation/components/UserAgentClientHintsForm.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientHintsChangeEvent: () => (/* binding */ ClientHintsChangeEvent),
/* harmony export */   ClientHintsSubmitEvent: () => (/* binding */ ClientHintsSubmitEvent),
/* harmony export */   UserAgentClientHintsForm: () => (/* binding */ UserAgentClientHintsForm)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ui/components/input/input.js */ "./ui/components/input/input.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/utils.js */ "./panels/settings/emulation/utils/utils.js");
/* harmony import */ var _userAgentClientHintsForm_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./userAgentClientHintsForm.css.js */ "./panels/settings/emulation/components/userAgentClientHintsForm.css.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









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
    static eventName = 'clienthintschange';
    constructor() {
        super(ClientHintsChangeEvent.eventName);
    }
}
class ClientHintsSubmitEvent extends Event {
    static eventName = 'clienthintssubmit';
    detail;
    constructor(value) {
        super(ClientHintsSubmitEvent.eventName);
        this.detail = { value };
    }
}
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
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.literal `devtools-user-agent-client-hints-form`;
    #shadow = this.attachShadow({ mode: 'open' });
    #isFormOpened = false;
    #isFormDisabled = false;
    #metaData = DEFAULT_METADATA;
    #showMobileCheckbox = false;
    #showSubmitButton = false;
    #useragentModifiedAriaMessage = '';
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_4__.checkboxStyles, _userAgentClientHintsForm_css_js__WEBPACK_IMPORTED_MODULE_8__["default"]];
    }
    set value(data) {
        const { metaData = DEFAULT_METADATA, showMobileCheckbox = false, showSubmitButton = false } = data;
        this.#metaData = {
            ...this.#metaData,
            ...metaData,
        };
        this.#showMobileCheckbox = showMobileCheckbox;
        this.#showSubmitButton = showSubmitButton;
        this.#render();
    }
    get value() {
        return {
            metaData: this.#metaData,
        };
    }
    set disabled(disableForm) {
        this.#isFormDisabled = disableForm;
        this.#isFormOpened = false;
        this.#render();
    }
    get disabled() {
        return this.#isFormDisabled;
    }
    #handleTreeExpand = (event) => {
        if (event.code === 'Space' || event.code === 'Enter' || event.code === 'ArrowLeft' || event.code === 'ArrowRight') {
            event.stopPropagation();
            this.#handleTreeClick(event.code);
        }
    };
    #handleTreeClick = (key) => {
        if (this.#isFormDisabled) {
            return;
        }
        if ((key === 'ArrowLeft' && !this.#isFormOpened) || (key === 'ArrowRight' && this.#isFormOpened)) {
            return;
        }
        this.#isFormOpened = !this.#isFormOpened;
        this.#render();
    };
    #handleUseragentInputChange = (value, index, brandInputType) => {
        const updatedUseragent = this.#metaData.brands?.map((browserBrand, brandIndex) => {
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
        this.#metaData = {
            ...this.#metaData,
            brands: updatedUseragent,
        };
        this.dispatchEvent(new ClientHintsChangeEvent());
        this.#render();
    };
    #handleFullVersionListInputChange = (value, index, brandInputType) => {
        const fullVersionList = this.#metaData.fullVersionList?.map((browserBrand, brandIndex) => {
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
        this.#metaData = {
            ...this.#metaData,
            fullVersionList,
        };
        this.dispatchEvent(new ClientHintsChangeEvent());
        this.#render();
    };
    #handleUseragentDelete = (index) => {
        const { brands = [] } = this.#metaData;
        brands.splice(index, 1);
        this.#metaData = {
            ...this.#metaData,
            brands,
        };
        this.dispatchEvent(new ClientHintsChangeEvent());
        this.#useragentModifiedAriaMessage = i18nString(UIStrings.deletedBrand);
        this.#render();
        // after deleting a brand row, focus on next Brand input if available,
        // otherwise focus on the "Add Brand" button
        let nextFocusElement = this.shadowRoot?.getElementById(`ua-brand-${index + 1}-input`);
        if (!nextFocusElement) {
            nextFocusElement = this.shadowRoot?.getElementById('add-brand-button');
        }
        nextFocusElement?.focus();
    };
    #handleFullVersionListDelete = (index) => {
        const { fullVersionList = [] } = this.#metaData;
        fullVersionList.splice(index, 1);
        this.#metaData = {
            ...this.#metaData,
            fullVersionList,
        };
        this.dispatchEvent(new ClientHintsChangeEvent());
        this.#useragentModifiedAriaMessage = i18nString(UIStrings.deletedBrand);
        this.#render();
        // after deleting a brand row, focus on next Brand input if available,
        // otherwise focus on the "Add Brand" button
        let nextFocusElement = this.shadowRoot?.getElementById(`fvl-brand-${index + 1}-input`);
        if (!nextFocusElement) {
            nextFocusElement = this.shadowRoot?.getElementById('add-fvl-brand-button');
        }
        nextFocusElement?.focus();
    };
    #handleAddUseragentBrandClick = () => {
        const { brands } = this.#metaData;
        this.#metaData = {
            ...this.#metaData,
            brands: [
                ...(Array.isArray(brands) ? brands : []),
                {
                    brand: '',
                    version: '',
                },
            ],
        };
        this.dispatchEvent(new ClientHintsChangeEvent());
        this.#useragentModifiedAriaMessage = i18nString(UIStrings.addedBrand);
        this.#render();
        const brandInputElements = this.shadowRoot?.querySelectorAll('.ua-brand-name-input');
        if (brandInputElements) {
            const lastBrandInputElement = Array.from(brandInputElements).pop();
            if (lastBrandInputElement) {
                lastBrandInputElement.focus();
            }
        }
    };
    #handleAddUseragentBrandKeyPress = (event) => {
        if (event.code === 'Space' || event.code === 'Enter') {
            event.preventDefault();
            this.#handleAddUseragentBrandClick();
        }
    };
    #handleAddFullVersionListBrandClick = () => {
        const { fullVersionList } = this.#metaData;
        this.#metaData = {
            ...this.#metaData,
            fullVersionList: [
                ...(Array.isArray(fullVersionList) ? fullVersionList : []),
                {
                    brand: '',
                    version: '',
                },
            ],
        };
        this.dispatchEvent(new ClientHintsChangeEvent());
        this.#useragentModifiedAriaMessage = i18nString(UIStrings.addedBrand);
        this.#render();
        const brandInputElements = this.shadowRoot?.querySelectorAll('.fvl-brand-name-input');
        if (brandInputElements) {
            const lastBrandInputElement = Array.from(brandInputElements).pop();
            if (lastBrandInputElement) {
                lastBrandInputElement.focus();
            }
        }
    };
    #handleAddFullVersionListBrandKeyPress = (event) => {
        if (event.code === 'Space' || event.code === 'Enter') {
            event.preventDefault();
            this.#handleAddFullVersionListBrandClick();
        }
    };
    #handleInputChange = (stateKey, value) => {
        if (stateKey in this.#metaData) {
            this.#metaData = {
                ...this.#metaData,
                [stateKey]: value,
            };
            this.#render();
        }
        this.dispatchEvent(new ClientHintsChangeEvent());
    };
    #handleLinkPress = (event) => {
        if (event.code === 'Space' || event.code === 'Enter') {
            event.preventDefault();
            event.target.click();
        }
    };
    #handleSubmit = (event) => {
        event.preventDefault();
        if (this.#showSubmitButton) {
            this.dispatchEvent(new ClientHintsSubmitEvent(this.#metaData));
            this.#render();
        }
    };
    #renderInputWithLabel(label, placeholder, value, stateKey) {
        const handleInputChange = (event) => {
            const value = event.target.value;
            this.#handleInputChange(stateKey, value);
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
    }
    #renderPlatformSection() {
        const { platform, platformVersion } = this.#metaData;
        const handlePlatformNameChange = (event) => {
            const value = event.target.value;
            this.#handleInputChange('platform', value);
        };
        const handlePlatformVersionChange = (event) => {
            const value = event.target.value;
            this.#handleInputChange('platformVersion', value);
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
    }
    #renderDeviceModelSection() {
        const { model, mobile } = this.#metaData;
        const handleDeviceModelChange = (event) => {
            const value = event.target.value;
            this.#handleInputChange('model', value);
        };
        const handleMobileChange = (event) => {
            const value = event.target.checked;
            this.#handleInputChange('mobile', value);
        };
        const mobileCheckboxInput = this.#showMobileCheckbox ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
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
          class="input-field ${this.#showMobileCheckbox ? 'device-model-input' : 'full-row'}"
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
    }
    #renderUseragent() {
        const { brands = [
            {
                brand: '',
                version: '',
            },
        ], } = this.#metaData;
        const brandElements = brands.map((brandRow, index) => {
            const { brand, version } = brandRow;
            const handleDeleteClick = () => {
                this.#handleUseragentDelete(index);
            };
            const handleKeyPress = (event) => {
                if (event.code === 'Space' || event.code === 'Enter') {
                    event.preventDefault();
                    handleDeleteClick();
                }
            };
            const handleBrandChange = (event) => {
                const value = event.target.value;
                this.#handleUseragentInputChange(value, index, 'brandName');
            };
            const handleVersionChange = (event) => {
                const value = event.target.value;
                this.#handleUseragentInputChange(value, index, 'brandVersion');
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
        @click=${this.#handleAddUseragentBrandClick}
        @keypress=${this.#handleAddUseragentBrandKeyPress}
      >
        <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName}
          aria-hidden="true"
          .data=${{ color: 'var(--icon-default)', iconName: 'plus', width: '16px' }}
        >
        </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName}>
        ${i18nString(UIStrings.addBrand)}
      </div>
    `;
    }
    #renderFullVersionList() {
        const { fullVersionList = [
            {
                brand: '',
                version: '',
            },
        ], } = this.#metaData;
        const elements = fullVersionList.map((brandRow, index) => {
            const { brand, version } = brandRow;
            const handleDeleteClick = () => {
                this.#handleFullVersionListDelete(index);
            };
            const handleKeyPress = (event) => {
                if (event.code === 'Space' || event.code === 'Enter') {
                    event.preventDefault();
                    handleDeleteClick();
                }
            };
            const handleBrandChange = (event) => {
                const value = event.target.value;
                this.#handleFullVersionListInputChange(value, index, 'brandName');
            };
            const handleVersionChange = (event) => {
                const value = event.target.value;
                this.#handleFullVersionListInputChange(value, index, 'brandVersion');
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
        @click=${this.#handleAddFullVersionListBrandClick}
        @keypress=${this.#handleAddFullVersionListBrandKeyPress}
      >
        <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName}
          aria-hidden="true"
          .data=${{ color: 'var(--icon-default)', iconName: 'plus', width: '16px' }}
        >
        </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName}>
        ${i18nString(UIStrings.addBrand)}
      </div>
    `;
    }
    #render() {
        const { fullVersion, architecture } = this.#metaData;
        const useragentSection = this.#renderUseragent();
        const fullVersionListSection = this.#renderFullVersionList();
        const fullBrowserInput = this.#renderInputWithLabel(i18nString(UIStrings.fullBrowserVersion), i18nString(UIStrings.fullBrowserVersionPlaceholder), fullVersion || '', 'fullVersion');
        const platformSection = this.#renderPlatformSection();
        const architectureInput = this.#renderInputWithLabel(i18nString(UIStrings.architecture), i18nString(UIStrings.architecturePlaceholder), architecture, 'architecture');
        const deviceModelSection = this.#renderDeviceModelSection();
        // clang-format off
        const submitButton = this.#showSubmitButton ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
      <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}
        .variant=${"outlined" /* Buttons.Button.Variant.OUTLINED */}
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
          @click=${this.#handleTreeClick}
          tabindex="0"
          @keydown=${this.#handleTreeExpand}
          aria-expanded=${this.#isFormOpened}
          aria-controls="form-container"
          @disabled=${this.#isFormDisabled}
          aria-disabled=${this.#isFormDisabled}
          aria-label=${i18nString(UIStrings.title)}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.toggleSubpane().track({ click: true })}
        >
          <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName}
            class=${this.#isFormOpened ? 'rotate-icon' : ''}
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
           @keypress=${this.#handleLinkPress}
           aria-label=${i18nString(UIStrings.userAgentClientHintsInfo)}
           jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.link('learn-more').track({ click: true })}
          >
            ${i18nString(UIStrings.learnMore)}
          </x-link>
        </div>
        <form
          id="form-container"
          class="form-container ${this.#isFormOpened ? '' : 'hide-container'}"
          @submit=${this.#handleSubmit}
        >
          ${useragentSection}
          ${fullVersionListSection}
          ${fullBrowserInput}
          ${platformSection}
          ${architectureInput}
          ${deviceModelSection}
          ${submitButton}
        </form>
        <div aria-live="polite" aria-label=${this.#useragentModifiedAriaMessage}></div>
      </section>
    `;
        // clang-format on
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.render(output, this.#shadow, { host: this });
    }
    validate = () => {
        for (const [metaDataKey, metaDataValue] of Object.entries(this.#metaData)) {
            if (metaDataKey === 'brands' || metaDataKey === 'fullVersionList') {
                // for sturctured fields, check each individual brand/version
                const isBrandValid = this.#metaData.brands?.every(({ brand, version }) => {
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
    };
}
customElements.define('devtools-user-agent-client-hints-form', UserAgentClientHintsForm);
//# sourceMappingURL=UserAgentClientHintsForm.js.map

/***/ }),

/***/ "./panels/settings/emulation/components/userAgentClientHintsForm.css.js":
/*!******************************************************************************!*\
  !*** ./panels/settings/emulation/components/userAgentClientHintsForm.css.js ***!
  \******************************************************************************/
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
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.root {
  color: var(--sys-color-on-surface);
  width: 100%;
}

.tree-title {
  font-weight: 700;
  display: flex;
  align-items: center;
}

.rotate-icon {
  transform: rotate(90deg);
}

.form-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  align-items: center;
  column-gap: 10px;
  row-gap: 8px;
  padding: 0 10px;
}

.full-row {
  grid-column: 1 / 5;
}

.half-row {
  grid-column: span 2;
}

.mobile-checkbox-container {
  display: flex;
}

.device-model-input {
  grid-column: 1 / 4;
}

.input-field {
  color: var(--sys-color-on-surface);
  padding: 3px 6px;
  border-radius: 2px;
  border: 1px solid var(--sys-color-neutral-outline);
  background-color: var(--sys-color-cdt-base-container);
  font-size: inherit;
  height: 18px;
}

.input-field:focus {
  border: 1px solid var(--sys-color-state-focus-ring);
  outline-width: 0;
}

.add-container {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
}

.add-icon {
  margin-right: 5px;
}

.brand-row {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
}

.brand-row > input {
  width: 100%;
}

.info-icon {
  margin-left: 5px;
  margin-right: 1px;
}

.link,
.devtools-link {
  color: var(--sys-color-primary);
  text-decoration: underline;
  cursor: pointer;
  outline-offset: 2px;
  font-weight: 400;
}

devtools-icon + .link {
  margin-inline-start: 2px;
}

.hide-container {
  display: none;
}

.input-field-label-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

@media (forced-colors: active) {
  .input-field {
    border: 1px solid;
  }

  .tree-title[aria-disabled="true"] {
    color: GrayText;
  }
}

/*# sourceURL=userAgentClientHintsForm.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/settings/emulation/utils/UserAgentMetadata.js":
/*!**************************************************************!*\
  !*** ./panels/settings/emulation/utils/UserAgentMetadata.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseBrandsList: () => (/* binding */ parseBrandsList),
/* harmony export */   serializeBrandsList: () => (/* binding */ serializeBrandsList),
/* harmony export */   validateAsStructuredHeadersString: () => (/* binding */ validateAsStructuredHeadersString)
/* harmony export */ });
/* harmony import */ var _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StructuredHeaders.js */ "./panels/settings/emulation/utils/StructuredHeaders.js");
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
    if (parseResult.kind === 0 /* ResultKind.ERROR */) {
        return parseErrorString;
    }
    for (const listItem of parseResult.items) {
        if (listItem.kind !== 4 /* ResultKind.ITEM */) {
            return structErrorString;
        }
        const bareItem = listItem.value;
        if (bareItem.kind !== 7 /* ResultKind.STRING */) {
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
        if (paramValue.kind !== 7 /* ResultKind.STRING */) {
            return structErrorString;
        }
        brandList.push({ brand: bareItem.value, version: paramValue.value });
    }
    return brandList;
}
function serializeBrandsList(brands) {
    const shList = { kind: 11 /* ResultKind.LIST */, items: [] };
    const vParamName = { kind: 1 /* ResultKind.PARAM_NAME */, value: 'v' };
    for (const brand of brands) {
        const nameString = { kind: 7 /* ResultKind.STRING */, value: brand.brand };
        const verString = { kind: 7 /* ResultKind.STRING */, value: brand.version };
        const verParams = {
            kind: 3 /* ResultKind.PARAMETERS */,
            items: [{ kind: 2 /* ResultKind.PARAMETER */, name: vParamName, value: verString }],
        };
        const shItem = { kind: 4 /* ResultKind.ITEM */, value: nameString, parameters: verParams };
        shList.items.push(shItem);
    }
    const serializeResult = (0,_StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.serializeList)(shList);
    return serializeResult.kind === 0 /* ResultKind.ERROR */ ? '' : serializeResult.value;
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
        kind: 4 /* ResultKind.ITEM */,
        value: { kind: 7 /* ResultKind.STRING */, value: value },
        parameters: { kind: 3 /* ResultKind.PARAMETERS */, items: [] },
    });
    if (parsedResult.kind === 0 /* ResultKind.ERROR */) {
        return { valid: false, errorMessage: errorString };
    }
    return { valid: true, errorMessage: undefined };
}
//# sourceMappingURL=UserAgentMetadata.js.map

/***/ }),

/***/ "./panels/settings/emulation/utils/utils.js":
/*!**************************************************!*\
  !*** ./panels/settings/emulation/utils/utils.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StructuredHeaders: () => (/* reexport module object */ _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   UserAgentMetadata: () => (/* reexport module object */ _UserAgentMetadata_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StructuredHeaders.js */ "./panels/settings/emulation/utils/StructuredHeaders.js");
/* harmony import */ var _UserAgentMetadata_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserAgentMetadata.js */ "./panels/settings/emulation/utils/UserAgentMetadata.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



//# sourceMappingURL=utils.js.map

/***/ })

}]);