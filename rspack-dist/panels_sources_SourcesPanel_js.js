"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_SourcesPanel_js"], {
"./panels/sources/DebuggerPlugin.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BreakpointLocationRevealer: function() { return BreakpointLocationRevealer; },
  DebuggerPlugin: function() { return DebuggerPlugin; },
  computePopoverHighlightRange: function() { return computePopoverHighlightRange; },
  computeScopeMappings: function() { return computeScopeMappings; },
  getVariableNamesByLine: function() { return getVariableNamesByLine; },
  getVariableValuesByLine: function() { return getVariableValuesByLine; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/breakpoints/breakpoints.js */ "./models/breakpoints/breakpoints.js");
/* harmony import */var _models_formatter_formatter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/formatter/formatter.js */ "./models/formatter/formatter.js");
/* harmony import */var _models_source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/source_map_scopes/source_map_scopes.js */ "./models/source_map_scopes/source_map_scopes.js");
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../third_party/codemirror.next/codemirror.next.js */ "./third_party/codemirror.next/codemirror.next.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/components/text_editor/text_editor.js */ "./ui/components/text_editor/text_editor.js");
/* harmony import */var _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/object_ui.js */ "./ui/legacy/components/object_ui/object_ui.js");
/* harmony import */var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _AddSourceMapURLDialog_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./AddSourceMapURLDialog.js */ "./panels/sources/AddSourceMapURLDialog.js");
/* harmony import */var _BreakpointEditDialog_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./BreakpointEditDialog.js */ "./panels/sources/BreakpointEditDialog.js");
/* harmony import */var _components_components_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/components.js */ "./panels/sources/components/components.js");
/* harmony import */var _Plugin_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Plugin.js */ "./panels/sources/Plugin.js");
/* harmony import */var _SourcesPanel_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./SourcesPanel.js */ "./panels/sources/SourcesPanel.js");
/*
 * Copyright (C) 2011 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ function _array_like_to_array(arr, len) {
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























var _Breakpoints_BreakpointManager = _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_6__.BreakpointManager, EMPTY_BREAKPOINT_CONDITION = _Breakpoints_BreakpointManager.EMPTY_BREAKPOINT_CONDITION, NEVER_PAUSE_HERE_CONDITION = _Breakpoints_BreakpointManager.NEVER_PAUSE_HERE_CONDITION;
var UIStrings = {
    /**
     *@description Text in Debugger Plugin of the Sources panel
     */ thisScriptIsOnTheDebuggersIgnore: 'This script is on the debugger\'s ignore list',
    /**
     *@description Text to stop preventing the debugger from stepping into library code
     */ removeFromIgnoreList: 'Remove from ignore list',
    /**
     *@description Text of a button in the Sources panel Debugger Plugin to configure ignore listing in Settings
     */ configure: 'Configure',
    /**
     *@description Text to add a breakpoint
     */ addBreakpoint: 'Add breakpoint',
    /**
     *@description A context menu item in the Debugger Plugin of the Sources panel
     */ addConditionalBreakpoint: 'Add conditional breakpoint…',
    /**
     *@description A context menu item in the Debugger Plugin of the Sources panel
     */ addLogpoint: 'Add logpoint…',
    /**
     *@description A context menu item in the Debugger Plugin of the Sources panel
     */ neverPauseHere: 'Never pause here',
    /**
     *@description Context menu command to delete/remove a breakpoint that the user
     *has set. One line of code can have multiple breakpoints. Always >= 1 breakpoint.
     */ removeBreakpoint: '{n, plural, =1 {Remove breakpoint} other {Remove all breakpoints in line}}',
    /**
     *@description A context menu item in the Debugger Plugin of the Sources panel
     */ editBreakpoint: 'Edit breakpoint…',
    /**
     *@description Context menu command to disable (but not delete) a breakpoint
     *that the user has set. One line of code can have multiple breakpoints. Always
     *>= 1 breakpoint.
     */ disableBreakpoint: '{n, plural, =1 {Disable breakpoint} other {Disable all breakpoints in line}}',
    /**
     *@description Context menu command to enable a breakpoint that the user has
     *set. One line of code can have multiple breakpoints. Always >= 1 breakpoint.
     */ enableBreakpoint: '{n, plural, =1 {Enable breakpoint} other {Enable all breakpoints in line}}',
    /**
     *@description Text in Debugger Plugin of the Sources panel
     */ addSourceMap: 'Add source map…',
    /**
     *@description Text in Debugger Plugin of the Sources panel
     */ addWasmDebugInfo: 'Add DWARF debug info…',
    /**
     *@description Text in Debugger Plugin of the Sources panel
     */ sourceMapLoaded: 'Source map loaded.',
    /**
     *@description Title of the Filtered List WidgetProvider of Quick Open
     *@example {Ctrl+P Ctrl+O} PH1
     */ associatedFilesAreAvailable: 'Associated files are available via file tree or {PH1}.',
    /**
     *@description Text in Debugger Plugin of the Sources panel
     */ associatedFilesShouldBeAdded: 'Associated files should be added to the file tree. You can debug these resolved source files as regular JavaScript files.',
    /**
     *@description Text in Debugger Plugin of the Sources panel
     */ theDebuggerWillSkipStepping: 'The debugger will skip stepping through this script, and will not stop on exceptions.',
    /**
     *@description Text in Debugger Plugin of the Sources panel
     */ sourceMapSkipped: 'Source map skipped for this file.',
    /**
     *@description Text in Debugger Plugin of the Sources panel
     */ sourceMapFailed: 'Source map failed to load.',
    /**
     *@description Text in Debugger Plugin of the Sources panel
     */ debuggingPowerReduced: 'DevTools can\'t show authored sources, but you can debug the deployed code.',
    /**
     *@description Text in Debugger Plugin of the Sources panel
     */ reloadForSourceMap: 'To enable again, make sure the file isn\'t on the ignore list and reload.',
    /**
     *@description Text in Debugger Plugin of the Sources panel
     *@example {http://site.com/lib.js.map} PH1
     *@example {HTTP error: status code 404, net::ERR_UNKNOWN_URL_SCHEME} PH2
     */ errorLoading: 'Error loading url {PH1}: {PH2}',
    /**
     *@description Error message that is displayed in UI when a file needed for debugging information for a call frame is missing
     *@example {src/myapp.debug.wasm.dwp} PH1
     */ debugFileNotFound: 'Failed to load debug file "{PH1}".',
    /**
     *@description Error message that is displayed when no debug info could be loaded
     *@example {app.wasm} PH1
     */ debugInfoNotFound: 'Failed to load any debug info for {PH1}.',
    /**
     *@description Text of a button to open up details on a request when no debug info could be loaded
     */ showRequest: 'Show request',
    /**
     *@description Tooltip text that shows on hovering over a button to see more details on a request
     */ openDeveloperResources: 'Opens the request in the Developer resource panel'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/sources/DebuggerPlugin.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
// Note: Line numbers are passed around as zero-based numbers (though
// CodeMirror numbers them from 1).
// Don't scan for possible breakpoints on a line beyond this position;
var MAX_POSSIBLE_BREAKPOINT_LINE = 2500;
// Limits on inline variable view computation.
var MAX_CODE_SIZE_FOR_VALUE_DECORATIONS = 10000;
var MAX_PROPERTIES_IN_SCOPE_FOR_VALUE_DECORATIONS = 500;
var debuggerPluginForUISourceCode = new Map();
var _activeBreakpointEditRequest = /*#__PURE__*/ new WeakMap(), _scheduledFinishingActiveDialog = /*#__PURE__*/ new WeakMap(), _sourcesPanelDebuggedMetricsRecorded = /*#__PURE__*/ new WeakMap(), _openEditDialogForLine = /*#__PURE__*/ new WeakSet(), _rawLocationToEditorOffset = /*#__PURE__*/ new WeakSet(), /**
     * Only records metrics once per DebuggerPlugin instance and must only be
     * called once the content of the UISourceCode is available.
     */ _recordSourcesPanelDebuggedMetrics = /*#__PURE__*/ new WeakSet();
