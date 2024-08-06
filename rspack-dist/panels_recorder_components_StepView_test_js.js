"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_components_StepView_test_js"], {
"./panels/recorder/components/StepView.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/menus/menus.js */ "./ui/components/menus/menus.js");
/* harmony import */var _converters_converters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../converters/converters.js */ "./panels/recorder/converters/converters.js");
/* harmony import */var _models_models_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components.js */ "./panels/recorder/components/components.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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






(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('StepView', function() {
    var createViewFunctionSpy = function createViewFunctionSpy() {
        var viewFunction = sinon.spy();
        return {
            viewFunction: viewFunction,
            getViewInput: function getViewInput() {
                return viewFunction.lastCall.args[0];
            }
        };
    };
    var createStepView = function createStepView(viewFunction) {
        return _createStepView.apply(this, arguments);
    };
    var step = {
        type: _models_models_js__WEBPACK_IMPORTED_MODULE_4__.Schema.StepType.Scroll
    };
    var section = {
        title: 'test',
        steps: [
            step
        ],
        url: 'https://example.com'
    };
    function _createStepView() {
        _createStepView = _async_to_generator(function(viewFunction) {
            var opts, component, _opts_isEndOfGroup, _opts_isStartOfGroup, _opts_isFirstSection, _opts_isLastSection, _opts_stepIndex, _opts_sectionIndex, _opts_isRecording, _opts_isPlaying, _opts_hasBreakpoint, _opts_removable, _opts_isSelected;
            var _arguments = arguments;
            return _ts_generator(this, function(_state) {
                opts = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : {};
                component = new _components_js__WEBPACK_IMPORTED_MODULE_5__.StepView.StepView(viewFunction);
                component.data = {
                    step: opts.step !== undefined ? step : undefined,
                    section: opts.section !== undefined ? section : undefined,
                    state: "default" /* Components.StepView.State.Default */ ,
                    isEndOfGroup: (_opts_isEndOfGroup = opts.isEndOfGroup) !== null && _opts_isEndOfGroup !== void 0 ? _opts_isEndOfGroup : false,
                    isStartOfGroup: (_opts_isStartOfGroup = opts.isStartOfGroup) !== null && _opts_isStartOfGroup !== void 0 ? _opts_isStartOfGroup : false,
                    isFirstSection: (_opts_isFirstSection = opts.isFirstSection) !== null && _opts_isFirstSection !== void 0 ? _opts_isFirstSection : false,
                    isLastSection: (_opts_isLastSection = opts.isLastSection) !== null && _opts_isLastSection !== void 0 ? _opts_isLastSection : false,
                    stepIndex: (_opts_stepIndex = opts.stepIndex) !== null && _opts_stepIndex !== void 0 ? _opts_stepIndex : 0,
                    sectionIndex: (_opts_sectionIndex = opts.sectionIndex) !== null && _opts_sectionIndex !== void 0 ? _opts_sectionIndex : 0,
                    isRecording: (_opts_isRecording = opts.isRecording) !== null && _opts_isRecording !== void 0 ? _opts_isRecording : false,
                    isPlaying: (_opts_isPlaying = opts.isPlaying) !== null && _opts_isPlaying !== void 0 ? _opts_isPlaying : false,
                    hasBreakpoint: (_opts_hasBreakpoint = opts.hasBreakpoint) !== null && _opts_hasBreakpoint !== void 0 ? _opts_hasBreakpoint : false,
                    removable: (_opts_removable = opts.removable) !== null && _opts_removable !== void 0 ? _opts_removable : false,
                    builtInConverters: opts.builtInConverters || [
                        new _converters_converters_js__WEBPACK_IMPORTED_MODULE_3__.JSONConverter.JSONConverter('  ')
                    ],
                    extensionConverters: opts.extensionConverters || [],
                    isSelected: (_opts_isSelected = opts.isSelected) !== null && _opts_isSelected !== void 0 ? _opts_isSelected : false,
                    recorderSettings: new _models_models_js__WEBPACK_IMPORTED_MODULE_4__.RecorderSettings.RecorderSettings()
                };
                return [
                    2,
                    component
                ];
            });
        });
        return _createStepView.apply(this, arguments);
    }
    describe('Step and section actions menu', function() {
        it('should produce actions for a step', /*#__PURE__*/ _async_to_generator(function() {
            var _createViewFunctionSpy, viewFunction, getViewInput;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _createViewFunctionSpy = createViewFunctionSpy(), viewFunction = _createViewFunctionSpy.viewFunction, getViewInput = _createViewFunctionSpy.getViewInput;
                        return [
                            4,
                            createStepView(viewFunction, {
                                step: step
                            })
                        ];
                    case 1:
                        _state.sent();
                        assert.deepStrictEqual(getViewInput().actions, [
                            {
                                'id': 'add-step-before',
                                'label': 'Add step before',
                                'group': 'stepManagement',
                                'groupTitle': 'Manage steps'
                            },
                            {
                                'id': 'add-step-after',
                                'label': 'Add step after',
                                'group': 'stepManagement',
                                'groupTitle': 'Manage steps'
                            },
                            {
                                'id': 'add-breakpoint',
                                'label': 'Add breakpoint',
                                'group': 'breakPointManagement',
                                'groupTitle': 'Breakpoints'
                            },
                            {
                                'id': 'copy-step-as-json',
                                'label': 'JSON',
                                'group': 'copy',
                                'groupTitle': 'Copy as'
                            }
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should produce actions for a section', /*#__PURE__*/ _async_to_generator(function() {
            var _createViewFunctionSpy, viewFunction, getViewInput;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _createViewFunctionSpy = createViewFunctionSpy(), viewFunction = _createViewFunctionSpy.viewFunction, getViewInput = _createViewFunctionSpy.getViewInput;
                        return [
                            4,
                            createStepView(viewFunction, {
                                section: section
                            })
                        ];
                    case 1:
                        _state.sent();
                        assert.deepStrictEqual(getViewInput().actions, [
                            {
                                'id': 'add-step-after',
                                'label': 'Add step after',
                                'group': 'stepManagement',
                                'groupTitle': 'Manage steps'
                            }
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should dispatch "AddStep before" events on steps', /*#__PURE__*/ _async_to_generator(function() {
            var _createViewFunctionSpy, viewFunction, getViewInput, component, eventPromise, event;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _createViewFunctionSpy = createViewFunctionSpy(), viewFunction = _createViewFunctionSpy.viewFunction, getViewInput = _createViewFunctionSpy.getViewInput;
                        return [
                            4,
                            createStepView(viewFunction, {
                                step: step
                            })
                        ];
                    case 1:
                        component = _state.sent();
                        eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'addstep');
                        getViewInput().handleStepAction(new _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_2__.Menu.MenuItemSelectedEvent('add-step-before'));
                        return [
                            4,
                            eventPromise
                        ];
                    case 2:
                        event = _state.sent();
                        assert.strictEqual(event.position, 'before');
                        assert.deepStrictEqual(event.stepOrSection, step);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should dispatch "AddStep before" events on sections', /*#__PURE__*/ _async_to_generator(function() {
            var _createViewFunctionSpy, viewFunction, getViewInput, component, eventPromise, event;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _createViewFunctionSpy = createViewFunctionSpy(), viewFunction = _createViewFunctionSpy.viewFunction, getViewInput = _createViewFunctionSpy.getViewInput;
                        return [
                            4,
                            createStepView(viewFunction, {
                                section: section
                            })
                        ];
                    case 1:
                        component = _state.sent();
                        eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'addstep');
                        getViewInput().handleStepAction(new _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_2__.Menu.MenuItemSelectedEvent('add-step-before'));
                        return [
                            4,
                            eventPromise
                        ];
                    case 2:
                        event = _state.sent();
                        assert.strictEqual(event.position, 'before');
                        assert.deepStrictEqual(event.stepOrSection, section);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should dispatch "AddStep after" events on steps', /*#__PURE__*/ _async_to_generator(function() {
            var _createViewFunctionSpy, viewFunction, getViewInput, component, eventPromise, event;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _createViewFunctionSpy = createViewFunctionSpy(), viewFunction = _createViewFunctionSpy.viewFunction, getViewInput = _createViewFunctionSpy.getViewInput;
                        return [
                            4,
                            createStepView(viewFunction, {
                                step: step
                            })
                        ];
                    case 1:
                        component = _state.sent();
                        eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'addstep');
                        getViewInput().handleStepAction(new _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_2__.Menu.MenuItemSelectedEvent('add-step-after'));
                        return [
                            4,
                            eventPromise
                        ];
                    case 2:
                        event = _state.sent();
                        assert.strictEqual(event.position, 'after');
                        assert.deepStrictEqual(event.stepOrSection, step);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should dispatch "Remove steps" events on steps', /*#__PURE__*/ _async_to_generator(function() {
            var _createViewFunctionSpy, viewFunction, getViewInput, component, eventPromise, event;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _createViewFunctionSpy = createViewFunctionSpy(), viewFunction = _createViewFunctionSpy.viewFunction, getViewInput = _createViewFunctionSpy.getViewInput;
                        return [
                            4,
                            createStepView(viewFunction, {
                                step: step
                            })
                        ];
                    case 1:
                        component = _state.sent();
                        eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'removestep');
                        getViewInput().handleStepAction(new _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_2__.Menu.MenuItemSelectedEvent('remove-step'));
                        return [
                            4,
                            eventPromise
                        ];
                    case 2:
                        event = _state.sent();
                        assert.deepStrictEqual(event.step, step);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should dispatch "Add breakpoint" event on steps', /*#__PURE__*/ _async_to_generator(function() {
            var _createViewFunctionSpy, viewFunction, getViewInput, component, eventPromise, event;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _createViewFunctionSpy = createViewFunctionSpy(), viewFunction = _createViewFunctionSpy.viewFunction, getViewInput = _createViewFunctionSpy.getViewInput;
                        return [
                            4,
                            createStepView(viewFunction, {
                                step: step
                            })
                        ];
                    case 1:
                        component = _state.sent();
                        eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'addbreakpoint');
                        getViewInput().handleStepAction(new _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_2__.Menu.MenuItemSelectedEvent('add-breakpoint'));
                        return [
                            4,
                            eventPromise
                        ];
                    case 2:
                        event = _state.sent();
                        assert.deepStrictEqual(event.index, 0);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should dispatch "Remove breakpoint" event on steps', /*#__PURE__*/ _async_to_generator(function() {
            var _createViewFunctionSpy, viewFunction, getViewInput, component, eventPromise, event;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _createViewFunctionSpy = createViewFunctionSpy(), viewFunction = _createViewFunctionSpy.viewFunction, getViewInput = _createViewFunctionSpy.getViewInput;
                        return [
                            4,
                            createStepView(viewFunction, {
                                step: step
                            })
                        ];
                    case 1:
                        component = _state.sent();
                        eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'removebreakpoint');
                        getViewInput().handleStepAction(new _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_2__.Menu.MenuItemSelectedEvent('remove-breakpoint'));
                        return [
                            4,
                            eventPromise
                        ];
                    case 2:
                        event = _state.sent();
                        assert.deepStrictEqual(event.index, 0);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should dispatch copy step as JSON events', /*#__PURE__*/ _async_to_generator(function() {
            var _createViewFunctionSpy, viewFunction, getViewInput, component, eventPromise;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _createViewFunctionSpy = createViewFunctionSpy(), viewFunction = _createViewFunctionSpy.viewFunction, getViewInput = _createViewFunctionSpy.getViewInput;
                        return [
                            4,
                            createStepView(viewFunction, {
                                step: step
                            })
                        ];
                    case 1:
                        component = _state.sent();
                        eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'copystep');
                        getViewInput().handleStepAction(new _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_2__.Menu.MenuItemSelectedEvent('copy-step-as-json'));
                        return [
                            4,
                            eventPromise
                        ];
                    case 2:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('Breakpoint events', function() {
        it('should dispatch "Add breakpoint" event on breakpoint icon click if there is not a breakpoint on the step', /*#__PURE__*/ _async_to_generator(function() {
            var _createViewFunctionSpy, viewFunction, getViewInput, component, eventPromise, event;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _createViewFunctionSpy = createViewFunctionSpy(), viewFunction = _createViewFunctionSpy.viewFunction, getViewInput = _createViewFunctionSpy.getViewInput;
                        return [
                            4,
                            createStepView(viewFunction, {
                                step: step
                            })
                        ];
                    case 1:
                        component = _state.sent();
                        eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'addbreakpoint');
                        getViewInput().onBreakpointClick();
                        return [
                            4,
                            eventPromise
                        ];
                    case 2:
                        event = _state.sent();
                        assert.deepStrictEqual(event.index, 0);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should dispatch "Remove breakpoint" event on breakpoint icon click if there already is a breakpoint on the step', /*#__PURE__*/ _async_to_generator(function() {
            var _createViewFunctionSpy, viewFunction, getViewInput, component, eventPromise, event;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _createViewFunctionSpy = createViewFunctionSpy(), viewFunction = _createViewFunctionSpy.viewFunction, getViewInput = _createViewFunctionSpy.getViewInput;
                        return [
                            4,
                            createStepView(viewFunction, {
                                hasBreakpoint: true,
                                step: step
                            })
                        ];
                    case 1:
                        component = _state.sent();
                        eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'removebreakpoint');
                        getViewInput().onBreakpointClick();
                        return [
                            4,
                            eventPromise
                        ];
                    case 2:
                        event = _state.sent();
                        assert.deepStrictEqual(event.index, 0);
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=StepView.test.js.map


}),

}]);