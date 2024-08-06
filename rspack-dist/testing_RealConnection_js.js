"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["testing_RealConnection_js"], {
"./testing/RealConnection.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  describeWithRealConnection: function() { return describeWithRealConnection; },
  flushRealConnectionSuits: function() { return flushRealConnectionSuits; },
  getExecutionContext: function() { return getExecutionContext; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/protocol_client/protocol_client.js */ "./core/protocol_client/protocol_client.js");
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _entrypoints_main_main_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../entrypoints/main/main.js */ "./entrypoints/main/main.js");
/* harmony import */var _EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
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







var initialized = false;
function describeBody(fn) {
    before('describeWithRealConnection', /*#__PURE__*/ _async_to_generator(function() {
        var response, targetList, mainTarget, originalTargetId, target, remoteDebuggingPort, main;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (initialized) {
                        return [
                            2
                        ];
                    }
                    return [
                        4,
                        (0,_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.deinitializeGlobalVars)()
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        Promise.resolve(/*! import() */ ).then(__webpack_require__.bind(__webpack_require__, /*! ../entrypoints/shell/shell.js */ "./entrypoints/shell/shell.js"))
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        Promise.resolve(/*! import() */ ).then(__webpack_require__.bind(__webpack_require__, /*! ../panels/elements/elements-meta.js */ "./panels/elements/elements-meta.js"))
                    ];
                case 3:
                    _state.sent();
                    return [
                        4,
                        Promise.resolve(/*! import() */ ).then(__webpack_require__.bind(__webpack_require__, /*! ../panels/sensors/sensors-meta.js */ "./panels/sensors/sensors-meta.js"))
                    ];
                case 4:
                    _state.sent();
                    return [
                        4,
                        Promise.resolve(/*! import() */ ).then(__webpack_require__.bind(__webpack_require__, /*! ../entrypoints/inspector_main/inspector_main-meta.js */ "./entrypoints/inspector_main/inspector_main-meta.js"))
                    ];
                case 5:
                    _state.sent();
                    return [
                        4,
                        fetch('/json/list', {
                            method: 'PUT'
                        })
                    ];
                case 6:
                    response = _state.sent();
                    return [
                        4,
                        response.json()
                    ];
                case 7:
                    targetList = _state.sent();
                    // There can be more than one target here. When debugging tests, the "main" test suite run and the debug test suite
                    // run happen in different contexts and don't share `initialized`, but the do share the same chrome instance and
                    // thus target list.
                    mainTarget = targetList.find(function(t) {
                        return t.title === 'Karma';
                    });
                    if (!mainTarget) {
                        console.error('A target could not be found. This can happen if you are accidentally running multiple instances of Karma at once. Make sure you don\'t have any debug sessions active when trying to run the unittests.');
                        throw new Error('Main test target not found');
                    }
                    originalTargetId = mainTarget.id;
                    return [
                        4,
                        fetch('/json/new', {
                            method: 'PUT'
                        })
                    ];
                case 8:
                    response = _state.sent();
                    return [
                        4,
                        response.json()
                    ];
                case 9:
                    target = _state.sent();
                    return [
                        4,
                        fetch('/json/activate/' + originalTargetId, {
                            method: 'PUT'
                        })
                    ];
                case 10:
                    _state.sent();
                    /* This value comes from the `client.targetDir` setting in `karma.conf.js` */ // eslint-disable-next-line @typescript-eslint/naming-convention
                    remoteDebuggingPort = globalThis.__karma__.config.remoteDebuggingPort;
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.Runtime.setQueryParamForTesting('ws', "localhost:".concat(remoteDebuggingPort, "/devtools/page/").concat(target.id));
                    main = new _entrypoints_main_main_js__WEBPACK_IMPORTED_MODULE_5__.MainImpl.MainImpl();
                    return [
                        4,
                        main.readyForTest()
                    ];
                case 11:
                    _state.sent();
                    initialized = true;
                    return [
                        2
                    ];
            }
        });
    }));
    beforeEach('describeWithRealConnection', function() {
        resetHostBindingStubState();
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().clearAll();
    });
    fn();
    afterEach('describeWithRealConnection', /*#__PURE__*/ _async_to_generator(function() {
        var runAfterPendingDispatches;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    runAfterPendingDispatches = _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_2__.InspectorBackend.test.deprecatedRunAfterPendingDispatches;
                    if (!runAfterPendingDispatches) {
                        throw new Error('Missing deprecatedRunAfterPendingDispatches');
                    }
                    return [
                        4,
                        new Promise(function(resolve) {
                            return runAfterPendingDispatches(resolve);
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
}
var realConnectionSuites = [];
function describeWithRealConnection(title, fn) {
    realConnectionSuites.push({
        title: title,
        fn: fn,
        only: false
    });
}
// eslint-disable-next-line mocha/no-exclusive-tests
describeWithRealConnection.only = function(title, fn) {
    realConnectionSuites.push({
        title: title,
        fn: fn,
        only: true
    });
};
function flushRealConnectionSuits() {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        var _loop = function() {
            var _step_value = _step.value, title = _step_value.title, fn = _step_value.fn, only = _step_value.only;
            if (only) {
                // eslint-disable-next-line mocha/no-exclusive-tests
                describe.only(title, function() {
                    describeBody(fn.bind(this));
                });
            } else {
                describe(title, function() {
                    describeBody(fn.bind(this));
                });
            }
        };
        for(var _iterator = realConnectionSuites[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
function getExecutionContext(runtimeModel) {
    return _getExecutionContext.apply(this, arguments);
}
function _getExecutionContext() {
    _getExecutionContext = _async_to_generator(function(runtimeModel) {
        var executionContexts;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    executionContexts = runtimeModel.executionContexts();
                    if (!!executionContexts.length) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        new Promise(function(resolve) {
                            var listener = function() {
                                runtimeModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.RuntimeModel.Events.ExecutionContextCreated, listener);
                                executionContexts = runtimeModel.executionContexts();
                                resolve();
                            };
                            runtimeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.RuntimeModel.Events.ExecutionContextCreated, listener);
                        })
                    ];
                case 1:
                    _state.sent();
                    _state.label = 2;
                case 2:
                    if (!executionContexts.length) {
                        throw new Error('Cannot get executionContext');
                    }
                    return [
                        2,
                        executionContexts[0]
                    ];
            }
        });
    });
    return _getExecutionContext.apply(this, arguments);
}
function resetHostBindingStubState() {
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.recordedCountHistograms.splice(0);
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.recordedEnumeratedHistograms.splice(0);
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.recordedPerformanceHistograms.splice(0);
} //# sourceMappingURL=RealConnection.js.map


}),

}]);