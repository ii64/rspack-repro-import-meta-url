"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_utils_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/utils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CDP_BINDING_PREFIX: function() { return CDP_BINDING_PREFIX; },
  addPageBinding: function() { return addPageBinding; },
  createClientError: function() { return createClientError; },
  createEvaluationError: function() { return createEvaluationError; },
  pageBindingInitString: function() { return pageBindingInitString; },
  valueFromRemoteObject: function() { return valueFromRemoteObject; }
});
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */var _util_assert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
    var name;
    var message;
    if (!details.exception) {
        name = 'Error';
        message = details.text;
    } else if ((details.exception.type !== 'object' || details.exception.subtype !== 'error') && !details.exception.objectId) {
        return valueFromRemoteObject(details.exception);
    } else {
        var detail = getErrorDetails(details);
        name = detail.name;
        message = detail.message;
    }
    var messageHeight = message.split('\n').length;
    var error = new Error(message);
    error.name = name;
    var stackLines = error.stack.split('\n');
    var messageLines = stackLines.splice(0, messageHeight);
    // The first line is this function which we ignore.
    stackLines.shift();
    if (details.stackTrace && stackLines.length < Error.stackTraceLimit) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = details.stackTrace.callFrames.reverse()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var frame = _step.value;
                if (_common_util_js__WEBPACK_IMPORTED_MODULE_0__.PuppeteerURL.isPuppeteerURL(frame.url) && frame.url !== _common_util_js__WEBPACK_IMPORTED_MODULE_0__.PuppeteerURL.INTERNAL_URL) {
                    var url = _common_util_js__WEBPACK_IMPORTED_MODULE_0__.PuppeteerURL.parse(frame.url);
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
    error.stack = _to_consumable_array(messageLines).concat(_to_consumable_array(stackLines)).join('\n');
    return error;
}
var getErrorDetails = function(details) {
    var _details_exception_description, _details_exception, _details_stackTrace, _details_exception1;
    var name = '';
    var message;
    var _details_exception_description_split;
    var lines = (_details_exception_description_split = (_details_exception = details.exception) === null || _details_exception === void 0 ? void 0 : (_details_exception_description = _details_exception.description) === null || _details_exception_description === void 0 ? void 0 : _details_exception_description.split('\n    at ')) !== null && _details_exception_description_split !== void 0 ? _details_exception_description_split : [];
    var _details_stackTrace_callFrames_length;
    var size = Math.min((_details_stackTrace_callFrames_length = (_details_stackTrace = details.stackTrace) === null || _details_stackTrace === void 0 ? void 0 : _details_stackTrace.callFrames.length) !== null && _details_stackTrace_callFrames_length !== void 0 ? _details_stackTrace_callFrames_length : 0, lines.length - 1);
    lines.splice(-size, size);
    if ((_details_exception1 = details.exception) === null || _details_exception1 === void 0 ? void 0 : _details_exception1.className) {
        name = details.exception.className;
    }
    message = lines.join('\n');
    if (name && message.startsWith("".concat(name, ": "))) {
        message = message.slice(name.length + 2);
    }
    return {
        message: message,
        name: name
    };
};
/**
 * @internal
 */ function createClientError(details) {
    var name;
    var message;
    if (!details.exception) {
        name = 'Error';
        message = details.text;
    } else if ((details.exception.type !== 'object' || details.exception.subtype !== 'error') && !details.exception.objectId) {
        return valueFromRemoteObject(details.exception);
    } else {
        var detail = getErrorDetails(details);
        name = detail.name;
        message = detail.message;
    }
    var error = new Error(message);
    error.name = name;
    var messageHeight = error.message.split('\n').length;
    var messageLines = error.stack.split('\n').splice(0, messageHeight);
    var stackLines = [];
    if (details.stackTrace) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = details.stackTrace.callFrames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var frame = _step.value;
                // Note we need to add `1` because the values are 0-indexed.
                stackLines.push("    at ".concat(frame.functionName || '<anonymous>', " (").concat(frame.url, ":").concat(frame.lineNumber + 1, ":").concat(frame.columnNumber + 1, ")"));
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
    error.stack = _to_consumable_array(messageLines).concat(_to_consumable_array(stackLines)).join('\n');
    return error;
}
/**
 * @internal
 */ function valueFromRemoteObject(remoteObject) {
    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(!remoteObject.objectId, 'Cannot extract value when objectId is given');
    if (remoteObject.unserializableValue) {
        if (remoteObject.type === 'bigint') {
            return BigInt(remoteObject.unserializableValue.replace('n', ''));
        }
        switch(remoteObject.unserializableValue){
            case '-0':
                return -0;
            case 'NaN':
                return NaN;
            case 'Infinity':
                return Infinity;
            case '-Infinity':
                return -Infinity;
            default:
                throw new Error('Unsupported unserializable value: ' + remoteObject.unserializableValue);
        }
    }
    return remoteObject.value;
}
/**
 * @internal
 */ function addPageBinding(type, name, prefix) {
    // Depending on the frame loading state either Runtime.evaluate or
    // Page.addScriptToEvaluateOnNewDocument might succeed. Let's check that we
    // don't re-wrap Puppeteer's binding.
    // @ts-expect-error: In a different context.
    if (globalThis[name]) {
        return;
    }
    // We replace the CDP binding with a Puppeteer binding.
    Object.assign(globalThis, _define_property({}, name, function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        var _callPuppeteer, _callPuppeteer1;
        // This is the Puppeteer binding.
        // @ts-expect-error: In a different context.
        var callPuppeteer = globalThis[name];
        var _args;
        (_args = (_callPuppeteer = callPuppeteer).args) !== null && _args !== void 0 ? _args : _callPuppeteer.args = new Map();
        var _callbacks;
        (_callbacks = (_callPuppeteer1 = callPuppeteer).callbacks) !== null && _callbacks !== void 0 ? _callbacks : _callPuppeteer1.callbacks = new Map();
        var _callPuppeteer_lastSeq;
        var seq = ((_callPuppeteer_lastSeq = callPuppeteer.lastSeq) !== null && _callPuppeteer_lastSeq !== void 0 ? _callPuppeteer_lastSeq : 0) + 1;
        callPuppeteer.lastSeq = seq;
        callPuppeteer.args.set(seq, args);
        // @ts-expect-error: In a different context.
        // Needs to be the same as CDP_BINDING_PREFIX.
        globalThis[prefix + name](JSON.stringify({
            type: type,
            name: name,
            seq: seq,
            args: args,
            isTrivial: !args.some(function(value) {
                return _instanceof(value, Node);
            })
        }));
        return new Promise(function(resolve, reject) {
            callPuppeteer.callbacks.set(seq, {
                resolve: function resolve1(value) {
                    callPuppeteer.args.delete(seq);
                    resolve(value);
                },
                reject: function reject1(value) {
                    callPuppeteer.args.delete(seq);
                    reject(value);
                }
            });
        });
    }));
}
/**
 * @internal
 */ var CDP_BINDING_PREFIX = 'puppeteer_';
/**
 * @internal
 */ function pageBindingInitString(type, name) {
    return (0,_common_util_js__WEBPACK_IMPORTED_MODULE_0__.evaluationString)(addPageBinding, type, name, CDP_BINDING_PREFIX);
} //# sourceMappingURL=utils.js.map


}),

}]);