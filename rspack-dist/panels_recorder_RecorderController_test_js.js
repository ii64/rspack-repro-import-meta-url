"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_RecorderController_test_js"], {
"./panels/recorder/RecorderController.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _components_components_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/components.js */ "./panels/recorder/components/components.js");
/* harmony import */var _models_models_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/models.js */ "./panels/recorder/models/models.js");
/* harmony import */var _recorder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recorder.js */ "./panels/recorder/recorder.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/* eslint-disable rulesdir/es_modules_import */ function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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





var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__.RenderCoordinator.RenderCoordinator.instance();
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('RecorderController', function() {
    var makeRecording = function makeRecording() {
        var step = {
            type: _models_models_js__WEBPACK_IMPORTED_MODULE_3__.Schema.StepType.Navigate,
            url: 'https://example.com'
        };
        var recording = {
            storageName: 'test',
            flow: {
                title: 'test',
                steps: [
                    step
                ]
            }
        };
        return recording;
    };
    var setupController = function setupController(recording) {
        return _setupController.apply(this, arguments);
    };
    (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupActionRegistry)();
    function _setupController() {
        _setupController = _async_to_generator(function(recording) {
            var controller;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        controller = new _recorder_js__WEBPACK_IMPORTED_MODULE_4__.RecorderController.RecorderController();
                        controller.setCurrentPageForTesting("RecordingPage" /* RecorderController.Pages.RecordingPage */ );
                        controller.setCurrentRecordingForTesting(recording);
                        controller.connectedCallback();
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2,
                            controller
                        ];
                }
            });
        });
        return _setupController.apply(this, arguments);
    }
    describe('Navigation', function() {
        it('should return back to the previous page on recordingcancelled event', /*#__PURE__*/ _async_to_generator(function() {
            var _controller_shadowRoot, previousPage, controller, createRecordingView;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        previousPage = "AllRecordingsPage" /* RecorderController.Pages.AllRecordingsPage */ ;
                        controller = new _recorder_js__WEBPACK_IMPORTED_MODULE_4__.RecorderController.RecorderController();
                        controller.setCurrentPageForTesting(previousPage);
                        controller.setCurrentPageForTesting("CreateRecordingPage" /* RecorderController.Pages.CreateRecordingPage */ );
                        controller.connectedCallback();
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        createRecordingView = (_controller_shadowRoot = controller.shadowRoot) === null || _controller_shadowRoot === void 0 ? void 0 : _controller_shadowRoot.querySelector('devtools-create-recording-view');
                        assert.ok(createRecordingView);
                        createRecordingView === null || createRecordingView === void 0 ? void 0 : createRecordingView.dispatchEvent(new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.CreateRecordingView.RecordingCancelledEvent());
                        assert.strictEqual(controller.getCurrentPageForTesting(), previousPage);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('StepView', function() {
        var dispatchRecordingViewEvent = function dispatchRecordingViewEvent(controller, event) {
            return _dispatchRecordingViewEvent.apply(this, arguments);
        };
        function _dispatchRecordingViewEvent() {
            _dispatchRecordingViewEvent = _async_to_generator(function(controller, event) {
                var _controller_shadowRoot, recordingView;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            recordingView = (_controller_shadowRoot = controller.shadowRoot) === null || _controller_shadowRoot === void 0 ? void 0 : _controller_shadowRoot.querySelector('devtools-recording-view');
                            assert.ok(recordingView);
                            recordingView === null || recordingView === void 0 ? void 0 : recordingView.dispatchEvent(event);
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            });
            return _dispatchRecordingViewEvent.apply(this, arguments);
        }
        beforeEach(function() {
            _models_models_js__WEBPACK_IMPORTED_MODULE_3__.RecordingStorage.RecordingStorage.instance().clearForTest();
        });
        after(function() {
            _models_models_js__WEBPACK_IMPORTED_MODULE_3__.RecordingStorage.RecordingStorage.instance().clearForTest();
        });
        it('should add a new step after a step', /*#__PURE__*/ _async_to_generator(function() {
            var recording, controller, flow;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        recording = makeRecording();
                        return [
                            4,
                            setupController(recording)
                        ];
                    case 1:
                        controller = _state.sent();
                        return [
                            4,
                            dispatchRecordingViewEvent(controller, new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.StepView.AddStep(recording.flow.steps[0], "after" /* Components.StepView.AddStepPosition.AFTER */ ))
                        ];
                    case 2:
                        _state.sent();
                        flow = controller.getUserFlow();
                        assert.deepStrictEqual(flow, {
                            title: 'test',
                            steps: [
                                {
                                    type: _models_models_js__WEBPACK_IMPORTED_MODULE_3__.Schema.StepType.Navigate,
                                    url: 'https://example.com'
                                },
                                {
                                    type: _models_models_js__WEBPACK_IMPORTED_MODULE_3__.Schema.StepType.WaitForElement,
                                    selectors: [
                                        'body'
                                    ]
                                }
                            ]
                        });
                        return [
                            2
                        ];
                }
            });
        }));
        it('should add a new step after a section', /*#__PURE__*/ _async_to_generator(function() {
            var recording, controller, sections, flow;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        recording = makeRecording();
                        return [
                            4,
                            setupController(recording)
                        ];
                    case 1:
                        controller = _state.sent();
                        sections = controller.getSectionsForTesting();
                        if (!sections) {
                            throw new Error('Controller is missing sections');
                        }
                        assert.lengthOf(sections, 1);
                        return [
                            4,
                            dispatchRecordingViewEvent(controller, new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.StepView.AddStep(sections[0], "after" /* Components.StepView.AddStepPosition.AFTER */ ))
                        ];
                    case 2:
                        _state.sent();
                        flow = controller.getUserFlow();
                        assert.deepStrictEqual(flow, {
                            title: 'test',
                            steps: [
                                {
                                    type: _models_models_js__WEBPACK_IMPORTED_MODULE_3__.Schema.StepType.Navigate,
                                    url: 'https://example.com'
                                },
                                {
                                    type: _models_models_js__WEBPACK_IMPORTED_MODULE_3__.Schema.StepType.WaitForElement,
                                    selectors: [
                                        'body'
                                    ]
                                }
                            ]
                        });
                        return [
                            2
                        ];
                }
            });
        }));
        it('should add a new step before a step', /*#__PURE__*/ _async_to_generator(function() {
            var recording, controller, flow;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        recording = makeRecording();
                        return [
                            4,
                            setupController(recording)
                        ];
                    case 1:
                        controller = _state.sent();
                        return [
                            4,
                            dispatchRecordingViewEvent(controller, new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.StepView.AddStep(recording.flow.steps[0], "before" /* Components.StepView.AddStepPosition.BEFORE */ ))
                        ];
                    case 2:
                        _state.sent();
                        flow = controller.getUserFlow();
                        assert.deepStrictEqual(flow, {
                            title: 'test',
                            steps: [
                                {
                                    type: _models_models_js__WEBPACK_IMPORTED_MODULE_3__.Schema.StepType.WaitForElement,
                                    selectors: [
                                        'body'
                                    ]
                                },
                                {
                                    type: _models_models_js__WEBPACK_IMPORTED_MODULE_3__.Schema.StepType.Navigate,
                                    url: 'https://example.com'
                                }
                            ]
                        });
                        return [
                            2
                        ];
                }
            });
        }));
        it('should delete a step', /*#__PURE__*/ _async_to_generator(function() {
            var recording, controller, flow;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        recording = makeRecording();
                        return [
                            4,
                            setupController(recording)
                        ];
                    case 1:
                        controller = _state.sent();
                        return [
                            4,
                            dispatchRecordingViewEvent(controller, new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.StepView.RemoveStep(recording.flow.steps[0]))
                        ];
                    case 2:
                        _state.sent();
                        flow = controller.getUserFlow();
                        assert.deepStrictEqual(flow, {
                            title: 'test',
                            steps: []
                        });
                        return [
                            2
                        ];
                }
            });
        }));
        it('should adding a new step before a step with a breakpoint update the breakpoint indexes correctly', /*#__PURE__*/ _async_to_generator(function() {
            var recording, controller, stepIndex;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        recording = makeRecording();
                        return [
                            4,
                            setupController(recording)
                        ];
                    case 1:
                        controller = _state.sent();
                        stepIndex = 3;
                        return [
                            4,
                            dispatchRecordingViewEvent(controller, new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.StepView.AddBreakpointEvent(stepIndex))
                        ];
                    case 2:
                        _state.sent();
                        assert.deepEqual(controller.getStepBreakpointIndexesForTesting(), [
                            stepIndex
                        ]);
                        return [
                            4,
                            dispatchRecordingViewEvent(controller, new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.StepView.AddStep(recording.flow.steps[0], "before" /* Components.StepView.AddStepPosition.BEFORE */ ))
                        ];
                    case 3:
                        _state.sent();
                        // Breakpoint index moves to the next index
                        assert.deepEqual(controller.getStepBreakpointIndexesForTesting(), [
                            stepIndex + 1
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should removing a step before a step with a breakpoint update the breakpoint indexes correctly', /*#__PURE__*/ _async_to_generator(function() {
            var recording, controller, stepIndex;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        recording = makeRecording();
                        return [
                            4,
                            setupController(recording)
                        ];
                    case 1:
                        controller = _state.sent();
                        stepIndex = 3;
                        return [
                            4,
                            dispatchRecordingViewEvent(controller, new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.StepView.AddBreakpointEvent(stepIndex))
                        ];
                    case 2:
                        _state.sent();
                        assert.deepEqual(controller.getStepBreakpointIndexesForTesting(), [
                            stepIndex
                        ]);
                        return [
                            4,
                            dispatchRecordingViewEvent(controller, new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.StepView.RemoveStep(recording.flow.steps[0]))
                        ];
                    case 3:
                        _state.sent();
                        // Breakpoint index moves to the previous index
                        assert.deepEqual(controller.getStepBreakpointIndexesForTesting(), [
                            stepIndex - 1
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should removing a step with a breakpoint remove the breakpoint index as well', /*#__PURE__*/ _async_to_generator(function() {
            var recording, controller, stepIndex;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        recording = makeRecording();
                        return [
                            4,
                            setupController(recording)
                        ];
                    case 1:
                        controller = _state.sent();
                        stepIndex = 0;
                        return [
                            4,
                            dispatchRecordingViewEvent(controller, new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.StepView.AddBreakpointEvent(stepIndex))
                        ];
                    case 2:
                        _state.sent();
                        assert.deepEqual(controller.getStepBreakpointIndexesForTesting(), [
                            stepIndex
                        ]);
                        return [
                            4,
                            dispatchRecordingViewEvent(controller, new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.StepView.RemoveStep(recording.flow.steps[stepIndex]))
                        ];
                    case 3:
                        _state.sent();
                        // Breakpoint index is removed
                        assert.deepEqual(controller.getStepBreakpointIndexesForTesting(), []);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should "add breakpoint" event add a breakpoint', /*#__PURE__*/ _async_to_generator(function() {
            var recording, controller, stepIndex;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        recording = makeRecording();
                        return [
                            4,
                            setupController(recording)
                        ];
                    case 1:
                        controller = _state.sent();
                        stepIndex = 1;
                        assert.deepEqual(controller.getStepBreakpointIndexesForTesting(), []);
                        return [
                            4,
                            dispatchRecordingViewEvent(controller, new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.StepView.AddBreakpointEvent(stepIndex))
                        ];
                    case 2:
                        _state.sent();
                        assert.deepEqual(controller.getStepBreakpointIndexesForTesting(), [
                            stepIndex
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should "remove breakpoint" event remove a breakpoint', /*#__PURE__*/ _async_to_generator(function() {
            var recording, controller, stepIndex;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        recording = makeRecording();
                        return [
                            4,
                            setupController(recording)
                        ];
                    case 1:
                        controller = _state.sent();
                        stepIndex = 1;
                        return [
                            4,
                            dispatchRecordingViewEvent(controller, new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.StepView.AddBreakpointEvent(stepIndex))
                        ];
                    case 2:
                        _state.sent();
                        assert.deepEqual(controller.getStepBreakpointIndexesForTesting(), [
                            stepIndex
                        ]);
                        return [
                            4,
                            dispatchRecordingViewEvent(controller, new _components_components_js__WEBPACK_IMPORTED_MODULE_2__.StepView.RemoveBreakpointEvent(stepIndex))
                        ];
                    case 3:
                        _state.sent();
                        assert.deepEqual(controller.getStepBreakpointIndexesForTesting(), []);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('Create new recording action', function() {
        it('should execute action', /*#__PURE__*/ _async_to_generator(function() {
            var recording, controller;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        recording = makeRecording();
                        return [
                            4,
                            setupController(recording)
                        ];
                    case 1:
                        controller = _state.sent();
                        return [
                            4,
                            controller.handleActions("chrome-recorder.create-recording" /* RecorderActions.CreateRecording */ )
                        ];
                    case 2:
                        _state.sent();
                        assert.strictEqual(controller.getCurrentPageForTesting(), "CreateRecordingPage" /* RecorderController.Pages.CreateRecordingPage */ );
                        return [
                            2
                        ];
                }
            });
        }));
        it('should not execute action while recording', /*#__PURE__*/ _async_to_generator(function() {
            var recording, controller;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        recording = makeRecording();
                        return [
                            4,
                            setupController(recording)
                        ];
                    case 1:
                        controller = _state.sent();
                        controller.setIsRecordingStateForTesting(true);
                        return [
                            4,
                            controller.handleActions("chrome-recorder.create-recording" /* RecorderActions.CreateRecording */ )
                        ];
                    case 2:
                        _state.sent();
                        assert.strictEqual(controller.getCurrentPageForTesting(), "RecordingPage" /* RecorderController.Pages.RecordingPage */ );
                        return [
                            2
                        ];
                }
            });
        }));
        it('should not execute action while replaying', /*#__PURE__*/ _async_to_generator(function() {
            var recording, controller;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        recording = makeRecording();
                        return [
                            4,
                            setupController(recording)
                        ];
                    case 1:
                        controller = _state.sent();
                        controller.setRecordingStateForTesting({
                            isPlaying: true,
                            isPausedOnBreakpoint: false
                        });
                        return [
                            4,
                            controller.handleActions("chrome-recorder.create-recording" /* RecorderActions.CreateRecording */ )
                        ];
                    case 2:
                        _state.sent();
                        assert.strictEqual(controller.getCurrentPageForTesting(), "RecordingPage" /* RecorderController.Pages.RecordingPage */ );
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('Action is possible', function() {
        it('should return true for create action when not replaying or recording', /*#__PURE__*/ _async_to_generator(function() {
            var recording, controller;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        recording = makeRecording();
                        return [
                            4,
                            setupController(recording)
                        ];
                    case 1:
                        controller = _state.sent();
                        assert.isTrue(controller.isActionPossible("chrome-recorder.create-recording" /* RecorderActions.CreateRecording */ ));
                        return [
                            2
                        ];
                }
            });
        }));
        it('should return false for create action when recording', /*#__PURE__*/ _async_to_generator(function() {
            var recording, controller;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        recording = makeRecording();
                        return [
                            4,
                            setupController(recording)
                        ];
                    case 1:
                        controller = _state.sent();
                        controller.setRecordingStateForTesting({
                            isPlaying: true,
                            isPausedOnBreakpoint: false
                        });
                        assert.isFalse(controller.isActionPossible("chrome-recorder.create-recording" /* RecorderActions.CreateRecording */ ));
                        return [
                            2
                        ];
                }
            });
        }));
        it('should return false for create action when replaying', /*#__PURE__*/ _async_to_generator(function() {
            var recording, controller;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        recording = makeRecording();
                        return [
                            4,
                            setupController(recording)
                        ];
                    case 1:
                        controller = _state.sent();
                        controller.setIsRecordingStateForTesting(true);
                        assert.isFalse(controller.isActionPossible("chrome-recorder.create-recording" /* RecorderActions.CreateRecording */ ));
                        return [
                            2
                        ];
                }
            });
        }));
        it('should return correct value for start/stop action', /*#__PURE__*/ _async_to_generator(function() {
            var recording, controller;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        recording = makeRecording();
                        return [
                            4,
                            setupController(recording)
                        ];
                    case 1:
                        controller = _state.sent();
                        assert.isTrue(controller.isActionPossible("chrome-recorder.start-recording" /* RecorderActions.StartRecording */ ));
                        controller.setRecordingStateForTesting({
                            isPlaying: true,
                            isPausedOnBreakpoint: false
                        });
                        assert.isFalse(controller.isActionPossible("chrome-recorder.start-recording" /* RecorderActions.StartRecording */ ));
                        return [
                            2
                        ];
                }
            });
        }));
        it('should return true for replay action when on the recording page', /*#__PURE__*/ _async_to_generator(function() {
            var recording, controller;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        recording = makeRecording();
                        return [
                            4,
                            setupController(recording)
                        ];
                    case 1:
                        controller = _state.sent();
                        controller.setCurrentPageForTesting("RecordingPage" /* RecorderController.Pages.RecordingPage */ );
                        assert.isTrue(controller.isActionPossible("chrome-recorder.replay-recording" /* RecorderActions.ReplayRecording */ ));
                        return [
                            2
                        ];
                }
            });
        }));
        it('should return false for replay action when not on the recording page', /*#__PURE__*/ _async_to_generator(function() {
            var recording, controller;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        recording = makeRecording();
                        return [
                            4,
                            setupController(recording)
                        ];
                    case 1:
                        controller = _state.sent();
                        controller.setCurrentPageForTesting("AllRecordingsPage" /* RecorderController.Pages.AllRecordingsPage */ );
                        assert.isFalse(controller.isActionPossible("chrome-recorder.replay-recording" /* RecorderActions.ReplayRecording */ ));
                        controller.setCurrentPageForTesting("CreateRecordingPage" /* RecorderController.Pages.CreateRecordingPage */ );
                        assert.isFalse(controller.isActionPossible("chrome-recorder.replay-recording" /* RecorderActions.ReplayRecording */ ));
                        controller.setCurrentPageForTesting("StartPage" /* RecorderController.Pages.StartPage */ );
                        assert.isFalse(controller.isActionPossible("chrome-recorder.replay-recording" /* RecorderActions.ReplayRecording */ ));
                        controller.setRecordingStateForTesting({
                            isPlaying: true,
                            isPausedOnBreakpoint: false
                        });
                        controller.setCurrentPageForTesting("RecordingPage" /* RecorderController.Pages.RecordingPage */ );
                        assert.isFalse(controller.isActionPossible("chrome-recorder.replay-recording" /* RecorderActions.ReplayRecording */ ));
                        return [
                            2
                        ];
                }
            });
        }));
        it('should true for toggle when on the recording page', /*#__PURE__*/ _async_to_generator(function() {
            var recording, controller;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        recording = makeRecording();
                        return [
                            4,
                            setupController(recording)
                        ];
                    case 1:
                        controller = _state.sent();
                        controller.setCurrentPageForTesting("RecordingPage" /* RecorderController.Pages.RecordingPage */ );
                        assert.isTrue(controller.isActionPossible("chrome-recorder.toggle-code-view" /* RecorderActions.ToggleCodeView */ ));
                        return [
                            2
                        ];
                }
            });
        }));
        it('should false for toggle when on the recording page', /*#__PURE__*/ _async_to_generator(function() {
            var recording, controller;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        recording = makeRecording();
                        return [
                            4,
                            setupController(recording)
                        ];
                    case 1:
                        controller = _state.sent();
                        controller.setCurrentPageForTesting("AllRecordingsPage" /* RecorderController.Pages.AllRecordingsPage */ );
                        assert.isFalse(controller.isActionPossible("chrome-recorder.toggle-code-view" /* RecorderActions.ToggleCodeView */ ));
                        controller.setCurrentPageForTesting("StartPage" /* RecorderController.Pages.StartPage */ );
                        assert.isFalse(controller.isActionPossible("chrome-recorder.toggle-code-view" /* RecorderActions.ToggleCodeView */ ));
                        controller.setCurrentPageForTesting("AllRecordingsPage" /* RecorderController.Pages.AllRecordingsPage */ );
                        assert.isFalse(controller.isActionPossible("chrome-recorder.toggle-code-view" /* RecorderActions.ToggleCodeView */ ));
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=RecorderController.test.js.map


}),
"./panels/recorder/recorder.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RecorderController: function() { return /* reexport module object */ _RecorderController_js__WEBPACK_IMPORTED_MODULE_0__; },
  RecorderEvents: function() { return /* reexport module object */ _RecorderEvents_js__WEBPACK_IMPORTED_MODULE_1__; },
  RecorderPanel: function() { return /* reexport module object */ _RecorderPanel_js__WEBPACK_IMPORTED_MODULE_2__; }
});
/* harmony import */var _RecorderController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecorderController.js */ "./panels/recorder/RecorderController.js");
/* harmony import */var _RecorderEvents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecorderEvents.js */ "./panels/recorder/RecorderEvents.js");
/* harmony import */var _RecorderPanel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecorderPanel.js */ "./panels/recorder/RecorderPanel.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



 //# sourceMappingURL=recorder.js.map


}),

}]);