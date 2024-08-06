"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_tree_outline_TreeOutline_js"], {
"./ui/components/tree_outline/TreeOutline.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ItemMouseOutEvent: function() { return ItemMouseOutEvent; },
  ItemMouseOverEvent: function() { return ItemMouseOverEvent; },
  ItemSelectedEvent: function() { return ItemSelectedEvent; },
  TreeOutline: function() { return TreeOutline; },
  defaultRenderer: function() { return defaultRenderer; }
});
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../code_highlighter/code_highlighter.js */ "./ui/components/code_highlighter/code_highlighter.js");
/* harmony import */var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */var _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _treeOutline_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./treeOutline.css.js */ "./ui/components/tree_outline/treeOutline.css.js");
/* harmony import */var _TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TreeOutlineUtils.js */ "./ui/components/tree_outline/TreeOutlineUtils.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
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
function _templateObject() {
    var data = _tagged_template_literal([
        "",
        ""
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "",
        ""
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "devtools-tree-outline"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        '<ul role="group">',
        "</ul>"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        '\n      <li role="treeitem"\n        tabindex=',
        "\n        aria-setsize=",
        "\n        aria-expanded=",
        "\n        aria-level=",
        "\n        aria-posinset=",
        "\n        class=",
        "\n        jslog=",
        "\n        @click=",
        "\n        track-dom-node-to-tree-node=",
        "\n        on-render=",
        '\n      >\n        <span class="arrow-and-key-wrapper"\n          @mouseover=',
        "\n          @mouseout=",
        '\n        >\n          <span class="arrow-icon" @click=',
        " jslog=",
        '>\n          </span>\n          <span class="tree-node-key" data-node-key=',
        ">",
        "</span>\n        </span>\n        ",
        "\n      </li>\n    "
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        '\n      <div class="wrapping-container">\n        <ul role="tree" @keydown=',
        ">\n          ",
        "\n        </ul>\n      </div>\n      "
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}








var coordinator = _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__.RenderCoordinator.RenderCoordinator.instance();
function defaultRenderer(node) {
    return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html(_templateObject(), node.treeNodeData);
}
var ItemSelectedEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(ItemSelectedEvent, Event1);
    var _super = _create_super(ItemSelectedEvent);
    function ItemSelectedEvent(node) {
        _class_call_check(this, ItemSelectedEvent);
        var _this;
        _this = _super.call(this, ItemSelectedEvent.eventName, {
            bubbles: true,
            composed: true
        });
        _define_property(_assert_this_initialized(_this), "data", void 0);
        _this.data = {
            node: node
        };
        return _this;
    }
    return ItemSelectedEvent;
}(_wrap_native_super(Event));
_define_property(ItemSelectedEvent, "eventName", 'itemselected');
var ItemMouseOverEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(ItemMouseOverEvent, Event1);
    var _super = _create_super(ItemMouseOverEvent);
    function ItemMouseOverEvent(node) {
        _class_call_check(this, ItemMouseOverEvent);
        var _this;
        _this = _super.call(this, ItemMouseOverEvent.eventName, {
            bubbles: true,
            composed: true
        });
        _define_property(_assert_this_initialized(_this), "data", void 0);
        _this.data = {
            node: node
        };
        return _this;
    }
    return ItemMouseOverEvent;
}(_wrap_native_super(Event));
_define_property(ItemMouseOverEvent, "eventName", 'itemmouseover');
var ItemMouseOutEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(ItemMouseOutEvent, Event1);
    var _super = _create_super(ItemMouseOutEvent);
    function ItemMouseOutEvent(node) {
        _class_call_check(this, ItemMouseOutEvent);
        var _this;
        _this = _super.call(this, ItemMouseOutEvent.eventName, {
            bubbles: true,
            composed: true
        });
        _define_property(_assert_this_initialized(_this), "data", void 0);
        _this.data = {
            node: node
        };
        return _this;
    }
    return ItemMouseOutEvent;
}(_wrap_native_super(Event));
_define_property(ItemMouseOutEvent, "eventName", 'itemmouseout');
var _shadow = /*#__PURE__*/ new WeakMap(), _treeData = /*#__PURE__*/ new WeakMap(), _nodeExpandedMap = /*#__PURE__*/ new WeakMap(), _domNodeToTreeNodeMap = /*#__PURE__*/ new WeakMap(), _hasRenderedAtLeastOnce = /*#__PURE__*/ new WeakMap(), /**
     * If we have expanded to a certain node, we want to focus it once we've
     * rendered. But we render lazily and wrapped in LitHtml.until, so we can't
     * know for sure when that node will be rendered. This variable tracks the
     * node that we want focused but may not yet have been rendered.
     */ _nodeIdPendingFocus = /*#__PURE__*/ new WeakMap(), _selectedTreeNode = /*#__PURE__*/ new WeakMap(), _defaultRenderer = /*#__PURE__*/ new WeakMap(), _nodeFilter = /*#__PURE__*/ new WeakMap(), _compact = /*#__PURE__*/ new WeakMap(), /**
     * scheduledRender = render() has been called and scheduled a render.
     */ _scheduledRender = /*#__PURE__*/ new WeakMap(), /**
     * enqueuedRender = render() was called mid-way through an existing render.
     */ _enqueuedRender = /*#__PURE__*/ new WeakMap(), _setNodeKeyNoWrapCSSVariable = /*#__PURE__*/ new WeakSet(), _setTopLevelNodeBorderColorCSSVariable = /*#__PURE__*/ new WeakSet(), _recursivelyCollapseTreeNodeChildren = /*#__PURE__*/ new WeakSet(), _flattenSubtree = /*#__PURE__*/ new WeakSet(), _fetchNodeChildren = /*#__PURE__*/ new WeakSet(), _setNodeExpandedState = /*#__PURE__*/ new WeakSet(), _nodeIsExpanded = /*#__PURE__*/ new WeakSet(), _expandAndRecurse = /*#__PURE__*/ new WeakSet(), _onArrowClick = /*#__PURE__*/ new WeakSet(), _onNodeClick = /*#__PURE__*/ new WeakSet(), _focusTreeNode = /*#__PURE__*/ new WeakSet(), _processHomeAndEndKeysNavigation = /*#__PURE__*/ new WeakSet(), _processArrowKeyNavigation = /*#__PURE__*/ new WeakSet(), _processEnterOrSpaceNavigation = /*#__PURE__*/ new WeakSet(), _onTreeKeyDown = /*#__PURE__*/ new WeakSet(), _focusPendingNode = /*#__PURE__*/ new WeakSet(), _isSelectedNode = /*#__PURE__*/ new WeakSet(), _renderNode = /*#__PURE__*/ new WeakSet(), _render = /*#__PURE__*/ new WeakSet();
