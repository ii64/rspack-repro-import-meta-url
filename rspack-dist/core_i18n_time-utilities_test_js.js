"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_i18n_time-utilities_test_js"], {
"./core/i18n/time-utilities.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n.js */ "./core/i18n/i18n.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
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


(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithLocale)('preciseMillisToString', function() {
    it('formats without a given precision', function() {
        var inputNumber = 7.84;
        var outputString = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.preciseMillisToString(inputNumber);
        assert.strictEqual(outputString, '8\xA0ms');
    });
    it('formats without a given precision', function() {
        var inputNumber = 7.84;
        var precision = 2;
        var outputString = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.preciseMillisToString(inputNumber, precision);
        assert.strictEqual(outputString, '7.84\xA0ms');
    });
});
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithLocale)('formatMicroSecondsTime', function() {
    var formatMicroSecondsTime = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.formatMicroSecondsTime;
    it('formats small microsecond values', /*#__PURE__*/ _async_to_generator(function() {
        var time;
        return _ts_generator(this, function(_state) {
            time = 8;
            assert.strictEqual(formatMicroSecondsTime(time), '8\xA0μs');
            return [
                2
            ];
        });
    }));
    it('formats larger microsecond values as milliseconds', /*#__PURE__*/ _async_to_generator(function() {
        var time;
        return _ts_generator(this, function(_state) {
            time = 892;
            assert.strictEqual(formatMicroSecondsTime(time), '0.89\xA0ms');
            return [
                2
            ];
        });
    }));
    it('formats milliseconds', /*#__PURE__*/ _async_to_generator(function() {
        var time;
        return _ts_generator(this, function(_state) {
            time = 8.9122 * 1000;
            assert.strictEqual(formatMicroSecondsTime(time), '8.91\xA0ms');
            return [
                2
            ];
        });
    }));
    it('formats seconds', /*#__PURE__*/ _async_to_generator(function() {
        var time;
        return _ts_generator(this, function(_state) {
            time = 8.9122 * 1000 * 1000;
            assert.strictEqual(formatMicroSecondsTime(time), '8.91\xA0s');
            return [
                2
            ];
        });
    }));
    it('formats minutes', /*#__PURE__*/ _async_to_generator(function() {
        var time;
        return _ts_generator(this, function(_state) {
            // 203 = 3 minutes, 23 seconds
            time = 203 * 1000 * 1000;
            assert.strictEqual(formatMicroSecondsTime(time), '3.4\xA0min');
            return [
                2
            ];
        });
    }));
});
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithLocale)('formatMicroSecondsAsSeconds', function() {
    var formatMicroSecondsAsSeconds = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.formatMicroSecondsAsSeconds;
    it('formats smaller second values', /*#__PURE__*/ _async_to_generator(function() {
        var time;
        return _ts_generator(this, function(_state) {
            time = 0.03 * 1000 * 1000;
            assert.strictEqual(formatMicroSecondsAsSeconds(time), '0.03\xA0s');
            return [
                2
            ];
        });
    }));
    it('formats larger second values', /*#__PURE__*/ _async_to_generator(function() {
        var time;
        return _ts_generator(this, function(_state) {
            time = 8.9122 * 1000 * 1000;
            assert.strictEqual(formatMicroSecondsAsSeconds(time), '8.91\xA0s');
            return [
                2
            ];
        });
    }));
});
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithLocale)('millisToString', function() {
    it('formats when number is infinite', function() {
        var inputNumber = Infinity;
        var outputString = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.millisToString(inputNumber);
        assert.strictEqual(outputString, '-');
    });
    it('formats when number is zero', function() {
        var inputNumber = 0;
        var outputString = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.millisToString(inputNumber);
        assert.strictEqual(outputString, '0');
    });
    it('formats with higher resolution and a number less that 0.1', function() {
        var inputNumber = 0.01;
        var higherResolution = true;
        var outputString = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.millisToString(inputNumber, higherResolution);
        assert.strictEqual(outputString, '10\xA0μs');
    });
    it('formats with higher resolution and a number less that 1000', function() {
        var inputNumber = 897.98;
        var higherResolution = true;
        var outputString = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.millisToString(inputNumber, higherResolution);
        assert.strictEqual(outputString, '897.98\xA0ms');
    });
    it('formats without higher resolution and a number less that 1000', function() {
        var inputNumber = 897.98;
        var higherResolution = false;
        var outputString = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.millisToString(inputNumber, higherResolution);
        assert.strictEqual(outputString, '898\xA0ms');
    });
    it('formats less than 60 seconds', function() {
        var inputNumber = 12345;
        var outputString = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.millisToString(inputNumber);
        assert.strictEqual(outputString, '12.35\xA0s');
    });
    it('formats less than 60 minutes', function() {
        var inputNumber = 265000;
        var outputString = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.millisToString(inputNumber);
        assert.strictEqual(outputString, '4.4\xA0min');
    });
    it('formats less than 24 hours', function() {
        var inputNumber = 20000000;
        var outputString = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.millisToString(inputNumber);
        assert.strictEqual(outputString, '5.6\xA0hrs');
    });
    it('formats days', function() {
        var inputNumber = 100000000;
        var outputString = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.millisToString(inputNumber);
        assert.strictEqual(outputString, '1.2\xA0days');
    });
});
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithLocale)('secondsToString', function() {
    it('formats infinte numbers correctly', function() {
        var inputNumber = Infinity;
        var outputString = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.secondsToString(inputNumber);
        assert.strictEqual(outputString, '-');
    });
    it('formats finite numbers correctly', function() {
        var inputNumber = 7.849;
        var outputString = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.secondsToString(inputNumber);
        assert.strictEqual(outputString, '7.85\xA0s');
    });
}); //# sourceMappingURL=time-utilities.test.js.map


}),

}]);