"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_network_SignedExchangeInfoView_js"], {
"./panels/network/SignedExchangeInfoView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Category: function() { return Category; },
  SignedExchangeInfoView: function() { return SignedExchangeInfoView; }
});
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _signedExchangeInfoTree_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signedExchangeInfoTree.css.js */ "./panels/network/signedExchangeInfoTree.css.js");
/* harmony import */var _signedExchangeInfoView_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signedExchangeInfoView.css.js */ "./panels/network/signedExchangeInfoView.css.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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







var UIStrings = {
    /**
     *@description Text for errors
     */ errors: 'Errors',
    /**
     *@description Text in Signed Exchange Info View of the Network panel
     */ signedHttpExchange: 'Signed HTTP exchange',
    /**
     *@description Text for an option to learn more about something
     */ learnmore: 'Learn more',
    /**
     *@description Text in Request Headers View of the Network panel
     */ requestUrl: 'Request URL',
    /**
     *@description Text in Signed Exchange Info View of the Network panel
     */ responseCode: 'Response code',
    /**
     *@description Text in Signed Exchange Info View of the Network panel
     */ headerIntegrityHash: 'Header integrity hash',
    /**
     *@description Text in Signed Exchange Info View of the Network panel
     */ responseHeaders: 'Response headers',
    /**
     *@description Text in Signed Exchange Info View of the Network panel
     */ signature: 'Signature',
    /**
     *@description Text in Signed Exchange Info View of the Network panel
     */ label: 'Label',
    /**
     *@description Text in Signed Exchange Info View of the Network panel
     */ certificateUrl: 'Certificate URL',
    /**
     *@description Text to view a security certificate
     */ viewCertificate: 'View certificate',
    /**
     *@description Text in Signed Exchange Info View of the Network panel
     */ integrity: 'Integrity',
    /**
     *@description Text in Signed Exchange Info View of the Network panel
     */ certificateSha: 'Certificate SHA256',
    /**
     *@description Text in Signed Exchange Info View of the Network panel
     */ validityUrl: 'Validity URL',
    /**
     *@description Text in Signed Exchange Info View of the Network panel
     */ date: 'Date',
    /**
     *@description Text in Signed Exchange Info View of the Network panel
     */ expires: 'Expires',
    /**
     *@description Text for a security certificate
     */ certificate: 'Certificate',
    /**
     *@description Text that refers to the subject of a security certificate
     */ subject: 'Subject',
    /**
     *@description Text to show since when an item is valid
     */ validFrom: 'Valid from',
    /**
     *@description Text to indicate the expiry date
     */ validUntil: 'Valid until',
    /**
     *@description Text for the issuer of an item
     */ issuer: 'Issuer'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/network/SignedExchangeInfoView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var SignedExchangeInfoView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(SignedExchangeInfoView, _UI_Widget_VBox);
    var _super = _create_super(SignedExchangeInfoView);
    function SignedExchangeInfoView(request) {
        _class_call_check(this, SignedExchangeInfoView);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "responseHeadersItem", void 0);
        console.assert(request.signedExchangeInfo() !== null);
        var signedExchangeInfo = request.signedExchangeInfo();
        _this.element.classList.add('signed-exchange-info-view');
        var root = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeOutlineInShadow();
        root.registerCSSFiles([
            _signedExchangeInfoTree_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]
        ]);
        root.element.classList.add('signed-exchange-info-tree');
        root.setFocusable(false);
        root.makeDense();
        root.expandTreeElementsWhenArrowing = true;
        _this.element.appendChild(root.element);
        var errorFieldSetMap = new Map();
        if (signedExchangeInfo.errors && signedExchangeInfo.errors.length) {
            var errorMessagesCategory = new Category(root, i18nString(UIStrings.errors));
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = signedExchangeInfo.errors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var error = _step.value;
                    var fragment = document.createDocumentFragment();
                    var icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon();
                    icon.data = {
                        iconName: 'cross-circle-filled',
                        color: 'var(--icon-error)',
                        width: '14px',
                        height: '14px'
                    };
                    icon.classList.add('prompt-icon');
                    fragment.appendChild(icon);
                    fragment.createChild('div', 'error-log').textContent = error.message;
                    errorMessagesCategory.createLeaf(fragment);
                    if (error.errorField) {
                        var errorFieldSet = errorFieldSetMap.get(error.signatureIndex);
                        if (!errorFieldSet) {
                            errorFieldSet = new Set();
                            errorFieldSetMap.set(error.signatureIndex, errorFieldSet);
                        }
                        errorFieldSet.add(error.errorField);
                    }
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
        }
        var titleElement = document.createDocumentFragment();
        titleElement.createChild('div', 'header-name').textContent = i18nString(UIStrings.signedHttpExchange);
        var learnMoreNode = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.XLink.XLink.create('https://github.com/WICG/webpackage', i18nString(UIStrings.learnmore), 'header-toggle', undefined, 'learn-more');
        titleElement.appendChild(learnMoreNode);
        var headerCategory = new Category(root, titleElement);
        if (signedExchangeInfo.header) {
            var header = signedExchangeInfo.header;
            var redirectDestination = request.redirectDestination();
            var requestURLElement = _this.formatHeader(i18nString(UIStrings.requestUrl), header.requestUrl);
            if (redirectDestination) {
                var viewRequestLink = _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.Linkifier.Linkifier.linkifyRevealable(redirectDestination, 'View request', undefined, undefined, undefined, 'redirect-destination-request');
                viewRequestLink.classList.add('header-toggle');
                requestURLElement.appendChild(viewRequestLink);
            }
            headerCategory.createLeaf(requestURLElement);
            headerCategory.createLeaf(_this.formatHeader(i18nString(UIStrings.responseCode), String(header.responseCode)));
            headerCategory.createLeaf(_this.formatHeader(i18nString(UIStrings.headerIntegrityHash), header.headerIntegrity));
            _this.responseHeadersItem = headerCategory.createLeaf(_this.formatHeader(i18nString(UIStrings.responseHeaders), ''));
            var responseHeaders = header.responseHeaders;
            for(var name in responseHeaders){
                var headerTreeElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeElement(_this.formatHeader(name, responseHeaders[name]));
                headerTreeElement.selectable = false;
                _this.responseHeadersItem.appendChild(headerTreeElement);
            }
            _this.responseHeadersItem.expand();
            for(var i = 0; i < header.signatures.length; ++i){
                var errorFieldSet1 = errorFieldSetMap.get(i) || new Set();
                var signature = header.signatures[i];
                var signatureCategory = new Category(root, i18nString(UIStrings.signature));
                signatureCategory.createLeaf(_this.formatHeader(i18nString(UIStrings.label), signature.label));
                signatureCategory.createLeaf(_this.formatHeaderForHexData(i18nString(UIStrings.signature), signature.signature, errorFieldSet1.has("signatureSig" /* Protocol.Network.SignedExchangeErrorField.SignatureSig */ )));
                if (signature.certUrl) {
                    var certURLElement = _this.formatHeader(i18nString(UIStrings.certificateUrl), signature.certUrl, errorFieldSet1.has("signatureCertUrl" /* Protocol.Network.SignedExchangeErrorField.SignatureCertUrl */ ));
                    if (signature.certificates) {
                        var viewCertLink = certURLElement.createChild('span', 'devtools-link header-toggle');
                        viewCertLink.textContent = i18nString(UIStrings.viewCertificate);
                        viewCertLink.addEventListener('click', _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.showCertificateViewer.bind(null, signature.certificates), false);
                    }
                    signatureCategory.createLeaf(certURLElement);
                }
                signatureCategory.createLeaf(_this.formatHeader(i18nString(UIStrings.integrity), signature.integrity, errorFieldSet1.has("signatureIntegrity" /* Protocol.Network.SignedExchangeErrorField.SignatureIntegrity */ )));
                if (signature.certSha256) {
                    signatureCategory.createLeaf(_this.formatHeaderForHexData(i18nString(UIStrings.certificateSha), signature.certSha256, errorFieldSet1.has("signatureCertSha256" /* Protocol.Network.SignedExchangeErrorField.SignatureCertSha256 */ )));
                }
                signatureCategory.createLeaf(_this.formatHeader(i18nString(UIStrings.validityUrl), signature.validityUrl, errorFieldSet1.has("signatureValidityUrl" /* Protocol.Network.SignedExchangeErrorField.SignatureValidityUrl */ )));
                signatureCategory.createLeaf().title = _this.formatHeader(i18nString(UIStrings.date), new Date(1000 * signature.date).toUTCString(), errorFieldSet1.has("signatureTimestamps" /* Protocol.Network.SignedExchangeErrorField.SignatureTimestamps */ ));
                signatureCategory.createLeaf().title = _this.formatHeader(i18nString(UIStrings.expires), new Date(1000 * signature.expires).toUTCString(), errorFieldSet1.has("signatureTimestamps" /* Protocol.Network.SignedExchangeErrorField.SignatureTimestamps */ ));
            }
        }
        if (signedExchangeInfo.securityDetails) {
            var securityDetails = signedExchangeInfo.securityDetails;
            var securityCategory = new Category(root, i18nString(UIStrings.certificate));
            securityCategory.createLeaf(_this.formatHeader(i18nString(UIStrings.subject), securityDetails.subjectName));
            securityCategory.createLeaf(_this.formatHeader(i18nString(UIStrings.validFrom), new Date(1000 * securityDetails.validFrom).toUTCString()));
            securityCategory.createLeaf(_this.formatHeader(i18nString(UIStrings.validUntil), new Date(1000 * securityDetails.validTo).toUTCString()));
            securityCategory.createLeaf(_this.formatHeader(i18nString(UIStrings.issuer), securityDetails.issuer));
        }
        return _this;
    }
    _create_class(SignedExchangeInfoView, [
        {
            key: "formatHeader",
            value: function formatHeader(name, value, highlighted) {
                var fragment = document.createDocumentFragment();
                var nameElement = fragment.createChild('div', 'header-name');
                nameElement.textContent = name + ': ';
                fragment.createChild('span', 'header-separator');
                var valueElement = fragment.createChild('div', 'header-value source-code');
                valueElement.textContent = value;
                if (highlighted) {
                    nameElement.classList.add('error-field');
                    valueElement.classList.add('error-field');
                }
                return fragment;
            }
        },
        {
            key: "formatHeaderForHexData",
            value: function formatHeaderForHexData(name, value, highlighted) {
                var fragment = document.createDocumentFragment();
                var nameElement = fragment.createChild('div', 'header-name');
                nameElement.textContent = name + ': ';
                fragment.createChild('span', 'header-separator');
                var valueElement = fragment.createChild('div', 'header-value source-code hex-data');
                valueElement.textContent = value.replace(/(.{2})/g, '$1 ');
                if (highlighted) {
                    nameElement.classList.add('error-field');
                    valueElement.classList.add('error-field');
                }
                return fragment;
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(SignedExchangeInfoView.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _signedExchangeInfoView_css_js__WEBPACK_IMPORTED_MODULE_3__["default"]
                ]);
            }
        }
    ]);
    return SignedExchangeInfoView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox);