var TreeOutline = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(TreeOutline, HTMLElement1);
    var _super = _create_super(TreeOutline);
    function TreeOutline() {
        _class_call_check(this, TreeOutline);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _setNodeKeyNoWrapCSSVariable);
        _class_private_method_init(_assert_this_initialized(_this), _setTopLevelNodeBorderColorCSSVariable);
        _class_private_method_init(_assert_this_initialized(_this), _recursivelyCollapseTreeNodeChildren);
        _class_private_method_init(_assert_this_initialized(_this), _flattenSubtree);
        _class_private_method_init(_assert_this_initialized(_this), _fetchNodeChildren);
        _class_private_method_init(_assert_this_initialized(_this), _setNodeExpandedState);
        _class_private_method_init(_assert_this_initialized(_this), _nodeIsExpanded);
        _class_private_method_init(_assert_this_initialized(_this), _expandAndRecurse);
        _class_private_method_init(_assert_this_initialized(_this), _onArrowClick);
        _class_private_method_init(_assert_this_initialized(_this), _onNodeClick);
        _class_private_method_init(_assert_this_initialized(_this), _focusTreeNode);
        _class_private_method_init(_assert_this_initialized(_this), _processHomeAndEndKeysNavigation);
        _class_private_method_init(_assert_this_initialized(_this), _processArrowKeyNavigation);
        _class_private_method_init(_assert_this_initialized(_this), _processEnterOrSpaceNavigation);
        _class_private_method_init(_assert_this_initialized(_this), _onTreeKeyDown);
        _class_private_method_init(_assert_this_initialized(_this), _focusPendingNode);
        _class_private_method_init(_assert_this_initialized(_this), _isSelectedNode);
        _class_private_method_init(_assert_this_initialized(_this), _renderNode);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _treeData, {
            writable: true,
            value: []
        });
        _class_private_field_init(_assert_this_initialized(_this), _nodeExpandedMap, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(_assert_this_initialized(_this), _domNodeToTreeNodeMap, {
            writable: true,
            value: new WeakMap()
        });
        _class_private_field_init(_assert_this_initialized(_this), _hasRenderedAtLeastOnce, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _nodeIdPendingFocus, {
            writable: true,
            value: null
        });
        _class_private_field_init(_assert_this_initialized(_this), _selectedTreeNode, {
            writable: true,
            value: null
        });
        _class_private_field_init(_assert_this_initialized(_this), _defaultRenderer, {
            writable: true,
            value: function(node, _state) {
                if (typeof node.treeNodeData !== 'string') {
                    console.warn("The default TreeOutline renderer simply stringifies its given value. You passed in ".concat(JSON.stringify(node.treeNodeData, null, 2), ". Consider providing a different defaultRenderer that can handle nodes of this type."));
                }
                return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html(_templateObject1(), String(node.treeNodeData));
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _nodeFilter, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _compact, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _scheduledRender, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _enqueuedRender, {
            writable: true,
            value: false
        });
        return _this;
    }
    _create_class(TreeOutline, [
        {
            key: "attributeChangedCallback",
            value: function attributeChangedCallback(name, oldValue, newValue) {
                switch(name){
                    case 'nowrap':
                        {
                            _class_private_method_get(this, _setNodeKeyNoWrapCSSVariable, setNodeKeyNoWrapCSSVariable).call(this, newValue);
                            break;
                        }
                    case 'toplevelbordercolor':
                        {
                            _class_private_method_get(this, _setTopLevelNodeBorderColorCSSVariable, setTopLevelNodeBorderColorCSSVariable).call(this, newValue);
                            break;
                        }
                }
            }
        },
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_method_get(this, _setTopLevelNodeBorderColorCSSVariable, setTopLevelNodeBorderColorCSSVariable).call(this, this.getAttribute('toplevelbordercolor'));
                _class_private_method_get(this, _setNodeKeyNoWrapCSSVariable, setNodeKeyNoWrapCSSVariable).call(this, this.getAttribute('nowrap'));
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _treeOutline_css_js__WEBPACK_IMPORTED_MODULE_6__["default"],
                    _code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_3__.Style["default"]
                ];
            }
        },
        {
            key: "data",
            get: function get() {
                return {
                    tree: _class_private_field_get(this, _treeData),
                    defaultRenderer: _class_private_field_get(this, _defaultRenderer)
                };
            },
            set: function set(data) {
                _class_private_field_set(this, _defaultRenderer, data.defaultRenderer);
                _class_private_field_set(this, _treeData, data.tree);
                _class_private_field_set(this, _nodeFilter, data.filter);
                _class_private_field_set(this, _compact, data.compact || false);
                if (!_class_private_field_get(this, _hasRenderedAtLeastOnce)) {
                    _class_private_field_set(this, _selectedTreeNode, _class_private_field_get(this, _treeData)[0]);
                }
                void _class_private_method_get(this, _render, render).call(this);
            }
        },
        {
            key: "expandRecursively",
            value: /**
     * Recursively expands the tree from the root nodes, to a max depth. The max
     * depth is 0 indexed - so a maxDepth of 2 (default) will expand 3 levels: 0,
     * 1 and 2.
     */ function expandRecursively() {
                var maxDepth = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 2;
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    Promise.all(_class_private_field_get(_this, _treeData).map(function(rootNode) {
                                        return _class_private_method_get(_this, _expandAndRecurse, expandAndRecurse).call(_this, rootNode, 0, maxDepth);
                                    }))
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    4,
                                    _class_private_method_get(_this, _render, render).call(_this)
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "collapseAllNodes",
            value: /**
     * Collapses all nodes in the tree.
     */ function collapseAllNodes() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _class_private_field_get(_this, _nodeExpandedMap).clear();
                                return [
                                    4,
                                    _class_private_method_get(_this, _render, render).call(_this)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "expandToAndSelectTreeNode",
            value: /**
     * Takes a TreeNode, expands the outline to reveal it, and focuses it.
     */ function expandToAndSelectTreeNode(targetTreeNode) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            _this.expandToAndSelectTreeNodeId(targetTreeNode.id)
                        ];
                    });
                })();
            }
        },
        {
            key: "expandToAndSelectTreeNodeId",
            value: /**
     * Takes a TreeNode ID, expands the outline to reveal it, and focuses it.
     */ function expandToAndSelectTreeNodeId(targetTreeNodeId) {
                var _this = this;
                return _async_to_generator(function() {
                    var pathToTreeNode;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    (0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.getPathToTreeNode)(_class_private_field_get(_this, _treeData), targetTreeNodeId)
                                ];
                            case 1:
                                pathToTreeNode = _state.sent();
                                if (pathToTreeNode === null) {
                                    throw new Error("Could not find node with id ".concat(targetTreeNodeId, " in the tree."));
                                }
                                pathToTreeNode.forEach(function(node, index) {
                                    // We don't expand the very last node, which was the target node.
                                    if (index < pathToTreeNode.length - 1) {
                                        _class_private_method_get(_this, _setNodeExpandedState, setNodeExpandedState).call(_this, node, true);
                                    }
                                });
                                // Mark the node as pending focus so when it is rendered into the DOM we can focus it
                                _class_private_field_set(_this, _nodeIdPendingFocus, targetTreeNodeId);
                                return [
                                    4,
                                    _class_private_method_get(_this, _render, render).call(_this)
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            /**
     * Takes a list of TreeNode IDs and expands the corresponding nodes.
     */ key: "expandNodeIds",
            value: function expandNodeIds(nodeIds) {
                var _this = this;
                nodeIds.forEach(function(id) {
                    return _class_private_field_get(_this, _nodeExpandedMap).set(id, true);
                });
                return _class_private_method_get(this, _render, render).call(this);
            }
        },
        {
            /**
     * Takes a TreeNode ID and focuses the corresponding node.
     */ key: "focusNodeId",
            value: function focusNodeId(nodeId) {
                _class_private_field_set(this, _nodeIdPendingFocus, nodeId);
                return _class_private_method_get(this, _render, render).call(this);
            }
        },
        {
            key: "collapseChildrenOfNode",
            value: function collapseChildrenOfNode(domNode) {
                var _this = this;
                return _async_to_generator(function() {
                    var treeNode;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                treeNode = _class_private_field_get(_this, _domNodeToTreeNodeMap).get(domNode);
                                if (!treeNode) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    _class_private_method_get(_this, _recursivelyCollapseTreeNodeChildren, recursivelyCollapseTreeNodeChildren).call(_this, treeNode)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    4,
                                    _class_private_method_get(_this, _render, render).call(_this)
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ], [
        {
            key: "observedAttributes",
            get: function get() {
                return [
                    'nowrap',
                    'toplevelbordercolor'
                ];
            }
        }
    ]);
    return TreeOutline;
}(_wrap_native_super(HTMLElement));
_define_property(TreeOutline, "litTagName", _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal(_templateObject2()));
function setNodeKeyNoWrapCSSVariable(attributeValue) {
    this.style.setProperty('--override-key-whitespace-wrapping', attributeValue !== null ? 'nowrap' : 'initial');
}
function setTopLevelNodeBorderColorCSSVariable(attributeValue) {
    this.style.setProperty('--override-top-node-border', attributeValue ? "1px solid ".concat(attributeValue) : '');
}
function recursivelyCollapseTreeNodeChildren(treeNode) {
    return _recursivelyCollapseTreeNodeChildren1.apply(this, arguments);
}
function _recursivelyCollapseTreeNodeChildren1() {
    _recursivelyCollapseTreeNodeChildren1 = _async_to_generator(function(treeNode) {
        var _this, children, childRecursions;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _this = this;
                    if (!(0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.isExpandableNode)(treeNode) || !_class_private_method_get(this, _nodeIsExpanded, nodeIsExpanded).call(this, treeNode)) {
                        return [
                            2
                        ];
                    }
                    return [
                        4,
                        _class_private_method_get(this, _fetchNodeChildren, fetchNodeChildren).call(this, treeNode)
                    ];
                case 1:
                    children = _state.sent();
                    childRecursions = Promise.all(children.map(function(child) {
                        return _class_private_method_get(_this, _recursivelyCollapseTreeNodeChildren, recursivelyCollapseTreeNodeChildren).call(_this, child);
                    }));
                    return [
                        4,
                        childRecursions
                    ];
                case 2:
                    _state.sent();
                    _class_private_method_get(this, _setNodeExpandedState, setNodeExpandedState).call(this, treeNode, false);
                    return [
                        2
                    ];
            }
        });
    });
    return _recursivelyCollapseTreeNodeChildren1.apply(this, arguments);
}
function flattenSubtree(node, filter) {
    return _flattenSubtree1.apply(this, arguments);
}
function _flattenSubtree1() {
    _flattenSubtree1 = _async_to_generator(function(node, filter) {
        var children, filteredChildren, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, child, filtering, toBeSelected, expanded, _filteredChildren, grandChildren, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.getNodeChildren)(node)
                    ];
                case 1:
                    children = _state.sent();
                    filteredChildren = [];
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 2;
                case 2:
                    _state.trys.push([
                        2,
                        8,
                        9,
                        10
                    ]);
                    _iterator = children[Symbol.iterator]();
                    _state.label = 3;
                case 3:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        7
                    ];
                    child = _step.value;
                    filtering = filter(child.treeNodeData);
                    // We always include the selected node in the tree, regardless of its filtering status.
                    toBeSelected = _class_private_method_get(this, _isSelectedNode, isSelectedNode).call(this, child) || child.id === _class_private_field_get(this, _nodeIdPendingFocus);
                    // If a node is already expanded we should not flatten it away.
                    expanded = _class_private_field_get(this, _nodeExpandedMap).get(child.id);
                    if (!(filtering === "SHOW" /* FilterOption.SHOW */  || toBeSelected || expanded)) return [
                        3,
                        4
                    ];
                    filteredChildren.push(child);
                    return [
                        3,
                        6
                    ];
                case 4:
                    if (!(filtering === "FLATTEN" /* FilterOption.FLATTEN */  && (0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.isExpandableNode)(child))) return [
                        3,
                        6
                    ];
                    return [
                        4,
                        _class_private_method_get(this, _flattenSubtree, flattenSubtree).call(this, child, filter)
                    ];
                case 5:
                    grandChildren = _state.sent();
                    (_filteredChildren = filteredChildren).push.apply(_filteredChildren, _to_consumable_array(grandChildren));
                    _state.label = 6;
                case 6:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        3
                    ];
                case 7:
                    return [
                        3,
                        10
                    ];
                case 8:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        10
                    ];
                case 9:
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
                case 10:
                    return [
                        2,
                        filteredChildren
                    ];
            }
        });
    });
    return _flattenSubtree1.apply(this, arguments);
}
function fetchNodeChildren(node) {
    return _fetchNodeChildren1.apply(this, arguments);
}
function _fetchNodeChildren1() {
    _fetchNodeChildren1 = _async_to_generator(function(node) {
        var children, filter, filteredDescendants;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.getNodeChildren)(node)
                    ];
                case 1:
                    children = _state.sent();
                    filter = _class_private_field_get(this, _nodeFilter);
                    if (!filter) {
                        return [
                            2,
                            children
                        ];
                    }
                    return [
                        4,
                        _class_private_method_get(this, _flattenSubtree, flattenSubtree).call(this, node, filter)
                    ];
                case 2:
                    filteredDescendants = _state.sent();
                    return [
                        2,
                        filteredDescendants.length ? filteredDescendants : children
                    ];
            }
        });
    });
    return _fetchNodeChildren1.apply(this, arguments);
}
function setNodeExpandedState(node, newExpandedState) {
    _class_private_field_get(this, _nodeExpandedMap).set(node.id, newExpandedState);
}
function nodeIsExpanded(node) {
    return _class_private_field_get(this, _nodeExpandedMap).get(node.id) || false;
}
function expandAndRecurse(node, currentDepth, maxDepth) {
    return _expandAndRecurse1.apply(this, arguments);
}
function _expandAndRecurse1() {
    _expandAndRecurse1 = _async_to_generator(function(node, currentDepth, maxDepth) {
        var _this, children;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _this = this;
                    if (!(0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.isExpandableNode)(node)) {
                        return [
                            2
                        ];
                    }
                    _class_private_method_get(this, _setNodeExpandedState, setNodeExpandedState).call(this, node, true);
                    if (currentDepth === maxDepth || !(0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.isExpandableNode)(node)) {
                        return [
                            2
                        ];
                    }
                    return [
                        4,
                        _class_private_method_get(this, _fetchNodeChildren, fetchNodeChildren).call(this, node)
                    ];
                case 1:
                    children = _state.sent();
                    return [
                        4,
                        Promise.all(children.map(function(child) {
                            return _class_private_method_get(_this, _expandAndRecurse, expandAndRecurse).call(_this, child, currentDepth + 1, maxDepth);
                        }))
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _expandAndRecurse1.apply(this, arguments);
}
function onArrowClick(node) {
    var _this = this;
    return function(event) {
        event.stopPropagation();
        if ((0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.isExpandableNode)(node)) {
            _class_private_method_get(_this, _setNodeExpandedState, setNodeExpandedState).call(_this, node, !_class_private_method_get(_this, _nodeIsExpanded, nodeIsExpanded).call(_this, node));
            void _class_private_method_get(_this, _render, render).call(_this);
        }
    };
}
function onNodeClick(event) {
    // Avoid it bubbling up to parent tree elements, else clicking a node deep in the tree will toggle it + all its ancestor's visibility.
    event.stopPropagation();
    var nodeClickExpandsOrContracts = this.getAttribute('clickabletitle') !== null;
    var domNode = event.currentTarget;
    var node = _class_private_field_get(this, _domNodeToTreeNodeMap).get(domNode);
    if (nodeClickExpandsOrContracts && node && (0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.isExpandableNode)(node)) {
        _class_private_method_get(this, _setNodeExpandedState, setNodeExpandedState).call(this, node, !_class_private_method_get(this, _nodeIsExpanded, nodeIsExpanded).call(this, node));
    }
    void _class_private_method_get(this, _focusTreeNode, focusTreeNode).call(this, domNode);
}
function focusTreeNode(domNode) {
    return _focusTreeNode1.apply(this, arguments);
}
function _focusTreeNode1() {
    _focusTreeNode1 = _async_to_generator(function(domNode) {
        var treeNode;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    treeNode = _class_private_field_get(this, _domNodeToTreeNodeMap).get(domNode);
                    if (!treeNode) {
                        return [
                            2
                        ];
                    }
                    _class_private_field_set(this, _selectedTreeNode, treeNode);
                    return [
                        4,
                        _class_private_method_get(this, _render, render).call(this)
                    ];
                case 1:
                    _state.sent();
                    this.dispatchEvent(new ItemSelectedEvent(treeNode));
                    void coordinator.write('DOMNode focus', function() {
                        domNode.focus();
                    });
                    return [
                        2
                    ];
            }
        });
    });
    return _focusTreeNode1.apply(this, arguments);
}
function processHomeAndEndKeysNavigation(key) {
    if (key === 'Home') {
        var firstRootNode = _class_private_field_get(this, _shadow).querySelector('ul[role="tree"] > li[role="treeitem"]');
        if (firstRootNode) {
            void _class_private_method_get(this, _focusTreeNode, focusTreeNode).call(this, firstRootNode);
        }
    } else if (key === 'End') {
        /**
             * The End key takes the user to the last visible node in the tree - you
             * can think of this as the one that's rendered closest to the bottom of
             * the page.
             *
             * We could walk our tree and compute this - but it will also be the last
             * li[role="treeitem"] in the DOM because we only render visible nodes.
             * Therefore we can select all the nodes and pick the last one.
             */ var allTreeItems = _class_private_field_get(this, _shadow).querySelectorAll('li[role="treeitem"]');
        var lastTreeItem = allTreeItems[allTreeItems.length - 1];
        if (lastTreeItem) {
            void _class_private_method_get(this, _focusTreeNode, focusTreeNode).call(this, lastTreeItem);
        }
    }
}
function processArrowKeyNavigation(key, currentDOMNode) {
    return _processArrowKeyNavigation1.apply(this, arguments);
}
function _processArrowKeyNavigation1() {
    _processArrowKeyNavigation1 = _async_to_generator(function(key, currentDOMNode) {
        var _this, currentTreeNode, domNode;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _this = this;
                    currentTreeNode = _class_private_field_get(this, _domNodeToTreeNodeMap).get(currentDOMNode);
                    if (!currentTreeNode) {
                        return [
                            2
                        ];
                    }
                    domNode = (0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.findNextNodeForTreeOutlineKeyboardNavigation)({
                        currentDOMNode: currentDOMNode,
                        currentTreeNode: currentTreeNode,
                        direction: key,
                        setNodeExpandedState: function(node, expanded) {
                            return _class_private_method_get(_this, _setNodeExpandedState, setNodeExpandedState).call(_this, node, expanded);
                        }
                    });
                    return [
                        4,
                        _class_private_method_get(this, _focusTreeNode, focusTreeNode).call(this, domNode)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _processArrowKeyNavigation1.apply(this, arguments);
}
function processEnterOrSpaceNavigation(currentDOMNode) {
    var currentTreeNode = _class_private_field_get(this, _domNodeToTreeNodeMap).get(currentDOMNode);
    if (!currentTreeNode) {
        return;
    }
    if ((0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.isExpandableNode)(currentTreeNode)) {
        var currentExpandedState = _class_private_method_get(this, _nodeIsExpanded, nodeIsExpanded).call(this, currentTreeNode);
        _class_private_method_get(this, _setNodeExpandedState, setNodeExpandedState).call(this, currentTreeNode, !currentExpandedState);
        void _class_private_method_get(this, _render, render).call(this);
    }
}
function onTreeKeyDown(event) {
    return _onTreeKeyDown1.apply(this, arguments);
}
function _onTreeKeyDown1() {
    _onTreeKeyDown1 = _async_to_generator(function(event) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!_instanceof(event.target, HTMLLIElement)) {
                        throw new Error('event.target was not an <li> element');
                    }
                    if (!(event.key === 'Home' || event.key === 'End')) return [
                        3,
                        1
                    ];
                    event.preventDefault();
                    _class_private_method_get(this, _processHomeAndEndKeysNavigation, processHomeAndEndKeysNavigation).call(this, event.key);
                    return [
                        3,
                        4
                    ];
                case 1:
                    if (!_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.keyIsArrowKey(event.key)) return [
                        3,
                        3
                    ];
                    event.preventDefault();
                    return [
                        4,
                        _class_private_method_get(this, _processArrowKeyNavigation, processArrowKeyNavigation).call(this, event.key, event.target)
                    ];
                case 2:
                    _state.sent();
                    return [
                        3,
                        4
                    ];
                case 3:
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        _class_private_method_get(this, _processEnterOrSpaceNavigation, processEnterOrSpaceNavigation).call(this, event.target);
                    }
                    _state.label = 4;
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
    return _onTreeKeyDown1.apply(this, arguments);
}
function focusPendingNode(domNode) {
    _class_private_field_set(this, _nodeIdPendingFocus, null);
    void _class_private_method_get(this, _focusTreeNode, focusTreeNode).call(this, domNode);
}
function isSelectedNode(node) {
    if (_class_private_field_get(this, _selectedTreeNode)) {
        return node.id === _class_private_field_get(this, _selectedTreeNode).id;
    }
    return false;
}
function renderNode(node, param) {
    var _this = this;
    var depth = param.depth, setSize = param.setSize, positionInSet = param.positionInSet;
    var childrenToRender;
    var _$nodeIsExpanded = _class_private_method_get(this, _nodeIsExpanded, nodeIsExpanded).call(this, node);
    if (!(0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.isExpandableNode)(node) || !_$nodeIsExpanded) {
        childrenToRender = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.nothing;
    } else {
        var childNodes = _class_private_method_get(this, _fetchNodeChildren, fetchNodeChildren).call(this, node).then(function(children) {
            return children.map(function(childNode, index) {
                return _class_private_method_get(_this, _renderNode, renderNode).call(_this, childNode, {
                    depth: depth + 1,
                    setSize: children.length,
                    positionInSet: index
                });
            });
        });
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        childrenToRender = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html(_templateObject3(), _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.Directives.until(childNodes));
    // clang-format on
    }
    var nodeIsFocusable = _class_private_method_get(this, _isSelectedNode, isSelectedNode).call(this, node);
    var tabIndex = nodeIsFocusable ? 0 : -1;
    var listItemClasses = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.Directives.classMap({
        expanded: (0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.isExpandableNode)(node) && _$nodeIsExpanded,
        parent: (0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.isExpandableNode)(node),
        selected: _class_private_method_get(this, _isSelectedNode, isSelectedNode).call(this, node),
        'is-top-level': depth === 0,
        compact: _class_private_field_get(this, _compact)
    });
    var ariaExpandedAttribute = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.Directives.ifDefined((0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.isExpandableNode)(node) ? String(_$nodeIsExpanded) : undefined);
    var renderedNodeKey;
    if (node.renderer) {
        renderedNodeKey = node.renderer(node, {
            isExpanded: _$nodeIsExpanded
        });
    } else {
        renderedNodeKey = _class_private_field_get(this, _defaultRenderer).call(this, node, {
            isExpanded: _$nodeIsExpanded
        });
    }
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html(_templateObject4(), tabIndex, setSize, ariaExpandedAttribute, depth + 1, positionInSet + 1, listItemClasses, _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.treeItem(node.jslogContext).track({
        click: true,
        keydown: 'ArrowUp|ArrowDown|ArrowLeft|ArrowRight|Enter|Space|Home|End'
    }), _class_private_method_get(this, _onNodeClick, onNodeClick), (0,_TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_7__.trackDOMNodeToTreeNode)(_class_private_field_get(this, _domNodeToTreeNodeMap), node), _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_4__.Directives.nodeRenderedCallback(function(domNode) {
        /**
             * Because TreeNodes are lazily rendered, you can call
             * `outline.expandToAndSelect(NodeX)`, but `NodeX` will be rendered at some
             * later point, once it's been fully resolved, within a LitHtml.until
             * directive. That means we don't have a direct hook into when it's
             * rendered, which we need because we want to focus the element, so we use this directive to receive a callback when the node is rendered.
             */ if (!_instanceof(domNode, HTMLLIElement)) {
            return;
        }
        if (_class_private_field_get(_this, _nodeIdPendingFocus) && node.id === _class_private_field_get(_this, _nodeIdPendingFocus)) {
            _class_private_method_get(_this, _focusPendingNode, focusPendingNode).call(_this, domNode);
        }
    }), function() {
        _this.dispatchEvent(new ItemMouseOverEvent(node));
    }, function() {
        _this.dispatchEvent(new ItemMouseOutEvent(node));
    }, _class_private_method_get(this, _onArrowClick, onArrowClick).call(this, node), _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.expand().track({
        click: true
    }), node.treeNodeData, renderedNodeKey, childrenToRender);
// clang-format on
}
function render() {
    return _render1.apply(this, arguments);
}
function _render1() {
    _render1 = _async_to_generator(function() {
        var _this;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _this = this;
                    if (_class_private_field_get(this, _scheduledRender)) {
                        // If we are already rendering, don't render again immediately, but
                        // enqueue it to be run after we're done on our current render.
                        _class_private_field_set(this, _enqueuedRender, true);
                        return [
                            2
                        ];
                    }
                    _class_private_field_set(this, _scheduledRender, true);
                    return [
                        4,
                        coordinator.write('TreeOutline render', function() {
                            // Disabled until https://crbug.com/1079231 is fixed.
                            // clang-format off
                            _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html(_templateObject5(), _class_private_method_get(_this, _onTreeKeyDown, onTreeKeyDown), _class_private_field_get(_this, _treeData).map(function(topLevelNode, index) {
                                return _class_private_method_get(_this, _renderNode, renderNode).call(_this, topLevelNode, {
                                    depth: 0,
                                    setSize: _class_private_field_get(_this, _treeData).length,
                                    positionInSet: index
                                });
                            })), _class_private_field_get(_this, _shadow), {
                                host: _this
                            });
                        })
                    ];
                case 1:
                    _state.sent();
                    // clang-format on
                    _class_private_field_set(this, _hasRenderedAtLeastOnce, true);
                    _class_private_field_set(this, _scheduledRender, false);
                    // If render() was called when we were already mid-render, let's re-render
                    // to ensure we're not rendering any stale UI.
                    if (_class_private_field_get(this, _enqueuedRender)) {
                        _class_private_field_set(this, _enqueuedRender, false);
                        return [
                            2,
                            _class_private_method_get(this, _render, render).call(this)
                        ];
                    }
                    return [
                        2
                    ];
            }
        });
    });
    return _render1.apply(this, arguments);
}
customElements.define('devtools-tree-outline', TreeOutline); //# sourceMappingURL=TreeOutline.js.map


}),
"./ui/components/tree_outline/treeOutline.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  --list-group-padding: 16px;\n}\n\nli {\n  border: 2px solid transparent;\n  list-style: none;\n  text-overflow: ellipsis;\n  min-height: 12px;\n}\n\n.compact {\n  border: 0;\n}\n\n.tree-item:hover {\n  background-color: var(--sys-color-state-hover-on-subtle);\n}\n\n.tree-node-key {\n  white-space: var(--override-key-whitespace-wrapping);\n  /* Override the default |min-width: auto| to avoid overflows of flex items */\n  min-width: 0;\n  flex-grow: 1;\n}\n\n.arrow-icon {\n  display: block;\n  user-select: none;\n  mask-image: var(--image-file-triangle-right);\n  background-color: var(--icon-default);\n  content: "";\n  text-shadow: none;\n  height: 14px;\n  width: 14px;\n  overflow: hidden;\n  flex: none;\n  transition: transform 200ms;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n}\n\nul[role="group"] {\n  padding-left: var(--list-group-padding);\n}\n\nli:not(.parent) > .arrow-and-key-wrapper > .arrow-icon {\n  mask-size: 0;\n}\n\nli.parent.expanded > .arrow-and-key-wrapper > .arrow-icon {\n  transform: rotate(90deg);\n}\n\nli.is-top-level {\n  border-top: var(--override-top-node-border);\n}\n\nli.is-top-level:last-child {\n  border-bottom: var(--override-top-node-border);\n}\n\n:host([animated]) li:not(.is-top-level) {\n  animation-name: slideIn;\n  animation-duration: 150ms;\n  animation-timing-function: cubic-bezier(0, 0, 0.3, 1);\n  animation-fill-mode: forwards;\n}\n\n@keyframes slideIn {\n  from {\n    transform: translateY(-5px);\n    opacity: 0%;\n  }\n\n  to {\n    transform: none;\n    opacity: 100%;\n  }\n}\n\n.arrow-and-key-wrapper {\n  display: flex;\n  align-content: center;\n  align-items: center;\n\n  & ::selection {\n    background-color: var(--sys-color-state-focus-select);\n  }\n}\n\n[role="treeitem"]:focus {\n  outline: 0;\n}\n\nul[role="tree"]:focus-within [role="treeitem"].selected > .arrow-and-key-wrapper {\n  /* stylelint-disable-next-line color-named */\n  background-color: var(--sys-color-tonal-container);\n}\n\n.text-ellipsis {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.inline-icon {\n  vertical-align: sub;\n}\n\n@media (forced-colors: active) {\n  .arrow-icon {\n    background-color: ButtonText;\n  }\n\n  ul[role="tree"]:focus-within [role="treeitem"].selected {\n    outline: solid 1px ButtonText;\n  }\n}\n\n/*# sourceURL=treeOutline.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);