"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_emulation_InspectedPagePlaceholder_js"], {
"./panels/emulation/InspectedPagePlaceholder.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  InspectedPagePlaceholder: function() { return InspectedPagePlaceholder; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _inspectedPagePlaceholder_css_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspectedPagePlaceholder.css.legacy.js */ "./panels/emulation/inspectedPagePlaceholder.css.legacy.js");
// Copyright 2014 The Chromium Authors. All rights reserved.
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



var inspectedPagePlaceholderInstance;
var InspectedPagePlaceholder = /*#__PURE__*/ function(_Common_ObjectWrapper_eventMixin) {
    "use strict";
    _inherits(InspectedPagePlaceholder, _Common_ObjectWrapper_eventMixin);
    var _super = _create_super(InspectedPagePlaceholder);
    function InspectedPagePlaceholder() {
        _class_call_check(this, InspectedPagePlaceholder);
        var _this;
        _this = _super.call(this, true);
        _define_property(_assert_this_initialized(_this), "updateId", void 0);
        _this.registerRequiredCSS(_inspectedPagePlaceholder_css_legacy_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ZoomManager.ZoomManager.instance().addEventListener("ZoomChanged" /* UI.ZoomManager.Events.ZoomChanged */ , _this.onResize, _assert_this_initialized(_this));
        _this.restoreMinimumSize();
        return _this;
    }
    _create_class(InspectedPagePlaceholder, [
        {
            key: "onResize",
            value: function onResize() {
                if (this.updateId) {
                    this.element.window().cancelAnimationFrame(this.updateId);
                }
                this.updateId = this.element.window().requestAnimationFrame(this.update.bind(this, false));
            }
        },
        {
            key: "restoreMinimumSize",
            value: function restoreMinimumSize() {
                this.setMinimumSize(150, 150);
            }
        },
        {
            key: "clearMinimumSize",
            value: function clearMinimumSize() {
                this.setMinimumSize(1, 1);
            }
        },
        {
            key: "dipPageRect",
            value: function dipPageRect() {
                var zoomFactor = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ZoomManager.ZoomManager.instance().zoomFactor();
                var rect = this.element.getBoundingClientRect();
                var bodyRect = this.element.ownerDocument.body.getBoundingClientRect();
                var left = Math.max(rect.left * zoomFactor, bodyRect.left * zoomFactor);
                var top = Math.max(rect.top * zoomFactor, bodyRect.top * zoomFactor);
                var bottom = Math.min(rect.bottom * zoomFactor, bodyRect.bottom * zoomFactor);
                var right = Math.min(rect.right * zoomFactor, bodyRect.right * zoomFactor);
                return {
                    x: left,
                    y: top,
                    width: right - left,
                    height: bottom - top
                };
            }
        },
        {
            key: "update",
            value: function update(force) {
                delete this.updateId;
                var rect = this.dipPageRect();
                var bounds = {
                    x: Math.round(rect.x),
                    y: Math.round(rect.y),
                    height: Math.max(1, Math.round(rect.height)),
                    width: Math.max(1, Math.round(rect.width))
                };
                if (force) {
                    // Short term fix for Lighthouse interop.
                    --bounds.height;
                    this.dispatchEventToListeners("Update" /* Events.Update */ , bounds);
                    ++bounds.height;
                }
                this.dispatchEventToListeners("Update" /* Events.Update */ , bounds);
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    forceNew: null
                };
                var forceNew = opts.forceNew;
                if (!inspectedPagePlaceholderInstance || forceNew) {
                    inspectedPagePlaceholderInstance = new InspectedPagePlaceholder();
                }
                return inspectedPagePlaceholderInstance;
            }
        }
    ]);
    return InspectedPagePlaceholder;
} //# sourceMappingURL=InspectedPagePlaceholder.js.map
(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Widget.Widget));


}),
"./panels/emulation/inspectedPagePlaceholder.css.legacy.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    cssContent: "/*\n * Copyright 2016 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  background-color: var(--sys-color-cdt-base-container);\n}\n\n/*# sourceURL=inspectedPagePlaceholder.css */\n"
});


}),

}]);