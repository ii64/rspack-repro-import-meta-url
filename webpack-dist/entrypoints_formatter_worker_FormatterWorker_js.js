"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["entrypoints_formatter_worker_FormatterWorker_js"],{

/***/ "./entrypoints/formatter_worker/CSSFormatter.js":
/*!******************************************************!*\
  !*** ./entrypoints/formatter_worker/CSSFormatter.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSFormatter: () => (/* binding */ CSSFormatter)
/* harmony export */ });
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _FormatterWorker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormatterWorker.js */ "./entrypoints/formatter_worker/FormatterWorker.js");
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


const cssTrimEnd = (tokenValue) => {
    // https://drafts.csswg.org/css-syntax/#whitespace
    const re = /(?:\r?\n|[\t\f\r ])+$/g;
    return tokenValue.replace(re, '');
};
class CSSFormatter {
    #builder;
    #toOffset;
    #fromOffset;
    #lineEndings;
    #lastLine;
    #state;
    constructor(builder) {
        this.#builder = builder;
        this.#lastLine = -1;
        this.#state = {
            eatWhitespace: undefined,
            seenProperty: undefined,
            inPropertyValue: undefined,
            afterClosingBrace: undefined,
        };
    }
    format(text, lineEndings, fromOffset, toOffset) {
        this.#lineEndings = lineEndings;
        this.#fromOffset = fromOffset;
        this.#toOffset = toOffset;
        this.#state = {
            eatWhitespace: undefined,
            seenProperty: undefined,
            inPropertyValue: undefined,
            afterClosingBrace: undefined,
        };
        this.#lastLine = -1;
        const tokenize = (0,_FormatterWorker_js__WEBPACK_IMPORTED_MODULE_1__.createTokenizer)('text/css');
        const oldEnforce = this.#builder.setEnforceSpaceBetweenWords(false);
        tokenize(text.substring(this.#fromOffset, this.#toOffset), this.#tokenCallback.bind(this));
        this.#builder.setEnforceSpaceBetweenWords(oldEnforce);
    }
    #tokenCallback(token, type, startPosition) {
        startPosition += this.#fromOffset;
        const startLine = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.lowerBound(this.#lineEndings, startPosition, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.DEFAULT_COMPARATOR);
        if (startLine !== this.#lastLine) {
            this.#state.eatWhitespace = true;
        }
        if (type && (/^property/.test(type) || /^variable-2/.test(type)) && !this.#state.inPropertyValue) {
            this.#state.seenProperty = true;
        }
        this.#lastLine = startLine;
        // https://drafts.csswg.org/css-syntax/#whitespace
        const isWhitespace = /^(?:\r?\n|[\t\f\r ])+$/.test(token);
        if (isWhitespace) {
            if (!this.#state.eatWhitespace) {
                this.#builder.addSoftSpace();
            }
            return;
        }
        this.#state.eatWhitespace = false;
        if (token === '\n') {
            return;
        }
        if (token !== '}') {
            if (this.#state.afterClosingBrace) {
                this.#builder.addNewLine(true);
            }
            this.#state.afterClosingBrace = false;
        }
        if (token === '}') {
            if (this.#state.inPropertyValue) {
                this.#builder.addNewLine();
            }
            this.#builder.decreaseNestingLevel();
            this.#state.afterClosingBrace = true;
            this.#state.inPropertyValue = false;
        }
        else if (token === ':' && !this.#state.inPropertyValue && this.#state.seenProperty) {
            this.#builder.addToken(token, startPosition);
            this.#builder.addSoftSpace();
            this.#state.eatWhitespace = true;
            this.#state.inPropertyValue = true;
            this.#state.seenProperty = false;
            return;
        }
        else if (token === '{') {
            this.#builder.addSoftSpace();
            this.#builder.addToken(token, startPosition);
            this.#builder.addNewLine();
            this.#builder.increaseNestingLevel();
            return;
        }
        this.#builder.addToken(cssTrimEnd(token), startPosition);
        if (type === 'comment' && !this.#state.inPropertyValue && !this.#state.seenProperty) {
            this.#builder.addNewLine();
        }
        if (token === ';' && this.#state.inPropertyValue) {
            this.#state.inPropertyValue = false;
            this.#builder.addNewLine();
        }
        else if (token === '}') {
            this.#builder.addNewLine();
        }
    }
}
//# sourceMappingURL=CSSFormatter.js.map

/***/ }),

