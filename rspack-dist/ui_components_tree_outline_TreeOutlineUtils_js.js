"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_tree_outline_TreeOutlineUtils_js"], {
"./ui/components/tree_outline/TreeOutlineUtils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  findNextNodeForTreeOutlineKeyboardNavigation: function() { return findNextNodeForTreeOutlineKeyboardNavigation; },
  getNodeChildren: function() { return getNodeChildren; },
  getPathToTreeNode: function() { return getPathToTreeNode; },
  isExpandableNode: function() { return isExpandableNode; },
  trackDOMNodeToTreeNode: function() { return trackDOMNodeToTreeNode; }
});
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
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
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}


function isExpandableNode(node) {
    return 'children' in node;
}
/**
 * This is a custom lit-html directive that lets us track the DOM nodes that Lit
 * creates and maps them to the tree node that was given to us. This means we
 * can navigate between real DOM node and structural tree node easily in code.
 */ var TrackDOMNodeToTreeNode = /*#__PURE__*/ function(_LitHtml_Directive_Directive) {
    "use strict";
    _inherits(TrackDOMNodeToTreeNode, _LitHtml_Directive_Directive);
    var _super = _create_super(TrackDOMNodeToTreeNode);
    function TrackDOMNodeToTreeNode(partInfo) {
        _class_call_check(this, TrackDOMNodeToTreeNode);
        var _this = _super.call(this, partInfo);
        if (partInfo.type !== _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.Directive.PartType.ATTRIBUTE) {
            throw new Error('TrackDOMNodeToTreeNode directive must be used as an attribute.');
        }
        return _this;
    }
    _create_class(TrackDOMNodeToTreeNode, [
        {
            key: "update",
            value: function update(part, param) {
                var _param = _sliced_to_array(param, 2), weakMap = _param[0], treeNode = _param[1];
                var elem = part.element;
                if (!_instanceof(elem, HTMLLIElement)) {
                    throw new Error('trackTreeNodeToDOMNode must be used on <li> elements.');
                }
                weakMap.set(elem, treeNode);
            }
        },
        {
            /*
     * Because this directive doesn't render anything, there's no implementation
     * here for the render method. But we need it to state the params the
     * directive takes so the update() method's types are correct. Unfortunately
     * we have to pass any as the generic type because we can't define this class
     * using a generic - the generic gets lost when wrapped in the directive call
     * below.
     */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
            key: "render",
            value: function render(_weakmap, _treeNode) {}
        }
    ]);
    return TrackDOMNodeToTreeNode;
}(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.Directive.Directive);
var trackDOMNodeToTreeNode = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.Directive.directive(TrackDOMNodeToTreeNode);
/**
 * Finds the next sibling of the node's parent, recursing up the tree if
 * required.
 * Given:
 * A
 *   * B
 *     * C
 * D
 * If called on B, this will return D. If called on C, this will also return D.
 */ var findNextParentSibling = function(currentDOMNode) {
    var _currentDOMNode_parentElement;
    // We go up two parents here because the structure is:
    // <li treeitem> => <ul group> => <li treeitem>
    // So if we are on the last treeitem (furthest to the right), we need to find its parent tree item, which is two parents up.
    var currentDOMNodeParentListItem = (_currentDOMNode_parentElement = currentDOMNode.parentElement) === null || _currentDOMNode_parentElement === void 0 ? void 0 : _currentDOMNode_parentElement.parentElement;
    if (currentDOMNodeParentListItem && _instanceof(currentDOMNodeParentListItem, HTMLLIElement)) {
        var parentNodeSibling = currentDOMNodeParentListItem.nextElementSibling;
        // If this parent doesn't have a sibling, recurse up the tree to look for
        // the nearest parent that does have a sibling.
        if (parentNodeSibling && _instanceof(parentNodeSibling, HTMLLIElement)) {
            return parentNodeSibling;
        }
        return findNextParentSibling(currentDOMNodeParentListItem);
    }
    return null;
};
var getFirstChildOfExpandedTreeNode = function(currentDOMNode) {
    var firstChild = currentDOMNode.querySelector(':scope > [role="group"] > [role="treeitem"]:first-child');
    if (!firstChild) {
        throw new Error('Could not find child of expanded node.');
    }
    return firstChild;
};
var domNodeIsExpandable = function(domNode) {
    // Nodes with no children are not given the aria-expanded attributes.
    // Nodes with children are given aria-expanded = true/false.
    return domNode.getAttribute('aria-expanded') !== null;
};
var domNodeIsLeafNode = function(domNode) {
    return !domNodeIsExpandable(domNode);
};
var domNodeIsExpanded = function(domNode) {
    // Nodes with no children are not given the aria-expanded attributes.
    // Nodes with children are given aria-expanded = true/false.
    return domNodeIsExpandable(domNode) && domNode.getAttribute('aria-expanded') === 'true';
};
var getDeepLastChildOfExpandedTreeNode = function(currentDOMNode) {
    var lastChild = currentDOMNode.querySelector(':scope > [role="group"] > [role="treeitem"]:last-child');
    if (!lastChild) {
        throw new Error('Could not find child of expanded node.');
    }
    if (domNodeIsExpanded(lastChild)) {
        return getDeepLastChildOfExpandedTreeNode(lastChild);
    }
    return lastChild;
};
var getNextSiblingOfCurrentDOMNode = function(currentDOMNode) {
    var currentNodeSibling = currentDOMNode.nextElementSibling;
    if (currentNodeSibling && _instanceof(currentNodeSibling, HTMLLIElement)) {
        return currentNodeSibling;
    }
    return null;
};
var getPreviousSiblingOfCurrentDOMNode = function(currentDOMNode) {
    var currentNodeSibling = currentDOMNode.previousElementSibling;
    if (currentNodeSibling && _instanceof(currentNodeSibling, HTMLLIElement)) {
        return currentNodeSibling;
    }
    return null;
};
var getParentListItemForDOMNode = function(currentDOMNode) {
    var parentNode = currentDOMNode.parentElement;
    if (!parentNode) {
        return null;
    }
    while(parentNode && parentNode.getAttribute('role') !== 'treeitem' && _instanceof(parentNode, HTMLLIElement) === false){
        parentNode = parentNode.parentElement;
    }
    return parentNode;
};
/**
 * We cache a tree node's children; they are lazily evaluated and if two code
 * paths get the children, we need to make sure they get the same objects.
 *
 * We're OK to use <unknown> here as the weakmap doesn't care and a TreeOutline that
 * adds nodes of type X to the map will always then get children of that type
 * back as that's enforced by the TreeOutline types elsewhere. We can't make
 * this WeakMap easily generic as it's a top level variable.
 */ var treeNodeChildrenWeakMap = new WeakMap();
