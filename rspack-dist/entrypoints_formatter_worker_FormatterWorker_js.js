"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["entrypoints_formatter_worker_FormatterWorker_js"], {
"./entrypoints/formatter_worker/CSSFormatter.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CSSFormatter: function() { return CSSFormatter; }
});
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _FormatterWorker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormatterWorker.js */ "./entrypoints/formatter_worker/FormatterWorker.js");
/*
 * Copyright (C) 2013 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ function _check_private_redeclaration(obj, privateCollection) {
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
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}
function _class_private_method_init(obj, privateSet) {
    _check_private_redeclaration(obj, privateSet);
    privateSet.add(obj);
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


var cssTrimEnd = function(tokenValue) {
    // https://drafts.csswg.org/css-syntax/#whitespace
    var re = /(?:\r?\n|[\t\f\r ])+$/g;
    return tokenValue.replace(re, '');
};
var _builder = /*#__PURE__*/ new WeakMap(), _toOffset = /*#__PURE__*/ new WeakMap(), _fromOffset = /*#__PURE__*/ new WeakMap(), _lineEndings = /*#__PURE__*/ new WeakMap(), _lastLine = /*#__PURE__*/ new WeakMap(), _state = /*#__PURE__*/ new WeakMap(), _tokenCallback = /*#__PURE__*/ new WeakSet();
var CSSFormatter = /*#__PURE__*/ function() {
    "use strict";
    function CSSFormatter(builder) {
        _class_call_check(this, CSSFormatter);
        _class_private_method_init(this, _tokenCallback);
        _class_private_field_init(this, _builder, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _toOffset, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _fromOffset, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _lineEndings, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _lastLine, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _state, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _builder, builder);
        _class_private_field_set(this, _lastLine, -1);
        _class_private_field_set(this, _state, {
            eatWhitespace: undefined,
            seenProperty: undefined,
            inPropertyValue: undefined,
            afterClosingBrace: undefined
        });
    }
    _create_class(CSSFormatter, [
        {
            key: "format",
            value: function format(text, lineEndings, fromOffset, toOffset) {
                _class_private_field_set(this, _lineEndings, lineEndings);
                _class_private_field_set(this, _fromOffset, fromOffset);
                _class_private_field_set(this, _toOffset, toOffset);
                _class_private_field_set(this, _state, {
                    eatWhitespace: undefined,
                    seenProperty: undefined,
                    inPropertyValue: undefined,
                    afterClosingBrace: undefined
                });
                _class_private_field_set(this, _lastLine, -1);
                var tokenize = (0,_FormatterWorker_js__WEBPACK_IMPORTED_MODULE_1__.createTokenizer)('text/css');
                var oldEnforce = _class_private_field_get(this, _builder).setEnforceSpaceBetweenWords(false);
                tokenize(text.substring(_class_private_field_get(this, _fromOffset), _class_private_field_get(this, _toOffset)), _class_private_method_get(this, _tokenCallback, tokenCallback).bind(this));
                _class_private_field_get(this, _builder).setEnforceSpaceBetweenWords(oldEnforce);
            }
        }
    ]);
    return CSSFormatter;
} //# sourceMappingURL=CSSFormatter.js.map
();
function tokenCallback(token, type, startPosition) {
    startPosition += _class_private_field_get(this, _fromOffset);
    var startLine = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.lowerBound(_class_private_field_get(this, _lineEndings), startPosition, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.DEFAULT_COMPARATOR);
    if (startLine !== _class_private_field_get(this, _lastLine)) {
        _class_private_field_get(this, _state).eatWhitespace = true;
    }
    if (type && (/^property/.test(type) || /^variable-2/.test(type)) && !_class_private_field_get(this, _state).inPropertyValue) {
        _class_private_field_get(this, _state).seenProperty = true;
    }
    _class_private_field_set(this, _lastLine, startLine);
    // https://drafts.csswg.org/css-syntax/#whitespace
    var isWhitespace = /^(?:\r?\n|[\t\f\r ])+$/.test(token);
    if (isWhitespace) {
        if (!_class_private_field_get(this, _state).eatWhitespace) {
            _class_private_field_get(this, _builder).addSoftSpace();
        }
        return;
    }
    _class_private_field_get(this, _state).eatWhitespace = false;
    if (token === '\n') {
        return;
    }
    if (token !== '}') {
        if (_class_private_field_get(this, _state).afterClosingBrace) {
            _class_private_field_get(this, _builder).addNewLine(true);
        }
        _class_private_field_get(this, _state).afterClosingBrace = false;
    }
    if (token === '}') {
        if (_class_private_field_get(this, _state).inPropertyValue) {
            _class_private_field_get(this, _builder).addNewLine();
        }
        _class_private_field_get(this, _builder).decreaseNestingLevel();
        _class_private_field_get(this, _state).afterClosingBrace = true;
        _class_private_field_get(this, _state).inPropertyValue = false;
    } else if (token === ':' && !_class_private_field_get(this, _state).inPropertyValue && _class_private_field_get(this, _state).seenProperty) {
        _class_private_field_get(this, _builder).addToken(token, startPosition);
        _class_private_field_get(this, _builder).addSoftSpace();
        _class_private_field_get(this, _state).eatWhitespace = true;
        _class_private_field_get(this, _state).inPropertyValue = true;
        _class_private_field_get(this, _state).seenProperty = false;
        return;
    } else if (token === '{') {
        _class_private_field_get(this, _builder).addSoftSpace();
        _class_private_field_get(this, _builder).addToken(token, startPosition);
        _class_private_field_get(this, _builder).addNewLine();
        _class_private_field_get(this, _builder).increaseNestingLevel();
        return;
    }
    _class_private_field_get(this, _builder).addToken(cssTrimEnd(token), startPosition);
    if (type === 'comment' && !_class_private_field_get(this, _state).inPropertyValue && !_class_private_field_get(this, _state).seenProperty) {
        _class_private_field_get(this, _builder).addNewLine();
    }
    if (token === ';' && _class_private_field_get(this, _state).inPropertyValue) {
        _class_private_field_get(this, _state).inPropertyValue = false;
        _class_private_field_get(this, _builder).addNewLine();
    } else if (token === '}') {
        _class_private_field_get(this, _builder).addNewLine();
    }
}


}),
"./entrypoints/formatter_worker/FormatterWorker.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AbortTokenization: function() { return AbortTokenization; },
  createTokenizer: function() { return createTokenizer; },
  evaluatableJavaScriptSubstring: function() { return evaluatableJavaScriptSubstring; },
  format: function() { return format; },
  substituteExpression: function() { return /* reexport safe */ _Substitute_js__WEBPACK_IMPORTED_MODULE_10__.substituteExpression; }
});
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../third_party/acorn/acorn.js */ "./third_party/acorn/acorn.js");
/* harmony import */var _AcornTokenizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AcornTokenizer.js */ "./entrypoints/formatter_worker/AcornTokenizer.js");
/* harmony import */var _CSSFormatter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CSSFormatter.js */ "./entrypoints/formatter_worker/CSSFormatter.js");
/* harmony import */var _FormattedContentBuilder_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormattedContentBuilder.js */ "./entrypoints/formatter_worker/FormattedContentBuilder.js");
/* harmony import */var _HTMLFormatter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HTMLFormatter.js */ "./entrypoints/formatter_worker/HTMLFormatter.js");
/* harmony import */var _IdentityFormatter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./IdentityFormatter.js */ "./entrypoints/formatter_worker/IdentityFormatter.js");
/* harmony import */var _JavaScriptFormatter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./JavaScriptFormatter.js */ "./entrypoints/formatter_worker/JavaScriptFormatter.js");
/* harmony import */var _JSONFormatter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./JSONFormatter.js */ "./entrypoints/formatter_worker/JSONFormatter.js");
/* harmony import */var _Substitute_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Substitute.js */ "./entrypoints/formatter_worker/Substitute.js");
/*
 * Copyright (C) 2011 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ 










function createTokenizer(mimeType) {
    var mode = CodeMirror.getMode({
        indentUnit: 2
    }, mimeType);
    var state = CodeMirror.startState(mode);
    if (!mode || mode.name === 'null') {
        throw new Error("Could not find CodeMirror mode for MimeType: ".concat(mimeType));
    }
    if (!mode.token) {
        throw new Error("Could not find CodeMirror mode with token method: ".concat(mimeType));
    }
    return function(line, callback) {
        var stream = new CodeMirror.StringStream(line);
        while(!stream.eol()){
            var style = mode.token(stream, state);
            var value = stream.current();
            if (callback(value, style, stream.start, stream.start + value.length) === AbortTokenization) {
                return;
            }
            stream.start = stream.pos;
        }
    };
}
var AbortTokenization = {};
function evaluatableJavaScriptSubstring(content) {
    try {
        var tokenizer = _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokenizer(content, {
            ecmaVersion: _AcornTokenizer_js__WEBPACK_IMPORTED_MODULE_3__.ECMA_VERSION
        });
        var token = tokenizer.getToken();
        while(_AcornTokenizer_js__WEBPACK_IMPORTED_MODULE_3__.AcornTokenizer.punctuator(token)){
            token = tokenizer.getToken();
        }
        var startIndex = token.start;
        var endIndex = token.end;
        while(token.type !== _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.eof){
            var isIdentifier = token.type === _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.name || token.type === _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.privateId;
            var isThis = _AcornTokenizer_js__WEBPACK_IMPORTED_MODULE_3__.AcornTokenizer.keyword(token, 'this');
            var isString = token.type === _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.string;
            if (!isThis && !isIdentifier && !isString) {
                break;
            }
            endIndex = token.end;
            token = tokenizer.getToken();
            while(_AcornTokenizer_js__WEBPACK_IMPORTED_MODULE_3__.AcornTokenizer.punctuator(token, '[')){
                var openBracketCounter = 0;
                do {
                    if (_AcornTokenizer_js__WEBPACK_IMPORTED_MODULE_3__.AcornTokenizer.punctuator(token, '[')) {
                        ++openBracketCounter;
                    }
                    token = tokenizer.getToken();
                    if (_AcornTokenizer_js__WEBPACK_IMPORTED_MODULE_3__.AcornTokenizer.punctuator(token, ']')) {
                        if (--openBracketCounter === 0) {
                            endIndex = token.end;
                            token = tokenizer.getToken();
                            break;
                        }
                    }
                }while (token.type !== _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.eof);
            }
            if (!_AcornTokenizer_js__WEBPACK_IMPORTED_MODULE_3__.AcornTokenizer.punctuator(token, '.')) {
                break;
            }
            token = tokenizer.getToken();
        }
        return content.substring(startIndex, endIndex);
    } catch (e) {
        console.error(e);
        return '';
    }
}
function format(mimeType, text, indentString) {
    // Default to a 4-space indent.
    indentString = indentString || '    ';
    var result;
    var builder = new _FormattedContentBuilder_js__WEBPACK_IMPORTED_MODULE_5__.FormattedContentBuilder(indentString);
    var lineEndings = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.findLineEndingIndexes(text);
    try {
        switch(mimeType){
            case "text/html" /* FormattableMediaTypes.TEXT_HTML */ :
                {
                    var formatter = new _HTMLFormatter_js__WEBPACK_IMPORTED_MODULE_6__.HTMLFormatter(builder);
                    formatter.format(text, lineEndings);
                    break;
                }
            case "text/css" /* FormattableMediaTypes.TEXT_CSS */ :
                {
                    var formatter1 = new _CSSFormatter_js__WEBPACK_IMPORTED_MODULE_4__.CSSFormatter(builder);
                    formatter1.format(text, lineEndings, 0, text.length);
                    break;
                }
            case "application/javascript" /* FormattableMediaTypes.APPLICATION_JAVASCRIPT */ :
            case "text/javascript" /* FormattableMediaTypes.TEXT_JAVASCRIPT */ :
                {
                    var formatter2 = new _JavaScriptFormatter_js__WEBPACK_IMPORTED_MODULE_8__.JavaScriptFormatter(builder);
                    formatter2.format(text, lineEndings, 0, text.length);
                    break;
                }
            case "application/json" /* FormattableMediaTypes.APPLICATION_JSON */ :
            case "application/manifest+json" /* FormattableMediaTypes.APPLICATION_MANIFEST_JSON */ :
                {
                    var formatter3 = new _JSONFormatter_js__WEBPACK_IMPORTED_MODULE_9__.JSONFormatter(builder);
                    formatter3.format(text, lineEndings, 0, text.length);
                    break;
                }
            default:
                {
                    var formatter4 = new _IdentityFormatter_js__WEBPACK_IMPORTED_MODULE_7__.IdentityFormatter(builder);
                    formatter4.format(text, lineEndings, 0, text.length);
                }
        }
        result = {
            mapping: builder.mapping,
            content: builder.content()
        };
    } catch (e) {
        console.error(e);
        result = {
            mapping: {
                original: [
                    0
                ],
                formatted: [
                    0
                ]
            },
            content: text
        };
    }
    return result;
}
(function disableLoggingForTest() {
    if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.queryParam('test')) {
        console.error = function() {
            return undefined;
        };
    }
})();
 //# sourceMappingURL=FormatterWorker.js.map


}),
"./entrypoints/formatter_worker/HTMLFormatter.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  HTMLFormatter: function() { return HTMLFormatter; },
  HTMLModel: function() { return HTMLModel; }
});
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _CSSFormatter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSFormatter.js */ "./entrypoints/formatter_worker/CSSFormatter.js");
/* harmony import */var _FormatterWorker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormatterWorker.js */ "./entrypoints/formatter_worker/FormatterWorker.js");
/* harmony import */var _JavaScriptFormatter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./JavaScriptFormatter.js */ "./entrypoints/formatter_worker/JavaScriptFormatter.js");
/* harmony import */var _JSONFormatter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./JSONFormatter.js */ "./entrypoints/formatter_worker/JSONFormatter.js");
// Copyright 2016 The Chromium Authors. All rights reserved.
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
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}
function _class_private_method_init(obj, privateSet) {
    _check_private_redeclaration(obj, privateSet);
    privateSet.add(obj);
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}





