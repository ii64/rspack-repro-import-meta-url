"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_ThreadsSidebarPane_js"], {
"./panels/sources/ThreadsSidebarPane.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ThreadsSidebarPane: function() { return ThreadsSidebarPane; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _threadsSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./threadsSidebarPane.css.js */ "./panels/sources/threadsSidebarPane.css.js");
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self1) {
    if (self1 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self1;
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
function _possible_constructor_return(self1, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self1);
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
     *@description Text in Threads Sidebar Pane of the Sources panel
     */ paused: 'paused'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/sources/ThreadsSidebarPane.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var ThreadsSidebarPane = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(ThreadsSidebarPane, _UI_Widget_VBox);
    var _super = _create_super(ThreadsSidebarPane);
    function ThreadsSidebarPane() {
        _class_call_check(this, ThreadsSidebarPane);
        var _this;
        _this = _super.call(this, true);
        _define_property(_assert_this_initialized(_this), "items", void 0);
        _define_property(_assert_this_initialized(_this), "list", void 0);
        _define_property(_assert_this_initialized(_this), "selectedModel", void 0);
        _this.contentElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.section('sources.threads')));
        _this.items = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListModel.ListModel();
        _this.list = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListControl.ListControl(_this.items, _assert_this_initialized(_this), _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListControl.ListMode.NonViewport);
        var currentTarget = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Target);
        _this.selectedModel = currentTarget !== null ? currentTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel) : null;
        _this.contentElement.appendChild(_this.list.element);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Target, _this.targetFlavorChanged, _assert_this_initialized(_this));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel, _assert_this_initialized(_this));
        return _this;
    }
    _create_class(ThreadsSidebarPane, [
        {
            key: "createElementForItem",
            value: function createElementForItem(debuggerModel) {
                var element = document.createElement('div');
                element.classList.add('thread-item');
                var title = element.createChild('div', 'thread-item-title');
                var pausedState = element.createChild('div', 'thread-item-paused-state');
                var icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon();
                icon.data = {
                    iconName: 'large-arrow-right-filled',
                    color: 'var(--icon-arrow-main-thread)',
                    width: '14px',
                    height: '14px'
                };
                icon.classList.add('selected-thread-icon');
                element.appendChild(icon);
                element.tabIndex = -1;
                self.onInvokeElement(element, function(event) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Target, debuggerModel.target());
                    event.consume(true);
                });
                var isSelected = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Target) === debuggerModel.target();
                element.classList.toggle('selected', isSelected);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.setSelected(element, isSelected);
                function updateTitle() {
                    var executionContext = debuggerModel.runtimeModel().defaultExecutionContext();
                    title.textContent = executionContext && executionContext.label() ? executionContext.label() : debuggerModel.target().name();
                }
                function updatePausedState() {
                    pausedState.textContent = debuggerModel.isPaused() ? i18nString(UIStrings.paused) : '';
                }
                function targetNameChanged(event) {
                    var target = event.data;
                    if (target === debuggerModel.target()) {
                        updateTitle();
                    }
                }
                debuggerModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.Events.DebuggerPaused, updatePausedState);
                debuggerModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.Events.DebuggerResumed, updatePausedState);
                debuggerModel.runtimeModel().addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.Events.ExecutionContextChanged, updateTitle);
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().addEventListener("NameChanged" /* SDK.TargetManager.Events.NameChanged */ , targetNameChanged);
                updatePausedState();
                updateTitle();
                return element;
            }
        },
        {
            key: "heightForItem",
            value: function heightForItem(_debuggerModel) {
                console.assert(false); // Should not be called.
                return 0;
            }
        },
        {
            key: "isItemSelectable",
            value: function isItemSelectable(_debuggerModel) {
                return true;
            }
        },
        {
            key: "selectedItemChanged",
            value: function selectedItemChanged(_from, _to, fromElement, toElement) {
                var fromEle = fromElement;
                if (fromEle) {
                    fromEle.tabIndex = -1;
                }
                var toEle = toElement;
                if (toEle) {
                    this.setDefaultFocusedElement(toEle);
                    toEle.tabIndex = 0;
                    if (this.hasFocus()) {
                        toEle.focus();
                    }
                }
            }
        },
        {
            key: "updateSelectedItemARIA",
            value: function updateSelectedItemARIA(_fromElement, _toElement) {
                return false;
            }
        },
        {
            key: "modelAdded",
            value: function modelAdded(debuggerModel) {
                this.items.insert(this.items.length, debuggerModel);
                var currentTarget = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Target);
                if (currentTarget === debuggerModel.target()) {
                    this.list.selectItem(debuggerModel);
                }
            }
        },
        {
            key: "modelRemoved",
            value: function modelRemoved(debuggerModel) {
                this.items.remove(this.items.indexOf(debuggerModel));
            }
        },
        {
            key: "targetFlavorChanged",
            value: function targetFlavorChanged(param) {
                var target = param.data;
                var hadFocus = this.hasFocus();
                var debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
                this.list.selectItem(debuggerModel);
                if (debuggerModel) {
                    this.list.refreshItem(debuggerModel);
                }
                if (this.selectedModel !== null) {
                    this.list.refreshItem(this.selectedModel);
                }
                this.selectedModel = debuggerModel;
                if (hadFocus) {
                    this.focus();
                }
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(ThreadsSidebarPane.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _threadsSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
                ]);
            }
        }
    ], [
        {
            key: "shouldBeShown",
            value: function shouldBeShown() {
                return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().models(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel).length >= 2;
            }
        }
    ]);
    return ThreadsSidebarPane;
} //# sourceMappingURL=ThreadsSidebarPane.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox);


}),
"./panels/sources/threadsSidebarPane.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2017 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.thread-item {\n  padding: 3px 8px 3px 20px;\n  position: relative;\n  min-height: 18px;\n  line-height: 15px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.thread-item + .thread-item {\n  border-top: 1px solid var(--sys-color-divider);\n}\n\n.thread-item:hover {\n  background-color: var(--sys-color-state-hover-on-subtle);\n}\n\n.thread-item:focus-visible {\n  background-color: var(--sys-color-tonal-container);\n}\n\n.thread-item-title,\n.thread-item-paused-state {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.thread-item-paused-state {\n  color: var(--sys-color-state-disabled);\n  margin-left: auto;\n  padding: 0 10px;\n}\n\n.selected-thread-icon {\n  display: none;\n  position: absolute;\n  top: 3px;\n  left: 4px;\n}\n\n.thread-item.selected .selected-thread-icon {\n  display: block;\n}\n\n@media (forced-colors: active) {\n  .thread-item:hover,\n  .thread-item:focus-visible {\n    forced-color-adjust: none;\n    background-color: Highlight;\n  }\n\n  .thread-item:hover > div,\n  .thread-item:focus-visible > div {\n    color: HighlightText;\n  }\n}\n\n/*# sourceURL=threadsSidebarPane.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);