"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_settings_emulation_utils_UserAgentMetadata_test_js"],{

/***/ "./panels/settings/emulation/utils/UserAgentMetadata.js":
/*!**************************************************************!*\
  !*** ./panels/settings/emulation/utils/UserAgentMetadata.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseBrandsList: () => (/* binding */ parseBrandsList),
/* harmony export */   serializeBrandsList: () => (/* binding */ serializeBrandsList),
/* harmony export */   validateAsStructuredHeadersString: () => (/* binding */ validateAsStructuredHeadersString)
/* harmony export */ });
/* harmony import */ var _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StructuredHeaders.js */ "./panels/settings/emulation/utils/StructuredHeaders.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Helper functions for working with UserAgentMetadata protocol objects, in
// particular their plain string representation.

/* Returned string is for error, either parseErrorString or structErrorString.
 */
function parseBrandsList(stringForm, parseErrorString, structErrorString) {
    const brandList = [];
    const parseResult = (0,_StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.parseList)(stringForm);
    if (parseResult.kind === 0 /* ResultKind.ERROR */) {
        return parseErrorString;
    }
    for (const listItem of parseResult.items) {
        if (listItem.kind !== 4 /* ResultKind.ITEM */) {
            return structErrorString;
        }
        const bareItem = listItem.value;
        if (bareItem.kind !== 7 /* ResultKind.STRING */) {
            return structErrorString;
        }
        if (listItem.parameters.items.length !== 1) {
            return structErrorString;
        }
        const param = listItem.parameters.items[0];
        if (param.name.value !== 'v') {
            return structErrorString;
        }
        const paramValue = param.value;
        if (paramValue.kind !== 7 /* ResultKind.STRING */) {
            return structErrorString;
        }
        brandList.push({ brand: bareItem.value, version: paramValue.value });
    }
    return brandList;
}
function serializeBrandsList(brands) {
    const shList = { kind: 11 /* ResultKind.LIST */, items: [] };
    const vParamName = { kind: 1 /* ResultKind.PARAM_NAME */, value: 'v' };
    for (const brand of brands) {
        const nameString = { kind: 7 /* ResultKind.STRING */, value: brand.brand };
        const verString = { kind: 7 /* ResultKind.STRING */, value: brand.version };
        const verParams = {
            kind: 3 /* ResultKind.PARAMETERS */,
            items: [{ kind: 2 /* ResultKind.PARAMETER */, name: vParamName, value: verString }],
        };
        const shItem = { kind: 4 /* ResultKind.ITEM */, value: nameString, parameters: verParams };
        shList.items.push(shItem);
    }
    const serializeResult = (0,_StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.serializeList)(shList);
    return serializeResult.kind === 0 /* ResultKind.ERROR */ ? '' : serializeResult.value;
}
/*
 * This checks whether the value provided is representable as a structured headers string,
 * which is the validity requirement for the fields in UserAgentMetadata that are not the brand list
 * or mobile bool.
 *
 * errorMessage will be passed through on failure.
 */
function validateAsStructuredHeadersString(value, errorString) {
    const parsedResult = (0,_StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.serializeItem)({
        kind: 4 /* ResultKind.ITEM */,
        value: { kind: 7 /* ResultKind.STRING */, value: value },
        parameters: { kind: 3 /* ResultKind.PARAMETERS */, items: [] },
    });
    if (parsedResult.kind === 0 /* ResultKind.ERROR */) {
        return { valid: false, errorMessage: errorString };
    }
    return { valid: true, errorMessage: undefined };
}
//# sourceMappingURL=UserAgentMetadata.js.map

/***/ }),