var _builder = /*#__PURE__*/ new WeakMap(), _jsFormatter = /*#__PURE__*/ new WeakMap(), _jsonFormatter = /*#__PURE__*/ new WeakMap(), _cssFormatter = /*#__PURE__*/ new WeakMap(), _text = /*#__PURE__*/ new WeakMap(), _lineEndings = /*#__PURE__*/ new WeakMap(), _model = /*#__PURE__*/ new WeakMap(), _formatTokensTill = /*#__PURE__*/ new WeakSet(), _walk = /*#__PURE__*/ new WeakSet(), _beforeOpenTag = /*#__PURE__*/ new WeakSet(), _afterOpenTag = /*#__PURE__*/ new WeakSet(), _beforeCloseTag = /*#__PURE__*/ new WeakSet(), _afterCloseTag = /*#__PURE__*/ new WeakSet(), _formatToken = /*#__PURE__*/ new WeakSet();
var HTMLFormatter = /*#__PURE__*/ function() {
    "use strict";
    function HTMLFormatter(builder) {
        _class_call_check(this, HTMLFormatter);
        _class_private_method_init(this, _formatTokensTill);
        _class_private_method_init(this, _walk);
        _class_private_method_init(this, _beforeOpenTag);
        _class_private_method_init(this, _afterOpenTag);
        _class_private_method_init(this, _beforeCloseTag);
        _class_private_method_init(this, _afterCloseTag);
        _class_private_method_init(this, _formatToken);
        _class_private_field_init(this, _builder, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _jsFormatter, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _jsonFormatter, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _cssFormatter, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _text, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _lineEndings, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _model, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _builder, builder);
        _class_private_field_set(this, _jsFormatter, new _JavaScriptFormatter_js__WEBPACK_IMPORTED_MODULE_3__.JavaScriptFormatter(builder));
        _class_private_field_set(this, _jsonFormatter, new _JSONFormatter_js__WEBPACK_IMPORTED_MODULE_4__.JSONFormatter(builder));
        _class_private_field_set(this, _cssFormatter, new _CSSFormatter_js__WEBPACK_IMPORTED_MODULE_1__.CSSFormatter(builder));
    }
    _create_class(HTMLFormatter, [
        {
            key: "format",
            value: function format(text, lineEndings) {
                _class_private_field_set(this, _text, text);
                _class_private_field_set(this, _lineEndings, lineEndings);
                _class_private_field_set(this, _model, new HTMLModel(text));
                _class_private_method_get(this, _walk, walk).call(this, _class_private_field_get(this, _model).document());
            }
        }
    ]);
    return HTMLFormatter;
}();
function formatTokensTill(element, offset) {
    if (!_class_private_field_get(this, _model)) {
        return;
    }
    var nextToken = _class_private_field_get(this, _model).peekToken();
    while(nextToken && nextToken.startOffset < offset){
        var token = _class_private_field_get(this, _model).nextToken();
        _class_private_method_get(this, _formatToken, formatToken).call(this, element, token);
        nextToken = _class_private_field_get(this, _model).peekToken();
    }
}
function walk(element) {
    if (!element.openTag || !element.closeTag) {
        throw new Error('Element is missing open or close tag');
    }
    if (element.parent) {
        _class_private_method_get(this, _formatTokensTill, formatTokensTill).call(this, element.parent, element.openTag.startOffset);
    }
    _class_private_method_get(this, _beforeOpenTag, beforeOpenTag).call(this, element);
    _class_private_method_get(this, _formatTokensTill, formatTokensTill).call(this, element, element.openTag.endOffset);
    _class_private_method_get(this, _afterOpenTag, afterOpenTag).call(this, element);
    for(var i = 0; i < element.children.length; ++i){
        _class_private_method_get(this, _walk, walk).call(this, element.children[i]);
    }
    _class_private_method_get(this, _formatTokensTill, formatTokensTill).call(this, element, element.closeTag.startOffset);
    _class_private_method_get(this, _beforeCloseTag, beforeCloseTag).call(this, element);
    _class_private_method_get(this, _formatTokensTill, formatTokensTill).call(this, element, element.closeTag.endOffset);
    _class_private_method_get(this, _afterCloseTag, afterCloseTag).call(this, element);
}
function beforeOpenTag(element) {
    if (!_class_private_field_get(this, _model)) {
        return;
    }
    if (!element.children.length || element === _class_private_field_get(this, _model).document()) {
        return;
    }
    _class_private_field_get(this, _builder).addNewLine();
}
function afterOpenTag(element) {
    if (!_class_private_field_get(this, _model)) {
        return;
    }
    if (!element.children.length || element === _class_private_field_get(this, _model).document()) {
        return;
    }
    _class_private_field_get(this, _builder).increaseNestingLevel();
    _class_private_field_get(this, _builder).addNewLine();
}
function beforeCloseTag(element) {
    if (!_class_private_field_get(this, _model)) {
        return;
    }
    if (!element.children.length || element === _class_private_field_get(this, _model).document()) {
        return;
    }
    _class_private_field_get(this, _builder).decreaseNestingLevel();
    _class_private_field_get(this, _builder).addNewLine();
}
function afterCloseTag(_element) {
    _class_private_field_get(this, _builder).addNewLine();
}
function formatToken(element, token) {
    if (_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.isWhitespace(token.value)) {
        return;
    }
    if (hasTokenInSet(token.type, 'comment') || hasTokenInSet(token.type, 'meta')) {
        _class_private_field_get(this, _builder).addNewLine();
        _class_private_field_get(this, _builder).addToken(token.value.trim(), token.startOffset);
        _class_private_field_get(this, _builder).addNewLine();
        return;
    }
    if (!element.openTag || !element.closeTag) {
        return;
    }
    var isBodyToken = element.openTag.endOffset <= token.startOffset && token.startOffset < element.closeTag.startOffset;
    if (isBodyToken && element.name === 'style') {
        _class_private_field_get(this, _builder).addNewLine();
        _class_private_field_get(this, _builder).increaseNestingLevel();
        _class_private_field_get(this, _cssFormatter).format(_class_private_field_get(this, _text) || '', _class_private_field_get(this, _lineEndings) || [], token.startOffset, token.endOffset);
        _class_private_field_get(this, _builder).decreaseNestingLevel();
        return;
    }
    if (isBodyToken && element.name === 'script') {
        _class_private_field_get(this, _builder).addNewLine();
        _class_private_field_get(this, _builder).increaseNestingLevel();
        if (scriptTagIsJavaScript(element)) {
            _class_private_field_get(this, _jsFormatter).format(_class_private_field_get(this, _text) || '', _class_private_field_get(this, _lineEndings) || [], token.startOffset, token.endOffset);
        } else if (scriptTagIsJSON(element)) {
            _class_private_field_get(this, _jsonFormatter).format(_class_private_field_get(this, _text) || '', _class_private_field_get(this, _lineEndings) || [], token.startOffset, token.endOffset);
        } else {
            _class_private_field_get(this, _builder).addToken(token.value, token.startOffset);
            _class_private_field_get(this, _builder).addNewLine();
        }
        _class_private_field_get(this, _builder).decreaseNestingLevel();
        return;
    }
    if (!isBodyToken && hasTokenInSet(token.type, 'attribute')) {
        _class_private_field_get(this, _builder).addSoftSpace();
    }
    _class_private_field_get(this, _builder).addToken(token.value, token.startOffset);
}
function scriptTagIsJavaScript(element) {
    if (!element.openTag) {
        return true;
    }
    if (!element.openTag.attributes.has('type')) {
        return true;
    }
    var type = element.openTag.attributes.get('type');
    if (!type) {
        return true;
    }
    type = type.toLowerCase();
    var isWrappedInQuotes = /^(["\'])(.*)\1$/.exec(type.trim());
    if (isWrappedInQuotes) {
        type = isWrappedInQuotes[2];
    }
    return [
        'application/ecmascript',
        'application/javascript',
        'application/x-ecmascript',
        'application/x-javascript',
        'module',
        'text/ecmascript',
        'text/javascript',
        'text/javascript1.0',
        'text/javascript1.1',
        'text/javascript1.2',
        'text/javascript1.3',
        'text/javascript1.4',
        'text/javascript1.5',
        'text/jscript',
        'text/livescript',
        'text/x-ecmascript',
        'text/x-javascript'
    ].includes(type.trim());
}
function scriptTagIsJSON(element) {
    if (!element.openTag) {
        return false;
    }
    var type = element.openTag.attributes.get('type');
    if (!type) {
        return false;
    }
    type = type.toLowerCase();
    var isWrappedInQuotes = /^(["\'])(.*)\1$/.exec(type.trim());
    if (isWrappedInQuotes) {
        type = isWrappedInQuotes[2];
    }
    var isSubtype = /^application\/\w+\+json$/.exec(type.trim());
    if (isSubtype) {
        type = 'application/json';
    }
    return [
        'application/json',
        'importmap',
        'speculationrules'
    ].includes(type.trim());
}
function hasTokenInSet(tokenTypes, type) {
    // We prefix the CodeMirror HTML tokenizer with the xml- prefix
    // in a full version. When running in a worker context, this
    // prefix is not appended, as the global is only overridden
    // in CodeMirrorTextEditor.js.
    return tokenTypes.has(type) || tokenTypes.has("xml-".concat(type));
}
var _state = /*#__PURE__*/ new WeakMap(), _documentInternal = /*#__PURE__*/ new WeakMap(), _stack = /*#__PURE__*/ new WeakMap(), _tokens = /*#__PURE__*/ new WeakMap(), _tokenIndex = /*#__PURE__*/ new WeakMap(), _attributes = /*#__PURE__*/ new WeakMap(), _attributeName = /*#__PURE__*/ new WeakMap(), _tagName = /*#__PURE__*/ new WeakMap(), _isOpenTag = /*#__PURE__*/ new WeakMap(), _tagStartOffset = /*#__PURE__*/ new WeakMap(), _tagEndOffset = /*#__PURE__*/ new WeakMap(), _build = /*#__PURE__*/ new WeakSet(), _updateDOM = /*#__PURE__*/ new WeakSet(), _onStartTag = /*#__PURE__*/ new WeakSet(), _onEndTag = /*#__PURE__*/ new WeakSet(), _onTagComplete = /*#__PURE__*/ new WeakSet(), _popElement = /*#__PURE__*/ new WeakSet(), _pushElement = /*#__PURE__*/ new WeakSet();
var HTMLModel = /*#__PURE__*/ function() {
    "use strict";
    function HTMLModel(text) {
        _class_call_check(this, HTMLModel);
        _class_private_method_init(this, _build);
        _class_private_method_init(this, _updateDOM);
        _class_private_method_init(this, _onStartTag);
        _class_private_method_init(this, _onEndTag);
        _class_private_method_init(this, _onTagComplete);
        _class_private_method_init(this, _popElement);
        _class_private_method_init(this, _pushElement);
        _class_private_field_init(this, _state, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _documentInternal, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _stack, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _tokens, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _tokenIndex, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _attributes, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _attributeName, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _tagName, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _isOpenTag, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _tagStartOffset, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _tagEndOffset, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _state, "Initial" /* ParseState.Initial */ );
        _class_private_field_set(this, _documentInternal, new FormatterElement('document'));
        _class_private_field_get(this, _documentInternal).openTag = new Tag('document', 0, 0, new Map(), true, false);
        _class_private_field_get(this, _documentInternal).closeTag = new Tag('document', text.length, text.length, new Map(), false, false);
        _class_private_field_set(this, _stack, [
            _class_private_field_get(this, _documentInternal)
        ]);
        _class_private_field_set(this, _tokens, []);
        _class_private_field_set(this, _tokenIndex, 0);
        _class_private_method_get(this, _build, build).call(this, text);
        _class_private_field_set(this, _attributes, new Map());
        _class_private_field_set(this, _attributeName, '');
        _class_private_field_set(this, _tagName, '');
        _class_private_field_set(this, _isOpenTag, false);
    }
    _create_class(HTMLModel, [
        {
            key: "peekToken",
            value: function peekToken() {
                return _class_private_field_get(this, _tokenIndex) < _class_private_field_get(this, _tokens).length ? _class_private_field_get(this, _tokens)[_class_private_field_get(this, _tokenIndex)] : null;
            }
        },
        {
            key: "nextToken",
            value: function nextToken() {
                return _class_private_field_get(this, _tokens)[_class_private_field_update(this, _tokenIndex).value++];
            }
        },
        {
            key: "document",
            value: function document() {
                return _class_private_field_get(this, _documentInternal);
            }
        }
    ]);
    return HTMLModel;
}();
function build(text) {
    var _this = this;
    var tokenizer = (0,_FormatterWorker_js__WEBPACK_IMPORTED_MODULE_2__.createTokenizer)('text/html');
    var baseOffset = 0, lastOffset = 0;
    var pendingToken = null;
    var pushToken = function(token) {
        _class_private_field_get(_this, _tokens).push(token);
        _class_private_method_get(_this, _updateDOM, updateDOM).call(_this, token);
        var element = _class_private_field_get(_this, _stack)[_class_private_field_get(_this, _stack).length - 1];
        if (element && (element.name === 'script' || element.name === 'style') && element.openTag && element.openTag.endOffset === lastOffset) {
            return _FormatterWorker_js__WEBPACK_IMPORTED_MODULE_2__.AbortTokenization;
        }
        return;
    };
    var processToken = function(tokenValue, type, tokenStart, tokenEnd) {
        tokenStart += baseOffset;
        tokenEnd += baseOffset;
        lastOffset = tokenEnd;
        var tokenType = type ? new Set(type.split(' ')) : new Set();
        var token = new Token(tokenValue, tokenType, tokenStart, tokenEnd);
        // This is a pretty horrible work-around for two bugs in the CodeMirror 5 HTML
        // tokenizer, which aren't easy to fix because it shares this code with the
        // XML parser[^1], and which is also not actively maintained anymore. The
        // real fix here is to migrate off of CodeMirror 5 also for formatting and
        // pretty printing and use CodeMirror 6 instead, but that's a bigger
        // project.
        //
        // For now we ducktape the first problem by merging a '/' token
        // following a string token in the HTML formatter, which does the trick, and
        // also merging the error tokens for unescaped ampersands with text tokens
        // (where `type` is `null`) preceeding and following the error tokens.
        //
        // [^1]: https://github.com/codemirror/codemirror5/blob/742627a/mode/xml/xml.js#L137
        //
        if (pendingToken) {
            if (tokenValue === '/' && type === 'attribute' && pendingToken.type.has('string')) {
                token.startOffset = pendingToken.startOffset;
                token.value = "".concat(pendingToken.value).concat(tokenValue);
                token.type = pendingToken.type;
            } else if (tokenValue.startsWith('&') && type === 'error' && pendingToken.type.size === 0 || type === null && pendingToken.type.has('error')) {
                pendingToken.endOffset = token.endOffset;
                pendingToken.value += tokenValue;
                pendingToken.type = token.type;
                return;
            } else if (pushToken(pendingToken) === _FormatterWorker_js__WEBPACK_IMPORTED_MODULE_2__.AbortTokenization) {
                return _FormatterWorker_js__WEBPACK_IMPORTED_MODULE_2__.AbortTokenization;
            }
            pendingToken = null;
        }
        if (type === 'string' || type === null) {
            pendingToken = token;
            return;
        }
        return pushToken(token);
    };
    while(true){
        baseOffset = lastOffset;
        tokenizer(text.substring(lastOffset), processToken);
        if (pendingToken) {
            pushToken(pendingToken);
            pendingToken = null;
        }
        if (lastOffset >= text.length) {
            break;
        }
        var element = _class_private_field_get(this, _stack)[_class_private_field_get(this, _stack).length - 1];
        if (!element) {
            break;
        }
        while(true){
            lastOffset = text.indexOf('</', lastOffset);
            if (lastOffset === -1) {
                lastOffset = text.length;
                break;
            }
            if (text.substring(lastOffset + 2).toLowerCase().startsWith(element.name)) {
                break;
            }
            lastOffset += 2;
        }
        if (!element.openTag) {
            break;
        }
        var tokenStart = element.openTag.endOffset;
        var tokenEnd = lastOffset;
        var tokenValue = text.substring(tokenStart, tokenEnd);
        _class_private_field_get(this, _tokens).push(new Token(tokenValue, new Set(), tokenStart, tokenEnd));
    }
    while(_class_private_field_get(this, _stack).length > 1){
        var element1 = _class_private_field_get(this, _stack)[_class_private_field_get(this, _stack).length - 1];
        if (!element1) {
            break;
        }
        _class_private_method_get(this, _popElement, popElement).call(this, new Tag(element1.name, text.length, text.length, new Map(), false, false));
    }
}
function updateDOM(token) {
    var value = token.value;
    var type = token.type;
    switch(_class_private_field_get(this, _state)){
        case "Initial" /* ParseState.Initial */ :
            if (hasTokenInSet(type, 'bracket') && (value === '<' || value === '</')) {
                _class_private_method_get(this, _onStartTag, onStartTag).call(this, token);
                _class_private_field_set(this, _state, "Tag" /* ParseState.Tag */ );
            }
            return;
        case "Tag" /* ParseState.Tag */ :
            if (hasTokenInSet(type, 'tag') && !hasTokenInSet(type, 'bracket')) {
                _class_private_field_set(this, _tagName, value.trim().toLowerCase());
            } else if (hasTokenInSet(type, 'attribute')) {
                _class_private_field_set(this, _attributeName, value.trim().toLowerCase());
                _class_private_field_get(this, _attributes).set(_class_private_field_get(this, _attributeName), '');
                _class_private_field_set(this, _state, "AttributeName" /* ParseState.AttributeName */ );
            } else if (hasTokenInSet(type, 'bracket') && (value === '>' || value === '/>')) {
                _class_private_method_get(this, _onEndTag, onEndTag).call(this, token);
                _class_private_field_set(this, _state, "Initial" /* ParseState.Initial */ );
            }
            return;
        case "AttributeName" /* ParseState.AttributeName */ :
            if (!type.size && value === '=') {
                _class_private_field_set(this, _state, "AttributeValue" /* ParseState.AttributeValue */ );
            } else if (hasTokenInSet(type, 'bracket') && (value === '>' || value === '/>')) {
                _class_private_method_get(this, _onEndTag, onEndTag).call(this, token);
                _class_private_field_set(this, _state, "Initial" /* ParseState.Initial */ );
            }
            return;
        case "AttributeValue" /* ParseState.AttributeValue */ :
            if (hasTokenInSet(type, 'string')) {
                _class_private_field_get(this, _attributes).set(_class_private_field_get(this, _attributeName), value);
                _class_private_field_set(this, _state, "Tag" /* ParseState.Tag */ );
            } else if (hasTokenInSet(type, 'bracket') && (value === '>' || value === '/>')) {
                _class_private_method_get(this, _onEndTag, onEndTag).call(this, token);
                _class_private_field_set(this, _state, "Initial" /* ParseState.Initial */ );
            }
            return;
    }
}
function onStartTag(token) {
    _class_private_field_set(this, _tagName, '');
    _class_private_field_set(this, _tagStartOffset, token.startOffset);
    _class_private_field_set(this, _tagEndOffset, null);
    _class_private_field_set(this, _attributes, new Map());
    _class_private_field_set(this, _attributeName, '');
    _class_private_field_set(this, _isOpenTag, token.value === '<');
}
function onEndTag(token) {
    _class_private_field_set(this, _tagEndOffset, token.endOffset);
    var selfClosingTag = token.value === '/>' || SelfClosingTags.has(_class_private_field_get(this, _tagName));
    var tag = new Tag(_class_private_field_get(this, _tagName), _class_private_field_get(this, _tagStartOffset) || 0, _class_private_field_get(this, _tagEndOffset), _class_private_field_get(this, _attributes), _class_private_field_get(this, _isOpenTag), selfClosingTag);
    _class_private_method_get(this, _onTagComplete, onTagComplete).call(this, tag);
}
function onTagComplete(tag) {
    if (tag.isOpenTag) {
        var topElement = _class_private_field_get(this, _stack)[_class_private_field_get(this, _stack).length - 1];
        if (topElement) {
            var tagSet = AutoClosingTags.get(topElement.name);
            if (topElement !== _class_private_field_get(this, _documentInternal) && topElement.openTag && topElement.openTag.selfClosingTag) {
                _class_private_method_get(this, _popElement, popElement).call(this, autocloseTag(topElement, topElement.openTag.endOffset));
            } else if (tagSet && tagSet.has(tag.name)) {
                _class_private_method_get(this, _popElement, popElement).call(this, autocloseTag(topElement, tag.startOffset));
            }
            _class_private_method_get(this, _pushElement, pushElement).call(this, tag);
        }
        return;
    }
    var lastTag = _class_private_field_get(this, _stack)[_class_private_field_get(this, _stack).length - 1];
    while(_class_private_field_get(this, _stack).length > 1 && lastTag && lastTag.name !== tag.name){
        _class_private_method_get(this, _popElement, popElement).call(this, autocloseTag(lastTag, tag.startOffset));
        lastTag = _class_private_field_get(this, _stack)[_class_private_field_get(this, _stack).length - 1];
    }
    if (_class_private_field_get(this, _stack).length === 1) {
        return;
    }
    _class_private_method_get(this, _popElement, popElement).call(this, tag);
    function autocloseTag(element, offset) {
        return new Tag(element.name, offset, offset, new Map(), false, false);
    }
}
function popElement(closeTag) {
    var element = _class_private_field_get(this, _stack).pop();
    if (!element) {
        return;
    }
    element.closeTag = closeTag;
}
function pushElement(openTag) {
    var topElement = _class_private_field_get(this, _stack)[_class_private_field_get(this, _stack).length - 1];
    var newElement = new FormatterElement(openTag.name);
    if (topElement) {
        newElement.parent = topElement;
        topElement.children.push(newElement);
    }
    newElement.openTag = openTag;
    _class_private_field_get(this, _stack).push(newElement);
}
var SelfClosingTags = new Set([
    'area',
    'base',
    'br',
    'col',
    'command',
    'embed',
    'hr',
    'img',
    'input',
    'keygen',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr'
]);
// @see https://www.w3.org/TR/html/syntax.html 8.1.2.4 Optional tags
var AutoClosingTags = new Map([
    [
        'head',
        new Set([
            'body'
        ])
    ],
    [
        'li',
        new Set([
            'li'
        ])
    ],
    [
        'dt',
        new Set([
            'dt',
            'dd'
        ])
    ],
    [
        'dd',
        new Set([
            'dt',
            'dd'
        ])
    ],
    [
        'p',
        new Set([
            'address',
            'article',
            'aside',
            'blockquote',
            'div',
            'dl',
            'fieldset',
            'footer',
            'form',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'header',
            'hgroup',
            'hr',
            'main',
            'nav',
            'ol',
            'p',
            'pre',
            'section',
            'table',
            'ul'
        ])
    ],
    [
        'rb',
        new Set([
            'rb',
            'rt',
            'rtc',
            'rp'
        ])
    ],
    [
        'rt',
        new Set([
            'rb',
            'rt',
            'rtc',
            'rp'
        ])
    ],
    [
        'rtc',
        new Set([
            'rb',
            'rtc',
            'rp'
        ])
    ],
    [
        'rp',
        new Set([
            'rb',
            'rt',
            'rtc',
            'rp'
        ])
    ],
    [
        'optgroup',
        new Set([
            'optgroup'
        ])
    ],
    [
        'option',
        new Set([
            'option',
            'optgroup'
        ])
    ],
    [
        'colgroup',
        new Set([
            'colgroup'
        ])
    ],
    [
        'thead',
        new Set([
            'tbody',
            'tfoot'
        ])
    ],
    [
        'tbody',
        new Set([
            'tbody',
            'tfoot'
        ])
    ],
    [
        'tfoot',
        new Set([
            'tbody'
        ])
    ],
    [
        'tr',
        new Set([
            'tr'
        ])
    ],
    [
        'td',
        new Set([
            'td',
            'th'
        ])
    ],
    [
        'th',
        new Set([
            'td',
            'th'
        ])
    ]
]);
var Token = function Token(value, type, startOffset, endOffset) {
    "use strict";
    _class_call_check(this, Token);
    _define_property(this, "value", void 0);
    _define_property(this, "type", void 0);
    _define_property(this, "startOffset", void 0);
    _define_property(this, "endOffset", void 0);
    this.value = value;
    this.type = type;
    this.startOffset = startOffset;
    this.endOffset = endOffset;
};
var Tag = function Tag(name, startOffset, endOffset, attributes, isOpenTag, selfClosingTag) {
    "use strict";
    _class_call_check(this, Tag);
    _define_property(this, "name", void 0);
    _define_property(this, "startOffset", void 0);
    _define_property(this, "endOffset", void 0);
    _define_property(this, "attributes", void 0);
    _define_property(this, "isOpenTag", void 0);
    _define_property(this, "selfClosingTag", void 0);
    this.name = name;
    this.startOffset = startOffset;
    this.endOffset = endOffset;
    this.attributes = attributes;
    this.isOpenTag = isOpenTag;
    this.selfClosingTag = selfClosingTag;
};
var FormatterElement = function FormatterElement(name) {
    "use strict";
    _class_call_check(this, FormatterElement);
    _define_property(this, "name", void 0);
    _define_property(this, "children", []);
    _define_property(this, "parent", null);
    _define_property(this, "openTag", null);
    _define_property(this, "closeTag", null);
    this.name = name;
} //# sourceMappingURL=HTMLFormatter.js.map
;


}),
"./entrypoints/formatter_worker/IdentityFormatter.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  IdentityFormatter: function() { return IdentityFormatter; }
});
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var IdentityFormatter = /*#__PURE__*/ function() {
    "use strict";
    function IdentityFormatter(builder) {
        _class_call_check(this, IdentityFormatter);
        _define_property(this, "builder", void 0);
        this.builder = builder;
    }
    _create_class(IdentityFormatter, [
        {
            key: "format",
            value: function format(text, lineEndings, fromOffset, toOffset) {
                var content = text.substring(fromOffset, toOffset);
                this.builder.addToken(content, fromOffset);
            }
        }
    ]);
    return IdentityFormatter;
} //# sourceMappingURL=IdentityFormatter.js.map
();


}),
"./entrypoints/formatter_worker/JSONFormatter.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  JSONFormatter: function() { return JSONFormatter; }
});
/* harmony import */var _FormatterWorker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormatterWorker.js */ "./entrypoints/formatter_worker/FormatterWorker.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}

