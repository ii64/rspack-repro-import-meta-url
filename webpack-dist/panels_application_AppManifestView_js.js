"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_AppManifestView_js"],{

/***/ "./panels/application/AppManifestView.js":
/*!***********************************************!*\
  !*** ./panels/application/AppManifestView.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppManifestView: () => (/* binding */ AppManifestView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/components/inline_editor/inline_editor.js */ "./ui/legacy/components/inline_editor/inline_editor.js");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _appManifestView_css_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./appManifestView.css.js */ "./panels/application/appManifestView.css.js");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/components.js */ "./panels/application/components/components.js");
// Copyright (c) 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.












const UIStrings = {
    /**
     *@description Text in App Manifest View of the Application panel
     */
    errorsAndWarnings: 'Errors and warnings',
    /**
     *@description Text in App Manifest View of the Application panel
     */
    installability: 'Installability',
    /**
     *@description Text in App Manifest View of the Application panel
     */
    identity: 'Identity',
    /**
     *@description Text in App Manifest View of the Application panel
     */
    presentation: 'Presentation',
    /**
     *@description Text in App Manifest View of the Application panel
     */
    protocolHandlers: 'Protocol Handlers',
    /**
     *@description Text in App Manifest View of the Application panel
     */
    icons: 'Icons',
    /**
     *@description Text in App Manifest View of the Application panel
     */
    windowControlsOverlay: 'Window Controls Overlay',
    /**
     *@description Label in the App Manifest View for the "name" property of web app or shortcut item
     */
    name: 'Name',
    /**
     *@description Label in the App Manifest View for the "short_name" property of web app or shortcut item
     */
    shortName: 'Short name',
    /**
     *@description Label in the App Manifest View for the "url" property of shortcut item
     */
    url: 'URL',
    /**
     *@description Label in the App Manifest View for the Computed App Id
     */
    computedAppId: 'Computed App ID',
    /**
     *@description Popup-text explaining what the App Id is used for.
     */
    appIdExplainer: 'This is used by the browser to know whether the manifest should be updating an existing application, or whether it refers to a new web app that can be installed.',
    /**
     *@description Text which is a hyperlink to more documentation
     */
    learnMore: 'Learn more',
    /**
     *@description Explanation why it is advisable to specify an 'id' field in the manifest.
     *@example {Note:} PH1
     *@example {id} PH2
     *@example {start_url} PH3
     *@example {id} PH4
     *@example {/index.html} PH5
     *@example {(button for copying suggested value into clipboard)} PH6
     */
    appIdNote: '{PH1} {PH2} is not specified in the manifest, {PH3} is used instead. To specify an App ID that matches the current identity, set the {PH4} field to {PH5} {PH6}.',
    /**
     *@description Label for reminding the user of something important. Is shown in bold and followed by the actual note to show the user.
     */
    note: 'Note:',
    /**
     *@description Tooltip text that appears when hovering over a button which copies the previous text to the clipboard.
     */
    copyToClipboard: 'Copy suggested ID to clipboard',
    /**
     *@description Screen reader announcement string when the user clicks the copy to clipboard button.
     *@example {/index.html} PH1
     */
    copiedToClipboard: 'Copied suggested ID {PH1} to clipboard',
    /**
     *@description Label in the App Manifest View for the "description" property of web app or shortcut item
     */
    description: 'Description',
    /**
     *@description Text in App Manifest View of the Application panel
     */
    startUrl: 'Start URL',
    /**
     *@description Text in App Manifest View of the Application panel
     */
    themeColor: 'Theme color',
    /**
     *@description Text in App Manifest View of the Application panel
     */
    backgroundColor: 'Background color',
    /**
     *@description Text for the orientation of something
     */
    orientation: 'Orientation',
    /**
     *@description Title of the display attribute in App Manifest View of the Application panel
     * The display attribute defines the preferred display mode for the app such fullscreen or
     * standalone.
     * For more details see https://www.w3.org/TR/appmanifest/#display-member.
     */
    display: 'Display',
    /**
     *@description Title of the new_note_url attribute in the Application panel
     */
    newNoteUrl: 'New note URL',
    /**
     *@description Text in App Manifest View of the Application panel
     */
    descriptionMayBeTruncated: 'Description may be truncated.',
    /**
     *@description Warning text about too many shortcuts
     */
    shortcutsMayBeNotAvailable: 'The maximum number of shortcuts is platform dependent. Some shortcuts may be not available.',
    /**
     *@description Text in App Manifest View of the Application panel
     */
    showOnlyTheMinimumSafeAreaFor: 'Show only the minimum safe area for maskable icons',
    /**
     *@description Link text for more information on maskable icons in App Manifest view of the Application panel
     */
    documentationOnMaskableIcons: 'documentation on maskable icons',
    /**
     *@description Text wrapping a link pointing to more information on maskable icons in App Manifest view of the Application panel
     *@example {https://web.dev/maskable-icon/} PH1
     */
    needHelpReadOurS: 'Need help? Read the {PH1}.',
    /**
     *@description Text in App Manifest View of the Application panel
     *@example {1} PH1
     */
    shortcutS: 'Shortcut #{PH1}',
    /**
     *@description Text in App Manifest View of the Application panel
     *@example {1} PH1
     */
    shortcutSShouldIncludeAXPixel: 'Shortcut #{PH1} should include a 96×96 pixel icon',
    /**
     *@description Text in App Manifest View of the Application panel
     *@example {1} PH1
     */
    screenshotS: 'Screenshot #{PH1}',
    /**
     *@description Manifest installability error in the Application panel
     */
    pageIsNotLoadedInTheMainFrame: 'Page is not loaded in the main frame',
    /**
     *@description Manifest installability error in the Application panel
     */
    pageIsNotServedFromASecureOrigin: 'Page is not served from a secure origin',
    /**
     *@description Manifest installability error in the Application panel
     */
    pageHasNoManifestLinkUrl: 'Page has no manifest <link> `URL`',
    /**
     *@description Manifest installability error in the Application panel
     */
    manifestCouldNotBeFetchedIsEmpty: 'Manifest could not be fetched, is empty, or could not be parsed',
    /**
     *@description Manifest installability error in the Application panel
     */
    manifestStartUrlIsNotValid: 'Manifest \'`start_url`\' is not valid',
    /**
     *@description Manifest installability error in the Application panel
     */
    manifestDoesNotContainANameOr: 'Manifest does not contain a \'`name`\' or \'`short_name`\' field',
    /**
     *@description Manifest installability error in the Application panel
     */
    manifestDisplayPropertyMustBeOne: 'Manifest \'`display`\' property must be one of \'`standalone`\', \'`fullscreen`\', or \'`minimal-ui`\'',
    /**
     *@description Manifest installability error in the Application panel
     *@example {100} PH1
     */
    manifestDoesNotContainASuitable: 'Manifest does not contain a suitable icon—PNG, SVG, or WebP format of at least {PH1}px is required, the \'`sizes`\' attribute must be set, and the \'`purpose`\' attribute, if set, must include \'`any`\'.',
    /**
     *@description Manifest installability error in the Application panel
     */
    avoidPurposeAnyAndMaskable: 'Declaring an icon with \'`purpose`\' of \'`any maskable`\' is discouraged. It is likely to look incorrect on some platforms due to too much or too little padding.',
    /**
     *@description Manifest installability error in the Application panel
     *@example {100} PH1
     */
    noSuppliedIconIsAtLeastSpxSquare: 'No supplied icon is at least {PH1} pixels square in `PNG`, `SVG`, or `WebP` format, with the purpose attribute unset or set to \'`any`\'.',
    /**
     *@description Manifest installability error in the Application panel
     */
    couldNotDownloadARequiredIcon: 'Could not download a required icon from the manifest',
    /**
     *@description Manifest installability error in the Application panel
     */
    downloadedIconWasEmptyOr: 'Downloaded icon was empty or corrupted',
    /**
     *@description Manifest installability error in the Application panel
     */
    theSpecifiedApplicationPlatform: 'The specified application platform is not supported on Android',
    /**
     *@description Manifest installability error in the Application panel
     */
    noPlayStoreIdProvided: 'No Play store ID provided',
    /**
     *@description Manifest installability error in the Application panel
     */
    thePlayStoreAppUrlAndPlayStoreId: 'The Play Store app URL and Play Store ID do not match',
    /**
     *@description Manifest installability error in the Application panel
     */
    theAppIsAlreadyInstalled: 'The app is already installed',
    /**
     *@description Manifest installability error in the Application panel
     */
    aUrlInTheManifestContainsA: 'A URL in the manifest contains a username, password, or port',
    /**
     *@description Manifest installability error in the Application panel
     */
    pageIsLoadedInAnIncognitoWindow: 'Page is loaded in an incognito window',
    /**
     *@description Manifest installability error in the Application panel
     */
    pageDoesNotWorkOffline: 'Page does not work offline',
    /**
     *@description Manifest installability error in the Application panel
     */
    couldNotCheckServiceWorker: 'Could not check `service worker` without a \'`start_url`\' field in the manifest',
    /**
     *@description Manifest installability error in the Application panel
     */
    manifestSpecifies: 'Manifest specifies \'`prefer_related_applications`: true\'',
    /**
     *@description Manifest installability error in the Application panel
     */
    preferrelatedapplicationsIsOnly: '\'`prefer_related_applications`\' is only supported on `Chrome` Beta and Stable channels on `Android`.',
    /**
     *@description Manifest installability error in the Application panel
     */
    manifestContainsDisplayoverride: 'Manifest contains \'`display_override`\' field, and the first supported display mode must be one of \'`standalone`\', \'`fullscreen`\', or \'`minimal-ui`\'',
    /**
     *@description Warning message for offline capability check
     *@example {https://developer.chrome.com/blog/improved-pwa-offline-detection} PH1
     */
    pageDoesNotWorkOfflineThePage: 'Page does not work offline. Starting in Chrome 93, the installability criteria are changing, and this site will not be installable. See {PH1} for more information.',
    /**
     *@description Text to indicate the source of an image
     *@example {example.com} PH1
     */
    imageFromS: 'Image from {PH1}',
    /**
     *@description Text for one or a group of screenshots
     */
    screenshot: 'Screenshot',
    /**
     *@description Label in the App Manifest View for the "form_factor" property of screenshot
     */
    formFactor: 'Form factor',
    /**
     *@description Label in the App Manifest View for the "label" property of screenshot
     */
    label: 'Label',
    /**
     *@description Label in the App Manifest View for the "platform" property of screenshot
     */
    platform: 'Platform',
    /**
     *@description Text in App Manifest View of the Application panel
     */
    icon: 'Icon',
    /**
     * @description This is a warning message telling the user about a problem where the src attribute
     * of an image has not be entered/provided correctly. 'src' is part of the DOM API and should not
     * be translated.
     * @example {ImageName} PH1
     */
    sSrcIsNotSet: '{PH1} \'`src`\' is not set',
    /**
     *@description Warning message for image resources from the manifest
     *@example {Screenshot} PH1
     *@example {https://example.com/image.png} PH2
     */
    sUrlSFailedToParse: '{PH1} URL \'\'{PH2}\'\' failed to parse',
    /**
     *@description Warning message for image resources from the manifest
     *@example {Image} PH1
     *@example {https://example.com/image.png} PH2
     */
    sSFailedToLoad: '{PH1} {PH2} failed to load',
    /**
     *@description Warning message for image resources from the manifest
     *@example {Image} PH1
     *@example {https://example.com/image.png} PH2
     */
    sSDoesNotSpecifyItsSizeInThe: '{PH1} {PH2} does not specify its size in the manifest',
    /**
     *@description Warning message for image resources from the manifest
     *@example {Image} PH1
     *@example {https://example.com/image.png} PH2
     */
    sSShouldSpecifyItsSizeAs: '{PH1} {PH2} should specify its size as `[width]x[height]`',
    /**
     *@description Warning message for image resources from the manifest
     */
    sSShouldHaveSquareIcon: 'Most operating systems require square icons. Please include at least one square icon in the array.',
    /**
     *@description Warning message for image resources from the manifest
     *@example {100} PH1
     *@example {100} PH2
     *@example {Image} PH3
     *@example {https://example.com/image.png} PH4
     *@example {200} PH5
     *@example {200} PH6
     */
    actualSizeSspxOfSSDoesNotMatch: 'Actual size ({PH1}×{PH2})px of {PH3} {PH4} does not match specified size ({PH5}×{PH6}px)',
    /**
     *@description Warning message for image resources from the manifest
     *@example {100} PH1
     *@example {Image} PH2
     *@example {https://example.com/image.png} PH3
     *@example {200} PH4
     */
    actualWidthSpxOfSSDoesNotMatch: 'Actual width ({PH1}px) of {PH2} {PH3} does not match specified width ({PH4}px)',
    /**
     *@description Warning message for image resources from the manifest
     *@example {100} PH1
     *@example {Image} PH2
     *@example {https://example.com/image.png} PH3
     *@example {100} PH4
     */
    actualHeightSpxOfSSDoesNotMatch: 'Actual height ({PH1}px) of {PH2} {PH3} does not match specified height ({PH4}px)',
    /**
     *@description Warning message for image resources from the manifest
     *@example {Image} PH1
     *@example {https://example.com/image.png} PH2
     */
    sSSizeShouldBeAtLeast320: '{PH1} {PH2} size should be at least 320×320',
    /**
     *@description Warning message for image resources from the manifest
     *@example {Image} PH1
     *@example {https://example.com/image.png} PH2
     */
    sSSizeShouldBeAtMost3840: '{PH1} {PH2} size should be at most 3840×3840',
    /**
     *@description Warning message for image resources from the manifest
     *@example {Image} PH1
     *@example {https://example.com/image.png} PH2
     */
    sSWidthDoesNotComplyWithRatioRequirement: '{PH1} {PH2} width can\'t be more than 2.3 times as long as the height',
    /**
     *@description Warning message for image resources from the manifest
     *@example {Image} PH1
     *@example {https://example.com/image.png} PH2
     */
    sSHeightDoesNotComplyWithRatioRequirement: '{PH1} {PH2} height can\'t be more than 2.3 times as long as the width',
    /**
     *@description Manifest installability error in the Application panel
     *@example {https://example.com/image.png} url
     */
    screenshotPixelSize: 'Screenshot {url} should specify a pixel size `[width]x[height]` instead of `any` as first size.',
    /**
     *@description Warning text about screenshots for Richer PWA Install UI on desktop
     */
    noScreenshotsForRicherPWAInstallOnDesktop: 'Richer PWA Install UI won’t be available on desktop. Please add at least one screenshot with the `form_factor` set to `wide`.',
    /**
     *@description Warning text about screenshots for Richer PWA Install UI on mobile
     */
    noScreenshotsForRicherPWAInstallOnMobile: 'Richer PWA Install UI won’t be available on mobile. Please add at least one screenshot for which `form_factor` is not set or set to a value other than `wide`.',
    /**
     *@description Warning text about too many screenshots for desktop
     */
    tooManyScreenshotsForDesktop: 'No more than 8 screenshots will be displayed on desktop. The rest will be ignored.',
    /**
     *@description Warning text about too many screenshots for mobile
     */
    tooManyScreenshotsForMobile: 'No more than 5 screenshots will be displayed on mobile. The rest will be ignored.',
    /**
     *@description Warning text about not all screenshots matching the appropriate form factor have the same aspect ratio
     */
    screenshotsMustHaveSameAspectRatio: 'All screenshots with the same `form_factor` must have the same aspect ratio as the first screenshot with that `form_factor`. Some screenshots will be ignored.',
    /**
     *@description Message for Window Controls Overlay value succsessfully found with links to documnetation
     *@example {window-controls-overlay} PH1
     *@example {https://developer.mozilla.org/en-US/docs/Web/Manifest/display_override} PH2
     *@example {https://developer.mozilla.org/en-US/docs/Web/Manifest} PH3
     */
    wcoFound: 'Chrome has successfully found the {PH1} value for the {PH2} field in the {PH3}.',
    /**
     *@description Message for Windows Control Overlay value not found with link to documentation
     *@example {https://developer.mozilla.org/en-US/docs/Web/Manifest/display_override} PH1
     */
    wcoNotFound: 'Define {PH1} in the manifest to use the Window Controls Overlay API and customize your app\'s title bar.',
    /**
     *@description Link text for more information on customizing Window Controls Overlay title bar in the Application panel
     */
    customizePwaTitleBar: 'Customize the window controls overlay of your PWA\'s title bar',
    /**
     *@description Text wrapping link to documentation on how to customize WCO title bar
     *@example {https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/window-controls-overlay} PH1
     */
    wcoNeedHelpReadMore: 'Need help? Read {PH1}.',
    /**
     *@description Text for emulation OS selection dropdown
     */
    selectWindowControlsOverlayEmulationOs: 'Emulate the Window Controls Overlay on',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/application/AppManifestView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
class AppManifestView extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Widget.VBox) {
    emptyView;
    reportView;
    errorsSection;
    installabilitySection;
    identitySection;
    presentationSection;
    iconsSection;
    windowControlsSection;
    protocolHandlersSection;
    shortcutSections;
    screenshotsSections;
    nameField;
    shortNameField;
    descriptionField;
    startURLField;
    themeColorSwatch;
    backgroundColorSwatch;
    orientationField;
    displayField;
    newNoteUrlField;
    throttler;
    registeredListeners;
    target;
    resourceTreeModel;
    serviceWorkerManager;
    overlayModel;
    protocolHandlersView;
    constructor(emptyView, reportView, throttler) {
        super(true);
        this.contentElement.classList.add('manifest-container');
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.pane('manifest')}`);
        this.emptyView = emptyView;
        this.emptyView.appendLink('https://web.dev/add-manifest/');
        this.emptyView.show(this.contentElement);
        this.emptyView.hideWidget();
        this.reportView = reportView;
        this.reportView.element.classList.add('manifest-view-header');
        this.reportView.show(this.contentElement);
        this.reportView.hideWidget();
        this.errorsSection =
            this.reportView.appendSection(i18nString(UIStrings.errorsAndWarnings), undefined, 'errors-and-warnings');
        this.installabilitySection =
            this.reportView.appendSection(i18nString(UIStrings.installability), undefined, 'installability');
        this.identitySection = this.reportView.appendSection(i18nString(UIStrings.identity), 'undefined,identity');
        this.presentationSection =
            this.reportView.appendSection(i18nString(UIStrings.presentation), 'undefined,presentation');
        this.protocolHandlersSection =
            this.reportView.appendSection(i18nString(UIStrings.protocolHandlers), 'undefined,protocol-handlers');
        this.protocolHandlersView = new _components_components_js__WEBPACK_IMPORTED_MODULE_11__.ProtocolHandlersView.ProtocolHandlersView();
        this.protocolHandlersSection.appendFieldWithCustomView(this.protocolHandlersView);
        this.iconsSection = this.reportView.appendSection(i18nString(UIStrings.icons), 'report-section-icons', 'icons');
        this.windowControlsSection =
            this.reportView.appendSection(UIStrings.windowControlsOverlay, undefined, 'window-controls-overlay');
        this.shortcutSections = [];
        this.screenshotsSections = [];
        this.nameField = this.identitySection.appendField(i18nString(UIStrings.name));
        this.shortNameField = this.identitySection.appendField(i18nString(UIStrings.shortName));
        this.descriptionField = this.identitySection.appendFlexedField(i18nString(UIStrings.description));
        this.startURLField = this.presentationSection.appendField(i18nString(UIStrings.startUrl));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setLabel(this.startURLField, i18nString(UIStrings.startUrl));
        const themeColorField = this.presentationSection.appendField(i18nString(UIStrings.themeColor));
        this.themeColorSwatch = new _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_6__.ColorSwatch.ColorSwatch();
        themeColorField.appendChild(this.themeColorSwatch);
        const backgroundColorField = this.presentationSection.appendField(i18nString(UIStrings.backgroundColor));
        this.backgroundColorSwatch = new _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_6__.ColorSwatch.ColorSwatch();
        backgroundColorField.appendChild(this.backgroundColorSwatch);
        this.orientationField = this.presentationSection.appendField(i18nString(UIStrings.orientation));
        this.displayField = this.presentationSection.appendField(i18nString(UIStrings.display));
        this.newNoteUrlField = this.presentationSection.appendField(i18nString(UIStrings.newNoteUrl));
        this.throttler = throttler;
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().observeTargets(this);
        this.registeredListeners = [];
    }
    getStaticSections() {
        return [
            this.identitySection,
            this.presentationSection,
            this.protocolHandlersSection,
            this.iconsSection,
            this.windowControlsSection,
        ];
    }
    getManifestElement() {
        return this.reportView.getHeaderElement();
    }
    targetAdded(target) {
        if (target !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget()) {
            return;
        }
        this.target = target;
        this.resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel);
        this.serviceWorkerManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ServiceWorkerManager.ServiceWorkerManager);
        this.overlayModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.OverlayModel.OverlayModel);
        if (!this.resourceTreeModel || !this.serviceWorkerManager || !this.overlayModel) {
            return;
        }
        void this.updateManifest(true);
        this.registeredListeners = [
            this.resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.DOMContentLoaded, () => {
                void this.updateManifest(true);
            }),
            this.serviceWorkerManager.addEventListener("RegistrationUpdated" /* SDK.ServiceWorkerManager.Events.RegistrationUpdated */, () => {
                void this.updateManifest(false);
            }),
        ];
    }
    targetRemoved(target) {
        if (this.target !== target) {
            return;
        }
        if (!this.resourceTreeModel || !this.serviceWorkerManager || !this.overlayModel) {
            return;
        }
        delete this.resourceTreeModel;
        delete this.serviceWorkerManager;
        delete this.overlayModel;
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(this.registeredListeners);
    }
    async updateManifest(immediately) {
        if (!this.resourceTreeModel) {
            return;
        }
        const [{ url, data, errors }, installabilityErrors, appId] = await Promise.all([
            this.resourceTreeModel.fetchAppManifest(),
            this.resourceTreeModel.getInstallabilityErrors(),
            this.resourceTreeModel.getAppId(),
        ]);
        void this.throttler.schedule(() => this.renderManifest(url, data, errors, installabilityErrors, appId), immediately ? "AsSoonAsPossible" /* Common.Throttler.Scheduling.AsSoonAsPossible */ : "Default" /* Common.Throttler.Scheduling.Default */);
    }
    async renderManifest(url, data, errors, installabilityErrors, appIdResponse) {
        const appId = appIdResponse?.appId || null;
        const recommendedId = appIdResponse?.recommendedId || null;
        if ((!data || data === '{}') && !errors.length) {
            this.emptyView.showWidget();
            this.reportView.hideWidget();
            this.dispatchEventToListeners("ManifestDetected" /* Events.ManifestDetected */, false);
            return;
        }
        this.emptyView.hideWidget();
        this.reportView.showWidget();
        this.dispatchEventToListeners("ManifestDetected" /* Events.ManifestDetected */, true);
        const link = _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.Linkifier.Linkifier.linkifyURL(url);
        link.tabIndex = 0;
        this.reportView.setURL(link);
        this.errorsSection.clearContent();
        this.errorsSection.element.classList.toggle('hidden', !errors.length);
        for (const error of errors) {
            const icon = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createIconLabel({
                title: error.message,
                iconName: error.critical ? 'cross-circle-filled' : 'warning-filled',
                color: error.critical ? 'var(--icon-error)' : 'var(--icon-warning)',
            });
            this.errorsSection.appendRow().appendChild(icon);
        }
        if (!data) {
            return;
        }
        if (data.charCodeAt(0) === 0xFEFF) {
            data = data.slice(1);
        } // Trim the BOM as per https://tools.ietf.org/html/rfc7159#section-8.1.
        const parsedManifest = JSON.parse(data);
        this.nameField.textContent = stringProperty('name');
        this.shortNameField.textContent = stringProperty('short_name');
        const warnings = [];
        const description = stringProperty('description');
        this.descriptionField.textContent = description;
        // See https://crbug.com/1354304 for details.
        if (description.length > 300) {
            warnings.push(i18nString(UIStrings.descriptionMayBeTruncated));
        }
        const startURL = stringProperty('start_url');
        if (appId && recommendedId) {
            const appIdField = this.identitySection.appendField(i18nString(UIStrings.computedAppId));
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setLabel(appIdField, 'App Id');
            appIdField.textContent = appId;
            const helpIcon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.create('help', 'inline-icon');
            helpIcon.title = i18nString(UIStrings.appIdExplainer);
            helpIcon.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.action('help').track({ hover: true })}`);
            appIdField.appendChild(helpIcon);
            const learnMoreLink = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.XLink.XLink.create('https://developer.chrome.com/blog/pwa-manifest-id/', i18nString(UIStrings.learnMore), undefined, undefined, 'learn-more');
            appIdField.appendChild(learnMoreLink);
            if (!stringProperty('id')) {
                const suggestedIdNote = appIdField.createChild('div', 'multiline-value');
                const noteSpan = document.createElement('b');
                noteSpan.textContent = i18nString(UIStrings.note);
                const idSpan = document.createElement('code');
                idSpan.textContent = 'id';
                const idSpan2 = document.createElement('code');
                idSpan2.textContent = 'id';
                const startUrlSpan = document.createElement('code');
                startUrlSpan.textContent = 'start_url';
                const suggestedIdSpan = document.createElement('code');
                suggestedIdSpan.textContent = recommendedId;
                const copyButton = new _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button();
                copyButton.data = {
                    variant: "icon" /* Buttons.Button.Variant.ICON */,
                    iconName: 'copy',
                    size: "SMALL" /* Buttons.Button.Size.SMALL */,
                    jslogContext: 'manifest.copy-id',
                    title: i18nString(UIStrings.copyToClipboard),
                };
                copyButton.className = 'inline-button';
                copyButton.addEventListener('click', () => {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.alert(i18nString(UIStrings.copiedToClipboard, { PH1: recommendedId }));
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(recommendedId);
                });
                suggestedIdNote.appendChild(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getFormatLocalizedString(str_, UIStrings.appIdNote, { PH1: noteSpan, PH2: idSpan, PH3: startUrlSpan, PH4: idSpan2, PH5: suggestedIdSpan, PH6: copyButton }));
            }
        }
        else {
            this.identitySection.removeField(i18nString(UIStrings.computedAppId));
        }
        this.startURLField.removeChildren();
        if (startURL) {
            const completeURL = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.completeURL(url, startURL);
            if (completeURL) {
                const link = _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.Linkifier.Linkifier.linkifyURL(completeURL, { text: startURL });
                link.tabIndex = 0;
                link.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.link('start-url').track({ click: true })}`);
                this.startURLField.appendChild(link);
            }
        }
        this.themeColorSwatch.classList.toggle('hidden', !stringProperty('theme_color'));
        const themeColor = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(stringProperty('theme_color') || 'white') || _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('white');
        if (themeColor) {
            this.themeColorSwatch.renderColor(themeColor);
        }
        this.backgroundColorSwatch.classList.toggle('hidden', !stringProperty('background_color'));
        const backgroundColor = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(stringProperty('background_color') || 'white') || _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('white');
        if (backgroundColor) {
            this.backgroundColorSwatch.renderColor(backgroundColor);
        }
        this.orientationField.textContent = stringProperty('orientation');
        const displayType = stringProperty('display');
        this.displayField.textContent = displayType;
        const noteTaking = parsedManifest['note_taking'] || {};
        const newNoteUrl = noteTaking['new_note_url'];
        const hasNewNoteUrl = typeof newNoteUrl === 'string';
        this.newNoteUrlField.parentElement?.classList.toggle('hidden', !hasNewNoteUrl);
        this.newNoteUrlField.removeChildren();
        if (hasNewNoteUrl) {
            const completeURL = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.completeURL(url, newNoteUrl);
            const link = _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.Linkifier.Linkifier.linkifyURL(completeURL, { text: newNoteUrl });
            link.tabIndex = 0;
            this.newNoteUrlField.appendChild(link);
        }
        const protocolHandlers = parsedManifest['protocol_handlers'] || [];
        this.protocolHandlersView.data = { protocolHandlers, manifestLink: url };
        const icons = parsedManifest['icons'] || [];
        this.iconsSection.clearContent();
        const shortcuts = parsedManifest['shortcuts'] || [];
        for (const shortcutsSection of this.shortcutSections) {
            shortcutsSection.detach(/** overrideHideOnDetach= */ true);
        }
        const screenshots = parsedManifest['screenshots'] || [];
        for (const screenshotSection of this.screenshotsSections) {
            screenshotSection.detach(/** overrideHideOnDetach= */ true);
        }
        const imageErrors = [];
        const setIconMaskedCheckbox = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.CheckboxLabel.create(i18nString(UIStrings.showOnlyTheMinimumSafeAreaFor));
        setIconMaskedCheckbox.classList.add('mask-checkbox');
        setIconMaskedCheckbox.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.toggle('show-minimal-safe-area-for-maskable-icons').track({ change: true })}`);
        setIconMaskedCheckbox.addEventListener('click', () => {
            this.iconsSection.setIconMasked(setIconMaskedCheckbox.checkboxElement.checked);
        });
        this.iconsSection.appendRow().appendChild(setIconMaskedCheckbox);
        const documentationLink = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.XLink.XLink.create('https://web.dev/maskable-icon/', i18nString(UIStrings.documentationOnMaskableIcons), undefined, undefined, 'learn-more');
        this.iconsSection.appendRow().appendChild(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getFormatLocalizedString(str_, UIStrings.needHelpReadOurS, { PH1: documentationLink }));
        let squareSizedIconAvailable = false;
        for (const icon of icons) {
            const result = await this.appendImageResourceToSection(url, icon, this.iconsSection, /** isScreenshot= */ false);
            imageErrors.push(...result.imageResourceErrors);
            squareSizedIconAvailable = result.squareSizedIconAvailable || squareSizedIconAvailable;
        }
        if (!squareSizedIconAvailable) {
            imageErrors.push(i18nString(UIStrings.sSShouldHaveSquareIcon));
        }
        if (shortcuts.length > 4) {
            warnings.push(i18nString(UIStrings.shortcutsMayBeNotAvailable));
        }
        let shortcutIndex = 1;
        for (const shortcut of shortcuts) {
            const shortcutSection = this.reportView.appendSection(i18nString(UIStrings.shortcutS, { PH1: shortcutIndex }));
            shortcutSection.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.section('shortcuts')}`);
            this.shortcutSections.push(shortcutSection);
            shortcutSection.appendFlexedField(i18nString(UIStrings.name), shortcut.name);
            if (shortcut.short_name) {
                shortcutSection.appendFlexedField(i18nString(UIStrings.shortName), shortcut.short_name);
            }
            if (shortcut.description) {
                shortcutSection.appendFlexedField(i18nString(UIStrings.description), shortcut.description);
            }
            const urlField = shortcutSection.appendFlexedField(i18nString(UIStrings.url));
            const shortcutUrl = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.completeURL(url, shortcut.url);
            const link = _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.Linkifier.Linkifier.linkifyURL(shortcutUrl, { text: shortcut.url });
            link.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.link('shortcut').track({ click: true })}`);
            link.tabIndex = 0;
            urlField.appendChild(link);
            const shortcutIcons = shortcut.icons || [];
            let hasShorcutIconLargeEnough = false;
            for (const shortcutIcon of shortcutIcons) {
                const { imageResourceErrors: shortcutIconErrors } = await this.appendImageResourceToSection(url, shortcutIcon, shortcutSection, /** isScreenshot= */ false);
                imageErrors.push(...shortcutIconErrors);
                if (!hasShorcutIconLargeEnough && shortcutIcon.sizes) {
                    const shortcutIconSize = shortcutIcon.sizes.match(/^(\d+)x(\d+)$/);
                    if (shortcutIconSize && shortcutIconSize[1] >= 96 && shortcutIconSize[2] >= 96) {
                        hasShorcutIconLargeEnough = true;
                    }
                }
            }
            if (!hasShorcutIconLargeEnough) {
                imageErrors.push(i18nString(UIStrings.shortcutSShouldIncludeAXPixel, { PH1: shortcutIndex }));
            }
            shortcutIndex++;
        }
        let screenshotIndex = 1;
        const formFactorScreenshotDimensions = new Map();
        let haveScreenshotsDifferentAspectRatio = false;
        for (const screenshot of screenshots) {
            const screenshotSection = this.reportView.appendSection(i18nString(UIStrings.screenshotS, { PH1: screenshotIndex }));
            this.screenshotsSections.push(screenshotSection);
            if (screenshot.form_factor) {
                screenshotSection.appendFlexedField(i18nString(UIStrings.formFactor), screenshot.form_factor);
            }
            if (screenshot.label) {
                screenshotSection.appendFlexedField(i18nString(UIStrings.label), screenshot.label);
            }
            if (screenshot.platform) {
                screenshotSection.appendFlexedField(i18nString(UIStrings.platform), screenshot.platform);
            }
            const { imageResourceErrors: screenshotErrors, naturalWidth: width, naturalHeight: height } = await this.appendImageResourceToSection(url, screenshot, screenshotSection, /** isScreenshot= */ true);
            imageErrors.push(...screenshotErrors);
            if (screenshot.form_factor && width && height) {
                formFactorScreenshotDimensions.has(screenshot.form_factor) ||
                    formFactorScreenshotDimensions.set(screenshot.form_factor, { width, height });
                const formFactorFirstScreenshotDimensions = formFactorScreenshotDimensions.get(screenshot.form_factor);
                if (formFactorFirstScreenshotDimensions) {
                    haveScreenshotsDifferentAspectRatio = haveScreenshotsDifferentAspectRatio ||
                        (width * formFactorFirstScreenshotDimensions.height !==
                            height * formFactorFirstScreenshotDimensions.width);
                }
            }
            screenshotIndex++;
        }
        if (haveScreenshotsDifferentAspectRatio) {
            warnings.push(i18nString(UIStrings.screenshotsMustHaveSameAspectRatio));
        }
        const screenshotsForDesktop = screenshots.filter(screenshot => screenshot.form_factor === 'wide');
        const screenshotsForMobile = screenshots.filter(screenshot => screenshot.form_factor !== 'wide');
        if (screenshotsForDesktop.length < 1) {
            warnings.push(i18nString(UIStrings.noScreenshotsForRicherPWAInstallOnDesktop));
        }
        if (screenshotsForMobile.length < 1) {
            warnings.push(i18nString(UIStrings.noScreenshotsForRicherPWAInstallOnMobile));
        }
        if (screenshotsForDesktop.length > 8) {
            warnings.push(i18nString(UIStrings.tooManyScreenshotsForDesktop));
        }
        if (screenshotsForMobile.length > 5) {
            warnings.push(i18nString(UIStrings.tooManyScreenshotsForMobile));
        }
        this.installabilitySection.clearContent();
        this.installabilitySection.element.classList.toggle('hidden', !installabilityErrors.length);
        const errorMessages = this.getInstallabilityErrorMessages(installabilityErrors);
        for (const error of errorMessages) {
            const icon = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createIconLabel({ title: error, iconName: 'warning-filled', color: 'var(--icon-warning)' });
            this.installabilitySection.appendRow().appendChild(icon);
        }
        this.errorsSection.element.classList.toggle('hidden', !errors.length && !imageErrors.length && !warnings.length);
        for (const warning of warnings) {
            const icon = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createIconLabel({ title: warning, iconName: 'warning-filled', color: 'var(--icon-warning)' });
            this.errorsSection.appendRow().appendChild(icon);
        }
        for (const error of imageErrors) {
            const icon = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createIconLabel({ title: error, iconName: 'warning-filled', color: 'var(--icon-warning)' });
            this.errorsSection.appendRow().appendChild(icon);
        }
        function stringProperty(name) {
            const value = parsedManifest[name];
            if (typeof value !== 'string') {
                return '';
            }
            return value;
        }
        this.windowControlsSection.clearContent();
        const displayOverride = parsedManifest['display_override'] || [];
        const hasWco = displayOverride.includes('window-controls-overlay');
        const displayOverrideLink = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.XLink.XLink.create('https://developer.mozilla.org/en-US/docs/Web/Manifest/display_override', 'display-override', undefined, undefined, 'display-override');
        const displayOverrideText = document.createElement('code');
        displayOverrideText.appendChild(displayOverrideLink);
        const wcoStatusMessage = this.windowControlsSection.appendRow();
        if (hasWco) {
            const checkmarkIcon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.create('check-circle', 'inline-icon');
            wcoStatusMessage.appendChild(checkmarkIcon);
            const wco = document.createElement('code');
            wco.classList.add('wco');
            wco.textContent = 'window-controls-overlay';
            wcoStatusMessage.appendChild(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getFormatLocalizedString(str_, UIStrings.wcoFound, { PH1: wco, PH2: displayOverrideText, PH3: link }));
            if (this.overlayModel) {
                await this.appendWindowControlsToSection(this.overlayModel, url, stringProperty('theme_color'));
            }
        }
        else {
            const infoIcon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.create('info', 'inline-icon');
            wcoStatusMessage.appendChild(infoIcon);
            wcoStatusMessage.appendChild(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getFormatLocalizedString(str_, UIStrings.wcoNotFound, { PH1: displayOverrideText }));
        }
        const wcoDocumentationLink = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.XLink.XLink.create('https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/window-controls-overlay', i18nString(UIStrings.customizePwaTitleBar), undefined, undefined, 'customize-pwa-tittle-bar');
        this.windowControlsSection.appendRow().appendChild(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getFormatLocalizedString(str_, UIStrings.wcoNeedHelpReadMore, { PH1: wcoDocumentationLink }));
        this.dispatchEventToListeners("ManifestRendered" /* Events.ManifestRendered */);
    }
    getInstallabilityErrorMessages(installabilityErrors) {
        const errorMessages = [];
        for (const installabilityError of installabilityErrors) {
            let errorMessage;
            switch (installabilityError.errorId) {
                case 'not-in-main-frame':
                    errorMessage = i18nString(UIStrings.pageIsNotLoadedInTheMainFrame);
                    break;
                case 'not-from-secure-origin':
                    errorMessage = i18nString(UIStrings.pageIsNotServedFromASecureOrigin);
                    break;
                case 'no-manifest':
                    errorMessage = i18nString(UIStrings.pageHasNoManifestLinkUrl);
                    break;
                case 'manifest-empty':
                    errorMessage = i18nString(UIStrings.manifestCouldNotBeFetchedIsEmpty);
                    break;
                case 'start-url-not-valid':
                    errorMessage = i18nString(UIStrings.manifestStartUrlIsNotValid);
                    break;
                case 'manifest-missing-name-or-short-name':
                    errorMessage = i18nString(UIStrings.manifestDoesNotContainANameOr);
                    break;
                case 'manifest-display-not-supported':
                    errorMessage = i18nString(UIStrings.manifestDisplayPropertyMustBeOne);
                    break;
                case 'manifest-missing-suitable-icon':
                    if (installabilityError.errorArguments.length !== 1 ||
                        installabilityError.errorArguments[0].name !== 'minimum-icon-size-in-pixels') {
                        console.error('Installability error does not have the correct errorArguments');
                        break;
                    }
                    errorMessage =
                        i18nString(UIStrings.manifestDoesNotContainASuitable, { PH1: installabilityError.errorArguments[0].value });
                    break;
                case 'no-acceptable-icon':
                    if (installabilityError.errorArguments.length !== 1 ||
                        installabilityError.errorArguments[0].name !== 'minimum-icon-size-in-pixels') {
                        console.error('Installability error does not have the correct errorArguments');
                        break;
                    }
                    errorMessage = i18nString(UIStrings.noSuppliedIconIsAtLeastSpxSquare, { PH1: installabilityError.errorArguments[0].value });
                    break;
                case 'cannot-download-icon':
                    errorMessage = i18nString(UIStrings.couldNotDownloadARequiredIcon);
                    break;
                case 'no-icon-available':
                    errorMessage = i18nString(UIStrings.downloadedIconWasEmptyOr);
                    break;
                case 'platform-not-supported-on-android':
                    errorMessage = i18nString(UIStrings.theSpecifiedApplicationPlatform);
                    break;
                case 'no-id-specified':
                    errorMessage = i18nString(UIStrings.noPlayStoreIdProvided);
                    break;
                case 'ids-do-not-match':
                    errorMessage = i18nString(UIStrings.thePlayStoreAppUrlAndPlayStoreId);
                    break;
                case 'already-installed':
                    errorMessage = i18nString(UIStrings.theAppIsAlreadyInstalled);
                    break;
                case 'url-not-supported-for-webapk':
                    errorMessage = i18nString(UIStrings.aUrlInTheManifestContainsA);
                    break;
                case 'in-incognito':
                    errorMessage = i18nString(UIStrings.pageIsLoadedInAnIncognitoWindow);
                    break;
                case 'not-offline-capable':
                    errorMessage = i18nString(UIStrings.pageDoesNotWorkOffline);
                    break;
                case 'no-url-for-service-worker':
                    errorMessage = i18nString(UIStrings.couldNotCheckServiceWorker);
                    break;
                case 'prefer-related-applications':
                    errorMessage = i18nString(UIStrings.manifestSpecifies);
                    break;
                case 'prefer-related-applications-only-beta-stable':
                    errorMessage = i18nString(UIStrings.preferrelatedapplicationsIsOnly);
                    break;
                case 'manifest-display-override-not-supported':
                    errorMessage = i18nString(UIStrings.manifestContainsDisplayoverride);
                    break;
                case 'warn-not-offline-capable':
                    errorMessage = i18nString(UIStrings.pageDoesNotWorkOfflineThePage, { PH1: 'https://developer.chrome.com/blog/improved-pwa-offline-detection/' });
                    break;
                default:
                    console.error(`Installability error id '${installabilityError.errorId}' is not recognized`);
                    break;
            }
            if (errorMessage) {
                errorMessages.push(errorMessage);
            }
        }
        return errorMessages;
    }
    async loadImage(url) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('image-wrapper');
        const image = document.createElement('img');
        const result = new Promise((resolve, reject) => {
            image.onload = resolve;
            image.onerror = reject;
        });
        image.src = url;
        image.alt = i18nString(UIStrings.imageFromS, { PH1: url });
        wrapper.appendChild(image);
        try {
            await result;
            return { wrapper, image };
        }
        catch (e) {
        }
        return null;
    }
    parseSizes(sizes, resourceName, imageUrl, imageResourceErrors) {
        const rawSizeArray = sizes ? sizes.split(/\s+/) : [];
        const parsedSizes = [];
        for (const size of rawSizeArray) {
            if (size === 'any') {
                if (!parsedSizes.find(x => 'any' in x)) {
                    parsedSizes.push({ any: 'any', formatted: 'any' });
                }
                continue;
            }
            const match = size.match(/^(?<width>\d+)[xX](?<height>\d+)$/);
            if (match) {
                const width = parseInt(match.groups?.width || '', 10);
                const height = parseInt(match.groups?.height || '', 10);
                const formatted = `${width}×${height}px`;
                parsedSizes.push({ width, height, formatted });
            }
            else {
                imageResourceErrors.push(i18nString(UIStrings.sSShouldSpecifyItsSizeAs, { PH1: resourceName, PH2: imageUrl }));
            }
        }
        return parsedSizes;
    }
    checkSizeProblem(size, type, image, resourceName, imageUrl) {
        if ('any' in size) {
            return { hasSquareSize: image.naturalWidth === image.naturalHeight };
        }
        const hasSquareSize = size.width === size.height;
        if (image.naturalWidth !== size.width && image.naturalHeight !== size.height) {
            return {
                error: i18nString(UIStrings.actualSizeSspxOfSSDoesNotMatch, {
                    PH1: image.naturalWidth,
                    PH2: image.naturalHeight,
                    PH3: resourceName,
                    PH4: imageUrl,
                    PH5: size.width,
                    PH6: size.height,
                }),
                hasSquareSize,
            };
        }
        if (image.naturalWidth !== size.width) {
            return {
                error: i18nString(UIStrings.actualWidthSpxOfSSDoesNotMatch, { PH1: image.naturalWidth, PH2: resourceName, PH3: imageUrl, PH4: size.width }),
                hasSquareSize,
            };
        }
        if (image.naturalHeight !== size.height) {
            return {
                error: i18nString(UIStrings.actualHeightSpxOfSSDoesNotMatch, { PH1: image.naturalHeight, PH2: resourceName, PH3: imageUrl, PH4: size.height }),
                hasSquareSize,
            };
        }
        return { hasSquareSize };
    }
    async appendImageResourceToSection(
    // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    baseUrl, imageResource, section, isScreenshot) {
        const imageResourceErrors = [];
        const resourceName = isScreenshot ? i18nString(UIStrings.screenshot) : i18nString(UIStrings.icon);
        if (!imageResource.src) {
            imageResourceErrors.push(i18nString(UIStrings.sSrcIsNotSet, { PH1: resourceName }));
            return { imageResourceErrors };
        }
        const imageUrl = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.completeURL(baseUrl, imageResource['src']);
        if (!imageUrl) {
            imageResourceErrors.push(i18nString(UIStrings.sUrlSFailedToParse, { PH1: resourceName, PH2: imageResource['src'] }));
            return { imageResourceErrors };
        }
        const result = await this.loadImage(imageUrl);
        if (!result) {
            imageResourceErrors.push(i18nString(UIStrings.sSFailedToLoad, { PH1: resourceName, PH2: imageUrl }));
            return { imageResourceErrors };
        }
        const { wrapper, image } = result;
        const { naturalWidth, naturalHeight } = image;
        const sizes = this.parseSizes(imageResource['sizes'], resourceName, imageUrl, imageResourceErrors);
        const title = sizes.map(x => x.formatted).join(' ') + '\n' + (imageResource['type'] || '');
        const field = section.appendFlexedField(title);
        let squareSizedIconAvailable = false;
        if (!imageResource.sizes) {
            imageResourceErrors.push(i18nString(UIStrings.sSDoesNotSpecifyItsSizeInThe, { PH1: resourceName, PH2: imageUrl }));
        }
        else {
            if (isScreenshot && sizes.length > 0 && 'any' in sizes[0]) {
                imageResourceErrors.push(i18nString(UIStrings.screenshotPixelSize, { url: imageUrl }));
            }
            for (const size of sizes) {
                const { error, hasSquareSize } = this.checkSizeProblem(size, imageResource['type'], image, resourceName, imageUrl);
                squareSizedIconAvailable = squareSizedIconAvailable || hasSquareSize;
                if (error) {
                    imageResourceErrors.push(error);
                }
                else if (isScreenshot) {
                    const width = 'any' in size ? image.naturalWidth : size.width;
                    const height = 'any' in size ? image.naturalHeight : size.height;
                    if (width < 320 || height < 320) {
                        imageResourceErrors.push(i18nString(UIStrings.sSSizeShouldBeAtLeast320, { PH1: resourceName, PH2: imageUrl }));
                    }
                    else if (width > 3840 || height > 3840) {
                        imageResourceErrors.push(i18nString(UIStrings.sSSizeShouldBeAtMost3840, { PH1: resourceName, PH2: imageUrl }));
                    }
                    else if (width > (height * 2.3)) {
                        imageResourceErrors.push(i18nString(UIStrings.sSWidthDoesNotComplyWithRatioRequirement, { PH1: resourceName, PH2: imageUrl }));
                    }
                    else if (height > (width * 2.3)) {
                        imageResourceErrors.push(i18nString(UIStrings.sSHeightDoesNotComplyWithRatioRequirement, { PH1: resourceName, PH2: imageUrl }));
                    }
                }
            }
        }
        image.width = image.naturalWidth;
        const purpose = typeof imageResource['purpose'] === 'string' ? imageResource['purpose'].toLowerCase() : '';
        if (purpose.includes('any') && purpose.includes('maskable')) {
            imageResourceErrors.push(i18nString(UIStrings.avoidPurposeAnyAndMaskable));
        }
        field.appendChild(wrapper);
        return { imageResourceErrors, squareSizedIconAvailable, naturalWidth, naturalHeight };
    }
    wasShown() {
        super.wasShown();
        this.reportView.registerCSSFiles([_appManifestView_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]]);
        this.registerCSSFiles([_appManifestView_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]]);
    }
    async appendWindowControlsToSection(overlayModel, url, themeColor) {
        const wcoStyleSheetText = await overlayModel.hasStyleSheetText(url);
        if (!wcoStyleSheetText) {
            return;
        }
        await overlayModel.toggleWindowControlsToolbar(false);
        const wcoOsCheckbox = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.CheckboxLabel.create(i18nString(UIStrings.selectWindowControlsOverlayEmulationOs), false);
        wcoOsCheckbox.checkboxElement.addEventListener('click', async () => {
            await this.overlayModel?.toggleWindowControlsToolbar(wcoOsCheckbox.checkboxElement.checked);
        });
        const osSelectElement = wcoOsCheckbox.createChild('select', 'chrome-select');
        osSelectElement.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createOption('Windows', "Windows" /* SDK.OverlayModel.EmulatedOSType.WindowsOS */, 'windows'));
        osSelectElement.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createOption('macOS', "Mac" /* SDK.OverlayModel.EmulatedOSType.MacOS */, 'macos'));
        osSelectElement.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createOption('Linux', "Linux" /* SDK.OverlayModel.EmulatedOSType.LinuxOS */, 'linux'));
        osSelectElement.selectedIndex = 0;
        if (this.overlayModel) {
            osSelectElement.value = this.overlayModel?.getWindowControlsConfig().selectedPlatform;
        }
        osSelectElement.addEventListener('change', async () => {
            const selectedOS = osSelectElement.options[osSelectElement.selectedIndex].value;
            if (this.overlayModel) {
                this.overlayModel.setWindowControlsPlatform(selectedOS);
                await this.overlayModel.toggleWindowControlsToolbar(wcoOsCheckbox.checkboxElement.checked);
            }
        });
        this.windowControlsSection.appendRow().appendChild(wcoOsCheckbox);
        overlayModel.setWindowControlsThemeColor(themeColor);
    }
}
//# sourceMappingURL=AppManifestView.js.map

/***/ }),

/***/ "./panels/application/appManifestView.css.js":
/*!***************************************************!*\
  !*** ./panels/application/appManifestView.css.js ***!
  \***************************************************/
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
 * Copyright 2016 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
.report-field-name {
  flex-basis: 152px;
}

.manifest-view-header {
  min-width: 600px;
  flex-shrink: 0;
  flex-grow: 0;
}

.manifest-container {
  overflow: auto;
}

.inline-icon {
  margin-inline: 4px;
  width: 16px;
  height: 16px;

  &[name="check-circle"] {
    color: var(--icon-checkmark-green);
  }
}

.multiline-value {
  white-space: normal;
}

.chrome-select {
  margin: 4px;
}

.inline-button {
  vertical-align: sub;
}

/*# sourceURL=appManifestView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);