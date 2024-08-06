"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_timeline_TimelineUIUtils_test_js"], {
"./panels/elements/elements.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AccessibilityTreeUtils: function() { return /* reexport module object */ _AccessibilityTreeUtils_js__WEBPACK_IMPORTED_MODULE_25__; },
  AccessibilityTreeView: function() { return /* reexport module object */ _AccessibilityTreeView_js__WEBPACK_IMPORTED_MODULE_26__; },
  CSSRuleValidator: function() { return /* reexport module object */ _CSSRuleValidator_js__WEBPACK_IMPORTED_MODULE_20__; },
  ClassesPaneWidget: function() { return /* reexport module object */ _ClassesPaneWidget_js__WEBPACK_IMPORTED_MODULE_22__; },
  ColorSwatchPopoverIcon: function() { return /* reexport module object */ _ColorSwatchPopoverIcon_js__WEBPACK_IMPORTED_MODULE_1__; },
  ComputedStyleModel: function() { return /* reexport module object */ _ComputedStyleModel_js__WEBPACK_IMPORTED_MODULE_2__; },
  ComputedStyleWidget: function() { return /* reexport module object */ _ComputedStyleWidget_js__WEBPACK_IMPORTED_MODULE_19__; },
  DOMLinkifier: function() { return /* reexport module object */ _DOMLinkifier_js__WEBPACK_IMPORTED_MODULE_3__; },
  DOMPath: function() { return /* reexport module object */ _DOMPath_js__WEBPACK_IMPORTED_MODULE_4__; },
  ElementStatePaneWidget: function() { return /* reexport module object */ _ElementStatePaneWidget_js__WEBPACK_IMPORTED_MODULE_23__; },
  ElementsPanel: function() { return /* reexport module object */ _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_21__; },
  ElementsSidebarPane: function() { return /* reexport module object */ _ElementsSidebarPane_js__WEBPACK_IMPORTED_MODULE_5__; },
  ElementsTreeElement: function() { return /* reexport module object */ _ElementsTreeElement_js__WEBPACK_IMPORTED_MODULE_6__; },
  ElementsTreeElementHighlighter: function() { return /* reexport module object */ _ElementsTreeElementHighlighter_js__WEBPACK_IMPORTED_MODULE_24__; },
  ElementsTreeOutline: function() { return /* reexport module object */ _ElementsTreeOutline_js__WEBPACK_IMPORTED_MODULE_8__; },
  EventListenersWidget: function() { return /* reexport module object */ _EventListenersWidget_js__WEBPACK_IMPORTED_MODULE_9__; },
  InspectElementModeController: function() { return /* reexport module object */ _InspectElementModeController_js__WEBPACK_IMPORTED_MODULE_0__; },
  LayersWidget: function() { return /* reexport module object */ _LayersWidget_js__WEBPACK_IMPORTED_MODULE_27__; },
  MarkerDecorator: function() { return /* reexport module object */ _MarkerDecorator_js__WEBPACK_IMPORTED_MODULE_10__; },
  MetricsSidebarPane: function() { return /* reexport module object */ _MetricsSidebarPane_js__WEBPACK_IMPORTED_MODULE_11__; },
  NodeStackTraceWidget: function() { return /* reexport module object */ _NodeStackTraceWidget_js__WEBPACK_IMPORTED_MODULE_14__; },
  PlatformFontsWidget: function() { return /* reexport module object */ _PlatformFontsWidget_js__WEBPACK_IMPORTED_MODULE_12__; },
  PropertiesWidget: function() { return /* reexport module object */ _PropertiesWidget_js__WEBPACK_IMPORTED_MODULE_13__; },
  PropertyMatchers: function() { return /* reexport module object */ _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_28__; },
  PropertyRenderer: function() { return /* reexport module object */ _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_29__; },
  StyleEditorWidget: function() { return /* reexport module object */ _StyleEditorWidget_js__WEBPACK_IMPORTED_MODULE_30__; },
  StylePropertiesSection: function() { return /* reexport module object */ _StylePropertiesSection_js__WEBPACK_IMPORTED_MODULE_15__; },
  StylePropertyHighlighter: function() { return /* reexport module object */ _StylePropertyHighlighter_js__WEBPACK_IMPORTED_MODULE_16__; },
  StylePropertyTreeElement: function() { return /* reexport module object */ _StylePropertyTreeElement_js__WEBPACK_IMPORTED_MODULE_18__; },
  StylePropertyUtils: function() { return /* reexport module object */ _StylePropertyUtils_js__WEBPACK_IMPORTED_MODULE_31__; },
  StylesSidebarPane: function() { return /* reexport module object */ _StylesSidebarPane_js__WEBPACK_IMPORTED_MODULE_17__; },
  TopLayerContainer: function() { return /* reexport module object */ _TopLayerContainer_js__WEBPACK_IMPORTED_MODULE_7__; },
  WebCustomData: function() { return /* reexport module object */ _WebCustomData_js__WEBPACK_IMPORTED_MODULE_32__; }
});
/* harmony import */var _InspectElementModeController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InspectElementModeController.js */ "./panels/elements/InspectElementModeController.js");
/* harmony import */var _ColorSwatchPopoverIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorSwatchPopoverIcon.js */ "./panels/elements/ColorSwatchPopoverIcon.js");
/* harmony import */var _ComputedStyleModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComputedStyleModel.js */ "./panels/elements/ComputedStyleModel.js");
/* harmony import */var _DOMLinkifier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOMLinkifier.js */ "./panels/elements/DOMLinkifier.js");
/* harmony import */var _DOMPath_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOMPath.js */ "./panels/elements/DOMPath.js");
/* harmony import */var _ElementsSidebarPane_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ElementsSidebarPane.js */ "./panels/elements/ElementsSidebarPane.js");
/* harmony import */var _ElementsTreeElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ElementsTreeElement.js */ "./panels/elements/ElementsTreeElement.js");
/* harmony import */var _TopLayerContainer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TopLayerContainer.js */ "./panels/elements/TopLayerContainer.js");
/* harmony import */var _ElementsTreeOutline_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ElementsTreeOutline.js */ "./panels/elements/ElementsTreeOutline.js");
/* harmony import */var _EventListenersWidget_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EventListenersWidget.js */ "./panels/elements/EventListenersWidget.js");
/* harmony import */var _MarkerDecorator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MarkerDecorator.js */ "./panels/elements/MarkerDecorator.js");
/* harmony import */var _MetricsSidebarPane_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MetricsSidebarPane.js */ "./panels/elements/MetricsSidebarPane.js");
/* harmony import */var _PlatformFontsWidget_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PlatformFontsWidget.js */ "./panels/elements/PlatformFontsWidget.js");
/* harmony import */var _PropertiesWidget_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PropertiesWidget.js */ "./panels/elements/PropertiesWidget.js");
/* harmony import */var _NodeStackTraceWidget_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./NodeStackTraceWidget.js */ "./panels/elements/NodeStackTraceWidget.js");
/* harmony import */var _StylePropertiesSection_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./StylePropertiesSection.js */ "./panels/elements/StylePropertiesSection.js");
/* harmony import */var _StylePropertyHighlighter_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./StylePropertyHighlighter.js */ "./panels/elements/StylePropertyHighlighter.js");
/* harmony import */var _StylesSidebarPane_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./StylesSidebarPane.js */ "./panels/elements/StylesSidebarPane.js");
/* harmony import */var _StylePropertyTreeElement_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./StylePropertyTreeElement.js */ "./panels/elements/StylePropertyTreeElement.js");
/* harmony import */var _ComputedStyleWidget_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ComputedStyleWidget.js */ "./panels/elements/ComputedStyleWidget.js");
/* harmony import */var _CSSRuleValidator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./CSSRuleValidator.js */ "./panels/elements/CSSRuleValidator.js");
/* harmony import */var _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ElementsPanel.js */ "./panels/elements/ElementsPanel.js");
/* harmony import */var _ClassesPaneWidget_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ClassesPaneWidget.js */ "./panels/elements/ClassesPaneWidget.js");
/* harmony import */var _ElementStatePaneWidget_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ElementStatePaneWidget.js */ "./panels/elements/ElementStatePaneWidget.js");
/* harmony import */var _ElementsTreeElementHighlighter_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ElementsTreeElementHighlighter.js */ "./panels/elements/ElementsTreeElementHighlighter.js");
/* harmony import */var _AccessibilityTreeUtils_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./AccessibilityTreeUtils.js */ "./panels/elements/AccessibilityTreeUtils.js");
/* harmony import */var _AccessibilityTreeView_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./AccessibilityTreeView.js */ "./panels/elements/AccessibilityTreeView.js");
/* harmony import */var _LayersWidget_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./LayersWidget.js */ "./panels/elements/LayersWidget.js");
/* harmony import */var _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./PropertyMatchers.js */ "./panels/elements/PropertyMatchers.js");
/* harmony import */var _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./PropertyRenderer.js */ "./panels/elements/PropertyRenderer.js");
/* harmony import */var _StyleEditorWidget_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./StyleEditorWidget.js */ "./panels/elements/StyleEditorWidget.js");
/* harmony import */var _StylePropertyUtils_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./StylePropertyUtils.js */ "./panels/elements/StylePropertyUtils.js");
/* harmony import */var _WebCustomData_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./WebCustomData.js */ "./panels/elements/WebCustomData.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




























































 //# sourceMappingURL=elements.js.map


}),
"./panels/timeline/TimelineUIUtils.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../panels/elements/elements.js */ "./panels/elements/elements.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_SourceMapHelpers_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../testing/SourceMapHelpers.js */ "./testing/SourceMapHelpers.js");
/* harmony import */var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../testing/TraceHelpers.js */ "./testing/TraceHelpers.js");
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */var _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/legacy/theme_support/theme_support.js */ "./ui/legacy/theme_support/theme_support.js");
/* harmony import */var _timeline_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./timeline.js */ "./panels/timeline/timeline.js");
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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















