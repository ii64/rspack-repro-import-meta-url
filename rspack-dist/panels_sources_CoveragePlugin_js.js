"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_CoveragePlugin_js"], {
"./panels/coverage/coverage.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CoverageDecorationManager: function() { return /* reexport module object */ _CoverageDecorationManager_js__WEBPACK_IMPORTED_MODULE_3__; },
  CoverageListView: function() { return /* reexport module object */ _CoverageListView_js__WEBPACK_IMPORTED_MODULE_1__; },
  CoverageModel: function() { return /* reexport module object */ _CoverageModel_js__WEBPACK_IMPORTED_MODULE_0__; },
  CoverageView: function() { return /* reexport module object */ _CoverageView_js__WEBPACK_IMPORTED_MODULE_2__; }
});
/* harmony import */var _CoverageModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CoverageModel.js */ "./panels/coverage/CoverageModel.js");
/* harmony import */var _CoverageListView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CoverageListView.js */ "./panels/coverage/CoverageListView.js");
/* harmony import */var _CoverageView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CoverageView.js */ "./panels/coverage/CoverageView.js");
/* harmony import */var _CoverageDecorationManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CoverageDecorationManager.js */ "./panels/coverage/CoverageDecorationManager.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








 //# sourceMappingURL=coverage.js.map


}),
"./panels/sources/CoveragePlugin.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CoveragePlugin: function() { return CoveragePlugin; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../third_party/codemirror.next/codemirror.next.js */ "./third_party/codemirror.next/codemirror.next.js");
/* harmony import */var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _coverage_coverage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../coverage/coverage.js */ "./panels/coverage/coverage.js");
/* harmony import */var _Plugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Plugin.js */ "./panels/sources/Plugin.js");
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








