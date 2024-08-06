"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_protocol_monitor_components_JSONEditor_js"], {
"./panels/elements/components/Helper.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  legacyNodeToElementsComponentsNode: function() { return legacyNodeToElementsComponentsNode; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var legacyNodeToElementsComponentsNode = function(node) {
    return {
        parentNode: node.parentNode ? legacyNodeToElementsComponentsNode(node.parentNode) : null,
        id: node.id,
        nodeType: node.nodeType(),
        pseudoType: node.pseudoType(),
        shadowRootType: node.shadowRootType(),
        nodeName: node.nodeName(),
        nodeNameNicelyCased: node.nodeNameInCorrectCase(),
        legacyDomNode: node,
        highlightNode: function(mode) {
            return node.highlight(mode);
        },
        clearHighlight: function() {
            return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
        },
        getAttribute: node.getAttribute.bind(node)
    };
}; //# sourceMappingURL=Helper.js.map


}),
"./panels/elements/components/LayoutPaneUtils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
 //# sourceMappingURL=LayoutPaneUtils.js.map


}),
"./panels/elements/components/components.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AccessibilityTreeNode: function() { return /* reexport module object */ _AccessibilityTreeNode_js__WEBPACK_IMPORTED_MODULE_0__; },
  AdornerManager: function() { return /* reexport module object */ _AdornerManager_js__WEBPACK_IMPORTED_MODULE_1__; },
  AdornerSettingsPane: function() { return /* reexport module object */ _AdornerSettingsPane_js__WEBPACK_IMPORTED_MODULE_2__; },
  AnchorFunctionLinkSwatch: function() { return /* reexport module object */ _AnchorFunctionLinkSwatch_js__WEBPACK_IMPORTED_MODULE_3__; },
  CSSHintDetailsView: function() { return /* reexport module object */ _CSSHintDetailsView_js__WEBPACK_IMPORTED_MODULE_6__; },
  CSSPropertyDocsView: function() { return /* reexport module object */ _CSSPropertyDocsView_js__WEBPACK_IMPORTED_MODULE_7__; },
  CSSPropertyIconResolver: function() { return /* reexport module object */ _CSSPropertyIconResolver_js__WEBPACK_IMPORTED_MODULE_8__; },
  CSSQuery: function() { return /* reexport module object */ _CSSQuery_js__WEBPACK_IMPORTED_MODULE_9__; },
  CSSVariableValueView: function() { return /* reexport module object */ _CSSVariableValueView_js__WEBPACK_IMPORTED_MODULE_10__; },
  ComputedStyleProperty: function() { return /* reexport module object */ _ComputedStyleProperty_js__WEBPACK_IMPORTED_MODULE_4__; },
  ComputedStyleTrace: function() { return /* reexport module object */ _ComputedStyleTrace_js__WEBPACK_IMPORTED_MODULE_5__; },
  ElementsBreadcrumbs: function() { return /* reexport module object */ _ElementsBreadcrumbs_js__WEBPACK_IMPORTED_MODULE_11__; },
  ElementsBreadcrumbsUtils: function() { return /* reexport module object */ _ElementsBreadcrumbsUtils_js__WEBPACK_IMPORTED_MODULE_12__; },
  ElementsTreeExpandButton: function() { return /* reexport module object */ _ElementsTreeExpandButton_js__WEBPACK_IMPORTED_MODULE_13__; },
  Helper: function() { return /* reexport module object */ _Helper_js__WEBPACK_IMPORTED_MODULE_14__; },
  LayoutPane: function() { return /* reexport module object */ _LayoutPane_js__WEBPACK_IMPORTED_MODULE_15__; },
  LayoutPaneUtils: function() { return /* reexport module object */ _LayoutPaneUtils_js__WEBPACK_IMPORTED_MODULE_16__; },
  QueryContainer: function() { return /* reexport module object */ _QueryContainer_js__WEBPACK_IMPORTED_MODULE_17__; },
  StylePropertyEditor: function() { return /* reexport module object */ _StylePropertyEditor_js__WEBPACK_IMPORTED_MODULE_18__; }
});
/* harmony import */var _AccessibilityTreeNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccessibilityTreeNode.js */ "./panels/elements/components/AccessibilityTreeNode.js");
/* harmony import */var _AdornerManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdornerManager.js */ "./panels/elements/components/AdornerManager.js");
/* harmony import */var _AdornerSettingsPane_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdornerSettingsPane.js */ "./panels/elements/components/AdornerSettingsPane.js");
/* harmony import */var _AnchorFunctionLinkSwatch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnchorFunctionLinkSwatch.js */ "./panels/elements/components/AnchorFunctionLinkSwatch.js");
/* harmony import */var _ComputedStyleProperty_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ComputedStyleProperty.js */ "./panels/elements/components/ComputedStyleProperty.js");
/* harmony import */var _ComputedStyleTrace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ComputedStyleTrace.js */ "./panels/elements/components/ComputedStyleTrace.js");
/* harmony import */var _CSSHintDetailsView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CSSHintDetailsView.js */ "./panels/elements/components/CSSHintDetailsView.js");
/* harmony import */var _CSSPropertyDocsView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CSSPropertyDocsView.js */ "./panels/elements/components/CSSPropertyDocsView.js");
/* harmony import */var _CSSPropertyIconResolver_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CSSPropertyIconResolver.js */ "./panels/elements/components/CSSPropertyIconResolver.js");
/* harmony import */var _CSSQuery_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CSSQuery.js */ "./panels/elements/components/CSSQuery.js");
/* harmony import */var _CSSVariableValueView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CSSVariableValueView.js */ "./panels/elements/components/CSSVariableValueView.js");
/* harmony import */var _ElementsBreadcrumbs_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ElementsBreadcrumbs.js */ "./panels/elements/components/ElementsBreadcrumbs.js");
/* harmony import */var _ElementsBreadcrumbsUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ElementsBreadcrumbsUtils.js */ "./panels/elements/components/ElementsBreadcrumbsUtils.js");
/* harmony import */var _ElementsTreeExpandButton_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ElementsTreeExpandButton.js */ "./panels/elements/components/ElementsTreeExpandButton.js");
/* harmony import */var _Helper_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Helper.js */ "./panels/elements/components/Helper.js");
/* harmony import */var _LayoutPane_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./LayoutPane.js */ "./panels/elements/components/LayoutPane.js");
/* harmony import */var _LayoutPaneUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./LayoutPaneUtils.js */ "./panels/elements/components/LayoutPaneUtils.js");
/* harmony import */var _QueryContainer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./QueryContainer.js */ "./panels/elements/components/QueryContainer.js");
/* harmony import */var _StylePropertyEditor_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./StylePropertyEditor.js */ "./panels/elements/components/StylePropertyEditor.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



















 //# sourceMappingURL=components.js.map


}),
"./panels/protocol_monitor/components/JSONEditor.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2023 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-size: inherit;\n}\n\n:host {\n  display: block;\n  height: 100%;\n}\n\n.target-select-menu {\n  max-width: 180px;\n}\n\n.warning-icon {\n  margin-left: -18px;\n  margin-right: 4px;\n}\n\n.row {\n  flex-wrap: wrap;\n}\n\n.row,\n.row-icons {\n  display: flex;\n  flex-direction: row;\n  color: var(--sys-color-token-property-special);\n  font-family: var(--monospace-font-family);\n  font-size: var(--monospace-font-size);\n  align-items: center;\n  line-height: 18px;\n  margin-top: 3px;\n}\n\n.separator {\n  margin-right: 0.5em;\n  color: var(--sys-color-on-surface);\n}\n\nul {\n  padding-left: 2em;\n}\n\n.optional-parameter {\n  color: var(--sys-color-token-attribute-value);\n\n  --override-color-recorder-input: var(--sys-color-on-surface);\n}\n\n.undefined-parameter {\n  color: var(--sys-color-state-disabled);\n}\n\n.wrapper {\n  padding-left: 1em;\n  overflow-x: hidden;\n  height: 100%;\n  width: 100%;\n  padding-bottom: 50px;\n  padding-top: 0.5em;\n}\n\n.clear-button,\n.add-button,\n.delete-button {\n  opacity: 0%;\n  transition: opacity 0.3s ease-in-out;\n}\n\n.clear-button,\n.delete-button {\n  margin-left: 5px;\n}\n\n.row:focus-within .delete-button,\n.row:focus-within .add-button,\n.row:focus-within .clear-button,\n.row:hover .delete-button,\n.row:hover .add-button,\n.row:hover .clear-button {\n  opacity: 100%;\n}\n\n/*# sourceURL=JSONEditor.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./panels/protocol_monitor/components/JSONEditor.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  JSONEditor: function() { return JSONEditor; },
  SubmitEditorEvent: function() { return SubmitEditorEvent; },
  suggestionFilter: function() { return suggestionFilter; }
});
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/dialogs/dialogs.js */ "./ui/components/dialogs/dialogs.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/menus/menus.js */ "./ui/components/menus/menus.js");
/* harmony import */var _ui_components_suggestion_input_suggestion_input_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/components/suggestion_input/suggestion_input.js */ "./ui/components/suggestion_input/suggestion_input.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _elements_components_components_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../elements/components/components.js */ "./panels/elements/components/components.js");
/* harmony import */var _JSONEditor_css_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./JSONEditor.css.js */ "./panels/protocol_monitor/components/JSONEditor.css.js");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
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
        '\n      <div class="row attribute padded">\n        <div>parameters<span class="separator">:</span></div>\n      </div>\n        ',
        "\n      "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '\n    <div class="wrapper">\n      ',
        '\n      <div class="row attribute padded">\n        <div class="command">command<span class="separator">:</span></div>\n        <devtools-suggestion-input\n          .options=',
        "\n          .value=",
        "\n          .placeholder=",
        "\n          .suggestionFilter=",
        "\n          .jslogContext=",
        "\n          @blur=",
        "\n          class=",
        "\n        ></devtools-suggestion-input>\n      </div>\n      ",
        "\n    </div>\n    <devtools-pm-toolbar @copycommand=",
        " @commandsent=",
        "></devtools-pm-toolbar>"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n                <",
        "\n                  .value=",
        ">\n                    ",
        "\n                </",
        ">\n              "
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        '\n    <div class="row attribute padded">\n      <div>target<span class="separator">:</span></div>\n      <',
        '\n            class="target-select-menu"\n            @selectmenuselected=',
        "\n            .showDivider=",
        "\n            .showArrow=",
        "\n            .sideButton=",
        "\n            .showSelectedItem=",
        "\n            .showConnector=",
        "\n            .position=",
        "\n            .buttonTitle=",
        "\n            jslog=",
        "\n          >\n          ",
        "\n          </",
        ">\n    </div>\n  "
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "\n          <devtools-button\n            title=",
        "\n            .size=",
        "\n            .iconName=",
        "\n            .variant=",
        "\n            class=",
        "\n            @click=",
        "\n            .jslogContext=",
        "\n          ></devtools-button>\n        "
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "<",
        "\n    .data=",
        "\n    class=",
        "\n  >\n  </",
        ">"
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        "",
        ""
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        "<devtools-suggestion-input\n                              data-paramId=",
        "\n                              isKey=",
        "\n                              .isCorrectInput=",
        "\n                              .options=",
        "\n                              .autocomplete=",
        "\n                              .value=",
        "\n                              .placeholder=",
        "\n                              @blur=",
        "\n                              @focus=",
        "\n                              @keydown=",
        "\n                            ></devtools-suggestion-input>"
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = _tagged_template_literal([
        "",
        ""
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = _tagged_template_literal([
        "\n                        ",
        "\n                      "
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject10() {
    var data = _tagged_template_literal([
        "  ",
        ""
    ]);
    _templateObject10 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject11() {
    var data = _tagged_template_literal([
        "  ",
        ""
    ]);
    _templateObject11 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject12() {
    var data = _tagged_template_literal([
        "\n                      <devtools-suggestion-input\n                          data-paramId=",
        "\n                          .isCorrectInput=",
        "\n                          .options=",
        "\n                          .autocomplete=",
        "\n                          .value=",
        "\n                          .placeholder=",
        "\n                          .jslogContext=",
        "\n                          @blur=",
        "\n                          @focus=",
        "\n                          @keydown=",
        "\n                        ></devtools-suggestion-input>\n\n                        ",
        ""
    ]);
    _templateObject12 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject13() {
    var data = _tagged_template_literal([
        "\n                        <devtools-suggestion-input\n                          data-paramId=",
        "\n                          .strikethrough=",
        "\n                          .options=",
        "\n                          .autocomplete=",
        "\n                          .value=",
        "\n                          .placeholder=",
        "\n                          .jslogContext=",
        "\n                          @blur=",
        "\n                          @focus=",
        "\n                          @keydown=",
        "\n                        ></devtools-suggestion-input>"
    ]);
    _templateObject13 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject14() {
    var data = _tagged_template_literal([
        "  ",
        ""
    ]);
    _templateObject14 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject15() {
    var data = _tagged_template_literal([
        "\n                      ",
        "\n                    "
    ]);
    _templateObject15 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject16() {
    var data = _tagged_template_literal([
        "\n                    <devtools-suggestion-input\n                      data-paramId=",
        "\n                      .options=",
        "\n                      .autocomplete=",
        "\n                      .value=",
        "\n                      .placeholder=",
        "\n                      .jslogContext=",
        "\n                      @blur=",
        "\n                      @keydown=",
        "\n                      class=",
        "\n                    ></devtools-suggestion-input>"
    ]);
    _templateObject16 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject17() {
    var data = _tagged_template_literal([
        "\n                    <!-- If the parameter is an object we don't want to display the input field we just want the delete button-->\n                    ",
        "\n\n                    ",
        ""
    ]);
    _templateObject17 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject18() {
    var data = _tagged_template_literal([
        '\n                <li class="row">\n                  <div class="row-icons">\n                      ',
        "\n\n                      <!-- If an object parameter has no predefined keys, show an input to enter the key, otherwise show the name of the parameter -->\n                      <div class=",
        " data-paramId=",
        ">\n                          ",
        ' <span class="separator">:</span>\n                      </div>\n\n                      <!-- Render button to add values inside an array parameter -->\n                      ',
        "\n\n                      <!-- Render button to complete reset an array parameter or an object parameter-->\n                      ",
        "\n\n                      <!-- Render the buttons to change the value from undefined to empty string for optional primitive parameters -->\n                      ",
        "\n\n                      <!-- Render the buttons to change the value from undefined to populate the values inside object with their default values -->\n                      ",
        '\n                  </div>\n\n                  <div class="row-icons">\n                      <!-- If an object has no predefined keys, show an input to enter the value, and a delete icon to delete the whole key/value pair -->\n                      ',
        "\n\n                    <!-- In case  the parameter is not optional or its value is not undefined render the input -->\n                    ",
        "\n\n                    <!-- Render the buttons to change the value from empty string to undefined for optional primitive parameters -->\n                    ",
        "\n\n                    <!-- If the parameter is an object with no predefined keys, renders a button to add key/value pairs to it's value -->\n                    ",
        "\n\n                    <!-- In case the parameter is nested inside an array we render the input field as well as a delete button -->\n                    ",
        "\n                  </div>\n                </li>\n                ",
        "\n              "
    ]);
    _templateObject18 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject19() {
    var data = _tagged_template_literal([
        "\n      <ul>\n        ",
        "\n      </ul>\n    "
    ]);
    _templateObject19 = function _templateObject() {
        return data;
    };
    return data;
}
var _hintPopoverHelper, _handleAvailableTargetsChanged, _convertObjectToParameterSchema, _convertPrimitiveParameter, _convertObjectParameter, _convertArrayParameter, _handlePopoverDescriptions, _getDescriptionAndTypeForElement, _copyToClipboard, _handleCommandSend, _populateParameterDefaults, _getChildByPath, _isValueOfCorrectType, _saveParameterValue, _saveNestedObjectParameterKey, _handleParameterInputKeydown, _handleFocusParameter, _handleCommandInputBlur, _computeTargetLabel, _isTypePrimitive, _createNestedParameter, _handleAddParameter, _handleClearParameter, _handleDeleteParameter, _renderTargetSelectorRow, _onTargetSelected, _computeDropdownValues, _renderInlineButton, _renderWarningIcon, /**
     * Renders the parameters list corresponding to a specific CDP command.
     */ _renderParameters, _JSONEditor;
var __decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if ((typeof Reflect === "undefined" ? "undefined" : _type_of(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.













var html = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html, Decorators = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.Decorators, LitElement = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.LitElement, Directives = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.Directives, nothing = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.nothing;
var customElement = Decorators.customElement, property = Decorators.property, state = Decorators.state;
var live = Directives.live, classMap = Directives.classMap, repeat = Directives.repeat;
var UIStrings = {
    /**
     *@description The title of a button that deletes a parameter.
     */ deleteParameter: 'Delete parameter',
    /**
     *@description The title of a button that adds a parameter.
     */ addParameter: 'Add a parameter',
    /**
     *@description The title of a button that reset the value of a paremeters to its default value.
     */ resetDefaultValue: 'Reset to default value',
    /**
     *@description The title of a button to add custom key/value pairs to object parameters with no keys defined
     */ addCustomProperty: 'Add custom property'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/protocol_monitor/components/JSONEditor.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
/**
 * Parents should listen for this event and register the listeners provided by
 * this event"
 */ var SubmitEditorEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(SubmitEditorEvent, Event1);
    var _super = _create_super(SubmitEditorEvent);
    function SubmitEditorEvent(data) {
        _class_call_check(this, SubmitEditorEvent);
        var _this;
        _this = _super.call(this, SubmitEditorEvent.eventName);
        _define_property(_assert_this_initialized(_this), "data", void 0);
        _this.data = data;
        return _this;
    }
    return SubmitEditorEvent;
}(_wrap_native_super(Event));
_define_property(SubmitEditorEvent, "eventName", 'submiteditor');
var splitDescription = function(description) {
    // If the description is too long we make the UI a bit better by highlighting the first sentence
    // which contains the most informations.
    // The number 150 has been chosen arbitrarily
    if (description.length > 150) {
        var _description_split = _sliced_to_array(description.split('.'), 2), firstSentence = _description_split[0], restOfDescription = _description_split[1];
        // To make the UI nicer, we add a dot at the end of the first sentence.
        firstSentence + '.';
        return [
            firstSentence,
            restOfDescription
        ];
    }
    return [
        description,
        ''
    ];
};
var defaultValueByType = new Map([
    [
        'string',
        ''
    ],
    [
        'number',
        0
    ],
    [
        'boolean',
        false
    ]
]);
var DUMMY_DATA = 'dummy';
var EMPTY_STRING = '<empty_string>';
function suggestionFilter(option, query) {
    return option.toLowerCase().includes(query.toLowerCase());
}
var JSONEditor = (_hintPopoverHelper = /*#__PURE__*/ new WeakMap(), _handleAvailableTargetsChanged = /*#__PURE__*/ new WeakSet(), _convertObjectToParameterSchema = /*#__PURE__*/ new WeakSet(), _convertPrimitiveParameter = /*#__PURE__*/ new WeakSet(), _convertObjectParameter = /*#__PURE__*/ new WeakSet(), _convertArrayParameter = /*#__PURE__*/ new WeakSet(), _handlePopoverDescriptions = /*#__PURE__*/ new WeakSet(), _getDescriptionAndTypeForElement = /*#__PURE__*/ new WeakSet(), _copyToClipboard = /*#__PURE__*/ new WeakSet(), _handleCommandSend = /*#__PURE__*/ new WeakSet(), _populateParameterDefaults = /*#__PURE__*/ new WeakSet(), _getChildByPath = /*#__PURE__*/ new WeakSet(), _isValueOfCorrectType = /*#__PURE__*/ new WeakSet(), _saveParameterValue = /*#__PURE__*/ new WeakMap(), _saveNestedObjectParameterKey = /*#__PURE__*/ new WeakMap(), _handleParameterInputKeydown = /*#__PURE__*/ new WeakMap(), _handleFocusParameter = /*#__PURE__*/ new WeakSet(), _handleCommandInputBlur = /*#__PURE__*/ new WeakMap(), _computeTargetLabel = /*#__PURE__*/ new WeakSet(), _isTypePrimitive = /*#__PURE__*/ new WeakSet(), _createNestedParameter = /*#__PURE__*/ new WeakSet(), _handleAddParameter = /*#__PURE__*/ new WeakSet(), _handleClearParameter = /*#__PURE__*/ new WeakSet(), _handleDeleteParameter = /*#__PURE__*/ new WeakSet(), _renderTargetSelectorRow = /*#__PURE__*/ new WeakSet(), _onTargetSelected = /*#__PURE__*/ new WeakSet(), _computeDropdownValues = /*#__PURE__*/ new WeakSet(), _renderInlineButton = /*#__PURE__*/ new WeakSet(), _renderWarningIcon = /*#__PURE__*/ new WeakSet(), _renderParameters = /*#__PURE__*/ new WeakSet(), _JSONEditor = /*#__PURE__*/ function(LitElement) {
    "use strict";
    _inherits(JSONEditor, LitElement);
    var _super = _create_super(JSONEditor);
    function JSONEditor() {
        _class_call_check(this, JSONEditor);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _handleAvailableTargetsChanged);
        _class_private_method_init(_assert_this_initialized(_this), _convertObjectToParameterSchema);
        _class_private_method_init(_assert_this_initialized(_this), _convertPrimitiveParameter);
        _class_private_method_init(_assert_this_initialized(_this), _convertObjectParameter);
        _class_private_method_init(_assert_this_initialized(_this), _convertArrayParameter);
        _class_private_method_init(_assert_this_initialized(_this), _handlePopoverDescriptions);
        _class_private_method_init(_assert_this_initialized(_this), _getDescriptionAndTypeForElement);
        _class_private_method_init(_assert_this_initialized(_this), _copyToClipboard);
        _class_private_method_init(_assert_this_initialized(_this), _handleCommandSend);
        _class_private_method_init(_assert_this_initialized(_this), _populateParameterDefaults);
        _class_private_method_init(_assert_this_initialized(_this), _getChildByPath);
        _class_private_method_init(_assert_this_initialized(_this), _isValueOfCorrectType);
        _class_private_method_init(_assert_this_initialized(_this), _handleFocusParameter);
        _class_private_method_init(_assert_this_initialized(_this), _computeTargetLabel);
        _class_private_method_init(_assert_this_initialized(_this), _isTypePrimitive);
        _class_private_method_init(_assert_this_initialized(_this), _createNestedParameter);
        _class_private_method_init(_assert_this_initialized(_this), _handleAddParameter);
        _class_private_method_init(_assert_this_initialized(_this), _handleClearParameter);
        _class_private_method_init(_assert_this_initialized(_this), _handleDeleteParameter);
        _class_private_method_init(_assert_this_initialized(_this), _renderTargetSelectorRow);
        _class_private_method_init(_assert_this_initialized(_this), _onTargetSelected);
        _class_private_method_init(_assert_this_initialized(_this), _computeDropdownValues);
        _class_private_method_init(_assert_this_initialized(_this), _renderInlineButton);
        _class_private_method_init(_assert_this_initialized(_this), _renderWarningIcon);
        _class_private_method_init(_assert_this_initialized(_this), _renderParameters);
        _define_property(_assert_this_initialized(_this), "command", '');
        _define_property(_assert_this_initialized(_this), "targetId", void 0);
        _class_private_field_init(_assert_this_initialized(_this), _hintPopoverHelper, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _saveParameterValue, {
            writable: true,
            value: function(event) {
                if (!_instanceof(event.target, _ui_components_suggestion_input_suggestion_input_js__WEBPACK_IMPORTED_MODULE_7__.SuggestionInput.SuggestionInput)) {
                    return;
                }
                var value;
                if (_instanceof(event, KeyboardEvent)) {
                    var editableContent = event.target.renderRoot.querySelector('devtools-editable-content');
                    if (!editableContent) {
                        return;
                    }
                    value = editableContent.innerText;
                } else {
                    value = event.target.value;
                }
                var paramId = event.target.getAttribute('data-paramid');
                if (!paramId) {
                    return;
                }
                var pathArray = paramId.split('.');
                var object = _class_private_method_get(_this, _getChildByPath, getChildByPath).call(_this, pathArray).parameter;
                if (value === '') {
                    object.value = defaultValueByType.get(object.type);
                } else {
                    object.value = value;
                    object.isCorrectType = _class_private_method_get(_this, _isValueOfCorrectType, isValueOfCorrectType).call(_assert_this_initialized(_this), object, value);
                }
                // Needed to render the delete button for object parameters
                _this.requestUpdate();
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _saveNestedObjectParameterKey, {
            writable: true,
            value: function(event) {
                if (!_instanceof(event.target, _ui_components_suggestion_input_suggestion_input_js__WEBPACK_IMPORTED_MODULE_7__.SuggestionInput.SuggestionInput)) {
                    return;
                }
                var value = event.target.value;
                var paramId = event.target.getAttribute('data-paramid');
                if (!paramId) {
                    return;
                }
                var pathArray = paramId.split('.');
                var parameter = _class_private_method_get(_this, _getChildByPath, getChildByPath).call(_assert_this_initialized(_this), pathArray).parameter;
                parameter.name = value;
                // Needed to render the delete button for object parameters
                _this.requestUpdate();
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleParameterInputKeydown, {
            writable: true,
            value: function(event) {
                if (!_instanceof(event.target, _ui_components_suggestion_input_suggestion_input_js__WEBPACK_IMPORTED_MODULE_7__.SuggestionInput.SuggestionInput)) {
                    return;
                }
                if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
                    _class_private_field_get(_this, _saveParameterValue).call(_assert_this_initialized(_this), event);
                }
            }
        });
        var _this1 = _assert_this_initialized(_this);
        _class_private_field_init(_assert_this_initialized(_this), _handleCommandInputBlur, {
            writable: true,
            value: function() {
                var _ref = _async_to_generator(function(event) {
                    return _ts_generator(this, function(_state) {
                        if (_instanceof(event.target, _ui_components_suggestion_input_suggestion_input_js__WEBPACK_IMPORTED_MODULE_7__.SuggestionInput.SuggestionInput)) {
                            _this1.command = event.target.value;
                        }
                        _this1.populateParametersForCommandWithDefaultValues();
                        return [
                            2
                        ];
                    });
                });
                return function(event) {
                    return _ref.apply(this, arguments);
                };
            }()
        });
        _this.parameters = [];
        _this.targets = [];
        _this.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
                _class_private_field_get(_this, _handleParameterInputKeydown).call(_assert_this_initialized(_this), event);
                _this.dispatchEvent(new SubmitEditorEvent({
                    command: _this.command,
                    parameters: _this.getParameters(),
                    targetId: _this.targetId
                }));
            }
        });
        return _this;
    }
    _create_class(JSONEditor, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                var _this = this;
                _get(_get_prototype_of(JSONEditor.prototype), "connectedCallback", this).call(this);
                _class_private_field_set(this, _hintPopoverHelper, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.PopoverHelper.PopoverHelper(this, function(event) {
                    return _class_private_method_get(_this, _handlePopoverDescriptions, handlePopoverDescriptions).call(_this, event);
                }, 'protocol-monitor.hint'));
                _class_private_field_get(this, _hintPopoverHelper).setDisableOnClick(true);
                _class_private_field_get(this, _hintPopoverHelper).setTimeout(300);
                _class_private_field_get(this, _hintPopoverHelper).setHasPadding(true);
                var targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance();
                targetManager.addEventListener("AvailableTargetsChanged" /* SDK.TargetManager.Events.AvailableTargetsChanged */ , _class_private_method_get(this, _handleAvailableTargetsChanged, handleAvailableTargetsChanged), this);
                _class_private_method_get(this, _handleAvailableTargetsChanged, handleAvailableTargetsChanged).call(this);
            }
        },
        {
            key: "disconnectedCallback",
            value: function disconnectedCallback() {
                var _$_class_private_field_get, _$_class_private_field_get1;
                _get(_get_prototype_of(JSONEditor.prototype), "disconnectedCallback", this).call(this);
                (_$_class_private_field_get = _class_private_field_get(this, _hintPopoverHelper)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.hidePopover();
                (_$_class_private_field_get1 = _class_private_field_get(this, _hintPopoverHelper)) === null || _$_class_private_field_get1 === void 0 ? void 0 : _$_class_private_field_get1.dispose();
                var targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance();
                targetManager.removeEventListener("AvailableTargetsChanged" /* SDK.TargetManager.Events.AvailableTargetsChanged */ , _class_private_method_get(this, _handleAvailableTargetsChanged, handleAvailableTargetsChanged), this);
            }
        },
        {
            key: "getParameters",
            value: function getParameters() {
                var formatParameterValue = function(parameter) {
                    if (parameter.value === undefined) {
                        return;
                    }
                    switch(parameter.type){
                        case "number" /* ParameterType.Number */ :
                            {
                                return Number(parameter.value);
                            }
                        case "boolean" /* ParameterType.Boolean */ :
                            {
                                return Boolean(parameter.value);
                            }
                        case "object" /* ParameterType.Object */ :
                            {
                                var nestedParameters = {};
                                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(var _iterator = parameter.value[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        var subParameter = _step.value;
                                        var formattedValue = formatParameterValue(subParameter);
                                        if (formattedValue !== undefined) {
                                            nestedParameters[subParameter.name] = formatParameterValue(subParameter);
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
                                if (Object.keys(nestedParameters).length === 0) {
                                    return undefined;
                                }
                                return nestedParameters;
                            }
                        case "array" /* ParameterType.Array */ :
                            {
                                var nestedArrayParameters = [];
                                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                try {
                                    for(var _iterator1 = parameter.value[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                        var subParameter1 = _step1.value;
                                        nestedArrayParameters.push(formatParameterValue(subParameter1));
                                    }
                                } catch (err) {
                                    _didIteratorError1 = true;
                                    _iteratorError1 = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                            _iterator1.return();
                                        }
                                    } finally{
                                        if (_didIteratorError1) {
                                            throw _iteratorError1;
                                        }
                                    }
                                }
                                return nestedArrayParameters.length === 0 ? [] : nestedArrayParameters;
                            }
                        default:
                            {
                                return parameter.value;
                            }
                    }
                };
                var formattedParameters = {};
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.parameters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var parameter = _step.value;
                        formattedParameters[parameter.name] = formatParameterValue(parameter);
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
                return formatParameterValue({
                    type: "object" /* ParameterType.Object */ ,
                    name: DUMMY_DATA,
                    optional: true,
                    value: this.parameters,
                    description: ''
                });
            }
        },
        {
            // Displays a command entered in the input bar inside the editor
            key: "displayCommand",
            value: function displayCommand(command, parameters, targetId) {
                this.targetId = targetId;
                this.command = command;
                var schema = this.metadataByCommand.get(this.command);
                if (!(schema === null || schema === void 0 ? void 0 : schema.parameters)) {
                    return;
                }
                this.populateParametersForCommandWithDefaultValues();
                var displayedParameters = _class_private_method_get(this, _convertObjectToParameterSchema, convertObjectToParameterSchema).call(this, '', parameters, {
                    'typeRef': DUMMY_DATA,
                    'type': "object" /* ParameterType.Object */ ,
                    'name': '',
                    'description': '',
                    'optional': true,
                    'value': []
                }, schema.parameters).value;
                var valueByName = new Map(this.parameters.map(function(param) {
                    return [
                        param.name,
                        param
                    ];
                }));
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = displayedParameters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var param = _step.value;
                        var existingParam = valueByName.get(param.name);
                        if (existingParam) {
                            existingParam.value = param.value;
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
                this.requestUpdate();
            }
        },
        {
            key: "getCommandJson",
            value: function getCommandJson() {
                return this.command !== '' ? JSON.stringify({
                    command: this.command,
                    parameters: this.getParameters()
                }) : '';
            }
        },
        {
            key: "populateParametersForCommandWithDefaultValues",
            value: function populateParametersForCommandWithDefaultValues() {
                var _this = this;
                var _this_metadataByCommand_get;
                var commandParameters = (_this_metadataByCommand_get = this.metadataByCommand.get(this.command)) === null || _this_metadataByCommand_get === void 0 ? void 0 : _this_metadataByCommand_get.parameters;
                if (!commandParameters) {
                    return;
                }
                this.parameters = commandParameters.map(function(parameter) {
                    return _class_private_method_get(_this, _populateParameterDefaults, populateParameterDefaults).call(_this, parameter);
                });
            }
        },
        {
            key: "render",
            value: function render() {
                // clang-format off
                return html(_templateObject1(), _class_private_method_get(this, _renderTargetSelectorRow, renderTargetSelectorRow).call(this), _to_consumable_array(this.metadataByCommand.keys()), this.command, 'Enter your command...', suggestionFilter, 'command', _class_private_field_get(this, _handleCommandInputBlur), classMap({
                    'json-input': true
                }), this.parameters.length ? html(_templateObject(), _class_private_method_get(this, _renderParameters, renderParameters).call(this, this.parameters)) : nothing, _class_private_method_get(this, _copyToClipboard, copyToClipboard), _class_private_method_get(this, _handleCommandSend, handleCommandSend));
            // clang-format on
            }
        }
    ]);
    return JSONEditor;
}(LitElement), _define_property(_JSONEditor, "styles", [
    _JSONEditor_css_js__WEBPACK_IMPORTED_MODULE_12__["default"]
]), _JSONEditor);
__decorate([
    property()
], JSONEditor.prototype, "metadataByCommand", void 0);
__decorate([
    property()
], JSONEditor.prototype, "typesByName", void 0);
__decorate([
    property()
], JSONEditor.prototype, "enumsByName", void 0);
__decorate([
    state()
], JSONEditor.prototype, "parameters", void 0);
__decorate([
    state()
], JSONEditor.prototype, "targets", void 0);
__decorate([
    state()
], JSONEditor.prototype, "command", void 0);
__decorate([
    state()
], JSONEditor.prototype, "targetId", void 0);
JSONEditor = __decorate([
    customElement('devtools-json-editor')
], JSONEditor);
 //# sourceMappingURL=JSONEditor.js.map
function handleAvailableTargetsChanged() {
    this.targets = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().targets();
    if (this.targets.length && this.targetId === undefined) {
        this.targetId = this.targets[0].id();
    }
}
function convertObjectToParameterSchema(key, value, schema, initialSchema) {
    var type = (schema === null || schema === void 0 ? void 0 : schema.type) || (typeof value === "undefined" ? "undefined" : _type_of(value));
    var _schema_description;
    var description = (_schema_description = schema === null || schema === void 0 ? void 0 : schema.description) !== null && _schema_description !== void 0 ? _schema_description : '';
    var _schema_optional;
    var optional = (_schema_optional = schema === null || schema === void 0 ? void 0 : schema.optional) !== null && _schema_optional !== void 0 ? _schema_optional : true;
    switch(type){
        case "string" /* ParameterType.String */ :
        case "boolean" /* ParameterType.Boolean */ :
        case "number" /* ParameterType.Number */ :
            return _class_private_method_get(this, _convertPrimitiveParameter, convertPrimitiveParameter).call(this, key, value, schema);
        case "object" /* ParameterType.Object */ :
            return _class_private_method_get(this, _convertObjectParameter, convertObjectParameter).call(this, key, value, schema, initialSchema);
        case "array" /* ParameterType.Array */ :
            return _class_private_method_get(this, _convertArrayParameter, convertArrayParameter).call(this, key, value, schema);
    }
    return {
        type: type,
        name: key,
        optional: optional,
        typeRef: schema === null || schema === void 0 ? void 0 : schema.typeRef,
        value: value,
        description: description
    };
}
function convertPrimitiveParameter(key, value, schema) {
    var type = (schema === null || schema === void 0 ? void 0 : schema.type) || (typeof value === "undefined" ? "undefined" : _type_of(value));
    var _schema_description;
    var description = (_schema_description = schema === null || schema === void 0 ? void 0 : schema.description) !== null && _schema_description !== void 0 ? _schema_description : '';
    var _schema_optional;
    var optional = (_schema_optional = schema === null || schema === void 0 ? void 0 : schema.optional) !== null && _schema_optional !== void 0 ? _schema_optional : true;
    return {
        type: type,
        name: key,
        optional: optional,
        typeRef: schema === null || schema === void 0 ? void 0 : schema.typeRef,
        value: value,
        description: description,
        isCorrectType: schema ? _class_private_method_get(this, _isValueOfCorrectType, isValueOfCorrectType).call(this, schema, String(value)) : true
    };
}
function convertObjectParameter(key, value, schema, initialSchema) {
    var _schema_description;
    var description = (_schema_description = schema === null || schema === void 0 ? void 0 : schema.description) !== null && _schema_description !== void 0 ? _schema_description : '';
    if ((typeof value === "undefined" ? "undefined" : _type_of(value)) !== 'object' || value === null) {
        throw Error('The value is not an object');
    }
    var typeRef = schema === null || schema === void 0 ? void 0 : schema.typeRef;
    if (!typeRef) {
        throw Error('Every object parameters should have a type ref');
    }
    var nestedType = typeRef === DUMMY_DATA ? initialSchema : this.typesByName.get(typeRef);
    if (!nestedType) {
        throw Error('No nested type for keys were found');
    }
    var objectValues = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        var _this, _loop = function() {
            var objectKey = _step.value;
            var objectType = nestedType.find(function(param) {
                return param.name === objectKey;
            });
            objectValues.push(_class_private_method_get(_this, _convertObjectToParameterSchema, convertObjectToParameterSchema).call(_this, objectKey, value[objectKey], objectType));
        };
        for(var _iterator = Object.keys(value)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_this = this, _loop();
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
    return {
        type: "object" /* ParameterType.Object */ ,
        name: key,
        optional: schema.optional,
        typeRef: schema.typeRef,
        value: objectValues,
        description: description,
        isCorrectType: true
    };
}
function convertArrayParameter(key, value, schema) {
    var _schema_description;
    var description = (_schema_description = schema === null || schema === void 0 ? void 0 : schema.description) !== null && _schema_description !== void 0 ? _schema_description : '';
    var _schema_optional;
    var optional = (_schema_optional = schema === null || schema === void 0 ? void 0 : schema.optional) !== null && _schema_optional !== void 0 ? _schema_optional : true;
    var typeRef = schema === null || schema === void 0 ? void 0 : schema.typeRef;
    if (!typeRef) {
        throw Error('Every array parameters should have a type ref');
    }
    if (!Array.isArray(value)) {
        throw Error('The value is not an array');
    }
    var nestedType = _class_private_method_get(this, _isTypePrimitive, isTypePrimitive).call(this, typeRef) ? undefined : {
        optional: true,
        type: "object" /* ParameterType.Object */ ,
        value: [],
        typeRef: typeRef,
        description: '',
        name: ''
    };
    var objectValues = [];
    for(var i = 0; i < value.length; i++){
        var temp = _class_private_method_get(this, _convertObjectToParameterSchema, convertObjectToParameterSchema).call(this, "".concat(i), value[i], nestedType);
        objectValues.push(temp);
    }
    return {
        type: "array" /* ParameterType.Array */ ,
        name: key,
        optional: optional,
        typeRef: schema === null || schema === void 0 ? void 0 : schema.typeRef,
        value: objectValues,
        description: description,
        isCorrectType: true
    };
}
function handlePopoverDescriptions(event) {
    var hintElement = event.composedPath()[0];
    var elementData = _class_private_method_get(this, _getDescriptionAndTypeForElement, getDescriptionAndTypeForElement).call(this, hintElement);
    if (!(elementData === null || elementData === void 0 ? void 0 : elementData.description)) {
        return null;
    }
    var _splitDescription = _sliced_to_array(splitDescription(elementData.description), 2), head = _splitDescription[0], tail = _splitDescription[1];
    var type = elementData.type;
    var replyArgs = elementData.replyArgs;
    var popupContent = '';
    // replyArgs and type cannot get into conflict because replyArgs is attached to a command and type to a parameter
    if (replyArgs) {
        popupContent = tail + "Returns: ".concat(replyArgs, "<br>");
    } else if (type) {
        popupContent = tail + "<br>Type: ".concat(type, "<br>");
    } else {
        popupContent = tail;
    }
    var _this = this;
    return {
        box: hintElement.boxInWindow(),
        show: function() {
            var _ref = _async_to_generator(function(popover) {
                var popupElement;
                return _ts_generator(this, function(_state) {
                    popupElement = new _elements_components_components_js__WEBPACK_IMPORTED_MODULE_11__.CSSHintDetailsView.CSSHintDetailsView({
                        'getMessage': function() {
                            return "<code><span>".concat(head, "</span></code>");
                        },
                        'getPossibleFixMessage': function() {
                            return popupContent;
                        },
                        'getLearnMoreLink': function() {
                            return "https://chromedevtools.github.io/devtools-protocol/tot/".concat(_this.command.split('.')[0], "/");
                        }
                    });
                    popover.contentElement.appendChild(popupElement);
                    return [
                        2,
                        true
                    ];
                });
            });
            return function(popover) {
                return _ref.apply(this, arguments);
            };
        }()
    };
}
function getDescriptionAndTypeForElement(hintElement) {
    if (hintElement.matches('.command')) {
        var metadata = this.metadataByCommand.get(this.command);
        if (metadata) {
            return {
                description: metadata.description,
                replyArgs: metadata.replyArgs
            };
        }
    }
    if (hintElement.matches('.parameter')) {
        var id = hintElement.dataset.paramid;
        if (!id) {
            return;
        }
        var pathArray = id.split('.');
        var parameter = _class_private_method_get(this, _getChildByPath, getChildByPath).call(this, pathArray).parameter;
        if (!parameter.description) {
            return;
        }
        return {
            description: parameter.description,
            type: parameter.type
        };
    }
    return;
}
function copyToClipboard() {
    var commandJson = this.getCommandJson();
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(commandJson);
}
function handleCommandSend() {
    this.dispatchEvent(new SubmitEditorEvent({
        command: this.command,
        parameters: this.getParameters(),
        targetId: this.targetId
    }));
}
function populateParameterDefaults(parameter) {
    var _this = this;
    if (parameter.type === "object" /* ParameterType.Object */ ) {
        var typeRef = parameter.typeRef;
        if (!typeRef) {
            typeRef = DUMMY_DATA;
        }
        var _this_typesByName_get;
        // Fallback to empty array is extremely rare.
        // It happens when the keys for an object are not registered like for Tracing.MemoryDumpConfig or headers for instance.
        var nestedTypes = (_this_typesByName_get = this.typesByName.get(typeRef)) !== null && _this_typesByName_get !== void 0 ? _this_typesByName_get : [];
        var nestedParameters = nestedTypes.map(function(nestedType) {
            return _class_private_method_get(_this, _populateParameterDefaults, populateParameterDefaults).call(_this, nestedType);
        });
        return _object_spread_props(_object_spread({}, parameter), {
            value: parameter.optional ? undefined : nestedParameters,
            isCorrectType: true
        });
    }
    if (parameter.type === "array" /* ParameterType.Array */ ) {
        var _parameter_value;
        return _object_spread_props(_object_spread({}, parameter), {
            value: (parameter === null || parameter === void 0 ? void 0 : parameter.optional) ? undefined : ((_parameter_value = parameter.value) === null || _parameter_value === void 0 ? void 0 : _parameter_value.map(function(param) {
                return _class_private_method_get(_this, _populateParameterDefaults, populateParameterDefaults).call(_this, param);
            })) || [],
            isCorrectType: true
        });
    }
    return _object_spread_props(_object_spread({}, parameter), {
        value: parameter.optional ? undefined : defaultValueByType.get(parameter.type),
        isCorrectType: true
    });
}
function getChildByPath(pathArray) {
    var _loop = function(i) {
        var name = pathArray[i];
        var parameter = parameters.find(function(param) {
            return param.name === name;
        });
        if (i === pathArray.length - 1) {
            return {
                v: {
                    parameter: parameter,
                    parentParameter: parentParameter
                }
            };
        }
        if ((parameter === null || parameter === void 0 ? void 0 : parameter.type) === "array" /* ParameterType.Array */  || (parameter === null || parameter === void 0 ? void 0 : parameter.type) === "object" /* ParameterType.Object */ ) {
            if (parameter.value) {
                parameters = parameter.value;
            }
        } else {
            throw new Error('Parameter on the path in not an object or an array');
        }
        parentParameter = parameter;
    };
    var parameters = this.parameters;
    var parentParameter;
    for(var i = 0; i < pathArray.length; i++){
        var _ret = _loop(i);
        if (_type_of(_ret) === "object") return _ret.v;
    }
    throw new Error('Not found');
}
function isValueOfCorrectType(parameter, value) {
    if (parameter.type === "number" /* ParameterType.Number */  && isNaN(Number(value))) {
        return false;
    }
    // For boolean or array parameters, this will create an array of the values the user can enter
    var acceptedValues = _class_private_method_get(this, _computeDropdownValues, computeDropdownValues).call(this, parameter);
    // Check to see if the entered value by the user is indeed part of the values accepted by the enum or boolean parameter
    if (acceptedValues.length !== 0 && !acceptedValues.includes(value)) {
        return false;
    }
    return true;
}
function handleFocusParameter(event) {
    if (!_instanceof(event.target, _ui_components_suggestion_input_suggestion_input_js__WEBPACK_IMPORTED_MODULE_7__.SuggestionInput.SuggestionInput)) {
        return;
    }
    var paramId = event.target.getAttribute('data-paramid');
    if (!paramId) {
        return;
    }
    var pathArray = paramId.split('.');
    var object = _class_private_method_get(this, _getChildByPath, getChildByPath).call(this, pathArray).parameter;
    object.isCorrectType = true;
    this.requestUpdate();
}
function computeTargetLabel(target) {
    if (!target) {
        return;
    }
    return "".concat(target.name(), " (").concat(target.inspectedURL(), ")");
}
function isTypePrimitive(type) {
    if (type === "string" /* ParameterType.String */  || type === "boolean" /* ParameterType.Boolean */  || type === "number" /* ParameterType.Number */ ) {
        return true;
    }
    return false;
}
function createNestedParameter(type, name) {
    var _this = this;
    if (type.type === "object" /* ParameterType.Object */ ) {
        var typeRef = type.typeRef;
        if (!typeRef) {
            typeRef = DUMMY_DATA;
        }
        var _this_typesByName_get;
        var nestedTypes = (_this_typesByName_get = this.typesByName.get(typeRef)) !== null && _this_typesByName_get !== void 0 ? _this_typesByName_get : [];
        var nestedValue = nestedTypes.map(function(nestedType) {
            return _class_private_method_get(_this, _createNestedParameter, createNestedParameter).call(_this, nestedType, nestedType.name);
        });
        return {
            type: "object" /* ParameterType.Object */ ,
            name: name,
            optional: type.optional,
            typeRef: typeRef,
            value: nestedValue,
            isCorrectType: true,
            description: type.description
        };
    }
    return {
        type: type.type,
        name: name,
        optional: type.optional,
        isCorrectType: true,
        typeRef: type.typeRef,
        value: type.optional ? undefined : defaultValueByType.get(type.type),
        description: type.description
    };
}
function handleAddParameter(parameterId) {
    var _this = this;
    var pathArray = parameterId.split('.');
    var _class_private_method_get_call = _class_private_method_get(this, _getChildByPath, getChildByPath).call(this, pathArray), parameter = _class_private_method_get_call.parameter, parentParameter = _class_private_method_get_call.parentParameter;
    if (!parameter) {
        return;
    }
    switch(parameter.type){
        case "array" /* ParameterType.Array */ :
            {
                var typeRef = parameter.typeRef;
                if (!typeRef) {
                    throw Error('Every array parameter must have a typeRef');
                }
                var _this_typesByName_get;
                var nestedType = (_this_typesByName_get = this.typesByName.get(typeRef)) !== null && _this_typesByName_get !== void 0 ? _this_typesByName_get : [];
                var nestedValue = nestedType.map(function(type) {
                    return _class_private_method_get(_this, _createNestedParameter, createNestedParameter).call(_this, type, type.name);
                });
                var type = _class_private_method_get(this, _isTypePrimitive, isTypePrimitive).call(this, typeRef) ? typeRef : "object" /* ParameterType.Object */ ;
                // If the typeRef is actually a ref to an enum type, the type of the nested param should be a string
                if (nestedType.length === 0) {
                    if (this.enumsByName.get(typeRef)) {
                        type = "string" /* ParameterType.String */ ;
                    }
                }
                // In case the parameter is an optional array, its value will be undefined so before pushing new value inside,
                // we reset it to empty array
                if (!parameter.value) {
                    parameter.value = [];
                }
                parameter.value.push({
                    type: type,
                    name: String(parameter.value.length),
                    optional: true,
                    typeRef: typeRef,
                    value: nestedValue.length !== 0 ? nestedValue : '',
                    description: '',
                    isCorrectType: true
                });
                break;
            }
        case "object" /* ParameterType.Object */ :
            {
                var typeRef1 = parameter.typeRef;
                if (!typeRef1) {
                    typeRef1 = DUMMY_DATA;
                }
                if (!parameter.value) {
                    parameter.value = [];
                }
                if (!this.typesByName.get(typeRef1)) {
                    parameter.value.push({
                        type: "string" /* ParameterType.String */ ,
                        name: '',
                        optional: true,
                        value: '',
                        isCorrectType: true,
                        description: '',
                        isKeyEditable: true
                    });
                    break;
                }
                var _this_typesByName_get1;
                var nestedTypes = (_this_typesByName_get1 = this.typesByName.get(typeRef1)) !== null && _this_typesByName_get1 !== void 0 ? _this_typesByName_get1 : [];
                var nestedValue1 = nestedTypes.map(function(nestedType) {
                    return _class_private_method_get(_this, _createNestedParameter, createNestedParameter).call(_this, nestedType, nestedType.name);
                });
                var nestedParameters = nestedTypes.map(function(nestedType) {
                    return _class_private_method_get(_this, _populateParameterDefaults, populateParameterDefaults).call(_this, nestedType);
                });
                if (parentParameter) {
                    parameter.value.push({
                        type: "object" /* ParameterType.Object */ ,
                        name: '',
                        optional: true,
                        typeRef: typeRef1,
                        value: nestedValue1,
                        isCorrectType: true,
                        description: ''
                    });
                } else {
                    parameter.value = nestedParameters;
                }
                break;
            }
        default:
            // For non-array and non-object parameters, set the value to the default value if available.
            parameter.value = defaultValueByType.get(parameter.type);
            break;
    }
    this.requestUpdate();
}
function handleClearParameter(parameter, isParentArray) {
    var _this = this;
    if (!parameter || parameter.value === undefined) {
        return;
    }
    switch(parameter.type){
        case "object" /* ParameterType.Object */ :
            if (parameter.optional && !isParentArray) {
                parameter.value = undefined;
                break;
            }
            if (!parameter.typeRef || !this.typesByName.get(parameter.typeRef)) {
                parameter.value = [];
            } else {
                parameter.value.forEach(function(param) {
                    return _class_private_method_get(_this, _handleClearParameter, handleClearParameter).call(_this, param, isParentArray);
                });
            }
            break;
        case "array" /* ParameterType.Array */ :
            parameter.value = parameter.optional ? undefined : [];
            break;
        default:
            parameter.value = parameter.optional ? undefined : defaultValueByType.get(parameter.type);
            parameter.isCorrectType = true;
            break;
    }
    this.requestUpdate();
}
function handleDeleteParameter(parameter, parentParameter) {
    if (!parameter) {
        return;
    }
    if (!Array.isArray(parentParameter.value)) {
        return;
    }
    parentParameter.value.splice(parentParameter.value.findIndex(function(p) {
        return p === parameter;
    }), 1);
    if (parentParameter.type === "array" /* ParameterType.Array */ ) {
        for(var i = 0; i < parentParameter.value.length; i++){
            parentParameter.value[i].name = String(i);
        }
    }
    this.requestUpdate();
}
function renderTargetSelectorRow() {
    var _this = this;
    var target = this.targets.find(function(el) {
        return el.id() === _this.targetId;
    });
    var targetLabel = target ? _class_private_method_get(this, _computeTargetLabel, computeTargetLabel).call(this, target) : _class_private_method_get(this, _computeTargetLabel, computeTargetLabel).call(this, this.targets[0]);
    // clang-format off
    return html(_templateObject3(), _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_6__.SelectMenu.SelectMenu.litTagName, _class_private_method_get(this, _onTargetSelected, onTargetSelected), true, true, false, true, false, "bottom" /* Dialogs.Dialog.DialogVerticalPosition.BOTTOM */ , targetLabel, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.dropDown('targets').track({
        click: true
    }), repeat(this.targets, function(target) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html(_templateObject2(), _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_6__.Menu.MenuItem.litTagName, target.id(), _class_private_method_get(_this, _computeTargetLabel, computeTargetLabel).call(_this, target), _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_6__.Menu.MenuItem.litTagName);
    }), _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_6__.SelectMenu.SelectMenu.litTagName);
// clang-format on
}
function onTargetSelected(event) {
    this.targetId = event.itemValue;
    this.requestUpdate();
}
function computeDropdownValues(parameter) {
    // The suggestion box should only be shown for parameters of type string and boolean
    if (parameter.type === "string" /* ParameterType.String */ ) {
        var _this_enumsByName_get;
        var enums = (_this_enumsByName_get = this.enumsByName.get("".concat(parameter.typeRef))) !== null && _this_enumsByName_get !== void 0 ? _this_enumsByName_get : {};
        return Object.values(enums);
    }
    if (parameter.type === "boolean" /* ParameterType.Boolean */ ) {
        return [
            'true',
            'false'
        ];
    }
    return [];
}
function renderInlineButton(opts) {
    return html(_templateObject4(), opts.title, "SMALL" /* Buttons.Button.Size.SMALL */ , opts.iconName, "icon" /* Buttons.Button.Variant.ICON */ , classMap(opts.classMap), opts.onClick, opts.jslogContext);
}
function renderWarningIcon() {
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html(_templateObject5(), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName, {
        iconName: 'warning-filled',
        color: 'var(--icon-warning)',
        width: '14px',
        height: '14px'
    }, classMap({
        'warning-icon': true
    }), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName);
}
function renderParameters(parameters, id, parentParameter, parentParameterId) {
    var _this = this;
    parameters.sort(function(a, b) {
        return Number(a.optional) - Number(b.optional);
    });
    // clang-format off
    return html(_templateObject19(), repeat(parameters, function(parameter) {
        var _parameter_value;
        var parameterId = parentParameter ? "".concat(parentParameterId) + '.' + "".concat(parameter.name) : parameter.name;
        var _parameter_value1;
        var subparameters = parameter.type === "array" /* ParameterType.Array */  || parameter.type === "object" /* ParameterType.Object */  ? (_parameter_value1 = parameter.value) !== null && _parameter_value1 !== void 0 ? _parameter_value1 : [] : [];
        var handleInputOnBlur = function(event) {
            _class_private_field_get(_this, _saveParameterValue).call(_this, event);
        };
        var handleKeydown = function(event) {
            _class_private_field_get(_this, _handleParameterInputKeydown).call(_this, event);
        };
        var handleFocus = function(event) {
            _class_private_method_get(_this, _handleFocusParameter, handleFocusParameter).call(_this, event);
        };
        var handleParamKeyOnBlur = function(event) {
            _class_private_field_get(_this, _saveNestedObjectParameterKey).call(_this, event);
        };
        var isPrimitive = _class_private_method_get(_this, _isTypePrimitive, isTypePrimitive).call(_this, parameter.type);
        var isArray = parameter.type === "array" /* ParameterType.Array */ ;
        var isParentArray = parentParameter && parentParameter.type === "array" /* ParameterType.Array */ ;
        var isParentObject = parentParameter && parentParameter.type === "object" /* ParameterType.Object */ ;
        var isObject = parameter.type === "object" /* ParameterType.Object */ ;
        var isParamValueUndefined = parameter.value === undefined;
        var isParamOptional = parameter.optional;
        var hasTypeRef = isObject && parameter.typeRef && _this.typesByName.get(parameter.typeRef) !== undefined;
        // This variable indicates that this parameter is a parameter nested inside an object parameter
        // that no keys defined inside the CDP documentation.
        var hasNoKeys = parameter.isKeyEditable;
        var isCustomEditorDisplayed = isObject && !hasTypeRef;
        var hasOptions = parameter.type === "string" /* ParameterType.String */  || parameter.type === "boolean" /* ParameterType.Boolean */ ;
        var canClearParameter = isArray && !isParamValueUndefined && ((_parameter_value = parameter.value) === null || _parameter_value === void 0 ? void 0 : _parameter_value.length) !== 0 || isObject && !isParamValueUndefined;
        var parametersClasses = {
            'optional-parameter': parameter.optional,
            'parameter': true,
            'undefined-parameter': parameter.value === undefined && parameter.optional
        };
        var inputClasses = {
            'json-input': true
        };
        var _parameter_name, _parameter_value2, _parameter_value3, _parameter_value4;
        return html(_templateObject18(), !parameter.isCorrectType ? html(_templateObject6(), _class_private_method_get(_this, _renderWarningIcon, renderWarningIcon).call(_this)) : nothing, classMap(parametersClasses), parameterId, hasNoKeys ? html(_templateObject7(), parameterId, true, live(parameter.isCorrectType), hasOptions ? _class_private_method_get(_this, _computeDropdownValues, computeDropdownValues).call(_this, parameter) : [], false, live((_parameter_name = parameter.name) !== null && _parameter_name !== void 0 ? _parameter_name : ''), parameter.value === '' ? EMPTY_STRING : "<".concat(defaultValueByType.get(parameter.type), ">"), handleParamKeyOnBlur, handleFocus, handleKeydown) : html(_templateObject8(), parameter.name), isArray ? html(_templateObject9(), _class_private_method_get(_this, _renderInlineButton, renderInlineButton).call(_this, {
            title: i18nString(UIStrings.addParameter),
            iconName: 'plus',
            onClick: function() {
                return _class_private_method_get(_this, _handleAddParameter, handleAddParameter).call(_this, parameterId);
            },
            classMap: {
                'add-button': true
            },
            jslogContext: 'protocol-monitor.add-parameter'
        })) : nothing, canClearParameter ? _class_private_method_get(_this, _renderInlineButton, renderInlineButton).call(_this, {
            title: i18nString(UIStrings.resetDefaultValue),
            iconName: 'clear',
            onClick: function() {
                return _class_private_method_get(_this, _handleClearParameter, handleClearParameter).call(_this, parameter, isParentArray);
            },
            classMap: {
                'clear-button': true
            },
            jslogContext: 'protocol-monitor.reset-to-default-value'
        }) : nothing, isPrimitive && !isParentArray && isParamOptional && isParamValueUndefined ? html(_templateObject10(), _class_private_method_get(_this, _renderInlineButton, renderInlineButton).call(_this, {
            title: i18nString(UIStrings.addParameter),
            iconName: 'plus',
            onClick: function() {
                return _class_private_method_get(_this, _handleAddParameter, handleAddParameter).call(_this, parameterId);
            },
            classMap: {
                'add-button': true
            },
            jslogContext: 'protocol-monitor.add-parameter'
        })) : nothing, isObject && isParamOptional && isParamValueUndefined && hasTypeRef ? html(_templateObject11(), _class_private_method_get(_this, _renderInlineButton, renderInlineButton).call(_this, {
            title: i18nString(UIStrings.addParameter),
            iconName: 'plus',
            onClick: function() {
                return _class_private_method_get(_this, _handleAddParameter, handleAddParameter).call(_this, parameterId);
            },
            classMap: {
                'add-button': true
            },
            jslogContext: 'protocol-monitor.add-parameter'
        })) : nothing, hasNoKeys && isParentObject ? html(_templateObject12(), parameterId, live(parameter.isCorrectType), hasOptions ? _class_private_method_get(_this, _computeDropdownValues, computeDropdownValues).call(_this, parameter) : [], false, live((_parameter_value2 = parameter.value) !== null && _parameter_value2 !== void 0 ? _parameter_value2 : ''), parameter.value === '' ? EMPTY_STRING : "<".concat(defaultValueByType.get(parameter.type), ">"), 'parameter-value', handleInputOnBlur, handleFocus, handleKeydown, _class_private_method_get(_this, _renderInlineButton, renderInlineButton).call(_this, {
            title: i18nString(UIStrings.deleteParameter),
            iconName: 'bin',
            onClick: function() {
                return _class_private_method_get(_this, _handleDeleteParameter, handleDeleteParameter).call(_this, parameter, parentParameter);
            },
            classMap: {
                deleteButton: true,
                deleteIcon: true
            },
            jslogContext: 'protocol-monitor.delete-parameter'
        })) : nothing, isPrimitive && !hasNoKeys && (!isParamValueUndefined || !isParamOptional) && !isParentArray ? html(_templateObject13(), parameterId, live(parameter.isCorrectType), hasOptions ? _class_private_method_get(_this, _computeDropdownValues, computeDropdownValues).call(_this, parameter) : [], false, live((_parameter_value3 = parameter.value) !== null && _parameter_value3 !== void 0 ? _parameter_value3 : ''), parameter.value === '' ? EMPTY_STRING : "<".concat(defaultValueByType.get(parameter.type), ">"), 'parameter-value', handleInputOnBlur, handleFocus, handleKeydown) : nothing, isPrimitive && !hasNoKeys && !isParentArray && isParamOptional && !isParamValueUndefined ? html(_templateObject14(), _class_private_method_get(_this, _renderInlineButton, renderInlineButton).call(_this, {
            title: i18nString(UIStrings.resetDefaultValue),
            iconName: 'clear',
            onClick: function() {
                return _class_private_method_get(_this, _handleClearParameter, handleClearParameter).call(_this, parameter);
            },
            classMap: {
                'clear-button': true
            },
            jslogContext: 'protocol-monitor.reset-to-default-value'
        })) : nothing, isCustomEditorDisplayed ? html(_templateObject15(), _class_private_method_get(_this, _renderInlineButton, renderInlineButton).call(_this, {
            title: i18nString(UIStrings.addCustomProperty),
            iconName: 'plus',
            onClick: function() {
                return _class_private_method_get(_this, _handleAddParameter, handleAddParameter).call(_this, parameterId);
            },
            classMap: {
                'add-button': true
            },
            jslogContext: 'protocol-monitor.add-custom-property'
        })) : nothing, isParentArray ? html(_templateObject17(), !isObject ? html(_templateObject16(), parameterId, hasOptions ? _class_private_method_get(_this, _computeDropdownValues, computeDropdownValues).call(_this, parameter) : [], false, live((_parameter_value4 = parameter.value) !== null && _parameter_value4 !== void 0 ? _parameter_value4 : ''), parameter.value === '' ? EMPTY_STRING : "<".concat(defaultValueByType.get(parameter.type), ">"), 'parameter', handleInputOnBlur, handleKeydown, classMap(inputClasses)) : nothing, _class_private_method_get(_this, _renderInlineButton, renderInlineButton).call(_this, {
            title: i18nString(UIStrings.deleteParameter),
            iconName: 'bin',
            onClick: function() {
                return _class_private_method_get(_this, _handleDeleteParameter, handleDeleteParameter).call(_this, parameter, parentParameter);
            },
            classMap: {
                'delete-button': true
            },
            jslogContext: 'protocol-monitor.delete-parameter'
        })) : nothing, _class_private_method_get(_this, _renderParameters, renderParameters).call(_this, subparameters, id, parameter, parameterId));
    }));
// clang-format on
}


}),
"./ui/components/suggestion_input/suggestion_input.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SuggestionInput: function() { return /* reexport module object */ _SuggestionInput_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _SuggestionInput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SuggestionInput.js */ "./ui/components/suggestion_input/SuggestionInput.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=suggestion_input.js.map


}),

}]);