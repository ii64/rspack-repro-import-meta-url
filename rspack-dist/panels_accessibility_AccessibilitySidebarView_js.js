"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_accessibility_AccessibilitySidebarView_js"], {
"./panels/accessibility/AccessibilitySidebarView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AccessibilitySidebarView: function() { return AccessibilitySidebarView; }
});
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _AccessibilityNodeView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AccessibilityNodeView.js */ "./panels/accessibility/AccessibilityNodeView.js");
/* harmony import */var _ARIAAttributesView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ARIAAttributesView.js */ "./panels/accessibility/ARIAAttributesView.js");
/* harmony import */var _AXBreadcrumbsPane_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AXBreadcrumbsPane.js */ "./panels/accessibility/AXBreadcrumbsPane.js");
/* harmony import */var _SourceOrderView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SourceOrderView.js */ "./panels/accessibility/SourceOrderView.js");
// Copyright 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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







var accessibilitySidebarViewInstance;
var AccessibilitySidebarView = /*#__PURE__*/ function(_UI_ThrottledWidget_ThrottledWidget) {
    "use strict";
    _inherits(AccessibilitySidebarView, _UI_ThrottledWidget_ThrottledWidget);
    var _super = _create_super(AccessibilitySidebarView);
    function AccessibilitySidebarView(throttlingTimeout) {
        _class_call_check(this, AccessibilitySidebarView);
        var _this;
        _this = _super.call(this, false, throttlingTimeout);
        _define_property(_assert_this_initialized(_this), "nodeInternal", void 0);
        _define_property(_assert_this_initialized(_this), "axNodeInternal", void 0);
        _define_property(_assert_this_initialized(_this), "skipNextPullNode", void 0);
        _define_property(_assert_this_initialized(_this), "sidebarPaneStack", void 0);
        _define_property(_assert_this_initialized(_this), "breadcrumbsSubPane", null);
        _define_property(_assert_this_initialized(_this), "ariaSubPane", void 0);
        _define_property(_assert_this_initialized(_this), "axNodeSubPane", void 0);
        _define_property(_assert_this_initialized(_this), "sourceOrderSubPane", void 0);
        _this.nodeInternal = null;
        _this.axNodeInternal = null;
        _this.skipNextPullNode = false;
        _this.sidebarPaneStack = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ViewManager.ViewManager.instance().createStackLocation();
        _this.breadcrumbsSubPane = new _AXBreadcrumbsPane_js__WEBPACK_IMPORTED_MODULE_5__.AXBreadcrumbsPane(_assert_this_initialized(_this));
        void _this.sidebarPaneStack.showView(_this.breadcrumbsSubPane);
        _this.ariaSubPane = new _ARIAAttributesView_js__WEBPACK_IMPORTED_MODULE_4__.ARIAAttributesPane();
        void _this.sidebarPaneStack.showView(_this.ariaSubPane);
        _this.axNodeSubPane = new _AccessibilityNodeView_js__WEBPACK_IMPORTED_MODULE_3__.AXNodeSubPane();
        void _this.sidebarPaneStack.showView(_this.axNodeSubPane);
        _this.sourceOrderSubPane = new _SourceOrderView_js__WEBPACK_IMPORTED_MODULE_6__.SourceOrderPane();
        void _this.sidebarPaneStack.showView(_this.sourceOrderSubPane);
        _this.sidebarPaneStack.widget().show(_this.element);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode, _this.pullNode, _assert_this_initialized(_this));
        _this.pullNode();
        return _this;
    }
    _create_class(AccessibilitySidebarView, [
        {
            key: "node",
            value: function node() {
                return this.nodeInternal;
            }
        },
        {
            key: "axNode",
            value: function axNode() {
                return this.axNodeInternal;
            }
        },
        {
            key: "setNode",
            value: function setNode(node, fromAXTree) {
                this.skipNextPullNode = Boolean(fromAXTree);
                this.nodeInternal = node;
                this.update();
            }
        },
        {
            key: "accessibilityNodeCallback",
            value: function accessibilityNodeCallback(axNode) {
                if (!axNode) {
                    return;
                }
                this.axNodeInternal = axNode;
                if (axNode.isDOMNode()) {
                    void this.sidebarPaneStack.showView(this.ariaSubPane, this.axNodeSubPane);
                } else {
                    this.sidebarPaneStack.removeView(this.ariaSubPane);
                }
                if (this.axNodeSubPane) {
                    this.axNodeSubPane.setAXNode(axNode);
                }
                if (this.breadcrumbsSubPane) {
                    this.breadcrumbsSubPane.setAXNode(axNode);
                }
            }
        },
        {
            key: "doUpdate",
            value: function doUpdate() {
                var _this = this;
                return _async_to_generator(function() {
                    var node, accessibilityModel;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                node = _this.node();
                                _this.axNodeSubPane.setNode(node);
                                _this.ariaSubPane.setNode(node);
                                if (_this.breadcrumbsSubPane) {
                                    _this.breadcrumbsSubPane.setNode(node);
                                }
                                void _this.sourceOrderSubPane.setNodeAsync(node);
                                if (!node) {
                                    return [
                                        2
                                    ];
                                }
                                accessibilityModel = node.domModel().target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.AccessibilityModel.AccessibilityModel);
                                if (!accessibilityModel) {
                                    return [
                                        2
                                    ];
                                }
                                if (!_core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.experiments.isEnabled('full-accessibility-tree')) {
                                    accessibilityModel.clear();
                                }
                                return [
                                    4,
                                    accessibilityModel.requestPartialAXTree(node)
                                ];
                            case 1:
                                _state.sent();
                                _this.accessibilityNodeCallback(accessibilityModel.axNodeForDOMNode(node));
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(AccessibilitySidebarView.prototype), "wasShown", this).call(this);
                // Pull down the latest date for this node.
                void this.doUpdate();
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.Events.AttrModified, this.onNodeChange, this, {
                    scoped: true
                });
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.Events.AttrRemoved, this.onNodeChange, this, {
                    scoped: true
                });
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.Events.CharacterDataModified, this.onNodeChange, this, {
                    scoped: true
                });
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.Events.ChildNodeCountUpdated, this.onNodeChange, this, {
                    scoped: true
                });
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().removeModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.Events.AttrModified, this.onNodeChange, this);
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().removeModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.Events.AttrRemoved, this.onNodeChange, this);
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().removeModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.Events.CharacterDataModified, this.onNodeChange, this);
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().removeModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.Events.ChildNodeCountUpdated, this.onNodeChange, this);
            }
        },
        {
            key: "pullNode",
            value: function pullNode() {
                if (this.skipNextPullNode) {
                    this.skipNextPullNode = false;
                    return;
                }
                this.setNode(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode));
            }
        },
        {
            key: "onNodeChange",
            value: function onNodeChange(event) {
                if (!this.node()) {
                    return;
                }
                var data = event.data;
                var node = _instanceof(data, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode) ? data : data.node;
                if (this.node() !== node) {
                    return;
                }
                this.update();
            }
        }
    ], [
        {
            key: "instance",
            value: function instance(opts) {
                if (!accessibilitySidebarViewInstance || (opts === null || opts === void 0 ? void 0 : opts.forceNew)) {
                    accessibilitySidebarViewInstance = new AccessibilitySidebarView(opts === null || opts === void 0 ? void 0 : opts.throttlingTimeout);
                }
                return accessibilitySidebarViewInstance;
            }
        }
    ]);
    return AccessibilitySidebarView;
} //# sourceMappingURL=AccessibilitySidebarView.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ThrottledWidget.ThrottledWidget);


}),

}]);