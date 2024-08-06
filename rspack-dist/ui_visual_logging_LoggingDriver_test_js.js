"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_visual_logging_LoggingDriver_test_js"], {
"./testing/ExpectStubCall.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  expectCall: function() { return expectCall; },
  expectCalled: function() { return expectCalled; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
function expectCall(stub) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return new Promise(function(resolve) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        stub.callsFake(function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            var _options_callCount;
            if (stub.callCount < ((_options_callCount = options.callCount) !== null && _options_callCount !== void 0 ? _options_callCount : 1)) {
                return undefined;
            }
            resolve(args);
            return options.fakeFn ? options.fakeFn.apply(this, args) : undefined;
        });
    });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expectCalled(stub) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _options_callCount;
    var remainingCalls = ((_options_callCount = options.callCount) !== null && _options_callCount !== void 0 ? _options_callCount : 1) - stub.callCount;
    if (remainingCalls <= 0) {
        return Promise.resolve(stub.lastCall.args);
    }
    return expectCall(stub, _object_spread_props(_object_spread({}, options), {
        callCount: remainingCalls
    }));
} //# sourceMappingURL=ExpectStubCall.js.map


}),
"./testing/VisualLoggingHelpers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getVeId: function() { return getVeId; }
});
/* harmony import */var _ui_visual_logging_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/visual_logging/visual_logging-testing.js */ "./ui/visual_logging/visual_logging-testing.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function getVeId(loggable) {
    if (typeof loggable === 'string') {
        loggable = document.querySelector(loggable);
    }
    return _ui_visual_logging_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.LoggingState.getLoggingState(loggable).veid;
} //# sourceMappingURL=VisualLoggingHelpers.js.map


}),
"./ui/visual_logging/LoggingDriver.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/ExpectStubCall.js */ "./testing/ExpectStubCall.js");
/* harmony import */var _testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/VisualLoggingHelpers.js */ "./testing/VisualLoggingHelpers.js");
/* harmony import */var _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visual_logging-testing.js */ "./ui/visual_logging/visual_logging-testing.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
    var addLoggableElements = function addLoggableElements() {
        var parent = document.createElement('div');
        parent.id = 'parent';
        parent.setAttribute('jslog', 'TreeItem; track: hover');
        parent.style.width = '300px';
        parent.style.height = '300px';
        var element = document.createElement('div');
        element.id = 'element';
        element.setAttribute('jslog', 'TreeItem; context:42; track: click, keydown, hover, drag, resize, change');
        element.style.width = '300px';
        element.style.height = '300px';
        parent.appendChild(element);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(parent);
    };
    var assertImpressionRecordedDeferred = function assertImpressionRecordedDeferred() {
        return _assertImpressionRecordedDeferred.apply(this, arguments);
    };
    var recordImpression;
    var throttler;
    var throttle;
    var onerror;
    before(function() {
        onerror = window.onerror;
        window.onerror = function(message, url, lineNumber, column, error) {
            if (message !== 'ResizeObserver loop completed with undelivered notifications.' && onerror) {
                onerror.apply(window, [
                    message,
                    url,
                    lineNumber,
                    column,
                    error
                ]);
            }
        };
    });
    after(function() {
        window.onerror = onerror;
    });
    beforeEach(function() {
        throttler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(1000000000);
        throttle = sinon.stub(throttler, 'schedule');
        recordImpression = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordImpression');
    });
    afterEach(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.stopLogging()
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('logs impressions on startLogging', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    addLoggableElements();
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging()
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(recordImpression.calledOnce);
                    assert.sameDeepMembers(recordImpression.firstCall.firstArg.impressions, [
                        {
                            id: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)('#element'),
                            type: 1,
                            context: 42,
                            parent: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)('#parent'),
                            width: 300,
                            height: 300
                        },
                        {
                            id: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)('#parent'),
                            type: 1,
                            width: 300,
                            height: 300
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    function _assertImpressionRecordedDeferred() {
        _assertImpressionRecordedDeferred = _async_to_generator(function() {
            var _ref, work;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(throttle)
                        ];
                    case 1:
                        _ref = _sliced_to_array.apply(void 0, [
                            _state.sent(),
                            1
                        ]), work = _ref[0];
                        assert.isFalse(recordImpression.called);
                        return [
                            4,
                            work()
                        ];
                    case 2:
                        _state.sent();
                        assert.isTrue(recordImpression.called);
                        return [
                            2
                        ];
                }
            });
        });
        return _assertImpressionRecordedDeferred.apply(this, arguments);
    }
    it('does not log impressions when document hidden', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    addLoggableElements();
                    sinon.stub(document, 'hidden').value(true);
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({
                            processingThrottler: throttler
                        })
                    ];
                case 1:
                    _state.sent();
                    assert.isFalse(recordImpression.called);
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not log impressions when parent hidden', /*#__PURE__*/ _async_to_generator(function() {
        var parent;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    addLoggableElements();
                    parent = document.getElementById('parent');
                    parent.style.height = '0';
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({
                            processingThrottler: throttler
                        })
                    ];
                case 1:
                    _state.sent();
                    assert.isFalse(recordImpression.called);
                    return [
                        2
                    ];
            }
        });
    }));
    it('logs impressions when visibility changes', /*#__PURE__*/ _async_to_generator(function() {
        var hidden, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    hidden = true;
                    addLoggableElements();
                    sinon.stub(document, 'hidden').get(function() {
                        return hidden;
                    });
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({
                            processingThrottler: throttler
                        })
                    ];
                case 1:
                    _state.sent();
                    hidden = false;
                    event = document.createEvent('Event');
                    event.initEvent('visibilitychange', true, true);
                    document.dispatchEvent(event);
                    return [
                        4,
                        assertImpressionRecordedDeferred()
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('logs impressions on scroll', /*#__PURE__*/ _async_to_generator(function() {
        var parent, scrollend;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    addLoggableElements();
                    parent = document.getElementById('parent');
                    parent.style.marginTop = '2000px';
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({
                            processingThrottler: throttler
                        })
                    ];
                case 1:
                    _state.sent();
                    scrollend = sinon.stub();
                    window.addEventListener('scrollend', scrollend);
                    window.scrollTo({
                        top: 2000,
                        left: 0,
                        behavior: 'instant'
                    });
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(scrollend)
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        assertImpressionRecordedDeferred()
                    ];
                case 3:
                    _state.sent();
                    scrollend.resetHistory();
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'instant'
                    });
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(scrollend)
                    ];
                case 4:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('logs impressions on mutation', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({
                            processingThrottler: throttler
                        })
                    ];
                case 1:
                    _state.sent();
                    addLoggableElements();
                    return [
                        4,
                        assertImpressionRecordedDeferred()
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('logs impressions on mutation in shadow DOM', /*#__PURE__*/ _async_to_generator(function() {
        var parent, shadow, shadowContent;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    parent = document.createElement('div');
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(parent);
                    shadow = parent.attachShadow({
                        mode: 'open'
                    });
                    shadowContent = document.createElement('div');
                    shadow.appendChild(shadowContent);
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({
                            processingThrottler: throttler
                        })
                    ];
                case 1:
                    _state.sent();
                    shadowContent.innerHTML = '<div jslog="TreeItem" style="width:300px;height:300px"></div>';
                    return [
                        4,
                        assertImpressionRecordedDeferred()
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('logs impressions on mutation in additional document', /*#__PURE__*/ _async_to_generator(function() {
        var iframe, iframeDocument;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    iframe = document.createElement('iframe');
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(iframe);
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({
                            processingThrottler: throttler
                        })
                    ];
                case 1:
                    _state.sent();
                    iframeDocument = iframe.contentDocument;
                    assert.exists(iframeDocument);
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.addDocument(iframeDocument)
                    ];
                case 2:
                    _state.sent();
                    iframeDocument.body.innerHTML = '<div jslog="TreeItem" style="width:300px;height:300px"></div>';
                    return [
                        4,
                        assertImpressionRecordedDeferred()
                    ];
                case 3:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('correctly determines visibility in additional document', /*#__PURE__*/ _async_to_generator(function() {
        var iframe, iframeDocument;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    iframe = document.createElement('iframe');
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(iframe);
                    iframe.style.width = '100px';
                    iframe.style.height = '100px';
                    iframe.width = '100';
                    iframe.height = '100';
                    iframeDocument = iframe.contentDocument;
                    assert.exists(iframeDocument);
                    iframeDocument.body.innerHTML = '<div style="width:150px;height:150px"></div>\n         <div jslog="TreeItem" style="width:150px;height:150px"></div>';
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({
                            processingThrottler: throttler
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.addDocument(iframeDocument)
                    ];
                case 2:
                    _state.sent();
                    assert.isFalse(recordImpression.called);
                    return [
                        2
                    ];
            }
        });
    }));
    it('hashes a string context', /*#__PURE__*/ _async_to_generator(function() {
        var _recordImpression_firstCall_firstArg_impressions_, element;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    element = document.createElement('div');
                    element.setAttribute('jslog', 'TreeItem; track: hover; context: foobar');
                    element.style.width = '300px';
                    element.style.height = '300px';
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(element);
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging()
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(recordImpression.calledOnce);
                    assert.strictEqual((_recordImpression_firstCall_firstArg_impressions_ = recordImpression.firstCall.firstArg.impressions[0]) === null || _recordImpression_firstCall_firstArg_impressions_ === void 0 ? void 0 : _recordImpression_firstCall_firstArg_impressions_.context, -103332984);
                    return [
                        2
                    ];
            }
        });
    }));
    it('logs clicks', /*#__PURE__*/ _async_to_generator(function() {
        var recordClick, element;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    addLoggableElements();
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging()
                    ];
                case 1:
                    _state.sent();
                    recordClick = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordClick');
                    element = document.getElementById('element');
                    element.click();
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordClick)
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('logs right clicks', /*#__PURE__*/ _async_to_generator(function() {
        var recordClick, element;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    addLoggableElements();
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging()
                    ];
                case 1:
                    _state.sent();
                    recordClick = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordClick');
                    element = document.getElementById('element');
                    element.dispatchEvent(new MouseEvent('contextmenu'));
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordClick)
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('logs middle clicks', /*#__PURE__*/ _async_to_generator(function() {
        var recordClick, element;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    addLoggableElements();
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging()
                    ];
                case 1:
                    _state.sent();
                    recordClick = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordClick');
                    element = document.getElementById('element');
                    element.dispatchEvent(new MouseEvent('auxclick'));
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordClick)
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not log clicks if not configured', /*#__PURE__*/ _async_to_generator(function() {
        var recordClick, parent;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    addLoggableElements();
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging()
                    ];
                case 1:
                    _state.sent();
                    recordClick = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordClick');
                    parent = document.getElementById('parent');
                    parent.click();
                    return [
                        4,
                        new Promise(function(resolve) {
                            return setTimeout(resolve, 0);
                        })
                    ];
                case 2:
                    _state.sent();
                    assert.isFalse(recordClick.called);
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not log click on double click', /*#__PURE__*/ _async_to_generator(function() {
        var element, recordClick, _ref, logging;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    addLoggableElements();
                    element = document.getElementById('element');
                    element.setAttribute('jslog', 'TreeItem; context:42; track: click, dblclick');
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({
                            clickLogThrottler: throttler
                        })
                    ];
                case 1:
                    _state.sent();
                    recordClick = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordClick');
                    element.dispatchEvent(new MouseEvent('click'));
                    element.dispatchEvent(new MouseEvent('dblclick'));
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(throttle)
                    ];
                case 2:
                    _ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        1
                    ]), logging = _ref[0];
                    assert.isTrue(throttle.calledTwice);
                    assert.isFalse(recordClick.called);
                    return [
                        4,
                        logging()
                    ];
                case 3:
                    _state.sent();
                    assert.isTrue(recordClick.calledOnce);
                    assert.isTrue(recordClick.firstCall.firstArg.doubleClick);
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not log click on parent when clicked on child', /*#__PURE__*/ _async_to_generator(function() {
        var parent, recordClick, element, _ref, logging;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    addLoggableElements();
                    parent = document.getElementById('parent');
                    parent.setAttribute('jslog', 'TreeItem; track: click');
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({
                            clickLogThrottler: throttler
                        })
                    ];
                case 1:
                    _state.sent();
                    recordClick = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordClick');
                    element = document.getElementById('element');
                    element.click();
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(throttle)
                    ];
                case 2:
                    _ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        1
                    ]), logging = _ref[0];
                    assert.isFalse(recordClick.called);
                    return [
                        4,
                        logging()
                    ];
                case 3:
                    _state.sent();
                    assert.isTrue(recordClick.calledOnce);
                    assert.strictEqual(recordClick.firstCall.firstArg.veid, (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(element));
                    return [
                        2
                    ];
            }
        });
    }));
    var logsSelectOptions = function(event) {
        return /*#__PURE__*/ _async_to_generator(function() {
            var parent, select, recordClick, impressions;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        parent = document.createElement('div');
                        parent.innerHTML = '\n      <select jslog="TreeItem; context: 0" id="select" style="width: 30px; height: 20px">\n        <option jslog="TreeItem; context: 1">1</option>\n        <option jslog="TreeItem; context: 2">2</option>\n      </select>';
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(parent);
                        select = document.getElementById('select');
                        recordClick = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordClick');
                        return [
                            4,
                            _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({
                                processingThrottler: throttler,
                                clickLogThrottler: throttler
                            })
                        ];
                    case 1:
                        _state.sent();
                        assert.isTrue(recordImpression.calledOnce);
                        impressions = recordImpression.firstCall.firstArg.impressions;
                        assert.sameDeepMembers(impressions, [
                            {
                                id: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(select),
                                type: 1,
                                width: 30,
                                height: 20,
                                context: 0
                            }
                        ]);
                        recordImpression.resetHistory();
                        throttle.callsArg(0);
                        select.dispatchEvent(event);
                        return [
                            4,
                            (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordClick)
                        ];
                    case 2:
                        _state.sent();
                        assert.isTrue(recordClick.calledOnce);
                        assert.strictEqual(recordClick.firstCall.firstArg.veid, (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(select));
                        return [
                            4,
                            (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordImpression)
                        ];
                    case 3:
                        _state.sent();
                        assert.isTrue(recordImpression.calledOnce);
                        assert.sameDeepMembers(recordImpression.firstCall.firstArg.impressions, [
                            {
                                id: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)('option:first-child'),
                                type: 1,
                                parent: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(select),
                                context: 1,
                                width: 0,
                                height: 0
                            },
                            {
                                id: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)('option:last-child'),
                                type: 1,
                                parent: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(select),
                                context: 2,
                                width: 0,
                                height: 0
                            }
                        ]);
                        return [
                            2
                        ];
                }
            });
        });
    };
    it('logs impressions on select options on click', logsSelectOptions(new MouseEvent('click')));
    it('logs impressions on select options on space press', logsSelectOptions(new KeyboardEvent('keypress', {
        key: ' '
    })));
    it('logs impressions on select options on F4', logsSelectOptions(new KeyboardEvent('keydown', {
        code: 'F4'
    })));
    it('logs option click on select change', /*#__PURE__*/ _async_to_generator(function() {
        var parent, recordClick, select;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    parent = document.createElement('div');
                    parent.innerHTML = '\n      <select jslog="TreeItem; context: 0" id="select">\n        <option jslog="TreeItem; context: 1; track: click">1</option>\n        <option jslog="TreeItem; context: 2; track: click">2</option>\n      </select>';
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(parent);
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({
                            clickLogThrottler: throttler
                        })
                    ];
                case 1:
                    _state.sent();
                    recordClick = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordClick');
                    select = document.getElementById('select');
                    assert.exists(select);
                    select.selectedIndex = 1;
                    select.dispatchEvent(new Event('change'));
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(throttle).then(function(param) {
                            var _param = _sliced_to_array(param, 1), logging = _param[0];
                            return logging();
                        })
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(recordClick.calledOnce);
                    assert.deepStrictEqual(recordClick.firstCall.firstArg, {
                        veid: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(select.selectedOptions[0]),
                        doubleClick: false
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    it('logs keydown', /*#__PURE__*/ _async_to_generator(function() {
        var recordKeyDown, element, _ref, logging;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    addLoggableElements();
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({
                            keyboardLogThrottler: throttler
                        })
                    ];
                case 1:
                    _state.sent();
                    recordKeyDown = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordKeyDown');
                    element = document.getElementById('element');
                    element.dispatchEvent(new KeyboardEvent('keydown', {
                        key: 'a'
                    }));
                    element.dispatchEvent(new KeyboardEvent('keydown', {
                        key: 'b'
                    }));
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(throttle)
                    ];
                case 2:
                    _ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        1
                    ]), logging = _ref[0];
                    assert.isTrue(throttle.calledTwice);
                    assert.isFalse(recordKeyDown.called);
                    return [
                        4,
                        logging()
                    ];
                case 3:
                    _state.sent();
                    assert.isTrue(recordKeyDown.calledOnce);
                    return [
                        2
                    ];
            }
        });
    }));
    it('logs keydown for specific codes', /*#__PURE__*/ _async_to_generator(function() {
        var element, recordKeyDown, _ref, logging, ref;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    addLoggableElements();
                    element = document.getElementById('element');
                    element.setAttribute('jslog', 'TreeItem; context:42; track: keydown: KeyA|KeyB');
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({
                            keyboardLogThrottler: throttler
                        })
                    ];
                case 1:
                    _state.sent();
                    recordKeyDown = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordKeyDown');
                    element.dispatchEvent(new KeyboardEvent('keydown', {
                        code: 'KeyC'
                    }));
                    return [
                        4,
                        new Promise(function(resolve) {
                            return setTimeout(resolve, 0);
                        })
                    ];
                case 2:
                    _state.sent();
                    assert.isFalse(throttle.called);
                    element.dispatchEvent(new KeyboardEvent('keydown', {
                        code: 'KeyA'
                    }));
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(throttle)
                    ];
                case 3:
                    _ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        1
                    ]), logging = _ref[0];
                    assert.isFalse(recordKeyDown.called);
                    return [
                        4,
                        logging()
                    ];
                case 4:
                    _state.sent();
                    assert.isTrue(recordKeyDown.calledOnce);
                    recordKeyDown.resetHistory();
                    element.dispatchEvent(new KeyboardEvent('keydown', {
                        code: 'KeyB'
                    }));
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(throttle)
                    ];
                case 5:
                    ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        1
                    ]), logging = ref[0], ref;
                    assert.isFalse(recordKeyDown.called);
                    return [
                        4,
                        logging()
                    ];
                case 6:
                    _state.sent();
                    assert.isTrue(recordKeyDown.calledOnce);
                    return [
                        2
                    ];
            }
        });
    }));
    it('logs change', /*#__PURE__*/ _async_to_generator(function() {
        var recordChange, element;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    addLoggableElements();
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging()
                    ];
                case 1:
                    _state.sent();
                    recordChange = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordChange');
                    element = document.getElementById('element');
                    element.dispatchEvent(new Event('change'));
                    assert.isTrue(recordChange.calledOnce);
                    return [
                        2
                    ];
            }
        });
    }));
    it('logs change for each input type', /*#__PURE__*/ _async_to_generator(function() {
        var recordChange, element, logging;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    addLoggableElements();
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging()
                    ];
                case 1:
                    _state.sent();
                    recordChange = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordChange');
                    element = document.getElementById('element');
                    element.dispatchEvent(new InputEvent('input', {
                        inputType: 'insertText'
                    }));
                    return [
                        4,
                        new Promise(function(resolve) {
                            return setTimeout(resolve, 0);
                        })
                    ];
                case 2:
                    _state.sent();
                    assert.isFalse(recordChange.called);
                    element.dispatchEvent(new InputEvent('input', {
                        inputType: 'insertText'
                    }));
                    return [
                        4,
                        new Promise(function(resolve) {
                            return setTimeout(resolve, 0);
                        })
                    ];
                case 3:
                    _state.sent();
                    assert.isFalse(recordChange.called);
                    logging = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordChange);
                    element.dispatchEvent(new InputEvent('input', {
                        inputType: 'inserFromPaste'
                    }));
                    return [
                        4,
                        logging
                    ];
                case 4:
                    _state.sent();
                    logging = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordChange);
                    element.dispatchEvent(new InputEvent('input', {
                        inputType: 'inserFromDrop'
                    }));
                    return [
                        4,
                        logging
                    ];
                case 5:
                    _state.sent();
                    logging = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordChange);
                    element.dispatchEvent(new Event('change'));
                    return [
                        4,
                        logging
                    ];
                case 6:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('logs change on focus out after input', /*#__PURE__*/ _async_to_generator(function() {
        var recordChange, element;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    addLoggableElements();
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging()
                    ];
                case 1:
                    _state.sent();
                    recordChange = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordChange');
                    element = document.getElementById('element');
                    element.dispatchEvent(new InputEvent('input', {
                        inputType: 'insertText'
                    }));
                    element.dispatchEvent(new Event('focusout'));
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordChange)
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('logs change on new impressions', /*#__PURE__*/ _async_to_generator(function() {
        var recordChange, element, parent;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    addLoggableElements();
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({
                            processingThrottler: throttler
                        })
                    ];
                case 1:
                    _state.sent();
                    recordChange = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordChange');
                    element = document.getElementById('element');
                    parent = document.getElementById('parent');
                    element.dispatchEvent(new InputEvent('input', {
                        inputType: 'insertText'
                    }));
                    throttle.callsArg(0);
                    parent.appendChild(element.cloneNode());
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordChange)
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('logs change on resize', /*#__PURE__*/ _async_to_generator(function() {
        var recordChange, element;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    addLoggableElements();
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({
                            resizeLogThrottler: throttler
                        })
                    ];
                case 1:
                    _state.sent();
                    recordChange = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordChange');
                    element = document.getElementById('element');
                    element.dispatchEvent(new InputEvent('input', {
                        inputType: 'insertText'
                    }));
                    throttle.callsArg(0);
                    element.style.width = '400px';
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordChange)
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not log change on focus out without input', /*#__PURE__*/ _async_to_generator(function() {
        var recordChange, element;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    addLoggableElements();
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging()
                    ];
                case 1:
                    _state.sent();
                    recordChange = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordChange');
                    element = document.getElementById('element');
                    element.dispatchEvent(new Event('focusout'));
                    return [
                        4,
                        new Promise(function(resolve) {
                            return setTimeout(resolve, 0);
                        })
                    ];
                case 2:
                    _state.sent();
                    assert.isFalse(recordChange.calledOnce);
                    return [
                        2
                    ];
            }
        });
    }));
    it('logs hover', /*#__PURE__*/ _async_to_generator(function() {
        var recordHover, element, _ref, logging;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    addLoggableElements();
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({
                            hoverLogThrottler: throttler
                        })
                    ];
                case 1:
                    _state.sent();
                    recordHover = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordHover');
                    element = document.getElementById('element');
                    element.dispatchEvent(new MouseEvent('mouseover'));
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(throttle)
                    ];
                case 2:
                    _ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        1
                    ]), logging = _ref[0];
                    assert.isFalse(recordHover.called);
                    return [
                        4,
                        logging()
                    ];
                case 3:
                    _state.sent();
                    assert.isTrue(recordHover.calledOnce);
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not log hover if too short', /*#__PURE__*/ _async_to_generator(function() {
        var recordHover, element;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    addLoggableElements();
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({
                            hoverLogThrottler: throttler
                        })
                    ];
                case 1:
                    _state.sent();
                    recordHover = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordHover');
                    element = document.getElementById('element');
                    element.dispatchEvent(new MouseEvent('mouseover'));
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(throttle)
                    ];
                case 2:
                    _state.sent();
                    assert.isFalse(recordHover.called);
                    element.dispatchEvent(new MouseEvent('mouseout'));
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(throttle).then(function(param) {
                            var _param = _sliced_to_array(param, 1), work = _param[0];
                            return work();
                        })
                    ];
                case 3:
                    _state.sent();
                    assert.isFalse(recordHover.called);
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not log hover if in descendent', /*#__PURE__*/ _async_to_generator(function() {
        var recordHover, parent, element;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    addLoggableElements();
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({
                            hoverLogThrottler: throttler
                        })
                    ];
                case 1:
                    _state.sent();
                    recordHover = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordHover');
                    parent = document.getElementById('parent');
                    element = document.getElementById('element');
                    parent.dispatchEvent(new MouseEvent('mouseover'));
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(throttle)
                    ];
                case 2:
                    _state.sent();
                    element.dispatchEvent(new MouseEvent('mouseover'));
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(throttle).then(function(param) {
                            var _param = _sliced_to_array(param, 1), work = _param[0];
                            return work();
                        })
                    ];
                case 3:
                    _state.sent();
                    assert.isTrue(recordHover.called);
                    assert.deepStrictEqual(recordHover.firstCall.firstArg, {
                        veid: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(parent)
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    it('logs drag', /*#__PURE__*/ _async_to_generator(function() {
        var _dragLogThrottler_process, dragLogThrottler, recordDrag, element;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    dragLogThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(1000000000);
                    addLoggableElements();
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({
                            dragLogThrottler: dragLogThrottler
                        })
                    ];
                case 1:
                    _state.sent();
                    recordDrag = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordDrag');
                    element = document.getElementById('element');
                    element.dispatchEvent(new MouseEvent('pointerdown'));
                    assert.exists(dragLogThrottler.process);
                    assert.isFalse(recordDrag.called);
                    return [
                        4,
                        dragLogThrottler.schedule(/*#__PURE__*/ _async_to_generator(function() {
                            return _ts_generator(this, function(_state) {
                                return [
                                    2
                                ];
                            });
                        }), "AsSoonAsPossible" /* Common.Throttler.Scheduling.AsSoonAsPossible */ )
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        (_dragLogThrottler_process = dragLogThrottler.process) === null || _dragLogThrottler_process === void 0 ? void 0 : _dragLogThrottler_process.call(dragLogThrottler)
                    ];
                case 3:
                    _state.sent();
                    assert.isTrue(recordDrag.called);
                    assert.isTrue(recordDrag.calledOnce);
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not log drag if too short in time', /*#__PURE__*/ _async_to_generator(function() {
        var _dragLogThrottler_process, dragLogThrottler, recordDrag, element;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    dragLogThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(1000000000);
                    addLoggableElements();
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({
                            dragLogThrottler: dragLogThrottler
                        })
                    ];
                case 1:
                    _state.sent();
                    recordDrag = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordDrag');
                    element = document.getElementById('element');
                    element.dispatchEvent(new MouseEvent('pointerdown'));
                    assert.exists(dragLogThrottler.process);
                    assert.isFalse(recordDrag.called);
                    element.dispatchEvent(new MouseEvent('pointerup'));
                    return [
                        4,
                        (_dragLogThrottler_process = dragLogThrottler.process) === null || _dragLogThrottler_process === void 0 ? void 0 : _dragLogThrottler_process.call(dragLogThrottler)
                    ];
                case 2:
                    _state.sent();
                    assert.isFalse(recordDrag.called);
                    return [
                        2
                    ];
            }
        });
    }));
    it('logs drag if short in time but long in distance', /*#__PURE__*/ _async_to_generator(function() {
        var _dragLogThrottler_process, dragLogThrottler, recordDrag, element;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    dragLogThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(1000000000);
                    addLoggableElements();
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({
                            dragLogThrottler: dragLogThrottler
                        })
                    ];
                case 1:
                    _state.sent();
                    recordDrag = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordDrag');
                    element = document.getElementById('element');
                    element.dispatchEvent(new MouseEvent('pointerdown', {
                        screenX: 0,
                        screenY: 0
                    }));
                    assert.exists(dragLogThrottler.process);
                    assert.isFalse(recordDrag.called);
                    element.dispatchEvent(new MouseEvent('pointerup', {
                        screenX: 100,
                        screenY: 100
                    }));
                    return [
                        4,
                        (_dragLogThrottler_process = dragLogThrottler.process) === null || _dragLogThrottler_process === void 0 ? void 0 : _dragLogThrottler_process.call(dragLogThrottler)
                    ];
                case 2:
                    _state.sent();
                    assert.isFalse(recordDrag.called);
                    return [
                        2
                    ];
            }
        });
    }));
    it('logs resize', /*#__PURE__*/ _async_to_generator(function() {
        var recordResize, element, _ref, logging;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    addLoggableElements();
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({
                            resizeLogThrottler: throttler
                        })
                    ];
                case 1:
                    _state.sent();
                    recordResize = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordResize');
                    element = document.getElementById('element');
                    element.style.height = '400px';
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(throttle, {
                            callCount: 2
                        })
                    ];
                case 2:
                    _ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        1
                    ]), logging = _ref[0];
                    assert.isFalse(recordResize.called);
                    return [
                        4,
                        logging()
                    ];
                case 3:
                    _state.sent();
                    assert.isTrue(recordResize.calledOnce);
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not log resize if too small', /*#__PURE__*/ _async_to_generator(function() {
        var recordResize, element;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    addLoggableElements();
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({
                            resizeLogThrottler: throttler
                        })
                    ];
                case 1:
                    _state.sent();
                    recordResize = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordResize');
                    element = document.getElementById('element');
                    element.style.height = '301px';
                    assert.isFalse(recordResize.called);
                    return [
                        2
                    ];
            }
        });
    }));
    it('logs resize on visibility change', /*#__PURE__*/ _async_to_generator(function() {
        var recordResize, element, _ref, logging;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    addLoggableElements();
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({
                            resizeLogThrottler: throttler
                        })
                    ];
                case 1:
                    _state.sent();
                    recordResize = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordResize');
                    element = document.getElementById('element');
                    element.style.display = 'none';
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(throttle, {
                            callCount: 2
                        })
                    ];
                case 2:
                    _ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        1
                    ]), logging = _ref[0];
                    assert.isFalse(recordResize.called);
                    logging();
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordResize)
                    ];
                case 3:
                    _state.sent();
                    assert.isTrue(recordResize.calledOnce);
                    assert.deepStrictEqual(recordResize.firstCall.firstArg, {
                        veid: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(element),
                        width: 0,
                        height: 0
                    });
                    recordResize.resetHistory();
                    element.style.display = 'block';
                    assert.isFalse(recordResize.called);
                    throttle.callsArg(0);
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(recordResize)
                    ];
                case 4:
                    _state.sent();
                    assert.isTrue(recordResize.calledOnce);
                    assert.deepStrictEqual(recordResize.firstCall.firstArg, {
                        veid: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(element),
                        width: 300,
                        height: 300
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    // Flaky, to be rewritten
    it.skip('[crbug.com/347520196] throttles resize per element', /*#__PURE__*/ _async_to_generator(function() {
        var _document_getElementById, element1, element2, recordResize, _ref, work;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    addLoggableElements();
                    element1 = document.getElementById('element');
                    element2 = element1.cloneNode();
                    (_document_getElementById = document.getElementById('parent')) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.appendChild(element2);
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({
                            resizeLogThrottler: throttler
                        })
                    ];
                case 1:
                    _state.sent();
                    recordResize = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordResize');
                    element1.style.height = '200px';
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(throttle, {
                            callCount: 2
                        })
                    ];
                case 2:
                    _state.sent();
                    element2.style.height = '200px';
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(throttle, {
                            callCount: 2
                        })
                    ];
                case 3:
                    _state.sent();
                    element1.style.height = '100px';
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(throttle, {
                            callCount: 2
                        })
                    ];
                case 4:
                    _state.sent();
                    element2.style.height = '100px';
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(throttle, {
                            callCount: 2
                        })
                    ];
                case 5:
                    _ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        1
                    ]), work = _ref[0];
                    assert.isFalse(recordResize.called);
                    return [
                        4,
                        work()
                    ];
                case 6:
                    _state.sent();
                    assert.isTrue(recordResize.calledTwice);
                    assert.strictEqual(recordResize.firstCall.firstArg.height, 100);
                    assert.strictEqual(recordResize.lastCall.firstArg.height, 100);
                    assert.notStrictEqual(recordResize.firstCall.firstArg.veid, recordResize.lastCall.firstArg.veid);
                    return [
                        2
                    ];
            }
        });
    }));
    it('only logs resize of the outer element', /*#__PURE__*/ _async_to_generator(function() {
        var element, child, recordResize, _ref, work;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    addLoggableElements();
                    element = document.getElementById('element');
                    child = document.createElement('div');
                    child.setAttribute('jslog', 'TreeItem; track: resize');
                    child.style.width = '100%';
                    child.style.height = '100%';
                    element.appendChild(child);
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({
                            resizeLogThrottler: throttler
                        })
                    ];
                case 1:
                    _state.sent();
                    recordResize = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordResize');
                    element.style.width = '400px';
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(throttle, {
                            callCount: 2
                        })
                    ];
                case 2:
                    _ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        1
                    ]), work = _ref[0];
                    assert.isFalse(recordResize.called);
                    return [
                        4,
                        work()
                    ];
                case 3:
                    _state.sent();
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordResize)
                    ];
                case 4:
                    _state.sent();
                    assert.isTrue(recordResize.calledOnce);
                    assert.deepStrictEqual(recordResize.firstCall.firstArg, {
                        veid: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(element),
                        width: 400,
                        height: 300
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not log resize intial impressions due to visibility change', /*#__PURE__*/ _async_to_generator(function() {
        var element, recordResize;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    addLoggableElements();
                    element = document.getElementById('element');
                    element.style.display = 'none';
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({
                            processingThrottler: throttler,
                            resizeLogThrottler: throttler
                        })
                    ];
                case 1:
                    _state.sent();
                    recordResize = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordResize');
                    recordImpression.resetHistory();
                    element.style.display = 'block';
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(throttle).then(function(param) {
                            var _param = _sliced_to_array(param, 1), work = _param[0];
                            return work();
                        })
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(throttle.calledOnce);
                    assert.isTrue(recordImpression.calledOnce);
                    assert.isFalse(recordResize.called);
                    return [
                        4,
                        new Promise(function(resolve) {
                            return setTimeout(resolve, 0);
                        })
                    ];
                case 3:
                    _state.sent();
                    assert.isFalse(recordResize.called);
                    return [
                        2
                    ];
            }
        });
    }));
    it('properly handles the switch between visible elements', /*#__PURE__*/ _async_to_generator(function() {
        var _document_getElementById, _VisualLoggingTesting_LoggingState_getLoggingState, _VisualLoggingTesting_LoggingState_getLoggingState1, element1, child, element2, recordResize;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    addLoggableElements();
                    element1 = document.getElementById('element');
                    child = document.createElement('div');
                    child.id = 'child';
                    child.setAttribute('jslog', 'TreeItem; track: resize');
                    child.style.width = '100%';
                    child.style.height = '100%';
                    element1.appendChild(child);
                    element2 = element1.cloneNode(/* deep=*/ true);
                    element2.id = 'element2';
                    (_document_getElementById = document.getElementById('parent')) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.appendChild(element2);
                    // First ensure both top level elements have impressions logged
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({
                            resizeLogThrottler: throttler
                        })
                    ];
                case 1:
                    _state.sent();
                    recordResize = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordResize');
                    // Now hide one and wait for logging to finish
                    throttle.callsArg(0);
                    element2.style.display = 'none';
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordResize, {
                            callCount: 1
                        })
                    ];
                case 2:
                    _state.sent();
                    throttle.reset();
                    recordResize.reset();
                    // Now the actual test: hiding one element and show the other one
                    element1.style.display = 'none';
                    element2.style.display = 'block';
                    // Throttler is called by both resize and intersection observer for each element
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(throttle, {
                            callCount: 4
                        }).then(function(param) {
                            var _param = _sliced_to_array(param, 1), work = _param[0];
                            return work();
                        })
                    ];
                case 3:
                    _state.sent();
                    assert.isTrue(recordResize.calledTwice);
                    assert.sameDeepMembers(recordResize.getCalls().map(function(c) {
                        return c.firstArg;
                    }), [
                        {
                            veid: (_VisualLoggingTesting_LoggingState_getLoggingState = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingState.getLoggingState(element1)) === null || _VisualLoggingTesting_LoggingState_getLoggingState === void 0 ? void 0 : _VisualLoggingTesting_LoggingState_getLoggingState.veid,
                            width: 0,
                            height: 0
                        },
                        {
                            veid: (_VisualLoggingTesting_LoggingState_getLoggingState1 = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingState.getLoggingState(element2)) === null || _VisualLoggingTesting_LoggingState_getLoggingState1 === void 0 ? void 0 : _VisualLoggingTesting_LoggingState_getLoggingState1.veid,
                            width: 300,
                            height: 300
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('logs resize when removed from DOM', /*#__PURE__*/ _async_to_generator(function() {
        var recordResize, element, parent, _ref, logging;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    addLoggableElements();
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({
                            resizeLogThrottler: throttler
                        })
                    ];
                case 1:
                    _state.sent();
                    recordResize = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordResize');
                    element = document.getElementById('element');
                    parent = document.getElementById('parent');
                    parent.removeChild(element);
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(throttle, {
                            callCount: 2
                        })
                    ];
                case 2:
                    _ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        1
                    ]), logging = _ref[0];
                    assert.isFalse(recordResize.called);
                    return [
                        4,
                        logging()
                    ];
                case 3:
                    _state.sent();
                    assert.isTrue(recordResize.calledOnce);
                    assert.deepStrictEqual(recordResize.firstCall.firstArg, {
                        veid: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(element),
                        width: 0,
                        height: 0
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    it('logs click, then resize, then impressions', /*#__PURE__*/ _async_to_generator(function() {
        var processingThrottler, clickLogThrottler, keyboardLogThrottler, resizeLogThrottler, recordResize, recordClick, element, parent;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    addLoggableElements();
                    processingThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(10);
                    clickLogThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(100);
                    keyboardLogThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(100);
                    resizeLogThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(100);
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({
                            processingThrottler: processingThrottler,
                            clickLogThrottler: clickLogThrottler,
                            keyboardLogThrottler: keyboardLogThrottler,
                            resizeLogThrottler: resizeLogThrottler
                        })
                    ];
                case 1:
                    _state.sent();
                    recordResize = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordResize');
                    recordClick = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordClick');
                    recordImpression.resetHistory();
                    element = document.getElementById('element');
                    parent = document.getElementById('parent');
                    parent.removeChild(element);
                    parent.appendChild(element.cloneNode());
                    element.click();
                    return [
                        4,
                        Promise.all([
                            (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordImpression),
                            (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordResize),
                            (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordClick)
                        ])
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(recordClick.calledBefore(recordResize));
                    assert.isTrue(recordResize.calledBefore(recordImpression));
                    return [
                        2
                    ];
            }
        });
    }));
    it('logs keydown, then resize, then impressions', /*#__PURE__*/ _async_to_generator(function() {
        var element, keyboardLogThrottler, resizeLogThrottler, recordResize, recordKeyDown, parent;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    addLoggableElements();
                    element = document.getElementById('element');
                    element.setAttribute('jslog', 'TreeItem; context:42; track: keydown: KeyA, resize');
                    keyboardLogThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(100);
                    resizeLogThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(100);
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging({
                            processingThrottler: throttler,
                            keyboardLogThrottler: keyboardLogThrottler,
                            resizeLogThrottler: resizeLogThrottler
                        })
                    ];
                case 1:
                    _state.sent();
                    recordResize = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordResize');
                    recordKeyDown = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordKeyDown');
                    recordImpression.resetHistory();
                    throttle.callsArg(0);
                    parent = document.getElementById('parent');
                    parent.removeChild(element);
                    parent.appendChild(element.cloneNode());
                    element.dispatchEvent(new KeyboardEvent('keydown', {
                        code: 'KeyA',
                        key: 'a'
                    }));
                    return [
                        4,
                        Promise.all([
                            (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordImpression),
                            (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordResize),
                            (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordKeyDown)
                        ])
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(recordKeyDown.calledBefore(recordResize));
                    assert.isTrue(recordResize.calledBefore(recordImpression));
                    return [
                        2
                    ];
            }
        });
    }));
    it('logs non-DOM impressions', /*#__PURE__*/ _async_to_generator(function() {
        var loggable, parent;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    addLoggableElements();
                    loggable = {};
                    parent = document.getElementById('parent');
                    _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.NonDomState.registerLoggable(loggable, {
                        ve: 1,
                        context: '123'
                    }, parent);
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging()
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(recordImpression.calledOnce);
                    assert.sameDeepMembers(recordImpression.firstCall.firstArg.impressions, [
                        {
                            id: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(loggable),
                            type: 1,
                            context: 123,
                            parent: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(parent),
                            width: 0,
                            height: 0
                        },
                        {
                            id: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)('#element'),
                            type: 1,
                            context: 42,
                            parent: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(parent),
                            width: 300,
                            height: 300
                        },
                        {
                            id: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(parent),
                            type: 1,
                            width: 300,
                            height: 300
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('logs non-DOM impressions after parent was logged', /*#__PURE__*/ _async_to_generator(function() {
        var loggable1, parent, loggable2;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    addLoggableElements();
                    loggable1 = {};
                    parent = document.getElementById('parent');
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging()
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(recordImpression.calledOnce);
                    _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.NonDomState.registerLoggable(loggable1, {
                        ve: 1,
                        context: '123'
                    }, parent);
                    recordImpression.resetHistory();
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.scheduleProcessing()
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordImpression)
                    ];
                case 3:
                    _state.sent();
                    assert.sameDeepMembers(recordImpression.lastCall.firstArg.impressions, [
                        {
                            id: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(loggable1),
                            type: 1,
                            context: 123,
                            parent: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(parent),
                            width: 0,
                            height: 0
                        }
                    ]);
                    recordImpression.resetHistory();
                    loggable2 = {};
                    _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.NonDomState.registerLoggable(loggable2, {
                        ve: 1,
                        context: '345'
                    }, parent);
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.scheduleProcessing()
                    ];
                case 4:
                    _state.sent();
                    return [
                        4,
                        (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCalled)(recordImpression)
                    ];
                case 5:
                    _state.sent();
                    assert.sameDeepMembers(recordImpression.lastCall.firstArg.impressions, [
                        {
                            id: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(loggable2),
                            type: 1,
                            context: 345,
                            parent: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(parent),
                            width: 0,
                            height: 0
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('logs root non-DOM impressions', /*#__PURE__*/ _async_to_generator(function() {
        var loggable;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    addLoggableElements();
                    loggable = {};
                    _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.NonDomState.registerLoggable(loggable, {
                        ve: 1,
                        context: '123'
                    }, undefined);
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging()
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(recordImpression.calledOnce);
                    assert.sameDeepMembers(recordImpression.firstCall.firstArg.impressions, [
                        {
                            id: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)(loggable),
                            type: 1,
                            context: 123,
                            width: 0,
                            height: 0
                        },
                        {
                            id: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)('#element'),
                            type: 1,
                            context: 42,
                            parent: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)('#parent'),
                            width: 300,
                            height: 300
                        },
                        {
                            id: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)('#parent'),
                            type: 1,
                            width: 300,
                            height: 300
                        }
                    ]);
                    assert.isEmpty(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.NonDomState.getNonDomLoggables());
                    return [
                        2
                    ];
            }
        });
    }));
    it('postpones logging non-DOM impressions with detached parent', /*#__PURE__*/ _async_to_generator(function() {
        var loggable, parent;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    addLoggableElements();
                    loggable = {};
                    parent = document.createElement('div');
                    _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.NonDomState.registerLoggable(loggable, {
                        ve: 1,
                        context: '123'
                    }, parent);
                    return [
                        4,
                        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.LoggingDriver.startLogging()
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(recordImpression.calledOnce);
                    assert.sameDeepMembers(recordImpression.firstCall.firstArg.impressions, [
                        {
                            id: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)('#element'),
                            type: 1,
                            context: 42,
                            parent: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)('#parent'),
                            width: 300,
                            height: 300
                        },
                        {
                            id: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getVeId)('#parent'),
                            type: 1,
                            width: 300,
                            height: 300
                        }
                    ]);
                    assert.deepInclude(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_5__.NonDomState.getNonDomLoggables(parent), {
                        loggable: loggable,
                        config: {
                            ve: 1,
                            context: '123'
                        },
                        parent: parent
                    });
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=LoggingDriver.test.js.map


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