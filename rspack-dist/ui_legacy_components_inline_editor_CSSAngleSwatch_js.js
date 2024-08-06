"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_inline_editor_CSSAngleSwatch_js"], {
"./ui/legacy/components/inline_editor/CSSAngleSwatch.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CSSAngleSwatch: function() { return CSSAngleSwatch; }
});
/* harmony import */var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _cssAngleSwatch_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cssAngleSwatch.css.js */ "./ui/legacy/components/inline_editor/cssAngleSwatch.css.js");
/* harmony import */var _CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CSSAngleUtils.js */ "./ui/legacy/components/inline_editor/CSSAngleUtils.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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
        '\n      <div class="swatch">\n        <span class="mini-hand" style=',
        "></span>\n      </div>\n    "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "devtools-css-angle-swatch"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}



var render = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render, html = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html;
var styleMap = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Directives.styleMap;
var swatchWidth = 11;
var CSSAngleSwatch = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(CSSAngleSwatch, HTMLElement1);
    var _super = _create_super(CSSAngleSwatch);
    function CSSAngleSwatch() {
        _class_call_check(this, CSSAngleSwatch);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "shadow", _this.attachShadow({
            mode: 'open'
        }));
        _define_property(_assert_this_initialized(_this), "angle", {
            value: 0,
            unit: "rad" /* AngleUnit.Rad */ 
        });
        return _this;
    }
    _create_class(CSSAngleSwatch, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                this.shadow.adoptedStyleSheets = [
                    _cssAngleSwatch_css_js__WEBPACK_IMPORTED_MODULE_1__["default"]
                ];
            }
        },
        {
            key: "data",
            set: function set(data) {
                this.angle = data.angle;
                this.render();
            }
        },
        {
            key: "render",
            value: function render1() {
                var _get2DTranslationsForAngle = (0,_CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_2__.get2DTranslationsForAngle)(this.angle, swatchWidth / 4), translateX = _get2DTranslationsForAngle.translateX, translateY = _get2DTranslationsForAngle.translateY;
                var miniHandStyle = {
                    transform: "translate(".concat(translateX, "px, ").concat(translateY, "px) rotate(").concat(this.angle.value).concat(this.angle.unit, ")")
                };
                // Disabled until https://crbug.com/1079231 is fixed.
                // clang-format off
                render(html(_templateObject(), styleMap(miniHandStyle)), this.shadow, {
                    host: this
                });
            // clang-format on
            }
        }
    ]);
    return CSSAngleSwatch;
}(_wrap_native_super(HTMLElement));
_define_property(CSSAngleSwatch, "litTagName", _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal(_templateObject1()));
customElements.define('devtools-css-angle-swatch', CSSAngleSwatch); //# sourceMappingURL=CSSAngleSwatch.js.map


}),
"./ui/legacy/components/inline_editor/CSSAngleUtils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CSSAngleRegex: function() { return CSSAngleRegex; },
  convertAngleUnit: function() { return convertAngleUnit; },
  get2DTranslationsForAngle: function() { return get2DTranslationsForAngle; },
  getAngleFromRadians: function() { return getAngleFromRadians; },
  getNewAngleFromEvent: function() { return getNewAngleFromEvent; },
  getNextUnit: function() { return getNextUnit; },
  getRadiansFromAngle: function() { return getRadiansFromAngle; },
  parseText: function() { return parseText; },
  roundAngleByUnit: function() { return roundAngleByUnit; }
});
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


var CSSAngleRegex = RegExp("(?<value>[+-]?\\d*\\.?\\d+)(?<unit>deg|grad|rad|turn)");
var parseText = function(text) {
    var result = text.match(CSSAngleRegex);
    if (!result || !result.groups) {
        return null;
    }
    return {
        value: Number(result.groups.value),
        unit: result.groups.unit
    };
};
var getAngleFromRadians = function(rad, targetUnit) {
    var value = rad;
    switch(targetUnit){
        case "grad" /* AngleUnit.Grad */ :
            value = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Geometry.radiansToGradians(rad);
            break;
        case "deg" /* AngleUnit.Deg */ :
            value = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Geometry.radiansToDegrees(rad);
            break;
        case "turn" /* AngleUnit.Turn */ :
            value = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Geometry.radiansToTurns(rad);
            break;
    }
    return {
        value: value,
        unit: targetUnit
    };
};
var getRadiansFromAngle = function(angle) {
    switch(angle.unit){
        case "deg" /* AngleUnit.Deg */ :
            return _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Geometry.degreesToRadians(angle.value);
        case "grad" /* AngleUnit.Grad */ :
            return _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Geometry.gradiansToRadians(angle.value);
        case "turn" /* AngleUnit.Turn */ :
            return _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Geometry.turnsToRadians(angle.value);
    }
    return angle.value;
};
var get2DTranslationsForAngle = function(angle, radius) {
    var radian = getRadiansFromAngle(angle);
    return {
        translateX: Math.sin(radian) * radius,
        translateY: -Math.cos(radian) * radius
    };
};
var roundAngleByUnit = function(angle) {
    var roundedValue = angle.value;
    switch(angle.unit){
        case "deg" /* AngleUnit.Deg */ :
        case "grad" /* AngleUnit.Grad */ :
            // Round to nearest whole unit.
            roundedValue = Math.round(angle.value);
            break;
        case "rad" /* AngleUnit.Rad */ :
            // Allow up to 4 decimals.
            roundedValue = Math.round(angle.value * 10000) / 10000;
            break;
        case "turn" /* AngleUnit.Turn */ :
            // Allow up to 2 decimals.
            roundedValue = Math.round(angle.value * 100) / 100;
            break;
        default:
            _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.assertNever(angle.unit, "Unknown angle unit: ".concat(angle.unit));
    }
    return {
        value: roundedValue,
        unit: angle.unit
    };
};
var getNextUnit = function(currentUnit) {
    switch(currentUnit){
        case "deg" /* AngleUnit.Deg */ :
            return "grad" /* AngleUnit.Grad */ ;
        case "grad" /* AngleUnit.Grad */ :
            return "rad" /* AngleUnit.Rad */ ;
        case "rad" /* AngleUnit.Rad */ :
            return "turn" /* AngleUnit.Turn */ ;
        default:
            return "deg" /* AngleUnit.Deg */ ;
    }
};
var convertAngleUnit = function(angle, newUnit) {
    if (angle.unit === newUnit) {
        return angle;
    }
    var radian = getRadiansFromAngle(angle);
    return getAngleFromRadians(radian, newUnit);
};
var getNewAngleFromEvent = function(angle, event) {
    var direction = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.getValueModificationDirection(event);
    if (direction === null) {
        return;
    }
    var diff = direction === 'Up' ? Math.PI / 180 : -Math.PI / 180;
    if (event.shiftKey) {
        diff *= 10;
    }
    var radian = getRadiansFromAngle(angle);
    return getAngleFromRadians(radian + diff, angle.unit);
}; //# sourceMappingURL=CSSAngleUtils.js.map


}),
"./ui/legacy/components/inline_editor/cssAngleSwatch.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.swatch {\n  position: relative;\n  display: inline-block;\n  margin-bottom: -2px;\n  width: 1em;\n  height: 1em;\n  border: 1px solid var(--sys-color-neutral-outline);\n  border-radius: 50%;\n  overflow: hidden;\n  cursor: pointer;\n  background-color: var(--sys-color-neutral-container);\n}\n\n.mini-hand {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 55%;\n  width: 2px;\n  background-color: var(--sys-color-tonal-container);\n  border-radius: 5px;\n}\n\n/*# sourceURL=cssAngleSwatch.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);