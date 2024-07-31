"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_entrypoints_formatter_worker_ScopeParser_ts"],{

/***/ "./src/entrypoints/formatter_worker/AcornTokenizer.ts":
/*!************************************************************!*\
  !*** ./src/entrypoints/formatter_worker/AcornTokenizer.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AcornTokenizer: () => (/* binding */ AcornTokenizer),
/* harmony export */   ECMA_VERSION: () => (/* binding */ ECMA_VERSION)
/* harmony export */ });
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../third_party/acorn/acorn.js */ "./src/third_party/acorn/acorn.ts");
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
var _AcornTokenizer_textCursor, _AcornTokenizer_tokenLineStartInternal, _AcornTokenizer_tokenLineEndInternal, _AcornTokenizer_tokens, _AcornTokenizer_idx;



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
 */
class AcornTokenizer {
    constructor(content, tokens) {
        _AcornTokenizer_textCursor.set(this, void 0);
        _AcornTokenizer_tokenLineStartInternal.set(this, void 0);
        _AcornTokenizer_tokenLineEndInternal.set(this, void 0);
        _AcornTokenizer_tokens.set(this, void 0);
        _AcornTokenizer_idx.set(this, 0);
        __classPrivateFieldSet(this, _AcornTokenizer_tokens, tokens, "f");
        const contentLineEndings = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.findLineEndingIndexes(content);
        __classPrivateFieldSet(this, _AcornTokenizer_textCursor, new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__.TextCursor.TextCursor(contentLineEndings), "f");
        __classPrivateFieldSet(this, _AcornTokenizer_tokenLineStartInternal, 0, "f");
        __classPrivateFieldSet(this, _AcornTokenizer_tokenLineEndInternal, 0, "f");
    }
    static punctuator(token, values) {
        return token.type !== _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.num && token.type !== _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.regexp &&
            token.type !== _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.string && token.type !== _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.name && !token.type.keyword &&
            (!values || (token.type.label.length === 1 && values.indexOf(token.type.label) !== -1));
    }
    static keyword(token, keyword) {
        return Boolean(token.type.keyword) && token.type !== _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes['_true'] &&
            token.type !== _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes['_false'] && token.type !== _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes['_null'] &&
            (!keyword || token.type.keyword === keyword);
    }
    static identifier(token, identifier) {
        return token.type === _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.name && (!identifier || token.value === identifier);
    }
    static arrowIdentifier(token, identifier) {
        return token.type === _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.arrow && (!identifier || token.type.label === identifier);
    }
    static lineComment(token) {
        return token.type === 'Line';
    }
    static blockComment(token) {
        return token.type === 'Block';
    }
    nextToken() {
        var _a, _b;
        const token = __classPrivateFieldGet(this, _AcornTokenizer_tokens, "f")[__classPrivateFieldSet(this, _AcornTokenizer_idx, (_b = __classPrivateFieldGet(this, _AcornTokenizer_idx, "f"), _a = _b++, _b), "f"), _a];
        if (!token || token.type === _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.eof) {
            return null;
        }
        __classPrivateFieldGet(this, _AcornTokenizer_textCursor, "f").advance(token.start);
        __classPrivateFieldSet(this, _AcornTokenizer_tokenLineStartInternal, __classPrivateFieldGet(this, _AcornTokenizer_textCursor, "f").lineNumber(), "f");
        __classPrivateFieldGet(this, _AcornTokenizer_textCursor, "f").advance(token.end);
        __classPrivateFieldSet(this, _AcornTokenizer_tokenLineEndInternal, __classPrivateFieldGet(this, _AcornTokenizer_textCursor, "f").lineNumber(), "f");
        return token;
    }
    peekToken() {
        const token = __classPrivateFieldGet(this, _AcornTokenizer_tokens, "f")[__classPrivateFieldGet(this, _AcornTokenizer_idx, "f")];
        if (!token || token.type === _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.eof) {
            return null;
        }
        return token;
    }
    tokenLineStart() {
        return __classPrivateFieldGet(this, _AcornTokenizer_tokenLineStartInternal, "f");
    }
    tokenLineEnd() {
        return __classPrivateFieldGet(this, _AcornTokenizer_tokenLineEndInternal, "f");
    }
}
_AcornTokenizer_textCursor = new WeakMap(), _AcornTokenizer_tokenLineStartInternal = new WeakMap(), _AcornTokenizer_tokenLineEndInternal = new WeakMap(), _AcornTokenizer_tokens = new WeakMap(), _AcornTokenizer_idx = new WeakMap();
const ECMA_VERSION = 2022;


