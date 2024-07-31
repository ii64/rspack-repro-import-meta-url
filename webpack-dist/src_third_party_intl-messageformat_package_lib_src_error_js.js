"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_intl-messageformat_package_lib_src_error_js"],{

/***/ "./src/third_party/intl-messageformat/package/lib/src/error.js":
/*!*********************************************************************!*\
  !*** ./src/third_party/intl-messageformat/package/lib/src/error.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorCode: () => (/* binding */ ErrorCode),
/* harmony export */   FormatError: () => (/* binding */ FormatError),
/* harmony export */   InvalidValueError: () => (/* binding */ InvalidValueError),
/* harmony export */   InvalidValueTypeError: () => (/* binding */ InvalidValueTypeError),
/* harmony export */   MissingValueError: () => (/* binding */ MissingValueError)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tslib'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

var ErrorCode;
(function (ErrorCode) {
    // When we have a placeholder but no value to format
    ErrorCode["MISSING_VALUE"] = "MISSING_VALUE";
    // When value supplied is invalid
    ErrorCode["INVALID_VALUE"] = "INVALID_VALUE";
    // When we need specific Intl API but it's not available
    ErrorCode["MISSING_INTL_API"] = "MISSING_INTL_API";
})(ErrorCode || (ErrorCode = {}));
var FormatError = /** @class */ (function (_super) {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tslib'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(FormatError, _super);
    function FormatError(msg, code, originalMessage) {
        var _this = _super.call(this, msg) || this;
        _this.code = code;
        _this.originalMessage = originalMessage;
        return _this;
    }
    FormatError.prototype.toString = function () {
        return "[formatjs Error: " + this.code + "] " + this.message;
    };
    return FormatError;
}(Error));

var InvalidValueError = /** @class */ (function (_super) {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tslib'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(InvalidValueError, _super);
    function InvalidValueError(variableId, value, options, originalMessage) {
        return _super.call(this, "Invalid values for \"" + variableId + "\": \"" + value + "\". Options are \"" + Object.keys(options).join('", "') + "\"", ErrorCode.INVALID_VALUE, originalMessage) || this;
    }
    return InvalidValueError;
}(FormatError));

var InvalidValueTypeError = /** @class */ (function (_super) {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tslib'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(InvalidValueTypeError, _super);
    function InvalidValueTypeError(value, type, originalMessage) {
        return _super.call(this, "Value for \"" + value + "\" must be of type " + type, ErrorCode.INVALID_VALUE, originalMessage) || this;
    }
    return InvalidValueTypeError;
}(FormatError));

var MissingValueError = /** @class */ (function (_super) {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tslib'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(MissingValueError, _super);
    function MissingValueError(variableId, originalMessage) {
        return _super.call(this, "The intl string context variable \"" + variableId + "\" was not provided to the string \"" + originalMessage + "\"", ErrorCode.MISSING_VALUE, originalMessage) || this;
    }
    return MissingValueError;
}(FormatError));



/***/ })

}]);