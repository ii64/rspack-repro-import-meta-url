"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_srgb_overlay_SrgbOverlay_js"], {
"./ui/components/srgb_overlay/SrgbOverlay.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SrgbOverlay: function() { return SrgbOverlay; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _srgbOverlay_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./srgbOverlay.css.js */ "./ui/components/srgb_overlay/srgbOverlay.css.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
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
function _templateObject() {
    var data = _tagged_template_literal([
        '\n          <span class="label" style="right: ',
        'px">sRGB</span>\n          <svg>\n            <polyline points=',
        ' class="gamut-line" />\n          </svg>\n        '
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "devtools-spectrum-srgb-overlay"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}




var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__.RenderCoordinator.RenderCoordinator.instance();
var SRGB_LABEL_HEIGHT = 10;
var SRGB_LABEL_BOTTOM = 3;
var SRGB_TEXT_UPPER_POINT_FROM_BOTTOM = SRGB_LABEL_HEIGHT + SRGB_LABEL_BOTTOM;
var EPSILON = 0.001;
// TODO(crbug.com/1409892): Use `Color` class here for a better code (and not duplicate isInGamut logic here)
function isColorInSrgbGamut(hsv) {
    var rgba = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.hsva2rgba(_to_consumable_array(hsv).concat([
        1
    ]));
    var xyzd50 = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorConverter.ColorConverter.displayP3ToXyzd50(rgba[0], rgba[1], rgba[2]);
    var srgb = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorConverter.ColorConverter.xyzd50ToSrgb(xyzd50[0], xyzd50[1], xyzd50[2]);
    return srgb.every(function(val) {
        return val + EPSILON >= 0 && val - EPSILON <= 1;
    });
}
var _shadow = /*#__PURE__*/ new WeakMap(), _getLinePoints = /*#__PURE__*/ new WeakSet(), _closestPointAtHeight = /*#__PURE__*/ new WeakSet();
var SrgbOverlay = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(SrgbOverlay, HTMLElement1);
    var _super = _create_super(SrgbOverlay);
    function SrgbOverlay() {
        _class_call_check(this, SrgbOverlay);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _getLinePoints);
        _class_private_method_init(_assert_this_initialized(_this), _closestPointAtHeight);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_get(_this, _shadow).adoptedStyleSheets = [
            _srgbOverlay_css_js__WEBPACK_IMPORTED_MODULE_3__["default"]
        ];
        return _this;
    }
    _create_class(SrgbOverlay, [
        {
            key: "render",
            value: function render(param) {
                var _this = this;
                var hue = param.hue, width = param.width, height = param.height;
                return coordinator.write('Srgb Overlay render', function() {
                    var points = _class_private_method_get(_this, _getLinePoints, getLinePoints).call(_this, {
                        hue: hue,
                        width: width,
                        height: height
                    });
                    if (!points || points.length === 0) {
                        return;
                    }
                    var closestPoint = _class_private_method_get(_this, _closestPointAtHeight, closestPointAtHeight).call(_this, points, height - SRGB_TEXT_UPPER_POINT_FROM_BOTTOM);
                    if (!closestPoint) {
                        return;
                    }
                    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html(_templateObject(), width - closestPoint.x, points.map(function(point) {
                        return "".concat(point.x.toFixed(2), ",").concat(point.y.toFixed(2));
                    }).join(' ')), _class_private_field_get(_this, _shadow), {
                        host: _this
                    });
                });
            }
        }
    ]);
    return SrgbOverlay;
}(_wrap_native_super(HTMLElement));
_define_property(SrgbOverlay, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal(_templateObject1()));
function getLinePoints(param) {
    var hue = param.hue, width = param.width, height = param.height;
    if (width === 0 || height === 0) {
        return null;
    }
    var step = 1 / window.devicePixelRatio;
    var linePoints = [];
    var x = 0;
    for(var y = 0; y < height; y += step){
        var value = 1 - y / height;
        for(; x < width; x += step){
            var saturation = x / width;
            if (!isColorInSrgbGamut([
                hue,
                saturation,
                value
            ])) {
                linePoints.push({
                    x: x,
                    y: y
                });
                break;
            }
        }
    }
    if (linePoints.length === 0) {
        return null;
    }
    var lastPoint = linePoints[linePoints.length - 1];
    if (lastPoint.x < width) {
        linePoints.push({
            y: lastPoint.y,
            x: width
        });
    }
    return linePoints;
}
function closestPointAtHeight(points, atHeight) {
    var min = Infinity;
    var closestPoint = null;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = points[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var point = _step.value;
            if (Math.abs(atHeight - point.y) <= min) {
                min = Math.abs(atHeight - point.y);
                closestPoint = point;
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
    return closestPoint;
}
customElements.define('devtools-spectrum-srgb-overlay', SrgbOverlay); //# sourceMappingURL=SrgbOverlay.js.map


}),
"./ui/components/srgb_overlay/srgbOverlay.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2023 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.gamut-line {\n  /* We want to show 50% white color in all themes since this is drawn over a color rectangle */\n  stroke: color-mix(in sRGB, var(--ref-palette-neutral100) 50%, transparent); /* stylelint-disable-line plugin/use_theme_colors */\n  fill: none;\n}\n\n.label {\n  position: absolute;\n  bottom: 3px;\n  margin-right: 5px;\n  /* We want to show 50% white color in all themes since this is drawn over a color rectangle */\n  color: color-mix(in sRGB, var(--ref-palette-neutral100) 50%, transparent); /* stylelint-disable-line plugin/use_theme_colors */\n}\n\n/*# sourceURL=srgbOverlay.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);