/***/ }),

/***/ "./src/entrypoints/formatter_worker/ScopeParser.ts":
/*!*********************************************************!*\
  !*** ./src/entrypoints/formatter_worker/ScopeParser.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Scope: () => (/* binding */ Scope),
/* harmony export */   ScopeVariableAnalysis: () => (/* binding */ ScopeVariableAnalysis),
/* harmony export */   parseScopes: () => (/* binding */ parseScopes)
/* harmony export */ });
/* harmony import */ var _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../third_party/acorn/acorn.js */ "./src/third_party/acorn/acorn.ts");
/* harmony import */ var _AcornTokenizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AcornTokenizer.js */ "./src/entrypoints/formatter_worker/AcornTokenizer.ts");
/* harmony import */ var _FormatterActions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormatterActions.js */ "./src/entrypoints/formatter_worker/FormatterActions.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
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
var _Scope_instances, _Scope_mergeChildDefUses, _ScopeVariableAnalysis_instances, _ScopeVariableAnalysis_rootScope, _ScopeVariableAnalysis_allNames, _ScopeVariableAnalysis_currentScope, _ScopeVariableAnalysis_rootNode, _ScopeVariableAnalysis_processNode, _ScopeVariableAnalysis_pushScope, _ScopeVariableAnalysis_popScope, _ScopeVariableAnalysis_addVariable, _ScopeVariableAnalysis_processNodeAsDefinition, _ScopeVariableAnalysis_processVariableDeclarator;