var getNodeChildren = function() {
    var _ref = _async_to_generator(function(node) {
        var cachedChildren, children;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!node.children) {
                        throw new Error('Asked for children of node that does not have any children.');
                    }
                    cachedChildren = treeNodeChildrenWeakMap.get(node);
                    if (cachedChildren) {
                        return [
                            2,
                            cachedChildren
                        ];
                    }
                    return [
                        4,
                        node.children()
                    ];
                case 1:
                    children = _state.sent();
                    treeNodeChildrenWeakMap.set(node, children);
                    return [
                        2,
                        children
                    ];
            }
        });
    });
    return function getNodeChildren(node) {
        return _ref.apply(this, arguments);
    };
}();
/**
 * Searches the tree and returns a path to the given node.
 * e.g. if the tree is:
 * A
 * - B
 *   - C
 * - D
 *   - E
 *   - F
 *
 * And you look for F, you'll get back [A, D, F]
 */ var getPathToTreeNode = function() {
    var _ref = _async_to_generator(function(tree, nodeIdToFind) {
        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, rootNode, foundPathOrNull, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        6,
                        7,
                        8
                    ]);
                    _iterator = tree[Symbol.iterator]();
                    _state.label = 2;
                case 2:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        5
                    ];
                    rootNode = _step.value;
                    return [
                        4,
                        getPathToTreeNodeRecursively(rootNode, nodeIdToFind, [
                            rootNode
                        ])
                    ];
                case 3:
                    foundPathOrNull = _state.sent();
                    if (foundPathOrNull !== null) {
                        return [
                            2,
                            foundPathOrNull
                        ];
                    }
                    _state.label = 4;
                case 4:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        2
                    ];
                case 5:
                    return [
                        3,
                        8
                    ];
                case 6:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        8
                    ];
                case 7:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 8:
                    return [
                        2,
                        null
                    ];
            }
        });
    });
    return function getPathToTreeNode(tree, nodeIdToFind) {
        return _ref.apply(this, arguments);
    };
}();
var getPathToTreeNodeRecursively = function() {
    var _ref = _async_to_generator(function(currentNode, nodeIdToFind, pathToNode) {
        var children, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, child, foundPathOrNull, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (currentNode.id === nodeIdToFind) {
                        return [
                            2,
                            pathToNode
                        ];
                    }
                    if (!currentNode.children) return [
                        3,
                        9
                    ];
                    return [
                        4,
                        getNodeChildren(currentNode)
                    ];
                case 1:
                    children = _state.sent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 2;
                case 2:
                    _state.trys.push([
                        2,
                        7,
                        8,
                        9
                    ]);
                    _iterator = children[Symbol.iterator]();
                    _state.label = 3;
                case 3:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        6
                    ];
                    child = _step.value;
                    return [
                        4,
                        getPathToTreeNodeRecursively(child, nodeIdToFind, _to_consumable_array(pathToNode).concat([
                            child
                        ]))
                    ];
                case 4:
                    foundPathOrNull = _state.sent();
                    if (foundPathOrNull !== null) {
                        return [
                            2,
                            foundPathOrNull
                        ];
                    }
                    _state.label = 5;
                case 5:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        3
                    ];
                case 6:
                    return [
                        3,
                        9
                    ];
                case 7:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        9
                    ];
                case 8:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 9:
                    return [
                        2,
                        null
                    ];
            }
        });
    });
    return function getPathToTreeNodeRecursively(currentNode, nodeIdToFind, pathToNode) {
        return _ref.apply(this, arguments);
    };
}();
var findNextNodeForTreeOutlineKeyboardNavigation = function(options) {
    var currentDOMNode = options.currentDOMNode, currentTreeNode = options.currentTreeNode, direction = options.direction, setNodeExpandedState = options.setNodeExpandedState;
    if (!currentTreeNode) {
        return currentDOMNode;
    }
    if (direction === "ArrowDown" /* Platform.KeyboardUtilities.ArrowKey.DOWN */ ) {
        // If the node has expanded children, down takes you into that list.
        if (domNodeIsExpanded(currentDOMNode)) {
            return getFirstChildOfExpandedTreeNode(currentDOMNode);
        }
        // If the node has a sibling, we go to that.
        var currentNodeSibling = getNextSiblingOfCurrentDOMNode(currentDOMNode);
        if (currentNodeSibling) {
            return currentNodeSibling;
        }
        // If the Node's parent has a sibling then we go to that.
        var parentSibling = findNextParentSibling(currentDOMNode);
        if (parentSibling) {
            return parentSibling;
        }
    } else if (direction === "ArrowRight" /* Platform.KeyboardUtilities.ArrowKey.RIGHT */ ) {
        if (domNodeIsLeafNode(currentDOMNode)) {
            // If the node cannot be expanded, we have nothing to do and we leave everything as is.
            return currentDOMNode;
        }
        // If the current node is expanded, move and focus into the first child
        if (domNodeIsExpanded(currentDOMNode)) {
            return getFirstChildOfExpandedTreeNode(currentDOMNode);
        }
        // Else, we expand the Node (but leave focus where it is)
        setNodeExpandedState(currentTreeNode, true);
        return currentDOMNode;
    } else if (direction === "ArrowUp" /* Platform.KeyboardUtilities.ArrowKey.UP */ ) {
        // First see if there is a previous sibling
        var currentNodePreviousSibling = getPreviousSiblingOfCurrentDOMNode(currentDOMNode);
        if (currentNodePreviousSibling) {
            // We now find the nested node within our previous sibling; if it has
            // children that are expanded, we want to find the last child and
            // highlight that, else we'll highlight our sibling directly.
            if (domNodeIsExpanded(currentNodePreviousSibling)) {
                return getDeepLastChildOfExpandedTreeNode(currentNodePreviousSibling);
            }
            // Otherwise, if we have a previous sibling with no children, focus it.
            return currentNodePreviousSibling;
        }
        // Otherwise, let's go to the direct parent if there is one.
        var parentNode = getParentListItemForDOMNode(currentDOMNode);
        if (parentNode && _instanceof(parentNode, HTMLLIElement)) {
            return parentNode;
        }
    } else if (direction === "ArrowLeft" /* Platform.KeyboardUtilities.ArrowKey.LEFT */ ) {
        // If the node is expanded, we close it.
        if (domNodeIsExpanded(currentDOMNode)) {
            setNodeExpandedState(currentTreeNode, false);
            return currentDOMNode;
        }
        // Otherwise, let's go to the parent if there is one.
        var parentNode1 = getParentListItemForDOMNode(currentDOMNode);
        if (parentNode1 && _instanceof(parentNode1, HTMLLIElement)) {
            return parentNode1;
        }
    }
    // If we got here, there's no other option than to stay put.
    return currentDOMNode;
}; //# sourceMappingURL=TreeOutlineUtils.js.map


}),

}]);