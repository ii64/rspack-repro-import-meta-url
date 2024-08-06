"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_common_GetQueryHandler_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/common/CSSQueryHandler.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CSSQueryHandler: function() { return CSSQueryHandler; }
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
 */ var CSSQueryHandler = /*#__PURE__*/ function(QueryHandler) {
    "use strict";
    _inherits(CSSQueryHandler, QueryHandler);
    var _super = _create_super(CSSQueryHandler);
    function CSSQueryHandler() {
        _class_call_check(this, CSSQueryHandler);
        return _super.apply(this, arguments);
    }
    return CSSQueryHandler;
} //# sourceMappingURL=CSSQueryHandler.js.map
(_QueryHandler_js__WEBPACK_IMPORTED_MODULE_0__.QueryHandler);
_define_property(CSSQueryHandler, "querySelector", function(element, selector, param) {
    var cssQuerySelector = param.cssQuerySelector;
    return cssQuerySelector(element, selector);
});
_define_property(CSSQueryHandler, "querySelectorAll", function(element, selector, param) {
    var cssQuerySelectorAll = param.cssQuerySelectorAll;
    return cssQuerySelectorAll(element, selector);
});


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/common/GetQueryHandler.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getQueryHandlerAndSelector: function() { return getQueryHandlerAndSelector; }
});
/* harmony import */var _cdp_AriaQueryHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cdp/AriaQueryHandler.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/AriaQueryHandler.js");
/* harmony import */var _CSSQueryHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSQueryHandler.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/CSSQueryHandler.js");
/* harmony import */var _CustomQueryHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomQueryHandler.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/CustomQueryHandler.js");
/* harmony import */var _PierceQueryHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PierceQueryHandler.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/PierceQueryHandler.js");
/* harmony import */var _PQueryHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PQueryHandler.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/PQueryHandler.js");
/* harmony import */var _PSelectorParser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PSelectorParser.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/PSelectorParser.js");
/* harmony import */var _TextQueryHandler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TextQueryHandler.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/TextQueryHandler.js");
/* harmony import */var _XPathQueryHandler_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./XPathQueryHandler.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/XPathQueryHandler.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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