(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__.describeWithMockConnection)('TimelineUIUtils', function() {
    var target;
    // Trace events contain script ids as strings. However, the linkifier
    // utilities assume it is a number because that's how it's defined at
    // the protocol level. For practicality, we declare these two
    // variables so that we can satisfy type checking throughout the tests.
    var SCRIPT_ID_NUMBER = 1;
    var SCRIPT_ID_STRING = String(SCRIPT_ID_NUMBER);
    beforeEach(function() {
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createTarget)();
        var workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance();
        var targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance();
        var resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.ResourceMapping.ResourceMapping(targetManager, workspace);
        var debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
            forceNew: true,
            resourceMapping: resourceMapping,
            targetManager: targetManager
        });
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.IgnoreListManager.IgnoreListManager.instance({
            forceNew: true,
            debuggerWorkspaceBinding: debuggerWorkspaceBinding
        });
    });
    afterEach(function() {
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__.clearMockConnectionResponseHandler)('DOM.pushNodesByBackendIdsToFrontend');
    });
    it('creates top frame location text for function calls', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, functionCallEvent, _, _tmp;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'one-second-interaction.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    functionCallEvent = traceData.Renderer.allTraceEntries.find(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventFunctionCall);
                    assert.isOk(functionCallEvent);
                    _ = assert.strictEqual;
                    _tmp = [
                        'chrome-extension://blijaeebfebmkmekmdnehcmmcjnblkeo/lib/utils.js:11:43'
                    ];
                    return [
                        4,
                        _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildDetailsTextForTraceEvent(functionCallEvent, traceData)
                    ];
                case 2:
                    _.apply(assert, _tmp.concat([
                        _state.sent()
                    ]));
                    return [
                        2
                    ];
            }
        });
    }));
    it('creates top frame location text as a fallback', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, timerInstallEvent, _, _tmp;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    timerInstallEvent = traceData.Renderer.allTraceEntries.find(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventTimerInstall);
                    assert.isOk(timerInstallEvent);
                    _ = assert.strictEqual;
                    _tmp = [
                        'https://web.dev/js/index-7b6f3de4.js:96:533'
                    ];
                    return [
                        4,
                        _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildDetailsTextForTraceEvent(timerInstallEvent, traceData)
                    ];
                case 2:
                    _.apply(assert, _tmp.concat([
                        _state.sent()
                    ]));
                    return [
                        2
                    ];
            }
        });
    }));
    describe('script location as an URL', function() {
        it('makes the script location of a call frame a full URL when the inspected target is not the same the call frame was taken from (e.g. a loaded file)', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, fakeFunctionCall, node;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev-with-commit.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        fakeFunctionCall = {
                            name: "FunctionCall" /* TraceEngine.Types.TraceEvents.KnownEventName.FunctionCall */ ,
                            ph: "X" /* TraceEngine.Types.TraceEvents.Phase.COMPLETE */ ,
                            cat: 'devtools-timeline',
                            dur: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(100),
                            ts: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(100),
                            pid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(1),
                            tid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(1),
                            args: {
                                data: {
                                    functionName: 'test',
                                    url: 'https://google.com/test.js',
                                    scriptId: Number(SCRIPT_ID_STRING),
                                    lineNumber: 1,
                                    columnNumber: 1
                                }
                            }
                        };
                        target.setInspectedURL('https://not-google.com');
                        return [
                            4,
                            _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildDetailsNodeForTraceEvent(fakeFunctionCall, target, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false, traceData)
                        ];
                    case 2:
                        node = _state.sent();
                        if (!node) {
                            throw new Error('Node was unexpectedly null');
                        }
                        assert.strictEqual(node.textContent, 'test @ google.com/test.js:1:1');
                        return [
                            2
                        ];
                }
            });
        }));
        it('makes the script location of a call frame a script name when the inspected target is the one the call frame was taken from', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, fakeFunctionCall, node;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev-with-commit.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        fakeFunctionCall = {
                            name: "FunctionCall" /* TraceEngine.Types.TraceEvents.KnownEventName.FunctionCall */ ,
                            ph: "X" /* TraceEngine.Types.TraceEvents.Phase.COMPLETE */ ,
                            cat: 'devtools-timeline',
                            dur: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(100),
                            ts: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(100),
                            pid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(1),
                            tid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(1),
                            args: {
                                data: {
                                    functionName: 'test',
                                    url: 'https://google.com/test.js',
                                    scriptId: Number(SCRIPT_ID_STRING),
                                    lineNumber: 1,
                                    columnNumber: 1
                                }
                            }
                        };
                        target.setInspectedURL('https://google.com');
                        return [
                            4,
                            _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildDetailsNodeForTraceEvent(fakeFunctionCall, target, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false, traceData)
                        ];
                    case 2:
                        node = _state.sent();
                        if (!node) {
                            throw new Error('Node was unexpectedly null');
                        }
                        assert.strictEqual(node.textContent, 'test @ /test.js:1:1');
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('mapping to authored script when recording is fresh', function() {
        beforeEach(/*#__PURE__*/ _async_to_generator(function() {
            var sourceMapContent, scriptUrl, sourceMapUrl, debuggerModel, sourceMapManager, script;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        // Register mock script and source map.
                        sourceMapContent = JSON.stringify({
                            'version': 3,
                            'names': [
                                'unminified',
                                'par1',
                                'par2',
                                'console',
                                'log'
                            ],
                            'sources': [
                                '/original-script.ts'
                            ],
                            'file': '/test.js',
                            'sourcesContent': [
                                'function unminified(par1, par2) {\n  console.log(par1, par2);\n}\n'
                            ],
                            'mappings': 'AAAA,SAASA,EAAWC,EAAMC,GACxBC,QAAQC,IAAIH,EAAMC'
                        });
                        (0,_testing_SourceMapHelpers_js__WEBPACK_IMPORTED_MODULE_9__.setupPageResourceLoaderForSourceMap)(sourceMapContent);
                        target.setInspectedURL('https://google.com');
                        scriptUrl = 'https://google.com/script.js';
                        sourceMapUrl = 'script.js.map';
                        debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
                        assert.isNotNull(debuggerModel);
                        if (debuggerModel === null) {
                            return [
                                2
                            ];
                        }
                        sourceMapManager = debuggerModel.sourceMapManager();
                        script = debuggerModel.parsedScriptSource(SCRIPT_ID_STRING, scriptUrl, 0, 0, 0, 0, 0, '', undefined, false, sourceMapUrl, true, false, length, false, null, null, null, null, null);
                        return [
                            4,
                            sourceMapManager.sourceMapForClientPromise(script)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('maps to the authored script when a call frame is provided', /*#__PURE__*/ _async_to_generator(function() {
            var linkifier, node;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier();
                        node = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.linkifyLocation({
                            scriptId: SCRIPT_ID_STRING,
                            url: 'https://google.com/test.js',
                            lineNumber: 0,
                            columnNumber: 0,
                            isFreshRecording: true,
                            target: target,
                            linkifier: linkifier
                        });
                        if (!node) {
                            throw new Error('Node was unexpectedly null');
                        }
                        // Wait for the location to be resolved using the registered source map.
                        return [
                            4,
                            _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().pendingLiveLocationChangesPromise()
                        ];
                    case 1:
                        _state.sent();
                        assert.strictEqual(node.textContent, 'original-script.ts:1:1');
                        return [
                            2
                        ];
                }
            });
        }));
        it('maps to the authored script when a trace event from the new engine with a stack trace is provided', /*#__PURE__*/ _async_to_generator(function() {
            var functionCallEvent, linkifier, node;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        functionCallEvent = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_10__.makeCompleteEvent)('FunctionCall', 10, 100);
                        functionCallEvent.args = {
                            data: {
                                stackTrace: [
                                    {
                                        functionName: 'test',
                                        url: 'https://google.com/test.js',
                                        scriptId: SCRIPT_ID_NUMBER,
                                        lineNumber: 0,
                                        columnNumber: 0
                                    }
                                ]
                            }
                        };
                        linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier();
                        node = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.linkifyTopCallFrame(functionCallEvent, target, linkifier, true);
                        if (!node) {
                            throw new Error('Node was unexpectedly null');
                        }
                        // Wait for the location to be resolved using the registered source map.
                        return [
                            4,
                            _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().pendingLiveLocationChangesPromise()
                        ];
                    case 1:
                        _state.sent();
                        assert.strictEqual(node.textContent, 'original-script.ts:1:1');
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('mapping to authored function name when recording is fresh', function() {
        it('maps to the authored name and script of a profile call', /*#__PURE__*/ _async_to_generator(function() {
            var _node_textContent, script, columnNumber, profileCall, workersData, traceData, resolver, linkifier, node;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            (0,_testing_SourceMapHelpers_js__WEBPACK_IMPORTED_MODULE_9__.loadBasicSourceMapExample)(target)
                        ];
                    case 1:
                        script = _state.sent().script;
                        // Ideally we would get a column number we can use from the source
                        // map however the current status of the source map helpers makes
                        // it difficult to do so.
                        columnNumber = 51;
                        profileCall = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_10__.makeProfileCall)('function', 10, 100, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(1), _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(1));
                        profileCall.callFrame = {
                            'columnNumber': columnNumber,
                            'functionName': 'minified',
                            'lineNumber': 0,
                            'scriptId': script.scriptId,
                            'url': 'file://gen.js'
                        };
                        workersData = {
                            workerSessionIdEvents: [],
                            workerIdByThread: new Map(),
                            workerURLById: new Map()
                        };
                        // This only includes data used in the SourceMapsResolver
                        traceData = {
                            Samples: (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_10__.makeMockSamplesHandlerData)([
                                profileCall
                            ]),
                            Workers: workersData
                        };
                        resolver = new _timeline_js__WEBPACK_IMPORTED_MODULE_14__.SourceMapsResolver.SourceMapsResolver(traceData);
                        return [
                            4,
                            resolver.install()
                        ];
                    case 2:
                        _state.sent();
                        linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier();
                        return [
                            4,
                            _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildDetailsNodeForTraceEvent(profileCall, target, linkifier, true, traceData)
                        ];
                    case 3:
                        node = _state.sent();
                        if (!node) {
                            throw new Error('Node was unexpectedly null');
                        }
                        assert.isTrue((_node_textContent = node.textContent) === null || _node_textContent === void 0 ? void 0 : _node_textContent.startsWith('someFunction @'));
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('adjusting timestamps for events and navigations', function() {
        it('adjusts the time for a DCL event after a navigation', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, mainFrameID, dclEvent, traceMinBound, unadjustedStartTimeMilliseconds, adjustedTime;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        mainFrameID = traceData.Meta.mainFrameId;
                        dclEvent = traceData.PageLoadMetrics.allMarkerEvents.find(function(event) {
                            var _event_args_data;
                            return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventMarkDOMContent(event) && ((_event_args_data = event.args.data) === null || _event_args_data === void 0 ? void 0 : _event_args_data.frame) === mainFrameID;
                        });
                        if (!dclEvent) {
                            throw new Error('Could not find DCL event');
                        }
                        traceMinBound = traceData.Meta.traceBounds.min;
                        // Round the time to 2DP to avoid needlessly long expectation numbers!
                        unadjustedStartTimeMilliseconds = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Timing.microSecondsToMilliseconds(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(dclEvent.ts - traceMinBound)).toFixed(2);
                        assert.strictEqual(unadjustedStartTimeMilliseconds, String(190.79));
                        adjustedTime = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.timeStampForEventAdjustedForClosestNavigationIfPossible(dclEvent, traceData);
                        assert.strictEqual(adjustedTime.toFixed(2), String(178.92));
                        return [
                            2
                        ];
                }
            });
        }));
        it('can adjust the times for events that are not PageLoad markers', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, userMark, adjustedMarkTime;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'user-timings.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        // Use a performance.mark event. Exact event is unimportant except that
                        // it should not be a Page Load event as those are covered by the tests
                        // above.
                        userMark = traceData.UserTimings.performanceMarks.find(function(event) {
                            return event.name === 'mark1';
                        });
                        if (!userMark) {
                            throw new Error('Could not find user mark');
                        }
                        adjustedMarkTime = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.timeStampForEventAdjustedForClosestNavigationIfPossible(userMark, traceData);
                        assert.strictEqual(adjustedMarkTime.toFixed(2), String(79.88));
                        return [
                            2
                        ];
                }
            });
        }));
    });
    function getInnerTextAcrossShadowRoots(root) {
        // Don't recurse into STYLE elements
        if (!root || root.nodeName === 'STYLE') {
            return '';
        }
        if (root.nodeType === Node.TEXT_NODE) {
            return root.nodeValue || '';
        }
        if (_instanceof(root, HTMLElement) && root.shadowRoot) {
            return getInnerTextAcrossShadowRoots(root.shadowRoot);
        }
        return Array.from(root.childNodes).map(getInnerTextAcrossShadowRoots).join('');
    }
    function getRowDataForDetailsElement(details) {
        return Array.from(details.querySelectorAll('.timeline-details-view-row')).map(function(row) {
            var _row_querySelector;
            var title = (_row_querySelector = row.querySelector('.timeline-details-view-row-title')) === null || _row_querySelector === void 0 ? void 0 : _row_querySelector.innerText;
            var _row_querySelector1;
            var valueEl = (_row_querySelector1 = row.querySelector('.timeline-details-view-row-value')) !== null && _row_querySelector1 !== void 0 ? _row_querySelector1 : row.querySelector('div,span');
            var value = (valueEl === null || valueEl === void 0 ? void 0 : valueEl.innerText) || '';
            if (!value && valueEl) {
                // Stack traces and renderEventJson have the contents within a shadowRoot.
                value = getInnerTextAcrossShadowRoots(valueEl).trim();
            }
            return {
                title: title,
                value: value
            };
        });
    }
    function getStackTraceForDetailsElement(details) {
        var _details_querySelector;
        var stackTraceContainer = (_details_querySelector = details.querySelector('.timeline-details-view-row.timeline-details-stack-values .stack-preview-container')) === null || _details_querySelector === void 0 ? void 0 : _details_querySelector.shadowRoot;
        if (!stackTraceContainer) {
            return null;
        }
        return Array.from(stackTraceContainer.querySelectorAll('tr')).map(function(row) {
            var _row_querySelector, _row_querySelector1;
            var functionName = (_row_querySelector = row.querySelector('.function-name')) === null || _row_querySelector === void 0 ? void 0 : _row_querySelector.innerText;
            var url = (_row_querySelector1 = row.querySelector('.link')) === null || _row_querySelector1 === void 0 ? void 0 : _row_querySelector1.innerText;
            return "".concat(functionName || '', " @ ").concat(url || '');
        });
    }
    function getPieChartDataForDetailsElement(details) {
        var pieChartComp = details.querySelector('devtools-perf-piechart');
        if (!(pieChartComp === null || pieChartComp === void 0 ? void 0 : pieChartComp.shadowRoot)) {
            return [];
        }
        return Array.from(pieChartComp.shadowRoot.querySelectorAll('.pie-chart-legend-row')).map(function(row) {
            var _row_querySelector, _row_querySelector1;
            var title = (_row_querySelector = row.querySelector('.pie-chart-name')) === null || _row_querySelector === void 0 ? void 0 : _row_querySelector.innerText;
            var value = (_row_querySelector1 = row.querySelector('.pie-chart-size')) === null || _row_querySelector1 === void 0 ? void 0 : _row_querySelector1.innerText;
            return {
                title: title,
                value: value
            };
        });
    }
    describe('colors', function() {
        before(function() {
            // Rather than use the real colours here and burden the test with having to
            // inject loads of CSS, we fake out the colours. this is fine for our tests as
            // the exact value of the colours is not important; we just make sure that it
            // parses them out correctly. Each variable is given a different rgb() value to
            // ensure we know the code is working and using the right one.
            var styleElement = document.createElement('style');
            styleElement.id = 'fake-perf-panel-colors';
            styleElement.textContent = "\n:root {\n  --app-color-loading: rgb(0 0 0);\n  --app-color-loading-children: rgb(1 1 1);\n  --app-color-scripting: rgb(2 2 2);\n  --app-color-scripting-children: rgb(3 3 3);\n  --app-color-rendering: rgb(4 4 4);\n  --app-color-rendering-children: rgb(5 5 5);\n  --app-color-painting: rgb(6 6 6);\n  --app-color-painting-children: rgb(7 7 7);\n  --app-color-task: rgb(8 8 8);\n  --app-color-task-children: rgb(9 9 9);\n  --app-color-system: rgb(10 10 10);\n  --app-color-system-children: rgb(11 11 11);\n  --app-color-idle: rgb(12 12 12);\n  --app-color-idle-children: rgb(13 13 13);\n  --app-color-async: rgb(14 14 14);\n  --app-color-async-children: rgb(15 15 15);\n  --app-color-other: rgb(16 16 16);\n}\n";
            document.documentElement.appendChild(styleElement);
            _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_13__.ThemeSupport.clearThemeCache();
        });
        after(function() {
            var styleElementToRemove = document.documentElement.querySelector('#fake-perf-panel-colors');
            if (styleElementToRemove) {
                document.documentElement.removeChild(styleElementToRemove);
            }
            _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_13__.ThemeSupport.clearThemeCache();
        });
        it('should return the correct rgb value for a corresponding CSS variable', function() {
            var parsedColor = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.EventUICategory.getCategoryStyles().scripting.getComputedColorValue();
            assert.strictEqual('rgb(2 2 2)', parsedColor);
        });
        it('should return the color as a CSS variable', function() {
            var cssVariable = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.EventUICategory.getCategoryStyles().scripting.getCSSValue();
            assert.strictEqual('var(--app-color-scripting)', cssVariable);
        });
        it('treats the v8.parseOnBackgroundWaiting as scripting even though it would usually be idle', function() {
            var event = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_10__.makeCompleteEvent)("v8.parseOnBackgroundWaiting" /* TraceEngine.Types.TraceEvents.KnownEventName.StreamingCompileScriptWaiting */ , 1, 1, 'v8,devtools.timeline,disabled-by-default-v8.compile');
            assert.strictEqual('rgb(2 2 2)', _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.eventColor(event));
        });
        it('assigns the correct color to the swatch of an event\'s title', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, events, task, details, titleSwatch;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'lcp-web-font.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        events = traceData.Renderer.allTraceEntries;
                        task = events.find(function(event) {
                            return event.name.includes('RunTask');
                        });
                        if (!task) {
                            throw new Error('Could not find expected event.');
                        }
                        return [
                            4,
                            _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildTraceEventDetails(traceData, task, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false)
                        ];
                    case 2:
                        details = _state.sent();
                        titleSwatch = details.querySelector('.timeline-details-chip-title div');
                        assert.strictEqual(titleSwatch === null || titleSwatch === void 0 ? void 0 : titleSwatch.style.backgroundColor, 'rgb(10, 10, 10)');
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('testContentMatching', function() {
        it('matches call frame events based on a regular expression and the contents of the event', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, mainThread, performConcurrentWorkEvent;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'react-hello-world.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        // Find an event from the trace that represents some work that React did. This
                        // event is not chosen for any particular reason other than it was the example
                        // used in the bug report: crbug.com/1484504
                        mainThread = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_10__.getMainThread)(traceData.Renderer);
                        performConcurrentWorkEvent = mainThread.entries.find(function(entry) {
                            if (_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isProfileCall(entry)) {
                                return entry.callFrame.functionName === 'performConcurrentWorkOnRoot';
                            }
                            return false;
                        });
                        if (!performConcurrentWorkEvent) {
                            throw new Error('Could not find expected event');
                        }
                        assert.isTrue(_timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.testContentMatching(performConcurrentWorkEvent, /perfo/, traceData));
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('traceEventDetails', function() {
        it('shows the interaction ID and INP breakdown metrics for a given interaction', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, interactionEvent, details, rowData;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'one-second-interaction.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        interactionEvent = traceData.UserInteractions.interactionEventsWithNoNesting.find(function(entry) {
                            return entry.dur === 979974 && entry.type === 'click';
                        });
                        if (!interactionEvent) {
                            throw new Error('Could not find expected event');
                        }
                        return [
                            4,
                            _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildTraceEventDetails(traceData, interactionEvent, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false)
                        ];
                    case 2:
                        details = _state.sent();
                        rowData = getRowDataForDetailsElement(details);
                        assert.deepEqual(rowData, [
                            {
                                title: 'Warning',
                                value: 'Long interaction is indicating poor page responsiveness.'
                            },
                            {
                                title: 'ID',
                                value: '4122'
                            },
                            {
                                title: 'Input delay',
                                value: '1.00\xA0ms'
                            },
                            {
                                title: 'Processing duration',
                                value: '977.00\xA0ms'
                            },
                            {
                                title: 'Presentation delay',
                                value: '1.97\xA0ms'
                            }
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('renders all event data for a generic trace', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, event, details, rowData;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'generic-about-tracing.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        event = traceData.Renderer.allTraceEntries.find(function(entry) {
                            return entry.name === 'ThreadControllerImpl::RunTask';
                        });
                        if (!event) {
                            throw new Error('Could not find event.');
                        }
                        return [
                            4,
                            _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildTraceEventDetails(traceData, event, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false)
                        ];
                    case 2:
                        details = _state.sent();
                        rowData = getRowDataForDetailsElement(details);
                        assert.deepEqual(rowData, [
                            {
                                title: '',
                                // Generic traces get their events rendered as JSON
                                value: '{   "args": {\n        "chrome_task_annotator": {\n            "delay_policy": "PRECISE",\n            "task_delay_us": 7159\n        },\n        "src_file": "cc/scheduler/scheduler.cc",\n        "src_func": "ScheduleBeginImplFrameDeadline"\n    },\n    "cat": "toplevel",\n    "dur": 222,\n    "name": "ThreadControllerImpl::RunTask",\n    "ph": "X",\n    "pid": 1214129,\n    "tdur": 163,\n    "tid": 7,\n    "ts": 1670373249790,\n    "tts": 5752392,\n    "selfTime": 202\n}'
                            }
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('renders invalidations correctly', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, documentNode, updateLayoutTreeEvent, details, rowData;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'style-invalidation-change-attribute.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.initTraceBoundsManager(traceData);
                        // Set up a fake DOM so that we can request nodes by backend Ids (even
                        // though we return none, we need to mock these calls else the frontend
                        // will not work.)
                        documentNode = {
                            nodeId: 1
                        };
                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__.setMockConnectionResponseHandler)('DOM.getDocument', function() {
                            return {
                                root: documentNode
                            };
                        });
                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__.setMockConnectionResponseHandler)('DOM.pushNodesByBackendIdsToFrontend', function() {
                            return {
                                nodeIds: []
                            };
                        });
                        updateLayoutTreeEvent = traceData.Renderer.allTraceEntries.find(function(event) {
                            var _event_args_beginData_stackTrace, _event_args_beginData;
                            return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventUpdateLayoutTree(event) && ((_event_args_beginData = event.args.beginData) === null || _event_args_beginData === void 0 ? void 0 : (_event_args_beginData_stackTrace = _event_args_beginData.stackTrace) === null || _event_args_beginData_stackTrace === void 0 ? void 0 : _event_args_beginData_stackTrace[0].functionName) === 'testFuncs.changeAttributeAndDisplay';
                        });
                        if (!updateLayoutTreeEvent) {
                            throw new Error('Could not find update layout tree event');
                        }
                        return [
                            4,
                            _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildTraceEventDetails(traceData, updateLayoutTreeEvent, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false)
                        ];
                    case 2:
                        details = _state.sent();
                        rowData = getRowDataForDetailsElement(details);
                        assert.deepEqual(rowData, [
                            {
                                title: 'Elements Affected',
                                value: '3'
                            },
                            {
                                title: 'Selector Stats',
                                value: 'Select "" to collect detailed CSS selector matching statistics.'
                            },
                            {
                                // The "Recalculation forced" Stack trace
                                title: undefined,
                                value: 'testFuncs.changeAttributeAndDisplay @ chromedevtools.github.io/performance-stories/style-invalidations/app.js:47:40'
                            },
                            {
                                title: 'Initiated by',
                                value: 'Schedule Style Recalculation'
                            },
                            {
                                title: 'Pending for',
                                value: '7.1 ms'
                            },
                            {
                                title: 'PseudoClass:active',
                                value: 'BUTTON id=\'changeAttributeAndDisplay\''
                            },
                            {
                                title: 'Attribute (dir)',
                                value: 'DIV id=\'testElementFour\' at chromedevtools.github.io/performance-stories/style-invalidations/app.js:46'
                            },
                            {
                                title: 'Attribute (dir)',
                                value: 'DIV id=\'testElementFive\' at chromedevtools.github.io/performance-stories/style-invalidations/app.js:47'
                            },
                            {
                                title: 'Element has pending invalidation list',
                                value: 'DIV id=\'testElementFour\''
                            },
                            {
                                title: 'Element has pending invalidation list',
                                value: 'DIV id=\'testElementFive\''
                            }
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('renders details for performance.mark', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, mark, details, rowData;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'user-timings-details.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        mark = traceData.UserTimings.performanceMarks[0];
                        if (!mark) {
                            throw new Error('Could not find expected event');
                        }
                        return [
                            4,
                            _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildTraceEventDetails(traceData, mark, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false)
                        ];
                    case 2:
                        details = _state.sent();
                        rowData = getRowDataForDetailsElement(details);
                        assert.deepEqual(rowData, [
                            {
                                title: 'Timestamp',
                                value: '1058.3\xA0ms'
                            },
                            {
                                title: 'Details',
                                value: '{   \"hello\": \"world\"\n}'
                            }
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('renders details for performance.measure', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, measure, details, rowData;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'user-timings-details.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        measure = traceData.UserTimings.performanceMeasures[0];
                        if (!measure) {
                            throw new Error('Could not find expected event');
                        }
                        return [
                            4,
                            _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildTraceEventDetails(traceData, measure, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false)
                        ];
                    case 2:
                        details = _state.sent();
                        rowData = getRowDataForDetailsElement(details);
                        assert.deepEqual(rowData, [
                            {
                                title: 'Timestamp',
                                value: '1005.5\xA0ms'
                            },
                            {
                                title: 'Details',
                                value: '{   \"devtools\": {\n        \"metadata\": {\n            \"extensionName\": \"hello\",\n            \"dataType\": \"track-entry\"\n        },\n        \"color\": \"error\",\n        \"track\": \"An extension track\"\n    }\n}'
                            }
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('renders details for a v8.compile ("Compile Script") event', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, compileEvent, details, rowData;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'user-timings.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        compileEvent = traceData.Renderer.allTraceEntries.find(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventV8Compile);
                        if (!compileEvent) {
                            throw new Error('Could not find expected event');
                        }
                        return [
                            4,
                            _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildTraceEventDetails(traceData, compileEvent, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false)
                        ];
                    case 2:
                        details = _state.sent();
                        rowData = getRowDataForDetailsElement(details);
                        assert.deepEqual(rowData, [
                            {
                                title: 'Script',
                                // URL plus line/col number
                                value: 'chrome-extension://blijaeebfebmkmekmdnehcmmcjnblkeo/lib/utils.js:1:1'
                            },
                            {
                                title: 'Streamed',
                                value: 'false: inline script'
                            },
                            {
                                title: 'Compilation cache status',
                                value: 'script not eligible'
                            }
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('renders the details for a layout shift properly', /*#__PURE__*/ _async_to_generator(function() {
            var domModel, documentNode, docc, domNode2, domID, traceData, layoutShift, details, rowData;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        // Set related CDP methods responses to return our mock document and node.
                        domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel);
                        assert.exists(domModel);
                        documentNode = {
                            nodeId: 1
                        };
                        docc = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode(domModel);
                        domNode2 = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode(domModel);
                        domID = 58;
                        domNode2.id = domID;
                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__.setMockConnectionResponseHandler)('DOM.pushNodesByBackendIdsToFrontend', function() {
                            return {
                                nodeIds: [
                                    domID
                                ]
                            };
                        });
                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__.setMockConnectionResponseHandler)('DOM.getDocument', function() {
                            return {
                                root: documentNode
                            };
                        });
                        return [
                            4,
                            domModel.requestDocument()
                        ];
                    case 1:
                        _state.sent();
                        domModel.registerNode(domNode2);
                        domNode2.init(docc, false, {
                            nodeName: 'A test node name',
                            nodeId: domID
                        });
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'cls-single-frame.json.gz')
                        ];
                    case 2:
                        traceData = _state.sent().traceData;
                        layoutShift = traceData.LayoutShifts.clusters[0].events[0];
                        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.registerLinkifier({
                            contextTypes: function contextTypes() {
                                return [
                                    _timeline_js__WEBPACK_IMPORTED_MODULE_14__.CLSLinkifier.CLSRect
                                ];
                            },
                            loadLinkifier: function loadLinkifier() {
                                return _async_to_generator(function() {
                                    return _ts_generator(this, function(_state) {
                                        return [
                                            2,
                                            _timeline_js__WEBPACK_IMPORTED_MODULE_14__.CLSLinkifier.Linkifier.instance()
                                        ];
                                    });
                                })();
                            }
                        });
                        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.registerLinkifier({
                            contextTypes: function contextTypes() {
                                return [
                                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode
                                ];
                            },
                            loadLinkifier: function loadLinkifier() {
                                return _async_to_generator(function() {
                                    return _ts_generator(this, function(_state) {
                                        return [
                                            2,
                                            _panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_5__.DOMLinkifier.Linkifier.instance()
                                        ];
                                    });
                                })();
                            }
                        });
                        if (!layoutShift) {
                            throw new Error('Could not find LayoutShift event.');
                        }
                        return [
                            4,
                            _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildTraceEventDetails(traceData, layoutShift, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false)
                        ];
                    case 3:
                        details = _state.sent();
                        rowData = getRowDataForDetailsElement(details);
                        assert.deepEqual(rowData, [
                            {
                                title: 'Warning',
                                value: 'Cumulative Layout Shifts can result in poor user experiences. It has recently evolved.'
                            },
                            {
                                title: 'Score',
                                value: '0.04218'
                            },
                            {
                                title: 'Cumulative Score',
                                value: '0.04218'
                            },
                            {
                                title: 'Current Cluster ID',
                                value: '1'
                            },
                            {
                                title: 'Current Cluster Score',
                                value: '0.2952'
                            },
                            {
                                title: 'Had recent input',
                                value: 'No'
                            },
                            {
                                title: 'Moved from',
                                value: 'Location: [120,670], Size: [900x900]'
                            },
                            {
                                title: 'Moved to',
                                value: 'Location: [120,1270], Size: [900x478]'
                            },
                            {
                                title: 'Related Node',
                                value: 'A test node name'
                            }
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('renders the details for an extension entry properly', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, extensionEntry, details, rowData;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'extension-tracks-and-marks.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        extensionEntry = traceData.ExtensionTraceData.extensionTrackData[1].entriesByTrack['An Extension Track'][0];
                        if (!extensionEntry) {
                            throw new Error('Could not find extension entry.');
                        }
                        return [
                            4,
                            _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildTraceEventDetails(traceData, extensionEntry, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false)
                        ];
                    case 2:
                        details = _state.sent();
                        rowData = getRowDataForDetailsElement(details);
                        assert.deepEqual(rowData, [
                            {
                                title: 'Description',
                                value: 'This is a child task'
                            },
                            {
                                title: 'Tip',
                                value: 'Do something about it'
                            }
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('renders the details for an extension marker properly', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, extensionMark, details, rowData;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'extension-tracks-and-marks.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        extensionMark = traceData.ExtensionTraceData.extensionMarkers[0];
                        if (!extensionMark) {
                            throw new Error('Could not find extension mark.');
                        }
                        return [
                            4,
                            _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildTraceEventDetails(traceData, extensionMark, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false)
                        ];
                    case 2:
                        details = _state.sent();
                        rowData = getRowDataForDetailsElement(details);
                        assert.deepEqual(rowData, [
                            {
                                title: 'Description',
                                value: 'This marks the start of a task'
                            }
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('renders the details for a profile call properly', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, _traceData_Renderer_processes_values, process, _process_threads_values, thread, profileCalls, details, rowData;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.registerLinkifier({
                            contextTypes: function contextTypes() {
                                return [
                                    _timeline_js__WEBPACK_IMPORTED_MODULE_14__.CLSLinkifier.CLSRect
                                ];
                            },
                            loadLinkifier: function loadLinkifier() {
                                return _async_to_generator(function() {
                                    return _ts_generator(this, function(_state) {
                                        return [
                                            2,
                                            _timeline_js__WEBPACK_IMPORTED_MODULE_14__.CLSLinkifier.Linkifier.instance()
                                        ];
                                    });
                                })();
                            }
                        });
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'simple-js-program.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        _traceData_Renderer_processes_values = _sliced_to_array(traceData.Renderer.processes.values(), 1), process = _traceData_Renderer_processes_values[0];
                        _process_threads_values = _sliced_to_array(process.threads.values(), 1), thread = _process_threads_values[0];
                        profileCalls = thread.entries.filter(function(entry) {
                            return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isProfileCall(entry);
                        });
                        if (!profileCalls) {
                            throw new Error('Could not find renderer events');
                        }
                        return [
                            4,
                            _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildTraceEventDetails(traceData, profileCalls[0], new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false)
                        ];
                    case 2:
                        details = _state.sent();
                        rowData = getRowDataForDetailsElement(details);
                        assert.deepEqual(rowData, [
                            {
                                title: 'Function',
                                value: '(anonymous) @ www.google.com:21:17'
                            }
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('renders the stack trace of a ScheduleStyleRecalculation properly', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, _traceData_Renderer_processes_values, process, _process_threads_values, thread, scheduleStyleRecalcs, details, rowData, stackTraceData;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.registerLinkifier({
                            contextTypes: function contextTypes() {
                                return [
                                    _timeline_js__WEBPACK_IMPORTED_MODULE_14__.CLSLinkifier.CLSRect
                                ];
                            },
                            loadLinkifier: function loadLinkifier() {
                                return _async_to_generator(function() {
                                    return _ts_generator(this, function(_state) {
                                        return [
                                            2,
                                            _timeline_js__WEBPACK_IMPORTED_MODULE_14__.CLSLinkifier.Linkifier.instance()
                                        ];
                                    });
                                })();
                            }
                        });
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.initTraceBoundsManager(traceData);
                        _traceData_Renderer_processes_values = _sliced_to_array(traceData.Renderer.processes.values(), 1), process = _traceData_Renderer_processes_values[0];
                        _process_threads_values = _sliced_to_array(process.threads.values(), 1), thread = _process_threads_values[0];
                        scheduleStyleRecalcs = thread.entries.filter(function(entry) {
                            return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventScheduleStyleRecalculation(entry);
                        });
                        return [
                            4,
                            _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildTraceEventDetails(traceData, scheduleStyleRecalcs[1], new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false)
                        ];
                    case 2:
                        details = _state.sent();
                        rowData = getRowDataForDetailsElement(details)[0];
                        assert.deepEqual(rowData, {
                            title: 'Details',
                            value: 'web.dev/js/app.js?v=1423cda3:1:183'
                        });
                        stackTraceData = getStackTraceForDetailsElement(details);
                        assert.deepEqual(stackTraceData, [
                            '(anonymous) @ web.dev/js/app.js?v=1423cda3:1:183'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('renders the stack trace of a RecalculateStyles properly', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, _traceData_Renderer_processes_values, process, _process_threads_values, thread, stylesRecalc, details, stackTraceData;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.registerLinkifier({
                            contextTypes: function contextTypes() {
                                return [
                                    _timeline_js__WEBPACK_IMPORTED_MODULE_14__.CLSLinkifier.CLSRect
                                ];
                            },
                            loadLinkifier: function loadLinkifier() {
                                return _async_to_generator(function() {
                                    return _ts_generator(this, function(_state) {
                                        return [
                                            2,
                                            _timeline_js__WEBPACK_IMPORTED_MODULE_14__.CLSLinkifier.Linkifier.instance()
                                        ];
                                    });
                                })();
                            }
                        });
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.initTraceBoundsManager(traceData);
                        _traceData_Renderer_processes_values = _sliced_to_array(traceData.Renderer.processes.values(), 1), process = _traceData_Renderer_processes_values[0];
                        _process_threads_values = _sliced_to_array(process.threads.values(), 1), thread = _process_threads_values[0];
                        stylesRecalc = thread.entries.filter(function(entry) {
                            return entry.name === "UpdateLayoutTree" /* TraceEngine.Types.TraceEvents.KnownEventName.UpdateLayoutTree */ ;
                        });
                        return [
                            4,
                            _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildTraceEventDetails(traceData, stylesRecalc[3], new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false)
                        ];
                    case 2:
                        details = _state.sent();
                        stackTraceData = getStackTraceForDetailsElement(details);
                        assert.deepEqual(stackTraceData, [
                            '(anonymous) @ web.dev/js/app.js?v=1423cda3:1:183'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('renders the warning for a trace event in its details', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, events, longTask, details, rowData;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'simple-js-program.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        events = traceData.Renderer.allTraceEntries;
                        longTask = events.find(function(e) {
                            return (e.dur || 0) > 1000000;
                        });
                        if (!longTask) {
                            throw new Error('Could not find Long Task event.');
                        }
                        return [
                            4,
                            _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildTraceEventDetails(traceData, longTask, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false)
                        ];
                    case 2:
                        details = _state.sent();
                        rowData = getRowDataForDetailsElement(details);
                        assert.deepEqual(rowData, [
                            {
                                title: 'Warning',
                                value: 'Long task took 1.30\u00A0s.'
                            }
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('shows information for the WebSocketCreate initiator when viewing a WebSocketSendHandshakeRequest event', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, sendHandshake, details, rowData, expectedRowData;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-sockets.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.initTraceBoundsManager(traceData);
                        sendHandshake = traceData.Renderer.allTraceEntries.find(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventWebSocketSendHandshakeRequest);
                        if (!sendHandshake) {
                            throw new Error('Could not find handshake event.');
                        }
                        return [
                            4,
                            _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildTraceEventDetails(traceData, sendHandshake, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false)
                        ];
                    case 2:
                        details = _state.sent();
                        rowData = getRowDataForDetailsElement(details);
                        expectedRowData = [
                            {
                                title: 'URL',
                                value: 'wss://socketsbay.com/wss/v2/1/demo/'
                            },
                            // The 'First Invalidated' Stack trace
                            {
                                title: undefined,
                                value: 'connect @ socketsbay.com/test-websockets:314:25'
                            },
                            {
                                title: 'Initiated by',
                                'value': 'Create WebSocket'
                            },
                            {
                                title: 'Pending for',
                                value: '72.0 ms'
                            }
                        ];
                        assert.deepEqual(rowData, expectedRowData);
                        return [
                            2
                        ];
                }
            });
        }));
        it('shows information for the events initiated by WebSocketCreate when viewing a WebSocketCreate event', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, sendHandshake, details, rowData, expectedRowData;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-sockets.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.initTraceBoundsManager(traceData);
                        sendHandshake = traceData.Renderer.allTraceEntries.find(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventWebSocketCreate);
                        if (!sendHandshake) {
                            throw new Error('Could not find handshake event.');
                        }
                        return [
                            4,
                            _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildTraceEventDetails(traceData, sendHandshake, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false)
                        ];
                    case 2:
                        details = _state.sent();
                        rowData = getRowDataForDetailsElement(details);
                        expectedRowData = [
                            {
                                title: 'URL',
                                value: 'wss://socketsbay.com/wss/v2/1/demo/'
                            },
                            // The initiator stack trace
                            {
                                title: undefined,
                                value: 'connect @ socketsbay.com/test-websockets:314:25'
                            },
                            // The 2 entries under "Initiator for" are displayed as seperate links and in the UI it is obvious they are seperate
                            {
                                title: 'Initiator for',
                                'value': 'Send WebSocket Handshake Receive WebSocket Handshake'
                            }
                        ];
                        assert.deepEqual(rowData, expectedRowData);
                        return [
                            2
                        ];
                }
            });
        }));
        it('shows the aggregated time information for an event', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, event, details, pieChartData, expectedPieChartData;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        event = traceData.Renderer.allTraceEntries.find(function(e) {
                            return e.ts === 1020034919877 && e.name === 'RunTask';
                        });
                        if (!event) {
                            throw new Error('Could not find renderer events');
                        }
                        return [
                            4,
                            _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildTraceEventDetails(traceData, event, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), true)
                        ];
                    case 2:
                        details = _state.sent();
                        pieChartData = getPieChartDataForDetailsElement(details);
                        expectedPieChartData = [
                            {
                                title: 'System (self)',
                                value: '2\u00A0ms'
                            },
                            {
                                title: 'System (children)',
                                value: '2\u00A0ms'
                            },
                            {
                                title: 'Rendering',
                                value: '28\u00A0ms'
                            },
                            {
                                title: 'Painting',
                                value: '2\u00A0ms'
                            },
                            {
                                title: 'Total',
                                value: '34\u00A0ms'
                            }
                        ];
                        assert.deepEqual(pieChartData, expectedPieChartData);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    it('can generate details for a frame', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, frame, filmStrip, details, container, img, durationRow, durationValue, value;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev-with-commit.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    frame = traceData.Frames.frames.at(0);
                    if (!frame) {
                        throw new Error('Could not find expected frame');
                    }
                    filmStrip = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Extras.FilmStrip.fromTraceData(traceData);
                    details = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.generateDetailsContentForFrame(frame, filmStrip, filmStrip.frames[0]);
                    container = document.createElement('div');
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_6__.renderElementIntoDOM)(container);
                    container.appendChild(details);
                    // Give the image element time to render and load.
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_6__.doubleRaf)()
                    ];
                case 2:
                    _state.sent();
                    img = container.querySelector('.timeline-filmstrip-preview img');
                    assert.isTrue(img === null || img === void 0 ? void 0 : img.currentSrc.includes(filmStrip.frames[0].screenshotEvent.args.dataUri));
                    durationRow = container.querySelector('[data-row-title="Duration"]');
                    durationValue = durationRow === null || durationRow === void 0 ? void 0 : durationRow.querySelector('.timeline-details-view-row-value span');
                    if (!durationValue) {
                        throw new Error('Could not find duration');
                    }
                    // Strip the unicode spaces out and replace with simple spaces for easy
                    // assertions.
                    value = durationValue.innerText.replaceAll(/\s/g, ' ');
                    assert.strictEqual(value, '37.85 ms (at 109.82 ms)');
                    return [
                        2
                    ];
            }
        });
    }));
    describe('eventTitle', function() {
        it('renders the correct title for an EventTiming interaction event', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, interactionEvent, details;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'slow-interaction-button-click.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        interactionEvent = traceData.UserInteractions.interactionEventsWithNoNesting[0];
                        details = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.eventTitle(interactionEvent);
                        assert.deepEqual(details, 'Pointer');
                        return [
                            2
                        ];
                }
            });
        }));
        it('will use the resolved function name for a profile node that has a sourcemap', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, mainThread, profileEntry, title;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'slow-interaction-button-click.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        mainThread = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_10__.getMainThread)(traceData.Renderer);
                        profileEntry = mainThread.entries.find(function(entry) {
                            return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isProfileCall(entry);
                        });
                        if (!profileEntry || !_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isProfileCall(profileEntry)) {
                            throw new Error('Could not find a profile entry');
                        }
                        // Fake that we resolved the entry's name from a sourcemap.
                        _timeline_js__WEBPACK_IMPORTED_MODULE_14__.SourceMapsResolver.SourceMapsResolver.storeResolvedNodeNameForEntry(profileEntry.pid, profileEntry.tid, profileEntry.nodeId, 'resolved-function-test');
                        title = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.eventTitle(profileEntry);
                        assert.strictEqual(title, 'resolved-function-test');
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('eventStyle', function() {
        it('returns the correct style for profile calls', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, rendererHandler, _rendererHandler_processes_values, process, _process_threads_values, thread, profileCalls, style;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'simple-js-program.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        rendererHandler = traceData.Renderer;
                        if (!rendererHandler) {
                            throw new Error('RendererHandler is undefined');
                        }
                        _rendererHandler_processes_values = _sliced_to_array(rendererHandler.processes.values(), 1), process = _rendererHandler_processes_values[0];
                        _process_threads_values = _sliced_to_array(process.threads.values(), 1), thread = _process_threads_values[0];
                        profileCalls = thread.entries.filter(function(entry) {
                            return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isProfileCall(entry);
                        });
                        style = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.eventStyle(profileCalls[0]);
                        assert.strictEqual(style.category.name, 'scripting');
                        assert.strictEqual(style.category.color, 'rgb(250 204 21 / 100%)');
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('statsForTimeRange', function() {
        it('correctly aggregates up stats', /*#__PURE__*/ _async_to_generator(function() {
            var mainThread, pid, events, rangeStats101To103, rangeStats104To109;
            function microsec(x) {
                return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(x);
            }
            return _ts_generator(this, function(_state) {
                mainThread = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(1);
                pid = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(100);
                events = [
                    {
                        cat: 'disabled-by-default-devtools.timeline',
                        name: 'TracingStartedInBrowser',
                        ph: "I" /* TraceEngine.Types.TraceEvents.Phase.INSTANT */ ,
                        pid: pid,
                        tid: mainThread,
                        ts: microsec(100),
                        args: {
                            data: {
                                frames: [
                                    {
                                        frame: 'frame1',
                                        url: 'frameurl',
                                        name: 'frame-name'
                                    }
                                ]
                            }
                        }
                    },
                    {
                        cat: 'disabled-by-default-devtools.timeline',
                        name: 'SetLayerTreeId',
                        ph: "I" /* TraceEngine.Types.TraceEvents.Phase.INSTANT */ ,
                        pid: pid,
                        tid: mainThread,
                        ts: microsec(101),
                        args: {
                            data: {
                                frame: 'frame1',
                                layerTreeId: 17
                            }
                        }
                    },
                    {
                        cat: 'toplevel',
                        name: 'Program',
                        ph: "X" /* TraceEngine.Types.TraceEvents.Phase.COMPLETE */ ,
                        ts: microsec(100000),
                        dur: microsec(3000),
                        tid: mainThread,
                        pid: pid,
                        args: {}
                    },
                    {
                        cat: 'disabled-by-default-devtools.timeline',
                        name: 'FunctionCall',
                        ph: "X" /* TraceEngine.Types.TraceEvents.Phase.COMPLETE */ ,
                        ts: microsec(100500),
                        dur: microsec(1500),
                        tid: mainThread,
                        pid: pid,
                        args: {}
                    },
                    {
                        cat: 'disabled-by-default-devtools.timeline',
                        name: 'Layout',
                        ph: "X" /* TraceEngine.Types.TraceEvents.Phase.COMPLETE */ ,
                        ts: microsec(101000),
                        dur: microsec(1000),
                        tid: mainThread,
                        pid: pid,
                        args: {
                            beginData: {
                                frame: 'FAKE_FRAME_ID',
                                dirtyObjects: 0,
                                partialLayout: false,
                                totalObjects: 1
                            },
                            endData: {
                                layoutRoots: []
                            }
                        }
                    },
                    {
                        cat: 'toplevel',
                        name: 'Program',
                        ph: "X" /* TraceEngine.Types.TraceEvents.Phase.COMPLETE */ ,
                        ts: microsec(104000),
                        dur: microsec(4000),
                        tid: mainThread,
                        pid: pid,
                        args: {}
                    },
                    {
                        cat: 'disabled-by-default-devtools.timeline',
                        name: 'FunctionCall',
                        ph: "X" /* TraceEngine.Types.TraceEvents.Phase.COMPLETE */ ,
                        ts: microsec(104000),
                        dur: microsec(1000),
                        tid: mainThread,
                        pid: pid,
                        args: {}
                    },
                    {
                        cat: 'disabled-by-default-devtools.timeline',
                        name: 'CommitLoad',
                        ph: "X" /* TraceEngine.Types.TraceEvents.Phase.COMPLETE */ ,
                        ts: microsec(105000),
                        dur: microsec(1000),
                        tid: mainThread,
                        pid: pid,
                        args: {}
                    },
                    {
                        cat: 'disabled-by-default-devtools.timeline',
                        name: 'Layout',
                        ph: "X" /* TraceEngine.Types.TraceEvents.Phase.COMPLETE */ ,
                        ts: microsec(107000),
                        dur: microsec(1000),
                        tid: mainThread,
                        pid: pid,
                        args: {
                            beginData: {
                                frame: 'FAKE_FRAME_ID',
                                dirtyObjects: 0,
                                partialLayout: false,
                                totalObjects: 1
                            },
                            endData: {
                                layoutRoots: []
                            }
                        }
                    }
                ];
                rangeStats101To103 = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.statsForTimeRange(events, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MilliSeconds(101), _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MilliSeconds(103));
                assert.deepEqual(rangeStats101To103, {
                    other: 1,
                    rendering: 1,
                    scripting: 0,
                    idle: 0
                });
                rangeStats104To109 = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.statsForTimeRange(events, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MilliSeconds(104), _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MilliSeconds(109));
                assert.deepEqual(rangeStats104To109, {
                    other: 2,
                    rendering: 1,
                    scripting: 1,
                    idle: 1
                });
                return [
                    2
                ];
            });
        }));
    });
    describe('isMarkerEvent', function() {
        it('is true for a timestamp event', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, timestamp;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev-initial-url.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        timestamp = traceData.Renderer.allTraceEntries.find(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventTimeStamp);
                        assert.isOk(timestamp);
                        assert.isTrue(_timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.isMarkerEvent(traceData, timestamp));
                        return [
                            2
                        ];
                }
            });
        }));
        it('is true for a Mark First Paint event', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, markFirstPaint;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev-initial-url.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        markFirstPaint = traceData.PageLoadMetrics.allMarkerEvents.find(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventFirstPaint);
                        assert.isOk(markFirstPaint);
                        assert.isTrue(_timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.isMarkerEvent(traceData, markFirstPaint));
                        return [
                            2
                        ];
                }
            });
        }));
        it('is true for a Mark FCP event', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, markFCPEvent;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev-initial-url.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        markFCPEvent = traceData.PageLoadMetrics.allMarkerEvents.find(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventFirstContentfulPaint);
                        assert.isOk(markFCPEvent);
                        assert.isTrue(_timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.isMarkerEvent(traceData, markFCPEvent));
                        return [
                            2
                        ];
                }
            });
        }));
        it('is false for a Mark FCP event not on the main frame', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, markFCPEvent, copyOfEvent;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev-initial-url.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        markFCPEvent = traceData.PageLoadMetrics.allMarkerEvents.find(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventFirstContentfulPaint);
                        assert.isOk(markFCPEvent);
                        assert.isOk(markFCPEvent.args);
                        // Now make a copy (so we do not mutate any data) and pretend it is not on the main frame.
                        copyOfEvent = _object_spread_props(_object_spread({}, markFCPEvent), {
                            args: _object_spread({}, markFCPEvent.args)
                        });
                        copyOfEvent.args.frame = 'not-the-main-frame';
                        assert.isFalse(_timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.isMarkerEvent(traceData, copyOfEvent));
                        return [
                            2
                        ];
                }
            });
        }));
        it('is true for a MarkDOMContent event', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, markDOMContentEvent;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev-initial-url.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        markDOMContentEvent = traceData.PageLoadMetrics.allMarkerEvents.find(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventMarkDOMContent);
                        assert.isOk(markDOMContentEvent);
                        assert.isTrue(_timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.isMarkerEvent(traceData, markDOMContentEvent));
                        return [
                            2
                        ];
                }
            });
        }));
        it('is true for a MarkLoad event', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, markLoadEvent;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev-initial-url.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        markLoadEvent = traceData.PageLoadMetrics.allMarkerEvents.find(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventMarkLoad);
                        assert.isOk(markLoadEvent);
                        assert.isTrue(_timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.isMarkerEvent(traceData, markLoadEvent));
                        return [
                            2
                        ];
                }
            });
        }));
        it('is true for a LCP candiadate event', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, markLCPCandidate;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev-initial-url.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        markLCPCandidate = traceData.PageLoadMetrics.allMarkerEvents.find(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventLargestContentfulPaintCandidate);
                        assert.isOk(markLCPCandidate);
                        assert.isTrue(_timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.isMarkerEvent(traceData, markLCPCandidate));
                        return [
                            2
                        ];
                }
            });
        }));
        it('is false for a MarkDOMContent event not on outermost main frame', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, markDOMContentEvent, copyOfEventNotOutermostFrame;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev-initial-url.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        markDOMContentEvent = traceData.PageLoadMetrics.allMarkerEvents.find(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventMarkDOMContent);
                        assert.isOk(markDOMContentEvent);
                        assert.isOk(markDOMContentEvent.args);
                        assert.isOk(markDOMContentEvent.args.data);
                        copyOfEventNotOutermostFrame = _object_spread_props(_object_spread({}, markDOMContentEvent), {
                            args: _object_spread_props(_object_spread({}, markDOMContentEvent.args), {
                                data: _object_spread_props(_object_spread({}, markDOMContentEvent.args.data), {
                                    isOutermostMainFrame: false
                                })
                            })
                        });
                        assert.isFalse(_timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.isMarkerEvent(traceData, copyOfEventNotOutermostFrame));
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('displayNameForFrame', function() {
        it('trims the URL at 80 chars by default', /*#__PURE__*/ _async_to_generator(function() {
            var frame, name;
            return _ts_generator(this, function(_state) {
                frame = {
                    name: 'test-frame',
                    url: 'https://' + 'a'.repeat(80),
                    frame: 'frame-id',
                    processId: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(1)
                };
                name = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.displayNameForFrame(frame);
                assert.strictEqual(name, "https://"/* 80 minus the 8 chars for 'https://' */ .concat('a'.repeat(72)));
                assert.lengthOf(name, 80);
                return [
                    2
                ];
            });
        }));
        it('uses the frame name if the URL is about:', /*#__PURE__*/ _async_to_generator(function() {
            var frame, name;
            return _ts_generator(this, function(_state) {
                frame = {
                    name: 'test-frame',
                    url: 'about:blank',
                    frame: 'frame-id',
                    processId: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(1)
                };
                name = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.displayNameForFrame(frame);
                assert.strictEqual(name, '"test-frame"');
                return [
                    2
                ];
            });
        }));
        it('trims the frame name from the middle if it is too long', /*#__PURE__*/ _async_to_generator(function() {
            var frame, name;
            return _ts_generator(this, function(_state) {
                frame = {
                    name: 'test-frame-that-is-long',
                    url: 'about:blank',
                    frame: 'frame-id',
                    processId: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(1)
                };
                name = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.displayNameForFrame(frame, 10);
                assert.strictEqual(name, '"test-…long"');
                return [
                    2
                ];
            });
        }));
    });
    describe('buildDetailsNodeForMarkerEvents', function() {
        it('builds the right link for an LCP Event', /*#__PURE__*/ _async_to_generator(function() {
            var _html_querySelector, traceData, markLCPEvent, html, url;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        markLCPEvent = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_10__.getEventOfType)(traceData.PageLoadMetrics.allMarkerEvents, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventLargestContentfulPaintCandidate);
                        html = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildDetailsNodeForMarkerEvents(markLCPEvent);
                        url = (_html_querySelector = html.querySelector('x-link')) === null || _html_querySelector === void 0 ? void 0 : _html_querySelector.getAttribute('href');
                        assert.strictEqual(url, 'https://web.dev/lcp/');
                        assert.strictEqual(html.innerText, 'Learn more about largest contentful paint.');
                        return [
                            2
                        ];
                }
            });
        }));
        it('builds the right link for an FCP Event', /*#__PURE__*/ _async_to_generator(function() {
            var _html_querySelector, traceData, markFCPEvent, html, url;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        markFCPEvent = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_10__.getEventOfType)(traceData.PageLoadMetrics.allMarkerEvents, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventFirstContentfulPaint);
                        html = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildDetailsNodeForMarkerEvents(markFCPEvent);
                        url = (_html_querySelector = html.querySelector('x-link')) === null || _html_querySelector === void 0 ? void 0 : _html_querySelector.getAttribute('href');
                        assert.strictEqual(url, 'https://web.dev/first-contentful-paint/');
                        assert.strictEqual(html.innerText, 'Learn more about first contentful paint.');
                        return [
                            2
                        ];
                }
            });
        }));
        it('builds a generic event for other marker events', /*#__PURE__*/ _async_to_generator(function() {
            var _html_querySelector, traceData, markLoadEvent, html, url;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        markLoadEvent = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_10__.getEventOfType)(traceData.PageLoadMetrics.allMarkerEvents, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventMarkLoad);
                        html = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildDetailsNodeForMarkerEvents(markLoadEvent);
                        url = (_html_querySelector = html.querySelector('x-link')) === null || _html_querySelector === void 0 ? void 0 : _html_querySelector.getAttribute('href');
                        assert.strictEqual(url, 'https://web.dev/user-centric-performance-metrics/');
                        assert.strictEqual(html.innerText, 'Learn more about page performance metrics.');
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=TimelineUIUtils.test.js.map


}),

}]);