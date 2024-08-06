"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_inline_editor_CSSAngle_js"], {
"./ui/legacy/components/inline_editor/CSSAngle.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CSSAngle: function() { return CSSAngle; },
  PopoverToggledEvent: function() { return PopoverToggledEvent; },
  UnitChangedEvent: function() { return UnitChangedEvent; }
});
/* harmony import */var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _cssAngle_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cssAngle.css.js */ "./ui/legacy/components/inline_editor/cssAngle.css.js");
/* harmony import */var _CSSAngleEditor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CSSAngleEditor.js */ "./ui/legacy/components/inline_editor/CSSAngleEditor.js");
/* harmony import */var _CSSAngleSwatch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CSSAngleSwatch.js */ "./ui/legacy/components/inline_editor/CSSAngleSwatch.js");
/* harmony import */var _CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CSSAngleUtils.js */ "./ui/legacy/components/inline_editor/CSSAngleUtils.js");
/* harmony import */var _InlineEditorUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InlineEditorUtils.js */ "./ui/legacy/components/inline_editor/InlineEditorUtils.js");
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
        '\n      <div class="css-angle" @focusout=',
        " @keydown=",
        ' tabindex="-1">\n        <div class="preview">\n          <',
        "\n            @click=",
        "\n            @mousedown=",
        "\n            @dblclick=",
        "\n            .data=",
        ">\n          </",
        "><slot></slot></div>\n        ",
        "\n      </div>\n    "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n    <",
        '\n      class="popover popover-css-angle"\n      style=',
        "\n      .data=",
        "\n    ></",
        ">\n    "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "devtools-css-angle"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}






