"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_network_BinaryResourceView_js"], {
"./panels/network/BinaryResourceView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BinaryResourceView: function() { return BinaryResourceView; },
  BinaryViewObject: function() { return BinaryViewObject; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _binaryResourceView_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./binaryResourceView.css.js */ "./panels/network/binaryResourceView.css.js");
/* harmony import */var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
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






var UIStrings = {
    /**
     * @description Text in Binary Resource View of the Network panel. Shown to the user as a status
     * message after the current text has been copied to the clipboard. Base64 is a format for encoding
     * data.
     */ copiedAsBase: 'Copied as `Base64`',
    /**
     *@description Text in Binary Resource View of the Network panel
     */ hexViewer: '`Hex` Viewer',
    /**
     * @description Text in Binary Resource View of the Network panel. Shown to the user as a status
     * message after the current text has been copied to the clipboard. Hex is short for hexadecimal,
     * and is a format for encoding data.
     */ copiedAsHex: 'Copied as `Hex`',
    /**
     *@description Text in Binary Resource View of the Network panel. Shown to the user as a status
     * message after the current text has been copied to the clipboard. UTF-8 is a format for encoding data.
     */ copiedAsUtf: 'Copied as `UTF-8`',
    /**
     *@description Screen reader label for a select box that chooses how to display binary data in the Network panel
     */ binaryViewType: 'Binary view type',
    /**
     *@description Tooltip text that appears when hovering over the largeicon copy button in the Binary Resource View of the Network panel
     */ copyToClipboard: 'Copy to clipboard',
    /**
     * @description A context menu command in the Binary Resource View of the Network panel, for
     * copying to the clipboard. Base64 is a format for encoding data.
     */ copyAsBase: 'Copy as `Base64`',
    /**
     *@description A context menu command in the Binary Resource View of the Network panel, for copying
     * to the clipboard. Hex is short for hexadecimal, and is a format for encoding data.
     */ copyAsHex: 'Copy as `Hex`',
    /**
     *@description A context menu command in the Binary Resource View of the Network panel, for copying
     *to the clipboard. UTF-8 is a format for encoding data.
     */ copyAsUtf: 'Copy as `UTF-8`'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/network/BinaryResourceView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var BinaryResourceView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(BinaryResourceView, _UI_Widget_VBox);
    var _super = _create_super(BinaryResourceView);
    function BinaryResourceView(base64content, contentUrl, resourceType) {
        _class_call_check(this, BinaryResourceView);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "binaryResourceViewFactory", void 0);
        _define_property(_assert_this_initialized(_this), "toolbar", void 0);
        _define_property(_assert_this_initialized(_this), "binaryViewObjects", void 0);
        _define_property(_assert_this_initialized(_this), "binaryViewTypeSetting", void 0);
        _define_property(_assert_this_initialized(_this), "binaryViewTypeCombobox", void 0);
        _define_property(_assert_this_initialized(_this), "copiedText", void 0);
        _define_property(_assert_this_initialized(_this), "addFadeoutSettimeoutId", void 0);
        _define_property(_assert_this_initialized(_this), "lastView", void 0);
        _this.binaryResourceViewFactory = new _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_4__.BinaryResourceViewFactory.BinaryResourceViewFactory(base64content, contentUrl, resourceType);
        _this.toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.Toolbar('binary-view-toolbar', _this.element);
        _this.binaryViewObjects = [
            new BinaryViewObject('base64', _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString('Base64'), i18nString(UIStrings.copiedAsBase), _this.binaryResourceViewFactory.createBase64View.bind(_this.binaryResourceViewFactory), function() {
                return Promise.resolve(_this.binaryResourceViewFactory.base64());
            }),
            new BinaryViewObject('hex', i18nString(UIStrings.hexViewer), i18nString(UIStrings.copiedAsHex), _this.binaryResourceViewFactory.createHexView.bind(_this.binaryResourceViewFactory), _this.binaryResourceViewFactory.hex.bind(_this.binaryResourceViewFactory)),
            new BinaryViewObject('utf8', _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString('UTF-8'), i18nString(UIStrings.copiedAsUtf), _this.binaryResourceViewFactory.createUtf8View.bind(_this.binaryResourceViewFactory), _this.binaryResourceViewFactory.utf8.bind(_this.binaryResourceViewFactory))
        ];
        _this.binaryViewTypeSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('binary-view-type', 'hex');
        _this.binaryViewTypeCombobox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarComboBox(_this.binaryViewTypeChanged.bind(_assert_this_initialized(_this)), i18nString(UIStrings.binaryViewType));
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = _this.binaryViewObjects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var viewObject = _step.value;
                _this.binaryViewTypeCombobox.addOption(_this.binaryViewTypeCombobox.createOption(viewObject.label, viewObject.type));
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
        _this.toolbar.appendToolbarItem(_this.binaryViewTypeCombobox);
        var copyButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarButton(i18nString(UIStrings.copyToClipboard), 'copy');
        copyButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , function(_event) {
            void _this.copySelectedViewToClipboard();
        }, _assert_this_initialized(_this));
        _this.toolbar.appendToolbarItem(copyButton);
        _this.copiedText = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarText();
        _this.copiedText.element.classList.add('binary-view-copied-text');
        _this.toolbar.element.appendChild(_this.copiedText.element);
        _this.addFadeoutSettimeoutId = null;
        _this.lastView = null;
        _this.updateView();
        return _this;
    }
    _create_class(BinaryResourceView, [
        {
            key: "getCurrentViewObject",
            value: function getCurrentViewObject() {
                var _this = this;
                var filter = function(obj) {
                    return obj.type === _this.binaryViewTypeSetting.get();
                };
                var binaryViewObject = this.binaryViewObjects.find(filter);
                console.assert(Boolean(binaryViewObject), "No binary view found for binary view type found in setting 'binary-view-type': ".concat(this.binaryViewTypeSetting.get()));
                return binaryViewObject || null;
            }
        },
        {
            key: "copySelectedViewToClipboard",
            value: function copySelectedViewToClipboard() {
                var _this = this;
                return _async_to_generator(function() {
                    var viewObject, _, _1;
                    function addFadeoutClass() {
                        this.copiedText.element.classList.add('fadeout');
                    }
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                viewObject = _this.getCurrentViewObject();
                                if (!viewObject) {
                                    return [
                                        2
                                    ];
                                }
                                _1 = (_ = _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance).copyText;
                                return [
                                    4,
                                    viewObject.content()
                                ];
                            case 1:
                                _1.apply(_, [
                                    _state.sent()
                                ]);
                                _this.copiedText.setText(viewObject.copiedMessage);
                                _this.copiedText.element.classList.remove('fadeout');
                                if (_this.addFadeoutSettimeoutId) {
                                    clearTimeout(_this.addFadeoutSettimeoutId);
                                    _this.addFadeoutSettimeoutId = null;
                                }
                                _this.addFadeoutSettimeoutId = window.setTimeout(addFadeoutClass.bind(_this), 2000);
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
                this.updateView();
                this.registerCSSFiles([
                    _binaryResourceView_css_js__WEBPACK_IMPORTED_MODULE_3__["default"]
                ]);
            }
        },
        {
            key: "updateView",
            value: function updateView() {
                var newViewObject = this.getCurrentViewObject();
                if (!newViewObject) {
                    return;
                }
                var newView = newViewObject.getView();
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
        },
        {
            key: "binaryViewTypeChanged",
            value: function binaryViewTypeChanged() {
                var selectedOption = this.binaryViewTypeCombobox.selectedOption();
                if (!selectedOption) {
                    return;
                }
                var newViewType = selectedOption.value;
                if (this.binaryViewTypeSetting.get() === newViewType) {
                    return;
                }
                this.binaryViewTypeSetting.set(newViewType);
                this.updateView();
            }
        },
        {
            key: "addCopyToContextMenu",
            value: function addCopyToContextMenu(contextMenu, submenuItemText) {
                var copyMenu = contextMenu.clipboardSection().appendSubMenuItem(submenuItemText, false, 'copy');
                var footerSection = copyMenu.footerSection();
                var _this = this;
                footerSection.appendItem(i18nString(UIStrings.copyAsBase), /*#__PURE__*/ _async_to_generator(function() {
                    var content;
                    return _ts_generator(this, function(_state) {
                        content = _this.binaryResourceViewFactory.base64();
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(content);
                        return [
                            2
                        ];
                    });
                }), {
                    jslogContext: 'copy-as-base'
                });
                var _this1 = this;
                footerSection.appendItem(i18nString(UIStrings.copyAsHex), /*#__PURE__*/ _async_to_generator(function() {
                    var content;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this1.binaryResourceViewFactory.hex()
                                ];
                            case 1:
                                content = _state.sent();
                                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(content);
                                return [
                                    2
                                ];
                        }
                    });
                }), {
                    jslogContext: 'copy-as-hex'
                });
                var _this2 = this;
                footerSection.appendItem(i18nString(UIStrings.copyAsUtf), /*#__PURE__*/ _async_to_generator(function() {
                    var content;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this2.binaryResourceViewFactory.utf8()
                                ];
                            case 1:
                                content = _state.sent();
                                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(content);
                                return [
                                    2
                                ];
                        }
                    });
                }), {
                    jslogContext: 'copy-as-utf'
                });
            }
        }
    ]);
    return BinaryResourceView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox);
