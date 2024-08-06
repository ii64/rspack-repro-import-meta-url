"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_platform_MimeType_test_js"], {
"./core/platform/MimeType.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform.js */ "./core/platform/platform.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}

describe('parseContentType', function() {
    var TEST_CASES = [
        {
            contentType: 'text/html',
            expectedMimeType: 'text/html'
        },
        {
            contentType: 'text/html;',
            expectedMimeType: 'text/html'
        },
        {
            contentType: 'text/html; charset=utf-8',
            expectedMimeType: 'text/html',
            expectedCharset: 'utf-8'
        },
        // Parameter name is "charset " not "charset".
        {
            contentType: 'text/html; charset =utf-8',
            expectedMimeType: 'text/html'
        },
        {
            contentType: 'text/html; charset= utf-8',
            expectedMimeType: 'text/html',
            expectedCharset: 'utf-8'
        },
        {
            contentType: 'text/html; charset=utf-8 ',
            expectedMimeType: 'text/html',
            expectedCharset: 'utf-8'
        },
        {
            contentType: 'text/html; charset',
            expectedMimeType: 'text/html'
        },
        {
            contentType: 'text/html; charset=',
            expectedMimeType: 'text/html'
        },
        {
            contentType: 'text/html; charset= ',
            expectedMimeType: 'text/html'
        },
        {
            contentType: 'text/html; charset= ;',
            expectedMimeType: 'text/html'
        },
        // Empty quotes are allowed.
        {
            contentType: 'text/html; charset=""',
            expectedMimeType: 'text/html',
            expectedCharset: ''
        },
        // Leading/trailing whitespace in quotes is trimmed
        {
            contentType: 'text/html; charset=" "',
            expectedMimeType: 'text/html',
            expectedCharset: ''
        },
        {
            contentType: 'text/html; charset=" foo "',
            expectedMimeType: 'text/html',
            expectedCharset: 'foo'
        },
        // With multiple values, should use the first one
        {
            contentType: 'text/html; charset=foo; charset=utf-8',
            expectedMimeType: 'text/html',
            expectedCharset: 'foo'
        },
        {
            contentType: 'text/html; charset; charset=; charset=utf-8',
            expectedMimeType: 'text/html',
            expectedCharset: 'utf-8'
        },
        {
            contentType: 'text/html; charset=utf-8; charset=; charset',
            expectedMimeType: 'text/html',
            expectedCharset: 'utf-8'
        },
        // Stray quotes ignored.
        {
            contentType: 'text/html; " ""; charset=utf-8',
            expectedMimeType: 'text/html',
            expectedCharset: 'utf-8'
        },
        // Non-leading quotes kept as-is.
        {
            contentType: 'text/html; charset=u"tf-8"',
            expectedMimeType: 'text/html',
            expectedCharset: 'u"tf-8"'
        },
        {
            contentType: 'text/html; charset="utf-8"',
            expectedMimeType: 'text/html',
            expectedCharset: 'utf-8'
        },
        // No closing quote.
        {
            contentType: 'text/html; charset="utf-8',
            expectedMimeType: 'text/html',
            expectedCharset: 'utf-8'
        },
        // Check that \ is treated as an escape character.
        {
            contentType: 'text/html; charset="\\utf\\-\\8"',
            expectedMimeType: 'text/html',
            expectedCharset: 'utf-8'
        },
        // More interseting escape character test - test escaped backslash, escaped
        // quote, and backslash at end of input in unterminated quoted string.
        {
            contentType: 'text/html; charset="\\\\\\"\\',
            expectedMimeType: 'text/html',
            expectedCharset: '\\"\\'
        },
        // Check quoted semicolon
        {
            contentType: 'text/html; charset=";charset=utf-8;"',
            expectedMimeType: 'text/html',
            expectedCharset: ';charset=utf-8;'
        },
        // Single quotes are not delimiters but must be treated as part of charset.
        {
            contentType: 'text/html; charset=\'utf-8\'',
            expectedMimeType: 'text/html',
            expectedCharset: '\'utf-8\''
        },
        // Empty subtype should be accepted.
        {
            contentType: 'text/',
            expectedMimeType: 'text/'
        },
        // */* is ignored unless it has parmas or is not an exact match.
        {
            contentType: '*/*',
            expectedMimeType: null
        },
        {
            contentType: '*/* ',
            expectedMimeType: '*/*'
        },
        {
            contentType: '*/*; charset=utf-8',
            expectedMimeType: '*/*',
            expectedCharset: 'utf-8'
        },
        // mime type is lowercase.
        {
            contentType: 'teXT/html',
            expectedMimeType: 'text/html'
        }
    ];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        var _loop = function() {
            var test = _step.value;
            it("parses '".concat(test.contentType, "'"), function() {
                var _Platform_MimeType_parseContentType = _platform_js__WEBPACK_IMPORTED_MODULE_0__.MimeType.parseContentType(test.contentType), mimeType = _Platform_MimeType_parseContentType.mimeType, charset = _Platform_MimeType_parseContentType.charset;
                var _test_expectedMimeType;
                assert.strictEqual(mimeType, (_test_expectedMimeType = test.expectedMimeType) !== null && _test_expectedMimeType !== void 0 ? _test_expectedMimeType : null);
                var _test_expectedCharset;
                assert.strictEqual(charset, (_test_expectedCharset = test.expectedCharset) !== null && _test_expectedCharset !== void 0 ? _test_expectedCharset : null);
            });
        };
        for(var _iterator = TEST_CASES[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
});
describe('isTextType', function() {
    var TEST_CASES = new Map([
        [
            'text/html',
            true
        ],
        [
            'application/pdf',
            false
        ],
        [
            'application/json',
            true
        ],
        [
            'image/svg+xml',
            true
        ],
        [
            'application/manifest+json',
            true
        ]
    ]);
    it('determines if a mime type has text content', function() {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = TEST_CASES[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), mimeType = _step_value[0], expectedResult = _step_value[1];
                assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.MimeType.isTextType(mimeType), expectedResult);
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
    });
}); //# sourceMappingURL=MimeType.test.js.map


}),

}]);