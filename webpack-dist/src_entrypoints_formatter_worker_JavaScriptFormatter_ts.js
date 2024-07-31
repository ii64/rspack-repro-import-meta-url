"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_entrypoints_formatter_worker_JavaScriptFormatter_ts"],{

/***/ "./src/entrypoints/formatter_worker/ESTreeWalker.ts":
/*!**********************************************************!*\
  !*** ./src/entrypoints/formatter_worker/ESTreeWalker.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ESTreeWalker: () => (/* binding */ ESTreeWalker)
/* harmony export */ });
// Copyright (c) 2014 The Chromium Authors. All rights reserved.
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
var _ESTreeWalker_instances, _ESTreeWalker_beforeVisit, _ESTreeWalker_afterVisit, _ESTreeWalker_innerWalk, _ESTreeWalker_walkArray;
class ESTreeWalker {
    constructor(beforeVisit, afterVisit) {
        _ESTreeWalker_instances.add(this);
        _ESTreeWalker_beforeVisit.set(this, void 0);
        _ESTreeWalker_afterVisit.set(this, void 0);
        __classPrivateFieldSet(this, _ESTreeWalker_beforeVisit, beforeVisit, "f");
        __classPrivateFieldSet(this, _ESTreeWalker_afterVisit, afterVisit, "f");
    }
    walk(ast) {
        __classPrivateFieldGet(this, _ESTreeWalker_instances, "m", _ESTreeWalker_innerWalk).call(this, ast, null);
    }
}
_ESTreeWalker_beforeVisit = new WeakMap(), _ESTreeWalker_afterVisit = new WeakMap(), _ESTreeWalker_instances = new WeakSet(), _ESTreeWalker_innerWalk = function _ESTreeWalker_innerWalk(node, parent) {
    if (!node) {
        return;
    }
    node.parent = parent;
    __classPrivateFieldGet(this, _ESTreeWalker_beforeVisit, "f").call(null, node);
    const walkOrder = WALK_ORDER[node.type];
    if (!walkOrder) {
        console.error('Walk order not defined for ' + node.type);
        return;
    }
    if (node.type === 'TemplateLiteral') {
        const templateLiteral = node;
        const expressionsLength = templateLiteral.expressions.length;
        for (let i = 0; i < expressionsLength; ++i) {
            __classPrivateFieldGet(this, _ESTreeWalker_instances, "m", _ESTreeWalker_innerWalk).call(this, templateLiteral.quasis[i], templateLiteral);
            __classPrivateFieldGet(this, _ESTreeWalker_instances, "m", _ESTreeWalker_innerWalk).call(this, templateLiteral.expressions[i], templateLiteral);
        }
        __classPrivateFieldGet(this, _ESTreeWalker_instances, "m", _ESTreeWalker_innerWalk).call(this, templateLiteral.quasis[expressionsLength], templateLiteral);
    }
    else {
        for (let i = 0; i < walkOrder.length; ++i) {
            // @ts-ignore We are doing type traversal here, but the strings
            // in _walkOrder are not mapping. Preferably, we would use the
            // properties as defined in the types, but we can't do that yet.
            // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const entity = node[walkOrder[i]];
            if (Array.isArray(entity)) {
                __classPrivateFieldGet(this, _ESTreeWalker_instances, "m", _ESTreeWalker_walkArray).call(this, entity, node);
            }
            else {
                __classPrivateFieldGet(this, _ESTreeWalker_instances, "m", _ESTreeWalker_innerWalk).call(this, entity, node);
            }
        }
    }
    __classPrivateFieldGet(this, _ESTreeWalker_afterVisit, "f").call(null, node);
}, _ESTreeWalker_walkArray = function _ESTreeWalker_walkArray(nodeArray, parentNode) {
    for (let i = 0; i < nodeArray.length; ++i) {
        __classPrivateFieldGet(this, _ESTreeWalker_instances, "m", _ESTreeWalker_innerWalk).call(this, nodeArray[i], parentNode);
    }
};
const WALK_ORDER = {
    'AwaitExpression': ['argument'],
    'ArrayExpression': ['elements'],
    'ArrayPattern': ['elements'],
    'ArrowFunctionExpression': ['params', 'body'],
    'AssignmentExpression': ['left', 'right'],
    'AssignmentPattern': ['left', 'right'],
    'BinaryExpression': ['left', 'right'],
    'BlockStatement': ['body'],
    'BreakStatement': ['label'],
    'CallExpression': ['callee', 'arguments'],
    'CatchClause': ['param', 'body'],
    'ClassBody': ['body'],
    'ClassDeclaration': ['id', 'superClass', 'body'],
    'ClassExpression': ['id', 'superClass', 'body'],
    'ChainExpression': ['expression'],
    'ConditionalExpression': ['test', 'consequent', 'alternate'],
    'ContinueStatement': ['label'],
    'DebuggerStatement': [],
    'DoWhileStatement': ['body', 'test'],
    'EmptyStatement': [],
    'ExpressionStatement': ['expression'],
    'ForInStatement': ['left', 'right', 'body'],
    'ForOfStatement': ['left', 'right', 'body'],
    'ForStatement': ['init', 'test', 'update', 'body'],
    'FunctionDeclaration': ['id', 'params', 'body'],
    'FunctionExpression': ['id', 'params', 'body'],
    'Identifier': [],
    'ImportDeclaration': ['specifiers', 'source'],
    'ImportDefaultSpecifier': ['local'],
    'ImportNamespaceSpecifier': ['local'],
    'ImportSpecifier': ['imported', 'local'],
    'ImportExpression': ['source'],
    'ExportAllDeclaration': ['source'],
    'ExportDefaultDeclaration': ['declaration'],
    'ExportNamedDeclaration': ['specifiers', 'source', 'declaration'],
    'ExportSpecifier': ['exported', 'local'],
    'IfStatement': ['test', 'consequent', 'alternate'],
    'LabeledStatement': ['label', 'body'],
    'Literal': [],
    'LogicalExpression': ['left', 'right'],
    'MemberExpression': ['object', 'property'],
    'MetaProperty': ['meta', 'property'],
    'MethodDefinition': ['key', 'value'],
    'NewExpression': ['callee', 'arguments'],
    'ObjectExpression': ['properties'],
    'ObjectPattern': ['properties'],
    'ParenthesizedExpression': ['expression'],
    'PrivateIdentifier': [],
    'PropertyDefinition': ['key', 'value'],
    'Program': ['body'],
    'Property': ['key', 'value'],
    'RestElement': ['argument'],
    'ReturnStatement': ['argument'],
    'SequenceExpression': ['expressions'],
    'SpreadElement': ['argument'],
    'StaticBlock': ['body'],
    'Super': [],
    'SwitchCase': ['test', 'consequent'],
    'SwitchStatement': ['discriminant', 'cases'],
    'TaggedTemplateExpression': ['tag', 'quasi'],
    'TemplateElement': [],
    'TemplateLiteral': ['quasis', 'expressions'],
    'ThisExpression': [],
    'ThrowStatement': ['argument'],
    'TryStatement': ['block', 'handler', 'finalizer'],
    'UnaryExpression': ['argument'],
    'UpdateExpression': ['argument'],
    'VariableDeclaration': ['declarations'],
    'VariableDeclarator': ['id', 'init'],
    'WhileStatement': ['test', 'body'],
    'WithStatement': ['object', 'body'],
    'YieldExpression': ['argument'],
};


