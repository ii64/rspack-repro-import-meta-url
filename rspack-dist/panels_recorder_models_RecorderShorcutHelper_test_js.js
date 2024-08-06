"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_models_RecorderShorcutHelper_test_js"], {
"./panels/recorder/models/RecorderShorcutHelper.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
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


describe('RecorderShortcutHelper', function() {
    var waitFor = function waitFor(time) {
        return new Promise(function(resolve) {
            return setTimeout(resolve, time);
        });
    };
    var dispatchShortcut = function dispatchShortcut() {
        var event = new KeyboardEvent('keyup', {
            key: 'E',
            ctrlKey: _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.Platform.isMac() ? false : true,
            metaKey: _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.Platform.isMac() ? true : false,
            bubbles: true,
            composed: true
        });
        document.dispatchEvent(event);
    };
    it('should wait for timeout', /*#__PURE__*/ _async_to_generator(function() {
        var time, helper, stub;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    time = 10;
                    helper = new _models_js__WEBPACK_IMPORTED_MODULE_1__.RecorderShortcutHelper.RecorderShortcutHelper(time);
                    stub = sinon.stub();
                    helper.handleShortcut(stub);
                    return [
                        4,
                        waitFor(time + 10)
                    ];
                case 1:
                    _state.sent();
                    assert.strictEqual(stub.callCount, 1);
                    dispatchShortcut();
                    assert.strictEqual(stub.callCount, 1);
                    return [
                        2
                    ];
            }
        });
    }));
    it('should stop on click', /*#__PURE__*/ _async_to_generator(function() {
        var time, helper, stub;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    time = 100;
                    helper = new _models_js__WEBPACK_IMPORTED_MODULE_1__.RecorderShortcutHelper.RecorderShortcutHelper(time);
                    stub = sinon.stub();
                    helper.handleShortcut(stub);
                    dispatchShortcut();
                    return [
                        4,
                        waitFor(time / 2)
                    ];
                case 1:
                    _state.sent();
                    assert.strictEqual(stub.callCount, 1);
                    return [
                        4,
                        waitFor(time)
                    ];
                case 2:
                    _state.sent();
                    assert.strictEqual(stub.callCount, 1);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=RecorderShorcutHelper.test.js.map


}),

}]);