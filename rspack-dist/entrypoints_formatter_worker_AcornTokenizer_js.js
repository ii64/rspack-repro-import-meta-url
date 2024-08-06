"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["entrypoints_formatter_worker_AcornTokenizer_js"], {
"./entrypoints/formatter_worker/AcornTokenizer.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AcornTokenizer: function() { return AcornTokenizer; },
  ECMA_VERSION: function() { return ECMA_VERSION; }
});
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../third_party/acorn/acorn.js */ "./third_party/acorn/acorn.js");
// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _class_apply_descriptor_update(receiver, descriptor) {
    if (descriptor.set) {
        if (!descriptor.get) {
            throw new TypeError("attempted to read set only private field");
        }
        if (!("__destrWrapper" in descriptor)) {
            descriptor.__destrWrapper = {
                set value (v){
                    descriptor.set.call(receiver, v);
                },
                get value () {
                    return descriptor.get.call(receiver);
                }
            };
        }
        return descriptor.__destrWrapper;
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        return descriptor;
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
}
function _class_private_field_update(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "update");
    return _class_apply_descriptor_update(receiver, descriptor);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}



var _textCursor = /*#__PURE__*/ new WeakMap(), _tokenLineStartInternal = /*#__PURE__*/ new WeakMap(), _tokenLineEndInternal = /*#__PURE__*/ new WeakMap(), _tokens = /*#__PURE__*/ new WeakMap(), _idx = /*#__PURE__*/ new WeakMap();
/**
 * The tokenizer in Acorn does not allow you to peek into the next token.
 * We use the peekToken method to determine when to stop formatting a
 * particular block of code.
 *
 * To remedy the situation, we implement the peeking of tokens ourselves.
 * To do so, whenever we call `nextToken`, we already retrieve the token
 * after it (in `bufferedToken`), so that `_peekToken` can check if there
 * is more work to do.
 *
 * There are 2 catches:
 *
 * 1. in the constructor we need to start the initialize the buffered token,
 *    such that `peekToken` on the first call is able to retrieve it. However,
 * 2. comments and tokens can arrive intermixed from the tokenizer. This usually
 *    happens when comments are the first comments of a file. In the scenario that
 *    the first comment in a file is a line comment attached to a token, we first
 *    receive the token and after that we receive the comment. However, when tokenizing
 *    we should reverse the order and return the comment, before the token.
 *
 * All that is to say that the `bufferedToken` is only used for *true* tokens.
 * We mimic comments to be tokens to fix the reordering issue, but we store these
 * separately to keep track of them. Any call to `nextTokenInternal` will figure
 * out whether the next token should be the preceding comment or not.
 */ var AcornTokenizer = /*#__PURE__*/ function() {
    "use strict";
    function AcornTokenizer(content, tokens) {
        _class_call_check(this, AcornTokenizer);
        _class_private_field_init(this, _textCursor, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _tokenLineStartInternal, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _tokenLineEndInternal, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _tokens, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _idx, {
            writable: true,
            value: 0
        });
        _class_private_field_set(this, _tokens, tokens);
        var contentLineEndings = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.findLineEndingIndexes(content);
        _class_private_field_set(this, _textCursor, new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__.TextCursor.TextCursor(contentLineEndings));
        _class_private_field_set(this, _tokenLineStartInternal, 0);
        _class_private_field_set(this, _tokenLineEndInternal, 0);
    }
    _create_class(AcornTokenizer, [
        {
            key: "nextToken",
            value: function nextToken() {
                var token = _class_private_field_get(this, _tokens)[_class_private_field_update(this, _idx).value++];
                if (!token || token.type === _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.eof) {
                    return null;
                }
                _class_private_field_get(this, _textCursor).advance(token.start);
                _class_private_field_set(this, _tokenLineStartInternal, _class_private_field_get(this, _textCursor).lineNumber());
                _class_private_field_get(this, _textCursor).advance(token.end);
                _class_private_field_set(this, _tokenLineEndInternal, _class_private_field_get(this, _textCursor).lineNumber());
                return token;
            }
        },
        {
            key: "peekToken",
            value: function peekToken() {
                var token = _class_private_field_get(this, _tokens)[_class_private_field_get(this, _idx)];
                if (!token || token.type === _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.eof) {
                    return null;
                }
                return token;
            }
        },
        {
            key: "tokenLineStart",
            value: function tokenLineStart() {
                return _class_private_field_get(this, _tokenLineStartInternal);
            }
        },
        {
            key: "tokenLineEnd",
            value: function tokenLineEnd() {
                return _class_private_field_get(this, _tokenLineEndInternal);
            }
        }
    ], [
        {
            key: "punctuator",
            value: function punctuator(token, values) {
                return token.type !== _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.num && token.type !== _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.regexp && token.type !== _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.string && token.type !== _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.name && !token.type.keyword && (!values || token.type.label.length === 1 && values.indexOf(token.type.label) !== -1);
            }
        },
        {
            key: "keyword",
            value: function keyword(token, keyword) {
                return Boolean(token.type.keyword) && token.type !== _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes._true && token.type !== _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes._false && token.type !== _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes._null && (!keyword || token.type.keyword === keyword);
            }
        },
        {
            key: "identifier",
            value: function identifier(token, identifier) {
                return token.type === _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.name && (!identifier || token.value === identifier);
            }
        },
        {
            key: "arrowIdentifier",
            value: function arrowIdentifier(token, identifier) {
                return token.type === _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.arrow && (!identifier || token.type.label === identifier);
            }
        },
        {
            key: "lineComment",
            value: function lineComment(token) {
                return token.type === 'Line';
            }
        },
        {
            key: "blockComment",
            value: function blockComment(token) {
                return token.type === 'Block';
            }
        }
    ]);
    return AcornTokenizer;
}();
var ECMA_VERSION = 2022; //# sourceMappingURL=AcornTokenizer.js.map


}),
"./third_party/acorn/acorn.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Node: function() { return /* reexport safe */ _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.Node; },
  Parser: function() { return Parser; },
  SourceLocation: function() { return /* reexport safe */ _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.SourceLocation; },
  Token: function() { return /* reexport safe */ _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.Token; },
  defaultOptions: function() { return /* reexport safe */ _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.defaultOptions; },
  getLineInfo: function() { return /* reexport safe */ _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.getLineInfo; },
  isNewLine: function() { return /* reexport safe */ _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.isNewLine; },
  lineBreak: function() { return /* reexport safe */ _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.lineBreak; },
  lineBreakG: function() { return /* reexport safe */ _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.lineBreakG; },
  parse: function() { return parse; },
  tokContexts: function() { return /* reexport safe */ _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.tokContexts; },
  tokTypes: function() { return /* reexport safe */ _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.tokTypes; },
  tokenizer: function() { return tokenizer; }
});
/* harmony import */var _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package/dist/acorn.mjs */ "./third_party/acorn/package/dist/acorn.mjs");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


var Parser = _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser;
var tokenizer = _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser.tokenizer.bind(_package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser);
var parse = _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser.parse.bind(_package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser); //# sourceMappingURL=acorn.js.map


}),

}]);