/***/ }),

/***/ "./src/entrypoints/formatter_worker/JavaScriptFormatter.ts":
/*!*****************************************************************!*\
  !*** ./src/entrypoints/formatter_worker/JavaScriptFormatter.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JavaScriptFormatter: () => (/* binding */ JavaScriptFormatter)
/* harmony export */ });
/* harmony import */ var _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../third_party/acorn/acorn.js */ "./src/third_party/acorn/acorn.ts");
/* harmony import */ var _AcornTokenizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AcornTokenizer.js */ "./src/entrypoints/formatter_worker/AcornTokenizer.ts");
/* harmony import */ var _ESTreeWalker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ESTreeWalker.js */ "./src/entrypoints/formatter_worker/ESTreeWalker.ts");
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
var _JavaScriptFormatter_instances, _JavaScriptFormatter_builder, _JavaScriptFormatter_tokenizer, _JavaScriptFormatter_content, _JavaScriptFormatter_fromOffset, _JavaScriptFormatter_lastLineNumber, _JavaScriptFormatter_toOffset, _JavaScriptFormatter_push, _JavaScriptFormatter_beforeVisit, _JavaScriptFormatter_afterVisit, _JavaScriptFormatter_inForLoopHeader, _JavaScriptFormatter_formatToken, _JavaScriptFormatter_finishNode;