var JSONFormatter = /*#__PURE__*/ function() {
    "use strict";
    function JSONFormatter(builder) {
        _class_call_check(this, JSONFormatter);
        _define_property(this, "builder", void 0);
        _define_property(this, "toOffset", void 0);
        _define_property(this, "fromOffset", void 0);
        _define_property(this, "lineEndings", void 0);
        _define_property(this, "lastLine", void 0);
        _define_property(this, "text", void 0);
        this.builder = builder;
        this.lastLine = -1;
    }
    _create_class(JSONFormatter, [
        {
            key: "format",
            value: function format(text, lineEndings, fromOffset, toOffset) {
                this.lineEndings = lineEndings;
                this.fromOffset = fromOffset;
                this.toOffset = toOffset;
                this.lastLine = -1;
                this.text = text;
                var tokenize = (0,_FormatterWorker_js__WEBPACK_IMPORTED_MODULE_0__.createTokenizer)('application/json');
                tokenize(text.substring(this.fromOffset, this.toOffset), this.tokenCallback.bind(this));
            }
        },
        {
            key: "tokenCallback",
            value: function tokenCallback(token, type, startPosition) {
                switch(token.charAt(0)){
                    case '{':
                    case '[':
                        if (this.text[startPosition + 1] === '}' || this.text[startPosition + 1] === ']') {
                            this.builder.addToken(token, startPosition);
                        } else {
                            this.builder.addToken(token, startPosition);
                            this.builder.addNewLine();
                            this.builder.increaseNestingLevel();
                        }
                        break;
                    case '}':
                    case ']':
                        if (this.text[startPosition - 1] === '{' || this.text[startPosition - 1] === '[') {
                            this.builder.addToken(token, startPosition);
                        } else {
                            this.builder.decreaseNestingLevel();
                            this.builder.addNewLine();
                            this.builder.addToken(token, startPosition);
                        }
                        break;
                    case ':':
                        this.builder.addToken(token, startPosition);
                        this.builder.addSoftSpace();
                        break;
                    case ',':
                        this.builder.addToken(token, startPosition);
                        this.builder.addNewLine();
                        break;
                    case '':
                    case ' ':
                    case '\n':
                        break;
                    default:
                        this.builder.addToken(token, startPosition);
                        break;
                }
            }
        }
    ]);
    return JSONFormatter;
} //# sourceMappingURL=JSONFormatter.js.map
();


}),

}]);