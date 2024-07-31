"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_entrypoints_formatter_worker_ESTreeWalker_ts"],{

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


/***/ })

}]);