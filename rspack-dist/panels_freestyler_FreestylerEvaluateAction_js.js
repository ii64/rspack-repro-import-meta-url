"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_freestyler_FreestylerEvaluateAction_js"], {
"./panels/freestyler/FreestylerEvaluateAction.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ExecutionError: function() { return ExecutionError; },
  FreestylerEvaluateAction: function() { return FreestylerEvaluateAction; },
  SideEffectError: function() { return SideEffectError; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
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
var ExecutionError = /*#__PURE__*/ function(Error1) {
    "use strict";
    _inherits(ExecutionError, Error1);
    var _super = _create_super(ExecutionError);
    function ExecutionError() {
        _class_call_check(this, ExecutionError);
        return _super.apply(this, arguments);
    }
    return ExecutionError;
}(_wrap_native_super(Error));
var SideEffectError = /*#__PURE__*/ function(Error1) {
    "use strict";
    _inherits(SideEffectError, Error1);
    var _super = _create_super(SideEffectError);
    function SideEffectError() {
        _class_call_check(this, SideEffectError);
        return _super.apply(this, arguments);
    }
    return SideEffectError;
}(_wrap_native_super(Error));
/* istanbul ignore next */ function stringifyObjectOnThePage() {
    var seenBefore = new WeakMap();
    return JSON.stringify(this, function replacer(key, value) {
        if ((typeof value === "undefined" ? "undefined" : _type_of(value)) === 'object' && value !== null) {
            if (seenBefore.has(value)) {
                return '(cycle)';
            }
            seenBefore.set(value, true);
        }
        if (_instanceof(value, HTMLElement)) {
            var idAttribute = value.id ? ' id="'.concat(value.id, '"') : '';
            var classAttribute = value.classList.value ? ' class="'.concat(value.classList.value, '"') : '';
            return "<".concat(value.nodeName.toLowerCase()).concat(idAttribute).concat(classAttribute, ">").concat(value.hasChildNodes() ? '...' : '', "</").concat(value.nodeName.toLowerCase(), ">");
        }
        if (_instanceof(this, CSSStyleDeclaration)) {
            // Do not add number keys to the output.
            if (!isNaN(Number(key))) {
                return undefined;
            }
        }
        return value;
    });
}
function stringifyRemoteObject(object) {
    return _stringifyRemoteObject.apply(this, arguments);
}
function _stringifyRemoteObject() {
    _stringifyRemoteObject = _async_to_generator(function(object) {
        var _, res;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _ = object.type;
                    switch(_){
                        case "string" /* Protocol.Runtime.RemoteObjectType.String */ :
                            return [
                                3,
                                1
                            ];
                        case "bigint" /* Protocol.Runtime.RemoteObjectType.Bigint */ :
                            return [
                                3,
                                2
                            ];
                        case "boolean" /* Protocol.Runtime.RemoteObjectType.Boolean */ :
                            return [
                                3,
                                3
                            ];
                        case "number" /* Protocol.Runtime.RemoteObjectType.Number */ :
                            return [
                                3,
                                3
                            ];
                        case "undefined" /* Protocol.Runtime.RemoteObjectType.Undefined */ :
                            return [
                                3,
                                4
                            ];
                        case "symbol" /* Protocol.Runtime.RemoteObjectType.Symbol */ :
                            return [
                                3,
                                5
                            ];
                        case "function" /* Protocol.Runtime.RemoteObjectType.Function */ :
                            return [
                                3,
                                5
                            ];
                        case "object" /* Protocol.Runtime.RemoteObjectType.Object */ :
                            return [
                                3,
                                6
                            ];
                    }
                    return [
                        3,
                        8
                    ];
                case 1:
                    return [
                        2,
                        "'".concat(object.value, "'")
                    ];
                case 2:
                    return [
                        2,
                        "".concat(object.value, "n")
                    ];
                case 3:
                    return [
                        2,
                        "".concat(object.value)
                    ];
                case 4:
                    return [
                        2,
                        'undefined'
                    ];
                case 5:
                    return [
                        2,
                        "".concat(object.description)
                    ];
                case 6:
                    return [
                        4,
                        object.callFunction(stringifyObjectOnThePage)
                    ];
                case 7:
                    res = _state.sent();
                    if (!res.object || res.object.type !== "string" /* Protocol.Runtime.RemoteObjectType.String */ ) {
                        throw new Error('Could not stringify the object' + object);
                    }
                    return [
                        2,
                        res.object.value
                    ];
                case 8:
                    throw new Error('Unknown type to stringify ' + object.type);
                case 9:
                    return [
                        2
                    ];
            }
        });
    });
    return _stringifyRemoteObject.apply(this, arguments);
}
var FreestylerEvaluateAction = /*#__PURE__*/ function() {
    "use strict";
    function FreestylerEvaluateAction() {
        _class_call_check(this, FreestylerEvaluateAction);
    }
    _create_class(FreestylerEvaluateAction, null, [
        {
            key: "execute",
            value: function execute(code, executionContext, param) {
                var throwOnSideEffect = param.throwOnSideEffect;
                return _async_to_generator(function() {
                    var response, _response_exceptionDetails_exception, exceptionDescription;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    executionContext.evaluate({
                                        expression: code,
                                        replMode: true,
                                        includeCommandLineAPI: true,
                                        returnByValue: false,
                                        silent: false,
                                        generatePreview: true,
                                        allowUnsafeEvalBlockedByCSP: false,
                                        throwOnSideEffect: throwOnSideEffect
                                    }, /* userGesture */ false, /* awaitPromise */ true)
                                ];
                            case 1:
                                response = _state.sent();
                                if (!response) {
                                    throw new Error('Response is not found');
                                }
                                if ('error' in response) {
                                    throw new ExecutionError(response.error);
                                }
                                if (response.exceptionDetails) {
                                    ;
                                    exceptionDescription = (_response_exceptionDetails_exception = response.exceptionDetails.exception) === null || _response_exceptionDetails_exception === void 0 ? void 0 : _response_exceptionDetails_exception.description;
                                    if (exceptionDescription === null || exceptionDescription === void 0 ? void 0 : exceptionDescription.startsWith('EvalError: Possible side-effect in debug-evaluate')) {
                                        throw new SideEffectError(exceptionDescription);
                                    }
                                    throw new ExecutionError(exceptionDescription || 'JS exception');
                                }
                                return [
                                    2,
                                    stringifyRemoteObject(response.object)
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return FreestylerEvaluateAction;
} //# sourceMappingURL=FreestylerEvaluateAction.js.map
();


}),

}]);