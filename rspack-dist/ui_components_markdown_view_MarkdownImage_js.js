"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_markdown_view_MarkdownImage_js"], {
"./ui/components/markdown_view/MarkdownImage.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MarkdownImage: function() { return MarkdownImage; }
});
/* harmony import */var _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _markdownImage_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./markdownImage.css.js */ "./ui/components/markdown_view/markdownImage.css.js");
/* harmony import */var _MarkdownImagesMap_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MarkdownImagesMap.js */ "./ui/components/markdown_view/MarkdownImagesMap.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
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
        "devtools-markdown-image"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        ""
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n      <",
        " .data=",
        "></",
        ">\n    "
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        ""
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        '\n      <img class="markdown-image" src=',
        " alt=",
        " width=",
        " height=",
        "/>\n    "
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}




var _shadow = /*#__PURE__*/ new WeakMap(), _imageData = /*#__PURE__*/ new WeakMap(), _imageTitle = /*#__PURE__*/ new WeakMap(), _getIconComponent = /*#__PURE__*/ new WeakSet(), _getImageComponent = /*#__PURE__*/ new WeakSet(), _render = /*#__PURE__*/ new WeakSet();
/**
 * Component to render images from parsed markdown.
 * Parsed images from markdown are not directly rendered, instead they have to be added to the MarkdownImagesMap.ts.
 * This makes sure that all icons/images are accounted for in markdown.
 */ var MarkdownImage = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(MarkdownImage, HTMLElement1);
    var _super = _create_super(MarkdownImage);
    function MarkdownImage() {
        _class_call_check(this, MarkdownImage);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _getIconComponent);
        _class_private_method_init(_assert_this_initialized(_this), _getImageComponent);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _imageData, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _imageTitle, {
            writable: true,
            value: void 0
        });
        return _this;
    }
    _create_class(MarkdownImage, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _markdownImage_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]
                ];
            }
        },
        {
            key: "data",
            set: function set(data) {
                var key = data.key, title = data.title;
                var markdownImage = (0,_MarkdownImagesMap_js__WEBPACK_IMPORTED_MODULE_3__.getMarkdownImage)(key);
                _class_private_field_set(this, _imageData, markdownImage);
                _class_private_field_set(this, _imageTitle, title);
                _class_private_method_get(this, _render, render).call(this);
            }
        }
    ]);
    return MarkdownImage;
}(_wrap_native_super(HTMLElement));
_define_property(MarkdownImage, "litTagName", _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal(_templateObject()));
function getIconComponent() {
    if (!_class_private_field_get(this, _imageData)) {
        return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html(_templateObject1());
    }
    var _$_class_private_field_get = _class_private_field_get(this, _imageData), src = _$_class_private_field_get.src, color = _$_class_private_field_get.color, _class_private_field_get_width = _$_class_private_field_get.width, width = _class_private_field_get_width === void 0 ? '100%' : _class_private_field_get_width, _class_private_field_get_height = _$_class_private_field_get.height, height = _class_private_field_get_height === void 0 ? '100%' : _class_private_field_get_height;
    return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html(_templateObject2(), _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.Icon.litTagName, {
        iconPath: src,
        color: color,
        width: width,
        height: height
    }, _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.Icon.litTagName);
}
function getImageComponent() {
    if (!_class_private_field_get(this, _imageData)) {
        return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html(_templateObject3());
    }
    var _$_class_private_field_get = _class_private_field_get(this, _imageData), src = _$_class_private_field_get.src, _class_private_field_get_width = _$_class_private_field_get.width, width = _class_private_field_get_width === void 0 ? '100%' : _class_private_field_get_width, _class_private_field_get_height = _$_class_private_field_get.height, height = _class_private_field_get_height === void 0 ? '100%' : _class_private_field_get_height;
    return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html(_templateObject4(), src, _class_private_field_get(this, _imageTitle), width, height);
}
function render() {
    if (!_class_private_field_get(this, _imageData)) {
        return;
    }
    var isIcon = _class_private_field_get(this, _imageData).isIcon;
    var imageComponent = isIcon ? _class_private_method_get(this, _getIconComponent, getIconComponent).call(this) : _class_private_method_get(this, _getImageComponent, getImageComponent).call(this);
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.render(imageComponent, _class_private_field_get(this, _shadow), {
        host: this
    });
}
customElements.define('devtools-markdown-image', MarkdownImage); //# sourceMappingURL=MarkdownImage.js.map


}),
"./ui/components/markdown_view/MarkdownImagesMap.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getMarkdownImage: function() { return getMarkdownImage; },
  markdownImages: function() { return markdownImages; }
});
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * src for image is relative url for image location.
 * @example icon
 * [
 *   'feedbackIcon',
 *   {
 *     src: 'Images/review.svg',
 *     isIcon: true,
 *     width: '20px',
 *     height: '20px',
 *     color: 'var(--icon-disabled)',
 *   },
 * ]
 *
*/ // NOTE: This is only exported for tests, and it should not be
// imported in any component, instead add image data in map and
// use getMarkdownImage to get the appropriate image data.
var markdownImages = new Map([]);
var getMarkdownImage = function(key) {
    var image = markdownImages.get(key);
    if (!image) {
        throw new Error("Markdown image with key '".concat(key, "' is not available, please check MarkdownImagesMap.ts"));
    }
    return image;
}; //# sourceMappingURL=MarkdownImagesMap.js.map


}),
"./ui/components/markdown_view/markdownImage.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.markdown-image {\n  display: block;\n}\n\n/*# sourceURL=markdownImage.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);