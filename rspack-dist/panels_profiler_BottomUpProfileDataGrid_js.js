"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_profiler_BottomUpProfileDataGrid_js"], {
"./panels/profiler/BottomUpProfileDataGrid.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BottomUpProfileDataGridNode: function() { return BottomUpProfileDataGridNode; },
  BottomUpProfileDataGridTree: function() { return BottomUpProfileDataGridTree; }
});
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _ProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileDataGrid.js */ "./panels/profiler/ProfileDataGrid.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * Copyright (C) 2009 280 North Inc. All Rights Reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE INC. ``AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE INC. OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ // Bottom Up Profiling shows the entire callstack backwards:
// The root node is a representation of each individual function called, and each child of that node represents
// a reverse-callstack showing how many of those calls came from it. So, unlike top-down, the statistics in
// each child still represent the root node. We have to be particularly careful of recursion with this mode
// because a root node can represent itself AND an ancestor.
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


var BottomUpProfileDataGridNode = /*#__PURE__*/ function(ProfileDataGridNode) {
    "use strict";
    _inherits(BottomUpProfileDataGridNode, ProfileDataGridNode);
    var _super = _create_super(BottomUpProfileDataGridNode);
    function BottomUpProfileDataGridNode(profileNode, owningTree) {
        _class_call_check(this, BottomUpProfileDataGridNode);
        var _this;
        _this = _super.call(this, profileNode, owningTree, profileNode.parent !== null && Boolean(profileNode.parent.parent));
        _define_property(_assert_this_initialized(_this), "remainingNodeInfos", void 0);
        _this.remainingNodeInfos = [];
        return _this;
    }
    _create_class(BottomUpProfileDataGridNode, [
        {
            key: "takePropertiesFromProfileDataGridNode",
            value: function takePropertiesFromProfileDataGridNode(profileDataGridNode) {
                this.save();
                this.self = profileDataGridNode.self;
                this.total = profileDataGridNode.total;
            }
        },
        {
            /**
     * When focusing, we keep just the members of the callstack.
     */ key: "keepOnlyChild",
            value: function keepOnlyChild(child) {
                this.save();
                this.removeChildren();
                this.appendChild(child);
            }
        },
        {
            key: "exclude",
            value: function exclude(aCallUID) {
                if (this.remainingNodeInfos) {
                    this.populate();
                }
                this.save();
                var children = this.children;
                var index = this.children.length;
                while(index--){
                    children[index].exclude(aCallUID);
                }
                var child = this.childrenByCallUID.get(aCallUID);
                if (child) {
                    this.merge(child, true);
                }
            }
        },
        {
            key: "restore",
            value: function restore() {
                _get(_get_prototype_of(BottomUpProfileDataGridNode.prototype), "restore", this).call(this);
                if (!this.children.length) {
                    this.setHasChildren(this.willHaveChildren(this.profileNode));
                }
            }
        },
        {
            key: "merge",
            value: function merge(child, shouldAbsorb) {
                this.self -= child.self;
                _get(_get_prototype_of(BottomUpProfileDataGridNode.prototype), "merge", this).call(this, child, shouldAbsorb);
            }
        },
        {
            key: "populateChildren",
            value: function populateChildren() {
                BottomUpProfileDataGridNode.sharedPopulate(this);
            }
        },
        {
            key: "willHaveChildren",
            value: function willHaveChildren(profileNode) {
                // In bottom up mode, our parents are our children since we display an inverted tree.
                // However, we don't want to show the very top parent since it is redundant.
                return Boolean(profileNode.parent && profileNode.parent.parent);
            }
        }
    ], [
        {
            key: "sharedPopulate",
            value: function sharedPopulate(container) {
                if (container.remainingNodeInfos === undefined) {
                    return;
                }
                var remainingNodeInfos = container.remainingNodeInfos;
                var count = remainingNodeInfos.length;
                for(var index = 0; index < count; ++index){
                    var nodeInfo = remainingNodeInfos[index];
                    var ancestor = nodeInfo.ancestor;
                    var focusNode = nodeInfo.focusNode;
                    var child = container.findChild(ancestor);
                    // If we already have this child, then merge the data together.
                    if (child) {
                        var totalAccountedFor = nodeInfo.totalAccountedFor;
                        child.self += focusNode.self;
                        if (!totalAccountedFor) {
                            child.total += focusNode.total;
                        }
                    } else {
                        child = new BottomUpProfileDataGridNode(ancestor, container.tree);
                        if (ancestor !== focusNode) {
                            // But the actual statistics from the "root" node (bottom of the callstack).
                            child.self = focusNode.self;
                            child.total = focusNode.total;
                        }
                        container.appendChild(child);
                    }
                    var parent = ancestor.parent;
                    if (parent && parent.parent) {
                        nodeInfo.ancestor = parent;
                        if (!child.remainingNodeInfos) {
                            child.remainingNodeInfos = [];
                        }
                        child.remainingNodeInfos.push(nodeInfo);
                    }
                }
                delete container.remainingNodeInfos;
            }
        }
    ]);
    return BottomUpProfileDataGridNode;
}(_ProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_1__.ProfileDataGridNode);
var BottomUpProfileDataGridTree = /*#__PURE__*/ function(ProfileDataGridTree) {
    "use strict";
    _inherits(BottomUpProfileDataGridTree, ProfileDataGridTree);
    var _super = _create_super(BottomUpProfileDataGridTree);
    function BottomUpProfileDataGridTree(formatter, searchableView, rootProfileNode, total) {
        _class_call_check(this, BottomUpProfileDataGridTree);
        var _this;
        _this = _super.call(this, formatter, searchableView, total);
        _define_property(_assert_this_initialized(_this), "deepSearch", void 0);
        _define_property(_assert_this_initialized(_this), "remainingNodeInfos", void 0);
        _this.deepSearch = false;
        // Iterate each node in pre-order.
        var profileNodeUIDs = 0;
        var profileNodeGroups = [
            [],
            [
                rootProfileNode
            ]
        ];
        var visitedProfileNodesForCallUID = new Map();
        _this.remainingNodeInfos = [];
        for(var profileNodeGroupIndex = 0; profileNodeGroupIndex < profileNodeGroups.length; ++profileNodeGroupIndex){
            var parentProfileNodes = profileNodeGroups[profileNodeGroupIndex];
            var profileNodes = profileNodeGroups[++profileNodeGroupIndex];
            var count = profileNodes.length;
            var profileNodeUIDValues = new WeakMap();
            for(var index = 0; index < count; ++index){
                var profileNode = profileNodes[index];
                if (!profileNodeUIDValues.get(profileNode)) {
                    profileNodeUIDValues.set(profileNode, ++profileNodeUIDs);
                }
                if (profileNode.parent) {
                    // The total time of this ancestor is accounted for if we're in any form of recursive cycle.
                    var visitedNodes = visitedProfileNodesForCallUID.get(profileNode.callUID);
                    var totalAccountedFor = false;
                    if (!visitedNodes) {
                        visitedNodes = new Set();
                        visitedProfileNodesForCallUID.set(profileNode.callUID, visitedNodes);
                    } else {
                        // The total time for this node has already been accounted for iff one of it's parents has already been visited.
                        // We can do this check in this style because we are traversing the tree in pre-order.
                        var parentCount = parentProfileNodes.length;
                        for(var parentIndex = 0; parentIndex < parentCount; ++parentIndex){
                            var parentUID = profileNodeUIDValues.get(parentProfileNodes[parentIndex]);
                            if (parentUID && visitedNodes.has(parentUID)) {
                                totalAccountedFor = true;
                                break;
                            }
                        }
                    }
                    var uid = profileNodeUIDValues.get(profileNode);
                    if (uid) {
                        visitedNodes.add(uid);
                    }
                    _this.remainingNodeInfos.push({
                        ancestor: profileNode,
                        focusNode: profileNode,
                        totalAccountedFor: totalAccountedFor
                    });
                }
                var children = profileNode.children;
                if (children.length) {
                    profileNodeGroups.push(parentProfileNodes.concat([
                        profileNode
                    ]));
                    profileNodeGroups.push(children);
                }
            }
        }
        // Populate the top level nodes.
        _ProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_1__.ProfileDataGridNode.populate(_assert_this_initialized(_this));
        return _possible_constructor_return(_this, _assert_this_initialized(_this));
    }
    _create_class(BottomUpProfileDataGridTree, [
        {
            /**
     * When focusing, we keep the entire callstack up to this ancestor.
     */ key: "focus",
            value: function focus(profileDataGridNode) {
                if (!profileDataGridNode) {
                    return;
                }
                this.save();
                var currentNode = profileDataGridNode;
                var focusNode = profileDataGridNode;
                while(currentNode.parent && _instanceof(currentNode, BottomUpProfileDataGridNode)){
                    currentNode.takePropertiesFromProfileDataGridNode(profileDataGridNode);
                    focusNode = currentNode;
                    currentNode = currentNode.parent;
                    if (_instanceof(currentNode, BottomUpProfileDataGridNode)) {
                        currentNode.keepOnlyChild(focusNode);
                    }
                }
                this.children = [
                    focusNode
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
                var excludedCallUID = profileDataGridNode.callUID;
                var excludedTopLevelChild = this.childrenByCallUID.get(excludedCallUID);
                // If we have a top level node that is excluded, get rid of it completely (not keeping children),
                // since bottom up data relies entirely on the root node.
                if (excludedTopLevelChild) {
                    _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.removeElement(this.children, excludedTopLevelChild);
                }
                var children = this.children;
                var count = children.length;
                for(var index = 0; index < count; ++index){
                    children[index].exclude(excludedCallUID);
                }
                if (this.lastComparator) {
                    this.sort(this.lastComparator, true);
                }
            }
        },
        {
            key: "populateChildren",
            value: function populateChildren() {
                BottomUpProfileDataGridNode.sharedPopulate(this);
            }
        }
    ]);
    return BottomUpProfileDataGridTree;
} //# sourceMappingURL=BottomUpProfileDataGrid.js.map
(_ProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_1__.ProfileDataGridTree);


}),

}]);