var DebuggerPlugin = /*#__PURE__*/ function(Plugin) {
    "use strict";
    _inherits(DebuggerPlugin, Plugin);
    var _super = _create_super(DebuggerPlugin);
    function DebuggerPlugin(uiSourceCode, transformer) {
        _class_call_check(this, DebuggerPlugin);
        var _this;
        _this = _super.call(this, uiSourceCode);
        _class_private_method_init(_assert_this_initialized(_this), _openEditDialogForLine);
        _class_private_method_init(_assert_this_initialized(_this), _rawLocationToEditorOffset);
        _class_private_method_init(_assert_this_initialized(_this), _recordSourcesPanelDebuggedMetrics);
        _define_property(_assert_this_initialized(_this), "transformer", void 0);
        _define_property(_assert_this_initialized(_this), "editor", undefined);
        // Set if the debugger is stopped on a breakpoint in this file
        _define_property(_assert_this_initialized(_this), "executionLocation", null);
        // Track state of the control key because holding it makes debugger
        // target locations show up in the editor
        _define_property(_assert_this_initialized(_this), "controlDown", false);
        _define_property(_assert_this_initialized(_this), "controlTimeout", undefined);
        _define_property(_assert_this_initialized(_this), "sourceMapInfobar", null);
        _define_property(_assert_this_initialized(_this), "scriptsPanel", void 0);
        _define_property(_assert_this_initialized(_this), "breakpointManager", void 0);
        // Manages pop-overs shown when the debugger is active and the user
        // hovers over an expression
        _define_property(_assert_this_initialized(_this), "popoverHelper", null);
        _define_property(_assert_this_initialized(_this), "scriptFileForDebuggerModel", void 0);
        // The current set of breakpoints for this file. The locations in
        // here are kept in sync with their editor position. When a file's
        // content is edited and later saved, these are used as a source of
        // truth for re-creating the breakpoints.
        _define_property(_assert_this_initialized(_this), "breakpoints", []);
        _define_property(_assert_this_initialized(_this), "continueToLocations", null);
        _define_property(_assert_this_initialized(_this), "liveLocationPool", void 0);
        // When the editor content is changed by the user, this becomes
        // true. When the plugin is muted, breakpoints show up as disabled
        // and can't be manipulated. It is cleared again when the content is
        // saved.
        _define_property(_assert_this_initialized(_this), "muted", void 0);
        // If the plugin is initialized in muted state, we cannot correlated
        // breakpoint position in the breakpoint manager with editor
        // locations, so breakpoint manipulation is permanently disabled.
        _define_property(_assert_this_initialized(_this), "initializedMuted", void 0);
        _define_property(_assert_this_initialized(_this), "ignoreListInfobar", void 0);
        _define_property(_assert_this_initialized(_this), "refreshBreakpointsTimeout", undefined);
        _define_property(_assert_this_initialized(_this), "activeBreakpointDialog", null);
        _class_private_field_init(_assert_this_initialized(_this), _activeBreakpointEditRequest, {
            writable: true,
            value: undefined
        });
        _class_private_field_init(_assert_this_initialized(_this), _scheduledFinishingActiveDialog, {
            writable: true,
            value: false
        });
        _define_property(_assert_this_initialized(_this), "missingDebugInfoBar", null);
        _class_private_field_init(_assert_this_initialized(_this), _sourcesPanelDebuggedMetricsRecorded, {
            writable: true,
            value: false
        });
        _define_property(_assert_this_initialized(_this), "loader", void 0);
        _define_property(_assert_this_initialized(_this), "ignoreListCallback", void 0);
        _this.transformer = transformer;
        debuggerPluginForUISourceCode.set(uiSourceCode, _assert_this_initialized(_this));
        _this.scriptsPanel = _SourcesPanel_js__WEBPACK_IMPORTED_MODULE_22__.SourcesPanel.instance();
        _this.breakpointManager = _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_6__.BreakpointManager.BreakpointManager.instance();
        _this.breakpointManager.addEventListener(_models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_6__.BreakpointManager.Events.BreakpointAdded, _this.breakpointChange, _assert_this_initialized(_this));
        _this.breakpointManager.addEventListener(_models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_6__.BreakpointManager.Events.BreakpointRemoved, _this.breakpointChange, _assert_this_initialized(_this));
        _this.uiSourceCode.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_10__.UISourceCode.Events.WorkingCopyChanged, _this.workingCopyChanged, _assert_this_initialized(_this));
        _this.uiSourceCode.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_10__.UISourceCode.Events.WorkingCopyCommitted, _this.workingCopyCommitted, _assert_this_initialized(_this));
        _this.scriptFileForDebuggerModel = new Map();
        _this.loader = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.PageResourceLoader.PageResourceLoader.instance();
        _this.loader.addEventListener("Update" /* SDK.PageResourceLoader.Events.Update */ , _this.showSourceMapInfobarIfNeeded.bind(_assert_this_initialized(_this)), _assert_this_initialized(_this));
        _this.ignoreListCallback = _this.showIgnoreListInfobarIfNeeded.bind(_assert_this_initialized(_this));
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.IgnoreListManager.IgnoreListManager.instance().addChangeListener(_this.ignoreListCallback);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.CallFrame, _this.callFrameChanged, _assert_this_initialized(_this));
        _this.liveLocationPool = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.LiveLocation.LiveLocationPool();
        _this.updateScriptFiles();
        _this.muted = _this.uiSourceCode.isDirty();
        _this.initializedMuted = _this.muted;
        _this.ignoreListInfobar = null;
        _this.showIgnoreListInfobarIfNeeded();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = _this.scriptFileForDebuggerModel.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var scriptFile = _step.value;
                scriptFile.checkMapping();
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
        return _this;
    }
    _create_class(DebuggerPlugin, [
        {
            key: "editorExtension",
            value: function editorExtension() {
                var _this = this;
                // Kludge to hook editor keyboard events into the ShortcutRegistry
                // system.
                var handlers = this.shortcutHandlers();
                return [
                    _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.EditorView.updateListener.of(function(update) {
                        return _this.onEditorUpdate(update);
                    }),
                    _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.EditorView.domEventHandlers({
                        keydown: function(event) {
                            if (_this.onKeyDown(event)) {
                                return true;
                            }
                            handlers(event);
                            return event.defaultPrevented;
                        },
                        keyup: function(event) {
                            return _this.onKeyUp(event);
                        },
                        mousemove: function(event) {
                            return _this.onMouseMove(event);
                        },
                        mousedown: function(event) {
                            return _this.onMouseDown(event);
                        },
                        focusout: function(event) {
                            return _this.onBlur(event);
                        },
                        wheel: function(event) {
                            return _this.onWheel(event);
                        }
                    }),
                    _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.lineNumbers({
                        domEventHandlers: {
                            click: function(view, block, event) {
                                return _this.handleGutterClick(view.state.doc.lineAt(block.from), event);
                            }
                        }
                    }),
                    infobarState,
                    breakpointMarkers,
                    _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_13__.ExecutionPositionHighlighter.positionHighlighter('cm-executionLine', 'cm-executionToken'),
                    _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.Prec.lowest(continueToMarkers.field),
                    markIfContinueTo,
                    valueDecorations.field,
                    _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.Prec.lowest(evalExpression.field),
                    theme,
                    this.uiSourceCode.project().type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_10__.Workspace.projectTypes.Debugger ? _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.EditorView.editorAttributes.of({
                        class: 'source-frame-debugger-script'
                    }) : []
                ];
            }
        },
        {
            key: "shortcutHandlers",
            value: function shortcutHandlers() {
                var selectionLine = function(editor) {
                    return editor.state.doc.lineAt(editor.state.selection.main.head);
                };
                var _this = this;
                var _this1 = this;
                var _this2 = this;
                return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.ShortcutRegistry.ShortcutRegistry.instance().getShortcutListener({
                    'debugger.toggle-breakpoint': /*#__PURE__*/ _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (_this.muted || !_this.editor) {
                                        return [
                                            2,
                                            false
                                        ];
                                    }
                                    return [
                                        4,
                                        _this.toggleBreakpoint(selectionLine(_this.editor), false)
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        2,
                                        true
                                    ];
                            }
                        });
                    }),
                    'debugger.toggle-breakpoint-enabled': /*#__PURE__*/ _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (_this1.muted || !_this1.editor) {
                                        return [
                                            2,
                                            false
                                        ];
                                    }
                                    return [
                                        4,
                                        _this1.toggleBreakpoint(selectionLine(_this1.editor), true)
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        2,
                                        true
                                    ];
                            }
                        });
                    }),
                    'debugger.breakpoint-input-window': /*#__PURE__*/ _async_to_generator(function() {
                        var line;
                        return _ts_generator(this, function(_state) {
                            if (_this2.muted || !_this2.editor) {
                                return [
                                    2,
                                    false
                                ];
                            }
                            line = selectionLine(_this2.editor);
                            _class_private_method_get(_this2, _openEditDialogForLine, openEditDialogForLine).call(_this2, line);
                            return [
                                2,
                                true
                            ];
                        });
                    })
                });
            }
        },
        {
            key: "editorInitialized",
            value: function editorInitialized(editor) {
                var _this_popoverHelper;
                // Start asynchronous actions that require access to the editor
                // instance
                this.editor = editor;
                computeNonBreakableLines(editor.state, this.transformer, this.uiSourceCode).then(function(linePositions) {
                    if (linePositions.length) {
                        editor.dispatch({
                            effects: _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_15__.SourceFrame.addNonBreakableLines.of(linePositions)
                        });
                    }
                }, console.error);
                if (this.ignoreListInfobar) {
                    this.attachInfobar(this.ignoreListInfobar);
                }
                if (this.missingDebugInfoBar) {
                    this.attachInfobar(this.missingDebugInfoBar);
                }
                if (this.sourceMapInfobar) {
                    this.attachInfobar(this.sourceMapInfobar);
                }
                if (!this.muted) {
                    void this.refreshBreakpoints();
                }
                void this.callFrameChanged();
                (_this_popoverHelper = this.popoverHelper) === null || _this_popoverHelper === void 0 ? void 0 : _this_popoverHelper.dispose();
                this.popoverHelper = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.PopoverHelper.PopoverHelper(editor, this.getPopoverRequest.bind(this), 'sources.object-properties');
                this.popoverHelper.setDisableOnClick(true);
                this.popoverHelper.setTimeout(250, 250);
                this.popoverHelper.setHasPadding(true);
            }
        },
        {
            key: "showIgnoreListInfobarIfNeeded",
            value: function showIgnoreListInfobarIfNeeded() {
                var _this = this;
                var uiSourceCode = this.uiSourceCode;
                if (!uiSourceCode.contentType().hasScripts()) {
                    return;
                }
                if (!_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.IgnoreListManager.IgnoreListManager.instance().isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode)) {
                    this.hideIgnoreListInfobar();
                    return;
                }
                if (this.ignoreListInfobar) {
                    this.ignoreListInfobar.dispose();
                }
                function unIgnoreList() {
                    _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.IgnoreListManager.IgnoreListManager.instance().unIgnoreListUISourceCode(uiSourceCode);
                }
                var infobar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.Infobar.Infobar("warning" /* UI.Infobar.Type.Warning */ , i18nString(UIStrings.thisScriptIsOnTheDebuggersIgnore), [
                    {
                        text: i18nString(UIStrings.removeFromIgnoreList),
                        highlight: false,
                        delegate: unIgnoreList,
                        dismiss: true,
                        jslogContext: 'remove-from-ignore-list'
                    },
                    {
                        text: i18nString(UIStrings.configure),
                        highlight: false,
                        delegate: _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.ViewManager.ViewManager.instance().showView.bind(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.ViewManager.ViewManager.instance(), 'blackbox'),
                        dismiss: false,
                        jslogContext: 'configure'
                    }
                ], undefined, undefined, 'script-on-ignore-list');
                this.ignoreListInfobar = infobar;
                infobar.setCloseCallback(function() {
                    return _this.removeInfobar(_this.ignoreListInfobar);
                });
                infobar.createDetailsRowMessage(i18nString(UIStrings.theDebuggerWillSkipStepping));
                this.attachInfobar(this.ignoreListInfobar);
            }
        },
        {
            key: "attachInfobar",
            value: function attachInfobar(bar) {
                if (this.editor) {
                    this.editor.dispatch({
                        effects: addInfobar.of(bar)
                    });
                }
            }
        },
        {
            key: "removeInfobar",
            value: function removeInfobar1(bar) {
                if (this.editor && bar) {
                    this.editor.dispatch({
                        effects: removeInfobar.of(bar)
                    });
                }
            }
        },
        {
            key: "hideIgnoreListInfobar",
            value: function hideIgnoreListInfobar() {
                if (!this.ignoreListInfobar) {
                    return;
                }
                this.ignoreListInfobar.dispose();
                this.ignoreListInfobar = null;
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                var _this_popoverHelper;
                (_this_popoverHelper = this.popoverHelper) === null || _this_popoverHelper === void 0 ? void 0 : _this_popoverHelper.hidePopover();
            }
        },
        {
            key: "editBreakpointLocation",
            value: function editBreakpointLocation(param) {
                var breakpoint = param.breakpoint, uiLocation = param.uiLocation;
                var _this_editor;
                var lineNumber = this.transformer.uiLocationToEditorLocation(uiLocation.lineNumber, uiLocation.columnNumber).lineNumber;
                var line = (_this_editor = this.editor) === null || _this_editor === void 0 ? void 0 : _this_editor.state.doc.line(lineNumber + 1);
                if (!line) {
                    return;
                }
                this.editBreakpointCondition({
                    line: line,
                    breakpoint: breakpoint,
                    location: null,
                    isLogpoint: breakpoint.isLogpoint()
                });
            }
        },
        {
            key: "populateLineGutterContextMenu",
            value: function populateLineGutterContextMenu(contextMenu, editorLineNumber) {
                var _this = this;
                var uiLocation = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_10__.UISourceCode.UILocation(this.uiSourceCode, editorLineNumber, 0);
                this.scriptsPanel.appendUILocationItems(contextMenu, uiLocation);
                if (this.muted || !this.editor) {
                    return;
                }
                var line = this.editor.state.doc.line(editorLineNumber + 1);
                var breakpoints = this.lineBreakpoints(line);
                var supportsConditionalBreakpoints = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().supportsConditionalBreakpoints(this.uiSourceCode);
                if (!breakpoints.length) {
                    if (this.editor && _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_15__.SourceFrame.isBreakableLine(this.editor.state, line)) {
                        contextMenu.debugSection().appendItem(i18nString(UIStrings.addBreakpoint), this.createNewBreakpoint.bind(this, line, EMPTY_BREAKPOINT_CONDITION, /* enabled */ true, /* isLogpoint */ false), {
                            jslogContext: 'add-breakpoint'
                        });
                        if (supportsConditionalBreakpoints) {
                            contextMenu.debugSection().appendItem(i18nString(UIStrings.addConditionalBreakpoint), function() {
                                _this.editBreakpointCondition({
                                    line: line,
                                    breakpoint: null,
                                    location: null,
                                    isLogpoint: false
                                });
                            }, {
                                jslogContext: 'add-cnd-breakpoint'
                            });
                            contextMenu.debugSection().appendItem(i18nString(UIStrings.addLogpoint), function() {
                                _this.editBreakpointCondition({
                                    line: line,
                                    breakpoint: null,
                                    location: null,
                                    isLogpoint: true
                                });
                            }, {
                                jslogContext: 'add-logpoint'
                            });
                            contextMenu.debugSection().appendItem(i18nString(UIStrings.neverPauseHere), this.createNewBreakpoint.bind(this, line, NEVER_PAUSE_HERE_CONDITION, /* enabled */ true, /* isLogpoint */ false), {
                                jslogContext: 'never-pause-here'
                            });
                        }
                    }
                } else {
                    var removeTitle = i18nString(UIStrings.removeBreakpoint, {
                        n: breakpoints.length
                    });
                    contextMenu.debugSection().appendItem(removeTitle, function() {
                        return breakpoints.forEach(function(breakpoint) {
                            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.BreakpointRemovedFromGutterContextMenu);
                            void breakpoint.remove(false);
                        });
                    }, {
                        jslogContext: 'remove-breakpoint'
                    });
                    if (breakpoints.length === 1 && supportsConditionalBreakpoints) {
                        // Editing breakpoints only make sense for conditional breakpoints
                        // and logpoints and both are currently only available for JavaScript
                        // debugging.
                        contextMenu.debugSection().appendItem(i18nString(UIStrings.editBreakpoint), function() {
                            _this.editBreakpointCondition({
                                line: line,
                                breakpoint: breakpoints[0],
                                location: null
                            });
                        }, {
                            jslogContext: 'edit-breakpoint'
                        });
                    }
                    var hasEnabled = breakpoints.some(function(breakpoint) {
                        return breakpoint.enabled();
                    });
                    if (hasEnabled) {
                        var title = i18nString(UIStrings.disableBreakpoint, {
                            n: breakpoints.length
                        });
                        contextMenu.debugSection().appendItem(title, function() {
                            return breakpoints.forEach(function(breakpoint) {
                                return breakpoint.setEnabled(false);
                            });
                        }, {
                            jslogContext: 'enable-breakpoint'
                        });
                    }
                    var hasDisabled = breakpoints.some(function(breakpoint) {
                        return !breakpoint.enabled();
                    });
                    if (hasDisabled) {
                        var title1 = i18nString(UIStrings.enableBreakpoint, {
                            n: breakpoints.length
                        });
                        contextMenu.debugSection().appendItem(title1, function() {
                            return breakpoints.forEach(function(breakpoint) {
                                return breakpoint.setEnabled(true);
                            });
                        }, {
                            jslogContext: 'disable-breakpoint'
                        });
                    }
                }
            }
        },
        {
            key: "populateTextAreaContextMenu",
            value: function populateTextAreaContextMenu(contextMenu) {
                function addSourceMapURL(scriptFile) {
                    var dialog = _AddSourceMapURLDialog_js__WEBPACK_IMPORTED_MODULE_18__.AddDebugInfoURLDialog.createAddSourceMapURLDialog(addSourceMapURLDialogCallback.bind(null, scriptFile));
                    dialog.show();
                }
                function addSourceMapURLDialogCallback(scriptFile, url) {
                    if (!url) {
                        return;
                    }
                    scriptFile.addSourceMapURL(url);
                }
                function addDebugInfoURL(scriptFile) {
                    var dialog = _AddSourceMapURLDialog_js__WEBPACK_IMPORTED_MODULE_18__.AddDebugInfoURLDialog.createAddDWARFSymbolsURLDialog(addDebugInfoURLDialogCallback.bind(null, scriptFile));
                    dialog.show();
                }
                function addDebugInfoURLDialogCallback(scriptFile, url) {
                    if (!url) {
                        return;
                    }
                    scriptFile.addDebugInfoURL(url);
                }
                if (this.uiSourceCode.project().type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_10__.Workspace.projectTypes.Network && _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('js-source-maps-enabled').get() && !_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.IgnoreListManager.IgnoreListManager.instance().isUserIgnoreListedURL(this.uiSourceCode.url())) {
                    if (this.scriptFileForDebuggerModel.size) {
                        var _scriptFile_script;
                        var scriptFile = this.scriptFileForDebuggerModel.values().next().value;
                        var addSourceMapURLLabel = i18nString(UIStrings.addSourceMap);
                        contextMenu.debugSection().appendItem(addSourceMapURLLabel, addSourceMapURL.bind(null, scriptFile), {
                            jslogContext: 'add-source-map'
                        });
                        if (((_scriptFile_script = scriptFile.script) === null || _scriptFile_script === void 0 ? void 0 : _scriptFile_script.isWasm()) && !_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().pluginManager.hasPluginForScript(scriptFile.script)) {
                            contextMenu.debugSection().appendItem(i18nString(UIStrings.addWasmDebugInfo), addDebugInfoURL.bind(null, scriptFile), {
                                jslogContext: 'add-wasm-debug-info'
                            });
                        }
                    }
                }
            }
        },
        {
            key: "workingCopyChanged",
            value: function workingCopyChanged() {
                if (!this.scriptFileForDebuggerModel.size) {
                    this.setMuted(this.uiSourceCode.isDirty());
                }
            }
        },
        {
            key: "workingCopyCommitted",
            value: function workingCopyCommitted() {
                this.scriptsPanel.updateLastModificationTime();
                if (!this.scriptFileForDebuggerModel.size) {
                    this.setMuted(false);
                }
            }
        },
        {
            key: "didMergeToVM",
            value: function didMergeToVM() {
                if (this.consistentScripts()) {
                    this.setMuted(false);
                }
            }
        },
        {
            key: "didDivergeFromVM",
            value: function didDivergeFromVM() {
                this.setMuted(true);
            }
        },
        {
            key: "setMuted",
            value: function setMuted(value) {
                if (this.initializedMuted) {
                    return;
                }
                if (value !== this.muted) {
                    this.muted = value;
                    if (!value) {
                        void this.restoreBreakpointsAfterEditing();
                    } else if (this.editor) {
                        this.editor.dispatch({
                            effects: muteBreakpoints.of(null)
                        });
                    }
                }
            }
        },
        {
            key: "consistentScripts",
            value: function consistentScripts() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.scriptFileForDebuggerModel.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var scriptFile = _step.value;
                        if (scriptFile.hasDivergedFromVM() || scriptFile.isMergingToVM()) {
                            return false;
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
                return true;
            }
        },
        {
            key: "isVariableIdentifier",
            value: function isVariableIdentifier(tokenType) {
                return tokenType === 'VariableName' || tokenType === 'VariableDefinition';
            }
        },
        {
            key: "isIdentifier",
            value: function isIdentifier(tokenType) {
                return tokenType === 'VariableName' || tokenType === 'VariableDefinition' || tokenType === 'PropertyName' || tokenType === 'PropertyDefinition';
            }
        },
        {
            key: "getPopoverRequest",
            value: function getPopoverRequest(event) {
                if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.KeyboardShortcut.KeyboardShortcut.eventHasCtrlEquivalentKey(event)) {
                    return null;
                }
                var target = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Target);
                var debuggerModel = target ? target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.DebuggerModel) : null;
                var editor = this.editor;
                if (!debuggerModel || !debuggerModel.isPaused() || !editor) {
                    return null;
                }
                var selectedCallFrame = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.CallFrame);
                if (!selectedCallFrame) {
                    return null;
                }
                var textPosition = editor.editor.posAtCoords(event);
                if (!textPosition) {
                    return null;
                }
                var positionCoords = editor.editor.coordsAtPos(textPosition);
                if (!positionCoords || event.clientY < positionCoords.top || event.clientY > positionCoords.bottom || event.clientX < positionCoords.left - 30 || event.clientX > positionCoords.right + 30) {
                    return null;
                }
                if (event.clientX < positionCoords.left && textPosition > editor.state.doc.lineAt(textPosition).from) {
                    textPosition -= 1;
                }
                var highlightRange = computePopoverHighlightRange(editor.state, this.uiSourceCode.mimeType(), textPosition);
                if (!highlightRange) {
                    return null;
                }
                var highlightLine = editor.state.doc.lineAt(highlightRange.from);
                if (highlightRange.to > highlightLine.to) {
                    return null;
                }
                var leftCorner = editor.editor.coordsAtPos(highlightRange.from);
                var rightCorner = editor.editor.coordsAtPos(highlightRange.to);
                if (!leftCorner || !rightCorner) {
                    return null;
                }
                var box = new AnchorBox(leftCorner.left, leftCorner.top - 2, rightCorner.right - leftCorner.left, rightCorner.bottom - leftCorner.top);
                var evaluationText = editor.state.sliceDoc(highlightRange.from, highlightRange.to);
                var objectPopoverHelper = null;
                return {
                    box: box,
                    show: function() {
                        var _ref = _async_to_generator(function(popover) {
                            var resolvedText, nameMap, e, throwOnSideEffect, result, potentiallyUpdatedCallFrame, decoration;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        resolvedText = '';
                                        if (!selectedCallFrame.script.isJavaScript()) return [
                                            3,
                                            5
                                        ];
                                        return [
                                            4,
                                            _models_source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_8__.NamesResolver.allVariablesInCallFrame(selectedCallFrame)
                                        ];
                                    case 1:
                                        nameMap = _state.sent();
                                        _state.label = 2;
                                    case 2:
                                        _state.trys.push([
                                            2,
                                            4,
                                            ,
                                            5
                                        ]);
                                        return [
                                            4,
                                            _models_formatter_formatter_js__WEBPACK_IMPORTED_MODULE_7__.FormatterWorkerPool.formatterWorkerPool().javaScriptSubstitute(evaluationText, nameMap)
                                        ];
                                    case 3:
                                        resolvedText = _state.sent();
                                        return [
                                            3,
                                            5
                                        ];
                                    case 4:
                                        e = _state.sent();
                                        return [
                                            3,
                                            5
                                        ];
                                    case 5:
                                        // We use side-effect free debug-evaluate when the highlighted expression contains a
                                        // function/method call. Otherwise we allow side-effects. The motiviation here are
                                        // frameworks like Vue, that heavily use proxies for caching:
                                        //
                                        //   * We deem a simple property access of a proxy as deterministic so it should be
                                        //     successful even if V8 thinks its side-effecting.
                                        //   * Explicit function calls on the other hand must be side-effect free. The canonical
                                        //     example is hovering over {Math.random()} which would result in a different value
                                        //     each time the user hovers over it.
                                        throwOnSideEffect = highlightRange.containsSideEffects;
                                        return [
                                            4,
                                            selectedCallFrame.evaluate({
                                                expression: resolvedText || evaluationText,
                                                objectGroup: 'popover',
                                                includeCommandLineAPI: false,
                                                silent: true,
                                                returnByValue: false,
                                                generatePreview: false,
                                                throwOnSideEffect: throwOnSideEffect,
                                                timeout: undefined,
                                                disableBreaks: undefined,
                                                replMode: undefined,
                                                allowUnsafeEvalBlockedByCSP: undefined
                                            })
                                        ];
                                    case 6:
                                        result = _state.sent();
                                        if (!result || 'error' in result || !result.object || result.object.type === 'object' && result.object.subtype === 'error') {
                                            return [
                                                2,
                                                false
                                            ];
                                        }
                                        return [
                                            4,
                                            _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_14__.ObjectPopoverHelper.ObjectPopoverHelper.buildObjectPopover(result.object, popover)
                                        ];
                                    case 7:
                                        objectPopoverHelper = _state.sent();
                                        potentiallyUpdatedCallFrame = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.CallFrame);
                                        if (!objectPopoverHelper || selectedCallFrame !== potentiallyUpdatedCallFrame) {
                                            debuggerModel.runtimeModel().releaseObjectGroup('popover');
                                            if (objectPopoverHelper) {
                                                objectPopoverHelper.dispose();
                                            }
                                            return [
                                                2,
                                                false
                                            ];
                                        }
                                        decoration = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.Decoration.set(evalExpressionMark.range(highlightRange.from, highlightRange.to));
                                        editor.dispatch({
                                            effects: evalExpression.update.of(decoration)
                                        });
                                        return [
                                            2,
                                            true
                                        ];
                                }
                            });
                        });
                        return function(popover) {
                            return _ref.apply(this, arguments);
                        };
                    }(),
                    hide: function() {
                        if (objectPopoverHelper) {
                            objectPopoverHelper.dispose();
                        }
                        debuggerModel.runtimeModel().releaseObjectGroup('popover');
                        editor.dispatch({
                            effects: evalExpression.update.of(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.Decoration.none)
                        });
                    }
                };
            }
        },
        {
            key: "onEditorUpdate",
            value: function onEditorUpdate(update) {
                if (!update.changes.empty) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        // If the document changed, adjust known breakpoint positions
                        // for that change
                        for(var _iterator = this.breakpoints[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var breakpointDesc = _step.value;
                            breakpointDesc.position = update.changes.mapPos(breakpointDesc.position);
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
                }
            }
        },
        {
            key: "onWheel",
            value: function onWheel(event) {
                if (this.executionLocation && _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.KeyboardShortcut.KeyboardShortcut.eventHasCtrlEquivalentKey(event)) {
                    event.preventDefault();
                }
            }
        },
        {
            key: "onKeyDown",
            value: function onKeyDown(event) {
                var ctrlDown = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.KeyboardShortcut.KeyboardShortcut.eventHasCtrlEquivalentKey(event);
                if (!ctrlDown) {
                    this.setControlDown(false);
                }
                if (event.key === _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.KeyboardUtilities.ESCAPE_KEY) {
                    if (this.popoverHelper && this.popoverHelper.isPopoverVisible()) {
                        this.popoverHelper.hidePopover();
                        event.consume();
                        return true;
                    }
                }
                if (ctrlDown && this.executionLocation) {
                    this.setControlDown(true);
                }
                return false;
            }
        },
        {
            key: "onMouseMove",
            value: function onMouseMove(event) {
                if (this.executionLocation && this.controlDown && _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.KeyboardShortcut.KeyboardShortcut.eventHasCtrlEquivalentKey(event)) {
                    if (!this.continueToLocations) {
                        void this.showContinueToLocations();
                    }
                }
            }
        },
        {
            key: "onMouseDown",
            value: function onMouseDown(event) {
                if (!this.executionLocation || !_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.KeyboardShortcut.KeyboardShortcut.eventHasCtrlEquivalentKey(event)) {
                    return;
                }
                if (!this.continueToLocations || !this.editor) {
                    return;
                }
                event.consume();
                var textPosition = this.editor.editor.posAtCoords(event);
                if (textPosition === null) {
                    return;
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.continueToLocations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _step.value, from = _step_value.from, to = _step_value.to, click = _step_value.click;
                        if (from <= textPosition && to >= textPosition) {
                            click();
                            break;
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
            }
        },
        {
            key: "onBlur",
            value: function onBlur(_event) {
                this.setControlDown(false);
            }
        },
        {
            key: "onKeyUp",
            value: function onKeyUp(_event) {
                this.setControlDown(false);
            }
        },
        {
            key: "setControlDown",
            value: function setControlDown(state) {
                var _this = this;
                if (state !== this.controlDown) {
                    this.controlDown = state;
                    clearTimeout(this.controlTimeout);
                    this.controlTimeout = undefined;
                    if (state && this.executionLocation) {
                        this.controlTimeout = window.setTimeout(function() {
                            if (_this.executionLocation && _this.controlDown) {
                                void _this.showContinueToLocations();
                            }
                        }, 150);
                    } else {
                        this.clearContinueToLocations();
                    }
                }
            }
        },
        {
            key: "editBreakpointCondition",
            value: function editBreakpointCondition(breakpointEditRequest) {
                var line = breakpointEditRequest.line, breakpoint = breakpointEditRequest.breakpoint, location = breakpointEditRequest.location, isLogpoint = breakpointEditRequest.isLogpoint;
                if (breakpoint === null || breakpoint === void 0 ? void 0 : breakpoint.isRemoved) {
                    // This method can get called for stale breakpoints, e.g. via the revealer.
                    // In that case we don't show the edit dialog as to not resurrect the breakpoint
                    // unintentionally.
                    return;
                }
                _class_private_field_set(this, _scheduledFinishingActiveDialog, false);
                var isRepeatedEditRequest = _class_private_field_get(this, _activeBreakpointEditRequest) && isSameEditRequest(_class_private_field_get(this, _activeBreakpointEditRequest), breakpointEditRequest);
                if (isRepeatedEditRequest) {
                    // Do not re-show the same edit dialog, instead use the already open one.
                    return;
                }
                if (this.activeBreakpointDialog) {
                    // If this a request to edit a different dialog, make sure to close the current active one
                    // to avoid showing two dialogs at the same time.
                    this.activeBreakpointDialog.saveAndFinish();
                }
                var editor = this.editor;
                var oldCondition = breakpoint ? breakpoint.condition() : '';
                var _breakpoint_isLogpoint;
                var isLogpointForDialog = (_breakpoint_isLogpoint = breakpoint === null || breakpoint === void 0 ? void 0 : breakpoint.isLogpoint()) !== null && _breakpoint_isLogpoint !== void 0 ? _breakpoint_isLogpoint : Boolean(isLogpoint);
                var decorationElement = document.createElement('div');
                var compartment = new _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.Compartment();
                var _this = this;
                var dialog = new _BreakpointEditDialog_js__WEBPACK_IMPORTED_MODULE_19__.BreakpointEditDialog(line.number - 1, oldCondition, isLogpointForDialog, function() {
                    var _ref = _async_to_generator(function(result) {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    _this.activeBreakpointDialog = null;
                                    _class_private_field_set(_this, _activeBreakpointEditRequest, undefined);
                                    dialog.detach();
                                    editor.dispatch({
                                        effects: compartment.reconfigure([])
                                    });
                                    if (!result.committed) {
                                        _components_components_js__WEBPACK_IMPORTED_MODULE_20__.BreakpointsView.BreakpointsSidebarController.instance().breakpointEditFinished(breakpoint, false);
                                        return [
                                            2
                                        ];
                                    }
                                    _components_components_js__WEBPACK_IMPORTED_MODULE_20__.BreakpointsView.BreakpointsSidebarController.instance().breakpointEditFinished(breakpoint, oldCondition !== result.condition);
                                    if (!breakpoint) return [
                                        3,
                                        1
                                    ];
                                    breakpoint.setCondition(result.condition, result.isLogpoint);
                                    return [
                                        3,
                                        5
                                    ];
                                case 1:
                                    if (!location) return [
                                        3,
                                        3
                                    ];
                                    return [
                                        4,
                                        _this.setBreakpoint(location.lineNumber, location.columnNumber, result.condition, /* enabled */ true, result.isLogpoint)
                                    ];
                                case 2:
                                    _state.sent();
                                    return [
                                        3,
                                        5
                                    ];
                                case 3:
                                    return [
                                        4,
                                        _this.createNewBreakpoint(line, result.condition, /* enabled */ true, result.isLogpoint)
                                    ];
                                case 4:
                                    _state.sent();
                                    _state.label = 5;
                                case 5:
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                    return function(result) {
                        return _ref.apply(this, arguments);
                    };
                }());
                editor.dispatch({
                    effects: _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.StateEffect.appendConfig.of(compartment.of(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.EditorView.decorations.of(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.Decoration.set([
                        _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.Decoration.widget({
                            block: true,
                            widget: new /*#__PURE__*/ (function(_CodeMirror_WidgetType) {
                                _inherits(_class, _CodeMirror_WidgetType);
                                var _super = _create_super(_class);
                                function _class() {
                                    _class_call_check(this, _class);
                                    return _super.apply(this, arguments);
                                }
                                _create_class(_class, [
                                    {
                                        key: "toDOM",
                                        value: function toDOM() {
                                            return decorationElement;
                                        }
                                    }
                                ]);
                                return _class;
                            }(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.WidgetType))(),
                            side: 1
                        }).range(line.to)
                    ]))))
                });
                var _this1 = this;
                dialog.element.addEventListener('blur', function() {
                    var _ref = _async_to_generator(function(event) {
                        return _ts_generator(this, function(_state) {
                            if (!event.relatedTarget || event.relatedTarget && !event.relatedTarget.isSelfOrDescendant(dialog.element)) {
                                _class_private_field_set(_this1, _scheduledFinishingActiveDialog, true);
                                // Debounce repeated clicks on opening the edit dialog. Wait for a short amount of time
                                // in order to see whether we get a request to open the exact same dialog again.
                                setTimeout(function() {
                                    if (_this1.activeBreakpointDialog === dialog) {
                                        if (_class_private_field_get(_this1, _scheduledFinishingActiveDialog)) {
                                            dialog.saveAndFinish();
                                            _class_private_field_set(_this1, _scheduledFinishingActiveDialog, false);
                                        } else {
                                            dialog.focusEditor();
                                        }
                                    }
                                }, 200);
                            }
                            return [
                                2
                            ];
                        });
                    });
                    return function(event) {
                        return _ref.apply(this, arguments);
                    };
                }(), true);
                dialog.markAsExternallyManaged();
                dialog.show(decorationElement);
                dialog.focusEditor();
                this.activeBreakpointDialog = dialog;
                _class_private_field_set(this, _activeBreakpointEditRequest, breakpointEditRequest);
                function isSameEditRequest(editA, editB) {
                    if (editA.line.number !== editB.line.number) {
                        return false;
                    }
                    if (editA.line.from !== editB.line.from) {
                        return false;
                    }
                    if (editA.line.text !== editB.line.text) {
                        return false;
                    }
                    if (editA.breakpoint !== editB.breakpoint) {
                        return false;
                    }
                    if (editA.location !== editB.location) {
                        return false;
                    }
                    return editA.isLogpoint === editB.isLogpoint;
                }
            }
        },
        {
            key: "updateValueDecorations",
            value: // Show widgets with variable's values after lines that mention the
            // variables, if the debugger is paused in this file.
            function updateValueDecorations() {
                var _this = this;
                return _async_to_generator(function() {
                    var decorations, _tmp;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this.editor) {
                                    return [
                                        2
                                    ];
                                }
                                if (!_this.executionLocation) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this.computeValueDecorations()
                                ];
                            case 1:
                                _tmp = _state.sent();
                                return [
                                    3,
                                    3
                                ];
                            case 2:
                                _tmp = null;
                                _state.label = 3;
                            case 3:
                                decorations = _tmp;
                                // After the `await` the DebuggerPlugin could have been disposed. Re-check `this.editor`.
                                if (!_this.editor) {
                                    return [
                                        2
                                    ];
                                }
                                if (decorations || _this.editor.state.field(valueDecorations.field).size) {
                                    _this.editor.dispatch({
                                        effects: valueDecorations.update.of(decorations || _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.Decoration.none)
                                    });
                                }
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "computeValueDecorations",
            value: function computeValueDecorations() {
                var _this = this;
                return _async_to_generator(function() {
                    var executionContext, callFrame, url, _$rawLocationToEditorOffset, functionOffsetPromise, executionOffsetPromise, _ref, functionOffset, executionOffset, variableNames, scopeMappings, variablesByLine, decorations, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this.editor) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                if (!_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('inline-variable-values').get()) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                executionContext = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.RuntimeModel.ExecutionContext);
                                if (!executionContext) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                callFrame = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.CallFrame);
                                if (!callFrame) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                url = _this.uiSourceCode.url();
                                _$rawLocationToEditorOffset = function(location) {
                                    return _class_private_method_get(_this, _rawLocationToEditorOffset, rawLocationToEditorOffset).call(_this, location, url);
                                };
                                functionOffsetPromise = _class_private_method_get(_this, _rawLocationToEditorOffset, rawLocationToEditorOffset).call(_this, callFrame.functionLocation(), url);
                                executionOffsetPromise = _class_private_method_get(_this, _rawLocationToEditorOffset, rawLocationToEditorOffset).call(_this, callFrame.location(), url);
                                return [
                                    4,
                                    Promise.all([
                                        functionOffsetPromise,
                                        executionOffsetPromise
                                    ])
                                ];
                            case 1:
                                _ref = _sliced_to_array.apply(void 0, [
                                    _state.sent(),
                                    2
                                ]), functionOffset = _ref[0], executionOffset = _ref[1];
                                if (!functionOffset || !executionOffset || !_this.editor) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                if (functionOffset >= executionOffset || executionOffset - functionOffset > MAX_CODE_SIZE_FOR_VALUE_DECORATIONS) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                _state.label = 2;
                            case 2:
                                if (!_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.syntaxParserRunning(_this.editor.editor)) return [
                                    3,
                                    4
                                ];
                                return [
                                    4,
                                    new Promise(function(resolve) {
                                        return window.requestIdleCallback(resolve);
                                    })
                                ];
                            case 3:
                                _state.sent();
                                // After the `await` the DebuggerPlugin could have been disposed. Re-check `this.editor`.
                                if (!_this.editor) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.ensureSyntaxTree(_this.editor.state, executionOffset, 16);
                                return [
                                    3,
                                    2
                                ];
                            case 4:
                                variableNames = getVariableNamesByLine(_this.editor.state, functionOffset, executionOffset, executionOffset);
                                if (variableNames.length === 0) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                return [
                                    4,
                                    computeScopeMappings(callFrame, _$rawLocationToEditorOffset)
                                ];
                            case 5:
                                scopeMappings = _state.sent();
                                // After the `await` the DebuggerPlugin could have been disposed. Re-check `this.editor`.
                                if (!_this.editor || scopeMappings.length === 0) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                variablesByLine = getVariableValuesByLine(scopeMappings, variableNames);
                                if (!variablesByLine || !_this.editor) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                decorations = [];
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    _loop = function() {
                                        var _step_value = _sliced_to_array(_step.value, 2), line = _step_value[0], names = _step_value[1];
                                        var prevLine = variablesByLine.get(line - 1);
                                        var newNames = prevLine ? Array.from(names).filter(function(n) {
                                            return prevLine.get(n[0]) !== n[1];
                                        }) : Array.from(names);
                                        if (!newNames.length) {
                                            return "continue";
                                        }
                                        if (newNames.length > 10) {
                                            newNames = newNames.slice(0, 10);
                                        }
                                        decorations.push(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.Decoration.widget({
                                            widget: new ValueDecoration(newNames),
                                            side: 1
                                        }).range(_this.editor.state.doc.line(line + 1).to));
                                    };
                                    for(_iterator = variablesByLine[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
                                return [
                                    2,
                                    _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.Decoration.set(decorations, true)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "showContinueToLocations",
            value: // Highlight the locations the debugger can continue to (when
            // Control is held)
            function showContinueToLocations() {
                var _this = this;
                return _async_to_generator(function() {
                    var _this_popoverHelper, executionContext, callFrame, start, debuggerModel, state, locations, previousCallLine, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step, decorations;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                (_this_popoverHelper = _this.popoverHelper) === null || _this_popoverHelper === void 0 ? void 0 : _this_popoverHelper.hidePopover();
                                executionContext = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.RuntimeModel.ExecutionContext);
                                if (!executionContext || !_this.editor) {
                                    return [
                                        2
                                    ];
                                }
                                callFrame = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.CallFrame);
                                if (!callFrame) {
                                    return [
                                        2
                                    ];
                                }
                                start = callFrame.functionLocation() || callFrame.location();
                                debuggerModel = callFrame.debuggerModel;
                                state = _this.editor.state;
                                return [
                                    4,
                                    debuggerModel.getPossibleBreakpoints(start, null, true)
                                ];
                            case 1:
                                locations = _state.sent();
                                _this.continueToLocations = [];
                                previousCallLine = -1;
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    _loop = function() {
                                        var location = _step.value;
                                        var _syntaxNode_parent;
                                        var editorLocation = _this.transformer.uiLocationToEditorLocation(location.lineNumber, location.columnNumber);
                                        if (previousCallLine === editorLocation.lineNumber && location.type !== "call" /* Protocol.Debugger.BreakLocationType.Call */  || editorLocation.lineNumber >= state.doc.lines) {
                                            return "continue";
                                        }
                                        var line = state.doc.line(editorLocation.lineNumber + 1);
                                        var position = Math.min(line.to, line.from + editorLocation.columnNumber);
                                        var syntaxNode = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.syntaxTree(state).resolveInner(position, 1);
                                        if (syntaxNode.firstChild || syntaxNode.from < line.from || syntaxNode.to > line.to) {
                                            return "continue";
                                        }
                                        if (syntaxNode.name === '.') {
                                            var nextNode = syntaxNode.resolve(syntaxNode.to, 1);
                                            if (nextNode.firstChild || nextNode.from < line.from || nextNode.to > line.to) {
                                                return "continue";
                                            }
                                            syntaxNode = nextNode;
                                        }
                                        var syntaxType = syntaxNode.name;
                                        var validKeyword = syntaxType === 'this' || syntaxType === 'return' || syntaxType === 'new' || syntaxType === 'break' || syntaxType === 'continue';
                                        if (!validKeyword && !_this.isIdentifier(syntaxType)) {
                                            return "continue";
                                        }
                                        _this.continueToLocations.push({
                                            from: syntaxNode.from,
                                            to: syntaxNode.to,
                                            async: false,
                                            click: function() {
                                                return location.continueToLocation();
                                            }
                                        });
                                        if (location.type === "call" /* Protocol.Debugger.BreakLocationType.Call */ ) {
                                            previousCallLine = editorLocation.lineNumber;
                                        }
                                        var identifierName = validKeyword ? '' : line.text.slice(syntaxNode.from - line.from, syntaxNode.to - line.from);
                                        var asyncCall = null;
                                        if (identifierName === 'then' && ((_syntaxNode_parent = syntaxNode.parent) === null || _syntaxNode_parent === void 0 ? void 0 : _syntaxNode_parent.name) === 'MemberExpression') {
                                            asyncCall = syntaxNode.parent.parent;
                                        } else if (identifierName === 'setTimeout' || identifierName === 'setInterval' || identifierName === 'postMessage') {
                                            asyncCall = syntaxNode.parent;
                                        }
                                        if (syntaxType === 'new') {
                                            var _syntaxNode_parent1;
                                            var callee = (_syntaxNode_parent1 = syntaxNode.parent) === null || _syntaxNode_parent1 === void 0 ? void 0 : _syntaxNode_parent1.getChild('Expression');
                                            if (callee && callee.name === 'VariableName' && state.sliceDoc(callee.from, callee.to) === 'Worker') {
                                                asyncCall = syntaxNode.parent;
                                            }
                                        }
                                        if (asyncCall && (asyncCall.name === 'CallExpression' || asyncCall.name === 'NewExpression') && location.type === "call" /* Protocol.Debugger.BreakLocationType.Call */ ) {
                                            var _asyncCall_getChild_firstChild, _asyncCall_getChild;
                                            var firstArg = (_asyncCall_getChild = asyncCall.getChild('ArgList')) === null || _asyncCall_getChild === void 0 ? void 0 : (_asyncCall_getChild_firstChild = _asyncCall_getChild.firstChild) === null || _asyncCall_getChild_firstChild === void 0 ? void 0 : _asyncCall_getChild_firstChild.nextSibling;
                                            var highlightNode = void 0;
                                            if ((firstArg === null || firstArg === void 0 ? void 0 : firstArg.name) === 'VariableName') {
                                                highlightNode = firstArg;
                                            } else if ((firstArg === null || firstArg === void 0 ? void 0 : firstArg.name) === 'ArrowFunction' || (firstArg === null || firstArg === void 0 ? void 0 : firstArg.name) === 'FunctionExpression') {
                                                highlightNode = firstArg.firstChild;
                                                if ((highlightNode === null || highlightNode === void 0 ? void 0 : highlightNode.name) === 'async') {
                                                    highlightNode = highlightNode.nextSibling;
                                                }
                                            }
                                            if (highlightNode) {
                                                var isCurrentPosition = _this.executionLocation && location.lineNumber === _this.executionLocation.lineNumber && location.columnNumber === _this.executionLocation.columnNumber;
                                                _this.continueToLocations.push({
                                                    from: highlightNode.from,
                                                    to: highlightNode.to,
                                                    async: true,
                                                    click: function() {
                                                        return _this.asyncStepIn(location, Boolean(isCurrentPosition));
                                                    }
                                                });
                                            }
                                        }
                                    };
                                    for(_iterator = locations.reverse()[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
                                decorations = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.Decoration.set(_this.continueToLocations.map(function(loc) {
                                    return (loc.async ? asyncContinueToMark : continueToMark).range(loc.from, loc.to);
                                }), true);
                                _this.editor.dispatch({
                                    effects: continueToMarkers.update.of(decorations)
                                });
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "clearContinueToLocations",
            value: function clearContinueToLocations() {
                if (this.editor && this.editor.state.field(continueToMarkers.field).size) {
                    this.editor.dispatch({
                        effects: continueToMarkers.update.of(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.Decoration.none)
                    });
                }
            }
        },
        {
            key: "asyncStepIn",
            value: function asyncStepIn(location, isCurrentPosition) {
                if (!isCurrentPosition) {
                    location.continueToLocation(asyncStepIn);
                } else {
                    asyncStepIn();
                }
                function asyncStepIn() {
                    location.debuggerModel.scheduleStepIntoAsync();
                }
            }
        },
        {
            key: "fetchBreakpoints",
            value: function fetchBreakpoints() {
                var _this = this;
                if (!this.editor) {
                    return [];
                }
                var editor = this.editor;
                var breakpointLocations = this.breakpointManager.breakpointLocationsForUISourceCode(this.uiSourceCode);
                return breakpointLocations.map(function(param) {
                    var uiLocation = param.uiLocation, breakpoint = param.breakpoint;
                    var editorLocation = _this.transformer.uiLocationToEditorLocation(uiLocation.lineNumber, uiLocation.columnNumber);
                    return {
                        position: editor.toOffset(editorLocation),
                        breakpoint: breakpoint
                    };
                });
            }
        },
        {
            key: "lineBreakpoints",
            value: function lineBreakpoints(line) {
                return this.breakpoints.filter(function(b) {
                    return b.position >= line.from && b.position <= line.to;
                }).map(function(b) {
                    return b.breakpoint;
                });
            }
        },
        {
            key: "linePossibleBreakpoints",
            value: function linePossibleBreakpoints(line) {
                var _this = this;
                return _async_to_generator(function() {
                    var start, end, range;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                start = _this.transformer.editorLocationToUILocation(line.number - 1, 0);
                                end = _this.transformer.editorLocationToUILocation(line.number - 1, Math.min(line.length, MAX_POSSIBLE_BREAKPOINT_LINE));
                                range = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_9__.TextRange.TextRange(start.lineNumber, start.columnNumber || 0, end.lineNumber, end.columnNumber || 0);
                                return [
                                    4,
                                    _this.breakpointManager.possibleBreakpoints(_this.uiSourceCode, range)
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "computeBreakpointDecoration",
            value: // Compute the decorations for existing breakpoints (both on the
            // gutter and inline in the code)
            function computeBreakpointDecoration(state, breakpoints) {
                var _this = this;
                return _async_to_generator(function() {
                    var decorations, gutterMarkers, breakpointsByLine, inlineMarkersByLine, possibleBreakpointRequests, inlineMarkerPositions, addInlineMarker, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, _step_value, lineStart, lineBreakpoints, main, gutterClass, addPossibleBreakpoints, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _step_value1, linePos, inlineMarkers, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _step_value2, column, breakpoint, marker;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                decorations = [];
                                gutterMarkers = [];
                                breakpointsByLine = new Map();
                                inlineMarkersByLine = new Map();
                                possibleBreakpointRequests = [];
                                inlineMarkerPositions = new Set();
                                addInlineMarker = function(linePos, columnNumber, breakpoint) {
                                    var inlineMarkers = inlineMarkersByLine.get(linePos);
                                    if (!inlineMarkers) {
                                        inlineMarkers = [];
                                        inlineMarkersByLine.set(linePos, inlineMarkers);
                                    }
                                    inlineMarkers.push({
                                        breakpoint: breakpoint,
                                        column: columnNumber
                                    });
                                };
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    _loop = function() {
                                        var _step_value = _step.value, position = _step_value.position, breakpoint = _step_value.breakpoint;
                                        var line = state.doc.lineAt(position);
                                        var forThisLine = breakpointsByLine.get(line.from);
                                        if (!forThisLine) {
                                            forThisLine = [];
                                            breakpointsByLine.set(line.from, forThisLine);
                                        }
                                        if (breakpoint.enabled() && forThisLine.every(function(b) {
                                            return !b.enabled();
                                        })) {
                                            // Start a request for possible breakpoint positions on this line
                                            possibleBreakpointRequests.push(_this.linePossibleBreakpoints(line).then(function(locations) {
                                                return addPossibleBreakpoints(line, locations);
                                            }));
                                        }
                                        forThisLine.push(breakpoint);
                                        if (breakpoint.enabled()) {
                                            inlineMarkerPositions.add(position);
                                            addInlineMarker(line.from, position - line.from, breakpoint);
                                        }
                                    };
                                    for(_iterator = breakpoints[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
                                _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                try {
                                    for(_iterator1 = breakpointsByLine[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                        _step_value = _sliced_to_array(_step1.value, 2), lineStart = _step_value[0], lineBreakpoints = _step_value[1];
                                        main = lineBreakpoints.sort(mostSpecificBreakpoint)[0];
                                        gutterClass = 'cm-breakpoint';
                                        if (!main.enabled()) {
                                            gutterClass += ' cm-breakpoint-disabled';
                                        }
                                        if (!main.bound()) {
                                            gutterClass += ' cm-breakpoint-unbound';
                                        }
                                        if (main.isLogpoint()) {
                                            gutterClass += ' cm-breakpoint-logpoint';
                                        } else if (main.condition()) {
                                            gutterClass += ' cm-breakpoint-conditional';
                                        }
                                        gutterMarkers.push(new BreakpointGutterMarker(gutterClass, lineStart).range(lineStart));
                                    }
                                } catch (err) {
                                    _didIteratorError1 = true;
                                    _iteratorError1 = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                            _iterator1.return();
                                        }
                                    } finally{
                                        if (_didIteratorError1) {
                                            throw _iteratorError1;
                                        }
                                    }
                                }
                                addPossibleBreakpoints = function(line, locations) {
                                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                    try {
                                        for(var _iterator = locations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                            var location = _step.value;
                                            var editorLocation = _this.transformer.uiLocationToEditorLocation(location.lineNumber, location.columnNumber);
                                            if (editorLocation.lineNumber !== line.number - 1) {
                                                continue;
                                            }
                                            var position = Math.min(line.to, line.from + editorLocation.columnNumber);
                                            if (!inlineMarkerPositions.has(position)) {
                                                addInlineMarker(line.from, editorLocation.columnNumber, null);
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
                                };
                                return [
                                    4,
                                    Promise.all(possibleBreakpointRequests)
                                ];
                            case 1:
                                _state.sent();
                                _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                                try {
                                    for(_iterator2 = inlineMarkersByLine[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                                        _step_value1 = _sliced_to_array(_step2.value, 2), linePos = _step_value1[0], inlineMarkers = _step_value1[1];
                                        if (inlineMarkers.length > 1) {
                                            _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
                                            try {
                                                for(_iterator3 = inlineMarkers[Symbol.iterator](); !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                                                    _step_value2 = _step3.value, column = _step_value2.column, breakpoint = _step_value2.breakpoint;
                                                    marker = new BreakpointInlineMarker(breakpoint, _this);
                                                    decorations.push(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.Decoration.widget({
                                                        widget: marker,
                                                        side: -1
                                                    }).range(linePos + column));
                                                }
                                            } catch (err) {
                                                _didIteratorError3 = true;
                                                _iteratorError3 = err;
                                            } finally{
                                                try {
                                                    if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                                                        _iterator3.return();
                                                    }
                                                } finally{
                                                    if (_didIteratorError3) {
                                                        throw _iteratorError3;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                } catch (err) {
                                    _didIteratorError2 = true;
                                    _iteratorError2 = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                                            _iterator2.return();
                                        }
                                    } finally{
                                        if (_didIteratorError2) {
                                            throw _iteratorError2;
                                        }
                                    }
                                }
                                return [
                                    2,
                                    {
                                        content: _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.Decoration.set(decorations, true),
                                        gutter: _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.RangeSet.of(gutterMarkers, true)
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "restoreBreakpointsAfterEditing",
            value: // If, after editing, the editor is synced again (either by going
            // back to the original document or by saving), we replace any
            // breakpoints the breakpoint manager might have (which point into
            // the old file) with the breakpoints we have, which had their
            // positions tracked through the changes.
            function restoreBreakpointsAfterEditing() {
                var _this = this;
                return _async_to_generator(function() {
                    var breakpoints, editor;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                breakpoints = _this.breakpoints;
                                editor = _this.editor;
                                _this.breakpoints = [];
                                return [
                                    4,
                                    Promise.all(breakpoints.map(function() {
                                        var _ref = _async_to_generator(function(description) {
                                            var breakpoint, position, condition, enabled, isLogpoint, editorLocation, uiLocation;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        breakpoint = description.breakpoint, position = description.position;
                                                        condition = breakpoint.condition(), enabled = breakpoint.enabled(), isLogpoint = breakpoint.isLogpoint();
                                                        return [
                                                            4,
                                                            breakpoint.remove(false)
                                                        ];
                                                    case 1:
                                                        _state.sent();
                                                        editorLocation = editor.toLineColumn(position);
                                                        uiLocation = _this.transformer.editorLocationToUILocation(editorLocation.lineNumber, editorLocation.columnNumber);
                                                        return [
                                                            4,
                                                            _this.setBreakpoint(uiLocation.lineNumber, uiLocation.columnNumber, condition, enabled, isLogpoint)
                                                        ];
                                                    case 2:
                                                        _state.sent();
                                                        return [
                                                            2
                                                        ];
                                                }
                                            });
                                        });
                                        return function(description) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }()))
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "refreshBreakpoints",
            value: function refreshBreakpoints() {
                var _this = this;
                return _async_to_generator(function() {
                    var _this_editor_state_field, forBreakpoints, decorations;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this.editor) return [
                                    3,
                                    2
                                ];
                                _this.breakpoints = _this.fetchBreakpoints();
                                forBreakpoints = _this.breakpoints;
                                return [
                                    4,
                                    _this.computeBreakpointDecoration(_this.editor.state, forBreakpoints)
                                ];
                            case 1:
                                decorations = _state.sent();
                                // After the `await` we could have disposed of this DebuggerPlugin, so re-check `this.editor`.
                                if (_this.editor && _this.breakpoints === forBreakpoints && (decorations.gutter.size || ((_this_editor_state_field = _this.editor.state.field(breakpointMarkers, false)) === null || _this_editor_state_field === void 0 ? void 0 : _this_editor_state_field.gutter.size))) {
                                    _this.editor.dispatch({
                                        effects: setBreakpointDeco.of(decorations)
                                    });
                                }
                                _state.label = 2;
                            case 2:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "breakpointChange",
            value: function breakpointChange(event) {
                var _this = this;
                var uiLocation = event.data.uiLocation;
                if (uiLocation.uiSourceCode !== this.uiSourceCode || this.muted) {
                    return;
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.scriptFileForDebuggerModel.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var scriptFile = _step.value;
                        if (scriptFile.isDivergingFromVM() || scriptFile.isMergingToVM()) {
                            return;
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
                // These tend to arrive in bursts, so debounce them
                window.clearTimeout(this.refreshBreakpointsTimeout);
                this.refreshBreakpointsTimeout = window.setTimeout(function() {
                    return _this.refreshBreakpoints();
                }, 50);
            }
        },
        {
            key: "onInlineBreakpointMarkerClick",
            value: function onInlineBreakpointMarkerClick(event, breakpoint) {
                event.consume(true);
                if (breakpoint) {
                    if (event.shiftKey) {
                        breakpoint.setEnabled(!breakpoint.enabled());
                    } else {
                        void breakpoint.remove(false);
                    }
                } else if (this.editor) {
                    var editorLocation = this.editor.editor.posAtDOM(event.target);
                    var line = this.editor.state.doc.lineAt(editorLocation);
                    var uiLocation = this.transformer.editorLocationToUILocation(line.number - 1, editorLocation - line.from);
                    void this.setBreakpoint(uiLocation.lineNumber, uiLocation.columnNumber, EMPTY_BREAKPOINT_CONDITION, /* enabled */ true, /* isLogpoint */ false);
                }
            }
        },
        {
            key: "onInlineBreakpointMarkerContextMenu",
            value: function onInlineBreakpointMarkerContextMenu(event, breakpoint) {
                var _this = this;
                event.consume(true);
                // If there's events coming from the editor, there must be an editor.
                var editor = this.editor;
                var position = editor.editor.posAtDOM(event.target);
                var line = editor.state.doc.lineAt(position);
                if (!_ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_15__.SourceFrame.isBreakableLine(editor.state, line) || // Editing breakpoints only make sense for conditional breakpoints
                // and logpoints.
                !_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().supportsConditionalBreakpoints(this.uiSourceCode)) {
                    return;
                }
                var contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.ContextMenu.ContextMenu(event);
                if (breakpoint) {
                    contextMenu.debugSection().appendItem(i18nString(UIStrings.editBreakpoint), function() {
                        _this.editBreakpointCondition({
                            line: line,
                            breakpoint: breakpoint,
                            location: null
                        });
                    }, {
                        jslogContext: 'edit-breakpoint'
                    });
                } else {
                    var uiLocation = this.transformer.editorLocationToUILocation(line.number - 1, position - line.from);
                    contextMenu.debugSection().appendItem(i18nString(UIStrings.addConditionalBreakpoint), function() {
                        _this.editBreakpointCondition({
                            line: line,
                            breakpoint: null,
                            location: uiLocation,
                            isLogpoint: false
                        });
                    }, {
                        jslogContext: 'add-cnd-breakpoint'
                    });
                    contextMenu.debugSection().appendItem(i18nString(UIStrings.addLogpoint), function() {
                        _this.editBreakpointCondition({
                            line: line,
                            breakpoint: null,
                            location: uiLocation,
                            isLogpoint: true
                        });
                    }, {
                        jslogContext: 'add-logpoint'
                    });
                    contextMenu.debugSection().appendItem(i18nString(UIStrings.neverPauseHere), function() {
                        return _this.setBreakpoint(uiLocation.lineNumber, uiLocation.columnNumber, NEVER_PAUSE_HERE_CONDITION, /* enabled */ true, /* isLogpoint */ false);
                    }, {
                        jslogContext: 'never-pause-here'
                    });
                }
                void contextMenu.show();
            }
        },
        {
            key: "updateScriptFiles",
            value: function updateScriptFiles() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().models(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.DebuggerModel)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var debuggerModel = _step.value;
                        var scriptFile = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().scriptFile(this.uiSourceCode, debuggerModel);
                        if (scriptFile) {
                            this.updateScriptFile(debuggerModel);
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
                this.showSourceMapInfobarIfNeeded();
            }
        },
        {
            key: "updateScriptFile",
            value: function updateScriptFile(debuggerModel) {
                var _this = this;
                var oldScriptFile = this.scriptFileForDebuggerModel.get(debuggerModel);
                var newScriptFile = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().scriptFile(this.uiSourceCode, debuggerModel);
                this.scriptFileForDebuggerModel.delete(debuggerModel);
                if (oldScriptFile) {
                    oldScriptFile.removeEventListener("DidMergeToVM" /* Bindings.ResourceScriptMapping.ResourceScriptFile.Events.DidMergeToVM */ , this.didMergeToVM, this);
                    oldScriptFile.removeEventListener("DidDivergeFromVM" /* Bindings.ResourceScriptMapping.ResourceScriptFile.Events.DidDivergeFromVM */ , this.didDivergeFromVM, this);
                    if (this.muted && !this.uiSourceCode.isDirty() && this.consistentScripts()) {
                        this.setMuted(false);
                    }
                }
                if (!newScriptFile) {
                    return;
                }
                this.scriptFileForDebuggerModel.set(debuggerModel, newScriptFile);
                newScriptFile.addEventListener("DidMergeToVM" /* Bindings.ResourceScriptMapping.ResourceScriptFile.Events.DidMergeToVM */ , this.didMergeToVM, this);
                newScriptFile.addEventListener("DidDivergeFromVM" /* Bindings.ResourceScriptMapping.ResourceScriptFile.Events.DidDivergeFromVM */ , this.didDivergeFromVM, this);
                newScriptFile.checkMapping();
                void newScriptFile.missingSymbolFiles().then(function(resources) {
                    if (resources) {
                        var details = i18nString(UIStrings.debugInfoNotFound, {
                            PH1: newScriptFile.uiSourceCode.url()
                        });
                        _this.updateMissingDebugInfoInfobar({
                            resources: resources,
                            details: details
                        });
                    } else {
                        _this.updateMissingDebugInfoInfobar(null);
                    }
                });
            }
        },
        {
            key: "updateMissingDebugInfoInfobar",
            value: function updateMissingDebugInfoInfobar(warning) {
                var _this = this;
                if (this.missingDebugInfoBar) {
                    return;
                }
                if (warning === null) {
                    this.removeInfobar(this.missingDebugInfoBar);
                    this.missingDebugInfoBar = null;
                    return;
                }
                this.missingDebugInfoBar = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.Infobar.Infobar.create("error" /* UI.Infobar.Type.Error */ , warning.details, [], undefined, 'missing-debug-info');
                if (!this.missingDebugInfoBar) {
                    return;
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    var _this1, _loop = function() {
                        var resource = _step.value;
                        var _this_missingDebugInfoBar;
                        var detailsRow = (_this_missingDebugInfoBar = _this1.missingDebugInfoBar) === null || _this_missingDebugInfoBar === void 0 ? void 0 : _this_missingDebugInfoBar.createDetailsRowMessage(i18nString(UIStrings.debugFileNotFound, {
                            PH1: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.extractName(resource.resourceUrl)
                        }));
                        if (detailsRow) {
                            var pageResourceKey = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.PageResourceLoader.PageResourceLoader.makeExtensionKey(resource.resourceUrl, resource.initiator);
                            if (_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.PageResourceLoader.PageResourceLoader.instance().getResourcesLoaded().get(pageResourceKey)) {
                                var showRequest = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.UIUtils.createTextButton(i18nString(UIStrings.showRequest), function() {
                                    void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.PageResourceLoader.ResourceKey(pageResourceKey));
                                }, {
                                    jslogContext: 'show-request',
                                    variant: "text" /* Buttons.Button.Variant.TEXT */ 
                                });
                                showRequest.style.setProperty('margin-left', '10px');
                                showRequest.title = i18nString(UIStrings.openDeveloperResources);
                                detailsRow.appendChild(showRequest);
                            }
                            detailsRow.classList.add('infobar-selectable');
                        }
                    };
                    for(var _iterator = warning.resources[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_this1 = this, _loop();
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
                this.missingDebugInfoBar.setCloseCallback(function() {
                    _this.removeInfobar(_this.missingDebugInfoBar);
                    _this.missingDebugInfoBar = null;
                });
                this.attachInfobar(this.missingDebugInfoBar);
            }
        },
        {
            key: "scriptHasSourceMap",
            value: function scriptHasSourceMap() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().models(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.DebuggerModel)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var debuggerModel = _step.value;
                        var scriptFile = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().scriptFile(this.uiSourceCode, debuggerModel);
                        if (scriptFile && scriptFile.hasSourceMapURL()) {
                            return true;
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
                return false;
            }
        },
        {
            key: "getSourceMapResource",
            value: function getSourceMapResource() {
                var resourceMap = this.loader.getResourcesLoaded();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.scriptFileForDebuggerModel.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array(_step.value, 2), debuggerModel = _step_value[0], script = _step_value[1];
                        var _script_script;
                        var url = (_script_script = script.script) === null || _script_script === void 0 ? void 0 : _script_script.sourceMapURL;
                        if (url) {
                            var initiatorUrl = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMapManager.SourceMapManager.resolveRelativeSourceURL(debuggerModel.target(), script.script.sourceURL);
                            var resolvedUrl = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.completeURL(initiatorUrl, url);
                            if (resolvedUrl) {
                                var resource = resourceMap.get(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.PageResourceLoader.PageResourceLoader.makeKey(resolvedUrl, script.script.createPageResourceLoadInitiator()));
                                if (resource) {
                                    return resource;
                                }
                            }
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
                return null;
            }
        },
        {
            key: "showSourceMapInfobarIfNeeded",
            value: function showSourceMapInfobarIfNeeded() {
                var _this = this;
                if (this.sourceMapInfobar) {
                    return;
                }
                if (!_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('js-source-maps-enabled').get()) {
                    return;
                }
                if (!this.scriptHasSourceMap()) {
                    return;
                }
                var resource = this.getSourceMapResource();
                if (resource && resource.success === null) {
                    // Don't create the infobar until we know whether loading succeeded or failed.
                    return;
                }
                if (!resource) {
                    this.sourceMapInfobar = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.Infobar.Infobar.create("info" /* UI.Infobar.Type.Info */ , i18nString(UIStrings.sourceMapSkipped), [], _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('source-map-skipped-infobar-disabled', false), 'source-map-skipped');
                    if (!this.sourceMapInfobar) {
                        return;
                    }
                    this.sourceMapInfobar.createDetailsRowMessage(i18nString(UIStrings.debuggingPowerReduced));
                    this.sourceMapInfobar.createDetailsRowMessage(i18nString(UIStrings.reloadForSourceMap));
                } else if (resource.success) {
                    this.sourceMapInfobar = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.Infobar.Infobar.create("info" /* UI.Infobar.Type.Info */ , i18nString(UIStrings.sourceMapLoaded), [], _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('source-map-infobar-disabled', false), 'source-map-loaded');
                    if (!this.sourceMapInfobar) {
                        return;
                    }
                    this.sourceMapInfobar.createDetailsRowMessage(i18nString(UIStrings.associatedFilesShouldBeAdded));
                    this.sourceMapInfobar.createDetailsRowMessage(i18nString(UIStrings.associatedFilesAreAvailable, {
                        PH1: String(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.ShortcutRegistry.ShortcutRegistry.instance().shortcutTitleForAction('quick-open.show'))
                    }));
                } else {
                    this.sourceMapInfobar = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.Infobar.Infobar.create("warning" /* UI.Infobar.Type.Warning */ , i18nString(UIStrings.sourceMapFailed), [], undefined, 'source-map-failed');
                    if (!this.sourceMapInfobar) {
                        return;
                    }
                    this.sourceMapInfobar.createDetailsRowMessage(i18nString(UIStrings.debuggingPowerReduced));
                    if (resource.errorMessage) {
                        this.sourceMapInfobar.createDetailsRowMessage(i18nString(UIStrings.errorLoading, {
                            PH1: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.trimMiddle(resource.url, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.UIUtils.MaxLengthForDisplayedURLs),
                            PH2: resource.errorMessage
                        }));
                    }
                }
                this.sourceMapInfobar.setCloseCallback(function() {
                    _this.removeInfobar(_this.sourceMapInfobar);
                    _this.sourceMapInfobar = null;
                });
                this.attachInfobar(this.sourceMapInfobar);
            }
        },
        {
            key: "handleGutterClick",
            value: function handleGutterClick(line, event) {
                if (this.muted || event.button !== 0 || event.altKey) {
                    return false;
                }
                if (event.metaKey || event.ctrlKey) {
                    _class_private_method_get(this, _openEditDialogForLine, openEditDialogForLine).call(this, line, event.shiftKey);
                    return true;
                }
                void this.toggleBreakpoint(line, event.shiftKey);
                return true;
            }
        },
        {
            key: "toggleBreakpoint",
            value: function toggleBreakpoint(line, onlyDisable) {
                var _this = this;
                return _async_to_generator(function() {
                    var breakpoints, hasDisabled, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, breakpoint;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (_this.muted) {
                                    return [
                                        2
                                    ];
                                }
                                if (_this.activeBreakpointDialog) {
                                    _this.activeBreakpointDialog.finishEditing(false, '');
                                }
                                breakpoints = _this.lineBreakpoints(line);
                                if (!!breakpoints.length) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this.createNewBreakpoint(line, EMPTY_BREAKPOINT_CONDITION, /* enabled */ true, /* isLogpoint */ false)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                            case 2:
                                hasDisabled = breakpoints.some(function(b) {
                                    return !b.enabled();
                                });
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = breakpoints[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        breakpoint = _step.value;
                                        if (onlyDisable) {
                                            breakpoint.setEnabled(hasDisabled);
                                        } else {
                                            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.BreakpointRemovedFromGutterToggle);
                                            void breakpoint.remove(false);
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
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "defaultBreakpointLocation",
            value: function defaultBreakpointLocation(line) {
                var _this = this;
                return _async_to_generator(function() {
                    var editorExecutionLocation, possibleBreakpoints, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, location;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this.executionLocation) return [
                                    3,
                                    2
                                ];
                                editorExecutionLocation = _this.transformer.uiLocationToEditorLocation(_this.executionLocation.lineNumber, _this.executionLocation.columnNumber);
                                if (!(editorExecutionLocation.lineNumber === line.number - 1)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this.linePossibleBreakpoints(line)
                                ];
                            case 1:
                                possibleBreakpoints = _state.sent();
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = possibleBreakpoints[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        location = _step.value;
                                        if (location.compareTo(_this.executionLocation) === 0) {
                                            return [
                                                2,
                                                _this.executionLocation
                                            ];
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
                                _state.label = 2;
                            case 2:
                                return [
                                    2,
                                    _this.transformer.editorLocationToUILocation(line.number - 1)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "createNewBreakpoint",
            value: function createNewBreakpoint(line, condition, enabled, isLogpoint) {
                var _this = this;
                return _async_to_generator(function() {
                    var origin;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this.editor || !_ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_15__.SourceFrame.isBreakableLine(_this.editor.state, line)) {
                                    return [
                                        2
                                    ];
                                }
                                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.ScriptsBreakpointSet);
                                _class_private_method_get(_this, _recordSourcesPanelDebuggedMetrics, recordSourcesPanelDebuggedMetrics).call(_this);
                                return [
                                    4,
                                    _this.defaultBreakpointLocation(line)
                                ];
                            case 1:
                                origin = _state.sent();
                                return [
                                    4,
                                    _this.setBreakpoint(origin.lineNumber, origin.columnNumber, condition, enabled, isLogpoint)
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "setBreakpoint",
            value: function setBreakpoint(lineNumber, columnNumber, condition, enabled, isLogpoint) {
                var _this = this;
                return _async_to_generator(function() {
                    var bp;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('breakpoints-active').set(true);
                                return [
                                    4,
                                    _this.breakpointManager.setBreakpoint(_this.uiSourceCode, lineNumber, columnNumber, condition, enabled, isLogpoint, "USER_ACTION" /* Breakpoints.BreakpointManager.BreakpointOrigin.USER_ACTION */ )
                                ];
                            case 1:
                                bp = _state.sent();
                                _this.breakpointWasSetForTest(lineNumber, columnNumber, condition, enabled);
                                return [
                                    2,
                                    bp
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "breakpointWasSetForTest",
            value: function breakpointWasSetForTest(_lineNumber, _columnNumber, _condition, _enabled) {}
        },
        {
            key: "callFrameChanged",
            value: function callFrameChanged() {
                var _this = this;
                return _async_to_generator(function() {
                    var callFrame;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.liveLocationPool.disposeAll();
                                callFrame = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.CallFrame);
                                if (!!callFrame) return [
                                    3,
                                    1
                                ];
                                _this.setExecutionLocation(null);
                                return [
                                    3,
                                    3
                                ];
                            case 1:
                                return [
                                    4,
                                    _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().createCallFrameLiveLocation(callFrame.location(), function() {
                                        var _ref = _async_to_generator(function(liveLocation) {
                                            var uiLocation;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        return [
                                                            4,
                                                            liveLocation.uiLocation()
                                                        ];
                                                    case 1:
                                                        uiLocation = _state.sent();
                                                        if (uiLocation && uiLocation.uiSourceCode.canononicalScriptId() === _this.uiSourceCode.canononicalScriptId()) {
                                                            _this.setExecutionLocation(uiLocation);
                                                            _this.updateMissingDebugInfoInfobar(callFrame.missingDebugInfoDetails);
                                                            // We are paused and the user is specifically looking at this UISourceCode either because
                                                            // this file is on top of stack, or the user explicitly selected a stack frame for this UISourceCode.
                                                            _class_private_method_get(_this, _recordSourcesPanelDebuggedMetrics, recordSourcesPanelDebuggedMetrics).call(_this);
                                                        } else {
                                                            _this.setExecutionLocation(null);
                                                        }
                                                        return [
                                                            2
                                                        ];
                                                }
                                            });
                                        });
                                        return function(liveLocation) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }(), _this.liveLocationPool)
                                ];
                            case 2:
                                _state.sent();
                                _state.label = 3;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "setExecutionLocation",
            value: function setExecutionLocation(executionLocation) {
                if (this.executionLocation === executionLocation || !this.editor) {
                    return;
                }
                this.executionLocation = executionLocation;
                if (executionLocation) {
                    var editorLocation = this.transformer.uiLocationToEditorLocation(executionLocation.lineNumber, executionLocation.columnNumber);
                    var editorPosition = _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_13__.Position.toOffset(this.editor.state.doc, editorLocation);
                    this.editor.dispatch({
                        effects: [
                            _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_13__.ExecutionPositionHighlighter.setHighlightedPosition.of(editorPosition)
                        ]
                    });
                    void this.updateValueDecorations();
                    if (this.controlDown) {
                        void this.showContinueToLocations();
                    }
                } else {
                    this.editor.dispatch({
                        effects: [
                            continueToMarkers.update.of(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.Decoration.none),
                            valueDecorations.update.of(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.Decoration.none),
                            _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_13__.ExecutionPositionHighlighter.clearHighlightedPosition.of()
                        ]
                    });
                }
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                var _this_popoverHelper, _this_popoverHelper1;
                this.hideIgnoreListInfobar();
                if (this.sourceMapInfobar) {
                    this.sourceMapInfobar.dispose();
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.scriptFileForDebuggerModel.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var script = _step.value;
                        script.removeEventListener("DidMergeToVM" /* Bindings.ResourceScriptMapping.ResourceScriptFile.Events.DidMergeToVM */ , this.didMergeToVM, this);
                        script.removeEventListener("DidDivergeFromVM" /* Bindings.ResourceScriptMapping.ResourceScriptFile.Events.DidDivergeFromVM */ , this.didDivergeFromVM, this);
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
                this.scriptFileForDebuggerModel.clear();
                (_this_popoverHelper = this.popoverHelper) === null || _this_popoverHelper === void 0 ? void 0 : _this_popoverHelper.hidePopover();
                (_this_popoverHelper1 = this.popoverHelper) === null || _this_popoverHelper1 === void 0 ? void 0 : _this_popoverHelper1.dispose();
                this.setExecutionLocation(null);
                this.breakpointManager.removeEventListener(_models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_6__.BreakpointManager.Events.BreakpointAdded, this.breakpointChange, this);
                this.breakpointManager.removeEventListener(_models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_6__.BreakpointManager.Events.BreakpointRemoved, this.breakpointChange, this);
                this.uiSourceCode.removeEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_10__.UISourceCode.Events.WorkingCopyChanged, this.workingCopyChanged, this);
                this.uiSourceCode.removeEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_10__.UISourceCode.Events.WorkingCopyCommitted, this.workingCopyCommitted, this);
                _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.IgnoreListManager.IgnoreListManager.instance().removeChangeListener(this.ignoreListCallback);
                debuggerPluginForUISourceCode.delete(this.uiSourceCode);
                _get(_get_prototype_of(DebuggerPlugin.prototype), "dispose", this).call(this);
                window.clearTimeout(this.refreshBreakpointsTimeout);
                // Clear `this.editor` to signal that we are disposed. Any function from this `DebuggerPlugin` instance
                // still running or scheduled will early return and not do any work.
                this.editor = undefined;
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.Context.Context.instance().removeFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.CallFrame, this.callFrameChanged, this);
                this.liveLocationPool.disposeAll();
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
    return DebuggerPlugin;
}(_wrap_native_super(_Plugin_js__WEBPACK_IMPORTED_MODULE_21__.Plugin));
function openEditDialogForLine(line, isLogpoint) {
    var _this_breakpoints_find;
    if (this.muted) {
        return;
    }
    if (this.activeBreakpointDialog) {
        this.activeBreakpointDialog.finishEditing(false, '');
    }
    var breakpoint = ((_this_breakpoints_find = this.breakpoints.find(function(b) {
        return b.position >= line.from && b.position <= line.to;
    })) === null || _this_breakpoints_find === void 0 ? void 0 : _this_breakpoints_find.breakpoint) || null;
    if (isLogpoint === undefined && breakpoint !== null) {
        isLogpoint = breakpoint.isLogpoint();
    }
    this.editBreakpointCondition({
        line: line,
        breakpoint: breakpoint,
        location: null,
        isLogpoint: isLogpoint
    });
}
function rawLocationToEditorOffset(location, url) {
    return _rawLocationToEditorOffset1.apply(this, arguments);
}
function _rawLocationToEditorOffset1() {
    _rawLocationToEditorOffset1 = _async_to_generator(function(location, url) {
        var _this_editor, uiLocation, _tmp, offset;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _tmp = location;
                    if (!_tmp) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().rawLocationToUILocation(location)
                    ];
                case 1:
                    _tmp = _state.sent();
                    _state.label = 2;
                case 2:
                    uiLocation = _tmp;
                    if (!uiLocation || uiLocation.uiSourceCode.url() !== url) {
                        return [
                            2,
                            null
                        ];
                    }
                    offset = (_this_editor = this.editor) === null || _this_editor === void 0 ? void 0 : _this_editor.toOffset(this.transformer.uiLocationToEditorLocation(uiLocation.lineNumber, uiLocation.columnNumber));
                    return [
                        2,
                        offset !== null && offset !== void 0 ? offset : null
                    ];
            }
        });
    });
    return _rawLocationToEditorOffset1.apply(this, arguments);
}
function recordSourcesPanelDebuggedMetrics() {
    if (_class_private_field_get(this, _sourcesPanelDebuggedMetricsRecorded)) {
        return;
    }
    _class_private_field_set(this, _sourcesPanelDebuggedMetricsRecorded, true);
    var mimeType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.mimeFromURL(this.uiSourceCode.url());
    var mediaType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.mediaTypeForMetrics(mimeType !== null && mimeType !== void 0 ? mimeType : '', this.uiSourceCode.contentType().isFromSourceMap(), _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_9__.TextUtils.isMinified(this.uiSourceCode.content()));
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.sourcesPanelFileDebugged(mediaType);
}
var BreakpointLocationRevealer = /*#__PURE__*/ function() {
    "use strict";
    function BreakpointLocationRevealer() {
        _class_call_check(this, BreakpointLocationRevealer);
    }
    _create_class(BreakpointLocationRevealer, [
        {
            key: "reveal",
            value: function reveal(breakpointLocation, omitFocus) {
                return _async_to_generator(function() {
                    var uiLocation, debuggerPlugin;
                    return _ts_generator(this, function(_state) {
                        uiLocation = breakpointLocation.uiLocation;
                        _SourcesPanel_js__WEBPACK_IMPORTED_MODULE_22__.SourcesPanel.instance().showUILocation(uiLocation, omitFocus);
                        debuggerPlugin = debuggerPluginForUISourceCode.get(uiLocation.uiSourceCode);
                        if (debuggerPlugin) {
                            debuggerPlugin.editBreakpointLocation(breakpointLocation);
                        } else {
                            _components_components_js__WEBPACK_IMPORTED_MODULE_20__.BreakpointsView.BreakpointsSidebarController.instance().breakpointEditFinished(breakpointLocation.breakpoint, false);
                        }
                        return [
                            2
                        ];
                    });
                })();
            }
        }
    ]);
    return BreakpointLocationRevealer;
}();
// Infobar panel state, used to show additional panels below the editor.
var addInfobar = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.StateEffect.define();
var removeInfobar = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.StateEffect.define();
var infobarState = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.StateField.define({
    create: function create() {
        return [];
    },
    update: function update(current, tr) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var effect = _step.value;
                if (effect.is(addInfobar)) {
                    current = current.concat(effect.value);
                } else if (effect.is(removeInfobar)) {
                    current = current.filter(function(b) {
                        return b !== effect.value;
                    });
                }
            };
            for(var _iterator = tr.effects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
        return current;
    },
    provide: function(field) {
        return _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.showPanel.computeN([
            field
        ], function(state) {
            return state.field(field).map(function(bar) {
                return function() {
                    return {
                        dom: bar.element
                    };
                };
            });
        });
    }
});
function computeNonBreakableLines(state, transformer, sourceCode) {
    return _computeNonBreakableLines.apply(this, arguments);
}
function _computeNonBreakableLines() {
    _computeNonBreakableLines = // Enumerate non-breakable lines (lines without a known corresponding
    // position in the UISource).
    _async_to_generator(function(state, transformer, sourceCode) {
        var debuggerWorkspaceBinding, mappedLines, linePositions, i, lineNumber;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance();
                    return [
                        4,
                        debuggerWorkspaceBinding.getMappedLines(sourceCode)
                    ];
                case 1:
                    mappedLines = _state.sent();
                    if (!mappedLines) {
                        return [
                            2,
                            []
                        ];
                    }
                    linePositions = [];
                    for(i = 0; i < state.doc.lines; i++){
                        lineNumber = transformer.editorLocationToUILocation(i, 0).lineNumber;
                        if (!mappedLines.has(lineNumber)) {
                            linePositions.push(state.doc.line(i + 1).from);
                        }
                    }
                    return [
                        2,
                        linePositions
                    ];
            }
        });
    });
    return _computeNonBreakableLines.apply(this, arguments);
}
var setBreakpointDeco = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.StateEffect.define();
var muteBreakpoints = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.StateEffect.define();
function muteGutterMarkers(markers, doc) {
    var newMarkers = [];
    markers.between(0, doc.length, function(from, _to, marker) {
        var className = marker.elementClass;
        if (!/cm-breakpoint-disabled/.test(className)) {
            className += ' cm-breakpoint-disabled';
        }
        newMarkers.push(new BreakpointGutterMarker(className, from).range(from));
    });
    return _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.RangeSet.of(newMarkers, false);
}
// Holds the inline breakpoint marker decorations and the gutter
// markers for lines with breakpoints. When the set of active markers
// changes in non-muted state (the editor content matches the original
// file), it is recomputed and updated with `setBreakpointDeco`. When
// the editor content goes out of sync with the original file, the
// `muteBreakpoints` effect hides the inline markers and makes sure
// all gutter markers are displayed as disabled.
var breakpointMarkers = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.StateField.define({
    create: function create() {
        return {
            content: _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.RangeSet.empty,
            gutter: _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.RangeSet.empty
        };
    },
    update: function update(deco, tr) {
        if (!tr.changes.empty) {
            deco = {
                content: deco.content.map(tr.changes),
                gutter: deco.gutter.map(tr.changes)
            };
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = tr.effects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var effect = _step.value;
                if (effect.is(setBreakpointDeco)) {
                    deco = effect.value;
                } else if (effect.is(muteBreakpoints)) {
                    deco = {
                        content: _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.RangeSet.empty,
                        gutter: muteGutterMarkers(deco.gutter, tr.state.doc)
                    };
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
        return deco;
    },
    provide: function(field) {
        return [
            _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.EditorView.decorations.from(field, function(deco) {
                return deco.content;
            }),
            _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.lineNumberMarkers.from(field, function(deco) {
                return deco.gutter;
            })
        ];
    }
});
var BreakpointInlineMarker = /*#__PURE__*/ function(_CodeMirror_WidgetType) {
    "use strict";
    _inherits(BreakpointInlineMarker, _CodeMirror_WidgetType);
    var _super = _create_super(BreakpointInlineMarker);
    function BreakpointInlineMarker(breakpoint, parent) {
        _class_call_check(this, BreakpointInlineMarker);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "breakpoint", void 0);
        _define_property(_assert_this_initialized(_this), "parent", void 0);
        _define_property(_assert_this_initialized(_this), "class", void 0);
        _this.breakpoint = breakpoint;
        _this.parent = parent;
        // Eagerly compute DOM class so that the widget is recreated when it changes.
        _this.class = 'cm-inlineBreakpoint';
        if (breakpoint === null || breakpoint === void 0 ? void 0 : breakpoint.isLogpoint()) {
            _this.class += ' cm-inlineBreakpoint-logpoint';
        } else if (breakpoint === null || breakpoint === void 0 ? void 0 : breakpoint.condition()) {
            _this.class += ' cm-inlineBreakpoint-conditional';
        }
        if (!(breakpoint === null || breakpoint === void 0 ? void 0 : breakpoint.enabled())) {
            _this.class += ' cm-inlineBreakpoint-disabled';
        }
        return _this;
    }
    _create_class(BreakpointInlineMarker, [
        {
            key: "eq",
            value: function eq(other) {
                return other.class === this.class && other.breakpoint === this.breakpoint;
            }
        },
        {
            key: "toDOM",
            value: function toDOM() {
                var _this = this;
                var span = document.createElement('span');
                span.className = this.class;
                span.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_17__.breakpointMarker().track({
                    click: true
                })));
                span.addEventListener('click', function(event) {
                    _this.parent.onInlineBreakpointMarkerClick(event, _this.breakpoint);
                    event.consume();
                });
                span.addEventListener('contextmenu', function(event) {
                    _this.parent.onInlineBreakpointMarkerContextMenu(event, _this.breakpoint);
                    event.consume();
                });
                return span;
            }
        },
        {
            key: "ignoreEvent",
            value: function ignoreEvent() {
                return true;
            }
        }
    ]);
    return BreakpointInlineMarker;
}(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.WidgetType);
var _position = /*#__PURE__*/ new WeakMap();
var BreakpointGutterMarker = /*#__PURE__*/ function(_CodeMirror_GutterMarker) {
    "use strict";
    _inherits(BreakpointGutterMarker, _CodeMirror_GutterMarker);
    var _super = _create_super(BreakpointGutterMarker);
    function BreakpointGutterMarker(elementClass, position) {
        _class_call_check(this, BreakpointGutterMarker);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "elementClass", void 0);
        _class_private_field_init(_assert_this_initialized(_this), _position, {
            writable: true,
            value: void 0
        });
        _this.elementClass = elementClass;
        _class_private_field_set(_assert_this_initialized(_this), _position, position);
        return _this;
    }
    _create_class(BreakpointGutterMarker, [
        {
            key: "eq",
            value: function eq(other) {
                return other.elementClass === this.elementClass;
            }
        },
        {
            key: "toDOM",
            value: function toDOM(view) {
                var div = document.createElement('div'); // We want {display: block} so it uses all of the space.
                div.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_17__.breakpointMarker().track({
                    click: true
                })));
                var line = view.state.doc.lineAt(_class_private_field_get(this, _position)).number;
                var formatNumber = view.state.facet(_ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_15__.SourceFrame.LINE_NUMBER_FORMATTER);
                div.textContent = formatNumber(line, view.state);
                return div;
            }
        }
    ]);
    return BreakpointGutterMarker;
}(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.GutterMarker);
function mostSpecificBreakpoint(a, b) {
    if (a.enabled() !== b.enabled()) {
        return a.enabled() ? -1 : 1;
    }
    if (a.bound() !== b.bound()) {
        return a.bound() ? -1 : 1;
    }
    if (Boolean(a.condition()) !== Boolean(b.condition())) {
        return Boolean(a.condition()) ? -1 : 1;
    }
    return 0;
}
// Generic helper for creating pairs of editor state fields and
// effects to model imperatively updated decorations.
function defineStatefulDecoration() {
    var update = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.StateEffect.define();
    var field = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.StateField.define({
        create: function create() {
            return _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.Decoration.none;
        },
        update: function update1(deco, tr) {
            return tr.effects.reduce(function(deco, effect) {
                return effect.is(update) ? effect.value : deco;
            }, deco.map(tr.changes));
        },
        provide: function(field) {
            return _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.EditorView.decorations.from(field);
        }
    });
    return {
        update: update,
        field: field
    };
}
// Continue-to markers
var continueToMark = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.Decoration.mark({
    class: 'cm-continueToLocation'
});
var asyncContinueToMark = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.Decoration.mark({
    class: 'cm-continueToLocation cm-continueToLocation-async'
});
var continueToMarkers = defineStatefulDecoration();
var noMarkers = {}, hasContinueMarkers = {
    class: 'cm-hasContinueMarkers'
};
// Add a class to the content element when there are active
// continue-to markers. This hides the background on the current
// execution line.
var markIfContinueTo = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.EditorView.contentAttributes.compute([
    continueToMarkers.field
], function(state) {
    return state.field(continueToMarkers.field).size ? hasContinueMarkers : noMarkers;
});
// Variable value decorations
var ValueDecoration = /*#__PURE__*/ function(_CodeMirror_WidgetType) {
    "use strict";
    _inherits(ValueDecoration, _CodeMirror_WidgetType);
    var _super = _create_super(ValueDecoration);
    function ValueDecoration(pairs) {
        _class_call_check(this, ValueDecoration);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "pairs", void 0);
        _this.pairs = pairs;
        return _this;
    }
    _create_class(ValueDecoration, [
        {
            key: "eq",
            value: function eq(other) {
                return this.pairs.length === other.pairs.length && this.pairs.every(function(p, i) {
                    return p[0] === other.pairs[i][0] && p[1] === other.pairs[i][1];
                });
            }
        },
        {
            key: "toDOM",
            value: function toDOM() {
                var formatter = new _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_14__.RemoteObjectPreviewFormatter.RemoteObjectPreviewFormatter();
                var widget = document.createElement('div');
                widget.classList.add('cm-variableValues');
                var first = true;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.pairs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array(_step.value, 2), name = _step_value[0], value = _step_value[1];
                        if (first) {
                            first = false;
                        } else {
                            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.UIUtils.createTextChild(widget, ', ');
                        }
                        var nameValuePair = widget.createChild('span');
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_16__.UIUtils.createTextChild(nameValuePair, name + ' = ');
                        var propertyCount = value.preview ? value.preview.properties.length : 0;
                        var entryCount = value.preview && value.preview.entries ? value.preview.entries.length : 0;
                        if (value.preview && propertyCount + entryCount < 10) {
                            formatter.appendObjectPreview(nameValuePair, value.preview, false);
                        } else {
                            var propertyValue = _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_14__.ObjectPropertiesSection.ObjectPropertiesSection.createPropertyValue(value, /* wasThrown */ false, /* showPreview */ false);
                            nameValuePair.appendChild(propertyValue.element);
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
                return widget;
            }
        }
    ]);
    return ValueDecoration;
}(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.WidgetType);
var valueDecorations = defineStatefulDecoration();
function isVariableIdentifier(tokenType) {
    return tokenType === 'VariableName' || tokenType === 'VariableDefinition';
}
function isVariableDefinition(tokenType) {
    return tokenType === 'VariableDefinition';
}
function isLetConstDefinition(tokenType) {
    return tokenType === 'let' || tokenType === 'const';
}
function isScopeNode(tokenType) {
    return tokenType === 'Block' || tokenType === 'ForSpec';
}
var SiblingScopeVariables = function SiblingScopeVariables() {
    "use strict";
    _class_call_check(this, SiblingScopeVariables);
    _define_property(this, "blockList", new Set());
    _define_property(this, "variables", []);
};
function getVariableNamesByLine(editorState, fromPos, toPos, currentPos) {
    var fromLine = editorState.doc.lineAt(fromPos);
    fromPos = Math.min(fromLine.to, fromPos);
    toPos = editorState.doc.lineAt(toPos).from;
    var tree = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.syntaxTree(editorState);
    // Sibling scope is a scope that does not contain the current position.
    // We will exclude variables that are defined (and used in those scopes (since we are currently outside of their lifetime).
    function isSiblingScopeNode(node) {
        return isScopeNode(node.name) && (node.to < currentPos || currentPos < node.from);
    }
    var names = [];
    var curLine = fromLine;
    var siblingStack = [];
    var currentLetConstDefinition = null;
    function currentNames() {
        return siblingStack.length ? siblingStack[siblingStack.length - 1].variables : names;
    }
    tree.iterate({
        from: fromPos,
        to: toPos,
        enter: function(node) {
            if (node.from < fromPos) {
                return;
            }
            if (isLetConstDefinition(node.name)) {
                currentLetConstDefinition = node.node.nextSibling;
                return;
            }
            if (isSiblingScopeNode(node)) {
                siblingStack.push(new SiblingScopeVariables());
                return;
            }
            var varName = isVariableIdentifier(node.name) && editorState.sliceDoc(node.from, node.to);
            if (!varName) {
                return;
            }
            if (currentLetConstDefinition && isVariableDefinition(node.name) && siblingStack.length > 0) {
                siblingStack[siblingStack.length - 1].blockList.add(varName);
                return;
            }
            if (node.from > curLine.to) {
                curLine = editorState.doc.lineAt(node.from);
            }
            currentNames().push({
                line: curLine.number - 1,
                from: node.from,
                id: varName
            });
        },
        leave: function(node) {
            if (currentLetConstDefinition === node.node) {
                currentLetConstDefinition = null;
            } else if (isSiblingScopeNode(node)) {
                var topScope = siblingStack.pop();
                var nameList = currentNames();
                var _topScope_variables;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = ((_topScope_variables = topScope === null || topScope === void 0 ? void 0 : topScope.variables) !== null && _topScope_variables !== void 0 ? _topScope_variables : [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var token = _step.value;
                        if (!(topScope === null || topScope === void 0 ? void 0 : topScope.blockList.has(token.id))) {
                            nameList.push(token);
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
            }
        }
    });
    return names;
}
function computeScopeMappings(callFrame, rawLocationToEditorOffset) {
    return _computeScopeMappings.apply(this, arguments);
}
function _computeScopeMappings() {
    _computeScopeMappings = _async_to_generator(function(callFrame, rawLocationToEditorOffset) {
        var scopeMappings, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, scope, _scope_range, _scope_range1, _scope_range_start, scopeStart, _scope_range_end, scopeEnd, properties, variableMap, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    scopeMappings = [];
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        8,
                        9,
                        10
                    ]);
                    _iterator = callFrame.scopeChain()[Symbol.iterator]();
                    _state.label = 2;
                case 2:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        7
                    ];
                    scope = _step.value;
                    return [
                        4,
                        rawLocationToEditorOffset((_scope_range_start = (_scope_range = scope.range()) === null || _scope_range === void 0 ? void 0 : _scope_range.start) !== null && _scope_range_start !== void 0 ? _scope_range_start : null)
                    ];
                case 3:
                    scopeStart = _state.sent();
                    if (!scopeStart) {
                        return [
                            3,
                            7
                        ];
                    }
                    return [
                        4,
                        rawLocationToEditorOffset((_scope_range_end = (_scope_range1 = scope.range()) === null || _scope_range1 === void 0 ? void 0 : _scope_range1.end) !== null && _scope_range_end !== void 0 ? _scope_range_end : null)
                    ];
                case 4:
                    scopeEnd = _state.sent();
                    if (!scopeEnd) {
                        return [
                            3,
                            7
                        ];
                    }
                    return [
                        4,
                        _models_source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_8__.NamesResolver.resolveScopeInObject(scope).getAllProperties(false, false)
                    ];
                case 5:
                    properties = _state.sent().properties;
                    if (!properties || properties.length > MAX_PROPERTIES_IN_SCOPE_FOR_VALUE_DECORATIONS) {
                        return [
                            3,
                            7
                        ];
                    }
                    variableMap = new Map(properties.map(function(p) {
                        return [
                            p.name,
                            p.value
                        ];
                    }));
                    scopeMappings.push({
                        scopeStart: scopeStart,
                        scopeEnd: scopeEnd,
                        variableMap: variableMap
                    });
                    // Let us only get mappings for block scopes until we see a surrounding function (local) scope.
                    if (scope.type() === "local" /* Protocol.Debugger.ScopeType.Local */ ) {
                        return [
                            3,
                            7
                        ];
                    }
                    _state.label = 6;
                case 6:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        2
                    ];
                case 7:
                    return [
                        3,
                        10
                    ];
                case 8:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        10
                    ];
                case 9:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 10:
                    return [
                        2,
                        scopeMappings
                    ];
            }
        });
    });
    return _computeScopeMappings.apply(this, arguments);
}
function getVariableValuesByLine(scopeMappings, variableNames) {
    var namesPerLine = new Map();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = variableNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _step.value, line = _step_value.line, from = _step_value.from, id = _step_value.id;
            var varValue = findVariableInChain(id, from, scopeMappings);
            if (!varValue) {
                continue;
            }
            var names = namesPerLine.get(line);
            if (!names) {
                names = new Map();
                namesPerLine.set(line, names);
            }
            names.set(id, varValue);
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
    return namesPerLine;
    function findVariableInChain(name, pos, scopeMappings) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = scopeMappings[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var scope = _step.value;
                if (pos < scope.scopeStart || pos >= scope.scopeEnd) {
                    continue;
                }
                var value = scope.variableMap.get(name);
                if (value) {
                    return value;
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
        return null;
    }
}
// Pop-over
function computePopoverHighlightRange(state, mimeType, cursorPos) {
    var main = state.selection.main;
    if (!main.empty) {
        if (cursorPos < main.from || main.to < cursorPos) {
            return null;
        }
        // If the user goes through the trouble of manually selecting an expression, we'll allow side-effects.
        return {
            from: main.from,
            to: main.to,
            containsSideEffects: false
        };
    }
    var tree = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.ensureSyntaxTree(state, cursorPos, 5 * 1000);
    if (!tree) {
        return null;
    }
    var node = tree.resolveInner(cursorPos, 1);
    // Only do something if the cursor is over a leaf node.
    if (node.firstChild) {
        return null;
    }
    switch(mimeType){
        case 'application/wasm':
            {
                if (node.name !== 'Identifier') {
                    return null;
                }
                // For $label identifiers we can't show a meaningful preview (https://crbug.com/1155548),
                // so we suppress them for now. Label identifiers can only appear as operands to control
                // instructions[1].
                //
                // [1]: https://webassembly.github.io/spec/core/text/instructions.html#control-instructions
                var controlInstructions = [
                    'block',
                    'loop',
                    'if',
                    'else',
                    'end',
                    'br',
                    'br_if',
                    'br_table'
                ];
                for(var parent = node.parent; parent; parent = parent.parent){
                    if (parent.name === 'App') {
                        var firstChild = parent.firstChild;
                        var opName = (firstChild === null || firstChild === void 0 ? void 0 : firstChild.name) === 'Keyword' && state.sliceDoc(firstChild.from, firstChild.to);
                        if (opName && controlInstructions.includes(opName)) {
                            return null;
                        }
                    }
                }
                return {
                    from: node.from,
                    to: node.to,
                    containsSideEffects: false
                };
            }
        case 'text/html':
        case 'text/javascript':
        case 'text/jsx':
        case 'text/typescript':
        case 'text/typescript-jsx':
            {
                var _current_parent, _current_nextSibling, _current_parent1, _current_nextSibling1;
                var current = node;
                while(current && current.name !== 'this' && current.name !== 'VariableDefinition' && current.name !== 'VariableName' && current.name !== 'MemberExpression' && !(current.name === 'PropertyName' && ((_current_parent = current.parent) === null || _current_parent === void 0 ? void 0 : _current_parent.name) === 'PatternProperty' && ((_current_nextSibling = current.nextSibling) === null || _current_nextSibling === void 0 ? void 0 : _current_nextSibling.name) !== ':') && !(current.name === 'PropertyDefinition' && ((_current_parent1 = current.parent) === null || _current_parent1 === void 0 ? void 0 : _current_parent1.name) === 'Property' && ((_current_nextSibling1 = current.nextSibling) === null || _current_nextSibling1 === void 0 ? void 0 : _current_nextSibling1.name) !== ':')){
                    current = current.parent;
                }
                if (!current) {
                    return null;
                }
                return {
                    from: current.from,
                    to: current.to,
                    containsSideEffects: containsSideEffects(state.doc, current)
                };
            }
        default:
            {
                // In other languages, just assume a token consisting entirely
                // of identifier-like characters is an identifier.
                if (node.to - node.from > 50 || /[^\w_\-$]/.test(state.sliceDoc(node.from, node.to))) {
                    return null;
                }
                return {
                    from: node.from,
                    to: node.to,
                    containsSideEffects: false
                };
            }
    }
}
function containsSideEffects(doc, root) {
    var containsSideEffects = false;
    root.toTree().iterate({
        enter: function enter(node) {
            switch(node.name){
                case 'AssignmentExpression':
                case 'CallExpression':
                    {
                        containsSideEffects = true;
                        return false;
                    }
                case 'ArithOp':
                    {
                        var op = doc.sliceString(root.from + node.from, root.from + node.to);
                        if (op === '++' || op === '--') {
                            containsSideEffects = true;
                            return false;
                        }
                        break;
                    }
            }
            return true;
        }
    });
    return containsSideEffects;
}
// Evaluated expression mark for pop-over
var evalExpressionMark = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.Decoration.mark({
    class: 'cm-evaluatedExpression'
});
var evalExpression = defineStatefulDecoration();
// Styling for plugin-local elements
var theme = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_11__.EditorView.baseTheme({
    '.cm-gutters .cm-gutter.cm-lineNumbers .cm-gutterElement': {
        '&:hover, &.cm-breakpoint': {
            borderStyle: 'solid',
            borderWidth: '1px 4px 1px 1px',
            marginRight: '-4px',
            paddingLeft: '8px',
            // Make sure text doesn't move down due to the border above it.
            lineHeight: 'calc(1.2em - 2px)',
            position: 'relative'
        },
        '&:hover': {
            WebkitBorderImage: lineNumberArrow('#ebeced', '#ebeced')
        },
        '&.cm-breakpoint': {
            color: '#fff',
            WebkitBorderImage: lineNumberArrow('#4285f4', '#1a73e8')
        },
        '&.cm-breakpoint-conditional': {
            WebkitBorderImage: lineNumberArrow('#f29900', '#e37400'),
            '&::before': {
                content: '"?"',
                position: 'absolute',
                top: 0,
                left: '1px'
            }
        },
        '&.cm-breakpoint-logpoint': {
            WebkitBorderImage: lineNumberArrow('#f439a0', '#d01884'),
            '&::before': {
                content: '"‥"',
                position: 'absolute',
                top: '-3px',
                left: '1px'
            }
        }
    },
    '&dark .cm-gutters .cm-gutter.cm-lineNumbers .cm-gutterElement': {
        '&:hover': {
            WebkitBorderImage: lineNumberArrow('#3c4043', '#3c4043')
        },
        '&.cm-breakpoint': {
            WebkitBorderImage: lineNumberArrow('#5186EC', '#1a73e8')
        },
        '&.cm-breakpoint-conditional': {
            WebkitBorderImage: lineNumberArrow('#e9a33a', '#e37400')
        },
        '&.cm-breakpoint-logpoint': {
            WebkitBorderImage: lineNumberArrow('#E54D9B', '#d01884')
        }
    },
    ':host-context(.breakpoints-deactivated) & .cm-gutters .cm-gutter.cm-lineNumbers .cm-gutterElement.cm-breakpoint, .cm-gutters .cm-gutter.cm-lineNumbers .cm-gutterElement.cm-breakpoint-disabled': {
        color: '#1a73e8',
        WebkitBorderImage: lineNumberArrow('#d9e7fd', '#1a73e8'),
        '&.cm-breakpoint-conditional': {
            color: '#e37400',
            WebkitBorderImage: lineNumberArrow('#fcebcc', '#e37400')
        },
        '&.cm-breakpoint-logpoint': {
            color: '#d01884',
            WebkitBorderImage: lineNumberArrow('#fdd7ec', '#f439a0')
        }
    },
    ':host-context(.breakpoints-deactivated) &dark .cm-gutters .cm-gutter.cm-lineNumbers .cm-gutterElement.cm-breakpoint, &dark .cm-gutters .cm-gutter.cm-lineNumbers .cm-gutterElement.cm-breakpoint-disabled': {
        WebkitBorderImage: lineNumberArrow('#2a384e', '#1a73e8'),
        '&.cm-breakpoint-conditional': {
            WebkitBorderImage: lineNumberArrow('#4d3c1d', '#e37400')
        },
        '&.cm-breakpoint-logpoint': {
            WebkitBorderImage: lineNumberArrow('#4e283d', '#f439a0')
        }
    },
    '.cm-inlineBreakpoint': {
        cursor: 'pointer',
        position: 'relative',
        top: '1px',
        content: inlineBreakpointArrow('#4285F4', '#1A73E8'),
        height: '10px',
        '&.cm-inlineBreakpoint-conditional': {
            content: inlineConditionalBreakpointArrow('#F29900', '#E37400')
        },
        '&.cm-inlineBreakpoint-logpoint': {
            content: inlineLogpointArrow('#F439A0', '#D01884')
        }
    },
    '&dark .cm-inlineBreakpoint': {
        content: inlineBreakpointArrow('#5186EC', '#1A73E8'),
        '&.cm-inlineBreakpoint-conditional': {
            content: inlineConditionalBreakpointArrow('#e9a33a', '#E37400')
        },
        '&.cm-inlineBreakpoint-logpoint': {
            content: inlineLogpointArrow('#E54D9B', '#D01884')
        }
    },
    ':host-context(.breakpoints-deactivated) & .cm-inlineBreakpoint, .cm-inlineBreakpoint-disabled': {
        content: inlineBreakpointArrow('#4285F4', '#1A73E8', '0.2'),
        '&.cm-inlineBreakpoint-conditional': {
            content: inlineConditionalBreakpointArrow('#F9AB00', '#E37400', '0.2')
        },
        '&.cm-inlineBreakpoint-logpoint': {
            content: inlineLogpointArrow('#F439A0', '#D01884', '0.2')
        }
    },
    '.cm-executionLine': {
        backgroundColor: 'var(--sys-color-yellow-container)',
        outline: '1px solid var(--sys-color-yellow-outline)',
        '.cm-hasContinueMarkers &': {
            backgroundColor: 'transparent'
        },
        '&.cm-highlightedLine': {
            animation: 'cm-fading-highlight-execution 2s 0s'
        },
        '&.cm-line::selection, &.cm-line ::selection': {
            backgroundColor: 'var(--sys-color-tonal-container) !important'
        }
    },
    '.cm-executionToken': {
        backgroundColor: 'var(--sys-color-state-focus-select)'
    },
    '@keyframes cm-fading-highlight-execution': {
        from: {
            backgroundColor: 'var(--sys-color-tonal-container)'
        },
        to: {
            backgroundColor: 'var(--sys-color-yellow-container)'
        }
    },
    '.cm-continueToLocation': {
        cursor: 'pointer',
        backgroundColor: 'var(--color-continue-to-location)',
        '&:hover': {
            backgroundColor: 'var(--color-continue-to-location-hover)',
            border: '1px solid var(--color-continue-to-location-hover-border)',
            margin: '0 -1px'
        },
        '&.cm-continueToLocation-async': {
            backgroundColor: 'var(--color-continue-to-location-async)',
            '&:hover': {
                backgroundColor: 'var(--color-continue-to-location-async-hover)',
                border: '1px solid var(--color-continue-to-location-async-hover-border)',
                margin: '0 -1px'
            }
        }
    },
    '.cm-evaluatedExpression': {
        backgroundColor: 'var(--color-evaluated-expression)',
        border: '1px solid var(--color-evaluated-expression-border)',
        margin: '0 -1px'
    },
    '.cm-variableValues': {
        display: 'inline',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '1000px',
        opacity: '80%',
        backgroundColor: 'var(--color-variable-values)',
        marginLeft: '10px',
        padding: '0 5px',
        userSelect: 'text',
        '.cm-executionLine &': {
            backgroundColor: 'transparent',
            opacity: '50%'
        }
    }
});
function lineNumberArrow(color, outline) {
    return 'url(\'data:image/svg+xml,<svg height="11" width="26" xmlns="http://www.w3.org/2000/svg"><path d="M22.8.5l2.7 5-2.7 5H.5V.5z" fill="'.concat(encodeURIComponent(color), '" stroke="').concat(encodeURIComponent(outline), "\"/></svg>') 1 3 1 1");
}
function inlineBreakpointArrow(color, outline) {
    var opacity = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '1';
    return 'url(\'data:image/svg+xml,<svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5H5.80139C6.29382 0.5 6.7549 0.741701 7.03503 1.14669L10.392 6L7.03503 10.8533C6.7549 11.2583 6.29382 11.5 5.80139 11.5H0.5V0.5Z" fill="'.concat(encodeURIComponent(color), '" stroke="').concat(encodeURIComponent(outline), '" fill-opacity="').concat(encodeURIComponent(opacity), "\"/></svg>')");
}
function inlineConditionalBreakpointArrow(color, outline) {
    var opacity = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '1';
    return 'url(\'data:image/svg+xml,<svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5H5.80139C6.29382 0.5 6.75489 0.741701 7.03503 1.14669L10.392 6L7.03503 10.8533C6.75489 11.2583 6.29382 11.5 5.80138 11.5H0.5V0.5Z" fill="'.concat(encodeURIComponent(color), '" fill-opacity="').concat(encodeURIComponent(opacity), '" stroke="').concat(encodeURIComponent(outline), '"/><path d="M3.51074 7.75635H4.68408V9H3.51074V7.75635ZM4.68408 7.23779H3.51074V6.56104C3.51074 6.271 3.55615 6.02344 3.64697 5.81836C3.73779 5.61328 3.90039 5.39648 4.13477 5.16797L4.53027 4.77686C4.71484 4.59814 4.83936 4.4502 4.90381 4.33301C4.97119 4.21582 5.00488 4.09424 5.00488 3.96826C5.00488 3.77197 4.9375 3.62402 4.80273 3.52441C4.66797 3.4248 4.46582 3.375 4.19629 3.375C3.9502 3.375 3.69238 3.42773 3.42285 3.5332C3.15625 3.63574 2.88232 3.78955 2.60107 3.99463V2.81689C2.88818 2.65283 3.17822 2.52979 3.47119 2.44775C3.76709 2.36279 4.06299 2.32031 4.35889 2.32031C4.95068 2.32031 5.41504 2.45801 5.75195 2.7334C6.08887 3.00879 6.25732 3.38818 6.25732 3.87158C6.25732 4.09424 6.20752 4.30225 6.10791 4.49561C6.0083 4.68604 5.8208 4.91602 5.54541 5.18555L5.15869 5.56348C4.95947 5.75684 4.83203 5.91504 4.77637 6.03809C4.7207 6.16113 4.69287 6.31201 4.69287 6.49072C4.69287 6.51709 4.69141 6.54785 4.68848 6.58301C4.68848 6.61816 4.68701 6.65625 4.68408 6.69727V7.23779Z" fill="white"/></svg>\')');
}
function inlineLogpointArrow(color, outline) {
    var opacity = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '1';
    return 'url(\'data:image/svg+xml,<svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5H5.80139C6.29382 0.5 6.7549 0.741701 7.03503 1.14669L10.392 6L7.03503 10.8533C6.7549 11.2583 6.29382 11.5 5.80139 11.5H0.5V0.5Z" fill="'.concat(encodeURIComponent(color), '" stroke="').concat(encodeURIComponent(outline), '" fill-opacity="').concat(encodeURIComponent(opacity), '"/><circle cx="3" cy="6" r="1" fill="white"/><circle cx="7" cy="6" r="1" fill="white"/></svg>\')');
} //# sourceMappingURL=DebuggerPlugin.js.map


}),
"./panels/sources/EditingLocationHistoryManager.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  EditingLocationHistoryManager: function() { return EditingLocationHistoryManager; },
  HistoryDepth: function() { return HistoryDepth; }
});
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/*
 * Copyright (C) 2014 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ function _class_call_check(instance, Constructor) {
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


var HistoryDepth = 20;
var EditingLocationHistoryManager = /*#__PURE__*/ function() {
    "use strict";
    function EditingLocationHistoryManager(sourcesView) {
        _class_call_check(this, EditingLocationHistoryManager);
        _define_property(this, "sourcesView", void 0);
        _define_property(this, "entries", []);
        _define_property(this, "current", -1);
        _define_property(this, "revealing", false);
        this.sourcesView = sourcesView;
    }
    _create_class(EditingLocationHistoryManager, [
        {
            key: "trackSourceFrameCursorJumps",
            value: function trackSourceFrameCursorJumps(sourceFrame) {
                var _this = this;
                sourceFrame.addEventListener("EditorUpdate" /* SourceFrame.SourceFrame.Events.EditorUpdate */ , function(event) {
                    return _this.onEditorUpdate(event.data, sourceFrame);
                });
            }
        },
        {
            key: "onEditorUpdate",
            value: function onEditorUpdate(update, sourceFrame) {
                if (update.docChanged) {
                    this.mapEntriesFor(sourceFrame.uiSourceCode(), update.changes);
                }
                var prevPos = update.startState.selection.main;
                var newPos = update.state.selection.main;
                var isJump = !this.revealing && prevPos.anchor !== newPos.anchor && update.transactions.some(function(tr) {
                    return Boolean(tr.isUserEvent('select.pointer') || tr.isUserEvent('select.reveal') || tr.isUserEvent('select.search'));
                });
                if (isJump) {
                    this.updateCurrentState(sourceFrame.uiSourceCode(), prevPos.head);
                    if (this.entries.length > this.current + 1) {
                        this.entries.length = this.current + 1;
                    }
                    this.entries.push(new EditingLocationHistoryEntry(sourceFrame.uiSourceCode(), newPos.head));
                    this.current++;
                    if (this.entries.length > HistoryDepth) {
                        this.entries.shift();
                        this.current--;
                    }
                }
            }
        },
        {
            key: "updateCurrentState",
            value: function updateCurrentState(uiSourceCode, position) {
                if (!this.revealing) {
                    var top = this.current >= 0 ? this.entries[this.current] : null;
                    if (top === null || top === void 0 ? void 0 : top.matches(uiSourceCode)) {
                        top.position = position;
                    }
                }
            }
        },
        {
            key: "mapEntriesFor",
            value: function mapEntriesFor(uiSourceCode, change) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var entry = _step.value;
                        if (entry.matches(uiSourceCode)) {
                            entry.position = change.mapPos(entry.position);
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
            }
        },
        {
            key: "reveal",
            value: function reveal(entry) {
                var uiSourceCode = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_0__.Workspace.WorkspaceImpl.instance().uiSourceCode(entry.projectId, entry.url);
                if (uiSourceCode) {
                    this.revealing = true;
                    this.sourcesView.showSourceLocation(uiSourceCode, entry.position, false, true);
                    this.revealing = false;
                }
            }
        },
        {
            key: "rollback",
            value: function rollback() {
                if (this.current > 0) {
                    this.current--;
                    this.reveal(this.entries[this.current]);
                }
            }
        },
        {
            key: "rollover",
            value: function rollover() {
                if (this.current < this.entries.length - 1) {
                    this.current++;
                    this.reveal(this.entries[this.current]);
                }
            }
        },
        {
            key: "removeHistoryForSourceCode",
            value: function removeHistoryForSourceCode(uiSourceCode) {
                for(var i = this.entries.length - 1; i >= 0; i--){
                    if (this.entries[i].matches(uiSourceCode)) {
                        this.entries.splice(i, 1);
                        if (this.current >= i) {
                            this.current--;
                        }
                    }
                }
            }
        }
    ]);
    return EditingLocationHistoryManager;
}();
var EditingLocationHistoryEntry = /*#__PURE__*/ function() {
    "use strict";
    function EditingLocationHistoryEntry(uiSourceCode, position) {
        _class_call_check(this, EditingLocationHistoryEntry);
        _define_property(this, "projectId", void 0);
        _define_property(this, "url", void 0);
        _define_property(this, "position", void 0);
        this.projectId = uiSourceCode.project().id();
        this.url = uiSourceCode.url();
        this.position = position;
    }
    _create_class(EditingLocationHistoryEntry, [
        {
            key: "matches",
            value: function matches(uiSourceCode) {
                return this.url === uiSourceCode.url() && this.projectId === uiSourceCode.project().id();
            }
        }
    ]);
    return EditingLocationHistoryEntry;
} //# sourceMappingURL=EditingLocationHistoryManager.js.map
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
"./panels/sources/SourcesPanel.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ActionDelegate: function() { return ActionDelegate; },
  DebuggerLocationRevealer: function() { return DebuggerLocationRevealer; },
  DebuggerPausedDetailsRevealer: function() { return DebuggerPausedDetailsRevealer; },
  QuickSourceView: function() { return QuickSourceView; },
  RevealingActionDelegate: function() { return RevealingActionDelegate; },
  SourcesPanel: function() { return SourcesPanel; },
  UILocationRangeRevealer: function() { return UILocationRangeRevealer; },
  UILocationRevealer: function() { return UILocationRevealer; },
  UISourceCodeRevealer: function() { return UISourceCodeRevealer; },
  lastModificationTimeout: function() { return lastModificationTimeout; },
  minToolbarWidth: function() { return minToolbarWidth; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/breakpoints/breakpoints.js */ "./models/breakpoints/breakpoints.js");
/* harmony import */var _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/extensions/extensions.js */ "./models/extensions/extensions.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/object_ui.js */ "./ui/legacy/components/object_ui/object_ui.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _snippets_snippets_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../snippets/snippets.js */ "./panels/snippets/snippets.js");
/* harmony import */var _CallStackSidebarPane_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./CallStackSidebarPane.js */ "./panels/sources/CallStackSidebarPane.js");
/* harmony import */var _DebuggerPausedMessage_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./DebuggerPausedMessage.js */ "./panels/sources/DebuggerPausedMessage.js");
/* harmony import */var _NavigatorView_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./NavigatorView.js */ "./panels/sources/NavigatorView.js");
/* harmony import */var _sourcesPanel_css_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sourcesPanel.css.js */ "./panels/sources/sourcesPanel.css.js");
/* harmony import */var _SourcesView_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./SourcesView.js */ "./panels/sources/SourcesView.js");
/* harmony import */var _ThreadsSidebarPane_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ThreadsSidebarPane.js */ "./panels/sources/ThreadsSidebarPane.js");
/* harmony import */var _UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./UISourceCodeFrame.js */ "./panels/sources/UISourceCodeFrame.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * Copyright (C) 2008 Apple Inc. All Rights Reserved.
 * Copyright (C) 2011 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE INC. ``AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE INC. OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ function _assert_this_initialized(self) {
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
function _class_check_private_static_field_descriptor(descriptor, action) {
    if (descriptor === undefined) {
        throw new TypeError("attempted to " + action + " private static field before its declaration");
    }
}
function _class_static_private_field_spec_get(receiver, classConstructor, descriptor) {
    _class_check_private_static_access(receiver, classConstructor);
    _class_check_private_static_field_descriptor(descriptor, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_static_private_field_spec_set(receiver, classConstructor, descriptor, value) {
    _class_check_private_static_access(receiver, classConstructor);
    _class_check_private_static_field_descriptor(descriptor, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
function _class_check_private_static_access(receiver, classConstructor) {
    if (receiver !== classConstructor) {
        throw new TypeError("Private static access of wrong provenance");
    }
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






















var UIStrings = {
    /**
     *@description Text that appears when user drag and drop something (for example, a file) in Sources Panel of the Sources panel
     */ dropWorkspaceFolderHere: 'Drop workspace folder here',
    /**
     *@description Text to show more options
     */ moreOptions: 'More options',
    /**
     * @description Tooltip for the the navigator toggle in the Sources panel. Command to open/show the
     * sidebar containing the navigator tool.
     */ showNavigator: 'Show navigator',
    /**
     * @description Tooltip for the the navigator toggle in the Sources panel. Command to close/hide
     * the sidebar containing the navigator tool.
     */ hideNavigator: 'Hide navigator',
    /**
     * @description Screen reader announcement when the navigator sidebar is shown in the Sources panel.
     */ navigatorShown: 'Navigator sidebar shown',
    /**
     * @description Screen reader announcement when the navigator sidebar is hidden in the Sources panel.
     */ navigatorHidden: 'Navigator sidebar hidden',
    /**
     * @description Screen reader announcement when the navigator sidebar is shown in the Sources panel.
     */ debuggerShown: 'Debugger sidebar shown',
    /**
     * @description Screen reader announcement when the navigator sidebar is hidden in the Sources panel.
     */ debuggerHidden: 'Debugger sidebar hidden',
    /**
     * @description Tooltip for the the debugger toggle in the Sources panel. Command to open/show the
     * sidebar containing the debugger tool.
     */ showDebugger: 'Show debugger',
    /**
     * @description Tooltip for the the debugger toggle in the Sources panel. Command to close/hide the
     * sidebar containing the debugger tool.
     */ hideDebugger: 'Hide debugger',
    /**
     *@description Text in Sources Panel of the Sources panel
     */ groupByFolder: 'Group by folder',
    /**
     *@description Text in Sources Panel of the Sources panel
     */ groupByAuthored: 'Group by Authored/Deployed',
    /**
     *@description Text in Sources Panel of the Sources panel
     */ hideIgnoreListed: 'Hide ignore-listed sources',
    /**
     *@description Tooltip text that appears when hovering over the largeicon play button in the Sources Panel of the Sources panel
     */ resumeWithAllPausesBlockedForMs: 'Resume with all pauses blocked for 500 ms',
    /**
     *@description Tooltip text that appears when hovering over the largeicon terminate execution button in the Sources Panel of the Sources panel
     */ terminateCurrentJavascriptCall: 'Terminate current JavaScript call',
    /**
     *@description Text in Sources Panel of the Sources panel
     */ pauseOnCaughtExceptions: 'Pause on caught exceptions',
    /**
     *@description A context menu item in the Sources Panel of the Sources panel
     */ revealInSidebar: 'Reveal in navigator sidebar',
    /**
     *@description A context menu item in the Sources Panel of the Sources panel when debugging JS code.
     * When clicked, the execution is resumed until it reaches the line specified by the right-click that
     * opened the context menu.
     */ continueToHere: 'Continue to here',
    /**
     *@description A context menu item in the Console that stores selection as a temporary global variable
     */ storeAsGlobalVariable: 'Store as global variable',
    /**
     *@description A context menu item in the Console, Sources, and Network panel
     *@example {string} PH1
     */ copyS: 'Copy {PH1}',
    /**
     *@description A context menu item for strings in the Console, Sources, and Network panel.
     * When clicked, the raw contents of the string is copied to the clipboard.
     */ copyStringContents: 'Copy string contents',
    /**
     *@description A context menu item for strings in the Console, Sources, and Network panel.
     * When clicked, the string is copied to the clipboard as a valid JavaScript literal.
     */ copyStringAsJSLiteral: 'Copy string as JavaScript literal',
    /**
     *@description A context menu item for strings in the Console, Sources, and Network panel.
     * When clicked, the string is copied to the clipboard as a valid JSON literal.
     */ copyStringAsJSONLiteral: 'Copy string as JSON literal',
    /**
     *@description A context menu item in the Sources Panel of the Sources panel
     */ showFunctionDefinition: 'Show function definition',
    /**
     *@description Text in Sources Panel of the Sources panel
     */ openInSourcesPanel: 'Open in Sources panel'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/sources/SourcesPanel.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var primitiveRemoteObjectTypes = new Set([
    'number',
    'boolean',
    'bigint',
    'undefined'
]);
var sourcesPanelInstance;
var SourcesPanel = /*#__PURE__*/ function(_UI_Panel_Panel) {
    "use strict";
    _inherits(SourcesPanel, _UI_Panel_Panel);
    var _super = _create_super(SourcesPanel);
    function SourcesPanel() {
        _class_call_check(this, SourcesPanel);
        var _this;
        _this = _super.call(this, 'sources');
        _define_property(_assert_this_initialized(_this), "workspace", void 0);
        _define_property(_assert_this_initialized(_this), "togglePauseAction", void 0);
        _define_property(_assert_this_initialized(_this), "stepOverAction", void 0);
        _define_property(_assert_this_initialized(_this), "stepIntoAction", void 0);
        _define_property(_assert_this_initialized(_this), "stepOutAction", void 0);
        _define_property(_assert_this_initialized(_this), "stepAction", void 0);
        _define_property(_assert_this_initialized(_this), "toggleBreakpointsActiveAction", void 0);
        _define_property(_assert_this_initialized(_this), "debugToolbar", void 0);
        _define_property(_assert_this_initialized(_this), "debugToolbarDrawer", void 0);
        _define_property(_assert_this_initialized(_this), "debuggerPausedMessage", void 0);
        _define_property(_assert_this_initialized(_this), "overlayLoggables", void 0);
        _define_property(_assert_this_initialized(_this), "splitWidget", void 0);
        _define_property(_assert_this_initialized(_this), "editorView", void 0);
        _define_property(_assert_this_initialized(_this), "navigatorTabbedLocation", void 0);
        _define_property(_assert_this_initialized(_this), "sourcesViewInternal", void 0);
        _define_property(_assert_this_initialized(_this), "toggleNavigatorSidebarButton", void 0);
        _define_property(_assert_this_initialized(_this), "toggleDebuggerSidebarButton", void 0);
        _define_property(_assert_this_initialized(_this), "threadsSidebarPane", void 0);
        _define_property(_assert_this_initialized(_this), "watchSidebarPane", void 0);
        _define_property(_assert_this_initialized(_this), "callstackPane", void 0);
        _define_property(_assert_this_initialized(_this), "liveLocationPool", void 0);
        _define_property(_assert_this_initialized(_this), "lastModificationTime", void 0);
        _define_property(_assert_this_initialized(_this), "pausedInternal", void 0);
        _define_property(_assert_this_initialized(_this), "switchToPausedTargetTimeout", void 0);
        _define_property(_assert_this_initialized(_this), "ignoreExecutionLineEvents", void 0);
        _define_property(_assert_this_initialized(_this), "executionLineLocation", void 0);
        _define_property(_assert_this_initialized(_this), "pauseOnExceptionButton", void 0);
        _define_property(_assert_this_initialized(_this), "sidebarPaneStack", void 0);
        _define_property(_assert_this_initialized(_this), "tabbedLocationHeader", void 0);
        _define_property(_assert_this_initialized(_this), "extensionSidebarPanesContainer", void 0);
        _define_property(_assert_this_initialized(_this), "sidebarPaneView", void 0);
        new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.DropTarget.DropTarget(_this.element, [
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.DropTarget.Type.Folder
        ], i18nString(UIStrings.dropWorkspaceFolderHere), _this.handleDrop.bind(_assert_this_initialized(_this)));
        _this.workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_9__.Workspace.WorkspaceImpl.instance();
        _this.togglePauseAction = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.ActionRegistry.ActionRegistry.instance().getAction('debugger.toggle-pause');
        _this.stepOverAction = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.ActionRegistry.ActionRegistry.instance().getAction('debugger.step-over');
        _this.stepIntoAction = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.ActionRegistry.ActionRegistry.instance().getAction('debugger.step-into');
        _this.stepOutAction = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.ActionRegistry.ActionRegistry.instance().getAction('debugger.step-out');
        _this.stepAction = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.ActionRegistry.ActionRegistry.instance().getAction('debugger.step');
        _this.toggleBreakpointsActiveAction = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.ActionRegistry.ActionRegistry.instance().getAction('debugger.toggle-breakpoints-active');
        _this.debugToolbar = _this.createDebugToolbar();
        _this.debugToolbarDrawer = _this.createDebugToolbarDrawer();
        _this.debuggerPausedMessage = new _DebuggerPausedMessage_js__WEBPACK_IMPORTED_MODULE_16__.DebuggerPausedMessage();
        var initialDebugSidebarWidth = 225;
        _this.splitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.SplitWidget.SplitWidget(true, true, 'sources-panel-split-view-state', initialDebugSidebarWidth);
        _this.splitWidget.enableShowModeSaving();
        _this.splitWidget.show(_this.element);
        // Create scripts navigator
        var initialNavigatorWidth = 225;
        _this.editorView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.SplitWidget.SplitWidget(true, false, 'sources-panel-navigator-split-view-state', initialNavigatorWidth);
        _this.editorView.enableShowModeSaving();
        _this.splitWidget.setMainWidget(_this.editorView);
        // Create navigator tabbed pane with toolbar.
        _this.navigatorTabbedLocation = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.ViewManager.ViewManager.instance().createTabbedLocation(_this.revealNavigatorSidebar.bind(_assert_this_initialized(_this)), 'navigator-view', true, true);
        var tabbedPane = _this.navigatorTabbedLocation.tabbedPane();
        tabbedPane.setMinimumSize(100, 25);
        tabbedPane.element.classList.add('navigator-tabbed-pane');
        tabbedPane.headerElement().setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.toolbar('navigator').track({
            keydown: 'ArrowUp|ArrowLeft|ArrowDown|ArrowRight|Enter|Space'
        })));
        var navigatorMenuButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Toolbar.ToolbarMenuButton(_this.populateNavigatorMenu.bind(_assert_this_initialized(_this)), /* isIconDropdown */ true, /* useSoftMenu */ true, 'more-options');
        navigatorMenuButton.setGlyph('dots-vertical');
        navigatorMenuButton.setTitle(i18nString(UIStrings.moreOptions));
        tabbedPane.rightToolbar().appendToolbarItem(navigatorMenuButton);
        tabbedPane.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.TabbedPane.Events.TabSelected, function(param) {
            var tabId = param.data.tabId;
            return _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.sourcesSidebarTabShown(tabId);
        });
        if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.ViewManager.ViewManager.instance().hasViewsForLocation('run-view-sidebar')) {
            var navigatorSplitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.SplitWidget.SplitWidget(false, true, 'source-panel-navigator-sidebar-split-view-state');
            navigatorSplitWidget.setMainWidget(tabbedPane);
            var runViewTabbedPane = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.ViewManager.ViewManager.instance().createTabbedLocation(_this.revealNavigatorSidebar.bind(_this), 'run-view-sidebar').tabbedPane();
            navigatorSplitWidget.setSidebarWidget(runViewTabbedPane);
            navigatorSplitWidget.installResizer(runViewTabbedPane.headerElement());
            _this.editorView.setSidebarWidget(navigatorSplitWidget);
        } else {
            _this.editorView.setSidebarWidget(tabbedPane);
        }
        _this.sourcesViewInternal = new _SourcesView_js__WEBPACK_IMPORTED_MODULE_19__.SourcesView();
        _this.sourcesViewInternal.addEventListener("EditorSelected" /* Events.EditorSelected */ , _this.editorSelected.bind(_assert_this_initialized(_this)));
        _this.toggleNavigatorSidebarButton = _this.editorView.createShowHideSidebarButton(i18nString(UIStrings.showNavigator), i18nString(UIStrings.hideNavigator), i18nString(UIStrings.navigatorShown), i18nString(UIStrings.navigatorHidden), 'navigator');
        _this.toggleDebuggerSidebarButton = _this.splitWidget.createShowHideSidebarButton(i18nString(UIStrings.showDebugger), i18nString(UIStrings.hideDebugger), i18nString(UIStrings.debuggerShown), i18nString(UIStrings.debuggerHidden), 'debugger');
        _this.editorView.setMainWidget(_this.sourcesViewInternal);
        _this.threadsSidebarPane = null;
        _this.watchSidebarPane = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.ViewManager.ViewManager.instance().view('sources.watch');
        _this.callstackPane = _CallStackSidebarPane_js__WEBPACK_IMPORTED_MODULE_15__.CallStackSidebarPane.instance();
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('sidebar-position').addChangeListener(_this.updateSidebarPosition.bind(_assert_this_initialized(_this)));
        _this.updateSidebarPosition();
        void _this.updateDebuggerButtonsAndStatus();
        _this.liveLocationPool = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.LiveLocation.LiveLocationPool();
        _this.setTarget(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Target));
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('breakpoints-active').addChangeListener(_this.breakpointsActiveStateChanged, _assert_this_initialized(_this));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Target, _this.onCurrentTargetChanged, _assert_this_initialized(_this));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.CallFrame, _this.callFrameChanged, _assert_this_initialized(_this));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.DebuggerModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.Events.DebuggerWasEnabled, _this.debuggerWasEnabled, _assert_this_initialized(_this));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.DebuggerModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.Events.DebuggerPaused, _this.debuggerPaused, _assert_this_initialized(_this));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.DebuggerModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.Events.DebugInfoAttached, _this.debugInfoAttached, _assert_this_initialized(_this));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.DebuggerModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.Events.DebuggerResumed, function(event) {
            return _this.debuggerResumed(event.data);
        });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.DebuggerModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.Events.GlobalObjectCleared, function(event) {
            return _this.debuggerResumed(event.data);
        });
        _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_8__.ExtensionServer.ExtensionServer.instance().addEventListener("SidebarPaneAdded" /* Extensions.ExtensionServer.Events.SidebarPaneAdded */ , _this.extensionSidebarPaneAdded, _assert_this_initialized(_this));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().observeTargets(_assert_this_initialized(_this));
        _this.lastModificationTime = -Infinity;
        return _this;
    }
    _create_class(SourcesPanel, [
        {
            key: "targetAdded",
            value: function targetAdded(_target) {
                this.showThreadsIfNeeded();
            }
        },
        {
            key: "targetRemoved",
            value: function targetRemoved(_target) {}
        },
        {
            key: "showThreadsIfNeeded",
            value: function showThreadsIfNeeded() {
                if (_ThreadsSidebarPane_js__WEBPACK_IMPORTED_MODULE_20__.ThreadsSidebarPane.shouldBeShown() && !this.threadsSidebarPane) {
                    this.threadsSidebarPane = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.ViewManager.ViewManager.instance().view('sources.threads');
                    if (this.sidebarPaneStack && this.threadsSidebarPane) {
                        this.sidebarPaneStack.appendView(this.threadsSidebarPane, this.splitWidget.isVertical() ? this.watchSidebarPane : this.callstackPane);
                    }
                }
            }
        },
        {
            key: "setTarget",
            value: function setTarget(target) {
                if (!target) {
                    return;
                }
                var debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.DebuggerModel);
                if (!debuggerModel) {
                    return;
                }
                if (debuggerModel.isPaused()) {
                    this.showDebuggerPausedDetails(debuggerModel.debuggerPausedDetails());
                } else {
                    this.pausedInternal = false;
                    this.clearInterface();
                    this.toggleDebuggerSidebarButton.setEnabled(true);
                }
            }
        },
        {
            key: "onCurrentTargetChanged",
            value: function onCurrentTargetChanged(param) {
                var target = param.data;
                this.setTarget(target);
            }
        },
        {
            key: "paused",
            value: function paused() {
                return this.pausedInternal || false;
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Context.Context.instance().setFlavor(SourcesPanel, this);
                this.registerCSSFiles([
                    _sourcesPanel_css_js__WEBPACK_IMPORTED_MODULE_18__["default"]
                ]);
                _get(_get_prototype_of(SourcesPanel.prototype), "wasShown", this).call(this);
                if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Context.Context.instance().flavor(QuickSourceView)) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.InspectorView.InspectorView.instance().setDrawerMinimized(true);
                    SourcesPanel.updateResizerAndSidebarButtons(this);
                }
                this.editorView.setMainWidget(this.sourcesViewInternal);
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                _get(_get_prototype_of(SourcesPanel.prototype), "willHide", this).call(this);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Context.Context.instance().setFlavor(SourcesPanel, null);
                var wrapperView = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Context.Context.instance().flavor(QuickSourceView);
                if (wrapperView) {
                    wrapperView.showViewInWrapper();
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.InspectorView.InspectorView.instance().setDrawerMinimized(false);
                    SourcesPanel.updateResizerAndSidebarButtons(this);
                }
            }
        },
        {
            key: "resolveLocation",
            value: function resolveLocation(locationName) {
                if (locationName === 'sources.sidebar-top' || locationName === 'sources.sidebar-bottom' || locationName === 'sources.sidebar-tabs') {
                    return this.sidebarPaneStack || null;
                }
                return this.navigatorTabbedLocation;
            }
        },
        {
            key: "ensureSourcesViewVisible",
            value: function ensureSourcesViewVisible() {
                if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Context.Context.instance().flavor(QuickSourceView)) {
                    return true;
                }
                if (!_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.InspectorView.InspectorView.instance().canSelectPanel('sources')) {
                    return false;
                }
                void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.ViewManager.ViewManager.instance().showView('sources');
                return true;
            }
        },
        {
            key: "onResize",
            value: function onResize() {
                if (_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('sidebar-position').get() === 'auto') {
                    this.element.window().requestAnimationFrame(this.updateSidebarPosition.bind(this));
                } // Do not force layout.
            }
        },
        {
            key: "searchableView",
            value: function searchableView() {
                return this.sourcesViewInternal.searchableView();
            }
        },
        {
            key: "toggleNavigatorSidebar",
            value: function toggleNavigatorSidebar() {
                this.editorView.toggleSidebar();
            }
        },
        {
            key: "toggleDebuggerSidebar",
            value: function toggleDebuggerSidebar() {
                this.splitWidget.toggleSidebar();
            }
        },
        {
            key: "debuggerPaused",
            value: function debuggerPaused(event) {
                var debuggerModel = event.data;
                var details = debuggerModel.debuggerPausedDetails();
                if (!this.pausedInternal && _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('auto-focus-on-debugger-paused-enabled').get()) {
                    void this.setAsCurrentPanel();
                }
                if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Target) === debuggerModel.target()) {
                    this.showDebuggerPausedDetails(details);
                } else if (!this.pausedInternal) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Target, debuggerModel.target());
                }
            }
        },
        {
            key: "debugInfoAttached",
            value: function debugInfoAttached(event) {
                var debuggerModel = event.data.debuggerModel;
                if (!debuggerModel.isPaused()) {
                    return;
                }
                var details = debuggerModel.debuggerPausedDetails();
                if (details && _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Target) === debuggerModel.target()) {
                    this.showDebuggerPausedDetails(details);
                }
            }
        },
        {
            key: "showDebuggerPausedDetails",
            value: function showDebuggerPausedDetails(details) {
                var _UI_Context_Context_instance_flavor;
                this.pausedInternal = true;
                void this.updateDebuggerButtonsAndStatus();
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.DebuggerPausedDetails, details);
                this.toggleDebuggerSidebarButton.setEnabled(false);
                this.revealDebuggerSidebar();
                window.focus();
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.bringToFront();
                var withOverlay = ((_UI_Context_Context_instance_flavor = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Target)) === null || _UI_Context_Context_instance_flavor === void 0 ? void 0 : _UI_Context_Context_instance_flavor.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.OverlayModel.OverlayModel)) && !_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('disable-paused-state-overlay').get();
                if (withOverlay && !this.overlayLoggables) {
                    this.overlayLoggables = {
                        debuggerPausedMessage: {},
                        resumeButton: {},
                        stepOverButton: {}
                    };
                    _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.registerLoggable(this.overlayLoggables.debuggerPausedMessage, "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.dialog('debugger-paused')), null);
                    _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.registerLoggable(this.overlayLoggables.resumeButton, "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.action('debugger.toggle-pause')), this.overlayLoggables.debuggerPausedMessage);
                    _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.registerLoggable(this.overlayLoggables.stepOverButton, "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.action('debugger.step-over')), this.overlayLoggables.debuggerPausedMessage);
                }
            }
        },
        {
            key: "maybeLogOverlayAction",
            value: function maybeLogOverlayAction() {
                var _this = this;
                if (!this.overlayLoggables) {
                    return;
                }
                var byOverlayButton = !document.hasFocus();
                // In the overlary we show two buttons: resume and step over. Both trigger
                // the Debugger.resumed event. The latter however will trigger
                // Debugger.paused shortly after, while the former won't. Here we guess
                // which one was clicked by checking if we are paused again after 0.5s.
                window.setTimeout(function() {
                    if (!_this.overlayLoggables) {
                        return;
                    }
                    if (byOverlayButton) {
                        var details = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.DebuggerPausedDetails);
                        _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.logClick(_this.pausedInternal && (details === null || details === void 0 ? void 0 : details.reason) === "step" /* Protocol.Debugger.PausedEventReason.Step */  ? _this.overlayLoggables.stepOverButton : _this.overlayLoggables.resumeButton, new MouseEvent('click'));
                    }
                    if (!_this.pausedInternal) {
                        _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.logResize(_this.overlayLoggables.debuggerPausedMessage, new DOMRect(0, 0, 0, 0));
                        _this.overlayLoggables = undefined;
                    }
                }, 500);
            }
        },
        {
            key: "debuggerResumed",
            value: function debuggerResumed(debuggerModel) {
                this.maybeLogOverlayAction();
                var target = debuggerModel.target();
                if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Target) !== target) {
                    return;
                }
                this.pausedInternal = false;
                this.clearInterface();
                this.toggleDebuggerSidebarButton.setEnabled(true);
                this.switchToPausedTargetTimeout = window.setTimeout(this.switchToPausedTarget.bind(this, debuggerModel), 500);
            }
        },
        {
            key: "debuggerWasEnabled",
            value: function debuggerWasEnabled(event) {
                var debuggerModel = event.data;
                if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Target) !== debuggerModel.target()) {
                    return;
                }
                void this.updateDebuggerButtonsAndStatus();
            }
        },
        {
            key: "visibleView",
            get: function get() {
                return this.sourcesViewInternal.visibleView();
            }
        },
        {
            key: "showUISourceCode",
            value: function showUISourceCode(uiSourceCode, location, omitFocus) {
                if (omitFocus) {
                    if (!this.isShowing() && !_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Context.Context.instance().flavor(QuickSourceView)) {
                        return;
                    }
                } else {
                    this.showEditor();
                }
                this.sourcesViewInternal.showSourceLocation(uiSourceCode, location, omitFocus);
            }
        },
        {
            key: "showEditor",
            value: function showEditor() {
                if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Context.Context.instance().flavor(QuickSourceView)) {
                    return;
                }
                void this.setAsCurrentPanel();
            }
        },
        {
            key: "showUILocation",
            value: function showUILocation(uiLocation, omitFocus) {
                var uiSourceCode = uiLocation.uiSourceCode, lineNumber = uiLocation.lineNumber, columnNumber = uiLocation.columnNumber;
                this.showUISourceCode(uiSourceCode, {
                    lineNumber: lineNumber,
                    columnNumber: columnNumber
                }, omitFocus);
            }
        },
        {
            key: "revealInNavigator",
            value: function revealInNavigator(uiSourceCode, skipReveal) {
                var _this = this;
                return _async_to_generator(function() {
                    var viewManager, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, view, navigatorView, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                viewManager = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.ViewManager.ViewManager.instance();
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    6,
                                    7,
                                    8
                                ]);
                                _iterator = viewManager.viewsForLocation("navigator-view" /* UI.ViewManager.ViewLocationValues.NAVIGATOR_VIEW */ )[Symbol.iterator]();
                                _state.label = 2;
                            case 2:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    5
                                ];
                                view = _step.value;
                                return [
                                    4,
                                    view.widget()
                                ];
                            case 3:
                                navigatorView = _state.sent();
                                if (_instanceof(navigatorView, _NavigatorView_js__WEBPACK_IMPORTED_MODULE_17__.NavigatorView) && navigatorView.acceptProject(uiSourceCode.project())) {
                                    navigatorView.revealUISourceCode(uiSourceCode, true);
                                    _this.navigatorTabbedLocation.tabbedPane().selectTab(view.viewId(), true);
                                    if (!skipReveal) {
                                        _this.editorView.showBoth(true);
                                        navigatorView.focus();
                                    }
                                    return [
                                        3,
                                        5
                                    ];
                                }
                                _state.label = 4;
                            case 4:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    2
                                ];
                            case 5:
                                return [
                                    3,
                                    8
                                ];
                            case 6:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    8
                                ];
                            case 7:
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 8:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "addExperimentMenuItem",
            value: function addExperimentMenuItem(menuSection, experiment, menuItem) {
                // menu handler
                function toggleExperiment() {
                    var checked = _core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.isEnabled(experiment);
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.setEnabled(experiment, !checked);
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.experimentChanged(experiment, checked);
                    // Need to signal to the NavigatorView that grouping has changed. Unfortunately,
                    // it can't listen to an experiment, and this class doesn't directly interact
                    // with it, so we will convince it a different grouping setting changed. When we switch
                    // from using an experiment to a setting, it will listen to that setting and we
                    // won't need to do this.
                    var groupByFolderSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('navigator-group-by-folder');
                    groupByFolderSetting.set(groupByFolderSetting.get());
                }
                menuSection.appendCheckboxItem(menuItem, toggleExperiment, {
                    checked: _core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.isEnabled(experiment),
                    additionalElement: _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_10__.Icon.create('experiment'),
                    jslogContext: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.toKebabCase(experiment)
                });
            }
        },
        {
            key: "populateNavigatorMenu",
            value: function populateNavigatorMenu(contextMenu) {
                var groupByFolderSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('navigator-group-by-folder');
                contextMenu.appendItemsAtLocation('navigatorMenu');
                contextMenu.viewSection().appendCheckboxItem(i18nString(UIStrings.groupByFolder), function() {
                    return groupByFolderSetting.set(!groupByFolderSetting.get());
                }, {
                    checked: groupByFolderSetting.get(),
                    jslogContext: groupByFolderSetting.name
                });
                this.addExperimentMenuItem(contextMenu.viewSection(), "authored-deployed-grouping" /* Root.Runtime.ExperimentName.AUTHORED_DEPLOYED_GROUPING */ , i18nString(UIStrings.groupByAuthored));
                this.addExperimentMenuItem(contextMenu.viewSection(), "just-my-code" /* Root.Runtime.ExperimentName.JUST_MY_CODE */ , i18nString(UIStrings.hideIgnoreListed));
            }
        },
        {
            key: "setIgnoreExecutionLineEvents",
            value: function setIgnoreExecutionLineEvents(ignoreExecutionLineEvents) {
                this.ignoreExecutionLineEvents = ignoreExecutionLineEvents;
            }
        },
        {
            key: "updateLastModificationTime",
            value: function updateLastModificationTime() {
                this.lastModificationTime = window.performance.now();
            }
        },
        {
            key: "executionLineChanged",
            value: function executionLineChanged(liveLocation) {
                var _this = this;
                return _async_to_generator(function() {
                    var uiLocation;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    liveLocation.uiLocation()
                                ];
                            case 1:
                                uiLocation = _state.sent();
                                if (liveLocation.isDisposed()) {
                                    return [
                                        2
                                    ];
                                }
                                if (!uiLocation) {
                                    return [
                                        2
                                    ];
                                }
                                if (window.performance.now() - _this.lastModificationTime < lastModificationTimeout) {
                                    return [
                                        2
                                    ];
                                }
                                _this.sourcesViewInternal.showSourceLocation(uiLocation.uiSourceCode, uiLocation, undefined, true);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "lastModificationTimeoutPassedForTest",
            value: function lastModificationTimeoutPassedForTest() {
                lastModificationTimeout = Number.MIN_VALUE;
            }
        },
        {
            key: "updateLastModificationTimeForTest",
            value: function updateLastModificationTimeForTest() {
                lastModificationTimeout = Number.MAX_VALUE;
            }
        },
        {
            key: "callFrameChanged",
            value: function callFrameChanged() {
                var _this = this;
                return _async_to_generator(function() {
                    var callFrame;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                callFrame = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.CallFrame);
                                if (!callFrame) {
                                    return [
                                        2
                                    ];
                                }
                                if (_this.executionLineLocation) {
                                    _this.executionLineLocation.dispose();
                                }
                                return [
                                    4,
                                    _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().createCallFrameLiveLocation(callFrame.location(), _this.executionLineChanged.bind(_this), _this.liveLocationPool)
                                ];
                            case 1:
                                _this.executionLineLocation = _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "updateDebuggerButtonsAndStatus",
            value: function updateDebuggerButtonsAndStatus() {
                var _this = this;
                return _async_to_generator(function() {
                    var currentTarget, currentDebuggerModel, details;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                currentTarget = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Target);
                                currentDebuggerModel = currentTarget ? currentTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.DebuggerModel) : null;
                                if (!currentDebuggerModel) {
                                    _this.togglePauseAction.setEnabled(false);
                                    _this.stepOverAction.setEnabled(false);
                                    _this.stepIntoAction.setEnabled(false);
                                    _this.stepOutAction.setEnabled(false);
                                    _this.stepAction.setEnabled(false);
                                } else if (_this.pausedInternal) {
                                    _this.togglePauseAction.setToggled(true);
                                    _this.togglePauseAction.setEnabled(true);
                                    _this.stepOverAction.setEnabled(true);
                                    _this.stepIntoAction.setEnabled(true);
                                    _this.stepOutAction.setEnabled(true);
                                    _this.stepAction.setEnabled(true);
                                } else {
                                    _this.togglePauseAction.setToggled(false);
                                    _this.togglePauseAction.setEnabled(!currentDebuggerModel.isPausing());
                                    _this.stepOverAction.setEnabled(false);
                                    _this.stepIntoAction.setEnabled(false);
                                    _this.stepOutAction.setEnabled(false);
                                    _this.stepAction.setEnabled(false);
                                }
                                details = currentDebuggerModel ? currentDebuggerModel.debuggerPausedDetails() : null;
                                return [
                                    4,
                                    _this.debuggerPausedMessage.render(details, _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance(), _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_7__.BreakpointManager.BreakpointManager.instance())
                                ];
                            case 1:
                                _state.sent();
                                if (details) {
                                    _this.updateDebuggerButtonsAndStatusForTest();
                                }
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "updateDebuggerButtonsAndStatusForTest",
            value: function updateDebuggerButtonsAndStatusForTest() {}
        },
        {
            key: "clearInterface",
            value: function clearInterface() {
                void this.updateDebuggerButtonsAndStatus();
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.DebuggerPausedDetails, null);
                if (this.switchToPausedTargetTimeout) {
                    clearTimeout(this.switchToPausedTargetTimeout);
                }
                this.liveLocationPool.disposeAll();
            }
        },
        {
            key: "switchToPausedTarget",
            value: function switchToPausedTarget(debuggerModel) {
                delete this.switchToPausedTargetTimeout;
                if (this.pausedInternal || debuggerModel.isPaused()) {
                    return;
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().models(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.DebuggerModel)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _$debuggerModel = _step.value;
                        if (_$debuggerModel.isPaused()) {
                            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Target, _$debuggerModel.target());
                            break;
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
            }
        },
        {
            key: "runSnippet",
            value: function runSnippet() {
                var uiSourceCode = this.sourcesViewInternal.currentUISourceCode();
                if (uiSourceCode) {
                    void _snippets_snippets_js__WEBPACK_IMPORTED_MODULE_14__.ScriptSnippetFileSystem.evaluateScriptSnippet(uiSourceCode);
                }
            }
        },
        {
            key: "editorSelected",
            value: function editorSelected(event) {
                var uiSourceCode = event.data;
                if (this.editorView.mainWidget() && _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('auto-reveal-in-navigator').get()) {
                    void this.revealInNavigator(uiSourceCode, true);
                }
            }
        },
        {
            key: "togglePause",
            value: function togglePause() {
                var target = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Target);
                if (!target) {
                    return true;
                }
                var debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.DebuggerModel);
                if (!debuggerModel) {
                    return true;
                }
                if (this.pausedInternal) {
                    this.pausedInternal = false;
                    debuggerModel.resume();
                } else {
                    // Make sure pauses didn't stick skipped.
                    debuggerModel.pause();
                }
                this.clearInterface();
                return true;
            }
        },
        {
            key: "prepareToResume",
            value: function prepareToResume() {
                if (!this.pausedInternal) {
                    return null;
                }
                this.pausedInternal = false;
                this.clearInterface();
                var target = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Target);
                return target ? target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.DebuggerModel) : null;
            }
        },
        {
            key: "longResume",
            value: function longResume() {
                var debuggerModel = this.prepareToResume();
                if (debuggerModel) {
                    debuggerModel.skipAllPausesUntilReloadOrTimeout(500);
                    debuggerModel.resume();
                }
            }
        },
        {
            key: "terminateExecution",
            value: function terminateExecution() {
                var debuggerModel = this.prepareToResume();
                if (debuggerModel) {
                    void debuggerModel.runtimeModel().terminateExecution();
                    debuggerModel.resume();
                }
            }
        },
        {
            key: "stepOver",
            value: function stepOver() {
                var debuggerModel = this.prepareToResume();
                if (debuggerModel) {
                    void debuggerModel.stepOver();
                }
                return true;
            }
        },
        {
            key: "stepInto",
            value: function stepInto() {
                var debuggerModel = this.prepareToResume();
                if (debuggerModel) {
                    void debuggerModel.stepInto();
                }
                return true;
            }
        },
        {
            key: "stepIntoAsync",
            value: function stepIntoAsync() {
                var debuggerModel = this.prepareToResume();
                if (debuggerModel) {
                    debuggerModel.scheduleStepIntoAsync();
                }
                return true;
            }
        },
        {
            key: "stepOut",
            value: function stepOut() {
                var debuggerModel = this.prepareToResume();
                if (debuggerModel) {
                    void debuggerModel.stepOut();
                }
                return true;
            }
        },
        {
            key: "continueToLocation",
            value: function continueToLocation(uiLocation) {
                var _this = this;
                return _async_to_generator(function() {
                    var executionContext, rawLocations, rawLocation;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                executionContext = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.RuntimeModel.ExecutionContext);
                                if (!executionContext) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().uiLocationToRawLocations(uiLocation.uiSourceCode, uiLocation.lineNumber, 0)
                                ];
                            case 1:
                                rawLocations = _state.sent();
                                rawLocation = rawLocations.find(function(location) {
                                    return location.debuggerModel === executionContext.debuggerModel;
                                });
                                if (rawLocation && _this.prepareToResume()) {
                                    rawLocation.continueToLocation();
                                }
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "toggleBreakpointsActive",
            value: function toggleBreakpointsActive() {
                _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('breakpoints-active').set(!_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('breakpoints-active').get());
            }
        },
        {
            key: "breakpointsActiveStateChanged",
            value: function breakpointsActiveStateChanged() {
                var active = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('breakpoints-active').get();
                this.toggleBreakpointsActiveAction.setToggled(!active);
                this.sourcesViewInternal.toggleBreakpointsActiveState(active);
            }
        },
        {
            key: "createDebugToolbar",
            value: function createDebugToolbar() {
                var debugToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Toolbar.Toolbar('scripts-debug-toolbar');
                debugToolbar.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.toolbar('debug').track({
                    keydown: 'ArrowUp|ArrowLeft|ArrowDown|ArrowRight|Enter|Space'
                })));
                var longResumeButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Toolbar.ToolbarButton(i18nString(UIStrings.resumeWithAllPausesBlockedForMs), 'play');
                longResumeButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , this.longResume, this);
                var terminateExecutionButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Toolbar.ToolbarButton(i18nString(UIStrings.terminateCurrentJavascriptCall), 'stop');
                terminateExecutionButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , this.terminateExecution, this);
                var pauseActionButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Toolbar.Toolbar.createLongPressActionButton(this.togglePauseAction, [
                    terminateExecutionButton,
                    longResumeButton
                ], []);
                pauseActionButton.toggleOnClick(false);
                debugToolbar.appendToolbarItem(pauseActionButton);
                debugToolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Toolbar.Toolbar.createActionButton(this.stepOverAction));
                debugToolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Toolbar.Toolbar.createActionButton(this.stepIntoAction));
                debugToolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Toolbar.Toolbar.createActionButton(this.stepOutAction));
                debugToolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Toolbar.Toolbar.createActionButton(this.stepAction));
                debugToolbar.appendSeparator();
                debugToolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Toolbar.Toolbar.createActionButton(this.toggleBreakpointsActiveAction));
                return debugToolbar;
            }
        },
        {
            key: "createDebugToolbarDrawer",
            value: function createDebugToolbarDrawer() {
                var debugToolbarDrawer = document.createElement('div');
                debugToolbarDrawer.classList.add('scripts-debug-toolbar-drawer');
                var label = i18nString(UIStrings.pauseOnCaughtExceptions);
                var setting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('pause-on-caught-exception');
                debugToolbarDrawer.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.SettingsUI.createSettingCheckbox(label, setting, true));
                return debugToolbarDrawer;
            }
        },
        {
            key: "appendApplicableItems",
            value: function appendApplicableItems(event, contextMenu, target) {
                if (_instanceof(target, _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_9__.UISourceCode.UISourceCode)) {
                    this.appendUISourceCodeItems(event, contextMenu, target);
                    return;
                }
                if (_instanceof(target, _UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_21__.UISourceCodeFrame)) {
                    this.appendUISourceCodeFrameItems(contextMenu, target);
                    return;
                }
                if (_instanceof(target, _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_9__.UISourceCode.UILocation)) {
                    this.appendUILocationItems(contextMenu, target);
                    return;
                }
                if (_instanceof(target, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.RemoteObject.RemoteObject)) {
                    this.appendRemoteObjectItems(contextMenu, target);
                    return;
                }
                this.appendNetworkRequestItems(contextMenu, target);
            }
        },
        {
            key: "appendUISourceCodeItems",
            value: function appendUISourceCodeItems(event, contextMenu, uiSourceCode) {
                if (!event.target) {
                    return;
                }
                var eventTarget = event.target;
                if (!uiSourceCode.project().isServiceProject() && !eventTarget.isSelfOrDescendant(this.navigatorTabbedLocation.widget().element) && !(_core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.isEnabled("just-my-code" /* Root.Runtime.ExperimentName.JUST_MY_CODE */ ) && _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.IgnoreListManager.IgnoreListManager.instance().isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode))) {
                    contextMenu.revealSection().appendItem(i18nString(UIStrings.revealInSidebar), this.revealInNavigator.bind(this, uiSourceCode), {
                        jslogContext: 'sources.reveal-in-navigator-sidebar'
                    });
                }
                // Ignore list only works for JavaScript debugging.
                if (uiSourceCode.contentType().hasScripts() && _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().scriptsForUISourceCode(uiSourceCode).every(function(script) {
                    return script.isJavaScript();
                })) {
                    this.callstackPane.appendIgnoreListURLContextMenuItems(contextMenu, uiSourceCode);
                }
            }
        },
        {
            key: "appendUISourceCodeFrameItems",
            value: function appendUISourceCodeFrameItems(contextMenu, target) {
                if (target.uiSourceCode().contentType().isFromSourceMap() || target.textEditor.state.selection.main.empty) {
                    return;
                }
                contextMenu.debugSection().appendAction('debugger.evaluate-selection');
            }
        },
        {
            key: "appendUILocationItems",
            value: function appendUILocationItems(contextMenu, uiLocation) {
                var uiSourceCode = uiLocation.uiSourceCode;
                if (!_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().scriptsForUISourceCode(uiSourceCode).every(function(script) {
                    return script.isJavaScript();
                })) {
                    // Ignore List and 'Continue to here' currently only works for JavaScript debugging.
                    return;
                }
                var contentType = uiSourceCode.contentType();
                if (contentType.hasScripts()) {
                    var target = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Target);
                    var debuggerModel = target ? target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerModel.DebuggerModel) : null;
                    if (debuggerModel && debuggerModel.isPaused()) {
                        contextMenu.debugSection().appendItem(i18nString(UIStrings.continueToHere), this.continueToLocation.bind(this, uiLocation), {
                            jslogContext: 'continue-to-here'
                        });
                    }
                    this.callstackPane.appendIgnoreListURLContextMenuItems(contextMenu, uiSourceCode);
                }
            }
        },
        {
            key: "appendRemoteObjectItems",
            value: function appendRemoteObjectItems(contextMenu, remoteObject) {
                var indent = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('text-editor-indent').get();
                var executionContext = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.RuntimeModel.ExecutionContext);
                function getObjectTitle() {
                    if (remoteObject.type === 'wasm') {
                        return remoteObject.subtype;
                    }
                    if (remoteObject.subtype === 'node') {
                        return 'outerHTML';
                    }
                    return remoteObject.type;
                }
                var copyContextMenuTitle = getObjectTitle();
                contextMenu.debugSection().appendItem(i18nString(UIStrings.storeAsGlobalVariable), function() {
                    var _executionContext_target_model;
                    return executionContext === null || executionContext === void 0 ? void 0 : (_executionContext_target_model = executionContext.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ConsoleModel.ConsoleModel)) === null || _executionContext_target_model === void 0 ? void 0 : _executionContext_target_model.saveToTempVariable(executionContext, remoteObject);
                }, {
                    jslogContext: 'store-as-global-variable'
                });
                var ctxMenuClipboardSection = contextMenu.clipboardSection();
                var inspectorFrontendHost = _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance;
                if (remoteObject.type === 'string') {
                    ctxMenuClipboardSection.appendItem(i18nString(UIStrings.copyStringContents), function() {
                        inspectorFrontendHost.copyText(remoteObject.value);
                    }, {
                        jslogContext: 'copy-string-contents'
                    });
                    ctxMenuClipboardSection.appendItem(i18nString(UIStrings.copyStringAsJSLiteral), function() {
                        inspectorFrontendHost.copyText(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.formatAsJSLiteral(remoteObject.value));
                    }, {
                        jslogContext: 'copy-string-as-js-literal'
                    });
                    ctxMenuClipboardSection.appendItem(i18nString(UIStrings.copyStringAsJSONLiteral), function() {
                        inspectorFrontendHost.copyText(JSON.stringify(remoteObject.value));
                    }, {
                        jslogContext: 'copy-string-as-json-literal'
                    });
                } else if (primitiveRemoteObjectTypes.has(remoteObject.type)) {
                    ctxMenuClipboardSection.appendItem(i18nString(UIStrings.copyS, {
                        PH1: String(copyContextMenuTitle)
                    }), function() {
                        inspectorFrontendHost.copyText(remoteObject.description);
                    }, {
                        jslogContext: 'copy-primitive'
                    });
                } else if (remoteObject.type === 'object') {
                    var copyDecodedValueHandler = function() {
                        var _ref = _async_to_generator(function() {
                            var result;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        return [
                                            4,
                                            remoteObject.callFunctionJSON(toStringForClipboard, [
                                                {
                                                    value: {
                                                        subtype: remoteObject.subtype,
                                                        indent: indent
                                                    }
                                                }
                                            ])
                                        ];
                                    case 1:
                                        result = _state.sent();
                                        inspectorFrontendHost.copyText(result);
                                        return [
                                            2
                                        ];
                                }
                            });
                        });
                        return function copyDecodedValueHandler() {
                            return _ref.apply(this, arguments);
                        };
                    }();
                    ctxMenuClipboardSection.appendItem(i18nString(UIStrings.copyS, {
                        PH1: String(copyContextMenuTitle)
                    }), copyDecodedValueHandler, {
                        jslogContext: 'copy-object'
                    });
                } else if (remoteObject.type === 'function') {
                    contextMenu.debugSection().appendItem(i18nString(UIStrings.showFunctionDefinition), this.showFunctionDefinition.bind(this, remoteObject), {
                        jslogContext: 'show-function-definition'
                    });
                }
                function toStringForClipboard(data) {
                    var subtype = data.subtype;
                    var indent = data.indent;
                    if (subtype === 'map') {
                        if (_instanceof(this, Map)) {
                            var elements = Array.from(this.entries());
                            var literal = elements.length === 0 ? '' : JSON.stringify(elements, null, indent);
                            return "new Map(".concat(literal, ")");
                        }
                        return undefined;
                    }
                    if (subtype === 'set') {
                        if (_instanceof(this, Set)) {
                            var values = Array.from(this.values());
                            var literal1 = values.length === 0 ? '' : JSON.stringify(values, null, indent);
                            return "new Set(".concat(literal1, ")");
                        }
                        return undefined;
                    }
                    if (subtype === 'node') {
                        return _instanceof(this, Element) ? this.outerHTML : undefined;
                    }
                    if (subtype && typeof this === 'undefined') {
                        return String(subtype);
                    }
                    try {
                        return JSON.stringify(this, null, indent);
                    } catch (error) {
                        return String(this);
                    }
                }
            }
        },
        {
            key: "appendNetworkRequestItems",
            value: function appendNetworkRequestItems(contextMenu, request) {
                var uiSourceCode = this.workspace.uiSourceCodeForURL(request.url());
                if (!uiSourceCode) {
                    return;
                }
                var openText = i18nString(UIStrings.openInSourcesPanel);
                var callback = this.showUILocation.bind(this, uiSourceCode.uiLocation(0, 0));
                contextMenu.revealSection().appendItem(openText, callback, {
                    jslogContext: 'reveal-in-sources'
                });
            }
        },
        {
            key: "showFunctionDefinition",
            value: function showFunctionDefinition(remoteObject) {
                var _this = this;
                void _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.RemoteObject.RemoteFunction.objectAsFunction(remoteObject).targetFunction().then(function(targetFunction) {
                    return targetFunction.debuggerModel().functionDetailsPromise(targetFunction).then(_this.didGetFunctionDetails.bind(_this));
                });
            }
        },
        {
            key: "didGetFunctionDetails",
            value: function didGetFunctionDetails(response) {
                var _this = this;
                return _async_to_generator(function() {
                    var uiLocation;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!response || !response.location) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().rawLocationToUILocation(response.location)
                                ];
                            case 1:
                                uiLocation = _state.sent();
                                if (uiLocation) {
                                    _this.showUILocation(uiLocation);
                                }
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "revealNavigatorSidebar",
            value: function revealNavigatorSidebar() {
                void this.setAsCurrentPanel();
                this.editorView.showBoth(true);
            }
        },
        {
            key: "revealDebuggerSidebar",
            value: function revealDebuggerSidebar() {
                if (!_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('auto-focus-on-debugger-paused-enabled').get()) {
                    return;
                }
                void this.setAsCurrentPanel();
                this.splitWidget.showBoth(true);
            }
        },
        {
            key: "updateSidebarPosition",
            value: function updateSidebarPosition() {
                var vertically;
                var position = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('sidebar-position').get();
                if (position === 'right') {
                    vertically = false;
                } else if (position === 'bottom') {
                    vertically = true;
                } else {
                    vertically = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.InspectorView.InspectorView.instance().element.offsetWidth < 680;
                }
                if (this.sidebarPaneView && vertically === !this.splitWidget.isVertical()) {
                    return;
                }
                if (this.sidebarPaneView && this.sidebarPaneView.shouldHideOnDetach()) {
                    return;
                } // We can't reparent extension iframes.
                if (this.sidebarPaneView) {
                    this.sidebarPaneView.detach();
                }
                this.splitWidget.setVertical(!vertically);
                this.splitWidget.element.classList.toggle('sources-split-view-vertical', vertically);
                SourcesPanel.updateResizerAndSidebarButtons(this);
                // Create vertical box with stack.
                var vbox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Widget.VBox();
                vbox.element.appendChild(this.debugToolbar.element);
                vbox.element.appendChild(this.debugToolbarDrawer);
                vbox.setMinimumAndPreferredSizes(minToolbarWidth, 25, minToolbarWidth, 100);
                this.sidebarPaneStack = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.ViewManager.ViewManager.instance().createStackLocation(this.revealDebuggerSidebar.bind(this), undefined, 'debug');
                this.sidebarPaneStack.widget().element.classList.add('overflow-auto');
                this.sidebarPaneStack.widget().show(vbox.element);
                this.sidebarPaneStack.widget().element.appendChild(this.debuggerPausedMessage.element());
                this.sidebarPaneStack.appendApplicableItems('sources.sidebar-top');
                if (this.threadsSidebarPane) {
                    this.sidebarPaneStack.appendView(this.threadsSidebarPane);
                }
                var jsBreakpoints = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.ViewManager.ViewManager.instance().view('sources.js-breakpoints');
                var scopeChainView = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.ViewManager.ViewManager.instance().view('sources.scope-chain');
                if (this.tabbedLocationHeader) {
                    this.splitWidget.uninstallResizer(this.tabbedLocationHeader);
                    this.tabbedLocationHeader = null;
                }
                if (!vertically) {
                    // Populate the rest of the stack.
                    this.sidebarPaneStack.appendView(this.watchSidebarPane);
                    void this.sidebarPaneStack.showView(jsBreakpoints);
                    void this.sidebarPaneStack.showView(scopeChainView);
                    void this.sidebarPaneStack.showView(this.callstackPane);
                    this.extensionSidebarPanesContainer = this.sidebarPaneStack;
                    this.sidebarPaneView = vbox;
                    this.splitWidget.uninstallResizer(this.debugToolbar.gripElementForResize());
                } else {
                    var splitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.SplitWidget.SplitWidget(true, true, 'sources-panel-debugger-sidebar-split-view-state', 0.5);
                    splitWidget.setMainWidget(vbox);
                    // Populate the left stack.
                    void this.sidebarPaneStack.showView(jsBreakpoints);
                    void this.sidebarPaneStack.showView(this.callstackPane);
                    var tabbedLocation = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.ViewManager.ViewManager.instance().createTabbedLocation(this.revealDebuggerSidebar.bind(this));
                    splitWidget.setSidebarWidget(tabbedLocation.tabbedPane());
                    this.tabbedLocationHeader = tabbedLocation.tabbedPane().headerElement();
                    this.splitWidget.installResizer(this.tabbedLocationHeader);
                    this.splitWidget.installResizer(this.debugToolbar.gripElementForResize());
                    tabbedLocation.appendView(scopeChainView);
                    tabbedLocation.appendView(this.watchSidebarPane);
                    tabbedLocation.appendApplicableItems('sources.sidebar-tabs');
                    this.extensionSidebarPanesContainer = tabbedLocation;
                    this.sidebarPaneView = splitWidget;
                }
                this.sidebarPaneStack.appendApplicableItems('sources.sidebar-bottom');
                var extensionSidebarPanes = _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_8__.ExtensionServer.ExtensionServer.instance().sidebarPanes();
                for(var i = 0; i < extensionSidebarPanes.length; ++i){
                    this.addExtensionSidebarPane(extensionSidebarPanes[i]);
                }
                this.splitWidget.setSidebarWidget(this.sidebarPaneView);
            }
        },
        {
            key: "setAsCurrentPanel",
            value: function setAsCurrentPanel() {
                return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.ViewManager.ViewManager.instance().showView('sources');
            }
        },
        {
            key: "extensionSidebarPaneAdded",
            value: function extensionSidebarPaneAdded(event) {
                this.addExtensionSidebarPane(event.data);
            }
        },
        {
            key: "addExtensionSidebarPane",
            value: function addExtensionSidebarPane(pane) {
                if (pane.panelName() === this.name) {
                    this.extensionSidebarPanesContainer.appendView(pane);
                }
            }
        },
        {
            key: "sourcesView",
            value: function sourcesView() {
                return this.sourcesViewInternal;
            }
        },
        {
            key: "handleDrop",
            value: function handleDrop(dataTransfer) {
                var items = dataTransfer.items;
                if (!items.length) {
                    return;
                }
                var entry = items[0].webkitGetAsEntry();
                if (entry && entry.isDirectory) {
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.upgradeDraggedFileSystemPermissions(entry.filesystem);
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.WorkspaceDropFolder);
                    void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.ViewManager.ViewManager.instance().showView('navigator-files');
                }
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    forceNew: null
                };
                var forceNew = opts.forceNew;
                if (!sourcesPanelInstance || forceNew) {
                    sourcesPanelInstance = new SourcesPanel();
                }
                return sourcesPanelInstance;
            }
        },
        {
            key: "updateResizerAndSidebarButtons",
            value: function updateResizerAndSidebarButtons(panel) {
                panel.sourcesViewInternal.leftToolbar().removeToolbarItems();
                panel.sourcesViewInternal.rightToolbar().removeToolbarItems();
                panel.sourcesViewInternal.bottomToolbar().removeToolbarItems();
                var isInWrapper = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Context.Context.instance().flavor(QuickSourceView) && !_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.InspectorView.InspectorView.instance().isDrawerMinimized();
                if (panel.splitWidget.isVertical() || isInWrapper) {
                    panel.splitWidget.uninstallResizer(panel.sourcesViewInternal.toolbarContainerElement());
                } else {
                    panel.splitWidget.installResizer(panel.sourcesViewInternal.toolbarContainerElement());
                }
                if (!isInWrapper) {
                    panel.sourcesViewInternal.leftToolbar().appendToolbarItem(panel.toggleNavigatorSidebarButton);
                    if (panel.splitWidget.isVertical()) {
                        panel.sourcesViewInternal.rightToolbar().appendToolbarItem(panel.toggleDebuggerSidebarButton);
                    } else {
                        panel.sourcesViewInternal.bottomToolbar().appendToolbarItem(panel.toggleDebuggerSidebarButton);
                    }
                }
            }
        }
    ]);
    return SourcesPanel;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Panel.Panel);
