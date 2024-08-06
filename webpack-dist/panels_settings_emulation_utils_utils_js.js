"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_settings_emulation_utils_utils_js"],{

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