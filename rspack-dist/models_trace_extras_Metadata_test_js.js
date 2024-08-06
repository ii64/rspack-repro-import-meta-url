"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_extras_Metadata_test_js"], {
"./models/trace/extras/Metadata.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _trace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
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



(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('Trace Metadata', function() {
    it('returns the associated metadata', /*#__PURE__*/ _async_to_generator(function() {
        var cpuThrottlingManager, networkManager, metadata;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    cpuThrottlingManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CPUThrottlingManager.CPUThrottlingManager.instance({
                        forceNew: true
                    });
                    sinon.stub(cpuThrottlingManager, 'hasPrimaryPageTargetSet').returns(true);
                    sinon.stub(cpuThrottlingManager, 'getHardwareConcurrency').returns(Promise.resolve(1));
                    sinon.stub(cpuThrottlingManager, 'cpuThrottlingRate').returns(2);
                    networkManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.MultitargetNetworkManager.instance({
                        forceNew: true
                    });
                    sinon.stub(networkManager, 'networkConditions').returns({
                        title: 'Slow 3G',
                        download: 1,
                        upload: 1,
                        latency: 1
                    });
                    return [
                        4,
                        _trace_js__WEBPACK_IMPORTED_MODULE_2__.Extras.Metadata.forNewRecording(/* isCpuProfile= */ false)
                    ];
                case 1:
                    metadata = _state.sent();
                    assert.deepEqual(metadata, {
                        source: 'DevTools',
                        startTime: undefined,
                        cpuThrottling: 2,
                        networkThrottling: 'Slow 3G',
                        dataOrigin: "TraceEvents" /* TraceEngine.Types.File.DataOrigin.TraceEvents */ ,
                        hardwareConcurrency: 1
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    it('calls the title function if the network condition title is a function', /*#__PURE__*/ _async_to_generator(function() {
        var cpuThrottlingManager, networkManager, metadata;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    cpuThrottlingManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CPUThrottlingManager.CPUThrottlingManager.instance({
                        forceNew: true
                    });
                    sinon.stub(cpuThrottlingManager, 'hasPrimaryPageTargetSet').returns(true);
                    sinon.stub(cpuThrottlingManager, 'getHardwareConcurrency').returns(Promise.resolve(1));
                    sinon.stub(cpuThrottlingManager, 'cpuThrottlingRate').returns(2);
                    networkManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.MultitargetNetworkManager.instance({
                        forceNew: true
                    });
                    sinon.stub(networkManager, 'networkConditions').returns({
                        title: function() {
                            return 'Slow 3G';
                        },
                        download: 1,
                        upload: 1,
                        latency: 1
                    });
                    return [
                        4,
                        _trace_js__WEBPACK_IMPORTED_MODULE_2__.Extras.Metadata.forNewRecording(/* isCpuProfile= */ false)
                    ];
                case 1:
                    metadata = _state.sent();
                    assert.deepEqual(metadata, {
                        source: 'DevTools',
                        startTime: undefined,
                        cpuThrottling: 2,
                        networkThrottling: 'Slow 3G',
                        dataOrigin: "TraceEvents" /* TraceEngine.Types.File.DataOrigin.TraceEvents */ ,
                        hardwareConcurrency: 1
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not return hardware concurrency if the manager has no target', /*#__PURE__*/ _async_to_generator(function() {
        var cpuThrottlingManager, getHardwareConcurrencyStub, networkManager, metadata;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    cpuThrottlingManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CPUThrottlingManager.CPUThrottlingManager.instance({
                        forceNew: true
                    });
                    sinon.stub(cpuThrottlingManager, 'hasPrimaryPageTargetSet').returns(false);
                    getHardwareConcurrencyStub = sinon.stub(cpuThrottlingManager, 'getHardwareConcurrency');
                    sinon.stub(cpuThrottlingManager, 'cpuThrottlingRate').returns(2);
                    networkManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.MultitargetNetworkManager.instance({
                        forceNew: true
                    });
                    sinon.stub(networkManager, 'networkConditions').returns({
                        title: function() {
                            return 'Slow 3G';
                        },
                        download: 1,
                        upload: 1,
                        latency: 1
                    });
                    return [
                        4,
                        _trace_js__WEBPACK_IMPORTED_MODULE_2__.Extras.Metadata.forNewRecording(/* isCpuProfile= */ false)
                    ];
                case 1:
                    metadata = _state.sent();
                    assert.deepEqual(metadata, {
                        source: 'DevTools',
                        startTime: undefined,
                        cpuThrottling: 2,
                        networkThrottling: 'Slow 3G',
                        dataOrigin: "TraceEvents" /* TraceEngine.Types.File.DataOrigin.TraceEvents */ ,
                        hardwareConcurrency: undefined
                    });
                    assert.strictEqual(getHardwareConcurrencyStub.callCount, 0);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=Metadata.test.js.map


}),

}]);