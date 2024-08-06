"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_network_NetworkManageCustomHeadersView_js"], {
"./panels/network/NetworkManageCustomHeadersView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  NetworkManageCustomHeadersView: function() { return NetworkManageCustomHeadersView; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _networkManageCustomHeadersView_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./networkManageCustomHeadersView.css.js */ "./panels/network/networkManageCustomHeadersView.css.js");
// Copyright 2016 The Chromium Authors. All rights reserved.
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



var UIStrings = {
    /**
     *@description Text in Network Manage Custom Headers View of the Network panel
     */ manageHeaderColumns: 'Manage Header Columns',
    /**
     *@description Placeholder text content in Network Manage Custom Headers View of the Network panel
     */ noCustomHeaders: 'No custom headers',
    /**
     *@description Text of add button in Network Manage Custom Headers View of the Network panel
     */ addCustomHeader: 'Add custom header…',
    /**
     *@description Text in Network Manage Custom Headers View of the Network panel
     */ headerName: 'Header Name'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/network/NetworkManageCustomHeadersView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var NetworkManageCustomHeadersView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(NetworkManageCustomHeadersView, _UI_Widget_VBox);
    var _super = _create_super(NetworkManageCustomHeadersView);
    function NetworkManageCustomHeadersView(columnData, addHeaderColumnCallback, changeHeaderColumnCallback, removeHeaderColumnCallback) {
        _class_call_check(this, NetworkManageCustomHeadersView);
        var _this;
        _this = _super.call(this, true);
        _define_property(_assert_this_initialized(_this), "list", void 0);
        _define_property(_assert_this_initialized(_this), "columnConfigs", void 0);
        _define_property(_assert_this_initialized(_this), "addHeaderColumnCallback", void 0);
        _define_property(_assert_this_initialized(_this), "changeHeaderColumnCallback", void 0);
        _define_property(_assert_this_initialized(_this), "removeHeaderColumnCallback", void 0);
        _define_property(_assert_this_initialized(_this), "editor", void 0);
        _this.contentElement.classList.add('custom-headers-wrapper');
        _this.contentElement.createChild('div', 'header').textContent = i18nString(UIStrings.manageHeaderColumns);
        _this.list = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ListWidget.ListWidget(_assert_this_initialized(_this));
        _this.list.element.classList.add('custom-headers-list');
        var placeholder = document.createElement('div');
        placeholder.classList.add('custom-headers-list-list-empty');
        placeholder.textContent = i18nString(UIStrings.noCustomHeaders);
        _this.list.setEmptyPlaceholder(placeholder);
        _this.list.show(_this.contentElement);
        _this.contentElement.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createTextButton(i18nString(UIStrings.addCustomHeader), _this.addButtonClicked.bind(_assert_this_initialized(_this)), {
            className: 'add-button',
            jslogContext: 'network.add-custom-header'
        }));
        _this.columnConfigs = new Map();
        columnData.forEach(function(columnData) {
            return _this.columnConfigs.set(columnData.title.toLowerCase(), columnData);
        });
        _this.addHeaderColumnCallback = addHeaderColumnCallback;
        _this.changeHeaderColumnCallback = changeHeaderColumnCallback;
        _this.removeHeaderColumnCallback = removeHeaderColumnCallback;
        _this.contentElement.tabIndex = 0;
        return _this;
    }
    _create_class(NetworkManageCustomHeadersView, [
        {
            key: "wasShown",
            value: function wasShown() {
                this.headersUpdated();
                this.list.registerCSSFiles([
                    _networkManageCustomHeadersView_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]
                ]);
                this.registerCSSFiles([
                    _networkManageCustomHeadersView_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]
                ]);
            }
        },
        {
            key: "headersUpdated",
            value: function headersUpdated() {
                var _this = this;
                this.list.clear();
                this.columnConfigs.forEach(function(headerData) {
                    return _this.list.appendItem({
                        header: headerData.title
                    }, headerData.editable);
                });
            }
        },
        {
            key: "addButtonClicked",
            value: function addButtonClicked() {
                this.list.addNewItem(this.columnConfigs.size, {
                    header: ''
                });
            }
        },
        {
            key: "renderItem",
            value: function renderItem(item, _editable) {
                var element = document.createElement('div');
                element.classList.add('custom-headers-list-item');
                var header = element.createChild('div', 'custom-header-name');
                header.textContent = item.header;
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip.Tooltip.install(header, item.header);
                return element;
            }
        },
        {
            key: "removeItemRequested",
            value: function removeItemRequested(item, _index) {
                this.removeHeaderColumnCallback(item.header);
                this.columnConfigs.delete(item.header.toLowerCase());
                this.headersUpdated();
            }
        },
        {
            key: "commitEdit",
            value: function commitEdit(item, editor, isNew) {
                var headerId = editor.control('header').value.trim();
                var success;
                if (isNew) {
                    success = this.addHeaderColumnCallback(headerId);
                } else {
                    success = this.changeHeaderColumnCallback(item.header, headerId);
                }
                if (success && !isNew) {
                    this.columnConfigs.delete(item.header.toLowerCase());
                }
                if (success) {
                    this.columnConfigs.set(headerId.toLowerCase(), {
                        title: headerId,
                        editable: true
                    });
                }
                this.headersUpdated();
            }
        },
        {
            key: "beginEdit",
            value: function beginEdit(item) {
                var editor = this.createEditor();
                editor.control('header').value = item.header;
                return editor;
            }
        },
        {
            key: "createEditor",
            value: function createEditor() {
                if (this.editor) {
                    return this.editor;
                }
                var editor = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ListWidget.Editor();
                this.editor = editor;
                var content = editor.contentElement();
                var titles = content.createChild('div', 'custom-headers-edit-row');
                titles.createChild('div', 'custom-headers-header').textContent = i18nString(UIStrings.headerName);
                var fields = content.createChild('div', 'custom-headers-edit-row');
                fields.createChild('div', 'custom-headers-header').appendChild(editor.createInput('header', 'text', 'x-custom-header', validateHeader.bind(this)));
                return editor;
                function validateHeader(item, _index, _input) {
                    var valid = true;
                    var headerId = editor.control('header').value.trim().toLowerCase();
                    if (this.columnConfigs.has(headerId) && item.header !== headerId) {
                        valid = false;
                    }
                    return {
                        valid: valid,
                        errorMessage: undefined
                    };
                }
            }
        }
    ]);
    return NetworkManageCustomHeadersView;
} //# sourceMappingURL=NetworkManageCustomHeadersView.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Widget.VBox);


}),
"./panels/network/networkManageCustomHeadersView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2016 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.custom-headers-list {\n  height: 272px;\n  width: 250px;\n}\n\n.custom-headers-wrapper {\n  margin: 10px;\n}\n\n.header {\n  padding: 0 0 6px;\n  font-size: 18px;\n  font-weight: normal;\n  flex: none;\n}\n\n.custom-headers-header {\n  padding: 2px;\n}\n\n.custom-headers-list-item {\n  padding-left: 5px;\n}\n\n.editor-container {\n  padding: 5px 0 0 5px;\n}\n\n.add-button {\n  width: 150px;\n  margin: auto;\n  margin-top: 5px;\n}\n\n/*# sourceURL=networkManageCustomHeadersView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);