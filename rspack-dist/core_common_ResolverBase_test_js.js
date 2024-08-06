"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_common_ResolverBase_test_js"], {
"./core/common/ResolverBase.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ResolverTestImpl: function() { return ResolverTestImpl; }
});
/* harmony import */var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./core/common/common.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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

var TestClass = function TestClass() {
    "use strict";
    _class_call_check(this, TestClass);
};
var ResolverTestImpl = /*#__PURE__*/ function(_Common_ResolverBase_ResolverBase) {
    "use strict";
    _inherits(ResolverTestImpl, _Common_ResolverBase_ResolverBase);
    var _super = _create_super(ResolverTestImpl);
    function ResolverTestImpl(id, obj) {
        _class_call_check(this, ResolverTestImpl);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "items", new Map());
        _define_property(_assert_this_initialized(_this), "currentlyListening", false);
        if (id !== undefined && obj !== undefined) {
            _this.items.set(id, obj);
        }
        return _this;
    }
    _create_class(ResolverTestImpl, [
        {
            key: "getForId",
            value: function getForId(id) {
                return this.items.get(id) || null;
            }
        },
        {
            key: "startListening",
            value: function startListening() {
                this.currentlyListening = true;
            }
        },
        {
            key: "stopListening",
            value: function stopListening() {
                this.currentlyListening = false;
            }
        },
        {
            key: "assertIsListening",
            value: function assertIsListening() {
                assert.isTrue(this.currentlyListening, 'Expected to be listening');
            }
        },
        {
            key: "assertIsNotListening",
            value: function assertIsNotListening() {
                assert.isFalse(this.currentlyListening, 'Expected to be listening');
            }
        },
        {
            key: "onResolve",
            value: function onResolve(id, obj) {
                _get(_get_prototype_of(ResolverTestImpl.prototype), "onResolve", this).call(this, id, obj);
            }
        }
    ]);
    return ResolverTestImpl;
}(_common_js__WEBPACK_IMPORTED_MODULE_0__.ResolverBase.ResolverBase);
describe('ResolverBase', function() {
    var id = 'foo';
    var testObj = new TestClass();
    describe('tryGet', function() {
        it('should resolve a known object', function() {
            var resolver = new ResolverTestImpl(id, testObj);
            var obj = resolver.tryGet(id, function() {
                throw new Error('This should not get called');
            });
            resolver.assertIsNotListening();
            assert.strictEqual(obj, testObj);
        });
        it('should not resolve an unknown object', function() {
            var resolver = new ResolverTestImpl();
            var obj = resolver.tryGet(id, function() {
                throw new Error('This should not get called');
            });
            resolver.assertIsListening();
            assert.strictEqual(obj, null);
            resolver.clear();
        });
        it('should resolve a previously unknown object when it becomes available', /*#__PURE__*/ _async_to_generator(function() {
            var resolver, waitForCall, obj;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        resolver = new ResolverTestImpl();
                        waitForCall = new Promise(function(resolve) {
                            var obj = resolver.tryGet(id, resolve);
                            assert.strictEqual(obj, null);
                        });
                        resolver.assertIsListening();
                        resolver.onResolve(id, testObj);
                        return [
                            4,
                            waitForCall
                        ];
                    case 1:
                        obj = _state.sent();
                        resolver.assertIsNotListening();
                        assert.strictEqual(obj, testObj);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('waitFor', function() {
        it('should resolve an existing object', /*#__PURE__*/ _async_to_generator(function() {
            var resolver, obj;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        resolver = new ResolverTestImpl(id, testObj);
                        return [
                            4,
                            resolver.waitFor(id)
                        ];
                    case 1:
                        obj = _state.sent();
                        resolver.assertIsNotListening();
                        assert.strictEqual(obj, testObj);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should reject the promise after `clear` has been called', /*#__PURE__*/ _async_to_generator(function() {
            var resolver, obj, e;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        resolver = new ResolverTestImpl();
                        obj = resolver.waitFor(id);
                        resolver.assertIsListening();
                        resolver.clear();
                        resolver.assertIsNotListening();
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
                            obj
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
                        assert.fail('Expected `await obj` to throw.');
                        return [
                            2
                        ];
                }
            });
        }));
        it('should resolve a previously unknown object when it becomes available', /*#__PURE__*/ _async_to_generator(function() {
            var resolver, objPromise, obj;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        resolver = new ResolverTestImpl();
                        objPromise = resolver.waitFor(id);
                        resolver.assertIsListening();
                        resolver.onResolve(id, testObj);
                        return [
                            4,
                            objPromise
                        ];
                    case 1:
                        obj = _state.sent();
                        resolver.assertIsNotListening();
                        assert.strictEqual(obj, obj);
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=ResolverBase.test.js.map


}),

}]);