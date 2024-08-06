"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_webauthn_WebauthnPane_js"], {
"./panels/webauthn/WebauthnPane.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WebauthnPaneImpl: function() { return WebauthnPaneImpl; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _webauthnPane_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./webauthnPane.css.js */ "./panels/webauthn/webauthnPane.css.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
}
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}
function _class_private_method_init(obj, privateSet) {
    _check_private_redeclaration(obj, privateSet);
    privateSet.add(obj);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  <div>\n  ",
        "<br /><br />\n  ",
        "\n  </div>\n  "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}








var UIStrings = {
    /**
     *@description Label for button that allows user to download the private key related to a credential.
     */ export: 'Export',
    /**
     *@description Label for an item to remove something
     */ remove: 'Remove',
    /**
     *@description Label for empty credentials table.
     *@example {navigator.credentials.create()} PH1
     */ noCredentialsTryCallingSFromYour: 'No credentials. Try calling {PH1} from your website.',
    /**
     *@description Label for checkbox to toggle the virtual authenticator environment allowing user to interact with software-based virtual authenticators.
     */ enableVirtualAuthenticator: 'Enable virtual authenticator environment',
    /**
     *@description Label for ID field for credentials.
     */ id: 'ID',
    /**
     *@description Label for field that describes whether a credential is a resident credential.
     */ isResident: 'Is Resident',
    /**
     *@description Label for credential field that represents the Relying Party ID that the credential is scoped to.
     */ rpId: 'RP ID',
    /**
     *@description Label for a column in a table. A field/unique ID that represents the user a credential is mapped to.
     */ userHandle: 'User Handle',
    /**
     *@description Label for signature counter field for credentials which represents the number of successful assertions.
     * See https://w3c.github.io/webauthn/#signature-counter.
     */ signCount: 'Signature Count',
    /**
     *@description Label for column with actions for credentials.
     */ actions: 'Actions',
    /**
     *@description Title for the table that holds the credentials that a authenticator has registered.
     */ credentials: 'Credentials',
    /**
     *@description Label for the learn more link that is shown before the virtual environment is enabled.
     */ useWebauthnForPhishingresistant: 'Use WebAuthn for phishing-resistant authentication',
    /**
     *@description Text that is usually a hyperlink to more documentation
     */ learnMore: 'Learn more',
    /**
     *@description Title for section of interface that allows user to add a new virtual authenticator.
     */ newAuthenticator: 'New authenticator',
    /**
     *@description Text for security or network protocol
     */ protocol: 'Protocol',
    /**
     *@description Label for input to select which transport option to use on virtual authenticators, e.g. USB or Bluetooth.
     */ transport: 'Transport',
    /**
     *@description Label for checkbox that toggles resident key support on virtual authenticators.
     */ supportsResidentKeys: 'Supports resident keys',
    /**
     *@description Label for checkbox that toggles large blob support on virtual authenticators. Large blobs are opaque data associated
     * with a WebAuthn credential that a website can store, like an SSH certificate or a symmetric encryption key.
     * See https://w3c.github.io/webauthn/#sctn-large-blob-extension
     */ supportsLargeBlob: 'Supports large blob',
    /**
     *@description Text to add something
     */ add: 'Add',
    /**
     *@description Label for button to add a new virtual authenticator.
     */ addAuthenticator: 'Add authenticator',
    /**
     *@description Label for radio button that toggles whether an authenticator is active.
     */ active: 'Active',
    /**
     *@description Title for button that enables user to customize name of authenticator.
     */ editName: 'Edit name',
    /**
     *@description Placeholder for the input box to customize name of authenticator.
     */ enterNewName: 'Enter new name',
    /**
     *@description Title for button that enables user to save name of authenticator after editing it.
     */ saveName: 'Save name',
    /**
     *@description Title for a user-added virtual authenticator which is uniquely identified with its AUTHENTICATORID.
     *@example {8c7873be-0b13-4996-a794-1521331bbd96} PH1
     */ authenticatorS: 'Authenticator {PH1}',
    /**
     *@description Name for generated file which user can download. A private key is a secret code which enables encoding and decoding of a credential. .pem is the file extension.
     */ privateKeypem: 'Private key.pem',
    /**
     *@description Label for field that holds an authenticator's universally unique identifier (UUID).
     */ uuid: 'UUID',
    /**
     *@description Label for checkbox that toggles user verification support on virtual authenticators.
     */ supportsUserVerification: 'Supports user verification',
    /**
     *@description Text in Timeline indicating that input has happened recently
     */ yes: 'Yes',
    /**
     *@description Text in Timeline indicating that input has not happened recently
     */ no: 'No',
    /**
     *@description Title of radio button that sets an authenticator as active.
     *@example {Authenticator ABCDEF} PH1
     */ setSAsTheActiveAuthenticator: 'Set {PH1} as the active authenticator'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/webauthn/WebauthnPane.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var DataGridNode = /*#__PURE__*/ function(_DataGrid_DataGrid_DataGridNode) {
    "use strict";
    _inherits(DataGridNode, _DataGrid_DataGrid_DataGridNode);
    var _super = _create_super(DataGridNode);
    function DataGridNode(credential) {
        _class_call_check(this, DataGridNode);
        var _this;
        _this = _super.call(this, credential);
        _define_property(_assert_this_initialized(_this), "credential", void 0);
        _this.credential = credential;
        return _this;
    }
    _create_class(DataGridNode, [
        {
            key: "nodeSelfHeight",
            value: function nodeSelfHeight() {
                return 24;
            }
        },
        {
            key: "createCell",
            value: function createCell(columnId) {
                var _this = this;
                var cell = _get(_get_prototype_of(DataGridNode.prototype), "createCell", this).call(this, columnId);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(cell, cell.textContent || '');
                if (columnId !== 'actions') {
                    return cell;
                }
                var exportButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createTextButton(i18nString(UIStrings.export), function() {
                    if (_this.dataGrid) {
                        _this.dataGrid.dispatchEventToListeners("ExportCredential" /* Events.ExportCredential */ , _this.credential);
                    }
                }, {
                    jslogContext: 'webauthn.export-credential'
                });
                cell.appendChild(exportButton);
                var removeButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createTextButton(i18nString(UIStrings.remove), function() {
                    if (_this.dataGrid) {
                        _this.dataGrid.dispatchEventToListeners("RemoveCredential" /* Events.RemoveCredential */ , _this.credential);
                    }
                }, {
                    jslogContext: 'webauthn.remove-credential'
                });
                cell.appendChild(removeButton);
                return cell;
            }
        }
    ]);
    return DataGridNode;
}(_ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGrid.DataGridNode);
var WebauthnDataGridBase = /*#__PURE__*/ function(_DataGrid_DataGrid_DataGridImpl) {
    "use strict";
    _inherits(WebauthnDataGridBase, _DataGrid_DataGrid_DataGridImpl);
    var _super = _create_super(WebauthnDataGridBase);
    function WebauthnDataGridBase() {
        _class_call_check(this, WebauthnDataGridBase);
        return _super.apply(this, arguments);
    }
    return WebauthnDataGridBase;
}(_ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGrid.DataGridImpl);
var WebauthnDataGrid = /*#__PURE__*/ function(_Common_ObjectWrapper_eventMixin) {
    "use strict";
    _inherits(WebauthnDataGrid, _Common_ObjectWrapper_eventMixin);
    var _super = _create_super(WebauthnDataGrid);
    function WebauthnDataGrid() {
        _class_call_check(this, WebauthnDataGrid);
        return _super.apply(this, arguments);
    }
    return WebauthnDataGrid;
}(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(WebauthnDataGridBase));
var EmptyDataGridNode = /*#__PURE__*/ function(_DataGrid_DataGrid_DataGridNode) {
    "use strict";
    _inherits(EmptyDataGridNode, _DataGrid_DataGrid_DataGridNode);
    var _super = _create_super(EmptyDataGridNode);
    function EmptyDataGridNode() {
        _class_call_check(this, EmptyDataGridNode);
        return _super.apply(this, arguments);
    }
    _create_class(EmptyDataGridNode, [
        {
            key: "createCells",
            value: function createCells(element) {
                element.removeChildren();
                var td = this.createTDWithClass("center" /* DataGrid.DataGrid.Align.Center */ );
                if (this.dataGrid) {
                    td.colSpan = this.dataGrid.visibleColumnsArray.length;
                }
                var code = document.createElement('span', {
                    is: 'source-code'
                });
                code.textContent = 'navigator.credentials.create()';
                code.classList.add('code');
                var message = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getFormatLocalizedString(str_, UIStrings.noCredentialsTryCallingSFromYour, {
                    PH1: code
                });
                td.appendChild(message);
                element.appendChild(td);
            }
        }
    ]);
    return EmptyDataGridNode;
}(_ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGrid.DataGridNode);
// We extrapolate this variable as otherwise git detects a private key, even though we
// perform string manipulation. If we extract the name, then the regex doesn't match
// and we can upload as expected.
var PRIVATE_NAME = 'PRIVATE';
var PRIVATE_KEY_HEADER = "-----BEGIN ".concat(PRIVATE_NAME, " KEY-----\n");
var PRIVATE_KEY_FOOTER = "-----END ".concat(PRIVATE_NAME, " KEY-----");
var PROTOCOL_AUTHENTICATOR_VALUES = {
    Ctap2: "ctap2" /* Protocol.WebAuthn.AuthenticatorProtocol.Ctap2 */ ,
    U2f: "u2f" /* Protocol.WebAuthn.AuthenticatorProtocol.U2f */ 
};
var _activeAuthId = /*#__PURE__*/ new WeakMap(), _hasBeenEnabled = /*#__PURE__*/ new WeakMap(), _enableCheckbox = /*#__PURE__*/ new WeakMap(), _availableAuthenticatorSetting = /*#__PURE__*/ new WeakMap(), _model = /*#__PURE__*/ new WeakMap(), _authenticatorsView = /*#__PURE__*/ new WeakMap(), _topToolbarContainer = /*#__PURE__*/ new WeakMap(), _topToolbar = /*#__PURE__*/ new WeakMap(), _learnMoreView = /*#__PURE__*/ new WeakMap(), _newAuthenticatorSection = /*#__PURE__*/ new WeakMap(), _newAuthenticatorForm = /*#__PURE__*/ new WeakMap(), _protocolSelect = /*#__PURE__*/ new WeakMap(), _transportSelect = /*#__PURE__*/ new WeakMap(), _residentKeyCheckboxLabel = /*#__PURE__*/ new WeakMap(), _userVerificationCheckboxLabel = /*#__PURE__*/ new WeakMap(), _userVerificationCheckbox = /*#__PURE__*/ new WeakMap(), _largeBlobCheckboxLabel = /*#__PURE__*/ new WeakMap(), _isEnabling = /*#__PURE__*/ new WeakMap(), _loadInitialAuthenticators = /*#__PURE__*/ new WeakSet(), _createToolbar = /*#__PURE__*/ new WeakSet(), _createCredentialsDataGrid = /*#__PURE__*/ new WeakSet(), _handleExportCredential = /*#__PURE__*/ new WeakSet(), _handleRemoveCredential = /*#__PURE__*/ new WeakSet(), _addCredential = /*#__PURE__*/ new WeakSet(), _updateCredential = /*#__PURE__*/ new WeakSet(), _setVirtualAuthEnvEnabled = /*#__PURE__*/ new WeakSet(), _updateVisibility = /*#__PURE__*/ new WeakSet(), _removeAuthenticatorSections = /*#__PURE__*/ new WeakSet(), _handleCheckboxToggle = /*#__PURE__*/ new WeakSet(), _updateEnabledTransportOptions = /*#__PURE__*/ new WeakSet(), _updateNewAuthenticatorSectionOptions = /*#__PURE__*/ new WeakSet(), _createNewAuthenticatorSection = /*#__PURE__*/ new WeakSet(), _handleAddAuthenticatorButton = /*#__PURE__*/ new WeakSet(), _addAuthenticatorSection = /*#__PURE__*/ new WeakSet(), _exportCredential = /*#__PURE__*/ new WeakSet(), _removeCredential = /*#__PURE__*/ new WeakSet(), /**
     * Creates the fields describing the authenticator in the front end.
     */ _createAuthenticatorFields = /*#__PURE__*/ new WeakSet(), _handleEditNameButton = /*#__PURE__*/ new WeakSet(), _handleSaveNameButton = /*#__PURE__*/ new WeakSet(), _updateActiveLabelTitle = /*#__PURE__*/ new WeakSet(), /**
     * Removes both the authenticator and its respective UI element.
     */ _removeAuthenticator = /*#__PURE__*/ new WeakSet(), _createOptionsFromCurrentInputs = /*#__PURE__*/ new WeakSet(), _setActiveAuthenticator = /*#__PURE__*/ new WeakSet(), _updateActiveButtons = /*#__PURE__*/ new WeakSet(), _clearActiveAuthenticator = /*#__PURE__*/ new WeakSet();
var WebauthnPaneImpl = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(WebauthnPaneImpl, _UI_Widget_VBox);
    var _super = _create_super(WebauthnPaneImpl);
    function WebauthnPaneImpl() {
        _class_call_check(this, WebauthnPaneImpl);
        var _this;
        _this = _super.call(this, true);
        _class_private_method_init(_assert_this_initialized(_this), _loadInitialAuthenticators);
        _class_private_method_init(_assert_this_initialized(_this), _createToolbar);
        _class_private_method_init(_assert_this_initialized(_this), _createCredentialsDataGrid);
        _class_private_method_init(_assert_this_initialized(_this), _handleExportCredential);
        _class_private_method_init(_assert_this_initialized(_this), _handleRemoveCredential);
        _class_private_method_init(_assert_this_initialized(_this), _addCredential);
        _class_private_method_init(_assert_this_initialized(_this), _updateCredential);
        _class_private_method_init(_assert_this_initialized(_this), _setVirtualAuthEnvEnabled);
        _class_private_method_init(_assert_this_initialized(_this), _updateVisibility);
        _class_private_method_init(_assert_this_initialized(_this), _removeAuthenticatorSections);
        _class_private_method_init(_assert_this_initialized(_this), _handleCheckboxToggle);
        _class_private_method_init(_assert_this_initialized(_this), _updateEnabledTransportOptions);
        _class_private_method_init(_assert_this_initialized(_this), _updateNewAuthenticatorSectionOptions);
        _class_private_method_init(_assert_this_initialized(_this), _createNewAuthenticatorSection);
        _class_private_method_init(_assert_this_initialized(_this), _handleAddAuthenticatorButton);
        _class_private_method_init(_assert_this_initialized(_this), _addAuthenticatorSection);
        _class_private_method_init(_assert_this_initialized(_this), _exportCredential);
        _class_private_method_init(_assert_this_initialized(_this), _removeCredential);
        _class_private_method_init(_assert_this_initialized(_this), _createAuthenticatorFields);
        _class_private_method_init(_assert_this_initialized(_this), _handleEditNameButton);
        _class_private_method_init(_assert_this_initialized(_this), _handleSaveNameButton);
        _class_private_method_init(_assert_this_initialized(_this), _updateActiveLabelTitle);
        _class_private_method_init(_assert_this_initialized(_this), _removeAuthenticator);
        _class_private_method_init(_assert_this_initialized(_this), _createOptionsFromCurrentInputs);
        /**
     * Sets the given authenticator as active.
     * Note that a newly added authenticator will automatically be set as active.
     */ _class_private_method_init(_assert_this_initialized(_this), _setActiveAuthenticator);
        _class_private_method_init(_assert_this_initialized(_this), _updateActiveButtons);
        _class_private_method_init(_assert_this_initialized(_this), _clearActiveAuthenticator);
        _class_private_field_init(_assert_this_initialized(_this), _activeAuthId, {
            writable: true,
            value: null
        });
        _class_private_field_init(_assert_this_initialized(_this), _hasBeenEnabled, {
            writable: true,
            value: false
        });
        _define_property(_assert_this_initialized(_this), "dataGrids", new Map());
        _class_private_field_init(_assert_this_initialized(_this), _enableCheckbox, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _availableAuthenticatorSetting, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _model, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _authenticatorsView, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _topToolbarContainer, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _topToolbar, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _learnMoreView, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _newAuthenticatorSection, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _newAuthenticatorForm, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _protocolSelect, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _transportSelect, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _residentKeyCheckboxLabel, {
            writable: true,
            value: void 0
        });
        _define_property(_assert_this_initialized(_this), "residentKeyCheckbox", void 0);
        _class_private_field_init(_assert_this_initialized(_this), _userVerificationCheckboxLabel, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _userVerificationCheckbox, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _largeBlobCheckboxLabel, {
            writable: true,
            value: void 0
        });
        _define_property(_assert_this_initialized(_this), "largeBlobCheckbox", void 0);
        _define_property(_assert_this_initialized(_this), "addAuthenticatorButton", void 0);
        _class_private_field_init(_assert_this_initialized(_this), _isEnabling, {
            writable: true,
            value: void 0
        });
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.panel('webauthn').track({
            resize: true
        })));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.WebAuthnModel.WebAuthnModel, _assert_this_initialized(_this), {
            scoped: true
        });
        _this.contentElement.classList.add('webauthn-pane');
        _class_private_field_set(_assert_this_initialized(_this), _availableAuthenticatorSetting, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('webauthn-authenticators', []));
        _class_private_method_get(_this, _createToolbar, createToolbar).call(_assert_this_initialized(_this));
        _class_private_field_set(_assert_this_initialized(_this), _authenticatorsView, _this.contentElement.createChild('div', 'authenticators-view'));
        _class_private_method_get(_this, _createNewAuthenticatorSection, createNewAuthenticatorSection).call(_assert_this_initialized(_this));
        _class_private_method_get(_this, _updateVisibility, updateVisibility).call(_assert_this_initialized(_this), false);
        return _this;
    }
    _create_class(WebauthnPaneImpl, [
        {
            key: "modelAdded",
            value: function modelAdded(model) {
                if (model.target() === model.target().outermostTarget()) {
                    _class_private_field_set(this, _model, model);
                }
            }
        },
        {
            key: "modelRemoved",
            value: function modelRemoved(model) {
                if (model.target() === model.target().outermostTarget()) {
                    _class_private_field_set(this, _model, undefined);
                }
            }
        },
        {
            key: "ownerViewDisposed",
            value: function ownerViewDisposed() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (_class_private_field_get(_this, _enableCheckbox)) {
                                    _class_private_field_get(_this, _enableCheckbox).setChecked(false);
                                }
                                return [
                                    4,
                                    _class_private_method_get(_this, _setVirtualAuthEnvEnabled, setVirtualAuthEnvEnabled).call(_this, false)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(WebauthnPaneImpl.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _webauthnPane_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]
                ]);
            }
        }
    ]);
    return WebauthnPaneImpl;
} //# sourceMappingURL=WebauthnPane.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox);
function loadInitialAuthenticators() {
    return _loadInitialAuthenticators1.apply(this, arguments);
}
function _loadInitialAuthenticators1() {
    _loadInitialAuthenticators1 = _async_to_generator(function() {
        var activeAuthenticatorId, availableAuthenticators, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, options, authenticatorId, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    activeAuthenticatorId = null;
                    availableAuthenticators = _class_private_field_get(this, _availableAuthenticatorSetting).get();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        6,
                        7,
                        8
                    ]);
                    _iterator = availableAuthenticators[Symbol.iterator]();
                    _state.label = 2;
                case 2:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        5
                    ];
                    options = _step.value;
                    if (!_class_private_field_get(this, _model)) {
                        return [
                            3,
                            4
                        ];
                    }
                    return [
                        4,
                        _class_private_field_get(this, _model).addAuthenticator(options)
                    ];
                case 3:
                    authenticatorId = _state.sent();
                    void _class_private_method_get(this, _addAuthenticatorSection, addAuthenticatorSection).call(this, authenticatorId, options);
                    // Update the authenticatorIds in the options.
                    options.authenticatorId = authenticatorId;
                    if (options.active) {
                        activeAuthenticatorId = authenticatorId;
                    }
                    _state.label = 4;
                case 4:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        2
                    ];
                case 5:
                    return [
                        3,
                        8
                    ];
                case 6:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        8
                    ];
                case 7:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 8:
                    // Update the settings to reflect the new authenticatorIds.
                    _class_private_field_get(this, _availableAuthenticatorSetting).set(availableAuthenticators);
                    if (activeAuthenticatorId) {
                        void _class_private_method_get(this, _setActiveAuthenticator, setActiveAuthenticator).call(this, activeAuthenticatorId);
                    }
                    return [
                        2
                    ];
            }
        });
    });
    return _loadInitialAuthenticators1.apply(this, arguments);
}
function createToolbar() {
    _class_private_field_set(this, _topToolbarContainer, this.contentElement.createChild('div', 'webauthn-toolbar-container'));
    _class_private_field_get(this, _topToolbarContainer).setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.toolbar()));
    _class_private_field_set(this, _topToolbar, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.Toolbar('webauthn-toolbar', _class_private_field_get(this, _topToolbarContainer)));
    var enableCheckboxTitle = i18nString(UIStrings.enableVirtualAuthenticator);
    _class_private_field_set(this, _enableCheckbox, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarCheckbox(enableCheckboxTitle, enableCheckboxTitle, _class_private_method_get(this, _handleCheckboxToggle, handleCheckboxToggle).bind(this)));
    _class_private_field_get(this, _enableCheckbox).inputElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.toggle('virtual-authenticators').track({
        click: true
    })));
    _class_private_field_get(this, _topToolbar).appendToolbarItem(_class_private_field_get(this, _enableCheckbox));
}
function createCredentialsDataGrid(authenticatorId) {
    var columns = [
        {
            id: 'credentialId',
            title: i18nString(UIStrings.id),
            longText: true,
            weight: 24
        },
        {
            id: 'isResidentCredential',
            title: i18nString(UIStrings.isResident),
            dataType: "Boolean" /* DataGrid.DataGrid.DataType.Boolean */ ,
            weight: 10
        },
        {
            id: 'rpId',
            title: i18nString(UIStrings.rpId)
        },
        {
            id: 'userHandle',
            title: i18nString(UIStrings.userHandle)
        },
        {
            id: 'signCount',
            title: i18nString(UIStrings.signCount)
        },
        {
            id: 'actions',
            title: i18nString(UIStrings.actions)
        }
    ];
    var dataGridConfig = {
        displayName: i18nString(UIStrings.credentials),
        columns: columns,
        editCallback: undefined,
        deleteCallback: undefined,
        refreshCallback: undefined
    };
    var dataGrid = new WebauthnDataGrid(dataGridConfig);
    dataGrid.renderInline();
    dataGrid.setStriped(true);
    dataGrid.addEventListener("ExportCredential" /* Events.ExportCredential */ , _class_private_method_get(this, _handleExportCredential, handleExportCredential), this);
    dataGrid.addEventListener("RemoveCredential" /* Events.RemoveCredential */ , _class_private_method_get(this, _handleRemoveCredential, handleRemoveCredential).bind(this, authenticatorId));
    dataGrid.rootNode().appendChild(new EmptyDataGridNode());
    this.dataGrids.set(authenticatorId, dataGrid);
    return dataGrid;
}
function handleExportCredential(param) {
    var credential = param.data;
    _class_private_method_get(this, _exportCredential, exportCredential).call(this, credential);
}
function handleRemoveCredential(authenticatorId, param) {
    var credential = param.data;
    void _class_private_method_get(this, _removeCredential, removeCredential).call(this, authenticatorId, credential.credentialId);
}
function addCredential(authenticatorId, param) {
    var event = param.data;
    var dataGrid = this.dataGrids.get(authenticatorId);
    if (!dataGrid) {
        return;
    }
    var emptyNode = dataGrid.rootNode().children.find(function(node) {
        return !Object.keys(node.data).length;
    });
    if (emptyNode) {
        dataGrid.rootNode().removeChild(emptyNode);
    }
    var node = new DataGridNode(event.credential);
    dataGrid.rootNode().appendChild(node);
}
function updateCredential(authenticatorId, param) {
    var event = param.data;
    var dataGrid = this.dataGrids.get(authenticatorId);
    if (!dataGrid) {
        return;
    }
    var node = dataGrid.rootNode().children.find(function(node) {
        var _node_data;
        return ((_node_data = node.data) === null || _node_data === void 0 ? void 0 : _node_data.credentialId) === event.credential.credentialId;
    });
    if (!node) {
        return;
    }
    node.data = event.credential;
}
function setVirtualAuthEnvEnabled(enable) {
    return _setVirtualAuthEnvEnabled1.apply(this, arguments);
}
function _setVirtualAuthEnvEnabled1() {
    _setVirtualAuthEnvEnabled1 = _async_to_generator(function(enable) {
        var _this;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _class_private_field_get(this, _isEnabling)
                    ];
                case 1:
                    _state.sent();
                    _this = this;
                    _class_private_field_set(this, _isEnabling, new Promise(function() {
                        var _ref = _async_to_generator(function(resolve) {
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        if (enable && !_class_private_field_get(_this, _hasBeenEnabled)) {
                                            // Ensures metric is only tracked once per session.
                                            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.VirtualAuthenticatorEnvironmentEnabled);
                                            _class_private_field_set(_this, _hasBeenEnabled, true);
                                        }
                                        if (!_class_private_field_get(_this, _model)) return [
                                            3,
                                            2
                                        ];
                                        return [
                                            4,
                                            _class_private_field_get(_this, _model).setVirtualAuthEnvEnabled(enable)
                                        ];
                                    case 1:
                                        _state.sent();
                                        _state.label = 2;
                                    case 2:
                                        if (!enable) return [
                                            3,
                                            4
                                        ];
                                        return [
                                            4,
                                            _class_private_method_get(_this, _loadInitialAuthenticators, loadInitialAuthenticators).call(_this)
                                        ];
                                    case 3:
                                        _state.sent();
                                        return [
                                            3,
                                            5
                                        ];
                                    case 4:
                                        _class_private_method_get(_this, _removeAuthenticatorSections, removeAuthenticatorSections).call(_this);
                                        _state.label = 5;
                                    case 5:
                                        _class_private_method_get(_this, _updateVisibility, updateVisibility).call(_this, enable);
                                        _class_private_field_set(_this, _isEnabling, undefined);
                                        resolve();
                                        return [
                                            2
                                        ];
                                }
                            });
                        });
                        return function(resolve) {
                            return _ref.apply(this, arguments);
                        };
                    }()));
                    return [
                        2
                    ];
            }
        });
    });
    return _setVirtualAuthEnvEnabled1.apply(this, arguments);
}
function updateVisibility(enabled) {
    this.contentElement.classList.toggle('enabled', enabled);
}
function removeAuthenticatorSections() {
    _class_private_field_get(this, _authenticatorsView).innerHTML = '';
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = this.dataGrids.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var dataGrid = _step.value;
            dataGrid.asWidget().detach();
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    this.dataGrids.clear();
}
function handleCheckboxToggle(e) {
    void _class_private_method_get(this, _setVirtualAuthEnvEnabled, setVirtualAuthEnvEnabled).call(this, e.target.checked);
}
function updateEnabledTransportOptions(enabledOptions) {
    if (!_class_private_field_get(this, _transportSelect)) {
        return;
    }
    var prevValue = _class_private_field_get(this, _transportSelect).value;
    _class_private_field_get(this, _transportSelect).removeChildren();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = enabledOptions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var option = _step.value;
            _class_private_field_get(this, _transportSelect).appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createOption(option, option, option));
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    // Make sure the currently selected value stays the same.
    _class_private_field_get(this, _transportSelect).value = prevValue;
    // If the new set does not include the previous value.
    if (!_class_private_field_get(this, _transportSelect).value) {
        // Select the first available value.
        _class_private_field_get(this, _transportSelect).selectedIndex = 0;
    }
}
function updateNewAuthenticatorSectionOptions() {
    if (!_class_private_field_get(this, _protocolSelect) || !this.residentKeyCheckbox || !_class_private_field_get(this, _userVerificationCheckbox) || !this.largeBlobCheckbox) {
        return;
    }
    if (_class_private_field_get(this, _protocolSelect).value === "ctap2" /* Protocol.WebAuthn.AuthenticatorProtocol.Ctap2 */ ) {
        this.residentKeyCheckbox.disabled = false;
        _class_private_field_get(this, _userVerificationCheckbox).disabled = false;
        this.largeBlobCheckbox.disabled = !this.residentKeyCheckbox.checked;
        if (this.largeBlobCheckbox.disabled) {
            this.largeBlobCheckbox.checked = false;
        }
        _class_private_method_get(this, _updateEnabledTransportOptions, updateEnabledTransportOptions).call(this, [
            "usb" /* Protocol.WebAuthn.AuthenticatorTransport.Usb */ ,
            "ble" /* Protocol.WebAuthn.AuthenticatorTransport.Ble */ ,
            "nfc" /* Protocol.WebAuthn.AuthenticatorTransport.Nfc */ ,
            "internal" /* Protocol.WebAuthn.AuthenticatorTransport.Internal */ 
        ]);
    } else {
        this.residentKeyCheckbox.checked = false;
        this.residentKeyCheckbox.disabled = true;
        _class_private_field_get(this, _userVerificationCheckbox).checked = false;
        _class_private_field_get(this, _userVerificationCheckbox).disabled = true;
        this.largeBlobCheckbox.checked = false;
        this.largeBlobCheckbox.disabled = true;
        _class_private_method_get(this, _updateEnabledTransportOptions, updateEnabledTransportOptions).call(this, [
            "usb" /* Protocol.WebAuthn.AuthenticatorTransport.Usb */ ,
            "ble" /* Protocol.WebAuthn.AuthenticatorTransport.Ble */ ,
            "nfc" /* Protocol.WebAuthn.AuthenticatorTransport.Nfc */ 
        ]);
    }
}
function createNewAuthenticatorSection() {
    var _this = this;
    var learnMoreLink = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.XLink.XLink.create('https://developers.google.com/web/updates/2018/05/webauthn', i18nString(UIStrings.learnMore), undefined, undefined, 'learn-more');
    _class_private_field_set(this, _learnMoreView, this.contentElement.createChild('div', 'learn-more'));
    _class_private_field_get(this, _learnMoreView).appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Fragment.html(_templateObject(), i18nString(UIStrings.useWebauthnForPhishingresistant), learnMoreLink));
    _class_private_field_set(this, _newAuthenticatorSection, this.contentElement.createChild('div', 'new-authenticator-container'));
    var newAuthenticatorTitle = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createLabel(i18nString(UIStrings.newAuthenticator), 'new-authenticator-title');
    _class_private_field_get(this, _newAuthenticatorSection).appendChild(newAuthenticatorTitle);
    _class_private_field_set(this, _newAuthenticatorForm, _class_private_field_get(this, _newAuthenticatorSection).createChild('div', 'new-authenticator-form'));
    _class_private_field_get(this, _newAuthenticatorForm).setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.section('new-authenticator')));
    var protocolGroup = _class_private_field_get(this, _newAuthenticatorForm).createChild('div', 'authenticator-option');
    var transportGroup = _class_private_field_get(this, _newAuthenticatorForm).createChild('div', 'authenticator-option');
    var residentKeyGroup = _class_private_field_get(this, _newAuthenticatorForm).createChild('div', 'authenticator-option');
    var userVerificationGroup = _class_private_field_get(this, _newAuthenticatorForm).createChild('div', 'authenticator-option');
    var largeBlobGroup = _class_private_field_get(this, _newAuthenticatorForm).createChild('div', 'authenticator-option');
    var addButtonGroup = _class_private_field_get(this, _newAuthenticatorForm).createChild('div', 'authenticator-option');
    var protocolSelectTitle = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createLabel(i18nString(UIStrings.protocol), 'authenticator-option-label');
    protocolGroup.appendChild(protocolSelectTitle);
    _class_private_field_set(this, _protocolSelect, protocolGroup.createChild('select', 'chrome-select'));
    _class_private_field_get(this, _protocolSelect).setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.dropDown('protocol').track({
        change: true
    })));
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.bindLabelToControl(protocolSelectTitle, _class_private_field_get(this, _protocolSelect));
    Object.values(PROTOCOL_AUTHENTICATOR_VALUES).sort().forEach(function(option) {
        if (_class_private_field_get(_this, _protocolSelect)) {
            _class_private_field_get(_this, _protocolSelect).appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createOption(option, option, option));
        }
    });
    if (_class_private_field_get(this, _protocolSelect)) {
        _class_private_field_get(this, _protocolSelect).value = "ctap2" /* Protocol.WebAuthn.AuthenticatorProtocol.Ctap2 */ ;
    }
    var transportSelectTitle = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createLabel(i18nString(UIStrings.transport), 'authenticator-option-label');
    transportGroup.appendChild(transportSelectTitle);
    _class_private_field_set(this, _transportSelect, transportGroup.createChild('select', 'chrome-select'));
    _class_private_field_get(this, _transportSelect).setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.dropDown('transport').track({
        change: true
    })));
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.bindLabelToControl(transportSelectTitle, _class_private_field_get(this, _transportSelect));
    // transportSelect will be populated in updateNewAuthenticatorSectionOptions.
    _class_private_field_set(this, _residentKeyCheckboxLabel, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.CheckboxLabel.create(i18nString(UIStrings.supportsResidentKeys), false, undefined, 'resident-key'));
    _class_private_field_get(this, _residentKeyCheckboxLabel).textElement.classList.add('authenticator-option-label');
    residentKeyGroup.appendChild(_class_private_field_get(this, _residentKeyCheckboxLabel).textElement);
    this.residentKeyCheckbox = _class_private_field_get(this, _residentKeyCheckboxLabel).checkboxElement;
    this.residentKeyCheckbox.checked = false;
    this.residentKeyCheckbox.classList.add('authenticator-option-checkbox');
    residentKeyGroup.appendChild(_class_private_field_get(this, _residentKeyCheckboxLabel));
    _class_private_field_set(this, _userVerificationCheckboxLabel, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.CheckboxLabel.create(i18nString(UIStrings.supportsUserVerification), false, undefined, 'user-verification'));
    _class_private_field_get(this, _userVerificationCheckboxLabel).textElement.classList.add('authenticator-option-label');
    userVerificationGroup.appendChild(_class_private_field_get(this, _userVerificationCheckboxLabel).textElement);
    _class_private_field_set(this, _userVerificationCheckbox, _class_private_field_get(this, _userVerificationCheckboxLabel).checkboxElement);
    _class_private_field_get(this, _userVerificationCheckbox).checked = false;
    _class_private_field_get(this, _userVerificationCheckbox).classList.add('authenticator-option-checkbox');
    userVerificationGroup.appendChild(_class_private_field_get(this, _userVerificationCheckboxLabel));
    _class_private_field_set(this, _largeBlobCheckboxLabel, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.CheckboxLabel.create(i18nString(UIStrings.supportsLargeBlob), false, undefined, 'large-blob'));
    _class_private_field_get(this, _largeBlobCheckboxLabel).textElement.classList.add('authenticator-option-label');
    largeBlobGroup.appendChild(_class_private_field_get(this, _largeBlobCheckboxLabel).textElement);
    this.largeBlobCheckbox = _class_private_field_get(this, _largeBlobCheckboxLabel).checkboxElement;
    this.largeBlobCheckbox.checked = false;
    this.largeBlobCheckbox.classList.add('authenticator-option-checkbox');
    this.largeBlobCheckbox.name = 'large-blob-checkbox';
    largeBlobGroup.appendChild(_class_private_field_get(this, _largeBlobCheckboxLabel));
    this.addAuthenticatorButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createTextButton(i18nString(UIStrings.add), _class_private_method_get(this, _handleAddAuthenticatorButton, handleAddAuthenticatorButton).bind(this), {
        jslogContext: 'webauthn.add-authenticator'
    });
    addButtonGroup.createChild('div', 'authenticator-option-label');
    addButtonGroup.appendChild(this.addAuthenticatorButton);
    var addAuthenticatorTitle = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createLabel(i18nString(UIStrings.addAuthenticator), '');
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.bindLabelToControl(addAuthenticatorTitle, this.addAuthenticatorButton);
    _class_private_method_get(this, _updateNewAuthenticatorSectionOptions, updateNewAuthenticatorSectionOptions).call(this);
    if (_class_private_field_get(this, _protocolSelect)) {
        _class_private_field_get(this, _protocolSelect).addEventListener('change', _class_private_method_get(this, _updateNewAuthenticatorSectionOptions, updateNewAuthenticatorSectionOptions).bind(this));
    }
    if (this.residentKeyCheckbox) {
        this.residentKeyCheckbox.addEventListener('change', _class_private_method_get(this, _updateNewAuthenticatorSectionOptions, updateNewAuthenticatorSectionOptions).bind(this));
    }
}
function handleAddAuthenticatorButton() {
    return _handleAddAuthenticatorButton1.apply(this, arguments);
}
function _handleAddAuthenticatorButton1() {
    _handleAddAuthenticatorButton1 = _async_to_generator(function() {
        var options, authenticatorId, availableAuthenticators, section, mediaQueryList, prefersReducedMotion;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    options = _class_private_method_get(this, _createOptionsFromCurrentInputs, createOptionsFromCurrentInputs).call(this);
                    if (!_class_private_field_get(this, _model)) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        _class_private_field_get(this, _model).addAuthenticator(options)
                    ];
                case 1:
                    authenticatorId = _state.sent();
                    availableAuthenticators = _class_private_field_get(this, _availableAuthenticatorSetting).get();
                    availableAuthenticators.push(_object_spread({
                        authenticatorId: authenticatorId,
                        active: true
                    }, options));
                    _class_private_field_get(this, _availableAuthenticatorSetting).set(availableAuthenticators.map(function(a) {
                        return _object_spread_props(_object_spread({}, a), {
                            active: a.authenticatorId === authenticatorId
                        });
                    }));
                    return [
                        4,
                        _class_private_method_get(this, _addAuthenticatorSection, addAuthenticatorSection).call(this, authenticatorId, options)
                    ];
                case 2:
                    section = _state.sent();
                    mediaQueryList = window.matchMedia('(prefers-reduced-motion: reduce)');
                    prefersReducedMotion = mediaQueryList.matches;
                    section.scrollIntoView({
                        block: 'start',
                        behavior: prefersReducedMotion ? 'auto' : 'smooth'
                    });
                    _state.label = 3;
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
    return _handleAddAuthenticatorButton1.apply(this, arguments);
}
function addAuthenticatorSection(authenticatorId, options) {
    return _addAuthenticatorSection1.apply(this, arguments);
}
function _addAuthenticatorSection1() {
    _addAuthenticatorSection1 = _async_to_generator(function(authenticatorId, options) {
        var _this, section, headerElement, titleElement, activeButtonContainer, activeLabel, removeButton, toolbar, editName, saveName, nameField, userFriendlyName, label, dataGrid;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _this = this;
                    section = document.createElement('div');
                    section.classList.add('authenticator-section');
                    section.setAttribute('data-authenticator-id', authenticatorId);
                    section.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.section('authenticator')));
                    _class_private_field_get(this, _authenticatorsView).appendChild(section);
                    headerElement = section.createChild('div', 'authenticator-section-header');
                    titleElement = headerElement.createChild('div', 'authenticator-section-title');
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.markAsHeading(titleElement, 2);
                    return [
                        4,
                        _class_private_method_get(this, _clearActiveAuthenticator, clearActiveAuthenticator).call(this)
                    ];
                case 1:
                    _state.sent();
                    activeButtonContainer = headerElement.createChild('div', 'active-button-container');
                    activeLabel = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createRadioLabel("active-authenticator-".concat(authenticatorId), i18nString(UIStrings.active));
                    activeLabel.radioElement.addEventListener('change', _class_private_method_get(this, _setActiveAuthenticator, setActiveAuthenticator).bind(this, authenticatorId));
                    activeButtonContainer.appendChild(activeLabel);
                    activeLabel.radioElement.checked = true;
                    _class_private_field_set(this, _activeAuthId, authenticatorId); // Newly added authenticator is automatically set as active.
                    removeButton = headerElement.createChild('button', 'text-button');
                    removeButton.textContent = i18nString(UIStrings.remove);
                    removeButton.addEventListener('click', _class_private_method_get(this, _removeAuthenticator, removeAuthenticator).bind(this, authenticatorId));
                    removeButton.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.action('webauthn.remove-authenticator').track({
                        click: true
                    })));
                    toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.Toolbar('edit-name-toolbar', titleElement);
                    editName = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarButton(i18nString(UIStrings.editName), 'edit', undefined, 'edit-name');
                    saveName = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarButton(i18nString(UIStrings.saveName), 'checkmark', undefined, 'save-name');
                    saveName.setVisible(false);
                    nameField = titleElement.createChild('input', 'authenticator-name-field');
                    nameField.placeholder = i18nString(UIStrings.enterNewName);
                    nameField.disabled = true;
                    nameField.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.textField('name').track({
                        keydown: 'Enter',
                        change: true
                    })));
                    userFriendlyName = authenticatorId.slice(-5); // User friendly name defaults to last 5 chars of UUID.
                    nameField.value = i18nString(UIStrings.authenticatorS, {
                        PH1: userFriendlyName
                    });
                    _class_private_method_get(this, _updateActiveLabelTitle, updateActiveLabelTitle).call(this, activeLabel, nameField.value);
                    editName.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , function() {
                        return _class_private_method_get(_this, _handleEditNameButton, handleEditNameButton).call(_this, titleElement, nameField, editName, saveName);
                    });
                    saveName.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , function() {
                        return _class_private_method_get(_this, _handleSaveNameButton, handleSaveNameButton).call(_this, titleElement, nameField, editName, saveName, activeLabel);
                    });
                    nameField.addEventListener('focusout', function() {
                        return _class_private_method_get(_this, _handleSaveNameButton, handleSaveNameButton).call(_this, titleElement, nameField, editName, saveName, activeLabel);
                    });
                    nameField.addEventListener('keydown', function(event) {
                        if (event.key === 'Enter') {
                            _class_private_method_get(_this, _handleSaveNameButton, handleSaveNameButton).call(_this, titleElement, nameField, editName, saveName, activeLabel);
                        }
                    });
                    toolbar.appendToolbarItem(editName);
                    toolbar.appendToolbarItem(saveName);
                    _class_private_method_get(this, _createAuthenticatorFields, createAuthenticatorFields).call(this, section, authenticatorId, options);
                    label = document.createElement('div');
                    label.classList.add('credentials-title');
                    label.textContent = i18nString(UIStrings.credentials);
                    section.appendChild(label);
                    dataGrid = _class_private_method_get(this, _createCredentialsDataGrid, createCredentialsDataGrid).call(this, authenticatorId);
                    dataGrid.asWidget().show(section);
                    if (_class_private_field_get(this, _model)) {
                        _class_private_field_get(this, _model).addEventListener("CredentialAdded" /* SDK.WebAuthnModel.Events.CredentialAdded */ , _class_private_method_get(this, _addCredential, addCredential).bind(this, authenticatorId));
                        _class_private_field_get(this, _model).addEventListener("CredentialAsserted" /* SDK.WebAuthnModel.Events.CredentialAsserted */ , _class_private_method_get(this, _updateCredential, updateCredential).bind(this, authenticatorId));
                    }
                    return [
                        2,
                        section
                    ];
            }
        });
    });
    return _addAuthenticatorSection1.apply(this, arguments);
}
function exportCredential(credential) {
    var pem = PRIVATE_KEY_HEADER;
    for(var i = 0; i < credential.privateKey.length; i += 64){
        pem += credential.privateKey.substring(i, i + 64) + '\n';
    }
    pem += PRIVATE_KEY_FOOTER;
    var link = document.createElement('a');
    link.download = i18nString(UIStrings.privateKeypem);
    link.href = 'data:application/x-pem-file,' + encodeURIComponent(pem);
    link.click();
}
function removeCredential(authenticatorId, credentialId) {
    return _removeCredential1.apply(this, arguments);
}
function _removeCredential1() {
    _removeCredential1 = _async_to_generator(function(authenticatorId, credentialId) {
        var dataGrid;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    dataGrid = this.dataGrids.get(authenticatorId);
                    if (!dataGrid) {
                        return [
                            2
                        ];
                    }
                    // @ts-ignore dataGrid node type is indeterminate.
                    dataGrid.rootNode().children.find(function(n) {
                        return n.data.credentialId === credentialId;
                    }).remove();
                    if (!dataGrid.rootNode().children.length) {
                        dataGrid.rootNode().appendChild(new EmptyDataGridNode());
                    }
                    if (!_class_private_field_get(this, _model)) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        _class_private_field_get(this, _model).removeCredential(authenticatorId, credentialId)
                    ];
                case 1:
                    _state.sent();
                    _state.label = 2;
                case 2:
                    return [
                        2
                    ];
            }
        });
    });
    return _removeCredential1.apply(this, arguments);
}
function createAuthenticatorFields(section, authenticatorId, options) {
    var sectionFields = section.createChild('div', 'authenticator-fields');
    var uuidField = sectionFields.createChild('div', 'authenticator-field');
    var protocolField = sectionFields.createChild('div', 'authenticator-field');
    var transportField = sectionFields.createChild('div', 'authenticator-field');
    var srkField = sectionFields.createChild('div', 'authenticator-field');
    var slbField = sectionFields.createChild('div', 'authenticator-field');
    var suvField = sectionFields.createChild('div', 'authenticator-field');
    uuidField.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createLabel(i18nString(UIStrings.uuid), 'authenticator-option-label'));
    protocolField.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createLabel(i18nString(UIStrings.protocol), 'authenticator-option-label'));
    transportField.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createLabel(i18nString(UIStrings.transport), 'authenticator-option-label'));
    srkField.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createLabel(i18nString(UIStrings.supportsResidentKeys), 'authenticator-option-label'));
    slbField.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createLabel(i18nString(UIStrings.supportsLargeBlob), 'authenticator-option-label'));
    suvField.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createLabel(i18nString(UIStrings.supportsUserVerification), 'authenticator-option-label'));
    uuidField.createChild('div', 'authenticator-field-value').textContent = authenticatorId;
    protocolField.createChild('div', 'authenticator-field-value').textContent = options.protocol;
    transportField.createChild('div', 'authenticator-field-value').textContent = options.transport;
    srkField.createChild('div', 'authenticator-field-value').textContent = options.hasResidentKey ? i18nString(UIStrings.yes) : i18nString(UIStrings.no);
    slbField.createChild('div', 'authenticator-field-value').textContent = options.hasLargeBlob ? i18nString(UIStrings.yes) : i18nString(UIStrings.no);
    suvField.createChild('div', 'authenticator-field-value').textContent = options.hasUserVerification ? i18nString(UIStrings.yes) : i18nString(UIStrings.no);
}
function handleEditNameButton(titleElement, nameField, editName, saveName) {
    nameField.disabled = false;
    titleElement.classList.add('editing-name');
    nameField.focus();
    saveName.setVisible(true);
    editName.setVisible(false);
}
function handleSaveNameButton(titleElement, nameField, editName, saveName, activeLabel) {
    var name = nameField.value;
    if (!name) {
        return;
    }
    nameField.disabled = true;
    titleElement.classList.remove('editing-name');
    editName.setVisible(true);
    saveName.setVisible(false);
    _class_private_method_get(this, _updateActiveLabelTitle, updateActiveLabelTitle).call(this, activeLabel, name);
}
function updateActiveLabelTitle(activeLabel, authenticatorName) {
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(activeLabel.radioElement, i18nString(UIStrings.setSAsTheActiveAuthenticator, {
        PH1: authenticatorName
    }));
}
function removeAuthenticator(authenticatorId) {
    if (_class_private_field_get(this, _authenticatorsView)) {
        var child = _class_private_field_get(this, _authenticatorsView).querySelector("[data-authenticator-id=".concat(CSS.escape(authenticatorId), "]"));
        if (child) {
            child.remove();
        }
    }
    var dataGrid = this.dataGrids.get(authenticatorId);
    if (dataGrid) {
        dataGrid.asWidget().detach();
        this.dataGrids.delete(authenticatorId);
    }
    if (_class_private_field_get(this, _model)) {
        void _class_private_field_get(this, _model).removeAuthenticator(authenticatorId);
    }
    // Update available authenticator setting.
    var prevAvailableAuthenticators = _class_private_field_get(this, _availableAuthenticatorSetting).get();
    var newAvailableAuthenticators = prevAvailableAuthenticators.filter(function(a) {
        return a.authenticatorId !== authenticatorId;
    });
    _class_private_field_get(this, _availableAuthenticatorSetting).set(newAvailableAuthenticators);
    if (_class_private_field_get(this, _activeAuthId) === authenticatorId) {
        var availableAuthenticatorIds = Array.from(this.dataGrids.keys());
        if (availableAuthenticatorIds.length) {
            void _class_private_method_get(this, _setActiveAuthenticator, setActiveAuthenticator).call(this, availableAuthenticatorIds[0]);
        } else {
            _class_private_field_set(this, _activeAuthId, null);
        }
    }
}
function createOptionsFromCurrentInputs() {
    // TODO(crbug.com/1034663): Add optionality for isUserVerified param.
    if (!_class_private_field_get(this, _protocolSelect) || !_class_private_field_get(this, _transportSelect) || !this.residentKeyCheckbox || !_class_private_field_get(this, _userVerificationCheckbox) || !this.largeBlobCheckbox) {
        throw new Error('Unable to create options from current inputs');
    }
    return {
        protocol: _class_private_field_get(this, _protocolSelect).options[_class_private_field_get(this, _protocolSelect).selectedIndex].value,
        ctap2Version: "ctap2_1" /* Protocol.WebAuthn.Ctap2Version.Ctap2_1 */ ,
        transport: _class_private_field_get(this, _transportSelect).options[_class_private_field_get(this, _transportSelect).selectedIndex].value,
        hasResidentKey: this.residentKeyCheckbox.checked,
        hasUserVerification: _class_private_field_get(this, _userVerificationCheckbox).checked,
        hasLargeBlob: this.largeBlobCheckbox.checked,
        automaticPresenceSimulation: true,
        isUserVerified: true
    };
}
function setActiveAuthenticator(authenticatorId) {
    return _setActiveAuthenticator1.apply(this, arguments);
}
function _setActiveAuthenticator1() {
    _setActiveAuthenticator1 = _async_to_generator(function(authenticatorId) {
        var prevAvailableAuthenticators, newAvailableAuthenticators;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _class_private_method_get(this, _clearActiveAuthenticator, clearActiveAuthenticator).call(this)
                    ];
                case 1:
                    _state.sent();
                    if (!_class_private_field_get(this, _model)) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        _class_private_field_get(this, _model).setAutomaticPresenceSimulation(authenticatorId, true)
                    ];
                case 2:
                    _state.sent();
                    _state.label = 3;
                case 3:
                    _class_private_field_set(this, _activeAuthId, authenticatorId);
                    prevAvailableAuthenticators = _class_private_field_get(this, _availableAuthenticatorSetting).get();
                    newAvailableAuthenticators = prevAvailableAuthenticators.map(function(a) {
                        return _object_spread_props(_object_spread({}, a), {
                            active: a.authenticatorId === authenticatorId
                        });
                    });
                    _class_private_field_get(this, _availableAuthenticatorSetting).set(newAvailableAuthenticators);
                    _class_private_method_get(this, _updateActiveButtons, updateActiveButtons).call(this);
                    return [
                        2
                    ];
            }
        });
    });
    return _setActiveAuthenticator1.apply(this, arguments);
}
function updateActiveButtons() {
    var _this = this;
    var authenticators = _class_private_field_get(this, _authenticatorsView).getElementsByClassName('authenticator-section');
    Array.from(authenticators).forEach(function(authenticator) {
        var button = authenticator.querySelector('input.dt-radio-button');
        if (!button) {
            return;
        }
        button.checked = authenticator.dataset.authenticatorId === _class_private_field_get(_this, _activeAuthId);
    });
}
function clearActiveAuthenticator() {
    return _clearActiveAuthenticator1.apply(this, arguments);
}
function _clearActiveAuthenticator1() {
    _clearActiveAuthenticator1 = _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!(_class_private_field_get(this, _activeAuthId) && _class_private_field_get(this, _model))) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        _class_private_field_get(this, _model).setAutomaticPresenceSimulation(_class_private_field_get(this, _activeAuthId), false)
                    ];
                case 1:
                    _state.sent();
                    _state.label = 2;
                case 2:
                    _class_private_field_set(this, _activeAuthId, null);
                    _class_private_method_get(this, _updateActiveButtons, updateActiveButtons).call(this);
                    return [
                        2
                    ];
            }
        });
    });
    return _clearActiveAuthenticator1.apply(this, arguments);
}


}),
"./panels/webauthn/webauthnPane.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright (c) 2020 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.webauthn-pane {\n  overflow: auto;\n  min-width: 500px;\n}\n\n.webauthn-toolbar-container {\n  display: flex;\n  background-color: var(--sys-color-cdt-base-container);\n  border-bottom: 1px solid var(--sys-color-divider);\n  flex: 0 0 auto;\n}\n\n.webauthn-toolbar {\n  display: inline-block;\n}\n\n.authenticators-view {\n  margin: 0 10px;\n  min-height: auto;\n  display: none;\n}\n\n.webauthn-pane.enabled .authenticators-view {\n  display: block;\n}\n/* New Authenticator Section */\n.new-authenticator-title {\n  line-height: 24px;\n  font-weight: bold;\n  display: block;\n}\n\n.new-authenticator-container {\n  display: none;\n  margin: 10px;\n}\n\n.webauthn-pane.enabled .new-authenticator-container {\n  display: block;\n}\n\n.new-authenticator-form {\n  border: none;\n  padding: 10px 0;\n  flex: 0 0 auto;\n  margin: 0;\n}\n\n.webauthn-pane .chrome-select {\n  width: 120px;\n}\n/* Active Authenticator Section */\n.authenticator-section {\n  display: block;\n  padding: 16px 0;\n  border-bottom: 1px solid var(--sys-color-divider);\n}\n\n.authenticator-fields {\n  border: none;\n  padding: 10px 0;\n  flex: 0 0 auto;\n  margin: 0;\n}\n\n.authenticator-field {\n  display: flex;\n  margin: auto;\n}\n\n.authenticator-section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n\n.authenticator-section-title {\n  line-height: 24px;\n  display: inline-block;\n}\n\n.authenticator-section-title .authenticator-name-field {\n  display: inline-block;\n  font-weight: bold;\n  border: none;\n  animation: save-flash 0.2s;\n  text-overflow: ellipsis;\n}\n\n.authenticator-section-title.editing-name .authenticator-name-field {\n  border-bottom: 1px solid var(--sys-color-neutral-outline);\n  font-weight: normal;\n  animation: none;\n}\n\n.authenticator-field-value {\n  padding: 5px 0;\n  display: inline-block;\n  font-family: monospace;\n}\n\n.authenticator-option-checkbox {\n  position: relative;\n  top: 2px;\n}\n\n.authenticator-option {\n  display: flex;\n  padding-bottom: 10px;\n  align-items: center;\n  margin: auto;\n\n  &:has(span[is="dt-checkbox"]) {\n    padding-bottom: 4px;\n  }\n}\n\n.authenticator-option-label {\n  text-align: right;\n  width: 200px;\n  display: inline-block;\n  padding: 0 10px 0 0;\n}\n\ntd .text-button {\n  min-width: 20px;\n  margin: auto;\n}\n\n.active-button-container {\n  display: inline-block;\n  min-width: 28px;\n}\n\n.edit-name-toolbar {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n@keyframes save-flash {\n  from { opacity: 0%; }\n  to { opacity: 100%; }\n}\n/* Credentials Table */\n\n.data-grid-data-grid-node.centered {\n  text-align: center;\n}\n\n.data-grid td {\n  vertical-align: middle;\n}\n\n.credentials-title {\n  display: block;\n  font-weight: bold;\n  margin: 8px 0;\n}\n\n.code {\n  font-family: monospace;\n}\n\n.learn-more {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  text-align: center;\n  overflow: hidden;\n}\n\n.webauthn-pane.enabled .learn-more {\n  display: none;\n}\n\n/*# sourceURL=webauthnPane.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);