"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_PreloadingTreeElement_d_ts"], {
"./panels/application/ApplicationPanelTreeElement.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ApplicationPanelTreeElement: function() { return ApplicationPanelTreeElement; },
  ExpandableApplicationPanelTreeElement: function() { return ExpandableApplicationPanelTreeElement; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
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


var ApplicationPanelTreeElement = /*#__PURE__*/ function(_UI_TreeOutline_TreeElement) {
    "use strict";
    _inherits(ApplicationPanelTreeElement, _UI_TreeOutline_TreeElement);
    var _super = _create_super(ApplicationPanelTreeElement);
    function ApplicationPanelTreeElement(resourcesPanel, title, expandable, jslogContext) {
        _class_call_check(this, ApplicationPanelTreeElement);
        var _this;
        _this = _super.call(this, title, expandable, jslogContext);
        _define_property(_assert_this_initialized(_this), "resourcesPanel", void 0);
        _this.resourcesPanel = resourcesPanel;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.setLabel(_this.listItemElement, title);
        _this.listItemElement.tabIndex = -1;
        return _this;
    }
    _create_class(ApplicationPanelTreeElement, [
        {
            key: "deselect",
            value: function deselect() {
                _get(_get_prototype_of(ApplicationPanelTreeElement.prototype), "deselect", this).call(this);
                this.listItemElement.tabIndex = -1;
            }
        },
        {
            key: "itemURL",
            get: function get() {
                throw new Error('Unimplemented Method');
            }
        },
        {
            key: "onselect",
            value: function onselect(selectedByUser) {
                if (!selectedByUser) {
                    return false;
                }
                var path = [];
                for(var el = this; el; el = el.parent){
                    var url = _instanceof(el, ApplicationPanelTreeElement) && el.itemURL;
                    if (!url) {
                        break;
                    }
                    path.push(url);
                }
                this.resourcesPanel.setLastSelectedItemPath(path);
                return false;
            }
        },
        {
            key: "showView",
            value: function showView(view) {
                this.resourcesPanel.showView(view);
            }
        }
    ]);
    return ApplicationPanelTreeElement;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.TreeOutline.TreeElement);
var ExpandableApplicationPanelTreeElement = /*#__PURE__*/ function(ApplicationPanelTreeElement) {
    "use strict";
    _inherits(ExpandableApplicationPanelTreeElement, ApplicationPanelTreeElement);
    var _super = _create_super(ExpandableApplicationPanelTreeElement);
    function ExpandableApplicationPanelTreeElement(resourcesPanel, categoryName, settingsKey) {
        var settingsDefault = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
        _class_call_check(this, ExpandableApplicationPanelTreeElement);
        var _this;
        _this = _super.call(this, resourcesPanel, categoryName, false, settingsKey);
        _define_property(_assert_this_initialized(_this), "expandedSetting", void 0);
        _define_property(_assert_this_initialized(_this), "categoryName", void 0);
        _define_property(_assert_this_initialized(_this), "categoryLink", void 0);
        _this.expandedSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('resources-' + settingsKey + '-expanded', settingsDefault);
        _this.categoryName = categoryName;
        _this.categoryLink = null;
        return _this;
    }
    _create_class(ExpandableApplicationPanelTreeElement, [
        {
            key: "itemURL",
            get: function get() {
                return 'category://' + this.categoryName;
            }
        },
        {
            key: "setLink",
            value: function setLink(link) {
                this.categoryLink = link;
            }
        },
        {
            key: "onselect",
            value: function onselect(selectedByUser) {
                _get(_get_prototype_of(ExpandableApplicationPanelTreeElement.prototype), "onselect", this).call(this, selectedByUser);
                this.resourcesPanel.showCategoryView(this.categoryName, this.categoryLink);
                return false;
            }
        },
        {
            key: "onattach",
            value: function onattach() {
                _get(_get_prototype_of(ExpandableApplicationPanelTreeElement.prototype), "onattach", this).call(this);
                if (this.expandedSetting.get()) {
                    this.expand();
                }
            }
        },
        {
            key: "onexpand",
            value: function onexpand() {
                this.expandedSetting.set(true);
            }
        },
        {
            key: "oncollapse",
            value: function oncollapse() {
                this.expandedSetting.set(false);
            }
        }
    ]);
    return ExpandableApplicationPanelTreeElement;
} //# sourceMappingURL=ApplicationPanelTreeElement.js.map
(ApplicationPanelTreeElement);


}),
"./panels/application/PreloadingTreeElement.d.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApplicationPanelTreeElement.js */ "./panels/application/ApplicationPanelTreeElement.js");



}),

}]);