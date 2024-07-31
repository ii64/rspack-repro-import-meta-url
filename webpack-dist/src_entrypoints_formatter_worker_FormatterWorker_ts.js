"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_entrypoints_formatter_worker_FormatterWorker_ts"],{

/***/ "./src/entrypoints/formatter_worker/CSSFormatter.ts":
/*!**********************************************************!*\
  !*** ./src/entrypoints/formatter_worker/CSSFormatter.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSFormatter: () => (/* binding */ CSSFormatter)
/* harmony export */ });
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _FormatterWorker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormatterWorker.js */ "./src/entrypoints/formatter_worker/FormatterWorker.ts");
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
 */
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CSSFormatter_instances, _CSSFormatter_builder, _CSSFormatter_toOffset, _CSSFormatter_fromOffset, _CSSFormatter_lineEndings, _CSSFormatter_lastLine, _CSSFormatter_state, _CSSFormatter_tokenCallback;


const cssTrimEnd = (tokenValue) => {
    // https://drafts.csswg.org/css-syntax/#whitespace
    const re = /(?:\r?\n|[\t\f\r ])+$/g;
    return tokenValue.replace(re, '');
};
class CSSFormatter {
    constructor(builder) {
        _CSSFormatter_instances.add(this);
        _CSSFormatter_builder.set(this, void 0);
        _CSSFormatter_toOffset.set(this, void 0);
        _CSSFormatter_fromOffset.set(this, void 0);
        _CSSFormatter_lineEndings.set(this, void 0);
        _CSSFormatter_lastLine.set(this, void 0);
        _CSSFormatter_state.set(this, void 0);
        __classPrivateFieldSet(this, _CSSFormatter_builder, builder, "f");
        __classPrivateFieldSet(this, _CSSFormatter_lastLine, -1, "f");
        __classPrivateFieldSet(this, _CSSFormatter_state, {
            eatWhitespace: undefined,
            seenProperty: undefined,
            inPropertyValue: undefined,
            afterClosingBrace: undefined,
        }, "f");
    }
    format(text, lineEndings, fromOffset, toOffset) {
        __classPrivateFieldSet(this, _CSSFormatter_lineEndings, lineEndings, "f");
        __classPrivateFieldSet(this, _CSSFormatter_fromOffset, fromOffset, "f");
        __classPrivateFieldSet(this, _CSSFormatter_toOffset, toOffset, "f");
        __classPrivateFieldSet(this, _CSSFormatter_state, {
            eatWhitespace: undefined,
            seenProperty: undefined,
            inPropertyValue: undefined,
            afterClosingBrace: undefined,
        }, "f");
        __classPrivateFieldSet(this, _CSSFormatter_lastLine, -1, "f");
        const tokenize = (0,_FormatterWorker_js__WEBPACK_IMPORTED_MODULE_1__.createTokenizer)('text/css');
        const oldEnforce = __classPrivateFieldGet(this, _CSSFormatter_builder, "f").setEnforceSpaceBetweenWords(false);
        tokenize(text.substring(__classPrivateFieldGet(this, _CSSFormatter_fromOffset, "f"), __classPrivateFieldGet(this, _CSSFormatter_toOffset, "f")), __classPrivateFieldGet(this, _CSSFormatter_instances, "m", _CSSFormatter_tokenCallback).bind(this));
        __classPrivateFieldGet(this, _CSSFormatter_builder, "f").setEnforceSpaceBetweenWords(oldEnforce);
    }
}
_CSSFormatter_builder = new WeakMap(), _CSSFormatter_toOffset = new WeakMap(), _CSSFormatter_fromOffset = new WeakMap(), _CSSFormatter_lineEndings = new WeakMap(), _CSSFormatter_lastLine = new WeakMap(), _CSSFormatter_state = new WeakMap(), _CSSFormatter_instances = new WeakSet(), _CSSFormatter_tokenCallback = function _CSSFormatter_tokenCallback(token, type, startPosition) {
    startPosition += __classPrivateFieldGet(this, _CSSFormatter_fromOffset, "f");
    const startLine = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.lowerBound(__classPrivateFieldGet(this, _CSSFormatter_lineEndings, "f"), startPosition, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.DEFAULT_COMPARATOR);
    if (startLine !== __classPrivateFieldGet(this, _CSSFormatter_lastLine, "f")) {
        __classPrivateFieldGet(this, _CSSFormatter_state, "f").eatWhitespace = true;
    }
    if (type && (/^property/.test(type) || /^variable-2/.test(type)) && !__classPrivateFieldGet(this, _CSSFormatter_state, "f").inPropertyValue) {
        __classPrivateFieldGet(this, _CSSFormatter_state, "f").seenProperty = true;
    }
    __classPrivateFieldSet(this, _CSSFormatter_lastLine, startLine, "f");
    // https://drafts.csswg.org/css-syntax/#whitespace
    const isWhitespace = /^(?:\r?\n|[\t\f\r ])+$/.test(token);
    if (isWhitespace) {
        if (!__classPrivateFieldGet(this, _CSSFormatter_state, "f").eatWhitespace) {
            __classPrivateFieldGet(this, _CSSFormatter_builder, "f").addSoftSpace();
        }
        return;
    }
    __classPrivateFieldGet(this, _CSSFormatter_state, "f").eatWhitespace = false;
    if (token === '\n') {
        return;
    }
    if (token !== '}') {
        if (__classPrivateFieldGet(this, _CSSFormatter_state, "f").afterClosingBrace) {
            __classPrivateFieldGet(this, _CSSFormatter_builder, "f").addNewLine(true);
        }
        __classPrivateFieldGet(this, _CSSFormatter_state, "f").afterClosingBrace = false;
    }
    if (token === '}') {
        if (__classPrivateFieldGet(this, _CSSFormatter_state, "f").inPropertyValue) {
            __classPrivateFieldGet(this, _CSSFormatter_builder, "f").addNewLine();
        }
        __classPrivateFieldGet(this, _CSSFormatter_builder, "f").decreaseNestingLevel();
        __classPrivateFieldGet(this, _CSSFormatter_state, "f").afterClosingBrace = true;
        __classPrivateFieldGet(this, _CSSFormatter_state, "f").inPropertyValue = false;
    }
    else if (token === ':' && !__classPrivateFieldGet(this, _CSSFormatter_state, "f").inPropertyValue && __classPrivateFieldGet(this, _CSSFormatter_state, "f").seenProperty) {
        __classPrivateFieldGet(this, _CSSFormatter_builder, "f").addToken(token, startPosition);
        __classPrivateFieldGet(this, _CSSFormatter_builder, "f").addSoftSpace();
        __classPrivateFieldGet(this, _CSSFormatter_state, "f").eatWhitespace = true;
        __classPrivateFieldGet(this, _CSSFormatter_state, "f").inPropertyValue = true;
        __classPrivateFieldGet(this, _CSSFormatter_state, "f").seenProperty = false;
        return;
    }
    else if (token === '{') {
        __classPrivateFieldGet(this, _CSSFormatter_builder, "f").addSoftSpace();
        __classPrivateFieldGet(this, _CSSFormatter_builder, "f").addToken(token, startPosition);
        __classPrivateFieldGet(this, _CSSFormatter_builder, "f").addNewLine();
        __classPrivateFieldGet(this, _CSSFormatter_builder, "f").increaseNestingLevel();
        return;
    }
    __classPrivateFieldGet(this, _CSSFormatter_builder, "f").addToken(cssTrimEnd(token), startPosition);
    if (type === 'comment' && !__classPrivateFieldGet(this, _CSSFormatter_state, "f").inPropertyValue && !__classPrivateFieldGet(this, _CSSFormatter_state, "f").seenProperty) {
        __classPrivateFieldGet(this, _CSSFormatter_builder, "f").addNewLine();
    }
    if (token === ';' && __classPrivateFieldGet(this, _CSSFormatter_state, "f").inPropertyValue) {
        __classPrivateFieldGet(this, _CSSFormatter_state, "f").inPropertyValue = false;
        __classPrivateFieldGet(this, _CSSFormatter_builder, "f").addNewLine();
    }
    else if (token === '}') {
        __classPrivateFieldGet(this, _CSSFormatter_builder, "f").addNewLine();
    }
};


