"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_injected_selectors_ARIASelector_js"], {
"./panels/recorder/injected/selectors/ARIASelector.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  computeARIASelector: function() { return computeARIASelector; }
});
// Copyright 2023 The Chromium Authors. All rights reserved.
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
var _bindings = /*#__PURE__*/ new WeakMap(), // Takes a path consisting of element names and roles and makes sure that
// every element resolves to a single result. If it does, the selector is added
// to the chain of selectors.
_computeUniqueARIASelectorForElements = /*#__PURE__*/ new WeakMap(), _queryA11yTreeOneByName = /*#__PURE__*/ new WeakMap(), _queryA11yTreeOneByRole = /*#__PURE__*/ new WeakMap(), _queryA11yTreeOneByNameAndRole = /*#__PURE__*/ new WeakMap(), // Queries the DOM tree for elements with matching accessibility name and role.
// It attempts to mimic https://chromedevtools.github.io/devtools-protocol/tot/Accessibility/#method-queryAXTree.
_queryA11yTree = /*#__PURE__*/ new WeakMap();
var ARIASelectorComputer = function ARIASelectorComputer(bindings) {
    "use strict";
    var _this = this;
    var _this1 = this;
    _class_call_check(this, ARIASelectorComputer);
    _class_private_field_init(this, _bindings, {
        writable: true,
        value: void 0
    });
    _class_private_field_init(this, _computeUniqueARIASelectorForElements, {
        writable: true,
        value: function(elements, queryByRoleOnly) {
            var selectors = [];
            var parent = document;
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var element = _step.value;
                    var result = _class_private_field_get(_this, _queryA11yTreeOneByName).call(_this, parent, element.name);
                    if (result) {
                        selectors.push(element.name);
                        parent = result;
                        continue;
                    }
                    if (queryByRoleOnly) {
                        result = _class_private_field_get(_this, _queryA11yTreeOneByRole).call(_this, parent, element.role);
                        if (result) {
                            selectors.push('[role="'.concat(element.role, '"]'));
                            parent = result;
                            continue;
                        }
                    }
                    result = _class_private_field_get(_this, _queryA11yTreeOneByNameAndRole).call(_this, parent, element.name, element.role);
                    if (result) {
                        selectors.push("".concat(element.name, '[role="').concat(element.role, '"]'));
                        parent = result;
                        continue;
                    }
                    return;
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
            return selectors;
        }
    });
    _class_private_field_init(this, _queryA11yTreeOneByName, {
        writable: true,
        value: function(parent, name) {
            if (!name) {
                return null;
            }
            var maxResults = 2;
            var result = _class_private_field_get(_this, _queryA11yTree).call(_this, parent, name, undefined, maxResults);
            if (result.length !== 1) {
                return null;
            }
            return result[0];
        }
    });
    _class_private_field_init(this, _queryA11yTreeOneByRole, {
        writable: true,
        value: function(parent, role) {
            if (!role) {
                return null;
            }
            var maxResults = 2;
            var result = _class_private_field_get(_this, _queryA11yTree).call(_this, parent, undefined, role, maxResults);
            if (result.length !== 1) {
                return null;
            }
            return result[0];
        }
    });
    _class_private_field_init(this, _queryA11yTreeOneByNameAndRole, {
        writable: true,
        value: function(parent, name, role) {
            if (!role || !name) {
                return null;
            }
            var maxResults = 2;
            var result = _class_private_field_get(_this, _queryA11yTree).call(_this, parent, name, role, maxResults);
            if (result.length !== 1) {
                return null;
            }
            return result[0];
        }
    });
    _class_private_field_init(this, _queryA11yTree, {
        writable: true,
        value: function(parent, name, role) {
            var maxResults = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
            var result = [];
            if (!name && !role) {
                throw new Error('Both role and name are empty');
            }
            var shouldMatchName = Boolean(name);
            var shouldMatchRole = Boolean(role);
            var collect = function(root) {
                var iter = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
                do {
                    var currentNode = iter.currentNode;
                    if (currentNode.shadowRoot) {
                        collect(currentNode.shadowRoot);
                    }
                    if (_instanceof(currentNode, ShadowRoot)) {
                        continue;
                    }
                    if (shouldMatchName && _class_private_field_get(_this1, _bindings).getAccessibleName(currentNode) !== name) {
                        continue;
                    }
                    if (shouldMatchRole && _class_private_field_get(_this1, _bindings).getAccessibleRole(currentNode) !== role) {
                        continue;
                    }
                    result.push(currentNode);
                    if (maxResults && result.length >= maxResults) {
                        return;
                    }
                }while (iter.nextNode());
            };
            collect(_instanceof(parent, Document) ? document.documentElement : parent);
            return result;
        }
    });
    _define_property(this, "compute", function(node) {
        var selector;
        var current = node;
        var elements = [];
        while(current){
            var role = _class_private_field_get(_this, _bindings).getAccessibleRole(current);
            var name = _class_private_field_get(_this, _bindings).getAccessibleName(current);
            if (!role && !name) {
                if (current === node) {
                    break;
                }
            } else {
                elements.unshift({
                    name: name,
                    role: role
                });
                selector = _class_private_field_get(_this, _computeUniqueARIASelectorForElements).call(_this, elements, current !== node);
                if (selector) {
                    break;
                }
                if (current !== node) {
                    elements.shift();
                }
            }
            current = current.parentNode;
            if (_instanceof(current, ShadowRoot)) {
                current = current.host;
            }
        }
        return selector;
    });
    _class_private_field_set(this, _bindings, bindings);
};
/**
 * Computes the ARIA selector for a node.
 *
 * @param node - The node to compute.
 * @returns The computed CSS selector.
 *
 * @internal
 */ var computeARIASelector = function(node, bindings) {
    return new ARIASelectorComputer(bindings).compute(node);
}; //# sourceMappingURL=ARIASelector.js.map


}),

}]);