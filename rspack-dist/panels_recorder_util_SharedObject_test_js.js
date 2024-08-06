"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_util_SharedObject_test_js"], {
"./panels/recorder/injected/injected.generated.js?b4f9": (function (module, __unused_webpack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "5c2e39d1e29b9e58f6c0.js";

}),
"./panels/recorder/util/SharedObject.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./panels/recorder/util/util.js");
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

describe('SharedObject', function() {
    it('should work', /*#__PURE__*/ _async_to_generator(function() {
        var testObject, object, _ref, object1, release1, _ref1, object2, release2;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    // The test object
                    testObject = {
                        value: false
                    };
                    object = new _util_js__WEBPACK_IMPORTED_MODULE_0__.SharedObject.SharedObject(function() {
                        testObject.value = true;
                        return _object_spread({}, testObject);
                    }, function(object) {
                        object.value = false;
                    });
                    // No one acquired.
                    assert.isFalse(testObject.value);
                    return [
                        4,
                        object.acquire()
                    ];
                case 1:
                    _ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        2
                    ]), object1 = _ref[0], release1 = _ref[1];
                    // Should be created.
                    assert.notStrictEqual(object1, testObject);
                    // Acquired actually occured.
                    assert.isTrue(testObject.value);
                    return [
                        4,
                        object.acquire()
                    ];
                case 2:
                    _ref1 = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        2
                    ]), object2 = _ref1[0], release2 = _ref1[1];
                    // Should equal the first acquired object.
                    assert.strictEqual(object2, object1);
                    // Should still be true.
                    assert.isTrue(object1.value);
                    // First release (can be in any order).
                    return [
                        4,
                        release1()
                    ];
                case 3:
                    _state.sent();
                    // Should still be true.
                    assert.isTrue(object1.value);
                    // Second release.
                    return [
                        4,
                        release2()
                    ];
                case 4:
                    _state.sent();
                    assert.isFalse(object1.value);
                    return [
                        2
                    ];
            }
        });
    }));
    it('should work with run', /*#__PURE__*/ _async_to_generator(function() {
        var testObject, object, finalObject, promises;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    // The test object
                    testObject = {
                        value: false
                    };
                    object = new _util_js__WEBPACK_IMPORTED_MODULE_0__.SharedObject.SharedObject(function() {
                        testObject.value = true;
                        return _object_spread({}, testObject);
                    }, function(object) {
                        object.value = false;
                    });
                    // No one acquired.
                    assert.isFalse(testObject.value);
                    promises = [];
                    // First acquire.
                    promises.push(object.run(function() {
                        var _ref = _async_to_generator(function(object1) {
                            return _ts_generator(this, function(_state) {
                                // Should be created.
                                assert.notStrictEqual(object1, testObject);
                                // Acquired actually occured.
                                assert.isTrue(testObject.value);
                                promises.push(object.run(function() {
                                    var _ref = _async_to_generator(function(object2) {
                                        return _ts_generator(this, function(_state) {
                                            // Should equal the first acquired object.
                                            assert.strictEqual(object2, object1);
                                            // Should still be true.
                                            assert.isTrue(object1.value);
                                            finalObject = object1;
                                            return [
                                                2
                                            ];
                                        });
                                    });
                                    return function(object2) {
                                        return _ref.apply(this, arguments);
                                    };
                                }()));
                                return [
                                    2
                                ];
                            });
                        });
                        return function(object1) {
                            return _ref.apply(this, arguments);
                        };
                    }()));
                    return [
                        4,
                        Promise.all(promises)
                    ];
                case 1:
                    _state.sent();
                    assert.exists(finalObject);
                    assert.isFalse(finalObject === null || finalObject === void 0 ? void 0 : finalObject.value);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=SharedObject.test.js.map


}),
"./panels/recorder/util/util.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DEVTOOLS_RECORDER_WORLD_NAME: function() { return DEVTOOLS_RECORDER_WORLD_NAME; },
  InjectedScript: function() { return InjectedScript; },
  SharedObject: function() { return /* reexport module object */ _SharedObject_js__WEBPACK_IMPORTED_MODULE_0__; },
  isDebugBuild: function() { return isDebugBuild; }
});
/* harmony import */var _SharedObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharedObject.js */ "./panels/recorder/util/SharedObject.js");
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
function _class_check_private_static_field_descriptor(descriptor, action) {
    if (descriptor === undefined) {
        throw new TypeError("attempted to " + action + " private static field before its declaration");
    }
}
function _class_static_private_field_spec_get(receiver, classConstructor, descriptor) {
    _class_check_private_static_access(receiver, classConstructor);
    _class_check_private_static_field_descriptor(descriptor, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_static_private_field_spec_set(receiver, classConstructor, descriptor, value) {
    _class_check_private_static_access(receiver, classConstructor);
    _class_check_private_static_field_descriptor(descriptor, "set");
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
function _class_check_private_static_access(receiver, classConstructor) {
    if (receiver !== classConstructor) {
        throw new TypeError("Private static access of wrong provenance");
    }
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

// Setting this to `true` enables extra logging for the injected scripts.
var isDebugBuild = false;
var DEVTOOLS_RECORDER_WORLD_NAME = 'devtools_recorder';
var InjectedScript = /*#__PURE__*/ function() {
    "use strict";
    function InjectedScript() {
        _class_call_check(this, InjectedScript);
    }
    _create_class(InjectedScript, null, [
        {
            key: "get",
            value: function get() {
                var _this = this;
                return _async_to_generator(function() {
                    var _tmp;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!!_class_static_private_field_spec_get(_this, InjectedScript, _injectedScript)) return [
                                    3,
                                    2
                                ];
                                _tmp = [
                                    _this,
                                    InjectedScript,
                                    _injectedScript
                                ];
                                return [
                                    4,
                                    fetch(new URL(/* asset import */__webpack_require__(/*! ../injected/injected.generated.js */ "./panels/recorder/injected/injected.generated.js?b4f9"), __webpack_require__.b))
                                ];
                            case 1:
                                _class_static_private_field_spec_set.apply(void 0, _tmp.concat([
                                    _state.sent().text()
                                ]));
                                _state.label = 2;
                            case 2:
                                return [
                                    2,
                                    _class_static_private_field_spec_get(_this, InjectedScript, _injectedScript)
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return InjectedScript;
}();
var _injectedScript = {
    writable: true,
    value: void 0
};
 //# sourceMappingURL=util.js.map


}),

}]);