"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_Accessibility_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Accessibility.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Accessibility: function() { return Accessibility; }
});
/**
 * @license
 * Copyright 2018 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * The Accessibility class provides methods for inspecting the browser's
 * accessibility tree. The accessibility tree is used by assistive technology
 * such as {@link https://en.wikipedia.org/wiki/Screen_reader | screen readers} or
 * {@link https://en.wikipedia.org/wiki/Switch_access | switches}.
 *
 * @remarks
 *
 * Accessibility is a very platform-specific thing. On different platforms,
 * there are different screen readers that might have wildly different output.
 *
 * Blink - Chrome's rendering engine - has a concept of "accessibility tree",
 * which is then translated into different platform-specific APIs. Accessibility
 * namespace gives users access to the Blink Accessibility Tree.
 *
 * Most of the accessibility tree gets filtered out when converting from Blink
 * AX Tree to Platform-specific AX-Tree or by assistive technologies themselves.
 * By default, Puppeteer tries to approximate this filtering, exposing only
 * the "interesting" nodes of the tree.
 *
 * @public
 */ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
var _realm = /*#__PURE__*/ new WeakMap();
var Accessibility = /*#__PURE__*/ function() {
    "use strict";
    function Accessibility(realm) {
        _class_call_check(this, Accessibility);
        _class_private_field_init(this, _realm, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _realm, realm);
    }
    _create_class(Accessibility, [
        {
            key: "snapshot",
            value: /**
     * Captures the current state of the accessibility tree.
     * The returned object represents the root accessible node of the page.
     *
     * @remarks
     *
     * **NOTE** The Chrome accessibility tree contains nodes that go unused on
     * most platforms and by most screen readers. Puppeteer will discard them as
     * well for an easier to process tree, unless `interestingOnly` is set to
     * `false`.
     *
     * @example
     * An example of dumping the entire accessibility tree:
     *
     * ```ts
     * const snapshot = await page.accessibility.snapshot();
     * console.log(snapshot);
     * ```
     *
     * @example
     * An example of logging the focused node's name:
     *
     * ```ts
     * const snapshot = await page.accessibility.snapshot();
     * const node = findFocusedNode(snapshot);
     * console.log(node && node.name);
     *
     * function findFocusedNode(node) {
     *   if (node.focused) return node;
     *   for (const child of node.children || []) {
     *     const foundNode = findFocusedNode(child);
     *     return foundNode;
     *   }
     *   return null;
     * }
     * ```
     *
     * @returns An AXNode object representing the snapshot.
     */ function snapshot() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var _options_interestingOnly, interestingOnly, _options_root, root, nodes, backendNodeId, node, defaultRoot, needle, _this_serializeTree_, interestingNodes, _this_serializeTree_1;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _options_interestingOnly = options.interestingOnly, interestingOnly = _options_interestingOnly === void 0 ? true : _options_interestingOnly, _options_root = options.root, root = _options_root === void 0 ? null : _options_root;
                                return [
                                    4,
                                    _class_private_field_get(_this, _realm).environment.client.send('Accessibility.getFullAXTree')
                                ];
                            case 1:
                                nodes = _state.sent().nodes;
                                if (!root) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    _class_private_field_get(_this, _realm).environment.client.send('DOM.describeNode', {
                                        objectId: root.id
                                    })
                                ];
                            case 2:
                                node = _state.sent().node;
                                backendNodeId = node.backendNodeId;
                                _state.label = 3;
                            case 3:
                                defaultRoot = AXNode.createTree(_class_private_field_get(_this, _realm), nodes);
                                needle = defaultRoot;
                                if (backendNodeId) {
                                    needle = defaultRoot.find(function(node) {
                                        return node.payload.backendDOMNodeId === backendNodeId;
                                    });
                                    if (!needle) {
                                        return [
                                            2,
                                            null
                                        ];
                                    }
                                }
                                if (!interestingOnly) {
                                    ;
                                    return [
                                        2,
                                        (_this_serializeTree_ = _this.serializeTree(needle)[0]) !== null && _this_serializeTree_ !== void 0 ? _this_serializeTree_ : null
                                    ];
                                }
                                interestingNodes = new Set();
                                _this.collectInterestingNodes(interestingNodes, defaultRoot, false);
                                if (!interestingNodes.has(needle)) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                return [
                                    2,
                                    (_this_serializeTree_1 = _this.serializeTree(needle, interestingNodes)[0]) !== null && _this_serializeTree_1 !== void 0 ? _this_serializeTree_1 : null
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "serializeTree",
            value: function serializeTree(node, interestingNodes) {
                var children = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = node.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var child = _step.value;
                        var _children;
                        (_children = children).push.apply(_children, _to_consumable_array(this.serializeTree(child, interestingNodes)));
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
                if (interestingNodes && !interestingNodes.has(node)) {
                    return children;
                }
                var serializedNode = node.serialize();
                if (children.length) {
                    serializedNode.children = children;
                }
                return [
                    serializedNode
                ];
            }
        },
        {
            key: "collectInterestingNodes",
            value: function collectInterestingNodes(collection, node, insideControl) {
                if (node.isInteresting(insideControl)) {
                    collection.add(node);
                }
                if (node.isLeafNode()) {
                    return;
                }
                insideControl = insideControl || node.isControl();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = node.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var child = _step.value;
                        this.collectInterestingNodes(collection, child, insideControl);
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
            }
        }
    ]);
    return Accessibility;
}();
var _richlyEditable = /*#__PURE__*/ new WeakMap(), _editable = /*#__PURE__*/ new WeakMap(), _focusable = /*#__PURE__*/ new WeakMap(), _hidden = /*#__PURE__*/ new WeakMap(), _name = /*#__PURE__*/ new WeakMap(), _role = /*#__PURE__*/ new WeakMap(), _ignored = /*#__PURE__*/ new WeakMap(), _cachedHasFocusableChild = /*#__PURE__*/ new WeakMap(), _realm1 = /*#__PURE__*/ new WeakMap(), _isPlainTextField = /*#__PURE__*/ new WeakSet(), _isTextOnlyObject = /*#__PURE__*/ new WeakSet(), _hasFocusableChild = /*#__PURE__*/ new WeakSet();
var AXNode = /*#__PURE__*/ function() {
    "use strict";
    function AXNode(realm, payload) {
        _class_call_check(this, AXNode);
        _class_private_method_init(this, _isPlainTextField);
        _class_private_method_init(this, _isTextOnlyObject);
        _class_private_method_init(this, _hasFocusableChild);
        _define_property(this, "payload", void 0);
        _define_property(this, "children", []);
        _class_private_field_init(this, _richlyEditable, {
            writable: true,
            value: false
        });
        _class_private_field_init(this, _editable, {
            writable: true,
            value: false
        });
        _class_private_field_init(this, _focusable, {
            writable: true,
            value: false
        });
        _class_private_field_init(this, _hidden, {
            writable: true,
            value: false
        });
        _class_private_field_init(this, _name, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _role, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _ignored, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _cachedHasFocusableChild, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _realm1, {
            writable: true,
            value: void 0
        });
        this.payload = payload;
        _class_private_field_set(this, _name, this.payload.name ? this.payload.name.value : '');
        _class_private_field_set(this, _role, this.payload.role ? this.payload.role.value : 'Unknown');
        _class_private_field_set(this, _ignored, this.payload.ignored);
        _class_private_field_set(this, _realm1, realm);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = (this.payload.properties || [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var property = _step.value;
                if (property.name === 'editable') {
                    _class_private_field_set(this, _richlyEditable, property.value.value === 'richtext');
                    _class_private_field_set(this, _editable, true);
                }
                if (property.name === 'focusable') {
                    _class_private_field_set(this, _focusable, property.value.value);
                }
                if (property.name === 'hidden') {
                    _class_private_field_set(this, _hidden, property.value.value);
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
    }
    _create_class(AXNode, [
        {
            key: "find",
            value: function find(predicate) {
                if (predicate(this)) {
                    return this;
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var child = _step.value;
                        var result = child.find(predicate);
                        if (result) {
                            return result;
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
                return null;
            }
        },
        {
            key: "isLeafNode",
            value: function isLeafNode() {
                if (!this.children.length) {
                    return true;
                }
                // These types of objects may have children that we use as internal
                // implementation details, but we want to expose them as leaves to platform
                // accessibility APIs because screen readers might be confused if they find
                // any children.
                if (_class_private_method_get(this, _isPlainTextField, isPlainTextField).call(this) || _class_private_method_get(this, _isTextOnlyObject, isTextOnlyObject).call(this)) {
                    return true;
                }
                // Roles whose children are only presentational according to the ARIA and
                // HTML5 Specs should be hidden from screen readers.
                // (Note that whilst ARIA buttons can have only presentational children, HTML5
                // buttons are allowed to have content.)
                switch(_class_private_field_get(this, _role)){
                    case 'doc-cover':
                    case 'graphics-symbol':
                    case 'img':
                    case 'image':
                    case 'Meter':
                    case 'scrollbar':
                    case 'slider':
                    case 'separator':
                    case 'progressbar':
                        return true;
                    default:
                        break;
                }
                // Here and below: Android heuristics
                if (_class_private_method_get(this, _hasFocusableChild, hasFocusableChild).call(this)) {
                    return false;
                }
                if (_class_private_field_get(this, _focusable) && _class_private_field_get(this, _name)) {
                    return true;
                }
                if (_class_private_field_get(this, _role) === 'heading' && _class_private_field_get(this, _name)) {
                    return true;
                }
                return false;
            }
        },
        {
            key: "isControl",
            value: function isControl() {
                switch(_class_private_field_get(this, _role)){
                    case 'button':
                    case 'checkbox':
                    case 'ColorWell':
                    case 'combobox':
                    case 'DisclosureTriangle':
                    case 'listbox':
                    case 'menu':
                    case 'menubar':
                    case 'menuitem':
                    case 'menuitemcheckbox':
                    case 'menuitemradio':
                    case 'radio':
                    case 'scrollbar':
                    case 'searchbox':
                    case 'slider':
                    case 'spinbutton':
                    case 'switch':
                    case 'tab':
                    case 'textbox':
                    case 'tree':
                    case 'treeitem':
                        return true;
                    default:
                        return false;
                }
            }
        },
        {
            key: "isInteresting",
            value: function isInteresting(insideControl) {
                var role = _class_private_field_get(this, _role);
                if (role === 'Ignored' || _class_private_field_get(this, _hidden) || _class_private_field_get(this, _ignored)) {
                    return false;
                }
                if (_class_private_field_get(this, _focusable) || _class_private_field_get(this, _richlyEditable)) {
                    return true;
                }
                // If it's not focusable but has a control role, then it's interesting.
                if (this.isControl()) {
                    return true;
                }
                // A non focusable child of a control is not interesting
                if (insideControl) {
                    return false;
                }
                return this.isLeafNode() && !!_class_private_field_get(this, _name);
            }
        },
        {
            key: "serialize",
            value: function serialize() {
                var properties = new Map();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = (this.payload.properties || [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var property = _step.value;
                        properties.set(property.name.toLowerCase(), property.value.value);
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
                if (this.payload.name) {
                    properties.set('name', this.payload.name.value);
                }
                if (this.payload.value) {
                    properties.set('value', this.payload.value.value);
                }
                if (this.payload.description) {
                    properties.set('description', this.payload.description.value);
                }
                var _this = this;
                var node = {
                    role: _class_private_field_get(this, _role),
                    elementHandle: /*#__PURE__*/ _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (!_this.payload.backendDOMNodeId) {
                                        return [
                                            2,
                                            null
                                        ];
                                    }
                                    return [
                                        4,
                                        _class_private_field_get(_this, _realm1).adoptBackendNode(_this.payload.backendDOMNodeId)
                                    ];
                                case 1:
                                    return [
                                        2,
                                        _state.sent()
                                    ];
                            }
                        });
                    })
                };
                var userStringProperties = [
                    'name',
                    'value',
                    'description',
                    'keyshortcuts',
                    'roledescription',
                    'valuetext'
                ];
                var getUserStringPropertyValue = function(key) {
                    return properties.get(key);
                };
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = userStringProperties[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var userStringProperty = _step1.value;
                        if (!properties.has(userStringProperty)) {
                            continue;
                        }
                        node[userStringProperty] = getUserStringPropertyValue(userStringProperty);
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
                var booleanProperties = [
                    'disabled',
                    'expanded',
                    'focused',
                    'modal',
                    'multiline',
                    'multiselectable',
                    'readonly',
                    'required',
                    'selected'
                ];
                var getBooleanPropertyValue = function(key) {
                    return properties.get(key);
                };
                var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                try {
                    for(var _iterator2 = booleanProperties[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                        var booleanProperty = _step2.value;
                        // RootWebArea's treat focus differently than other nodes. They report whether
                        // their frame  has focus, not whether focus is specifically on the root
                        // node.
                        if (booleanProperty === 'focused' && _class_private_field_get(this, _role) === 'RootWebArea') {
                            continue;
                        }
                        var value = getBooleanPropertyValue(booleanProperty);
                        if (!value) {
                            continue;
                        }
                        node[booleanProperty] = getBooleanPropertyValue(booleanProperty);
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                            _iterator2.return();
                        }
                    } finally{
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
                var tristateProperties = [
                    'checked',
                    'pressed'
                ];
                var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
                try {
                    for(var _iterator3 = tristateProperties[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                        var tristateProperty = _step3.value;
                        if (!properties.has(tristateProperty)) {
                            continue;
                        }
                        var value1 = properties.get(tristateProperty);
                        node[tristateProperty] = value1 === 'mixed' ? 'mixed' : value1 === 'true' ? true : false;
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                            _iterator3.return();
                        }
                    } finally{
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }
                var numericalProperties = [
                    'level',
                    'valuemax',
                    'valuemin'
                ];
                var getNumericalPropertyValue = function(key) {
                    return properties.get(key);
                };
                var _iteratorNormalCompletion4 = true, _didIteratorError4 = false, _iteratorError4 = undefined;
                try {
                    for(var _iterator4 = numericalProperties[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true){
                        var numericalProperty = _step4.value;
                        if (!properties.has(numericalProperty)) {
                            continue;
                        }
                        node[numericalProperty] = getNumericalPropertyValue(numericalProperty);
                    }
                } catch (err) {
                    _didIteratorError4 = true;
                    _iteratorError4 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                            _iterator4.return();
                        }
                    } finally{
                        if (_didIteratorError4) {
                            throw _iteratorError4;
                        }
                    }
                }
                var tokenProperties = [
                    'autocomplete',
                    'haspopup',
                    'invalid',
                    'orientation'
                ];
                var getTokenPropertyValue = function(key) {
                    return properties.get(key);
                };
                var _iteratorNormalCompletion5 = true, _didIteratorError5 = false, _iteratorError5 = undefined;
                try {
                    for(var _iterator5 = tokenProperties[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true){
                        var tokenProperty = _step5.value;
                        var value2 = getTokenPropertyValue(tokenProperty);
                        if (!value2 || value2 === 'false') {
                            continue;
                        }
                        node[tokenProperty] = getTokenPropertyValue(tokenProperty);
                    }
                } catch (err) {
                    _didIteratorError5 = true;
                    _iteratorError5 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                            _iterator5.return();
                        }
                    } finally{
                        if (_didIteratorError5) {
                            throw _iteratorError5;
                        }
                    }
                }
                return node;
            }
        }
    ], [
        {
            key: "createTree",
            value: function createTree(realm, payloads) {
                var nodeById = new Map();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = payloads[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var payload = _step.value;
                        nodeById.set(payload.nodeId, new AXNode(realm, payload));
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
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = nodeById.values()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var node = _step1.value;
                        var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                        try {
                            for(var _iterator2 = (node.payload.childIds || [])[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                                var childId = _step2.value;
                                var child = nodeById.get(childId);
                                if (child) {
                                    node.children.push(child);
                                }
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                                    _iterator2.return();
                                }
                            } finally{
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }
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
                return nodeById.values().next().value;
            }
        }
    ]);
    return AXNode;
} //# sourceMappingURL=Accessibility.js.map
();
function isPlainTextField() {
    if (_class_private_field_get(this, _richlyEditable)) {
        return false;
    }
    if (_class_private_field_get(this, _editable)) {
        return true;
    }
    return _class_private_field_get(this, _role) === 'textbox' || _class_private_field_get(this, _role) === 'searchbox';
}
function isTextOnlyObject() {
    var role = _class_private_field_get(this, _role);
    return role === 'LineBreak' || role === 'text' || role === 'InlineTextBox' || role === 'StaticText';
}
function hasFocusableChild() {
    if (_class_private_field_get(this, _cachedHasFocusableChild) === undefined) {
        _class_private_field_set(this, _cachedHasFocusableChild, false);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = this.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var child = _step.value;
                if (_class_private_field_get(child, _focusable) || _class_private_method_get(child, _hasFocusableChild, hasFocusableChild).call(child)) {
                    _class_private_field_set(this, _cachedHasFocusableChild, true);
                    break;
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
    }
    return _class_private_field_get(this, _cachedHasFocusableChild);
}


}),

}]);