/***/ "./entrypoints/formatter_worker/FormattedContentBuilder.js":
/*!*****************************************************************!*\
  !*** ./entrypoints/formatter_worker/FormattedContentBuilder.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormattedContentBuilder: () => (/* binding */ FormattedContentBuilder)
/* harmony export */ });
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class FormattedContentBuilder {
    indentString;
    #lastOriginalPosition = 0;
    #formattedContent = [];
    #formattedContentLength = 0;
    #lastFormattedPosition = 0;
    #nestingLevel = 0;
    #newLines = 0;
    #enforceSpaceBetweenWords = true;
    #softSpace = false;
    #hardSpaces = 0;
    #cachedIndents = new Map();
    #canBeIdentifierOrNumber = /[$\u200C\u200D\p{ID_Continue}]/u;
    mapping = { original: [0], formatted: [0] };
    constructor(indentString) {
        this.indentString = indentString;
    }
    setEnforceSpaceBetweenWords(value) {
        const oldValue = this.#enforceSpaceBetweenWords;
        this.#enforceSpaceBetweenWords = value;
        return oldValue;
    }
    addToken(token, offset) {
        // Skip the regex check if `addSoftSpace` will be a no-op.
        if (this.#enforceSpaceBetweenWords && !this.#hardSpaces && !this.#softSpace) {
            const lastCharOfLastToken = this.#formattedContent.at(-1)?.at(-1) ?? '';
            if (this.#canBeIdentifierOrNumber.test(lastCharOfLastToken) && this.#canBeIdentifierOrNumber.test(token)) {
                this.addSoftSpace();
            }
        }
        this.#appendFormatting();
        // Insert token.
        this.#addMappingIfNeeded(offset);
        this.#addText(token);
    }
    addSoftSpace() {
        if (!this.#hardSpaces) {
            this.#softSpace = true;
        }
    }
    addHardSpace() {
        this.#softSpace = false;
        ++this.#hardSpaces;
    }
    addNewLine(noSquash) {
        // Avoid leading newlines.
        if (!this.#formattedContentLength) {
            return;
        }
        if (noSquash) {
            ++this.#newLines;
        }
        else {
            this.#newLines = this.#newLines || 1;
        }
    }
    increaseNestingLevel() {
        this.#nestingLevel += 1;
    }
    decreaseNestingLevel() {
        if (this.#nestingLevel > 0) {
            this.#nestingLevel -= 1;
        }
    }
    content() {
        return this.#formattedContent.join('') + (this.#newLines ? '\n' : '');
    }
    #appendFormatting() {
        if (this.#newLines) {
            for (let i = 0; i < this.#newLines; ++i) {
                this.#addText('\n');
            }
            this.#addText(this.#indent());
        }
        else if (this.#softSpace) {
            this.#addText(' ');
        }
        if (this.#hardSpaces) {
            for (let i = 0; i < this.#hardSpaces; ++i) {
                this.#addText(' ');
            }
        }
        this.#newLines = 0;
        this.#softSpace = false;
        this.#hardSpaces = 0;
    }
    #indent() {
        const cachedValue = this.#cachedIndents.get(this.#nestingLevel);
        if (cachedValue) {
            return cachedValue;
        }
        let fullIndent = '';
        for (let i = 0; i < this.#nestingLevel; ++i) {
            fullIndent += this.indentString;
        }
        // Cache a maximum of 20 nesting level indents.
        if (this.#nestingLevel <= 20) {
            this.#cachedIndents.set(this.#nestingLevel, fullIndent);
        }
        return fullIndent;
    }
    #addText(text) {
        this.#formattedContent.push(text);
        this.#formattedContentLength += text.length;
    }
    #addMappingIfNeeded(originalPosition) {
        if (originalPosition - this.#lastOriginalPosition === this.#formattedContentLength - this.#lastFormattedPosition) {
            return;
        }
        this.mapping.original.push(originalPosition);
        this.#lastOriginalPosition = originalPosition;
        this.mapping.formatted.push(this.#formattedContentLength);
        this.#lastFormattedPosition = this.#formattedContentLength;
    }
}
//# sourceMappingURL=FormattedContentBuilder.js.map

/***/ }),

/***/ "./entrypoints/formatter_worker/FormatterWorker.js":
/*!*********************************************************!*\
  !*** ./entrypoints/formatter_worker/FormatterWorker.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbortTokenization: () => (/* binding */ AbortTokenization),
