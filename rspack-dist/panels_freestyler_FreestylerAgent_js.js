"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_freestyler_FreestylerAgent_js"], {
"./panels/freestyler/FreestylerAgent.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  FIX_THIS_ISSUE_PROMPT: function() { return FIX_THIS_ISSUE_PROMPT; },
  FreestylerAgent: function() { return FreestylerAgent; },
  Step: function() { return Step; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FreestylerEvaluateAction.js */ "./panels/freestyler/FreestylerEvaluateAction.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
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
function _async_generator(gen) {
    var front, back;
    function send(key, arg) {
        return new Promise(function(resolve, reject) {
            var request = {
                key: key,
                arg: arg,
                resolve: resolve,
                reject: reject,
                next: null
            };
            if (back) {
                back = back.next = request;
            } else {
                front = back = request;
                resume(key, arg);
            }
        });
    }
    function resume(key, arg) {
        try {
            var result = gen[key](arg);
            var value = result.value;
            var wrappedAwait = value instanceof _await_value;
            Promise.resolve(wrappedAwait ? value.wrapped : value).then(function(arg) {
                if (wrappedAwait) {
                    resume("next", arg);
                    return;
                }
                settle(result.done ? "return" : "normal", arg);
            }, function(err) {
                resume("throw", err);
            });
        } catch (err) {
            settle("throw", err);
        }
    }
    function settle(type, value) {
        switch(type){
            case "return":
                front.resolve({
                    value: value,
                    done: true
                });
                break;
            case "throw":
                front.reject(value);
                break;
            default:
                front.resolve({
                    value: value,
                    done: false
                });
                break;
        }
        front = front.next;
        if (front) {
            resume(front.key, front.arg);
        } else {
            back = null;
        }
    }
    this._invoke = send;
    if (typeof gen.return !== "function") {
        this.return = undefined;
    }
}
if (typeof Symbol === "function" && Symbol.asyncIterator) {
    _async_generator.prototype[Symbol.asyncIterator] = function() {
        return this;
    };
}
_async_generator.prototype.next = function(arg) {
    return this._invoke("next", arg);
};
_async_generator.prototype.throw = function(arg) {
    return this._invoke("throw", arg);
};
_async_generator.prototype.return = function(arg) {
    return this._invoke("return", arg);
};
function _async_iterator(iterable) {
    var method, async, sync, retry = 2;
    for("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;){
        if (async && null != (method = iterable[async])) return method.call(iterable);
        if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable));
        async = "@@asyncIterator", sync = "@@iterator";
    }
    throw new TypeError("Object is not async iterable");
}
function AsyncFromSyncIterator(s) {
    function AsyncFromSyncIteratorContinuation(r) {
        if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object."));
        var done = r.done;
        return Promise.resolve(r.value).then(function(value) {
            return {
                value: value,
                done: done
            };
        });
    }
    return AsyncFromSyncIterator = function(s) {
        this.s = s, this.n = s.next;
    }, AsyncFromSyncIterator.prototype = {
        s: null,
        n: null,
        next: function() {
            return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
        },
        return: function(value) {
            var ret = this.s.return;
            return void 0 === ret ? Promise.resolve({
                value: value,
                done: !0
            }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments));
        },
        throw: function(value) {
            var thr = this.s.return;
            return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments));
        }
    }, new AsyncFromSyncIterator(s);
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
function _await_async_generator(value) {
    return new _await_value(value);
}
function _await_value(value) {
    this.wrapped = value;
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
function _class_apply_descriptor_update(receiver, descriptor) {
    if (descriptor.set) {
        if (!descriptor.get) {
            throw new TypeError("attempted to read set only private field");
        }
        if (!("__destrWrapper" in descriptor)) {
            descriptor.__destrWrapper = {
                set value (v){
                    descriptor.set.call(receiver, v);
                },
                get value () {
                    return descriptor.get.call(receiver);
                }
            };
        }
        return descriptor.__destrWrapper;
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        return descriptor;
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
function _class_private_field_update(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "update");
    return _class_apply_descriptor_update(receiver, descriptor);
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
function _wrap_async_generator(fn) {
    return function() {
        return new _async_generator(fn.apply(this, arguments));
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
        return function(v1) {
            return step([
                n,
                v1
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






var preamble = "You are a CSS debugging assistant integrated into Chrome DevTools.\nThe user selected a DOM element in the browser's DevTools and sends a CSS-related\nquery about the selected DOM element. You are going to answer to the query in these steps:\n* THOUGHT\n* ACTION\n* ANSWER\nUse THOUGHT to explain why you take the ACTION.\nUse ACTION to evaluate JavaScript code on the page to gather all the data needed to answer the query and put it inside the data variable - then return STOP.\nYou have access to a special $0 variable referencing the current element in the scope of the JavaScript code.\nOBSERVATION will be the result of running the JS code on the page.\nAfter that, you can answer the question with ANSWER or run another ACTION query.\nPlease run ACTION again if the information you received is not enough to answer the query.\nPlease answer only if you are sure about the answer. Otherwise, explain why you're not able to answer.\nWhen answering, remember to consider CSS concepts such as the CSS cascade, explicit and implicit stacking contexts and various CSS layout types.\nWhen answering, always consider MULTIPLE possible solutions.\n\nExample:\nACTION\nconst data = {\n  color: window.getComputedStyle($0)['color'],\n  backgroundColor: window.getComputedStyle($0)['backgroundColor'],\n}\nSTOP\n\nExample session:\n\nQUERY: Why is this element centered in its container?\nTHOUGHT: Let's check the layout properties of the container.\nACTION\n/* COLLECT_INFORMATION_HERE */\nconst data = {\n  /* THE RESULT YOU ARE GOING TO USE AS INFORMATION */\n}\nSTOP\n\nYou will be called again with this:\nOBSERVATION\n/* OBJECT_CONTAINING_YOUR_DATA */\n\nYou then output:\nANSWER: The element is centered on the page because the parent is a flex container with justify-content set to center.\n\nThe example session ends here.";
var FIX_THIS_ISSUE_PROMPT = 'Fix this issue using JavaScript code execution';
var Step;
(function(Step) {
    Step["THOUGHT"] = "thought";
    Step["ACTION"] = "action";
    Step["ANSWER"] = "answer";
    Step["ERROR"] = "error";
    Step["QUERYING"] = "querying";
})(Step || (Step = {}));
function executeJsCode(code, _) {
    return _executeJsCode.apply(this, arguments);
}
function _executeJsCode() {
    _executeJsCode = _async_to_generator(function(code, param) {
        var throwOnSideEffect, target, resourceTreeModel, runtimeModel, pageAgent, executionContextId, executionContext, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    throwOnSideEffect = param.throwOnSideEffect;
                    target = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.Target.Target);
                    if (!target) {
                        throw new Error('Target is not found for executing code');
                    }
                    resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel);
                    runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.RuntimeModel.RuntimeModel);
                    pageAgent = target.pageAgent();
                    if (!(resourceTreeModel === null || resourceTreeModel === void 0 ? void 0 : resourceTreeModel.mainFrame)) {
                        throw new Error('Main frame is not found for executing code');
                    }
                    return [
                        4,
                        pageAgent.invoke_createIsolatedWorld({
                            frameId: resourceTreeModel.mainFrame.id,
                            worldName: 'devtools_freestyler'
                        })
                    ];
                case 1:
                    executionContextId = _state.sent().executionContextId;
                    executionContext = runtimeModel === null || runtimeModel === void 0 ? void 0 : runtimeModel.executionContext(executionContextId);
                    if (!executionContext) {
                        throw new Error('Execution context is not found for executing code');
                    }
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
                        _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_5__.FreestylerEvaluateAction.execute(code, executionContext, {
                            throwOnSideEffect: throwOnSideEffect
                        })
                    ];
                case 3:
                    return [
                        2,
                        _state.sent()
                    ];
                case 4:
                    err = _state.sent();
                    if (_instanceof(err, _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_5__.ExecutionError)) {
                        return [
                            2,
                            "Error: ".concat(err.message)
                        ];
                    }
                    throw err;
                case 5:
                    return [
                        2
                    ];
            }
        });
    });
    return _executeJsCode.apply(this, arguments);
}
var MAX_STEPS = 10;
var MAX_OBSERVATION_BYTE_LENGTH = 25000;
var _aidaClient = /*#__PURE__*/ new WeakMap(), _chatHistory = /*#__PURE__*/ new WeakMap(), _serverSideLoggingEnabled = /*#__PURE__*/ new WeakMap(), _confirmSideEffect = /*#__PURE__*/ new WeakMap(), _execJs = /*#__PURE__*/ new WeakMap(), _sessionId = /*#__PURE__*/ new WeakMap(), _getHistoryEntry = /*#__PURE__*/ new WeakMap(), _aidaFetch = /*#__PURE__*/ new WeakSet(), _generateObservation = /*#__PURE__*/ new WeakSet(), _runId = /*#__PURE__*/ new WeakMap();
/**
 * One agent instance handles one conversation. Create a new agent
 * instance for a new conversation.
 */ var FreestylerAgent = /*#__PURE__*/ function() {
    "use strict";
    function FreestylerAgent(opts) {
        _class_call_check(this, FreestylerAgent);
        _class_private_field_init(this, _getHistoryEntry, {
            get: get_getHistoryEntry,
            set: void 0
        });
        _class_private_method_init(this, _aidaFetch);
        _class_private_method_init(this, _generateObservation);
        _class_private_field_init(this, _aidaClient, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _chatHistory, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(this, _serverSideLoggingEnabled, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _confirmSideEffect, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _execJs, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _sessionId, {
            writable: true,
            value: crypto.randomUUID()
        });
        _class_private_field_init(this, _runId, {
            writable: true,
            value: 0
        });
        _class_private_field_set(this, _aidaClient, opts.aidaClient);
        var _opts_execJs;
        _class_private_field_set(this, _execJs, (_opts_execJs = opts.execJs) !== null && _opts_execJs !== void 0 ? _opts_execJs : executeJsCode);
        _class_private_field_set(this, _confirmSideEffect, opts.confirmSideEffect);
        var _opts_serverSideLoggingEnabled;
        _class_private_field_set(this, _serverSideLoggingEnabled, (_opts_serverSideLoggingEnabled = opts.serverSideLoggingEnabled) !== null && _opts_serverSideLoggingEnabled !== void 0 ? _opts_serverSideLoggingEnabled : false);
    }
    _create_class(FreestylerAgent, [
        {
            key: "chatHistoryForTesting",
            get: function get() {
                return _class_private_field_get(this, _getHistoryEntry);
            }
        },
        {
            key: "run",
            value: function run(query) {
                var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                    isFixQuery: false
                };
                var _this = this;
                return _wrap_async_generator(function() {
                    var _options_signal, genericErrorMessage, structuredLog, currentRunId, i, _options_signal1, request, response, rpcId, fetchResult, err, _options_signal2, _class_private_field_get_get, currentRunEntries, _FreestylerAgent_parseResponse, thought, action, answer, observation;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                genericErrorMessage = 'Sorry, I could not help you with this query.';
                                structuredLog = [];
                                query = "QUERY: ".concat(query);
                                currentRunId = ++_class_private_field_update(_this, _runId).value;
                                (_options_signal = options.signal) === null || _options_signal === void 0 ? void 0 : _options_signal.addEventListener('abort', function() {
                                    _class_private_field_get(_this, _chatHistory).delete(currentRunId);
                                });
                                i = 0;
                                _state.label = 1;
                            case 1:
                                if (!(i < MAX_STEPS)) return [
                                    3,
                                    19
                                ];
                                return [
                                    4,
                                    {
                                        step: Step.QUERYING
                                    }
                                ];
                            case 2:
                                _state.sent();
                                request = FreestylerAgent.buildRequest({
                                    input: query,
                                    preamble: preamble,
                                    chatHistory: _class_private_field_get(_this, _chatHistory).size ? _class_private_field_get(_this, _getHistoryEntry) : undefined,
                                    serverSideLoggingEnabled: _class_private_field_get(_this, _serverSideLoggingEnabled),
                                    sessionId: _class_private_field_get(_this, _sessionId)
                                });
                                response = void 0;
                                rpcId = void 0;
                                _state.label = 3;
                            case 3:
                                _state.trys.push([
                                    3,
                                    5,
                                    ,
                                    7
                                ]);
                                return [
                                    4,
                                    _await_async_generator(_class_private_method_get(_this, _aidaFetch, aidaFetch).call(_this, request))
                                ];
                            case 4:
                                fetchResult = _state.sent();
                                response = fetchResult.response;
                                rpcId = fetchResult.rpcId;
                                return [
                                    3,
                                    7
                                ];
                            case 5:
                                err = _state.sent();
                                debugLog('Error calling the AIDA API', err);
                                if ((_options_signal2 = options.signal) === null || _options_signal2 === void 0 ? void 0 : _options_signal2.aborted) {
                                    return [
                                        3,
                                        19
                                    ];
                                }
                                return [
                                    4,
                                    {
                                        step: Step.ERROR,
                                        text: genericErrorMessage,
                                        rpcId: rpcId
                                    }
                                ];
                            case 6:
                                _state.sent();
                                return [
                                    3,
                                    19
                                ];
                            case 7:
                                if ((_options_signal1 = options.signal) === null || _options_signal1 === void 0 ? void 0 : _options_signal1.aborted) {
                                    return [
                                        3,
                                        19
                                    ];
                                }
                                debugLog("Iteration: ".concat(i), 'Request', request, 'Response', response);
                                structuredLog.push({
                                    request: structuredClone(request),
                                    response: response
                                });
                                currentRunEntries = (_class_private_field_get_get = _class_private_field_get(_this, _chatHistory).get(currentRunId)) !== null && _class_private_field_get_get !== void 0 ? _class_private_field_get_get : [];
                                _class_private_field_get(_this, _chatHistory).set(currentRunId, _to_consumable_array(currentRunEntries).concat([
                                    {
                                        text: query,
                                        entity: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.Entity.USER
                                    },
                                    {
                                        text: response,
                                        entity: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.Entity.SYSTEM
                                    }
                                ]));
                                _FreestylerAgent_parseResponse = FreestylerAgent.parseResponse(response), thought = _FreestylerAgent_parseResponse.thought, action = _FreestylerAgent_parseResponse.action, answer = _FreestylerAgent_parseResponse.answer;
                                if (!action) return [
                                    3,
                                    12
                                ];
                                if (!thought) return [
                                    3,
                                    9
                                ];
                                return [
                                    4,
                                    {
                                        step: Step.THOUGHT,
                                        text: thought,
                                        rpcId: rpcId
                                    }
                                ];
                            case 8:
                                _state.sent();
                                _state.label = 9;
                            case 9:
                                debugLog("Action to execute: ".concat(action));
                                return [
                                    4,
                                    _await_async_generator(_class_private_method_get(_this, _generateObservation, generateObservation).call(_this, action, {
                                        throwOnSideEffect: !options.isFixQuery
                                    }))
                                ];
                            case 10:
                                observation = _state.sent();
                                debugLog("Action result: ".concat(observation));
                                return [
                                    4,
                                    {
                                        step: Step.ACTION,
                                        code: action,
                                        output: observation,
                                        rpcId: rpcId
                                    }
                                ];
                            case 11:
                                _state.sent();
                                query = "OBSERVATION: ".concat(observation);
                                return [
                                    3,
                                    16
                                ];
                            case 12:
                                if (!answer) return [
                                    3,
                                    14
                                ];
                                return [
                                    4,
                                    {
                                        step: Step.ANSWER,
                                        text: answer,
                                        rpcId: rpcId
                                    }
                                ];
                            case 13:
                                _state.sent();
                                return [
                                    3,
                                    19
                                ];
                            case 14:
                                return [
                                    4,
                                    {
                                        step: Step.ANSWER,
                                        text: genericErrorMessage,
                                        rpcId: rpcId
                                    }
                                ];
                            case 15:
                                _state.sent();
                                return [
                                    3,
                                    19
                                ];
                            case 16:
                                if (!(i === MAX_STEPS - 1)) return [
                                    3,
                                    18
                                ];
                                return [
                                    4,
                                    {
                                        step: Step.ERROR,
                                        text: 'Max steps reached, please try again.'
                                    }
                                ];
                            case 17:
                                _state.sent();
                                _state.label = 18;
                            case 18:
                                i++;
                                return [
                                    3,
                                    1
                                ];
                            case 19:
                                if (isDebugMode()) {
                                    localStorage.setItem('freestylerStructuredLog', JSON.stringify(structuredLog));
                                    window.dispatchEvent(new CustomEvent('freestylerdone'));
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
            key: "buildRequest",
            value: function buildRequest(opts) {
                var config = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().getHostConfig();
                var _config_devToolsFreestylerDogfood_aidaTemperature, _config_devToolsFreestylerDogfood_aidaModelId, _opts_serverSideLoggingEnabled;
                var request = {
                    input: opts.input,
                    preamble: opts.preamble,
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    chat_history: opts.chatHistory,
                    client: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.CLIENT_NAME,
                    options: {
                        temperature: (_config_devToolsFreestylerDogfood_aidaTemperature = config === null || config === void 0 ? void 0 : config.devToolsFreestylerDogfood.aidaTemperature) !== null && _config_devToolsFreestylerDogfood_aidaTemperature !== void 0 ? _config_devToolsFreestylerDogfood_aidaTemperature : 0,
                        model_id: (_config_devToolsFreestylerDogfood_aidaModelId = config === null || config === void 0 ? void 0 : config.devToolsFreestylerDogfood.aidaModelId) !== null && _config_devToolsFreestylerDogfood_aidaModelId !== void 0 ? _config_devToolsFreestylerDogfood_aidaModelId : undefined
                    },
                    metadata: {
                        // TODO: disable logging based on query params.
                        disable_user_content_logging: !((_opts_serverSideLoggingEnabled = opts.serverSideLoggingEnabled) !== null && _opts_serverSideLoggingEnabled !== void 0 ? _opts_serverSideLoggingEnabled : false),
                        string_session_id: opts.sessionId
                    },
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    functionality_type: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.FunctionalityType.CHAT,
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    client_feature: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.ClientFeature.CHROME_FREESTYLER
                };
                return request;
            }
        },
        {
            key: "parseResponse",
            value: function parseResponse(response) {
                var lines = response.split('\n');
                var thought;
                var action;
                var answer;
                var i = 0;
                while(i < lines.length){
                    var trimmed = lines[i].trim();
                    if (trimmed.startsWith('THOUGHT:') && !thought) {
                        // TODO: multiline thoughts.
                        thought = trimmed.substring('THOUGHT:'.length).trim();
                        i++;
                    } else if (trimmed.startsWith('ACTION') && !action) {
                        var actionLines = [];
                        var j = i + 1;
                        while(j < lines.length && lines[j].trim() !== 'STOP'){
                            // Sometimes the code block is in the form of "`````\njs\n{code}`````"
                            if (lines[j].trim() !== 'js') {
                                actionLines.push(lines[j]);
                            }
                            j++;
                        }
                        // TODO: perhaps trying to parse with a Markdown parser would
                        // yield more reliable results.
                        action = actionLines.join('\n').replaceAll('```', '').replaceAll('``', '').trim();
                        i = j + 1;
                    } else if (trimmed.startsWith('ANSWER:') && !answer) {
                        var answerLines = [
                            trimmed.substring('ANSWER:'.length).trim()
                        ];
                        var j1 = i + 1;
                        while(j1 < lines.length){
                            var line = lines[j1].trim();
                            if (line.startsWith('ACTION') || line.startsWith('OBSERVATION:') || line.startsWith('THOUGHT:')) {
                                break;
                            }
                            answerLines.push(lines[j1]);
                            j1++;
                        }
                        answer = answerLines.join('\n').trim();
                        i = j1;
                    } else {
                        i++;
                    }
                }
                // If we could not parse the parts, consider the response to be an
                // answer.
                if (!answer && !thought && !action) {
                    answer = response;
                }
                return {
                    thought: thought,
                    action: action,
                    answer: answer
                };
            }
        }
    ]);
    return FreestylerAgent;
}();
function get_getHistoryEntry() {
    return _to_consumable_array(_class_private_field_get(this, _chatHistory).values()).flat();
}
function aidaFetch(request) {
    return _aidaFetch1.apply(this, arguments);
}
function _aidaFetch1() {
    _aidaFetch1 = _async_to_generator(function(request) {
        var response, rpcId, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, lastResult, _lastResult_metadata_attributionMetadata, _lastResult_metadata_rpcGlobalId, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    response = '';
                    _iteratorAbruptCompletion = false, _didIteratorError = false;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        6,
                        7,
                        12
                    ]);
                    _iterator = _async_iterator(_class_private_field_get(this, _aidaClient).fetch(request));
                    _state.label = 2;
                case 2:
                    return [
                        4,
                        _iterator.next()
                    ];
                case 3:
                    if (!(_iteratorAbruptCompletion = !(_step = _state.sent()).done)) return [
                        3,
                        5
                    ];
                    _value = _step.value;
                    lastResult = _value;
                    response = lastResult.explanation;
                    rpcId = (_lastResult_metadata_rpcGlobalId = lastResult.metadata.rpcGlobalId) !== null && _lastResult_metadata_rpcGlobalId !== void 0 ? _lastResult_metadata_rpcGlobalId : rpcId;
                    if ((_lastResult_metadata_attributionMetadata = lastResult.metadata.attributionMetadata) === null || _lastResult_metadata_attributionMetadata === void 0 ? void 0 : _lastResult_metadata_attributionMetadata.some(function(meta) {
                        return meta.attributionAction === _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.RecitationAction.BLOCK;
                    })) {
                        throw new Error('Attribution action does not allow providing the response');
                    }
                    _state.label = 4;
                case 4:
                    _iteratorAbruptCompletion = false;
                    return [
                        3,
                        2
                    ];
                case 5:
                    return [
                        3,
                        12
                    ];
                case 6:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        12
                    ];
                case 7:
                    _state.trys.push([
                        7,
                        ,
                        10,
                        11
                    ]);
                    if (!(_iteratorAbruptCompletion && _iterator.return != null)) return [
                        3,
                        9
                    ];
                    return [
                        4,
                        _iterator.return()
                    ];
                case 8:
                    _state.sent();
                    _state.label = 9;
                case 9:
                    return [
                        3,
                        11
                    ];
                case 10:
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                    return [
                        7
                    ];
                case 11:
                    return [
                        7
                    ];
                case 12:
                    return [
                        2,
                        {
                            response: response,
                            rpcId: rpcId
                        }
                    ];
            }
        });
    });
    return _aidaFetch1.apply(this, arguments);
}
function generateObservation(action, _) {
    return _generateObservation1.apply(this, arguments);
}
function _generateObservation1() {
    _generateObservation1 = _async_to_generator(function(action, param) {
        var throwOnSideEffect, confirm, denyErrorMessage, actionExpression, _confirm_call, runConfirmed, result, byteCount, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    throwOnSideEffect = param.throwOnSideEffect, confirm = param.confirmExecJs, denyErrorMessage = param.execJsDeniedMesssage;
                    actionExpression = "{".concat(action, ';((typeof data !== "undefined") ? data : undefined)}');
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        4,
                        ,
                        7
                    ]);
                    return [
                        4,
                        (_confirm_call = confirm === null || confirm === void 0 ? void 0 : confirm.call(this, action)) !== null && _confirm_call !== void 0 ? _confirm_call : Promise.resolve(true)
                    ];
                case 2:
                    runConfirmed = _state.sent();
                    if (!runConfirmed) {
                        throw new Error(denyErrorMessage !== null && denyErrorMessage !== void 0 ? denyErrorMessage : 'Code execution is not allowed');
                    }
                    return [
                        4,
                        _class_private_field_get(this, _execJs).call(this, actionExpression, {
                            throwOnSideEffect: throwOnSideEffect
                        })
                    ];
                case 3:
                    result = _state.sent();
                    byteCount = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.countWtf8Bytes(result);
                    if (byteCount > MAX_OBSERVATION_BYTE_LENGTH) {
                        throw new Error('Output exceeded the maximum allowed length.');
                    }
                    return [
                        2,
                        result
                    ];
                case 4:
                    error = _state.sent();
                    if (!_instanceof(error, _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_5__.SideEffectError)) return [
                        3,
                        6
                    ];
                    return [
                        4,
                        _class_private_method_get(this, _generateObservation, generateObservation).call(this, action, {
                            throwOnSideEffect: false,
                            confirmExecJs: _class_private_field_get(this, _confirmSideEffect),
                            execJsDeniedMesssage: error.message
                        })
                    ];
                case 5:
                    return [
                        2,
                        _state.sent()
                    ];
                case 6:
                    return [
                        2,
                        "Error: ".concat(error.message)
                    ];
                case 7:
                    return [
                        2
                    ];
            }
        });
    });
    return _generateObservation1.apply(this, arguments);
}
function isDebugMode() {
    return Boolean(localStorage.getItem('debugFreestylerEnabled'));
}
function debugLog() {
    for(var _len = arguments.length, log = new Array(_len), _key = 0; _key < _len; _key++){
        log[_key] = arguments[_key];
    }
    var // eslint-disable-next-line no-console
    _console;
    if (!isDebugMode()) {
        return;
    }
    (_console = console).log.apply(_console, _to_consumable_array(log));
}
function setDebugFreestylerEnabled(enabled) {
    if (enabled) {
        localStorage.setItem('debugFreestylerEnabled', 'true');
    } else {
        localStorage.removeItem('debugFreestylerEnabled');
    }
}
// @ts-ignore
globalThis.setDebugFreestylerEnabled = setDebugFreestylerEnabled; //# sourceMappingURL=FreestylerAgent.js.map


}),

}]);