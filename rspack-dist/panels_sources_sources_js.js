"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_sources_js"], {
"./panels/sources/OpenFileQuickOpen.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  OpenFileQuickOpen: function() { return OpenFileQuickOpen; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _panels_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../panels/utils/utils.js */ "./panels/utils/utils.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _FilteredUISourceCodeListProvider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FilteredUISourceCodeListProvider.js */ "./panels/sources/FilteredUISourceCodeListProvider.js");
/* harmony import */var _SourcesView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SourcesView.js */ "./panels/sources/SourcesView.js");
// Copyright 2012 The Chromium Authors. All rights reserved.
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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






var OpenFileQuickOpen = /*#__PURE__*/ function(FilteredUISourceCodeListProvider) {
    "use strict";
    _inherits(OpenFileQuickOpen, FilteredUISourceCodeListProvider);
    var _super = _create_super(OpenFileQuickOpen);
    function OpenFileQuickOpen() {
        _class_call_check(this, OpenFileQuickOpen);
        return _super.call(this, 'source-file');
    }
    _create_class(OpenFileQuickOpen, [
        {
            key: "attach",
            value: function attach() {
                this.setDefaultScores(_SourcesView_js__WEBPACK_IMPORTED_MODULE_5__.SourcesView.defaultUISourceCodeScores());
                _get(_get_prototype_of(OpenFileQuickOpen.prototype), "attach", this).call(this);
            }
        },
        {
            key: "uiSourceCodeSelected",
            value: function uiSourceCodeSelected(uiSourceCode, lineNumber, columnNumber) {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.SelectFileFromFilePicker);
                if (!uiSourceCode) {
                    return;
                }
                if (typeof lineNumber === 'number') {
                    void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(uiSourceCode.uiLocation(lineNumber, columnNumber));
                } else {
                    void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(uiSourceCode);
                }
            }
        },
        {
            key: "filterProject",
            value: function filterProject(project) {
                return !project.isServiceProject();
            }
        },
        {
            key: "renderItem",
            value: function renderItem(itemIndex, query, titleElement, subtitleElement) {
                var _titleElement_parentElement_parentElement, _titleElement_parentElement;
                _get(_get_prototype_of(OpenFileQuickOpen.prototype), "renderItem", this).call(this, itemIndex, query, titleElement, subtitleElement);
                var iconElement = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon();
                var iconData = _panels_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.PanelUtils.iconDataForResourceType(this.itemContentTypeAt(itemIndex));
                iconElement.data = _object_spread_props(_object_spread({}, iconData), {
                    width: '20px',
                    height: '20px'
                });
                (_titleElement_parentElement = titleElement.parentElement) === null || _titleElement_parentElement === void 0 ? void 0 : (_titleElement_parentElement_parentElement = _titleElement_parentElement.parentElement) === null || _titleElement_parentElement_parentElement === void 0 ? void 0 : _titleElement_parentElement_parentElement.insertBefore(iconElement, titleElement.parentElement);
            }
        },
        {
            key: "renderAsTwoRows",
            value: function renderAsTwoRows() {
                return true;
            }
        }
    ]);
    return OpenFileQuickOpen;
} //# sourceMappingURL=OpenFileQuickOpen.js.map
(_FilteredUISourceCodeListProvider_js__WEBPACK_IMPORTED_MODULE_4__.FilteredUISourceCodeListProvider);


}),
"./panels/sources/sources.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AddSourceMapURLDialog: function() { return /* reexport module object */ _AddSourceMapURLDialog_js__WEBPACK_IMPORTED_MODULE_0__; },
  BreakpointEditDialog: function() { return /* reexport module object */ _BreakpointEditDialog_js__WEBPACK_IMPORTED_MODULE_1__; },
  CSSPlugin: function() { return /* reexport module object */ _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_5__; },
  CallStackSidebarPane: function() { return /* reexport module object */ _CallStackSidebarPane_js__WEBPACK_IMPORTED_MODULE_2__; },
  CategorizedBreakpointL10n: function() { return /* reexport module object */ _CategorizedBreakpointL10n_js__WEBPACK_IMPORTED_MODULE_3__; },
  CoveragePlugin: function() { return /* reexport module object */ _CoveragePlugin_js__WEBPACK_IMPORTED_MODULE_4__; },
  DebuggerPausedMessage: function() { return /* reexport module object */ _DebuggerPausedMessage_js__WEBPACK_IMPORTED_MODULE_6__; },
  DebuggerPlugin: function() { return /* reexport module object */ _DebuggerPlugin_js__WEBPACK_IMPORTED_MODULE_7__; },
  EditingLocationHistoryManager: function() { return /* reexport module object */ _EditingLocationHistoryManager_js__WEBPACK_IMPORTED_MODULE_8__; },
  FilePathScoreFunction: function() { return /* reexport module object */ _FilePathScoreFunction_js__WEBPACK_IMPORTED_MODULE_9__; },
  FilteredUISourceCodeListProvider: function() { return /* reexport module object */ _FilteredUISourceCodeListProvider_js__WEBPACK_IMPORTED_MODULE_10__; },
  GoToLineQuickOpen: function() { return /* reexport module object */ _GoToLineQuickOpen_js__WEBPACK_IMPORTED_MODULE_11__; },
  InplaceFormatterEditorAction: function() { return /* reexport module object */ _InplaceFormatterEditorAction_js__WEBPACK_IMPORTED_MODULE_12__; },
  NavigatorView: function() { return /* reexport module object */ _NavigatorView_js__WEBPACK_IMPORTED_MODULE_13__; },
  OpenFileQuickOpen: function() { return /* reexport module object */ _OpenFileQuickOpen_js__WEBPACK_IMPORTED_MODULE_14__; },
  OutlineQuickOpen: function() { return /* reexport module object */ _OutlineQuickOpen_js__WEBPACK_IMPORTED_MODULE_15__; },
  Plugin: function() { return /* reexport module object */ _Plugin_js__WEBPACK_IMPORTED_MODULE_16__; },
  ResourceOriginPlugin: function() { return /* reexport module object */ _ResourceOriginPlugin_js__WEBPACK_IMPORTED_MODULE_17__; },
  ScopeChainSidebarPane: function() { return /* reexport module object */ _ScopeChainSidebarPane_js__WEBPACK_IMPORTED_MODULE_18__; },
  SearchSourcesView: function() { return /* reexport module object */ _SearchSourcesView_js__WEBPACK_IMPORTED_MODULE_19__; },
  SnippetsPlugin: function() { return /* reexport module object */ _SnippetsPlugin_js__WEBPACK_IMPORTED_MODULE_20__; },
  SourcesNavigator: function() { return /* reexport module object */ _SourcesNavigator_js__WEBPACK_IMPORTED_MODULE_21__; },
  SourcesPanel: function() { return /* reexport module object */ _SourcesPanel_js__WEBPACK_IMPORTED_MODULE_22__; },
  SourcesSearchScope: function() { return /* reexport module object */ _SourcesSearchScope_js__WEBPACK_IMPORTED_MODULE_23__; },
  SourcesView: function() { return /* reexport module object */ _SourcesView_js__WEBPACK_IMPORTED_MODULE_24__; },
  TabbedEditorContainer: function() { return /* reexport module object */ _TabbedEditorContainer_js__WEBPACK_IMPORTED_MODULE_25__; },
  ThreadsSidebarPane: function() { return /* reexport module object */ _ThreadsSidebarPane_js__WEBPACK_IMPORTED_MODULE_26__; },
  UISourceCodeFrame: function() { return /* reexport module object */ _UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_27__; },
  WatchExpressionsSidebarPane: function() { return /* reexport module object */ _WatchExpressionsSidebarPane_js__WEBPACK_IMPORTED_MODULE_28__; }
});
/* harmony import */var _AddSourceMapURLDialog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddSourceMapURLDialog.js */ "./panels/sources/AddSourceMapURLDialog.js");
/* harmony import */var _BreakpointEditDialog_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BreakpointEditDialog.js */ "./panels/sources/BreakpointEditDialog.js");
/* harmony import */var _CallStackSidebarPane_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CallStackSidebarPane.js */ "./panels/sources/CallStackSidebarPane.js");
/* harmony import */var _CategorizedBreakpointL10n_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CategorizedBreakpointL10n.js */ "./panels/sources/CategorizedBreakpointL10n.js");
/* harmony import */var _CoveragePlugin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CoveragePlugin.js */ "./panels/sources/CoveragePlugin.js");
/* harmony import */var _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CSSPlugin.js */ "./panels/sources/CSSPlugin.js");
/* harmony import */var _DebuggerPausedMessage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DebuggerPausedMessage.js */ "./panels/sources/DebuggerPausedMessage.js");
/* harmony import */var _DebuggerPlugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DebuggerPlugin.js */ "./panels/sources/DebuggerPlugin.js");
/* harmony import */var _EditingLocationHistoryManager_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EditingLocationHistoryManager.js */ "./panels/sources/EditingLocationHistoryManager.js");
/* harmony import */var _FilePathScoreFunction_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FilePathScoreFunction.js */ "./panels/sources/FilePathScoreFunction.js");
/* harmony import */var _FilteredUISourceCodeListProvider_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FilteredUISourceCodeListProvider.js */ "./panels/sources/FilteredUISourceCodeListProvider.js");
/* harmony import */var _GoToLineQuickOpen_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./GoToLineQuickOpen.js */ "./panels/sources/GoToLineQuickOpen.js");
/* harmony import */var _InplaceFormatterEditorAction_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./InplaceFormatterEditorAction.js */ "./panels/sources/InplaceFormatterEditorAction.js");
/* harmony import */var _NavigatorView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./NavigatorView.js */ "./panels/sources/NavigatorView.js");
/* harmony import */var _OpenFileQuickOpen_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./OpenFileQuickOpen.js */ "./panels/sources/OpenFileQuickOpen.js");
/* harmony import */var _OutlineQuickOpen_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./OutlineQuickOpen.js */ "./panels/sources/OutlineQuickOpen.js");
/* harmony import */var _Plugin_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Plugin.js */ "./panels/sources/Plugin.js");
/* harmony import */var _ResourceOriginPlugin_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ResourceOriginPlugin.js */ "./panels/sources/ResourceOriginPlugin.js");
/* harmony import */var _ScopeChainSidebarPane_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ScopeChainSidebarPane.js */ "./panels/sources/ScopeChainSidebarPane.js");
/* harmony import */var _SearchSourcesView_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./SearchSourcesView.js */ "./panels/sources/SearchSourcesView.js");
/* harmony import */var _SnippetsPlugin_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./SnippetsPlugin.js */ "./panels/sources/SnippetsPlugin.js");
/* harmony import */var _SourcesNavigator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./SourcesNavigator.js */ "./panels/sources/SourcesNavigator.js");
/* harmony import */var _SourcesPanel_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./SourcesPanel.js */ "./panels/sources/SourcesPanel.js");
/* harmony import */var _SourcesSearchScope_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./SourcesSearchScope.js */ "./panels/sources/SourcesSearchScope.js");
/* harmony import */var _SourcesView_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./SourcesView.js */ "./panels/sources/SourcesView.js");
/* harmony import */var _TabbedEditorContainer_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./TabbedEditorContainer.js */ "./panels/sources/TabbedEditorContainer.js");
/* harmony import */var _ThreadsSidebarPane_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ThreadsSidebarPane.js */ "./panels/sources/ThreadsSidebarPane.js");
/* harmony import */var _UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./UISourceCodeFrame.js */ "./panels/sources/UISourceCodeFrame.js");
/* harmony import */var _WatchExpressionsSidebarPane_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./WatchExpressionsSidebarPane.js */ "./panels/sources/WatchExpressionsSidebarPane.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





























 //# sourceMappingURL=sources.js.map


}),

}]);