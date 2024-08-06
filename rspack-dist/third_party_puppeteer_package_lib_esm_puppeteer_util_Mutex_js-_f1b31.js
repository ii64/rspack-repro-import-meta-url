"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_util_Mutex_js-_f1b31"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/util/Mutex.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Mutex: function() { return Mutex; }
});
/* harmony import */var _Deferred_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Deferred.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/* harmony import */var _disposable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/**
 * @license
 * Copyright 2024 Google Inc.
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
var _disposeSymbol;
var _mutex, _onRelease;


var _locked = /*#__PURE__*/ new WeakMap(), _acquirers = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var Mutex = /*#__PURE__*/ function() {
    "use strict";
    function Mutex() {
        _class_call_check(this, Mutex);
        _class_private_field_init(this, _locked, {
            writable: true,
            value: false
        });
        _class_private_field_init(this, _acquirers, {
            writable: true,
            value: []
        });
    }
    _create_class(Mutex, [
        {
            key: "acquire",
            value: // This is FIFO.
            function acquire(onRelease) {
                var _this = this;
                return _async_to_generator(function() {
                    var deferred;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_class_private_field_get(_this, _locked)) {
                                    _class_private_field_set(_this, _locked, true);
                                    return [
                                        2,
                                        new Mutex.Guard(_this)
                                    ];
                                }
                                deferred = _Deferred_js__WEBPACK_IMPORTED_MODULE_0__.Deferred.create();
                                _class_private_field_get(_this, _acquirers).push(deferred.resolve.bind(deferred));
                                return [
                                    4,
                                    deferred.valueOrThrow()
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2,
                                    new Mutex.Guard(_this, onRelease)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "release",
            value: function release() {
                var resolve = _class_private_field_get(this, _acquirers).shift();
                if (!resolve) {
                    _class_private_field_set(this, _locked, false);
                    return;
                }
                resolve();
            }
        }
    ]);
    return Mutex;
} //# sourceMappingURL=Mutex.js.map
();
_define_property(Mutex, "Guard", (_mutex = /*#__PURE__*/ new WeakMap(), _onRelease = /*#__PURE__*/ new WeakMap(), _disposeSymbol = _disposable_js__WEBPACK_IMPORTED_MODULE_1__.disposeSymbol, /*#__PURE__*/ function() {
    "use strict";
    function Guard(mutex, onRelease) {
        _class_call_check(this, Guard);
        _class_private_field_init(this, _mutex, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _onRelease, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _mutex, mutex);
        _class_private_field_set(this, _onRelease, onRelease);
    }
    _create_class(Guard, [
        {
            key: _disposeSymbol,
            value: function value() {
                var _this, _this1, _ref;
                (_this = _class_private_field_get(_ref = _this1 = this, _onRelease)) === null || _this === void 0 ? void 0 : _this.call(_this1);
                return _class_private_field_get(this, _mutex).release();
            }
        }
    ]);
    return Guard;
}()));


}),

}]);