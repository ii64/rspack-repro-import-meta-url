"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_bidi_WebWorker_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/bidi/WebWorker.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BidiWebWorker: function() { return BidiWebWorker; }
});
/* harmony import */var _api_WebWorker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/WebWorker.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/WebWorker.js");
/* harmony import */var _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */var _Realm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Realm.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Realm.js");
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
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



var _frame = /*#__PURE__*/ new WeakMap(), _realm = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var BidiWebWorker = /*#__PURE__*/ function(WebWorker) {
    "use strict";
    _inherits(BidiWebWorker, WebWorker);
    var _super = _create_super(BidiWebWorker);
    function BidiWebWorker(frame, realm) {
        _class_call_check(this, BidiWebWorker);
        var _this;
        _this = _super.call(this, realm.origin);
        _class_private_field_init(_assert_this_initialized(_this), _frame, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _realm, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _frame, frame);
        _class_private_field_set(_assert_this_initialized(_this), _realm, _Realm_js__WEBPACK_IMPORTED_MODULE_2__.BidiWorkerRealm.from(realm, _assert_this_initialized(_this)));
        return _this;
    }
    _create_class(BidiWebWorker, [
        {
            key: "frame",
            get: function get() {
                return _class_private_field_get(this, _frame);
            }
        },
        {
            key: "mainRealm",
            value: function mainRealm() {
                return _class_private_field_get(this, _realm);
            }
        },
        {
            key: "client",
            get: function get() {
                throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
            }
        }
    ], [
        {
            key: "from",
            value: function from(frame, realm) {
                var worker = new BidiWebWorker(frame, realm);
                return worker;
            }
        }
    ]);
    return BidiWebWorker;
} //# sourceMappingURL=WebWorker.js.map
(_api_WebWorker_js__WEBPACK_IMPORTED_MODULE_0__.WebWorker);


}),

}]);