var Category = /*#__PURE__*/ function(_UI_TreeOutline_TreeElement) {
    "use strict";
    _inherits(Category, _UI_TreeOutline_TreeElement);
    var _super = _create_super(Category);
    function Category(root, title) {
        _class_call_check(this, Category);
        var _this;
        _this = _super.call(this, title, true);
        _define_property(_assert_this_initialized(_this), "toggleOnClick", void 0);
        _define_property(_assert_this_initialized(_this), "expanded", void 0);
        _this.selectable = false;
        _this.toggleOnClick = true;
        _this.expanded = true;
        root.appendChild(_assert_this_initialized(_this));
        return _this;
    }
    _create_class(Category, [
        {
            key: "createLeaf",
            value: function createLeaf(title) {
                var leaf = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeElement(title);
                leaf.selectable = false;
                this.appendChild(leaf);
                return leaf;
            }
        }
    ]);
    return Category;
} //# sourceMappingURL=SignedExchangeInfoView.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeElement);


}),
"./panels/network/signedExchangeInfoTree.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2018 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.tree-outline {\n  padding-left: 0;\n}\n\n.tree-outline > ol {\n  padding-bottom: 5px;\n  border-bottom: solid 1px var(--sys-color-divider);\n}\n\n.tree-outline > .parent {\n  user-select: none;\n  font-weight: bold;\n  color: var(--sys-color-on-surface);\n  margin-top: -1px;\n  display: flex;\n  align-items: center;\n  height: 26px;\n}\n\n.tree-outline li {\n  padding-left: 5px;\n  line-height: 20px;\n}\n\n.tree-outline li:not(.parent) {\n  display: block;\n  margin-left: 10px;\n}\n\n.tree-outline li:not(.parent)::before {\n  display: none;\n}\n\n.tree-outline .header-name {\n  color: var(--sys-color-token-subtle);\n  display: inline-block;\n  margin-right: 0.25em;\n  font-weight: bold;\n  vertical-align: top;\n  white-space: pre-wrap;\n}\n\n.tree-outline .header-separator {\n  user-select: none;\n}\n\n.tree-outline .header-value {\n  display: inline;\n  margin-right: 1em;\n  white-space: pre-wrap;\n  word-break: break-all;\n  margin-top: 1px;\n}\n\n.tree-outline .header-toggle {\n  display: inline;\n  margin-left: 30px;\n  font-weight: normal;\n  color: var(--sys-color-state-disabled);\n}\n\n.tree-outline .header-toggle:hover {\n  color: var(--sys-color-state-hover-on-subtle);\n}\n\n.tree-outline .error-log {\n  color: var(--sys-color-error);\n  display: inline-block;\n  margin-right: 0.25em;\n  margin-left: 0.25em;\n  font-weight: bold;\n  vertical-align: top;\n  white-space: pre-wrap;\n}\n\n.tree-outline .hex-data {\n  display: block;\n  word-break: break-word;\n  margin-left: 20px;\n}\n\n.tree-outline .error-field {\n  color: var(--sys-color-error);\n}\n\n.prompt-icon {\n  margin-top: 2px;\n}\n\n/*# sourceURL=signedExchangeInfoTree.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./panels/network/signedExchangeInfoView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright (c) 2018 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.signed-exchange-info-view {\n  user-select: text;\n  overflow: auto;\n}\n\n.signed-exchange-info-tree {\n  flex-grow: 1;\n  overflow-y: auto;\n  margin: 0;\n}\n\n/*# sourceURL=signedExchangeInfoView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);