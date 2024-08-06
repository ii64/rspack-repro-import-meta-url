"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_css_overview_CSSOverviewSidebarPanel_js"], {
"./panels/css_overview/CSSOverviewSidebarPanel.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CSSOverviewSidebarPanel: function() { return CSSOverviewSidebarPanel; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _cssOverviewSidebarPanel_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cssOverviewSidebarPanel.css.js */ "./panels/css_overview/cssOverviewSidebarPanel.css.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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
     *@description Label for the 'Clear overview' button in the CSS overview report
     */ clearOverview: 'Clear overview',
    /**
     * @description Accessible label for the CSS overview panel sidebar
     */ cssOverviewPanelSidebar: 'CSS overview panel sidebar'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/css_overview/CSSOverviewSidebarPanel.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var ITEM_CLASS_NAME = 'overview-sidebar-panel-item';
var SELECTED_CLASS_NAME = 'selected';
var _reset = /*#__PURE__*/ new WeakSet(), _deselectAllItems = /*#__PURE__*/ new WeakSet(), _onItemClick = /*#__PURE__*/ new WeakSet(), _onItemKeyDown = /*#__PURE__*/ new WeakSet();
var CSSOverviewSidebarPanel = /*#__PURE__*/ function(_Common_ObjectWrapper_eventMixin) {
    "use strict";
    _inherits(CSSOverviewSidebarPanel, _Common_ObjectWrapper_eventMixin);
    var _super = _create_super(CSSOverviewSidebarPanel);
    function CSSOverviewSidebarPanel() {
        _class_call_check(this, CSSOverviewSidebarPanel);
        var _this;
        _this = _super.call(this, true);
        _class_private_method_init(_assert_this_initialized(_this), _reset);
        _class_private_method_init(_assert_this_initialized(_this), _deselectAllItems);
        _class_private_method_init(_assert_this_initialized(_this), _onItemClick);
        _class_private_method_init(_assert_this_initialized(_this), _onItemKeyDown);
        _define_property(_assert_this_initialized(_this), "containerElement", void 0);
        _this.contentElement.classList.add('overview-sidebar-panel');
        _this.contentElement.addEventListener('click', _class_private_method_get(_this, _onItemClick, onItemClick).bind(_assert_this_initialized(_this)));
        _this.contentElement.addEventListener('keydown', _class_private_method_get(_this, _onItemKeyDown, onItemKeyDown).bind(_assert_this_initialized(_this)));
        // We need a container so that each item covers the full width of the
        // longest item, so that the selected item's background expands fully
        // even when the sidebar overflows.
        // Also see crbug/1408003
        _this.containerElement = _this.contentElement.createChild('div', 'overview-sidebar-panel-container');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.setLabel(_this.containerElement, i18nString(UIStrings.cssOverviewPanelSidebar));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.markAsTree(_this.containerElement);
        // Clear overview.
        var clearResultsButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarButton(i18nString(UIStrings.clearOverview), 'clear', undefined, 'css-overview.clear-overview');
        clearResultsButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , _class_private_method_get(_assert_this_initialized(_this), _reset, reset), _assert_this_initialized(_this));
        // Toolbar.
        var toolbarElement = _this.containerElement.createChild('div', 'overview-toolbar');
        var toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Toolbar('', toolbarElement);
        toolbar.appendToolbarItem(clearResultsButton);
        return _this;
    }
    _create_class(CSSOverviewSidebarPanel, [
        {
            key: "addItem",
            value: function addItem(name, id) {
                var item = this.containerElement.createChild('div', ITEM_CLASS_NAME);
                item.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.item().track({
                    click: true,
                    keydown: 'Enter|ArrowUp|ArrowDown'
                }).context("css-overview.".concat(id))));
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.markAsTreeitem(item);
                item.textContent = name;
                item.dataset.id = id;
                item.tabIndex = 0;
            }
        },
        {
            key: "select",
            value: function select(id, focus) {
                var target = this.containerElement.querySelector("[data-id=".concat(CSS.escape(id), "]"));
                if (!target) {
                    return;
                }
                if (target.classList.contains(SELECTED_CLASS_NAME)) {
                    return;
                }
                _class_private_method_get(this, _deselectAllItems, deselectAllItems).call(this);
                target.classList.add(SELECTED_CLASS_NAME);
                if (focus) {
                    target.contentEditable = 'true';
                    target.focus();
                    target.contentEditable = 'false';
                }
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(CSSOverviewSidebarPanel.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _cssOverviewSidebarPanel_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]
                ]);
            }
        }
    ]);
    return CSSOverviewSidebarPanel;
} //# sourceMappingURL=CSSOverviewSidebarPanel.js.map
(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.VBox));
function reset() {
    this.dispatchEventToListeners("Reset" /* SidebarEvents.Reset */ );
}
function deselectAllItems() {
    var items = this.containerElement.querySelectorAll(".".concat(ITEM_CLASS_NAME));
    items.forEach(function(item) {
        item.classList.remove(SELECTED_CLASS_NAME);
    });
}
function onItemClick(event) {
    var target = event.composedPath()[0];
    if (!target.classList.contains(ITEM_CLASS_NAME)) {
        return;
    }
    var id = target.dataset.id;
    if (!id) {
        return;
    }
    this.select(id, false);
    this.dispatchEventToListeners("ItemSelected" /* SidebarEvents.ItemSelected */ , {
        id: id,
        isMouseEvent: true,
        key: undefined
    });
}
function onItemKeyDown(event) {
    if (event.key !== 'Enter' && event.key !== 'ArrowUp' && event.key !== 'ArrowDown') {
        return;
    }
    var target = event.composedPath()[0];
    if (!target.classList.contains(ITEM_CLASS_NAME)) {
        return;
    }
    var id = target.dataset.id;
    if (!id) {
        return;
    }
    if (event.key === 'Enter') {
        this.select(id, false);
        this.dispatchEventToListeners("ItemSelected" /* SidebarEvents.ItemSelected */ , {
            id: id,
            isMouseEvent: false,
            key: event.key
        });
    } else {
        var items = this.containerElement.querySelectorAll(".".concat(ITEM_CLASS_NAME));
        var currItemIndex = -1;
        for(var idx = 0; idx < items.length; idx++){
            if (items[idx].dataset.id === id) {
                currItemIndex = idx;
                break;
            }
        }
        if (currItemIndex < 0) {
            return;
        }
        var moveTo = event.key === 'ArrowDown' ? 1 : -1;
        var nextItemIndex = (currItemIndex + moveTo) % items.length;
        var nextItemId = items[nextItemIndex].dataset.id;
        if (!nextItemId) {
            return;
        }
        this.select(nextItemId, true);
        this.dispatchEventToListeners("ItemSelected" /* SidebarEvents.ItemSelected */ , {
            id: nextItemId,
            isMouseEvent: false,
            key: event.key
        });
    }
    event.consume(true);
}


}),
"./panels/css_overview/cssOverviewSidebarPanel.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/**\n * Copyright 2019 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.overview-sidebar-panel {\n  overflow: auto;\n  display: flex;\n  background: var(--sys-color-cdt-base-container);\n}\n\n.overview-sidebar-panel-container {\n  min-width: fit-content;\n}\n\n.overview-sidebar-panel-item {\n  height: 30px;\n  padding-left: 30px;\n  display: flex;\n  align-items: center;\n  color: var(--sys-color-on-surface);\n  white-space: nowrap;\n\n  &:hover {\n    background: var(--sys-color-state-hover-on-subtle);\n  }\n\n  &:focus {\n    background: var(--sys-color-state-focus-highlight);\n  }\n\n  &.selected {\n    background: var(--sys-color-tonal-container);\n    color: var(--sys-color-on-tonal-container);\n  }\n}\n\n.overview-toolbar {\n  border-bottom: 1px solid var(--sys-color-divider);\n  flex: 0 0 auto;\n}\n\n.overview-sidebar-panel-item:focus-visible {\n  outline-width: unset;\n}\n\n@media (forced-colors: active) {\n  .overview-sidebar-panel-item.selected {\n    forced-color-adjust: none; /* crbug.com/1166705 workaround */\n    background: Highlight;\n    color: HighlightText;\n  }\n\n  .overview-sidebar-panel-item:hover {\n    forced-color-adjust: none; /* crbug.com/1166705 workaround */\n    background: Highlight;\n    color: HighlightText;\n  }\n}\n\n/*# sourceURL=cssOverviewSidebarPanel.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);