/* harmony export */   createTokenizer: () => (/* binding */ createTokenizer),
/* harmony export */   evaluatableJavaScriptSubstring: () => (/* binding */ evaluatableJavaScriptSubstring),
/* harmony export */   format: () => (/* binding */ format),
/* harmony export */   substituteExpression: () => (/* reexport safe */ _Substitute_js__WEBPACK_IMPORTED_MODULE_10__.substituteExpression)
/* harmony export */ });
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */ var _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../third_party/acorn/acorn.js */ "./third_party/acorn/acorn.js");
/* harmony import */ var _AcornTokenizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AcornTokenizer.js */ "./entrypoints/formatter_worker/AcornTokenizer.js");
/* harmony import */ var _CSSFormatter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CSSFormatter.js */ "./entrypoints/formatter_worker/CSSFormatter.js");
/* harmony import */ var _FormattedContentBuilder_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormattedContentBuilder.js */ "./entrypoints/formatter_worker/FormattedContentBuilder.js");
/* harmony import */ var _HTMLFormatter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HTMLFormatter.js */ "./entrypoints/formatter_worker/HTMLFormatter.js");
/* harmony import */ var _IdentityFormatter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./IdentityFormatter.js */ "./entrypoints/formatter_worker/IdentityFormatter.js");
/* harmony import */ var _JavaScriptFormatter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./JavaScriptFormatter.js */ "./entrypoints/formatter_worker/JavaScriptFormatter.js");
/* harmony import */ var _JSONFormatter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./JSONFormatter.js */ "./entrypoints/formatter_worker/JSONFormatter.js");
/* harmony import */ var _Substitute_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Substitute.js */ "./entrypoints/formatter_worker/Substitute.js");
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
            case "text/html" /* FormattableMediaTypes.TEXT_HTML */: {
                const formatter = new _HTMLFormatter_js__WEBPACK_IMPORTED_MODULE_6__.HTMLFormatter(builder);
                formatter.format(text, lineEndings);
                break;
            }
            case "text/css" /* FormattableMediaTypes.TEXT_CSS */: {
                const formatter = new _CSSFormatter_js__WEBPACK_IMPORTED_MODULE_4__.CSSFormatter(builder);
                formatter.format(text, lineEndings, 0, text.length);
                break;
            }
            case "application/javascript" /* FormattableMediaTypes.APPLICATION_JAVASCRIPT */:
            case "text/javascript" /* FormattableMediaTypes.TEXT_JAVASCRIPT */: {
                const formatter = new _JavaScriptFormatter_js__WEBPACK_IMPORTED_MODULE_8__.JavaScriptFormatter(builder);
                formatter.format(text, lineEndings, 0, text.length);
                break;
            }
            case "application/json" /* FormattableMediaTypes.APPLICATION_JSON */:
            case "application/manifest+json" /* FormattableMediaTypes.APPLICATION_MANIFEST_JSON */: {
                const formatter = new _JSONFormatter_js__WEBPACK_IMPORTED_MODULE_9__.JSONFormatter(builder);
                formatter.format(text, lineEndings, 0, text.length);
                break;
            }
            default: {
                const formatter = new _IdentityFormatter_js__WEBPACK_IMPORTED_MODULE_7__.IdentityFormatter(builder);
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

//# sourceMappingURL=FormatterWorker.js.map

/***/ }),

/***/ "./entrypoints/formatter_worker/HTMLFormatter.js":
/*!*******************************************************!*\
  !*** ./entrypoints/formatter_worker/HTMLFormatter.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HTMLFormatter: () => (/* binding */ HTMLFormatter),
/* harmony export */   HTMLModel: () => (/* binding */ HTMLModel)
/* harmony export */ });
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _CSSFormatter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSFormatter.js */ "./entrypoints/formatter_worker/CSSFormatter.js");
/* harmony import */ var _FormatterWorker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormatterWorker.js */ "./entrypoints/formatter_worker/FormatterWorker.js");
/* harmony import */ var _JavaScriptFormatter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./JavaScriptFormatter.js */ "./entrypoints/formatter_worker/JavaScriptFormatter.js");
/* harmony import */ var _JSONFormatter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./JSONFormatter.js */ "./entrypoints/formatter_worker/JSONFormatter.js");
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





