"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_AddSourceMapURLDialog_js"], {
"./panels/sources/AddSourceMapURLDialog.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AddDebugInfoURLDialog: function() { return AddDebugInfoURLDialog; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _dialog_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog.css.js */ "./panels/sources/dialog.css.js");
// Copyright 2014 The Chromium Authors. All rights reserved.
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
     *@description Text in Add Source Map URLDialog of the Sources panel
     */ sourceMapUrl: 'Source map URL: ',
    /**
     *@description Text in Add Debug Info URL Dialog of the Sources panel
     */ debugInfoUrl: 'DWARF symbols URL: ',
    /**
     *@description Text to add something
     */ add: 'Add'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/sources/AddSourceMapURLDialog.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var AddDebugInfoURLDialog = /*#__PURE__*/ function(_UI_Widget_HBox) {
    "use strict";
    _inherits(AddDebugInfoURLDialog, _UI_Widget_HBox);
    var _super = _create_super(AddDebugInfoURLDialog);
    function AddDebugInfoURLDialog(label, jslogContext, callback) {
        _class_call_check(this, AddDebugInfoURLDialog);
        var _this;
        _this = _super.call(this, /* isWebComponent */ true);
        _define_property(_assert_this_initialized(_this), "input", void 0);
        _define_property(_assert_this_initialized(_this), "dialog", void 0);
        _define_property(_assert_this_initialized(_this), "callback", void 0);
        _this.contentElement.createChild('label').textContent = label;
        _this.input = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createInput('add-source-map', 'text', 'url');
        _this.input.addEventListener('keydown', _this.onKeyDown.bind(_assert_this_initialized(_this)), false);
        _this.contentElement.appendChild(_this.input);
        var addButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createTextButton(i18nString(UIStrings.add), _this.apply.bind(_assert_this_initialized(_this)), {
            jslogContext: 'add'
        });
        _this.contentElement.appendChild(addButton);
        _this.dialog = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Dialog.Dialog(jslogContext);
        _this.dialog.setSizeBehavior("MeasureContent" /* UI.GlassPane.SizeBehavior.MeasureContent */ );
        _this.dialog.setDefaultFocusedElement(_this.input);
        _this.callback = callback;
        return _this;
    }
    _create_class(AddDebugInfoURLDialog, [
        {
            key: "show",
            value: function show() {
                _get(_get_prototype_of(AddDebugInfoURLDialog.prototype), "show", this).call(this, this.dialog.contentElement);
                // UI.Dialog extends GlassPane and overrides the `show` method with a wider
                // accepted type. However, TypeScript uses the supertype declaration to
                // determine the full type, which requires a `!Document`.
                // @ts-ignore
                this.dialog.show();
            }
        },
        {
            key: "done",
            value: function done(value) {
                this.dialog.hide();
                this.callback(value);
            }
        },
        {
            key: "apply",
            value: function apply() {
                this.done(this.input.value);
            }
        },
        {
            key: "onKeyDown",
            value: function onKeyDown(event) {
                if (event.key === 'Enter') {
                    event.consume(true);
                    this.apply();
                }
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(AddDebugInfoURLDialog.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _dialog_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]
                ]);
            }
        }
    ], [
        {
            key: "createAddSourceMapURLDialog",
            value: function createAddSourceMapURLDialog(callback) {
                return new AddDebugInfoURLDialog(i18nString(UIStrings.sourceMapUrl), 'add-source-map-url', callback);
            }
        },
        {
            key: "createAddDWARFSymbolsURLDialog",
            value: function createAddDWARFSymbolsURLDialog(callback) {
                return new AddDebugInfoURLDialog(i18nString(UIStrings.debugInfoUrl), 'add-debug-info-url', callback);
            }
        }
    ]);
    return AddDebugInfoURLDialog;
} //# sourceMappingURL=AddSourceMapURLDialog.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Widget.HBox);


}),
"./panels/sources/dialog.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright (c) 2015 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  padding: 10px;\n}\n\n.widget {\n  align-items: center;\n}\n\nlabel {\n  white-space: nowrap;\n}\n\ninput[type="text"].add-source-map {\n  box-shadow: 0 0 0 1px var(--box-shadow-outline-color);\n  font-size: inherit;\n  margin: 0 8px 0 5px;\n}\n\n/*# sourceURL=dialog.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);