/***/ }),

/***/ "./src/entrypoints/formatter_worker/FormatterWorker.ts":
/*!*************************************************************!*\
  !*** ./src/entrypoints/formatter_worker/FormatterWorker.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbortTokenization: () => (/* binding */ AbortTokenization),
/* harmony export */   createTokenizer: () => (/* binding */ createTokenizer),
/* harmony export */   evaluatableJavaScriptSubstring: () => (/* binding */ evaluatableJavaScriptSubstring),
/* harmony export */   format: () => (/* binding */ format),
/* harmony export */   substituteExpression: () => (/* reexport safe */ _Substitute_js__WEBPACK_IMPORTED_MODULE_11__.substituteExpression)
/* harmony export */ });
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../third_party/acorn/acorn.js */ "./src/third_party/acorn/acorn.ts");
/* harmony import */ var _AcornTokenizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AcornTokenizer.js */ "./src/entrypoints/formatter_worker/AcornTokenizer.ts");
/* harmony import */ var _CSSFormatter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CSSFormatter.js */ "./src/entrypoints/formatter_worker/CSSFormatter.ts");
/* harmony import */ var _FormattedContentBuilder_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormattedContentBuilder.js */ "./src/entrypoints/formatter_worker/FormattedContentBuilder.ts");
/* harmony import */ var _FormatterActions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormatterActions.js */ "./src/entrypoints/formatter_worker/FormatterActions.ts");
/* harmony import */ var _HTMLFormatter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HTMLFormatter.js */ "./src/entrypoints/formatter_worker/HTMLFormatter.ts");
/* harmony import */ var _IdentityFormatter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./IdentityFormatter.js */ "./src/entrypoints/formatter_worker/IdentityFormatter.ts");
/* harmony import */ var _JavaScriptFormatter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./JavaScriptFormatter.js */ "./src/entrypoints/formatter_worker/JavaScriptFormatter.ts");
/* harmony import */ var _JSONFormatter_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./JSONFormatter.js */ "./src/entrypoints/formatter_worker/JSONFormatter.ts");
/* harmony import */ var _Substitute_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Substitute.js */ "./src/entrypoints/formatter_worker/Substitute.ts");
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
    const mode = CodeMirror.getMode({ indentUnit: 2 }, mimeType);
    const state = CodeMirror.startState(mode);
    if (!mode || mode.name === 'null') {
        throw new Error(`Could not find CodeMirror mode for MimeType: ${mimeType}`);
    }
    if (!mode.token) {
        throw new Error(`Could not find CodeMirror mode with token method: ${mimeType}`);
    }
    return (line, callback) => {
        const stream = new CodeMirror.StringStream(line);
        while (!stream.eol()) {
            const style = mode.token(stream, state);
            const value = stream.current();
            if (callback(value, style, stream.start, stream.start + value.length) === AbortTokenization) {
                return;
            }
            stream.start = stream.pos;
        }
    };
}
const AbortTokenization = {};
function evaluatableJavaScriptSubstring(content) {
    try {
        const tokenizer = _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokenizer(content, { ecmaVersion: _AcornTokenizer_js__WEBPACK_IMPORTED_MODULE_3__.ECMA_VERSION });
        let token = tokenizer.getToken();
        while (_AcornTokenizer_js__WEBPACK_IMPORTED_MODULE_3__.AcornTokenizer.punctuator(token)) {
            token = tokenizer.getToken();
        }
        const startIndex = token.start;
        let endIndex = token.end;
        while (token.type !== _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.eof) {
            const isIdentifier = token.type === _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.name || token.type === _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.privateId;
            const isThis = _AcornTokenizer_js__WEBPACK_IMPORTED_MODULE_3__.AcornTokenizer.keyword(token, 'this');
            const isString = token.type === _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.string;
            if (!isThis && !isIdentifier && !isString) {
                break;
            }
            endIndex = token.end;
            token = tokenizer.getToken();
            while (_AcornTokenizer_js__WEBPACK_IMPORTED_MODULE_3__.AcornTokenizer.punctuator(token, '[')) {
                let openBracketCounter = 0;
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
                } while (token.type !== _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.eof);
            }
            if (!_AcornTokenizer_js__WEBPACK_IMPORTED_MODULE_3__.AcornTokenizer.punctuator(token, '.')) {
                break;
            }
            token = tokenizer.getToken();
        }
        return content.substring(startIndex, endIndex);
    }
    catch (e) {
        console.error(e);
        return '';
    }
}
function format(mimeType, text, indentString) {
    // Default to a 4-space indent.
    indentString = indentString || '    ';
    let result;
    const builder = new _FormattedContentBuilder_js__WEBPACK_IMPORTED_MODULE_5__.FormattedContentBuilder(indentString);
    const lineEndings = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.findLineEndingIndexes(text);
    try {
        switch (mimeType) {
            case _FormatterActions_js__WEBPACK_IMPORTED_MODULE_6__.FormattableMediaTypes.TEXT_HTML: {
                const formatter = new _HTMLFormatter_js__WEBPACK_IMPORTED_MODULE_7__.HTMLFormatter(builder);
                formatter.format(text, lineEndings);
                break;
            }
            case _FormatterActions_js__WEBPACK_IMPORTED_MODULE_6__.FormattableMediaTypes.TEXT_CSS: {
                const formatter = new _CSSFormatter_js__WEBPACK_IMPORTED_MODULE_4__.CSSFormatter(builder);
                formatter.format(text, lineEndings, 0, text.length);
                break;
            }
            case _FormatterActions_js__WEBPACK_IMPORTED_MODULE_6__.FormattableMediaTypes.APPLICATION_JAVASCRIPT:
            case _FormatterActions_js__WEBPACK_IMPORTED_MODULE_6__.FormattableMediaTypes.TEXT_JAVASCRIPT: {
                const formatter = new _JavaScriptFormatter_js__WEBPACK_IMPORTED_MODULE_9__.JavaScriptFormatter(builder);
                formatter.format(text, lineEndings, 0, text.length);
                break;
            }
            case _FormatterActions_js__WEBPACK_IMPORTED_MODULE_6__.FormattableMediaTypes.APPLICATION_JSON:
            case _FormatterActions_js__WEBPACK_IMPORTED_MODULE_6__.FormattableMediaTypes.APPLICATION_MANIFEST_JSON: {
                const formatter = new _JSONFormatter_js__WEBPACK_IMPORTED_MODULE_10__.JSONFormatter(builder);
                formatter.format(text, lineEndings, 0, text.length);
                break;
            }
            default: {
                const formatter = new _IdentityFormatter_js__WEBPACK_IMPORTED_MODULE_8__.IdentityFormatter(builder);
                formatter.format(text, lineEndings, 0, text.length);
            }
        }
        result = {
            mapping: builder.mapping,
            content: builder.content(),
        };
    }
    catch (e) {
        console.error(e);
        result = {
            mapping: { original: [0], formatted: [0] },
            content: text,
        };
    }
    return result;
}
(function disableLoggingForTest() {
    if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.queryParam('test')) {
        console.error = () => undefined;
    }
})();



