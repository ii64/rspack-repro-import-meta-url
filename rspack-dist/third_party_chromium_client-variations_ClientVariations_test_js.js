"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_chromium_client-variations_ClientVariations_test_js"], {
"./third_party/chromium/client-variations/ClientVariations.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _client_variations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-variations.js */ "./third_party/chromium/client-variations/client-variations.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('formatClientVariations', function() {
    it('formats input containing both types of variation IDs', function() {
        var result = _client_variations_js__WEBPACK_IMPORTED_MODULE_0__.formatClientVariations({
            variationIds: [
                111,
                222,
                333
            ],
            triggerVariationIds: [
                444,
                555
            ]
        });
        assert.deepEqual(result, 'message ClientVariations {\n  // Active Google-visible variation IDs on this client. These are reported for analysis, but do not directly affect any server-side behavior.\n  repeated int32 variation_id = [111, 222, 333];\n  // Active Google-visible variation IDs on this client that trigger server-side behavior. These are reported for analysis *and* directly affect server-side behavior.\n  repeated int32 trigger_variation_id = [444, 555];\n}');
    });
    it('formats input containing only plain variation IDs', function() {
        var result = _client_variations_js__WEBPACK_IMPORTED_MODULE_0__.formatClientVariations({
            variationIds: [
                111,
                222,
                333
            ],
            triggerVariationIds: []
        });
        assert.deepEqual(result, 'message ClientVariations {\n  // Active Google-visible variation IDs on this client. These are reported for analysis, but do not directly affect any server-side behavior.\n  repeated int32 variation_id = [111, 222, 333];\n}');
    });
    it('formats input containing only trigger variation IDs', function() {
        var result = _client_variations_js__WEBPACK_IMPORTED_MODULE_0__.formatClientVariations({
            variationIds: [],
            triggerVariationIds: [
                444,
                555
            ]
        });
        assert.deepEqual(result, 'message ClientVariations {\n  // Active Google-visible variation IDs on this client that trigger server-side behavior. These are reported for analysis *and* directly affect server-side behavior.\n  repeated int32 trigger_variation_id = [444, 555];\n}');
    });
    it('formats input containing no variation IDs', function() {
        var result = _client_variations_js__WEBPACK_IMPORTED_MODULE_0__.formatClientVariations({
            variationIds: [],
            triggerVariationIds: []
        });
        assert.deepEqual(result, 'message ClientVariations {\n}');
    });
});
describe('parseClientVariations', function() {
    it('returns empty lists for unparseable text', function() {
        var result = _client_variations_js__WEBPACK_IMPORTED_MODULE_0__.parseClientVariations('gibberish');
        assert.deepEqual(result, {
            variationIds: [],
            triggerVariationIds: []
        });
    });
    it('returns empty lists for empty input', function() {
        var result = _client_variations_js__WEBPACK_IMPORTED_MODULE_0__.parseClientVariations('');
        assert.deepEqual(result, {
            variationIds: [],
            triggerVariationIds: []
        });
    });
    it('parses a valid serialized proto', function() {
        var result = _client_variations_js__WEBPACK_IMPORTED_MODULE_0__.parseClientVariations('CG8I3gEIzQIYvAMYqwQ=');
        assert.deepEqual(result, {
            variationIds: [
                111,
                222,
                333
            ],
            triggerVariationIds: [
                444,
                555
            ]
        });
    });
    // Please refer crbug.com/1160346 for more details.
    it('returns empty lists for invalid encoded data', function() {
        var result = _client_variations_js__WEBPACK_IMPORTED_MODULE_0__.parseClientVariations('Z2liYmVyaXNo');
        assert.deepEqual(result, {
            variationIds: [],
            triggerVariationIds: []
        });
    });
}); //# sourceMappingURL=ClientVariations.test.js.map


}),
"./third_party/chromium/client-variations/client-variations.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  formatClientVariations: function() { return /* reexport safe */ _ClientVariations_js__WEBPACK_IMPORTED_MODULE_0__.formatClientVariations; },
  parseClientVariations: function() { return /* reexport safe */ _ClientVariations_js__WEBPACK_IMPORTED_MODULE_0__.parseClientVariations; }
});
/* harmony import */var _ClientVariations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClientVariations.js */ "./third_party/chromium/client-variations/ClientVariations.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
 //# sourceMappingURL=client-variations.js.map


}),

}]);