var lastModificationTimeout = 200;
var minToolbarWidth = 215;
var UILocationRevealer = /*#__PURE__*/ function() {
    "use strict";
    function UILocationRevealer() {
        _class_call_check(this, UILocationRevealer);
    }
    _create_class(UILocationRevealer, [
        {
            key: "reveal",
            value: function reveal(uiLocation, omitFocus) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        SourcesPanel.instance().showUILocation(uiLocation, omitFocus);
                        return [
                            2
                        ];
                    });
                })();
            }
        }
    ]);
    return UILocationRevealer;
}();
var UILocationRangeRevealer = /*#__PURE__*/ function() {
    "use strict";
    function UILocationRangeRevealer() {
        _class_call_check(this, UILocationRangeRevealer);
    }
    _create_class(UILocationRangeRevealer, [
        {
            key: "reveal",
            value: function reveal(uiLocationRange, omitFocus) {
                return _async_to_generator(function() {
                    var uiSourceCode, _uiLocationRange_range, from, to;
                    return _ts_generator(this, function(_state) {
                        uiSourceCode = uiLocationRange.uiSourceCode, _uiLocationRange_range = uiLocationRange.range, from = _uiLocationRange_range.start, to = _uiLocationRange_range.end;
                        SourcesPanel.instance().showUISourceCode(uiSourceCode, {
                            from: from,
                            to: to
                        }, omitFocus);
                        return [
                            2
                        ];
                    });
                })();
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    forceNew: false
                };
                if (!_class_static_private_field_spec_get(UILocationRangeRevealer, UILocationRangeRevealer, _instance) || opts.forceNew) {
                    _class_static_private_field_spec_set(UILocationRangeRevealer, UILocationRangeRevealer, _instance, new UILocationRangeRevealer());
                }
                return _class_static_private_field_spec_get(UILocationRangeRevealer, UILocationRangeRevealer, _instance);
            }
        }
    ]);
    return UILocationRangeRevealer;
}();
var _instance = {
    writable: true,
    value: void 0
};
var DebuggerLocationRevealer = /*#__PURE__*/ function() {
    "use strict";
    function DebuggerLocationRevealer() {
        _class_call_check(this, DebuggerLocationRevealer);
    }
    _create_class(DebuggerLocationRevealer, [
        {
            key: "reveal",
            value: function reveal(rawLocation, omitFocus) {
                return _async_to_generator(function() {
                    var uiLocation;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().rawLocationToUILocation(rawLocation)
                                ];
                            case 1:
                                uiLocation = _state.sent();
                                if (uiLocation) {
                                    SourcesPanel.instance().showUILocation(uiLocation, omitFocus);
                                }
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return DebuggerLocationRevealer;
}();
var UISourceCodeRevealer = /*#__PURE__*/ function() {
    "use strict";
    function UISourceCodeRevealer() {
        _class_call_check(this, UISourceCodeRevealer);
    }
    _create_class(UISourceCodeRevealer, [
        {
            key: "reveal",
            value: function reveal(uiSourceCode, omitFocus) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        SourcesPanel.instance().showUISourceCode(uiSourceCode, undefined, omitFocus);
                        return [
                            2
                        ];
                    });
                })();
            }
        }
    ]);
    return UISourceCodeRevealer;
}();
var DebuggerPausedDetailsRevealer = /*#__PURE__*/ function() {
    "use strict";
    function DebuggerPausedDetailsRevealer() {
        _class_call_check(this, DebuggerPausedDetailsRevealer);
    }
    _create_class(DebuggerPausedDetailsRevealer, [
        {
            key: "reveal",
            value: function reveal(_object) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        if (_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('auto-focus-on-debugger-paused-enabled').get()) {
                            return [
                                2,
                                SourcesPanel.instance().setAsCurrentPanel()
                            ];
                        }
                        return [
                            2
                        ];
                    });
                })();
            }
        }
    ]);
    return DebuggerPausedDetailsRevealer;
}();
var RevealingActionDelegate = /*#__PURE__*/ function() {
    "use strict";
    function RevealingActionDelegate() {
        _class_call_check(this, RevealingActionDelegate);
    }
    _create_class(RevealingActionDelegate, [
        {
            key: "handleAction",
            value: function handleAction(context, actionId) {
                var panel = SourcesPanel.instance();
                if (!panel.ensureSourcesViewVisible()) {
                    return false;
                }
                switch(actionId){
                    case 'debugger.toggle-pause':
                        {
                            // This action can be triggered both on the DevTools front-end itself,
                            // or on the inspected target. If triggered on the DevTools front-end,
                            // it will take care of resuming.
                            //
                            // If triggered on the target, NOT in hosted mode:
                            //   * ..and the paused overlay is enabled:
                            //       => do not take any action here, as the paused overlay will resume
                            //   * ..and the paused overlay is disabled:
                            //       => take care of the resume here
                            // If triggered on the target in hosted mode:
                            //   * ..and the paused overlay is enabled:
                            //       => execution will not reach here, as shortcuts are not forwarded
                            //          and the paused overlay will resume
                            //   * ..and the paused overlay is disabled:
                            //       => overlay will not take care of resume, and neither will
                            //          DevTools as no shortcuts are forwarded from the target
                            // Do not trigger a resume action, if: the shortcut was forwarded and the
                            // paused overlay is enabled.
                            var actionHandledInPausedOverlay = context.flavor(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.ShortcutRegistry.ForwardedShortcut) && !_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('disable-paused-state-overlay').get();
                            if (actionHandledInPausedOverlay) {
                                // Taken care of by inspector overlay: handled set to true to
                                // register user metric.
                                return true;
                            }
                            panel.togglePause();
                            return true;
                        }
                }
                return false;
            }
        }
    ]);
    return RevealingActionDelegate;
}();
var ActionDelegate = /*#__PURE__*/ function() {
    "use strict";
    function ActionDelegate() {
        _class_call_check(this, ActionDelegate);
    }
    _create_class(ActionDelegate, [
        {
            key: "handleAction",
            value: function handleAction(context, actionId) {
                var panel = SourcesPanel.instance();
                switch(actionId){
                    case 'debugger.step-over':
                        {
                            panel.stepOver();
                            return true;
                        }
                    case 'debugger.step-into':
                        {
                            panel.stepIntoAsync();
                            return true;
                        }
                    case 'debugger.step':
                        {
                            panel.stepInto();
                            return true;
                        }
                    case 'debugger.step-out':
                        {
                            panel.stepOut();
                            return true;
                        }
                    case 'debugger.run-snippet':
                        {
                            panel.runSnippet();
                            return true;
                        }
                    case 'debugger.toggle-breakpoints-active':
                        {
                            panel.toggleBreakpointsActive();
                            return true;
                        }
                    case 'debugger.evaluate-selection':
                        {
                            var frame = context.flavor(_UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_21__.UISourceCodeFrame);
                            if (frame) {
                                var _frame_textEditor = frame.textEditor, editorState = _frame_textEditor.state;
                                var text = editorState.sliceDoc(editorState.selection.main.from, editorState.selection.main.to);
                                var executionContext = context.flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.RuntimeModel.ExecutionContext);
                                var consoleModel = executionContext === null || executionContext === void 0 ? void 0 : executionContext.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ConsoleModel.ConsoleModel);
                                if (executionContext && consoleModel) {
                                    var message = consoleModel.addCommandMessage(executionContext, text);
                                    text = _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_11__.JavaScriptREPL.JavaScriptREPL.wrapObjectLiteral(text);
                                    void consoleModel.evaluateCommandInConsole(executionContext, message, text, /* useCommandLineAPI */ true);
                                }
                            }
                            return true;
                        }
                    case 'sources.reveal-in-navigator-sidebar':
                        {
                            var uiSourceCode = panel.sourcesView().currentUISourceCode();
                            if (uiSourceCode === null) {
                                return false;
                            }
                            void panel.revealInNavigator(uiSourceCode);
                            return true;
                        }
                    case 'sources.toggle-navigator-sidebar':
                        {
                            panel.toggleNavigatorSidebar();
                            return true;
                        }
                    case 'sources.toggle-debugger-sidebar':
                        {
                            panel.toggleDebuggerSidebar();
                            return true;
                        }
                }
                return false;
            }
        }
    ]);
    return ActionDelegate;
}();
var QuickSourceView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(QuickSourceView, _UI_Widget_VBox);
    var _super = _create_super(QuickSourceView);
    function QuickSourceView() {
        _class_call_check(this, QuickSourceView);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "view", void 0);
        _this.element.classList.add('sources-view-wrapper');
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.panel('sources.quick').track({
            resize: true
        })));
        _this.view = SourcesPanel.instance().sourcesView();
        return _this;
    }
    _create_class(QuickSourceView, [
        {
            key: "wasShown",
            value: function wasShown() {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Context.Context.instance().setFlavor(QuickSourceView, this);
                _get(_get_prototype_of(QuickSourceView.prototype), "wasShown", this).call(this);
                if (!SourcesPanel.instance().isShowing()) {
                    this.showViewInWrapper();
                } else {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.InspectorView.InspectorView.instance().setDrawerMinimized(true);
                }
                SourcesPanel.updateResizerAndSidebarButtons(SourcesPanel.instance());
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.InspectorView.InspectorView.instance().setDrawerMinimized(false);
                queueMicrotask(function() {
                    SourcesPanel.updateResizerAndSidebarButtons(SourcesPanel.instance());
                });
                _get(_get_prototype_of(QuickSourceView.prototype), "willHide", this).call(this);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Context.Context.instance().setFlavor(QuickSourceView, null);
            }
        },
        {
            key: "showViewInWrapper",
            value: function showViewInWrapper() {
                this.view.show(this.element);
            }
        }
    ]);
    return QuickSourceView;
} //# sourceMappingURL=SourcesPanel.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.Widget.VBox);


}),
"./panels/sources/SourcesView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ActionDelegate: function() { return ActionDelegate; },
  SourcesView: function() { return SourcesView; },
  SwitchFileActionDelegate: function() { return SwitchFileActionDelegate; },
  getRegisteredEditorActions: function() { return getRegisteredEditorActions; },
  registerEditorAction: function() { return registerEditorAction; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _ui_legacy_components_quick_open_quick_open_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/legacy/components/quick_open/quick_open.js */ "./ui/legacy/components/quick_open/quick_open.js");