// Plugin that shows a gutter with coverage information when available.
var UIStrings = {
    /**
     *@description Text for Coverage Status Bar Item in Sources Panel
     */ clickToShowCoveragePanel: 'Click to show Coverage Panel',
    /**
     *@description Text for Coverage Status Bar Item in Sources Panel
     */ showDetails: 'Show Details',
    /**
     *@description Text to show in the status bar if coverage data is available
     *@example {12.3} PH1
     */ coverageS: 'Coverage: {PH1}',
    /**
     *@description Text to be shown in the status bar if no coverage data is available
     */ coverageNa: 'Coverage: n/a'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/sources/CoveragePlugin.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var _transformer = /*#__PURE__*/ new WeakMap(), /**
     * @returns The current lines of the CodeMirror editor expressed in terms of UISourceCode.
     */ _editorLines = /*#__PURE__*/ new WeakSet();
var CoveragePlugin = /*#__PURE__*/ function(Plugin) {
    "use strict";
    _inherits(CoveragePlugin, Plugin);
    var _super = _create_super(CoveragePlugin);
    function CoveragePlugin(uiSourceCode, transformer) {
        _class_call_check(this, CoveragePlugin);
        var _this;
        _this = _super.call(this, uiSourceCode);
        _class_private_method_init(_assert_this_initialized(_this), _editorLines);
        _define_property(_assert_this_initialized(_this), "originalSourceCode", void 0);
        _define_property(_assert_this_initialized(_this), "infoInToolbar", void 0);
        _define_property(_assert_this_initialized(_this), "model", void 0);
        _define_property(_assert_this_initialized(_this), "coverage", void 0);
        _class_private_field_init(_assert_this_initialized(_this), _transformer, {
            writable: true,
            value: void 0
        });
        _this.originalSourceCode = _this.uiSourceCode;
        _class_private_field_set(_assert_this_initialized(_this), _transformer, transformer);
        _this.infoInToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarButton(i18nString(UIStrings.clickToShowCoveragePanel), undefined, undefined, 'debugger.show-coverage');
        _this.infoInToolbar.setSecondary();
        _this.infoInToolbar.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , function() {
            void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ViewManager.ViewManager.instance().showView('coverage');
        });
        var mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().primaryPageTarget();
        if (mainTarget) {
            _this.model = mainTarget.model(_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_6__.CoverageModel.CoverageModel);
            if (_this.model) {
                _this.model.addEventListener(_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_6__.CoverageModel.Events.CoverageReset, _this.handleReset, _assert_this_initialized(_this));
                _this.coverage = _this.model.getCoverageForUrl(_this.originalSourceCode.url());
                if (_this.coverage) {
                    _this.coverage.addEventListener(_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_6__.CoverageModel.URLCoverageInfo.Events.SizesChanged, _this.handleCoverageSizesChanged, _assert_this_initialized(_this));
                }
            }
        }
        _this.updateStats();
        return _this;
    }
    _create_class(CoveragePlugin, [
        {
            key: "dispose",
            value: function dispose() {
                if (this.coverage) {
                    this.coverage.removeEventListener(_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_6__.CoverageModel.URLCoverageInfo.Events.SizesChanged, this.handleCoverageSizesChanged, this);
                }
                if (this.model) {
                    this.model.removeEventListener(_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_6__.CoverageModel.Events.CoverageReset, this.handleReset, this);
                }
            }
        },
        {
            key: "handleReset",
            value: function handleReset() {
                this.coverage = null;
                this.updateStats();
            }
        },
        {
            key: "handleCoverageSizesChanged",
            value: function handleCoverageSizesChanged() {
                this.updateStats();
            }
        },
        {
            key: "updateStats",
            value: function updateStats() {
                if (this.coverage) {
                    this.infoInToolbar.setTitle(i18nString(UIStrings.showDetails));
                    var formatter = new Intl.NumberFormat(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsLocale.DevToolsLocale.instance().locale, {
                        style: 'percent',
                        maximumFractionDigits: 1
                    });
                    this.infoInToolbar.setText(i18nString(UIStrings.coverageS, {
                        PH1: formatter.format(this.coverage.usedPercentage())
                    }));
                } else {
                    this.infoInToolbar.setTitle(i18nString(UIStrings.clickToShowCoveragePanel));
                    this.infoInToolbar.setText(i18nString(UIStrings.coverageNa));
                }
            }
        },
        {
            key: "rightToolbarItems",
            value: function rightToolbarItems() {
                return [
                    this.infoInToolbar
                ];
            }
        },
        {
            key: "editorExtension",
            value: function editorExtension() {
                return coverageCompartment.of([]);
            }
        },
        {
            key: "getCoverageManager",
            value: function getCoverageManager() {
                return this.uiSourceCode.getDecorationData("coverage" /* SourceFrame.SourceFrame.DecoratorType.COVERAGE */ );
            }
        },
        {
            key: "editorInitialized",
            value: function editorInitialized(editor) {
                if (this.getCoverageManager()) {
                    this.startDecoUpdate(editor);
                }
            }
        },
        {
            key: "decorationChanged",
            value: function decorationChanged(type, editor) {
                if (type === "coverage" /* SourceFrame.SourceFrame.DecoratorType.COVERAGE */ ) {
                    this.startDecoUpdate(editor);
                }
            }
        },
        {
            key: "startDecoUpdate",
            value: function startDecoUpdate(editor) {
                var _this = this;
                var manager = this.getCoverageManager();
                void (manager ? manager.usageByLine(this.uiSourceCode, _class_private_method_get(this, _editorLines, editorLines).call(this, editor)) : Promise.resolve([])).then(function(usageByLine) {
                    var enabled = Boolean(editor.state.field(coverageState, false));
                    if (!usageByLine.length) {
                        if (enabled) {
                            editor.dispatch({
                                effects: coverageCompartment.reconfigure([])
                            });
                        }
                    } else if (!enabled) {
                        editor.dispatch({
                            effects: coverageCompartment.reconfigure([
                                coverageState.init(function(state) {
                                    return markersFromCoverageData(usageByLine, state);
                                }),
                                coverageGutter(_this.uiSourceCode.url()),
                                theme
                            ])
                        });
                    } else {
                        editor.dispatch({
                            effects: setCoverageState.of(usageByLine)
                        });
                    }
                });
            }
        }
    ], [
        {
            key: "accepts",
            value: function accepts(uiSourceCode) {
                return uiSourceCode.contentType().isDocumentOrScriptOrStyleSheet();
            }
        }
    ]);
    return CoveragePlugin;
}(_wrap_native_super(_Plugin_js__WEBPACK_IMPORTED_MODULE_7__.Plugin));
function editorLines(editor) {
    var result = [];
    for(var n = 1; n <= editor.state.doc.lines; ++n){
        var line = editor.state.doc.line(n);
        // CodeMirror lines are 1-based where-as the transformer expects 0-based.
        var _class_private_field_get_editorLocationToUILocation = _class_private_field_get(this, _transformer).editorLocationToUILocation(n - 1, 0), startLine = _class_private_field_get_editorLocationToUILocation.lineNumber, startColumn = _class_private_field_get_editorLocationToUILocation.columnNumber;
        var _class_private_field_get_editorLocationToUILocation1 = _class_private_field_get(this, _transformer).editorLocationToUILocation(n - 1, line.length), endLine = _class_private_field_get_editorLocationToUILocation1.lineNumber, endColumn = _class_private_field_get_editorLocationToUILocation1.columnNumber;
        result.push(new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.TextRange.TextRange(startLine, startColumn, endLine, endColumn));
    }
    return result;
}
var coveredMarker = new /*#__PURE__*/ (function(_CodeMirror_GutterMarker) {
    "use strict";
    _inherits(_class, _CodeMirror_GutterMarker);
    var _super = _create_super(_class);
    function _class() {
        _class_call_check(this, _class);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "elementClass", 'cm-coverageUsed');
        return _this;
    }
    return _class;
}(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.GutterMarker))();
var notCoveredMarker = new /*#__PURE__*/ (function(_CodeMirror_GutterMarker) {
    "use strict";
    _inherits(_class, _CodeMirror_GutterMarker);
    var _super = _create_super(_class);
    function _class() {
        _class_call_check(this, _class);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "elementClass", 'cm-coverageUnused');
        return _this;
    }
    return _class;
}(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.GutterMarker))();
function markersFromCoverageData(usageByLine, state) {
    var builder = new _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.RangeSetBuilder();
    for(var line = 0; line < usageByLine.length; line++){
        var usage = usageByLine[line];
        if (usage !== undefined && line < state.doc.lines) {
            var lineStart = state.doc.line(line + 1).from;
            builder.add(lineStart, lineStart, usage ? coveredMarker : notCoveredMarker);
        }
    }
    return builder.finish();
}
var setCoverageState = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.StateEffect.define();
var coverageState = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.StateField.define({
    create: function create() {
        return _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.RangeSet.empty;
    },
    update: function update(markers, tr) {
        return tr.effects.reduce(function(markers, effect) {
            return effect.is(setCoverageState) ? markersFromCoverageData(effect.value, tr.state) : markers;
        }, markers.map(tr.changes));
    }
});
function coverageGutter(url) {
    return _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.gutter({
        markers: function(view) {
            return view.state.field(coverageState);
        },
        domEventHandlers: {
            click: function click() {
                void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ViewManager.ViewManager.instance().showView('coverage').then(function() {
                    var view = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ViewManager.ViewManager.instance().view('coverage');
                    return view && view.widget();
                }).then(function(widget) {
                    var matchFormattedSuffix = url.match(/(.*):formatted$/);
                    var urlWithoutFormattedSuffix = matchFormattedSuffix && matchFormattedSuffix[1] || url;
                    widget.selectCoverageItemByUrl(urlWithoutFormattedSuffix);
                });
                return true;
            }
        },
        class: 'cm-coverageGutter'
    });
}
var coverageCompartment = new _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.Compartment();
var theme = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.EditorView.baseTheme({
    '.cm-coverageGutter': {
        width: '5px',
        marginLeft: '3px'
    },
    '.cm-coverageUnused': {
        backgroundColor: 'var(--app-color-coverage-unused)'
    },
    '.cm-coverageUsed': {
        backgroundColor: 'var(--app-color-coverage-used)'
    }
}); //# sourceMappingURL=CoveragePlugin.js.map


}),

}]);