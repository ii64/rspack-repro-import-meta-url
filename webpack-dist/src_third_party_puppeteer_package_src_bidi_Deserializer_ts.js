"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_bidi_Deserializer_ts"],{

/***/ "./src/third_party/puppeteer/package/src/bidi/Deserializer.ts":
/*!********************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/bidi/Deserializer.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BidiDeserializer: () => (/* binding */ BidiDeserializer)
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
var _a, _BidiDeserializer_deserializeNumber, _BidiDeserializer_deserializeTuple;

/**
 * @internal
 */
class BidiDeserializer {
    static deserialize(result) {
        if (!result) {
            (0,_common_util_js__WEBPACK_IMPORTED_MODULE_0__.debugError)('Service did not produce a result.');
            return undefined;
        }
        switch (result.type) {
            case 'array':
                return result.value?.map(value => {
                    return this.deserialize(value);
                });
            case 'set':
                return result.value?.reduce((acc, value) => {
                    return acc.add(this.deserialize(value));
                }, new Set());
            case 'object':
                return result.value?.reduce((acc, tuple) => {
                    const { key, value } = __classPrivateFieldGet(this, _a, "m", _BidiDeserializer_deserializeTuple).call(this, tuple);
                    acc[key] = value;
                    return acc;
                }, {});
            case 'map':
                return result.value?.reduce((acc, tuple) => {
                    const { key, value } = __classPrivateFieldGet(this, _a, "m", _BidiDeserializer_deserializeTuple).call(this, tuple);
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
                return __classPrivateFieldGet(this, _a, "m", _BidiDeserializer_deserializeNumber).call(this, result.value);
            case 'bigint':
                return BigInt(result.value);
            case 'boolean':
                return Boolean(result.value);
            case 'string':
                return result.value;
        }
        (0,_common_util_js__WEBPACK_IMPORTED_MODULE_0__.debugError)(`Deserialization of type ${result.type} not supported.`);
        return undefined;
    }
}
_a = BidiDeserializer, _BidiDeserializer_deserializeNumber = function _BidiDeserializer_deserializeNumber(value) {
    switch (value) {
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
}, _BidiDeserializer_deserializeTuple = function _BidiDeserializer_deserializeTuple([serializedKey, serializedValue]) {
    const key = typeof serializedKey === 'string'
        ? serializedKey
        : this.deserialize(serializedKey);
    const value = this.deserialize(serializedValue);
    return { key, value };
};


/***/ })

}]);