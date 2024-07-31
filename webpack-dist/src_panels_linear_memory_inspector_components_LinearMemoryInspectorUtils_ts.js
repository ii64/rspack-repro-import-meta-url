"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_linear_memory_inspector_components_LinearMemoryInspectorUtils_ts"],{

/***/ "./src/panels/linear_memory_inspector/components/LinearMemoryInspectorUtils.ts":
/*!*************************************************************************************!*\
  !*** ./src/panels/linear_memory_inspector/components/LinearMemoryInspectorUtils.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DECIMAL_REGEXP: () => (/* binding */ DECIMAL_REGEXP),
/* harmony export */   HEXADECIMAL_REGEXP: () => (/* binding */ HEXADECIMAL_REGEXP),
/* harmony export */   formatAddress: () => (/* binding */ formatAddress),
/* harmony export */   parseAddress: () => (/* binding */ parseAddress),
/* harmony export */   toHexString: () => (/* binding */ toHexString)
/* harmony export */ });
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const HEXADECIMAL_REGEXP = /^0x[a-fA-F0-9]+$/;
const DECIMAL_REGEXP = /^0$|[1-9]\d*$/;
function toHexString(data) {
    const hex = data.number.toString(16).padStart(data.pad, '0');
    const upperHex = hex.toUpperCase();
    return data.prefix ? '0x' + upperHex : upperHex;
}
function formatAddress(address) {
    return toHexString({ number: address, pad: 8, prefix: true });
}
function parseAddress(address) {
    const hexMatch = address.match(HEXADECIMAL_REGEXP);
    const decMatch = address.match(DECIMAL_REGEXP);
    let newAddress = undefined;
    if (hexMatch && hexMatch[0].length === address.length) {
        newAddress = parseInt(address, 16);
    }
    else if (decMatch && decMatch[0].length === address.length) {
        newAddress = parseInt(address, 10);
    }
    return newAddress;
}


/***/ })

}]);