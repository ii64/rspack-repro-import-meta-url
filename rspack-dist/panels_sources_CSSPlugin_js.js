"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_CSSPlugin_js"], {
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
"./panels/sources/CSSPlugin.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CSSPlugin: function() { return CSSPlugin; },
  cssBindings: function() { return cssBindings; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../third_party/codemirror.next/codemirror.next.js */ "./third_party/codemirror.next/codemirror.next.js");
/* harmony import */var _ui_legacy_components_color_picker_color_picker_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/legacy/components/color_picker/color_picker.js */ "./ui/legacy/components/color_picker/color_picker.js");
/* harmony import */var _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/legacy/components/inline_editor/inline_editor.js */ "./ui/legacy/components/inline_editor/inline_editor.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _AddSourceMapURLDialog_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AddSourceMapURLDialog.js */ "./panels/sources/AddSourceMapURLDialog.js");
/* harmony import */var _Plugin_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Plugin.js */ "./panels/sources/Plugin.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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













// Plugin to add CSS completion, shortcuts, and color/curve swatches
// to editors with CSS content.
var UIStrings = {
    /**
     *@description Swatch icon element title in CSSPlugin of the Sources panel
     */ openColorPicker: 'Open color picker.',
    /**
     *@description Text to open the cubic bezier editor
     */ openCubicBezierEditor: 'Open cubic bezier editor.',
    /**
     *@description Text for a context menu item for attaching a sourcemap to the currently open css file
     */ addSourceMap: 'Add source map…'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/sources/CSSPlugin.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var dontCompleteIn = new Set([
    'ColorLiteral',
    'NumberLiteral',
    'StringLiteral',
    'Comment',
    'Important'
]);
function findPropertyAt(node, pos) {
    if (dontCompleteIn.has(node.name)) {
        return null;
    }
    for(var cur = node; cur; cur = cur.parent){
        if (cur.name === 'StyleSheet' || cur.name === 'Styles' || cur.name === 'CallExpression') {
            break;
        } else if (cur.name === 'Declaration') {
            var name = cur.getChild('PropertyName'), colon = cur.getChild(':');
            return name && colon && colon.to <= pos ? name : null;
        }
    }
    return null;
}
function getCurrentStyleSheet(url, cssModel) {
    var currentStyleSheet = cssModel.getStyleSheetIdsForURL(url);
    if (currentStyleSheet.length === 0) {
        throw new Error('Can\'t find style sheet ID for current URL');
    }
    return currentStyleSheet[0];
}
function specificCssCompletion(cx, uiSourceCode, cssModel) {
    return _specificCssCompletion.apply(this, arguments);
}
function _specificCssCompletion() {
    _specificCssCompletion = _async_to_generator(function(cx, uiSourceCode, cssModel) {
        var node, currentStyleSheet, existingClassNames, property, propertyValues;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    node = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.syntaxTree(cx.state).resolveInner(cx.pos, -1);
                    if (!(node.name === 'ClassName')) return [
                        3,
                        2
                    ];
                    // Should never happen, but let's code defensively here
                    (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.assertNotNullOrUndefined)(cssModel);
                    currentStyleSheet = getCurrentStyleSheet(uiSourceCode.url(), cssModel);
                    return [
                        4,
                        cssModel.getClassNames(currentStyleSheet)
                    ];
                case 1:
                    existingClassNames = _state.sent();
                    return [
                        2,
                        {
                            from: node.from,
                            options: existingClassNames.map(function(value) {
                                return {
                                    type: 'constant',
                                    label: value
                                };
                            })
                        }
                    ];
                case 2:
                    property = findPropertyAt(node, cx.pos);
                    if (property) {
                        propertyValues = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.CSSMetadata.cssMetadata().getPropertyValues(cx.state.sliceDoc(property.from, property.to));
                        return [
                            2,
                            {
                                from: node.name === 'ValueName' ? node.from : cx.pos,
                                options: propertyValues.map(function(value) {
                                    return {
                                        type: 'constant',
                                        label: value
                                    };
                                }),
                                validFor: RegExp("^[\\w\\P{ASCII}\\-]+$", "u")
                            }
                        ];
                    }
                    return [
                        2,
                        null
                    ];
            }
        });
    });
    return _specificCssCompletion.apply(this, arguments);
}
function findColorsAndCurves(state, from, to, onColor, onCurve) {
    var line = state.doc.lineAt(from);
    function getToken(from, to) {
        if (from >= line.to) {
            line = state.doc.lineAt(from);
        }
        return line.text.slice(from - line.from, to - line.from);
    }
    var tree = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.ensureSyntaxTree(state, to, 100);
    if (!tree) {
        return;
    }
    tree.iterate({
        from: from,
        to: to,
        enter: function(node) {
            var content;
            if (node.name === 'ValueName' || node.name === 'ColorLiteral') {
                content = getToken(node.from, node.to);
            } else if (node.name === 'Callee' && /^(?:(?:rgba?|hsla?|hwba?|lch|oklch|lab|oklab|color)|cubic-bezier)$/.test(getToken(node.from, node.to))) {
                content = state.sliceDoc(node.from, node.node.parent.to);
            }
            if (content) {
                var parsedColor = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(content);
                if (parsedColor) {
                    onColor(node.from, parsedColor, content);
                } else {
                    var parsedCurve = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Geometry.CubicBezier.parse(content);
                    if (parsedCurve) {
                        onCurve(node.from, parsedCurve, content);
                    }
                }
            }
        }
    });
}
var _text = /*#__PURE__*/ new WeakMap(), _color = /*#__PURE__*/ new WeakMap(), _from = /*#__PURE__*/ new WeakMap();
var ColorSwatchWidget = /*#__PURE__*/ function(_CodeMirror_WidgetType) {
    "use strict";
    _inherits(ColorSwatchWidget, _CodeMirror_WidgetType);
    var _super = _create_super(ColorSwatchWidget);
    function ColorSwatchWidget(color, text, from) {
        _class_call_check(this, ColorSwatchWidget);
        var _this;
        _this = _super.call(this);
        _class_private_field_init(_assert_this_initialized(_this), _text, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _color, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _from, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _color, color);
        _class_private_field_set(_assert_this_initialized(_this), _text, text);
        _class_private_field_set(_assert_this_initialized(_this), _from, from);
        return _this;
    }
    _create_class(ColorSwatchWidget, [
        {
            key: "eq",
            value: function eq(other) {
                return _class_private_field_get(this, _color).equal(_class_private_field_get(other, _color)) && _class_private_field_get(this, _text) === _class_private_field_get(other, _text) && _class_private_field_get(this, _from) === _class_private_field_get(other, _from);
            }
        },
        {
            key: "toDOM",
            value: function toDOM(view) {
                var _this = this;
                var swatch = new _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_9__.ColorSwatch.ColorSwatch(i18nString(UIStrings.openColorPicker));
                swatch.renderColor(_class_private_field_get(this, _color));
                var value = swatch.createChild('span');
                value.textContent = _class_private_field_get(this, _text);
                value.setAttribute('hidden', 'true');
                swatch.addEventListener(_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_9__.ColorSwatch.ColorChangedEvent.eventName, function(event) {
                    var _event_data_color_getAuthoredText;
                    var insert = (_event_data_color_getAuthoredText = event.data.color.getAuthoredText()) !== null && _event_data_color_getAuthoredText !== void 0 ? _event_data_color_getAuthoredText : event.data.color.asString();
                    view.dispatch({
                        changes: {
                            from: _class_private_field_get(_this, _from),
                            to: _class_private_field_get(_this, _from) + _class_private_field_get(_this, _text).length,
                            insert: insert
                        }
                    });
                    _class_private_field_set(_this, _text, insert);
                    _class_private_field_set(_this, _color, swatch.getColor());
                });
                swatch.addEventListener(_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_9__.ColorSwatch.ClickEvent.eventName, function(event) {
                    event.consume(true);
                    view.dispatch({
                        effects: setTooltip.of({
                            type: 0 /* TooltipType.Color */ ,
                            pos: view.posAtDOM(swatch),
                            text: _class_private_field_get(_this, _text),
                            swatch: swatch,
                            color: _class_private_field_get(_this, _color)
                        })
                    });
                });
                return swatch;
            }
        },
        {
            key: "ignoreEvent",
            value: function ignoreEvent() {
                return true;
            }
        }
    ]);
    return ColorSwatchWidget;
}(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.WidgetType);
var CurveSwatchWidget = /*#__PURE__*/ function(_CodeMirror_WidgetType) {
    "use strict";
    _inherits(CurveSwatchWidget, _CodeMirror_WidgetType);
    var _super = _create_super(CurveSwatchWidget);
    function CurveSwatchWidget(curve, text) {
        _class_call_check(this, CurveSwatchWidget);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "curve", void 0);
        _define_property(_assert_this_initialized(_this), "text", void 0);
        _this.curve = curve;
        _this.text = text;
        return _this;
    }
    _create_class(CurveSwatchWidget, [
        {
            key: "eq",
            value: function eq(other) {
                return this.curve.asCSSText() === other.curve.asCSSText() && this.text === other.text;
            }
        },
        {
            key: "toDOM",
            value: function toDOM(view) {
                var _this = this;
                var swatch = _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_9__.Swatches.BezierSwatch.create();
                swatch.setBezierText(this.text);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Tooltip.Tooltip.install(swatch.iconElement(), i18nString(UIStrings.openCubicBezierEditor));
                swatch.iconElement().addEventListener('click', function(event) {
                    event.consume(true);
                    view.dispatch({
                        effects: setTooltip.of({
                            type: 1 /* TooltipType.Curve */ ,
                            pos: view.posAtDOM(swatch),
                            text: _this.text,
                            swatch: swatch,
                            curve: _this.curve
                        })
                    });
                }, false);
                swatch.hideText(true);
                return swatch;
            }
        },
        {
            key: "ignoreEvent",
            value: function ignoreEvent() {
                return true;
            }
        }
    ]);
    return CurveSwatchWidget;
}(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.WidgetType);
function createCSSTooltip(active) {
    return {
        pos: active.pos,
        arrow: true,
        create: function create(view) {
            var text = active.text;
            var widget, addListener;
            if (active.type === 0 /* TooltipType.Color */ ) {
                var spectrum = new _ui_legacy_components_color_picker_color_picker_js__WEBPACK_IMPORTED_MODULE_8__.Spectrum.Spectrum();
                addListener = function(handler) {
                    spectrum.addEventListener("ColorChanged" /* ColorPicker.Spectrum.Events.ColorChanged */ , handler);
                };
                spectrum.addEventListener("SizeChanged" /* ColorPicker.Spectrum.Events.SizeChanged */ , function() {
                    return view.requestMeasure();
                });
                spectrum.setColor(active.color);
                widget = spectrum;
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.colorPickerOpenedFrom(0 /* Host.UserMetrics.ColorPickerOpenedFrom.SourcesPanel */ );
            } else {
                var spectrum1 = new _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_9__.BezierEditor.BezierEditor(active.curve);
                widget = spectrum1;
                addListener = function(handler) {
                    spectrum1.addEventListener("BezierChanged" /* InlineEditor.BezierEditor.Events.BezierChanged */ , handler);
                };
            }
            var dom = document.createElement('div');
            dom.className = 'cm-tooltip-swatchEdit';
            widget.markAsRoot();
            widget.show(dom);
            widget.showWidget();
            widget.element.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') {
                    event.consume();
                    view.dispatch({
                        effects: setTooltip.of(null),
                        changes: text === active.text ? undefined : {
                            from: active.pos,
                            to: active.pos + text.length,
                            insert: active.text
                        }
                    });
                    widget.hideWidget();
                    view.focus();
                }
            });
            widget.element.addEventListener('focusout', function(event) {
                if (event.relatedTarget && !widget.element.contains(event.relatedTarget)) {
                    view.dispatch({
                        effects: setTooltip.of(null)
                    });
                    widget.hideWidget();
                }
            }, false);
            widget.element.addEventListener('mousedown', function(event) {
                return event.consume();
            });
            return {
                dom: dom,
                resize: false,
                offset: {
                    x: -8,
                    y: 0
                },
                mount: function() {
                    widget.focus();
                    widget.wasShown();
                    addListener(function(event) {
                        view.dispatch({
                            changes: {
                                from: active.pos,
                                to: active.pos + text.length,
                                insert: event.data
                            },
                            annotations: isSwatchEdit.of(true)
                        });
                        text = event.data;
                    });
                }
            };
        }
    };
}
var setTooltip = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.StateEffect.define();
var isSwatchEdit = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.Annotation.define();
var cssTooltipState = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.StateField.define({
    create: function create() {
        return null;
    },
    update: function update(value, tr) {
        if ((tr.docChanged || tr.selection) && !tr.annotation(isSwatchEdit)) {
            value = null;
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = tr.effects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var effect = _step.value;
                if (effect.is(setTooltip)) {
                    value = effect.value;
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
        return value;
    },
    provide: function(field) {
        return _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.showTooltip.from(field, function(active) {
            return active && createCSSTooltip(active);
        });
    }
});
function computeSwatchDeco(state, from, to) {
    var builder = new _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.RangeSetBuilder();
    findColorsAndCurves(state, from, to, function(pos, parsedColor, colorText) {
        builder.add(pos, pos, _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.Decoration.widget({
            widget: new ColorSwatchWidget(parsedColor, colorText, pos)
        }));
    }, function(pos, curve, text) {
        builder.add(pos, pos, _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.Decoration.widget({
            widget: new CurveSwatchWidget(curve, text)
        }));
    });
    return builder.finish();
}
var cssSwatchPlugin = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.ViewPlugin.fromClass(/*#__PURE__*/ function() {
    "use strict";
    function _class(view) {
        _class_call_check(this, _class);
        _define_property(this, "decorations", void 0);
        this.decorations = computeSwatchDeco(view.state, view.viewport.from, view.viewport.to);
    }
    _create_class(_class, [
        {
            key: "update",
            value: function update(update) {
                if (update.viewportChanged || update.docChanged) {
                    this.decorations = computeSwatchDeco(update.state, update.view.viewport.from, update.view.viewport.to);
                }
            }
        }
    ]);
    return _class;
}(), {
    decorations: function(v) {
        return v.decorations;
    }
});
function cssSwatches() {
    return [
        cssSwatchPlugin,
        cssTooltipState
    ];
}
function getNumberAt(node) {
    if (node.name === 'Unit') {
        node = node.parent;
    }
    if (node.name === 'NumberLiteral') {
        var lastChild = node.lastChild;
        return {
            from: node.from,
            to: lastChild && lastChild.name === 'Unit' ? lastChild.from : node.to
        };
    }
    return null;
}
function modifyUnit(view, by) {
    var head = view.state.selection.main.head;
    var context = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.syntaxTree(view.state).resolveInner(head, -1);
    var numberRange = getNumberAt(context) || getNumberAt(context.resolve(head, 1));
    if (!numberRange) {
        return false;
    }
    var currentNumber = Number(view.state.sliceDoc(numberRange.from, numberRange.to));
    if (isNaN(currentNumber)) {
        return false;
    }
    view.dispatch({
        changes: {
            from: numberRange.from,
            to: numberRange.to,
            insert: String(currentNumber + by)
        },
        scrollIntoView: true,
        userEvent: 'insert.modifyUnit'
    });
    return true;
}
function cssBindings() {
    // This is an awkward way to pass the argument given to the editor
    // event handler through the ShortcutRegistry calling convention.
    var currentView = null;
    var listener = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ShortcutRegistry.ShortcutRegistry.instance().getShortcutListener({
        'sources.increment-css': function() {
            return Promise.resolve(modifyUnit(currentView, 1));
        },
        'sources.increment-css-by-ten': function() {
            return Promise.resolve(modifyUnit(currentView, 10));
        },
        'sources.decrement-css': function() {
            return Promise.resolve(modifyUnit(currentView, -1));
        },
        'sources.decrement-css-by-ten': function() {
            return Promise.resolve(modifyUnit(currentView, -10));
        }
    });
    return _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.EditorView.domEventHandlers({
        keydown: function(event, view) {
            var prevView = currentView;
            currentView = view;
            listener(event);
            currentView = prevView;
            return event.defaultPrevented;
        }
    });
}
var _cssModel = /*#__PURE__*/ new WeakMap(), _cssCompletion = /*#__PURE__*/ new WeakSet();
var CSSPlugin = /*#__PURE__*/ function(Plugin) {
    "use strict";
    _inherits(CSSPlugin, Plugin);
    var _super = _create_super(CSSPlugin);
    function CSSPlugin(uiSourceCode, _transformer) {
        _class_call_check(this, CSSPlugin);
        var _this;
        _this = _super.call(this, uiSourceCode, _transformer);
        _class_private_method_init(_assert_this_initialized(_this), _cssCompletion);
        _class_private_field_init(_assert_this_initialized(_this), _cssModel, {
            writable: true,
            value: void 0
        });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.CSSModel.CSSModel, _assert_this_initialized(_this));
        return _this;
    }
    _create_class(CSSPlugin, [
        {
            key: "modelAdded",
            value: function modelAdded(cssModel) {
                if (cssModel.target() !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().primaryPageTarget()) {
                    return;
                }
                _class_private_field_set(this, _cssModel, cssModel);
            }
        },
        {
            key: "modelRemoved",
            value: function modelRemoved(cssModel) {
                if (_class_private_field_get(this, _cssModel) === cssModel) {
                    _class_private_field_set(this, _cssModel, undefined);
                }
            }
        },
        {
            key: "editorExtension",
            value: function editorExtension() {
                return [
                    cssBindings(),
                    _class_private_method_get(this, _cssCompletion, cssCompletion).call(this),
                    cssSwatches()
                ];
            }
        },
        {
            key: "populateTextAreaContextMenu",
            value: function populateTextAreaContextMenu(contextMenu) {
                function addSourceMapURL(cssModel, sourceUrl) {
                    var dialog = _AddSourceMapURLDialog_js__WEBPACK_IMPORTED_MODULE_11__.AddDebugInfoURLDialog.createAddSourceMapURLDialog(function(sourceMapUrl) {
                        var _Bindings_CSSWorkspaceBinding_CSSWorkspaceBinding_instance_modelToInfo_get;
                        (_Bindings_CSSWorkspaceBinding_CSSWorkspaceBinding_instance_modelToInfo_get = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance().modelToInfo.get(cssModel)) === null || _Bindings_CSSWorkspaceBinding_CSSWorkspaceBinding_instance_modelToInfo_get === void 0 ? void 0 : _Bindings_CSSWorkspaceBinding_CSSWorkspaceBinding_instance_modelToInfo_get.addSourceMap(sourceUrl, sourceMapUrl);
                    });
                    dialog.show();
                }
                var cssModel = _class_private_field_get(this, _cssModel);
                var url = this.uiSourceCode.url();
                if (this.uiSourceCode.project().type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network && cssModel && !_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.IgnoreListManager.IgnoreListManager.instance().isUserIgnoreListedURL(url)) {
                    var addSourceMapURLLabel = i18nString(UIStrings.addSourceMap);
                    contextMenu.debugSection().appendItem(addSourceMapURLLabel, function() {
                        return addSourceMapURL(cssModel, url);
                    }, {
                        jslogContext: 'add-source-map'
                    });
                }
            }
        }
    ], [
        {
            key: "accepts",
            value: function accepts(uiSourceCode) {
                return uiSourceCode.contentType().hasStyleSheets();
            }
        }
    ]);
    return CSSPlugin;
} //# sourceMappingURL=CSSPlugin.js.map
(_wrap_native_super(_Plugin_js__WEBPACK_IMPORTED_MODULE_12__.Plugin));
function cssCompletion() {
    var cssCompletionSource = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.css.cssCompletionSource;
    // CodeMirror binds the function below to the state object.
    // Therefore, we can't access `this` and retrieve the following properties.
    // Instead, retrieve them up front to bind them to the correct closure.
    var uiSourceCode = this.uiSourceCode;
    var cssModel = _class_private_field_get(this, _cssModel);
    return _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.autocompletion({
        override: [
            function() {
                var _ref = _async_to_generator(function(cx) {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    specificCssCompletion(cx, uiSourceCode, cssModel)
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent() || cssCompletionSource(cx)
                                ];
                        }
                    });
                });
                return function(cx) {
                    return _ref.apply(this, arguments);
                };
            }()
        ]
    });
}


}),
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
"./ui/legacy/components/inline_editor/inline_editor.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AnimationTimingModel: function() { return /* reexport module object */ _AnimationTimingModel_js__WEBPACK_IMPORTED_MODULE_0__; },
  AnimationTimingUI: function() { return /* reexport module object */ _AnimationTimingUI_js__WEBPACK_IMPORTED_MODULE_1__; },
  BezierEditor: function() { return /* reexport module object */ _BezierEditor_js__WEBPACK_IMPORTED_MODULE_2__; },
  BezierUI: function() { return /* reexport module object */ _BezierUI_js__WEBPACK_IMPORTED_MODULE_3__; },
  CSSAngle: function() { return /* reexport module object */ _CSSAngle_js__WEBPACK_IMPORTED_MODULE_6__; },
  CSSAngleUtils: function() { return /* reexport module object */ _CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_7__; },
  CSSLength: function() { return /* reexport module object */ _CSSLength_js__WEBPACK_IMPORTED_MODULE_8__; },
  CSSLengthUtils: function() { return /* reexport module object */ _CSSLengthUtils_js__WEBPACK_IMPORTED_MODULE_9__; },
  CSSLinearEasingModel: function() { return /* reexport module object */ _CSSLinearEasingModel_js__WEBPACK_IMPORTED_MODULE_10__; },
  CSSShadowEditor: function() { return /* reexport module object */ _CSSShadowEditor_js__WEBPACK_IMPORTED_MODULE_11__; },
  ColorMixSwatch: function() { return /* reexport module object */ _ColorMixSwatch_js__WEBPACK_IMPORTED_MODULE_4__; },
  ColorSwatch: function() { return /* reexport module object */ _ColorSwatch_js__WEBPACK_IMPORTED_MODULE_5__; },
  FontEditor: function() { return /* reexport module object */ _FontEditor_js__WEBPACK_IMPORTED_MODULE_12__; },
  FontEditorUnitConverter: function() { return /* reexport module object */ _FontEditorUnitConverter_js__WEBPACK_IMPORTED_MODULE_13__; },
  FontEditorUtils: function() { return /* reexport module object */ _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_14__; },
  InlineEditorUtils: function() { return /* reexport module object */ _InlineEditorUtils_js__WEBPACK_IMPORTED_MODULE_15__; },
  LinkSwatch: function() { return /* reexport module object */ _LinkSwatch_js__WEBPACK_IMPORTED_MODULE_16__; },
  SwatchPopoverHelper: function() { return /* reexport module object */ _SwatchPopoverHelper_js__WEBPACK_IMPORTED_MODULE_18__; },
  Swatches: function() { return /* reexport module object */ _Swatches_js__WEBPACK_IMPORTED_MODULE_17__; }
});
/* harmony import */var _AnimationTimingModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationTimingModel.js */ "./ui/legacy/components/inline_editor/AnimationTimingModel.js");
/* harmony import */var _AnimationTimingUI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimationTimingUI.js */ "./ui/legacy/components/inline_editor/AnimationTimingUI.js");
/* harmony import */var _BezierEditor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BezierEditor.js */ "./ui/legacy/components/inline_editor/BezierEditor.js");
/* harmony import */var _BezierUI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BezierUI.js */ "./ui/legacy/components/inline_editor/BezierUI.js");
/* harmony import */var _ColorMixSwatch_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ColorMixSwatch.js */ "./ui/legacy/components/inline_editor/ColorMixSwatch.js");
/* harmony import */var _ColorSwatch_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ColorSwatch.js */ "./ui/legacy/components/inline_editor/ColorSwatch.js");
/* harmony import */var _CSSAngle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CSSAngle.js */ "./ui/legacy/components/inline_editor/CSSAngle.js");
/* harmony import */var _CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CSSAngleUtils.js */ "./ui/legacy/components/inline_editor/CSSAngleUtils.js");
/* harmony import */var _CSSLength_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CSSLength.js */ "./ui/legacy/components/inline_editor/CSSLength.js");
/* harmony import */var _CSSLengthUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CSSLengthUtils.js */ "./ui/legacy/components/inline_editor/CSSLengthUtils.js");
/* harmony import */var _CSSLinearEasingModel_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CSSLinearEasingModel.js */ "./ui/legacy/components/inline_editor/CSSLinearEasingModel.js");
/* harmony import */var _CSSShadowEditor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CSSShadowEditor.js */ "./ui/legacy/components/inline_editor/CSSShadowEditor.js");
/* harmony import */var _FontEditor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FontEditor.js */ "./ui/legacy/components/inline_editor/FontEditor.js");
/* harmony import */var _FontEditorUnitConverter_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./FontEditorUnitConverter.js */ "./ui/legacy/components/inline_editor/FontEditorUnitConverter.js");
/* harmony import */var _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FontEditorUtils.js */ "./ui/legacy/components/inline_editor/FontEditorUtils.js");
/* harmony import */var _InlineEditorUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./InlineEditorUtils.js */ "./ui/legacy/components/inline_editor/InlineEditorUtils.js");
/* harmony import */var _LinkSwatch_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./LinkSwatch.js */ "./ui/legacy/components/inline_editor/LinkSwatch.js");
/* harmony import */var _Swatches_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Swatches.js */ "./ui/legacy/components/inline_editor/Swatches.js");
/* harmony import */var _SwatchPopoverHelper_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./SwatchPopoverHelper.js */ "./ui/legacy/components/inline_editor/SwatchPopoverHelper.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



















 //# sourceMappingURL=inline_editor.js.map


}),

}]);