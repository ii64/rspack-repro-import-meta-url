"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_expandable_list_ExpandableList_js"], {
"./ui/components/expandable_list/ExpandableList.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ExpandableList: function() { return ExpandableList; }
});
/* harmony import */var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _expandableList_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expandableList.css.js */ "./ui/components/expandable_list/expandableList.css.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
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
        "devtools-expandable-list"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n              <button title='",
        "' aria-label='",
        "' aria-expanded=",
        " @click=",
        ' class="arrow-icon-button">\n                <span class="arrow-icon ',
        '"\n                jslog=',
        "></span>\n              </button>\n            "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n            ",
        "\n          "
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        '\n      <div class="expandable-list-container">\n        <div>\n          ',
        '\n        </div>\n        <div class="expandable-list-items">\n          ',
        "\n        </div>\n      </div>\n    "
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}



var _shadow = /*#__PURE__*/ new WeakMap(), _expanded = /*#__PURE__*/ new WeakMap(), _rows = /*#__PURE__*/ new WeakMap(), _title = /*#__PURE__*/ new WeakMap(), _onArrowClick = /*#__PURE__*/ new WeakSet(), _render = /*#__PURE__*/ new WeakSet();
var ExpandableList = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(ExpandableList, HTMLElement1);
    var _super = _create_super(ExpandableList);
    function ExpandableList() {
        _class_call_check(this, ExpandableList);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _onArrowClick);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _expanded, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _rows, {
            writable: true,
            value: []
        });
        _class_private_field_init(_assert_this_initialized(_this), _title, {
            writable: true,
            value: void 0
        });
        return _this;
    }
    _create_class(ExpandableList, [
        {
            key: "data",
            set: function set(data) {
                _class_private_field_set(this, _rows, data.rows);
                _class_private_field_set(this, _title, data.title);
                _class_private_method_get(this, _render, render).call(this);
            }
        },
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _expandableList_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]
                ];
            }
        }
    ]);
    return ExpandableList;
}(_wrap_native_super(HTMLElement));
_define_property(ExpandableList, "litTagName", _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal(_templateObject()));
function onArrowClick() {
    _class_private_field_set(this, _expanded, !_class_private_field_get(this, _expanded));
    _class_private_method_get(this, _render, render).call(this);
}
function render() {
    var _this = this;
    if (_class_private_field_get(this, _rows).length < 1) {
        return;
    }
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html(_templateObject3(), _class_private_field_get(this, _rows).length > 1 ? _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html(_templateObject1(), _class_private_field_get(this, _title), _class_private_field_get(this, _title), _class_private_field_get(this, _expanded) ? 'true' : 'false', function() {
        return _class_private_method_get(_this, _onArrowClick, onArrowClick).call(_this);
    }, _class_private_field_get(this, _expanded) ? 'expanded' : '', _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.expand().track({
        click: true
    })) : _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing, _class_private_field_get(this, _rows).filter(function(_, index) {
        return _class_private_field_get(_this, _expanded) || index === 0;
    }).map(function(row) {
        return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html(_templateObject2(), row);
    })), _class_private_field_get(this, _shadow), {
        host: this
    });
// clang-format on
}
customElements.define('devtools-expandable-list', ExpandableList); //# sourceMappingURL=ExpandableList.js.map


}),
"./ui/components/expandable_list/expandableList.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  overflow: hidden;\n}\n\ndiv {\n  line-height: 1.7em;\n}\n\n.arrow-icon-button {\n  cursor: pointer;\n  padding: 1px 0;\n  border: none;\n  background: none;\n  margin-right: 2px;\n}\n\n.arrow-icon {\n  display: inline-block;\n  mask-image: var(--image-file-triangle-right);\n  background-color: var(--icon-default);\n  margin-top: 2px;\n  height: 14px;\n  width: 14px;\n  transition: transform 200ms;\n}\n\n.arrow-icon.expanded {\n  transform: rotate(90deg);\n}\n\n.expandable-list-container {\n  display: flex;\n  margin-top: 4px;\n}\n\n.expandable-list-items {\n  overflow: hidden;\n}\n\n.link,\n.devtools-link {\n  color: var(--sys-color-primary);\n  text-decoration: underline;\n  cursor: pointer;\n  outline-offset: 2px;\n}\n\nbutton.link {\n  border: none;\n  background: none;\n  font-family: inherit;\n  font-size: inherit;\n}\n\n.text-ellipsis {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n/*# sourceURL=expandableList.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);