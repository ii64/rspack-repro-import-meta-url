"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_webauthn_WebauthnPane_ts"],{

/***/ "./src/panels/webauthn/WebauthnPane.ts":
/*!*********************************************!*\
  !*** ./src/panels/webauthn/WebauthnPane.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebauthnPaneImpl: () => (/* binding */ WebauthnPaneImpl)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./src/ui/legacy/components/data_grid/data_grid.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './webauthnPane.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2020 The Chromium Authors. All rights reserved.
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
var _WebauthnPaneImpl_instances, _WebauthnPaneImpl_activeAuthId, _WebauthnPaneImpl_hasBeenEnabled, _WebauthnPaneImpl_enableCheckbox, _WebauthnPaneImpl_availableAuthenticatorSetting, _WebauthnPaneImpl_model, _WebauthnPaneImpl_authenticatorsView, _WebauthnPaneImpl_topToolbarContainer, _WebauthnPaneImpl_topToolbar, _WebauthnPaneImpl_learnMoreView, _WebauthnPaneImpl_newAuthenticatorSection, _WebauthnPaneImpl_newAuthenticatorForm, _WebauthnPaneImpl_protocolSelect, _WebauthnPaneImpl_transportSelect, _WebauthnPaneImpl_residentKeyCheckboxLabel, _WebauthnPaneImpl_userVerificationCheckboxLabel, _WebauthnPaneImpl_userVerificationCheckbox, _WebauthnPaneImpl_largeBlobCheckboxLabel, _WebauthnPaneImpl_isEnabling, _WebauthnPaneImpl_loadInitialAuthenticators, _WebauthnPaneImpl_createToolbar, _WebauthnPaneImpl_createCredentialsDataGrid, _WebauthnPaneImpl_handleExportCredential, _WebauthnPaneImpl_handleRemoveCredential, _WebauthnPaneImpl_addCredential, _WebauthnPaneImpl_updateCredential, _WebauthnPaneImpl_setVirtualAuthEnvEnabled, _WebauthnPaneImpl_updateVisibility, _WebauthnPaneImpl_removeAuthenticatorSections, _WebauthnPaneImpl_handleCheckboxToggle, _WebauthnPaneImpl_updateEnabledTransportOptions, _WebauthnPaneImpl_updateNewAuthenticatorSectionOptions, _WebauthnPaneImpl_createNewAuthenticatorSection, _WebauthnPaneImpl_handleAddAuthenticatorButton, _WebauthnPaneImpl_addAuthenticatorSection, _WebauthnPaneImpl_exportCredential, _WebauthnPaneImpl_removeCredential, _WebauthnPaneImpl_createAuthenticatorFields, _WebauthnPaneImpl_handleEditNameButton, _WebauthnPaneImpl_handleSaveNameButton, _WebauthnPaneImpl_updateActiveLabelTitle, _WebauthnPaneImpl_removeAuthenticator, _WebauthnPaneImpl_createOptionsFromCurrentInputs, _WebauthnPaneImpl_setActiveAuthenticator, _WebauthnPaneImpl_updateActiveButtons, _WebauthnPaneImpl_clearActiveAuthenticator;









