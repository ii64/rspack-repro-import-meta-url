"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_bidi_Serializer_ts"],{

/***/ "./src/third_party/puppeteer/package/src/bidi/Serializer.ts":
/*!******************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/bidi/Serializer.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BidiSerializer: () => (/* binding */ BidiSerializer)
/* harmony export */ });
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/src/common/util.ts");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _BidiSerializer_serializeNumber, _BidiSerializer_serializeObject;

/**
 * @internal
 */
class UnserializableError extends Error {
}
/**
 * @internal
 */
class BidiSerializer {
    static serialize(arg) {
        switch (typeof arg) {
            case 'symbol':
            case 'function':
                throw new UnserializableError(`Unable to serializable ${typeof arg}`);
            case 'object':
                return __classPrivateFieldGet(this, _a, "m", _BidiSerializer_serializeObject).call(this, arg);
            case 'undefined':
                return {
                    type: 'undefined',
                };
            case 'number':
                return __classPrivateFieldGet(this, _a, "m", _BidiSerializer_serializeNumber).call(this, arg);
            case 'bigint':
                return {
                    type: 'bigint',
                    value: arg.toString(),
                };
            case 'string':
                return {
                    type: 'string',
                    value: arg,
                };
            case 'boolean':
                return {
                    type: 'boolean',
                    value: arg,
                };
        }
    }
}
_a = BidiSerializer, _BidiSerializer_serializeNumber = function _BidiSerializer_serializeNumber(arg) {
    let value;
    if (Object.is(arg, -0)) {
        value = '-0';
    }
    else if (Object.is(arg, Infinity)) {
        value = 'Infinity';
    }
    else if (Object.is(arg, -Infinity)) {
        value = '-Infinity';
    }
    else if (Object.is(arg, NaN)) {
        value = 'NaN';
    }
    else {
        value = arg;
    }
    return {
        type: 'number',
        value,
    };
}, _BidiSerializer_serializeObject = function _BidiSerializer_serializeObject(arg) {
    if (arg === null) {
        return {
            type: 'null',
        };
    }
    else if (Array.isArray(arg)) {
        const parsedArray = arg.map(subArg => {
            return this.serialize(subArg);
        });
        return {
            type: 'array',
            value: parsedArray,
        };
    }
    else if ((0,_common_util_js__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(arg)) {
        try {
            JSON.stringify(arg);
        }
        catch (error) {
            if (error instanceof TypeError &&
                error.message.startsWith('Converting circular structure to JSON')) {
                error.message += ' Recursive objects are not allowed.';
            }
            throw error;
        }
        const parsedObject = [];
        for (const key in arg) {
            parsedObject.push([this.serialize(key), this.serialize(arg[key])]);
        }
        return {
            type: 'object',
            value: parsedObject,
        };
    }
    else if ((0,_common_util_js__WEBPACK_IMPORTED_MODULE_0__.isRegExp)(arg)) {
        return {
            type: 'regexp',
            value: {
                pattern: arg.source,
                flags: arg.flags,
            },
        };
    }
    else if ((0,_common_util_js__WEBPACK_IMPORTED_MODULE_0__.isDate)(arg)) {
        return {
            type: 'date',
            value: arg.toISOString(),
        };
    }
    throw new UnserializableError('Custom object serialization not possible. Use plain objects instead.');
};


/***/ })

}]);