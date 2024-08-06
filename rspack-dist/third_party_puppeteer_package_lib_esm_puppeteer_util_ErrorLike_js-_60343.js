"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_util_ErrorLike_js-_60343"], {
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

}]);