"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_components_BreakpointsView_test_js"], {
"./panels/sources/components/BreakpointsView.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/breakpoints/breakpoints.js */ "./models/breakpoints/breakpoints.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../testing/UISourceCodeHelpers.js */ "./testing/UISourceCodeHelpers.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components.js */ "./panels/sources/components/components.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
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












var DETAILS_SELECTOR = 'details';
var EXPANDED_GROUPS_SELECTOR = 'details[open]';
var COLLAPSED_GROUPS_SELECTOR = 'details:not([open])';
var CODE_SNIPPET_SELECTOR = '.code-snippet';
var GROUP_NAME_SELECTOR = '.group-header-title';
var BREAKPOINT_ITEM_SELECTOR = '.breakpoint-item';
var HIT_BREAKPOINT_SELECTOR = BREAKPOINT_ITEM_SELECTOR + '.hit';
var BREAKPOINT_LOCATION_SELECTOR = '.location';
var REMOVE_FILE_BREAKPOINTS_SELECTOR = '.group-hover-actions > button[data-remove-breakpoint]';
var REMOVE_SINGLE_BREAKPOINT_SELECTOR = '.breakpoint-item-location-or-actions > button[data-remove-breakpoint]';
var EDIT_SINGLE_BREAKPOINT_SELECTOR = 'button[data-edit-breakpoint]';
var PAUSE_ON_UNCAUGHT_EXCEPTIONS_SELECTOR = '.pause-on-uncaught-exceptions';
var PAUSE_ON_CAUGHT_EXCEPTIONS_SELECTOR = '.pause-on-caught-exceptions';
var TABBABLE_SELECTOR = '[tabindex="0"]';
var SUMMARY_SELECTOR = 'summary';
var GROUP_DIFFERENTIATOR_SELECTOR = '.group-header-differentiator';
var HELLO_JS_FILE = 'hello.js';
var TEST_JS_FILE = 'test.js';
var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_9__.RenderCoordinator.RenderCoordinator.instance();
function createBreakpointLocations(testData) {
    var breakpointLocations = testData.map(function(data) {
        var mocked = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_8__.setupMockedUISourceCode)(data.url);
        var mockedContent = Promise.resolve({
            content: data.content,
            isEncoded: true
        });
        sinon.stub(mocked.sut, 'requestContent').returns(mockedContent);
        var uiLocation = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.UISourceCode.UILocation(mocked.sut, data.lineNumber, data.columnNumber);
        var breakpoint = sinon.createStubInstance(_models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.Breakpoint);
        breakpoint.enabled.returns(data.enabled);
        breakpoint.condition.returns(data.condition);
        breakpoint.isLogpoint.returns(data.isLogpoint);
        breakpoint.breakpointStorageId.returns("".concat(data.url, ":").concat(data.lineNumber, ":").concat(data.columnNumber));
        return new _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.BreakpointLocation(breakpoint, uiLocation);
    });
    return breakpointLocations;
}
function createStubBreakpointManagerAndSettings() {
    var breakpointManager = sinon.createStubInstance(_models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.BreakpointManager);
    breakpointManager.supportsConditionalBreakpoints.returns(true);
    var dummyStorage = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingsStorage({});
    var settings = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance({
        forceNew: true,
        syncedStorage: dummyStorage,
        globalStorage: dummyStorage,
        localStorage: dummyStorage
    });
    return {
        breakpointManager: breakpointManager,
        settings: settings
    };
}
function createStubBreakpointManagerAndSettingsWithMockdata(testData) {
    var _createStubBreakpointManagerAndSettings = createStubBreakpointManagerAndSettings(), breakpointManager = _createStubBreakpointManagerAndSettings.breakpointManager, settings = _createStubBreakpointManagerAndSettings.settings;
    sinon.stub(_models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.BreakpointManager, 'instance').returns(breakpointManager);
    var breakpointLocations = createBreakpointLocations(testData);
    breakpointManager.allBreakpointLocations.returns(breakpointLocations);
    return {
        breakpointManager: breakpointManager,
        settings: settings
    };
}
function createLocationTestData(url, lineNumber, columnNumber) {
    var enabled = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, content = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : '', condition = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.EMPTY_BREAKPOINT_CONDITION, isLogpoint = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : false, hoverText = arguments.length > 7 ? arguments[7] : void 0;
    return {
        url: url,
        lineNumber: lineNumber,
        columnNumber: columnNumber,
        enabled: enabled,
        content: content,
        condition: condition,
        isLogpoint: isLogpoint,
        hoverText: hoverText
    };
}
function setUpTestWithOneBreakpointLocation() {
    return _setUpTestWithOneBreakpointLocation.apply(this, arguments);
}
function _setUpTestWithOneBreakpointLocation() {
    _setUpTestWithOneBreakpointLocation = _async_to_generator(function() {
        var params, testData, _createStubBreakpointManagerAndSettingsWithMockdata, breakpointManager, settings, controller, data, locations;
        var _arguments = arguments;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    params = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : {
                        file: HELLO_JS_FILE,
                        lineNumber: 10,
                        columnNumber: 3,
                        enabled: true,
                        snippet: 'const a;'
                    };
                    testData = [
                        createLocationTestData(params.file, params.lineNumber, params.columnNumber, params.enabled, params.snippet)
                    ];
                    _createStubBreakpointManagerAndSettingsWithMockdata = createStubBreakpointManagerAndSettingsWithMockdata(testData), breakpointManager = _createStubBreakpointManagerAndSettingsWithMockdata.breakpointManager, settings = _createStubBreakpointManagerAndSettingsWithMockdata.settings;
                    controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({
                        forceNew: true,
                        breakpointManager: breakpointManager,
                        settings: settings
                    });
                    return [
                        4,
                        controller.getUpdatedBreakpointViewData()
                    ];
                case 1:
                    data = _state.sent();
                    assert.lengthOf(data.groups, 1);
                    assert.lengthOf(data.groups[0].breakpointItems, 1);
                    locations = _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.BreakpointManager.instance().allBreakpointLocations();
                    assert.lengthOf(locations, 1);
                    return [
                        2,
                        {
                            controller: controller,
                            groups: data.groups,
                            location: locations[0]
                        }
                    ];
            }
        });
    });
    return _setUpTestWithOneBreakpointLocation.apply(this, arguments);
}
var MockRevealer = /*#__PURE__*/ function() {
    "use strict";
    function MockRevealer() {
        _class_call_check(this, MockRevealer);
    }
    _create_class(MockRevealer, [
        {
            key: "reveal",
            value: function reveal(_revealable, _omitFocus) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2
                        ];
                    });
                })();
            }
        }
    ]);
    return MockRevealer;
}();
function createAndInitializeBreakpointsView() {
    return _createAndInitializeBreakpointsView.apply(this, arguments);
}
function _createAndInitializeBreakpointsView() {
    _createAndInitializeBreakpointsView = _async_to_generator(function() {
        var component;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    // Force creation of a new BreakpointsView singleton so that it gets correctly re-wired with
                    // the current controller singleton (to pick up the latest breakpoint state).
                    component = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsView.instance({
                        forceNew: true
                    });
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent(); // Wait until the initial rendering finishes.
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(component);
                    return [
                        2,
                        component
                    ];
            }
        });
    });
    return _createAndInitializeBreakpointsView.apply(this, arguments);
}
function renderNoBreakpoints(_) {
    return _renderNoBreakpoints.apply(this, arguments);
}
function _renderNoBreakpoints() {
    _renderNoBreakpoints = _async_to_generator(function(param) {
        var pauseOnUncaughtExceptions, pauseOnCaughtExceptions, independentPauseToggles, component;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    pauseOnUncaughtExceptions = param.pauseOnUncaughtExceptions, pauseOnCaughtExceptions = param.pauseOnCaughtExceptions, independentPauseToggles = param.independentPauseToggles;
                    return [
                        4,
                        createAndInitializeBreakpointsView()
                    ];
                case 1:
                    component = _state.sent();
                    component.data = {
                        breakpointsActive: true,
                        pauseOnUncaughtExceptions: pauseOnUncaughtExceptions,
                        pauseOnCaughtExceptions: pauseOnCaughtExceptions,
                        independentPauseToggles: independentPauseToggles,
                        groups: []
                    };
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    return [
                        2,
                        component
                    ];
            }
        });
    });
    return _renderNoBreakpoints.apply(this, arguments);
}
function renderSingleBreakpoint() {
    return _renderSingleBreakpoint.apply(this, arguments);
}
function _renderSingleBreakpoint() {
    _renderSingleBreakpoint = _async_to_generator(function() {
        var type, hoverText, component, data;
        var _arguments = arguments;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    type = _arguments.length > 0 && _arguments[0] !== void 0 /* SDK.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT */  ? _arguments[0] : "REGULAR_BREAKPOINT", hoverText = _arguments.length > 1 ? _arguments[1] : void 0;
                    // Only provide a hover text if it's not a regular breakpoint.
                    assert.isTrue(!hoverText || type !== "REGULAR_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT */ );
                    return [
                        4,
                        createAndInitializeBreakpointsView()
                    ];
                case 1:
                    component = _state.sent();
                    data = {
                        breakpointsActive: true,
                        pauseOnUncaughtExceptions: false,
                        pauseOnCaughtExceptions: false,
                        independentPauseToggles: true,
                        groups: [
                            {
                                name: 'test1.js',
                                url: 'https://google.com/test1.js',
                                editable: true,
                                expanded: true,
                                breakpointItems: [
                                    {
                                        id: '1',
                                        location: '1',
                                        codeSnippet: 'const a = 0;',
                                        isHit: true,
                                        status: "ENABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.ENABLED */ ,
                                        type: type,
                                        hoverText: hoverText
                                    }
                                ]
                            }
                        ]
                    };
                    component.data = data;
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    return [
                        2,
                        {
                            component: component,
                            data: data
                        }
                    ];
            }
        });
    });
    return _renderSingleBreakpoint.apply(this, arguments);
}
function renderMultipleBreakpoints() {
    return _renderMultipleBreakpoints.apply(this, arguments);
}
function _renderMultipleBreakpoints() {
    _renderMultipleBreakpoints = _async_to_generator(function() {
        var component, data;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        createAndInitializeBreakpointsView()
                    ];
                case 1:
                    component = _state.sent();
                    data = {
                        breakpointsActive: true,
                        pauseOnUncaughtExceptions: false,
                        pauseOnCaughtExceptions: false,
                        independentPauseToggles: true,
                        groups: [
                            {
                                name: 'test1.js',
                                url: 'https://google.com/test1.js',
                                editable: true,
                                expanded: true,
                                breakpointItems: [
                                    {
                                        id: '1',
                                        type: "REGULAR_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT */ ,
                                        location: '234',
                                        codeSnippet: 'const a = x;',
                                        isHit: false,
                                        status: "ENABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.ENABLED */ 
                                    },
                                    {
                                        id: '2',
                                        type: "REGULAR_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT */ ,
                                        location: '3:3',
                                        codeSnippet: 'if (x > a) {',
                                        isHit: true,
                                        status: "DISABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.DISABLED */ 
                                    }
                                ]
                            },
                            {
                                name: 'test2.js',
                                url: 'https://google.com/test2.js',
                                editable: false,
                                expanded: true,
                                breakpointItems: [
                                    {
                                        id: '3',
                                        type: "REGULAR_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT */ ,
                                        location: '11',
                                        codeSnippet: 'const y;',
                                        isHit: false,
                                        status: "ENABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.ENABLED */ 
                                    }
                                ]
                            },
                            {
                                name: 'main.js',
                                url: 'https://test.com/main.js',
                                editable: true,
                                expanded: false,
                                breakpointItems: [
                                    {
                                        id: '4',
                                        type: "REGULAR_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT */ ,
                                        location: '3',
                                        codeSnippet: 'if (a == 0) {',
                                        isHit: false,
                                        status: "ENABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.ENABLED */ 
                                    }
                                ]
                            }
                        ]
                    };
                    component.data = data;
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    return [
                        2,
                        {
                            component: component,
                            data: data
                        }
                    ];
            }
        });
    });
    return _renderMultipleBreakpoints.apply(this, arguments);
}
function extractBreakpointItems(data) {
    var breakpointItems = data.groups.flatMap(function(group) {
        return group.breakpointItems;
    });
    assert.isAbove(breakpointItems.length, 0);
    return breakpointItems;
}
function checkCodeSnippet(renderedBreakpointItem, breakpointItem) {
    var snippetElement = renderedBreakpointItem.querySelector(CODE_SNIPPET_SELECTOR);
    assert.instanceOf(snippetElement, HTMLSpanElement);
    assert.strictEqual(snippetElement.textContent, breakpointItem.codeSnippet);
}
function checkCheckboxState(checkbox, breakpointItem) {
    var checked = checkbox.checked;
    var indeterminate = checkbox.indeterminate;
    if (breakpointItem.status === "INDETERMINATE" /* SourcesComponents.BreakpointsView.BreakpointStatus.INDETERMINATE */ ) {
        assert.isTrue(indeterminate);
    } else {
        assert.isFalse(indeterminate);
        assert.strictEqual(breakpointItem.status === "ENABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.ENABLED */ , checked);
    }
}
function checkGroupNames(renderedGroupElements, breakpointGroups) {
    assert.lengthOf(renderedGroupElements, breakpointGroups.length);
    for(var i = 0; i < renderedGroupElements.length; ++i){
        var renderedGroup = renderedGroupElements[i];
        assert.instanceOf(renderedGroup, HTMLDetailsElement);
        var titleElement = renderedGroup.querySelector(GROUP_NAME_SELECTOR);
        assert.instanceOf(titleElement, HTMLSpanElement);
        assert.strictEqual(titleElement.textContent, breakpointGroups[i].name);
    }
}
function hover(component, selector) {
    var // Dispatch a mouse over.
    _component_shadowRoot_querySelector;
    assert.isNotNull(component.shadowRoot);
    (_component_shadowRoot_querySelector = component.shadowRoot.querySelector(selector)) === null || _component_shadowRoot_querySelector === void 0 ? void 0 : _component_shadowRoot_querySelector.dispatchEvent(new Event('mouseover'));
    // Wait until the re-rendering has happened.
    return coordinator.done();
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_7__.describeWithMockConnection)('targetSupportsIndependentPauseOnExceptionToggles', function() {
    it('can correctly identify node targets as targets that are not supporting independent pause on exception toggles', /*#__PURE__*/ _async_to_generator(function() {
        var target, supportsIndependentPauses;
        return _ts_generator(this, function(_state) {
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createTarget)();
            target.markAsNodeJSForTest();
            supportsIndependentPauses = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.targetSupportsIndependentPauseOnExceptionToggles();
            assert.isFalse(supportsIndependentPauses);
            return [
                2
            ];
        });
    }));
    it('can correctly identify non-node targets as targets that are supporting independent pause on exception toggles', /*#__PURE__*/ _async_to_generator(function() {
        var supportsIndependentPauses;
        return _ts_generator(this, function(_state) {
            (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createTarget)();
            supportsIndependentPauses = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.targetSupportsIndependentPauseOnExceptionToggles();
            assert.isTrue(supportsIndependentPauses);
            return [
                2
            ];
        });
    }));
});
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.describeWithEnvironment)('BreakpointsSidebarController', function() {
    after(function() {
        _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.removeInstance();
    });
    it('can remove a breakpoint', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, groups, location, breakpoint, breakpointItem;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        setUpTestWithOneBreakpointLocation()
                    ];
                case 1:
                    _ref = _state.sent(), groups = _ref.groups, location = _ref.location;
                    breakpoint = location.breakpoint;
                    breakpointItem = groups[0].breakpointItems[0];
                    _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance().breakpointsRemoved([
                        breakpointItem
                    ]);
                    assert.isTrue(breakpoint.remove.calledOnceWith(false));
                    return [
                        2
                    ];
            }
        });
    }));
    it('changes breakpoint state', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, groups, location, breakpointItem, breakpoint;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        setUpTestWithOneBreakpointLocation()
                    ];
                case 1:
                    _ref = _state.sent(), groups = _ref.groups, location = _ref.location;
                    breakpointItem = groups[0].breakpointItems[0];
                    assert.strictEqual(breakpointItem.status, "ENABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.ENABLED */ );
                    breakpoint = location.breakpoint;
                    _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance().breakpointStateChanged(breakpointItem, false);
                    assert.isTrue(breakpoint.setEnabled.calledWith(false));
                    return [
                        2
                    ];
            }
        });
    }));
    it('correctly reveals source location', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, groups, uiLocation, breakpointItem, revealer;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        setUpTestWithOneBreakpointLocation()
                    ];
                case 1:
                    _ref = _state.sent(), groups = _ref.groups, uiLocation = _ref.location.uiLocation;
                    breakpointItem = groups[0].breakpointItems[0];
                    revealer = sinon.createStubInstance(MockRevealer);
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.registerRevealer({
                        contextTypes: function contextTypes() {
                            return [
                                _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.UISourceCode.UILocation
                            ];
                        },
                        destination: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.RevealerDestination.SOURCES_PANEL,
                        loadRevealer: function loadRevealer() {
                            return _async_to_generator(function() {
                                return _ts_generator(this, function(_state) {
                                    return [
                                        2,
                                        revealer
                                    ];
                                });
                            })();
                        }
                    });
                    return [
                        4,
                        _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance().jumpToSource(breakpointItem)
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(revealer.reveal.calledOnceWith(uiLocation));
                    return [
                        2
                    ];
            }
        });
    }));
    it('correctly reveals breakpoint editor', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, groups, location, breakpointItem, revealer;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        setUpTestWithOneBreakpointLocation()
                    ];
                case 1:
                    _ref = _state.sent(), groups = _ref.groups, location = _ref.location;
                    breakpointItem = groups[0].breakpointItems[0];
                    revealer = sinon.createStubInstance(MockRevealer);
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.registerRevealer({
                        contextTypes: function contextTypes() {
                            return [
                                _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.BreakpointLocation
                            ];
                        },
                        destination: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.RevealerDestination.SOURCES_PANEL,
                        loadRevealer: function loadRevealer() {
                            return _async_to_generator(function() {
                                return _ts_generator(this, function(_state) {
                                    return [
                                        2,
                                        revealer
                                    ];
                                });
                            })();
                        }
                    });
                    return [
                        4,
                        _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance().breakpointEdited(breakpointItem, false)
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(revealer.reveal.calledOnceWith(location));
                    return [
                        2
                    ];
            }
        });
    }));
    describe('getUpdatedBreakpointViewData', function() {
        it('extracts breakpoint data', /*#__PURE__*/ _async_to_generator(function() {
            var testData, _createStubBreakpointManagerAndSettingsWithMockdata, breakpointManager, settings, controller, actual, createExpectedBreakpointGroups, expected;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        testData = [
                            createLocationTestData(HELLO_JS_FILE, 3, 10),
                            createLocationTestData(TEST_JS_FILE, 1, 1)
                        ];
                        _createStubBreakpointManagerAndSettingsWithMockdata = createStubBreakpointManagerAndSettingsWithMockdata(testData), breakpointManager = _createStubBreakpointManagerAndSettingsWithMockdata.breakpointManager, settings = _createStubBreakpointManagerAndSettingsWithMockdata.settings;
                        controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({
                            forceNew: true,
                            breakpointManager: breakpointManager,
                            settings: settings
                        });
                        return [
                            4,
                            controller.getUpdatedBreakpointViewData()
                        ];
                    case 1:
                        actual = _state.sent();
                        createExpectedBreakpointGroups = function(testData) {
                            var status = testData.enabled ? "ENABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.ENABLED */  : "DISABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.DISABLED */ ;
                            var type = "REGULAR_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT */ ;
                            if (testData.condition) {
                                if (testData.isLogpoint) {
                                    type = "LOGPOINT" /* SDK.DebuggerModel.BreakpointType.LOGPOINT */ ;
                                } else {
                                    type = "CONDITIONAL_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.CONDITIONAL_BREAKPOINT */ ;
                                }
                            }
                            return {
                                name: testData.url,
                                url: testData.url,
                                editable: true,
                                expanded: true,
                                breakpointItems: [
                                    {
                                        id: "".concat(testData.url, ":").concat(testData.lineNumber, ":").concat(testData.columnNumber),
                                        location: "".concat(testData.lineNumber + 1),
                                        codeSnippet: '',
                                        isHit: false,
                                        status: status,
                                        type: type,
                                        hoverText: testData.hoverText
                                    }
                                ]
                            };
                        };
                        expected = {
                            breakpointsActive: true,
                            pauseOnUncaughtExceptions: false,
                            pauseOnCaughtExceptions: false,
                            independentPauseToggles: true,
                            groups: testData.map(createExpectedBreakpointGroups)
                        };
                        assert.deepEqual(actual, expected);
                        return [
                            2
                        ];
                }
            });
        }));
        it('respects the breakpointsActive setting', /*#__PURE__*/ _async_to_generator(function() {
            var _createStubBreakpointManagerAndSettingsWithMockdata, breakpointManager, settings, controller, data;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _createStubBreakpointManagerAndSettingsWithMockdata = createStubBreakpointManagerAndSettingsWithMockdata([]), breakpointManager = _createStubBreakpointManagerAndSettingsWithMockdata.breakpointManager, settings = _createStubBreakpointManagerAndSettingsWithMockdata.settings;
                        controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({
                            forceNew: true,
                            breakpointManager: breakpointManager,
                            settings: settings
                        });
                        settings.moduleSetting('breakpoints-active').set(true);
                        return [
                            4,
                            controller.getUpdatedBreakpointViewData()
                        ];
                    case 1:
                        data = _state.sent();
                        assert.strictEqual(data.breakpointsActive, true);
                        settings.moduleSetting('breakpoints-active').set(false);
                        return [
                            4,
                            controller.getUpdatedBreakpointViewData()
                        ];
                    case 2:
                        data = _state.sent();
                        assert.strictEqual(data.breakpointsActive, false);
                        return [
                            2
                        ];
                }
            });
        }));
        it('marks groups as editable based on conditional breakpoint support', /*#__PURE__*/ _async_to_generator(function() {
            var testData, _createStubBreakpointManagerAndSettingsWithMockdata, breakpointManager, settings, controller, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, group, err, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, group1, err;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        testData = [
                            createLocationTestData(HELLO_JS_FILE, 3, 10),
                            createLocationTestData(TEST_JS_FILE, 1, 1)
                        ];
                        _createStubBreakpointManagerAndSettingsWithMockdata = createStubBreakpointManagerAndSettingsWithMockdata(testData), breakpointManager = _createStubBreakpointManagerAndSettingsWithMockdata.breakpointManager, settings = _createStubBreakpointManagerAndSettingsWithMockdata.settings;
                        controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({
                            forceNew: true,
                            breakpointManager: breakpointManager,
                            settings: settings
                        });
                        breakpointManager.supportsConditionalBreakpoints.returns(false);
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            6,
                            7,
                            8
                        ]);
                        return [
                            4,
                            controller.getUpdatedBreakpointViewData()
                        ];
                    case 2:
                        _iterator = _state.sent().groups[Symbol.iterator]();
                        _state.label = 3;
                    case 3:
                        if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                            3,
                            5
                        ];
                        group = _step.value;
                        assert.isFalse(group.editable);
                        _state.label = 4;
                    case 4:
                        _iteratorNormalCompletion = true;
                        return [
                            3,
                            3
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
                        breakpointManager.supportsConditionalBreakpoints.returns(true);
                        _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                        _state.label = 9;
                    case 9:
                        _state.trys.push([
                            9,
                            14,
                            15,
                            16
                        ]);
                        return [
                            4,
                            controller.getUpdatedBreakpointViewData()
                        ];
                    case 10:
                        _iterator1 = _state.sent().groups[Symbol.iterator]();
                        _state.label = 11;
                    case 11:
                        if (!!(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done)) return [
                            3,
                            13
                        ];
                        group1 = _step1.value;
                        assert.isTrue(group1.editable);
                        _state.label = 12;
                    case 12:
                        _iteratorNormalCompletion1 = true;
                        return [
                            3,
                            11
                        ];
                    case 13:
                        return [
                            3,
                            16
                        ];
                    case 14:
                        err = _state.sent();
                        _didIteratorError1 = true;
                        _iteratorError1 = err;
                        return [
                            3,
                            16
                        ];
                    case 15:
                        try {
                            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                _iterator1.return();
                            }
                        } finally{
                            if (_didIteratorError1) {
                                throw _iteratorError1;
                            }
                        }
                        return [
                            7
                        ];
                    case 16:
                        return [
                            2
                        ];
                }
            });
        }));
        it('groups breakpoints that are in the same file', /*#__PURE__*/ _async_to_generator(function() {
            var testData, _createStubBreakpointManagerAndSettingsWithMockdata, breakpointManager, settings, controller, actualViewData;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        testData = [
                            createLocationTestData(HELLO_JS_FILE, 3, 10),
                            createLocationTestData(TEST_JS_FILE, 1, 1)
                        ];
                        _createStubBreakpointManagerAndSettingsWithMockdata = createStubBreakpointManagerAndSettingsWithMockdata(testData), breakpointManager = _createStubBreakpointManagerAndSettingsWithMockdata.breakpointManager, settings = _createStubBreakpointManagerAndSettingsWithMockdata.settings;
                        controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({
                            forceNew: true,
                            breakpointManager: breakpointManager,
                            settings: settings
                        });
                        return [
                            4,
                            controller.getUpdatedBreakpointViewData()
                        ];
                    case 1:
                        actualViewData = _state.sent();
                        assert.lengthOf(actualViewData.groups, 2);
                        assert.lengthOf(actualViewData.groups[0].breakpointItems, 1);
                        assert.lengthOf(actualViewData.groups[1].breakpointItems, 1);
                        return [
                            2
                        ];
                }
            });
        }));
        it('correctly sets the name of the group', /*#__PURE__*/ _async_to_generator(function() {
            var groups;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            setUpTestWithOneBreakpointLocation({
                                file: HELLO_JS_FILE,
                                lineNumber: 0,
                                columnNumber: 0,
                                enabled: false
                            })
                        ];
                    case 1:
                        groups = _state.sent().groups;
                        assert.strictEqual(groups[0].name, HELLO_JS_FILE);
                        return [
                            2
                        ];
                }
            });
        }));
        it('only extracts the line number as location if one breakpoint is on that line', /*#__PURE__*/ _async_to_generator(function() {
            var groups;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            setUpTestWithOneBreakpointLocation({
                                file: HELLO_JS_FILE,
                                lineNumber: 4,
                                columnNumber: 0,
                                enabled: false
                            })
                        ];
                    case 1:
                        groups = _state.sent().groups;
                        assert.strictEqual(groups[0].breakpointItems[0].location, '5');
                        return [
                            2
                        ];
                }
            });
        }));
        it('extracts the line number and column number as location if more than one breakpoint is on that line', /*#__PURE__*/ _async_to_generator(function() {
            var testData, _createStubBreakpointManagerAndSettingsWithMockdata, breakpointManager, settings, controller, actualViewData;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        testData = [
                            createLocationTestData(HELLO_JS_FILE, 3, 10),
                            createLocationTestData(HELLO_JS_FILE, 3, 15)
                        ];
                        _createStubBreakpointManagerAndSettingsWithMockdata = createStubBreakpointManagerAndSettingsWithMockdata(testData), breakpointManager = _createStubBreakpointManagerAndSettingsWithMockdata.breakpointManager, settings = _createStubBreakpointManagerAndSettingsWithMockdata.settings;
                        controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({
                            forceNew: true,
                            breakpointManager: breakpointManager,
                            settings: settings
                        });
                        return [
                            4,
                            controller.getUpdatedBreakpointViewData()
                        ];
                    case 1:
                        actualViewData = _state.sent();
                        assert.lengthOf(actualViewData.groups, 1);
                        assert.lengthOf(actualViewData.groups[0].breakpointItems, 2);
                        assert.strictEqual(actualViewData.groups[0].breakpointItems[0].location, '4:11');
                        assert.strictEqual(actualViewData.groups[0].breakpointItems[1].location, '4:16');
                        return [
                            2
                        ];
                }
            });
        }));
        it('orders breakpoints within a file by location', /*#__PURE__*/ _async_to_generator(function() {
            var testData, _createStubBreakpointManagerAndSettingsWithMockdata, breakpointManager, settings, controller, actualViewData;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        testData = [
                            createLocationTestData(HELLO_JS_FILE, 3, 15),
                            createLocationTestData(HELLO_JS_FILE, 3, 10)
                        ];
                        _createStubBreakpointManagerAndSettingsWithMockdata = createStubBreakpointManagerAndSettingsWithMockdata(testData), breakpointManager = _createStubBreakpointManagerAndSettingsWithMockdata.breakpointManager, settings = _createStubBreakpointManagerAndSettingsWithMockdata.settings;
                        controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({
                            forceNew: true,
                            breakpointManager: breakpointManager,
                            settings: settings
                        });
                        return [
                            4,
                            controller.getUpdatedBreakpointViewData()
                        ];
                    case 1:
                        actualViewData = _state.sent();
                        assert.lengthOf(actualViewData.groups, 1);
                        assert.lengthOf(actualViewData.groups[0].breakpointItems, 2);
                        assert.strictEqual(actualViewData.groups[0].breakpointItems[0].location, '4:11');
                        assert.strictEqual(actualViewData.groups[0].breakpointItems[1].location, '4:16');
                        return [
                            2
                        ];
                }
            });
        }));
        it('orders breakpoints within groups by location', /*#__PURE__*/ _async_to_generator(function() {
            var testData, _createStubBreakpointManagerAndSettingsWithMockdata, breakpointManager, settings, controller, actualViewData, names;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        testData = [
                            createLocationTestData(TEST_JS_FILE, 3, 15),
                            createLocationTestData(HELLO_JS_FILE, 3, 10)
                        ];
                        _createStubBreakpointManagerAndSettingsWithMockdata = createStubBreakpointManagerAndSettingsWithMockdata(testData), breakpointManager = _createStubBreakpointManagerAndSettingsWithMockdata.breakpointManager, settings = _createStubBreakpointManagerAndSettingsWithMockdata.settings;
                        controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({
                            forceNew: true,
                            breakpointManager: breakpointManager,
                            settings: settings
                        });
                        return [
                            4,
                            controller.getUpdatedBreakpointViewData()
                        ];
                    case 1:
                        actualViewData = _state.sent();
                        assert.lengthOf(actualViewData.groups, 2);
                        names = actualViewData.groups.map(function(group) {
                            return group.name;
                        });
                        assert.deepEqual(names, [
                            HELLO_JS_FILE,
                            TEST_JS_FILE
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('merges breakpoints mapping to the same location into one', /*#__PURE__*/ _async_to_generator(function() {
            var testData, _createStubBreakpointManagerAndSettingsWithMockdata, breakpointManager, settings, controller, actualViewData;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        testData = [
                            createLocationTestData(TEST_JS_FILE, 3, 15),
                            createLocationTestData(TEST_JS_FILE, 3, 15)
                        ];
                        _createStubBreakpointManagerAndSettingsWithMockdata = createStubBreakpointManagerAndSettingsWithMockdata(testData), breakpointManager = _createStubBreakpointManagerAndSettingsWithMockdata.breakpointManager, settings = _createStubBreakpointManagerAndSettingsWithMockdata.settings;
                        controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({
                            forceNew: true,
                            breakpointManager: breakpointManager,
                            settings: settings
                        });
                        return [
                            4,
                            controller.getUpdatedBreakpointViewData()
                        ];
                    case 1:
                        actualViewData = _state.sent();
                        assert.lengthOf(actualViewData.groups, 1);
                        assert.lengthOf(actualViewData.groups[0].breakpointItems, 1);
                        return [
                            2
                        ];
                }
            });
        }));
        it('correctly extracts the enabled state', /*#__PURE__*/ _async_to_generator(function() {
            var groups, breakpointItem;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            setUpTestWithOneBreakpointLocation({
                                file: '',
                                lineNumber: 0,
                                columnNumber: 0,
                                enabled: true
                            })
                        ];
                    case 1:
                        groups = _state.sent().groups;
                        breakpointItem = groups[0].breakpointItems[0];
                        assert.strictEqual(breakpointItem.status, "ENABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.ENABLED */ );
                        return [
                            2
                        ];
                }
            });
        }));
        it('correctly extracts the enabled state', /*#__PURE__*/ _async_to_generator(function() {
            var groups, breakpointItem;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            setUpTestWithOneBreakpointLocation({
                                file: '',
                                lineNumber: 0,
                                columnNumber: 0,
                                enabled: false
                            })
                        ];
                    case 1:
                        groups = _state.sent().groups;
                        breakpointItem = groups[0].breakpointItems[0];
                        assert.strictEqual(breakpointItem.status, "DISABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.DISABLED */ );
                        return [
                            2
                        ];
                }
            });
        }));
        it('correctly extracts the enabled state', /*#__PURE__*/ _async_to_generator(function() {
            var testData, _createStubBreakpointManagerAndSettingsWithMockdata, breakpointManager, settings, controller, actualViewData;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        testData = [
                            createLocationTestData(TEST_JS_FILE, 3, 15, true),
                            createLocationTestData(TEST_JS_FILE, 3, 15, false)
                        ];
                        _createStubBreakpointManagerAndSettingsWithMockdata = createStubBreakpointManagerAndSettingsWithMockdata(testData), breakpointManager = _createStubBreakpointManagerAndSettingsWithMockdata.breakpointManager, settings = _createStubBreakpointManagerAndSettingsWithMockdata.settings;
                        controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({
                            forceNew: true,
                            breakpointManager: breakpointManager,
                            settings: settings
                        });
                        return [
                            4,
                            controller.getUpdatedBreakpointViewData()
                        ];
                    case 1:
                        actualViewData = _state.sent();
                        assert.lengthOf(actualViewData.groups, 1);
                        assert.lengthOf(actualViewData.groups[0].breakpointItems, 1);
                        assert.strictEqual(actualViewData.groups[0].breakpointItems[0].status, "INDETERMINATE" /* SourcesComponents.BreakpointsView.BreakpointStatus.INDETERMINATE */ );
                        return [
                            2
                        ];
                }
            });
        }));
        it('correctly extracts the disabled state', /*#__PURE__*/ _async_to_generator(function() {
            var snippet, groups;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        snippet = 'const a = x;';
                        return [
                            4,
                            setUpTestWithOneBreakpointLocation({
                                file: '',
                                lineNumber: 0,
                                columnNumber: 0,
                                enabled: false,
                                snippet: snippet
                            })
                        ];
                    case 1:
                        groups = _state.sent().groups;
                        assert.strictEqual(groups[0].breakpointItems[0].codeSnippet, snippet);
                        return [
                            2
                        ];
                }
            });
        }));
        it('correctly extracts the indeterminate state', /*#__PURE__*/ _async_to_generator(function() {
            var testData, _createStubBreakpointManagerAndSettingsWithMockdata, breakpointManager, settings, controller, actualViewData;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        testData = [
                            createLocationTestData(TEST_JS_FILE, 3, 15, true),
                            createLocationTestData(TEST_JS_FILE, 3, 15, false)
                        ];
                        _createStubBreakpointManagerAndSettingsWithMockdata = createStubBreakpointManagerAndSettingsWithMockdata(testData), breakpointManager = _createStubBreakpointManagerAndSettingsWithMockdata.breakpointManager, settings = _createStubBreakpointManagerAndSettingsWithMockdata.settings;
                        controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({
                            forceNew: true,
                            breakpointManager: breakpointManager,
                            settings: settings
                        });
                        return [
                            4,
                            controller.getUpdatedBreakpointViewData()
                        ];
                    case 1:
                        actualViewData = _state.sent();
                        assert.lengthOf(actualViewData.groups, 1);
                        assert.lengthOf(actualViewData.groups[0].breakpointItems, 1);
                        assert.strictEqual(actualViewData.groups[0].breakpointItems[0].status, "INDETERMINATE" /* SourcesComponents.BreakpointsView.BreakpointStatus.INDETERMINATE */ );
                        return [
                            2
                        ];
                }
            });
        }));
        it('correctly extracts conditional breakpoints', /*#__PURE__*/ _async_to_generator(function() {
            var condition, testData, _createStubBreakpointManagerAndSettingsWithMockdata, breakpointManager, settings, controller, actualViewData, breakpointItem;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        condition = 'x < a';
                        testData = [
                            createLocationTestData(TEST_JS_FILE, 3, 15, true, '', condition, false, condition)
                        ];
                        _createStubBreakpointManagerAndSettingsWithMockdata = createStubBreakpointManagerAndSettingsWithMockdata(testData), breakpointManager = _createStubBreakpointManagerAndSettingsWithMockdata.breakpointManager, settings = _createStubBreakpointManagerAndSettingsWithMockdata.settings;
                        controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({
                            forceNew: true,
                            breakpointManager: breakpointManager,
                            settings: settings
                        });
                        return [
                            4,
                            controller.getUpdatedBreakpointViewData()
                        ];
                    case 1:
                        actualViewData = _state.sent();
                        assert.lengthOf(actualViewData.groups, 1);
                        assert.lengthOf(actualViewData.groups[0].breakpointItems, 1);
                        breakpointItem = actualViewData.groups[0].breakpointItems[0];
                        assert.strictEqual(breakpointItem.type, "CONDITIONAL_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.CONDITIONAL_BREAKPOINT */ );
                        assert.strictEqual(breakpointItem.hoverText, condition);
                        return [
                            2
                        ];
                }
            });
        }));
        it('correctly extracts logpoints', /*#__PURE__*/ _async_to_generator(function() {
            var logExpression, testData, _createStubBreakpointManagerAndSettingsWithMockdata, breakpointManager, settings, controller, actualViewData, breakpointItem;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        logExpression = 'x';
                        testData = [
                            createLocationTestData(TEST_JS_FILE, 3, 15, true, '', logExpression, true, logExpression)
                        ];
                        _createStubBreakpointManagerAndSettingsWithMockdata = createStubBreakpointManagerAndSettingsWithMockdata(testData), breakpointManager = _createStubBreakpointManagerAndSettingsWithMockdata.breakpointManager, settings = _createStubBreakpointManagerAndSettingsWithMockdata.settings;
                        controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({
                            forceNew: true,
                            breakpointManager: breakpointManager,
                            settings: settings
                        });
                        return [
                            4,
                            controller.getUpdatedBreakpointViewData()
                        ];
                    case 1:
                        actualViewData = _state.sent();
                        assert.lengthOf(actualViewData.groups, 1);
                        assert.lengthOf(actualViewData.groups[0].breakpointItems, 1);
                        breakpointItem = actualViewData.groups[0].breakpointItems[0];
                        assert.strictEqual(breakpointItem.type, "LOGPOINT" /* SDK.DebuggerModel.BreakpointType.LOGPOINT */ );
                        assert.strictEqual(breakpointItem.hoverText, logExpression);
                        return [
                            2
                        ];
                }
            });
        }));
        describe('breakpoint groups', function() {
            it('are expanded by default', /*#__PURE__*/ _async_to_generator(function() {
                var controller, actualViewData;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                setUpTestWithOneBreakpointLocation()
                            ];
                        case 1:
                            controller = _state.sent().controller;
                            return [
                                4,
                                controller.getUpdatedBreakpointViewData()
                            ];
                        case 2:
                            actualViewData = _state.sent();
                            assert.isTrue(actualViewData.groups[0].expanded);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('are collapsed if user collapses it', /*#__PURE__*/ _async_to_generator(function() {
                var _ref, controller, groups, actualViewData;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                setUpTestWithOneBreakpointLocation()
                            ];
                        case 1:
                            _ref = _state.sent(), controller = _ref.controller, groups = _ref.groups;
                            controller.expandedStateChanged(groups[0].url, false);
                            return [
                                4,
                                controller.getUpdatedBreakpointViewData()
                            ];
                        case 2:
                            actualViewData = _state.sent();
                            assert.isFalse(actualViewData.groups[0].expanded);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('are expanded if user expands it', /*#__PURE__*/ _async_to_generator(function() {
                var _ref, controller, groups, actualViewData;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                setUpTestWithOneBreakpointLocation()
                            ];
                        case 1:
                            _ref = _state.sent(), controller = _ref.controller, groups = _ref.groups;
                            controller.expandedStateChanged(groups[0].url, true);
                            return [
                                4,
                                controller.getUpdatedBreakpointViewData()
                            ];
                        case 2:
                            actualViewData = _state.sent();
                            assert.isTrue(actualViewData.groups[0].expanded);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('remember the collapsed state', /*#__PURE__*/ _async_to_generator(function() {
                var _ref, controller, groups, actualViewData, breakpointManager, settings, controller1, actualViewData1;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                setUpTestWithOneBreakpointLocation()
                            ];
                        case 1:
                            _ref = _state.sent(), controller = _ref.controller, groups = _ref.groups;
                            controller.expandedStateChanged(groups[0].url, false);
                            return [
                                4,
                                controller.getUpdatedBreakpointViewData()
                            ];
                        case 2:
                            actualViewData = _state.sent();
                            assert.isFalse(actualViewData.groups[0].expanded);
                            breakpointManager = _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.BreakpointManager.instance();
                            settings = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance();
                            controller1 = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({
                                forceNew: true,
                                breakpointManager: breakpointManager,
                                settings: settings
                            });
                            return [
                                4,
                                controller1.getUpdatedBreakpointViewData()
                            ];
                        case 3:
                            actualViewData1 = _state.sent();
                            assert.isFalse(actualViewData1.groups[0].expanded);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('remember the expanded state', /*#__PURE__*/ _async_to_generator(function() {
                var _ref, controller, groups, actualViewData, controller1, actualViewData1;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                setUpTestWithOneBreakpointLocation()
                            ];
                        case 1:
                            _ref = _state.sent(), controller = _ref.controller, groups = _ref.groups;
                            controller.expandedStateChanged(groups[0].url, true);
                            return [
                                4,
                                controller.getUpdatedBreakpointViewData()
                            ];
                        case 2:
                            actualViewData = _state.sent();
                            assert.isTrue(actualViewData.groups[0].expanded);
                            controller1 = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({
                                forceNew: true,
                                breakpointManager: _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.BreakpointManager.instance(),
                                settings: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance()
                            });
                            return [
                                4,
                                controller1.getUpdatedBreakpointViewData()
                            ];
                        case 3:
                            actualViewData1 = _state.sent();
                            assert.isTrue(actualViewData1.groups[0].expanded);
                            return [
                                2
                            ];
                    }
                });
            }));
        });
    });
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_7__.describeWithMockConnection)('BreakpointsSidebarController', function() {
    beforeEach(function() {
        var workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance();
        var targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance();
        var resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.ResourceMapping.ResourceMapping(targetManager, workspace);
        var debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
            forceNew: true,
            resourceMapping: resourceMapping,
            targetManager: targetManager
        });
        _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.BreakpointManager.instance({
            forceNew: true,
            targetManager: targetManager,
            workspace: workspace,
            debuggerWorkspaceBinding: debuggerWorkspaceBinding
        });
    });
    var DEFAULT_BREAKPOINT = [
        _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.EMPTY_BREAKPOINT_CONDITION,
        true,
        false,
        "USER_ACTION" /* Breakpoints.BreakpointManager.BreakpointOrigin.USER_ACTION */ 
    ];
    // Flaky
    it.skip('[crbug.com/345456307] auto-expands if a user adds a new  breakpoint', /*#__PURE__*/ _async_to_generator(function() {
        var _breakpointManager, _breakpointManager1, breakpointManager, settings, _createContentProviderUISourceCode, uiSourceCode, project, controller, b1, data, b2, data1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    breakpointManager = _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.BreakpointManager.instance();
                    settings = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance();
                    _createContentProviderUISourceCode = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_8__.createContentProviderUISourceCode)({
                        url: 'test.js',
                        mimeType: 'text/javascript'
                    }), uiSourceCode = _createContentProviderUISourceCode.uiSourceCode, project = _createContentProviderUISourceCode.project;
                    controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({
                        forceNew: true,
                        breakpointManager: breakpointManager,
                        settings: settings
                    });
                    return [
                        4,
                        (_breakpointManager = breakpointManager).setBreakpoint.apply(_breakpointManager, [
                            uiSourceCode,
                            0,
                            0
                        ].concat(_to_consumable_array(DEFAULT_BREAKPOINT)))
                    ];
                case 1:
                    b1 = _state.sent();
                    assert.exists(b1);
                    controller.expandedStateChanged(uiSourceCode.url(), false);
                    return [
                        4,
                        controller.getUpdatedBreakpointViewData()
                    ];
                case 2:
                    data = _state.sent();
                    assert.lengthOf(data.groups, 1);
                    assert.lengthOf(data.groups[0].breakpointItems, 1);
                    assert.isFalse(data.groups[0].expanded);
                    return [
                        4,
                        (_breakpointManager1 = breakpointManager).setBreakpoint.apply(_breakpointManager1, [
                            uiSourceCode,
                            0,
                            3
                        ].concat(_to_consumable_array(DEFAULT_BREAKPOINT)))
                    ];
                case 3:
                    b2 = _state.sent();
                    assert.exists(b2);
                    return [
                        4,
                        controller.getUpdatedBreakpointViewData()
                    ];
                case 4:
                    data1 = _state.sent();
                    assert.lengthOf(data1.groups, 1);
                    assert.lengthOf(data1.groups[0].breakpointItems, 2);
                    assert.isTrue(data1.groups[0].expanded);
                    // Clean up.
                    return [
                        4,
                        b1.remove(false)
                    ];
                case 5:
                    _state.sent();
                    return [
                        4,
                        b2.remove(false)
                    ];
                case 6:
                    _state.sent();
                    _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance().removeProject(project);
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not auto-expand if a breakpoint was not triggered by user action', /*#__PURE__*/ _async_to_generator(function() {
        var _breakpointManager, breakpointManager, settings, _createContentProviderUISourceCode, uiSourceCode, project, controller, b1, data, b2, data1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    breakpointManager = _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.BreakpointManager.instance();
                    settings = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance();
                    _createContentProviderUISourceCode = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_8__.createContentProviderUISourceCode)({
                        url: 'test.js',
                        mimeType: 'text/javascript'
                    }), uiSourceCode = _createContentProviderUISourceCode.uiSourceCode, project = _createContentProviderUISourceCode.project;
                    controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({
                        forceNew: true,
                        breakpointManager: breakpointManager,
                        settings: settings
                    });
                    return [
                        4,
                        (_breakpointManager = breakpointManager).setBreakpoint.apply(_breakpointManager, [
                            uiSourceCode,
                            0,
                            0
                        ].concat(_to_consumable_array(DEFAULT_BREAKPOINT)))
                    ];
                case 1:
                    b1 = _state.sent();
                    assert.exists(b1);
                    controller.expandedStateChanged(uiSourceCode.url(), false);
                    return [
                        4,
                        controller.getUpdatedBreakpointViewData()
                    ];
                case 2:
                    data = _state.sent();
                    assert.lengthOf(data.groups, 1);
                    assert.lengthOf(data.groups[0].breakpointItems, 1);
                    assert.isFalse(data.groups[0].expanded);
                    return [
                        4,
                        breakpointManager.setBreakpoint(uiSourceCode, 0, 3, _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.EMPTY_BREAKPOINT_CONDITION, true, false, "RESTORED" /* Breakpoints.BreakpointManager.BreakpointOrigin.OTHER */ )
                    ];
                case 3:
                    b2 = _state.sent();
                    assert.exists(b2);
                    return [
                        4,
                        controller.getUpdatedBreakpointViewData()
                    ];
                case 4:
                    data1 = _state.sent();
                    assert.lengthOf(data1.groups, 1);
                    assert.lengthOf(data1.groups[0].breakpointItems, 2);
                    assert.isFalse(data1.groups[0].expanded);
                    // Clean up.
                    return [
                        4,
                        b1.remove(false)
                    ];
                case 5:
                    _state.sent();
                    return [
                        4,
                        b2.remove(false)
                    ];
                case 6:
                    _state.sent();
                    _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance().removeProject(project);
                    return [
                        2
                    ];
            }
        });
    }));
    it('auto-expands if a breakpoint was hit', /*#__PURE__*/ _async_to_generator(function() {
        var _breakpointManager, breakpointManager, scriptId, _createContentProviderUISourceCode, uiSourceCode, project, uiLocation, debuggerModel, sdkLocation, mapping, b1, controller, data, callFrame, pausedDetails, data1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sinon.stub(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.RevealerRegistry.instance(), 'reveal'); // Prevent pending reveal promises after tests are done.
                    breakpointManager = _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.BreakpointManager.instance();
                    // Set up sdk and ui location, and a mapping between them, such that we can identify that
                    // the hit breakpoint is the one we are adding.
                    scriptId = '0';
                    _createContentProviderUISourceCode = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_8__.createContentProviderUISourceCode)({
                        url: 'test.js',
                        mimeType: 'text/javascript'
                    }), uiSourceCode = _createContentProviderUISourceCode.uiSourceCode, project = _createContentProviderUISourceCode.project;
                    uiLocation = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.UISourceCode.UILocation(uiSourceCode, 0, 0);
                    debuggerModel = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
                    sdkLocation = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.Location(debuggerModel, scriptId, 0);
                    mapping = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_8__.createFakeScriptMapping)(debuggerModel, uiSourceCode, 0, scriptId);
                    _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().addSourceMapping(mapping);
                    return [
                        4,
                        (_breakpointManager = breakpointManager).setBreakpoint.apply(_breakpointManager, [
                            uiSourceCode,
                            uiLocation.lineNumber,
                            uiLocation.columnNumber
                        ].concat(_to_consumable_array(DEFAULT_BREAKPOINT)))
                    ];
                case 1:
                    b1 = _state.sent();
                    controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({
                        forceNew: true,
                        breakpointManager: breakpointManager,
                        settings: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance()
                    });
                    assert.exists(b1);
                    controller.expandedStateChanged(uiSourceCode.url(), false);
                    return [
                        4,
                        controller.getUpdatedBreakpointViewData()
                    ];
                case 2:
                    data = _state.sent();
                    assert.isFalse(data.groups[0].expanded);
                    // Simulating a breakpoint hit. Update the DebuggerPausedDetails to contain the info on the hit breakpoint.
                    callFrame = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.CallFrame);
                    callFrame.location.returns(new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.Location(debuggerModel, scriptId, sdkLocation.lineNumber));
                    pausedDetails = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerPausedDetails);
                    pausedDetails.callFrames = [
                        callFrame
                    ];
                    // Instead of setting the flavor, directly call `flavorChanged` on the controller and mock what it's set to.
                    // Setting the flavor would have other listeners listening to it, and would cause undesirable side effects.
                    sinon.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Context.Context.instance(), 'flavor').callsFake(function(flavorType) {
                        return flavorType === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerPausedDetails ? pausedDetails : null;
                    });
                    controller.flavorChanged(pausedDetails);
                    return [
                        4,
                        controller.getUpdatedBreakpointViewData()
                    ];
                case 3:
                    data1 = _state.sent();
                    // Assert that the breakpoint is hit and the group is expanded.
                    assert.isTrue(data1.groups[0].breakpointItems[0].isHit);
                    assert.isTrue(data1.groups[0].expanded);
                    // Clean up.
                    return [
                        4,
                        b1.remove(false)
                    ];
                case 4:
                    _state.sent();
                    _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance().removeProject(project);
                    _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().removeSourceMapping(mapping);
                    return [
                        2
                    ];
            }
        });
    }));
    it('changes pause on exception state', /*#__PURE__*/ _async_to_generator(function() {
        var _createStubBreakpointManagerAndSettings, breakpointManager, settings, controller, _i, _iter, pauseOnUncaughtExceptions, _i1, _iter1, pauseOnCaughtExceptions, data;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _createStubBreakpointManagerAndSettings = createStubBreakpointManagerAndSettings(), breakpointManager = _createStubBreakpointManagerAndSettings.breakpointManager, settings = _createStubBreakpointManagerAndSettings.settings;
                    breakpointManager.allBreakpointLocations.returns([]);
                    controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({
                        forceNew: true,
                        breakpointManager: breakpointManager,
                        settings: settings
                    });
                    _i = 0, _iter = [
                        true,
                        false
                    ];
                    _state.label = 1;
                case 1:
                    if (!(_i < _iter.length)) return [
                        3,
                        6
                    ];
                    pauseOnUncaughtExceptions = _iter[_i];
                    _i1 = 0, _iter1 = [
                        true,
                        false
                    ];
                    _state.label = 2;
                case 2:
                    if (!(_i1 < _iter1.length)) return [
                        3,
                        5
                    ];
                    pauseOnCaughtExceptions = _iter1[_i1];
                    controller.setPauseOnUncaughtExceptions(pauseOnUncaughtExceptions);
                    controller.setPauseOnCaughtExceptions(pauseOnCaughtExceptions);
                    return [
                        4,
                        controller.getUpdatedBreakpointViewData()
                    ];
                case 3:
                    data = _state.sent();
                    assert.strictEqual(data.pauseOnUncaughtExceptions, pauseOnUncaughtExceptions);
                    assert.strictEqual(data.pauseOnCaughtExceptions, pauseOnCaughtExceptions);
                    assert.strictEqual(settings.moduleSetting('pause-on-uncaught-exception').get(), pauseOnUncaughtExceptions);
                    assert.strictEqual(settings.moduleSetting('pause-on-caught-exception').get(), pauseOnCaughtExceptions);
                    _state.label = 4;
                case 4:
                    _i1++;
                    return [
                        3,
                        2
                    ];
                case 5:
                    _i++;
                    return [
                        3,
                        1
                    ];
                case 6:
                    return [
                        2
                    ];
            }
        });
    }));
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_7__.describeWithMockConnection)('BreakpointsView', function() {
    beforeEach(function() {
        var workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance();
        var targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance();
        var resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.ResourceMapping.ResourceMapping(targetManager, workspace);
        var debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
            forceNew: true,
            resourceMapping: resourceMapping,
            targetManager: targetManager
        });
        _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.BreakpointManager.instance({
            forceNew: true,
            targetManager: targetManager,
            workspace: workspace,
            debuggerWorkspaceBinding: debuggerWorkspaceBinding
        });
    });
    it('correctly expands breakpoint groups', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, data, expandedGroups, renderedExpandedGroups;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderMultipleBreakpoints()
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, data = _ref.data;
                    assert.isNotNull(component.shadowRoot);
                    expandedGroups = data.groups.filter(function(group) {
                        return group.expanded;
                    });
                    assert.isAbove(expandedGroups.length, 0);
                    renderedExpandedGroups = Array.from(component.shadowRoot.querySelectorAll(EXPANDED_GROUPS_SELECTOR));
                    assert.lengthOf(renderedExpandedGroups, expandedGroups.length);
                    checkGroupNames(renderedExpandedGroups, expandedGroups);
                    return [
                        2
                    ];
            }
        });
    }));
    it('correctly collapses breakpoint groups', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, data, collapsedGroups, renderedCollapsedGroups;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderMultipleBreakpoints()
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, data = _ref.data;
                    assert.isNotNull(component.shadowRoot);
                    collapsedGroups = data.groups.filter(function(group) {
                        return !group.expanded;
                    });
                    assert.isAbove(collapsedGroups.length, 0);
                    renderedCollapsedGroups = Array.from(component.shadowRoot.querySelectorAll(COLLAPSED_GROUPS_SELECTOR));
                    checkGroupNames(renderedCollapsedGroups, collapsedGroups);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders the group names', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, data, renderedGroupNames, expectedNames, actualNames, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, renderedGroupName;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderMultipleBreakpoints()
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, data = _ref.data;
                    assert.isNotNull(component.shadowRoot);
                    renderedGroupNames = component.shadowRoot.querySelectorAll(GROUP_NAME_SELECTOR);
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.assertElements)(renderedGroupNames, HTMLSpanElement);
                    expectedNames = data.groups.flatMap(function(group) {
                        return group.name;
                    });
                    actualNames = [];
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = renderedGroupNames.values()[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            renderedGroupName = _step.value;
                            actualNames.push(renderedGroupName.textContent);
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
                    assert.deepEqual(actualNames, expectedNames);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders the breakpoints with their checkboxes', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, data, renderedBreakpointItems, breakpointItems, i, renderedItem, inputElement;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderMultipleBreakpoints()
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, data = _ref.data;
                    assert.isNotNull(component.shadowRoot);
                    renderedBreakpointItems = Array.from(component.shadowRoot.querySelectorAll(BREAKPOINT_ITEM_SELECTOR));
                    breakpointItems = extractBreakpointItems(data);
                    assert.lengthOf(renderedBreakpointItems, breakpointItems.length);
                    for(i = 0; i < renderedBreakpointItems.length; ++i){
                        renderedItem = renderedBreakpointItems[i];
                        assert.instanceOf(renderedItem, HTMLDivElement);
                        inputElement = renderedItem.querySelector('input');
                        assert.instanceOf(inputElement, HTMLInputElement);
                        checkCheckboxState(inputElement, breakpointItems[i]);
                    }
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders breakpoints with their code snippet', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, data, renderedBreakpointItems, breakpointItems, i, renderedBreakpointItem;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderMultipleBreakpoints()
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, data = _ref.data;
                    assert.isNotNull(component.shadowRoot);
                    renderedBreakpointItems = Array.from(component.shadowRoot.querySelectorAll(BREAKPOINT_ITEM_SELECTOR));
                    breakpointItems = extractBreakpointItems(data);
                    assert.lengthOf(renderedBreakpointItems, breakpointItems.length);
                    for(i = 0; i < renderedBreakpointItems.length; ++i){
                        renderedBreakpointItem = renderedBreakpointItems[i];
                        assert.instanceOf(renderedBreakpointItem, HTMLDivElement);
                        checkCodeSnippet(renderedBreakpointItem, breakpointItems[i]);
                    }
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders breakpoint groups with a differentiator if the file names are not unique', /*#__PURE__*/ _async_to_generator(function() {
        var component, groupTemplate, group1, group2, data, groupSummaries, differentiatingPath;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        createAndInitializeBreakpointsView()
                    ];
                case 1:
                    component = _state.sent();
                    groupTemplate = {
                        name: 'index.js',
                        url: '',
                        editable: true,
                        expanded: true,
                        breakpointItems: [
                            {
                                id: '1',
                                type: "REGULAR_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT */ ,
                                location: '234',
                                codeSnippet: 'const a = x;',
                                isHit: false,
                                status: "ENABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.ENABLED */ 
                            }
                        ]
                    };
                    // Create two groups with the same file name, but different url.
                    group1 = _object_spread({}, groupTemplate);
                    group1.url = 'https://google.com/lib/index.js';
                    group2 = _object_spread({}, groupTemplate);
                    group2.url = 'https://google.com/src/index.js';
                    data = {
                        breakpointsActive: true,
                        pauseOnUncaughtExceptions: false,
                        pauseOnCaughtExceptions: false,
                        independentPauseToggles: true,
                        groups: [
                            group1,
                            group2
                        ]
                    };
                    component.data = data;
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    groupSummaries = Array.from(component.shadowRoot.querySelectorAll(SUMMARY_SELECTOR));
                    differentiatingPath = groupSummaries.map(function(group) {
                        var differentiatorElement = group.querySelector(GROUP_DIFFERENTIATOR_SELECTOR);
                        assert.instanceOf(differentiatorElement, HTMLSpanElement);
                        return differentiatorElement.textContent;
                    });
                    assert.deepEqual(differentiatingPath, [
                        'lib/',
                        'src/'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders breakpoints with a differentiating path', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, data, renderedBreakpointItems, breakpointItems, i, renderedBreakpointItem, locationElement, actualLocation, expectedLocation;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderMultipleBreakpoints()
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, data = _ref.data;
                    assert.isNotNull(component.shadowRoot);
                    renderedBreakpointItems = Array.from(component.shadowRoot.querySelectorAll(BREAKPOINT_ITEM_SELECTOR));
                    breakpointItems = extractBreakpointItems(data);
                    assert.lengthOf(renderedBreakpointItems, breakpointItems.length);
                    for(i = 0; i < renderedBreakpointItems.length; ++i){
                        renderedBreakpointItem = renderedBreakpointItems[i];
                        assert.instanceOf(renderedBreakpointItem, HTMLDivElement);
                        locationElement = renderedBreakpointItem.querySelector(BREAKPOINT_LOCATION_SELECTOR);
                        assert.instanceOf(locationElement, HTMLSpanElement);
                        actualLocation = locationElement.textContent;
                        expectedLocation = breakpointItems[i].location;
                        assert.strictEqual(actualLocation, expectedLocation);
                    }
                    return [
                        2
                    ];
            }
        });
    }));
    it('triggers an event on clicking the checkbox of a breakpoint', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, data, renderedItem, checkbox, checked, controller, breakpointStateChanged;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderSingleBreakpoint()
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, data = _ref.data;
                    assert.isNotNull(component.shadowRoot);
                    renderedItem = component.shadowRoot.querySelector(BREAKPOINT_ITEM_SELECTOR);
                    assert.instanceOf(renderedItem, HTMLDivElement);
                    checkbox = renderedItem.querySelector('input');
                    assert.instanceOf(checkbox, HTMLInputElement);
                    checked = checkbox.checked;
                    controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance();
                    breakpointStateChanged = sinon.stub(controller, 'breakpointStateChanged');
                    checkbox.click();
                    assert.isTrue(breakpointStateChanged.calledOnceWith(data.groups[0].breakpointItems[0], !checked));
                    return [
                        2
                    ];
            }
        });
    }));
    it('triggers an event on clicking on the snippet text', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, data, snippet, controller, jumpToSource;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderSingleBreakpoint()
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, data = _ref.data;
                    assert.isNotNull(component.shadowRoot);
                    snippet = component.shadowRoot.querySelector(CODE_SNIPPET_SELECTOR);
                    assert.instanceOf(snippet, HTMLSpanElement);
                    controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance();
                    jumpToSource = sinon.stub(controller, 'jumpToSource');
                    snippet.click();
                    assert.isTrue(jumpToSource.calledOnceWith(data.groups[0].breakpointItems[0]));
                    return [
                        2
                    ];
            }
        });
    }));
    it('triggers an event on expanding/unexpanding', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, data, renderedGroupName, expandedInitialValue, controller, expandedStateChanged, group;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderSingleBreakpoint()
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, data = _ref.data;
                    assert.isNotNull(component.shadowRoot);
                    renderedGroupName = component.shadowRoot.querySelector(GROUP_NAME_SELECTOR);
                    assert.instanceOf(renderedGroupName, HTMLSpanElement);
                    expandedInitialValue = data.groups[0].expanded;
                    controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance();
                    expandedStateChanged = sinon.stub(controller, 'expandedStateChanged');
                    renderedGroupName.click();
                    return [
                        4,
                        new Promise(function(resolve) {
                            return setTimeout(resolve, 0);
                        })
                    ];
                case 2:
                    _state.sent();
                    group = data.groups[0];
                    assert.isTrue(expandedStateChanged.calledOnceWith(group.url, group.expanded));
                    assert.notStrictEqual(group.expanded, expandedInitialValue);
                    return [
                        2
                    ];
            }
        });
    }));
    it('highlights breakpoint if it is set to be hit', /*#__PURE__*/ _async_to_generator(function() {
        var component, renderedBreakpointItem;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderSingleBreakpoint()
                    ];
                case 1:
                    component = _state.sent().component;
                    assert.isNotNull(component.shadowRoot);
                    renderedBreakpointItem = component.shadowRoot.querySelector(HIT_BREAKPOINT_SELECTOR);
                    assert.instanceOf(renderedBreakpointItem, HTMLDivElement);
                    return [
                        2
                    ];
            }
        });
    }));
    it('triggers an event on removing file breakpoints', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, data, removeFileBreakpointsButton, controller, breakpointsRemoved;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderMultipleBreakpoints()
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, data = _ref.data;
                    assert.isNotNull(component.shadowRoot);
                    return [
                        4,
                        hover(component, SUMMARY_SELECTOR)
                    ];
                case 2:
                    _state.sent();
                    removeFileBreakpointsButton = component.shadowRoot.querySelector(REMOVE_FILE_BREAKPOINTS_SELECTOR);
                    assert.instanceOf(removeFileBreakpointsButton, HTMLButtonElement);
                    controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance();
                    breakpointsRemoved = sinon.stub(controller, 'breakpointsRemoved');
                    removeFileBreakpointsButton.click();
                    // await new Promise(resolve => setTimeout(resolve, 0));
                    assert.isTrue(breakpointsRemoved.calledOnceWith(data.groups[0].breakpointItems));
                    return [
                        2
                    ];
            }
        });
    }));
    it('triggers an event on removing one breakpoint', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, data, removeFileBreakpointsButton, controller, breakpointsRemoved;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderMultipleBreakpoints()
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, data = _ref.data;
                    assert.isNotNull(component.shadowRoot);
                    return [
                        4,
                        hover(component, BREAKPOINT_ITEM_SELECTOR)
                    ];
                case 2:
                    _state.sent();
                    removeFileBreakpointsButton = component.shadowRoot.querySelector(REMOVE_SINGLE_BREAKPOINT_SELECTOR);
                    assert.instanceOf(removeFileBreakpointsButton, HTMLButtonElement);
                    controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance();
                    breakpointsRemoved = sinon.stub(controller, 'breakpointsRemoved');
                    removeFileBreakpointsButton.click();
                    // await new Promise(resolve => setTimeout(resolve, 0));
                    assert.isTrue(breakpointsRemoved.calledOnce);
                    assert.deepEqual(breakpointsRemoved.firstCall.firstArg, [
                        data.groups[0].breakpointItems[0]
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('triggers an event on editing one breakpoint', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, data, editBreakpointButton, controller, breakpointEdited;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderMultipleBreakpoints()
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, data = _ref.data;
                    assert.isNotNull(component.shadowRoot);
                    return [
                        4,
                        hover(component, BREAKPOINT_ITEM_SELECTOR)
                    ];
                case 2:
                    _state.sent();
                    editBreakpointButton = component.shadowRoot.querySelector(EDIT_SINGLE_BREAKPOINT_SELECTOR);
                    assert.instanceOf(editBreakpointButton, HTMLButtonElement);
                    controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance();
                    breakpointEdited = sinon.stub(controller, 'breakpointEdited');
                    editBreakpointButton.click();
                    // await new Promise(resolve => setTimeout(resolve, 0));
                    assert.isTrue(breakpointEdited.calledOnceWith(data.groups[0].breakpointItems[0], true));
                    return [
                        2
                    ];
            }
        });
    }));
    it('shows a tooltip with edit condition on regular breakpoints', /*#__PURE__*/ _async_to_generator(function() {
        var component, editBreakpointButton;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderSingleBreakpoint("REGULAR_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT */ )
                    ];
                case 1:
                    component = _state.sent().component;
                    assert.isNotNull(component.shadowRoot);
                    return [
                        4,
                        hover(component, BREAKPOINT_ITEM_SELECTOR)
                    ];
                case 2:
                    _state.sent();
                    editBreakpointButton = component.shadowRoot.querySelector(EDIT_SINGLE_BREAKPOINT_SELECTOR);
                    assert.instanceOf(editBreakpointButton, HTMLButtonElement);
                    assert.strictEqual(editBreakpointButton.title, 'Edit condition');
                    return [
                        2
                    ];
            }
        });
    }));
    describe('group checkboxes', function() {
        var waitForCheckboxToggledEventsWithCheckedUpdate = function waitForCheckboxToggledEventsWithCheckedUpdate(component, numBreakpointItems, checked) {
            return _waitForCheckboxToggledEventsWithCheckedUpdate.apply(this, arguments);
        };
        function _waitForCheckboxToggledEventsWithCheckedUpdate() {
            _waitForCheckboxToggledEventsWithCheckedUpdate = _async_to_generator(function(component, numBreakpointItems, checked) {
                return _ts_generator(this, function(_state) {
                    return [
                        2,
                        new Promise(function(resolve) {
                            var numCheckboxToggledEvents = 0;
                            var controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance();
                            sinon.stub(controller, 'breakpointStateChanged').callsFake(function(_, checkedArg) {
                                assert.strictEqual(checkedArg, checked);
                                ++numCheckboxToggledEvents;
                                if (numCheckboxToggledEvents === numBreakpointItems) {
                                    resolve();
                                }
                            });
                        })
                    ];
                });
            });
            return _waitForCheckboxToggledEventsWithCheckedUpdate.apply(this, arguments);
        }
        it('show a checked group checkbox if at least one breakpoint in that group is enabled', /*#__PURE__*/ _async_to_generator(function() {
            var _ref, component, data, firstGroupSummary, groupCheckbox;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderMultipleBreakpoints()
                        ];
                    case 1:
                        _ref = _state.sent(), component = _ref.component, data = _ref.data;
                        // Make sure that at least one breakpoint is enabled.
                        data.groups[0].breakpointItems[0].status = "ENABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.ENABLED */ ;
                        component.data = data;
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        return [
                            4,
                            hover(component, SUMMARY_SELECTOR)
                        ];
                    case 3:
                        _state.sent();
                        assert.isNotNull(component.shadowRoot);
                        firstGroupSummary = component.shadowRoot.querySelector(SUMMARY_SELECTOR);
                        assert.exists(firstGroupSummary);
                        groupCheckbox = firstGroupSummary.querySelector('input');
                        assert.instanceOf(groupCheckbox, HTMLInputElement);
                        assert.isTrue(groupCheckbox.checked);
                        return [
                            2
                        ];
                }
            });
        }));
        it('show an unchecked group checkbox if no breakpoint in that group is enabled', /*#__PURE__*/ _async_to_generator(function() {
            var _ref, component, data, breakpointItems, i, firstGroupSummary, groupCheckbox;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderMultipleBreakpoints()
                        ];
                    case 1:
                        _ref = _state.sent(), component = _ref.component, data = _ref.data;
                        // Make sure that all breakpoints are disabled.
                        breakpointItems = data.groups[0].breakpointItems;
                        for(i = 0; i < breakpointItems.length; ++i){
                            breakpointItems[i].status = "DISABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.DISABLED */ ;
                        }
                        component.data = data;
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        return [
                            4,
                            hover(component, SUMMARY_SELECTOR)
                        ];
                    case 3:
                        _state.sent();
                        assert.isNotNull(component.shadowRoot);
                        firstGroupSummary = component.shadowRoot.querySelector(SUMMARY_SELECTOR);
                        assert.exists(firstGroupSummary);
                        groupCheckbox = firstGroupSummary.querySelector('input');
                        assert.instanceOf(groupCheckbox, HTMLInputElement);
                        assert.isFalse(groupCheckbox.checked);
                        return [
                            2
                        ];
                }
            });
        }));
        it('disable all breakpoints on unchecking', /*#__PURE__*/ _async_to_generator(function() {
            var _ref, component, data, numBreakpointItems, i, firstGroupSummary, groupCheckbox, waitForEventPromise;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderMultipleBreakpoints()
                        ];
                    case 1:
                        _ref = _state.sent(), component = _ref.component, data = _ref.data;
                        numBreakpointItems = data.groups[0].breakpointItems.length;
                        assert.isTrue(numBreakpointItems > 1);
                        // Make sure that all breakpoints are enabled.
                        for(i = 0; i < numBreakpointItems; ++i){
                            data.groups[0].breakpointItems[i].status = "ENABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.ENABLED */ ;
                        }
                        component.data = data;
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        return [
                            4,
                            hover(component, SUMMARY_SELECTOR)
                        ];
                    case 3:
                        _state.sent();
                        // Uncheck the group checkbox.
                        assert.isNotNull(component.shadowRoot);
                        firstGroupSummary = component.shadowRoot.querySelector(SUMMARY_SELECTOR);
                        assert.exists(firstGroupSummary);
                        groupCheckbox = firstGroupSummary.querySelector('input');
                        assert.instanceOf(groupCheckbox, HTMLInputElement);
                        // Wait until we receive all events fired that notify us of disabled breakpoints.
                        waitForEventPromise = waitForCheckboxToggledEventsWithCheckedUpdate(component, numBreakpointItems, false);
                        groupCheckbox.click();
                        return [
                            4,
                            waitForEventPromise
                        ];
                    case 4:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('enable all breakpoints on unchecking', /*#__PURE__*/ _async_to_generator(function() {
            var _ref, component, data, numBreakpointItems, i, firstGroupSummary, groupCheckbox, waitForEventPromise;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderMultipleBreakpoints()
                        ];
                    case 1:
                        _ref = _state.sent(), component = _ref.component, data = _ref.data;
                        numBreakpointItems = data.groups[0].breakpointItems.length;
                        assert.isTrue(numBreakpointItems > 1);
                        // Make sure that all breakpoints are disabled.
                        for(i = 0; i < numBreakpointItems; ++i){
                            data.groups[0].breakpointItems[i].status = "DISABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.DISABLED */ ;
                        }
                        component.data = data;
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        return [
                            4,
                            hover(component, SUMMARY_SELECTOR)
                        ];
                    case 3:
                        _state.sent();
                        // Uncheck the group checkbox.
                        assert.isNotNull(component.shadowRoot);
                        firstGroupSummary = component.shadowRoot.querySelector(SUMMARY_SELECTOR);
                        assert.exists(firstGroupSummary);
                        groupCheckbox = firstGroupSummary.querySelector('input');
                        assert.instanceOf(groupCheckbox, HTMLInputElement);
                        // Wait until we receive all events fired that notify us of enabled breakpoints.
                        waitForEventPromise = waitForCheckboxToggledEventsWithCheckedUpdate(component, numBreakpointItems, true);
                        groupCheckbox.click();
                        return [
                            4,
                            waitForEventPromise
                        ];
                    case 4:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
    });
    it('only renders edit button for breakpoints in editable groups', /*#__PURE__*/ _async_to_generator(function() {
        var component, data, editBreakpointButton;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        createAndInitializeBreakpointsView()
                    ];
                case 1:
                    component = _state.sent();
                    data = {
                        breakpointsActive: true,
                        pauseOnUncaughtExceptions: false,
                        pauseOnCaughtExceptions: false,
                        independentPauseToggles: true,
                        groups: [
                            {
                                name: 'test1.js',
                                url: 'https://google.com/test1.js',
                                editable: false,
                                expanded: true,
                                breakpointItems: [
                                    {
                                        id: '1',
                                        location: '1',
                                        codeSnippet: 'const a = 0;',
                                        isHit: true,
                                        status: "ENABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.ENABLED */ ,
                                        type: "REGULAR_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT */ 
                                    }
                                ]
                            }
                        ]
                    };
                    component.data = data;
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    return [
                        4,
                        hover(component, BREAKPOINT_ITEM_SELECTOR)
                    ];
                case 3:
                    _state.sent();
                    editBreakpointButton = component.shadowRoot.querySelector(EDIT_SINGLE_BREAKPOINT_SELECTOR);
                    assert.isNull(editBreakpointButton);
                    return [
                        2
                    ];
            }
        });
    }));
    it('initializes data from the controller on construction', /*#__PURE__*/ _async_to_generator(function() {
        var _component_shadowRoot, component, renderedGroupName;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        setUpTestWithOneBreakpointLocation()
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        createAndInitializeBreakpointsView()
                    ];
                case 2:
                    component = _state.sent();
                    renderedGroupName = (_component_shadowRoot = component.shadowRoot) === null || _component_shadowRoot === void 0 ? void 0 : _component_shadowRoot.querySelector(GROUP_NAME_SELECTOR);
                    assert.strictEqual(renderedGroupName === null || renderedGroupName === void 0 ? void 0 : renderedGroupName.textContent, HELLO_JS_FILE);
                    return [
                        2
                    ];
            }
        });
    }));
    describe('conditional breakpoints', function() {
        var breakpointDetails = 'x < a';
        it('are rendered', /*#__PURE__*/ _async_to_generator(function() {
            var _component_shadowRoot, component, breakpointItem;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderSingleBreakpoint("CONDITIONAL_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.CONDITIONAL_BREAKPOINT */ , breakpointDetails)
                        ];
                    case 1:
                        component = _state.sent().component;
                        breakpointItem = (_component_shadowRoot = component.shadowRoot) === null || _component_shadowRoot === void 0 ? void 0 : _component_shadowRoot.querySelector(BREAKPOINT_ITEM_SELECTOR);
                        assert.exists(breakpointItem);
                        assert.instanceOf(breakpointItem, HTMLDivElement);
                        assert.isTrue(breakpointItem.classList.contains('conditional-breakpoint'));
                        return [
                            2
                        ];
                }
            });
        }));
        it('show a tooltip', /*#__PURE__*/ _async_to_generator(function() {
            var _component_shadowRoot, component, codeSnippet;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderSingleBreakpoint("CONDITIONAL_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.CONDITIONAL_BREAKPOINT */ , breakpointDetails)
                        ];
                    case 1:
                        component = _state.sent().component;
                        codeSnippet = (_component_shadowRoot = component.shadowRoot) === null || _component_shadowRoot === void 0 ? void 0 : _component_shadowRoot.querySelector(CODE_SNIPPET_SELECTOR);
                        assert.exists(codeSnippet);
                        assert.instanceOf(codeSnippet, HTMLSpanElement);
                        assert.strictEqual(codeSnippet.title, "Condition: ".concat(breakpointDetails));
                        return [
                            2
                        ];
                }
            });
        }));
        it('show a tooltip on editing the condition', /*#__PURE__*/ _async_to_generator(function() {
            var component, editBreakpointButton;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderSingleBreakpoint("CONDITIONAL_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.CONDITIONAL_BREAKPOINT */ , breakpointDetails)
                        ];
                    case 1:
                        component = _state.sent().component;
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            hover(component, BREAKPOINT_ITEM_SELECTOR)
                        ];
                    case 2:
                        _state.sent();
                        editBreakpointButton = component.shadowRoot.querySelector(EDIT_SINGLE_BREAKPOINT_SELECTOR);
                        assert.instanceOf(editBreakpointButton, HTMLButtonElement);
                        assert.strictEqual(editBreakpointButton.title, 'Edit condition');
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('logpoints', function() {
        var breakpointDetails = 'x, a';
        it('are rendered', /*#__PURE__*/ _async_to_generator(function() {
            var _component_shadowRoot, component, breakpointItem;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderSingleBreakpoint("LOGPOINT" /* SDK.DebuggerModel.BreakpointType.LOGPOINT */ , breakpointDetails)
                        ];
                    case 1:
                        component = _state.sent().component;
                        breakpointItem = (_component_shadowRoot = component.shadowRoot) === null || _component_shadowRoot === void 0 ? void 0 : _component_shadowRoot.querySelector(BREAKPOINT_ITEM_SELECTOR);
                        assert.exists(breakpointItem);
                        assert.instanceOf(breakpointItem, HTMLDivElement);
                        assert.isTrue(breakpointItem.classList.contains('logpoint'));
                        return [
                            2
                        ];
                }
            });
        }));
        it('show a tooltip', /*#__PURE__*/ _async_to_generator(function() {
            var _component_shadowRoot, component, codeSnippet;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderSingleBreakpoint("LOGPOINT" /* SDK.DebuggerModel.BreakpointType.LOGPOINT */ , breakpointDetails)
                        ];
                    case 1:
                        component = _state.sent().component;
                        codeSnippet = (_component_shadowRoot = component.shadowRoot) === null || _component_shadowRoot === void 0 ? void 0 : _component_shadowRoot.querySelector(CODE_SNIPPET_SELECTOR);
                        assert.exists(codeSnippet);
                        assert.instanceOf(codeSnippet, HTMLSpanElement);
                        assert.strictEqual(codeSnippet.title, "Logpoint: ".concat(breakpointDetails));
                        return [
                            2
                        ];
                }
            });
        }));
        it('show a tooltip on editing the logpoint', /*#__PURE__*/ _async_to_generator(function() {
            var component, editBreakpointButton;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderSingleBreakpoint("LOGPOINT" /* SDK.DebuggerModel.BreakpointType.LOGPOINT */ , breakpointDetails)
                        ];
                    case 1:
                        component = _state.sent().component;
                        assert.isNotNull(component.shadowRoot);
                        return [
                            4,
                            hover(component, BREAKPOINT_ITEM_SELECTOR)
                        ];
                    case 2:
                        _state.sent();
                        editBreakpointButton = component.shadowRoot.querySelector(EDIT_SINGLE_BREAKPOINT_SELECTOR);
                        assert.instanceOf(editBreakpointButton, HTMLButtonElement);
                        assert.strictEqual(editBreakpointButton.title, 'Edit logpoint');
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('pause on exceptions', function() {
        it('state is rendered correctly when disabled', /*#__PURE__*/ _async_to_generator(function() {
            var _component_shadowRoot, component, pauseOnUncaughtExceptionsItem, pauseOnUncaughtExceptionsCheckbox, pauseOnCaughtExceptionsItem, pauseOnCaughtExceptionsCheckbox;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderNoBreakpoints({
                                pauseOnUncaughtExceptions: false,
                                pauseOnCaughtExceptions: false,
                                independentPauseToggles: true
                            })
                        ];
                    case 1:
                        component = _state.sent();
                        assert.isNotNull(component.shadowRoot);
                        pauseOnUncaughtExceptionsItem = component.shadowRoot.querySelector(PAUSE_ON_UNCAUGHT_EXCEPTIONS_SELECTOR);
                        assert.exists(pauseOnUncaughtExceptionsItem);
                        pauseOnUncaughtExceptionsCheckbox = pauseOnUncaughtExceptionsItem.querySelector('input');
                        assert.instanceOf(pauseOnUncaughtExceptionsCheckbox, HTMLInputElement);
                        assert.isFalse(pauseOnUncaughtExceptionsCheckbox.checked);
                        pauseOnCaughtExceptionsItem = (_component_shadowRoot = component.shadowRoot) === null || _component_shadowRoot === void 0 ? void 0 : _component_shadowRoot.querySelector(PAUSE_ON_CAUGHT_EXCEPTIONS_SELECTOR);
                        assert.exists(pauseOnCaughtExceptionsItem);
                        pauseOnCaughtExceptionsCheckbox = pauseOnUncaughtExceptionsItem.querySelector('input');
                        assert.instanceOf(pauseOnCaughtExceptionsCheckbox, HTMLInputElement);
                        assert.isFalse(pauseOnCaughtExceptionsCheckbox.checked);
                        return [
                            2
                        ];
                }
            });
        }));
        it('state is rendered correctly when pausing on uncaught exceptions', /*#__PURE__*/ _async_to_generator(function() {
            var _component_shadowRoot, component, pauseOnUncaughtExceptionsItem, pauseOnUncaughtExceptionsCheckbox, pauseOnCaughtExceptionsItem, pauseOnCaughtExceptionsCheckbox;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderNoBreakpoints({
                                pauseOnUncaughtExceptions: true,
                                pauseOnCaughtExceptions: false,
                                independentPauseToggles: true
                            })
                        ];
                    case 1:
                        component = _state.sent();
                        assert.isNotNull(component.shadowRoot);
                        pauseOnUncaughtExceptionsItem = component.shadowRoot.querySelector(PAUSE_ON_UNCAUGHT_EXCEPTIONS_SELECTOR);
                        assert.exists(pauseOnUncaughtExceptionsItem);
                        pauseOnUncaughtExceptionsCheckbox = pauseOnUncaughtExceptionsItem.querySelector('input');
                        assert.exists(pauseOnUncaughtExceptionsCheckbox);
                        assert.instanceOf(pauseOnUncaughtExceptionsCheckbox, HTMLInputElement);
                        assert.isTrue(pauseOnUncaughtExceptionsCheckbox.checked);
                        pauseOnCaughtExceptionsItem = (_component_shadowRoot = component.shadowRoot) === null || _component_shadowRoot === void 0 ? void 0 : _component_shadowRoot.querySelector(PAUSE_ON_CAUGHT_EXCEPTIONS_SELECTOR);
                        assert.exists(pauseOnCaughtExceptionsItem);
                        pauseOnCaughtExceptionsCheckbox = pauseOnCaughtExceptionsItem.querySelector('input');
                        assert.exists(pauseOnCaughtExceptionsCheckbox);
                        assert.instanceOf(pauseOnCaughtExceptionsCheckbox, HTMLInputElement);
                        assert.isFalse(pauseOnCaughtExceptionsCheckbox.checked);
                        return [
                            2
                        ];
                }
            });
        }));
        it('state is rendered correctly when pausing on all exceptions', /*#__PURE__*/ _async_to_generator(function() {
            var _component_shadowRoot, component, pauseOnUncaughtExceptionsItem, pauseOnUncaughtExceptionsCheckbox, pauseOnCaughtExceptionsItem, pauseOnCaughtExceptionsCheckbox;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderNoBreakpoints({
                                pauseOnUncaughtExceptions: true,
                                pauseOnCaughtExceptions: true,
                                independentPauseToggles: true
                            })
                        ];
                    case 1:
                        component = _state.sent();
                        assert.isNotNull(component.shadowRoot);
                        pauseOnUncaughtExceptionsItem = component.shadowRoot.querySelector(PAUSE_ON_UNCAUGHT_EXCEPTIONS_SELECTOR);
                        assert.exists(pauseOnUncaughtExceptionsItem);
                        pauseOnUncaughtExceptionsCheckbox = pauseOnUncaughtExceptionsItem.querySelector('input');
                        assert.exists(pauseOnUncaughtExceptionsCheckbox);
                        assert.instanceOf(pauseOnUncaughtExceptionsCheckbox, HTMLInputElement);
                        assert.isTrue(pauseOnUncaughtExceptionsCheckbox.checked);
                        pauseOnCaughtExceptionsItem = (_component_shadowRoot = component.shadowRoot) === null || _component_shadowRoot === void 0 ? void 0 : _component_shadowRoot.querySelector(PAUSE_ON_CAUGHT_EXCEPTIONS_SELECTOR);
                        assert.exists(pauseOnCaughtExceptionsItem);
                        pauseOnCaughtExceptionsCheckbox = pauseOnCaughtExceptionsItem.querySelector('input');
                        assert.exists(pauseOnCaughtExceptionsCheckbox);
                        assert.instanceOf(pauseOnCaughtExceptionsCheckbox, HTMLInputElement);
                        assert.isTrue(pauseOnCaughtExceptionsCheckbox.checked);
                        return [
                            2
                        ];
                }
            });
        }));
        it('state is rendered correctly when toggles are dependent and only pausing on uncaught exceptions', /*#__PURE__*/ _async_to_generator(function() {
            var _component_shadowRoot, component, pauseOnUncaughtExceptionsItem, pauseOnUncaughtExceptionsCheckbox, pauseOnCaughtExceptionsItem, pauseOnCaughtExceptionsCheckbox;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderNoBreakpoints({
                                pauseOnUncaughtExceptions: true,
                                pauseOnCaughtExceptions: false,
                                independentPauseToggles: false
                            })
                        ];
                    case 1:
                        component = _state.sent();
                        assert.isNotNull(component.shadowRoot);
                        pauseOnUncaughtExceptionsItem = component.shadowRoot.querySelector(PAUSE_ON_UNCAUGHT_EXCEPTIONS_SELECTOR);
                        assert.exists(pauseOnUncaughtExceptionsItem);
                        pauseOnUncaughtExceptionsCheckbox = pauseOnUncaughtExceptionsItem.querySelector('input');
                        assert.exists(pauseOnUncaughtExceptionsCheckbox);
                        assert.instanceOf(pauseOnUncaughtExceptionsCheckbox, HTMLInputElement);
                        assert.isTrue(pauseOnUncaughtExceptionsCheckbox.checked);
                        pauseOnCaughtExceptionsItem = (_component_shadowRoot = component.shadowRoot) === null || _component_shadowRoot === void 0 ? void 0 : _component_shadowRoot.querySelector(PAUSE_ON_CAUGHT_EXCEPTIONS_SELECTOR);
                        assert.exists(pauseOnCaughtExceptionsItem);
                        pauseOnCaughtExceptionsCheckbox = pauseOnCaughtExceptionsItem.querySelector('input');
                        assert.instanceOf(pauseOnCaughtExceptionsCheckbox, HTMLInputElement);
                        assert.isFalse(pauseOnCaughtExceptionsCheckbox.disabled);
                        return [
                            2
                        ];
                }
            });
        }));
        it('state is rendered correctly when toggles are dependent and not pausing on uncaught exceptions', /*#__PURE__*/ _async_to_generator(function() {
            var _component_shadowRoot, component, pauseOnUncaughtExceptionsItem, pauseOnUncaughtExceptionsCheckbox, pauseOnCaughtExceptionsItem, pauseOnCaughtExceptionsCheckbox;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderNoBreakpoints({
                                pauseOnUncaughtExceptions: false,
                                pauseOnCaughtExceptions: false,
                                independentPauseToggles: false
                            })
                        ];
                    case 1:
                        component = _state.sent();
                        assert.isNotNull(component.shadowRoot);
                        pauseOnUncaughtExceptionsItem = component.shadowRoot.querySelector(PAUSE_ON_UNCAUGHT_EXCEPTIONS_SELECTOR);
                        assert.exists(pauseOnUncaughtExceptionsItem);
                        pauseOnUncaughtExceptionsCheckbox = pauseOnUncaughtExceptionsItem.querySelector('input');
                        assert.exists(pauseOnUncaughtExceptionsCheckbox);
                        assert.instanceOf(pauseOnUncaughtExceptionsCheckbox, HTMLInputElement);
                        assert.isFalse(pauseOnUncaughtExceptionsCheckbox.checked);
                        pauseOnCaughtExceptionsItem = (_component_shadowRoot = component.shadowRoot) === null || _component_shadowRoot === void 0 ? void 0 : _component_shadowRoot.querySelector(PAUSE_ON_CAUGHT_EXCEPTIONS_SELECTOR);
                        assert.exists(pauseOnCaughtExceptionsItem);
                        pauseOnCaughtExceptionsCheckbox = pauseOnCaughtExceptionsItem.querySelector('input');
                        assert.instanceOf(pauseOnCaughtExceptionsCheckbox, HTMLInputElement);
                        assert.isTrue(pauseOnCaughtExceptionsCheckbox.disabled);
                        return [
                            2
                        ];
                }
            });
        }));
        it('state is rendered correctly when toggles are dependent and pausing on uncaught exceptions is unchecked', /*#__PURE__*/ _async_to_generator(function() {
            var _component_shadowRoot, component, pauseOnUncaughtExceptionsItem, pauseOnUncaughtExceptionsCheckbox, pauseOnUncaughtExceptionsCheckbox1, pauseOnCaughtExceptionsItem, pauseOnCaughtExceptionsCheckbox;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderNoBreakpoints({
                                pauseOnUncaughtExceptions: true,
                                pauseOnCaughtExceptions: true,
                                independentPauseToggles: false
                            })
                        ];
                    case 1:
                        component = _state.sent();
                        assert.isNotNull(component.shadowRoot);
                        pauseOnUncaughtExceptionsItem = component.shadowRoot.querySelector(PAUSE_ON_UNCAUGHT_EXCEPTIONS_SELECTOR);
                        assert.instanceOf(pauseOnUncaughtExceptionsItem, HTMLDivElement);
                        // Click on the pause on exceptions checkbox to uncheck.
                        pauseOnUncaughtExceptionsCheckbox = pauseOnUncaughtExceptionsItem.querySelector('input');
                        assert.instanceOf(pauseOnUncaughtExceptionsCheckbox, HTMLInputElement);
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchClickEvent)(pauseOnUncaughtExceptionsCheckbox);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        {
                            // Check that clicking on it actually unchecked.
                            pauseOnUncaughtExceptionsCheckbox1 = pauseOnUncaughtExceptionsItem.querySelector('input');
                            assert.instanceOf(pauseOnUncaughtExceptionsCheckbox1, HTMLInputElement);
                            assert.isFalse(pauseOnUncaughtExceptionsCheckbox1.checked);
                        }
                        // Check if the pause on caught exception checkbox is unchecked and disabled as a result.
                        pauseOnCaughtExceptionsItem = (_component_shadowRoot = component.shadowRoot) === null || _component_shadowRoot === void 0 ? void 0 : _component_shadowRoot.querySelector(PAUSE_ON_CAUGHT_EXCEPTIONS_SELECTOR);
                        assert.exists(pauseOnCaughtExceptionsItem);
                        pauseOnCaughtExceptionsCheckbox = pauseOnCaughtExceptionsItem.querySelector('input');
                        assert.instanceOf(pauseOnCaughtExceptionsCheckbox, HTMLInputElement);
                        assert.isTrue(pauseOnCaughtExceptionsCheckbox.disabled);
                        assert.isFalse(pauseOnCaughtExceptionsCheckbox.checked);
                        return [
                            2
                        ];
                }
            });
        }));
        it('triggers an event when disabling pausing on all exceptions', /*#__PURE__*/ _async_to_generator(function() {
            var component, item, checkbox, checked, controller, setPauseOnUncaughtExceptions;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderNoBreakpoints({
                                pauseOnUncaughtExceptions: true,
                                pauseOnCaughtExceptions: false,
                                independentPauseToggles: true
                            })
                        ];
                    case 1:
                        component = _state.sent();
                        assert.isNotNull(component.shadowRoot);
                        item = component.shadowRoot.querySelector(PAUSE_ON_UNCAUGHT_EXCEPTIONS_SELECTOR);
                        assert.exists(item);
                        checkbox = item.querySelector('input');
                        assert.instanceOf(checkbox, HTMLInputElement);
                        checked = checkbox.checked;
                        controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance();
                        setPauseOnUncaughtExceptions = sinon.stub(controller, 'setPauseOnUncaughtExceptions');
                        checkbox.click();
                        assert.isTrue(setPauseOnUncaughtExceptions.calledOnceWith(!checked));
                        return [
                            2
                        ];
                }
            });
        }));
        it('triggers an event when enabling pausing on caught exceptions', /*#__PURE__*/ _async_to_generator(function() {
            var component, item, checkbox, checked, controller, setPauseOnCaughtExceptions;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderNoBreakpoints({
                                pauseOnUncaughtExceptions: true,
                                pauseOnCaughtExceptions: false,
                                independentPauseToggles: true
                            })
                        ];
                    case 1:
                        component = _state.sent();
                        assert.isNotNull(component.shadowRoot);
                        item = component.shadowRoot.querySelector(PAUSE_ON_CAUGHT_EXCEPTIONS_SELECTOR);
                        assert.exists(item);
                        checkbox = item.querySelector('input');
                        assert.instanceOf(checkbox, HTMLInputElement);
                        checked = checkbox.checked;
                        controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance();
                        setPauseOnCaughtExceptions = sinon.stub(controller, 'setPauseOnCaughtExceptions');
                        checkbox.click();
                        assert.isTrue(setPauseOnCaughtExceptions.calledOnceWith(!checked));
                        return [
                            2
                        ];
                }
            });
        }));
        it('triggers an event when enabling pausing on uncaught exceptions', /*#__PURE__*/ _async_to_generator(function() {
            var component, item, checkbox, checked, controller, setPauseOnUncaughtExceptions;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderNoBreakpoints({
                                pauseOnUncaughtExceptions: false,
                                pauseOnCaughtExceptions: true,
                                independentPauseToggles: true
                            })
                        ];
                    case 1:
                        component = _state.sent();
                        assert.isNotNull(component.shadowRoot);
                        item = component.shadowRoot.querySelector(PAUSE_ON_UNCAUGHT_EXCEPTIONS_SELECTOR);
                        assert.exists(item);
                        checkbox = item.querySelector('input');
                        assert.instanceOf(checkbox, HTMLInputElement);
                        checked = checkbox.checked;
                        controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance();
                        setPauseOnUncaughtExceptions = sinon.stub(controller, 'setPauseOnUncaughtExceptions');
                        checkbox.click();
                        assert.isTrue(setPauseOnUncaughtExceptions.calledOnceWith(!checked));
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('navigating with keyboard', function() {
        var renderBreakpointsForKeyboardNavigation = function renderBreakpointsForKeyboardNavigation() {
            return _renderBreakpointsForKeyboardNavigation.apply(this, arguments);
        };
        function _renderBreakpointsForKeyboardNavigation() {
            _renderBreakpointsForKeyboardNavigation = // One expanded group with 2 breakpoints, and one collapsed with 2 breakpoints.
            _async_to_generator(function() {
                var component, data;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                createAndInitializeBreakpointsView()
                            ];
                        case 1:
                            component = _state.sent();
                            data = {
                                breakpointsActive: true,
                                pauseOnUncaughtExceptions: false,
                                pauseOnCaughtExceptions: false,
                                independentPauseToggles: true,
                                groups: [
                                    {
                                        name: 'test1.js',
                                        url: 'https://google.com/test1.js',
                                        editable: false,
                                        expanded: true,
                                        breakpointItems: [
                                            {
                                                id: '1',
                                                type: "REGULAR_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT */ ,
                                                location: '234',
                                                codeSnippet: 'const a = x;',
                                                isHit: false,
                                                status: "ENABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.ENABLED */ 
                                            },
                                            {
                                                id: '2',
                                                type: "REGULAR_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT */ ,
                                                location: '3:3',
                                                codeSnippet: 'if (x > a) {',
                                                isHit: true,
                                                status: "DISABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.DISABLED */ 
                                            }
                                        ]
                                    },
                                    {
                                        name: 'test2.js',
                                        url: 'https://google.com/test2.js',
                                        editable: false,
                                        expanded: false,
                                        breakpointItems: [
                                            {
                                                id: '3',
                                                type: "REGULAR_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT */ ,
                                                location: '11',
                                                codeSnippet: 'const y;',
                                                isHit: false,
                                                status: "ENABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.ENABLED */ 
                                            },
                                            {
                                                id: '4',
                                                type: "REGULAR_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT */ ,
                                                location: '12',
                                                codeSnippet: 'const y;',
                                                isHit: false,
                                                status: "ENABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.ENABLED */ 
                                            }
                                        ]
                                    }
                                ]
                            };
                            component.data = data;
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 2:
                            _state.sent();
                            return [
                                2,
                                {
                                    component: component,
                                    data: data
                                }
                            ];
                    }
                });
            });
            return _renderBreakpointsForKeyboardNavigation.apply(this, arguments);
        }
        it('pause on exceptions is tabbable', /*#__PURE__*/ _async_to_generator(function() {
            var component, focusableElements, pauseOnUncaughtExceptions;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderNoBreakpoints({
                                pauseOnUncaughtExceptions: true,
                                pauseOnCaughtExceptions: false,
                                independentPauseToggles: true
                            })
                        ];
                    case 1:
                        component = _state.sent();
                        assert.isNotNull(component.shadowRoot);
                        focusableElements = component.shadowRoot.querySelectorAll(TABBABLE_SELECTOR);
                        assert.lengthOf(focusableElements, 1);
                        pauseOnUncaughtExceptions = component.shadowRoot.querySelector(PAUSE_ON_UNCAUGHT_EXCEPTIONS_SELECTOR);
                        assert.deepEqual(focusableElements[0], pauseOnUncaughtExceptions);
                        return [
                            2
                        ];
                }
            });
        }));
        describe('pressing the HOME key', function() {
            it('takes the user to the pause-on-exceptions line', /*#__PURE__*/ _async_to_generator(function() {
                var component, secondGroupsSummary, selected, pauseOnUncaughtExceptions;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderBreakpointsForKeyboardNavigation()
                            ];
                        case 1:
                            component = _state.sent().component;
                            assert.isNotNull(component.shadowRoot);
                            secondGroupsSummary = component.shadowRoot.querySelector("".concat(DETAILS_SELECTOR, ":nth-of-type(2) > ").concat(SUMMARY_SELECTOR));
                            assert.instanceOf(secondGroupsSummary, HTMLElement);
                            // Focus on second group by clicking on it, then press Home button.
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchClickEvent)(secondGroupsSummary);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchKeyDownEvent)(secondGroupsSummary, {
                                key: 'Home',
                                bubbles: true
                            });
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 2:
                            _state.sent();
                            selected = component.shadowRoot.querySelector(TABBABLE_SELECTOR);
                            assert.instanceOf(selected, HTMLElement);
                            pauseOnUncaughtExceptions = component.shadowRoot.querySelector(PAUSE_ON_UNCAUGHT_EXCEPTIONS_SELECTOR);
                            assert.instanceOf(pauseOnUncaughtExceptions, HTMLElement);
                            assert.strictEqual(selected, pauseOnUncaughtExceptions);
                            return [
                                2
                            ];
                    }
                });
            }));
        });
        describe('pressing the END key', function() {
            it('takes the user to the summary node of the last group (if last group is collapsed)', /*#__PURE__*/ _async_to_generator(function() {
                var component, pauseOnUncaughtExceptions, selected, lastGroupSummary;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderBreakpointsForKeyboardNavigation()
                            ];
                        case 1:
                            component = _state.sent().component;
                            assert.isNotNull(component.shadowRoot);
                            pauseOnUncaughtExceptions = component.shadowRoot.querySelector(PAUSE_ON_UNCAUGHT_EXCEPTIONS_SELECTOR);
                            assert.instanceOf(pauseOnUncaughtExceptions, HTMLElement);
                            // Focus on the pause-on-exceptions line by clicking on it, then press End key.
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchClickEvent)(pauseOnUncaughtExceptions);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchKeyDownEvent)(pauseOnUncaughtExceptions, {
                                key: 'End',
                                bubbles: true
                            });
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 2:
                            _state.sent();
                            selected = component.shadowRoot.querySelector(TABBABLE_SELECTOR);
                            assert.instanceOf(selected, HTMLElement);
                            lastGroupSummary = component.shadowRoot.querySelector("".concat(DETAILS_SELECTOR, ":nth-of-type(2) > ").concat(SUMMARY_SELECTOR));
                            assert.instanceOf(lastGroupSummary, HTMLElement);
                            assert.strictEqual(selected, lastGroupSummary);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('takes the user to the last breakpoint item (if last group is expanded))', /*#__PURE__*/ _async_to_generator(function() {
                var _ref, component, data, firstGroupSummary, selected, breakpointItems, lastBreakpointItem;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderBreakpointsForKeyboardNavigation()
                            ];
                        case 1:
                            _ref = _state.sent(), component = _ref.component, data = _ref.data;
                            // Expand the last group.
                            data.groups[1].expanded = true;
                            component.data = data;
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 2:
                            _state.sent();
                            assert.isNotNull(component.shadowRoot);
                            firstGroupSummary = component.shadowRoot.querySelector(SUMMARY_SELECTOR);
                            assert.instanceOf(firstGroupSummary, HTMLElement);
                            // First focus on the first group by clicking on it, then press the End button.
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchClickEvent)(firstGroupSummary);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchKeyDownEvent)(firstGroupSummary, {
                                key: 'End',
                                bubbles: true
                            });
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 3:
                            _state.sent();
                            selected = component.shadowRoot.querySelector(TABBABLE_SELECTOR);
                            assert.instanceOf(selected, HTMLElement);
                            breakpointItems = component.shadowRoot.querySelectorAll(BREAKPOINT_ITEM_SELECTOR);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.assertElements)(breakpointItems, HTMLDivElement);
                            lastBreakpointItem = breakpointItems.item(breakpointItems.length - 1);
                            assert.strictEqual(selected, lastBreakpointItem);
                            return [
                                2
                            ];
                    }
                });
            }));
        });
        describe('pressing the ArrowDown key', function() {
            it('on the pause-on-uncaught-exception takes the user to the summary node of the top most details element', /*#__PURE__*/ _async_to_generator(function() {
                var component, pauseOnCaughtException, selected, firstSummary;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderBreakpointsForKeyboardNavigation()
                            ];
                        case 1:
                            component = _state.sent().component;
                            assert.isNotNull(component.shadowRoot);
                            pauseOnCaughtException = component.shadowRoot.querySelector(PAUSE_ON_CAUGHT_EXCEPTIONS_SELECTOR);
                            assert.instanceOf(pauseOnCaughtException, HTMLElement);
                            // Focus on the pause on exception, and navigate one down.
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchClickEvent)(pauseOnCaughtException);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchKeyDownEvent)(pauseOnCaughtException, {
                                key: 'ArrowDown',
                                bubbles: true
                            });
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 2:
                            _state.sent();
                            selected = component.shadowRoot.querySelector(TABBABLE_SELECTOR);
                            firstSummary = component.shadowRoot.querySelector("".concat(DETAILS_SELECTOR, " > ").concat(SUMMARY_SELECTOR));
                            assert.instanceOf(firstSummary, HTMLElement);
                            assert.strictEqual(selected, firstSummary);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('on the summary node of an expanded group takes the user to the top most breakpoint item of that group', /*#__PURE__*/ _async_to_generator(function() {
                var component, collapsedDetailsElement, collapsedGroupSummary, selected, firstBreakpointItem;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderBreakpointsForKeyboardNavigation()
                            ];
                        case 1:
                            component = _state.sent().component;
                            assert.isNotNull(component.shadowRoot);
                            collapsedDetailsElement = component.shadowRoot.querySelector(COLLAPSED_GROUPS_SELECTOR);
                            assert.instanceOf(collapsedDetailsElement, HTMLDetailsElement);
                            collapsedGroupSummary = collapsedDetailsElement.querySelector(SUMMARY_SELECTOR);
                            assert.instanceOf(collapsedGroupSummary, HTMLElement);
                            // Focus on the collapsed group and collapse it by clicking on it. Then navigate down.
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchClickEvent)(collapsedGroupSummary);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchKeyDownEvent)(collapsedGroupSummary, {
                                key: 'ArrowDown',
                                bubbles: true
                            });
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 2:
                            _state.sent();
                            selected = component.shadowRoot.querySelector(TABBABLE_SELECTOR);
                            assert.instanceOf(selected, HTMLElement);
                            firstBreakpointItem = collapsedDetailsElement.querySelector(BREAKPOINT_ITEM_SELECTOR);
                            assert.instanceOf(firstBreakpointItem, HTMLDivElement);
                            assert.strictEqual(selected, firstBreakpointItem);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('on the summary node of a collapsed group takes the user to the summary node of the next group', /*#__PURE__*/ _async_to_generator(function() {
                var component, firstGroupSummary, selected, secondGroupSummary;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderBreakpointsForKeyboardNavigation()
                            ];
                        case 1:
                            component = _state.sent().component;
                            assert.isNotNull(component.shadowRoot);
                            firstGroupSummary = component.shadowRoot.querySelector("".concat(DETAILS_SELECTOR, ":nth-of-type(1) > ").concat(SUMMARY_SELECTOR));
                            assert.instanceOf(firstGroupSummary, HTMLElement);
                            // Focus on the expanded group and collapse it by clicking on it. Then navigate down.
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchClickEvent)(firstGroupSummary);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchKeyDownEvent)(firstGroupSummary, {
                                key: 'ArrowDown',
                                bubbles: true
                            });
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 2:
                            _state.sent();
                            selected = component.shadowRoot.querySelector(TABBABLE_SELECTOR);
                            assert.instanceOf(selected, HTMLElement);
                            secondGroupSummary = component.shadowRoot.querySelector("".concat(DETAILS_SELECTOR, ":nth-of-type(2) > ").concat(SUMMARY_SELECTOR));
                            assert.instanceOf(secondGroupSummary, HTMLElement);
                            assert.strictEqual(selected, secondGroupSummary);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('on a breakpoint item takes the user to the next breakpoint item', /*#__PURE__*/ _async_to_generator(function() {
                var component, firstDetailsElement, firstBreakpointItem, selected, secondBreakpointItem;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderBreakpointsForKeyboardNavigation()
                            ];
                        case 1:
                            component = _state.sent().component;
                            assert.isNotNull(component.shadowRoot);
                            firstDetailsElement = component.shadowRoot.querySelector('details');
                            assert.instanceOf(firstDetailsElement, HTMLDetailsElement);
                            firstBreakpointItem = firstDetailsElement.querySelector(BREAKPOINT_ITEM_SELECTOR);
                            assert.instanceOf(firstBreakpointItem, HTMLDivElement);
                            // Focus on the first breakpoint item. Then navigate up.
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchClickEvent)(firstBreakpointItem);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchKeyDownEvent)(firstBreakpointItem, {
                                key: 'ArrowDown',
                                bubbles: true
                            });
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 2:
                            _state.sent();
                            selected = component.shadowRoot.querySelector(TABBABLE_SELECTOR);
                            assert.instanceOf(selected, HTMLElement);
                            secondBreakpointItem = firstDetailsElement.querySelector("".concat(BREAKPOINT_ITEM_SELECTOR, ":nth-of-type(2)"));
                            assert.instanceOf(secondBreakpointItem, HTMLDivElement);
                            assert.strictEqual(selected, secondBreakpointItem);
                            return [
                                2
                            ];
                    }
                });
            }));
        });
        describe('pressing the ArrowUp key', function() {
            it('on the first summary takes a user to the pause on exceptions', /*#__PURE__*/ _async_to_generator(function() {
                var component, firstSummary, selected, pauseOnUncaughtExceptions;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderBreakpointsForKeyboardNavigation()
                            ];
                        case 1:
                            component = _state.sent().component;
                            assert.isNotNull(component.shadowRoot);
                            firstSummary = component.shadowRoot.querySelector("".concat(DETAILS_SELECTOR, " > ").concat(SUMMARY_SELECTOR));
                            assert.instanceOf(firstSummary, HTMLElement);
                            // Focus on the summary element.
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchClickEvent)(firstSummary);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchKeyDownEvent)(firstSummary, {
                                key: 'ArrowUp',
                                bubbles: true
                            });
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 2:
                            _state.sent();
                            selected = component.shadowRoot.querySelector(TABBABLE_SELECTOR);
                            pauseOnUncaughtExceptions = component.shadowRoot.querySelector(PAUSE_ON_CAUGHT_EXCEPTIONS_SELECTOR);
                            assert.instanceOf(pauseOnUncaughtExceptions, HTMLDivElement);
                            assert.strictEqual(selected, pauseOnUncaughtExceptions);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('on the first breakpoint item in an expanded group takes the user to the summary node', /*#__PURE__*/ _async_to_generator(function() {
                var component, expandedDetails, firstBreakpointItem, selected, summary;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderBreakpointsForKeyboardNavigation()
                            ];
                        case 1:
                            component = _state.sent().component;
                            assert.isNotNull(component.shadowRoot);
                            expandedDetails = component.shadowRoot.querySelector(EXPANDED_GROUPS_SELECTOR);
                            assert.instanceOf(expandedDetails, HTMLDetailsElement);
                            firstBreakpointItem = expandedDetails.querySelector(BREAKPOINT_ITEM_SELECTOR);
                            assert.instanceOf(firstBreakpointItem, HTMLDivElement);
                            // Focus on first breakpoint item. Then navigate up.
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchClickEvent)(firstBreakpointItem);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchKeyDownEvent)(firstBreakpointItem, {
                                key: 'ArrowUp',
                                bubbles: true
                            });
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 2:
                            _state.sent();
                            selected = component.shadowRoot.querySelector(TABBABLE_SELECTOR);
                            assert.instanceOf(selected, HTMLElement);
                            summary = expandedDetails.querySelector(SUMMARY_SELECTOR);
                            assert.instanceOf(summary, HTMLElement);
                            assert.strictEqual(selected, summary);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('on a breakpoint item in an expanded group takes the user to the previous breakpoint item', /*#__PURE__*/ _async_to_generator(function() {
                var component, expandedDetails, breakpointItems, lastBreakpointItem, selected, nextToLastBreakpointItem;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderBreakpointsForKeyboardNavigation()
                            ];
                        case 1:
                            component = _state.sent().component;
                            assert.isNotNull(component.shadowRoot);
                            expandedDetails = component.shadowRoot.querySelector(EXPANDED_GROUPS_SELECTOR);
                            assert.instanceOf(expandedDetails, HTMLDetailsElement);
                            breakpointItems = expandedDetails.querySelectorAll(BREAKPOINT_ITEM_SELECTOR);
                            assert.isAbove(breakpointItems.length, 1);
                            lastBreakpointItem = breakpointItems.item(breakpointItems.length - 1);
                            // Focus on last breakpoint item. Then navigate up.
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchClickEvent)(lastBreakpointItem);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchKeyDownEvent)(lastBreakpointItem, {
                                key: 'ArrowUp',
                                bubbles: true
                            });
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 2:
                            _state.sent();
                            selected = component.shadowRoot.querySelector(TABBABLE_SELECTOR);
                            assert.instanceOf(selected, HTMLElement);
                            nextToLastBreakpointItem = breakpointItems.item(breakpointItems.length - 2);
                            assert.instanceOf(nextToLastBreakpointItem, HTMLDivElement);
                            assert.strictEqual(selected, nextToLastBreakpointItem);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('on a summary node takes the user to the last breakpoint item of the previous group', /*#__PURE__*/ _async_to_generator(function() {
                var component, secondGroupSummary, selected, firstDetailsElement, lastBreakpointItem;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderBreakpointsForKeyboardNavigation()
                            ];
                        case 1:
                            component = _state.sent().component;
                            assert.isNotNull(component.shadowRoot);
                            secondGroupSummary = component.shadowRoot.querySelector("".concat(DETAILS_SELECTOR, ":nth-of-type(2) > ").concat(SUMMARY_SELECTOR));
                            assert.instanceOf(secondGroupSummary, HTMLElement);
                            // Focus on the group. Then navigate up.
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchClickEvent)(secondGroupSummary);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchKeyDownEvent)(secondGroupSummary, {
                                key: 'ArrowUp',
                                bubbles: true
                            });
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 2:
                            _state.sent();
                            selected = component.shadowRoot.querySelector(TABBABLE_SELECTOR);
                            assert.instanceOf(selected, HTMLElement);
                            firstDetailsElement = component.shadowRoot.querySelector(DETAILS_SELECTOR);
                            assert.exists(firstDetailsElement);
                            lastBreakpointItem = firstDetailsElement.querySelector("".concat(BREAKPOINT_ITEM_SELECTOR, ":last-child"));
                            assert.instanceOf(lastBreakpointItem, HTMLDivElement);
                            assert.strictEqual(selected, lastBreakpointItem);
                            return [
                                2
                            ];
                    }
                });
            }));
        });
    });
}); //# sourceMappingURL=BreakpointsView.test.js.map


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

}]);