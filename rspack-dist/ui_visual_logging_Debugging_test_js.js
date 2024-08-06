"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_visual_logging_Debugging_test_js"], {
"./ui/visual_logging/Debugging.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visual_logging-testing.js */ "./ui/visual_logging/visual_logging-testing.js");
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

describe('LoggingDriver', function() {
    it('marks loggable elements for debugging', /*#__PURE__*/ _async_to_generator(function() {
        var element;
        return _ts_generator(this, function(_state) {
            // @ts-ignore
            globalThis.setVeDebuggingEnabled(true);
            element = document.createElement('div');
            _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.LoggingState.getOrCreateLoggingState(element, {
                ve: 1
            });
            _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.Debugging.processForDebugging(element);
            assert.strictEqual(element.style.outline, 'red solid 1px');
            return [
                2
            ];
        });
    }));
    it('builds a debug string', function() {
        assert.strictEqual(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.Debugging.debugString({
            ve: 1
        }), 'TreeItem');
        assert.strictEqual(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.Debugging.debugString({
            ve: 1,
            context: '42'
        }), 'TreeItem; context: 42');
        assert.strictEqual(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.Debugging.debugString({
            ve: 1,
            track: {
                click: true
            }
        }), 'TreeItem; track: click');
        assert.strictEqual(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.Debugging.debugString({
            ve: 1,
            track: {
                click: true,
                change: true
            }
        }), 'TreeItem; track: click, change');
        assert.strictEqual(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.Debugging.debugString({
            ve: 1,
            track: {
                keydown: 'Enter'
            }
        }), 'TreeItem; track: keydown: Enter');
        assert.strictEqual(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.Debugging.debugString({
            ve: 1,
            context: '42',
            track: {
                keydown: 'Enter'
            }
        }), 'TreeItem; context: 42; track: keydown: Enter');
    });
}); //# sourceMappingURL=Debugging.test.js.map


}),
"./ui/visual_logging/visual_logging-testing.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Debugging: function() { return /* reexport module object */ _Debugging_js__WEBPACK_IMPORTED_MODULE_0__; },
  DomState: function() { return /* reexport module object */ _DomState_js__WEBPACK_IMPORTED_MODULE_1__; },
  LoggingConfig: function() { return /* reexport module object */ _LoggingConfig_js__WEBPACK_IMPORTED_MODULE_2__; },
  LoggingDriver: function() { return /* reexport module object */ _LoggingDriver_js__WEBPACK_IMPORTED_MODULE_3__; },
  LoggingEvents: function() { return /* reexport module object */ _LoggingEvents_js__WEBPACK_IMPORTED_MODULE_4__; },
  LoggingState: function() { return /* reexport module object */ _LoggingState_js__WEBPACK_IMPORTED_MODULE_5__; },
  NonDomState: function() { return /* reexport module object */ _NonDomState_js__WEBPACK_IMPORTED_MODULE_6__; }
});
/* harmony import */var _Debugging_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Debugging.js */ "./ui/visual_logging/Debugging.js");
/* harmony import */var _DomState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DomState.js */ "./ui/visual_logging/DomState.js");
/* harmony import */var _LoggingConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoggingConfig.js */ "./ui/visual_logging/LoggingConfig.js");
/* harmony import */var _LoggingDriver_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoggingDriver.js */ "./ui/visual_logging/LoggingDriver.js");
/* harmony import */var _LoggingEvents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoggingEvents.js */ "./ui/visual_logging/LoggingEvents.js");
/* harmony import */var _LoggingState_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoggingState.js */ "./ui/visual_logging/LoggingState.js");
/* harmony import */var _NonDomState_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NonDomState.js */ "./ui/visual_logging/NonDomState.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







 //# sourceMappingURL=visual_logging-testing.js.map


}),

}]);