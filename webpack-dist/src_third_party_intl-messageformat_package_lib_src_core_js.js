"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_intl-messageformat_package_lib_src_core_js"],{

/***/ "./src/third_party/intl-messageformat/package/lib/src/core.js":
/*!********************************************************************!*\
  !*** ./src/third_party/intl-messageformat/package/lib/src/core.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IntlMessageFormat: () => (/* binding */ IntlMessageFormat)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@formatjs/fast-memoize'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@formatjs/icu-messageformat-parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tslib'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatters */ "./src/third_party/intl-messageformat/package/lib/src/formatters.js");
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/






// -- MessageFormat --------------------------------------------------------
function mergeConfig(c1, c2) {
    if (!c2) {
        return c1;
    }
    return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tslib'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tslib'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tslib'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({}, (c1 || {})), (c2 || {})), Object.keys(c1).reduce(function (all, k) {
        all[k] = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tslib'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tslib'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({}, c1[k]), (c2[k] || {}));
        return all;
    }, {}));
}
function mergeConfigs(defaultConfig, configs) {
    if (!configs) {
        return defaultConfig;
    }
    return Object.keys(defaultConfig).reduce(function (all, k) {
        all[k] = mergeConfig(defaultConfig[k], configs[k]);
        return all;
    }, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tslib'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({}, defaultConfig));
}
function createFastMemoizeCache(store) {
    return {
        create: function () {
            return {
                has: function (key) {
                    return key in store;
                },
                get: function (key) {
                    return store[key];
                },
                set: function (key, value) {
                    store[key] = value;
                },
            };
        },
    };
}
function createDefaultFormatters(cache) {
    if (cache === void 0) { cache = {
        number: {},
        dateTime: {},
        pluralRules: {},
    }; }
    return {
        getNumberFormat: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@formatjs/fast-memoize'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.NumberFormat).bind.apply(_a, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tslib'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())([void 0], args)))();
        }, {
            cache: createFastMemoizeCache(cache.number),
            strategy: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@formatjs/fast-memoize'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).variadic,
        }),
        getDateTimeFormat: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@formatjs/fast-memoize'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.DateTimeFormat).bind.apply(_a, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tslib'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())([void 0], args)))();
        }, {
            cache: createFastMemoizeCache(cache.dateTime),
            strategy: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@formatjs/fast-memoize'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).variadic,
        }),
        getPluralRules: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@formatjs/fast-memoize'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.PluralRules).bind.apply(_a, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tslib'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())([void 0], args)))();
        }, {
            cache: createFastMemoizeCache(cache.pluralRules),
            strategy: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@formatjs/fast-memoize'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).variadic,
        }),
    };
}
var IntlMessageFormat = /** @class */ (function () {
    function IntlMessageFormat(message, locales, overrideFormats, opts) {
        var _this = this;
        if (locales === void 0) { locales = IntlMessageFormat.defaultLocale; }
        this.formatterCache = {
            number: {},
            dateTime: {},
            pluralRules: {},
        };
        this.format = function (values) {
            var parts = _this.formatToParts(values);
            // Hot path for straight simple msg translations
            if (parts.length === 1) {
                return parts[0].value;
            }
            var result = parts.reduce(function (all, part) {
                if (!all.length ||
                    part.type !== _formatters__WEBPACK_IMPORTED_MODULE_1__.PART_TYPE.literal ||
                    typeof all[all.length - 1] !== 'string') {
                    all.push(part.value);
                }
                else {
                    all[all.length - 1] += part.value;
                }
                return all;
            }, []);
            if (result.length <= 1) {
                return result[0] || '';
            }
            return result;
        };
        this.formatToParts = function (values) {
            return (0,_formatters__WEBPACK_IMPORTED_MODULE_1__.formatToParts)(_this.ast, _this.locales, _this.formatters, _this.formats, values, undefined, _this.message);
        };
        this.resolvedOptions = function () { return ({
            locale: Intl.NumberFormat.supportedLocalesOf(_this.locales)[0],
        }); };
        this.getAst = function () { return _this.ast; };
        if (typeof message === 'string') {
            this.message = message;
            if (!IntlMessageFormat.__parse) {
                throw new TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
            }
            // Parse string messages into an AST.
            this.ast = IntlMessageFormat.__parse(message, {
                ignoreTag: opts === null || opts === void 0 ? void 0 : opts.ignoreTag,
            });
        }
        else {
            this.ast = message;
        }
        if (!Array.isArray(this.ast)) {
            throw new TypeError('A message must be provided as a String or AST.');
        }
        // Creates a new object with the specified `formats` merged with the default
        // formats.
        this.formats = mergeConfigs(IntlMessageFormat.formats, overrideFormats);
        // Defined first because it's used to build the format pattern.
        this.locales = locales;
        this.formatters =
            (opts && opts.formatters) || createDefaultFormatters(this.formatterCache);
    }
    Object.defineProperty(IntlMessageFormat, "defaultLocale", {
        get: function () {
            if (!IntlMessageFormat.memoizedDefaultLocale) {
                IntlMessageFormat.memoizedDefaultLocale =
                    new Intl.NumberFormat().resolvedOptions().locale;
            }
            return IntlMessageFormat.memoizedDefaultLocale;
        },
        enumerable: false,
        configurable: true
    });
    IntlMessageFormat.memoizedDefaultLocale = null;
    IntlMessageFormat.__parse = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@formatjs/icu-messageformat-parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
    // Default format options used as the prototype of the `formats` provided to the
    // constructor. These are used when constructing the internal Intl.NumberFormat
    // and Intl.DateTimeFormat instances.
    IntlMessageFormat.formats = {
        number: {
            integer: {
                maximumFractionDigits: 0,
            },
            currency: {
                style: 'currency',
            },
            percent: {
                style: 'percent',
            },
        },
        date: {
            short: {
                month: 'numeric',
                day: 'numeric',
                year: '2-digit',
            },
            medium: {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
            },
            long: {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            },
            full: {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            },
        },
        time: {
            short: {
                hour: 'numeric',
                minute: 'numeric',
            },
            medium: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
            },
            long: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short',
            },
            full: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short',
            },
        },
    };
    return IntlMessageFormat;
}());



