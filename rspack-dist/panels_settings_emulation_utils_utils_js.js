"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_settings_emulation_utils_utils_js"], {
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