/***/ }),

/***/ "./src/entrypoints/formatter_worker/HTMLFormatter.ts":
/*!***********************************************************!*\
  !*** ./src/entrypoints/formatter_worker/HTMLFormatter.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HTMLFormatter: () => (/* binding */ HTMLFormatter),
/* harmony export */   HTMLModel: () => (/* binding */ HTMLModel)
/* harmony export */ });
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _CSSFormatter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSFormatter.js */ "./src/entrypoints/formatter_worker/CSSFormatter.ts");
/* harmony import */ var _FormatterWorker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormatterWorker.js */ "./src/entrypoints/formatter_worker/FormatterWorker.ts");
/* harmony import */ var _JavaScriptFormatter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./JavaScriptFormatter.js */ "./src/entrypoints/formatter_worker/JavaScriptFormatter.ts");
/* harmony import */ var _JSONFormatter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./JSONFormatter.js */ "./src/entrypoints/formatter_worker/JSONFormatter.ts");
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HTMLFormatter_instances, _HTMLFormatter_builder, _HTMLFormatter_jsFormatter, _HTMLFormatter_jsonFormatter, _HTMLFormatter_cssFormatter, _HTMLFormatter_text, _HTMLFormatter_lineEndings, _HTMLFormatter_model, _HTMLFormatter_formatTokensTill, _HTMLFormatter_walk, _HTMLFormatter_beforeOpenTag, _HTMLFormatter_afterOpenTag, _HTMLFormatter_beforeCloseTag, _HTMLFormatter_afterCloseTag, _HTMLFormatter_formatToken, _HTMLModel_instances, _HTMLModel_state, _HTMLModel_documentInternal, _HTMLModel_stack, _HTMLModel_tokens, _HTMLModel_tokenIndex, _HTMLModel_attributes, _HTMLModel_attributeName, _HTMLModel_tagName, _HTMLModel_isOpenTag, _HTMLModel_tagStartOffset, _HTMLModel_tagEndOffset, _HTMLModel_build, _HTMLModel_updateDOM, _HTMLModel_onStartTag, _HTMLModel_onEndTag, _HTMLModel_onTagComplete, _HTMLModel_popElement, _HTMLModel_pushElement;





