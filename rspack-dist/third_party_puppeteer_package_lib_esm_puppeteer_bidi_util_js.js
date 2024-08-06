"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_bidi_util_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Deserializer.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BidiDeserializer: function() { return BidiDeserializer; }
});
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
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
function _class_static_private_method_get(receiver, classConstructor, method) {
    _class_check_private_static_access(receiver, classConstructor);
    return method;
}
function _class_check_private_static_access(receiver, classConstructor) {
    if (receiver !== classConstructor) {
        throw new TypeError("Private static access of wrong provenance");
    }
}

/**
 * @internal
 */ var BidiDeserializer = /*#__PURE__*/ function() {
    "use strict";
    function BidiDeserializer() {
        _class_call_check(this, BidiDeserializer);
    }
    _create_class(BidiDeserializer, null, [
        {
            key: "deserialize",
            value: function deserialize(result) {
                var _this = this;
                if (!result) {
                    (0,_common_util_js__WEBPACK_IMPORTED_MODULE_0__.debugError)('Service did not produce a result.');
                    return undefined;
                }
                switch(result.type){
                    case 'array':
                        var _result_value;
                        return (_result_value = result.value) === null || _result_value === void 0 ? void 0 : _result_value.map(function(value) {
                            return _this.deserialize(value);
                        });
                    case 'set':
                        var _result_value1;
                        return (_result_value1 = result.value) === null || _result_value1 === void 0 ? void 0 : _result_value1.reduce(function(acc, value) {
                            return acc.add(_this.deserialize(value));
                        }, new Set());
                    case 'object':
                        var _result_value2;
                        return (_result_value2 = result.value) === null || _result_value2 === void 0 ? void 0 : _result_value2.reduce(function(acc, tuple) {
                            var _class_static_private_method_get_call = _class_static_private_method_get(_this, BidiDeserializer, deserializeTuple).call(BidiDeserializer, tuple), key = _class_static_private_method_get_call.key, value = _class_static_private_method_get_call.value;
                            acc[key] = value;
                            return acc;
                        }, {});
                    case 'map':
                        var _result_value3;
                        return (_result_value3 = result.value) === null || _result_value3 === void 0 ? void 0 : _result_value3.reduce(function(acc, tuple) {
                            var _class_static_private_method_get_call = _class_static_private_method_get(_this, BidiDeserializer, deserializeTuple).call(BidiDeserializer, tuple), key = _class_static_private_method_get_call.key, value = _class_static_private_method_get_call.value;
                            return acc.set(key, value);
                        }, new Map());
                    case 'promise':
                        return {};
                    case 'regexp':
                        return new RegExp(result.value.pattern, result.value.flags);
                    case 'date':
                        return new Date(result.value);
                    case 'undefined':
                        return undefined;
                    case 'null':
                        return null;
                    case 'number':
                        return _class_static_private_method_get(this, BidiDeserializer, deserializeNumber).call(BidiDeserializer, result.value);
                    case 'bigint':
                        return BigInt(result.value);
                    case 'boolean':
                        return Boolean(result.value);
                    case 'string':
                        return result.value;
                }
                (0,_common_util_js__WEBPACK_IMPORTED_MODULE_0__.debugError)("Deserialization of type ".concat(result.type, " not supported."));
                return undefined;
            }
        }
    ]);
    return BidiDeserializer;
} //# sourceMappingURL=Deserializer.js.map
();
function deserializeNumber(value) {
    switch(value){
        case '-0':
            return -0;
        case 'NaN':
            return NaN;
        case 'Infinity':
            return Infinity;
        case '-Infinity':
            return -Infinity;
        default:
            return value;
    }
}
function deserializeTuple(param) {
    var _param = _sliced_to_array(param, 2), serializedKey = _param[0], serializedValue = _param[1];
    var key = typeof serializedKey === 'string' ? serializedKey : this.deserialize(serializedKey);
    var value = this.deserialize(serializedValue);
    return {
        key: key,
        value: value
    };
}


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/bidi/util.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createEvaluationError: function() { return createEvaluationError; },
  rewriteNavigationError: function() { return rewriteNavigationError; }
});
/* harmony import */var _common_Errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */var _Deserializer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Deserializer.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Deserializer.js");
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
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_array(arr) {
    return _array_with_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}



/**
 * @internal
 */ function createEvaluationError(details) {
    if (details.exception.type !== 'error') {
        return _Deserializer_js__WEBPACK_IMPORTED_MODULE_2__.BidiDeserializer.deserialize(details.exception);
    }
    var _details_text_split = _to_array(details.text.split(': ')), tmp = _details_text_split[0], name = tmp === void 0 ? '' : tmp, parts = _details_text_split.slice(1);
    var message = parts.join(': ');
    var error = new Error(message);
    error.name = name;
    // The first line is this function which we ignore.
    var stackLines = [];
    if (details.stackTrace && stackLines.length < Error.stackTraceLimit) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = details.stackTrace.callFrames.reverse()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var frame = _step.value;
                if (_common_util_js__WEBPACK_IMPORTED_MODULE_1__.PuppeteerURL.isPuppeteerURL(frame.url) && frame.url !== _common_util_js__WEBPACK_IMPORTED_MODULE_1__.PuppeteerURL.INTERNAL_URL) {
                    var url = _common_util_js__WEBPACK_IMPORTED_MODULE_1__.PuppeteerURL.parse(frame.url);
                    stackLines.unshift("    at ".concat(frame.functionName || url.functionName, " (").concat(url.functionName, " at ").concat(url.siteString, ", <anonymous>:").concat(frame.lineNumber, ":").concat(frame.columnNumber, ")"));
                } else {
                    stackLines.push("    at ".concat(frame.functionName || '<anonymous>', " (").concat(frame.url, ":").concat(frame.lineNumber, ":").concat(frame.columnNumber, ")"));
                }
                if (stackLines.length >= Error.stackTraceLimit) {
                    break;
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
    error.stack = [
        details.text
    ].concat(_to_consumable_array(stackLines)).join('\n');
    return error;
}
/**
 * @internal
 */ function rewriteNavigationError(message, ms) {
    return function(error) {
        if (_instanceof(error, _common_Errors_js__WEBPACK_IMPORTED_MODULE_0__.ProtocolError)) {
            error.message += " at ".concat(message);
        } else if (_instanceof(error, _common_Errors_js__WEBPACK_IMPORTED_MODULE_0__.TimeoutError)) {
            error.message = "Navigation timeout of ".concat(ms, " ms exceeded");
        }
        throw error;
    };
} //# sourceMappingURL=util.js.map


}),

}]);