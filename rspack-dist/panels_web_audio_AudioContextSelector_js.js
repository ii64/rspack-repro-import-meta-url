"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_web_audio_AudioContextSelector_js"], {
"./panels/web_audio/AudioContextSelector.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AudioContextSelector: function() { return AudioContextSelector; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _audioContextSelector_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./audioContextSelector.css.js */ "./panels/web_audio/audioContextSelector.css.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
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
     *@description Text that shows there is no recording
     */ noRecordings: '(no recordings)',
    /**
     *@description Label prefix for an audio context selection
     *@example {realtime (1e03ec)} PH1
     */ audioContextS: 'Audio context: {PH1}'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/web_audio/AudioContextSelector.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var AudioContextSelector = /*#__PURE__*/ function(_Common_ObjectWrapper_ObjectWrapper) {
    "use strict";
    _inherits(AudioContextSelector, _Common_ObjectWrapper_ObjectWrapper);
    var _super = _create_super(AudioContextSelector);
    function AudioContextSelector() {
        _class_call_check(this, AudioContextSelector);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "placeholderText", void 0);
        _define_property(_assert_this_initialized(_this), "items", void 0);
        _define_property(_assert_this_initialized(_this), "dropDown", void 0);
        _define_property(_assert_this_initialized(_this), "toolbarItemInternal", void 0);
        _define_property(_assert_this_initialized(_this), "selectedContextInternal", void 0);
        _this.placeholderText = i18nString(UIStrings.noRecordings);
        _this.items = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListModel.ListModel();
        _this.dropDown = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.SoftDropDown.SoftDropDown(_this.items, _assert_this_initialized(_this), 'audio-context');
        _this.dropDown.setPlaceholderText(_this.placeholderText);
        _this.toolbarItemInternal = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.ToolbarItem(_this.dropDown.element);
        _this.toolbarItemInternal.setEnabled(false);
        _this.toolbarItemInternal.setTitle(i18nString(UIStrings.audioContextS, {
            PH1: _this.placeholderText
        }));
        _this.items.addEventListener("ItemsReplaced" /* UI.ListModel.Events.ItemsReplaced */ , _this.onListItemReplaced, _assert_this_initialized(_this));
        _this.toolbarItemInternal.element.classList.add('toolbar-has-dropdown');
        _this.selectedContextInternal = null;
        return _this;
    }
    _create_class(AudioContextSelector, [
        {
            key: "onListItemReplaced",
            value: function onListItemReplaced() {
                var hasItems = Boolean(this.items.length);
                this.toolbarItemInternal.setEnabled(hasItems);
                if (!hasItems) {
                    this.toolbarItemInternal.setTitle(i18nString(UIStrings.audioContextS, {
                        PH1: this.placeholderText
                    }));
                }
            }
        },
        {
            key: "contextCreated",
            value: function contextCreated(param) {
                var context = param.data;
                this.items.insert(this.items.length, context);
                // Select if this is the first item.
                if (this.items.length === 1) {
                    this.dropDown.selectItem(context);
                }
            }
        },
        {
            key: "contextDestroyed",
            value: function contextDestroyed(param) {
                var contextId = param.data;
                var contextIndex = this.items.findIndex(function(context) {
                    return context.contextId === contextId;
                });
                if (contextIndex > -1) {
                    this.items.remove(contextIndex);
                }
            }
        },
        {
            key: "contextChanged",
            value: function contextChanged(param) {
                var changedContext = param.data;
                var contextIndex = this.items.findIndex(function(context) {
                    return context.contextId === changedContext.contextId;
                });
                if (contextIndex > -1) {
                    this.items.replace(contextIndex, changedContext);
                    // If the changed context is currently selected by user. Re-select it
                    // because the actual element is replaced with a new one.
                    if (this.selectedContextInternal && this.selectedContextInternal.contextId === changedContext.contextId) {
                        this.dropDown.selectItem(changedContext);
                    }
                }
            }
        },
        {
            key: "createElementForItem",
            value: function createElementForItem(item) {
                var element = document.createElement('div');
                var shadowRoot = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createShadowRootWithCoreStyles(element, {
                    cssFile: [
                        _audioContextSelector_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]
                    ],
                    delegatesFocus: undefined
                });
                var title = shadowRoot.createChild('div', 'title');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextChild(title, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.trimEndWithMaxLength(this.titleFor(item), 100));
                return element;
            }
        },
        {
            key: "selectedContext",
            value: function selectedContext() {
                if (!this.selectedContextInternal) {
                    return null;
                }
                return this.selectedContextInternal;
            }
        },
        {
            key: "highlightedItemChanged",
            value: function highlightedItemChanged(from, to, fromElement, toElement) {
                if (fromElement) {
                    fromElement.classList.remove('highlighted');
                }
                if (toElement) {
                    toElement.classList.add('highlighted');
                }
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
                if (!item) {
                    return;
                }
                // It's possible that no context is selected yet.
                if (!this.selectedContextInternal || this.selectedContextInternal.contextId !== item.contextId) {
                    this.selectedContextInternal = item;
                    this.toolbarItemInternal.setTitle(i18nString(UIStrings.audioContextS, {
                        PH1: this.titleFor(item)
                    }));
                }
                this.dispatchEventToListeners("ContextSelected" /* Events.ContextSelected */ , item);
            }
        },
        {
            key: "reset",
            value: function reset() {
                this.items.replaceAll([]);
            }
        },
        {
            key: "titleFor",
            value: function titleFor(context) {
                return "".concat(context.contextType, " (").concat(context.contextId.substr(-6), ")");
            }
        },
        {
            key: "toolbarItem",
            value: function toolbarItem() {
                return this.toolbarItemInternal;
            }
        }
    ]);
    return AudioContextSelector;
} //# sourceMappingURL=AudioContextSelector.js.map
(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper);


}),
"./panels/web_audio/audioContextSelector.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2019 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  padding: 2px 1px 2px 2px;\n  white-space: nowrap;\n  display: flex;\n  flex-direction: column;\n  height: 36px;\n  justify-content: center;\n}\n\n.title {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex-grow: 0;\n}\n\n/*# sourceURL=audioContextSelector.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);