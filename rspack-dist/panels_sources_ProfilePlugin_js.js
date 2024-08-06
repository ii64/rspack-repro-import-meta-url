"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_ProfilePlugin_js"], {
"./panels/sources/ProfilePlugin.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MemoryProfilePlugin: function() { return MemoryProfilePlugin; },
  PerformanceProfilePlugin: function() { return PerformanceProfilePlugin; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../third_party/codemirror.next/codemirror.next.js */ "./third_party/codemirror.next/codemirror.next.js");
/* harmony import */var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/* harmony import */var _Plugin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Plugin.js */ "./panels/sources/Plugin.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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





// Defines plugins that show profiling information in the editor
// gutter when available.
var UIStrings = {
    /**
     *@description The milisecond unit
     */ ms: 'ms',
    /**
     *@description Unit for data size in DevTools
     */ mb: 'MB',
    /**
     *@description A unit
     */ kb: 'kB'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/sources/ProfilePlugin.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var MemoryMarker = /*#__PURE__*/ function(_CodeMirror_GutterMarker) {
    "use strict";
    _inherits(MemoryMarker, _CodeMirror_GutterMarker);
    var _super = _create_super(MemoryMarker);
    function MemoryMarker(value) {
        _class_call_check(this, MemoryMarker);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "value", void 0);
        _this.value = value;
        return _this;
    }
    _create_class(MemoryMarker, [
        {
            key: "eq",
            value: function eq(other) {
                return this.value === other.value;
            }
        },
        {
            key: "toDOM",
            value: function toDOM() {
                var element = document.createElement('div');
                element.className = 'cm-profileMarker';
                var value = this.value;
                var intensity = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.NumberUtilities.clamp(Math.log10(1 + 2e-3 * value) / 5, 0.02, 1);
                element.style.backgroundColor = "hsla(217, 100%, 70%, ".concat(intensity.toFixed(3), ")");
                value /= 1e3;
                var units;
                var fractionDigits;
                if (value >= 1e3) {
                    units = i18nString(UIStrings.mb);
                    value /= 1e3;
                    fractionDigits = value >= 20 ? 0 : 1;
                } else {
                    units = i18nString(UIStrings.kb);
                    fractionDigits = 0;
                }
                element.textContent = value.toFixed(fractionDigits);
                var unitElement = element.appendChild(document.createElement('span'));
                unitElement.className = 'cm-units';
                unitElement.textContent = units;
                return element;
            }
        }
    ]);
    return MemoryMarker;
}(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.GutterMarker);
var PerformanceMarker = /*#__PURE__*/ function(_CodeMirror_GutterMarker) {
    "use strict";
    _inherits(PerformanceMarker, _CodeMirror_GutterMarker);
    var _super = _create_super(PerformanceMarker);
    function PerformanceMarker(value) {
        _class_call_check(this, PerformanceMarker);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "value", void 0);
        _this.value = value;
        return _this;
    }
    _create_class(PerformanceMarker, [
        {
            key: "eq",
            value: function eq(other) {
                return this.value === other.value;
            }
        },
        {
            key: "toDOM",
            value: function toDOM() {
                var element = document.createElement('div');
                element.className = 'cm-profileMarker';
                var intensity = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.NumberUtilities.clamp(Math.log10(1 + 10 * this.value) / 5, 0.02, 1);
                element.textContent = this.value.toFixed(1);
                element.style.backgroundColor = "hsla(44, 100%, 50%, ".concat(intensity.toFixed(3), ")");
                var span = document.createElement('span');
                span.className = 'cm-units';
                span.textContent = i18nString(UIStrings.ms);
                element.appendChild(span);
                return element;
            }
        }
    ]);
    return PerformanceMarker;
}(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.GutterMarker);
function markersFromProfileData(map, state, type) {
    var markerType = type === "performance" /* SourceFrame.SourceFrame.DecoratorType.PERFORMANCE */  ? PerformanceMarker : MemoryMarker;
    var markers = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), line = _step_value[0], value = _step_value[1];
            if (line <= state.doc.lines) {
                var from = state.doc.line(line).from;
                markers.push(new markerType(value).range(from));
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
    return _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.RangeSet.of(markers, true);
}
var makeLineLevelProfilePlugin = function(type) {
    var _class = /*#__PURE__*/ function(Plugin) {
        "use strict";
        _inherits(_class, Plugin);
        var _super = _create_super(_class);
        function _class(uiSourceCode) {
            _class_call_check(this, _class);
            var _this;
            _this = _super.call(this, uiSourceCode);
            _define_property(_assert_this_initialized(_this), "updateEffect", _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.StateEffect.define());
            _define_property(_assert_this_initialized(_this), "field", void 0);
            _define_property(_assert_this_initialized(_this), "gutter", void 0);
            _define_property(_assert_this_initialized(_this), "compartment", new _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.Compartment());
            _this.field = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.StateField.define({
                create: function create() {
                    return _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.RangeSet.empty;
                },
                update: function(markers, tr) {
                    return tr.effects.reduce(function(markers, effect) {
                        return effect.is(_this.updateEffect) ? markersFromProfileData(effect.value, tr.state, type) : markers;
                    }, markers.map(tr.changes));
                }
            });
            _this.gutter = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.gutter({
                markers: function(view) {
                    return view.state.field(_this.field);
                },
                class: "cm-".concat(type, "Gutter")
            });
            return _this;
        }
        _create_class(_class, [
            {
                key: "getLineMap",
                value: function getLineMap() {
                    return this.uiSourceCode.getDecorationData(type);
                }
            },
            {
                key: "editorExtension",
                value: function editorExtension() {
                    var map = this.getLineMap();
                    return this.compartment.of(!map ? [] : [
                        this.field.init(function(state) {
                            return markersFromProfileData(map, state, type);
                        }),
                        this.gutter,
                        theme
                    ]);
                }
            },
            {
                key: "decorationChanged",
                value: function decorationChanged(type, editor) {
                    var installed = Boolean(editor.state.field(this.field, false));
                    var map = this.getLineMap();
                    if (!map) {
                        if (installed) {
                            editor.dispatch({
                                effects: this.compartment.reconfigure([])
                            });
                        }
                    } else if (!installed) {
                        editor.dispatch({
                            effects: this.compartment.reconfigure([
                                this.field.init(function(state) {
                                    return markersFromProfileData(map, state, type);
                                }),
                                this.gutter,
                                theme
                            ])
                        });
                    } else {
                        editor.dispatch({
                            effects: this.updateEffect.of(map)
                        });
                    }
                }
            }
        ], [
            {
                key: "accepts",
                value: function accepts(uiSourceCode) {
                    return uiSourceCode.contentType().hasScripts();
                }
            }
        ]);
        return _class;
    }(_wrap_native_super(_Plugin_js__WEBPACK_IMPORTED_MODULE_4__.Plugin));
    return _class;
};
var theme = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.EditorView.baseTheme({
    '.cm-performanceGutter': {
        width: '60px',
        backgroundColor: 'var(--sys-color-cdt-base-container)',
        marginLeft: '3px'
    },
    '.cm-memoryGutter': {
        width: '48px',
        backgroundColor: 'var(--sys-color-cdt-base-container)',
        marginLeft: '3px'
    },
    '.cm-profileMarker': {
        textAlign: 'right',
        paddingRight: '3px'
    },
    '.cm-profileMarker .cm-units': {
        color: 'var(--sys-color-token-subtle)',
        fontSize: '75%',
        marginLeft: '3px'
    }
});
var MemoryProfilePlugin = makeLineLevelProfilePlugin("memory" /* SourceFrame.SourceFrame.DecoratorType.MEMORY */ );
var PerformanceProfilePlugin = makeLineLevelProfilePlugin("performance" /* SourceFrame.SourceFrame.DecoratorType.PERFORMANCE */ ); //# sourceMappingURL=ProfilePlugin.js.map


}),

}]);