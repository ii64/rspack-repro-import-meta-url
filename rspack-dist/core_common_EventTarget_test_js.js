"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_common_EventTarget_test_js"], {
"./core/common/EventTarget.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./core/common/common.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Important: This code does not actually run any tests but is used to verify
//            that the type magic of `EventTarget` behaves as expected w.r.t
//            to the TypeScript compiler.
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

var TypedEventEmitter = /*#__PURE__*/ function(_Common_ObjectWrapper_ObjectWrapper) {
    "use strict";
    _inherits(TypedEventEmitter, _Common_ObjectWrapper_ObjectWrapper);
    var _super = _create_super(TypedEventEmitter);
    function TypedEventEmitter() {
        _class_call_check(this, TypedEventEmitter);
        return _super.apply(this, arguments);
    }
    _create_class(TypedEventEmitter, [
        {
            key: "testValidArgumentTypes",
            value: function testValidArgumentTypes() {
                this.dispatchEventToListeners("VoidEvent" /* Events.VoidEvent */ );
                this.dispatchEventToListeners("NumberEvent" /* Events.NumberEvent */ , 5.0);
                this.dispatchEventToListeners("KeyValueEvent" /* Events.KeyValueEvent */ , {
                    key: 'key',
                    value: 42
                });
                this.dispatchEventToListeners("BooleanEvent" /* Events.BooleanEvent */ , true);
                this.dispatchEventToListeners("UnionEvent" /* Events.UnionEvent */ , 'foo');
                this.dispatchEventToListeners("UnionEvent" /* Events.UnionEvent */ , null);
            }
        },
        {
            key: "testInvalidArgumentTypes",
            value: function testInvalidArgumentTypes() {
                // @ts-expect-error undefined instead of no argument provided
                this.dispatchEventToListeners("VoidEvent" /* Events.VoidEvent */ , undefined);
                // @ts-expect-error string instead of undefined provided
                this.dispatchEventToListeners("VoidEvent" /* Events.VoidEvent */ , 'void');
                // @ts-expect-error string instead of number provided
                this.dispatchEventToListeners("NumberEvent" /* Events.NumberEvent */ , 'expected number');
                // @ts-expect-error argument missing
                this.dispatchEventToListeners("NumberEvent" /* Events.NumberEvent */ );
                // @ts-expect-error wrong object type provided as payload
                this.dispatchEventToListeners("KeyValueEvent" /* Events.KeyValueEvent */ , {
                    key: 'key',
                    foo: 'foo'
                });
                // @ts-expect-error unknown event type used
                this.dispatchEventToListeners('fake', {
                    key: 'key',
                    foo: 'foo'
                });
                // @ts-expect-error wrong payload not part of the union
                this.dispatchEventToListeners("UnionEvent" /* Events.UnionEvent */ , 25);
            }
        },
        {
            key: "testStringAndSymbolDisallowed",
            value: function testStringAndSymbolDisallowed() {
                // @ts-expect-error only keys of `TestEvents` are allowed.
                this.dispatchEventToListeners('foo');
                // @ts-expect-error only keys of `TestEvents` are allowed.
                this.dispatchEventToListeners(Symbol('foo'));
            }
        }
    ]);
    return TypedEventEmitter;
}(_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper);
var VoidTypedEventEmitter = /*#__PURE__*/ function(_Common_ObjectWrapper_ObjectWrapper) {
    "use strict";
    _inherits(VoidTypedEventEmitter, _Common_ObjectWrapper_ObjectWrapper);
    var _super = _create_super(VoidTypedEventEmitter);
    function VoidTypedEventEmitter() {
        _class_call_check(this, VoidTypedEventEmitter);
        return _super.apply(this, arguments);
    }
    _create_class(VoidTypedEventEmitter, [
        {
            key: "testInvalidArgumentTypes",
            value: function testInvalidArgumentTypes() {
                // @ts-expect-error undefined instead of no argument provided
                this.dispatchEventToListeners("VoidEvent" /* Events.VoidEvent */ , undefined);
                // @ts-expect-error string instead of undefined provided
                this.dispatchEventToListeners("VoidEvent" /* Events.VoidEvent */ , 'void');
                // @ts-expect-error string instead of number provided
                this.dispatchEventToListeners("NumberEvent" /* Events.NumberEvent */ , 'expected number');
                // @ts-expect-error argument missing
                this.dispatchEventToListeners("NumberEvent" /* Events.NumberEvent */ );
                // @ts-expect-error wrong object type provided as payload
                this.dispatchEventToListeners("KeyValueEvent" /* Events.KeyValueEvent */ , {
                    key: 'key',
                    foo: 'foo'
                });
                // @ts-expect-error unknown event type used
                this.dispatchEventToListeners('fake', {
                    key: 'key',
                    foo: 'foo'
                });
                // @ts-expect-error wrong payload not part of the union
                this.dispatchEventToListeners("UnionEvent" /* Events.UnionEvent */ , 25);
            }
        },
        {
            key: "testStringAndSymbolDisallowed",
            value: function testStringAndSymbolDisallowed() {
                // @ts-expect-error only keys of `TestEvents` are allowed.
                this.dispatchEventToListeners('foo');
                // @ts-expect-error only keys of `TestEvents` are allowed.
                this.dispatchEventToListeners(Symbol('foo'));
            }
        }
    ]);
    return VoidTypedEventEmitter;
}(_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper);
VoidTypedEventEmitter;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var UntypedEventEmitter = /*#__PURE__*/ function(_Common_ObjectWrapper_ObjectWrapper) {
    "use strict";
    _inherits(UntypedEventEmitter, _Common_ObjectWrapper_ObjectWrapper);
    var _super = _create_super(UntypedEventEmitter);
    function UntypedEventEmitter() {
        _class_call_check(this, UntypedEventEmitter);
        return _super.apply(this, arguments);
    }
    _create_class(UntypedEventEmitter, [
        {
            key: "testDispatch",
            value: function testDispatch() {
                this.dispatchEventToListeners('foo');
                this.dispatchEventToListeners(Symbol('number payload'), 25);
                this.dispatchEventToListeners("VoidEvent" /* Events.VoidEvent */ );
                this.dispatchEventToListeners("UnionEvent" /* Events.UnionEvent */ , 'foo');
            }
        }
    ]);
    return UntypedEventEmitter;
}(_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper);
function genericListener() {
    return function(_arg) {};
}
var typedEmitter = new TypedEventEmitter();
(function testValidListeners() {
    typedEmitter.addEventListener("VoidEvent" /* Events.VoidEvent */ , genericListener());
    typedEmitter.addEventListener("NumberEvent" /* Events.NumberEvent */ , genericListener());
    typedEmitter.addEventListener("KeyValueEvent" /* Events.KeyValueEvent */ , genericListener());
    typedEmitter.addEventListener("BooleanEvent" /* Events.BooleanEvent */ , genericListener());
    typedEmitter.addEventListener("UnionEvent" /* Events.UnionEvent */ , genericListener());
})();
(function testInvalidListenerArguments() {
    // @ts-expect-error
    typedEmitter.addEventListener("VoidEvent" /* Events.VoidEvent */ , genericListener());
    // @ts-expect-error
    typedEmitter.addEventListener("NumberEvent" /* Events.NumberEvent */ , genericListener());
    // @ts-expect-error
    typedEmitter.addEventListener("KeyValueEvent" /* Events.KeyValueEvent */ , genericListener());
    // @ts-expect-error
    typedEmitter.addEventListener("UnionEvent" /* Events.UnionEvent */ , genericListener());
})();
(function testInvalidListenerType() {
    // @ts-expect-error
    typedEmitter.addEventListener('foo', genericListener());
    // @ts-expect-error
    typedEmitter.addEventListener(Symbol('foo'), genericListener());
})();
(function testUnionTypeOnDispatch() {
    // @ts-expect-error
    typedEmitter.dispatchEventToListeners("NumberEvent" /* Events.NumberEvent */ , 5);
    var event = Math.random() < 0.5 ? "NumberEvent" /* Events.NumberEvent */  : "BooleanEvent" /* Events.BooleanEvent */ ;
    // @ts-expect-error
    typedEmitter.dispatchEventToListeners(event, true);
})();
var untypedEmitter = new UntypedEventEmitter();
(function testUntypedListeners() {
    untypedEmitter.addEventListener('foo', genericListener());
    untypedEmitter.addEventListener(Symbol('foo'), genericListener());
    untypedEmitter.addEventListener("VoidEvent" /* Events.VoidEvent */ , genericListener());
})(); //# sourceMappingURL=EventTarget.test.js.map


}),

}]);