var BinaryViewObject = /*#__PURE__*/ function() {
    "use strict";
    function BinaryViewObject(type, label, copiedMessage, createViewFn, content) {
        _class_call_check(this, BinaryViewObject);
        _define_property(this, "type", void 0);
        _define_property(this, "label", void 0);
        _define_property(this, "copiedMessage", void 0);
        _define_property(this, "content", void 0);
        _define_property(this, "createViewFn", void 0);
        _define_property(this, "view", void 0);
        this.type = type;
        this.label = label;
        this.copiedMessage = copiedMessage;
        this.content = content;
        this.createViewFn = createViewFn;
        this.view = null;
    }
    _create_class(BinaryViewObject, [
        {
            key: "getView",
            value: function getView() {
                if (!this.view) {
                    this.view = this.createViewFn();
                }
                return this.view;
            }
        }
    ]);
    return BinaryViewObject;
} //# sourceMappingURL=BinaryResourceView.js.map
();


}),
"./panels/network/binaryResourceView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2019 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.panel.network .toolbar.binary-view-toolbar {\n  border-top: 1px solid var(--sys-color-divider);\n  border-bottom: 0;\n  padding-left: 5px;\n}\n\n.binary-view-copied-text {\n  opacity: 100%;\n}\n\n.binary-view-copied-text.fadeout {\n  opacity: 0%;\n  transition: opacity 1s;\n}\n\n/*# sourceURL=binaryResourceView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);