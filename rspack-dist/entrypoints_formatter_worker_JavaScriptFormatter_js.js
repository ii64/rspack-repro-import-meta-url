"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["entrypoints_formatter_worker_JavaScriptFormatter_js"], {
"./entrypoints/formatter_worker/JavaScriptFormatter.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  JavaScriptFormatter: function() { return JavaScriptFormatter; }
});
/* harmony import */var _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../third_party/acorn/acorn.js */ "./third_party/acorn/acorn.js");
/* harmony import */var _AcornTokenizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AcornTokenizer.js */ "./entrypoints/formatter_worker/AcornTokenizer.js");
/* harmony import */var _ESTreeWalker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ESTreeWalker.js */ "./entrypoints/formatter_worker/ESTreeWalker.js");
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



var _builder = /*#__PURE__*/ new WeakMap(), _tokenizer = /*#__PURE__*/ new WeakMap(), _content = /*#__PURE__*/ new WeakMap(), _fromOffset = /*#__PURE__*/ new WeakMap(), _lastLineNumber = /*#__PURE__*/ new WeakMap(), _toOffset = /*#__PURE__*/ new WeakMap(), _push = /*#__PURE__*/ new WeakSet(), _beforeVisit = /*#__PURE__*/ new WeakSet(), _afterVisit = /*#__PURE__*/ new WeakSet(), _inForLoopHeader = /*#__PURE__*/ new WeakSet(), _formatToken = /*#__PURE__*/ new WeakSet(), _finishNode = /*#__PURE__*/ new WeakSet();
var JavaScriptFormatter = /*#__PURE__*/ function() {
    "use strict";
    function JavaScriptFormatter(builder) {
        _class_call_check(this, JavaScriptFormatter);
        _class_private_method_init(this, _push);
        _class_private_method_init(this, _beforeVisit);
        _class_private_method_init(this, _afterVisit);
        _class_private_method_init(this, _inForLoopHeader);
        _class_private_method_init(this, _formatToken);
        _class_private_method_init(this, _finishNode);
        _class_private_field_init(this, _builder, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _tokenizer, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _content, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _fromOffset, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _lastLineNumber, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _toOffset, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _builder, builder);
    }
    _create_class(JavaScriptFormatter, [
        {
            key: "format",
            value: function format(text, lineEndings, fromOffset, toOffset) {
                _class_private_field_set(this, _fromOffset, fromOffset);
                _class_private_field_set(this, _toOffset, toOffset);
                _class_private_field_set(this, _content, text.substring(_class_private_field_get(this, _fromOffset), _class_private_field_get(this, _toOffset)));
                _class_private_field_set(this, _lastLineNumber, 0);
                var tokens = [];
                var ast = _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_0__.parse(_class_private_field_get(this, _content), {
                    ranges: false,
                    preserveParens: true,
                    allowAwaitOutsideFunction: true,
                    allowImportExportEverywhere: true,
                    ecmaVersion: _AcornTokenizer_js__WEBPACK_IMPORTED_MODULE_1__.ECMA_VERSION,
                    allowHashBang: true,
                    onToken: tokens,
                    onComment: tokens
                });
                _class_private_field_set(this, _tokenizer, new _AcornTokenizer_js__WEBPACK_IMPORTED_MODULE_1__.AcornTokenizer(_class_private_field_get(this, _content), tokens));
                var walker = new _ESTreeWalker_js__WEBPACK_IMPORTED_MODULE_2__.ESTreeWalker(_class_private_method_get(this, _beforeVisit, beforeVisit).bind(this), _class_private_method_get(this, _afterVisit, afterVisit).bind(this));
                // @ts-ignore Technically, the acorn Node type is a subclass of Acorn.ESTree.Node.
                // However, the acorn package currently exports its type without specifying
                // this relationship. So while this is allowed on runtime, we can't properly
                // typecheck it.
                walker.walk(ast);
            }
        }
    ]);
    return JavaScriptFormatter;
} //# sourceMappingURL=JavaScriptFormatter.js.map
();
function push(token, format) {
    for(var i = 0; i < format.length; ++i){
        if (format[i] === 's') {
            _class_private_field_get(this, _builder).addSoftSpace();
        } else if (format[i] === 'S') {
            _class_private_field_get(this, _builder).addHardSpace();
        } else if (format[i] === 'n') {
            _class_private_field_get(this, _builder).addNewLine();
        } else if (format[i] === '>') {
            _class_private_field_get(this, _builder).increaseNestingLevel();
        } else if (format[i] === '<') {
            _class_private_field_get(this, _builder).decreaseNestingLevel();
        } else if (format[i] === 't') {
            if (_class_private_field_get(this, _tokenizer).tokenLineStart() - _class_private_field_get(this, _lastLineNumber) > 1) {
                _class_private_field_get(this, _builder).addNewLine(true);
            }
            _class_private_field_set(this, _lastLineNumber, _class_private_field_get(this, _tokenizer).tokenLineEnd());
            if (token) {
                _class_private_field_get(this, _builder).addToken(_class_private_field_get(this, _content).substring(token.start, token.end), _class_private_field_get(this, _fromOffset) + token.start);
            }
        }
    }
}
function beforeVisit(node) {
    if (!node.parent) {
        return;
    }
    if (node.type === 'TemplateLiteral') {
        _class_private_field_get(this, _builder).setEnforceSpaceBetweenWords(false);
    }
    var token;
    while((token = _class_private_field_get(this, _tokenizer).peekToken()) && token.start < node.start){
        var token1 = _class_private_field_get(this, _tokenizer).nextToken();
        // @ts-ignore Same reason as above about Acorn types and ESTree types
        var format = _class_private_method_get(this, _formatToken, formatToken).call(this, node.parent, token1);
        _class_private_method_get(this, _push, push).call(this, token1, format);
    }
}
function afterVisit(node) {
    var token;
    while((token = _class_private_field_get(this, _tokenizer).peekToken()) && token.start < node.end){
        var token1 = _class_private_field_get(this, _tokenizer).nextToken();
        var format = _class_private_method_get(this, _formatToken, formatToken).call(this, node, token1);
        _class_private_method_get(this, _push, push).call(this, token1, format);
    }
    _class_private_method_get(this, _push, push).call(this, null, _class_private_method_get(this, _finishNode, finishNode).call(this, node));
    if (node.type === 'TemplateLiteral') {
        _class_private_field_get(this, _builder).setEnforceSpaceBetweenWords(true);
    }
}
function inForLoopHeader(node) {
    var parent = node.parent;
    if (!parent) {
        return false;
    }
    if (parent.type === 'ForStatement') {
        var parentNode = parent;
        return node === parentNode.init || node === parentNode.test || node === parentNode.update;
    }
    if (parent.type === 'ForInStatement' || parent.type === 'ForOfStatement') {
        var parentNode1 = parent;
        return node === parentNode1.left || node === parentNode1.right;
    }
    return false;
}
function formatToken(node, tokenOrComment) {
    var AT = _AcornTokenizer_js__WEBPACK_IMPORTED_MODULE_1__.AcornTokenizer;
    if (AT.lineComment(tokenOrComment)) {
        return 'tn';
    }
    if (AT.blockComment(tokenOrComment)) {
        return 'tn';
    }
    var token = tokenOrComment;
    var nodeType = node.type;
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
    } else if (nodeType === 'LogicalExpression' || nodeType === 'AssignmentExpression' || nodeType === 'BinaryExpression') {
        if (AT.punctuator(token) && !AT.punctuator(token, '()')) {
            return 'sts';
        }
    } else if (nodeType === 'ConditionalExpression') {
        if (AT.punctuator(token, '?:')) {
            return 'sts';
        }
    } else if (nodeType === 'VariableDeclarator') {
        if (AT.punctuator(token, '=')) {
            return 'sts';
        }
    } else if (nodeType === 'ObjectPattern') {
        if (node.parent && node.parent.type === 'VariableDeclarator' && AT.punctuator(token, '{')) {
            return 'st';
        }
        if (AT.punctuator(token, ',')) {
            return 'ts';
        }
    } else if (nodeType === 'FunctionDeclaration') {
        if (AT.punctuator(token, ',)')) {
            return 'ts';
        }
    } else if (nodeType === 'FunctionExpression') {
        if (AT.punctuator(token, ',)')) {
            return 'ts';
        }
        if (AT.keyword(token, 'function')) {
            return node.id ? 'ts' : 't';
        }
    } else if (nodeType === 'ArrowFunctionExpression') {
        if (AT.punctuator(token, ',)')) {
            return 'ts';
        }
        if (AT.punctuator(token, '(')) {
            return 'st';
        }
        if (AT.arrowIdentifier(token, '=>')) {
            return 'sts';
        }
    } else if (nodeType === 'WithStatement') {
        if (AT.punctuator(token, ')')) {
            return node.body && node.body.type === 'BlockStatement' ? 'ts' : 'tn>';
        }
    } else if (nodeType === 'SwitchStatement') {
        if (AT.punctuator(token, '{')) {
            return 'tn>';
        }
        if (AT.punctuator(token, '}')) {
            return 'n<tn';
        }
        if (AT.punctuator(token, ')')) {
            return 'ts';
        }
    } else if (nodeType === 'SwitchCase') {
        if (AT.keyword(token, 'case')) {
            return 'n<ts';
        }
        if (AT.keyword(token, 'default')) {
            return 'n<t';
        }
        if (AT.punctuator(token, ':')) {
            return 'tn>';
        }
    } else if (nodeType === 'VariableDeclaration') {
        if (AT.punctuator(token, ',')) {
            var allVariablesInitialized = true;
            var declarations = node.declarations;
            for(var i = 0; i < declarations.length; ++i){
                // @ts-ignore We are doing a subtype check, without properly checking whether
                // it exists. We can't fix that, unless we use proper typechecking
                allVariablesInitialized = allVariablesInitialized && Boolean(declarations[i].init);
            }
            return !_class_private_method_get(this, _inForLoopHeader, inForLoopHeader).call(this, node) && allVariablesInitialized ? 'nSSts' : 'ts';
        }
    } else if (nodeType === 'PropertyDefinition') {
        if (AT.punctuator(token, '=')) {
            return 'sts';
        }
        if (AT.punctuator(token, ';')) {
            return 'tn';
        }
    } else if (nodeType === 'BlockStatement') {
        if (AT.punctuator(token, '{')) {
            return node.body.length ? 'tn>' : 't';
        }
        if (AT.punctuator(token, '}')) {
            return node.body.length ? 'n<t' : 't';
        }
    } else if (nodeType === 'CatchClause') {
        if (AT.punctuator(token, ')')) {
            return 'ts';
        }
    } else if (nodeType === 'ObjectExpression') {
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
    } else if (nodeType === 'IfStatement') {
        if (AT.punctuator(token, ')')) {
            return node.consequent && node.consequent.type === 'BlockStatement' ? 'ts' : 'tn>';
        }
        if (AT.keyword(token, 'else')) {
            var preFormat = node.consequent && node.consequent.type === 'BlockStatement' ? 'st' : 'n<t';
            var postFormat = 'n>';
            if (node.alternate && (node.alternate.type === 'BlockStatement' || node.alternate.type === 'IfStatement')) {
                postFormat = 's';
            }
            return preFormat + postFormat;
        }
    } else if (nodeType === 'CallExpression') {
        if (AT.punctuator(token, ',')) {
            return 'ts';
        }
    } else if (nodeType === 'SequenceExpression' && AT.punctuator(token, ',')) {
        return node.parent && node.parent.type === 'SwitchCase' ? 'ts' : 'tn';
    } else if (nodeType === 'ForStatement' || nodeType === 'ForOfStatement' || nodeType === 'ForInStatement') {
        if (AT.punctuator(token, ';')) {
            return 'ts';
        }
        if (AT.keyword(token, 'in') || AT.identifier(token, 'of')) {
            return 'sts';
        }
        if (AT.punctuator(token, ')')) {
            return node.body && node.body.type === 'BlockStatement' ? 'ts' : 'tn>';
        }
    } else if (nodeType === 'WhileStatement') {
        if (AT.punctuator(token, ')')) {
            return node.body && node.body.type === 'BlockStatement' ? 'ts' : 'tn>';
        }
    } else if (nodeType === 'DoWhileStatement') {
        var blockBody = node.body && node.body.type === 'BlockStatement';
        if (AT.keyword(token, 'do')) {
            return blockBody ? 'ts' : 'tn>';
        }
        if (AT.keyword(token, 'while')) {
            return blockBody ? 'sts' : 'n<ts';
        }
        if (AT.punctuator(token, ';')) {
            return 'tn';
        }
    } else if (nodeType === 'ClassBody') {
        if (AT.punctuator(token, '{')) {
            return 'stn>';
        }
        if (AT.punctuator(token, '}')) {
            return '<ntn';
        }
        return 't';
    } else if (nodeType === 'YieldExpression') {
        return 't';
    } else if (nodeType === 'Super') {
        return 't';
    } else if (nodeType === 'ImportExpression') {
        return 't';
    } else if (nodeType === 'ExportAllDeclaration') {
        if (AT.punctuator(token, '*')) {
            return 'sts';
        }
        return 't';
    } else if (nodeType === 'ExportNamedDeclaration' || nodeType === 'ImportDeclaration') {
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
}
function finishNode(node) {
    var nodeType = node.type;
    if (nodeType === 'WithStatement') {
        if (node.body && node.body.type !== 'BlockStatement') {
            return 'n<';
        }
    } else if (nodeType === 'VariableDeclaration') {
        if (!_class_private_method_get(this, _inForLoopHeader, inForLoopHeader).call(this, node)) {
            return 'n';
        }
    } else if (nodeType === 'ForStatement' || nodeType === 'ForOfStatement' || nodeType === 'ForInStatement') {
        if (node.body && node.body.type !== 'BlockStatement') {
            return 'n<';
        }
    } else if (nodeType === 'BlockStatement') {
        if (node.parent && node.parent.type === 'IfStatement') {
            var parentNode = node.parent;
            if (parentNode.alternate && parentNode.consequent === node) {
                return '';
            }
        }
        if (node.parent && node.parent.type === 'FunctionExpression' && node.parent.parent && node.parent.parent.type === 'Property') {
            return '';
        }
        if (node.parent && node.parent.type === 'FunctionExpression' && node.parent.parent && node.parent.parent.type === 'VariableDeclarator') {
            return '';
        }
        if (node.parent && node.parent.type === 'FunctionExpression' && node.parent.parent && node.parent.parent.type === 'CallExpression') {
            return '';
        }
        if (node.parent && node.parent.type === 'DoWhileStatement') {
            return '';
        }
        if (node.parent && node.parent.type === 'TryStatement') {
            var parentNode1 = node.parent;
            if (parentNode1.block === node) {
                return 's';
            }
        }
        if (node.parent && node.parent.type === 'CatchClause') {
            var parentNode2 = node.parent;
            // @ts-ignore We are doing a subtype check, without properly checking whether
            // it exists. We can't fix that, unless we use proper typechecking
            if (parentNode2.parent && parentNode2.parent.finalizer) {
                return 's';
            }
        }
        return 'n';
    } else if (nodeType === 'WhileStatement') {
        if (node.body && node.body.type !== 'BlockStatement') {
            return 'n<';
        }
    } else if (nodeType === 'IfStatement') {
        if (node.alternate) {
            if (node.alternate.type !== 'BlockStatement' && node.alternate.type !== 'IfStatement') {
                return '<';
            }
        } else if (node.consequent) {
            if (node.consequent.type !== 'BlockStatement') {
                return '<';
            }
        }
    } else if (nodeType === 'BreakStatement' || nodeType === 'ContinueStatement' || nodeType === 'ThrowStatement' || nodeType === 'ReturnStatement' || nodeType === 'ExpressionStatement') {
        return 'n';
    } else if (nodeType === 'ImportDeclaration' || nodeType === 'ExportAllDeclaration' || nodeType === 'ExportDefaultDeclaration' || nodeType === 'ExportNamedDeclaration') {
        return 'n';
    }
    return '';
}


}),

}]);