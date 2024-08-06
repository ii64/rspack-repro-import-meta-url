"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_ScopeChainSidebarPane_js"], {
"./panels/sources/ScopeChainSidebarPane.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ScopeChainSidebarPane: function() { return ScopeChainSidebarPane; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/source_map_scopes/source_map_scopes.js */ "./models/source_map_scopes/source_map_scopes.js");
/* harmony import */var _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/object_ui.js */ "./ui/legacy/components/object_ui/object_ui.js");
/* harmony import */var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _scopeChainSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scopeChainSidebarPane.css.js */ "./panels/sources/scopeChainSidebarPane.css.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
     *@description Loading indicator in Scope Sidebar Pane of the Sources panel
     */ loading: 'Loading...',
    /**
     *@description Not paused message element text content in Call Stack Sidebar Pane of the Sources panel
     */ notPaused: 'Not paused',
    /**
     *@description Empty placeholder in Scope Chain Sidebar Pane of the Sources panel
     */ noVariables: 'No variables',
    /**
     *@description Text in the Sources panel Scope pane describing a closure scope.
     *@example {func} PH1
     */ closureS: 'Closure ({PH1})',
    /**
     *@description Text that refers to closure as a programming term
     */ closure: 'Closure'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/sources/ScopeChainSidebarPane.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var scopeChainSidebarPaneInstance;