/* harmony import */var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _components_components_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/components.js */ "./panels/sources/components/components.js");
/* harmony import */var _EditingLocationHistoryManager_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./EditingLocationHistoryManager.js */ "./panels/sources/EditingLocationHistoryManager.js");
/* harmony import */var _sourcesView_css_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sourcesView.css.js */ "./panels/sources/sourcesView.css.js");
/* harmony import */var _TabbedEditorContainer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./TabbedEditorContainer.js */ "./panels/sources/TabbedEditorContainer.js");
/* harmony import */var _UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./UISourceCodeFrame.js */ "./panels/sources/UISourceCodeFrame.js");
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
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

















var UIStrings = {
    /**
     *@description Text to open a file
     */ openFile: 'Open file',
    /**
     *@description Text to run commands
     */ runCommand: 'Run command',
    /**
     *@description Text in Sources View of the Sources panel. This sentence follows by a list of actions.
     */ workspaceDropInAFolderToSyncSources: 'To sync edits to the workspace, drop a folder with your sources here or',
    /**
     *@description Text in Sources View of the Sources panel.
     */ selectFolder: 'Select folder',
    /**
     *@description Accessible label for Sources placeholder view actions list
     */ sourceViewActions: 'Source View Actions'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/sources/SourcesView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var _onScopeChange = /*#__PURE__*/ new WeakSet(), _sourceViewTypeForWidget = /*#__PURE__*/ new WeakSet(), _sourceViewTypeForUISourceCode = /*#__PURE__*/ new WeakSet(), _uiSourceCodeTitleChanged = /*#__PURE__*/ new WeakSet();
var SourcesView = /*#__PURE__*/ function(_Common_ObjectWrapper_eventMixin) {
    "use strict";
    _inherits(SourcesView, _Common_ObjectWrapper_eventMixin);
    var _super = _create_super(SourcesView);
    function SourcesView() {
        _class_call_check(this, SourcesView);
        var _this;
        var handleBeforeUnload = function handleBeforeUnload(event) {
            if (event.returnValue) {
                return;
            }
            var unsavedSourceCodes = [];
            var projects = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.WorkspaceImpl.instance().projectsForType(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.projectTypes.FileSystem);
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = projects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var project = _step.value;
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(var _iterator1 = project.uiSourceCodes()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            var uiSourceCode = _step1.value;
                            if (uiSourceCode.isDirty()) {
                                unsavedSourceCodes.push(uiSourceCode);
                            }
                        }
                    } catch (err) {
                        _didIteratorError1 = true;
                        _iteratorError1 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                _iterator1.return();
                            }
                        } finally{
                            if (_didIteratorError1) {
                                throw _iteratorError1;
                            }
                        }
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
            if (!unsavedSourceCodes.length) {
                return;
            }
            event.returnValue = true;
            void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ViewManager.ViewManager.instance().showView('sources');
            var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
            try {
                for(var _iterator2 = unsavedSourceCodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                    var sourceCode = _step2.value;
                    void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(sourceCode);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                        _iterator2.return();
                    }
                } finally{
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        };
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _onScopeChange);
        _class_private_method_init(_assert_this_initialized(_this), _sourceViewTypeForWidget);
        _class_private_method_init(_assert_this_initialized(_this), _sourceViewTypeForUISourceCode);
        _class_private_method_init(_assert_this_initialized(_this), _uiSourceCodeTitleChanged);
        _define_property(_assert_this_initialized(_this), "selectedIndex", void 0);
        _define_property(_assert_this_initialized(_this), "searchableViewInternal", void 0);
        _define_property(_assert_this_initialized(_this), "sourceViewByUISourceCode", void 0);
        _define_property(_assert_this_initialized(_this), "editorContainer", void 0);
        _define_property(_assert_this_initialized(_this), "historyManager", void 0);
        _define_property(_assert_this_initialized(_this), "toolbarContainerElementInternal", void 0);
        _define_property(_assert_this_initialized(_this), "scriptViewToolbar", void 0);
        _define_property(_assert_this_initialized(_this), "bottomToolbarInternal", void 0);
        _define_property(_assert_this_initialized(_this), "toolbarChangedListener", void 0);
        _define_property(_assert_this_initialized(_this), "focusedPlaceholderElement", void 0);
        _define_property(_assert_this_initialized(_this), "searchView", void 0);
        _define_property(_assert_this_initialized(_this), "searchConfig", void 0);
        _this.element.id = 'sources-panel-sources-view';
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.pane('editor').track({
            keydown: 'Escape'
        })));
        _this.setMinimumAndPreferredSizes(88, 52, 150, 100);
        _this.selectedIndex = 0;
        var workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.WorkspaceImpl.instance();
        _this.searchableViewInternal = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.SearchableView.SearchableView(_assert_this_initialized(_this), _assert_this_initialized(_this), 'sources-view-search-config');
        _this.searchableViewInternal.setMinimalSearchQuerySize(0);
        _this.searchableViewInternal.show(_this.element);
        _this.sourceViewByUISourceCode = new Map();
        _this.editorContainer = new _TabbedEditorContainer_js__WEBPACK_IMPORTED_MODULE_15__.TabbedEditorContainer(_assert_this_initialized(_this), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('previously-viewed-files', []), _this.placeholderElement(), _this.focusedPlaceholderElement);
        _this.editorContainer.show(_this.searchableViewInternal.element);
        _this.editorContainer.addEventListener("EditorSelected" /* TabbedEditorContainerEvents.EditorSelected */ , _this.editorSelected, _assert_this_initialized(_this));
        _this.editorContainer.addEventListener("EditorClosed" /* TabbedEditorContainerEvents.EditorClosed */ , _this.editorClosed, _assert_this_initialized(_this));
        _this.historyManager = new _EditingLocationHistoryManager_js__WEBPACK_IMPORTED_MODULE_13__.EditingLocationHistoryManager(_assert_this_initialized(_this));
        _this.toolbarContainerElementInternal = _this.element.createChild('div', 'sources-toolbar');
        _this.toolbarContainerElementInternal.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.toolbar('bottom')));
        _this.scriptViewToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.Toolbar('', _this.toolbarContainerElementInternal);
        _this.scriptViewToolbar.element.style.flex = 'auto';
        _this.bottomToolbarInternal = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.Toolbar('', _this.toolbarContainerElementInternal);
        _this.toolbarChangedListener = null;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.startBatchUpdate();
        workspace.uiSourceCodes().forEach(_this.addUISourceCode.bind(_assert_this_initialized(_this)));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.endBatchUpdate();
        workspace.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.Events.UISourceCodeAdded, _this.uiSourceCodeAdded, _assert_this_initialized(_this));
        workspace.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.Events.UISourceCodeRemoved, _this.uiSourceCodeRemoved, _assert_this_initialized(_this));
        workspace.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.Events.ProjectRemoved, _this.projectRemoved.bind(_assert_this_initialized(_this)), _assert_this_initialized(_this));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().addScopeChangeListener(_class_private_method_get(_this, _onScopeChange, onScopeChange).bind(_assert_this_initialized(_this)));
        if (!window.opener) {
            window.addEventListener('beforeunload', handleBeforeUnload, true);
        }
        return _this;
    }
    _create_class(SourcesView, [
        {
            key: "placeholderElement",
            value: function placeholderElement() {
                var shortcuts = [
                    {
                        actionId: 'quick-open.show',
                        description: i18nString(UIStrings.openFile)
                    },
                    {
                        actionId: 'quick-open.show-command-menu',
                        description: i18nString(UIStrings.runCommand)
                    },
                    {
                        actionId: 'sources.add-folder-to-workspace',
                        description: i18nString(UIStrings.workspaceDropInAFolderToSyncSources),
                        isWorkspace: true
                    }
                ];
                var list = document.createElement('div');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.markAsList(list);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.setLabel(list, i18nString(UIStrings.sourceViewActions));
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    var _this, _loop = function() {
                        var shortcut = _step.value;
                        var shortcutKeyText = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ShortcutRegistry.ShortcutRegistry.instance().shortcutTitleForAction(shortcut.actionId);
                        var listItemElement = list.createChild('div', 'tabbed-pane-placeholder-row');
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.markAsListitem(listItemElement);
                        if (shortcutKeyText) {
                            var title = listItemElement.createChild('span');
                            title.textContent = shortcutKeyText;
                            var button = listItemElement.createChild('button');
                            button.textContent = shortcut.description;
                            var action = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ActionRegistry.ActionRegistry.instance().getAction(shortcut.actionId);
                            button.addEventListener('click', function() {
                                return action.execute();
                            });
                        }
                        if (shortcut.isWorkspace) {
                            var workspace = listItemElement.createChild('span', 'workspace');
                            workspace.textContent = shortcut.description;
                            var browseButton = workspace.createChild('button');
                            browseButton.textContent = i18nString(UIStrings.selectFolder);
                            browseButton.addEventListener('click', _this.addFileSystemClicked.bind(_this));
                        }
                    };
                    for(var _iterator = shortcuts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_this = this, _loop();
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
                return list;
            }
        },
        {
            key: "addFileSystemClicked",
            value: function addFileSystemClicked() {
                return _async_to_generator(function() {
                    var result;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_6__.IsolatedFileSystemManager.IsolatedFileSystemManager.instance().addFileSystem()
                                ];
                            case 1:
                                result = _state.sent();
                                if (!result) {
                                    return [
                                        2
                                    ];
                                }
                                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.WorkspaceSelectFolder);
                                void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ViewManager.ViewManager.instance().showView('navigator-files');
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "leftToolbar",
            value: function leftToolbar() {
                return this.editorContainer.leftToolbar();
            }
        },
        {
            key: "rightToolbar",
            value: function rightToolbar() {
                return this.editorContainer.rightToolbar();
            }
        },
        {
            key: "bottomToolbar",
            value: function bottomToolbar() {
                return this.bottomToolbarInternal;
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(SourcesView.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _sourcesView_css_js__WEBPACK_IMPORTED_MODULE_14__["default"]
                ]);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Context.Context.instance().setFlavor(SourcesView, this);
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Context.Context.instance().setFlavor(SourcesView, null);
                _get(_get_prototype_of(SourcesView.prototype), "willHide", this).call(this);
            }
        },
        {
            key: "toolbarContainerElement",
            value: function toolbarContainerElement() {
                return this.toolbarContainerElementInternal;
            }
        },
        {
            key: "searchableView",
            value: function searchableView() {
                return this.searchableViewInternal;
            }
        },
        {
            key: "visibleView",
            value: function visibleView() {
                return this.editorContainer.visibleView;
            }
        },
        {
            key: "currentSourceFrame",
            value: function currentSourceFrame() {
                var view = this.visibleView();
                if (!_instanceof(view, _UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_16__.UISourceCodeFrame)) {
                    return null;
                }
                return view;
            }
        },
        {
            key: "currentUISourceCode",
            value: function currentUISourceCode() {
                return this.editorContainer.currentFile();
            }
        },
        {
            key: "onCloseEditorTab",
            value: function onCloseEditorTab() {
                var uiSourceCode = this.editorContainer.currentFile();
                if (!uiSourceCode) {
                    return false;
                }
                this.editorContainer.closeFile(uiSourceCode);
                return true;
            }
        },
        {
            key: "onJumpToPreviousLocation",
            value: function onJumpToPreviousLocation() {
                this.historyManager.rollback();
            }
        },
        {
            key: "onJumpToNextLocation",
            value: function onJumpToNextLocation() {
                this.historyManager.rollover();
            }
        },
        {
            key: "uiSourceCodeAdded",
            value: function uiSourceCodeAdded(event) {
                var uiSourceCode = event.data;
                this.addUISourceCode(uiSourceCode);
            }
        },
        {
            key: "addUISourceCode",
            value: function addUISourceCode(uiSourceCode) {
                var project = uiSourceCode.project();
                if (project.isServiceProject()) {
                    return;
                }
                switch(project.type()){
                    case _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.projectTypes.FileSystem:
                        {
                            if (_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_6__.FileSystemWorkspaceBinding.FileSystemWorkspaceBinding.fileSystemType(project) === 'overrides') {
                                return;
                            }
                            break;
                        }
                    case _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.projectTypes.Network:
                        {
                            var target = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.NetworkProject.NetworkProject.targetForUISourceCode(uiSourceCode);
                            if (!_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().isInScope(target)) {
                                return;
                            }
                        }
                }
                this.editorContainer.addUISourceCode(uiSourceCode);
            }
        },
        {
            key: "uiSourceCodeRemoved",
            value: function uiSourceCodeRemoved(event) {
                var uiSourceCode = event.data;
                this.removeUISourceCodes([
                    uiSourceCode
                ]);
            }
        },
        {
            key: "removeUISourceCodes",
            value: function removeUISourceCodes(uiSourceCodes) {
                this.editorContainer.removeUISourceCodes(uiSourceCodes);
                for(var i = 0; i < uiSourceCodes.length; ++i){
                    this.removeSourceFrame(uiSourceCodes[i]);
                    this.historyManager.removeHistoryForSourceCode(uiSourceCodes[i]);
                }
            }
        },
        {
            key: "projectRemoved",
            value: function projectRemoved(event) {
                var project = event.data;
                var uiSourceCodes = project.uiSourceCodes();
                this.removeUISourceCodes(_to_consumable_array(uiSourceCodes));
            }
        },
        {
            key: "updateScriptViewToolbarItems",
            value: function updateScriptViewToolbarItems() {
                var _this = this;
                var view = this.visibleView();
                if (_instanceof(view, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.View.SimpleView)) {
                    void view.toolbarItems().then(function(items) {
                        _this.scriptViewToolbar.removeToolbarItems();
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = getRegisteredEditorActions()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var action = _step.value;
                                _this.scriptViewToolbar.appendToolbarItem(action.getOrCreateButton(_this));
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
                        items.map(function(item) {
                            return _this.scriptViewToolbar.appendToolbarItem(item);
                        });
                    });
                }
            }
        },
        {
            key: "showSourceLocation",
            value: function showSourceLocation(uiSourceCode, location, omitFocus, omitHighlight) {
                var currentFrame = this.currentSourceFrame();
                if (currentFrame) {
                    this.historyManager.updateCurrentState(currentFrame.uiSourceCode(), currentFrame.textEditor.state.selection.main.head);
                }
                this.editorContainer.showFile(uiSourceCode);
                var currentSourceFrame = this.currentSourceFrame();
                if (currentSourceFrame && location) {
                    currentSourceFrame.revealPosition(location, !omitHighlight);
                }
                var visibleView = this.visibleView();
                if (!omitFocus && visibleView) {
                    visibleView.focus();
                }
            }
        },
        {
            key: "createSourceView",
            value: function createSourceView(uiSourceCode) {
                var sourceView;
                var contentType = uiSourceCode.contentType();
                if (contentType === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Image) {
                    sourceView = new _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_9__.ImageView.ImageView(uiSourceCode.mimeType(), uiSourceCode);
                } else if (contentType === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Font) {
                    sourceView = new _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_9__.FontView.FontView(uiSourceCode.mimeType(), uiSourceCode);
                } else if (uiSourceCode.name() === HEADER_OVERRIDES_FILENAME) {
                    sourceView = new _components_components_js__WEBPACK_IMPORTED_MODULE_12__.HeadersView.HeadersView(uiSourceCode);
                } else {
                    sourceView = new _UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_16__.UISourceCodeFrame(uiSourceCode);
                    this.historyManager.trackSourceFrameCursorJumps(sourceView);
                }
                uiSourceCode.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.UISourceCode.Events.TitleChanged, _class_private_method_get(this, _uiSourceCodeTitleChanged, uiSourceCodeTitleChanged), this);
                this.sourceViewByUISourceCode.set(uiSourceCode, sourceView);
                return sourceView;
            }
        },
        {
            key: "getSourceView",
            value: function getSourceView(uiSourceCode) {
                return this.sourceViewByUISourceCode.get(uiSourceCode);
            }
        },
        {
            key: "getOrCreateSourceView",
            value: function getOrCreateSourceView(uiSourceCode) {
                return this.sourceViewByUISourceCode.get(uiSourceCode) || this.createSourceView(uiSourceCode);
            }
        },
        {
            key: "recycleUISourceCodeFrame",
            value: function recycleUISourceCodeFrame(sourceFrame, uiSourceCode) {
                sourceFrame.uiSourceCode().removeEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.UISourceCode.Events.TitleChanged, _class_private_method_get(this, _uiSourceCodeTitleChanged, uiSourceCodeTitleChanged), this);
                this.sourceViewByUISourceCode.delete(sourceFrame.uiSourceCode());
                sourceFrame.setUISourceCode(uiSourceCode);
                this.sourceViewByUISourceCode.set(uiSourceCode, sourceFrame);
                uiSourceCode.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.UISourceCode.Events.TitleChanged, _class_private_method_get(this, _uiSourceCodeTitleChanged, uiSourceCodeTitleChanged), this);
            }
        },
        {
            key: "viewForFile",
            value: function viewForFile(uiSourceCode) {
                return this.getOrCreateSourceView(uiSourceCode);
            }
        },
        {
            key: "removeSourceFrame",
            value: function removeSourceFrame(uiSourceCode) {
                var sourceView = this.sourceViewByUISourceCode.get(uiSourceCode);
                this.sourceViewByUISourceCode.delete(uiSourceCode);
                if (sourceView && _instanceof(sourceView, _UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_16__.UISourceCodeFrame)) {
                    sourceView.dispose();
                }
                uiSourceCode.removeEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.UISourceCode.Events.TitleChanged, _class_private_method_get(this, _uiSourceCodeTitleChanged, uiSourceCodeTitleChanged), this);
            }
        },
        {
            key: "editorClosed",
            value: function editorClosed(event) {
                var uiSourceCode = event.data;
                this.historyManager.removeHistoryForSourceCode(uiSourceCode);
                var wasSelected = false;
                if (!this.editorContainer.currentFile()) {
                    wasSelected = true;
                }
                // SourcesNavigator does not need to update on EditorClosed.
                this.removeToolbarChangedListener();
                this.updateScriptViewToolbarItems();
                this.searchableViewInternal.resetSearch();
                var data = {
                    uiSourceCode: uiSourceCode,
                    wasSelected: wasSelected
                };
                this.dispatchEventToListeners("EditorClosed" /* Events.EditorClosed */ , data);
            }
        },
        {
            key: "editorSelected",
            value: function editorSelected(event) {
                var previousSourceFrame = _instanceof(event.data.previousView, _UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_16__.UISourceCodeFrame) ? event.data.previousView : null;
                if (previousSourceFrame) {
                    previousSourceFrame.setSearchableView(null);
                }
                var currentSourceFrame = _instanceof(event.data.currentView, _UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_16__.UISourceCodeFrame) ? event.data.currentView : null;
                if (currentSourceFrame) {
                    currentSourceFrame.setSearchableView(this.searchableViewInternal);
                }
                this.searchableViewInternal.setReplaceable(Boolean(currentSourceFrame === null || currentSourceFrame === void 0 ? void 0 : currentSourceFrame.canEditSource()));
                this.searchableViewInternal.refreshSearch();
                this.updateToolbarChangedListener();
                this.updateScriptViewToolbarItems();
                var currentFile = this.editorContainer.currentFile();
                if (currentFile) {
                    this.dispatchEventToListeners("EditorSelected" /* Events.EditorSelected */ , currentFile);
                }
            }
        },
        {
            key: "removeToolbarChangedListener",
            value: function removeToolbarChangedListener() {
                if (this.toolbarChangedListener) {
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners([
                        this.toolbarChangedListener
                    ]);
                }
                this.toolbarChangedListener = null;
            }
        },
        {
            key: "updateToolbarChangedListener",
            value: function updateToolbarChangedListener() {
                this.removeToolbarChangedListener();
                var sourceFrame = this.currentSourceFrame();
                if (!sourceFrame) {
                    return;
                }
                this.toolbarChangedListener = sourceFrame.addEventListener("ToolbarItemsChanged" /* UISourceCodeFrameEvents.ToolbarItemsChanged */ , this.updateScriptViewToolbarItems, this);
            }
        },
        {
            key: "onSearchCanceled",
            value: function onSearchCanceled() {
                if (this.searchView) {
                    this.searchView.onSearchCanceled();
                }
                delete this.searchView;
                delete this.searchConfig;
            }
        },
        {
            key: "performSearch",
            value: function performSearch(searchConfig, shouldJump, jumpBackwards) {
                var sourceFrame = this.currentSourceFrame();
                if (!sourceFrame) {
                    return;
                }
                this.searchView = sourceFrame;
                this.searchConfig = searchConfig;
                this.searchView.performSearch(this.searchConfig, shouldJump, jumpBackwards);
            }
        },
        {
            key: "jumpToNextSearchResult",
            value: function jumpToNextSearchResult() {
                if (!this.searchView) {
                    return;
                }
                if (this.searchConfig && this.searchView !== this.currentSourceFrame()) {
                    this.performSearch(this.searchConfig, true);
                    return;
                }
                this.searchView.jumpToNextSearchResult();
            }
        },
        {
            key: "jumpToPreviousSearchResult",
            value: function jumpToPreviousSearchResult() {
                if (!this.searchView) {
                    return;
                }
                if (this.searchConfig && this.searchView !== this.currentSourceFrame()) {
                    this.performSearch(this.searchConfig, true);
                    if (this.searchView) {
                        this.searchView.jumpToLastSearchResult();
                    }
                    return;
                }
                this.searchView.jumpToPreviousSearchResult();
            }
        },
        {
            key: "supportsCaseSensitiveSearch",
            value: function supportsCaseSensitiveSearch() {
                return true;
            }
        },
        {
            key: "supportsRegexSearch",
            value: function supportsRegexSearch() {
                return true;
            }
        },
        {
            key: "replaceSelectionWith",
            value: function replaceSelectionWith(searchConfig, replacement) {
                var sourceFrame = this.currentSourceFrame();
                if (!sourceFrame) {
                    console.assert(Boolean(sourceFrame));
                    return;
                }
                sourceFrame.replaceSelectionWith(searchConfig, replacement);
            }
        },
        {
            key: "replaceAllWith",
            value: function replaceAllWith(searchConfig, replacement) {
                var sourceFrame = this.currentSourceFrame();
                if (!sourceFrame) {
                    console.assert(Boolean(sourceFrame));
                    return;
                }
                sourceFrame.replaceAllWith(searchConfig, replacement);
            }
        },
        {
            key: "showOutlineQuickOpen",
            value: function showOutlineQuickOpen() {
                _ui_legacy_components_quick_open_quick_open_js__WEBPACK_IMPORTED_MODULE_8__.QuickOpen.QuickOpenImpl.show('@');
            }
        },
        {
            key: "showGoToLineQuickOpen",
            value: function showGoToLineQuickOpen() {
                if (this.editorContainer.currentFile()) {
                    _ui_legacy_components_quick_open_quick_open_js__WEBPACK_IMPORTED_MODULE_8__.QuickOpen.QuickOpenImpl.show(':');
                }
            }
        },
        {
            key: "save",
            value: function save() {
                this.saveSourceFrame(this.currentSourceFrame());
            }
        },
        {
            key: "saveAll",
            value: function saveAll() {
                var sourceFrames = this.editorContainer.fileViews();
                sourceFrames.forEach(this.saveSourceFrame.bind(this));
            }
        },
        {
            key: "saveSourceFrame",
            value: function saveSourceFrame(sourceFrame) {
                if (!_instanceof(sourceFrame, _UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_16__.UISourceCodeFrame)) {
                    return;
                }
                var uiSourceCodeFrame = sourceFrame;
                uiSourceCodeFrame.commitEditing();
            }
        },
        {
            key: "toggleBreakpointsActiveState",
            value: function toggleBreakpointsActiveState(active) {
                this.editorContainer.view.element.classList.toggle('breakpoints-deactivated', !active);
            }
        }
    ], [
        {
            key: "defaultUISourceCodeScores",
            value: function defaultUISourceCodeScores() {
                var defaultScores = new Map();
                var sourcesView = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Context.Context.instance().flavor(SourcesView);
                if (sourcesView) {
                    var uiSourceCodes = sourcesView.editorContainer.historyUISourceCodes();
                    for(var i = 1; i < uiSourceCodes.length; ++i){
                        defaultScores.set(uiSourceCodes[i], uiSourceCodes.length - i);
                    }
                }
                return defaultScores;
            }
        }
    ]);
    return SourcesView;
}(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Widget.VBox));
function onScopeChange() {
    var workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.WorkspaceImpl.instance();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = workspace.uiSourceCodes()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var uiSourceCode = _step.value;
            if (uiSourceCode.project().type() !== _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.projectTypes.Network) {
                continue;
            }
            var target = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.NetworkProject.NetworkProject.targetForUISourceCode(uiSourceCode);
            if (_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().isInScope(target)) {
                this.addUISourceCode(uiSourceCode);
            } else {
                this.removeUISourceCodes([
                    uiSourceCode
                ]);
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
}
function sourceViewTypeForWidget(widget) {
    if (_instanceof(widget, _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_9__.ImageView.ImageView)) {
        return "ImageView" /* SourceViewType.ImageView */ ;
    }
    if (_instanceof(widget, _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_9__.FontView.FontView)) {
        return "FontView" /* SourceViewType.FontView */ ;
    }
    if (_instanceof(widget, _components_components_js__WEBPACK_IMPORTED_MODULE_12__.HeadersView.HeadersView)) {
        return "HeadersView" /* SourceViewType.HeadersView */ ;
    }
    return "SourceView" /* SourceViewType.SourceView */ ;
}
function sourceViewTypeForUISourceCode(uiSourceCode) {
    if (uiSourceCode.name() === HEADER_OVERRIDES_FILENAME) {
        return "HeadersView" /* SourceViewType.HeadersView */ ;
    }
    var contentType = uiSourceCode.contentType();
    switch(contentType){
        case _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Image:
            return "ImageView" /* SourceViewType.ImageView */ ;
        case _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Font:
            return "FontView" /* SourceViewType.FontView */ ;
        default:
            return "SourceView" /* SourceViewType.SourceView */ ;
    }
}
function uiSourceCodeTitleChanged(event) {
    var uiSourceCode = event.data;
    var widget = this.sourceViewByUISourceCode.get(uiSourceCode);
    if (widget) {
        if (_class_private_method_get(this, _sourceViewTypeForWidget, sourceViewTypeForWidget).call(this, widget) !== _class_private_method_get(this, _sourceViewTypeForUISourceCode, sourceViewTypeForUISourceCode).call(this, uiSourceCode)) {
            // Remove the exisiting editor tab and create a new one of the correct type.
            this.removeUISourceCodes([
                uiSourceCode
            ]);
            this.showSourceLocation(uiSourceCode);
        }
    }
}
var registeredEditorActions = [];
function registerEditorAction(editorAction) {
    registeredEditorActions.push(editorAction);
}
function getRegisteredEditorActions() {
    return registeredEditorActions.map(function(editorAction) {
        return editorAction();
    });
}
var SwitchFileActionDelegate = /*#__PURE__*/ function() {
    "use strict";
    function SwitchFileActionDelegate() {
        _class_call_check(this, SwitchFileActionDelegate);
    }
    _create_class(SwitchFileActionDelegate, [
        {
            key: "handleAction",
            value: function handleAction(context, _actionId) {
                var sourcesView = context.flavor(SourcesView);
                if (!sourcesView) {
                    return false;
                }
                var currentUISourceCode = sourcesView.currentUISourceCode();
                if (!currentUISourceCode) {
                    return false;
                }
                var nextUISourceCode = SwitchFileActionDelegate.nextFile(currentUISourceCode);
                if (!nextUISourceCode) {
                    return false;
                }
                sourcesView.showSourceLocation(nextUISourceCode);
                return true;
            }
        }
    ], [
        {
            key: "nextFile",
            value: function nextFile(currentUISourceCode) {
                function fileNamePrefix(name) {
                    var lastDotIndex = name.lastIndexOf('.');
                    var namePrefix = name.substr(0, lastDotIndex !== -1 ? lastDotIndex : name.length);
                    return namePrefix.toLowerCase();
                }
                var candidates = [];
                var url = currentUISourceCode.parentURL();
                var name = currentUISourceCode.name();
                var namePrefix = fileNamePrefix(name);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = currentUISourceCode.project().uiSourceCodes()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var uiSourceCode = _step.value;
                        if (url !== uiSourceCode.parentURL()) {
                            continue;
                        }
                        if (fileNamePrefix(uiSourceCode.name()) === namePrefix) {
                            candidates.push(uiSourceCode.name());
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
                candidates.sort(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.naturalOrderComparator);
                var index = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.mod(candidates.indexOf(name) + 1, candidates.length);
                var fullURL = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.concatenate(url ? _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.concatenate(url, '/') : '', candidates[index]);
                var nextUISourceCode = currentUISourceCode.project().uiSourceCodeForURL(fullURL);
                return nextUISourceCode !== currentUISourceCode ? nextUISourceCode : null;
            }
        }
    ]);
    return SwitchFileActionDelegate;
}();
var ActionDelegate = /*#__PURE__*/ function() {
    "use strict";
    function ActionDelegate() {
        _class_call_check(this, ActionDelegate);
    }
    _create_class(ActionDelegate, [
        {
            key: "handleAction",
            value: function handleAction(context, actionId) {
                var sourcesView = context.flavor(SourcesView);
                if (!sourcesView) {
                    return false;
                }
                switch(actionId){
                    case 'sources.close-all':
                        sourcesView.editorContainer.closeAllFiles();
                        return true;
                    case 'sources.jump-to-previous-location':
                        sourcesView.onJumpToPreviousLocation();
                        return true;
                    case 'sources.jump-to-next-location':
                        sourcesView.onJumpToNextLocation();
                        return true;
                    case 'sources.next-editor-tab':
                        sourcesView.editorContainer.selectNextTab();
                        return true;
                    case 'sources.previous-editor-tab':
                        sourcesView.editorContainer.selectPrevTab();
                        return true;
                    case 'sources.close-editor-tab':
                        return sourcesView.onCloseEditorTab();
                    case 'sources.go-to-line':
                        sourcesView.showGoToLineQuickOpen();
                        return true;
                    case 'sources.go-to-member':
                        sourcesView.showOutlineQuickOpen();
                        return true;
                    case 'sources.save':
                        sourcesView.save();
                        return true;
                    case 'sources.save-all':
                        sourcesView.saveAll();
                        return true;
                }
                return false;
            }
        }
    ]);
    return ActionDelegate;
}();
var HEADER_OVERRIDES_FILENAME = '.headers'; //# sourceMappingURL=SourcesView.js.map


}),
"./panels/sources/TabbedEditorContainer.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  EditorContainerTabDelegate: function() { return EditorContainerTabDelegate; },
  History: function() { return History; },
  HistoryItem: function() { return HistoryItem; },
  TabbedEditorContainer: function() { return TabbedEditorContainer; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/extensions/extensions.js */ "./models/extensions/extensions.js");
