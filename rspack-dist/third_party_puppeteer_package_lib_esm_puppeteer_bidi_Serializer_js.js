"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_bidi_Serializer_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Serializer.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BidiSerializer: function() { return BidiSerializer; }
});
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ function _assert_this_initialized(self) {
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
function _class_static_private_method_get(receiver, classConstructor, method) {
    _class_check_private_static_access(receiver, classConstructor);
    return method;
}
function _class_check_private_static_access(receiver, classConstructor) {
    if (receiver !== classConstructor) {
        throw new TypeError("Private static access of wrong provenance");
    }
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

/**
 * @internal
 */ var UnserializableError = /*#__PURE__*/ function(Error1) {
    "use strict";
    _inherits(UnserializableError, Error1);
    var _super = _create_super(UnserializableError);
    function UnserializableError() {
        _class_call_check(this, UnserializableError);
        return _super.apply(this, arguments);
    }
    return UnserializableError;
}(_wrap_native_super(Error));
/**
 * @internal
 */ var BidiSerializer = /*#__PURE__*/ function() {
    "use strict";
    function BidiSerializer() {
        _class_call_check(this, BidiSerializer);
    }
    _create_class(BidiSerializer, null, [
        {
            key: "serialize",
            value: function serialize(arg) {
                switch(typeof arg === "undefined" ? "undefined" : _type_of(arg)){
                    case 'symbol':
                    case 'function':
                        throw new UnserializableError("Unable to serializable ".concat(typeof arg === "undefined" ? "undefined" : _type_of(arg)));
                    case 'object':
                        return _class_static_private_method_get(this, BidiSerializer, serializeObject).call(BidiSerializer, arg);
                    case 'undefined':
                        return {
                            type: 'undefined'
                        };
                    case 'number':
                        return _class_static_private_method_get(this, BidiSerializer, serializeNumber).call(BidiSerializer, arg);
                    case 'bigint':
                        return {
                            type: 'bigint',
                            value: arg.toString()
                        };
                    case 'string':
                        return {
                            type: 'string',
                            value: arg
                        };
                    case 'boolean':
                        return {
                            type: 'boolean',
                            value: arg
                        };
                }
            }
        }
    ]);
    return BidiSerializer;
} //# sourceMappingURL=Serializer.js.map
();
function serializeNumber(arg) {
    var value;
    if (Object.is(arg, -0)) {
        value = '-0';
    } else if (Object.is(arg, Infinity)) {
        value = 'Infinity';
    } else if (Object.is(arg, -Infinity)) {
        value = '-Infinity';
    } else if (Object.is(arg, NaN)) {
        value = 'NaN';
    } else {
        value = arg;
    }
    return {
        type: 'number',
        value: value
    };
}
function serializeObject(arg) {
    var _this = this;
    if (arg === null) {
        return {
            type: 'null'
        };
    } else if (Array.isArray(arg)) {
        var parsedArray = arg.map(function(subArg) {
            return _this.serialize(subArg);
        });
        return {
            type: 'array',
            value: parsedArray
        };
    } else if ((0,_common_util_js__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(arg)) {
        try {
            JSON.stringify(arg);
        } catch (error) {
            if (_instanceof(error, TypeError) && error.message.startsWith('Converting circular structure to JSON')) {
                error.message += ' Recursive objects are not allowed.';
            }
            throw error;
        }
        var parsedObject = [];
        for(var key in arg){
            parsedObject.push([
                this.serialize(key),
                this.serialize(arg[key])
            ]);
        }
        return {
            type: 'object',
            value: parsedObject
        };
    } else if ((0,_common_util_js__WEBPACK_IMPORTED_MODULE_0__.isRegExp)(arg)) {
        return {
            type: 'regexp',
            value: {
                pattern: arg.source,
                flags: arg.flags
            }
        };
    } else if ((0,_common_util_js__WEBPACK_IMPORTED_MODULE_0__.isDate)(arg)) {
        return {
            type: 'date',
            value: arg.toISOString()
        };
    }
    throw new UnserializableError('Custom object serialization not possible. Use plain objects instead.');
}


}),

}]);