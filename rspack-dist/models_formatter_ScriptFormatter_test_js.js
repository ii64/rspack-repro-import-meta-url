"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_formatter_ScriptFormatter_test_js"], {
"./models/formatter/ScriptFormatter.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _formatter_formatter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../formatter/formatter.js */ "./models/formatter/formatter.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}


describe('ScriptFormatter', function() {
    var indentString = '  ';
    it('can format a HTML document', /*#__PURE__*/ _async_to_generator(function() {
        var formattedContent;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _formatter_formatter_js__WEBPACK_IMPORTED_MODULE_1__.ScriptFormatter.format(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeType('text/html'), 'text/html', '<html><head></head><body></body></html>', indentString)
                    ];
                case 1:
                    formattedContent = _state.sent().formattedContent;
                    assert.strictEqual(formattedContent, "<html>\n  <head></head>\n  <body></body>\n</html>\n");
                    return [
                        2
                    ];
            }
        });
    }));
    it('can map original locations to formatted locations for HTML documents', /*#__PURE__*/ _async_to_generator(function() {
        var formattedMapping;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _formatter_formatter_js__WEBPACK_IMPORTED_MODULE_1__.ScriptFormatter.format(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeType('text/html'), 'text/html', '<html><head></head><body></body></html>', indentString)
                    ];
                case 1:
                    formattedMapping = _state.sent().formattedMapping;
                    // The start of <head>
                    assert.deepEqual(formattedMapping.originalToFormatted(0, 6), [
                        1,
                        2
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can map original lines to formatted locations for HTML documents', /*#__PURE__*/ _async_to_generator(function() {
        var formattedMapping;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _formatter_formatter_js__WEBPACK_IMPORTED_MODULE_1__.ScriptFormatter.format(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeType('text/html'), 'text/html', "<html><head>\n</head><body></body></html>", indentString)
                    ];
                case 1:
                    formattedMapping = _state.sent().formattedMapping;
                    // The start of </head>
                    assert.deepEqual(formattedMapping.originalToFormatted(1), [
                        1,
                        8
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can map formatted locations to original locations for HTML documents', /*#__PURE__*/ _async_to_generator(function() {
        var formattedMapping;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _formatter_formatter_js__WEBPACK_IMPORTED_MODULE_1__.ScriptFormatter.format(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeType('text/html'), 'text/html', '<html><head></head><body></body></html>', indentString)
                    ];
                case 1:
                    formattedMapping = _state.sent().formattedMapping;
                    // The start of <head>
                    assert.deepEqual(formattedMapping.formattedToOriginal(1, 2), [
                        0,
                        6
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can map formatted lines to original locations for HTML documents', /*#__PURE__*/ _async_to_generator(function() {
        var formattedMapping;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _formatter_formatter_js__WEBPACK_IMPORTED_MODULE_1__.ScriptFormatter.format(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeType('text/html'), 'text/html', '<html><head></head><body></body></html>', indentString)
                    ];
                case 1:
                    formattedMapping = _state.sent().formattedMapping;
                    // The start of <head>
                    assert.deepEqual(formattedMapping.formattedToOriginal(1), [
                        0,
                        6
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    describe('for documents that cant be formatted', function() {
        // Technically we can format SVG files, but for this test we pretend its
        // mimetype is an image, which we consider unformattable.
        var originalContent = '<svg>\n  <rect x="10" y="-10" /></svg>';
        var mimeType = 'image/svg';
        var resourceType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeType(mimeType);
        it('returns the original content', /*#__PURE__*/ _async_to_generator(function() {
            var formattedContent;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _formatter_formatter_js__WEBPACK_IMPORTED_MODULE_1__.ScriptFormatter.format(resourceType, mimeType, originalContent, indentString)
                        ];
                    case 1:
                        formattedContent = _state.sent().formattedContent;
                        assert.deepEqual(formattedContent, originalContent);
                        return [
                            2
                        ];
                }
            });
        }));
        it('maps to the same locations from formatted locations', /*#__PURE__*/ _async_to_generator(function() {
            var formattedMapping;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _formatter_formatter_js__WEBPACK_IMPORTED_MODULE_1__.ScriptFormatter.format(resourceType, mimeType, originalContent, indentString)
                        ];
                    case 1:
                        formattedMapping = _state.sent().formattedMapping;
                        assert.deepEqual(formattedMapping.formattedToOriginal(1, 2), [
                            1,
                            2
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('defaults column number to zero from formatted locations', /*#__PURE__*/ _async_to_generator(function() {
            var formattedMapping;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _formatter_formatter_js__WEBPACK_IMPORTED_MODULE_1__.ScriptFormatter.format(resourceType, mimeType, originalContent, indentString)
                        ];
                    case 1:
                        formattedMapping = _state.sent().formattedMapping;
                        assert.deepEqual(formattedMapping.formattedToOriginal(1), [
                            1,
                            0
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('maps to the same locations from original locations', /*#__PURE__*/ _async_to_generator(function() {
            var formattedMapping;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _formatter_formatter_js__WEBPACK_IMPORTED_MODULE_1__.ScriptFormatter.format(resourceType, mimeType, originalContent, indentString)
                        ];
                    case 1:
                        formattedMapping = _state.sent().formattedMapping;
                        assert.deepEqual(formattedMapping.originalToFormatted(1, 4), [
                            1,
                            4
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('defaults column number to zero from original locations', /*#__PURE__*/ _async_to_generator(function() {
            var formattedMapping;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _formatter_formatter_js__WEBPACK_IMPORTED_MODULE_1__.ScriptFormatter.format(resourceType, mimeType, originalContent, indentString)
                        ];
                    case 1:
                        formattedMapping = _state.sent().formattedMapping;
                        assert.deepEqual(formattedMapping.originalToFormatted(1), [
                            1,
                            0
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=ScriptFormatter.test.js.map


}),

}]);