class HTMLFormatter {
    constructor(builder) {
        _HTMLFormatter_instances.add(this);
        _HTMLFormatter_builder.set(this, void 0);
        _HTMLFormatter_jsFormatter.set(this, void 0);
        _HTMLFormatter_jsonFormatter.set(this, void 0);
        _HTMLFormatter_cssFormatter.set(this, void 0);
        _HTMLFormatter_text.set(this, void 0);
        _HTMLFormatter_lineEndings.set(this, void 0);
        _HTMLFormatter_model.set(this, void 0);
        __classPrivateFieldSet(this, _HTMLFormatter_builder, builder, "f");
        __classPrivateFieldSet(this, _HTMLFormatter_jsFormatter, new _JavaScriptFormatter_js__WEBPACK_IMPORTED_MODULE_3__.JavaScriptFormatter(builder), "f");
        __classPrivateFieldSet(this, _HTMLFormatter_jsonFormatter, new _JSONFormatter_js__WEBPACK_IMPORTED_MODULE_4__.JSONFormatter(builder), "f");
        __classPrivateFieldSet(this, _HTMLFormatter_cssFormatter, new _CSSFormatter_js__WEBPACK_IMPORTED_MODULE_1__.CSSFormatter(builder), "f");
    }
    format(text, lineEndings) {
        __classPrivateFieldSet(this, _HTMLFormatter_text, text, "f");
        __classPrivateFieldSet(this, _HTMLFormatter_lineEndings, lineEndings, "f");
        __classPrivateFieldSet(this, _HTMLFormatter_model, new HTMLModel(text), "f");
        __classPrivateFieldGet(this, _HTMLFormatter_instances, "m", _HTMLFormatter_walk).call(this, __classPrivateFieldGet(this, _HTMLFormatter_model, "f").document());
    }
}
_HTMLFormatter_builder = new WeakMap(), _HTMLFormatter_jsFormatter = new WeakMap(), _HTMLFormatter_jsonFormatter = new WeakMap(), _HTMLFormatter_cssFormatter = new WeakMap(), _HTMLFormatter_text = new WeakMap(), _HTMLFormatter_lineEndings = new WeakMap(), _HTMLFormatter_model = new WeakMap(), _HTMLFormatter_instances = new WeakSet(), _HTMLFormatter_formatTokensTill = function _HTMLFormatter_formatTokensTill(element, offset) {
    if (!__classPrivateFieldGet(this, _HTMLFormatter_model, "f")) {
        return;
    }
    let nextToken = __classPrivateFieldGet(this, _HTMLFormatter_model, "f").peekToken();
    while (nextToken && nextToken.startOffset < offset) {
        const token = __classPrivateFieldGet(this, _HTMLFormatter_model, "f").nextToken();
        __classPrivateFieldGet(this, _HTMLFormatter_instances, "m", _HTMLFormatter_formatToken).call(this, element, token);
        nextToken = __classPrivateFieldGet(this, _HTMLFormatter_model, "f").peekToken();
    }
}, _HTMLFormatter_walk = function _HTMLFormatter_walk(element) {
    if (!element.openTag || !element.closeTag) {
        throw new Error('Element is missing open or close tag');
    }
    if (element.parent) {
        __classPrivateFieldGet(this, _HTMLFormatter_instances, "m", _HTMLFormatter_formatTokensTill).call(this, element.parent, element.openTag.startOffset);
    }
    __classPrivateFieldGet(this, _HTMLFormatter_instances, "m", _HTMLFormatter_beforeOpenTag).call(this, element);
    __classPrivateFieldGet(this, _HTMLFormatter_instances, "m", _HTMLFormatter_formatTokensTill).call(this, element, element.openTag.endOffset);
    __classPrivateFieldGet(this, _HTMLFormatter_instances, "m", _HTMLFormatter_afterOpenTag).call(this, element);
    for (let i = 0; i < element.children.length; ++i) {
        __classPrivateFieldGet(this, _HTMLFormatter_instances, "m", _HTMLFormatter_walk).call(this, element.children[i]);
    }
    __classPrivateFieldGet(this, _HTMLFormatter_instances, "m", _HTMLFormatter_formatTokensTill).call(this, element, element.closeTag.startOffset);
    __classPrivateFieldGet(this, _HTMLFormatter_instances, "m", _HTMLFormatter_beforeCloseTag).call(this, element);
    __classPrivateFieldGet(this, _HTMLFormatter_instances, "m", _HTMLFormatter_formatTokensTill).call(this, element, element.closeTag.endOffset);
    __classPrivateFieldGet(this, _HTMLFormatter_instances, "m", _HTMLFormatter_afterCloseTag).call(this, element);
}, _HTMLFormatter_beforeOpenTag = function _HTMLFormatter_beforeOpenTag(element) {
    if (!__classPrivateFieldGet(this, _HTMLFormatter_model, "f")) {
        return;
    }
    if (!element.children.length || element === __classPrivateFieldGet(this, _HTMLFormatter_model, "f").document()) {
        return;
    }
    __classPrivateFieldGet(this, _HTMLFormatter_builder, "f").addNewLine();
}, _HTMLFormatter_afterOpenTag = function _HTMLFormatter_afterOpenTag(element) {
    if (!__classPrivateFieldGet(this, _HTMLFormatter_model, "f")) {
        return;
    }
    if (!element.children.length || element === __classPrivateFieldGet(this, _HTMLFormatter_model, "f").document()) {
        return;
    }
    __classPrivateFieldGet(this, _HTMLFormatter_builder, "f").increaseNestingLevel();
    __classPrivateFieldGet(this, _HTMLFormatter_builder, "f").addNewLine();
}, _HTMLFormatter_beforeCloseTag = function _HTMLFormatter_beforeCloseTag(element) {
    if (!__classPrivateFieldGet(this, _HTMLFormatter_model, "f")) {
        return;
    }
    if (!element.children.length || element === __classPrivateFieldGet(this, _HTMLFormatter_model, "f").document()) {
        return;
    }
    __classPrivateFieldGet(this, _HTMLFormatter_builder, "f").decreaseNestingLevel();
    __classPrivateFieldGet(this, _HTMLFormatter_builder, "f").addNewLine();
}, _HTMLFormatter_afterCloseTag = function _HTMLFormatter_afterCloseTag(_element) {
    __classPrivateFieldGet(this, _HTMLFormatter_builder, "f").addNewLine();
}, _HTMLFormatter_formatToken = function _HTMLFormatter_formatToken(element, token) {
    if (_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.isWhitespace(token.value)) {
        return;
    }
    if (hasTokenInSet(token.type, 'comment') || hasTokenInSet(token.type, 'meta')) {
        __classPrivateFieldGet(this, _HTMLFormatter_builder, "f").addNewLine();
        __classPrivateFieldGet(this, _HTMLFormatter_builder, "f").addToken(token.value.trim(), token.startOffset);
        __classPrivateFieldGet(this, _HTMLFormatter_builder, "f").addNewLine();
        return;
    }
    if (!element.openTag || !element.closeTag) {
        return;
    }
    const isBodyToken = element.openTag.endOffset <= token.startOffset && token.startOffset < element.closeTag.startOffset;
    if (isBodyToken && element.name === 'style') {
        __classPrivateFieldGet(this, _HTMLFormatter_builder, "f").addNewLine();
        __classPrivateFieldGet(this, _HTMLFormatter_builder, "f").increaseNestingLevel();
        __classPrivateFieldGet(this, _HTMLFormatter_cssFormatter, "f").format(__classPrivateFieldGet(this, _HTMLFormatter_text, "f") || '', __classPrivateFieldGet(this, _HTMLFormatter_lineEndings, "f") || [], token.startOffset, token.endOffset);
        __classPrivateFieldGet(this, _HTMLFormatter_builder, "f").decreaseNestingLevel();
        return;
    }
    if (isBodyToken && element.name === 'script') {
        __classPrivateFieldGet(this, _HTMLFormatter_builder, "f").addNewLine();
        __classPrivateFieldGet(this, _HTMLFormatter_builder, "f").increaseNestingLevel();
        if (scriptTagIsJavaScript(element)) {
            __classPrivateFieldGet(this, _HTMLFormatter_jsFormatter, "f").format(__classPrivateFieldGet(this, _HTMLFormatter_text, "f") || '', __classPrivateFieldGet(this, _HTMLFormatter_lineEndings, "f") || [], token.startOffset, token.endOffset);
        }
        else if (scriptTagIsJSON(element)) {
            __classPrivateFieldGet(this, _HTMLFormatter_jsonFormatter, "f").format(__classPrivateFieldGet(this, _HTMLFormatter_text, "f") || '', __classPrivateFieldGet(this, _HTMLFormatter_lineEndings, "f") || [], token.startOffset, token.endOffset);
        }
        else {
            __classPrivateFieldGet(this, _HTMLFormatter_builder, "f").addToken(token.value, token.startOffset);
            __classPrivateFieldGet(this, _HTMLFormatter_builder, "f").addNewLine();
        }
        __classPrivateFieldGet(this, _HTMLFormatter_builder, "f").decreaseNestingLevel();
        return;
    }
    if (!isBodyToken && hasTokenInSet(token.type, 'attribute')) {
        __classPrivateFieldGet(this, _HTMLFormatter_builder, "f").addSoftSpace();
    }
    __classPrivateFieldGet(this, _HTMLFormatter_builder, "f").addToken(token.value, token.startOffset);
};
function scriptTagIsJavaScript(element) {
    if (!element.openTag) {
        return true;
    }
    if (!element.openTag.attributes.has('type')) {
        return true;
    }
    let type = element.openTag.attributes.get('type');
    if (!type) {
        return true;
    }
    type = type.toLowerCase();
    const isWrappedInQuotes = /^(["\'])(.*)\1$/.exec(type.trim());
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
        'text/x-javascript',
    ].includes(type.trim());
}
function scriptTagIsJSON(element) {
    if (!element.openTag) {
        return false;
    }
    let type = element.openTag.attributes.get('type');
    if (!type) {
        return false;
    }
    type = type.toLowerCase();
    const isWrappedInQuotes = /^(["\'])(.*)\1$/.exec(type.trim());
    if (isWrappedInQuotes) {
        type = isWrappedInQuotes[2];
    }
    const isSubtype = /^application\/\w+\+json$/.exec(type.trim());
    if (isSubtype) {
        type = 'application/json';
    }
    return [
        'application/json',
        'importmap',
        'speculationrules',
    ].includes(type.trim());
}
function hasTokenInSet(tokenTypes, type) {
    // We prefix the CodeMirror HTML tokenizer with the xml- prefix
    // in a full version. When running in a worker context, this
    // prefix is not appended, as the global is only overridden
    // in CodeMirrorTextEditor.js.
    return tokenTypes.has(type) || tokenTypes.has(`xml-${type}`);
}
class HTMLModel {
    constructor(text) {
        _HTMLModel_instances.add(this);
        _HTMLModel_state.set(this, void 0);
        _HTMLModel_documentInternal.set(this, void 0);
        _HTMLModel_stack.set(this, void 0);
        _HTMLModel_tokens.set(this, void 0);
        _HTMLModel_tokenIndex.set(this, void 0);
        _HTMLModel_attributes.set(this, void 0);
        _HTMLModel_attributeName.set(this, void 0);
        _HTMLModel_tagName.set(this, void 0);
        _HTMLModel_isOpenTag.set(this, void 0);
        _HTMLModel_tagStartOffset.set(this, void 0);
        _HTMLModel_tagEndOffset.set(this, void 0);
        __classPrivateFieldSet(this, _HTMLModel_state, ParseState.Initial, "f");
        __classPrivateFieldSet(this, _HTMLModel_documentInternal, new FormatterElement('document'), "f");
        __classPrivateFieldGet(this, _HTMLModel_documentInternal, "f").openTag = new Tag('document', 0, 0, new Map(), true, false);
        __classPrivateFieldGet(this, _HTMLModel_documentInternal, "f").closeTag = new Tag('document', text.length, text.length, new Map(), false, false);
        __classPrivateFieldSet(this, _HTMLModel_stack, [__classPrivateFieldGet(this, _HTMLModel_documentInternal, "f")], "f");
        __classPrivateFieldSet(this, _HTMLModel_tokens, [], "f");
        __classPrivateFieldSet(this, _HTMLModel_tokenIndex, 0, "f");
        __classPrivateFieldGet(this, _HTMLModel_instances, "m", _HTMLModel_build).call(this, text);
        __classPrivateFieldSet(this, _HTMLModel_attributes, new Map(), "f");
        __classPrivateFieldSet(this, _HTMLModel_attributeName, '', "f");
        __classPrivateFieldSet(this, _HTMLModel_tagName, '', "f");
        __classPrivateFieldSet(this, _HTMLModel_isOpenTag, false, "f");
    }
    peekToken() {
        return __classPrivateFieldGet(this, _HTMLModel_tokenIndex, "f") < __classPrivateFieldGet(this, _HTMLModel_tokens, "f").length ? __classPrivateFieldGet(this, _HTMLModel_tokens, "f")[__classPrivateFieldGet(this, _HTMLModel_tokenIndex, "f")] : null;
    }
    nextToken() {
        var _a, _b;
        return __classPrivateFieldGet(this, _HTMLModel_tokens, "f")[__classPrivateFieldSet(this, _HTMLModel_tokenIndex, (_b = __classPrivateFieldGet(this, _HTMLModel_tokenIndex, "f"), _a = _b++, _b), "f"), _a];
    }
    document() {
        return __classPrivateFieldGet(this, _HTMLModel_documentInternal, "f");
    }
}
_HTMLModel_state = new WeakMap(), _HTMLModel_documentInternal = new WeakMap(), _HTMLModel_stack = new WeakMap(), _HTMLModel_tokens = new WeakMap(), _HTMLModel_tokenIndex = new WeakMap(), _HTMLModel_attributes = new WeakMap(), _HTMLModel_attributeName = new WeakMap(), _HTMLModel_tagName = new WeakMap(), _HTMLModel_isOpenTag = new WeakMap(), _HTMLModel_tagStartOffset = new WeakMap(), _HTMLModel_tagEndOffset = new WeakMap(), _HTMLModel_instances = new WeakSet(), _HTMLModel_build = function _HTMLModel_build(text) {
    const tokenizer = (0,_FormatterWorker_js__WEBPACK_IMPORTED_MODULE_2__.createTokenizer)('text/html');
    let baseOffset = 0, lastOffset = 0;
    let pendingToken = null;
    const pushToken = (token) => {
        __classPrivateFieldGet(this, _HTMLModel_tokens, "f").push(token);
        __classPrivateFieldGet(this, _HTMLModel_instances, "m", _HTMLModel_updateDOM).call(this, token);
        const element = __classPrivateFieldGet(this, _HTMLModel_stack, "f")[__classPrivateFieldGet(this, _HTMLModel_stack, "f").length - 1];
        if (element && (element.name === 'script' || element.name === 'style') && element.openTag &&
            element.openTag.endOffset === lastOffset) {
            return _FormatterWorker_js__WEBPACK_IMPORTED_MODULE_2__.AbortTokenization;
        }
        return;
    };
    const processToken = (tokenValue, type, tokenStart, tokenEnd) => {
        tokenStart += baseOffset;
        tokenEnd += baseOffset;
        lastOffset = tokenEnd;
        const tokenType = type ? new Set(type.split(' ')) : new Set();
        const token = new Token(tokenValue, tokenType, tokenStart, tokenEnd);
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
                token.value = `${pendingToken.value}${tokenValue}`;
                token.type = pendingToken.type;
            }
            else if ((tokenValue.startsWith('&') && type === 'error' && pendingToken.type.size === 0) ||
                (type === null && pendingToken.type.has('error'))) {
                pendingToken.endOffset = token.endOffset;
                pendingToken.value += tokenValue;
                pendingToken.type = token.type;
                return;
            }
            else if (pushToken(pendingToken) === _FormatterWorker_js__WEBPACK_IMPORTED_MODULE_2__.AbortTokenization) {
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
    while (true) {
        baseOffset = lastOffset;
        tokenizer(text.substring(lastOffset), processToken);
        if (pendingToken) {
            pushToken(pendingToken);
            pendingToken = null;
        }
        if (lastOffset >= text.length) {
            break;
        }
        const element = __classPrivateFieldGet(this, _HTMLModel_stack, "f")[__classPrivateFieldGet(this, _HTMLModel_stack, "f").length - 1];
        if (!element) {
            break;
        }
        while (true) {
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
        const tokenStart = element.openTag.endOffset;
        const tokenEnd = lastOffset;
        const tokenValue = text.substring(tokenStart, tokenEnd);
        __classPrivateFieldGet(this, _HTMLModel_tokens, "f").push(new Token(tokenValue, new Set(), tokenStart, tokenEnd));
    }
    while (__classPrivateFieldGet(this, _HTMLModel_stack, "f").length > 1) {
        const element = __classPrivateFieldGet(this, _HTMLModel_stack, "f")[__classPrivateFieldGet(this, _HTMLModel_stack, "f").length - 1];
        if (!element) {
            break;
        }
        __classPrivateFieldGet(this, _HTMLModel_instances, "m", _HTMLModel_popElement).call(this, new Tag(element.name, text.length, text.length, new Map(), false, false));
    }
}, _HTMLModel_updateDOM = function _HTMLModel_updateDOM(token) {
    const value = token.value;
    const type = token.type;
    switch (__classPrivateFieldGet(this, _HTMLModel_state, "f")) {
        case ParseState.Initial:
            if (hasTokenInSet(type, 'bracket') && (value === '<' || value === '</')) {
                __classPrivateFieldGet(this, _HTMLModel_instances, "m", _HTMLModel_onStartTag).call(this, token);
                __classPrivateFieldSet(this, _HTMLModel_state, ParseState.Tag, "f");
            }
            return;
        case ParseState.Tag:
            if (hasTokenInSet(type, 'tag') && !hasTokenInSet(type, 'bracket')) {
                __classPrivateFieldSet(this, _HTMLModel_tagName, value.trim().toLowerCase(), "f");
            }
            else if (hasTokenInSet(type, 'attribute')) {
                __classPrivateFieldSet(this, _HTMLModel_attributeName, value.trim().toLowerCase(), "f");
                __classPrivateFieldGet(this, _HTMLModel_attributes, "f").set(__classPrivateFieldGet(this, _HTMLModel_attributeName, "f"), '');
                __classPrivateFieldSet(this, _HTMLModel_state, ParseState.AttributeName, "f");
            }
            else if (hasTokenInSet(type, 'bracket') && (value === '>' || value === '/>')) {
                __classPrivateFieldGet(this, _HTMLModel_instances, "m", _HTMLModel_onEndTag).call(this, token);
                __classPrivateFieldSet(this, _HTMLModel_state, ParseState.Initial, "f");
            }
            return;
        case ParseState.AttributeName:
            if (!type.size && value === '=') {
                __classPrivateFieldSet(this, _HTMLModel_state, ParseState.AttributeValue, "f");
            }
            else if (hasTokenInSet(type, 'bracket') && (value === '>' || value === '/>')) {
                __classPrivateFieldGet(this, _HTMLModel_instances, "m", _HTMLModel_onEndTag).call(this, token);
                __classPrivateFieldSet(this, _HTMLModel_state, ParseState.Initial, "f");
            }
            return;
        case ParseState.AttributeValue:
            if (hasTokenInSet(type, 'string')) {
                __classPrivateFieldGet(this, _HTMLModel_attributes, "f").set(__classPrivateFieldGet(this, _HTMLModel_attributeName, "f"), value);
                __classPrivateFieldSet(this, _HTMLModel_state, ParseState.Tag, "f");
            }
            else if (hasTokenInSet(type, 'bracket') && (value === '>' || value === '/>')) {
                __classPrivateFieldGet(this, _HTMLModel_instances, "m", _HTMLModel_onEndTag).call(this, token);
                __classPrivateFieldSet(this, _HTMLModel_state, ParseState.Initial, "f");
            }
            return;
    }
}, _HTMLModel_onStartTag = function _HTMLModel_onStartTag(token) {
    __classPrivateFieldSet(this, _HTMLModel_tagName, '', "f");
    __classPrivateFieldSet(this, _HTMLModel_tagStartOffset, token.startOffset, "f");
    __classPrivateFieldSet(this, _HTMLModel_tagEndOffset, null, "f");
    __classPrivateFieldSet(this, _HTMLModel_attributes, new Map(), "f");
    __classPrivateFieldSet(this, _HTMLModel_attributeName, '', "f");
    __classPrivateFieldSet(this, _HTMLModel_isOpenTag, token.value === '<', "f");
}, _HTMLModel_onEndTag = function _HTMLModel_onEndTag(token) {
    __classPrivateFieldSet(this, _HTMLModel_tagEndOffset, token.endOffset, "f");
    const selfClosingTag = token.value === '/>' || SelfClosingTags.has(__classPrivateFieldGet(this, _HTMLModel_tagName, "f"));
    const tag = new Tag(__classPrivateFieldGet(this, _HTMLModel_tagName, "f"), __classPrivateFieldGet(this, _HTMLModel_tagStartOffset, "f") || 0, __classPrivateFieldGet(this, _HTMLModel_tagEndOffset, "f"), __classPrivateFieldGet(this, _HTMLModel_attributes, "f"), __classPrivateFieldGet(this, _HTMLModel_isOpenTag, "f"), selfClosingTag);
    __classPrivateFieldGet(this, _HTMLModel_instances, "m", _HTMLModel_onTagComplete).call(this, tag);
}, _HTMLModel_onTagComplete = function _HTMLModel_onTagComplete(tag) {
    if (tag.isOpenTag) {
        const topElement = __classPrivateFieldGet(this, _HTMLModel_stack, "f")[__classPrivateFieldGet(this, _HTMLModel_stack, "f").length - 1];
        if (topElement) {
            const tagSet = AutoClosingTags.get(topElement.name);
            if (topElement !== __classPrivateFieldGet(this, _HTMLModel_documentInternal, "f") && topElement.openTag && topElement.openTag.selfClosingTag) {
                __classPrivateFieldGet(this, _HTMLModel_instances, "m", _HTMLModel_popElement).call(this, autocloseTag(topElement, topElement.openTag.endOffset));
            }
            else if (tagSet && tagSet.has(tag.name)) {
                __classPrivateFieldGet(this, _HTMLModel_instances, "m", _HTMLModel_popElement).call(this, autocloseTag(topElement, tag.startOffset));
            }
            __classPrivateFieldGet(this, _HTMLModel_instances, "m", _HTMLModel_pushElement).call(this, tag);
        }
        return;
    }
    let lastTag = __classPrivateFieldGet(this, _HTMLModel_stack, "f")[__classPrivateFieldGet(this, _HTMLModel_stack, "f").length - 1];
    while (__classPrivateFieldGet(this, _HTMLModel_stack, "f").length > 1 && lastTag && lastTag.name !== tag.name) {
        __classPrivateFieldGet(this, _HTMLModel_instances, "m", _HTMLModel_popElement).call(this, autocloseTag(lastTag, tag.startOffset));
        lastTag = __classPrivateFieldGet(this, _HTMLModel_stack, "f")[__classPrivateFieldGet(this, _HTMLModel_stack, "f").length - 1];
    }
    if (__classPrivateFieldGet(this, _HTMLModel_stack, "f").length === 1) {
        return;
    }
    __classPrivateFieldGet(this, _HTMLModel_instances, "m", _HTMLModel_popElement).call(this, tag);
    function autocloseTag(element, offset) {
        return new Tag(element.name, offset, offset, new Map(), false, false);
    }
}, _HTMLModel_popElement = function _HTMLModel_popElement(closeTag) {
    const element = __classPrivateFieldGet(this, _HTMLModel_stack, "f").pop();
    if (!element) {
        return;
    }
    element.closeTag = closeTag;
}, _HTMLModel_pushElement = function _HTMLModel_pushElement(openTag) {
    const topElement = __classPrivateFieldGet(this, _HTMLModel_stack, "f")[__classPrivateFieldGet(this, _HTMLModel_stack, "f").length - 1];
    const newElement = new FormatterElement(openTag.name);
    if (topElement) {
        newElement.parent = topElement;
        topElement.children.push(newElement);
    }
    newElement.openTag = openTag;
    __classPrivateFieldGet(this, _HTMLModel_stack, "f").push(newElement);
};
const SelfClosingTags = new Set([
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
    'wbr',
]);
// @see https://www.w3.org/TR/html/syntax.html 8.1.2.4 Optional tags
const AutoClosingTags = new Map([
    ['head', new Set(['body'])],
    ['li', new Set(['li'])],
    ['dt', new Set(['dt', 'dd'])],
    ['dd', new Set(['dt', 'dd'])],
    [
        'p',
        new Set([
            'address', 'article', 'aside', 'blockquote', 'div', 'dl', 'fieldset', 'footer', 'form',
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup', 'hr',
            'main', 'nav', 'ol', 'p', 'pre', 'section', 'table', 'ul',
        ]),
    ],
    ['rb', new Set(['rb', 'rt', 'rtc', 'rp'])],
    ['rt', new Set(['rb', 'rt', 'rtc', 'rp'])],
    ['rtc', new Set(['rb', 'rtc', 'rp'])],
    ['rp', new Set(['rb', 'rt', 'rtc', 'rp'])],
    ['optgroup', new Set(['optgroup'])],
    ['option', new Set(['option', 'optgroup'])],
    ['colgroup', new Set(['colgroup'])],
    ['thead', new Set(['tbody', 'tfoot'])],
    ['tbody', new Set(['tbody', 'tfoot'])],
    ['tfoot', new Set(['tbody'])],
    ['tr', new Set(['tr'])],
    ['td', new Set(['td', 'th'])],
    ['th', new Set(['td', 'th'])],
]);
var ParseState;
(function (ParseState) {
    ParseState["Initial"] = "Initial";
    ParseState["Tag"] = "Tag";
    ParseState["AttributeName"] = "AttributeName";
    ParseState["AttributeValue"] = "AttributeValue";
})(ParseState || (ParseState = {}));
class Token {
    constructor(value, type, startOffset, endOffset) {
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "startOffset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "endOffset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.value = value;
        this.type = type;
        this.startOffset = startOffset;
        this.endOffset = endOffset;
    }
}
class Tag {
    constructor(name, startOffset, endOffset, attributes, isOpenTag, selfClosingTag) {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "startOffset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "endOffset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "attributes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "isOpenTag", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "selfClosingTag", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = name;
        this.startOffset = startOffset;
        this.endOffset = endOffset;
        this.attributes = attributes;
        this.isOpenTag = isOpenTag;
        this.selfClosingTag = selfClosingTag;
    }
}
class FormatterElement {
    constructor(name) {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "children", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "parent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "openTag", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "closeTag", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        this.name = name;
    }
}


/***/ }),

/***/ "./src/entrypoints/formatter_worker/IdentityFormatter.ts":
/*!***************************************************************!*\
  !*** ./src/entrypoints/formatter_worker/IdentityFormatter.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IdentityFormatter: () => (/* binding */ IdentityFormatter)
/* harmony export */ });
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class IdentityFormatter {
    constructor(builder) {
        Object.defineProperty(this, "builder", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: builder
        });
    }
    format(text, lineEndings, fromOffset, toOffset) {
        const content = text.substring(fromOffset, toOffset);
        this.builder.addToken(content, fromOffset);
    }
}


