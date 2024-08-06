"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_SnippetsPlugin_js"], {
"./panels/sources/Plugin.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Plugin: function() { return Plugin; }
});
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
var Plugin = /*#__PURE__*/ function() {
    "use strict";
    function Plugin(uiSourceCode, _transformer) {
        _class_call_check(this, Plugin);
        _define_property(this, "uiSourceCode", void 0);
        this.uiSourceCode = uiSourceCode;
    }
    _create_class(Plugin, [
        {
            key: "willHide",
            value: function willHide() {}
        },
        {
            key: "rightToolbarItems",
            value: function rightToolbarItems() {
                return [];
            }
        },
        {
            /**
     *
     * TODO(szuend): It is OK to asyncify this function (similar to {rightToolbarItems}),
     *               but it is currently not strictly necessary.
     */ key: "leftToolbarItems",
            value: function leftToolbarItems() {
                return [];
            }
        },
        {
            key: "populateLineGutterContextMenu",
            value: function populateLineGutterContextMenu(_contextMenu, _lineNumber) {}
        },
        {
            key: "populateTextAreaContextMenu",
            value: function populateTextAreaContextMenu(_contextMenu, _lineNumber, _columnNumber) {}
        },
        {
            key: "decorationChanged",
            value: function decorationChanged(_type, _editor) {}
        },
        {
            key: "editorExtension",
            value: function editorExtension() {
                return [];
            }
        },
        {
            key: "editorInitialized",
            value: function editorInitialized(_editor) {}
        },
        {
            key: "dispose",
            value: function dispose() {}
        }
    ], [
        {
            key: "accepts",
            value: function accepts(_uiSourceCode) {
                return false;
            }
        }
    ]);
    return Plugin;
} //# sourceMappingURL=Plugin.js.map
();


}),
"./panels/sources/SnippetsPlugin.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SnippetsPlugin: function() { return SnippetsPlugin; }
});
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/text_editor/text_editor.js */ "./ui/components/text_editor/text_editor.js");
/* harmony import */var _snippets_snippets_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../snippets/snippets.js */ "./panels/snippets/snippets.js");
/* harmony import */var _Plugin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Plugin.js */ "./panels/sources/Plugin.js");
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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






var UIStrings = {
    /**
     *@description Text in Snippets Plugin of the Sources panel
     */ enter: '⌘+Enter',
    /**
     *@description Text in Snippets Plugin of the Sources panel
     */ ctrlenter: 'Ctrl+Enter'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/sources/SnippetsPlugin.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var SnippetsPlugin = /*#__PURE__*/ function(Plugin) {
    "use strict";
    _inherits(SnippetsPlugin, Plugin);
    var _super = _create_super(SnippetsPlugin);
    function SnippetsPlugin() {
        _class_call_check(this, SnippetsPlugin);
        return _super.apply(this, arguments);
    }
    _create_class(SnippetsPlugin, [
        {
            key: "rightToolbarItems",
            value: function rightToolbarItems() {
                var runSnippet = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Toolbar.createActionButtonForId('debugger.run-snippet');
                runSnippet.setText(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.Platform.isMac() ? i18nString(UIStrings.enter) : i18nString(UIStrings.ctrlenter));
                return [
                    runSnippet
                ];
            }
        },
        {
            key: "editorExtension",
            value: function editorExtension() {
                return _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_3__.JavaScript.completion();
            }
        }
    ], [
        {
            key: "accepts",
            value: function accepts(uiSourceCode) {
                return _snippets_snippets_js__WEBPACK_IMPORTED_MODULE_4__.ScriptSnippetFileSystem.isSnippetsUISourceCode(uiSourceCode);
            }
        }
    ]);
    return SnippetsPlugin;
} //# sourceMappingURL=SnippetsPlugin.js.map
(_wrap_native_super(_Plugin_js__WEBPACK_IMPORTED_MODULE_5__.Plugin));


}),

}]);