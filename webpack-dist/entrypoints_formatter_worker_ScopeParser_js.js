"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["entrypoints_formatter_worker_ScopeParser_js"],{

/***/ "./entrypoints/formatter_worker/AcornTokenizer.js":
/*!********************************************************!*\
  !*** ./entrypoints/formatter_worker/AcornTokenizer.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AcornTokenizer: () => (/* binding */ AcornTokenizer),
/* harmony export */   ECMA_VERSION: () => (/* binding */ ECMA_VERSION)
/* harmony export */ });
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */ var _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../third_party/acorn/acorn.js */ "./third_party/acorn/acorn.js");
// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



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
    #textCursor;
    #tokenLineStartInternal;
    #tokenLineEndInternal;
    #tokens;
    #idx = 0;
    constructor(content, tokens) {
        this.#tokens = tokens;
        const contentLineEndings = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.findLineEndingIndexes(content);
        this.#textCursor = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__.TextCursor.TextCursor(contentLineEndings);
        this.#tokenLineStartInternal = 0;
        this.#tokenLineEndInternal = 0;
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
        const token = this.#tokens[this.#idx++];
        if (!token || token.type === _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.eof) {
            return null;
        }
        this.#textCursor.advance(token.start);
        this.#tokenLineStartInternal = this.#textCursor.lineNumber();
        this.#textCursor.advance(token.end);
        this.#tokenLineEndInternal = this.#textCursor.lineNumber();
        return token;
    }
    peekToken() {
        const token = this.#tokens[this.#idx];
        if (!token || token.type === _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.eof) {
            return null;
        }
        return token;
    }
    tokenLineStart() {
        return this.#tokenLineStartInternal;
    }
    tokenLineEnd() {
        return this.#tokenLineEndInternal;
    }
}
const ECMA_VERSION = 2022;
//# sourceMappingURL=AcornTokenizer.js.map

/***/ }),

/***/ "./entrypoints/formatter_worker/ScopeParser.js":
/*!*****************************************************!*\
  !*** ./entrypoints/formatter_worker/ScopeParser.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Scope: () => (/* binding */ Scope),
