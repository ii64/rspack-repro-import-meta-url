"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_inline_editor_SwatchPopoverHelper_js"], {
"./ui/legacy/components/inline_editor/SwatchPopoverHelper.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SwatchPopoverHelper: function() { return SwatchPopoverHelper; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ColorSwatch_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ColorSwatch.js */ "./ui/legacy/components/inline_editor/ColorSwatch.js");
/* harmony import */var _swatchPopover_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./swatchPopover.css.js */ "./ui/legacy/components/inline_editor/swatchPopover.css.js");
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






var SwatchPopoverHelper = /*#__PURE__*/ function(_Common_ObjectWrapper_ObjectWrapper) {
    "use strict";
    _inherits(SwatchPopoverHelper, _Common_ObjectWrapper_ObjectWrapper);
    var _super = _create_super(SwatchPopoverHelper);
    function SwatchPopoverHelper() {
        _class_call_check(this, SwatchPopoverHelper);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "popover", void 0);
        _define_property(_assert_this_initialized(_this), "hideProxy", void 0);
        _define_property(_assert_this_initialized(_this), "boundOnKeyDown", void 0);
        _define_property(_assert_this_initialized(_this), "boundFocusOut", void 0);
        _define_property(_assert_this_initialized(_this), "isHidden", void 0);
        _define_property(_assert_this_initialized(_this), "anchorElement", void 0);
        _define_property(_assert_this_initialized(_this), "view", void 0);
        _define_property(_assert_this_initialized(_this), "hiddenCallback", void 0);
        _define_property(_assert_this_initialized(_this), "focusRestorer", void 0);
        _this.popover = new _legacy_js__WEBPACK_IMPORTED_MODULE_3__.GlassPane.GlassPane();
        _this.popover.setSizeBehavior("MeasureContent" /* UI.GlassPane.SizeBehavior.MeasureContent */ );
        _this.popover.setMarginBehavior("Arrow" /* UI.GlassPane.MarginBehavior.Arrow */ );
        _this.popover.element.addEventListener('mousedown', function(e) {
            return e.consume();
        }, false);
        _this.hideProxy = _this.hide.bind(_assert_this_initialized(_this), true);
        _this.boundOnKeyDown = _this.onKeyDown.bind(_assert_this_initialized(_this));
        _this.boundFocusOut = _this.onFocusOut.bind(_assert_this_initialized(_this));
        _this.isHidden = true;
        _this.anchorElement = null;
        return _this;
    }
    _create_class(SwatchPopoverHelper, [
        {
            key: "onFocusOut",
            value: function onFocusOut(event) {
                var relatedTarget = event.relatedTarget;
                if (this.isHidden || !relatedTarget || !this.view || relatedTarget.isSelfOrDescendant(this.view.contentElement)) {
                    return;
                }
                this.hideProxy();
            }
        },
        {
            key: "setAnchorElement",
            value: function setAnchorElement(anchorElement) {
                this.anchorElement = anchorElement;
            }
        },
        {
            key: "isShowing",
            value: function isShowing(view) {
                return this.popover.isShowing() && (view && this.view === view || !view);
            }
        },
        {
            key: "show",
            value: function show(view, anchorElement, hiddenCallback) {
                if (this.popover.isShowing()) {
                    if (this.anchorElement === anchorElement) {
                        return;
                    }
                    // Reopen the picker for another anchor element.
                    this.hide(true);
                }
                _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.setMappedParent(view.contentElement, anchorElement);
                this.popover.registerCSSFiles([
                    _swatchPopover_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
                ]);
                this.dispatchEventToListeners("WillShowPopover" /* Events.WillShowPopover */ );
                this.isHidden = false;
                this.anchorElement = anchorElement;
                this.view = view;
                this.hiddenCallback = hiddenCallback;
                this.reposition();
                view.focus();
                var document = this.popover.element.ownerDocument;
                document.addEventListener('mousedown', this.hideProxy, false);
                if (document.defaultView) {
                    document.defaultView.addEventListener('resize', this.hideProxy, false);
                }
                this.view.contentElement.addEventListener('keydown', this.boundOnKeyDown, false);
            }
        },
        {
            key: "reposition",
            value: function reposition() {
                // This protects against trying to reposition the popover after it has been hidden.
                if (this.isHidden || !this.view) {
                    return;
                }
                // Unbind "blur" listener to avoid reenterability: |popover.show()| will hide the popover and trigger it synchronously.
                this.view.contentElement.removeEventListener('focusout', this.boundFocusOut, false);
                this.view.show(this.popover.contentElement);
                if (this.anchorElement) {
                    var anchorBox = this.anchorElement.boxInWindow();
                    if (_ColorSwatch_js__WEBPACK_IMPORTED_MODULE_4__.ColorSwatch.isColorSwatch(this.anchorElement)) {
                        var swatch = this.anchorElement;
                        if (!swatch.anchorBox) {
                            return;
                        }
                        anchorBox = swatch.anchorBox;
                    }
                    this.popover.setContentAnchorBox(anchorBox);
                    this.popover.show(this.anchorElement.ownerDocument);
                }
                this.view.contentElement.addEventListener('focusout', this.boundFocusOut, false);
                if (!this.focusRestorer) {
                    this.focusRestorer = new _legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.WidgetFocusRestorer(this.view);
                }
            }
        },
        {
            key: "hide",
            value: function hide(commitEdit) {
                if (this.isHidden) {
                    return;
                }
                var document = this.popover.element.ownerDocument;
                this.isHidden = true;
                this.popover.hide();
                document.removeEventListener('mousedown', this.hideProxy, false);
                if (document.defaultView) {
                    document.defaultView.removeEventListener('resize', this.hideProxy, false);
                }
                if (this.hiddenCallback) {
                    this.hiddenCallback.call(null, Boolean(commitEdit));
                }
                if (this.focusRestorer) {
                    this.focusRestorer.restore();
                }
                this.anchorElement = null;
                if (this.view) {
                    this.view.detach();
                    this.view.contentElement.removeEventListener('keydown', this.boundOnKeyDown, false);
                    this.view.contentElement.removeEventListener('focusout', this.boundFocusOut, false);
                    delete this.view;
                }
            }
        },
        {
            key: "onKeyDown",
            value: function onKeyDown(event) {
                if (event.key === 'Enter') {
                    this.hide(true);
                    event.consume(true);
                    return;
                }
                if (event.key === _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.KeyboardUtilities.ESCAPE_KEY) {
                    this.hide(false);
                    event.consume(true);
                }
            }
        }
    ]);
    return SwatchPopoverHelper;
} //# sourceMappingURL=SwatchPopoverHelper.js.map
(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper);


}),
"./ui/legacy/components/inline_editor/swatchPopover.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2017 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.widget {\n  display: flex;\n  background: var(--sys-color-cdt-base-container);\n  box-shadow: var(--drop-shadow);\n  border-radius: 2px;\n  overflow: auto;\n  user-select: text;\n  line-height: 11px;\n}\n\n/*# sourceURL=swatchPopover.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);