var _scopeChainModel = /*#__PURE__*/ new WeakMap();
var ScopeChainSidebarPane = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(ScopeChainSidebarPane, _UI_Widget_VBox);
    var _super = _create_super(ScopeChainSidebarPane);
    function ScopeChainSidebarPane() {
        _class_call_check(this, ScopeChainSidebarPane);
        var _this;
        _this = _super.call(this, true);
        _define_property(_assert_this_initialized(_this), "treeOutline", void 0);
        _define_property(_assert_this_initialized(_this), "expandController", void 0);
        _define_property(_assert_this_initialized(_this), "linkifier", void 0);
        _define_property(_assert_this_initialized(_this), "infoElement", void 0);
        _class_private_field_init(_assert_this_initialized(_this), _scopeChainModel, {
            writable: true,
            value: null
        });
        _this.contentElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.section('sources.scope-chain')));
        _this.treeOutline = new _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_3__.ObjectPropertiesSection.ObjectPropertiesSectionsTreeOutline();
        _this.treeOutline.hideOverflow();
        _this.treeOutline.setShowSelectionOnKeyboardFocus(/* show */ true);
        _this.expandController = new _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_3__.ObjectPropertiesSection.ObjectPropertiesSectionsTreeExpandController(_this.treeOutline);
        _this.linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.Linkifier.Linkifier();
        _this.infoElement = document.createElement('div');
        _this.infoElement.className = 'gray-info-message';
        _this.infoElement.tabIndex = -1;
        _this.flavorChanged(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.CallFrame));
        return _this;
    }
    _create_class(ScopeChainSidebarPane, [
        {
            key: "flavorChanged",
            value: function flavorChanged(callFrame) {
                var _this = this;
                var _$_class_private_field_get;
                (_$_class_private_field_get = _class_private_field_get(this, _scopeChainModel)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.dispose();
                _class_private_field_set(this, _scopeChainModel, null);
                this.linkifier.reset();
                this.contentElement.removeChildren();
                this.contentElement.appendChild(this.infoElement);
                if (callFrame) {
                    // Resolving the scope may take a while to complete, so indicate to the user that something
                    // is happening (see https://crbug.com/1162416).
                    this.infoElement.textContent = i18nString(UIStrings.loading);
                    _class_private_field_set(this, _scopeChainModel, new _models_source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_2__.ScopeChainModel.ScopeChainModel(callFrame));
                    _class_private_field_get(this, _scopeChainModel).addEventListener("ScopeChainUpdated" /* SourceMapScopes.ScopeChainModel.Events.ScopeChainUpdated */ , function(event) {
                        return _this.buildScopeTreeOutline(event.data);
                    }, this);
                } else {
                    this.infoElement.textContent = i18nString(UIStrings.notPaused);
                }
            }
        },
        {
            key: "focus",
            value: function focus() {
                if (this.hasFocus()) {
                    return;
                }
                if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerPausedDetails)) {
                    this.treeOutline.forceSelect();
                }
            }
        },
        {
            key: "buildScopeTreeOutline",
            value: function buildScopeTreeOutline(eventScopeChain) {
                var scopeChain = eventScopeChain.scopeChain;
                this.treeOutline.removeChildren();
                this.contentElement.removeChildren();
                this.contentElement.appendChild(this.treeOutline.element);
                var foundLocalScope = false;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = scopeChain.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array(_step.value, 2), i = _step_value[0], scope = _step_value[1];
                        if (scope.type() === "local" /* Protocol.Debugger.ScopeType.Local */ ) {
                            foundLocalScope = true;
                        }
                        var section = this.createScopeSectionTreeElement(scope);
                        if (scope.type() === "global" /* Protocol.Debugger.ScopeType.Global */ ) {
                            section.collapse();
                        } else if (!foundLocalScope || scope.type() === "local" /* Protocol.Debugger.ScopeType.Local */ ) {
                            section.expand();
                        }
                        this.treeOutline.appendChild(section);
                        if (i === 0) {
                            section.select(/* omitFocus */ true);
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
                this.sidebarPaneUpdatedForTest();
            }
        },
        {
            key: "createScopeSectionTreeElement",
            value: function createScopeSectionTreeElement(scope) {
                var emptyPlaceholder = null;
                if (scope.type() === "local" /* Protocol.Debugger.ScopeType.Local */  || scope.type() === "closure" /* Protocol.Debugger.ScopeType.Closure */ ) {
                    emptyPlaceholder = i18nString(UIStrings.noVariables);
                }
                var title = scope.typeName();
                if (scope.type() === "closure" /* Protocol.Debugger.ScopeType.Closure */ ) {
                    var scopeName = scope.name();
                    if (scopeName) {
                        title = i18nString(UIStrings.closureS, {
                            PH1: _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.beautifyFunctionName(scopeName)
                        });
                    } else {
                        title = i18nString(UIStrings.closure);
                    }
                }
                var subtitle = scope.description();
                if (!title || title === subtitle) {
                    subtitle = null;
                }
                var icon = scope.icon();
                var titleElement = document.createElement('div');
                titleElement.classList.add('scope-chain-sidebar-pane-section-header');
                titleElement.classList.add('tree-element-title');
                if (icon) {
                    var iconElement = document.createElement('img');
                    iconElement.classList.add('scope-chain-sidebar-pane-section-icon');
                    iconElement.src = icon;
                    titleElement.appendChild(iconElement);
                }
                titleElement.createChild('div', 'scope-chain-sidebar-pane-section-subtitle').textContent = subtitle;
                titleElement.createChild('div', 'scope-chain-sidebar-pane-section-title').textContent = title;
                var section = new _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_3__.ObjectPropertiesSection.RootElement(scope.object(), this.linkifier, emptyPlaceholder, 0 /* ObjectUI.ObjectPropertiesSection.ObjectPropertiesMode.All */ , scope.extraProperties());
                section.title = titleElement;
                section.listItemElement.classList.add('scope-chain-sidebar-pane-section');
                section.listItemElement.setAttribute('aria-label', title);
                this.expandController.watchSection(title + (subtitle ? ':' + subtitle : ''), section);
                return section;
            }
        },
        {
            key: "sidebarPaneUpdatedForTest",
            value: function sidebarPaneUpdatedForTest() {}
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(ScopeChainSidebarPane.prototype), "wasShown", this).call(this);
                this.treeOutline.registerCSSFiles([
                    _scopeChainSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]
                ]);
                this.registerCSSFiles([
                    _scopeChainSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]
                ]);
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                if (!scopeChainSidebarPaneInstance) {
                    scopeChainSidebarPaneInstance = new ScopeChainSidebarPane();
                }
                return scopeChainSidebarPaneInstance;
            }
        }
    ]);
    return ScopeChainSidebarPane;
} //# sourceMappingURL=ScopeChainSidebarPane.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox);


}),
"./panels/sources/scopeChainSidebarPane.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2017 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.scope-chain-sidebar-pane-section-header {\n  flex: auto;\n}\n\n.scope-chain-sidebar-pane-section-icon {\n  float: left;\n  margin-right: 5px;\n}\n\n.scope-chain-sidebar-pane-section-subtitle {\n  float: right;\n  margin-left: 5px;\n  max-width: 55%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.scope-chain-sidebar-pane-section-title {\n  font-weight: normal;\n  word-wrap: break-word;\n  white-space: normal;\n}\n\n.scope-chain-sidebar-pane-section {\n  padding: 2px 4px;\n  flex: none;\n}\n\n/*# sourceURL=scopeChainSidebarPane.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);