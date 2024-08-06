"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_components_RecordingView_test_js"], {
"./panels/recorder/components/RecordingView.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/ExpectStubCall.js */ "./testing/ExpectStubCall.js");
/* harmony import */var _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/menus/menus.js */ "./ui/components/menus/menus.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _converters_converters_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../converters/converters.js */ "./panels/recorder/converters/converters.js");
/* harmony import */var _models_models_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components.js */ "./panels/recorder/components/components.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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









var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__.RenderCoordinator.RenderCoordinator.instance();
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithEnvironment)('RecordingView', function() {
    var renderView = function renderView() {
        return _renderView.apply(this, arguments);
    };
    var waitForTextEditor = function waitForTextEditor(view) {
        return _waitForTextEditor.apply(this, arguments);
    };
    var hoverOverScrollStep = function hoverOverScrollStep(view) {
        var _view_shadowRoot;
        var steps = ((_view_shadowRoot = view.shadowRoot) === null || _view_shadowRoot === void 0 ? void 0 : _view_shadowRoot.querySelectorAll('devtools-step-view')) || [];
        assert.lengthOf(steps, 2);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchMouseOverEvent)(steps[1]);
    };
    var clickStep = function clickStep(view) {
        var _view_shadowRoot;
        var steps = ((_view_shadowRoot = view.shadowRoot) === null || _view_shadowRoot === void 0 ? void 0 : _view_shadowRoot.querySelectorAll('devtools-step-view')) || [];
        assert.lengthOf(steps, 2);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(steps[1]);
    };
    var dispatchOnStep = function dispatchOnStep(view, customEvent) {
        var _view_shadowRoot;
        var steps = ((_view_shadowRoot = view.shadowRoot) === null || _view_shadowRoot === void 0 ? void 0 : _view_shadowRoot.querySelectorAll('devtools-step-view')) || [];
        assert.lengthOf(steps, 2);
        steps[1].dispatchEvent(customEvent);
    };
    var clickShowCode = function clickShowCode(view) {
        var _view_shadowRoot;
        var button = (_view_shadowRoot = view.shadowRoot) === null || _view_shadowRoot === void 0 ? void 0 : _view_shadowRoot.querySelector('.show-code');
        assert.ok(button);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(button);
    };
    var clickHideCode = function clickHideCode(view) {
        var _view_shadowRoot;
        var button = (_view_shadowRoot = view.shadowRoot) === null || _view_shadowRoot === void 0 ? void 0 : _view_shadowRoot.querySelector('[title="Hide code"]');
        assert.ok(button);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(button);
    };
    var waitForSplitViewToDissappear = function waitForSplitViewToDissappear(view) {
        return _waitForSplitViewToDissappear.apply(this, arguments);
    };
    var changeCodeView = function changeCodeView(view) {
        return _changeCodeView.apply(this, arguments);
    };
    (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.setupActionRegistry)();
    var step = {
        type: _models_models_js__WEBPACK_IMPORTED_MODULE_7__.Schema.StepType.Scroll
    };
    var section = {
        title: 'test',
        steps: [
            step
        ],
        url: 'https://example.com'
    };
    var userFlow = {
        title: 'test',
        steps: [
            step
        ]
    };
    var recorderSettingsMock = {
        preferredCopyFormat: "json" /* Models.ConverterIds.ConverterIds.JSON */ 
    };
    function _renderView() {
        _renderView = _async_to_generator(function() {
            var view;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        view = new _components_js__WEBPACK_IMPORTED_MODULE_8__.RecordingView.RecordingView();
                        recorderSettingsMock.preferredCopyFormat = "json" /* Models.ConverterIds.ConverterIds.JSON */ ;
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(view);
                        view.data = {
                            replayState: {
                                isPlaying: false,
                                isPausedOnBreakpoint: false
                            },
                            isRecording: false,
                            recordingTogglingInProgress: false,
                            recording: userFlow,
                            currentStep: undefined,
                            currentError: undefined,
                            sections: [
                                section
                            ],
                            settings: undefined,
                            recorderSettings: recorderSettingsMock,
                            lastReplayResult: undefined,
                            replayAllowed: true,
                            breakpointIndexes: new Set(),
                            builtInConverters: [
                                new _converters_converters_js__WEBPACK_IMPORTED_MODULE_6__.JSONConverter.JSONConverter('  '),
                                new _converters_converters_js__WEBPACK_IMPORTED_MODULE_6__.PuppeteerReplayConverter.PuppeteerReplayConverter('  ')
                            ],
                            extensionConverters: [],
                            replayExtensions: []
                        };
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2,
                            view
                        ];
                }
            });
        });
        return _renderView.apply(this, arguments);
    }
    function _waitForTextEditor() {
        _waitForTextEditor = _async_to_generator(function(view) {
            var _view_shadowRoot, textEditor;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getEventPromise)(view, 'code-generated')
                        ];
                    case 1:
                        _state.sent();
                        textEditor = (_view_shadowRoot = view.shadowRoot) === null || _view_shadowRoot === void 0 ? void 0 : _view_shadowRoot.querySelector('devtools-text-editor');
                        assert.isNotNull(textEditor);
                        return [
                            2,
                            textEditor
                        ];
                }
            });
        });
        return _waitForTextEditor.apply(this, arguments);
    }
    function _waitForSplitViewToDissappear() {
        _waitForSplitViewToDissappear = _async_to_generator(function(view) {
            var _view_shadowRoot, splitView;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getEventPromise)(view, 'code-generated')
                        ];
                    case 1:
                        _state.sent();
                        splitView = (_view_shadowRoot = view.shadowRoot) === null || _view_shadowRoot === void 0 ? void 0 : _view_shadowRoot.querySelector('devtools-split-view');
                        assert.isNull(splitView);
                        return [
                            2
                        ];
                }
            });
        });
        return _waitForSplitViewToDissappear.apply(this, arguments);
    }
    function _changeCodeView() {
        _changeCodeView = _async_to_generator(function(view) {
            var _view_shadowRoot, menu, event;
            return _ts_generator(this, function(_state) {
                menu = (_view_shadowRoot = view.shadowRoot) === null || _view_shadowRoot === void 0 ? void 0 : _view_shadowRoot.querySelector('devtools-select-menu');
                assert.ok(menu);
                event = new _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__.SelectMenu.SelectMenuItemSelectedEvent("@puppeteer/replay" /* Models.ConverterIds.ConverterIds.Replay */ );
                menu.dispatchEvent(event);
                return [
                    2
                ];
            });
        });
        return _changeCodeView.apply(this, arguments);
    }
    it('should show code and highlight on hover', /*#__PURE__*/ _async_to_generator(function() {
        var view, textEditor;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderView()
                    ];
                case 1:
                    view = _state.sent();
                    clickShowCode(view);
                    return [
                        4,
                        waitForTextEditor(view)
                    ];
                case 2:
                    textEditor = _state.sent();
                    assert.deepStrictEqual(textEditor.editor.state.selection.toJSON(), {
                        ranges: [
                            {
                                anchor: 0,
                                head: 0
                            }
                        ],
                        main: 0
                    });
                    hoverOverScrollStep(view);
                    assert.deepStrictEqual(textEditor.editor.state.selection.toJSON(), {
                        ranges: [
                            {
                                anchor: 34,
                                head: 68
                            }
                        ],
                        main: 0
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    it('should close code', /*#__PURE__*/ _async_to_generator(function() {
        var view;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderView()
                    ];
                case 1:
                    view = _state.sent();
                    clickShowCode(view);
                    // Click is handled async, therefore, waiting for the text editor.
                    return [
                        4,
                        waitForTextEditor(view)
                    ];
                case 2:
                    _state.sent();
                    clickHideCode(view);
                    // Click is handled async, therefore, waiting for split view to be removed.
                    return [
                        4,
                        waitForSplitViewToDissappear(view)
                    ];
                case 3:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('should copy the recording to clipboard via copy event', /*#__PURE__*/ _async_to_generator(function() {
        var clipboardData, copyText, event, _ref, text;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderView()
                    ];
                case 1:
                    _state.sent();
                    clipboardData = new DataTransfer();
                    copyText = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance, 'copyText'));
                    event = new ClipboardEvent('copy', {
                        clipboardData: clipboardData,
                        bubbles: true
                    });
                    document.body.dispatchEvent(event);
                    return [
                        4,
                        copyText
                    ];
                case 2:
                    _ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        1
                    ]), text = _ref[0];
                    assert.strictEqual(JSON.stringify(userFlow, null, 2) + '\n', text);
                    return [
                        2
                    ];
            }
        });
    }));
    it('should copy a step to clipboard via copy event', /*#__PURE__*/ _async_to_generator(function() {
        var view, clipboardData, isCalled, copyText, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderView()
                    ];
                case 1:
                    view = _state.sent();
                    clickStep(view);
                    clipboardData = new DataTransfer();
                    isCalled = sinon.promise();
                    copyText = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance, 'copyText').callsFake(function() {
                        void isCalled.resolve(true);
                    });
                    event = new ClipboardEvent('copy', {
                        clipboardData: clipboardData,
                        bubbles: true
                    });
                    document.body.dispatchEvent(event);
                    return [
                        4,
                        isCalled
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(copyText.calledWith(JSON.stringify(step, null, 2) + '\n'));
                    return [
                        2
                    ];
            }
        });
    }));
    it('should copy a step to clipboard via custom event', /*#__PURE__*/ _async_to_generator(function() {
        var view, isCalled, copyText, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderView()
                    ];
                case 1:
                    view = _state.sent();
                    isCalled = sinon.promise();
                    copyText = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance, 'copyText').callsFake(function() {
                        void isCalled.resolve(true);
                    });
                    event = new _components_js__WEBPACK_IMPORTED_MODULE_8__.StepView.CopyStepEvent(step);
                    dispatchOnStep(view, event);
                    return [
                        4,
                        isCalled
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(copyText.calledWith(JSON.stringify(step, null, 2) + '\n'));
                    return [
                        2
                    ];
            }
        });
    }));
    it('should show code and change preferred copy method', /*#__PURE__*/ _async_to_generator(function() {
        var view;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderView()
                    ];
                case 1:
                    view = _state.sent();
                    clickShowCode(view);
                    return [
                        4,
                        waitForTextEditor(view)
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        changeCodeView(view)
                    ];
                case 3:
                    _state.sent();
                    return [
                        4,
                        waitForTextEditor(view)
                    ];
                case 4:
                    _state.sent();
                    assert.notEqual(recorderSettingsMock.preferredCopyFormat, "json" /* Models.ConverterIds.ConverterIds.JSON */ );
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=RecordingView.test.js.map


}),
"./testing/ExpectStubCall.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  expectCall: function() { return expectCall; },
  expectCalled: function() { return expectCalled; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
function expectCall(stub) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return new Promise(function(resolve) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        stub.callsFake(function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            var _options_callCount;
            if (stub.callCount < ((_options_callCount = options.callCount) !== null && _options_callCount !== void 0 ? _options_callCount : 1)) {
                return undefined;
            }
            resolve(args);
            return options.fakeFn ? options.fakeFn.apply(this, args) : undefined;
        });
    });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expectCalled(stub) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _options_callCount;
    var remainingCalls = ((_options_callCount = options.callCount) !== null && _options_callCount !== void 0 ? _options_callCount : 1) - stub.callCount;
    if (remainingCalls <= 0) {
        return Promise.resolve(stub.lastCall.args);
    }
    return expectCall(stub, _object_spread_props(_object_spread({}, options), {
        callCount: remainingCalls
    }));
} //# sourceMappingURL=ExpectStubCall.js.map


}),

}]);