var render = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render, html = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html;
var styleMap = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Directives.styleMap;
var PopoverToggledEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(PopoverToggledEvent, Event1);
    var _super = _create_super(PopoverToggledEvent);
    function PopoverToggledEvent(open) {
        _class_call_check(this, PopoverToggledEvent);
        var _this;
        _this = _super.call(this, PopoverToggledEvent.eventName, {});
        _define_property(_assert_this_initialized(_this), "data", void 0);
        _this.data = {
            open: open
        };
        return _this;
    }
    return PopoverToggledEvent;
}(_wrap_native_super(Event));
_define_property(PopoverToggledEvent, "eventName", 'popovertoggled');
var UnitChangedEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(UnitChangedEvent, Event1);
    var _super = _create_super(UnitChangedEvent);
    function UnitChangedEvent(value) {
        _class_call_check(this, UnitChangedEvent);
        var _this;
        _this = _super.call(this, UnitChangedEvent.eventName, {});
        _define_property(_assert_this_initialized(_this), "data", void 0);
        _this.data = {
            value: value
        };
        return _this;
    }
    return UnitChangedEvent;
}(_wrap_native_super(Event));
_define_property(UnitChangedEvent, "eventName", 'unitchanged');
var DefaultAngle = {
    value: 0,
    unit: "rad" /* AngleUnit.Rad */ 
};
var CSSAngle = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(CSSAngle, HTMLElement1);
    var _super = _create_super(CSSAngle);
    function CSSAngle() {
        _class_call_check(this, CSSAngle);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "shadow", _this.attachShadow({
            mode: 'open'
        }));
        _define_property(_assert_this_initialized(_this), "angle", DefaultAngle);
        _define_property(_assert_this_initialized(_this), "displayedAngle", DefaultAngle);
        _define_property(_assert_this_initialized(_this), "propertyValue", '');
        _define_property(_assert_this_initialized(_this), "containingPane", void 0);
        _define_property(_assert_this_initialized(_this), "angleElement", null);
        _define_property(_assert_this_initialized(_this), "swatchElement", null);
        _define_property(_assert_this_initialized(_this), "popoverOpen", false);
        _define_property(_assert_this_initialized(_this), "popoverStyleTop", '');
        _define_property(_assert_this_initialized(_this), "popoverStyleLeft", '');
        _define_property(_assert_this_initialized(_this), "onMinifyingAction", _this.minify.bind(_assert_this_initialized(_this)));
        return _this;
    }
    _create_class(CSSAngle, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                this.shadow.adoptedStyleSheets = [
                    _cssAngle_css_js__WEBPACK_IMPORTED_MODULE_1__["default"]
                ];
            }
        },
        {
            key: "data",
            set: function set(data) {
                var parsedResult = (0,_CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_4__.parseText)(data.angleText);
                if (!parsedResult) {
                    return;
                }
                this.angle = parsedResult;
                this.displayedAngle = _object_spread({}, parsedResult);
                this.containingPane = data.containingPane;
                this.render();
            }
        },
        {
            key: "disconnectedCallback",
            value: function disconnectedCallback() {
                this.unbindMinifyingAction();
            }
        },
        {
            // We bind and unbind mouse event listeners upon popping over and minifying,
            // because we anticipate most of the time this widget is minified even when
            // it's attached to the DOM tree.
            key: "popOver",
            value: function popOver() {
                if (!this.containingPane) {
                    return;
                }
                if (!this.angleElement) {
                    this.angleElement = this.shadow.querySelector('.css-angle');
                }
                if (!this.swatchElement) {
                    this.swatchElement = this.shadow.querySelector('devtools-css-angle-swatch');
                }
                if (!this.angleElement || !this.swatchElement) {
                    return;
                }
                this.dispatchEvent(new PopoverToggledEvent(true));
                this.bindMinifyingAction();
                var miniIconBottom = this.swatchElement.getBoundingClientRect().bottom;
                var miniIconLeft = this.swatchElement.getBoundingClientRect().left;
                if (miniIconBottom && miniIconLeft) {
                    // We offset mini icon's X and Y positions with the containing styles
                    // pane's positions because DevTools' root SplitWidget's
                    // insertion-point-sidebar slot, where most of the DevTools content lives,
                    // has an offset of positions, which makes all of its children's DOMRect
                    // positions to have this offset.
                    var offsetTop = this.containingPane.getBoundingClientRect().top;
                    var offsetLeft = this.containingPane.getBoundingClientRect().left;
                    this.popoverStyleTop = "".concat(miniIconBottom - offsetTop, "px");
                    this.popoverStyleLeft = "".concat(miniIconLeft - offsetLeft, "px");
                }
                this.popoverOpen = true;
                this.render();
                this.angleElement.focus();
            }
        },
        {
            key: "addEventListener",
            value: function addEventListener(type, listener, options) {
                _get(_get_prototype_of(CSSAngle.prototype), "addEventListener", this).call(this, type, listener, options);
            }
        },
        {
            key: "minify",
            value: function minify() {
                if (this.popoverOpen === false) {
                    return;
                }
                this.popoverOpen = false;
                this.dispatchEvent(new PopoverToggledEvent(false));
                this.unbindMinifyingAction();
                this.render();
            }
        },
        {
            key: "updateProperty",
            value: function updateProperty(value) {
                this.propertyValue = value;
                this.render();
            }
        },
        {
            key: "updateAngle",
            value: function updateAngle(angle) {
                this.displayedAngle = (0,_CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_4__.roundAngleByUnit)((0,_CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_4__.convertAngleUnit)(angle, this.displayedAngle.unit));
                this.angle = this.displayedAngle;
                this.dispatchEvent(new _InlineEditorUtils_js__WEBPACK_IMPORTED_MODULE_5__.ValueChangedEvent("".concat(this.angle.value).concat(this.angle.unit)));
            }
        },
        {
            key: "displayNextUnit",
            value: function displayNextUnit() {
                var nextUnit = (0,_CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_4__.getNextUnit)(this.displayedAngle.unit);
                this.displayedAngle = (0,_CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_4__.roundAngleByUnit)((0,_CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_4__.convertAngleUnit)(this.angle, nextUnit));
                this.dispatchEvent(new UnitChangedEvent("".concat(this.displayedAngle.value).concat(this.displayedAngle.unit)));
            }
        },
        {
            key: "bindMinifyingAction",
            value: function bindMinifyingAction() {
                document.addEventListener('mousedown', this.onMinifyingAction);
                if (this.containingPane) {
                    this.containingPane.addEventListener('scroll', this.onMinifyingAction);
                }
            }
        },
        {
            key: "unbindMinifyingAction",
            value: function unbindMinifyingAction() {
                document.removeEventListener('mousedown', this.onMinifyingAction);
                if (this.containingPane) {
                    this.containingPane.removeEventListener('scroll', this.onMinifyingAction);
                }
            }
        },
        {
            key: "onMiniIconClick",
            value: function onMiniIconClick(event) {
                event.stopPropagation();
                if (event.shiftKey && !this.popoverOpen) {
                    this.displayNextUnit();
                    return;
                }
                this.popoverOpen ? this.minify() : this.popOver();
            }
        },
        {
            // Fix that the previous text will be selected when double-clicking the angle icon
            key: "consume",
            value: function consume(event) {
                event.stopPropagation();
            }
        },
        {
            key: "onKeydown",
            value: function onKeydown(event) {
                if (!this.popoverOpen) {
                    return;
                }
                switch(event.key){
                    case 'Escape':
                        event.stopPropagation();
                        this.minify();
                        this.blur();
                        break;
                    case 'ArrowUp':
                    case 'ArrowDown':
                        {
                            var newAngle = (0,_CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_4__.getNewAngleFromEvent)(this.angle, event);
                            if (newAngle) {
                                this.updateAngle(newAngle);
                            }
                            event.preventDefault();
                            break;
                        }
                }
            }
        },
        {
            key: "render",
            value: function render1() {
                // Disabled until https://crbug.com/1079231 is fixed.
                // clang-format off
                render(html(_templateObject(), this.minify, this.onKeydown, _CSSAngleSwatch_js__WEBPACK_IMPORTED_MODULE_3__.CSSAngleSwatch.litTagName, this.onMiniIconClick, this.consume, this.consume, {
                    angle: this.angle
                }, _CSSAngleSwatch_js__WEBPACK_IMPORTED_MODULE_3__.CSSAngleSwatch.litTagName, this.popoverOpen ? this.renderPopover() : null), this.shadow, {
                    host: this
                });
            // clang-format on
            }
        },
        {
            key: "renderPopover",
            value: function renderPopover() {
                var _this = this;
                var contextualBackground = '';
                if (this.propertyValue && !this.propertyValue.match(/url\(.*\)/i)) {
                    contextualBackground = this.propertyValue;
                }
                // Disabled until https://crbug.com/1079231 is fixed.
                // clang-format off
                return html(_templateObject1(), _CSSAngleEditor_js__WEBPACK_IMPORTED_MODULE_2__.CSSAngleEditor.litTagName, styleMap({
                    top: this.popoverStyleTop,
                    left: this.popoverStyleLeft
                }), {
                    angle: this.angle,
                    onAngleUpdate: function(angle) {
                        _this.updateAngle(angle);
                    },
                    background: contextualBackground
                }, _CSSAngleEditor_js__WEBPACK_IMPORTED_MODULE_2__.CSSAngleEditor.litTagName);
            // clang-format on
            }
        }
    ]);
    return CSSAngle;
}(_wrap_native_super(HTMLElement));
_define_property(CSSAngle, "litTagName", _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal(_templateObject2()));
customElements.define('devtools-css-angle', CSSAngle); //# sourceMappingURL=CSSAngle.js.map


}),
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
"./ui/legacy/components/inline_editor/InlineEditorUtils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ValueChangedEvent: function() { return ValueChangedEvent; }
});
// Copyright 2021 The Chromium Authors. All rights reserved.
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
var ValueChangedEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(ValueChangedEvent, Event1);
    var _super = _create_super(ValueChangedEvent);
    function ValueChangedEvent(value) {
        _class_call_check(this, ValueChangedEvent);
        var _this;
        _this = _super.call(this, ValueChangedEvent.eventName, {});
        _define_property(_assert_this_initialized(_this), "data", void 0);
        _this.data = {
            value: value
        };
        return _this;
    }
    return ValueChangedEvent;
} //# sourceMappingURL=InlineEditorUtils.js.map
(_wrap_native_super(Event));
_define_property(ValueChangedEvent, "eventName", 'valuechanged');


}),
"./ui/legacy/components/inline_editor/cssAngle.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.css-angle {\n  display: inline-block;\n  position: relative;\n  outline: none;\n}\n\ndevtools-css-angle-swatch {\n  display: inline-block;\n  margin-right: 2px;\n  user-select: none;\n}\n\ndevtools-css-angle-editor {\n  --override-dial-color: var(--sys-color-neutral-outline);\n\n  position: fixed;\n  z-index: 2;\n}\n\n.preview {\n  display: inline-block;\n}\n\n/*# sourceURL=cssAngle.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


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