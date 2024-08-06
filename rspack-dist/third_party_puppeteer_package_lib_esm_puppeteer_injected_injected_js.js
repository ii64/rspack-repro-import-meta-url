"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_injected_injected_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/injected/CSSSelector.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  cssQuerySelector: function() { return cssQuerySelector; },
  cssQuerySelectorAll: function() { return cssQuerySelectorAll; }
});
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ var cssQuerySelector = function(root, selector) {
    // @ts-expect-error assume element root
    return root.querySelector(selector);
};
var cssQuerySelectorAll = function cssQuerySelectorAll(root, selector) {
    // @ts-expect-error assume element root
    return root.querySelectorAll(selector);
}; //# sourceMappingURL=CSSSelector.js.map


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/injected/PierceQuerySelector.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  pierceQuerySelector: function() { return pierceQuerySelector; },
  pierceQuerySelectorAll: function() { return pierceQuerySelectorAll; }
});
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * @internal
 */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
var pierceQuerySelector = function(root, selector) {
    var found = null;
    var search = function(root) {
        var iter = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
        do {
            var currentNode = iter.currentNode;
            if (currentNode.shadowRoot) {
                search(currentNode.shadowRoot);
            }
            if (_instanceof(currentNode, ShadowRoot)) {
                continue;
            }
            if (currentNode !== root && !found && currentNode.matches(selector)) {
                found = currentNode;
            }
        }while (!found && iter.nextNode());
    };
    if (_instanceof(root, Document)) {
        root = root.documentElement;
    }
    search(root);
    return found;
};
/**
 * @internal
 */ var pierceQuerySelectorAll = function(element, selector) {
    var result = [];
    var collect = function(root) {
        var iter = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
        do {
            var currentNode = iter.currentNode;
            if (currentNode.shadowRoot) {
                collect(currentNode.shadowRoot);
            }
            if (_instanceof(currentNode, ShadowRoot)) {
                continue;
            }
            if (currentNode !== root && currentNode.matches(selector)) {
                result.push(currentNode);
            }
        }while (iter.nextNode());
    };
    if (_instanceof(element, Document)) {
        element = element.documentElement;
    }
    collect(element);
    return result;
}; //# sourceMappingURL=PierceQuerySelector.js.map


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/injected/injected.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* harmony import */var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Deferred.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/* harmony import */var _util_Function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Function.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Function.js");
/* harmony import */var _ARIAQuerySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ARIAQuerySelector.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/ARIAQuerySelector.js");
/* harmony import */var _CSSSelector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CSSSelector.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/CSSSelector.js");
/* harmony import */var _CustomQuerySelector_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CustomQuerySelector.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/CustomQuerySelector.js");
/* harmony import */var _PierceQuerySelector_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PierceQuerySelector.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/PierceQuerySelector.js");
/* harmony import */var _Poller_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Poller.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/Poller.js");
/* harmony import */var _PQuerySelector_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PQuerySelector.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/PQuerySelector.js");
/* harmony import */var _TextContent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TextContent.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/TextContent.js");
/* harmony import */var _TextQuerySelector_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TextQuerySelector.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/TextQuerySelector.js");
/* harmony import */var _util_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/util.js");
/* harmony import */var _XPathQuerySelector_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./XPathQuerySelector.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/XPathQuerySelector.js");
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ function _define_property(obj, key, value) {
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
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}












/**
 * @internal
 */ var PuppeteerUtil = Object.freeze(_object_spread_props(_object_spread({}, _ARIAQuerySelector_js__WEBPACK_IMPORTED_MODULE_2__, _CustomQuerySelector_js__WEBPACK_IMPORTED_MODULE_4__, _PierceQuerySelector_js__WEBPACK_IMPORTED_MODULE_5__, _PQuerySelector_js__WEBPACK_IMPORTED_MODULE_7__, _TextQuerySelector_js__WEBPACK_IMPORTED_MODULE_9__, _util_js__WEBPACK_IMPORTED_MODULE_10__, _XPathQuerySelector_js__WEBPACK_IMPORTED_MODULE_11__, _CSSSelector_js__WEBPACK_IMPORTED_MODULE_3__), {
    Deferred: _util_Deferred_js__WEBPACK_IMPORTED_MODULE_0__.Deferred,
    createFunction: _util_Function_js__WEBPACK_IMPORTED_MODULE_1__.createFunction,
    createTextContent: _TextContent_js__WEBPACK_IMPORTED_MODULE_8__.createTextContent,
    IntervalPoller: _Poller_js__WEBPACK_IMPORTED_MODULE_6__.IntervalPoller,
    isSuitableNodeForTextMatching: _TextContent_js__WEBPACK_IMPORTED_MODULE_8__.isSuitableNodeForTextMatching,
    MutationPoller: _Poller_js__WEBPACK_IMPORTED_MODULE_6__.MutationPoller,
    RAFPoller: _Poller_js__WEBPACK_IMPORTED_MODULE_6__.RAFPoller
}));
/**
 * @internal
 */ /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PuppeteerUtil); //# sourceMappingURL=injected.js.map


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/util/Function.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createFunction: function() { return createFunction; },
  interpolateFunction: function() { return interpolateFunction; },
  stringifyFunction: function() { return stringifyFunction; }
});
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
var createdFunctions = new Map();
/**
 * Creates a function from a string.
 *
 * @internal
 */ var createFunction = function(functionValue) {
    var fn = createdFunctions.get(functionValue);
    if (fn) {
        return fn;
    }
    fn = new Function("return ".concat(functionValue))();
    createdFunctions.set(functionValue, fn);
    return fn;
};
/**
 * @internal
 */ function stringifyFunction(fn) {
    var value = fn.toString();
    try {
        new Function("(".concat(value, ")"));
    } catch (err) {
        if (err.message.includes("Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive")) {
            // The content security policy does not allow Function eval. Let's
            // assume the value might be valid as is.
            return value;
        }
        // This means we might have a function shorthand (e.g. `test(){}`). Let's
        // try prefixing.
        var prefix = 'function ';
        if (value.startsWith('async ')) {
            prefix = "async ".concat(prefix);
            value = value.substring('async '.length);
        }
        value = "".concat(prefix).concat(value);
        try {
            new Function("(".concat(value, ")"));
        } catch (e) {
            // We tried hard to serialize, but there's a weird beast here.
            throw new Error('Passed function cannot be serialized!');
        }
    }
    return value;
}
/**
 * Replaces `PLACEHOLDER`s with the given replacements.
 *
 * All replacements must be valid JS code.
 *
 * @example
 *
 * ```ts
 * interpolateFunction(() => PLACEHOLDER('test'), {test: 'void 0'});
 * // Equivalent to () => void 0
 * ```
 *
 * @internal
 */ var interpolateFunction = function(fn, replacements) {
    var value = stringifyFunction(fn);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.entries(replacements)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), name = _step_value[0], jsValue = _step_value[1];
            value = value.replace(new RegExp("PLACEHOLDER\\(\\s*(?:'".concat(name, "'|\"").concat(name, '")\\s*\\)'), 'g'), // Wrapping this ensures tersers that accidentally inline PLACEHOLDER calls
            // are still valid. Without, we may get calls like ()=>{...}() which is
            // not valid.
            "(".concat(jsValue, ")"));
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
    return createFunction(value);
}; //# sourceMappingURL=Function.js.map


}),

}]);