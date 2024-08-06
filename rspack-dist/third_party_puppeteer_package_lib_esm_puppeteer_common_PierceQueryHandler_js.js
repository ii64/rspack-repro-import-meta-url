"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_common_PierceQueryHandler_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/common/PierceQueryHandler.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PierceQueryHandler: function() { return PierceQueryHandler; }
});
/* harmony import */var _QueryHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueryHandler.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/QueryHandler.js");
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

/**
 * @internal
 */ var PierceQueryHandler = /*#__PURE__*/ function(QueryHandler) {
    "use strict";
    _inherits(PierceQueryHandler, QueryHandler);
    var _super = _create_super(PierceQueryHandler);
    function PierceQueryHandler() {
        _class_call_check(this, PierceQueryHandler);
        return _super.apply(this, arguments);
    }
    return PierceQueryHandler;
} //# sourceMappingURL=PierceQueryHandler.js.map
(_QueryHandler_js__WEBPACK_IMPORTED_MODULE_0__.QueryHandler);
_define_property(PierceQueryHandler, "querySelector", function(element, selector, param) {
    var pierceQuerySelector = param.pierceQuerySelector;
    return pierceQuerySelector(element, selector);
});
_define_property(PierceQueryHandler, "querySelectorAll", function(element, selector, param) {
    var pierceQuerySelectorAll = param.pierceQuerySelectorAll;
    return pierceQuerySelectorAll(element, selector);
});


}),

}]);