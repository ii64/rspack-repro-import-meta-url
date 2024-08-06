"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_accessibility_ARIAAttributesView_d_ts"], {
"./panels/accessibility/ARIAAttributesView.d.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _AccessibilitySubPane_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccessibilitySubPane.js */ "./panels/accessibility/AccessibilitySubPane.js");




}),
"./panels/accessibility/AccessibilitySubPane.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AccessibilitySubPane: function() { return AccessibilitySubPane; }
});
/* harmony import */var _accessibilityProperties_css_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accessibilityProperties.css.js */ "./panels/accessibility/accessibilityProperties.css.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _accessibilityNode_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accessibilityNode.css.js */ "./panels/accessibility/accessibilityNode.css.js");
/* harmony import */var _ui_legacy_components_object_ui_objectValue_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/objectValue.css.js */ "./ui/legacy/components/object_ui/objectValue.css.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
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



// eslint-disable-next-line rulesdir/es_modules_import

var AccessibilitySubPane = /*#__PURE__*/ function(_UI_View_SimpleView) {
    "use strict";
    _inherits(AccessibilitySubPane, _UI_View_SimpleView);
    var _super = _create_super(AccessibilitySubPane);
    function AccessibilitySubPane(name) {
        _class_call_check(this, AccessibilitySubPane);
        var _this;
        _this = _super.call(this, name);
        _define_property(_assert_this_initialized(_this), "axNode", void 0);
        _define_property(_assert_this_initialized(_this), "nodeInternal", void 0);
        _this.axNode = null;
        return _this;
    }
    _create_class(AccessibilitySubPane, [
        {
            key: "setAXNode",
            value: function setAXNode(_axNode) {}
        },
        {
            key: "node",
            value: function node() {
                return this.nodeInternal || null;
            }
        },
        {
            key: "setNode",
            value: function setNode(node) {
                this.nodeInternal = node;
            }
        },
        {
            key: "createInfo",
            value: function createInfo(textContent, className) {
                var classNameOrDefault = className || 'gray-info-message';
                var info = this.element.createChild('div', classNameOrDefault);
                info.textContent = textContent;
                return info;
            }
        },
        {
            key: "createTreeOutline",
            value: function createTreeOutline() {
                var treeOutline = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.TreeOutline.TreeOutlineInShadow();
                treeOutline.registerCSSFiles([
                    _accessibilityNode_css_js__WEBPACK_IMPORTED_MODULE_2__["default"],
                    _accessibilityProperties_css_js__WEBPACK_IMPORTED_MODULE_0__["default"],
                    _ui_legacy_components_object_ui_objectValue_css_js__WEBPACK_IMPORTED_MODULE_3__["default"]
                ]);
                treeOutline.element.classList.add('hidden');
                treeOutline.hideOverflow();
                this.element.appendChild(treeOutline.element);
                return treeOutline;
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(AccessibilitySubPane.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _accessibilityProperties_css_js__WEBPACK_IMPORTED_MODULE_0__["default"]
                ]);
            }
        }
    ]);
    return AccessibilitySubPane;
} //# sourceMappingURL=AccessibilitySubPane.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.View.SimpleView);


}),
"./panels/accessibility/accessibilityNode.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2017 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.widget.ax-subpane {\n  overflow-x: hidden;\n  user-select: text;\n}\n\n.ax-ignored-info {\n  padding: 6px;\n}\n\n.ax-ignored-node-pane {\n  flex: none;\n}\n\n.invalid {\n  text-decoration: line-through;\n}\n\nspan.ax-value-undefined {\n  font-style: italic;\n}\n\n.ax-value-source-unused {\n  opacity: 70%;\n}\n\n.ax-value-source-superseded,\n.ax-value-source-invalid {\n  text-decoration: line-through;\n}\n\n.tree-outline span[is="dt-icon-label"] {\n  position: relative;\n  left: -11px;\n}\n\n.tree-outline li {\n  display: block;\n  overflow-x: hidden;\n  align-items: baseline;\n}\n\n.tree-outline li::before {\n  content: "";\n  width: 14px;\n  display: inline-block;\n  margin-bottom: -2px;\n  margin-right: 3px;\n}\n\n.tree-outline li.property {\n  color: var(--sys-color-on-surface);\n}\n\n.tree-outline li.invalid {\n  position: relative;\n  left: -2px;\n}\n\n.tree-outline span[is="dt-icon-label"] + .ax-name {\n  margin-left: -11px;\n}\n\n.tree-outline li span {\n  flex-shrink: 0;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n@media (forced-colors: active) {\n  .ax-value-source-unused {\n    opacity: 100%;\n  }\n\n  .tree-outline-disclosure:hover li.parent::before {\n    background-color: ButtonText;\n  }\n}\n\n/*# sourceURL=accessibilityNode.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./panels/accessibility/accessibilityProperties.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2015 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.ax-name {\n  color: var(--sys-color-token-attribute);\n  flex-shrink: 0;\n}\n\n.ax-readable-name {\n  flex-shrink: 0;\n}\n\n.ax-readable-string {\n  font-style: italic;\n}\n\n.ax-value-string {\n  color: var(--sys-color-token-property-special);\n}\n\nspan.ax-internal-role {\n  font-style: italic;\n}\n\n#source-order-warning {\n  padding-bottom: 0;\n  text-align: left;\n}\n\n.source-order-checkbox {\n  margin: 2px 2px 2px 5px;\n}\n\n/*# sourceURL=accessibilityProperties.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);