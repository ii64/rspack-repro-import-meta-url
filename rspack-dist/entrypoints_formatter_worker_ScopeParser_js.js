"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["entrypoints_formatter_worker_ScopeParser_js"], {
"./entrypoints/formatter_worker/ScopeParser.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Scope: function() { return Scope; },
  ScopeVariableAnalysis: function() { return ScopeVariableAnalysis; },
  parseScopes: function() { return parseScopes; }
});
/* harmony import */var _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../third_party/acorn/acorn.js */ "./third_party/acorn/acorn.js");
/* harmony import */var _AcornTokenizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AcornTokenizer.js */ "./entrypoints/formatter_worker/AcornTokenizer.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}


function parseScopes(expression) {
    var sourceType = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'script';
    // Parse the expression and find variables and scopes.
    var root = null;
    try {
        root = _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_0__.parse(expression, {
            ecmaVersion: _AcornTokenizer_js__WEBPACK_IMPORTED_MODULE_1__.ECMA_VERSION,
            allowAwaitOutsideFunction: true,
            ranges: false,
            sourceType: sourceType
        });
    } catch (e) {
        return null;
    }
    return new ScopeVariableAnalysis(root).run();
}
var _mergeChildDefUses = /*#__PURE__*/ new WeakSet();
var Scope = /*#__PURE__*/ function() {
    "use strict";
    function Scope(start, end, parent) {
        _class_call_check(this, Scope);
        _class_private_method_init(this, _mergeChildDefUses);
        _define_property(this, "variables", new Map());
        _define_property(this, "parent", void 0);
        _define_property(this, "start", void 0);
        _define_property(this, "end", void 0);
        _define_property(this, "children", []);
        this.start = start;
        this.end = end;
        this.parent = parent;
        if (parent) {
            parent.children.push(this);
        }
    }
    _create_class(Scope, [
        {
            key: "export",
            value: function _export() {
                var variables = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.variables[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var variable = _step.value;
                        var offsets = [];
                        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                        try {
                            for(var _iterator1 = variable[1].uses[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                var use = _step1.value;
                                offsets.push(use.offset);
                            }
                        } catch (err) {
                            _didIteratorError1 = true;
                            _iteratorError1 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                    _iterator1.return();
                                }
                            } finally{
                                if (_didIteratorError1) {
                                    throw _iteratorError1;
                                }
                            }
                        }
                        variables.push({
                            name: variable[0],
                            kind: variable[1].definitionKind,
                            offsets: offsets
                        });
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                var children = this.children.map(function(c) {
                    return c.export();
                });
                return {
                    start: this.start,
                    end: this.end,
                    variables: variables,
                    children: children
                };
            }
        },
        {
            key: "addVariable",
            value: function addVariable(name, offset, definitionKind, isShorthandAssignmentProperty) {
                var variable = this.variables.get(name);
                var use = {
                    offset: offset,
                    scope: this,
                    isShorthandAssignmentProperty: isShorthandAssignmentProperty
                };
                if (!variable) {
                    this.variables.set(name, {
                        definitionKind: definitionKind,
                        uses: [
                            use
                        ]
                    });
                    return;
                }
                if (variable.definitionKind === 0 /* DefinitionKind.None */ ) {
                    variable.definitionKind = definitionKind;
                }
                variable.uses.push(use);
            }
        },
        {
            key: "findBinders",
            value: function findBinders(name) {
                var result = [];
                var scope = this;
                while(scope !== null){
                    var defUse = scope.variables.get(name);
                    if (defUse && defUse.definitionKind !== 0 /* DefinitionKind.None */ ) {
                        result.push(defUse);
                    }
                    scope = scope.parent;
                }
                return result;
            }
        },
        {
            key: "finalizeToParent",
            value: function finalizeToParent(isFunctionScope) {
                var _this = this;
                var _this_parent;
                if (!this.parent) {
                    console.error('Internal error: wrong nesting in scope analysis.');
                    throw new Error('Internal error');
                }
                // Move all unbound variables to the parent (also move var-bound variables
                // if the parent is not a function).
                var keysToRemove = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.variables.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array(_step.value, 2), name = _step_value[0], defUse = _step_value[1];
                        if (defUse.definitionKind === 0 /* DefinitionKind.None */  || defUse.definitionKind === 2 /* DefinitionKind.Var */  && !isFunctionScope) {
                            _class_private_method_get(_this_parent = this.parent, _mergeChildDefUses, mergeChildDefUses).call(_this_parent, name, defUse);
                            keysToRemove.push(name);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                keysToRemove.forEach(function(k) {
                    return _this.variables.delete(k);
                });
            }
        }
    ]);
    return Scope;
}();
function mergeChildDefUses(name, defUses) {
    var _variable_uses;
    var variable = this.variables.get(name);
    if (!variable) {
        this.variables.set(name, defUses);
        return;
    }
    (_variable_uses = variable.uses).push.apply(_variable_uses, _to_consumable_array(defUses.uses));
    if (defUses.definitionKind === 2 /* DefinitionKind.Var */ ) {
        console.assert(variable.definitionKind !== 1 /* DefinitionKind.Let */ );
        if (variable.definitionKind === 0 /* DefinitionKind.None */ ) {
            variable.definitionKind = defUses.definitionKind;
        }
    } else {
        console.assert(defUses.definitionKind === 0 /* DefinitionKind.None */ );
    }
}
var _rootScope = /*#__PURE__*/ new WeakMap(), _allNames = /*#__PURE__*/ new WeakMap(), _currentScope = /*#__PURE__*/ new WeakMap(), _rootNode = /*#__PURE__*/ new WeakMap(), _processNode = /*#__PURE__*/ new WeakSet(), _pushScope = /*#__PURE__*/ new WeakSet(), _popScope = /*#__PURE__*/ new WeakSet(), _addVariable = /*#__PURE__*/ new WeakSet(), _processNodeAsDefinition = /*#__PURE__*/ new WeakSet(), _processVariableDeclarator = /*#__PURE__*/ new WeakSet();
var ScopeVariableAnalysis = /*#__PURE__*/ function() {
    "use strict";
    function ScopeVariableAnalysis(node) {
        _class_call_check(this, ScopeVariableAnalysis);
        _class_private_method_init(this, _processNode);
        _class_private_method_init(this, _pushScope);
        _class_private_method_init(this, _popScope);
        _class_private_method_init(this, _addVariable);
        _class_private_method_init(this, _processNodeAsDefinition);
        _class_private_method_init(this, _processVariableDeclarator);
        _class_private_field_init(this, _rootScope, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _allNames, {
            writable: true,
            value: new Set()
        });
        _class_private_field_init(this, _currentScope, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _rootNode, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _rootNode, node);
        _class_private_field_set(this, _rootScope, new Scope(node.start, node.end, null));
        _class_private_field_set(this, _currentScope, _class_private_field_get(this, _rootScope));
    }
    _create_class(ScopeVariableAnalysis, [
        {
            key: "run",
            value: function run() {
                _class_private_method_get(this, _processNode, processNode).call(this, _class_private_field_get(this, _rootNode));
                return _class_private_field_get(this, _rootScope);
            }
        },
        {
            key: "getFreeVariables",
            value: function getFreeVariables() {
                var result = new Map();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _rootScope).variables[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array(_step.value, 2), name = _step_value[0], defUse = _step_value[1];
                        if (defUse.definitionKind !== 0 /* DefinitionKind.None */ ) {
                            continue;
                        }
                        result.set(name, defUse.uses);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return result;
            }
        },
        {
            key: "getAllNames",
            value: function getAllNames() {
                return _class_private_field_get(this, _allNames);
            }
        }
    ]);
    return ScopeVariableAnalysis;
} //# sourceMappingURL=ScopeParser.js.map
();
function processNode(node) {
    var _this = this;
    if (node === null) {
        return;
    }
    switch(node.type){
        case 'AwaitExpression':
            _class_private_method_get(this, _processNode, processNode).call(this, node.argument);
            break;
        case 'ArrayExpression':
            node.elements.forEach(function(item) {
                return _class_private_method_get(_this, _processNode, processNode).call(_this, item);
            });
            break;
        case 'ExpressionStatement':
            _class_private_method_get(this, _processNode, processNode).call(this, node.expression);
            break;
        case 'Program':
            console.assert(_class_private_field_get(this, _currentScope) === _class_private_field_get(this, _rootScope));
            node.body.forEach(function(item) {
                return _class_private_method_get(_this, _processNode, processNode).call(_this, item);
            });
            console.assert(_class_private_field_get(this, _currentScope) === _class_private_field_get(this, _rootScope));
            break;
        case 'ArrayPattern':
            node.elements.forEach(function(item) {
                return _class_private_method_get(_this, _processNode, processNode).call(_this, item);
            });
            break;
        case 'ArrowFunctionExpression':
            {
                _class_private_method_get(this, _pushScope, pushScope).call(this, node.start, node.end);
                node.params.forEach(_class_private_method_get(this, _processNodeAsDefinition, processNodeAsDefinition).bind(this, 2 /* DefinitionKind.Var */ , false));
                if (node.body.type === 'BlockStatement') {
                    // Include the body of the arrow function in the same scope as the arguments.
                    node.body.body.forEach(_class_private_method_get(this, _processNode, processNode).bind(this));
                } else {
                    _class_private_method_get(this, _processNode, processNode).call(this, node.body);
                }
                _class_private_method_get(this, _popScope, popScope).call(this, true);
                break;
            }
        case 'AssignmentExpression':
        case 'AssignmentPattern':
        case 'BinaryExpression':
        case 'LogicalExpression':
            _class_private_method_get(this, _processNode, processNode).call(this, node.left);
            _class_private_method_get(this, _processNode, processNode).call(this, node.right);
            break;
        case 'BlockStatement':
            _class_private_method_get(this, _pushScope, pushScope).call(this, node.start, node.end);
            node.body.forEach(_class_private_method_get(this, _processNode, processNode).bind(this));
            _class_private_method_get(this, _popScope, popScope).call(this, false);
            break;
        case 'CallExpression':
            _class_private_method_get(this, _processNode, processNode).call(this, node.callee);
            node.arguments.forEach(_class_private_method_get(this, _processNode, processNode).bind(this));
            break;
        case 'VariableDeclaration':
            {
                var definitionKind = node.kind === 'var' ? 2 /* DefinitionKind.Var */  : 1 /* DefinitionKind.Let */ ;
                node.declarations.forEach(_class_private_method_get(this, _processVariableDeclarator, processVariableDeclarator).bind(this, definitionKind));
                break;
            }
        case 'CatchClause':
            _class_private_method_get(this, _pushScope, pushScope).call(this, node.start, node.end);
            _class_private_method_get(this, _processNodeAsDefinition, processNodeAsDefinition).call(this, 1 /* DefinitionKind.Let */ , false, node.param);
            _class_private_method_get(this, _processNode, processNode).call(this, node.body);
            _class_private_method_get(this, _popScope, popScope).call(this, false);
            break;
        case 'ClassBody':
            node.body.forEach(_class_private_method_get(this, _processNode, processNode).bind(this));
            break;
        case 'ClassDeclaration':
            _class_private_method_get(this, _processNodeAsDefinition, processNodeAsDefinition).call(this, 1 /* DefinitionKind.Let */ , false, node.id);
            var _node_superClass;
            _class_private_method_get(this, _processNode, processNode).call(this, (_node_superClass = node.superClass) !== null && _node_superClass !== void 0 ? _node_superClass : null);
            _class_private_method_get(this, _processNode, processNode).call(this, node.body);
            break;
        case 'ClassExpression':
            var _node_superClass1;
            // Intentionally ignore the id.
            _class_private_method_get(this, _processNode, processNode).call(this, (_node_superClass1 = node.superClass) !== null && _node_superClass1 !== void 0 ? _node_superClass1 : null);
            _class_private_method_get(this, _processNode, processNode).call(this, node.body);
            break;
        case 'ChainExpression':
            _class_private_method_get(this, _processNode, processNode).call(this, node.expression);
            break;
        case 'ConditionalExpression':
            _class_private_method_get(this, _processNode, processNode).call(this, node.test);
            _class_private_method_get(this, _processNode, processNode).call(this, node.consequent);
            _class_private_method_get(this, _processNode, processNode).call(this, node.alternate);
            break;
        case 'DoWhileStatement':
            _class_private_method_get(this, _processNode, processNode).call(this, node.body);
            _class_private_method_get(this, _processNode, processNode).call(this, node.test);
            break;
        case 'ForInStatement':
        case 'ForOfStatement':
            _class_private_method_get(this, _pushScope, pushScope).call(this, node.start, node.end);
            _class_private_method_get(this, _processNode, processNode).call(this, node.left);
            _class_private_method_get(this, _processNode, processNode).call(this, node.right);
            _class_private_method_get(this, _processNode, processNode).call(this, node.body);
            _class_private_method_get(this, _popScope, popScope).call(this, false);
            break;
        case 'ForStatement':
            _class_private_method_get(this, _pushScope, pushScope).call(this, node.start, node.end);
            var _node_init;
            _class_private_method_get(this, _processNode, processNode).call(this, (_node_init = node.init) !== null && _node_init !== void 0 ? _node_init : null);
            var _node_test;
            _class_private_method_get(this, _processNode, processNode).call(this, (_node_test = node.test) !== null && _node_test !== void 0 ? _node_test : null);
            var _node_update;
            _class_private_method_get(this, _processNode, processNode).call(this, (_node_update = node.update) !== null && _node_update !== void 0 ? _node_update : null);
            _class_private_method_get(this, _processNode, processNode).call(this, node.body);
            _class_private_method_get(this, _popScope, popScope).call(this, false);
            break;
        case 'FunctionDeclaration':
            var _node_id;
            _class_private_method_get(this, _processNodeAsDefinition, processNodeAsDefinition).call(this, 2 /* DefinitionKind.Var */ , false, node.id);
            var _node_id_end;
            _class_private_method_get(this, _pushScope, pushScope).call(this, (_node_id_end = (_node_id = node.id) === null || _node_id === void 0 ? void 0 : _node_id.end) !== null && _node_id_end !== void 0 ? _node_id_end : node.start, node.end);
            _class_private_method_get(this, _addVariable, addVariable).call(this, 'this', node.start, 3 /* DefinitionKind.Fixed */ );
            _class_private_method_get(this, _addVariable, addVariable).call(this, 'arguments', node.start, 3 /* DefinitionKind.Fixed */ );
            node.params.forEach(_class_private_method_get(this, _processNodeAsDefinition, processNodeAsDefinition).bind(this, 1 /* DefinitionKind.Let */ , false));
            // Process the body of the block statement directly to avoid creating new scope.
            node.body.body.forEach(_class_private_method_get(this, _processNode, processNode).bind(this));
            _class_private_method_get(this, _popScope, popScope).call(this, true);
            break;
        case 'FunctionExpression':
            var _node_id1;
            var _node_id_end1;
            _class_private_method_get(this, _pushScope, pushScope).call(this, (_node_id_end1 = (_node_id1 = node.id) === null || _node_id1 === void 0 ? void 0 : _node_id1.end) !== null && _node_id_end1 !== void 0 ? _node_id_end1 : node.start, node.end);
            _class_private_method_get(this, _addVariable, addVariable).call(this, 'this', node.start, 3 /* DefinitionKind.Fixed */ );
            _class_private_method_get(this, _addVariable, addVariable).call(this, 'arguments', node.start, 3 /* DefinitionKind.Fixed */ );
            node.params.forEach(_class_private_method_get(this, _processNodeAsDefinition, processNodeAsDefinition).bind(this, 1 /* DefinitionKind.Let */ , false));
            // Process the body of the block statement directly to avoid creating new scope.
            node.body.body.forEach(_class_private_method_get(this, _processNode, processNode).bind(this));
            _class_private_method_get(this, _popScope, popScope).call(this, true);
            break;
        case 'Identifier':
            _class_private_method_get(this, _addVariable, addVariable).call(this, node.name, node.start);
            break;
        case 'IfStatement':
            _class_private_method_get(this, _processNode, processNode).call(this, node.test);
            _class_private_method_get(this, _processNode, processNode).call(this, node.consequent);
            var _node_alternate;
            _class_private_method_get(this, _processNode, processNode).call(this, (_node_alternate = node.alternate) !== null && _node_alternate !== void 0 ? _node_alternate : null);
            break;
        case 'LabeledStatement':
            _class_private_method_get(this, _processNode, processNode).call(this, node.body);
            break;
        case 'MetaProperty':
            break;
        case 'MethodDefinition':
            if (node.computed) {
                _class_private_method_get(this, _processNode, processNode).call(this, node.key);
            }
            _class_private_method_get(this, _processNode, processNode).call(this, node.value);
            break;
        case 'NewExpression':
            _class_private_method_get(this, _processNode, processNode).call(this, node.callee);
            node.arguments.forEach(_class_private_method_get(this, _processNode, processNode).bind(this));
            break;
        case 'MemberExpression':
            _class_private_method_get(this, _processNode, processNode).call(this, node.object);
            if (node.computed) {
                _class_private_method_get(this, _processNode, processNode).call(this, node.property);
            }
            break;
        case 'ObjectExpression':
            node.properties.forEach(_class_private_method_get(this, _processNode, processNode).bind(this));
            break;
        case 'ObjectPattern':
            node.properties.forEach(_class_private_method_get(this, _processNode, processNode).bind(this));
            break;
        case 'PrivateIdentifier':
            break;
        case 'PropertyDefinition':
            if (node.computed) {
                _class_private_method_get(this, _processNode, processNode).call(this, node.key);
            }
            var _node_value;
            _class_private_method_get(this, _processNode, processNode).call(this, (_node_value = node.value) !== null && _node_value !== void 0 ? _node_value : null);
            break;
        case 'Property':
            if (node.shorthand) {
                console.assert(node.value.type === 'Identifier');
                console.assert(node.key.type === 'Identifier');
                console.assert(node.value.name === node.key.name);
                _class_private_method_get(this, _addVariable, addVariable).call(this, node.value.name, node.value.start, 0 /* DefinitionKind.None */ , true);
            } else {
                if (node.computed) {
                    _class_private_method_get(this, _processNode, processNode).call(this, node.key);
                }
                _class_private_method_get(this, _processNode, processNode).call(this, node.value);
            }
            break;
        case 'RestElement':
            _class_private_method_get(this, _processNodeAsDefinition, processNodeAsDefinition).call(this, 1 /* DefinitionKind.Let */ , false, node.argument);
            break;
        case 'ReturnStatement':
            var _node_argument;
            _class_private_method_get(this, _processNode, processNode).call(this, (_node_argument = node.argument) !== null && _node_argument !== void 0 ? _node_argument : null);
            break;
        case 'SequenceExpression':
            node.expressions.forEach(_class_private_method_get(this, _processNode, processNode).bind(this));
            break;
        case 'SpreadElement':
            _class_private_method_get(this, _processNode, processNode).call(this, node.argument);
            break;
        case 'SwitchCase':
            var _node_test1;
            _class_private_method_get(this, _processNode, processNode).call(this, (_node_test1 = node.test) !== null && _node_test1 !== void 0 ? _node_test1 : null);
            node.consequent.forEach(_class_private_method_get(this, _processNode, processNode).bind(this));
            break;
        case 'SwitchStatement':
            _class_private_method_get(this, _processNode, processNode).call(this, node.discriminant);
            node.cases.forEach(_class_private_method_get(this, _processNode, processNode).bind(this));
            break;
        case 'TaggedTemplateExpression':
            _class_private_method_get(this, _processNode, processNode).call(this, node.tag);
            _class_private_method_get(this, _processNode, processNode).call(this, node.quasi);
            break;
        case 'TemplateLiteral':
            node.expressions.forEach(_class_private_method_get(this, _processNode, processNode).bind(this));
            break;
        case 'ThisExpression':
            _class_private_method_get(this, _addVariable, addVariable).call(this, 'this', node.start);
            break;
        case 'ThrowStatement':
            _class_private_method_get(this, _processNode, processNode).call(this, node.argument);
            break;
        case 'TryStatement':
            _class_private_method_get(this, _processNode, processNode).call(this, node.block);
            var _node_handler;
            _class_private_method_get(this, _processNode, processNode).call(this, (_node_handler = node.handler) !== null && _node_handler !== void 0 ? _node_handler : null);
            var _node_finalizer;
            _class_private_method_get(this, _processNode, processNode).call(this, (_node_finalizer = node.finalizer) !== null && _node_finalizer !== void 0 ? _node_finalizer : null);
            break;
        case 'WithStatement':
            _class_private_method_get(this, _processNode, processNode).call(this, node.object);
            // TODO jarin figure how to treat the with body.
            _class_private_method_get(this, _processNode, processNode).call(this, node.body);
            break;
        case 'YieldExpression':
            var _node_argument1;
            _class_private_method_get(this, _processNode, processNode).call(this, (_node_argument1 = node.argument) !== null && _node_argument1 !== void 0 ? _node_argument1 : null);
            break;
        case 'UnaryExpression':
        case 'UpdateExpression':
            _class_private_method_get(this, _processNode, processNode).call(this, node.argument);
            break;
        case 'WhileStatement':
            _class_private_method_get(this, _processNode, processNode).call(this, node.test);
            _class_private_method_get(this, _processNode, processNode).call(this, node.body);
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
function pushScope(start, end) {
    _class_private_field_set(this, _currentScope, new Scope(start, end, _class_private_field_get(this, _currentScope)));
}
function popScope(isFunctionContext) {
    if (_class_private_field_get(this, _currentScope).parent === null) {
        console.error('Internal error: wrong nesting in scope analysis.');
        throw new Error('Internal error');
    }
    _class_private_field_get(this, _currentScope).finalizeToParent(isFunctionContext);
    _class_private_field_set(this, _currentScope, _class_private_field_get(this, _currentScope).parent);
}
function addVariable(name, offset) {
    var definitionKind = arguments.length > 2 && arguments[2] !== void 0 /* DefinitionKind.None */  ? arguments[2] : 0, isShorthandAssignmentProperty = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    _class_private_field_get(this, _allNames).add(name);
    _class_private_field_get(this, _currentScope).addVariable(name, offset, definitionKind, isShorthandAssignmentProperty);
}
function processNodeAsDefinition(definitionKind, isShorthandAssignmentProperty, node) {
    if (node === null) {
        return;
    }
    switch(node.type){
        case 'ArrayPattern':
            node.elements.forEach(_class_private_method_get(this, _processNodeAsDefinition, processNodeAsDefinition).bind(this, definitionKind, false));
            break;
        case 'AssignmentPattern':
            _class_private_method_get(this, _processNodeAsDefinition, processNodeAsDefinition).call(this, definitionKind, isShorthandAssignmentProperty, node.left);
            _class_private_method_get(this, _processNode, processNode).call(this, node.right);
            break;
        case 'Identifier':
            _class_private_method_get(this, _addVariable, addVariable).call(this, node.name, node.start, definitionKind, isShorthandAssignmentProperty);
            break;
        case 'MemberExpression':
            _class_private_method_get(this, _processNode, processNode).call(this, node.object);
            if (node.computed) {
                _class_private_method_get(this, _processNode, processNode).call(this, node.property);
            }
            break;
        case 'ObjectPattern':
            node.properties.forEach(_class_private_method_get(this, _processNodeAsDefinition, processNodeAsDefinition).bind(this, definitionKind, false));
            break;
        case 'Property':
            if (node.computed) {
                _class_private_method_get(this, _processNode, processNode).call(this, node.key);
            }
            _class_private_method_get(this, _processNodeAsDefinition, processNodeAsDefinition).call(this, definitionKind, node.shorthand, node.value);
            break;
        case 'RestElement':
            _class_private_method_get(this, _processNodeAsDefinition, processNodeAsDefinition).call(this, definitionKind, false, node.argument);
            break;
    }
}
function processVariableDeclarator(definitionKind, decl) {
    _class_private_method_get(this, _processNodeAsDefinition, processNodeAsDefinition).call(this, definitionKind, false, decl.id);
    var _decl_init;
    _class_private_method_get(this, _processNode, processNode).call(this, (_decl_init = decl.init) !== null && _decl_init !== void 0 ? _decl_init : null);
}


}),

}]);