/***/ }),

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



/***/ }),

/***/ "./src/third_party/intl-messageformat/package/lib/src/formatters.js":
/*!**************************************************************************!*\
  !*** ./src/third_party/intl-messageformat/package/lib/src/formatters.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PART_TYPE: () => (/* binding */ PART_TYPE),
/* harmony export */   formatToParts: () => (/* binding */ formatToParts),
/* harmony export */   isFormatXMLElementFn: () => (/* binding */ isFormatXMLElementFn)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@formatjs/icu-messageformat-parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error */ "./src/third_party/intl-messageformat/package/lib/src/error.js");




var PART_TYPE;
(function (PART_TYPE) {
    PART_TYPE[PART_TYPE["literal"] = 0] = "literal";
    PART_TYPE[PART_TYPE["object"] = 1] = "object";
})(PART_TYPE || (PART_TYPE = {}));
function mergeLiteral(parts) {
    if (parts.length < 2) {
        return parts;
    }
    return parts.reduce(function (all, part) {
        var lastPart = all[all.length - 1];
        if (!lastPart ||
            lastPart.type !== PART_TYPE.literal ||
            part.type !== PART_TYPE.literal) {
            all.push(part);
        }
        else {
            lastPart.value += part.value;
        }
        return all;
    }, []);
}
function isFormatXMLElementFn(el) {
    return typeof el === 'function';
}
// TODO(skeleton): add skeleton support
function formatToParts(els, locales, formatters, formats, values, currentPluralValue, 
// For debugging
originalMessage) {
    // Hot path for straight simple msg translations
    if (els.length === 1 && Object(function webpackMissingModule() { var e = new Error("Cannot find module '@formatjs/icu-messageformat-parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(els[0])) {
        return [
            {
                type: PART_TYPE.literal,
                value: els[0].value,
            },
        ];
    }
    var result = [];
    for (var _i = 0, els_1 = els; _i < els_1.length; _i++) {
        var el = els_1[_i];
        // Exit early for string parts.
        if (Object(function webpackMissingModule() { var e = new Error("Cannot find module '@formatjs/icu-messageformat-parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(el)) {
            result.push({
                type: PART_TYPE.literal,
                value: el.value,
            });
            continue;
        }
        // TODO: should this part be literal type?
        // Replace `#` in plural rules with the actual numeric value.
        if (Object(function webpackMissingModule() { var e = new Error("Cannot find module '@formatjs/icu-messageformat-parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(el)) {
            if (typeof currentPluralValue === 'number') {
                result.push({
                    type: PART_TYPE.literal,
                    value: formatters.getNumberFormat(locales).format(currentPluralValue),
                });
            }
            continue;
        }
        var varName = el.value;
        // Enforce that all required values are provided by the caller.
        if (!(values && varName in values)) {
            throw new _error__WEBPACK_IMPORTED_MODULE_1__.MissingValueError(varName, originalMessage);
        }
        var value = values[varName];
        if (Object(function webpackMissingModule() { var e = new Error("Cannot find module '@formatjs/icu-messageformat-parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(el)) {
            if (!value || typeof value === 'string' || typeof value === 'number') {
                value =
                    typeof value === 'string' || typeof value === 'number'
                        ? String(value)
                        : '';
            }
            result.push({
                type: typeof value === 'string' ? PART_TYPE.literal : PART_TYPE.object,
                value: value,
            });
            continue;
        }
        // Recursively format plural and select parts' option — which can be a
        // nested pattern structure. The choosing of the option to use is
        // abstracted-by and delegated-to the part helper object.
        if (Object(function webpackMissingModule() { var e = new Error("Cannot find module '@formatjs/icu-messageformat-parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(el)) {
            var style = typeof el.style === 'string'
                ? formats.date[el.style]
                : Object(function webpackMissingModule() { var e = new Error("Cannot find module '@formatjs/icu-messageformat-parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(el.style)
                    ? el.style.parsedOptions
                    : undefined;
            result.push({
                type: PART_TYPE.literal,
                value: formatters
                    .getDateTimeFormat(locales, style)
                    .format(value),
            });
            continue;
        }
        if (Object(function webpackMissingModule() { var e = new Error("Cannot find module '@formatjs/icu-messageformat-parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(el)) {
            var style = typeof el.style === 'string'
                ? formats.time[el.style]
                : Object(function webpackMissingModule() { var e = new Error("Cannot find module '@formatjs/icu-messageformat-parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(el.style)
                    ? el.style.parsedOptions
                    : undefined;
            result.push({
                type: PART_TYPE.literal,
                value: formatters
                    .getDateTimeFormat(locales, style)
                    .format(value),
            });
            continue;
        }
        if (Object(function webpackMissingModule() { var e = new Error("Cannot find module '@formatjs/icu-messageformat-parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(el)) {
            var style = typeof el.style === 'string'
                ? formats.number[el.style]
                : Object(function webpackMissingModule() { var e = new Error("Cannot find module '@formatjs/icu-messageformat-parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(el.style)
                    ? el.style.parsedOptions
                    : undefined;
            if (style && style.scale) {
                value =
                    value *
                        (style.scale || 1);
            }
            result.push({
                type: PART_TYPE.literal,
                value: formatters
                    .getNumberFormat(locales, style)
                    .format(value),
            });
            continue;
        }
        if (Object(function webpackMissingModule() { var e = new Error("Cannot find module '@formatjs/icu-messageformat-parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(el)) {
            var children = el.children, value_1 = el.value;
            var formatFn = values[value_1];
            if (!isFormatXMLElementFn(formatFn)) {
                throw new _error__WEBPACK_IMPORTED_MODULE_1__.InvalidValueTypeError(value_1, 'function', originalMessage);
            }
            var parts = formatToParts(children, locales, formatters, formats, values, currentPluralValue);
            var chunks = formatFn(parts.map(function (p) { return p.value; }));
            if (!Array.isArray(chunks)) {
                chunks = [chunks];
            }
            result.push.apply(result, chunks.map(function (c) {
                return {
                    type: typeof c === 'string' ? PART_TYPE.literal : PART_TYPE.object,
                    value: c,
                };
            }));
        }
        if (Object(function webpackMissingModule() { var e = new Error("Cannot find module '@formatjs/icu-messageformat-parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(el)) {
            var opt = el.options[value] || el.options.other;
            if (!opt) {
                throw new _error__WEBPACK_IMPORTED_MODULE_1__.InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
            }
            result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values));
            continue;
        }
        if (Object(function webpackMissingModule() { var e = new Error("Cannot find module '@formatjs/icu-messageformat-parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(el)) {
            var opt = el.options["=" + value];
            if (!opt) {
                if (!Intl.PluralRules) {
                    throw new _error__WEBPACK_IMPORTED_MODULE_1__.FormatError("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", _error__WEBPACK_IMPORTED_MODULE_1__.ErrorCode.MISSING_INTL_API, originalMessage);
                }
                var rule = formatters
                    .getPluralRules(locales, { type: el.pluralType })
                    .select(value - (el.offset || 0));
                opt = el.options[rule] || el.options.other;
            }
            if (!opt) {
                throw new _error__WEBPACK_IMPORTED_MODULE_1__.InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
            }
            result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values, value - (el.offset || 0)));
            continue;
        }
    }
    return mergeLiteral(result);
}


/***/ })

}]);