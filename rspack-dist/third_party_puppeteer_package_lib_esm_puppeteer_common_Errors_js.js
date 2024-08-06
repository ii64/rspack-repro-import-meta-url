"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_common_Errors_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ProtocolError: function() { return ProtocolError; },
  PuppeteerError: function() { return PuppeteerError; },
  TargetCloseError: function() { return TargetCloseError; },
  TimeoutError: function() { return TimeoutError; },
  UnsupportedOperation: function() { return UnsupportedOperation; }
});
/**
 * @license
 * Copyright 2018 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * The base class for all Puppeteer-specific errors
 *
 * @public
 */ function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
var PuppeteerError = /*#__PURE__*/ function(Error1) {
    "use strict";
    _inherits(PuppeteerError, Error1);
    var _super = _create_super(PuppeteerError);
    function PuppeteerError(message, options) {
        _class_call_check(this, PuppeteerError);
        var _this;
        _this = _super.call(this, message, options);
        _this.name = _this.constructor.name;
        return _this;
    }
    _create_class(PuppeteerError, [
        {
            key: Symbol.toStringTag,
            get: /**
     * @internal
     */ function get() {
                return this.constructor.name;
            }
        }
    ]);
    return PuppeteerError;
}(_wrap_native_super(Error));
/**
 * TimeoutError is emitted whenever certain operations are terminated due to
 * timeout.
 *
 * @remarks
 * Example operations are {@link Page.waitForSelector | page.waitForSelector} or
 * {@link PuppeteerNode.launch | puppeteer.launch}.
 *
 * @public
 */ var TimeoutError = /*#__PURE__*/ function(PuppeteerError) {
    "use strict";
    _inherits(TimeoutError, PuppeteerError);
    var _super = _create_super(TimeoutError);
    function TimeoutError() {
        _class_call_check(this, TimeoutError);
        return _super.apply(this, arguments);
    }
    return TimeoutError;
}(PuppeteerError);
var _code = /*#__PURE__*/ new WeakMap(), _originalMessage = /*#__PURE__*/ new WeakMap();
/**
 * ProtocolError is emitted whenever there is an error from the protocol.
 *
 * @public
 */ var ProtocolError = /*#__PURE__*/ function(PuppeteerError) {
    "use strict";
    _inherits(ProtocolError, PuppeteerError);
    var _super = _create_super(ProtocolError);
    function ProtocolError() {
        _class_call_check(this, ProtocolError);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_field_init(_assert_this_initialized(_this), _code, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _originalMessage, {
            writable: true,
            value: ''
        });
        return _this;
    }
    _create_class(ProtocolError, [
        {
            key: "code",
            get: /**
     * @readonly
     * @public
     */ function get() {
                return _class_private_field_get(this, _code);
            },
            set: function set(code) {
                _class_private_field_set(this, _code, code);
            }
        },
        {
            key: "originalMessage",
            get: /**
     * @readonly
     * @public
     */ function get() {
                return _class_private_field_get(this, _originalMessage);
            },
            set: function set(originalMessage) {
                _class_private_field_set(this, _originalMessage, originalMessage);
            }
        }
    ]);
    return ProtocolError;
}(PuppeteerError);
/**
 * Puppeteer will throw this error if a method is not
 * supported by the currently used protocol
 *
 * @public
 */ var UnsupportedOperation = /*#__PURE__*/ function(PuppeteerError) {
    "use strict";
    _inherits(UnsupportedOperation, PuppeteerError);
    var _super = _create_super(UnsupportedOperation);
    function UnsupportedOperation() {
        _class_call_check(this, UnsupportedOperation);
        return _super.apply(this, arguments);
    }
    return UnsupportedOperation;
}(PuppeteerError);
/**
 * @internal
 */ var TargetCloseError = /*#__PURE__*/ function(ProtocolError) {
    "use strict";
    _inherits(TargetCloseError, ProtocolError);
    var _super = _create_super(TargetCloseError);
    function TargetCloseError() {
        _class_call_check(this, TargetCloseError);
        return _super.apply(this, arguments);
    }
    return TargetCloseError;
} //# sourceMappingURL=Errors.js.map
(ProtocolError);


}),

}]);