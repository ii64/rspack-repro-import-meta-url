"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["entrypoints_formatter_worker_ESTreeWalker_js"], {
"./entrypoints/formatter_worker/ESTreeWalker.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ESTreeWalker: function() { return ESTreeWalker; }
});
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
var _beforeVisit = /*#__PURE__*/ new WeakMap(), _afterVisit = /*#__PURE__*/ new WeakMap(), _innerWalk = /*#__PURE__*/ new WeakSet(), _walkArray = /*#__PURE__*/ new WeakSet();
var ESTreeWalker = /*#__PURE__*/ function() {
    "use strict";
    function ESTreeWalker(beforeVisit, afterVisit) {
        _class_call_check(this, ESTreeWalker);
        _class_private_method_init(this, _innerWalk);
        _class_private_method_init(this, _walkArray);
        _class_private_field_init(this, _beforeVisit, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _afterVisit, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _beforeVisit, beforeVisit);
        _class_private_field_set(this, _afterVisit, afterVisit);
    }
    _create_class(ESTreeWalker, [
        {
            key: "walk",
            value: function walk(ast) {
                _class_private_method_get(this, _innerWalk, innerWalk).call(this, ast, null);
            }
        }
    ]);
    return ESTreeWalker;
}();
function innerWalk(node, parent) {
    if (!node) {
        return;
    }
    node.parent = parent;
    _class_private_field_get(this, _beforeVisit).call(null, node);
    var walkOrder = WALK_ORDER[node.type];
    if (!walkOrder) {
        console.error('Walk order not defined for ' + node.type);
        return;
    }
    if (node.type === 'TemplateLiteral') {
        var templateLiteral = node;
        var expressionsLength = templateLiteral.expressions.length;
        for(var i = 0; i < expressionsLength; ++i){
            _class_private_method_get(this, _innerWalk, innerWalk).call(this, templateLiteral.quasis[i], templateLiteral);
            _class_private_method_get(this, _innerWalk, innerWalk).call(this, templateLiteral.expressions[i], templateLiteral);
        }
        _class_private_method_get(this, _innerWalk, innerWalk).call(this, templateLiteral.quasis[expressionsLength], templateLiteral);
    } else {
        for(var i1 = 0; i1 < walkOrder.length; ++i1){
            // @ts-ignore We are doing type traversal here, but the strings
            // in _walkOrder are not mapping. Preferably, we would use the
            // properties as defined in the types, but we can't do that yet.
            // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var entity = node[walkOrder[i1]];
            if (Array.isArray(entity)) {
                _class_private_method_get(this, _walkArray, walkArray).call(this, entity, node);
            } else {
                _class_private_method_get(this, _innerWalk, innerWalk).call(this, entity, node);
            }
        }
    }
    _class_private_field_get(this, _afterVisit).call(null, node);
}
function walkArray(nodeArray, parentNode) {
    for(var i = 0; i < nodeArray.length; ++i){
        _class_private_method_get(this, _innerWalk, innerWalk).call(this, nodeArray[i], parentNode);
    }
}
var WALK_ORDER = {
    'AwaitExpression': [
        'argument'
    ],
    'ArrayExpression': [
        'elements'
    ],
    'ArrayPattern': [
        'elements'
    ],
    'ArrowFunctionExpression': [
        'params',
        'body'
    ],
    'AssignmentExpression': [
        'left',
        'right'
    ],
    'AssignmentPattern': [
        'left',
        'right'
    ],
    'BinaryExpression': [
        'left',
        'right'
    ],
    'BlockStatement': [
        'body'
    ],
    'BreakStatement': [
        'label'
    ],
    'CallExpression': [
        'callee',
        'arguments'
    ],
    'CatchClause': [
        'param',
        'body'
    ],
    'ClassBody': [
        'body'
    ],
    'ClassDeclaration': [
        'id',
        'superClass',
        'body'
    ],
    'ClassExpression': [
        'id',
        'superClass',
        'body'
    ],
    'ChainExpression': [
        'expression'
    ],
    'ConditionalExpression': [
        'test',
        'consequent',
        'alternate'
    ],
    'ContinueStatement': [
        'label'
    ],
    'DebuggerStatement': [],
    'DoWhileStatement': [
        'body',
        'test'
    ],
    'EmptyStatement': [],
    'ExpressionStatement': [
        'expression'
    ],
    'ForInStatement': [
        'left',
        'right',
        'body'
    ],
    'ForOfStatement': [
        'left',
        'right',
        'body'
    ],
    'ForStatement': [
        'init',
        'test',
        'update',
        'body'
    ],
    'FunctionDeclaration': [
        'id',
        'params',
        'body'
    ],
    'FunctionExpression': [
        'id',
        'params',
        'body'
    ],
    'Identifier': [],
    'ImportDeclaration': [
        'specifiers',
        'source'
    ],
    'ImportDefaultSpecifier': [
        'local'
    ],
    'ImportNamespaceSpecifier': [
        'local'
    ],
    'ImportSpecifier': [
        'imported',
        'local'
    ],
    'ImportExpression': [
        'source'
    ],
    'ExportAllDeclaration': [
        'source'
    ],
    'ExportDefaultDeclaration': [
        'declaration'
    ],
    'ExportNamedDeclaration': [
        'specifiers',
        'source',
        'declaration'
    ],
    'ExportSpecifier': [
        'exported',
        'local'
    ],
    'IfStatement': [
        'test',
        'consequent',
        'alternate'
    ],
    'LabeledStatement': [
        'label',
        'body'
    ],
    'Literal': [],
    'LogicalExpression': [
        'left',
        'right'
    ],
    'MemberExpression': [
        'object',
        'property'
    ],
    'MetaProperty': [
        'meta',
        'property'
    ],
    'MethodDefinition': [
        'key',
        'value'
    ],
    'NewExpression': [
        'callee',
        'arguments'
    ],
    'ObjectExpression': [
        'properties'
    ],
    'ObjectPattern': [
        'properties'
    ],
    'ParenthesizedExpression': [
        'expression'
    ],
    'PrivateIdentifier': [],
    'PropertyDefinition': [
        'key',
        'value'
    ],
    'Program': [
        'body'
    ],
    'Property': [
        'key',
        'value'
    ],
    'RestElement': [
        'argument'
    ],
    'ReturnStatement': [
        'argument'
    ],
    'SequenceExpression': [
        'expressions'
    ],
    'SpreadElement': [
        'argument'
    ],
    'StaticBlock': [
        'body'
    ],
    'Super': [],
    'SwitchCase': [
        'test',
        'consequent'
    ],
    'SwitchStatement': [
        'discriminant',
        'cases'
    ],
    'TaggedTemplateExpression': [
        'tag',
        'quasi'
    ],
    'TemplateElement': [],
    'TemplateLiteral': [
        'quasis',
        'expressions'
    ],
    'ThisExpression': [],
    'ThrowStatement': [
        'argument'
    ],
    'TryStatement': [
        'block',
        'handler',
        'finalizer'
    ],
    'UnaryExpression': [
        'argument'
    ],
    'UpdateExpression': [
        'argument'
    ],
    'VariableDeclaration': [
        'declarations'
    ],
    'VariableDeclarator': [
        'id',
        'init'
    ],
    'WhileStatement': [
        'test',
        'body'
    ],
    'WithStatement': [
        'object',
        'body'
    ],
    'YieldExpression': [
        'argument'
    ]
}; //# sourceMappingURL=ESTreeWalker.js.map


}),

}]);