const UIStrings = {
    /**
     *@description Label for button that allows user to download the private key related to a credential.
     */
    export: 'Export',
    /**
     *@description Label for an item to remove something
     */
    remove: 'Remove',
    /**
     *@description Label for empty credentials table.
     *@example {navigator.credentials.create()} PH1
     */
    noCredentialsTryCallingSFromYour: 'No credentials. Try calling {PH1} from your website.',
    /**
     *@description Label for checkbox to toggle the virtual authenticator environment allowing user to interact with software-based virtual authenticators.
     */
    enableVirtualAuthenticator: 'Enable virtual authenticator environment',
    /**
     *@description Label for ID field for credentials.
     */
    id: 'ID',
    /**
     *@description Label for field that describes whether a credential is a resident credential.
     */
    isResident: 'Is Resident',
    /**
     *@description Label for credential field that represents the Relying Party ID that the credential is scoped to.
     */
    rpId: 'RP ID',
    /**
     *@description Label for a column in a table. A field/unique ID that represents the user a credential is mapped to.
     */
    userHandle: 'User Handle',
    /**
     *@description Label for signature counter field for credentials which represents the number of successful assertions.
     * See https://w3c.github.io/webauthn/#signature-counter.
     */
    signCount: 'Signature Count',
    /**
     *@description Label for column with actions for credentials.
     */
    actions: 'Actions',
    /**
     *@description Title for the table that holds the credentials that a authenticator has registered.
     */
    credentials: 'Credentials',
    /**
     *@description Label for the learn more link that is shown before the virtual environment is enabled.
     */
    useWebauthnForPhishingresistant: 'Use WebAuthn for phishing-resistant authentication',
    /**
     *@description Text that is usually a hyperlink to more documentation
     */
    learnMore: 'Learn more',
    /**
     *@description Title for section of interface that allows user to add a new virtual authenticator.
     */
    newAuthenticator: 'New authenticator',
    /**
     *@description Text for security or network protocol
     */
    protocol: 'Protocol',
    /**
     *@description Label for input to select which transport option to use on virtual authenticators, e.g. USB or Bluetooth.
     */
    transport: 'Transport',
    /**
     *@description Label for checkbox that toggles resident key support on virtual authenticators.
     */
    supportsResidentKeys: 'Supports resident keys',
    /**
     *@description Label for checkbox that toggles large blob support on virtual authenticators. Large blobs are opaque data associated
     * with a WebAuthn credential that a website can store, like an SSH certificate or a symmetric encryption key.
     * See https://w3c.github.io/webauthn/#sctn-large-blob-extension
     */
    supportsLargeBlob: 'Supports large blob',
    /**
     *@description Text to add something
     */
    add: 'Add',
    /**
     *@description Label for button to add a new virtual authenticator.
     */
    addAuthenticator: 'Add authenticator',
    /**
     *@description Label for radio button that toggles whether an authenticator is active.
     */
    active: 'Active',
    /**
     *@description Title for button that enables user to customize name of authenticator.
     */
    editName: 'Edit name',
    /**
     *@description Placeholder for the input box to customize name of authenticator.
     */
    enterNewName: 'Enter new name',
    /**
     *@description Title for button that enables user to save name of authenticator after editing it.
     */
    saveName: 'Save name',
    /**
     *@description Title for a user-added virtual authenticator which is uniquely identified with its AUTHENTICATORID.
     *@example {8c7873be-0b13-4996-a794-1521331bbd96} PH1
     */
    authenticatorS: 'Authenticator {PH1}',
    /**
     *@description Name for generated file which user can download. A private key is a secret code which enables encoding and decoding of a credential. .pem is the file extension.
     */
    privateKeypem: 'Private key.pem',
    /**
     *@description Label for field that holds an authenticator's universally unique identifier (UUID).
     */
    uuid: 'UUID',
    /**
     *@description Label for checkbox that toggles user verification support on virtual authenticators.
     */
    supportsUserVerification: 'Supports user verification',
    /**
     *@description Text in Timeline indicating that input has happened recently
     */
    yes: 'Yes',
    /**
     *@description Text in Timeline indicating that input has not happened recently
     */
    no: 'No',
    /**
     *@description Title of radio button that sets an authenticator as active.
     *@example {Authenticator ABCDEF} PH1
     */
    setSAsTheActiveAuthenticator: 'Set {PH1} as the active authenticator',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/webauthn/WebauthnPane.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var Events;
(function (Events) {
    Events["ExportCredential"] = "ExportCredential";
    Events["RemoveCredential"] = "RemoveCredential";
})(Events || (Events = {}));
class DataGridNode extends _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGrid.DataGridNode {
    constructor(credential) {
        super(credential);
        Object.defineProperty(this, "credential", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: credential
        });
    }
    nodeSelfHeight() {
        return 24;
    }
    createCell(columnId) {
        const cell = super.createCell(columnId);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install(cell, cell.textContent || '');
        if (columnId !== 'actions') {
            return cell;
        }
        const exportButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextButton(i18nString(UIStrings.export), () => {
            if (this.dataGrid) {
                this.dataGrid.dispatchEventToListeners(Events.ExportCredential, this.credential);
            }
        }, { jslogContext: 'webauthn.export-credential' });
        cell.appendChild(exportButton);
        const removeButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextButton(i18nString(UIStrings.remove), () => {
            if (this.dataGrid) {
                this.dataGrid.dispatchEventToListeners(Events.RemoveCredential, this.credential);
            }
        }, { jslogContext: 'webauthn.remove-credential' });
        cell.appendChild(removeButton);
        return cell;
    }
}
class WebauthnDataGridBase extends _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGrid.DataGridImpl {
}
class WebauthnDataGrid extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(WebauthnDataGridBase) {
}
class EmptyDataGridNode extends _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGrid.DataGridNode {
    createCells(element) {
        element.removeChildren();
        const td = this.createTDWithClass(_ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGrid.Align.Center);
        if (this.dataGrid) {
            td.colSpan = this.dataGrid.visibleColumnsArray.length;
        }
        const code = document.createElement('span', { is: 'source-code' });
        code.textContent = 'navigator.credentials.create()';
        code.classList.add('code');
        const message = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getFormatLocalizedString(str_, UIStrings.noCredentialsTryCallingSFromYour, { PH1: code });
        td.appendChild(message);
        element.appendChild(td);
    }
}
// We extrapolate this variable as otherwise git detects a private key, even though we
// perform string manipulation. If we extract the name, then the regex doesn't match
// and we can upload as expected.
const PRIVATE_NAME = 'PRIVATE';
const PRIVATE_KEY_HEADER = `-----BEGIN ${PRIVATE_NAME} KEY-----
`;
const PRIVATE_KEY_FOOTER = `-----END ${PRIVATE_NAME} KEY-----`;
const PROTOCOL_AUTHENTICATOR_VALUES = {
    Ctap2: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.WebAuthn.AuthenticatorProtocol.Ctap2,
    U2f: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.WebAuthn.AuthenticatorProtocol.U2f,
};
class WebauthnPaneImpl extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox {
    constructor() {
        super(true);
        _WebauthnPaneImpl_instances.add(this);
        _WebauthnPaneImpl_activeAuthId.set(this, null);
        _WebauthnPaneImpl_hasBeenEnabled.set(this, false);
        Object.defineProperty(this, "dataGrids", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
        _WebauthnPaneImpl_enableCheckbox.set(this, void 0);
        _WebauthnPaneImpl_availableAuthenticatorSetting.set(this, void 0);
        _WebauthnPaneImpl_model.set(this, void 0);
        _WebauthnPaneImpl_authenticatorsView.set(this, void 0);
        _WebauthnPaneImpl_topToolbarContainer.set(this, void 0);
        _WebauthnPaneImpl_topToolbar.set(this, void 0);
        _WebauthnPaneImpl_learnMoreView.set(this, void 0);
        _WebauthnPaneImpl_newAuthenticatorSection.set(this, void 0);
        _WebauthnPaneImpl_newAuthenticatorForm.set(this, void 0);
        _WebauthnPaneImpl_protocolSelect.set(this, void 0);
        _WebauthnPaneImpl_transportSelect.set(this, void 0);
        _WebauthnPaneImpl_residentKeyCheckboxLabel.set(this, void 0);
        Object.defineProperty(this, "residentKeyCheckbox", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _WebauthnPaneImpl_userVerificationCheckboxLabel.set(this, void 0);
        _WebauthnPaneImpl_userVerificationCheckbox.set(this, void 0);
        _WebauthnPaneImpl_largeBlobCheckboxLabel.set(this, void 0);
        Object.defineProperty(this, "largeBlobCheckbox", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "addAuthenticatorButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _WebauthnPaneImpl_isEnabling.set(this, void 0);
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.panel('webauthn').track({ resize: true })}`);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.WebAuthnModel.WebAuthnModel, this, { scoped: true });
        this.contentElement.classList.add('webauthn-pane');
        __classPrivateFieldSet(this, _WebauthnPaneImpl_availableAuthenticatorSetting, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('webauthn-authenticators', []), "f");
        __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_createToolbar).call(this);
        __classPrivateFieldSet(this, _WebauthnPaneImpl_authenticatorsView, this.contentElement.createChild('div', 'authenticators-view'), "f");
        __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_createNewAuthenticatorSection).call(this);
        __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_updateVisibility).call(this, false);
    }
    modelAdded(model) {
        if (model.target() === model.target().outermostTarget()) {
            __classPrivateFieldSet(this, _WebauthnPaneImpl_model, model, "f");
        }
    }
    modelRemoved(model) {
        if (model.target() === model.target().outermostTarget()) {
            __classPrivateFieldSet(this, _WebauthnPaneImpl_model, undefined, "f");
        }
    }
    async ownerViewDisposed() {
        if (__classPrivateFieldGet(this, _WebauthnPaneImpl_enableCheckbox, "f")) {
            __classPrivateFieldGet(this, _WebauthnPaneImpl_enableCheckbox, "f").setChecked(false);
        }
        await __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_setVirtualAuthEnvEnabled).call(this, false);
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './webauthnPane.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}
_WebauthnPaneImpl_activeAuthId = new WeakMap(), _WebauthnPaneImpl_hasBeenEnabled = new WeakMap(), _WebauthnPaneImpl_enableCheckbox = new WeakMap(), _WebauthnPaneImpl_availableAuthenticatorSetting = new WeakMap(), _WebauthnPaneImpl_model = new WeakMap(), _WebauthnPaneImpl_authenticatorsView = new WeakMap(), _WebauthnPaneImpl_topToolbarContainer = new WeakMap(), _WebauthnPaneImpl_topToolbar = new WeakMap(), _WebauthnPaneImpl_learnMoreView = new WeakMap(), _WebauthnPaneImpl_newAuthenticatorSection = new WeakMap(), _WebauthnPaneImpl_newAuthenticatorForm = new WeakMap(), _WebauthnPaneImpl_protocolSelect = new WeakMap(), _WebauthnPaneImpl_transportSelect = new WeakMap(), _WebauthnPaneImpl_residentKeyCheckboxLabel = new WeakMap(), _WebauthnPaneImpl_userVerificationCheckboxLabel = new WeakMap(), _WebauthnPaneImpl_userVerificationCheckbox = new WeakMap(), _WebauthnPaneImpl_largeBlobCheckboxLabel = new WeakMap(), _WebauthnPaneImpl_isEnabling = new WeakMap(), _WebauthnPaneImpl_instances = new WeakSet(), _WebauthnPaneImpl_loadInitialAuthenticators = async function _WebauthnPaneImpl_loadInitialAuthenticators() {
    let activeAuthenticatorId = null;
    const availableAuthenticators = __classPrivateFieldGet(this, _WebauthnPaneImpl_availableAuthenticatorSetting, "f").get();
    for (const options of availableAuthenticators) {
        if (!__classPrivateFieldGet(this, _WebauthnPaneImpl_model, "f")) {
            continue;
        }
        const authenticatorId = await __classPrivateFieldGet(this, _WebauthnPaneImpl_model, "f").addAuthenticator(options);
        void __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_addAuthenticatorSection).call(this, authenticatorId, options);
        // Update the authenticatorIds in the options.
        options.authenticatorId = authenticatorId;
        if (options.active) {
            activeAuthenticatorId = authenticatorId;
        }
    }
    // Update the settings to reflect the new authenticatorIds.
    __classPrivateFieldGet(this, _WebauthnPaneImpl_availableAuthenticatorSetting, "f").set(availableAuthenticators);
    if (activeAuthenticatorId) {
        void __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_setActiveAuthenticator).call(this, activeAuthenticatorId);
    }
}, _WebauthnPaneImpl_createToolbar = function _WebauthnPaneImpl_createToolbar() {
    __classPrivateFieldSet(this, _WebauthnPaneImpl_topToolbarContainer, this.contentElement.createChild('div', 'webauthn-toolbar-container'), "f");
    __classPrivateFieldGet(this, _WebauthnPaneImpl_topToolbarContainer, "f").setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.toolbar()}`);
    __classPrivateFieldSet(this, _WebauthnPaneImpl_topToolbar, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar('webauthn-toolbar', __classPrivateFieldGet(this, _WebauthnPaneImpl_topToolbarContainer, "f")), "f");
    const enableCheckboxTitle = i18nString(UIStrings.enableVirtualAuthenticator);
    __classPrivateFieldSet(this, _WebauthnPaneImpl_enableCheckbox, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarCheckbox(enableCheckboxTitle, enableCheckboxTitle, __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_handleCheckboxToggle).bind(this)), "f");
    __classPrivateFieldGet(this, _WebauthnPaneImpl_enableCheckbox, "f").inputElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.toggle('virtual-authenticators').track({ click: true })}`);
    __classPrivateFieldGet(this, _WebauthnPaneImpl_topToolbar, "f").appendToolbarItem(__classPrivateFieldGet(this, _WebauthnPaneImpl_enableCheckbox, "f"));
}, _WebauthnPaneImpl_createCredentialsDataGrid = function _WebauthnPaneImpl_createCredentialsDataGrid(authenticatorId) {
    const columns = [
        {
            id: 'credentialId',
            title: i18nString(UIStrings.id),
            longText: true,
            weight: 24,
        },
        {
            id: 'isResidentCredential',
            title: i18nString(UIStrings.isResident),
            dataType: _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGrid.DataType.Boolean,
            weight: 10,
        },
        {
            id: 'rpId',
            title: i18nString(UIStrings.rpId),
        },
        {
            id: 'userHandle',
            title: i18nString(UIStrings.userHandle),
        },
        {
            id: 'signCount',
            title: i18nString(UIStrings.signCount),
        },
        { id: 'actions', title: i18nString(UIStrings.actions) },
    ];
    const dataGridConfig = {
        displayName: i18nString(UIStrings.credentials),
        columns,
        editCallback: undefined,
        deleteCallback: undefined,
        refreshCallback: undefined,
    };
    const dataGrid = new WebauthnDataGrid(dataGridConfig);
    dataGrid.renderInline();
    dataGrid.setStriped(true);
    dataGrid.addEventListener(Events.ExportCredential, __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_handleExportCredential), this);
    dataGrid.addEventListener(Events.RemoveCredential, __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_handleRemoveCredential).bind(this, authenticatorId));
    dataGrid.rootNode().appendChild(new EmptyDataGridNode());
    this.dataGrids.set(authenticatorId, dataGrid);
    return dataGrid;
}, _WebauthnPaneImpl_handleExportCredential = function _WebauthnPaneImpl_handleExportCredential({ data: credential }) {
    __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_exportCredential).call(this, credential);
}, _WebauthnPaneImpl_handleRemoveCredential = function _WebauthnPaneImpl_handleRemoveCredential(authenticatorId, { data: credential, }) {
    void __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_removeCredential).call(this, authenticatorId, credential.credentialId);
}, _WebauthnPaneImpl_addCredential = function _WebauthnPaneImpl_addCredential(authenticatorId, { data: event, }) {
    const dataGrid = this.dataGrids.get(authenticatorId);
    if (!dataGrid) {
        return;
    }
    const emptyNode = dataGrid.rootNode().children.find(node => !Object.keys(node.data).length);
    if (emptyNode) {
        dataGrid.rootNode().removeChild(emptyNode);
    }
    const node = new DataGridNode(event.credential);
    dataGrid.rootNode().appendChild(node);
}, _WebauthnPaneImpl_updateCredential = function _WebauthnPaneImpl_updateCredential(authenticatorId, { data: event, }) {
    const dataGrid = this.dataGrids.get(authenticatorId);
    if (!dataGrid) {
        return;
    }
    const node = dataGrid.rootNode().children.find(node => node.data?.credentialId === event.credential.credentialId);
    if (!node) {
        return;
    }
    node.data = event.credential;
}, _WebauthnPaneImpl_setVirtualAuthEnvEnabled = async function _WebauthnPaneImpl_setVirtualAuthEnvEnabled(enable) {
    await __classPrivateFieldGet(this, _WebauthnPaneImpl_isEnabling, "f");
    __classPrivateFieldSet(this, _WebauthnPaneImpl_isEnabling, new Promise(async (resolve) => {
        if (enable && !__classPrivateFieldGet(this, _WebauthnPaneImpl_hasBeenEnabled, "f")) {
            // Ensures metric is only tracked once per session.
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.VirtualAuthenticatorEnvironmentEnabled);
            __classPrivateFieldSet(this, _WebauthnPaneImpl_hasBeenEnabled, true, "f");
        }
        if (__classPrivateFieldGet(this, _WebauthnPaneImpl_model, "f")) {
            await __classPrivateFieldGet(this, _WebauthnPaneImpl_model, "f").setVirtualAuthEnvEnabled(enable);
        }
        if (enable) {
            await __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_loadInitialAuthenticators).call(this);
        }
        else {
            __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_removeAuthenticatorSections).call(this);
        }
        __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_updateVisibility).call(this, enable);
        __classPrivateFieldSet(this, _WebauthnPaneImpl_isEnabling, undefined, "f");
        resolve();
    }), "f");
}, _WebauthnPaneImpl_updateVisibility = function _WebauthnPaneImpl_updateVisibility(enabled) {
    this.contentElement.classList.toggle('enabled', enabled);
}, _WebauthnPaneImpl_removeAuthenticatorSections = function _WebauthnPaneImpl_removeAuthenticatorSections() {
    __classPrivateFieldGet(this, _WebauthnPaneImpl_authenticatorsView, "f").innerHTML = '';
    for (const dataGrid of this.dataGrids.values()) {
        dataGrid.asWidget().detach();
    }
    this.dataGrids.clear();
}, _WebauthnPaneImpl_handleCheckboxToggle = function _WebauthnPaneImpl_handleCheckboxToggle(e) {
    void __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_setVirtualAuthEnvEnabled).call(this, e.target.checked);
}, _WebauthnPaneImpl_updateEnabledTransportOptions = function _WebauthnPaneImpl_updateEnabledTransportOptions(enabledOptions) {
    if (!__classPrivateFieldGet(this, _WebauthnPaneImpl_transportSelect, "f")) {
        return;
    }
    const prevValue = __classPrivateFieldGet(this, _WebauthnPaneImpl_transportSelect, "f").value;
    __classPrivateFieldGet(this, _WebauthnPaneImpl_transportSelect, "f").removeChildren();
    for (const option of enabledOptions) {
        __classPrivateFieldGet(this, _WebauthnPaneImpl_transportSelect, "f").appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createOption(option, option, option));
    }
    // Make sure the currently selected value stays the same.
    __classPrivateFieldGet(this, _WebauthnPaneImpl_transportSelect, "f").value = prevValue;
    // If the new set does not include the previous value.
    if (!__classPrivateFieldGet(this, _WebauthnPaneImpl_transportSelect, "f").value) {
        // Select the first available value.
        __classPrivateFieldGet(this, _WebauthnPaneImpl_transportSelect, "f").selectedIndex = 0;
    }
}, _WebauthnPaneImpl_updateNewAuthenticatorSectionOptions = function _WebauthnPaneImpl_updateNewAuthenticatorSectionOptions() {
    if (!__classPrivateFieldGet(this, _WebauthnPaneImpl_protocolSelect, "f") || !this.residentKeyCheckbox || !__classPrivateFieldGet(this, _WebauthnPaneImpl_userVerificationCheckbox, "f") ||
        !this.largeBlobCheckbox) {
        return;
    }
    if (__classPrivateFieldGet(this, _WebauthnPaneImpl_protocolSelect, "f").value === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.WebAuthn.AuthenticatorProtocol.Ctap2) {
        this.residentKeyCheckbox.disabled = false;
        __classPrivateFieldGet(this, _WebauthnPaneImpl_userVerificationCheckbox, "f").disabled = false;
        this.largeBlobCheckbox.disabled = !this.residentKeyCheckbox.checked;
        if (this.largeBlobCheckbox.disabled) {
            this.largeBlobCheckbox.checked = false;
        }
        __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_updateEnabledTransportOptions).call(this, [
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.WebAuthn.AuthenticatorTransport.Usb,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.WebAuthn.AuthenticatorTransport.Ble,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.WebAuthn.AuthenticatorTransport.Nfc,
            // TODO (crbug.com/1034663): Toggle cable as option depending on if cablev2 flag is on.
            // Protocol.WebAuthn.AuthenticatorTransport.Cable,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.WebAuthn.AuthenticatorTransport.Internal,
        ]);
    }
    else {
        this.residentKeyCheckbox.checked = false;
        this.residentKeyCheckbox.disabled = true;
        __classPrivateFieldGet(this, _WebauthnPaneImpl_userVerificationCheckbox, "f").checked = false;
        __classPrivateFieldGet(this, _WebauthnPaneImpl_userVerificationCheckbox, "f").disabled = true;
        this.largeBlobCheckbox.checked = false;
        this.largeBlobCheckbox.disabled = true;
        __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_updateEnabledTransportOptions).call(this, [
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.WebAuthn.AuthenticatorTransport.Usb,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.WebAuthn.AuthenticatorTransport.Ble,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.WebAuthn.AuthenticatorTransport.Nfc,
        ]);
    }
}, _WebauthnPaneImpl_createNewAuthenticatorSection = function _WebauthnPaneImpl_createNewAuthenticatorSection() {
    const learnMoreLink = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.XLink.XLink.create('https://developers.google.com/web/updates/2018/05/webauthn', i18nString(UIStrings.learnMore), undefined, undefined, 'learn-more');
    __classPrivateFieldSet(this, _WebauthnPaneImpl_learnMoreView, this.contentElement.createChild('div', 'learn-more'), "f");
    __classPrivateFieldGet(this, _WebauthnPaneImpl_learnMoreView, "f").appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Fragment.html `
  <div>
  ${i18nString(UIStrings.useWebauthnForPhishingresistant)}<br /><br />
  ${learnMoreLink}
  </div>
  `);
    __classPrivateFieldSet(this, _WebauthnPaneImpl_newAuthenticatorSection, this.contentElement.createChild('div', 'new-authenticator-container'), "f");
    const newAuthenticatorTitle = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createLabel(i18nString(UIStrings.newAuthenticator), 'new-authenticator-title');
    __classPrivateFieldGet(this, _WebauthnPaneImpl_newAuthenticatorSection, "f").appendChild(newAuthenticatorTitle);
    __classPrivateFieldSet(this, _WebauthnPaneImpl_newAuthenticatorForm, __classPrivateFieldGet(this, _WebauthnPaneImpl_newAuthenticatorSection, "f").createChild('div', 'new-authenticator-form'), "f");
    __classPrivateFieldGet(this, _WebauthnPaneImpl_newAuthenticatorForm, "f").setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.section('new-authenticator')}`);
    const protocolGroup = __classPrivateFieldGet(this, _WebauthnPaneImpl_newAuthenticatorForm, "f").createChild('div', 'authenticator-option');
    const transportGroup = __classPrivateFieldGet(this, _WebauthnPaneImpl_newAuthenticatorForm, "f").createChild('div', 'authenticator-option');
    const residentKeyGroup = __classPrivateFieldGet(this, _WebauthnPaneImpl_newAuthenticatorForm, "f").createChild('div', 'authenticator-option');
    const userVerificationGroup = __classPrivateFieldGet(this, _WebauthnPaneImpl_newAuthenticatorForm, "f").createChild('div', 'authenticator-option');
    const largeBlobGroup = __classPrivateFieldGet(this, _WebauthnPaneImpl_newAuthenticatorForm, "f").createChild('div', 'authenticator-option');
    const addButtonGroup = __classPrivateFieldGet(this, _WebauthnPaneImpl_newAuthenticatorForm, "f").createChild('div', 'authenticator-option');
    const protocolSelectTitle = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createLabel(i18nString(UIStrings.protocol), 'authenticator-option-label');
    protocolGroup.appendChild(protocolSelectTitle);
    __classPrivateFieldSet(this, _WebauthnPaneImpl_protocolSelect, protocolGroup.createChild('select', 'chrome-select'), "f");
    __classPrivateFieldGet(this, _WebauthnPaneImpl_protocolSelect, "f").setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.dropDown('protocol').track({ change: true })}`);
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.bindLabelToControl(protocolSelectTitle, __classPrivateFieldGet(this, _WebauthnPaneImpl_protocolSelect, "f"));
    Object.values(PROTOCOL_AUTHENTICATOR_VALUES).sort().forEach((option) => {
        if (__classPrivateFieldGet(this, _WebauthnPaneImpl_protocolSelect, "f")) {
            __classPrivateFieldGet(this, _WebauthnPaneImpl_protocolSelect, "f").appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createOption(option, option, option));
        }
    });
    if (__classPrivateFieldGet(this, _WebauthnPaneImpl_protocolSelect, "f")) {
        __classPrivateFieldGet(this, _WebauthnPaneImpl_protocolSelect, "f").value = _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.WebAuthn.AuthenticatorProtocol.Ctap2;
    }
    const transportSelectTitle = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createLabel(i18nString(UIStrings.transport), 'authenticator-option-label');
    transportGroup.appendChild(transportSelectTitle);
    __classPrivateFieldSet(this, _WebauthnPaneImpl_transportSelect, transportGroup.createChild('select', 'chrome-select'), "f");
    __classPrivateFieldGet(this, _WebauthnPaneImpl_transportSelect, "f").setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.dropDown('transport').track({ change: true })}`);
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.bindLabelToControl(transportSelectTitle, __classPrivateFieldGet(this, _WebauthnPaneImpl_transportSelect, "f"));
    // transportSelect will be populated in updateNewAuthenticatorSectionOptions.
    __classPrivateFieldSet(this, _WebauthnPaneImpl_residentKeyCheckboxLabel, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.CheckboxLabel.create(i18nString(UIStrings.supportsResidentKeys), false, undefined, 'resident-key'), "f");
    __classPrivateFieldGet(this, _WebauthnPaneImpl_residentKeyCheckboxLabel, "f").textElement.classList.add('authenticator-option-label');
    residentKeyGroup.appendChild(__classPrivateFieldGet(this, _WebauthnPaneImpl_residentKeyCheckboxLabel, "f").textElement);
    this.residentKeyCheckbox = __classPrivateFieldGet(this, _WebauthnPaneImpl_residentKeyCheckboxLabel, "f").checkboxElement;
    this.residentKeyCheckbox.checked = false;
    this.residentKeyCheckbox.classList.add('authenticator-option-checkbox');
    residentKeyGroup.appendChild(__classPrivateFieldGet(this, _WebauthnPaneImpl_residentKeyCheckboxLabel, "f"));
    __classPrivateFieldSet(this, _WebauthnPaneImpl_userVerificationCheckboxLabel, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.CheckboxLabel.create(i18nString(UIStrings.supportsUserVerification), false, undefined, 'user-verification'), "f");
    __classPrivateFieldGet(this, _WebauthnPaneImpl_userVerificationCheckboxLabel, "f").textElement.classList.add('authenticator-option-label');
    userVerificationGroup.appendChild(__classPrivateFieldGet(this, _WebauthnPaneImpl_userVerificationCheckboxLabel, "f").textElement);
    __classPrivateFieldSet(this, _WebauthnPaneImpl_userVerificationCheckbox, __classPrivateFieldGet(this, _WebauthnPaneImpl_userVerificationCheckboxLabel, "f").checkboxElement, "f");
    __classPrivateFieldGet(this, _WebauthnPaneImpl_userVerificationCheckbox, "f").checked = false;
    __classPrivateFieldGet(this, _WebauthnPaneImpl_userVerificationCheckbox, "f").classList.add('authenticator-option-checkbox');
    userVerificationGroup.appendChild(__classPrivateFieldGet(this, _WebauthnPaneImpl_userVerificationCheckboxLabel, "f"));
    __classPrivateFieldSet(this, _WebauthnPaneImpl_largeBlobCheckboxLabel, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.CheckboxLabel.create(i18nString(UIStrings.supportsLargeBlob), false, undefined, 'large-blob'), "f");
    __classPrivateFieldGet(this, _WebauthnPaneImpl_largeBlobCheckboxLabel, "f").textElement.classList.add('authenticator-option-label');
    largeBlobGroup.appendChild(__classPrivateFieldGet(this, _WebauthnPaneImpl_largeBlobCheckboxLabel, "f").textElement);
    this.largeBlobCheckbox = __classPrivateFieldGet(this, _WebauthnPaneImpl_largeBlobCheckboxLabel, "f").checkboxElement;
    this.largeBlobCheckbox.checked = false;
    this.largeBlobCheckbox.classList.add('authenticator-option-checkbox');
    this.largeBlobCheckbox.name = 'large-blob-checkbox';
    largeBlobGroup.appendChild(__classPrivateFieldGet(this, _WebauthnPaneImpl_largeBlobCheckboxLabel, "f"));
    this.addAuthenticatorButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextButton(i18nString(UIStrings.add), __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_handleAddAuthenticatorButton).bind(this), { jslogContext: 'webauthn.add-authenticator' });
    addButtonGroup.createChild('div', 'authenticator-option-label');
    addButtonGroup.appendChild(this.addAuthenticatorButton);
    const addAuthenticatorTitle = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createLabel(i18nString(UIStrings.addAuthenticator), '');
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.bindLabelToControl(addAuthenticatorTitle, this.addAuthenticatorButton);
    __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_updateNewAuthenticatorSectionOptions).call(this);
    if (__classPrivateFieldGet(this, _WebauthnPaneImpl_protocolSelect, "f")) {
        __classPrivateFieldGet(this, _WebauthnPaneImpl_protocolSelect, "f").addEventListener('change', __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_updateNewAuthenticatorSectionOptions).bind(this));
    }
    if (this.residentKeyCheckbox) {
        this.residentKeyCheckbox.addEventListener('change', __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_updateNewAuthenticatorSectionOptions).bind(this));
    }
}, _WebauthnPaneImpl_handleAddAuthenticatorButton = async function _WebauthnPaneImpl_handleAddAuthenticatorButton() {
    const options = __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_createOptionsFromCurrentInputs).call(this);
    if (__classPrivateFieldGet(this, _WebauthnPaneImpl_model, "f")) {
        const authenticatorId = await __classPrivateFieldGet(this, _WebauthnPaneImpl_model, "f").addAuthenticator(options);
        const availableAuthenticators = __classPrivateFieldGet(this, _WebauthnPaneImpl_availableAuthenticatorSetting, "f").get();
        availableAuthenticators.push({ authenticatorId, active: true, ...options });
        __classPrivateFieldGet(this, _WebauthnPaneImpl_availableAuthenticatorSetting, "f").set(availableAuthenticators.map(a => ({ ...a, active: a.authenticatorId === authenticatorId })));
        const section = await __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_addAuthenticatorSection).call(this, authenticatorId, options);
        const mediaQueryList = window.matchMedia('(prefers-reduced-motion: reduce)');
        const prefersReducedMotion = mediaQueryList.matches;
        section.scrollIntoView({ block: 'start', behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
}, _WebauthnPaneImpl_addAuthenticatorSection = async function _WebauthnPaneImpl_addAuthenticatorSection(authenticatorId, options) {
    const section = document.createElement('div');
    section.classList.add('authenticator-section');
    section.setAttribute('data-authenticator-id', authenticatorId);
    section.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.section('authenticator')}`);
    __classPrivateFieldGet(this, _WebauthnPaneImpl_authenticatorsView, "f").appendChild(section);
    const headerElement = section.createChild('div', 'authenticator-section-header');
    const titleElement = headerElement.createChild('div', 'authenticator-section-title');
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsHeading(titleElement, 2);
    await __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_clearActiveAuthenticator).call(this);
    const activeButtonContainer = headerElement.createChild('div', 'active-button-container');
    const activeLabel = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createRadioLabel(`active-authenticator-${authenticatorId}`, i18nString(UIStrings.active));
    activeLabel.radioElement.addEventListener('change', __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_setActiveAuthenticator).bind(this, authenticatorId));
    activeButtonContainer.appendChild(activeLabel);
    activeLabel.radioElement.checked = true;
    __classPrivateFieldSet(this, _WebauthnPaneImpl_activeAuthId, authenticatorId, "f"); // Newly added authenticator is automatically set as active.
    const removeButton = headerElement.createChild('button', 'text-button');
    removeButton.textContent = i18nString(UIStrings.remove);
    removeButton.addEventListener('click', __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_removeAuthenticator).bind(this, authenticatorId));
    removeButton.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.action('webauthn.remove-authenticator').track({ click: true })}`);
    const toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar('edit-name-toolbar', titleElement);
    const editName = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton(i18nString(UIStrings.editName), 'edit', undefined, 'edit-name');
    const saveName = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton(i18nString(UIStrings.saveName), 'checkmark', undefined, 'save-name');
    saveName.setVisible(false);
    const nameField = titleElement.createChild('input', 'authenticator-name-field');
    nameField.placeholder = i18nString(UIStrings.enterNewName);
    nameField.disabled = true;
    nameField.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.textField('name').track({ keydown: 'Enter', change: true })}`);
    const userFriendlyName = authenticatorId.slice(-5); // User friendly name defaults to last 5 chars of UUID.
    nameField.value = i18nString(UIStrings.authenticatorS, { PH1: userFriendlyName });
    __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_updateActiveLabelTitle).call(this, activeLabel, nameField.value);
    editName.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton.Events.Click, () => __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_handleEditNameButton).call(this, titleElement, nameField, editName, saveName));
    saveName.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton.Events.Click, () => __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_handleSaveNameButton).call(this, titleElement, nameField, editName, saveName, activeLabel));
    nameField.addEventListener('focusout', () => __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_handleSaveNameButton).call(this, titleElement, nameField, editName, saveName, activeLabel));
    nameField.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_handleSaveNameButton).call(this, titleElement, nameField, editName, saveName, activeLabel);
        }
    });
    toolbar.appendToolbarItem(editName);
    toolbar.appendToolbarItem(saveName);
    __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_createAuthenticatorFields).call(this, section, authenticatorId, options);
    const label = document.createElement('div');
    label.classList.add('credentials-title');
    label.textContent = i18nString(UIStrings.credentials);
    section.appendChild(label);
    const dataGrid = __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_createCredentialsDataGrid).call(this, authenticatorId);
    dataGrid.asWidget().show(section);
    if (__classPrivateFieldGet(this, _WebauthnPaneImpl_model, "f")) {
        __classPrivateFieldGet(this, _WebauthnPaneImpl_model, "f").addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.WebAuthnModel.Events.CredentialAdded, __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_addCredential).bind(this, authenticatorId));
        __classPrivateFieldGet(this, _WebauthnPaneImpl_model, "f").addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.WebAuthnModel.Events.CredentialAsserted, __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_updateCredential).bind(this, authenticatorId));
    }
    return section;
}, _WebauthnPaneImpl_exportCredential = function _WebauthnPaneImpl_exportCredential(credential) {
    let pem = PRIVATE_KEY_HEADER;
    for (let i = 0; i < credential.privateKey.length; i += 64) {
        pem += credential.privateKey.substring(i, i + 64) + '\n';
    }
    pem += PRIVATE_KEY_FOOTER;
    const link = document.createElement('a');
    link.download = i18nString(UIStrings.privateKeypem);
    link.href = 'data:application/x-pem-file,' + encodeURIComponent(pem);
    link.click();
}, _WebauthnPaneImpl_removeCredential = async function _WebauthnPaneImpl_removeCredential(authenticatorId, credentialId) {
    const dataGrid = this.dataGrids.get(authenticatorId);
    if (!dataGrid) {
        return;
    }
    // @ts-ignore dataGrid node type is indeterminate.
    dataGrid.rootNode()
        .children.find((n) => n.data.credentialId === credentialId)
        .remove();
    if (!dataGrid.rootNode().children.length) {
        dataGrid.rootNode().appendChild(new EmptyDataGridNode());
    }
    if (__classPrivateFieldGet(this, _WebauthnPaneImpl_model, "f")) {
        await __classPrivateFieldGet(this, _WebauthnPaneImpl_model, "f").removeCredential(authenticatorId, credentialId);
    }
}, _WebauthnPaneImpl_createAuthenticatorFields = function _WebauthnPaneImpl_createAuthenticatorFields(section, authenticatorId, options) {
    const sectionFields = section.createChild('div', 'authenticator-fields');
    const uuidField = sectionFields.createChild('div', 'authenticator-field');
    const protocolField = sectionFields.createChild('div', 'authenticator-field');
    const transportField = sectionFields.createChild('div', 'authenticator-field');
    const srkField = sectionFields.createChild('div', 'authenticator-field');
    const slbField = sectionFields.createChild('div', 'authenticator-field');
    const suvField = sectionFields.createChild('div', 'authenticator-field');
    uuidField.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createLabel(i18nString(UIStrings.uuid), 'authenticator-option-label'));
    protocolField.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createLabel(i18nString(UIStrings.protocol), 'authenticator-option-label'));
    transportField.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createLabel(i18nString(UIStrings.transport), 'authenticator-option-label'));
    srkField.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createLabel(i18nString(UIStrings.supportsResidentKeys), 'authenticator-option-label'));
    slbField.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createLabel(i18nString(UIStrings.supportsLargeBlob), 'authenticator-option-label'));
    suvField.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createLabel(i18nString(UIStrings.supportsUserVerification), 'authenticator-option-label'));
    uuidField.createChild('div', 'authenticator-field-value').textContent = authenticatorId;
    protocolField.createChild('div', 'authenticator-field-value').textContent = options.protocol;
    transportField.createChild('div', 'authenticator-field-value').textContent = options.transport;
    srkField.createChild('div', 'authenticator-field-value').textContent =
        options.hasResidentKey ? i18nString(UIStrings.yes) : i18nString(UIStrings.no);
    slbField.createChild('div', 'authenticator-field-value').textContent =
        options.hasLargeBlob ? i18nString(UIStrings.yes) : i18nString(UIStrings.no);
    suvField.createChild('div', 'authenticator-field-value').textContent =
        options.hasUserVerification ? i18nString(UIStrings.yes) : i18nString(UIStrings.no);
}, _WebauthnPaneImpl_handleEditNameButton = function _WebauthnPaneImpl_handleEditNameButton(titleElement, nameField, editName, saveName) {
    nameField.disabled = false;
    titleElement.classList.add('editing-name');
    nameField.focus();
    saveName.setVisible(true);
    editName.setVisible(false);
}, _WebauthnPaneImpl_handleSaveNameButton = function _WebauthnPaneImpl_handleSaveNameButton(titleElement, nameField, editName, saveName, activeLabel) {
    const name = nameField.value;
    if (!name) {
        return;
    }
    nameField.disabled = true;
    titleElement.classList.remove('editing-name');
    editName.setVisible(true);
    saveName.setVisible(false);
    __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_updateActiveLabelTitle).call(this, activeLabel, name);
}, _WebauthnPaneImpl_updateActiveLabelTitle = function _WebauthnPaneImpl_updateActiveLabelTitle(activeLabel, authenticatorName) {
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install(activeLabel.radioElement, i18nString(UIStrings.setSAsTheActiveAuthenticator, { PH1: authenticatorName }));
}, _WebauthnPaneImpl_removeAuthenticator = function _WebauthnPaneImpl_removeAuthenticator(authenticatorId) {
    if (__classPrivateFieldGet(this, _WebauthnPaneImpl_authenticatorsView, "f")) {
        const child = __classPrivateFieldGet(this, _WebauthnPaneImpl_authenticatorsView, "f").querySelector(`[data-authenticator-id=${CSS.escape(authenticatorId)}]`);
        if (child) {
            child.remove();
        }
    }
    const dataGrid = this.dataGrids.get(authenticatorId);
    if (dataGrid) {
        dataGrid.asWidget().detach();
        this.dataGrids.delete(authenticatorId);
    }
    if (__classPrivateFieldGet(this, _WebauthnPaneImpl_model, "f")) {
        void __classPrivateFieldGet(this, _WebauthnPaneImpl_model, "f").removeAuthenticator(authenticatorId);
    }
    // Update available authenticator setting.
    const prevAvailableAuthenticators = __classPrivateFieldGet(this, _WebauthnPaneImpl_availableAuthenticatorSetting, "f").get();
    const newAvailableAuthenticators = prevAvailableAuthenticators.filter(a => a.authenticatorId !== authenticatorId);
    __classPrivateFieldGet(this, _WebauthnPaneImpl_availableAuthenticatorSetting, "f").set(newAvailableAuthenticators);
    if (__classPrivateFieldGet(this, _WebauthnPaneImpl_activeAuthId, "f") === authenticatorId) {
        const availableAuthenticatorIds = Array.from(this.dataGrids.keys());
        if (availableAuthenticatorIds.length) {
            void __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_setActiveAuthenticator).call(this, availableAuthenticatorIds[0]);
        }
        else {
            __classPrivateFieldSet(this, _WebauthnPaneImpl_activeAuthId, null, "f");
        }
    }
}, _WebauthnPaneImpl_createOptionsFromCurrentInputs = function _WebauthnPaneImpl_createOptionsFromCurrentInputs() {
    // TODO(crbug.com/1034663): Add optionality for isUserVerified param.
    if (!__classPrivateFieldGet(this, _WebauthnPaneImpl_protocolSelect, "f") || !__classPrivateFieldGet(this, _WebauthnPaneImpl_transportSelect, "f") || !this.residentKeyCheckbox ||
        !__classPrivateFieldGet(this, _WebauthnPaneImpl_userVerificationCheckbox, "f") || !this.largeBlobCheckbox) {
        throw new Error('Unable to create options from current inputs');
    }
    return {
        protocol: __classPrivateFieldGet(this, _WebauthnPaneImpl_protocolSelect, "f").options[__classPrivateFieldGet(this, _WebauthnPaneImpl_protocolSelect, "f").selectedIndex].value,
        ctap2Version: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.WebAuthn.Ctap2Version.Ctap2_1,
        transport: __classPrivateFieldGet(this, _WebauthnPaneImpl_transportSelect, "f").options[__classPrivateFieldGet(this, _WebauthnPaneImpl_transportSelect, "f").selectedIndex].value,
        hasResidentKey: this.residentKeyCheckbox.checked,
        hasUserVerification: __classPrivateFieldGet(this, _WebauthnPaneImpl_userVerificationCheckbox, "f").checked,
        hasLargeBlob: this.largeBlobCheckbox.checked,
        automaticPresenceSimulation: true,
        isUserVerified: true,
    };
}, _WebauthnPaneImpl_setActiveAuthenticator = 
/**
 * Sets the given authenticator as active.
 * Note that a newly added authenticator will automatically be set as active.
 */
async function _WebauthnPaneImpl_setActiveAuthenticator(authenticatorId) {
    await __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_clearActiveAuthenticator).call(this);
    if (__classPrivateFieldGet(this, _WebauthnPaneImpl_model, "f")) {
        await __classPrivateFieldGet(this, _WebauthnPaneImpl_model, "f").setAutomaticPresenceSimulation(authenticatorId, true);
    }
    __classPrivateFieldSet(this, _WebauthnPaneImpl_activeAuthId, authenticatorId, "f");
    const prevAvailableAuthenticators = __classPrivateFieldGet(this, _WebauthnPaneImpl_availableAuthenticatorSetting, "f").get();
    const newAvailableAuthenticators = prevAvailableAuthenticators.map(a => ({ ...a, active: a.authenticatorId === authenticatorId }));
    __classPrivateFieldGet(this, _WebauthnPaneImpl_availableAuthenticatorSetting, "f").set(newAvailableAuthenticators);
    __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_updateActiveButtons).call(this);
}, _WebauthnPaneImpl_updateActiveButtons = function _WebauthnPaneImpl_updateActiveButtons() {
    const authenticators = __classPrivateFieldGet(this, _WebauthnPaneImpl_authenticatorsView, "f").getElementsByClassName('authenticator-section');
    Array.from(authenticators).forEach((authenticator) => {
        const button = authenticator.querySelector('input.dt-radio-button');
        if (!button) {
            return;
        }
        button.checked = authenticator.dataset.authenticatorId === __classPrivateFieldGet(this, _WebauthnPaneImpl_activeAuthId, "f");
    });
}, _WebauthnPaneImpl_clearActiveAuthenticator = async function _WebauthnPaneImpl_clearActiveAuthenticator() {
    if (__classPrivateFieldGet(this, _WebauthnPaneImpl_activeAuthId, "f") && __classPrivateFieldGet(this, _WebauthnPaneImpl_model, "f")) {
        await __classPrivateFieldGet(this, _WebauthnPaneImpl_model, "f").setAutomaticPresenceSimulation(__classPrivateFieldGet(this, _WebauthnPaneImpl_activeAuthId, "f"), false);
    }
    __classPrivateFieldSet(this, _WebauthnPaneImpl_activeAuthId, null, "f");
    __classPrivateFieldGet(this, _WebauthnPaneImpl_instances, "m", _WebauthnPaneImpl_updateActiveButtons).call(this);
};


/***/ })

}]);