"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_logs_RequestResolver_test_js"], {
"./models/logs/RequestResolver.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_MockNetworkLog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/MockNetworkLog.js */ "./testing/MockNetworkLog.js");
/* harmony import */var _logs_logs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logs/logs.js */ "./models/logs/logs.js");
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


describe('RequestResolver', function() {
    var requestId1 = 'foo';
    describe('tryGet', function() {
        it('should resolve an existing request', function() {
            var mockRequest = (0,_testing_MockNetworkLog_js__WEBPACK_IMPORTED_MODULE_0__.createNetworkRequest)(requestId1);
            var networkLog = new _testing_MockNetworkLog_js__WEBPACK_IMPORTED_MODULE_0__.MockNetworkLog([
                mockRequest
            ]);
            var requestResolver = new _logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.RequestResolver.RequestResolver(networkLog);
            var request = requestResolver.tryGet(requestId1, function() {
                throw new Error('This should not get called');
            });
            assert.isFalse(networkLog.hasEventListeners(_logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.NetworkLog.Events.RequestAdded));
            assert.strictEqual(request, mockRequest);
        });
        it('should not resolve an unknown request', function() {
            var networkLog = new _testing_MockNetworkLog_js__WEBPACK_IMPORTED_MODULE_0__.MockNetworkLog([]);
            var requestResolver = new _logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.RequestResolver.RequestResolver(networkLog);
            var request = requestResolver.tryGet(requestId1, function() {
                throw new Error('This should not get called');
            });
            assert.isTrue(networkLog.hasEventListeners(_logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.NetworkLog.Events.RequestAdded));
            assert.strictEqual(request, null);
            requestResolver.clear();
        });
        it('should resolve a previously unknown request when it becomes available', /*#__PURE__*/ _async_to_generator(function() {
            var mockNetworkLog, networkLog, requestResolver, waitForCall, mockRequest, request;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        mockNetworkLog = new _testing_MockNetworkLog_js__WEBPACK_IMPORTED_MODULE_0__.MockNetworkLog([]);
                        networkLog = mockNetworkLog;
                        requestResolver = new _logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.RequestResolver.RequestResolver(networkLog);
                        waitForCall = new Promise(function(resolve) {
                            var request = requestResolver.tryGet(requestId1, resolve);
                            assert.strictEqual(request, null);
                        });
                        assert.isTrue(networkLog.hasEventListeners(_logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.NetworkLog.Events.RequestAdded));
                        mockRequest = (0,_testing_MockNetworkLog_js__WEBPACK_IMPORTED_MODULE_0__.createNetworkRequest)(requestId1);
                        mockNetworkLog.addRequest(mockRequest);
                        return [
                            4,
                            waitForCall
                        ];
                    case 1:
                        request = _state.sent();
                        assert.isFalse(networkLog.hasEventListeners(_logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.NetworkLog.Events.RequestAdded));
                        assert.strictEqual(request, mockRequest);
                        requestResolver.clear();
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('waitFor', function() {
        it('should resolve an existing request', /*#__PURE__*/ _async_to_generator(function() {
            var mockRequest, networkLog, requestResolver, request;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        mockRequest = (0,_testing_MockNetworkLog_js__WEBPACK_IMPORTED_MODULE_0__.createNetworkRequest)(requestId1);
                        networkLog = new _testing_MockNetworkLog_js__WEBPACK_IMPORTED_MODULE_0__.MockNetworkLog([
                            mockRequest
                        ]);
                        requestResolver = new _logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.RequestResolver.RequestResolver(networkLog);
                        return [
                            4,
                            requestResolver.waitFor(requestId1)
                        ];
                    case 1:
                        request = _state.sent();
                        assert.isFalse(networkLog.hasEventListeners(_logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.NetworkLog.Events.RequestAdded));
                        assert.strictEqual(request, mockRequest);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should reject the promise after `clear` has been called', /*#__PURE__*/ _async_to_generator(function() {
            var networkLog, requestResolver, request, e;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        networkLog = new _testing_MockNetworkLog_js__WEBPACK_IMPORTED_MODULE_0__.MockNetworkLog([]);
                        requestResolver = new _logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.RequestResolver.RequestResolver(networkLog);
                        request = requestResolver.waitFor(requestId1);
                        assert.isTrue(networkLog.hasEventListeners(_logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.NetworkLog.Events.RequestAdded));
                        requestResolver.clear();
                        assert.isFalse(networkLog.hasEventListeners(_logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.NetworkLog.Events.RequestAdded));
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4,
                            request
                        ];
                    case 2:
                        _state.sent();
                        return [
                            3,
                            4
                        ];
                    case 3:
                        e = _state.sent();
                        return [
                            2
                        ];
                    case 4:
                        assert.fail('Expected `await request` to throw.');
                        return [
                            2
                        ];
                }
            });
        }));
        it('should resolve a previously unknown request when it becomes available', /*#__PURE__*/ _async_to_generator(function() {
            var mockNetworkLog, networkLog, requestResolver, requestPromise, mockRequest, request;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        mockNetworkLog = new _testing_MockNetworkLog_js__WEBPACK_IMPORTED_MODULE_0__.MockNetworkLog([]);
                        networkLog = mockNetworkLog;
                        requestResolver = new _logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.RequestResolver.RequestResolver(networkLog);
                        requestPromise = requestResolver.waitFor(requestId1);
                        assert.isTrue(networkLog.hasEventListeners(_logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.NetworkLog.Events.RequestAdded));
                        mockRequest = (0,_testing_MockNetworkLog_js__WEBPACK_IMPORTED_MODULE_0__.createNetworkRequest)(requestId1);
                        mockNetworkLog.addRequest(mockRequest);
                        return [
                            4,
                            requestPromise
                        ];
                    case 1:
                        request = _state.sent();
                        assert.isFalse(networkLog.hasEventListeners(_logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.NetworkLog.Events.RequestAdded));
                        assert.strictEqual(request, mockRequest);
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=RequestResolver.test.js.map


}),
"./testing/MockNetworkLog.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MockNetworkLog: function() { return MockNetworkLog; },
  createNetworkRequest: function() { return createNetworkRequest; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/logs/logs.js */ "./models/logs/logs.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}


function createNetworkRequest(requestId) {
    return {
        requestId: function requestId1() {
            return requestId;
        },
        backendRequestId: function backendRequestId() {
            return requestId;
        }
    };
}
var MockNetworkLog = /*#__PURE__*/ function(_Common_ObjectWrapper_ObjectWrapper) {
    "use strict";
    _inherits(MockNetworkLog, _Common_ObjectWrapper_ObjectWrapper);
    var _super = _create_super(MockNetworkLog);
    function MockNetworkLog(mockRequests) {
        _class_call_check(this, MockNetworkLog);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "mockRequests", void 0);
        _this.mockRequests = mockRequests;
        return _this;
    }
    _create_class(MockNetworkLog, [
        {
            key: "requestsForId",
            value: function requestsForId(requestId) {
                return this.mockRequests.filter(function(x) {
                    return x.requestId() === requestId;
                });
            }
        },
        {
            key: "addRequest",
            value: function addRequest(mockRequest) {
                this.mockRequests.push(mockRequest);
                this.dispatchEventToListeners(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.NetworkLog.Events.RequestAdded, {
                    request: mockRequest
                });
            }
        }
    ]);
    return MockNetworkLog;
} //# sourceMappingURL=MockNetworkLog.js.map
(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper);


}),

}]);