class HTMLFormatter {
    #builder;
    #jsFormatter;
    #jsonFormatter;
    #cssFormatter;
    #text;
    #lineEndings;
    #model;
    constructor(builder) {
        this.#builder = builder;
        this.#jsFormatter = new _JavaScriptFormatter_js__WEBPACK_IMPORTED_MODULE_3__.JavaScriptFormatter(builder);
        this.#jsonFormatter = new _JSONFormatter_js__WEBPACK_IMPORTED_MODULE_4__.JSONFormatter(builder);
        this.#cssFormatter = new _CSSFormatter_js__WEBPACK_IMPORTED_MODULE_1__.CSSFormatter(builder);
    }
    format(text, lineEndings) {
        this.#text = text;
        this.#lineEndings = lineEndings;
        this.#model = new HTMLModel(text);
        this.#walk(this.#model.document());
    }
    #formatTokensTill(element, offset) {
        if (!this.#model) {
            return;
        }
        let nextToken = this.#model.peekToken();
        while (nextToken && nextToken.startOffset < offset) {
            const token = this.#model.nextToken();
            this.#formatToken(element, token);
            nextToken = this.#model.peekToken();
        }
    }
    #walk(element) {
        if (!element.openTag || !element.closeTag) {
            throw new Error('Element is missing open or close tag');
        }
        if (element.parent) {
            this.#formatTokensTill(element.parent, element.openTag.startOffset);
        }
        this.#beforeOpenTag(element);
        this.#formatTokensTill(element, element.openTag.endOffset);
        this.#afterOpenTag(element);
        for (let i = 0; i < element.children.length; ++i) {
            this.#walk(element.children[i]);
        }
        this.#formatTokensTill(element, element.closeTag.startOffset);
        this.#beforeCloseTag(element);
        this.#formatTokensTill(element, element.closeTag.endOffset);
        this.#afterCloseTag(element);
    }
    #beforeOpenTag(element) {
        if (!this.#model) {
            return;
        }
        if (!element.children.length || element === this.#model.document()) {
            return;
        }
        this.#builder.addNewLine();
    }
    #afterOpenTag(element) {
        if (!this.#model) {
            return;
        }
        if (!element.children.length || element === this.#model.document()) {
            return;
        }
        this.#builder.increaseNestingLevel();
        this.#builder.addNewLine();
    }
    #beforeCloseTag(element) {
        if (!this.#model) {
            return;
        }
        if (!element.children.length || element === this.#model.document()) {
            return;
        }
        this.#builder.decreaseNestingLevel();
        this.#builder.addNewLine();
    }
    #afterCloseTag(_element) {
        this.#builder.addNewLine();
    }
    #formatToken(element, token) {
        if (_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.isWhitespace(token.value)) {
            return;
        }
        if (hasTokenInSet(token.type, 'comment') || hasTokenInSet(token.type, 'meta')) {
            this.#builder.addNewLine();
            this.#builder.addToken(token.value.trim(), token.startOffset);
            this.#builder.addNewLine();
            return;
        }
        if (!element.openTag || !element.closeTag) {
            return;
        }
        const isBodyToken = element.openTag.endOffset <= token.startOffset && token.startOffset < element.closeTag.startOffset;
        if (isBodyToken && element.name === 'style') {
            this.#builder.addNewLine();
            this.#builder.increaseNestingLevel();
            this.#cssFormatter.format(this.#text || '', this.#lineEndings || [], token.startOffset, token.endOffset);
            this.#builder.decreaseNestingLevel();
            return;
        }
        if (isBodyToken && element.name === 'script') {
            this.#builder.addNewLine();
            this.#builder.increaseNestingLevel();
            if (scriptTagIsJavaScript(element)) {
                this.#jsFormatter.format(this.#text || '', this.#lineEndings || [], token.startOffset, token.endOffset);
            }
            else if (scriptTagIsJSON(element)) {
                this.#jsonFormatter.format(this.#text || '', this.#lineEndings || [], token.startOffset, token.endOffset);
            }
            else {
                this.#builder.addToken(token.value, token.startOffset);
                this.#builder.addNewLine();
            }
            this.#builder.decreaseNestingLevel();
            return;
        }
        if (!isBodyToken && hasTokenInSet(token.type, 'attribute')) {
            this.#builder.addSoftSpace();
        }
        this.#builder.addToken(token.value, token.startOffset);
    }
}
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
    #state;
    #documentInternal;
    #stack;
    #tokens;
    #tokenIndex;
    #attributes;
    #attributeName;
    #tagName;
    #isOpenTag;
    #tagStartOffset;
    #tagEndOffset;
    constructor(text) {
        this.#state = "Initial" /* ParseState.Initial */;
        this.#documentInternal = new FormatterElement('document');
        this.#documentInternal.openTag = new Tag('document', 0, 0, new Map(), true, false);
        this.#documentInternal.closeTag = new Tag('document', text.length, text.length, new Map(), false, false);
        this.#stack = [this.#documentInternal];
        this.#tokens = [];
        this.#tokenIndex = 0;
        this.#build(text);
        this.#attributes = new Map();
        this.#attributeName = '';
        this.#tagName = '';
        this.#isOpenTag = false;
    }
    #build(text) {
        const tokenizer = (0,_FormatterWorker_js__WEBPACK_IMPORTED_MODULE_2__.createTokenizer)('text/html');
        let baseOffset = 0, lastOffset = 0;
        let pendingToken = null;
        const pushToken = (token) => {
            this.#tokens.push(token);
            this.#updateDOM(token);
            const element = this.#stack[this.#stack.length - 1];
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
            const element = this.#stack[this.#stack.length - 1];
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
            this.#tokens.push(new Token(tokenValue, new Set(), tokenStart, tokenEnd));
        }
        while (this.#stack.length > 1) {
            const element = this.#stack[this.#stack.length - 1];
            if (!element) {
                break;
            }
            this.#popElement(new Tag(element.name, text.length, text.length, new Map(), false, false));
        }
    }
    #updateDOM(token) {
        const value = token.value;
        const type = token.type;
        switch (this.#state) {
            case "Initial" /* ParseState.Initial */:
                if (hasTokenInSet(type, 'bracket') && (value === '<' || value === '</')) {
                    this.#onStartTag(token);
                    this.#state = "Tag" /* ParseState.Tag */;
                }
                return;
            case "Tag" /* ParseState.Tag */:
                if (hasTokenInSet(type, 'tag') && !hasTokenInSet(type, 'bracket')) {
                    this.#tagName = value.trim().toLowerCase();
                }
                else if (hasTokenInSet(type, 'attribute')) {
                    this.#attributeName = value.trim().toLowerCase();
                    this.#attributes.set(this.#attributeName, '');
                    this.#state = "AttributeName" /* ParseState.AttributeName */;
                }
                else if (hasTokenInSet(type, 'bracket') && (value === '>' || value === '/>')) {
                    this.#onEndTag(token);
                    this.#state = "Initial" /* ParseState.Initial */;
                }
                return;
            case "AttributeName" /* ParseState.AttributeName */:
                if (!type.size && value === '=') {
                    this.#state = "AttributeValue" /* ParseState.AttributeValue */;
                }
                else if (hasTokenInSet(type, 'bracket') && (value === '>' || value === '/>')) {
                    this.#onEndTag(token);
                    this.#state = "Initial" /* ParseState.Initial */;
                }
                return;
            case "AttributeValue" /* ParseState.AttributeValue */:
                if (hasTokenInSet(type, 'string')) {
                    this.#attributes.set(this.#attributeName, value);
                    this.#state = "Tag" /* ParseState.Tag */;
                }
                else if (hasTokenInSet(type, 'bracket') && (value === '>' || value === '/>')) {
                    this.#onEndTag(token);
                    this.#state = "Initial" /* ParseState.Initial */;
                }
                return;
        }
    }
    #onStartTag(token) {
        this.#tagName = '';
        this.#tagStartOffset = token.startOffset;
        this.#tagEndOffset = null;
        this.#attributes = new Map();
        this.#attributeName = '';
        this.#isOpenTag = token.value === '<';
    }
    #onEndTag(token) {
        this.#tagEndOffset = token.endOffset;
        const selfClosingTag = token.value === '/>' || SelfClosingTags.has(this.#tagName);
        const tag = new Tag(this.#tagName, this.#tagStartOffset || 0, this.#tagEndOffset, this.#attributes, this.#isOpenTag, selfClosingTag);
        this.#onTagComplete(tag);
    }
    #onTagComplete(tag) {
        if (tag.isOpenTag) {
            const topElement = this.#stack[this.#stack.length - 1];
            if (topElement) {
                const tagSet = AutoClosingTags.get(topElement.name);
                if (topElement !== this.#documentInternal && topElement.openTag && topElement.openTag.selfClosingTag) {
                    this.#popElement(autocloseTag(topElement, topElement.openTag.endOffset));
                }
                else if (tagSet && tagSet.has(tag.name)) {
                    this.#popElement(autocloseTag(topElement, tag.startOffset));
                }
                this.#pushElement(tag);
            }
            return;
        }
        let lastTag = this.#stack[this.#stack.length - 1];
        while (this.#stack.length > 1 && lastTag && lastTag.name !== tag.name) {
            this.#popElement(autocloseTag(lastTag, tag.startOffset));
            lastTag = this.#stack[this.#stack.length - 1];
        }
        if (this.#stack.length === 1) {
            return;
        }
        this.#popElement(tag);
        function autocloseTag(element, offset) {
            return new Tag(element.name, offset, offset, new Map(), false, false);
        }
    }
    #popElement(closeTag) {
        const element = this.#stack.pop();
        if (!element) {
            return;
        }
        element.closeTag = closeTag;
    }
    #pushElement(openTag) {
        const topElement = this.#stack[this.#stack.length - 1];
        const newElement = new FormatterElement(openTag.name);
        if (topElement) {
            newElement.parent = topElement;
            topElement.children.push(newElement);
        }
        newElement.openTag = openTag;
        this.#stack.push(newElement);
    }
    peekToken() {
        return this.#tokenIndex < this.#tokens.length ? this.#tokens[this.#tokenIndex] : null;
    }
    nextToken() {
        return this.#tokens[this.#tokenIndex++];
    }
    document() {
        return this.#documentInternal;
    }
}
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
class Token {
    value;
    type;
    startOffset;
    endOffset;
    constructor(value, type, startOffset, endOffset) {
        this.value = value;
        this.type = type;
        this.startOffset = startOffset;
        this.endOffset = endOffset;
    }
}
class Tag {
    name;
    startOffset;
    endOffset;
    attributes;
    isOpenTag;
    selfClosingTag;
    constructor(name, startOffset, endOffset, attributes, isOpenTag, selfClosingTag) {
        this.name = name;
        this.startOffset = startOffset;
        this.endOffset = endOffset;
        this.attributes = attributes;
        this.isOpenTag = isOpenTag;
        this.selfClosingTag = selfClosingTag;
    }
}
class FormatterElement {
    name;
    children = [];
    parent = null;
    openTag = null;
    closeTag = null;
    constructor(name) {
        this.name = name;
    }
}
//# sourceMappingURL=HTMLFormatter.js.map