/***/ }),

/***/ "./src/entrypoints/formatter_worker/JSONFormatter.ts":
/*!***********************************************************!*\
  !*** ./src/entrypoints/formatter_worker/JSONFormatter.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JSONFormatter: () => (/* binding */ JSONFormatter)
/* harmony export */ });
/* harmony import */ var _FormatterWorker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormatterWorker.js */ "./src/entrypoints/formatter_worker/FormatterWorker.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class JSONFormatter {
    constructor(builder) {
        Object.defineProperty(this, "builder", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "toOffset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "fromOffset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "lineEndings", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "lastLine", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "text", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.builder = builder;
        this.lastLine = -1;
    }
    format(text, lineEndings, fromOffset, toOffset) {
        this.lineEndings = lineEndings;
        this.fromOffset = fromOffset;
        this.toOffset = toOffset;
        this.lastLine = -1;
        this.text = text;
        const tokenize = (0,_FormatterWorker_js__WEBPACK_IMPORTED_MODULE_0__.createTokenizer)('application/json');
        tokenize(text.substring(this.fromOffset, this.toOffset), this.tokenCallback.bind(this));
    }
    tokenCallback(token, type, startPosition) {
        switch (token.charAt(0)) {
            case '{':
            case '[':
                if (this.text[startPosition + 1] === '}' || this.text[startPosition + 1] === ']') {
                    this.builder.addToken(token, startPosition);
                }
                else {
                    this.builder.addToken(token, startPosition);
                    this.builder.addNewLine();
                    this.builder.increaseNestingLevel();
                }
                break;
            case '}':
            case ']':
                if (this.text[startPosition - 1] === '{' || this.text[startPosition - 1] === '[') {
                    this.builder.addToken(token, startPosition);
                }
                else {
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


/***/ }),

/***/ "./src/entrypoints/formatter_worker/Substitute.ts":
/*!********************************************************!*\
  !*** ./src/entrypoints/formatter_worker/Substitute.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   substituteExpression: () => (/* binding */ substituteExpression)
/* harmony export */ });
/* harmony import */ var _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../third_party/acorn/acorn.js */ "./src/third_party/acorn/acorn.ts");
/* harmony import */ var _AcornTokenizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AcornTokenizer.js */ "./src/entrypoints/formatter_worker/AcornTokenizer.ts");
/* harmony import */ var _FormatterActions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormatterActions.js */ "./src/entrypoints/formatter_worker/FormatterActions.ts");
/* harmony import */ var _ScopeParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ScopeParser.js */ "./src/entrypoints/formatter_worker/ScopeParser.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




