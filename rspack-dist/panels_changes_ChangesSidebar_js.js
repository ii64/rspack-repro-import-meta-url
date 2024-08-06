"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_changes_ChangesSidebar_js"], {
"./models/workspace_diff/workspace_diff.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WorkspaceDiff: function() { return /* reexport module object */ _WorkspaceDiff_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _WorkspaceDiff_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorkspaceDiff.js */ "./models/workspace_diff/WorkspaceDiff.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=workspace_diff.js.map


}),
"./panels/changes/ChangesSidebar.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ChangesSidebar: function() { return ChangesSidebar; },
  UISourceCodeTreeElement: function() { return UISourceCodeTreeElement; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _models_workspace_diff_workspace_diff_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/workspace_diff/workspace_diff.js */ "./models/workspace_diff/workspace_diff.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _snippets_snippets_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../snippets/snippets.js */ "./panels/snippets/snippets.js");
/* harmony import */var _changesSidebar_css_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./changesSidebar.css.js */ "./panels/changes/changesSidebar.css.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
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
     *@description Name of an item from source map
     *@example {compile.html} PH1
     */ sFromSourceMap: '{PH1} (from source map)'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/changes/ChangesSidebar.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var ChangesSidebar = /*#__PURE__*/ function(_Common_ObjectWrapper_eventMixin) {
    "use strict";
    _inherits(ChangesSidebar, _Common_ObjectWrapper_eventMixin);
    var _super = _create_super(ChangesSidebar);
    function ChangesSidebar(workspaceDiff) {
        _class_call_check(this, ChangesSidebar);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "treeoutline", void 0);
        _define_property(_assert_this_initialized(_this), "treeElements", void 0);
        _define_property(_assert_this_initialized(_this), "workspaceDiff", void 0);
        _this.treeoutline = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeOutlineInShadow();
        _this.treeoutline.setFocusable(false);
        _this.treeoutline.setComparator(function(a, b) {
            return _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.compare(a.titleAsText(), b.titleAsText());
        });
        _this.treeoutline.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.Events.ElementSelected, _this.selectionChanged, _assert_this_initialized(_this));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsTablist(_this.treeoutline.contentElement);
        _this.element.appendChild(_this.treeoutline.element);
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.pane('sidebar').track({
            resize: true
        })));
        _this.treeElements = new Map();
        _this.workspaceDiff = workspaceDiff;
        _this.workspaceDiff.modifiedUISourceCodes().forEach(_this.addUISourceCode.bind(_assert_this_initialized(_this)));
        _this.workspaceDiff.addEventListener("ModifiedStatusChanged" /* WorkspaceDiff.WorkspaceDiff.Events.ModifiedStatusChanged */ , _this.uiSourceCodeMofiedStatusChanged, _assert_this_initialized(_this));
        return _this;
    }
    _create_class(ChangesSidebar, [
        {
            key: "selectUISourceCode",
            value: function selectUISourceCode(uiSourceCode, omitFocus) {
                var treeElement = this.treeElements.get(uiSourceCode);
                if (!treeElement) {
                    return;
                }
                treeElement.select(omitFocus);
            }
        },
        {
            key: "selectedUISourceCode",
            value: function selectedUISourceCode() {
                // @ts-ignore uiSourceCode seems to be dynamically attached.
                return this.treeoutline.selectedTreeElement ? this.treeoutline.selectedTreeElement.uiSourceCode : null;
            }
        },
        {
            key: "selectionChanged",
            value: function selectionChanged() {
                this.dispatchEventToListeners("SelectedUISourceCodeChanged" /* Events.SelectedUISourceCodeChanged */ );
            }
        },
        {
            key: "uiSourceCodeMofiedStatusChanged",
            value: function uiSourceCodeMofiedStatusChanged(event) {
                if (event.data.isModified) {
                    this.addUISourceCode(event.data.uiSourceCode);
                } else {
                    this.removeUISourceCode(event.data.uiSourceCode);
                }
            }
        },
        {
            key: "removeUISourceCode",
            value: function removeUISourceCode(uiSourceCode) {
                var treeElement = this.treeElements.get(uiSourceCode);
                this.treeElements.delete(uiSourceCode);
                if (this.treeoutline.selectedTreeElement === treeElement) {
                    var nextElementToSelect = treeElement.previousSibling || treeElement.nextSibling;
                    if (nextElementToSelect) {
                        nextElementToSelect.select(true);
                    } else {
                        treeElement.deselect();
                        this.selectionChanged();
                    }
                }
                if (treeElement) {
                    this.treeoutline.removeChild(treeElement);
                    treeElement.dispose();
                }
                if (this.treeoutline.rootElement().childCount() === 0) {
                    this.treeoutline.setFocusable(false);
                }
            }
        },
        {
            key: "addUISourceCode",
            value: function addUISourceCode(uiSourceCode) {
                var treeElement = new UISourceCodeTreeElement(uiSourceCode);
                this.treeElements.set(uiSourceCode, treeElement);
                this.treeoutline.setFocusable(true);
                this.treeoutline.appendChild(treeElement);
                if (!this.treeoutline.selectedTreeElement) {
                    treeElement.select(true);
                }
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(ChangesSidebar.prototype), "wasShown", this).call(this);
                this.treeoutline.registerCSSFiles([
                    _changesSidebar_css_js__WEBPACK_IMPORTED_MODULE_9__["default"]
                ]);
            }
        }
    ]);
    return ChangesSidebar;
}(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.Widget));
var UISourceCodeTreeElement = /*#__PURE__*/ function(_UI_TreeOutline_TreeElement) {
    "use strict";
    _inherits(UISourceCodeTreeElement, _UI_TreeOutline_TreeElement);
    var _super = _create_super(UISourceCodeTreeElement);
    function UISourceCodeTreeElement(uiSourceCode) {
        _class_call_check(this, UISourceCodeTreeElement);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "uiSourceCode", void 0);
        _define_property(_assert_this_initialized(_this), "eventListeners", void 0);
        _this.uiSourceCode = uiSourceCode;
        _this.listItemElement.classList.add('navigator-' + uiSourceCode.contentType().name() + '-tree-item');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsTab(_this.listItemElement);
        var iconName = 'document';
        if (_snippets_snippets_js__WEBPACK_IMPORTED_MODULE_8__.ScriptSnippetFileSystem.isSnippetsUISourceCode(_this.uiSourceCode)) {
            iconName = 'snippet';
        }
        var defaultIcon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.create(iconName);
        _this.setLeadingIcons([
            defaultIcon
        ]);
        _this.eventListeners = [
            uiSourceCode.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.UISourceCode.Events.TitleChanged, _this.updateTitle, _assert_this_initialized(_this)),
            uiSourceCode.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.UISourceCode.Events.WorkingCopyChanged, _this.updateTitle, _assert_this_initialized(_this)),
            uiSourceCode.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.UISourceCode.Events.WorkingCopyCommitted, _this.updateTitle, _assert_this_initialized(_this))
        ];
        _this.updateTitle();
        return _this;
    }
    _create_class(UISourceCodeTreeElement, [
        {
            key: "updateTitle",
            value: function updateTitle() {
                var titleText = this.uiSourceCode.displayName();
                if (this.uiSourceCode.isDirty()) {
                    titleText = '*' + titleText;
                }
                this.title = titleText;
                var tooltip = this.uiSourceCode.url();
                if (this.uiSourceCode.contentType().isFromSourceMap()) {
                    tooltip = i18nString(UIStrings.sFromSourceMap, {
                        PH1: this.uiSourceCode.displayName()
                    });
                }
                this.tooltip = tooltip;
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(this.eventListeners);
            }
        }
    ]);
    return UISourceCodeTreeElement;
} //# sourceMappingURL=ChangesSidebar.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeElement);


}),
"./panels/changes/changesSidebar.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.tree-outline li {\n  min-height: 20px;\n}\n\ndevtools-icon {\n  color: var(--icon-file-default);\n}\n\n.navigator-sm-script-tree-item devtools-icon,\n.navigator-script-tree-item devtools-icon,\n.navigator-snippet-tree-item devtools-icon {\n  color: var(--icon-file-script);\n}\n\n.navigator-sm-stylesheet-tree-item devtools-icon,\n.navigator-stylesheet-tree-item devtools-icon {\n  color: var(--icon-file-styles);\n}\n\n.navigator-image-tree-item devtools-icon {\n  color: var(--icon-file-image);\n}\n\n.navigator-font-tree-item devtools-icon {\n  color: var(--icon-file-font);\n}\n\n.tree-outline li:hover:not(.selected) .selection {\n  display: block;\n\n  & devtools-icon {\n    color: var(--icon-default-hover);\n  }\n}\n\n@media (forced-colors: active) {\n  li,\n  devtools-icon {\n    forced-color-adjust: none;\n    color: ButtonText !important; /* stylelint-disable-line declaration-no-important */\n  }\n}\n\n/*# sourceURL=changesSidebar.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);