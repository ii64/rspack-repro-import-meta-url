"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_entrypoints_formatter_worker_FormattedContentBuilder_ts"],{

/***/ "./src/entrypoints/formatter_worker/FormattedContentBuilder.ts":
/*!*********************************************************************!*\
  !*** ./src/entrypoints/formatter_worker/FormattedContentBuilder.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormattedContentBuilder: () => (/* binding */ FormattedContentBuilder)
/* harmony export */ });
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _FormattedContentBuilder_instances, _FormattedContentBuilder_lastOriginalPosition, _FormattedContentBuilder_formattedContent, _FormattedContentBuilder_formattedContentLength, _FormattedContentBuilder_lastFormattedPosition, _FormattedContentBuilder_nestingLevel, _FormattedContentBuilder_newLines, _FormattedContentBuilder_enforceSpaceBetweenWords, _FormattedContentBuilder_softSpace, _FormattedContentBuilder_hardSpaces, _FormattedContentBuilder_cachedIndents, _FormattedContentBuilder_canBeIdentifierOrNumber, _FormattedContentBuilder_appendFormatting, _FormattedContentBuilder_indent, _FormattedContentBuilder_addText, _FormattedContentBuilder_addMappingIfNeeded;
class FormattedContentBuilder {
    constructor(indentString) {
        _FormattedContentBuilder_instances.add(this);
        Object.defineProperty(this, "indentString", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: indentString
        });
        _FormattedContentBuilder_lastOriginalPosition.set(this, 0);
        _FormattedContentBuilder_formattedContent.set(this, []);
        _FormattedContentBuilder_formattedContentLength.set(this, 0);
        _FormattedContentBuilder_lastFormattedPosition.set(this, 0);
        _FormattedContentBuilder_nestingLevel.set(this, 0);
        _FormattedContentBuilder_newLines.set(this, 0);
        _FormattedContentBuilder_enforceSpaceBetweenWords.set(this, true);
        _FormattedContentBuilder_softSpace.set(this, false);
        _FormattedContentBuilder_hardSpaces.set(this, 0);
        _FormattedContentBuilder_cachedIndents.set(this, new Map());
        _FormattedContentBuilder_canBeIdentifierOrNumber.set(this, /[$\u200C\u200D\p{ID_Continue}]/u);
        Object.defineProperty(this, "mapping", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: { original: [0], formatted: [0] }
        });
    }
    setEnforceSpaceBetweenWords(value) {
        const oldValue = __classPrivateFieldGet(this, _FormattedContentBuilder_enforceSpaceBetweenWords, "f");
        __classPrivateFieldSet(this, _FormattedContentBuilder_enforceSpaceBetweenWords, value, "f");
        return oldValue;
    }
    addToken(token, offset) {
        // Skip the regex check if `addSoftSpace` will be a no-op.
        if (__classPrivateFieldGet(this, _FormattedContentBuilder_enforceSpaceBetweenWords, "f") && !__classPrivateFieldGet(this, _FormattedContentBuilder_hardSpaces, "f") && !__classPrivateFieldGet(this, _FormattedContentBuilder_softSpace, "f")) {
            const lastCharOfLastToken = __classPrivateFieldGet(this, _FormattedContentBuilder_formattedContent, "f").at(-1)?.at(-1) ?? '';
            if (__classPrivateFieldGet(this, _FormattedContentBuilder_canBeIdentifierOrNumber, "f").test(lastCharOfLastToken) && __classPrivateFieldGet(this, _FormattedContentBuilder_canBeIdentifierOrNumber, "f").test(token)) {
                this.addSoftSpace();
            }
        }
        __classPrivateFieldGet(this, _FormattedContentBuilder_instances, "m", _FormattedContentBuilder_appendFormatting).call(this);
        // Insert token.
        __classPrivateFieldGet(this, _FormattedContentBuilder_instances, "m", _FormattedContentBuilder_addMappingIfNeeded).call(this, offset);
        __classPrivateFieldGet(this, _FormattedContentBuilder_instances, "m", _FormattedContentBuilder_addText).call(this, token);
    }
    addSoftSpace() {
        if (!__classPrivateFieldGet(this, _FormattedContentBuilder_hardSpaces, "f")) {
            __classPrivateFieldSet(this, _FormattedContentBuilder_softSpace, true, "f");
        }
    }
    addHardSpace() {
        var _a;
        __classPrivateFieldSet(this, _FormattedContentBuilder_softSpace, false, "f");
        __classPrivateFieldSet(this, _FormattedContentBuilder_hardSpaces, (_a = __classPrivateFieldGet(this, _FormattedContentBuilder_hardSpaces, "f"), ++_a), "f");
    }
    addNewLine(noSquash) {
        var _a;
        // Avoid leading newlines.
        if (!__classPrivateFieldGet(this, _FormattedContentBuilder_formattedContentLength, "f")) {
            return;
        }
        if (noSquash) {
            __classPrivateFieldSet(this, _FormattedContentBuilder_newLines, (_a = __classPrivateFieldGet(this, _FormattedContentBuilder_newLines, "f"), ++_a), "f");
        }
        else {
            __classPrivateFieldSet(this, _FormattedContentBuilder_newLines, __classPrivateFieldGet(this, _FormattedContentBuilder_newLines, "f") || 1, "f");
        }
    }
    increaseNestingLevel() {
        __classPrivateFieldSet(this, _FormattedContentBuilder_nestingLevel, __classPrivateFieldGet(this, _FormattedContentBuilder_nestingLevel, "f") + 1, "f");
    }
    decreaseNestingLevel() {
        if (__classPrivateFieldGet(this, _FormattedContentBuilder_nestingLevel, "f") > 0) {
            __classPrivateFieldSet(this, _FormattedContentBuilder_nestingLevel, __classPrivateFieldGet(this, _FormattedContentBuilder_nestingLevel, "f") - 1, "f");
        }
    }
    content() {
        return __classPrivateFieldGet(this, _FormattedContentBuilder_formattedContent, "f").join('') + (__classPrivateFieldGet(this, _FormattedContentBuilder_newLines, "f") ? '\n' : '');
    }
}
_FormattedContentBuilder_lastOriginalPosition = new WeakMap(), _FormattedContentBuilder_formattedContent = new WeakMap(), _FormattedContentBuilder_formattedContentLength = new WeakMap(), _FormattedContentBuilder_lastFormattedPosition = new WeakMap(), _FormattedContentBuilder_nestingLevel = new WeakMap(), _FormattedContentBuilder_newLines = new WeakMap(), _FormattedContentBuilder_enforceSpaceBetweenWords = new WeakMap(), _FormattedContentBuilder_softSpace = new WeakMap(), _FormattedContentBuilder_hardSpaces = new WeakMap(), _FormattedContentBuilder_cachedIndents = new WeakMap(), _FormattedContentBuilder_canBeIdentifierOrNumber = new WeakMap(), _FormattedContentBuilder_instances = new WeakSet(), _FormattedContentBuilder_appendFormatting = function _FormattedContentBuilder_appendFormatting() {
    if (__classPrivateFieldGet(this, _FormattedContentBuilder_newLines, "f")) {
        for (let i = 0; i < __classPrivateFieldGet(this, _FormattedContentBuilder_newLines, "f"); ++i) {
            __classPrivateFieldGet(this, _FormattedContentBuilder_instances, "m", _FormattedContentBuilder_addText).call(this, '\n');
        }
        __classPrivateFieldGet(this, _FormattedContentBuilder_instances, "m", _FormattedContentBuilder_addText).call(this, __classPrivateFieldGet(this, _FormattedContentBuilder_instances, "m", _FormattedContentBuilder_indent).call(this));
    }
    else if (__classPrivateFieldGet(this, _FormattedContentBuilder_softSpace, "f")) {
        __classPrivateFieldGet(this, _FormattedContentBuilder_instances, "m", _FormattedContentBuilder_addText).call(this, ' ');
    }
    if (__classPrivateFieldGet(this, _FormattedContentBuilder_hardSpaces, "f")) {
        for (let i = 0; i < __classPrivateFieldGet(this, _FormattedContentBuilder_hardSpaces, "f"); ++i) {
            __classPrivateFieldGet(this, _FormattedContentBuilder_instances, "m", _FormattedContentBuilder_addText).call(this, ' ');
        }
    }
    __classPrivateFieldSet(this, _FormattedContentBuilder_newLines, 0, "f");
    __classPrivateFieldSet(this, _FormattedContentBuilder_softSpace, false, "f");
    __classPrivateFieldSet(this, _FormattedContentBuilder_hardSpaces, 0, "f");
}, _FormattedContentBuilder_indent = function _FormattedContentBuilder_indent() {
    const cachedValue = __classPrivateFieldGet(this, _FormattedContentBuilder_cachedIndents, "f").get(__classPrivateFieldGet(this, _FormattedContentBuilder_nestingLevel, "f"));
    if (cachedValue) {
        return cachedValue;
    }
    let fullIndent = '';
    for (let i = 0; i < __classPrivateFieldGet(this, _FormattedContentBuilder_nestingLevel, "f"); ++i) {
        fullIndent += this.indentString;
    }
    // Cache a maximum of 20 nesting level indents.
    if (__classPrivateFieldGet(this, _FormattedContentBuilder_nestingLevel, "f") <= 20) {
        __classPrivateFieldGet(this, _FormattedContentBuilder_cachedIndents, "f").set(__classPrivateFieldGet(this, _FormattedContentBuilder_nestingLevel, "f"), fullIndent);
    }
    return fullIndent;
}, _FormattedContentBuilder_addText = function _FormattedContentBuilder_addText(text) {
    __classPrivateFieldGet(this, _FormattedContentBuilder_formattedContent, "f").push(text);
    __classPrivateFieldSet(this, _FormattedContentBuilder_formattedContentLength, __classPrivateFieldGet(this, _FormattedContentBuilder_formattedContentLength, "f") + text.length, "f");
}, _FormattedContentBuilder_addMappingIfNeeded = function _FormattedContentBuilder_addMappingIfNeeded(originalPosition) {
    if (originalPosition - __classPrivateFieldGet(this, _FormattedContentBuilder_lastOriginalPosition, "f") === __classPrivateFieldGet(this, _FormattedContentBuilder_formattedContentLength, "f") - __classPrivateFieldGet(this, _FormattedContentBuilder_lastFormattedPosition, "f")) {
        return;
    }
    this.mapping.original.push(originalPosition);
    __classPrivateFieldSet(this, _FormattedContentBuilder_lastOriginalPosition, originalPosition, "f");
    this.mapping.formatted.push(__classPrivateFieldGet(this, _FormattedContentBuilder_formattedContentLength, "f"));
    __classPrivateFieldSet(this, _FormattedContentBuilder_lastFormattedPosition, __classPrivateFieldGet(this, _FormattedContentBuilder_formattedContentLength, "f"), "f");
};


/***/ })

}]);