function substituteExpression(expression, nameMap) {
    const replacements = computeSubstitution(expression, nameMap);
    return applySubstitution(expression, replacements);
}
// Given an |expression| and a mapping from names to new names, the |computeSubstitution|
// function returns a list of replacements sorted by the offset. The function throws if
// it cannot parse the expression or the substitution is impossible to perform (for example
// if the substitution target is 'this' within a function, it would become bound there).
function computeSubstitution(expression, nameMap) {
    // Parse the expression and find variables and scopes.
    const root = _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_0__.parse(expression, { ecmaVersion: _AcornTokenizer_js__WEBPACK_IMPORTED_MODULE_1__.ECMA_VERSION, allowAwaitOutsideFunction: true, ranges: false, checkPrivateFields: false });
    const scopeVariables = new _ScopeParser_js__WEBPACK_IMPORTED_MODULE_3__.ScopeVariableAnalysis(root);
    scopeVariables.run();
    const freeVariables = scopeVariables.getFreeVariables();
    const result = [];
    // Prepare the machinery for generating fresh names (to avoid variable captures).
    const allNames = scopeVariables.getAllNames();
    for (const rename of nameMap.values()) {
        if (rename) {
            allNames.add(rename);
        }
    }
    function getNewName(base) {
        let i = 1;
        while (allNames.has(`${base}_${i}`)) {
            i++;
        }
        const newName = `${base}_${i}`;
        allNames.add(newName);
        return newName;
    }
    // Perform the substitutions.
    for (const [name, rename] of nameMap.entries()) {
        const defUse = freeVariables.get(name);
        if (!defUse) {
            continue;
        }
        if (rename === null) {
            throw new Error(`Cannot substitute '${name}' as the underlying variable '${rename}' is unavailable`);
        }
        const binders = [];
        for (const use of defUse) {
            result.push({
                from: name,
                to: rename,
                offset: use.offset,
                isShorthandAssignmentProperty: use.isShorthandAssignmentProperty,
            });
            binders.push(...use.scope.findBinders(rename));
        }
        // If there is a capturing binder, rename the bound variable.
        for (const binder of binders) {
            if (binder.definitionKind === _FormatterActions_js__WEBPACK_IMPORTED_MODULE_2__.DefinitionKind.Fixed) {
                // If the identifier is bound to a fixed name, such as 'this',
                // then refuse to do the substitution.
                throw new Error(`Cannot avoid capture of '${rename}'`);
            }
            const newName = getNewName(rename);
            for (const use of binder.uses) {
                result.push({
                    from: rename,
                    to: newName,
                    offset: use.offset,
                    isShorthandAssignmentProperty: use.isShorthandAssignmentProperty,
                });
            }
        }
    }
    result.sort((l, r) => l.offset - r.offset);
    return result;
}
function applySubstitution(expression, replacements) {
    const accumulator = [];
    let last = 0;
    for (const r of replacements) {
        accumulator.push(expression.slice(last, r.offset));
        let replacement = r.to;
        if (r.isShorthandAssignmentProperty) {
            // Let us expand the shorthand to full assignment.
            replacement = `${r.from}: ${r.to}`;
        }
        accumulator.push(replacement);
        last = r.offset + r.from.length;
    }
    accumulator.push(expression.slice(last));
    return accumulator.join('');
}


/***/ })

}]);