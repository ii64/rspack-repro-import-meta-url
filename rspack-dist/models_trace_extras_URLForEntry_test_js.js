"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_extras_URLForEntry_test_js"], {
"./models/trace/extras/URLForEntry.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
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


describe('URLForEntry', function() {
    it('returns the URL in event.args.data if it has one', /*#__PURE__*/ _async_to_generator(function() {
        var _commitLoadEvent_args_data, traceData, commitLoadEvent, url;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.traceEngine(this, 'web-dev-with-commit.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    commitLoadEvent = traceData.Renderer.allTraceEntries.find(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventCommitLoad);
                    assert.isOk(commitLoadEvent);
                    url = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Extras.URLForEntry.get(traceData, commitLoadEvent);
                    assert.isNotNull(url);
                    assert.strictEqual(url, (_commitLoadEvent_args_data = commitLoadEvent.args.data) === null || _commitLoadEvent_args_data === void 0 ? void 0 : _commitLoadEvent_args_data.url);
                    return [
                        2
                    ];
            }
        });
    }));
    it('returns the URL for a ProfileCall from the callframe', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, profileCall, url;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.traceEngine(this, 'web-dev-with-commit.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    profileCall = traceData.Renderer.allTraceEntries.find(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isProfileCall);
                    assert.isOk(profileCall);
                    url = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Extras.URLForEntry.get(traceData, profileCall);
                    assert.isNotNull(url);
                    assert.strictEqual(url, profileCall.callFrame.url);
                    return [
                        2
                    ];
            }
        });
    }));
    it('uses the request URL for a network request', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, request, url;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.traceEngine(this, 'web-dev-with-commit.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    request = traceData.NetworkRequests.byTime[0];
                    assert.isOk(request);
                    url = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Extras.URLForEntry.get(traceData, request);
                    assert.isNotNull(url);
                    assert.strictEqual(url, request.args.data.url);
                    return [
                        2
                    ];
            }
        });
    }));
    it('for a generic event with a stackTrace property, it uses the URL of the top frame', /*#__PURE__*/ _async_to_generator(function() {
        var _eventDispatch_args_data_stackTrace, _eventDispatch_args_data, _eventDispatch_args, traceData, eventDispatch, url;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.traceEngine(this, 'web-dev-with-commit.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    eventDispatch = traceData.Renderer.allTraceEntries.find(function(entry) {
                        return _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventDispatch(entry) && entry.args.data.stackTrace;
                    });
                    assert.isOk(eventDispatch);
                    url = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Extras.URLForEntry.get(traceData, eventDispatch);
                    assert.isNotNull(url);
                    assert.strictEqual(url, (_eventDispatch_args = eventDispatch.args) === null || _eventDispatch_args === void 0 ? void 0 : (_eventDispatch_args_data = _eventDispatch_args.data) === null || _eventDispatch_args_data === void 0 ? void 0 : (_eventDispatch_args_data_stackTrace = _eventDispatch_args_data.stackTrace) === null || _eventDispatch_args_data_stackTrace === void 0 ? void 0 : _eventDispatch_args_data_stackTrace[0].url);
                    return [
                        2
                    ];
            }
        });
    }));
    it('finds the URL for a ParseHTML event', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, parseHTMLEvent, url;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.traceEngine(this, 'web-dev-with-commit.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    parseHTMLEvent = traceData.Renderer.allTraceEntries.find(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventParseHTML);
                    assert.isOk(parseHTMLEvent);
                    url = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Extras.URLForEntry.get(traceData, parseHTMLEvent);
                    assert.isNotNull(url);
                    assert.strictEqual(url, parseHTMLEvent.args.beginData.url);
                    return [
                        2
                    ];
            }
        });
    }));
    it('uses the PaintImage URL for a DecodeImage event', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, decodeImage, url;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    decodeImage = traceData.Renderer.allTraceEntries.find(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventDecodeImage);
                    assert.isOk(decodeImage);
                    url = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Extras.URLForEntry.get(traceData, decodeImage);
                    assert.isNotNull(url);
                    assert.strictEqual(url, 'https://web-dev.imgix.net/image/admin/WkMOiDtaDgiAA2YkRZ5H.jpg?fit=crop&h=64&w=64&dpr=1&q=75');
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=URLForEntry.test.js.map


}),

}]);