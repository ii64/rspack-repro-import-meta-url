"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_LifecycleWatcher_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/FrameManagerEvents.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  FrameManagerEvent: function() { return FrameManagerEvent; }
});
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * We use symbols to prevent external parties listening to these events.
 * They are internal to Puppeteer.
 *
 * @internal
 */ // eslint-disable-next-line @typescript-eslint/no-namespace
var FrameManagerEvent;
(function(FrameManagerEvent) {
    FrameManagerEvent.FrameAttached = Symbol('FrameManager.FrameAttached');
    FrameManagerEvent.FrameNavigated = Symbol('FrameManager.FrameNavigated');
    FrameManagerEvent.FrameDetached = Symbol('FrameManager.FrameDetached');
    FrameManagerEvent.FrameSwapped = Symbol('FrameManager.FrameSwapped');
    FrameManagerEvent.LifecycleEvent = Symbol('FrameManager.LifecycleEvent');
    FrameManagerEvent.FrameNavigatedWithinDocument = Symbol('FrameManager.FrameNavigatedWithinDocument');
    FrameManagerEvent.ConsoleApiCalled = Symbol('FrameManager.ConsoleApiCalled');
    FrameManagerEvent.BindingCalled = Symbol('FrameManager.BindingCalled');
})(FrameManagerEvent || (FrameManagerEvent = {})); //# sourceMappingURL=FrameManagerEvents.js.map


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/LifecycleWatcher.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LifecycleWatcher: function() { return LifecycleWatcher; }
});
/* harmony import */var _api_Frame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Frame.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Frame.js");
/* harmony import */var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */var _common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/NetworkManagerEvents.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/NetworkManagerEvents.js");
/* harmony import */var _util_assert_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/Deferred.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/* harmony import */var _util_disposable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/* harmony import */var _FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FrameManagerEvents.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/FrameManagerEvents.js");
/**
 * @license
 * Copyright 2019 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
}
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}
function _class_private_method_init(obj, privateSet) {
    _check_private_redeclaration(obj, privateSet);
    privateSet.add(obj);
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







var puppeteerToProtocolLifecycle = new Map([
    [
        'load',
        'load'
    ],
    [
        'domcontentloaded',
        'DOMContentLoaded'
    ],
    [
        'networkidle0',
        'networkIdle'
    ],
    [
        'networkidle2',
        'networkAlmostIdle'
    ]
]);
var _expectedLifecycle = /*#__PURE__*/ new WeakMap(), _frame = /*#__PURE__*/ new WeakMap(), _timeout = /*#__PURE__*/ new WeakMap(), _navigationRequest = /*#__PURE__*/ new WeakMap(), _subscriptions = /*#__PURE__*/ new WeakMap(), _initialLoaderId = /*#__PURE__*/ new WeakMap(), _terminationDeferred = /*#__PURE__*/ new WeakMap(), _sameDocumentNavigationDeferred = /*#__PURE__*/ new WeakMap(), _lifecycleDeferred = /*#__PURE__*/ new WeakMap(), _newDocumentNavigationDeferred = /*#__PURE__*/ new WeakMap(), _hasSameDocumentNavigation = /*#__PURE__*/ new WeakMap(), _swapped = /*#__PURE__*/ new WeakMap(), _navigationResponseReceived = /*#__PURE__*/ new WeakMap(), _onRequest = /*#__PURE__*/ new WeakSet(), _onRequestFailed = /*#__PURE__*/ new WeakSet(), _onResponse = /*#__PURE__*/ new WeakSet(), _onFrameDetached = /*#__PURE__*/ new WeakSet(), _navigatedWithinDocument = /*#__PURE__*/ new WeakSet(), _navigated = /*#__PURE__*/ new WeakSet(), _frameSwapped = /*#__PURE__*/ new WeakSet(), _checkLifecycleComplete = /*#__PURE__*/ new WeakSet();
/**
 * @internal
 */ var LifecycleWatcher = /*#__PURE__*/ function() {
    "use strict";
    function LifecycleWatcher(networkManager, frame, waitUntil, timeout) {
        _class_call_check(this, LifecycleWatcher);
        _class_private_method_init(this, _onRequest);
        _class_private_method_init(this, _onRequestFailed);
        _class_private_method_init(this, _onResponse);
        _class_private_method_init(this, _onFrameDetached);
        _class_private_method_init(this, _navigatedWithinDocument);
        _class_private_method_init(this, _navigated);
        _class_private_method_init(this, _frameSwapped);
        _class_private_method_init(this, _checkLifecycleComplete);
        _class_private_field_init(this, _expectedLifecycle, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _frame, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _timeout, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _navigationRequest, {
            writable: true,
            value: null
        });
        _class_private_field_init(this, _subscriptions, {
            writable: true,
            value: new _util_disposable_js__WEBPACK_IMPORTED_MODULE_5__.DisposableStack()
        });
        _class_private_field_init(this, _initialLoaderId, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _terminationDeferred, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _sameDocumentNavigationDeferred, {
            writable: true,
            value: _util_Deferred_js__WEBPACK_IMPORTED_MODULE_4__.Deferred.create()
        });
        _class_private_field_init(this, _lifecycleDeferred, {
            writable: true,
            value: _util_Deferred_js__WEBPACK_IMPORTED_MODULE_4__.Deferred.create()
        });
        _class_private_field_init(this, _newDocumentNavigationDeferred, {
            writable: true,
            value: _util_Deferred_js__WEBPACK_IMPORTED_MODULE_4__.Deferred.create()
        });
        _class_private_field_init(this, _hasSameDocumentNavigation, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _swapped, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _navigationResponseReceived, {
            writable: true,
            value: void 0
        });
        if (Array.isArray(waitUntil)) {
            waitUntil = waitUntil.slice();
        } else if (typeof waitUntil === 'string') {
            waitUntil = [
                waitUntil
            ];
        }
        _class_private_field_set(this, _initialLoaderId, frame._loaderId);
        _class_private_field_set(this, _expectedLifecycle, waitUntil.map(function(value) {
            var protocolEvent = puppeteerToProtocolLifecycle.get(value);
            (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_3__.assert)(protocolEvent, 'Unknown value for options.waitUntil: ' + value);
            return protocolEvent;
        }));
        _class_private_field_set(this, _frame, frame);
        _class_private_field_set(this, _timeout, timeout);
        var frameManagerEmitter = _class_private_field_get(this, _subscriptions).use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(frame._frameManager));
        frameManagerEmitter.on(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_6__.FrameManagerEvent.LifecycleEvent, _class_private_method_get(this, _checkLifecycleComplete, checkLifecycleComplete).bind(this));
        var frameEmitter = _class_private_field_get(this, _subscriptions).use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(frame));
        frameEmitter.on(_api_Frame_js__WEBPACK_IMPORTED_MODULE_0__.FrameEvent.FrameNavigatedWithinDocument, _class_private_method_get(this, _navigatedWithinDocument, navigatedWithinDocument).bind(this));
        frameEmitter.on(_api_Frame_js__WEBPACK_IMPORTED_MODULE_0__.FrameEvent.FrameNavigated, _class_private_method_get(this, _navigated, navigated).bind(this));
        frameEmitter.on(_api_Frame_js__WEBPACK_IMPORTED_MODULE_0__.FrameEvent.FrameSwapped, _class_private_method_get(this, _frameSwapped, frameSwapped).bind(this));
        frameEmitter.on(_api_Frame_js__WEBPACK_IMPORTED_MODULE_0__.FrameEvent.FrameSwappedByActivation, _class_private_method_get(this, _frameSwapped, frameSwapped).bind(this));
        frameEmitter.on(_api_Frame_js__WEBPACK_IMPORTED_MODULE_0__.FrameEvent.FrameDetached, _class_private_method_get(this, _onFrameDetached, onFrameDetached).bind(this));
        var networkManagerEmitter = _class_private_field_get(this, _subscriptions).use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(networkManager));
        networkManagerEmitter.on(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManagerEvent.Request, _class_private_method_get(this, _onRequest, onRequest).bind(this));
        networkManagerEmitter.on(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManagerEvent.Response, _class_private_method_get(this, _onResponse, onResponse).bind(this));
        networkManagerEmitter.on(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManagerEvent.RequestFailed, _class_private_method_get(this, _onRequestFailed, onRequestFailed).bind(this));
        _class_private_field_set(this, _terminationDeferred, _util_Deferred_js__WEBPACK_IMPORTED_MODULE_4__.Deferred.create({
            timeout: _class_private_field_get(this, _timeout),
            message: "Navigation timeout of ".concat(_class_private_field_get(this, _timeout), " ms exceeded")
        }));
        _class_private_method_get(this, _checkLifecycleComplete, checkLifecycleComplete).call(this);
    }
    _create_class(LifecycleWatcher, [
        {
            key: "navigationResponse",
            value: function navigationResponse() {
                var _this = this;
                return _async_to_generator(function() {
                    var _$_class_private_field_get;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                // Continue with a possibly null response.
                                return [
                                    4,
                                    (_$_class_private_field_get = _class_private_field_get(_this, _navigationResponseReceived)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.valueOrThrow()
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2,
                                    _class_private_field_get(_this, _navigationRequest) ? _class_private_field_get(_this, _navigationRequest).response() : null
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "sameDocumentNavigationPromise",
            value: function sameDocumentNavigationPromise() {
                return _class_private_field_get(this, _sameDocumentNavigationDeferred).valueOrThrow();
            }
        },
        {
            key: "newDocumentNavigationPromise",
            value: function newDocumentNavigationPromise() {
                return _class_private_field_get(this, _newDocumentNavigationDeferred).valueOrThrow();
            }
        },
        {
            key: "lifecyclePromise",
            value: function lifecyclePromise() {
                return _class_private_field_get(this, _lifecycleDeferred).valueOrThrow();
            }
        },
        {
            key: "terminationPromise",
            value: function terminationPromise() {
                return _class_private_field_get(this, _terminationDeferred).valueOrThrow();
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                _class_private_field_get(this, _subscriptions).dispose();
                _class_private_field_get(this, _terminationDeferred).resolve(new Error('LifecycleWatcher disposed'));
            }
        }
    ]);
    return LifecycleWatcher;
} //# sourceMappingURL=LifecycleWatcher.js.map
();
function onRequest(request) {
    var _$_class_private_field_get;
    if (request.frame() !== _class_private_field_get(this, _frame) || !request.isNavigationRequest()) {
        return;
    }
    _class_private_field_set(this, _navigationRequest, request);
    // Resolve previous navigation response in case there are multiple
    // navigation requests reported by the backend. This generally should not
    // happen by it looks like it's possible.
    (_$_class_private_field_get = _class_private_field_get(this, _navigationResponseReceived)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.resolve();
    _class_private_field_set(this, _navigationResponseReceived, _util_Deferred_js__WEBPACK_IMPORTED_MODULE_4__.Deferred.create());
    if (request.response() !== null) {
        var _$_class_private_field_get1;
        (_$_class_private_field_get1 = _class_private_field_get(this, _navigationResponseReceived)) === null || _$_class_private_field_get1 === void 0 ? void 0 : _$_class_private_field_get1.resolve();
    }
}
function onRequestFailed(request) {
    var _$_class_private_field_get, _$_class_private_field_get1;
    if (((_$_class_private_field_get = _class_private_field_get(this, _navigationRequest)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.id) !== request.id) {
        return;
    }
    (_$_class_private_field_get1 = _class_private_field_get(this, _navigationResponseReceived)) === null || _$_class_private_field_get1 === void 0 ? void 0 : _$_class_private_field_get1.resolve();
}
function onResponse(response) {
    var _$_class_private_field_get, _$_class_private_field_get1;
    if (((_$_class_private_field_get = _class_private_field_get(this, _navigationRequest)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.id) !== response.request().id) {
        return;
    }
    (_$_class_private_field_get1 = _class_private_field_get(this, _navigationResponseReceived)) === null || _$_class_private_field_get1 === void 0 ? void 0 : _$_class_private_field_get1.resolve();
}
function onFrameDetached(frame) {
    if (_class_private_field_get(this, _frame) === frame) {
        _class_private_field_get(this, _terminationDeferred).resolve(new Error('Navigating frame was detached'));
        return;
    }
    _class_private_method_get(this, _checkLifecycleComplete, checkLifecycleComplete).call(this);
}
function navigatedWithinDocument() {
    _class_private_field_set(this, _hasSameDocumentNavigation, true);
    _class_private_method_get(this, _checkLifecycleComplete, checkLifecycleComplete).call(this);
}
function navigated(navigationType) {
    if (navigationType === 'BackForwardCacheRestore') {
        return _class_private_method_get(this, _frameSwapped, frameSwapped).call(this);
    }
    _class_private_method_get(this, _checkLifecycleComplete, checkLifecycleComplete).call(this);
}
function frameSwapped() {
    _class_private_field_set(this, _swapped, true);
    _class_private_method_get(this, _checkLifecycleComplete, checkLifecycleComplete).call(this);
}
function checkLifecycleComplete() {
    // We expect navigation to commit.
    if (!checkLifecycle(_class_private_field_get(this, _frame), _class_private_field_get(this, _expectedLifecycle))) {
        return;
    }
    _class_private_field_get(this, _lifecycleDeferred).resolve();
    if (_class_private_field_get(this, _hasSameDocumentNavigation)) {
        _class_private_field_get(this, _sameDocumentNavigationDeferred).resolve(undefined);
    }
    if (_class_private_field_get(this, _swapped) || _class_private_field_get(this, _frame)._loaderId !== _class_private_field_get(this, _initialLoaderId)) {
        _class_private_field_get(this, _newDocumentNavigationDeferred).resolve(undefined);
    }
    function checkLifecycle(frame, expectedLifecycle) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = expectedLifecycle[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var event = _step.value;
                if (!frame._lifecycleEvents.has(event)) {
                    return false;
                }
            }
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
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            // TODO(#1): Its possible we don't need this check
            // CDP provided the correct order for Loading Events
            // And NetworkIdle is a global state
            // Consider removing
            for(var _iterator1 = frame.childFrames()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var child = _step1.value;
                if (child._hasStartedLoading && !checkLifecycle(child, expectedLifecycle)) {
                    return false;
                }
            }
        } catch (err) {
            _didIteratorError1 = true;
            _iteratorError1 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                    _iterator1.return();
                }
            } finally{
                if (_didIteratorError1) {
                    throw _iteratorError1;
                }
            }
        }
        return true;
    }
}


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/common/NetworkManagerEvents.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  NetworkManagerEvent: function() { return NetworkManagerEvent; }
});
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * We use symbols to prevent any external parties listening to these events.
 * They are internal to Puppeteer.
 *
 * @internal
 */ // eslint-disable-next-line @typescript-eslint/no-namespace
var NetworkManagerEvent;
(function(NetworkManagerEvent) {
    NetworkManagerEvent.Request = Symbol('NetworkManager.Request');
    NetworkManagerEvent.RequestServedFromCache = Symbol('NetworkManager.RequestServedFromCache');
    NetworkManagerEvent.Response = Symbol('NetworkManager.Response');
    NetworkManagerEvent.RequestFailed = Symbol('NetworkManager.RequestFailed');
    NetworkManagerEvent.RequestFinished = Symbol('NetworkManager.RequestFinished');
})(NetworkManagerEvent || (NetworkManagerEvent = {})); //# sourceMappingURL=NetworkManagerEvents.js.map


}),

}]);