/***/ }),

/***/ "./entrypoints/formatter_worker/IdentityFormatter.js":
/*!***********************************************************!*\
  !*** ./entrypoints/formatter_worker/IdentityFormatter.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IdentityFormatter: () => (/* binding */ IdentityFormatter)
/* harmony export */ });
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class IdentityFormatter {
    builder;
    constructor(builder) {
        this.builder = builder;
    }
    format(text, lineEndings, fromOffset, toOffset) {
        const content = text.substring(fromOffset, toOffset);
        this.builder.addToken(content, fromOffset);
    }
}
//# sourceMappingURL=IdentityFormatter.js.map

/***/ }),

/***/ "./entrypoints/formatter_worker/JSONFormatter.js":
/*!*******************************************************!*\
  !*** ./entrypoints/formatter_worker/JSONFormatter.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JSONFormatter: () => (/* binding */ JSONFormatter)
/* harmony export */ });
/* harmony import */ var _FormatterWorker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormatterWorker.js */ "./entrypoints/formatter_worker/FormatterWorker.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class JSONFormatter {
    builder;
    toOffset;
    fromOffset;
    lineEndings;
    lastLine;
    text;
    constructor(builder) {
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
//# sourceMappingURL=JSONFormatter.js.map

/***/ }),

/***/ "./entrypoints/formatter_worker/Substitute.js":
/*!****************************************************!*\
  !*** ./entrypoints/formatter_worker/Substitute.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   substituteExpression: () => (/* binding */ substituteExpression)
/* harmony export */ });
/* harmony import */ var _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../third_party/acorn/acorn.js */ "./third_party/acorn/acorn.js");
/* harmony import */ var _AcornTokenizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AcornTokenizer.js */ "./entrypoints/formatter_worker/AcornTokenizer.js");
/* harmony import */ var _ScopeParser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScopeParser.js */ "./entrypoints/formatter_worker/ScopeParser.js");
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
    const scopeVariables = new _ScopeParser_js__WEBPACK_IMPORTED_MODULE_2__.ScopeVariableAnalysis(root);
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
            if (binder.definitionKind === 3 /* DefinitionKind.Fixed */) {
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
//# sourceMappingURL=Substitute.js.map

/***/ })

}]);