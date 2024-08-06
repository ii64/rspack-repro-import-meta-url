"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_models_RecordingPlayer_test_js"], {
"./panels/recorder/models/RecordingPlayer.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../testing/RecorderHelpers.js */ "./panels/recorder/testing/RecorderHelpers.js");
/* harmony import */var _models_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models.js */ "./panels/recorder/models/models.js");
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


describe('RecordingPlayer', function() {
    var recordingPlayer;
    beforeEach(function() {
        (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.installMocksForTargetManager)();
        (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.installMocksForRecordingPlayer)();
    });
    afterEach(function() {
        recordingPlayer.disposeForTesting();
    });
    it('should emit `Step` event before executing in every step', /*#__PURE__*/ _async_to_generator(function() {
        var stepEventHandlerStub;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    recordingPlayer = new _models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingPlayer.RecordingPlayer({
                        title: 'test',
                        steps: [
                            (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)(),
                            (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)(),
                            (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)()
                        ]
                    }, {
                        speed: "normal" /* Models.RecordingPlayer.PlayRecordingSpeed.Normal */ ,
                        breakpointIndexes: new Set()
                    });
                    stepEventHandlerStub = sinon.stub().callsFake(function() {
                        var _ref = _async_to_generator(function(param) {
                            var resolve;
                            return _ts_generator(this, function(_state) {
                                resolve = param.data.resolve;
                                resolve();
                                return [
                                    2
                                ];
                            });
                        });
                        return function(_) {
                            return _ref.apply(this, arguments);
                        };
                    }());
                    recordingPlayer.addEventListener("Step" /* Models.RecordingPlayer.Events.Step */ , stepEventHandlerStub);
                    return [
                        4,
                        recordingPlayer.play()
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(stepEventHandlerStub.getCalls().length === 3);
                    return [
                        2
                    ];
            }
        });
    }));
    describe('Step by step execution', function() {
        it('should stop execution before executing a step that has a breakpoint', /*#__PURE__*/ _async_to_generator(function() {
            var stepEventHandlerStub, stopEventPromise;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        recordingPlayer = new _models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingPlayer.RecordingPlayer({
                            title: 'test',
                            steps: [
                                (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)(),
                                (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)(),
                                (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)()
                            ]
                        }, {
                            speed: "normal" /* Models.RecordingPlayer.PlayRecordingSpeed.Normal */ ,
                            breakpointIndexes: new Set([
                                1
                            ])
                        });
                        stepEventHandlerStub = sinon.stub().callsFake(function() {
                            var _ref = _async_to_generator(function(param) {
                                var resolve;
                                return _ts_generator(this, function(_state) {
                                    resolve = param.data.resolve;
                                    resolve();
                                    return [
                                        2
                                    ];
                                });
                            });
                            return function(_) {
                                return _ref.apply(this, arguments);
                            };
                        }());
                        stopEventPromise = new Promise(function(resolve) {
                            recordingPlayer.addEventListener("Stop" /* Models.RecordingPlayer.Events.Stop */ , function() {
                                resolve();
                            });
                        });
                        recordingPlayer.addEventListener("Step" /* Models.RecordingPlayer.Events.Step */ , stepEventHandlerStub);
                        void recordingPlayer.play();
                        return [
                            4,
                            stopEventPromise
                        ];
                    case 1:
                        _state.sent();
                        assert.strictEqual(stepEventHandlerStub.getCalls().length, 2);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should `stepOver` execute only the next step after breakpoint and stop', /*#__PURE__*/ _async_to_generator(function() {
            var stepEventHandlerStub, stopEventPromise;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        recordingPlayer = new _models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingPlayer.RecordingPlayer({
                            title: 'test',
                            steps: [
                                (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)(),
                                (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)(),
                                (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)(),
                                (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)()
                            ]
                        }, {
                            speed: "normal" /* Models.RecordingPlayer.PlayRecordingSpeed.Normal */ ,
                            breakpointIndexes: new Set([
                                1
                            ])
                        });
                        stepEventHandlerStub = sinon.stub().callsFake(function() {
                            var _ref = _async_to_generator(function(param) {
                                var resolve;
                                return _ts_generator(this, function(_state) {
                                    resolve = param.data.resolve;
                                    resolve();
                                    return [
                                        2
                                    ];
                                });
                            });
                            return function(_) {
                                return _ref.apply(this, arguments);
                            };
                        }());
                        stopEventPromise = new Promise(function(resolve) {
                            recordingPlayer.addEventListener("Stop" /* Models.RecordingPlayer.Events.Stop */ , function() {
                                resolve();
                                stopEventPromise = new Promise(function(nextResolve) {
                                    recordingPlayer.addEventListener("Stop" /* Models.RecordingPlayer.Events.Stop */ , function() {
                                        nextResolve();
                                    }, {
                                        once: true
                                    });
                                });
                            }, {
                                once: true
                            });
                        });
                        recordingPlayer.addEventListener("Step" /* Models.RecordingPlayer.Events.Step */ , stepEventHandlerStub);
                        void recordingPlayer.play();
                        return [
                            4,
                            stopEventPromise
                        ];
                    case 1:
                        _state.sent();
                        assert.strictEqual(stepEventHandlerStub.getCalls().length, 2);
                        recordingPlayer.stepOver();
                        return [
                            4,
                            stopEventPromise
                        ];
                    case 2:
                        _state.sent();
                        assert.strictEqual(stepEventHandlerStub.getCalls().length, 3);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should `continue` execute until the next breakpoint', /*#__PURE__*/ _async_to_generator(function() {
            var stepEventHandlerStub, stopEventPromise;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        recordingPlayer = new _models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingPlayer.RecordingPlayer({
                            title: 'test',
                            steps: [
                                (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)(),
                                (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)(),
                                (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)(),
                                (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)(),
                                (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)()
                            ]
                        }, {
                            speed: "normal" /* Models.RecordingPlayer.PlayRecordingSpeed.Normal */ ,
                            breakpointIndexes: new Set([
                                1,
                                3
                            ])
                        });
                        stepEventHandlerStub = sinon.stub().callsFake(function() {
                            var _ref = _async_to_generator(function(param) {
                                var resolve;
                                return _ts_generator(this, function(_state) {
                                    resolve = param.data.resolve;
                                    resolve();
                                    return [
                                        2
                                    ];
                                });
                            });
                            return function(_) {
                                return _ref.apply(this, arguments);
                            };
                        }());
                        stopEventPromise = new Promise(function(resolve) {
                            recordingPlayer.addEventListener("Stop" /* Models.RecordingPlayer.Events.Stop */ , function() {
                                resolve();
                                stopEventPromise = new Promise(function(nextResolve) {
                                    recordingPlayer.addEventListener("Stop" /* Models.RecordingPlayer.Events.Stop */ , function() {
                                        nextResolve();
                                    }, {
                                        once: true
                                    });
                                });
                            }, {
                                once: true
                            });
                        });
                        recordingPlayer.addEventListener("Step" /* Models.RecordingPlayer.Events.Step */ , stepEventHandlerStub);
                        void recordingPlayer.play();
                        return [
                            4,
                            stopEventPromise
                        ];
                    case 1:
                        _state.sent();
                        assert.strictEqual(stepEventHandlerStub.getCalls().length, 2);
                        recordingPlayer.continue();
                        return [
                            4,
                            stopEventPromise
                        ];
                    case 2:
                        _state.sent();
                        assert.strictEqual(stepEventHandlerStub.getCalls().length, 4);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should `continue` execute until the end if there is no later breakpoints', /*#__PURE__*/ _async_to_generator(function() {
            var stepEventHandlerStub, stopEventPromise, doneEventPromise;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        recordingPlayer = new _models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingPlayer.RecordingPlayer({
                            title: 'test',
                            steps: [
                                (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)(),
                                (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)(),
                                (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)(),
                                (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)(),
                                (0,_testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCustomStep)()
                            ]
                        }, {
                            speed: "normal" /* Models.RecordingPlayer.PlayRecordingSpeed.Normal */ ,
                            breakpointIndexes: new Set([
                                1
                            ])
                        });
                        stepEventHandlerStub = sinon.stub().callsFake(function() {
                            var _ref = _async_to_generator(function(param) {
                                var resolve;
                                return _ts_generator(this, function(_state) {
                                    resolve = param.data.resolve;
                                    resolve();
                                    return [
                                        2
                                    ];
                                });
                            });
                            return function(_) {
                                return _ref.apply(this, arguments);
                            };
                        }());
                        stopEventPromise = new Promise(function(resolve) {
                            recordingPlayer.addEventListener("Stop" /* Models.RecordingPlayer.Events.Stop */ , function() {
                                resolve();
                                stopEventPromise = new Promise(function(nextResolve) {
                                    recordingPlayer.addEventListener("Stop" /* Models.RecordingPlayer.Events.Stop */ , function() {
                                        nextResolve();
                                    }, {
                                        once: true
                                    });
                                });
                            }, {
                                once: true
                            });
                        });
                        doneEventPromise = new Promise(function(resolve) {
                            recordingPlayer.addEventListener("Done" /* Models.RecordingPlayer.Events.Done */ , function() {
                                resolve();
                            }, {
                                once: true
                            });
                        });
                        recordingPlayer.addEventListener("Step" /* Models.RecordingPlayer.Events.Step */ , stepEventHandlerStub);
                        void recordingPlayer.play();
                        return [
                            4,
                            stopEventPromise
                        ];
                    case 1:
                        _state.sent();
                        assert.strictEqual(stepEventHandlerStub.getCalls().length, 2);
                        recordingPlayer.continue();
                        return [
                            4,
                            doneEventPromise
                        ];
                    case 2:
                        _state.sent();
                        assert.strictEqual(stepEventHandlerStub.getCalls().length, 5);
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=RecordingPlayer.test.js.map


}),
"./panels/recorder/testing/RecorderHelpers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createCustomStep: function() { return createCustomStep; },
  installMocksForRecordingPlayer: function() { return installMocksForRecordingPlayer; },
  installMocksForTargetManager: function() { return installMocksForTargetManager; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_models_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


var createCustomStep = function() {
    return {
        type: _models_models_js__WEBPACK_IMPORTED_MODULE_1__.Schema.StepType.CustomStep,
        name: 'dummy step',
        parameters: {}
    };
};
var installMocksForRecordingPlayer = function() {
    var mock = {
        page: {
            _client: function() {
                return {
                    send: sinon.stub().resolves()
                };
            },
            frames: function() {
                return [
                    {
                        client: {
                            send: sinon.stub().resolves()
                        }
                    }
                ];
            },
            evaluate: function() {
                return '';
            },
            url: function url() {
                return '';
            },
            bringToFront: function bringToFront() {
                return Promise.resolve();
            }
        },
        browser: {
            pages: function() {
                return [
                    mock.page
                ];
            },
            disconnect: function() {
                return sinon.stub().resolves();
            }
        }
    };
    sinon.stub(_models_models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingPlayer.RecordingPlayer, 'connectPuppeteer').resolves(mock);
};
var installMocksForTargetManager = function() {
    var stub = {
        suspendAllTargets: sinon.stub().resolves(),
        resumeAllTargets: sinon.stub().resolves(),
        primaryPageTarget: sinon.stub().returns({
            targetAgent: sinon.stub().returns({})
        })
    };
    sinon.stub(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager, 'instance').callsFake(function() {
        return stub;
    });
}; //# sourceMappingURL=RecorderHelpers.js.map


}),

}]);