function parseScopes(expression, sourceType = 'script') {
    // Parse the expression and find variables and scopes.
    let root = null;
    try {
        root = _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_0__.parse(expression, { ecmaVersion: _AcornTokenizer_js__WEBPACK_IMPORTED_MODULE_1__.ECMA_VERSION, allowAwaitOutsideFunction: true, ranges: false, sourceType });
    }
    catch {
        return null;
    }
    return new ScopeVariableAnalysis(root).run();
}
class Scope {
    constructor(start, end, parent) {
        _Scope_instances.add(this);
        Object.defineProperty(this, "variables", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
        Object.defineProperty(this, "parent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "start", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "end", {
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
        this.start = start;
        this.end = end;
        this.parent = parent;
        if (parent) {
            parent.children.push(this);
        }
    }
    export() {
        const variables = [];
        for (const variable of this.variables) {
            const offsets = [];
            for (const use of variable[1].uses) {
                offsets.push(use.offset);
            }
            variables.push({ name: variable[0], kind: variable[1].definitionKind, offsets });
        }
        const children = this.children.map(c => c.export());
        return {
            start: this.start,
            end: this.end,
            variables,
            children,
        };
    }
    addVariable(name, offset, definitionKind, isShorthandAssignmentProperty) {
        const variable = this.variables.get(name);
        const use = { offset, scope: this, isShorthandAssignmentProperty };
        if (!variable) {
            this.variables.set(name, { definitionKind, uses: [use] });
            return;
        }
        if (variable.definitionKind === _FormatterActions_js__WEBPACK_IMPORTED_MODULE_2__.DefinitionKind.None) {
            variable.definitionKind = definitionKind;
        }
        variable.uses.push(use);
    }
    findBinders(name) {
        const result = [];
        let scope = this;
        while (scope !== null) {
            const defUse = scope.variables.get(name);
            if (defUse && defUse.definitionKind !== _FormatterActions_js__WEBPACK_IMPORTED_MODULE_2__.DefinitionKind.None) {
                result.push(defUse);
            }
            scope = scope.parent;
        }
        return result;
    }
    finalizeToParent(isFunctionScope) {
        var _a;
        if (!this.parent) {
            console.error('Internal error: wrong nesting in scope analysis.');
            throw new Error('Internal error');
        }
        // Move all unbound variables to the parent (also move var-bound variables
        // if the parent is not a function).
        const keysToRemove = [];
        for (const [name, defUse] of this.variables.entries()) {
            if (defUse.definitionKind === _FormatterActions_js__WEBPACK_IMPORTED_MODULE_2__.DefinitionKind.None ||
                (defUse.definitionKind === _FormatterActions_js__WEBPACK_IMPORTED_MODULE_2__.DefinitionKind.Var && !isFunctionScope)) {
                __classPrivateFieldGet((_a = this.parent), _Scope_instances, "m", _Scope_mergeChildDefUses).call(_a, name, defUse);
                keysToRemove.push(name);
            }
        }
        keysToRemove.forEach(k => this.variables.delete(k));
    }
}
_Scope_instances = new WeakSet(), _Scope_mergeChildDefUses = function _Scope_mergeChildDefUses(name, defUses) {
    const variable = this.variables.get(name);
    if (!variable) {
        this.variables.set(name, defUses);
        return;
    }
    variable.uses.push(...defUses.uses);
    if (defUses.definitionKind === _FormatterActions_js__WEBPACK_IMPORTED_MODULE_2__.DefinitionKind.Var) {
        console.assert(variable.definitionKind !== _FormatterActions_js__WEBPACK_IMPORTED_MODULE_2__.DefinitionKind.Let);
        if (variable.definitionKind === _FormatterActions_js__WEBPACK_IMPORTED_MODULE_2__.DefinitionKind.None) {
            variable.definitionKind = defUses.definitionKind;
        }
    }
    else {
        console.assert(defUses.definitionKind === _FormatterActions_js__WEBPACK_IMPORTED_MODULE_2__.DefinitionKind.None);
    }
};
class ScopeVariableAnalysis {
    constructor(node) {
        _ScopeVariableAnalysis_instances.add(this);
        _ScopeVariableAnalysis_rootScope.set(this, void 0);
        _ScopeVariableAnalysis_allNames.set(this, new Set());
        _ScopeVariableAnalysis_currentScope.set(this, void 0);
        _ScopeVariableAnalysis_rootNode.set(this, void 0);
        __classPrivateFieldSet(this, _ScopeVariableAnalysis_rootNode, node, "f");
        __classPrivateFieldSet(this, _ScopeVariableAnalysis_rootScope, new Scope(node.start, node.end, null), "f");
        __classPrivateFieldSet(this, _ScopeVariableAnalysis_currentScope, __classPrivateFieldGet(this, _ScopeVariableAnalysis_rootScope, "f"), "f");
    }
    run() {
        __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, __classPrivateFieldGet(this, _ScopeVariableAnalysis_rootNode, "f"));
        return __classPrivateFieldGet(this, _ScopeVariableAnalysis_rootScope, "f");
    }
    getFreeVariables() {
        const result = new Map();
        for (const [name, defUse] of __classPrivateFieldGet(this, _ScopeVariableAnalysis_rootScope, "f").variables) {
            if (defUse.definitionKind !== _FormatterActions_js__WEBPACK_IMPORTED_MODULE_2__.DefinitionKind.None) {
                // Skip bound variables.
                continue;
            }
            result.set(name, defUse.uses);
        }
        return result;
    }
    getAllNames() {
        return __classPrivateFieldGet(this, _ScopeVariableAnalysis_allNames, "f");
    }
}
_ScopeVariableAnalysis_rootScope = new WeakMap(), _ScopeVariableAnalysis_allNames = new WeakMap(), _ScopeVariableAnalysis_currentScope = new WeakMap(), _ScopeVariableAnalysis_rootNode = new WeakMap(), _ScopeVariableAnalysis_instances = new WeakSet(), _ScopeVariableAnalysis_processNode = function _ScopeVariableAnalysis_processNode(node) {
    if (node === null) {
        return;
    }
    switch (node.type) {
        case 'AwaitExpression':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.argument);
            break;
        case 'ArrayExpression':
            node.elements.forEach(item => __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, item));
            break;
        case 'ExpressionStatement':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.expression);
            break;
        case 'Program':
            console.assert(__classPrivateFieldGet(this, _ScopeVariableAnalysis_currentScope, "f") === __classPrivateFieldGet(this, _ScopeVariableAnalysis_rootScope, "f"));
            node.body.forEach(item => __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, item));
            console.assert(__classPrivateFieldGet(this, _ScopeVariableAnalysis_currentScope, "f") === __classPrivateFieldGet(this, _ScopeVariableAnalysis_rootScope, "f"));
            break;
        case 'ArrayPattern':
            node.elements.forEach(item => __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, item));
            break;
        case 'ArrowFunctionExpression': {
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_pushScope).call(this, node.start, node.end);
            node.params.forEach(__classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNodeAsDefinition).bind(this, _FormatterActions_js__WEBPACK_IMPORTED_MODULE_2__.DefinitionKind.Var, false));
            if (node.body.type === 'BlockStatement') {
                // Include the body of the arrow function in the same scope as the arguments.
                node.body.body.forEach(__classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).bind(this));
            }
            else {
                __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.body);
            }
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_popScope).call(this, true);
            break;
        }
        case 'AssignmentExpression':
        case 'AssignmentPattern':
        case 'BinaryExpression':
        case 'LogicalExpression':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.left);
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.right);
            break;
        case 'BlockStatement':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_pushScope).call(this, node.start, node.end);
            node.body.forEach(__classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).bind(this));
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_popScope).call(this, false);
            break;
        case 'CallExpression':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.callee);
            node.arguments.forEach(__classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).bind(this));
            break;
        case 'VariableDeclaration': {
            const definitionKind = node.kind === 'var' ? _FormatterActions_js__WEBPACK_IMPORTED_MODULE_2__.DefinitionKind.Var : _FormatterActions_js__WEBPACK_IMPORTED_MODULE_2__.DefinitionKind.Let;
            node.declarations.forEach(__classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processVariableDeclarator).bind(this, definitionKind));
            break;
        }
        case 'CatchClause':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_pushScope).call(this, node.start, node.end);
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNodeAsDefinition).call(this, _FormatterActions_js__WEBPACK_IMPORTED_MODULE_2__.DefinitionKind.Let, false, node.param);
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.body);
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_popScope).call(this, false);
            break;
        case 'ClassBody':
            node.body.forEach(__classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).bind(this));
            break;
        case 'ClassDeclaration':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNodeAsDefinition).call(this, _FormatterActions_js__WEBPACK_IMPORTED_MODULE_2__.DefinitionKind.Let, false, node.id);
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.superClass ?? null);
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.body);
            break;
        case 'ClassExpression':
            // Intentionally ignore the id.
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.superClass ?? null);
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.body);
            break;
        case 'ChainExpression':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.expression);
            break;
        case 'ConditionalExpression':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.test);
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.consequent);
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.alternate);
            break;
        case 'DoWhileStatement':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.body);
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.test);
            break;
        case 'ForInStatement':
        case 'ForOfStatement':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_pushScope).call(this, node.start, node.end);
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.left);
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.right);
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.body);
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_popScope).call(this, false);
            break;
        case 'ForStatement':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_pushScope).call(this, node.start, node.end);
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.init ?? null);
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.test ?? null);
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.update ?? null);
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.body);
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_popScope).call(this, false);
            break;
        case 'FunctionDeclaration':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNodeAsDefinition).call(this, _FormatterActions_js__WEBPACK_IMPORTED_MODULE_2__.DefinitionKind.Var, false, node.id);
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_pushScope).call(this, node.id?.end ?? node.start, node.end);
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_addVariable).call(this, 'this', node.start, _FormatterActions_js__WEBPACK_IMPORTED_MODULE_2__.DefinitionKind.Fixed);
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_addVariable).call(this, 'arguments', node.start, _FormatterActions_js__WEBPACK_IMPORTED_MODULE_2__.DefinitionKind.Fixed);
            node.params.forEach(__classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNodeAsDefinition).bind(this, _FormatterActions_js__WEBPACK_IMPORTED_MODULE_2__.DefinitionKind.Let, false));
            // Process the body of the block statement directly to avoid creating new scope.
            node.body.body.forEach(__classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).bind(this));
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_popScope).call(this, true);
            break;
        case 'FunctionExpression':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_pushScope).call(this, node.id?.end ?? node.start, node.end);
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_addVariable).call(this, 'this', node.start, _FormatterActions_js__WEBPACK_IMPORTED_MODULE_2__.DefinitionKind.Fixed);
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_addVariable).call(this, 'arguments', node.start, _FormatterActions_js__WEBPACK_IMPORTED_MODULE_2__.DefinitionKind.Fixed);
            node.params.forEach(__classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNodeAsDefinition).bind(this, _FormatterActions_js__WEBPACK_IMPORTED_MODULE_2__.DefinitionKind.Let, false));
            // Process the body of the block statement directly to avoid creating new scope.
            node.body.body.forEach(__classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).bind(this));
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_popScope).call(this, true);
            break;
        case 'Identifier':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_addVariable).call(this, node.name, node.start);
            break;
        case 'IfStatement':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.test);
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.consequent);
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.alternate ?? null);
            break;
        case 'LabeledStatement':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.body);
            break;
        case 'MetaProperty':
            break;
        case 'MethodDefinition':
            if (node.computed) {
                __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.key);
            }
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.value);
            break;
        case 'NewExpression':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.callee);
            node.arguments.forEach(__classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).bind(this));
            break;
        case 'MemberExpression':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.object);
            if (node.computed) {
                __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.property);
            }
            break;
        case 'ObjectExpression':
            node.properties.forEach(__classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).bind(this));
            break;
        case 'ObjectPattern':
            node.properties.forEach(__classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).bind(this));
            break;
        case 'PrivateIdentifier':
            break;
        case 'PropertyDefinition':
            if (node.computed) {
                __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.key);
            }
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.value ?? null);
            break;
        case 'Property':
            if (node.shorthand) {
                console.assert(node.value.type === 'Identifier');
                console.assert(node.key.type === 'Identifier');
                console.assert(node.value.name === node.key.name);
                __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_addVariable).call(this, node.value.name, node.value.start, _FormatterActions_js__WEBPACK_IMPORTED_MODULE_2__.DefinitionKind.None, true);
            }
            else {
                if (node.computed) {
                    __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.key);
                }
                __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.value);
            }
            break;
        case 'RestElement':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNodeAsDefinition).call(this, _FormatterActions_js__WEBPACK_IMPORTED_MODULE_2__.DefinitionKind.Let, false, node.argument);
            break;
        case 'ReturnStatement':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.argument ?? null);
            break;
        case 'SequenceExpression':
            node.expressions.forEach(__classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).bind(this));
            break;
        case 'SpreadElement':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.argument);
            break;
        case 'SwitchCase':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.test ?? null);
            node.consequent.forEach(__classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).bind(this));
            break;
        case 'SwitchStatement':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.discriminant);
            node.cases.forEach(__classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).bind(this));
            break;
        case 'TaggedTemplateExpression':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.tag);
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.quasi);
            break;
        case 'TemplateLiteral':
            node.expressions.forEach(__classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).bind(this));
            break;
        case 'ThisExpression':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_addVariable).call(this, 'this', node.start);
            break;
        case 'ThrowStatement':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.argument);
            break;
        case 'TryStatement':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.block);
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.handler ?? null);
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.finalizer ?? null);
            break;
        case 'WithStatement':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.object);
            // TODO jarin figure how to treat the with body.
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.body);
            break;
        case 'YieldExpression':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.argument ?? null);
            break;
        case 'UnaryExpression':
        case 'UpdateExpression':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.argument);
            break;
        case 'WhileStatement':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.test);
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.body);
            break;
        // Ignore, no expressions involved.
        case 'BreakStatement':
        case 'ContinueStatement':
        case 'DebuggerStatement':
        case 'EmptyStatement':
        case 'Literal':
        case 'Super':
        case 'TemplateElement':
            break;
        // Ignore, cannot be used outside of a module.
        case 'ImportDeclaration':
        case 'ImportDefaultSpecifier':
        case 'ImportNamespaceSpecifier':
        case 'ImportSpecifier':
        case 'ImportExpression':
        case 'ExportAllDeclaration':
        case 'ExportDefaultDeclaration':
        case 'ExportNamedDeclaration':
        case 'ExportSpecifier':
            break;
        case 'VariableDeclarator':
            console.error('Should not encounter VariableDeclarator in general traversal.');
            break;
    }
}, _ScopeVariableAnalysis_pushScope = function _ScopeVariableAnalysis_pushScope(start, end) {
    __classPrivateFieldSet(this, _ScopeVariableAnalysis_currentScope, new Scope(start, end, __classPrivateFieldGet(this, _ScopeVariableAnalysis_currentScope, "f")), "f");
}, _ScopeVariableAnalysis_popScope = function _ScopeVariableAnalysis_popScope(isFunctionContext) {
    if (__classPrivateFieldGet(this, _ScopeVariableAnalysis_currentScope, "f").parent === null) {
        console.error('Internal error: wrong nesting in scope analysis.');
        throw new Error('Internal error');
    }
    __classPrivateFieldGet(this, _ScopeVariableAnalysis_currentScope, "f").finalizeToParent(isFunctionContext);
    __classPrivateFieldSet(this, _ScopeVariableAnalysis_currentScope, __classPrivateFieldGet(this, _ScopeVariableAnalysis_currentScope, "f").parent, "f");
}, _ScopeVariableAnalysis_addVariable = function _ScopeVariableAnalysis_addVariable(name, offset, definitionKind = _FormatterActions_js__WEBPACK_IMPORTED_MODULE_2__.DefinitionKind.None, isShorthandAssignmentProperty = false) {
    __classPrivateFieldGet(this, _ScopeVariableAnalysis_allNames, "f").add(name);
    __classPrivateFieldGet(this, _ScopeVariableAnalysis_currentScope, "f").addVariable(name, offset, definitionKind, isShorthandAssignmentProperty);
}, _ScopeVariableAnalysis_processNodeAsDefinition = function _ScopeVariableAnalysis_processNodeAsDefinition(definitionKind, isShorthandAssignmentProperty, node) {
    if (node === null) {
        return;
    }
    switch (node.type) {
        case 'ArrayPattern':
            node.elements.forEach(__classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNodeAsDefinition).bind(this, definitionKind, false));
            break;
        case 'AssignmentPattern':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNodeAsDefinition).call(this, definitionKind, isShorthandAssignmentProperty, node.left);
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.right);
            break;
        case 'Identifier':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_addVariable).call(this, node.name, node.start, definitionKind, isShorthandAssignmentProperty);
            break;
        case 'MemberExpression':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.object);
            if (node.computed) {
                __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.property);
            }
            break;
        case 'ObjectPattern':
            node.properties.forEach(__classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNodeAsDefinition).bind(this, definitionKind, false));
            break;
        case 'Property':
            if (node.computed) {
                __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, node.key);
            }
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNodeAsDefinition).call(this, definitionKind, node.shorthand, node.value);
            break;
        case 'RestElement':
            __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNodeAsDefinition).call(this, definitionKind, false, node.argument);
            break;
    }
}, _ScopeVariableAnalysis_processVariableDeclarator = function _ScopeVariableAnalysis_processVariableDeclarator(definitionKind, decl) {
    __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNodeAsDefinition).call(this, definitionKind, false, decl.id);
    __classPrivateFieldGet(this, _ScopeVariableAnalysis_instances, "m", _ScopeVariableAnalysis_processNode).call(this, decl.init ?? null);
};


