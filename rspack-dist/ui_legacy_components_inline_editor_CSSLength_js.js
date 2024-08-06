"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_inline_editor_CSSLength_js"], {
"./ui/legacy/components/inline_editor/CSSLength.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CSSLength: function() { return CSSLength; },
  DraggingFinishedEvent: function() { return DraggingFinishedEvent; }
});
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _cssLength_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cssLength.css.js */ "./ui/legacy/components/inline_editor/cssLength.css.js");
/* harmony import */var _CSSLengthUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CSSLengthUtils.js */ "./ui/legacy/components/inline_editor/CSSLengthUtils.js");
/* harmony import */var _InlineEditorUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InlineEditorUtils.js */ "./ui/legacy/components/inline_editor/InlineEditorUtils.js");
// Copyright (c) 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
        "\n      <div class=",
        ">\n        ",
        "\n      </div>\n    "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "<slot></slot>"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        '\n        <span class="value"\n          @mousedown=',
        "\n          @mouseup=",
        "\n        >",
        "</span>",
        "\n      "
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "devtools-css-length"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}





var render = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.render, html = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html, classMap = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.Directives.classMap;
var DraggingFinishedEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(DraggingFinishedEvent, Event1);
    var _super = _create_super(DraggingFinishedEvent);
    function DraggingFinishedEvent() {
        _class_call_check(this, DraggingFinishedEvent);
        return _super.call(this, DraggingFinishedEvent.eventName, {});
    }
    return DraggingFinishedEvent;
}(_wrap_native_super(Event));
_define_property(DraggingFinishedEvent, "eventName", 'draggingfinished');
var DefaultLength = {
    value: 0,
    unit: "px" /* LengthUnit.PIXEL */ 
};
var _valueMousedownTime = /*#__PURE__*/ new WeakMap();
var CSSLength = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(CSSLength, HTMLElement1);
    var _super = _create_super(CSSLength);
    function CSSLength() {
        _class_call_check(this, CSSLength);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "shadow", _this.attachShadow({
            mode: 'open'
        }));
        _define_property(_assert_this_initialized(_this), "onDraggingValue", _this.dragValue.bind(_assert_this_initialized(_this)));
        _define_property(_assert_this_initialized(_this), "length", DefaultLength);
        _define_property(_assert_this_initialized(_this), "overloaded", false);
        _define_property(_assert_this_initialized(_this), "isEditingSlot", false);
        _define_property(_assert_this_initialized(_this), "isDraggingValue", false);
        _define_property(_assert_this_initialized(_this), "currentMouseClientX", 0);
        _class_private_field_init(_assert_this_initialized(_this), _valueMousedownTime, {
            writable: true,
            value: 0
        });
        return _this;
    }
    _create_class(CSSLength, [
        {
            key: "data",
            set: function set(data) {
                var parsedResult = (0,_CSSLengthUtils_js__WEBPACK_IMPORTED_MODULE_3__.parseText)(data.lengthText);
                if (!parsedResult) {
                    return;
                }
                this.length = parsedResult;
                this.overloaded = data.overloaded;
                this.render();
            }
        },
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                this.shadow.adoptedStyleSheets = [
                    _cssLength_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]
                ];
            }
        },
        {
            key: "dragValue",
            value: function dragValue(event) {
                event.preventDefault();
                event.stopPropagation();
                if (Date.now() - _class_private_field_get(this, _valueMousedownTime) <= 300) {
                    // Delay drag callback by 300ms to prioritize click over drag.
                    return;
                }
                this.isDraggingValue = true;
                var displacement = event.clientX - this.currentMouseClientX;
                this.currentMouseClientX = event.clientX;
                if (event.shiftKey) {
                    displacement *= 10;
                }
                if (event.altKey) {
                    displacement *= 0.1;
                }
                this.length.value = this.length.value + displacement;
                this.dispatchEvent(new _InlineEditorUtils_js__WEBPACK_IMPORTED_MODULE_4__.ValueChangedEvent("".concat(this.length.value).concat(this.length.unit)));
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.swatchActivated(8 /* Host.UserMetrics.SwatchType.Length */ );
                this.render();
            }
        },
        {
            key: "onValueMousedown",
            value: function onValueMousedown(event) {
                var _this = this;
                if (event.button !== 0) {
                    return;
                }
                _class_private_field_set(this, _valueMousedownTime, Date.now());
                this.currentMouseClientX = event.clientX;
                var targetDocument = _instanceof(event.target, Node) && event.target.ownerDocument;
                if (targetDocument) {
                    targetDocument.addEventListener('mousemove', this.onDraggingValue, {
                        capture: true
                    });
                    targetDocument.addEventListener('mouseup', function(event) {
                        targetDocument.removeEventListener('mousemove', _this.onDraggingValue, {
                            capture: true
                        });
                        if (!_this.isDraggingValue) {
                            return;
                        }
                        event.preventDefault();
                        event.stopPropagation();
                        _this.isDraggingValue = false;
                        _this.dispatchEvent(new DraggingFinishedEvent());
                    }, {
                        once: true,
                        capture: true
                    });
                }
            }
        },
        {
            key: "onValueMouseup",
            value: function onValueMouseup() {
                if (!this.isDraggingValue) {
                    this.isEditingSlot = true;
                    this.render();
                }
            }
        },
        {
            key: "render",
            value: function render1() {
                var classes = {
                    'css-length': true,
                    'overloaded': this.overloaded
                };
                // Disabled until https://crbug.com/1079231 is fixed.
                // clang-format off
                render(html(_templateObject(), classMap(classes), this.renderContent()), this.shadow, {
                    host: this
                });
            // clang-format on
            }
        },
        {
            key: "renderContent",
            value: function renderContent() {
                if (this.isEditingSlot) {
                    return html(_templateObject1());
                }
                // Disabled until https://crbug.com/1079231 is fixed.
                // clang-format off
                return html(_templateObject2(), this.onValueMousedown, this.onValueMouseup, this.length.value, this.length.unit);
            // clang-format on
            }
        }
    ]);
    return CSSLength;
}(_wrap_native_super(HTMLElement));
_define_property(CSSLength, "litTagName", _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal(_templateObject3()));
customElements.define('devtools-css-length', CSSLength); //# sourceMappingURL=CSSLength.js.map


}),
"./ui/legacy/components/inline_editor/CSSLengthUtils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CSSLengthRegex: function() { return CSSLengthRegex; },
  LENGTH_UNITS: function() { return LENGTH_UNITS; },
  parseText: function() { return parseText; }
});
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var LENGTH_UNITS = [
    "px" /* LengthUnit.PIXEL */ ,
    "cm" /* LengthUnit.CENTIMETER */ ,
    "mm" /* LengthUnit.MILLIMETER */ ,
    "Q" /* LengthUnit.QUARTERMILLIMETER */ ,
    "in" /* LengthUnit.INCH */ ,
    "pc" /* LengthUnit.PICA */ ,
    "pt" /* LengthUnit.POINT */ ,
    "cap" /* LengthUnit.CAP */ ,
    "ch" /* LengthUnit.CH */ ,
    "em" /* LengthUnit.EM */ ,
    "ex" /* LengthUnit.EX */ ,
    "ic" /* LengthUnit.IC */ ,
    "lh" /* LengthUnit.LH */ ,
    "rcap" /* LengthUnit.RCAP */ ,
    "rch" /* LengthUnit.RCH */ ,
    "rem" /* LengthUnit.REM */ ,
    "rex" /* LengthUnit.REX */ ,
    "ric" /* LengthUnit.RIC */ ,
    "rlh" /* LengthUnit.RLH */ ,
    "vb" /* LengthUnit.VB */ ,
    "vh" /* LengthUnit.VH */ ,
    "vi" /* LengthUnit.VI */ ,
    "vw" /* LengthUnit.VW */ ,
    "vmin" /* LengthUnit.VMIN */ ,
    "vmax" /* LengthUnit.VMAX */ 
];
var CSSLengthRegex = new RegExp("(?<value>[+-]?\\d*\\.?\\d+)(?<unit>".concat(LENGTH_UNITS.join('|'), ")"));
var parseText = function(text) {
    var result = text.match(CSSLengthRegex);
    if (!result || !result.groups) {
        return null;
    }
    return {
        value: Number(result.groups.value),
        unit: result.groups.unit
    };
}; //# sourceMappingURL=CSSLengthUtils.js.map


}),
"./ui/legacy/components/inline_editor/cssLength.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.css-length {\n  display: inline-block;\n  position: relative;\n  outline: none;\n}\n\n.css-length.overloaded {\n  text-decoration: line-through;\n}\n\n.value {\n  cursor: ew-resize;\n}\n\n.icon {\n  position: absolute;\n  display: inline-block;\n  mask-image: var(--image-file-chevron-down);\n  mask-repeat: no-repeat;\n  background-color: var(--icon-default);\n  transform: scale(0.7);\n  margin-left: -7px;\n  margin-top: -3px;\n  content: "";\n  height: 2em;\n  width: 2em;\n}\n\n:host(:not(:last-child)) {\n  margin-right: 0.1em;\n}\n\n/*# sourceURL=cssLength.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);