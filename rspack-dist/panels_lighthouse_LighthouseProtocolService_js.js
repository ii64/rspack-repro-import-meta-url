"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_lighthouse_LighthouseProtocolService_js"], {
"./entrypoints/lighthouse_worker/lighthouse_worker.js?92dd": (function (module, __unused_webpack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "654c371de022bba5c297.js";

}),
"./panels/lighthouse/LighthouseProtocolService.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ProtocolService: function() { return ProtocolService; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2018 The Chromium Authors. All rights reserved.
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
        var self1 = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self1, args);
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


/* eslint-disable jsdoc/check-alignment */ /**
 * @overview
                                                   ┌────────────┐
                                                   │CDP Backend │
                                                   └────────────┘
                                                        │ ▲
                                                        │ │ parallelConnection
                          ┌┐                            ▼ │                     ┌┐
                          ││   dispatchProtocolMessage     sendProtocolMessage  ││
                          ││                     │          ▲                   ││
          ProtocolService ││                     |          │                   ││
                          ││    sendWithResponse ▼          │                   ││
                          ││              │    send          onWorkerMessage    ││
                          └┘              │    │                 ▲              └┘
          worker boundary - - - - - - - - ┼ - -│- - - - - - - - -│- - - - - - - - - - - -
                          ┌┐              ▼    ▼                 │                    ┌┐
                          ││   onFrontendMessage      notifyFrontendViaWorkerMessage  ││
                          ││                   │       ▲                              ││
                          ││                   ▼       │                              ││
LighthouseWorkerService   ││          Either ConnectionProxy or LegacyPort            ││
                          ││                           │ ▲                            ││
                          ││     ┌─────────────────────┼─┼───────────────────────┐    ││
                          ││     │  Lighthouse    ┌────▼──────┐                  │    ││
                          ││     │                │connection │                  │    ││
                          ││     │                └───────────┘                  │    ││
                          └┘     └───────────────────────────────────────────────┘    └┘

 * All messages traversing the worker boundary are action-wrapped.
 * All messages over the parallelConnection speak pure CDP.
 * All messages within ConnectionProxy/LegacyPort speak pure CDP.
 * The foundational CDP connection is `parallelConnection`.
 * All connections within the worker are not actual ParallelConnection's.
 */ /* eslint-enable jsdoc/check-alignment */ var lastId = 1;