/***/ }),

/***/ "./src/third_party/acorn/acorn.ts":
/*!****************************************!*\
  !*** ./src/third_party/acorn/acorn.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Node: () => (/* reexport safe */ _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.Node),
/* harmony export */   Parser: () => (/* binding */ Parser),
/* harmony export */   SourceLocation: () => (/* reexport safe */ _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.SourceLocation),
/* harmony export */   Token: () => (/* reexport safe */ _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.Token),
/* harmony export */   defaultOptions: () => (/* reexport safe */ _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.defaultOptions),
/* harmony export */   getLineInfo: () => (/* reexport safe */ _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.getLineInfo),
/* harmony export */   isNewLine: () => (/* reexport safe */ _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.isNewLine),
/* harmony export */   lineBreak: () => (/* reexport safe */ _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.lineBreak),
/* harmony export */   lineBreakG: () => (/* reexport safe */ _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.lineBreakG),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   tokContexts: () => (/* reexport safe */ _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.tokContexts),
/* harmony export */   tokTypes: () => (/* reexport safe */ _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.tokTypes),
/* harmony export */   tokenizer: () => (/* binding */ tokenizer)
/* harmony export */ });
/* harmony import */ var _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package/dist/acorn.mjs */ "./src/third_party/acorn/package/dist/acorn.mjs");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


const Parser = _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser;
const tokenizer = _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser.tokenizer.bind(_package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser);
const parse = _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser.parse.bind(_package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser);


/***/ })

}]);