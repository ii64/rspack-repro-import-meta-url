"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_models_RecordingPlayer_js"], {
"./panels/recorder/models/RecordingPlayer.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RecordingPlayer: function() { return RecordingPlayer; },
  defaultTimeout: function() { return defaultTimeout; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _services_puppeteer_puppeteer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/puppeteer/puppeteer.js */ "./services/puppeteer/puppeteer.js");
/* harmony import */var _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../third_party/puppeteer-replay/puppeteer-replay.js */ "./third_party/puppeteer-replay/puppeteer-replay.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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




var _obj;
var speedDelayMap = (_obj = {}, _define_property(_obj, "normal" /* PlayRecordingSpeed.Normal */ , 0), _define_property(_obj, "slow" /* PlayRecordingSpeed.Slow */ , 500), _define_property(_obj, "very_slow" /* PlayRecordingSpeed.VerySlow */ , 1000), _define_property(_obj, "extremely_slow" /* PlayRecordingSpeed.ExtremelySlow */ , 2000), _obj);
var defaultTimeout = 5000; // ms
function isPageTarget(target) {
    // Treat DevTools targets as page targets too.
    return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.schemeIs(target.url, 'devtools:') || target.type === 'page' || target.type === 'background_page' || target.type === 'webview';
}
var _stopPromise = /*#__PURE__*/ new WeakMap(), _resolveStopPromise = /*#__PURE__*/ new WeakMap(), _abortResolveFn = /*#__PURE__*/ new WeakMap(), _runner = /*#__PURE__*/ new WeakMap(), _resolveAndRefreshStopPromise = /*#__PURE__*/ new WeakSet();
var RecordingPlayer = /*#__PURE__*/ function(_Common_ObjectWrapper_ObjectWrapper) {
    "use strict";
    _inherits(RecordingPlayer, _Common_ObjectWrapper_ObjectWrapper);
    var _super = _create_super(RecordingPlayer);
    function RecordingPlayer(userFlow, param) {
        var speed = param.speed, _param_breakpointIndexes = param.breakpointIndexes, breakpointIndexes = _param_breakpointIndexes === void 0 ? new Set() : _param_breakpointIndexes;
        _class_call_check(this, RecordingPlayer);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _resolveAndRefreshStopPromise);
        _class_private_field_init(_assert_this_initialized(_this), _stopPromise, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _resolveStopPromise, {
            writable: true,
            value: void 0
        });
        _define_property(_assert_this_initialized(_this), "userFlow", void 0);
        _define_property(_assert_this_initialized(_this), "speed", void 0);
        _define_property(_assert_this_initialized(_this), "timeout", void 0);
        _define_property(_assert_this_initialized(_this), "breakpointIndexes", void 0);
        _define_property(_assert_this_initialized(_this), "steppingOver", false);
        _define_property(_assert_this_initialized(_this), "aborted", false);
        _define_property(_assert_this_initialized(_this), "abortPromise", void 0);
        _class_private_field_init(_assert_this_initialized(_this), _abortResolveFn, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _runner, {
            writable: true,
            value: void 0
        });
        _this.userFlow = userFlow;
        _this.speed = speed;
        _this.timeout = userFlow.timeout || defaultTimeout;
        _this.breakpointIndexes = breakpointIndexes;
        _class_private_field_set(_assert_this_initialized(_this), _stopPromise, new Promise(function(resolve) {
            _class_private_field_set(_assert_this_initialized(_this), _resolveStopPromise, resolve);
        }));
        _this.abortPromise = new Promise(function(resolve) {
            _class_private_field_set(_assert_this_initialized(_this), _abortResolveFn, resolve);
        });
        return _this;
    }
    _create_class(RecordingPlayer, [
        {
            key: "stop",
            value: function stop() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    Promise.race([
                                        _class_private_field_get(_this, _stopPromise),
                                        _this.abortPromise
                                    ])
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
            key: "abort",
            value: function abort() {
                var _$_class_private_field_get;
                var _this, _this1, _ref;
                this.aborted = true;
                (_this = _class_private_field_get(_ref = _this1 = this, _abortResolveFn)) === null || _this === void 0 ? void 0 : _this.call(_this1);
                (_$_class_private_field_get = _class_private_field_get(this, _runner)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.abort();
            }
        },
        {
            key: "disposeForTesting",
            value: function disposeForTesting() {
                var _this, _this1, _ref, _this2, _this3, _ref1;
                (_this = _class_private_field_get(_ref = _this1 = this, _resolveStopPromise)) === null || _this === void 0 ? void 0 : _this.call(_this1);
                (_this2 = _class_private_field_get(_ref1 = _this3 = this, _abortResolveFn)) === null || _this2 === void 0 ? void 0 : _this2.call(_this3);
            }
        },
        {
            key: "continue",
            value: function _continue() {
                this.steppingOver = false;
                _class_private_method_get(this, _resolveAndRefreshStopPromise, resolveAndRefreshStopPromise).call(this);
            }
        },
        {
            key: "stepOver",
            value: function stepOver() {
                this.steppingOver = true;
                _class_private_method_get(this, _resolveAndRefreshStopPromise, resolveAndRefreshStopPromise).call(this);
            }
        },
        {
            key: "updateBreakpointIndexes",
            value: function updateBreakpointIndexes(breakpointIndexes) {
                this.breakpointIndexes = breakpointIndexes;
            }
        },
        {
            key: "play",
            value: function play() {
                var _this = this;
                return _async_to_generator(function() {
                    var _ref, page, browser, player, _speed, ExtensionWithBreak, extension, _tmp, error, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    RecordingPlayer.connectPuppeteer()
                                ];
                            case 1:
                                _ref = _state.sent(), page = _ref.page, browser = _ref.browser;
                                _this.aborted = false;
                                player = _this;
                                _speed = /*#__PURE__*/ new WeakMap();
                                ExtensionWithBreak = /*#__PURE__*/ function(_PuppeteerReplay_PuppeteerRunnerExtension) {
                                    _inherits(ExtensionWithBreak, _PuppeteerReplay_PuppeteerRunnerExtension);
                                    var _super = _create_super(ExtensionWithBreak);
                                    function ExtensionWithBreak(browser, page, param) {
                                        var timeout = param.timeout, speed = param.speed;
                                        _class_call_check(this, ExtensionWithBreak);
                                        var _this;
                                        _this = _super.call(this, browser, page, {
                                            timeout: timeout
                                        });
                                        _class_private_field_init(_assert_this_initialized(_this), _speed, {
                                            writable: true,
                                            value: void 0
                                        });
                                        _class_private_field_set(_assert_this_initialized(_this), _speed, speed);
                                        return _this;
                                    }
                                    _create_class(ExtensionWithBreak, [
                                        {
                                            key: "beforeEachStep",
                                            value: function beforeEachStep(step, flow) {
                                                var _this = this;
                                                return _async_to_generator(function() {
                                                    var resolver, promise, currentStepIndex, shouldStopAtCurrentStep, shouldWaitForSpeed;
                                                    return _ts_generator(this, function(_state) {
                                                        switch(_state.label){
                                                            case 0:
                                                                resolver = function() {};
                                                                promise = new Promise(function(r) {
                                                                    resolver = r;
                                                                });
                                                                player.dispatchEventToListeners("Step" /* Events.Step */ , {
                                                                    step: step,
                                                                    resolve: resolver
                                                                });
                                                                return [
                                                                    4,
                                                                    promise
                                                                ];
                                                            case 1:
                                                                _state.sent();
                                                                currentStepIndex = flow.steps.indexOf(step);
                                                                shouldStopAtCurrentStep = player.steppingOver || player.breakpointIndexes.has(currentStepIndex);
                                                                shouldWaitForSpeed = step.type !== 'setViewport' && step.type !== 'navigate' && !player.aborted;
                                                                if (!shouldStopAtCurrentStep) return [
                                                                    3,
                                                                    3
                                                                ];
                                                                player.dispatchEventToListeners("Stop" /* Events.Stop */ );
                                                                return [
                                                                    4,
                                                                    player.stop()
                                                                ];
                                                            case 2:
                                                                _state.sent();
                                                                player.dispatchEventToListeners("Continue" /* Events.Continue */ );
                                                                return [
                                                                    3,
                                                                    5
                                                                ];
                                                            case 3:
                                                                if (!shouldWaitForSpeed) return [
                                                                    3,
                                                                    5
                                                                ];
                                                                return [
                                                                    4,
                                                                    Promise.race([
                                                                        new Promise(function(resolve) {
                                                                            return setTimeout(resolve, speedDelayMap[_class_private_field_get(_this, _speed)]);
                                                                        }),
                                                                        player.abortPromise
                                                                    ])
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
                                                })();
                                            }
                                        },
                                        {
                                            key: "runStep",
                                            value: function runStep(step, flow) {
                                                var _this = this;
                                                var _this1 = this, _superprop_get_runStep = function() {
                                                    return _get(_get_prototype_of(ExtensionWithBreak.prototype), "runStep", _this);
                                                };
                                                return _async_to_generator(function() {
                                                    return _ts_generator(this, function(_state) {
                                                        switch(_state.label){
                                                            case 0:
                                                                // When replaying on a DevTools target we skip setViewport and navigate steps
                                                                // because navigation and viewport changes are not supported there.
                                                                if (_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.schemeIs(page === null || page === void 0 ? void 0 : page.url(), 'devtools:') && (step.type === 'setViewport' || step.type === 'navigate')) {
                                                                    return [
                                                                        2
                                                                    ];
                                                                }
                                                                // Focus the target in case it's not focused.
                                                                return [
                                                                    4,
                                                                    _this1.page.bringToFront()
                                                                ];
                                                            case 1:
                                                                _state.sent();
                                                                return [
                                                                    4,
                                                                    _superprop_get_runStep().call(_this1, step, flow)
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
                                        }
                                    ]);
                                    return ExtensionWithBreak;
                                }(_third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_3__.PuppeteerRunnerExtension);
                                extension = new ExtensionWithBreak(browser, page, {
                                    timeout: _this.timeout,
                                    speed: _this.speed
                                });
                                _tmp = [
                                    _this,
                                    _runner
                                ];
                                return [
                                    4,
                                    _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_3__.createRunner(_this.userFlow, extension)
                                ];
                            case 2:
                                _class_private_field_set.apply(void 0, _tmp.concat([
                                    _state.sent()
                                ]));
                                _state.label = 3;
                            case 3:
                                _state.trys.push([
                                    3,
                                    5,
                                    6,
                                    8
                                ]);
                                return [
                                    4,
                                    _class_private_field_get(_this, _runner).run()
                                ];
                            case 4:
                                _state.sent();
                                return [
                                    3,
                                    8
                                ];
                            case 5:
                                err = _state.sent();
                                error = err;
                                console.error('Replay error', err.message);
                                return [
                                    3,
                                    8
                                ];
                            case 6:
                                return [
                                    4,
                                    RecordingPlayer.disconnectPuppeteer(browser)
                                ];
                            case 7:
                                _state.sent();
                                return [
                                    7
                                ];
                            case 8:
                                if (_this.aborted) {
                                    _this.dispatchEventToListeners("Abort" /* Events.Abort */ );
                                } else if (error) {
                                    _this.dispatchEventToListeners("Error" /* Events.Error */ , error);
                                } else {
                                    _this.dispatchEventToListeners("Done" /* Events.Done */ );
                                }
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ], [
        {
            key: "connectPuppeteer",
            value: function connectPuppeteer() {
                return _async_to_generator(function() {
                    var rootTarget, primaryPageTarget, childTargetManager, resourceTreeModel, mainFrame, rootChildTargetManager, result, connection, mainTargetId, rootTargetId, _ref, page, browser, puppeteerConnection;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                rootTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().rootTarget();
                                if (!rootTarget) {
                                    throw new Error('Could not find the root target');
                                }
                                primaryPageTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().primaryPageTarget();
                                if (!primaryPageTarget) {
                                    throw new Error('Could not find the primary page target');
                                }
                                childTargetManager = primaryPageTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ChildTargetManager.ChildTargetManager);
                                if (!childTargetManager) {
                                    throw new Error('Could not get childTargetManager');
                                }
                                resourceTreeModel = primaryPageTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
                                if (!resourceTreeModel) {
                                    throw new Error('Could not get resource tree model');
                                }
                                mainFrame = resourceTreeModel.mainFrame;
                                if (!mainFrame) {
                                    throw new Error('Could not find main frame');
                                }
                                rootChildTargetManager = rootTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ChildTargetManager.ChildTargetManager);
                                if (!rootChildTargetManager) {
                                    throw new Error('Could not find the child target manager class for the root target');
                                }
                                return [
                                    4,
                                    rootChildTargetManager.createParallelConnection(function() {})
                                ];
                            case 1:
                                result = _state.sent();
                                connection = result.connection;
                                return [
                                    4,
                                    childTargetManager.getParentTargetId()
                                ];
                            case 2:
                                mainTargetId = _state.sent();
                                return [
                                    4,
                                    rootChildTargetManager.getParentTargetId()
                                ];
                            case 3:
                                rootTargetId = _state.sent();
                                return [
                                    4,
                                    _services_puppeteer_puppeteer_js__WEBPACK_IMPORTED_MODULE_2__.PuppeteerConnection.PuppeteerConnectionHelper.connectPuppeteerToConnectionViaTab({
                                        connection: connection,
                                        rootTargetId: rootTargetId,
                                        isPageTargetCallback: isPageTarget
                                    })
                                ];
                            case 4:
                                _ref = _state.sent(), page = _ref.page, browser = _ref.browser, puppeteerConnection = _ref.puppeteerConnection;
                                if (!page) {
                                    throw new Error('could not find main page!');
                                }
                                browser.on('targetdiscovered', function(targetInfo) {
                                    // Pop-ups opened by the main target won't be auto-attached. Therefore,
                                    // we need to create a session for them explicitly. We user openedId
                                    // and type to classify a target as requiring a session.
                                    if (targetInfo.type !== 'page') {
                                        return;
                                    }
                                    if (targetInfo.targetId === mainTargetId) {
                                        return;
                                    }
                                    if (targetInfo.openerId !== mainTargetId) {
                                        return;
                                    }
                                    void puppeteerConnection._createSession(targetInfo, /* emulateAutoAttach= */ true);
                                });
                                return [
                                    2,
                                    {
                                        page: page,
                                        browser: browser
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "disconnectPuppeteer",
            value: function disconnectPuppeteer(browser) {
                return _async_to_generator(function() {
                    var pages, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, page, client, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, frame, client1, err, err, err1;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    29,
                                    ,
                                    30
                                ]);
                                return [
                                    4,
                                    browser.pages()
                                ];
                            case 1:
                                pages = _state.sent();
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 2;
                            case 2:
                                _state.trys.push([
                                    2,
                                    25,
                                    26,
                                    27
                                ]);
                                _iterator = pages[Symbol.iterator]();
                                _state.label = 3;
                            case 3:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    24
                                ];
                                page = _step.value;
                                client = page._client();
                                return [
                                    4,
                                    client.send('Network.disable')
                                ];
                            case 4:
                                _state.sent();
                                return [
                                    4,
                                    client.send('Page.disable')
                                ];
                            case 5:
                                _state.sent();
                                return [
                                    4,
                                    client.send('Log.disable')
                                ];
                            case 6:
                                _state.sent();
                                return [
                                    4,
                                    client.send('Performance.disable')
                                ];
                            case 7:
                                _state.sent();
                                return [
                                    4,
                                    client.send('Runtime.disable')
                                ];
                            case 8:
                                _state.sent();
                                return [
                                    4,
                                    client.send('Emulation.clearDeviceMetricsOverride')
                                ];
                            case 9:
                                _state.sent();
                                return [
                                    4,
                                    client.send('Emulation.setAutomationOverride', {
                                        enabled: false
                                    })
                                ];
                            case 10:
                                _state.sent();
                                _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                _state.label = 11;
                            case 11:
                                _state.trys.push([
                                    11,
                                    21,
                                    22,
                                    23
                                ]);
                                _iterator1 = page.frames()[Symbol.iterator]();
                                _state.label = 12;
                            case 12:
                                if (!!(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done)) return [
                                    3,
                                    20
                                ];
                                frame = _step1.value;
                                client1 = frame.client;
                                return [
                                    4,
                                    client1.send('Network.disable')
                                ];
                            case 13:
                                _state.sent();
                                return [
                                    4,
                                    client1.send('Page.disable')
                                ];
                            case 14:
                                _state.sent();
                                return [
                                    4,
                                    client1.send('Log.disable')
                                ];
                            case 15:
                                _state.sent();
                                return [
                                    4,
                                    client1.send('Performance.disable')
                                ];
                            case 16:
                                _state.sent();
                                return [
                                    4,
                                    client1.send('Runtime.disable')
                                ];
                            case 17:
                                _state.sent();
                                return [
                                    4,
                                    client1.send('Emulation.setAutomationOverride', {
                                        enabled: false
                                    })
                                ];
                            case 18:
                                _state.sent();
                                _state.label = 19;
                            case 19:
                                _iteratorNormalCompletion1 = true;
                                return [
                                    3,
                                    12
                                ];
                            case 20:
                                return [
                                    3,
                                    23
                                ];
                            case 21:
                                err = _state.sent();
                                _didIteratorError1 = true;
                                _iteratorError1 = err;
                                return [
                                    3,
                                    23
                                ];
                            case 22:
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
                            case 23:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    3
                                ];
                            case 24:
                                return [
                                    3,
                                    27
                                ];
                            case 25:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    27
                                ];
                            case 26:
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
                            case 27:
                                return [
                                    4,
                                    browser.disconnect()
                                ];
                            case 28:
                                _state.sent();
                                return [
                                    3,
                                    30
                                ];
                            case 29:
                                err1 = _state.sent();
                                console.error('Error disconnecting Puppeteer', err1.message);
                                return [
                                    3,
                                    30
                                ];
                            case 30:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return RecordingPlayer;
} //# sourceMappingURL=RecordingPlayer.js.map
(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper);
function resolveAndRefreshStopPromise() {
    var _this = this;
    var _this1, _this2, _ref;
    (_this1 = _class_private_field_get(_ref = _this2 = this, _resolveStopPromise)) === null || _this1 === void 0 ? void 0 : _this1.call(_this2);
    _class_private_field_set(this, _stopPromise, new Promise(function(resolve) {
        _class_private_field_set(_this, _resolveStopPromise, resolve);
    }));
}


}),
"./services/puppeteer/puppeteer.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PuppeteerConnection: function() { return /* reexport module object */ _PuppeteerConnection_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _PuppeteerConnection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PuppeteerConnection.js */ "./services/puppeteer/PuppeteerConnection.js");
// Copyright (c) 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=puppeteer.js.map


}),

}]);