/**
 * ProtocolService manages a connection between the frontend (Lighthouse panel) and the Lighthouse worker.
 */ var ProtocolService = /*#__PURE__*/ function() {
    "use strict";
    function ProtocolService() {
        _class_call_check(this, ProtocolService);
        _define_property(this, "mainSessionId", void 0);
        _define_property(this, "rootTargetId", void 0);
        _define_property(this, "parallelConnection", void 0);
        _define_property(this, "lighthouseWorkerPromise", void 0);
        _define_property(this, "lighthouseMessageUpdateCallback", void 0);
        _define_property(this, "removeDialogHandler", void 0);
        _define_property(this, "configForTesting", void 0);
    }
    _create_class(ProtocolService, [
        {
            key: "attach",
            value: function attach() {
                var _this = this;
                return _async_to_generator(function() {
                    var mainTarget, rootTarget, childTargetManager, resourceTreeModel, rootChildTargetManager, _ref, connection, sessionId, dialogHandler;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().suspendAllTargets()
                                ];
                            case 1:
                                _state.sent();
                                mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().primaryPageTarget();
                                if (!mainTarget) {
                                    throw new Error('Unable to find main target required for Lighthouse');
                                }
                                rootTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().rootTarget();
                                if (!rootTarget) {
                                    throw new Error('Could not find the root target');
                                }
                                childTargetManager = mainTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ChildTargetManager.ChildTargetManager);
                                if (!childTargetManager) {
                                    throw new Error('Unable to find child target manager required for Lighthouse');
                                }
                                resourceTreeModel = mainTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
                                if (!resourceTreeModel) {
                                    throw new Error('Unable to find resource tree model required for Lighthouse');
                                }
                                rootChildTargetManager = rootTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ChildTargetManager.ChildTargetManager);
                                if (!rootChildTargetManager) {
                                    throw new Error('Could not find the child target manager class for the root target');
                                }
                                return [
                                    4,
                                    rootChildTargetManager.createParallelConnection(function(message) {
                                        if (typeof message === 'string') {
                                            message = JSON.parse(message);
                                        }
                                        _this.dispatchProtocolMessage(message);
                                    })
                                ];
                            case 2:
                                _ref = _state.sent(), connection = _ref.connection, sessionId = _ref.sessionId;
                                // Lighthouse implements its own dialog handler like this, however its lifecycle ends when
                                // the internal Lighthouse session is disposed.
                                //
                                // If the page is reloaded near the end of the run (e.g. bfcache testing), the Lighthouse
                                // internal session can be disposed before a dialog message appears. This allows the dialog
                                // to block important Lighthouse teardown operations in LighthouseProtocolService.
                                //
                                // To ensure the teardown operations can proceed, we need a dialog handler which lasts until
                                // the LighthouseProtocolService detaches.
                                dialogHandler = function() {
                                    void mainTarget.pageAgent().invoke_handleJavaScriptDialog({
                                        accept: true
                                    });
                                };
                                resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.JavaScriptDialogOpening, dialogHandler);
                                _this.removeDialogHandler = function() {
                                    return resourceTreeModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.JavaScriptDialogOpening, dialogHandler);
                                };
                                _this.parallelConnection = connection;
                                return [
                                    4,
                                    rootChildTargetManager.getParentTargetId()
                                ];
                            case 3:
                                _this.rootTargetId = _state.sent();
                                _this.mainSessionId = sessionId;
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getLocales",
            value: function getLocales() {
                return [
                    _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsLocale.DevToolsLocale.instance().locale
                ];
            }
        },
        {
            key: "startTimespan",
            value: function startTimespan(currentLighthouseRun) {
                var _this = this;
                return _async_to_generator(function() {
                    var inspectedURL, categoryIDs, flags;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                inspectedURL = currentLighthouseRun.inspectedURL, categoryIDs = currentLighthouseRun.categoryIDs, flags = currentLighthouseRun.flags;
                                if (!_this.mainSessionId || !_this.rootTargetId) {
                                    throw new Error('Unable to get target info required for Lighthouse');
                                }
                                return [
                                    4,
                                    _this.sendWithResponse('startTimespan', {
                                        url: inspectedURL,
                                        categoryIDs: categoryIDs,
                                        flags: flags,
                                        config: _this.configForTesting,
                                        locales: _this.getLocales(),
                                        mainSessionId: _this.mainSessionId,
                                        rootTargetId: _this.rootTargetId
                                    })
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
            key: "collectLighthouseResults",
            value: function collectLighthouseResults(currentLighthouseRun) {
                var _this = this;
                return _async_to_generator(function() {
                    var inspectedURL, categoryIDs, flags, mode;
                    return _ts_generator(this, function(_state) {
                        inspectedURL = currentLighthouseRun.inspectedURL, categoryIDs = currentLighthouseRun.categoryIDs, flags = currentLighthouseRun.flags;
                        if (!_this.mainSessionId || !_this.rootTargetId) {
                            throw new Error('Unable to get target info required for Lighthouse');
                        }
                        mode = flags.mode;
                        if (mode === 'timespan') {
                            mode = 'endTimespan';
                        }
                        return [
                            2,
                            _this.sendWithResponse(mode, {
                                url: inspectedURL,
                                categoryIDs: categoryIDs,
                                flags: flags,
                                config: _this.configForTesting,
                                locales: _this.getLocales(),
                                mainSessionId: _this.mainSessionId,
                                rootTargetId: _this.rootTargetId
                            })
                        ];
                    });
                })();
            }
        },
        {
            key: "detach",
            value: function detach() {
                var _this = this;
                return _async_to_generator(function() {
                    var _this_removeDialogHandler, _this1, oldLighthouseWorker, oldParallelConnection;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                oldLighthouseWorker = _this.lighthouseWorkerPromise;
                                oldParallelConnection = _this.parallelConnection;
                                // When detaching, make sure that we remove the old promises, before we
                                // perform any async cleanups. That way, if there is a message coming from
                                // lighthouse while we are in the process of cleaning up, we shouldn't deliver
                                // them to the backend.
                                _this.lighthouseWorkerPromise = undefined;
                                _this.parallelConnection = undefined;
                                if (!oldLighthouseWorker) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    oldLighthouseWorker
                                ];
                            case 1:
                                _state.sent().terminate();
                                _state.label = 2;
                            case 2:
                                if (!oldParallelConnection) return [
                                    3,
                                    4
                                ];
                                return [
                                    4,
                                    oldParallelConnection.disconnect()
                                ];
                            case 3:
                                _state.sent();
                                _state.label = 4;
                            case 4:
                                return [
                                    4,
                                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().resumeAllTargets()
                                ];
                            case 5:
                                _state.sent();
                                (_this_removeDialogHandler = (_this1 = _this).removeDialogHandler) === null || _this_removeDialogHandler === void 0 ? void 0 : _this_removeDialogHandler.call(_this1);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "registerStatusCallback",
            value: function registerStatusCallback(callback) {
                this.lighthouseMessageUpdateCallback = callback;
            }
        },
        {
            key: "dispatchProtocolMessage",
            value: function dispatchProtocolMessage(message) {
                // A message without a sessionId is the main session of the main target (call it "Main session").
                // A parallel connection and session was made that connects to the same main target (call it "Lighthouse session").
                // Messages from the "Lighthouse session" have a sessionId.
                // Without some care, there is a risk of sending the same events for the same main frame to Lighthouse–the backend
                // will create events for the "Main session" and the "Lighthouse session".
                // The workaround–only send message to Lighthouse if:
                //   * the message has a sessionId (is not for the "Main session")
                //   * the message does not have a sessionId (is for the "Main session"), but only for the Target domain
                //     (to kickstart autoAttach in LH).
                var protocolMessage = message;
                if (protocolMessage.sessionId || protocolMessage.method && protocolMessage.method.startsWith('Target')) {
                    void this.send('dispatchProtocolMessage', {
                        message: message
                    });
                }
            }
        },
        {
            key: "initWorker",
            value: function initWorker() {
                var _this = this;
                this.lighthouseWorkerPromise = new Promise(function(resolve) {
                    var workerUrl = new URL(/* asset import */__webpack_require__(/*! ../../entrypoints/lighthouse_worker/lighthouse_worker.js */ "./entrypoints/lighthouse_worker/lighthouse_worker.js?92dd"), __webpack_require__.b);
                    var remoteBaseSearchParam = new URL(self.location.href).searchParams.get('remoteBase');
                    if (remoteBaseSearchParam) {
                        // Allows Lighthouse worker to fetch remote locale files.
                        workerUrl.searchParams.set('remoteBase', remoteBaseSearchParam);
                    }
                    var worker = new Worker(workerUrl, {
                        type: 'module'
                    });
                    worker.addEventListener('message', function(event) {
                        if (event.data === 'workerReady') {
                            resolve(worker);
                            return;
                        }
                        _this.onWorkerMessage(event);
                    });
                });
                return this.lighthouseWorkerPromise;
            }
        },
        {
            key: "ensureWorkerExists",
            value: function ensureWorkerExists() {
                var _this = this;
                return _async_to_generator(function() {
                    var worker;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!!_this.lighthouseWorkerPromise) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this.initWorker()
                                ];
                            case 1:
                                worker = _state.sent();
                                return [
                                    3,
                                    4
                                ];
                            case 2:
                                return [
                                    4,
                                    _this.lighthouseWorkerPromise
                                ];
                            case 3:
                                worker = _state.sent();
                                _state.label = 4;
                            case 4:
                                return [
                                    2,
                                    worker
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "onWorkerMessage",
            value: function onWorkerMessage(event) {
                var lighthouseMessage = event.data;
                if (lighthouseMessage.action === 'statusUpdate') {
                    if (this.lighthouseMessageUpdateCallback && lighthouseMessage.args && 'message' in lighthouseMessage.args) {
                        this.lighthouseMessageUpdateCallback(lighthouseMessage.args.message);
                    }
                } else if (lighthouseMessage.action === 'sendProtocolMessage') {
                    if (lighthouseMessage.args && 'message' in lighthouseMessage.args) {
                        this.sendProtocolMessage(lighthouseMessage.args.message);
                    }
                }
            }
        },
        {
            key: "sendProtocolMessage",
            value: function sendProtocolMessage(message) {
                if (this.parallelConnection) {
                    this.parallelConnection.sendRawMessage(message);
                }
            }
        },
        {
            key: "send",
            value: function send(action) {
                var args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var worker, messageId;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.ensureWorkerExists()
                                ];
                            case 1:
                                worker = _state.sent();
                                messageId = lastId++;
                                worker.postMessage({
                                    id: messageId,
                                    action: action,
                                    args: _object_spread_props(_object_spread({}, args), {
                                        id: messageId
                                    })
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
            key: "sendWithResponse",
            value: /** sendWithResponse currently only handles the original startLighthouse request and LHR-filled response. */ function sendWithResponse(action) {
                var args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var worker, messageId, messageResult;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.ensureWorkerExists()
                                ];
                            case 1:
                                worker = _state.sent();
                                messageId = lastId++;
                                messageResult = new Promise(function(resolve) {
                                    var workerListener = function(event) {
                                        var lighthouseMessage = event.data;
                                        if (lighthouseMessage.id === messageId) {
                                            worker.removeEventListener('message', workerListener);
                                            resolve(lighthouseMessage.result);
                                        }
                                    };
                                    worker.addEventListener('message', workerListener);
                                });
                                worker.postMessage({
                                    id: messageId,
                                    action: action,
                                    args: _object_spread_props(_object_spread({}, args), {
                                        id: messageId
                                    })
                                });
                                return [
                                    2,
                                    messageResult
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return ProtocolService;
} //# sourceMappingURL=LighthouseProtocolService.js.map
();


}),

}]);