/* harmony export */   ScopeVariableAnalysis: () => (/* binding */ ScopeVariableAnalysis),
/* harmony export */   parseScopes: () => (/* binding */ parseScopes)
/* harmony export */ });
/* harmony import */ var _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../third_party/acorn/acorn.js */ "./third_party/acorn/acorn.js");
/* harmony import */ var _AcornTokenizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AcornTokenizer.js */ "./entrypoints/formatter_worker/AcornTokenizer.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


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
    variables = new Map();
    parent;
    start;
    end;
    children = [];
    constructor(start, end, parent) {
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
        if (variable.definitionKind === 0 /* DefinitionKind.None */) {
            variable.definitionKind = definitionKind;
        }
        variable.uses.push(use);
    }
    findBinders(name) {
        const result = [];
        let scope = this;
        while (scope !== null) {
            const defUse = scope.variables.get(name);
            if (defUse && defUse.definitionKind !== 0 /* DefinitionKind.None */) {
                result.push(defUse);
            }
            scope = scope.parent;
        }
        return result;
    }
    #mergeChildDefUses(name, defUses) {
        const variable = this.variables.get(name);
        if (!variable) {
            this.variables.set(name, defUses);
            return;
        }
        variable.uses.push(...defUses.uses);
        if (defUses.definitionKind === 2 /* DefinitionKind.Var */) {
            console.assert(variable.definitionKind !== 1 /* DefinitionKind.Let */);
            if (variable.definitionKind === 0 /* DefinitionKind.None */) {
                variable.definitionKind = defUses.definitionKind;
            }
        }
        else {
            console.assert(defUses.definitionKind === 0 /* DefinitionKind.None */);
        }
    }
    finalizeToParent(isFunctionScope) {
        if (!this.parent) {
            console.error('Internal error: wrong nesting in scope analysis.');
            throw new Error('Internal error');
        }
        // Move all unbound variables to the parent (also move var-bound variables
        // if the parent is not a function).
        const keysToRemove = [];
        for (const [name, defUse] of this.variables.entries()) {
            if (defUse.definitionKind === 0 /* DefinitionKind.None */ ||
                (defUse.definitionKind === 2 /* DefinitionKind.Var */ && !isFunctionScope)) {
                this.parent.#mergeChildDefUses(name, defUse);
                keysToRemove.push(name);
            }
        }
        keysToRemove.forEach(k => this.variables.delete(k));
    }
}
class ScopeVariableAnalysis {
    #rootScope;
    #allNames = new Set();
    #currentScope;
    #rootNode;
    constructor(node) {
        this.#rootNode = node;
        this.#rootScope = new Scope(node.start, node.end, null);
        this.#currentScope = this.#rootScope;
    }
    run() {
        this.#processNode(this.#rootNode);
        return this.#rootScope;
    }
    #processNode(node) {
        if (node === null) {
            return;
        }
        switch (node.type) {
            case 'AwaitExpression':
                this.#processNode(node.argument);
                break;
            case 'ArrayExpression':
                node.elements.forEach(item => this.#processNode(item));
                break;
            case 'ExpressionStatement':
                this.#processNode(node.expression);
                break;
            case 'Program':
                console.assert(this.#currentScope === this.#rootScope);
                node.body.forEach(item => this.#processNode(item));
                console.assert(this.#currentScope === this.#rootScope);
                break;
            case 'ArrayPattern':
                node.elements.forEach(item => this.#processNode(item));
                break;
            case 'ArrowFunctionExpression': {
                this.#pushScope(node.start, node.end);
                node.params.forEach(this.#processNodeAsDefinition.bind(this, 2 /* DefinitionKind.Var */, false));
                if (node.body.type === 'BlockStatement') {
                    // Include the body of the arrow function in the same scope as the arguments.
                    node.body.body.forEach(this.#processNode.bind(this));
                }
                else {
                    this.#processNode(node.body);
                }
                this.#popScope(true);
                break;
            }
            case 'AssignmentExpression':
            case 'AssignmentPattern':
            case 'BinaryExpression':
            case 'LogicalExpression':
                this.#processNode(node.left);
                this.#processNode(node.right);
                break;
            case 'BlockStatement':
                this.#pushScope(node.start, node.end);
                node.body.forEach(this.#processNode.bind(this));
                this.#popScope(false);
                break;
            case 'CallExpression':
                this.#processNode(node.callee);
                node.arguments.forEach(this.#processNode.bind(this));
                break;
            case 'VariableDeclaration': {
                const definitionKind = node.kind === 'var' ? 2 /* DefinitionKind.Var */ : 1 /* DefinitionKind.Let */;
                node.declarations.forEach(this.#processVariableDeclarator.bind(this, definitionKind));
                break;
            }
            case 'CatchClause':
                this.#pushScope(node.start, node.end);
                this.#processNodeAsDefinition(1 /* DefinitionKind.Let */, false, node.param);
                this.#processNode(node.body);
                this.#popScope(false);
                break;
            case 'ClassBody':
                node.body.forEach(this.#processNode.bind(this));
                break;
            case 'ClassDeclaration':
                this.#processNodeAsDefinition(1 /* DefinitionKind.Let */, false, node.id);
                this.#processNode(node.superClass ?? null);
                this.#processNode(node.body);
                break;
            case 'ClassExpression':
                // Intentionally ignore the id.
                this.#processNode(node.superClass ?? null);
                this.#processNode(node.body);
                break;
            case 'ChainExpression':
                this.#processNode(node.expression);
                break;
            case 'ConditionalExpression':
                this.#processNode(node.test);
                this.#processNode(node.consequent);
                this.#processNode(node.alternate);
                break;
            case 'DoWhileStatement':
                this.#processNode(node.body);
                this.#processNode(node.test);
                break;
            case 'ForInStatement':
            case 'ForOfStatement':
                this.#pushScope(node.start, node.end);
                this.#processNode(node.left);
                this.#processNode(node.right);
                this.#processNode(node.body);
                this.#popScope(false);
                break;
            case 'ForStatement':
                this.#pushScope(node.start, node.end);
                this.#processNode(node.init ?? null);
                this.#processNode(node.test ?? null);
                this.#processNode(node.update ?? null);
                this.#processNode(node.body);
                this.#popScope(false);
                break;
            case 'FunctionDeclaration':
                this.#processNodeAsDefinition(2 /* DefinitionKind.Var */, false, node.id);
                this.#pushScope(node.id?.end ?? node.start, node.end);
                this.#addVariable('this', node.start, 3 /* DefinitionKind.Fixed */);
                this.#addVariable('arguments', node.start, 3 /* DefinitionKind.Fixed */);
                node.params.forEach(this.#processNodeAsDefinition.bind(this, 1 /* DefinitionKind.Let */, false));
                // Process the body of the block statement directly to avoid creating new scope.
                node.body.body.forEach(this.#processNode.bind(this));
                this.#popScope(true);
                break;
            case 'FunctionExpression':
                this.#pushScope(node.id?.end ?? node.start, node.end);
                this.#addVariable('this', node.start, 3 /* DefinitionKind.Fixed */);
                this.#addVariable('arguments', node.start, 3 /* DefinitionKind.Fixed */);
                node.params.forEach(this.#processNodeAsDefinition.bind(this, 1 /* DefinitionKind.Let */, false));
                // Process the body of the block statement directly to avoid creating new scope.
                node.body.body.forEach(this.#processNode.bind(this));
                this.#popScope(true);
                break;
            case 'Identifier':
                this.#addVariable(node.name, node.start);
                break;
            case 'IfStatement':
                this.#processNode(node.test);
                this.#processNode(node.consequent);
                this.#processNode(node.alternate ?? null);
                break;
            case 'LabeledStatement':
                this.#processNode(node.body);
                break;
            case 'MetaProperty':
                break;
            case 'MethodDefinition':
                if (node.computed) {
                    this.#processNode(node.key);
                }
                this.#processNode(node.value);
                break;
            case 'NewExpression':
                this.#processNode(node.callee);
                node.arguments.forEach(this.#processNode.bind(this));
                break;
            case 'MemberExpression':
                this.#processNode(node.object);
                if (node.computed) {
                    this.#processNode(node.property);
                }
                break;
            case 'ObjectExpression':
                node.properties.forEach(this.#processNode.bind(this));
                break;
            case 'ObjectPattern':
                node.properties.forEach(this.#processNode.bind(this));
                break;
            case 'PrivateIdentifier':
                break;
            case 'PropertyDefinition':
                if (node.computed) {
                    this.#processNode(node.key);
                }
                this.#processNode(node.value ?? null);
                break;
            case 'Property':
                if (node.shorthand) {
                    console.assert(node.value.type === 'Identifier');
                    console.assert(node.key.type === 'Identifier');
                    console.assert(node.value.name === node.key.name);
                    this.#addVariable(node.value.name, node.value.start, 0 /* DefinitionKind.None */, true);
                }
                else {
                    if (node.computed) {
                        this.#processNode(node.key);
                    }
                    this.#processNode(node.value);
                }
                break;
            case 'RestElement':
                this.#processNodeAsDefinition(1 /* DefinitionKind.Let */, false, node.argument);
                break;
            case 'ReturnStatement':
                this.#processNode(node.argument ?? null);
                break;
            case 'SequenceExpression':
                node.expressions.forEach(this.#processNode.bind(this));
                break;
            case 'SpreadElement':
                this.#processNode(node.argument);
                break;
            case 'SwitchCase':
                this.#processNode(node.test ?? null);
                node.consequent.forEach(this.#processNode.bind(this));
                break;
            case 'SwitchStatement':
                this.#processNode(node.discriminant);
                node.cases.forEach(this.#processNode.bind(this));
                break;
            case 'TaggedTemplateExpression':
                this.#processNode(node.tag);
                this.#processNode(node.quasi);
                break;
            case 'TemplateLiteral':
                node.expressions.forEach(this.#processNode.bind(this));
                break;
            case 'ThisExpression':
                this.#addVariable('this', node.start);
                break;
            case 'ThrowStatement':
                this.#processNode(node.argument);
                break;
            case 'TryStatement':
                this.#processNode(node.block);
                this.#processNode(node.handler ?? null);
                this.#processNode(node.finalizer ?? null);
                break;
            case 'WithStatement':
                this.#processNode(node.object);
                // TODO jarin figure how to treat the with body.
                this.#processNode(node.body);
                break;
            case 'YieldExpression':
                this.#processNode(node.argument ?? null);
                break;
            case 'UnaryExpression':
            case 'UpdateExpression':
                this.#processNode(node.argument);
                break;
            case 'WhileStatement':
                this.#processNode(node.test);
                this.#processNode(node.body);
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
    }
    getFreeVariables() {
        const result = new Map();
        for (const [name, defUse] of this.#rootScope.variables) {
            if (defUse.definitionKind !== 0 /* DefinitionKind.None */) {
                // Skip bound variables.
                continue;
            }
            result.set(name, defUse.uses);
        }
        return result;
    }
    getAllNames() {
        return this.#allNames;
    }
    #pushScope(start, end) {
        this.#currentScope = new Scope(start, end, this.#currentScope);
    }
    #popScope(isFunctionContext) {
        if (this.#currentScope.parent === null) {
            console.error('Internal error: wrong nesting in scope analysis.');
            throw new Error('Internal error');
        }
        this.#currentScope.finalizeToParent(isFunctionContext);
        this.#currentScope = this.#currentScope.parent;
    }
    #addVariable(name, offset, definitionKind = 0 /* DefinitionKind.None */, isShorthandAssignmentProperty = false) {
        this.#allNames.add(name);
        this.#currentScope.addVariable(name, offset, definitionKind, isShorthandAssignmentProperty);
    }
    #processNodeAsDefinition(definitionKind, isShorthandAssignmentProperty, node) {
        if (node === null) {
            return;
        }
        switch (node.type) {
            case 'ArrayPattern':
                node.elements.forEach(this.#processNodeAsDefinition.bind(this, definitionKind, false));
                break;
            case 'AssignmentPattern':
                this.#processNodeAsDefinition(definitionKind, isShorthandAssignmentProperty, node.left);
                this.#processNode(node.right);
                break;
            case 'Identifier':
                this.#addVariable(node.name, node.start, definitionKind, isShorthandAssignmentProperty);
                break;
            case 'MemberExpression':
                this.#processNode(node.object);
                if (node.computed) {
                    this.#processNode(node.property);
                }
                break;
            case 'ObjectPattern':
                node.properties.forEach(this.#processNodeAsDefinition.bind(this, definitionKind, false));
                break;
            case 'Property':
                if (node.computed) {
                    this.#processNode(node.key);
                }
                this.#processNodeAsDefinition(definitionKind, node.shorthand, node.value);
                break;
            case 'RestElement':
                this.#processNodeAsDefinition(definitionKind, false, node.argument);
                break;
        }
    }
    #processVariableDeclarator(definitionKind, decl) {
        this.#processNodeAsDefinition(definitionKind, false, decl.id);
        this.#processNode(decl.init ?? null);
    }
}
//# sourceMappingURL=ScopeParser.js.map

/***/ }),

/***/ "./third_party/acorn/acorn.js":
/*!************************************!*\
  !*** ./third_party/acorn/acorn.js ***!
  \************************************/
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
/* harmony import */ var _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package/dist/acorn.mjs */ "./third_party/acorn/package/dist/acorn.mjs");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


const Parser = _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser;
const tokenizer = _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser.tokenizer.bind(_package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser);
const parse = _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser.parse.bind(_package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser);
//# sourceMappingURL=acorn.js.map

/***/ })

}]);