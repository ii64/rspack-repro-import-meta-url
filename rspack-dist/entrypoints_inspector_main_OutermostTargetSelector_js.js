"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["entrypoints_inspector_main_OutermostTargetSelector_js"], {
"./entrypoints/inspector_main/OutermostTargetSelector.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  OutermostTargetSelector: function() { return OutermostTargetSelector; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _outermostTargetSelector_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./outermostTargetSelector.css.js */ "./entrypoints/inspector_main/outermostTargetSelector.css.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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






var UIStrings = {
    /**
     *@description Title of toolbar item in outermost target selector in the main toolbar
     */ targetNotSelected: 'Page: Not selected',
    /**
     *@description Title of toolbar item in outermost target selector in the main toolbar
     *@example {top} PH1
     */ targetS: 'Page: {PH1}'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('entrypoints/inspector_main/OutermostTargetSelector.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var outermostTargetSelectorInstance;
var _dropDown = /*#__PURE__*/ new WeakMap(), _toolbarItem = /*#__PURE__*/ new WeakMap(), _targetComparator = /*#__PURE__*/ new WeakSet(), _onTargetInfoChanged = /*#__PURE__*/ new WeakSet(), _onInspectedURLChanged = /*#__PURE__*/ new WeakSet(), _targetChanged = /*#__PURE__*/ new WeakSet(), _subtitleFor = /*#__PURE__*/ new WeakSet();
var OutermostTargetSelector = /*#__PURE__*/ function() {
    "use strict";
    function OutermostTargetSelector() {
        var _this = this;
        _class_call_check(this, OutermostTargetSelector);
        _class_private_method_init(this, _targetComparator);
        _class_private_method_init(this, _onTargetInfoChanged);
        _class_private_method_init(this, _onInspectedURLChanged);
        _class_private_method_init(this, _targetChanged);
        _class_private_method_init(this, _subtitleFor);
        _define_property(this, "listItems", void 0);
        _class_private_field_init(this, _dropDown, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _toolbarItem, {
            writable: true,
            value: void 0
        });
        this.listItems = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ListModel.ListModel();
        _class_private_field_set(this, _dropDown, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.SoftDropDown.SoftDropDown(this.listItems, this));
        _class_private_field_get(this, _dropDown).setRowHeight(36);
        _class_private_field_set(this, _toolbarItem, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Toolbar.ToolbarItem(_class_private_field_get(this, _dropDown).element));
        _class_private_field_get(this, _toolbarItem).setTitle(i18nString(UIStrings.targetNotSelected));
        this.listItems.addEventListener("ItemsReplaced" /* UI.ListModel.Events.ItemsReplaced */ , function() {
            return _class_private_field_get(_this, _toolbarItem).setEnabled(Boolean(_this.listItems.length));
        });
        _class_private_field_get(this, _toolbarItem).element.classList.add('toolbar-has-dropdown');
        var targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance();
        targetManager.addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ChildTargetManager.ChildTargetManager, "TargetInfoChanged" /* SDK.ChildTargetManager.Events.TargetInfoChanged */ , _class_private_method_get(this, _onTargetInfoChanged, onTargetInfoChanged), this);
        targetManager.addEventListener("NameChanged" /* SDK.TargetManager.Events.NameChanged */ , _class_private_method_get(this, _onInspectedURLChanged, onInspectedURLChanged), this);
        targetManager.observeTargets(this);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Target, _class_private_method_get(this, _targetChanged, targetChanged), this);
    }
    _create_class(OutermostTargetSelector, [
        {
            key: "item",
            value: function item() {
                return _class_private_field_get(this, _toolbarItem);
            }
        },
        {
            key: "highlightedItemChanged",
            value: function highlightedItemChanged(_from, _to, fromElement, toElement) {
                if (fromElement) {
                    fromElement.classList.remove('highlighted');
                }
                if (toElement) {
                    toElement.classList.add('highlighted');
                }
            }
        },
        {
            key: "titleFor",
            value: function titleFor(target) {
                return target.name();
            }
        },
        {
            key: "targetAdded",
            value: function targetAdded(target) {
                if (target.outermostTarget() !== target) {
                    return;
                }
                this.listItems.insertWithComparator(target, _class_private_method_get(this, _targetComparator, targetComparator).call(this));
                _class_private_field_get(this, _toolbarItem).setVisible(this.listItems.length > 1);
                if (target === _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Target)) {
                    _class_private_field_get(this, _dropDown).selectItem(target);
                }
            }
        },
        {
            key: "targetRemoved",
            value: function targetRemoved(target) {
                var index = this.listItems.indexOf(target);
                if (index === -1) {
                    return;
                }
                this.listItems.remove(index);
                _class_private_field_get(this, _toolbarItem).setVisible(this.listItems.length > 1);
            }
        },
        {
            key: "createElementForItem",
            value: function createElementForItem(item) {
                var element = document.createElement('div');
                element.classList.add('target');
                var shadowRoot = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createShadowRootWithCoreStyles(element, {
                    cssFile: [
                        _outermostTargetSelector_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
                    ],
                    delegatesFocus: undefined
                });
                var title = shadowRoot.createChild('div', 'title');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createTextChild(title, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.trimEndWithMaxLength(this.titleFor(item), 100));
                var subTitle = shadowRoot.createChild('div', 'subtitle');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createTextChild(subTitle, _class_private_method_get(this, _subtitleFor, subtitleFor).call(this, item));
                return element;
            }
        },
        {
            key: "isItemSelectable",
            value: function isItemSelectable(_item) {
                return true;
            }
        },
        {
            key: "itemSelected",
            value: function itemSelected(item) {
                var _UI_Context_Context_instance_flavor;
                var title = item ? i18nString(UIStrings.targetS, {
                    PH1: this.titleFor(item)
                }) : i18nString(UIStrings.targetNotSelected);
                _class_private_field_get(this, _toolbarItem).setTitle(title);
                if (item && item !== ((_UI_Context_Context_instance_flavor = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Target)) === null || _UI_Context_Context_instance_flavor === void 0 ? void 0 : _UI_Context_Context_instance_flavor.outermostTarget())) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Target, item);
                }
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    forceNew: null
                };
                var forceNew = opts.forceNew;
                if (!outermostTargetSelectorInstance || forceNew) {
                    outermostTargetSelectorInstance = new OutermostTargetSelector();
                }
                return outermostTargetSelectorInstance;
            }
        }
    ]);
    return OutermostTargetSelector;
} //# sourceMappingURL=OutermostTargetSelector.js.map
();
function targetComparator() {
    return function(a, b) {
        var _aTargetInfo_subtype, _bTargetInfo_subtype, _aTargetInfo_subtype1, _bTargetInfo_subtype1;
        var aTargetInfo = a.targetInfo();
        var bTargetInfo = b.targetInfo();
        if (!aTargetInfo || !bTargetInfo) {
            return 0;
        }
        if (!((_aTargetInfo_subtype = aTargetInfo.subtype) === null || _aTargetInfo_subtype === void 0 ? void 0 : _aTargetInfo_subtype.length) && ((_bTargetInfo_subtype = bTargetInfo.subtype) === null || _bTargetInfo_subtype === void 0 ? void 0 : _bTargetInfo_subtype.length)) {
            return -1;
        }
        if (((_aTargetInfo_subtype1 = aTargetInfo.subtype) === null || _aTargetInfo_subtype1 === void 0 ? void 0 : _aTargetInfo_subtype1.length) && !((_bTargetInfo_subtype1 = bTargetInfo.subtype) === null || _bTargetInfo_subtype1 === void 0 ? void 0 : _bTargetInfo_subtype1.length)) {
            return 1;
        }
        return aTargetInfo.url.localeCompare(bTargetInfo.url);
    };
}
function onTargetInfoChanged(event) {
    var targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance();
    var target = targetManager.targetById(event.data.targetId);
    if (!target || target.outermostTarget() !== target) {
        return;
    }
    this.targetRemoved(target);
    this.targetAdded(target);
}
function onInspectedURLChanged(event) {
    var target = event.data;
    if (!target || target.outermostTarget() !== target) {
        return;
    }
    this.targetRemoved(target);
    this.targetAdded(target);
}
function targetChanged(param) {
    var target = param.data;
    _class_private_field_get(this, _dropDown).selectItem((target === null || target === void 0 ? void 0 : target.outermostTarget()) || null);
}
function subtitleFor(target) {
    var _target_targetInfo;
    var targetInfo = target.targetInfo();
    if (target === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().primaryPageTarget() && targetInfo) {
        return _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.ResourceUtils.displayNameForURL(targetInfo.url);
    }
    return ((_target_targetInfo = target.targetInfo()) === null || _target_targetInfo === void 0 ? void 0 : _target_targetInfo.subtype) || '';
}


}),
"./entrypoints/inspector_main/outermostTargetSelector.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2023 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  padding: 2px 1px 2px 2px;\n  white-space: nowrap;\n  display: flex;\n  flex-direction: column;\n  height: 36px;\n  justify-content: center;\n  overflow-y: auto;\n}\n\n.title {\n  overflow: hidden;\n  padding-left: 8px;\n  text-overflow: ellipsis;\n  flex-grow: 0;\n}\n\n.subtitle {\n  color: var(--sys-color-token-subtle);\n  margin-right: 3px;\n  overflow: hidden;\n  padding-left: 8px;\n  text-overflow: ellipsis;\n  flex-grow: 0;\n}\n\n:host(.highlighted) .subtitle {\n  color: inherit;\n}\n\n/*# sourceURL=outermostTargetSelector.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);