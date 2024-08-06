"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_network_NetworkFrameGrouper_js"], {
"./panels/network/NetworkFrameGrouper.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  FrameGroupNode: function() { return FrameGroupNode; },
  NetworkFrameGrouper: function() { return NetworkFrameGrouper; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NetworkDataGridNode.js */ "./panels/network/NetworkDataGridNode.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
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





var NetworkFrameGrouper = /*#__PURE__*/ function() {
    "use strict";
    function NetworkFrameGrouper(parentView) {
        _class_call_check(this, NetworkFrameGrouper);
        _define_property(this, "parentView", void 0);
        _define_property(this, "activeGroups", void 0);
        this.parentView = parentView;
        this.activeGroups = new Map();
    }
    _create_class(NetworkFrameGrouper, [
        {
            key: "groupNodeForRequest",
            value: function groupNodeForRequest(request) {
                var frame = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel.frameForRequest(request);
                if (!frame || frame.isOutermostFrame()) {
                    return null;
                }
                var groupNode = this.activeGroups.get(frame);
                if (groupNode) {
                    return groupNode;
                }
                groupNode = new FrameGroupNode(this.parentView, frame);
                this.activeGroups.set(frame, groupNode);
                return groupNode;
            }
        },
        {
            key: "reset",
            value: function reset() {
                this.activeGroups.clear();
            }
        }
    ]);
    return NetworkFrameGrouper;
}();
var FrameGroupNode = /*#__PURE__*/ function(NetworkGroupNode) {
    "use strict";
    _inherits(FrameGroupNode, NetworkGroupNode);
    var _super = _create_super(FrameGroupNode);
    function FrameGroupNode(parentView, frame) {
        _class_call_check(this, FrameGroupNode);
        var _this;
        _this = _super.call(this, parentView);
        _define_property(_assert_this_initialized(_this), "frame", void 0);
        _this.frame = frame;
        return _this;
    }
    _create_class(FrameGroupNode, [
        {
            key: "displayName",
            value: function displayName() {
                return new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL(this.frame.url).domain() || this.frame.name || '<iframe>';
            }
        },
        {
            key: "renderCell",
            value: function renderCell(cell, columnId) {
                _get(_get_prototype_of(FrameGroupNode.prototype), "renderCell", this).call(this, cell, columnId);
                var columnIndex = this.dataGrid.indexOfVisibleColumn(columnId);
                if (columnIndex === 0) {
                    var name = this.displayName();
                    cell.appendChild(_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.create('frame', 'network-frame-group-icon'));
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextChild(cell, name);
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip.Tooltip.install(cell, name);
                    this.setCellAccessibleName(cell.textContent || '', cell, columnId);
                }
            }
        }
    ]);
    return FrameGroupNode;
} //# sourceMappingURL=NetworkFrameGrouper.js.map
(_NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_4__.NetworkGroupNode);


}),

}]);