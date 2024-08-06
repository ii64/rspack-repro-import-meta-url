"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_profiler_TopDownProfileDataGrid_js"], {
"./panels/profiler/TopDownProfileDataGrid.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TopDownProfileDataGridNode: function() { return TopDownProfileDataGridNode; },
  TopDownProfileDataGridTree: function() { return TopDownProfileDataGridTree; }
});
/* harmony import */var _ProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileDataGrid.js */ "./panels/profiler/ProfileDataGrid.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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

var TopDownProfileDataGridNode = /*#__PURE__*/ function(ProfileDataGridNode1) {
    "use strict";
    _inherits(TopDownProfileDataGridNode, ProfileDataGridNode1);
    var _super = _create_super(TopDownProfileDataGridNode);
    function TopDownProfileDataGridNode(profileNode, owningTree) {
        _class_call_check(this, TopDownProfileDataGridNode);
        var _this;
        var hasChildren = Boolean(profileNode.children && profileNode.children.length);
        _this = _super.call(this, profileNode, owningTree, hasChildren);
        _define_property(_assert_this_initialized(_this), "remainingChildren", void 0);
        _this.remainingChildren = profileNode.children;
        return _this;
    }
    _create_class(TopDownProfileDataGridNode, [
        {
            key: "populateChildren",
            value: function populateChildren() {
                TopDownProfileDataGridNode.sharedPopulate(this);
            }
        }
    ], [
        {
            key: "sharedPopulate",
            value: function sharedPopulate(container) {
                var children = container.remainingChildren;
                var childrenLength = children.length;
                for(var i = 0; i < childrenLength; ++i){
                    container.appendChild(new TopDownProfileDataGridNode(children[i], container.tree));
                }
                container.remainingChildren = [];
            }
        },
        {
            key: "excludeRecursively",
            value: function excludeRecursively(container, aCallUID) {
                if (container.remainingChildren.length > 0) {
                    container.populate();
                }
                container.save();
                var children = container.children;
                var index = container.children.length;
                while(index--){
                    TopDownProfileDataGridNode.excludeRecursively(children[index], aCallUID);
                }
                var child = container.childrenByCallUID.get(aCallUID);
                if (child) {
                    _ProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_0__.ProfileDataGridNode.merge(container, child, true);
                }
            }
        }
    ]);
    return TopDownProfileDataGridNode;
}(_ProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_0__.ProfileDataGridNode);
var TopDownProfileDataGridTree = /*#__PURE__*/ function(ProfileDataGridTree) {
    "use strict";
    _inherits(TopDownProfileDataGridTree, ProfileDataGridTree);
    var _super = _create_super(TopDownProfileDataGridTree);
    function TopDownProfileDataGridTree(formatter, searchableView, rootProfileNode, total) {
        _class_call_check(this, TopDownProfileDataGridTree);
        var _this;
        _this = _super.call(this, formatter, searchableView, total);
        _define_property(_assert_this_initialized(_this), "remainingChildren", void 0);
        _this.remainingChildren = rootProfileNode.children;
        _ProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_0__.ProfileDataGridNode.populate(_assert_this_initialized(_this));
        return _this;
    }
    _create_class(TopDownProfileDataGridTree, [
        {
            key: "focus",
            value: function focus(profileDataGridNode) {
                if (!profileDataGridNode) {
                    return;
                }
                this.save();
                profileDataGridNode.savePosition();
                this.children = [
                    profileDataGridNode
                ];
                this.total = profileDataGridNode.total;
            }
        },
        {
            key: "exclude",
            value: function exclude(profileDataGridNode) {
                if (!profileDataGridNode) {
                    return;
                }
                this.save();
                TopDownProfileDataGridNode.excludeRecursively(this, profileDataGridNode.callUID);
                if (this.lastComparator) {
                    this.sort(this.lastComparator, true);
                }
            }
        },
        {
            key: "restore",
            value: function restore() {
                if (!this.savedChildren) {
                    return;
                }
                this.children[0].restorePosition();
                _get(_get_prototype_of(TopDownProfileDataGridTree.prototype), "restore", this).call(this);
            }
        },
        {
            key: "populateChildren",
            value: function populateChildren() {
                TopDownProfileDataGridNode.sharedPopulate(this);
            }
        }
    ]);
    return TopDownProfileDataGridTree;
} //# sourceMappingURL=TopDownProfileDataGrid.js.map
(_ProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_0__.ProfileDataGridTree);


}),

}]);