/***/ "./panels/settings/emulation/utils/UserAgentMetadata.test.js":
/*!*******************************************************************!*\
  !*** ./panels/settings/emulation/utils/UserAgentMetadata.test.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./panels/settings/emulation/utils/utils.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const UserAgentMetadata = _utils_js__WEBPACK_IMPORTED_MODULE_0__.UserAgentMetadata;
const errParse = 'syntax error';
const errStruct = 'data form error';
function assertNotError(result) {
    if (typeof result === 'string') {
        assert.fail('Unexpected error');
        return [];
    }
    return result;
}
function assertError(result, expectedError) {
    if (typeof result !== 'string') {
        assert.fail('Expected error, but got result');
        return;
    }
    assert.strictEqual(result, expectedError);
}
describe('UserAgentMetadata', () => {
    describe('parseBrandsList', () => {
        it('Parses a good example', () => {
            const result = UserAgentMetadata.parseBrandsList('"Chromium";v="42", "Ferrum"; v="42.a"', errParse, errStruct);
            const items = assertNotError(result);
            assert.lengthOf(items, 2);
            assert.strictEqual(items[0].brand, 'Chromium');
            assert.strictEqual(items[0].version, '42');
            assert.strictEqual(items[1].brand, 'Ferrum');
            assert.strictEqual(items[1].version, '42.a');
        });
        it('Parses empty list', () => {
            const result = UserAgentMetadata.parseBrandsList('', errParse, errStruct);
            const items = assertNotError(result);
            assert.lengthOf(items, 0);
        });
        it('Handles parse errors', () => {
            const result = UserAgentMetadata.parseBrandsList('"Chro', errParse, errStruct);
            assertError(result, errParse);
        });
        it('Handles data model errors', () => {
            const r1 = UserAgentMetadata.parseBrandsList('"Chromium"', errParse, errStruct);
            assertError(r1, errStruct);
            const r2 = UserAgentMetadata.parseBrandsList('Chromium; v="42"', errParse, errStruct);
            assertError(r2, errStruct);
            const r3 = UserAgentMetadata.parseBrandsList('"Chromium"; v="42"; q="huh"', errParse, errStruct);
            assertError(r3, errStruct);
            const r4 = UserAgentMetadata.parseBrandsList('"Chromium"; v=42', errParse, errStruct);
            assertError(r4, errStruct);
            const r5 = UserAgentMetadata.parseBrandsList('"Chromium"; q="42"', errParse, errStruct);
            assertError(r5, errStruct);
            const r6 = UserAgentMetadata.parseBrandsList('("Chromium" "Ferrum"); v="42"', errParse, errStruct);
            assertError(r6, errStruct);
        });
    });
    describe('serializeBrandsList', () => {
        it('Serializes a good example', () => {
            const result = UserAgentMetadata.serializeBrandsList([{ brand: 'Chromium', version: '42' }, { brand: 'Ferrum', version: '42.a' }]);
            assert.strictEqual(result, '"Chromium";v="42", "Ferrum";v="42.a"');
        });
        it('Character restrictions apply', () => {
            const result = UserAgentMetadata.serializeBrandsList([{ brand: 'Chromium', version: '42' }, { brand: 'Феррум', version: '42.a' }]);
            assert.strictEqual(result, '');
        });
    });
    describe('validateAsStructuredHeadersString', () => {
        it('Accepts valid value', () => {
            const result = UserAgentMetadata.validateAsStructuredHeadersString('Android', errParse);
            assert.isTrue(result.valid);
        });
        it('Rejects an invalid value', () => {
            const result = UserAgentMetadata.validateAsStructuredHeadersString('не АСКІІ', errParse);
            assert.isFalse(result.valid);
            assert.strictEqual(result.errorMessage, errParse);
        });
    });
});
//# sourceMappingURL=UserAgentMetadata.test.js.map

/***/ }),

/***/ "./panels/settings/emulation/utils/utils.js":
/*!**************************************************!*\
  !*** ./panels/settings/emulation/utils/utils.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StructuredHeaders: () => (/* reexport module object */ _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   UserAgentMetadata: () => (/* reexport module object */ _UserAgentMetadata_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StructuredHeaders.js */ "./panels/settings/emulation/utils/StructuredHeaders.js");
/* harmony import */ var _UserAgentMetadata_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserAgentMetadata.js */ "./panels/settings/emulation/utils/UserAgentMetadata.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



//# sourceMappingURL=utils.js.map

/***/ })

}]);