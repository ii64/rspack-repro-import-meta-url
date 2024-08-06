"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_OpenFileQuickOpen_js"], {
"./panels/sources/OpenFileQuickOpen.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  OpenFileQuickOpen: function() { return OpenFileQuickOpen; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _panels_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../panels/utils/utils.js */ "./panels/utils/utils.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _FilteredUISourceCodeListProvider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FilteredUISourceCodeListProvider.js */ "./panels/sources/FilteredUISourceCodeListProvider.js");
/* harmony import */var _SourcesView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SourcesView.js */ "./panels/sources/SourcesView.js");
// Copyright 2012 The Chromium Authors. All rights reserved.
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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






var OpenFileQuickOpen = /*#__PURE__*/ function(FilteredUISourceCodeListProvider) {
    "use strict";
    _inherits(OpenFileQuickOpen, FilteredUISourceCodeListProvider);
    var _super = _create_super(OpenFileQuickOpen);
    function OpenFileQuickOpen() {
        _class_call_check(this, OpenFileQuickOpen);
        return _super.call(this, 'source-file');
    }
    _create_class(OpenFileQuickOpen, [
        {
            key: "attach",
            value: function attach() {
                this.setDefaultScores(_SourcesView_js__WEBPACK_IMPORTED_MODULE_5__.SourcesView.defaultUISourceCodeScores());
                _get(_get_prototype_of(OpenFileQuickOpen.prototype), "attach", this).call(this);
            }
        },
        {
            key: "uiSourceCodeSelected",
            value: function uiSourceCodeSelected(uiSourceCode, lineNumber, columnNumber) {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.SelectFileFromFilePicker);
                if (!uiSourceCode) {
                    return;
                }
                if (typeof lineNumber === 'number') {
                    void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(uiSourceCode.uiLocation(lineNumber, columnNumber));
                } else {
                    void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(uiSourceCode);
                }
            }
        },
        {
            key: "filterProject",
            value: function filterProject(project) {
                return !project.isServiceProject();
            }
        },
        {
            key: "renderItem",
            value: function renderItem(itemIndex, query, titleElement, subtitleElement) {
                var _titleElement_parentElement_parentElement, _titleElement_parentElement;
                _get(_get_prototype_of(OpenFileQuickOpen.prototype), "renderItem", this).call(this, itemIndex, query, titleElement, subtitleElement);
                var iconElement = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon();
                var iconData = _panels_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.PanelUtils.iconDataForResourceType(this.itemContentTypeAt(itemIndex));
                iconElement.data = _object_spread_props(_object_spread({}, iconData), {
                    width: '20px',
                    height: '20px'
                });
                (_titleElement_parentElement = titleElement.parentElement) === null || _titleElement_parentElement === void 0 ? void 0 : (_titleElement_parentElement_parentElement = _titleElement_parentElement.parentElement) === null || _titleElement_parentElement_parentElement === void 0 ? void 0 : _titleElement_parentElement_parentElement.insertBefore(iconElement, titleElement.parentElement);
            }
        },
        {
            key: "renderAsTwoRows",
            value: function renderAsTwoRows() {
                return true;
            }
        }
    ]);
    return OpenFileQuickOpen;
} //# sourceMappingURL=OpenFileQuickOpen.js.map
(_FilteredUISourceCodeListProvider_js__WEBPACK_IMPORTED_MODULE_4__.FilteredUISourceCodeListProvider);


}),

}]);