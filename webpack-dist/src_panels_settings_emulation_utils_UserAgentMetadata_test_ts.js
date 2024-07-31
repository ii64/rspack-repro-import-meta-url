"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_settings_emulation_utils_UserAgentMetadata_test_ts"],{

/***/ "./src/panels/settings/emulation/utils/UserAgentMetadata.test.ts":
/*!***********************************************************************!*\
  !*** ./src/panels/settings/emulation/utils/UserAgentMetadata.test.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/panels/settings/emulation/utils/utils.ts");
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


/***/ }),

/***/ "./src/panels/settings/emulation/utils/UserAgentMetadata.ts":
/*!******************************************************************!*\
  !*** ./src/panels/settings/emulation/utils/UserAgentMetadata.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseBrandsList: () => (/* binding */ parseBrandsList),
/* harmony export */   serializeBrandsList: () => (/* binding */ serializeBrandsList),
/* harmony export */   validateAsStructuredHeadersString: () => (/* binding */ validateAsStructuredHeadersString)
/* harmony export */ });
/* harmony import */ var _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StructuredHeaders.js */ "./src/panels/settings/emulation/utils/StructuredHeaders.ts");
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
    if (parseResult.kind === _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.ResultKind.ERROR) {
        return parseErrorString;
    }
    for (const listItem of parseResult.items) {
        if (listItem.kind !== _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.ResultKind.ITEM) {
            return structErrorString;
        }
        const bareItem = listItem.value;
        if (bareItem.kind !== _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.ResultKind.STRING) {
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
        if (paramValue.kind !== _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.ResultKind.STRING) {
            return structErrorString;
        }
        brandList.push({ brand: bareItem.value, version: paramValue.value });
    }
    return brandList;
}
function serializeBrandsList(brands) {
    const shList = { kind: _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.ResultKind.LIST, items: [] };
    const vParamName = { kind: _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.ResultKind.PARAM_NAME, value: 'v' };
    for (const brand of brands) {
        const nameString = { kind: _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.ResultKind.STRING, value: brand.brand };
        const verString = { kind: _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.ResultKind.STRING, value: brand.version };
        const verParams = {
            kind: _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.ResultKind.PARAMETERS,
            items: [{ kind: _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.ResultKind.PARAMETER, name: vParamName, value: verString }],
        };
        const shItem = { kind: _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.ResultKind.ITEM, value: nameString, parameters: verParams };
        shList.items.push(shItem);
    }
    const serializeResult = (0,_StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.serializeList)(shList);
    return serializeResult.kind === _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.ResultKind.ERROR ? '' : serializeResult.value;
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
        kind: _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.ResultKind.ITEM,
        value: { kind: _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.ResultKind.STRING, value: value },
        parameters: { kind: _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.ResultKind.PARAMETERS, items: [] },
    });
    if (parsedResult.kind === _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.ResultKind.ERROR) {
        return { valid: false, errorMessage: errorString };
    }
    return { valid: true, errorMessage: undefined };
}


/***/ }),

/***/ "./src/panels/settings/emulation/utils/utils.ts":
/*!******************************************************!*\
  !*** ./src/panels/settings/emulation/utils/utils.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StructuredHeaders: () => (/* reexport module object */ _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   UserAgentMetadata: () => (/* reexport module object */ _UserAgentMetadata_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StructuredHeaders.js */ "./src/panels/settings/emulation/utils/StructuredHeaders.ts");
/* harmony import */ var _UserAgentMetadata_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserAgentMetadata.js */ "./src/panels/settings/emulation/utils/UserAgentMetadata.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





/***/ })

}]);