class JavaScriptFormatter {
    constructor(builder) {
        _JavaScriptFormatter_instances.add(this);
        _JavaScriptFormatter_builder.set(this, void 0);
        _JavaScriptFormatter_tokenizer.set(this, void 0);
        _JavaScriptFormatter_content.set(this, void 0);
        _JavaScriptFormatter_fromOffset.set(this, void 0);
        _JavaScriptFormatter_lastLineNumber.set(this, void 0);
        _JavaScriptFormatter_toOffset.set(this, void 0);
        __classPrivateFieldSet(this, _JavaScriptFormatter_builder, builder, "f");
    }
    format(text, lineEndings, fromOffset, toOffset) {
        __classPrivateFieldSet(this, _JavaScriptFormatter_fromOffset, fromOffset, "f");
        __classPrivateFieldSet(this, _JavaScriptFormatter_toOffset, toOffset, "f");
        __classPrivateFieldSet(this, _JavaScriptFormatter_content, text.substring(__classPrivateFieldGet(this, _JavaScriptFormatter_fromOffset, "f"), __classPrivateFieldGet(this, _JavaScriptFormatter_toOffset, "f")), "f");
        __classPrivateFieldSet(this, _JavaScriptFormatter_lastLineNumber, 0, "f");
        const tokens = [];
        const ast = _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_0__.parse(__classPrivateFieldGet(this, _JavaScriptFormatter_content, "f"), {
            ranges: false,
            preserveParens: true,
            allowAwaitOutsideFunction: true,
            allowImportExportEverywhere: true,
            ecmaVersion: _AcornTokenizer_js__WEBPACK_IMPORTED_MODULE_1__.ECMA_VERSION,
            allowHashBang: true,
            onToken: tokens,
            onComment: tokens,
        });
        __classPrivateFieldSet(this, _JavaScriptFormatter_tokenizer, new _AcornTokenizer_js__WEBPACK_IMPORTED_MODULE_1__.AcornTokenizer(__classPrivateFieldGet(this, _JavaScriptFormatter_content, "f"), tokens), "f");
        const walker = new _ESTreeWalker_js__WEBPACK_IMPORTED_MODULE_2__.ESTreeWalker(__classPrivateFieldGet(this, _JavaScriptFormatter_instances, "m", _JavaScriptFormatter_beforeVisit).bind(this), __classPrivateFieldGet(this, _JavaScriptFormatter_instances, "m", _JavaScriptFormatter_afterVisit).bind(this));
        // @ts-ignore Technically, the acorn Node type is a subclass of Acorn.ESTree.Node.
        // However, the acorn package currently exports its type without specifying
        // this relationship. So while this is allowed on runtime, we can't properly
        // typecheck it.
        walker.walk(ast);
    }
}
_JavaScriptFormatter_builder = new WeakMap(), _JavaScriptFormatter_tokenizer = new WeakMap(), _JavaScriptFormatter_content = new WeakMap(), _JavaScriptFormatter_fromOffset = new WeakMap(), _JavaScriptFormatter_lastLineNumber = new WeakMap(), _JavaScriptFormatter_toOffset = new WeakMap(), _JavaScriptFormatter_instances = new WeakSet(), _JavaScriptFormatter_push = function _JavaScriptFormatter_push(token, format) {
    for (let i = 0; i < format.length; ++i) {
        if (format[i] === 's') {
            __classPrivateFieldGet(this, _JavaScriptFormatter_builder, "f").addSoftSpace();
        }
        else if (format[i] === 'S') {
            __classPrivateFieldGet(this, _JavaScriptFormatter_builder, "f").addHardSpace();
        }
        else if (format[i] === 'n') {
            __classPrivateFieldGet(this, _JavaScriptFormatter_builder, "f").addNewLine();
        }
        else if (format[i] === '>') {
            __classPrivateFieldGet(this, _JavaScriptFormatter_builder, "f").increaseNestingLevel();
        }
        else if (format[i] === '<') {
            __classPrivateFieldGet(this, _JavaScriptFormatter_builder, "f").decreaseNestingLevel();
        }
        else if (format[i] === 't') {
            if (__classPrivateFieldGet(this, _JavaScriptFormatter_tokenizer, "f").tokenLineStart() - __classPrivateFieldGet(this, _JavaScriptFormatter_lastLineNumber, "f") > 1) {
                __classPrivateFieldGet(this, _JavaScriptFormatter_builder, "f").addNewLine(true);
            }
            __classPrivateFieldSet(this, _JavaScriptFormatter_lastLineNumber, __classPrivateFieldGet(this, _JavaScriptFormatter_tokenizer, "f").tokenLineEnd(), "f");
            if (token) {
                __classPrivateFieldGet(this, _JavaScriptFormatter_builder, "f").addToken(__classPrivateFieldGet(this, _JavaScriptFormatter_content, "f").substring(token.start, token.end), __classPrivateFieldGet(this, _JavaScriptFormatter_fromOffset, "f") + token.start);
            }
        }
    }
}, _JavaScriptFormatter_beforeVisit = function _JavaScriptFormatter_beforeVisit(node) {
    if (!node.parent) {
        return;
    }
    if (node.type === 'TemplateLiteral') {
        __classPrivateFieldGet(this, _JavaScriptFormatter_builder, "f").setEnforceSpaceBetweenWords(false);
    }
    let token;
    while ((token = __classPrivateFieldGet(this, _JavaScriptFormatter_tokenizer, "f").peekToken()) && token.start < node.start) {
        const token = __classPrivateFieldGet(this, _JavaScriptFormatter_tokenizer, "f").nextToken();
        // @ts-ignore Same reason as above about Acorn types and ESTree types
        const format = __classPrivateFieldGet(this, _JavaScriptFormatter_instances, "m", _JavaScriptFormatter_formatToken).call(this, node.parent, token);
        __classPrivateFieldGet(this, _JavaScriptFormatter_instances, "m", _JavaScriptFormatter_push).call(this, token, format);
    }
}, _JavaScriptFormatter_afterVisit = function _JavaScriptFormatter_afterVisit(node) {
    let token;
    while ((token = __classPrivateFieldGet(this, _JavaScriptFormatter_tokenizer, "f").peekToken()) && token.start < node.end) {
        const token = __classPrivateFieldGet(this, _JavaScriptFormatter_tokenizer, "f").nextToken();
        const format = __classPrivateFieldGet(this, _JavaScriptFormatter_instances, "m", _JavaScriptFormatter_formatToken).call(this, node, token);
        __classPrivateFieldGet(this, _JavaScriptFormatter_instances, "m", _JavaScriptFormatter_push).call(this, token, format);
    }
    __classPrivateFieldGet(this, _JavaScriptFormatter_instances, "m", _JavaScriptFormatter_push).call(this, null, __classPrivateFieldGet(this, _JavaScriptFormatter_instances, "m", _JavaScriptFormatter_finishNode).call(this, node));
    if (node.type === 'TemplateLiteral') {
        __classPrivateFieldGet(this, _JavaScriptFormatter_builder, "f").setEnforceSpaceBetweenWords(true);
    }
}, _JavaScriptFormatter_inForLoopHeader = function _JavaScriptFormatter_inForLoopHeader(node) {
    const parent = node.parent;
    if (!parent) {
        return false;
    }
    if (parent.type === 'ForStatement') {
        const parentNode = parent;
        return node === parentNode.init || node === parentNode.test || node === parentNode.update;
    }
    if (parent.type === 'ForInStatement' || parent.type === 'ForOfStatement') {
        const parentNode = parent;
        return node === parentNode.left || node === parentNode.right;
    }
    return false;
}, _JavaScriptFormatter_formatToken = function _JavaScriptFormatter_formatToken(node, tokenOrComment) {
    const AT = _AcornTokenizer_js__WEBPACK_IMPORTED_MODULE_1__.AcornTokenizer;
    if (AT.lineComment(tokenOrComment)) {
        return 'tn';
    }
    if (AT.blockComment(tokenOrComment)) {
        return 'tn';
    }
    const token = tokenOrComment;
    const nodeType = node.type;
    if (nodeType === 'ContinueStatement' || nodeType === 'BreakStatement') {
        return node.label && AT.keyword(token) ? 'ts' : 't';
    }
    if (nodeType === 'Identifier') {
        return 't';
    }
    if (nodeType === 'PrivateIdentifier') {
        return 't';
    }
    if (nodeType === 'ReturnStatement') {
        if (AT.punctuator(token, ';')) {
            return 't';
        }
        return node.argument ? 'ts' : 't';
    }
    if (nodeType === 'AwaitExpression') {
        if (AT.punctuator(token, ';')) {
            return 't';
        }
        return node.argument ? 'ts' : 't';
    }
    if (nodeType === 'Property') {
        if (AT.punctuator(token, ':')) {
            return 'ts';
        }
        return 't';
    }
    if (nodeType === 'ArrayExpression') {
        if (AT.punctuator(token, ',')) {
            return 'ts';
        }
        return 't';
    }
    if (nodeType === 'LabeledStatement') {
        if (AT.punctuator(token, ':')) {
            return 'ts';
        }
    }
    else if (nodeType === 'LogicalExpression' || nodeType === 'AssignmentExpression' || nodeType === 'BinaryExpression') {
        if (AT.punctuator(token) && !AT.punctuator(token, '()')) {
            return 'sts';
        }
    }
    else if (nodeType === 'ConditionalExpression') {
        if (AT.punctuator(token, '?:')) {
            return 'sts';
        }
    }
    else if (nodeType === 'VariableDeclarator') {
        if (AT.punctuator(token, '=')) {
            return 'sts';
        }
    }
    else if (nodeType === 'ObjectPattern') {
        if (node.parent && node.parent.type === 'VariableDeclarator' && AT.punctuator(token, '{')) {
            return 'st';
        }
        if (AT.punctuator(token, ',')) {
            return 'ts';
        }
    }
    else if (nodeType === 'FunctionDeclaration') {
        if (AT.punctuator(token, ',)')) {
            return 'ts';
        }
    }
    else if (nodeType === 'FunctionExpression') {
        if (AT.punctuator(token, ',)')) {
            return 'ts';
        }
        if (AT.keyword(token, 'function')) {
            return node.id ? 'ts' : 't';
        }
    }
    else if (nodeType === 'ArrowFunctionExpression') {
        if (AT.punctuator(token, ',)')) {
            return 'ts';
        }
        if (AT.punctuator(token, '(')) {
            return 'st';
        }
        if (AT.arrowIdentifier(token, '=>')) {
            return 'sts';
        }
    }
    else if (nodeType === 'WithStatement') {
        if (AT.punctuator(token, ')')) {
            return node.body && node.body.type === 'BlockStatement' ? 'ts' : 'tn>';
        }
    }
    else if (nodeType === 'SwitchStatement') {
        if (AT.punctuator(token, '{')) {
            return 'tn>';
        }
        if (AT.punctuator(token, '}')) {
            return 'n<tn';
        }
        if (AT.punctuator(token, ')')) {
            return 'ts';
        }
    }
    else if (nodeType === 'SwitchCase') {
        if (AT.keyword(token, 'case')) {
            return 'n<ts';
        }
        if (AT.keyword(token, 'default')) {
            return 'n<t';
        }
        if (AT.punctuator(token, ':')) {
            return 'tn>';
        }
    }
    else if (nodeType === 'VariableDeclaration') {
        if (AT.punctuator(token, ',')) {
            let allVariablesInitialized = true;
            const declarations = node.declarations;
            for (let i = 0; i < declarations.length; ++i) {
                // @ts-ignore We are doing a subtype check, without properly checking whether
                // it exists. We can't fix that, unless we use proper typechecking
                allVariablesInitialized = allVariablesInitialized && Boolean(declarations[i].init);
            }
            return !__classPrivateFieldGet(this, _JavaScriptFormatter_instances, "m", _JavaScriptFormatter_inForLoopHeader).call(this, node) && allVariablesInitialized ? 'nSSts' : 'ts';
        }
    }
    else if (nodeType === 'PropertyDefinition') {
        if (AT.punctuator(token, '=')) {
            return 'sts';
        }
        if (AT.punctuator(token, ';')) {
            return 'tn';
        }
    }
    else if (nodeType === 'BlockStatement') {
        if (AT.punctuator(token, '{')) {
            return node.body.length ? 'tn>' : 't';
        }
        if (AT.punctuator(token, '}')) {
            return node.body.length ? 'n<t' : 't';
        }
    }
    else if (nodeType === 'CatchClause') {
        if (AT.punctuator(token, ')')) {
            return 'ts';
        }
    }
    else if (nodeType === 'ObjectExpression') {
        if (!node.properties.length) {
            return 't';
        }
        if (AT.punctuator(token, '{')) {
            return 'tn>';
        }
        if (AT.punctuator(token, '}')) {
            return 'n<t';
        }
        if (AT.punctuator(token, ',')) {
            return 'tn';
        }
    }
    else if (nodeType === 'IfStatement') {
        if (AT.punctuator(token, ')')) {
            return node.consequent && node.consequent.type === 'BlockStatement' ? 'ts' : 'tn>';
        }
        if (AT.keyword(token, 'else')) {
            const preFormat = node.consequent && node.consequent.type === 'BlockStatement' ? 'st' : 'n<t';
            let postFormat = 'n>';
            if (node.alternate && (node.alternate.type === 'BlockStatement' || node.alternate.type === 'IfStatement')) {
                postFormat = 's';
            }
            return preFormat + postFormat;
        }
    }
    else if (nodeType === 'CallExpression') {
        if (AT.punctuator(token, ',')) {
            return 'ts';
        }
    }
    else if (nodeType === 'SequenceExpression' && AT.punctuator(token, ',')) {
        return node.parent && node.parent.type === 'SwitchCase' ? 'ts' : 'tn';
    }
    else if (nodeType === 'ForStatement' || nodeType === 'ForOfStatement' || nodeType === 'ForInStatement') {
        if (AT.punctuator(token, ';')) {
            return 'ts';
        }
        if (AT.keyword(token, 'in') || AT.identifier(token, 'of')) {
            return 'sts';
        }
        if (AT.punctuator(token, ')')) {
            return node.body && node.body.type === 'BlockStatement' ? 'ts' : 'tn>';
        }
    }
    else if (nodeType === 'WhileStatement') {
        if (AT.punctuator(token, ')')) {
            return node.body && node.body.type === 'BlockStatement' ? 'ts' : 'tn>';
        }
    }
    else if (nodeType === 'DoWhileStatement') {
        const blockBody = node.body && node.body.type === 'BlockStatement';
        if (AT.keyword(token, 'do')) {
            return blockBody ? 'ts' : 'tn>';
        }
        if (AT.keyword(token, 'while')) {
            return blockBody ? 'sts' : 'n<ts';
        }
        if (AT.punctuator(token, ';')) {
            return 'tn';
        }
    }
    else if (nodeType === 'ClassBody') {
        if (AT.punctuator(token, '{')) {
            return 'stn>';
        }
        if (AT.punctuator(token, '}')) {
            return '<ntn';
        }
        return 't';
    }
    else if (nodeType === 'YieldExpression') {
        return 't';
    }
    else if (nodeType === 'Super') {
        return 't';
    }
    else if (nodeType === 'ImportExpression') {
        return 't';
    }
    else if (nodeType === 'ExportAllDeclaration') {
        if (AT.punctuator(token, '*')) {
            return 'sts';
        }
        return 't';
    }
    else if (nodeType === 'ExportNamedDeclaration' || nodeType === 'ImportDeclaration') {
        if (AT.punctuator(token, '{')) {
            return 'st';
        }
        if (AT.punctuator(token, ',')) {
            return 'ts';
        }
        if (AT.punctuator(token, '}')) {
            return node.source ? 'ts' : 't';
        }
        if (AT.punctuator(token, '*')) {
            return 'sts';
        }
        return 't';
    }
    return AT.keyword(token) && !AT.keyword(token, 'this') ? 'ts' : 't';
}, _JavaScriptFormatter_finishNode = function _JavaScriptFormatter_finishNode(node) {
    const nodeType = node.type;
    if (nodeType === 'WithStatement') {
        if (node.body && node.body.type !== 'BlockStatement') {
            return 'n<';
        }
    }
    else if (nodeType === 'VariableDeclaration') {
        if (!__classPrivateFieldGet(this, _JavaScriptFormatter_instances, "m", _JavaScriptFormatter_inForLoopHeader).call(this, node)) {
            return 'n';
        }
    }
    else if (nodeType === 'ForStatement' || nodeType === 'ForOfStatement' || nodeType === 'ForInStatement') {
        if (node.body && node.body.type !== 'BlockStatement') {
            return 'n<';
        }
    }
    else if (nodeType === 'BlockStatement') {
        if (node.parent && node.parent.type === 'IfStatement') {
            const parentNode = node.parent;
            if (parentNode.alternate && parentNode.consequent === node) {
                return '';
            }
        }
        if (node.parent && node.parent.type === 'FunctionExpression' && node.parent.parent &&
            node.parent.parent.type === 'Property') {
            return '';
        }
        if (node.parent && node.parent.type === 'FunctionExpression' && node.parent.parent &&
            node.parent.parent.type === 'VariableDeclarator') {
            return '';
        }
        if (node.parent && node.parent.type === 'FunctionExpression' && node.parent.parent &&
            node.parent.parent.type === 'CallExpression') {
            return '';
        }
        if (node.parent && node.parent.type === 'DoWhileStatement') {
            return '';
        }
        if (node.parent && node.parent.type === 'TryStatement') {
            const parentNode = node.parent;
            if (parentNode.block === node) {
                return 's';
            }
        }
        if (node.parent && node.parent.type === 'CatchClause') {
            const parentNode = node.parent;
            // @ts-ignore We are doing a subtype check, without properly checking whether
            // it exists. We can't fix that, unless we use proper typechecking
            if (parentNode.parent && parentNode.parent.finalizer) {
                return 's';
            }
        }
        return 'n';
    }
    else if (nodeType === 'WhileStatement') {
        if (node.body && node.body.type !== 'BlockStatement') {
            return 'n<';
        }
    }
    else if (nodeType === 'IfStatement') {
        if (node.alternate) {
            if (node.alternate.type !== 'BlockStatement' && node.alternate.type !== 'IfStatement') {
                return '<';
            }
        }
        else if (node.consequent) {
            if (node.consequent.type !== 'BlockStatement') {
                return '<';
            }
        }
    }
    else if (nodeType === 'BreakStatement' || nodeType === 'ContinueStatement' || nodeType === 'ThrowStatement' ||
        nodeType === 'ReturnStatement' || nodeType === 'ExpressionStatement') {
        return 'n';
    }
    else if (nodeType === 'ImportDeclaration' || nodeType === 'ExportAllDeclaration' ||
        nodeType === 'ExportDefaultDeclaration' || nodeType === 'ExportNamedDeclaration') {
        return 'n';
    }
    return '';
};


/***/ })

}]);