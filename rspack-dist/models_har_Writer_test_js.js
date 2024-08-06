"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_har_Writer_test_js"], {
"./models/har/Writer.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _har_har_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../har/har.js */ "./models/har/har.js");
/* harmony import */var _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
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







var simulateRequestWithStartTime = function(startTime) {
    var requestId = 'r0';
    var request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.NetworkRequest.create(requestId, 'p0.com', _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.DevToolsPath.EmptyUrlString, null, null, null);
    request.setIssueTime(startTime, startTime);
    request.setContentDataProvider(function() {
        return Promise.resolve(new _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_6__.ContentData.ContentData('', false, request.mimeType));
    });
    return request;
};
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithLocale)('HARWriter', function() {
    it('can correctly sort exported requests logs', /*#__PURE__*/ _async_to_generator(function() {
        var req1Time, req2Time, req3Time, req1, req2, req3, progressIndicator, compositeProgress, result, resultEntries;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    req1Time = new Date(2020, 0, 3);
                    req2Time = new Date(2020, 1, 3);
                    req3Time = new Date(2020, 2, 3);
                    req1 = simulateRequestWithStartTime(req1Time.getTime() / 1000);
                    req2 = simulateRequestWithStartTime(req2Time.getTime() / 1000);
                    req3 = simulateRequestWithStartTime(req3Time.getTime() / 1000);
                    progressIndicator = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ProgressIndicator.ProgressIndicator();
                    compositeProgress = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Progress.CompositeProgress(progressIndicator);
                    return [
                        4,
                        _har_har_js__WEBPACK_IMPORTED_MODULE_5__.Writer.Writer.harStringForRequests([
                            req3,
                            req2,
                            req1
                        ], compositeProgress)
                    ];
                case 1:
                    result = _state.sent();
                    resultEntries = JSON.parse(result).log.entries;
                    assert.strictEqual(resultEntries[0].startedDateTime, req1Time.toJSON(), 'earlier request should come first');
                    assert.strictEqual(resultEntries[1].startedDateTime, req2Time.toJSON(), 'earlier request should come first');
                    assert.strictEqual(resultEntries[2].startedDateTime, req3Time.toJSON(), 'earlier request should come first');
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=Writer.test.js.map


}),

}]);