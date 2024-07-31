"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_settings_emulation_utils_UserAgentMetadata_ts"],{

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


/***/ })

}]);