/* harmony import */var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _snippets_snippets_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../snippets/snippets.js */ "./panels/snippets/snippets.js");
/* harmony import */var _SourcesView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SourcesView.js */ "./panels/sources/SourcesView.js");
/* harmony import */var _UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./UISourceCodeFrame.js */ "./panels/sources/UISourceCodeFrame.js");
/*
 * Copyright (C) 2011 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ function _array_like_to_array(arr, len) {
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
     *@description Text in Tabbed Editor Container of the Sources panel
     *@example {example.file} PH1
     */ areYouSureYouWantToCloseUnsaved: 'Are you sure you want to close unsaved file: {PH1}?',
    /**
     *@description Error message for tooltip showing that a file in Sources could not be loaded
     */ unableToLoadThisContent: 'Unable to load this content.',
    /**
     *@description Icon title in Tabbed Editor Container of the Sources panel
     */ changesToThisFileWereNotSavedTo: 'Changes to this file were not saved to file system.'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/sources/TabbedEditorContainer.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var tabId = 0;
var _onRequestsForHeaderOverridesFileChanged = /*#__PURE__*/ new WeakSet();
var TabbedEditorContainer = /*#__PURE__*/ function(_Common_ObjectWrapper_ObjectWrapper) {
    "use strict";
    _inherits(TabbedEditorContainer, _Common_ObjectWrapper_ObjectWrapper);
    var _super = _create_super(TabbedEditorContainer);
    function TabbedEditorContainer(delegate, setting, placeholderElement, focusedPlaceholderElement) {
        _class_call_check(this, TabbedEditorContainer);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _onRequestsForHeaderOverridesFileChanged);
        _define_property(_assert_this_initialized(_this), "delegate", void 0);
        _define_property(_assert_this_initialized(_this), "tabbedPane", void 0);
        _define_property(_assert_this_initialized(_this), "tabIds", void 0);
        _define_property(_assert_this_initialized(_this), "files", void 0);
        _define_property(_assert_this_initialized(_this), "previouslyViewedFilesSetting", void 0);
        _define_property(_assert_this_initialized(_this), "history", void 0);
        _define_property(_assert_this_initialized(_this), "uriToUISourceCode", void 0);
        _define_property(_assert_this_initialized(_this), "idToUISourceCode", void 0);
        _define_property(_assert_this_initialized(_this), "currentFileInternal", void 0);
        _define_property(_assert_this_initialized(_this), "currentView", void 0);
        _define_property(_assert_this_initialized(_this), "scrollTimer", void 0);
        _define_property(_assert_this_initialized(_this), "reentrantShow", void 0);
        _this.delegate = delegate;
        _this.tabbedPane = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.TabbedPane.TabbedPane();
        _this.tabbedPane.setPlaceholderElement(placeholderElement, focusedPlaceholderElement);
        _this.tabbedPane.setTabDelegate(new EditorContainerTabDelegate(_assert_this_initialized(_this)));
        _this.tabbedPane.setCloseableTabs(true);
        _this.tabbedPane.setAllowTabReorder(true, true);
        _this.tabbedPane.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.TabbedPane.Events.TabClosed, _this.tabClosed, _assert_this_initialized(_this));
        _this.tabbedPane.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.TabbedPane.Events.TabSelected, _this.tabSelected, _assert_this_initialized(_this));
        _this.tabbedPane.headerElement().setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.toolbar('top').track({
            keydown: 'ArrowUp|ArrowLeft|ArrowDown|ArrowRight|Enter|Space'
        })));
        _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.Persistence.PersistenceImpl.instance().addEventListener(_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.Persistence.Events.BindingCreated, _this.onBindingCreated, _assert_this_initialized(_this));
        _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.Persistence.PersistenceImpl.instance().addEventListener(_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.Persistence.Events.BindingRemoved, _this.onBindingRemoved, _assert_this_initialized(_this));
        _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.NetworkPersistenceManager.NetworkPersistenceManager.instance().addEventListener("RequestsForHeaderOverridesFileChanged" /* Persistence.NetworkPersistenceManager.Events.RequestsForHeaderOverridesFileChanged */ , _class_private_method_get(_assert_this_initialized(_this), _onRequestsForHeaderOverridesFileChanged, onRequestsForHeaderOverridesFileChanged), _assert_this_initialized(_this));
        _this.tabIds = new Map();
        _this.files = new Map();
        _this.previouslyViewedFilesSetting = setting;
        _this.history = History.fromObject(_this.previouslyViewedFilesSetting.get());
        _this.uriToUISourceCode = new Map();
        _this.idToUISourceCode = new Map();
        _this.reentrantShow = false;
        return _this;
    }
    _create_class(TabbedEditorContainer, [
        {
            key: "onBindingCreated",
            value: function onBindingCreated(event) {
                var binding = event.data;
                this.updateFileTitle(binding.fileSystem);
                var networkTabId = this.tabIds.get(binding.network);
                var fileSystemTabId = this.tabIds.get(binding.fileSystem);
                var wasSelectedInNetwork = this.currentFileInternal === binding.network;
                var networkKey = historyItemKey(binding.network);
                var currentSelectionRange = this.history.selectionRange(networkKey);
                var currentScrollLineNumber = this.history.scrollLineNumber(networkKey);
                this.history.remove(networkKey);
                if (!networkTabId) {
                    return;
                }
                if (!fileSystemTabId) {
                    var networkView = this.tabbedPane.tabView(networkTabId);
                    var tabIndex = this.tabbedPane.tabIndex(networkTabId);
                    if (_instanceof(networkView, _UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_13__.UISourceCodeFrame)) {
                        this.delegate.recycleUISourceCodeFrame(networkView, binding.fileSystem);
                        fileSystemTabId = this.appendFileTab(binding.fileSystem, false, tabIndex, networkView);
                    } else {
                        fileSystemTabId = this.appendFileTab(binding.fileSystem, false, tabIndex);
                        var fileSystemTabView = this.tabbedPane.tabView(fileSystemTabId);
                        this.restoreEditorProperties(fileSystemTabView, currentSelectionRange, currentScrollLineNumber);
                    }
                }
                this.closeTabs([
                    networkTabId
                ], true);
                if (wasSelectedInNetwork) {
                    this.tabbedPane.selectTab(fileSystemTabId, false);
                }
                this.updateHistory();
            }
        },
        {
            key: "onBindingRemoved",
            value: function onBindingRemoved(event) {
                var binding = event.data;
                this.updateFileTitle(binding.fileSystem);
            }
        },
        {
            key: "view",
            get: function get() {
                return this.tabbedPane;
            }
        },
        {
            key: "visibleView",
            get: function get() {
                return this.tabbedPane.visibleView;
            }
        },
        {
            key: "fileViews",
            value: function fileViews() {
                return this.tabbedPane.tabViews();
            }
        },
        {
            key: "leftToolbar",
            value: function leftToolbar() {
                return this.tabbedPane.leftToolbar();
            }
        },
        {
            key: "rightToolbar",
            value: function rightToolbar() {
                return this.tabbedPane.rightToolbar();
            }
        },
        {
            key: "show",
            value: function show(parentElement) {
                this.tabbedPane.show(parentElement);
            }
        },
        {
            key: "showFile",
            value: function showFile(uiSourceCode) {
                var _frame_currentSourceFrame;
                var binding = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.Persistence.PersistenceImpl.instance().binding(uiSourceCode);
                uiSourceCode = binding ? binding.fileSystem : uiSourceCode;
                var frame = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Context.Context.instance().flavor(_SourcesView_js__WEBPACK_IMPORTED_MODULE_12__.SourcesView);
                // If the content has already been set and the current frame is showing
                // the incoming uiSourceCode, then fire the event that the file has been loaded.
                // Otherwise, this event will fire as soon as the content has been set.
                if ((frame === null || frame === void 0 ? void 0 : (_frame_currentSourceFrame = frame.currentSourceFrame()) === null || _frame_currentSourceFrame === void 0 ? void 0 : _frame_currentSourceFrame.contentSet) && this.currentFileInternal === uiSourceCode && (frame === null || frame === void 0 ? void 0 : frame.currentUISourceCode()) === uiSourceCode) {
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.fireEvent('source-file-loaded', uiSourceCode.displayName(true));
                } else {
                    this.innerShowFile(uiSourceCode, true);
                }
            }
        },
        {
            key: "closeFile",
            value: function closeFile(uiSourceCode) {
                var tabId = this.tabIds.get(uiSourceCode);
                if (!tabId) {
                    return;
                }
                this.closeTabs([
                    tabId
                ]);
            }
        },
        {
            key: "closeAllFiles",
            value: function closeAllFiles() {
                this.closeTabs(this.tabbedPane.tabIds());
            }
        },
        {
            key: "historyUISourceCodes",
            value: function historyUISourceCodes() {
                var result = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.history.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _step.value, url = _step_value.url, resourceType = _step_value.resourceType;
                        var uiSourceCode = this.uriToUISourceCode.get(url);
                        if (uiSourceCode !== undefined && uiSourceCode.contentType() === resourceType) {
                            result.push(uiSourceCode);
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
                return result;
            }
        },
        {
            key: "selectNextTab",
            value: function selectNextTab() {
                this.tabbedPane.selectNextTab();
            }
        },
        {
            key: "selectPrevTab",
            value: function selectPrevTab() {
                this.tabbedPane.selectPrevTab();
            }
        },
        {
            key: "addViewListeners",
            value: function addViewListeners() {
                if (!this.currentView || !_instanceof(this.currentView, _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_8__.SourceFrame.SourceFrameImpl)) {
                    return;
                }
                this.currentView.addEventListener("EditorUpdate" /* SourceFrame.SourceFrame.Events.EditorUpdate */ , this.onEditorUpdate, this);
                this.currentView.addEventListener("EditorScroll" /* SourceFrame.SourceFrame.Events.EditorScroll */ , this.onScrollChanged, this);
            }
        },
        {
            key: "removeViewListeners",
            value: function removeViewListeners() {
                if (!this.currentView || !_instanceof(this.currentView, _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_8__.SourceFrame.SourceFrameImpl)) {
                    return;
                }
                this.currentView.removeEventListener("EditorUpdate" /* SourceFrame.SourceFrame.Events.EditorUpdate */ , this.onEditorUpdate, this);
                this.currentView.removeEventListener("EditorScroll" /* SourceFrame.SourceFrame.Events.EditorScroll */ , this.onScrollChanged, this);
            }
        },
        {
            key: "onScrollChanged",
            value: function onScrollChanged() {
                var _this = this;
                if (_instanceof(this.currentView, _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_8__.SourceFrame.SourceFrameImpl)) {
                    if (this.scrollTimer) {
                        clearTimeout(this.scrollTimer);
                    }
                    this.scrollTimer = window.setTimeout(function() {
                        return _this.previouslyViewedFilesSetting.set(_this.history.toObject());
                    }, 100);
                    if (this.currentFileInternal) {
                        var editor = this.currentView.textEditor.editor;
                        var topBlock = editor.lineBlockAtHeight(editor.scrollDOM.getBoundingClientRect().top - editor.documentTop);
                        var topLine = editor.state.doc.lineAt(topBlock.from).number - 1;
                        this.history.updateScrollLineNumber(historyItemKey(this.currentFileInternal), topLine);
                    }
                }
            }
        },
        {
            key: "onEditorUpdate",
            value: function onEditorUpdate(param) {
                var update = param.data;
                if (update.docChanged || update.selectionSet) {
                    var main = update.state.selection.main;
                    var lineFrom = update.state.doc.lineAt(main.from), lineTo = update.state.doc.lineAt(main.to);
                    var range = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_5__.TextRange.TextRange(lineFrom.number - 1, main.from - lineFrom.from, lineTo.number - 1, main.to - lineTo.from);
                    if (this.currentFileInternal) {
                        this.history.updateSelectionRange(historyItemKey(this.currentFileInternal), range);
                    }
                    this.previouslyViewedFilesSetting.set(this.history.toObject());
                    if (this.currentFileInternal) {
                        _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_3__.ExtensionServer.ExtensionServer.instance().sourceSelectionChanged(this.currentFileInternal.url(), range);
                    }
                }
            }
        },
        {
            key: "innerShowFile",
            value: function innerShowFile(uiSourceCode, userGesture) {
                if (this.reentrantShow) {
                    return;
                }
                var canonicalSourceCode = this.canonicalUISourceCode(uiSourceCode);
                var binding = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.Persistence.PersistenceImpl.instance().binding(uiSourceCode);
                uiSourceCode = binding ? binding.fileSystem : uiSourceCode;
                if (this.currentFileInternal === uiSourceCode) {
                    return;
                }
                this.removeViewListeners();
                this.currentFileInternal = uiSourceCode;
                try {
                    // Selecting the tab may cause showFile to be called again, but with the canonical source code,
                    // which is not what we want, so we prevent reentrant calls.
                    this.reentrantShow = true;
                    var tabId = this.tabIds.get(canonicalSourceCode) || this.appendFileTab(canonicalSourceCode, userGesture);
                    this.tabbedPane.selectTab(tabId, userGesture);
                } finally{
                    this.reentrantShow = false;
                }
                if (userGesture) {
                    this.editorSelectedByUserAction();
                }
                var previousView = this.currentView;
                this.currentView = this.visibleView;
                this.addViewListeners();
                if (_instanceof(this.currentView, _UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_13__.UISourceCodeFrame) && this.currentView.uiSourceCode() !== uiSourceCode) {
                    // We are showing a different UISourceCode in the same tab (because it has the same URL). This
                    // commonly happens when switching between workers or iframes containing the same code, and while the
                    // contents are usually identical they may not be and it is important to show users when they aren't.
                    this.delegate.recycleUISourceCodeFrame(this.currentView, uiSourceCode);
                    if (uiSourceCode.project().type() !== _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.FileSystem) {
                        // Disable editing, because it may confuse users that only one of the copies of this code changes.
                        uiSourceCode.disableEdit();
                    }
                }
                var eventData = {
                    currentFile: this.currentFileInternal,
                    currentView: this.currentView,
                    previousView: previousView,
                    userGesture: userGesture
                };
                this.dispatchEventToListeners("EditorSelected" /* Events.EditorSelected */ , eventData);
            }
        },
        {
            key: "titleForFile",
            value: function titleForFile(uiSourceCode) {
                var maxDisplayNameLength = 30;
                var title = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.trimMiddle(uiSourceCode.displayName(true), maxDisplayNameLength);
                if (uiSourceCode.isDirty()) {
                    title += '*';
                }
                return title;
            }
        },
        {
            key: "maybeCloseTab",
            value: function maybeCloseTab(id, nextTabId) {
                var uiSourceCode = this.files.get(id);
                if (!uiSourceCode) {
                    return false;
                }
                var shouldPrompt = uiSourceCode.isDirty() && uiSourceCode.project().canSetFileContent();
                // FIXME: this should be replaced with common Save/Discard/Cancel dialog.
                if (!shouldPrompt || confirm(i18nString(UIStrings.areYouSureYouWantToCloseUnsaved, {
                    PH1: uiSourceCode.name()
                }))) {
                    uiSourceCode.resetWorkingCopy();
                    if (nextTabId) {
                        this.tabbedPane.selectTab(nextTabId, true);
                    }
                    this.tabbedPane.closeTab(id, true);
                    return true;
                }
                return false;
            }
        },
        {
            key: "closeTabs",
            value: function closeTabs(ids, forceCloseDirtyTabs) {
                var dirtyTabs = [];
                var cleanTabs = [];
                for(var i = 0; i < ids.length; ++i){
                    var id = ids[i];
                    var uiSourceCode = this.files.get(id);
                    if (uiSourceCode) {
                        if (!forceCloseDirtyTabs && uiSourceCode.isDirty()) {
                            dirtyTabs.push(id);
                        } else {
                            cleanTabs.push(id);
                        }
                    }
                }
                if (dirtyTabs.length) {
                    this.tabbedPane.selectTab(dirtyTabs[0], true);
                }
                this.tabbedPane.closeTabs(cleanTabs, true);
                for(var i1 = 0; i1 < dirtyTabs.length; ++i1){
                    var nextTabId = i1 + 1 < dirtyTabs.length ? dirtyTabs[i1 + 1] : null;
                    if (!this.maybeCloseTab(dirtyTabs[i1], nextTabId)) {
                        break;
                    }
                }
            }
        },
        {
            key: "onContextMenu",
            value: function onContextMenu(tabId, contextMenu) {
                var uiSourceCode = this.files.get(tabId);
                if (uiSourceCode) {
                    contextMenu.appendApplicableItems(uiSourceCode);
                }
            }
        },
        {
            key: "canonicalUISourceCode",
            value: function canonicalUISourceCode(uiSourceCode) {
                // Check if we have already a UISourceCode for this url
                var existingSourceCode = this.idToUISourceCode.get(uiSourceCode.canononicalScriptId());
                if (existingSourceCode) {
                    // Ignore incoming uiSourceCode, we already have this file.
                    return existingSourceCode;
                }
                this.idToUISourceCode.set(uiSourceCode.canononicalScriptId(), uiSourceCode);
                this.uriToUISourceCode.set(uiSourceCode.url(), uiSourceCode);
                return uiSourceCode;
            }
        },
        {
            key: "addUISourceCode",
            value: function addUISourceCode(uiSourceCode) {
                var _this_currentFileInternal;
                var canonicalSourceCode = this.canonicalUISourceCode(uiSourceCode);
                var duplicated = canonicalSourceCode !== uiSourceCode;
                var binding = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.Persistence.PersistenceImpl.instance().binding(canonicalSourceCode);
                uiSourceCode = binding ? binding.fileSystem : canonicalSourceCode;
                if (duplicated && uiSourceCode.project().type() !== _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.FileSystem) {
                    uiSourceCode.disableEdit();
                }
                if (((_this_currentFileInternal = this.currentFileInternal) === null || _this_currentFileInternal === void 0 ? void 0 : _this_currentFileInternal.canononicalScriptId()) === uiSourceCode.canononicalScriptId()) {
                    return;
                }
                var index = this.history.index(historyItemKey(uiSourceCode));
                if (index === -1) {
                    return;
                }
                if (!this.tabIds.has(uiSourceCode)) {
                    this.appendFileTab(uiSourceCode, false);
                }
                // Select tab if this file was the last to be shown.
                if (!index) {
                    this.innerShowFile(uiSourceCode, false);
                    return;
                }
                if (!this.currentFileInternal) {
                    return;
                }
                var currentProjectIsSnippets = _snippets_snippets_js__WEBPACK_IMPORTED_MODULE_11__.ScriptSnippetFileSystem.isSnippetsUISourceCode(this.currentFileInternal);
                var addedProjectIsSnippets = _snippets_snippets_js__WEBPACK_IMPORTED_MODULE_11__.ScriptSnippetFileSystem.isSnippetsUISourceCode(uiSourceCode);
                if (this.history.index(historyItemKey(this.currentFileInternal)) && currentProjectIsSnippets && !addedProjectIsSnippets) {
                    this.innerShowFile(uiSourceCode, false);
                }
            }
        },
        {
            key: "removeUISourceCode",
            value: function removeUISourceCode(uiSourceCode) {
                this.removeUISourceCodes([
                    uiSourceCode
                ]);
            }
        },
        {
            key: "removeUISourceCodes",
            value: function removeUISourceCodes(uiSourceCodes) {
                var tabIds = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = uiSourceCodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var uiSourceCode = _step.value;
                        var tabId = this.tabIds.get(uiSourceCode);
                        if (tabId) {
                            tabIds.push(tabId);
                        }
                        if (this.uriToUISourceCode.get(uiSourceCode.url()) === uiSourceCode) {
                            this.uriToUISourceCode.delete(uiSourceCode.url());
                        }
                        if (this.idToUISourceCode.get(uiSourceCode.canononicalScriptId()) === uiSourceCode) {
                            this.idToUISourceCode.delete(uiSourceCode.canononicalScriptId());
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
                this.tabbedPane.closeTabs(tabIds);
            }
        },
        {
            key: "editorClosedByUserAction",
            value: function editorClosedByUserAction(uiSourceCode) {
                this.history.remove(historyItemKey(uiSourceCode));
                this.updateHistory();
            }
        },
        {
            key: "editorSelectedByUserAction",
            value: function editorSelectedByUserAction() {
                this.updateHistory();
            }
        },
        {
            key: "updateHistory",
            value: function updateHistory() {
                var historyItemKeys = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.tabbedPane.lastOpenedTabIds(MAX_PREVIOUSLY_VIEWED_FILES_COUNT)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var tabId = _step.value;
                        var uiSourceCode = this.files.get(tabId);
                        if (uiSourceCode !== undefined) {
                            historyItemKeys.push(historyItemKey(uiSourceCode));
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
                this.history.update(historyItemKeys);
                this.previouslyViewedFilesSetting.set(this.history.toObject());
            }
        },
        {
            key: "tooltipForFile",
            value: function tooltipForFile(uiSourceCode) {
                uiSourceCode = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.Persistence.PersistenceImpl.instance().network(uiSourceCode) || uiSourceCode;
                return uiSourceCode.url();
            }
        },
        {
            key: "appendFileTab",
            value: function appendFileTab(uiSourceCode, userGesture, index, replaceView) {
                var _this = this;
                var view = replaceView || this.delegate.viewForFile(uiSourceCode);
                var title = this.titleForFile(uiSourceCode);
                var tooltip = this.tooltipForFile(uiSourceCode);
                var tabId = this.generateTabId();
                this.tabIds.set(uiSourceCode, tabId);
                this.files.set(tabId, uiSourceCode);
                if (!replaceView) {
                    var savedSelectionRange = this.history.selectionRange(historyItemKey(uiSourceCode));
                    var savedScrollLineNumber = this.history.scrollLineNumber(historyItemKey(uiSourceCode));
                    this.restoreEditorProperties(view, savedSelectionRange, savedScrollLineNumber);
                }
                this.tabbedPane.appendTab(tabId, title, view, tooltip, userGesture, undefined, undefined, index);
                this.updateFileTitle(uiSourceCode);
                this.addUISourceCodeListeners(uiSourceCode);
                if (uiSourceCode.loadError()) {
                    this.addLoadErrorIcon(tabId);
                } else if (!uiSourceCode.contentLoaded()) {
                    void uiSourceCode.requestContent().then(function(_content) {
                        if (uiSourceCode.loadError()) {
                            _this.addLoadErrorIcon(tabId);
                        }
                    });
                }
                return tabId;
            }
        },
        {
            key: "addLoadErrorIcon",
            value: function addLoadErrorIcon(tabId) {
                var icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.Icon();
                icon.data = {
                    iconName: 'cross-circle-filled',
                    color: 'var(--icon-error)',
                    width: '14px',
                    height: '14px'
                };
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Tooltip.Tooltip.install(icon, i18nString(UIStrings.unableToLoadThisContent));
                if (this.tabbedPane.tabView(tabId)) {
                    this.tabbedPane.setTabIcon(tabId, icon);
                }
            }
        },
        {
            key: "restoreEditorProperties",
            value: function restoreEditorProperties(editorView, selection, firstLineNumber) {
                var sourceFrame = _instanceof(editorView, _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_8__.SourceFrame.SourceFrameImpl) ? editorView : null;
                if (!sourceFrame) {
                    return;
                }
                if (selection) {
                    sourceFrame.setSelection(selection);
                }
                if (typeof firstLineNumber === 'number') {
                    sourceFrame.scrollToLine(firstLineNumber);
                }
            }
        },
        {
            key: "tabClosed",
            value: function tabClosed(event) {
                var _event_data = event.data, tabId = _event_data.tabId, isUserGesture = _event_data.isUserGesture;
                var uiSourceCode = this.files.get(tabId);
                if (this.currentFileInternal && this.currentFileInternal.canononicalScriptId() === (uiSourceCode === null || uiSourceCode === void 0 ? void 0 : uiSourceCode.canononicalScriptId())) {
                    this.removeViewListeners();
                    this.currentView = null;
                    this.currentFileInternal = null;
                }
                if (uiSourceCode) {
                    this.tabIds.delete(uiSourceCode);
                }
                this.files.delete(tabId);
                if (uiSourceCode) {
                    this.removeUISourceCodeListeners(uiSourceCode);
                    this.dispatchEventToListeners("EditorClosed" /* Events.EditorClosed */ , uiSourceCode);
                    if (isUserGesture) {
                        this.editorClosedByUserAction(uiSourceCode);
                    }
                }
            }
        },
        {
            key: "tabSelected",
            value: function tabSelected(event) {
                var _event_data = event.data, tabId = _event_data.tabId, isUserGesture = _event_data.isUserGesture;
                var uiSourceCode = this.files.get(tabId);
                if (uiSourceCode) {
                    this.innerShowFile(uiSourceCode, isUserGesture);
                }
            }
        },
        {
            key: "addUISourceCodeListeners",
            value: function addUISourceCodeListeners(uiSourceCode) {
                uiSourceCode.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.TitleChanged, this.uiSourceCodeTitleChanged, this);
                uiSourceCode.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.WorkingCopyChanged, this.uiSourceCodeWorkingCopyChanged, this);
                uiSourceCode.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.WorkingCopyCommitted, this.uiSourceCodeWorkingCopyCommitted, this);
            }
        },
        {
            key: "removeUISourceCodeListeners",
            value: function removeUISourceCodeListeners(uiSourceCode) {
                uiSourceCode.removeEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.TitleChanged, this.uiSourceCodeTitleChanged, this);
                uiSourceCode.removeEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.WorkingCopyChanged, this.uiSourceCodeWorkingCopyChanged, this);
                uiSourceCode.removeEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.WorkingCopyCommitted, this.uiSourceCodeWorkingCopyCommitted, this);
            }
        },
        {
            key: "updateFileTitle",
            value: function updateFileTitle(uiSourceCode) {
                var tabId = this.tabIds.get(uiSourceCode);
                if (tabId) {
                    var title = this.titleForFile(uiSourceCode);
                    var tooltip = this.tooltipForFile(uiSourceCode);
                    this.tabbedPane.changeTabTitle(tabId, title, tooltip);
                    var icon = null;
                    if (uiSourceCode.loadError()) {
                        icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.Icon();
                        icon.data = {
                            iconName: 'cross-circle-filled',
                            color: 'var(--icon-error)',
                            width: '14px',
                            height: '14px'
                        };
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Tooltip.Tooltip.install(icon, i18nString(UIStrings.unableToLoadThisContent));
                    } else if (_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.Persistence.PersistenceImpl.instance().hasUnsavedCommittedChanges(uiSourceCode)) {
                        icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.Icon();
                        icon.data = {
                            iconName: 'warning-filled',
                            color: 'var(--icon-warning)',
                            width: '14px',
                            height: '14px'
                        };
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Tooltip.Tooltip.install(icon, i18nString(UIStrings.changesToThisFileWereNotSavedTo));
                    } else {
                        icon = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.PersistenceUtils.PersistenceUtils.iconForUISourceCode(uiSourceCode);
                    }
                    this.tabbedPane.setTabIcon(tabId, icon);
                }
            }
        },
        {
            key: "uiSourceCodeTitleChanged",
            value: function uiSourceCodeTitleChanged(event) {
                var uiSourceCode = event.data;
                this.updateFileTitle(uiSourceCode);
                this.updateHistory();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    // Remove from map under old url if it has changed.
                    for(var _iterator = this.uriToUISourceCode[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array(_step.value, 2), k = _step_value[0], v = _step_value[1];
                        if (v === uiSourceCode && k !== v.url()) {
                            this.uriToUISourceCode.delete(k);
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
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    // Remove from map under old id if it has changed.
                    for(var _iterator1 = this.idToUISourceCode[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var _step_value1 = _sliced_to_array(_step1.value, 2), k1 = _step_value1[0], v1 = _step_value1[1];
                        if (v1 === uiSourceCode && k1 !== v1.canononicalScriptId()) {
                            this.idToUISourceCode.delete(k1);
                        }
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
                // Ensure it is mapped under current url and id.
                this.canonicalUISourceCode(uiSourceCode);
            }
        },
        {
            key: "uiSourceCodeWorkingCopyChanged",
            value: function uiSourceCodeWorkingCopyChanged(event) {
                var uiSourceCode = event.data;
                this.updateFileTitle(uiSourceCode);
            }
        },
        {
            key: "uiSourceCodeWorkingCopyCommitted",
            value: function uiSourceCodeWorkingCopyCommitted(event) {
                var uiSourceCode = event.data.uiSourceCode;
                this.updateFileTitle(uiSourceCode);
            }
        },
        {
            key: "generateTabId",
            value: function generateTabId() {
                return 'tab-' + tabId++;
            }
        },
        {
            key: "currentFile",
            value: function currentFile() {
                return this.currentFileInternal || null;
            }
        }
    ]);
    return TabbedEditorContainer;
}(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper);
function onRequestsForHeaderOverridesFileChanged(event) {
    this.updateFileTitle(event.data);
}
var MAX_PREVIOUSLY_VIEWED_FILES_COUNT = 30;
var MAX_SERIALIZABLE_URL_LENGTH = 4096;
function historyItemKey(uiSourceCode) {
    return {
        url: uiSourceCode.url(),
        resourceType: uiSourceCode.contentType()
    };
}
var HistoryItem = /*#__PURE__*/ function() {
    "use strict";
    function HistoryItem(url, resourceType, selectionRange, scrollLineNumber) {
        _class_call_check(this, HistoryItem);
        _define_property(this, "url", void 0);
        _define_property(this, "resourceType", void 0);
        _define_property(this, "selectionRange", void 0);
        _define_property(this, "scrollLineNumber", void 0);
        this.url = url;
        this.resourceType = resourceType;
        this.selectionRange = selectionRange;
        this.scrollLineNumber = scrollLineNumber;
    }
    _create_class(HistoryItem, [
        {
            key: "toObject",
            value: function toObject() {
                if (this.url.length >= MAX_SERIALIZABLE_URL_LENGTH) {
                    return null;
                }
                return {
                    url: this.url,
                    resourceTypeName: this.resourceType.name(),
                    selectionRange: this.selectionRange,
                    scrollLineNumber: this.scrollLineNumber
                };
            }
        }
    ], [
        {
            key: "fromObject",
            value: function fromObject(serializedHistoryItem) {
                var resourceType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromName(serializedHistoryItem.resourceTypeName);
                if (resourceType === null) {
                    throw new TypeError('Invalid resource type name "'.concat(serializedHistoryItem.resourceTypeName, '"'));
                }
                var selectionRange = serializedHistoryItem.selectionRange ? _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_5__.TextRange.TextRange.fromObject(serializedHistoryItem.selectionRange) : undefined;
                return new HistoryItem(serializedHistoryItem.url, resourceType, selectionRange, serializedHistoryItem.scrollLineNumber);
            }
        }
    ]);
    return HistoryItem;
}();
var History = /*#__PURE__*/ function() {
    "use strict";
    function History(items) {
        _class_call_check(this, History);
        _define_property(this, "items", void 0);
        this.items = items;
    }
    _create_class(History, [
        {
            key: "index",
            value: function index(param) {
                var url = param.url, resourceType = param.resourceType;
                return this.items.findIndex(function(item) {
                    return item.url === url && item.resourceType === resourceType;
                });
            }
        },
        {
            key: "selectionRange",
            value: function selectionRange(key) {
                var index = this.index(key);
                if (index === -1) {
                    return undefined;
                }
                return this.items[index].selectionRange;
            }
        },
        {
            key: "updateSelectionRange",
            value: function updateSelectionRange(key, selectionRange) {
                if (!selectionRange) {
                    return;
                }
                var index = this.index(key);
                if (index === -1) {
                    return;
                }
                this.items[index].selectionRange = selectionRange;
            }
        },
        {
            key: "scrollLineNumber",
            value: function scrollLineNumber(key) {
                var index = this.index(key);
                if (index === -1) {
                    return;
                }
                return this.items[index].scrollLineNumber;
            }
        },
        {
            key: "updateScrollLineNumber",
            value: function updateScrollLineNumber(key, scrollLineNumber) {
                var index = this.index(key);
                if (index === -1) {
                    return;
                }
                this.items[index].scrollLineNumber = scrollLineNumber;
            }
        },
        {
            key: "update",
            value: function update(keys) {
                for(var i = keys.length - 1; i >= 0; --i){
                    var index = this.index(keys[i]);
                    var item = void 0;
                    if (index !== -1) {
                        item = this.items[index];
                        this.items.splice(index, 1);
                    } else {
                        item = new HistoryItem(keys[i].url, keys[i].resourceType);
                    }
                    this.items.unshift(item);
                }
            }
        },
        {
            key: "remove",
            value: function remove(key) {
                var index = this.index(key);
                if (index === -1) {
                    return;
                }
                this.items.splice(index, 1);
            }
        },
        {
            key: "toObject",
            value: function toObject() {
                var serializedHistoryItems = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var item = _step.value;
                        var serializedItem = item.toObject();
                        if (serializedItem) {
                            serializedHistoryItems.push(serializedItem);
                        }
                        if (serializedHistoryItems.length === MAX_PREVIOUSLY_VIEWED_FILES_COUNT) {
                            break;
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
                return serializedHistoryItems;
            }
        },
        {
            // eslint-disable-next-line rulesdir/prefer_readonly_keyword
            key: "keys",
            value: function keys() {
                return this.items;
            }
        }
    ], [
        {
            key: "fromObject",
            value: function fromObject(serializedHistoryItems) {
                var items = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = serializedHistoryItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var serializedHistoryItem = _step.value;
                        try {
                            items.push(HistoryItem.fromObject(serializedHistoryItem));
                        } catch (e) {}
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
                return new History(items);
            }
        }
    ]);
    return History;
}();
var EditorContainerTabDelegate = /*#__PURE__*/ function() {
    "use strict";
    function EditorContainerTabDelegate(editorContainer) {
        _class_call_check(this, EditorContainerTabDelegate);
        _define_property(this, "editorContainer", void 0);
        this.editorContainer = editorContainer;
    }
    _create_class(EditorContainerTabDelegate, [
        {
            key: "closeTabs",
            value: function closeTabs(_tabbedPane, ids) {
                this.editorContainer.closeTabs(ids);
            }
        },
        {
            key: "onContextMenu",
            value: function onContextMenu(tabId, contextMenu) {
                this.editorContainer.onContextMenu(tabId, contextMenu);
            }
        }
    ]);
    return EditorContainerTabDelegate;
} //# sourceMappingURL=TabbedEditorContainer.js.map
();


}),
"./panels/sources/UISourceCodeFrame.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  UISourceCodeFrame: function() { return UISourceCodeFrame; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _entrypoints_formatter_worker_FormatterActions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../entrypoints/formatter_worker/FormatterActions.js */ "./entrypoints/formatter_worker/FormatterActions.js");
/* harmony import */var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
/* harmony import */var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../third_party/codemirror.next/codemirror.next.js */ "./third_party/codemirror.next/codemirror.next.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/components/issue_counter/issue_counter.js */ "./ui/components/issue_counter/issue_counter.js");
/* harmony import */var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _CoveragePlugin_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CoveragePlugin.js */ "./panels/sources/CoveragePlugin.js");
/* harmony import */var _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CSSPlugin.js */ "./panels/sources/CSSPlugin.js");
/* harmony import */var _DebuggerPlugin_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./DebuggerPlugin.js */ "./panels/sources/DebuggerPlugin.js");
/* harmony import */var _ProfilePlugin_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ProfilePlugin.js */ "./panels/sources/ProfilePlugin.js");
/* harmony import */var _ResourceOriginPlugin_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ResourceOriginPlugin.js */ "./panels/sources/ResourceOriginPlugin.js");
/* harmony import */var _SnippetsPlugin_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./SnippetsPlugin.js */ "./panels/sources/SnippetsPlugin.js");
/* harmony import */var _SourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./SourcesPanel.js */ "./panels/sources/SourcesPanel.js");
/*
 * Copyright (C) 2012 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
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


 // eslint-disable-line rulesdir/es_modules_import
















function sourceFramePlugins() {
    // The order of these plugins matters for toolbar items and editor
    // extension precedence
    return [
        _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_13__.CSSPlugin,
        _DebuggerPlugin_js__WEBPACK_IMPORTED_MODULE_14__.DebuggerPlugin,
        _SnippetsPlugin_js__WEBPACK_IMPORTED_MODULE_17__.SnippetsPlugin,
        _ResourceOriginPlugin_js__WEBPACK_IMPORTED_MODULE_16__.ResourceOriginPlugin,
        _CoveragePlugin_js__WEBPACK_IMPORTED_MODULE_12__.CoveragePlugin,
        _ProfilePlugin_js__WEBPACK_IMPORTED_MODULE_15__.MemoryProfilePlugin,
        _ProfilePlugin_js__WEBPACK_IMPORTED_MODULE_15__.PerformanceProfilePlugin
    ];
}
var _sourcesPanelOpenedMetricsRecorded = /*#__PURE__*/ new WeakMap(), /**
     * Only records metrics once per UISourceCodeFrame instance and must only be
     * called once the content of the UISourceCode is available.
     */ _recordSourcesPanelOpenedMetrics = /*#__PURE__*/ new WeakSet();
