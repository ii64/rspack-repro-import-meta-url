"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_settings_emulation_utils_UserAgentMetadata_test_js"], {
"./panels/settings/emulation/utils/UserAgentMetadata.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  parseBrandsList: function() { return parseBrandsList; },
  serializeBrandsList: function() { return serializeBrandsList; },
  validateAsStructuredHeadersString: function() { return validateAsStructuredHeadersString; }
});
/* harmony import */var _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StructuredHeaders.js */ "./panels/settings/emulation/utils/StructuredHeaders.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Helper functions for working with UserAgentMetadata protocol objects, in
// particular their plain string representation.

/* Returned string is for error, either parseErrorString or structErrorString.
 */ function parseBrandsList(stringForm, parseErrorString, structErrorString) {
    var brandList = [];
    var parseResult = (0,_StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.parseList)(stringForm);
    if (parseResult.kind === 0 /* ResultKind.ERROR */ ) {
        return parseErrorString;
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = parseResult.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var listItem = _step.value;
            if (listItem.kind !== 4 /* ResultKind.ITEM */ ) {
                return structErrorString;
            }
            var bareItem = listItem.value;
            if (bareItem.kind !== 7 /* ResultKind.STRING */ ) {
                return structErrorString;
            }
            if (listItem.parameters.items.length !== 1) {
                return structErrorString;
            }
            var param = listItem.parameters.items[0];
            if (param.name.value !== 'v') {
                return structErrorString;
            }
            var paramValue = param.value;
            if (paramValue.kind !== 7 /* ResultKind.STRING */ ) {
                return structErrorString;
            }
            brandList.push({
                brand: bareItem.value,
                version: paramValue.value
            });
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
    return brandList;
}
function serializeBrandsList(brands) {
    var shList = {
        kind: 11 /* ResultKind.LIST */ ,
        items: []
    };
    var vParamName = {
        kind: 1 /* ResultKind.PARAM_NAME */ ,
        value: 'v'
    };
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = brands[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var brand = _step.value;
            var nameString = {
                kind: 7 /* ResultKind.STRING */ ,
                value: brand.brand
            };
            var verString = {
                kind: 7 /* ResultKind.STRING */ ,
                value: brand.version
            };
            var verParams = {
                kind: 3 /* ResultKind.PARAMETERS */ ,
                items: [
                    {
                        kind: 2 /* ResultKind.PARAMETER */ ,
                        name: vParamName,
                        value: verString
                    }
                ]
            };
            var shItem = {
                kind: 4 /* ResultKind.ITEM */ ,
                value: nameString,
                parameters: verParams
            };
            shList.items.push(shItem);
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
    var serializeResult = (0,_StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.serializeList)(shList);
    return serializeResult.kind === 0 /* ResultKind.ERROR */  ? '' : serializeResult.value;
}
/*
 * This checks whether the value provided is representable as a structured headers string,
 * which is the validity requirement for the fields in UserAgentMetadata that are not the brand list
 * or mobile bool.
 *
 * errorMessage will be passed through on failure.
 */ function validateAsStructuredHeadersString(value, errorString) {
    var parsedResult = (0,_StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__.serializeItem)({
        kind: 4 /* ResultKind.ITEM */ ,
        value: {
            kind: 7 /* ResultKind.STRING */ ,
            value: value
        },
        parameters: {
            kind: 3 /* ResultKind.PARAMETERS */ ,
            items: []
        }
    });
    if (parsedResult.kind === 0 /* ResultKind.ERROR */ ) {
        return {
            valid: false,
            errorMessage: errorString
        };
    }
    return {
        valid: true,
        errorMessage: undefined
    };
} //# sourceMappingURL=UserAgentMetadata.js.map


}),
"./panels/settings/emulation/utils/UserAgentMetadata.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./panels/settings/emulation/utils/utils.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var UserAgentMetadata = _utils_js__WEBPACK_IMPORTED_MODULE_0__.UserAgentMetadata;
var errParse = 'syntax error';
var errStruct = 'data form error';
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
describe('UserAgentMetadata', function() {
    describe('parseBrandsList', function() {
        it('Parses a good example', function() {
            var result = UserAgentMetadata.parseBrandsList('"Chromium";v="42", "Ferrum"; v="42.a"', errParse, errStruct);
            var items = assertNotError(result);
            assert.lengthOf(items, 2);
            assert.strictEqual(items[0].brand, 'Chromium');
            assert.strictEqual(items[0].version, '42');
            assert.strictEqual(items[1].brand, 'Ferrum');
            assert.strictEqual(items[1].version, '42.a');
        });
        it('Parses empty list', function() {
            var result = UserAgentMetadata.parseBrandsList('', errParse, errStruct);
            var items = assertNotError(result);
            assert.lengthOf(items, 0);
        });
        it('Handles parse errors', function() {
            var result = UserAgentMetadata.parseBrandsList('"Chro', errParse, errStruct);
            assertError(result, errParse);
        });
        it('Handles data model errors', function() {
            var r1 = UserAgentMetadata.parseBrandsList('"Chromium"', errParse, errStruct);
            assertError(r1, errStruct);
            var r2 = UserAgentMetadata.parseBrandsList('Chromium; v="42"', errParse, errStruct);
            assertError(r2, errStruct);
            var r3 = UserAgentMetadata.parseBrandsList('"Chromium"; v="42"; q="huh"', errParse, errStruct);
            assertError(r3, errStruct);
            var r4 = UserAgentMetadata.parseBrandsList('"Chromium"; v=42', errParse, errStruct);
            assertError(r4, errStruct);
            var r5 = UserAgentMetadata.parseBrandsList('"Chromium"; q="42"', errParse, errStruct);
            assertError(r5, errStruct);
            var r6 = UserAgentMetadata.parseBrandsList('("Chromium" "Ferrum"); v="42"', errParse, errStruct);
            assertError(r6, errStruct);
        });
    });
    describe('serializeBrandsList', function() {
        it('Serializes a good example', function() {
            var result = UserAgentMetadata.serializeBrandsList([
                {
                    brand: 'Chromium',
                    version: '42'
                },
                {
                    brand: 'Ferrum',
                    version: '42.a'
                }
            ]);
            assert.strictEqual(result, '"Chromium";v="42", "Ferrum";v="42.a"');
        });
        it('Character restrictions apply', function() {
            var result = UserAgentMetadata.serializeBrandsList([
                {
                    brand: 'Chromium',
                    version: '42'
                },
                {
                    brand: 'Феррум',
                    version: '42.a'
                }
            ]);
            assert.strictEqual(result, '');
        });
    });
    describe('validateAsStructuredHeadersString', function() {
        it('Accepts valid value', function() {
            var result = UserAgentMetadata.validateAsStructuredHeadersString('Android', errParse);
            assert.isTrue(result.valid);
        });
        it('Rejects an invalid value', function() {
            var result = UserAgentMetadata.validateAsStructuredHeadersString('не АСКІІ', errParse);
            assert.isFalse(result.valid);
            assert.strictEqual(result.errorMessage, errParse);
        });
    });
}); //# sourceMappingURL=UserAgentMetadata.test.js.map


}),
"./panels/settings/emulation/utils/utils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  StructuredHeaders: function() { return /* reexport module object */ _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__; },
  UserAgentMetadata: function() { return /* reexport module object */ _UserAgentMetadata_js__WEBPACK_IMPORTED_MODULE_1__; }
});
/* harmony import */var _StructuredHeaders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StructuredHeaders.js */ "./panels/settings/emulation/utils/StructuredHeaders.js");
/* harmony import */var _UserAgentMetadata_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserAgentMetadata.js */ "./panels/settings/emulation/utils/UserAgentMetadata.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


 //# sourceMappingURL=utils.js.map


}),

}]);