var BUILTIN_QUERY_HANDLERS = {
    aria: _cdp_AriaQueryHandler_js__WEBPACK_IMPORTED_MODULE_0__.ARIAQueryHandler,
    pierce: _PierceQueryHandler_js__WEBPACK_IMPORTED_MODULE_3__.PierceQueryHandler,
    xpath: _XPathQueryHandler_js__WEBPACK_IMPORTED_MODULE_7__.XPathQueryHandler,
    text: _TextQueryHandler_js__WEBPACK_IMPORTED_MODULE_6__.TextQueryHandler
};
var QUERY_SEPARATORS = [
    '=',
    '/'
];
/**
 * @internal
 */ function getQueryHandlerAndSelector(selector) {
    for(var _i = 0, _iter = [
        _CustomQueryHandler_js__WEBPACK_IMPORTED_MODULE_2__.customQueryHandlers.names().map(function(name) {
            return [
                name,
                _CustomQueryHandler_js__WEBPACK_IMPORTED_MODULE_2__.customQueryHandlers.get(name)
            ];
        }),
        Object.entries(BUILTIN_QUERY_HANDLERS)
    ]; _i < _iter.length; _i++){
        var handlerMap = _iter[_i];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = handlerMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), name = _step_value[0], QueryHandler = _step_value[1];
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = QUERY_SEPARATORS[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var separator = _step1.value;
                        var prefix = "".concat(name).concat(separator);
                        if (selector.startsWith(prefix)) {
                            selector = selector.slice(prefix.length);
                            return {
                                updatedSelector: selector,
                                polling: name === 'aria' ? "raf" /* PollingOptions.RAF */  : "mutation" /* PollingOptions.MUTATION */ ,
                                QueryHandler: QueryHandler
                            };
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
    }
    try {
        var _parsePSelectors = _sliced_to_array((0,_PSelectorParser_js__WEBPACK_IMPORTED_MODULE_5__.parsePSelectors)(selector), 4), pSelector = _parsePSelectors[0], isPureCSS = _parsePSelectors[1], hasPseudoClasses = _parsePSelectors[2], hasAria = _parsePSelectors[3];
        if (isPureCSS) {
            return {
                updatedSelector: selector,
                polling: hasPseudoClasses ? "raf" /* PollingOptions.RAF */  : "mutation" /* PollingOptions.MUTATION */ ,
                QueryHandler: _CSSQueryHandler_js__WEBPACK_IMPORTED_MODULE_1__.CSSQueryHandler
            };
        }
        return {
            updatedSelector: JSON.stringify(pSelector),
            polling: hasAria ? "raf" /* PollingOptions.RAF */  : "mutation" /* PollingOptions.MUTATION */ ,
            QueryHandler: _PQueryHandler_js__WEBPACK_IMPORTED_MODULE_4__.PQueryHandler
        };
    } catch (e) {
        return {
            updatedSelector: selector,
            polling: "mutation" /* PollingOptions.MUTATION */ ,
            QueryHandler: _CSSQueryHandler_js__WEBPACK_IMPORTED_MODULE_1__.CSSQueryHandler
        };
    }
} //# sourceMappingURL=GetQueryHandler.js.map


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/common/PQueryHandler.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PQueryHandler: function() { return PQueryHandler; }
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
 */ var PQueryHandler = /*#__PURE__*/ function(QueryHandler) {
    "use strict";
    _inherits(PQueryHandler, QueryHandler);
    var _super = _create_super(PQueryHandler);
    function PQueryHandler() {
        _class_call_check(this, PQueryHandler);
        return _super.apply(this, arguments);
    }
    return PQueryHandler;
} //# sourceMappingURL=PQueryHandler.js.map
(_QueryHandler_js__WEBPACK_IMPORTED_MODULE_0__.QueryHandler);
_define_property(PQueryHandler, "querySelectorAll", function(element, selector, param) {
    var pQuerySelectorAll = param.pQuerySelectorAll;
    return pQuerySelectorAll(element, selector);
});
_define_property(PQueryHandler, "querySelector", function(element, selector, param) {
    var pQuerySelector = param.pQuerySelector;
    return pQuerySelector(element, selector);
});


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/common/PSelectorParser.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  parsePSelectors: function() { return parsePSelectors; }
});
/* harmony import */var _third_party_parsel_js_parsel_js_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../third_party/parsel-js/parsel-js.js */ "./third_party/puppeteer/package/lib/esm/third_party/parsel-js/parsel-js.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ 
_third_party_parsel_js_parsel_js_js__WEBPACK_IMPORTED_MODULE_0__.TOKENS.nesting = /&/g;
_third_party_parsel_js_parsel_js_js__WEBPACK_IMPORTED_MODULE_0__.TOKENS.combinator = /\s*(>>>>?|[\s>+~])\s*/g;
var ESCAPE_REGEXP = /\\[\s\S]/g;
var unquote = function(text) {
    if (text.length <= 1) {
        return text;
    }
    if ((text[0] === '"' || text[0] === "'") && text.endsWith(text[0])) {
        text = text.slice(1, -1);
    }
    return text.replace(ESCAPE_REGEXP, function(match) {
        return match[1];
    });
};
/**
 * @internal
 */ function parsePSelectors(selector) {
    var isPureCSS = true;
    var hasAria = false;
    var hasPseudoClasses = false;
    var tokens = (0,_third_party_parsel_js_parsel_js_js__WEBPACK_IMPORTED_MODULE_0__.tokenize)(selector);
    if (tokens.length === 0) {
        return [
            [],
            isPureCSS,
            hasPseudoClasses,
            false
        ];
    }
    var compoundSelector = [];
    var complexSelector = [
        compoundSelector
    ];
    var selectors = [
        complexSelector
    ];
    var storage = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = tokens[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var token = _step.value;
            switch(token.type){
                case 'combinator':
                    switch(token.content){
                        case ">>>" /* PCombinator.Descendent */ :
                            isPureCSS = false;
                            if (storage.length) {
                                compoundSelector.push((0,_third_party_parsel_js_parsel_js_js__WEBPACK_IMPORTED_MODULE_0__.stringify)(storage));
                                storage.splice(0);
                            }
                            compoundSelector = [];
                            complexSelector.push(">>>" /* PCombinator.Descendent */ );
                            complexSelector.push(compoundSelector);
                            continue;
                        case ">>>>" /* PCombinator.Child */ :
                            isPureCSS = false;
                            if (storage.length) {
                                compoundSelector.push((0,_third_party_parsel_js_parsel_js_js__WEBPACK_IMPORTED_MODULE_0__.stringify)(storage));
                                storage.splice(0);
                            }
                            compoundSelector = [];
                            complexSelector.push(">>>>" /* PCombinator.Child */ );
                            complexSelector.push(compoundSelector);
                            continue;
                    }
                    break;
                case 'pseudo-element':
                    if (!token.name.startsWith('-p-')) {
                        break;
                    }
                    isPureCSS = false;
                    if (storage.length) {
                        compoundSelector.push((0,_third_party_parsel_js_parsel_js_js__WEBPACK_IMPORTED_MODULE_0__.stringify)(storage));
                        storage.splice(0);
                    }
                    var name = token.name.slice(3);
                    if (name === 'aria') {
                        hasAria = true;
                    }
                    var _token_argument;
                    compoundSelector.push({
                        name: name,
                        value: unquote((_token_argument = token.argument) !== null && _token_argument !== void 0 ? _token_argument : '')
                    });
                    continue;
                case 'pseudo-class':
                    hasPseudoClasses = true;
                    break;
                case 'comma':
                    if (storage.length) {
                        compoundSelector.push((0,_third_party_parsel_js_parsel_js_js__WEBPACK_IMPORTED_MODULE_0__.stringify)(storage));
                        storage.splice(0);
                    }
                    compoundSelector = [];
                    complexSelector = [
                        compoundSelector
                    ];
                    selectors.push(complexSelector);
                    continue;
            }
            storage.push(token);
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
    if (storage.length) {
        compoundSelector.push((0,_third_party_parsel_js_parsel_js_js__WEBPACK_IMPORTED_MODULE_0__.stringify)(storage));
    }
    return [
        selectors,
        isPureCSS,
        hasPseudoClasses,
        hasAria
    ];
} //# sourceMappingURL=PSelectorParser.js.map


}),
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
"./third_party/puppeteer/package/lib/esm/puppeteer/common/TextQueryHandler.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TextQueryHandler: function() { return TextQueryHandler; }
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
 */ var TextQueryHandler = /*#__PURE__*/ function(QueryHandler) {
    "use strict";
    _inherits(TextQueryHandler, QueryHandler);
    var _super = _create_super(TextQueryHandler);
    function TextQueryHandler() {
        _class_call_check(this, TextQueryHandler);
        return _super.apply(this, arguments);
    }
    return TextQueryHandler;
} //# sourceMappingURL=TextQueryHandler.js.map
(_QueryHandler_js__WEBPACK_IMPORTED_MODULE_0__.QueryHandler);
_define_property(TextQueryHandler, "querySelectorAll", function(element, selector, param) {
    var textQuerySelectorAll = param.textQuerySelectorAll;
    return textQuerySelectorAll(element, selector);
});


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/common/XPathQueryHandler.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  XPathQueryHandler: function() { return XPathQueryHandler; }
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
 */ var XPathQueryHandler = /*#__PURE__*/ function(QueryHandler) {
    "use strict";
    _inherits(XPathQueryHandler, QueryHandler);
    var _super = _create_super(XPathQueryHandler);
    function XPathQueryHandler() {
        _class_call_check(this, XPathQueryHandler);
        return _super.apply(this, arguments);
    }
    return XPathQueryHandler;
} //# sourceMappingURL=XPathQueryHandler.js.map
(_QueryHandler_js__WEBPACK_IMPORTED_MODULE_0__.QueryHandler);
_define_property(XPathQueryHandler, "querySelectorAll", function(element, selector, param) {
    var xpathQuerySelectorAll = param.xpathQuerySelectorAll;
    return xpathQuerySelectorAll(element, selector);
});
_define_property(XPathQueryHandler, "querySelector", function(element, selector, param) {
    var xpathQuerySelectorAll = param.xpathQuerySelectorAll;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = xpathQuerySelectorAll(element, selector, 1)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var result = _step.value;
            return result;
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
    return null;
});


}),

}]);