var UISourceCodeFrame = /*#__PURE__*/ function(_Common_ObjectWrapper_eventMixin) {
    "use strict";
    _inherits(UISourceCodeFrame, _Common_ObjectWrapper_eventMixin);
    var _super = _create_super(UISourceCodeFrame);
    function UISourceCodeFrame(uiSourceCode) {
        _class_call_check(this, UISourceCodeFrame);
        var _this;
        _this = _super.call(this, function() {
            return _this.workingCopy();
        });
        _class_private_method_init(_assert_this_initialized(_this), _recordSourcesPanelOpenedMetrics);
        _define_property(_assert_this_initialized(_this), "uiSourceCodeInternal", void 0);
        _define_property(_assert_this_initialized(_this), "muteSourceCodeEvents", void 0);
        _define_property(_assert_this_initialized(_this), "persistenceBinding", void 0);
        _define_property(_assert_this_initialized(_this), "uiSourceCodeEventListeners", void 0);
        _define_property(_assert_this_initialized(_this), "messageAndDecorationListeners", void 0);
        _define_property(_assert_this_initialized(_this), "boundOnBindingChanged", void 0);
        // The active plugins. These are created in setContent, and
        // recreated when the binding changes
        _define_property(_assert_this_initialized(_this), "plugins", []);
        _define_property(_assert_this_initialized(_this), "errorPopoverHelper", void 0);
        _class_private_field_init(_assert_this_initialized(_this), _sourcesPanelOpenedMetricsRecorded, {
            writable: true,
            value: false
        });
        _this.uiSourceCodeInternal = uiSourceCode;
        _this.muteSourceCodeEvents = false;
        _this.persistenceBinding = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.Persistence.PersistenceImpl.instance().binding(uiSourceCode);
        _this.uiSourceCodeEventListeners = [];
        _this.messageAndDecorationListeners = [];
        _this.boundOnBindingChanged = _this.onBindingChanged.bind(_assert_this_initialized(_this));
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('persistence-network-overrides-enabled').addChangeListener(_this.onNetworkPersistenceChanged, _assert_this_initialized(_this));
        _this.errorPopoverHelper = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.PopoverHelper.PopoverHelper(_this.textEditor.editor.contentDOM, _this.getErrorPopoverContent.bind(_assert_this_initialized(_this)), 'sources.error');
        _this.errorPopoverHelper.setHasPadding(true);
        _this.errorPopoverHelper.setTimeout(100, 100);
        _this.initializeUISourceCode();
        return _this;
    }
    _create_class(UISourceCodeFrame, [
        {
            key: "workingCopy",
            value: function workingCopy() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        if (_this.uiSourceCodeInternal.isDirty()) {
                            return [
                                2,
                                {
                                    content: _this.uiSourceCodeInternal.workingCopy(),
                                    isEncoded: false
                                }
                            ];
                        }
                        return [
                            2,
                            _this.uiSourceCodeInternal.requestContent()
                        ];
                    });
                })();
            }
        },
        {
            key: "editorConfiguration",
            value: function editorConfiguration(doc) {
                return [
                    _get(_get_prototype_of(UISourceCodeFrame.prototype), "editorConfiguration", this).call(this, doc),
                    rowMessages(this.allMessages()),
                    // Inject editor extensions from plugins
                    pluginCompartment.of(this.plugins.map(function(plugin) {
                        return plugin.editorExtension();
                    }))
                ];
            }
        },
        {
            key: "onFocus",
            value: function onFocus() {
                _get(_get_prototype_of(UISourceCodeFrame.prototype), "onFocus", this).call(this);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Context.Context.instance().setFlavor(UISourceCodeFrame, this);
            }
        },
        {
            key: "onBlur",
            value: function onBlur() {
                _get(_get_prototype_of(UISourceCodeFrame.prototype), "onBlur", this).call(this);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Context.Context.instance().setFlavor(UISourceCodeFrame, null);
            }
        },
        {
            key: "installMessageAndDecorationListeners",
            value: function installMessageAndDecorationListeners() {
                if (this.persistenceBinding) {
                    var networkSourceCode = this.persistenceBinding.network;
                    var fileSystemSourceCode = this.persistenceBinding.fileSystem;
                    this.messageAndDecorationListeners = [
                        networkSourceCode.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.MessageAdded, this.onMessageAdded, this),
                        networkSourceCode.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.MessageRemoved, this.onMessageRemoved, this),
                        networkSourceCode.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.DecorationChanged, this.onDecorationChanged, this),
                        fileSystemSourceCode.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.MessageAdded, this.onMessageAdded, this),
                        fileSystemSourceCode.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.MessageRemoved, this.onMessageRemoved, this)
                    ];
                } else {
                    this.messageAndDecorationListeners = [
                        this.uiSourceCodeInternal.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.MessageAdded, this.onMessageAdded, this),
                        this.uiSourceCodeInternal.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.MessageRemoved, this.onMessageRemoved, this),
                        this.uiSourceCodeInternal.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.DecorationChanged, this.onDecorationChanged, this)
                    ];
                }
            }
        },
        {
            key: "uiSourceCode",
            value: function uiSourceCode() {
                return this.uiSourceCodeInternal;
            }
        },
        {
            key: "setUISourceCode",
            value: function setUISourceCode(uiSourceCode) {
                var loaded = uiSourceCode.contentLoaded() ? Promise.resolve() : uiSourceCode.requestContent();
                var startUISourceCode = this.uiSourceCodeInternal;
                var _this = this;
                loaded.then(/*#__PURE__*/ _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (_this.uiSourceCodeInternal !== startUISourceCode) {
                                    return [
                                        2
                                    ];
                                }
                                _this.unloadUISourceCode();
                                _this.uiSourceCodeInternal = uiSourceCode;
                                if (!(uiSourceCode.workingCopy() !== _this.textEditor.state.doc.toString())) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this.setDeferredContent(Promise.resolve(uiSourceCode.workingCopyContent()))
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    3,
                                    3
                                ];
                            case 2:
                                _this.reloadPlugins();
                                _state.label = 3;
                            case 3:
                                _this.initializeUISourceCode();
                                return [
                                    2
                                ];
                        }
                    });
                }), console.error);
            }
        },
        {
            key: "unloadUISourceCode",
            value: function unloadUISourceCode() {
                _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(this.messageAndDecorationListeners);
                _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(this.uiSourceCodeEventListeners);
                this.uiSourceCodeInternal.removeWorkingCopyGetter();
                _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.Persistence.PersistenceImpl.instance().unsubscribeFromBindingEvent(this.uiSourceCodeInternal, this.boundOnBindingChanged);
            }
        },
        {
            key: "initializeUISourceCode",
            value: function initializeUISourceCode() {
                this.uiSourceCodeEventListeners = [
                    this.uiSourceCodeInternal.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.WorkingCopyChanged, this.onWorkingCopyChanged, this),
                    this.uiSourceCodeInternal.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.WorkingCopyCommitted, this.onWorkingCopyCommitted, this),
                    this.uiSourceCodeInternal.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.TitleChanged, this.onTitleChanged, this)
                ];
                _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.Persistence.PersistenceImpl.instance().subscribeForBindingEvent(this.uiSourceCodeInternal, this.boundOnBindingChanged);
                this.installMessageAndDecorationListeners();
                this.updateStyle();
                var canPrettyPrint = _entrypoints_formatter_worker_FormatterActions_js__WEBPACK_IMPORTED_MODULE_2__.FORMATTABLE_MEDIA_TYPES.includes(this.contentType) && !this.uiSourceCodeInternal.project().canSetFileContent() && _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.Persistence.PersistenceImpl.instance().binding(this.uiSourceCodeInternal) === null;
                var autoPrettyPrint = !this.uiSourceCodeInternal.contentType().isFromSourceMap();
                this.setCanPrettyPrint(canPrettyPrint, autoPrettyPrint);
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(UISourceCodeFrame.prototype), "wasShown", this).call(this);
                this.setEditable(this.canEditSourceInternal());
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.plugins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var plugin = _step.value;
                        plugin.willHide();
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
                _get(_get_prototype_of(UISourceCodeFrame.prototype), "willHide", this).call(this);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Context.Context.instance().setFlavor(UISourceCodeFrame, null);
                this.uiSourceCodeInternal.removeWorkingCopyGetter();
            }
        },
        {
            key: "getContentType",
            value: function getContentType() {
                var binding = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.Persistence.PersistenceImpl.instance().binding(this.uiSourceCodeInternal);
                var mimeType = binding ? binding.network.mimeType() : this.uiSourceCodeInternal.mimeType();
                return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.simplifyContentType(mimeType);
            }
        },
        {
            key: "canEditSourceInternal",
            value: function canEditSourceInternal() {
                if (this.hasLoadError()) {
                    return false;
                }
                if (this.uiSourceCodeInternal.editDisabled()) {
                    return false;
                }
                if (this.uiSourceCodeInternal.mimeType() === 'application/wasm') {
                    return false;
                }
                if (_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.Persistence.PersistenceImpl.instance().binding(this.uiSourceCodeInternal)) {
                    return true;
                }
                if (this.uiSourceCodeInternal.project().canSetFileContent()) {
                    return true;
                }
                if (this.uiSourceCodeInternal.project().isServiceProject()) {
                    return false;
                }
                if (this.uiSourceCodeInternal.project().type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network && _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.NetworkPersistenceManager.NetworkPersistenceManager.instance().active()) {
                    return true;
                }
                // Because live edit fails on large whitespace changes, pretty printed scripts are not editable.
                if (this.pretty && this.uiSourceCodeInternal.contentType().hasScripts()) {
                    return false;
                }
                return this.uiSourceCodeInternal.contentType() !== _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Document;
            }
        },
        {
            key: "onNetworkPersistenceChanged",
            value: function onNetworkPersistenceChanged() {
                this.setEditable(this.canEditSourceInternal());
            }
        },
        {
            key: "commitEditing",
            value: function commitEditing() {
                if (!this.uiSourceCodeInternal.isDirty()) {
                    return;
                }
                this.muteSourceCodeEvents = true;
                this.uiSourceCodeInternal.commitWorkingCopy();
                this.muteSourceCodeEvents = false;
            }
        },
        {
            key: "setContent",
            value: function setContent(content) {
                var _this = this;
                var _this1 = this, _superprop_get_setContent = function() {
                    return _get(_get_prototype_of(UISourceCodeFrame.prototype), "setContent", _this);
                };
                return _async_to_generator(function() {
                    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, plugin;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this1.disposePlugins();
                                _this1.loadPlugins();
                                return [
                                    4,
                                    _superprop_get_setContent().call(_this1, content)
                                ];
                            case 1:
                                _state.sent();
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = _this1.plugins[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        plugin = _step.value;
                                        plugin.editorInitialized(_this1.textEditor);
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
                                _class_private_method_get(_this1, _recordSourcesPanelOpenedMetrics, recordSourcesPanelOpenedMetrics).call(_this1);
                                _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.fireEvent('source-file-loaded', _this1.uiSourceCodeInternal.displayName(true));
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "createMessage",
            value: function createMessage(origin) {
                var _this_uiLocationToEditorLocation = this.uiLocationToEditorLocation(origin.lineNumber(), origin.columnNumber()), lineNumber = _this_uiLocationToEditorLocation.lineNumber, columnNumber = _this_uiLocationToEditorLocation.columnNumber;
                return new RowMessage(origin, lineNumber, columnNumber);
            }
        },
        {
            key: "allMessages",
            value: function allMessages() {
                var _this = this;
                var origins = this.persistenceBinding !== null ? _to_consumable_array(this.persistenceBinding.network.messages()).concat(_to_consumable_array(this.persistenceBinding.fileSystem.messages())) : _to_consumable_array(this.uiSourceCodeInternal.messages());
                return origins.map(function(origin) {
                    return _this.createMessage(origin);
                });
            }
        },
        {
            key: "onTextChanged",
            value: function onTextChanged() {
                var _this = this;
                var wasPretty = this.pretty;
                _get(_get_prototype_of(UISourceCodeFrame.prototype), "onTextChanged", this).call(this);
                this.errorPopoverHelper.hidePopover();
                _SourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__.SourcesPanel.instance().updateLastModificationTime();
                this.muteSourceCodeEvents = true;
                if (this.isClean()) {
                    this.uiSourceCodeInternal.resetWorkingCopy();
                } else {
                    this.uiSourceCodeInternal.setWorkingCopyGetter(function() {
                        return _this.textEditor.state.sliceDoc();
                    });
                }
                this.muteSourceCodeEvents = false;
                if (wasPretty !== this.pretty) {
                    this.updateStyle();
                    this.reloadPlugins();
                }
            }
        },
        {
            key: "onWorkingCopyChanged",
            value: function onWorkingCopyChanged() {
                if (this.muteSourceCodeEvents) {
                    return;
                }
                this.maybeSetContent(this.uiSourceCodeInternal.workingCopyContent());
            }
        },
        {
            key: "onWorkingCopyCommitted",
            value: function onWorkingCopyCommitted() {
                if (!this.muteSourceCodeEvents) {
                    this.maybeSetContent(this.uiSourceCode().workingCopyContent());
                }
                this.contentCommitted();
                this.updateStyle();
            }
        },
        {
            key: "reloadPlugins",
            value: function reloadPlugins() {
                this.disposePlugins();
                this.loadPlugins();
                var editor = this.textEditor;
                editor.dispatch({
                    effects: pluginCompartment.reconfigure(this.plugins.map(function(plugin) {
                        return plugin.editorExtension();
                    }))
                });
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.plugins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var plugin = _step.value;
                        plugin.editorInitialized(editor);
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
            }
        },
        {
            key: "onTitleChanged",
            value: function onTitleChanged() {
                var _this = this;
                this.updateLanguageMode('').then(function() {
                    return _this.reloadPlugins();
                }, console.error);
            }
        },
        {
            key: "loadPlugins",
            value: function loadPlugins() {
                var binding = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.Persistence.PersistenceImpl.instance().binding(this.uiSourceCodeInternal);
                var pluginUISourceCode = binding ? binding.network : this.uiSourceCodeInternal;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = sourceFramePlugins()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var pluginType = _step.value;
                        if (pluginType.accepts(pluginUISourceCode)) {
                            this.plugins.push(new pluginType(pluginUISourceCode, this));
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
                this.dispatchEventToListeners("ToolbarItemsChanged" /* Events.ToolbarItemsChanged */ );
            }
        },
        {
            key: "disposePlugins",
            value: function disposePlugins() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.plugins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var plugin = _step.value;
                        plugin.dispose();
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
                this.plugins = [];
            }
        },
        {
            key: "onBindingChanged",
            value: function onBindingChanged() {
                var binding = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.Persistence.PersistenceImpl.instance().binding(this.uiSourceCodeInternal);
                if (binding === this.persistenceBinding) {
                    return;
                }
                this.unloadUISourceCode();
                this.persistenceBinding = binding;
                this.initializeUISourceCode();
                this.reloadMessages();
                this.reloadPlugins();
            }
        },
        {
            key: "reloadMessages",
            value: function reloadMessages() {
                var messages = this.allMessages();
                var editor = this.textEditor.editor;
                editor.dispatch({
                    effects: setRowMessages.of(RowMessages.create(messages))
                });
            }
        },
        {
            key: "updateStyle",
            value: function updateStyle() {
                this.setEditable(this.canEditSourceInternal());
            }
        },
        {
            key: "maybeSetContent",
            value: function maybeSetContent(content) {
                if (this.textEditor.state.doc.toString() !== content.content) {
                    void this.setDeferredContent(Promise.resolve(content));
                }
            }
        },
        {
            key: "populateTextAreaContextMenu",
            value: function populateTextAreaContextMenu(contextMenu, lineNumber, columnNumber) {
                _get(_get_prototype_of(UISourceCodeFrame.prototype), "populateTextAreaContextMenu", this).call(this, contextMenu, lineNumber, columnNumber);
                contextMenu.appendApplicableItems(this.uiSourceCodeInternal);
                var location = this.editorLocationToUILocation(lineNumber, columnNumber);
                contextMenu.appendApplicableItems(new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.UILocation(this.uiSourceCodeInternal, location.lineNumber, location.columnNumber));
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.plugins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var plugin = _step.value;
                        plugin.populateTextAreaContextMenu(contextMenu, lineNumber, columnNumber);
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
            }
        },
        {
            key: "populateLineGutterContextMenu",
            value: function populateLineGutterContextMenu(contextMenu, lineNumber) {
                _get(_get_prototype_of(UISourceCodeFrame.prototype), "populateLineGutterContextMenu", this).call(this, contextMenu, lineNumber);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.plugins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var plugin = _step.value;
                        plugin.populateLineGutterContextMenu(contextMenu, lineNumber);
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
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                this.errorPopoverHelper.dispose();
                this.disposePlugins();
                this.unloadUISourceCode();
                this.textEditor.editor.destroy();
                this.detach();
                _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('persistence-network-overrides-enabled').removeChangeListener(this.onNetworkPersistenceChanged, this);
            }
        },
        {
            key: "onMessageAdded",
            value: function onMessageAdded(event) {
                var editor = this.textEditor.editor, shownMessages = editor.state.field(showRowMessages, false);
                if (shownMessages) {
                    var message = this.createMessage(event.data);
                    editor.dispatch({
                        effects: setRowMessages.of(shownMessages.messages.add(message))
                    });
                }
            }
        },
        {
            key: "onMessageRemoved",
            value: function onMessageRemoved(event) {
                var editor = this.textEditor.editor, shownMessages = editor.state.field(showRowMessages, false);
                if (shownMessages) {
                    var message = this.createMessage(event.data);
                    editor.dispatch({
                        effects: setRowMessages.of(shownMessages.messages.remove(message))
                    });
                }
            }
        },
        {
            key: "onDecorationChanged",
            value: function onDecorationChanged(event) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.plugins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var plugin = _step.value;
                        plugin.decorationChanged(event.data, this.textEditor);
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
            }
        },
        {
            key: "toolbarItems",
            value: function toolbarItems() {
                var _this = this;
                var _this1 = this, _superprop_get_toolbarItems = function() {
                    return _get(_get_prototype_of(UISourceCodeFrame.prototype), "toolbarItems", _this);
                };
                return _async_to_generator(function() {
                    var leftToolbarItems, rightToolbarItems, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, plugin, _leftToolbarItems, _rightToolbarItems;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _superprop_get_toolbarItems().call(_this1)
                                ];
                            case 1:
                                leftToolbarItems = _state.sent();
                                rightToolbarItems = [];
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = _this1.plugins[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        plugin = _step.value;
                                        ;
                                        (_leftToolbarItems = leftToolbarItems).push.apply(_leftToolbarItems, _to_consumable_array(plugin.leftToolbarItems()));
                                        (_rightToolbarItems = rightToolbarItems).push.apply(_rightToolbarItems, _to_consumable_array(plugin.rightToolbarItems()));
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
                                if (!rightToolbarItems.length) {
                                    return [
                                        2,
                                        leftToolbarItems
                                    ];
                                }
                                return [
                                    2,
                                    _to_consumable_array(leftToolbarItems).concat([
                                        new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Toolbar.ToolbarSeparator(true)
                                    ], _to_consumable_array(rightToolbarItems))
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getErrorPopoverContent",
            value: function getErrorPopoverContent(event) {
                var mouseEvent = event;
                var eventTarget = event.target;
                var anchorElement = eventTarget.enclosingNodeOrSelfWithClass('cm-messageIcon-error') || eventTarget.enclosingNodeOrSelfWithClass('cm-messageIcon-issue');
                if (!anchorElement) {
                    return null;
                }
                var messageField = this.textEditor.state.field(showRowMessages, false);
                if (!messageField || messageField.messages.rows.length === 0) {
                    return null;
                }
                var editor = this.textEditor.editor;
                var position = editor.posAtCoords(mouseEvent);
                if (position === null) {
                    return null;
                }
                var line = editor.state.doc.lineAt(position);
                if (position !== line.to) {
                    return null;
                }
                var row = messageField.messages.rows.find(function(row) {
                    return row[0].lineNumber() === line.number - 1;
                });
                if (!row) {
                    return null;
                }
                var issues = anchorElement.classList.contains('cm-messageIcon-issue');
                var messages = row.filter(function(msg) {
                    return msg.level() === "Issue" /* Workspace.UISourceCode.Message.Level.Issue */  === issues;
                });
                if (!messages.length) {
                    return null;
                }
                var anchor = anchorElement ? anchorElement.boxInWindow() : new AnchorBox(mouseEvent.clientX, mouseEvent.clientY, 1, 1);
                var counts = countDuplicates(messages);
                var element = document.createElement('div');
                element.classList.add('text-editor-messages-description-container');
                for(var i = 0; i < messages.length; i++){
                    if (counts[i]) {
                        element.appendChild(renderMessage(messages[i], counts[i]));
                    }
                }
                return {
                    box: anchor,
                    hide: function hide() {},
                    show: function() {
                        var _ref = _async_to_generator(function(popover) {
                            return _ts_generator(this, function(_state) {
                                popover.contentElement.append(element);
                                return [
                                    2,
                                    true
                                ];
                            });
                        });
                        return function(popover) {
                            return _ref.apply(this, arguments);
                        };
                    }()
                };
            }
        }
    ]);
    return UISourceCodeFrame;
}(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_10__.SourceFrame.SourceFrameImpl));
function recordSourcesPanelOpenedMetrics() {
    if (_class_private_field_get(this, _sourcesPanelOpenedMetricsRecorded)) {
        return;
    }
    _class_private_field_set(this, _sourcesPanelOpenedMetricsRecorded, true);
    var mimeType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.mimeFromURL(this.uiSourceCodeInternal.url());
    var mediaType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.mediaTypeForMetrics(mimeType !== null && mimeType !== void 0 ? mimeType : '', this.uiSourceCodeInternal.contentType().isFromSourceMap(), _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_5__.TextUtils.isMinified(this.uiSourceCodeInternal.content()));
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.sourcesPanelFileOpened(mediaType);
}
function getIconDataForLevel(level) {
    if (level === "Error" /* Workspace.UISourceCode.Message.Level.Error */ ) {
        return {
            color: 'var(--icon-error)',
            width: '16px',
            height: '14px',
            iconName: 'cross-circle-filled'
        };
    }
    if (level === "Warning" /* Workspace.UISourceCode.Message.Level.Warning */ ) {
        return {
            color: 'var(--icon-warning)',
            width: '18px',
            height: '14px',
            iconName: 'warning-filled'
        };
    }
    if (level === "Issue" /* Workspace.UISourceCode.Message.Level.Issue */ ) {
        return {
            color: 'var(--icon-warning)',
            width: '17px',
            height: '14px',
            iconName: 'issue-exclamation-filled'
        };
    }
    return {
        color: 'var(--icon-error)',
        width: '16px',
        height: '14px',
        iconName: 'cross-circle-filled'
    };
}
function getBubbleTypePerLevel(level) {
    switch(level){
        case "Error" /* Workspace.UISourceCode.Message.Level.Error */ :
            return 'error';
        case "Warning" /* Workspace.UISourceCode.Message.Level.Warning */ :
            return 'warning';
        case "Issue" /* Workspace.UISourceCode.Message.Level.Issue */ :
            return 'warning';
    }
}
function messageLevelComparator(a, b) {
    var _obj;
    var messageLevelPriority = (_obj = {}, _define_property(_obj, "Issue" /* Workspace.UISourceCode.Message.Level.Issue */ , 2), _define_property(_obj, "Warning" /* Workspace.UISourceCode.Message.Level.Warning */ , 3), _define_property(_obj, "Error" /* Workspace.UISourceCode.Message.Level.Error */ , 4), _obj);
    return messageLevelPriority[a.level()] - messageLevelPriority[b.level()];
}
function getIconDataForMessage(message) {
    if (_instanceof(message.origin, _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__.SourceFrameIssuesManager.IssueMessage)) {
        return _object_spread_props(_object_spread({}, _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_9__.IssueCounter.getIssueKindIconData(message.origin.getIssueKind())), {
            width: '12px',
            height: '12px'
        });
    }
    return getIconDataForLevel(message.level());
}
var pluginCompartment = new _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.Compartment();
var _lineNumber = /*#__PURE__*/ new WeakMap(), _columnNumber = /*#__PURE__*/ new WeakMap();
// Row message management and display logic. The frame manages a
// collection of messages, organized by line (row), as a wavy
// underline starting at the start of the first message, up to the end
// of the line, with icons indicating the message severity and content
// at the end of the line.
var RowMessage = /*#__PURE__*/ function() {
    "use strict";
    function RowMessage(origin, lineNumber, columnNumber) {
        _class_call_check(this, RowMessage);
        _define_property(this, "origin", void 0);
        _class_private_field_init(this, _lineNumber, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _columnNumber, {
            writable: true,
            value: void 0
        });
        this.origin = origin;
        _class_private_field_set(this, _lineNumber, lineNumber);
        _class_private_field_set(this, _columnNumber, columnNumber);
    }
    _create_class(RowMessage, [
        {
            key: "level",
            value: function level() {
                return this.origin.level();
            }
        },
        {
            key: "text",
            value: function text() {
                return this.origin.text();
            }
        },
        {
            key: "clickHandler",
            value: function clickHandler() {
                return this.origin.clickHandler();
            }
        },
        {
            key: "lineNumber",
            value: function lineNumber() {
                return _class_private_field_get(this, _lineNumber);
            }
        },
        {
            key: "columnNumber",
            value: function columnNumber() {
                return _class_private_field_get(this, _columnNumber);
            }
        },
        {
            key: "isEqual",
            value: function isEqual(that) {
                return this.origin.isEqual(that.origin);
            }
        }
    ]);
    return RowMessage;
}();
function addMessage(rows, message) {
    var lineNumber = message.lineNumber();
    var i = 0;
    for(; i < rows.length; i++){
        var diff = rows[i][0].lineNumber() - lineNumber;
        if (diff === 0) {
            rows[i] = rows[i].concat(message);
            return rows;
        }
        if (diff > 0) {
            break;
        }
    }
    rows.splice(i, 0, [
        message
    ]);
    return rows;
}
function removeMessage(rows, message) {
    for(var i = 0; i < rows.length; i++){
        if (rows[i][0].lineNumber() === message.lineNumber()) {
            var remaining = rows[i].filter(function(m) {
                return !m.isEqual(message);
            });
            if (remaining.length) {
                rows[i] = remaining;
            } else {
                rows.splice(i, 1);
            }
            break;
        }
    }
}
var RowMessages = /*#__PURE__*/ function() {
    "use strict";
    function RowMessages(rows) {
        _class_call_check(this, RowMessages);
        _define_property(this, "rows", void 0);
        this.rows = rows;
    }
    _create_class(RowMessages, [
        {
            key: "remove",
            value: function remove(message) {
                var rows = this.rows.slice();
                removeMessage(rows, message);
                return new RowMessages(rows);
            }
        },
        {
            key: "add",
            value: function add(message) {
                return new RowMessages(addMessage(this.rows.slice(), message));
            }
        }
    ], [
        {
            key: "create",
            value: function create(messages) {
                var rows = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = messages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var message = _step.value;
                        addMessage(rows, message);
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
                return new RowMessages(rows);
            }
        }
    ]);
    return RowMessages;
}();
var setRowMessages = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.StateEffect.define();
var underlineMark = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.Decoration.mark({
    class: 'cm-waveUnderline'
});
// The widget shown at the end of a message annotation.
var MessageWidget = /*#__PURE__*/ function(_CodeMirror_WidgetType) {
    "use strict";
    _inherits(MessageWidget, _CodeMirror_WidgetType);
    var _super = _create_super(MessageWidget);
    function MessageWidget(messages) {
        _class_call_check(this, MessageWidget);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "messages", void 0);
        _this.messages = messages;
        return _this;
    }
    _create_class(MessageWidget, [
        {
            key: "eq",
            value: function eq(other) {
                return other.messages === this.messages;
            }
        },
        {
            key: "toDOM",
            value: function toDOM() {
                var wrap = document.createElement('span');
                wrap.classList.add('cm-messageIcon');
                var nonIssues = this.messages.filter(function(msg) {
                    return msg.level() !== "Issue" /* Workspace.UISourceCode.Message.Level.Issue */ ;
                });
                if (nonIssues.length) {
                    var maxIssue = nonIssues.sort(messageLevelComparator)[nonIssues.length - 1];
                    var errorIcon = wrap.appendChild(new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.Icon());
                    errorIcon.data = getIconDataForLevel(maxIssue.level());
                    errorIcon.classList.add('cm-messageIcon-error');
                }
                var issue = this.messages.find(function(m) {
                    return m.level() === "Issue" /* Workspace.UISourceCode.Message.Level.Issue */ ;
                });
                if (issue) {
                    var issueIcon = wrap.appendChild(new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.Icon());
                    issueIcon.data = getIconDataForLevel("Issue" /* Workspace.UISourceCode.Message.Level.Issue */ );
                    issueIcon.classList.add('cm-messageIcon-issue');
                    issueIcon.addEventListener('click', function() {
                        return (issue.clickHandler() || Math.min)();
                    });
                }
                return wrap;
            }
        },
        {
            key: "ignoreEvents",
            value: function ignoreEvents() {
                return true;
            }
        }
    ]);
    return MessageWidget;
}(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.WidgetType);
var RowMessageDecorations = /*#__PURE__*/ function() {
    "use strict";
    function RowMessageDecorations(messages, decorations) {
        _class_call_check(this, RowMessageDecorations);
        _define_property(this, "messages", void 0);
        _define_property(this, "decorations", void 0);
        this.messages = messages;
        this.decorations = decorations;
    }
    _create_class(RowMessageDecorations, [
        {
            key: "apply",
            value: function apply(tr) {
                var result = this;
                if (tr.docChanged) {
                    result = new RowMessageDecorations(this.messages, this.decorations.map(tr.changes));
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = tr.effects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var effect = _step.value;
                        if (effect.is(setRowMessages)) {
                            result = RowMessageDecorations.create(effect.value, tr.state.doc);
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
                return result;
            }
        }
    ], [
        {
            key: "create",
            value: function create(messages, doc) {
                var builder = new _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.RangeSetBuilder();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = messages.rows[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var row = _step.value;
                        var line = doc.line(Math.min(doc.lines, row[0].lineNumber() + 1));
                        var minCol = row.reduce(function(col, msg) {
                            return Math.min(col, msg.columnNumber() || 0);
                        }, line.length);
                        if (minCol < line.length) {
                            builder.add(line.from + minCol, line.to, underlineMark);
                        }
                        builder.add(line.to, line.to, _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.Decoration.widget({
                            side: 1,
                            widget: new MessageWidget(row)
                        }));
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
                return new RowMessageDecorations(messages, builder.finish());
            }
        }
    ]);
    return RowMessageDecorations;
}();
var showRowMessages = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.StateField.define({
    create: function create(state) {
        return RowMessageDecorations.create(new RowMessages([]), state.doc);
    },
    update: function update(value, tr) {
        return value.apply(tr);
    },
    provide: function(field) {
        return _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.Prec.lowest(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.EditorView.decorations.from(field, function(value) {
            return value.decorations;
        }));
    }
});
function countDuplicates(messages) {
    var counts = [];
    for(var i = 0; i < messages.length; i++){
        counts[i] = 0;
        for(var j = 0; j <= i; j++){
            if (messages[j].isEqual(messages[i])) {
                counts[j]++;
                break;
            }
        }
    }
    return counts;
}
function renderMessage(message, count) {
    var element = document.createElement('div');
    element.classList.add('text-editor-row-message');
    element.style.display = 'flex';
    element.style.alignItems = 'center';
    element.style.gap = '4px';
    if (count === 1) {
        var icon = element.appendChild(new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.Icon());
        icon.data = getIconDataForMessage(message);
        icon.classList.add('text-editor-row-message-icon');
        icon.addEventListener('click', function() {
            return (message.clickHandler() || Math.min)();
        });
    } else {
        var repeatCountElement = document.createElement('span', {
            is: 'dt-small-bubble'
        });
        repeatCountElement.textContent = String(count);
        repeatCountElement.classList.add('text-editor-row-message-repeat-count');
        repeatCountElement.style.flexShrink = '0';
        element.appendChild(repeatCountElement);
        repeatCountElement.type = getBubbleTypePerLevel(message.level());
    }
    var linesContainer = element.createChild('div');
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = message.text().split('\n')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var line = _step.value;
            linesContainer.createChild('div').textContent = line;
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
    return element;
}
var rowMessageTheme = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.EditorView.baseTheme({
    '.cm-tooltip-message': {
        padding: '4px'
    },
    '.cm-waveUnderline': {
        backgroundImage: 'var(--image-file-errorWave)',
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'bottom',
        paddingBottom: '1px'
    },
    '.cm-messageIcon': {
        cursor: 'pointer',
        '& > *': {
            verticalAlign: 'text-bottom',
            marginLeft: '2px'
        }
    },
    '.cm-messageIcon-issue, .cm-messageIcon-error': {
        marginTop: '-1px',
        marginBottom: '-1px'
    }
});
function rowMessages(initialMessages) {
    return [
        showRowMessages.init(function(state) {
            return RowMessageDecorations.create(RowMessages.create(initialMessages), state.doc);
        }),
        rowMessageTheme
    ];
} //# sourceMappingURL=UISourceCodeFrame.js.map


}),
"./panels/sources/components/components.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BreakpointsView: function() { return /* reexport module object */ _BreakpointsView_js__WEBPACK_IMPORTED_MODULE_0__; },
  BreakpointsViewUtils: function() { return /* reexport module object */ _BreakpointsViewUtils_js__WEBPACK_IMPORTED_MODULE_1__; },
  HeadersView: function() { return /* reexport module object */ _HeadersView_js__WEBPACK_IMPORTED_MODULE_2__; }
});
/* harmony import */var _BreakpointsView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BreakpointsView.js */ "./panels/sources/components/BreakpointsView.js");
/* harmony import */var _BreakpointsViewUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BreakpointsViewUtils.js */ "./panels/sources/components/BreakpointsViewUtils.js");
/* harmony import */var _HeadersView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeadersView.js */ "./panels/sources/components/HeadersView.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



 //# sourceMappingURL=components.js.map


}),
"./panels/sources/sourcesPanel.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright (C) 2006, 2007, 2008 Apple Inc.  All rights reserved.\n * Copyright (C) 2009 Anthony Ricaud <rik@webkit.org>\n *\n * Redistribution and use in source and binary forms, with or without\n * modification, are permitted provided that the following conditions\n * are met:\n *\n * 1.  Redistributions of source code must retain the above copyright\n *     notice, this list of conditions and the following disclaimer.\n * 2.  Redistributions in binary form must reproduce the above copyright\n *     notice, this list of conditions and the following disclaimer in the\n *     documentation and/or other materials provided with the distribution.\n * 3.  Neither the name of Apple Computer, Inc. ("Apple") nor the names of\n *     its contributors may be used to endorse or promote products derived\n *     from this software without specific prior written permission.\n *\n * THIS SOFTWARE IS PROVIDED BY APPLE AND ITS CONTRIBUTORS "AS IS" AND ANY\n * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED\n * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE\n * DISCLAIMED. IN NO EVENT SHALL APPLE OR ITS CONTRIBUTORS BE LIABLE FOR ANY\n * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES\n * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;\n * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND\n * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF\n * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n.paused-message {\n  align-self: center;\n  width: fit-content;\n}\n\n.scripts-debug-toolbar {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  background-color: var(--app-color-toolbar-background);\n  border-bottom: 1px solid var(--sys-color-divider);\n  overflow: hidden;\n  z-index: 1;\n}\n\n.scripts-debug-toolbar-drawer {\n  flex: 0 0 52px;\n  transition: margin-top 0.1s ease-in-out;\n  margin-top: -26px;\n  padding-top: 25px;\n  background-color: var(--sys-color-cdt-base-container);\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.scripts-debug-toolbar-drawer.expanded {\n  margin-top: 0;\n}\n\n.scripts-debug-toolbar-drawer > [is="dt-checkbox"] {\n  display: none;\n  padding-left: 3px;\n  height: 28px;\n}\n\n.scripts-debug-toolbar-drawer.expanded > [is="dt-checkbox"] {\n  display: flex;\n}\n\n.cursor-auto {\n  cursor: auto;\n}\n\n.navigator-tabbed-pane {\n  background-color: var(--sys-color-cdt-base-container);\n}\n\n/*# sourceURL=sourcesPanel.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./panels/sources/sourcesView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright (C) 2013 Google Inc. All rights reserved.\n *\n * Redistribution and use in source and binary forms, with or without\n * modification, are permitted provided that the following conditions are\n * met:\n *\n *     * Redistributions of source code must retain the above copyright\n * notice, this list of conditions and the following disclaimer.\n *     * Redistributions in binary form must reproduce the above\n * copyright notice, this list of conditions and the following disclaimer\n * in the documentation and/or other materials provided with the\n * distribution.\n *     * Neither the name of Google Inc. nor the names of its\n * contributors may be used to endorse or promote products derived from\n * this software without specific prior written permission.\n *\n * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#sources-panel-sources-view {\n  --override-highlight-animation-10pc-background-color: rgb(158 54 153);\n  --override-highlight-animation-10pc-foreground-color: rgb(255 255 255);\n\n  flex: auto;\n  position: relative;\n}\n\n#sources-panel-sources-view .sources-toolbar {\n  display: flex;\n  flex: 0 0 27px;\n  background-color: var(--sys-color-cdt-base-container);\n  border-top: 1px solid var(--sys-color-divider);\n  overflow: hidden;\n  z-index: 0;\n}\n\n.sources-toolbar .toolbar {\n  cursor: default;\n}\n\n.source-frame-debugger-script {\n  --override-debugger-background-tint: rgb(255 255 194 / 50%);\n\n  background-color: var(--override-debugger-background-tint);\n}\n\n.theme-with-dark-background .source-frame-debugger-script {\n  --override-debugger-background-tint: rgb(61 61 0 / 50%);\n}\n\n/*# sourceURL=sourcesView.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);