"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_linear_memory_inspector_components_LinearMemoryInspectorUtils_js"], {
"./panels/linear_memory_inspector/components/LinearMemoryInspectorUtils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DECIMAL_REGEXP: function() { return DECIMAL_REGEXP; },
  HEXADECIMAL_REGEXP: function() { return HEXADECIMAL_REGEXP; },
  formatAddress: function() { return formatAddress; },
  parseAddress: function() { return parseAddress; },
  toHexString: function() { return toHexString; }
});
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var HEXADECIMAL_REGEXP = /^0x[a-fA-F0-9]+$/;
var DECIMAL_REGEXP = /^0$|[1-9]\d*$/;
function toHexString(data) {
    var hex = data.number.toString(16).padStart(data.pad, '0');
    var upperHex = hex.toUpperCase();
    return data.prefix ? '0x' + upperHex : upperHex;
}
function formatAddress(address) {
    return toHexString({
        number: address,
        pad: 8,
        prefix: true
    });
}
function parseAddress(address) {
    var hexMatch = address.match(HEXADECIMAL_REGEXP);
    var decMatch = address.match(DECIMAL_REGEXP);
    var newAddress = undefined;
    if (hexMatch && hexMatch[0].length === address.length) {
        newAddress = parseInt(address, 16);
    } else if (decMatch && decMatch[0].length === address.length) {
        newAddress = parseInt(address, 10);
    }
    return newAddress;
} //# sourceMappingURL=LinearMemoryInspectorUtils.js.map


}),

}]);