"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_util_util_d_ts"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/util/ErrorLike.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createProtocolErrorMessage: function() { return createProtocolErrorMessage; },
  isErrnoException: function() { return isErrnoException; },
  isErrorLike: function() { return isErrorLike; },
  rewriteError: function() { return rewriteError; }
});
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * @internal
 */ function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function isErrorLike(obj) {
    return (typeof obj === "undefined" ? "undefined" : _type_of(obj)) === 'object' && obj !== null && 'name' in obj && 'message' in obj;
}
/**
 * @internal
 */ function isErrnoException(obj) {
    return isErrorLike(obj) && ('errno' in obj || 'code' in obj || 'path' in obj || 'syscall' in obj);
}
/**
 * @internal
 */ function rewriteError(error, message, originalMessage) {
    error.message = message;
    error.originalMessage = originalMessage !== null && originalMessage !== void 0 ? originalMessage : error.originalMessage;
    return error;
}
/**
 * @internal
 */ function createProtocolErrorMessage(object) {
    var message = object.error.message;
    // TODO: remove the type checks when we stop connecting to BiDi with a CDP
    // client.
    if (object.error && _type_of(object.error) === 'object' && 'data' in object.error) {
        message += " ".concat(object.error.data);
    }
    return message;
} //# sourceMappingURL=ErrorLike.js.map


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assert: function() { return assert; }
});
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * Asserts that the given value is truthy.
 * @param value - some conditional statement
 * @param message - the error message to throw if the value is not truthy.
 *
 * @internal
 */ var assert = function(value, message) {
    if (!value) {
        throw new Error(message);
    }
}; //# sourceMappingURL=assert.js.map


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/util/util.d.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AsyncDisposableStack: function() { return /* reexport safe */ _disposable_js__WEBPACK_IMPORTED_MODULE_4__.AsyncDisposableStack; },
  AsyncIterableUtil: function() { return /* reexport safe */ _AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_3__.AsyncIterableUtil; },
  Deferred: function() { return /* reexport safe */ _Deferred_js__WEBPACK_IMPORTED_MODULE_1__.Deferred; },
  DisposableStack: function() { return /* reexport safe */ _disposable_js__WEBPACK_IMPORTED_MODULE_4__.DisposableStack; },
  assert: function() { return /* reexport safe */ _assert_js__WEBPACK_IMPORTED_MODULE_0__.assert; },
  asyncDisposeSymbol: function() { return /* reexport safe */ _disposable_js__WEBPACK_IMPORTED_MODULE_4__.asyncDisposeSymbol; },
  createProtocolErrorMessage: function() { return /* reexport safe */ _ErrorLike_js__WEBPACK_IMPORTED_MODULE_2__.createProtocolErrorMessage; },
  disposeSymbol: function() { return /* reexport safe */ _disposable_js__WEBPACK_IMPORTED_MODULE_4__.disposeSymbol; },
  isErrnoException: function() { return /* reexport safe */ _ErrorLike_js__WEBPACK_IMPORTED_MODULE_2__.isErrnoException; },
  isErrorLike: function() { return /* reexport safe */ _ErrorLike_js__WEBPACK_IMPORTED_MODULE_2__.isErrorLike; },
  rewriteError: function() { return /* reexport safe */ _ErrorLike_js__WEBPACK_IMPORTED_MODULE_2__.rewriteError; }
});
/* harmony import */var _assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */var _Deferred_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Deferred.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/* harmony import */var _ErrorLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorLike.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/ErrorLike.js");
/* harmony import */var _AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AsyncIterableUtil.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/AsyncIterableUtil.js");
/* harmony import */var _disposable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ 



 //# sourceMappingURL=util.d.ts.map


}),

}]);